"use client"

/**
 * Capa fina de analítica. Empuja al dataLayer si existe (GTM) y no rompe nada
 * si todavía no está instalado — que es el estado actual del sitio.
 */
type Payload = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: Payload[]
  }
}

export function track(event: string, payload: Payload = {}) {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, ...payload })
}

/** Evento que dispara cada CTA principal, con el contexto que pide la medición. */
export function trackCta(location: string, interes?: string) {
  track("cta_click", {
    cta_text: "Solicitar más información",
    cta_location: location,
    service_interest: interes,
    page: window.location.pathname,
    device_type: window.innerWidth < 768 ? "mobile" : "desktop",
  })
}

/** El CTA y el formulario se hablan por acá: el click preselecciona el interés. */
export const INTERES_EVENT = "cimat:interes"

export function preseleccionarInteres(interes: string, ctaLocation: string) {
  window.dispatchEvent(
    new CustomEvent(INTERES_EVENT, { detail: { interes, ctaLocation } })
  )
}

/**
 * Lleva al formulario del hero y deja el interés cargado. Todos los CTA de la
 * página hacen esto: no hay más de un destino de conversión.
 */
export function irAlFormulario(location: string, interes?: string) {
  trackCta(location, interes)
  preseleccionarInteres(interes ?? "", location)

  const destino = document.getElementById("solicitar")
  if (!destino) {
    // Página sin formulario propio (gracias): se va al de la landing.
    window.location.href = "/cimat#solicitar"
    return true
  }

  const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  destino.scrollIntoView({ behavior: suave ? "smooth" : "auto", block: "start" })
  return true
}
