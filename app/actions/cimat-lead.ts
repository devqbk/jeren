"use server"

import sgMail from "@sendgrid/mail"
import { INTERESES } from "@/lib/cimat-content"

export type CimatLeadState = {
  /**
   * `silent` es el bot que cayó en el honeypot: para él la pantalla se comporta
   * como un éxito, pero no dispara la conversión ni ensucia el modelo de puja.
   */
  status: "idle" | "success" | "silent" | "error"
  message: string
  /** Errores por campo, para mostrarlos debajo del input y no borrar lo cargado. */
  errors?: Record<string, string>
}

/** Campos ocultos de atribución. Viajan con el lead para saber de dónde vino. */
const ATRIBUCION = [
  "page_url",
  "cta_location",
  "product_line",
  "service_interest",
  "industry",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
  "device_type",
  "referrer",
] as const

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY not set")
    return false
  }
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    }
  )
  const data = await response.json()
  return data.success === true
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function sendCimatLead(
  _prevState: CimatLeadState,
  formData: FormData
): Promise<CimatLeadState> {
  const get = (k: string) => ((formData.get(k) as string) ?? "").trim()

  const interes = get("interes")
  const nombre = get("nombre")
  const empresa = get("empresa")
  const email = get("email")
  const telefono = get("telefono")
  const aplicacion = get("aplicacion")
  // Honeypot: los bots completan lo que no ven.
  const trampa = get("website")

  const errors: Record<string, string> = {}
  if (!interes) errors.interes = "Elegí qué información necesitás."
  else if (!INTERESES.some((i) => i.value === interes))
    errors.interes = "Elegí una opción de la lista."
  if (!nombre) errors.nombre = "Escribí tu nombre y apellido."
  if (!empresa) errors.empresa = "Escribí el nombre de tu empresa."
  if (!email) errors.email = "Escribí tu email corporativo."
  else if (!EMAIL_RE.test(email)) errors.email = "Ese email no parece válido."

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisá los campos marcados.",
      errors,
    }
  }

  if (trampa) {
    // No le decimos al bot que lo detectamos, pero no lo contamos como lead.
    return { status: "silent", message: "" }
  }

  const turnstileToken = get("cf-turnstile-response")
  if (process.env.TURNSTILE_SECRET_KEY) {
    if (!turnstileToken) {
      return {
        status: "error",
        message: "Completá la verificación de seguridad y volvé a enviar.",
      }
    }
    if (!(await verifyTurnstile(turnstileToken))) {
      return {
        status: "error",
        message: "La verificación de seguridad falló. Probá de nuevo.",
      }
    }
  }

  const apiKey = process.env.SENDGRID_API_KEY
  const fromEmail = process.env.CONTACT_FROM_EMAIL
  const toEmails = process.env.CONTACT_TO_EMAILS

  if (!apiKey || !fromEmail || !toEmails) {
    console.error("SendGrid env vars missing")
    return {
      status: "error",
      message:
        "No pudimos enviar la consulta por un problema de configuración. Escribinos a info@jeren.com o al (+5411) 4788-0566.",
    }
  }

  const interesLabel =
    INTERESES.find((i) => i.value === interes)?.label ?? interes

  const filas: [string, string][] = [
    ["Necesidad", interesLabel],
    ["Nombre", nombre],
    ["Empresa", empresa],
    ["Email", email],
    ["Teléfono / WhatsApp", telefono || "—"],
    ["Aplicación o rotor", aplicacion || "—"],
  ]

  const atribucion = ATRIBUCION.map((k) => [k, get(k)] as [string, string]).filter(
    ([, v]) => v !== ""
  )

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
      <div style="background-color: #0A2540; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Consulta CIMAT — jeren.com/cimat</h1>
        <p style="color: #9fb4c9; margin: 6px 0 0; font-size: 13px;">${esc(interesLabel)}</p>
      </div>
      <div style="background-color: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          ${filas
            .map(
              ([k, v]) => `<tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 170px; vertical-align: top;">${esc(k)}</td>
            <td style="padding: 8px 0; color: #4b5563;">${esc(v)}</td>
          </tr>`
            )
            .join("")}
        </table>
      </div>
      ${
        atribucion.length > 0
          ? `<div style="background-color: #f3f4f6; padding: 16px 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <p style="margin: 0 0 8px; font-size: 11px; text-transform: uppercase; letter-spacing: .08em; color: #6b7280;">Atribución</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 12px; color: #6b7280;">
          ${atribucion
            .map(
              ([k, v]) =>
                `<tr><td style="padding: 3px 0; width: 170px;">${esc(k)}</td><td style="padding: 3px 0;">${esc(v)}</td></tr>`
            )
            .join("")}
        </table>
      </div>`
          : ""
      }
    </div>
  `

  sgMail.setApiKey(apiKey)

  try {
    await sgMail.send({
      to: toEmails.split(",").map((e) => e.trim()),
      from: { email: fromEmail, name: "Landing CIMAT — JEREN" },
      replyTo: { email, name: nombre },
      subject: `[CIMAT] ${interesLabel} — ${empresa}`,
      html,
    })
    return { status: "success", message: "" }
  } catch (error: unknown) {
    // SendGrid mete el motivo real en response.body.errors. Sin desarmarlo, el
    // log queda en "[object Object]" y no se puede diagnosticar nada.
    const detalle = error as {
      code?: number
      message?: string
      response?: { body?: { errors?: { message?: string; field?: string; help?: string }[] } }
    }
    const errores = detalle.response?.body?.errors ?? []
    console.error("[cimat-lead] SendGrid rechazó el envío", {
      code: detalle.code,
      message: detalle.message,
      from: fromEmail,
      to: toEmails,
      errores: errores.map((e) => ({ campo: e.field, mensaje: e.message, ayuda: e.help })),
    })

    // 403 con "Sender Identity" es, de lejos, la causa más común: el remitente
    // no está verificado en SendGrid. Se le dice al usuario que use otro canal.
    const remitenteSinVerificar = errores.some((e) =>
      (e.message ?? "").toLowerCase().includes("sender identity")
    )
    if (remitenteSinVerificar) {
      console.error(
        "[cimat-lead] El remitente %s no está verificado en SendGrid. " +
        "Verificar el dominio o la casilla en Settings → Sender Authentication.",
        fromEmail
      )
    }

    return {
      status: "error",
      message:
        "Hubo un problema al enviar la consulta. Probá de nuevo o escribinos a info@jeren.com.",
    }
  }
}
