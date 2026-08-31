import { proceso } from "@/lib/cimat-content"
import { Cta } from "./cta"
import { Eyebrow, Lead, Section, SectionTitle, displayNumber } from "./ui"

/**
 * Responde la pregunta que la página no contestaba: qué pasa después de enviar
 * los datos. Baja la incertidumbre justo antes de la conversión final.
 */
export function ProcesoSection() {
  return (
    <Section id="proceso" tone="surface">
      <Eyebrow>{proceso.eyebrow}</Eyebrow>
      <SectionTitle className="max-w-3xl">{proceso.title}</SectionTitle>
      <Lead>{proceso.intro}</Lead>

      <ol className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-3 lg:gap-12">
        {proceso.pasos.map((paso) => (
          <li key={paso.n} className="border-t-2 border-[var(--c-accent)] pt-6">
            <span className={`${displayNumber} block text-[var(--c-ink)]`}>{paso.n}</span>
            <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight text-[var(--c-ink)]">
              {paso.title}
            </h3>
            <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-[var(--c-ink-2)]">
              {paso.body}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <Cta location="proceso" />
      </div>
    </Section>
  )
}
