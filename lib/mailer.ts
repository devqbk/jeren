/**
 * Envío de mail transaccional por Resend.
 *
 * Se usa la API REST con `fetch` en vez del SDK a propósito: es un solo POST y
 * así no se suma una dependencia. El lockfile desactualizado ya dejó tres meses
 * de deploys fallando, y cada paquete nuevo es otra oportunidad de que pase.
 *
 * Reemplaza a SendGrid, que se quedó sin crédito: el plan gratuito son 100
 * mails por día y la cuenta estaba compartida con otro proyecto.
 */

const ENDPOINT = "https://api.resend.com/emails"

export type ResultadoMail = { ok: true } | { ok: false; codigo: string }

type Opciones = {
  /** Nombre visible del remitente. */
  nombre: string
  asunto: string
  html: string
  /** A dónde contesta el destinatario cuando aprieta Responder. */
  responderA?: string
  /** Para prefijar los logs y saber qué formulario falló. */
  origen: string
}

/**
 * Dirección desde la que sale el mail.
 *
 * Resend solo deja mandar desde un dominio verificado. Mientras `jeren.com` no
 * lo esté, hay que dejar `MAIL_FROM` sin definir y usar el dominio de pruebas
 * de Resend — que únicamente entrega a la casilla dueña de la cuenta.
 */
function remitente(nombre: string): string {
  const direccion = process.env.MAIL_FROM ?? "onboarding@resend.dev"
  return `${nombre} <${direccion}>`
}

export async function enviarMail(opciones: Opciones): Promise<ResultadoMail> {
  const apiKey = process.env.RESEND_API_KEY
  const destinatarios = process.env.CONTACT_TO_EMAILS

  if (!apiKey || !destinatarios) {
    console.error(
      `[${opciones.origen}] Faltan variables de entorno`,
      { RESEND_API_KEY: Boolean(apiKey), CONTACT_TO_EMAILS: Boolean(destinatarios) }
    )
    return { ok: false, codigo: "CONFIG-MAIL-FALTAN-VARIABLES" }
  }

  const cuerpo = {
    from: remitente(opciones.nombre),
    to: destinatarios.split(",").map((x) => x.trim()).filter(Boolean),
    subject: opciones.asunto,
    html: opciones.html,
    ...(opciones.responderA ? { reply_to: opciones.responderA } : {}),
  }

  let respuesta: Response
  try {
    respuesta = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cuerpo),
    })
  } catch (error) {
    console.error(`[${opciones.origen}] No se pudo alcanzar Resend`, error)
    return { ok: false, codigo: "MAIL-SIN-RED" }
  }

  if (respuesta.ok) return { ok: true }

  const detalle = await respuesta.text()
  console.error(`[${opciones.origen}] Resend rechazó el envío`, {
    status: respuesta.status,
    from: cuerpo.from,
    to: cuerpo.to,
    detalle: detalle.slice(0, 500),
  })

  return { ok: false, codigo: codigoResend(respuesta.status, detalle) }
}

/** Código corto para mostrar en pantalla. No expone nada sensible. */
function codigoResend(status: number, detalle: string): string {
  const texto = detalle.toLowerCase()

  if (status === 401 || status === 403) return "RS-401-API-KEY"
  if (status === 429) return "RS-429-LIMITE"
  if (texto.includes("domain is not verified") || texto.includes("not verified")) {
    return "RS-DOMINIO-SIN-VERIFICAR"
  }
  // El dominio de pruebas de Resend solo entrega a la casilla dueña de la cuenta.
  if (texto.includes("you can only send testing emails to your own email")) {
    return "RS-SOLO-A-TU-CASILLA"
  }
  if (status === 422) return "RS-422-DATOS-INVALIDOS"
  return `RS-${status}`
}
