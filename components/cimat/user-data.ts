"use client"

/**
 * Datos del usuario para las conversiones mejoradas de Google Ads.
 *
 * Por qué existe: el ciclo de venta es de meses y el `gclid` se pierde en buena
 * parte de los casos —el visitante vuelve por otro canal, borra la sesión,
 * cambia de dispositivo—. Con el email, Google puede reconciliar la conversión
 * igual. Sin esto se pierde cerca de la mitad de la atribución.
 *
 * OJO con el hasheo: la variable "Datos proporcionados por el usuario" de GTM
 * normaliza y hashea ella misma en el navegador. Si le pasáramos un SHA-256 ya
 * calculado, lo hashearía de nuevo y el valor no coincidiría con nada. Por eso
 * acá se manda el valor normalizado en claro y el hash lo hace GTM.
 *
 * El dato no sale del navegador sin hashear: GTM lo transforma antes de
 * enviarlo, y es el propio mail que la persona acaba de escribir en el
 * formulario de esta misma página.
 */

export type DatosUsuario = {
  email?: string
  phone_number?: string
}

/** Google normaliza a minúsculas y sin espacios alrededor. */
function normalizarEmail(valor: string): string | undefined {
  const limpio = valor.trim().toLowerCase()
  return limpio.includes("@") ? limpio : undefined
}

/**
 * Google espera formato E.164: `+`, código de país y el resto sin separadores.
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

/** Devuelve solo los campos que se pudieron normalizar. */
export function datosUsuario(email: string, telefono: string): DatosUsuario {
  const datos: DatosUsuario = {}
  const mail = normalizarEmail(email)
  if (mail) datos.email = mail
  const tel = normalizarTelefono(telefono)
  if (tel) datos.phone_number = tel
  return datos
}
