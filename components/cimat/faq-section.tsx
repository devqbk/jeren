import { ChevronDown } from "lucide-react"
import { faqs, type FaqItem } from "@/lib/cimat-content"
import { Eyebrow, Section, SectionTitle } from "./ui"

/**
 * Acordeón con `<details>/<summary>` nativo. Antes era el Accordion de Radix:
 * mismo aspecto, pero sin el runtime de Radix ni JavaScript de cliente. El
 * atributo `name` hace que se abra uno por vez, como el `type="single"` de
 * antes; los navegadores que no lo soportan simplemente permiten varios.
 */
export function FaqList({ items, name = "faq" }: { items: FaqItem[]; name?: string }) {
  return (
    <div className="w-full">
      {items.map((faq) => (
        <details key={faq.question} name={name} className="group border-b border-[var(--c-line)]">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-[var(--c-ink)] [&::-webkit-details-marker]:hidden [&::marker]:content-['']">
            {faq.question}
            <ChevronDown
              className="size-4 shrink-0 text-[var(--c-muted)] transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="pb-6 text-[15px] leading-relaxed text-[var(--c-ink-2)]">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}

export function FaqSection({
  items = faqs,
  title = "Lo que se pregunta antes de firmar",
}: {
  items?: FaqItem[]
  title?: string
}) {
  return (
    <Section id="faq" tone="paper">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
        <div>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <SectionTitle>{title}</SectionTitle>
        </div>

        <FaqList items={items} />
      </div>
    </Section>
  )
}
