"use client"

import type { PaisValue } from "@/lib/cimat-content"

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
 * Prefijo internacional por país del formulario. "Otro" no tiene prefijo: sin
 * uno confiable, el teléfono no se manda.
 */
const PREFIJO: Partial<Record<PaisValue, string>> = {
  AR: "54",
  CL: "56",
  UY: "598",
  PY: "595",
  CO: "57",
  PE: "51",
}

/**
 * Google espera formato E.164: `+`, código de país y el resto sin separadores.
 *
 * Antes se asumía +54 para todo: un celular colombiano de 10 dígitos entraba a
 * Google como "+54300…", un dato falso. Ahora el prefijo sale del país que la
 * persona eligió en el formulario. Si escribió el número en formato
 * internacional (`+` o `00` adelante) se respeta tal cual. Sin país conocido y
 * sin prefijo explícito, se descarta: un teléfono mal formado no mejora la
 * atribución y sí ensucia los datos.
 */
function normalizarTelefono(valor: string, pais: string): string | undefined {
  const crudo = valor.trim()
  if (!crudo) return undefined
  let digitos = crudo.replace(/\D/g, "")
  if (!digitos) return undefined

  const internacional = crudo.startsWith("+") || digitos.startsWith("00")
  if (internacional) {
    if (digitos.startsWith("00")) digitos = digitos.slice(2)
    // Código de país (1 a 3) + número nacional (al menos 7).
    if (digitos.length < 10 || digitos.length > 15) return undefined
    return "+" + digitos
  }

  const prefijo = PREFIJO[pais as PaisValue]
  if (!prefijo) return undefined

  // Un 0 inicial es el prefijo interurbano local (AR, UY, PY): no va en E.164.
  if (digitos.startsWith("0")) digitos = digitos.slice(1)

  // Si ya viene con el código de país y una longitud verosímil, no se duplica.
  const yaConPrefijo =
    digitos.startsWith(prefijo) && digitos.length >= prefijo.length + 8
  if (!yaConPrefijo) digitos = prefijo + digitos

  // Prefijo + número nacional de 8 a 12 dígitos (AR con el 9 de celular: 11).
  const nacional = digitos.length - prefijo.length
  if (nacional < 8 || nacional > 12 || digitos.length > 15) return undefined
  return "+" + digitos
}

/** Devuelve solo los campos que se pudieron normalizar. */
export function datosUsuario(email: string, telefono: string, pais = ""): DatosUsuario {
  const datos: DatosUsuario = {}
  const mail = normalizarEmail(email)
  if (mail) datos.email = mail
  const tel = normalizarTelefono(telefono, pais)
  if (tel) datos.phone_number = tel
  return datos
}
