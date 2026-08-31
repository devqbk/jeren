"use client"

import { useEffect, useState } from "react"

/**
 * Punto de relevo del CTA persistente: por debajo de este scroll manda el botón
 * del header; por encima, la barra sticky. Nunca están los dos visibles.
 */
export const RELEVO_SCROLL_PX = 700

export function useScrolledPast(threshold = RELEVO_SCROLL_PX) {
  const [passed, setPassed] = useState(false)

  useEffect(() => {
    const onScroll = () => setPassed(window.scrollY > threshold)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return passed
}
