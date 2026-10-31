"use server"

import { enviarMail } from "@/lib/mailer"

export type CribmasterLeadState = {
  /** `silent`: bot que cayó en el honeypot. Ve la pantalla de éxito, no cuenta. */
  status: "idle" | "success" | "silent" | "error"
  message: string
  errors?: Record<string, string>
  codigo?: string
}

const ATRIBUCION = [
  "page_url",
  "cta_location",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  // Ids de clic de Google Ads: con esto en el mail, la conversión se puede
  // importar offline cuando Fabián califica el lead.
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
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  })
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

export async function sendCribmasterLead(
  _prevState: CribmasterLeadState,
  formData: FormData
): Promise<CribmasterLeadState> {
  const get = (k: string) => ((formData.get(k) as string) ?? "").trim()

  const nombre = get("nombre")
  const empresa = get("empresa")
  const cargo = get("cargo")
  const email = get("email")
  const telefono = get("telefono")
  const operacion = get("operacion")
  const trampa = get("website")

  const errors: Record<string, string> = {}
  if (!nombre) errors.nombre = "Escribí tu nombre y apellido."
  if (!empresa) errors.empresa = "Escribí el nombre de tu empresa."
  if (!email) errors.email = "Escribí tu email."
  else if (!EMAIL_RE.test(email)) errors.email = "Ese email no parece válido."

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Revisá los campos marcados.", errors, codigo: "VALIDACION" }
  }

  if (trampa) return { status: "silent", message: "" }

  const turnstileToken = get("cf-turnstile-response")
  if (process.env.TURNSTILE_SECRET_KEY) {
    if (!turnstileToken) {
      return {
        status: "error",
        message: "Completá la verificación de seguridad y volvé a enviar.",
        codigo: "CF-SIN-TOKEN",
      }
    }
    if (!(await verifyTurnstile(turnstileToken))) {
      return { status: "error", message: "La verificación de seguridad falló. Probá de nuevo.", codigo: "CF-RECHAZADO" }
    }
  }

  const filas: [string, string][] = [
    ["Nombre", nombre],
    ["Empresa", empresa],
    ["Cargo", cargo || "—"],
    ["Email", email],
    ["Teléfono / WhatsApp", telefono || "—"],
    ["Operación", operacion || "—"],
  ]

  const atribucion = ATRIBUCION.map((k) => [k, get(k)] as [string, string]).filter(([, v]) => v !== "")

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
      <div style="background-color: #111111; padding: 24px; border-radius: 8px 8px 0 0; border-bottom: 4px solid #f6b400;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Consulta CribMaster — jeren.com/cribmaster</h1>
        <p style="color: #bdbdbd; margin: 6px 0 0; font-size: 13px;">${esc(empresa)}</p>
      </div>
      <div style="background-color: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          ${filas
            .map(
              ([k, v]) => `<tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 170px; vertical-align: top;">${esc(k)}</td>
            <td style="padding: 8px 0; color: #4b5563; white-space: pre-line;">${esc(v)}</td>
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
            .map(([k, v]) => `<tr><td style="padding: 3px 0; width: 170px;">${esc(k)}</td><td style="padding: 3px 0;">${esc(v)}</td></tr>`)
            .join("")}
        </table>
      </div>`
          : ""
      }
    </div>
  `

  const resultado = await enviarMail({
    origen: "cribmaster-lead",
    nombre: "Landing CribMaster — JEREN",
    asunto: `[CribMaster] ${empresa} — ${nombre}`,
    responderA: email,
    html,
  })

  if (resultado.ok) return { status: "success", message: "" }

  return {
    status: "error",
    message: "Hubo un problema al enviar la consulta. Probá de nuevo o escribinos a info@jeren.com.",
    codigo: resultado.codigo,
  }
}
