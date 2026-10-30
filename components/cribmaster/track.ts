"use client"

import { track } from "@/components/cimat/track"
import { FORM_ANCHOR } from "@/lib/cribmaster-content"

/**
 * Eventos de la landing CribMaster, con prefijo `cm_`.
 *
 * Los nombres NO se comparten con /cimat (`form_submit`, `lead_conversion`):
 * en GTM esos eventos disparan la etiqueta de conversión de Google Ads de las
 * balanceadoras, y una consulta por CribMaster no es una conversión de esa
 * campaña. Cuando haya pauta propia, se enganchan estos.
 */
export const LEAD_FLAG = "cribmaster_lead_enviado"

export function cmTrack(evento: string, payload: Record<string, string | number | boolean | undefined> = {}) {
  track(`cm_${evento}`, { page: typeof window === "undefined" ? "" : window.location.pathname, ...payload })
}

export function cmTrackCta(location: string) {
  cmTrack("cta_click", {
    cta_location: location,
    device_type: typeof window !== "undefined" && window.innerWidth < 768 ? "mobile" : "desktop",
  })
}

/** Lleva al formulario del hero. Único destino de conversión de la página. */
export function irAlFormulario(location: string): boolean {
  cmTrackCta(location)
  const destino = document.getElementById(FORM_ANCHOR.slice(1))
  if (!destino) {
    window.location.href = `/cribmaster${FORM_ANCHOR}`
    return true
  }
  const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  destino.scrollIntoView({ behavior: suave ? "smooth" : "auto", block: "start" })
  return true
}

export function marcarLeadEnviado() {
  try {
    window.sessionStorage.setItem(LEAD_FLAG, "1")
  } catch {
    // Sin storage se pierde el evento de la página de gracias; `cm_form_submit` ya salió.
  }
}
