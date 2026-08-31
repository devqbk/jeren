"use client"

import { ArrowRight } from "lucide-react"
import { selector } from "@/lib/cimat-content"
import { Eyebrow, Lead, Section, SectionTitle } from "./ui"
import { irAlFormulario, track } from "./track"

/**
 * Selector de necesidad. Es el atajo para que el visitante se reconozca sin
 * leer la página entera: cada opción preselecciona el interés en el formulario
 * y registra el contexto en analítica.
 */
export function SelectorSection() {
  return (
    <Section id="necesidad" tone="surface">
      <Eyebrow>{selector.eyebrow}</Eyebrow>
      <SectionTitle className="max-w-3xl">{selector.title}</SectionTitle>
      <Lead>{selector.intro}</Lead>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {selector.opciones.map((opcion) => (
          <button
            key={opcion.interes}
            type="button"
            data-cf-interes={opcion.interes}
            data-cf-location={`selector-${opcion.interes}`}
            onClick={() => {
              track("industry_select", { service_interest: opcion.interes })
              irAlFormulario(`selector-${opcion.interes}`, opcion.interes)
            }}
            className="group flex h-full flex-col rounded-xl border border-[var(--c-line)] bg-[var(--c-paper)] p-6 text-left transition-colors hover:border-[var(--c-ink)] sm:p-8"
          >
            <span className="text-base font-bold tracking-tight text-[var(--c-ink)]">
              {opcion.title}
            </span>
            <span className="mt-3 text-sm leading-relaxed text-[var(--c-ink-2)]">
              {opcion.body}
            </span>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--c-accent)]">
              Consultar por esto
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </button>
        ))}
      </div>
    </Section>
  )
}
