"use client"

import { ArrowRight } from "lucide-react"
import { CTA_LABEL } from "@/lib/cimat-content"
import { preseleccionarInteres, track, trackCta } from "./track"

/**
 * CTA de una tarjeta de industria: preselecciona el interés en el formulario de
 * la misma página y deja la industria registrada en analítica.
 */
export function IndustriaCta({ id, name }: { id: string; name: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        track("industry_select", { industry: id })
        trackCta(`aplicaciones-${id}`, "nueva-balanceadora")
        preseleccionarInteres("nueva-balanceadora", `aplicaciones-${id}`)
        document
          .getElementById("solicitar")
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      }}
      className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[var(--c-accent)] underline-offset-4 hover:underline"
    >
      <span className="sr-only">{name}: </span>
      {CTA_LABEL}
      <ArrowRight
        className="size-3.5 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </button>
  )
}
