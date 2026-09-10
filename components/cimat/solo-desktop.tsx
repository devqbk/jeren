"use client"

import { useEffect, useState, type ReactNode } from "react"

/**
 * Monta a sus hijos solo en desktop.
 *
 * El HTML del servidor los trae (así en desktop no hay salto al hidratar) y
 * el envoltorio los oculta por CSS en mobile; apenas hidrata, en mobile se
 * desmontan del todo. Lo usa el formulario del CTA final: en mobile el único
 * formulario montado es el del hero.
 */
export function SoloDesktop({ children, className }: { children: ReactNode; className?: string }) {
  const [desktop, setDesktop] = useState<boolean | null>(null)

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)")
    const aplicar = () => setDesktop(mq.matches)
    aplicar()
    mq.addEventListener("change", aplicar)
    return () => mq.removeEventListener("change", aplicar)
  }, [])

  if (desktop === false) return null
  return <div className={className}>{children}</div>
}
