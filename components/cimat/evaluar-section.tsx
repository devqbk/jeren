import { evaluar } from "@/lib/cimat-content"
import { Eyebrow, Lead, Section, SectionTitle } from "./ui"

/**
 * Reemplaza la comparativa competitiva. La versión anterior generalizaba sobre
 * marcas premium y equipos de bajo costo con frases que no se pueden respaldar.
 * Esto es una guía de criterios verificables: sirve para auditar cualquier
 * propuesta, la nuestra incluida.
 */
export function EvaluarSection() {
  return (
    <Section id="evaluar" tone="paper">
      <Eyebrow>{evaluar.eyebrow}</Eyebrow>
      <SectionTitle className="max-w-3xl">{evaluar.title}</SectionTitle>
      <Lead>{evaluar.intro}</Lead>

      <ol className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[var(--c-line)] bg-[var(--c-line)] sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {evaluar.criterios.map((criterio, index) => (
          <li key={criterio.title} className="flex h-full flex-col bg-[var(--c-paper)] p-6 sm:p-8">
            <span className="text-[11px] font-semibold tabular-nums tracking-[0.16em] text-[var(--c-accent)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--c-ink)]">
              {criterio.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--c-ink-2)]">{criterio.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
