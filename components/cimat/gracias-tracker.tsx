"use client"

import { useEffect } from "react"
import { track } from "./track"

/**
 * Flag que deja el formulario al enviar con éxito. Vive en sessionStorage: la
 * página de gracias lo consume y recién ahí dispara la conversión. Sin el
 * flag —URL tipeada, recarga, botón atrás, link compartido, bot del honeypot—
 * no hay evento.
 */
export const LEAD_FLAG = "cimat_lead_enviado"

export function marcarLeadEnviado() {
  try {
    window.sessionStorage.setItem(LEAD_FLAG, "1")
  } catch {
    // Sin storage (modo privado restringido) la conversión se pierde en esta
    // página, pero `form_submit` ya salió con el envío.
  }
}

/** Registra la conversión al llegar a /cimat/gracias, una sola vez por envío. */
export function GraciasTracker() {
  useEffect(() => {
    let enviado = false
    try {
      enviado = window.sessionStorage.getItem(LEAD_FLAG) === "1"
      if (enviado) window.sessionStorage.removeItem(LEAD_FLAG)
    } catch {
      enviado = false
    }
    if (enviado) track("lead_conversion", { page: "/cimat/gracias" })
  }, [])
  return null
}
