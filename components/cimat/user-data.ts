"use client"

/**
 * Datos del usuario hasheados para las conversiones mejoradas de Google Ads.
 *
 * Por qué existe: el ciclo de venta es de meses y el `gclid` se pierde en buena
 * parte de los casos —el visitante vuelve por otro canal, borra la sesión,
 * cambia de dispositivo—. Con el email hasheado, Google puede reconciliar la
 * conversión igual. Sin esto se pierde cerca de la mitad de la atribución.
 *
 * El hash se hace acá, en el navegador: al `dataLayer` nunca llega el email en
 * claro. Google espera SHA-256 en hexadecimal, sobre el valor normalizado.
 */

export type DatosHasheados = {
  sha256_email_address?: string
  sha256_phone_number?: string
}

async function sha256(valor: string): Promise<string | undefined> {
  // `crypto.subtle` solo existe en contexto seguro: HTTPS o localhost.
  if (typeof crypto === "undefined" || !crypto.subtle) return undefined
  try {
    const bytes = new TextEncoder().encode(valor)
    const digest = await crypto.subtle.digest("SHA-256", bytes)
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
  } catch {
    return undefined
  }
}

/** Google exige minúsculas y sin espacios alrededor. */
function normalizarEmail(valor: string): string | undefined {
  const limpio = valor.trim().toLowerCase()
  return limpio.includes("@") ? limpio : undefined
}

/**
 * Google exige formato E.164: `+` y el país por delante, sin separadores.
 *
 * Los teléfonos argentinos se escriben de mil formas —con 0, con 15, con
 * paréntesis, con guiones—. Se normaliza lo que se puede y, si el resultado no
 * tiene una longitud verosímil, se descarta: un teléfono mal formado no mejora
 * la atribución y sí ensucia los datos.
 */
function normalizarTelefono(valor: string): string | undefined {
  let digitos = valor.replace(/\D/g, "")
  if (!digitos) return undefined

  // 00 delante es prefijo internacional escrito a la vieja usanza.
  if (digitos.startsWith("00")) digitos = digitos.slice(2)
  // Un 0 inicial es el prefijo interurbano argentino: no va en E.164.
  else if (digitos.startsWith("0")) digitos = digitos.slice(1)

  if (!digitos.startsWith("54")) {
    // Sin código de país asumimos Argentina, que es de dónde viene el tráfico.
    digitos = "54" + digitos
  }

  // 54 + área + número. Menos de 12 dígitos es un número incompleto.
  if (digitos.length < 12 || digitos.length > 15) return undefined
  return "+" + digitos
}

/** Devuelve solo los campos que se pudieron normalizar y hashear. */
export async function hashearDatos(
  email: string,
  telefono: string
): Promise<DatosHasheados> {
  const datos: DatosHasheados = {}

  const mail = normalizarEmail(email)
  if (mail) {
    const hash = await sha256(mail)
    if (hash) datos.sha256_email_address = hash
  }

  const tel = normalizarTelefono(telefono)
  if (tel) {
    const hash = await sha256(tel)
    if (hash) datos.sha256_phone_number = hash
  }

  return datos
}
