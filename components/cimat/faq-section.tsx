import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/cimat-content"
import { Eyebrow, Section, SectionTitle } from "./ui"

export function FaqSection() {
  return (
    <Section id="faq" tone="paper">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
        <div>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <SectionTitle>Lo que se pregunta antes de firmar</SectionTitle>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="border-b border-[var(--c-line)]"
            >
              <AccordionTrigger className="min-h-11 py-5 text-left text-base font-semibold text-[var(--c-ink)] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[15px] leading-relaxed text-[var(--c-ink-2)]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
