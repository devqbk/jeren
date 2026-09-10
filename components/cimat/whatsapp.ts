"use client"

import { useEffect, useState } from "react"
import { WHATSAPP_MENSAJE, WHATSAPP_NUMERO, WHATSAPP_URL } from "@/lib/cimat-content"

/**
 * Href de WhatsApp con el origen de la visita adentro del mensaje.
 *
 * Google Ads no ve un contacto por WhatsApp: el clic sale del sitio y la
 * conversación arranca en el teléfono de JEREN sin gclid ni UTM. Lo único que
 * cruza esa frontera es el texto prellenado, así que ahí va una referencia
 * corta ("ref. G-0910") que la persona que atiende puede leer en el chat.
 *
 * G = vino de un anuncio de Google (gclid / gbraid / wbraid). Otras fuentes
 * usan las primeras letras de utm_source. Sin origen, el mensaje queda igual
 * que siempre.
 */

const CLAVE = "cimat_origen"

function codigoDesdeUrl(): string {
  const qs = new URLSearchParams(window.location.search)
  const fecha = new Date()
  const mmdd =
    String(fecha.getMonth() + 1).padStart(2, "0") + String(fecha.getDate()).padStart(2, "0")
  if (qs.get("gclid") || qs.get("gbraid") || qs.get("wbraid")) return `G-${mmdd}`
  const fuente = qs.get("utm_source")
  if (fuente) return `${fuente.replace(/[^a-z0-9]/gi, "").slice(0, 3).toUpperCase()}-${mmdd}`
  return ""
}

/** Código de origen de la visita. Se fija al entrar y sobrevive la navegación interna. */
export function origenVisita(): string {
  if (typeof window === "undefined") return ""
  try {
    const nuevo = codigoDesdeUrl()
    if (nuevo) {
      window.sessionStorage.setItem(CLAVE, nuevo)
      return nuevo
    }
    return window.sessionStorage.getItem(CLAVE) ?? ""
  } catch {
    return codigoDesdeUrl()
  }
}

export function whatsappHref(origen: string): string {
  if (!origen) return WHATSAPP_URL
  const texto = `${WHATSAPP_MENSAJE} (ref. ${origen})`
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`
}

/** Se resuelve recién en el cliente: en el server no hay URL ni sessionStorage. */
export function useWhatsappHref(): string {
  const [href, setHref] = useState(WHATSAPP_URL)
  useEffect(() => {
    setHref(whatsappHref(origenVisita()))
  }, [])
  return href
}
