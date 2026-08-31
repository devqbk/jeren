/**
 * Envío de mail transaccional. Soporta Resend y SendGrid.
 *
 * Cuál se usa lo decide `MAIL_PROVIDER`. Si no está, se elige solo según qué
 * API key esté cargada, con Resend primero. Así se cambia de proveedor sin
 * tocar código: se carga la variable en Vercel y se redeploya.
 *
 * Los dos van por su API REST con `fetch`, sin SDK. Es un solo POST en ambos
 * casos, y el lockfile desactualizado ya dejó tres meses de deploys fallando en
 * silencio: cada dependencia nueva es otra oportunidad de repetirlo.
 */

/**
 * Las dos APIs están detrás de Cloudflare, que rechaza los pedidos sin
 * User-Agent con un 403 y el código 1010. El `fetch` de Node no manda ninguno,
 * así que hay que ponerlo a mano o todos los envíos fallan.
 */
const USER_AGENT = "jeren-web/1.0 (+https://www.jeren.com)"

export type Proveedor = "resend" | "sendgrid"

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

/** Qué proveedor usar. Explícito si está, si no el que tenga credenciales. */
export function proveedorActivo(): Proveedor | null {
  const elegido = process.env.MAIL_PROVIDER?.trim().toLowerCase()
  if (elegido === "resend" || elegido === "sendgrid") return elegido
  if (process.env.RESEND_API_KEY) return "resend"
  if (process.env.SENDGRID_API_KEY) return "sendgrid"
  return null
}

/**
 * Dirección desde la que sale el mail.
 *
 * Los dos proveedores exigen un dominio verificado en su panel. Mientras
 * `jeren.com` no lo esté en Resend, dejar `MAIL_FROM` vacío usa el dominio de
 * pruebas, que solo entrega a la casilla dueña de la cuenta.
 */
function direccionRemitente(proveedor: Proveedor): string | null {
  const explicita = process.env.MAIL_FROM?.trim()
  if (explicita) return explicita
  // `CONTACT_FROM_EMAIL` es como se llamaba cuando solo existía SendGrid.
  const heredada = process.env.CONTACT_FROM_EMAIL?.trim()
  if (heredada) return heredada
  return proveedor === "resend" ? "onboarding@resend.dev" : null
}

function destinatarios(): string[] {
  return (process.env.CONTACT_TO_EMAILS ?? "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean)
}

export async function enviarMail(opciones: Opciones): Promise<ResultadoMail> {
  const proveedor = proveedorActivo()
  const para = destinatarios()
  const desde = proveedor ? direccionRemitente(proveedor) : null

  if (!proveedor || para.length === 0 || !desde) {
    console.error(`[${opciones.origen}] Falta configuración de mail`, {
      proveedor,
      destinatarios: para.length,
      remitente: Boolean(desde),
    })
    return { ok: false, codigo: "CONFIG-MAIL-FALTAN-VARIABLES" }
  }

  try {
    return proveedor === "resend"
      ? await porResend(opciones, desde, para)
      : await porSendgrid(opciones, desde, para)
  } catch (error) {
    console.error(`[${opciones.origen}] No se pudo alcanzar ${proveedor}`, error)
    return { ok: false, codigo: "MAIL-SIN-RED" }
  }
}

// ── Resend ───────────────────────────────────────────────────────────────────

async function porResend(
  opciones: Opciones,
  desde: string,
  para: string[]
): Promise<ResultadoMail> {
  const respuesta = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "User-Agent": USER_AGENT,
    },
    body: JSON.stringify({
      from: `${opciones.nombre} <${desde}>`,
      to: para,
      subject: opciones.asunto,
      html: opciones.html,
      ...(opciones.responderA ? { reply_to: opciones.responderA } : {}),
    }),
  })

  if (respuesta.ok) return { ok: true }

  const detalle = await respuesta.text()
  registrarRechazo(opciones.origen, "resend", respuesta.status, desde, para, detalle)

  const texto = detalle.toLowerCase()
  if (texto.includes("error code: 1010")) return fallo("RS-BLOQUEO-CLOUDFLARE")
  if (respuesta.status === 401) return fallo("RS-401-API-KEY")
  if (respuesta.status === 403) return fallo("RS-403-PERMISOS")
  if (respuesta.status === 429) return fallo("RS-429-LIMITE")
  if (texto.includes("only send testing emails")) return fallo("RS-SOLO-A-TU-CASILLA")
  if (texto.includes("not verified")) return fallo("RS-DOMINIO-SIN-VERIFICAR")
  if (respuesta.status === 422) return fallo("RS-422-DATOS-INVALIDOS")
  return fallo(`RS-${respuesta.status}`)
}

// ── SendGrid ─────────────────────────────────────────────────────────────────

async function porSendgrid(
  opciones: Opciones,
  desde: string,
  para: string[]
): Promise<ResultadoMail> {
  const respuesta = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
      "User-Agent": USER_AGENT,
    },
    body: JSON.stringify({
      personalizations: [{ to: para.map((email) => ({ email })) }],
      from: { email: desde, name: opciones.nombre },
      subject: opciones.asunto,
      content: [{ type: "text/html", value: opciones.html }],
      ...(opciones.responderA ? { reply_to: { email: opciones.responderA } } : {}),
    }),
  })

  if (respuesta.ok) return { ok: true }

  const detalle = await respuesta.text()
  registrarRechazo(opciones.origen, "sendgrid", respuesta.status, desde, para, detalle)

  const texto = detalle.toLowerCase()
  if (texto.includes("error code: 1010")) return fallo("SG-BLOQUEO-CLOUDFLARE")
  if (texto.includes("maximum credits") || texto.includes("credits exceeded")) {
    return fallo("SG-SIN-CREDITO")
  }
  if (texto.includes("sender identity") || texto.includes("verified sender")) {
    return fallo("SG-REMITENTE-SIN-VERIFICAR")
  }
  if (respuesta.status === 401) return fallo("SG-401-API-KEY")
  if (respuesta.status === 403) return fallo("SG-403-PERMISOS")
  return fallo(`SG-${respuesta.status}`)
}

// ── Comunes ──────────────────────────────────────────────────────────────────

function fallo(codigo: string): ResultadoMail {
  return { ok: false, codigo }
}

function registrarRechazo(
  origen: string,
  proveedor: Proveedor,
  status: number,
  desde: string,
  para: string[],
  detalle: string
) {
  console.error(`[${origen}] ${proveedor} rechazó el envío`, {
    status,
    from: desde,
    to: para,
    detalle: detalle.slice(0, 500),
  })
}
