"use server"

import sgMail from "@sendgrid/mail"
import { loguearErrorSendGrid } from "@/lib/sendgrid-error"

export type ContactFormState = {
  status: "idle" | "success" | "error"
  message: string
}

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

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const nombre = formData.get("nombre") as string
  const email = formData.get("email") as string
  const empresa = formData.get("empresa") as string
  const asunto = formData.get("asunto") as string
  const mensaje = formData.get("mensaje") as string
  const turnstileToken = formData.get("cf-turnstile-response") as string

  // Validación básica server-side
  if (!nombre || !email || !mensaje) {
    return {
      status: "error",
      message: "Por favor completá todos los campos obligatorios.",
    }
  }

  // Validación Turnstile
  if (!turnstileToken) {
    return {
      status: "error",
      message: "Por favor completá la verificación de seguridad.",
    }
  }

  const isHuman = await verifyTurnstile(turnstileToken)
  if (!isHuman) {
    return {
      status: "error",
      message: "La verificación de seguridad falló. Por favor intentá de nuevo.",
    }
  }

  const apiKey = process.env.SENDGRID_API_KEY
  const fromEmail = process.env.CONTACT_FROM_EMAIL
  const toEmails = process.env.CONTACT_TO_EMAILS

  if (!apiKey || !fromEmail || !toEmails) {
    console.error("SendGrid env vars missing")
    return {
      status: "error",
      message: "Error de configuración del servidor. Intentá más tarde.",
    }
  }

  sgMail.setApiKey(apiKey)

  const toList = toEmails.split(",").map((e) => e.trim())

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #0A2540; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Nuevo mensaje desde jeren.com</h1>
      </div>
      <div style="background-color: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 100px;">Nombre:</td>
            <td style="padding: 8px 0; color: #4b5563;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
            <td style="padding: 8px 0; color: #4b5563;">
              <a href="mailto:${email}" style="color: #0A2540;">${email}</a>
            </td>
          </tr>
          ${empresa ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Empresa:</td>
            <td style="padding: 8px 0; color: #4b5563;">${empresa}</td>
          </tr>` : ""}
          ${asunto ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Asunto:</td>
            <td style="padding: 8px 0; color: #4b5563;">${asunto}</td>
          </tr>` : ""}
        </table>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <p style="font-weight: bold; color: #374151; margin-bottom: 8px;">Mensaje:</p>
        <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${mensaje}</p>
      </div>
      <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
        Este mensaje fue enviado desde el formulario de contacto de jeren.com
      </p>
    </div>
  `

  try {
    await sgMail.send({
      to: toList,
      from: {
        email: fromEmail,
        name: "Jeren SRL",
      },
      replyTo: {
        email: email,
        name: nombre,
      },
      subject: asunto || `Consulta de ${nombre} — jeren.com`,
      html: htmlContent,
    })

    return {
      status: "success",
      message: "¡Mensaje enviado! Nos pondremos en contacto a la brevedad.",
    }
  } catch (error: unknown) {
    loguearErrorSendGrid("contacto", error, { from: fromEmail, to: toEmails })
    return {
      status: "error",
      message: "Hubo un problema al enviar el mensaje. Por favor intentá de nuevo o contactanos por teléfono.",
    }
  }
}
