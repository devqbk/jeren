"use client"

import { CTA_LABEL, FORM_ANCHOR } from "@/lib/cimat-content"
import { cn } from "@/lib/utils"
import { irAlFormulario } from "./track"

/**
 * CTA único de la landing: siempre el mismo copy, siempre al mismo formulario.
 * Lo único que cambia según el contexto es el interés que deja preseleccionado
 * y la posición que registra en analítica.
 */
const variants = {
  primary:
    "bg-[var(--c-accent)] text-white shadow-sm hover:bg-[var(--c-accent-hover)]",
  outline:
    "border border-[var(--c-line)] bg-[var(--c-paper)] text-[var(--c-ink)] hover:border-[var(--c-ink)]",
  onDark:
    "border border-white/25 bg-transparent text-white hover:border-white hover:bg-white/10",
  ghost:
    "px-0 text-[var(--c-accent)] underline-offset-4 hover:text-[var(--c-accent-hover)] hover:underline",
} as const

export function Cta({
  location,
  interes,
  label = CTA_LABEL,
  variant = "primary",
  className,
}: {
  /** Dónde está el botón. Viaja al formulario y al evento cta_click. */
  location: string
  interes?: string
  label?: string
  variant?: keyof typeof variants
  className?: string
}) {
  return (
    <a
      href={FORM_ANCHOR}
      data-cf-interes={interes ?? ""}
      data-cf-location={location}
      onClick={(e) => {
        // Scroll suave hasta el formulario del hero, con el interés cargado.
        // Si el anclaje no existe (páginas técnicas), el href hace el trabajo.
        if (irAlFormulario(location, interes)) e.preventDefault()
      }}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md text-sm font-semibold transition-colors sm:text-[0.95rem]",
        variant !== "ghost" && "px-6 py-3",
        variants[variant],
        className
      )}
    >
      {label}
    </a>
  )
}
