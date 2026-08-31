/**
 * SendGrid mete el motivo real del rechazo en `response.body.errors`. Si se
 * loguea el error pelado, en Vercel queda como `[object Object]` y no se puede
 * diagnosticar nada. Esto lo desarma y deja un log accionable.
 */
type SendGridError = {
  code?: number
  message?: string
  response?: {
    body?: {
      errors?: { message?: string; field?: string; help?: string }[]
    }
  }
}

export function loguearErrorSendGrid(
  origen: string,
  error: unknown,
  contexto: { from?: string; to?: string }
) {
  const e = error as SendGridError
  const errores = e.response?.body?.errors ?? []

  console.error(`[${origen}] SendGrid rechazó el envío`, {
    code: e.code,
    message: e.message,
    from: contexto.from,
    to: contexto.to,
    errores: errores.map((x) => ({ campo: x.field, mensaje: x.message, ayuda: x.help })),
  })

  // De lejos la causa más común: el remitente no está verificado.
  const texto = errores.map((x) => x.message ?? "").join(" ").toLowerCase()
  if (texto.includes("sender identity") || texto.includes("verified sender")) {
    console.error(
      `[${origen}] El remitente ${contexto.from} no está verificado en SendGrid. ` +
        "Se resuelve en Settings → Sender Authentication: autenticar el dominio " +
        "o verificar esa casilla."
    )
  }
  if (e.code === 401) {
    console.error(`[${origen}] SENDGRID_API_KEY inválida o revocada.`)
  }
  if (e.code === 403 && !texto.includes("sender")) {
    console.error(
      `[${origen}] 403 sin mención al remitente: revisar que la API key tenga ` +
        "permiso de Mail Send, y que la cuenta no esté suspendida o sin crédito."
    )
  }
}
