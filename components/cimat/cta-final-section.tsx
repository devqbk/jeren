import { MessageCircle } from "lucide-react"
import { cta, ctaFinal } from "@/lib/cimat-content"
import { LeadForm } from "./lead-form"
import { WhatsappLink } from "./secundarios"
import { Eyebrow, Section } from "./ui"

/**
 * Conversión final: el mismo formulario del hero, no un CTA distinto. Es la
 * segunda oportunidad para quien bajó leyendo toda la página.
 */
export function CtaFinalSection() {
  return (
    <Section id="contacto" tone="dark" pad="feature">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
        <div>
          <Eyebrow dark>{ctaFinal.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-pretty text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.5rem]">
            {ctaFinal.title}
          </h2>
          <p className="mt-6 max-w-[58ch] text-base leading-[1.6] text-white/75 sm:text-[1.0625rem]">
            {ctaFinal.body}
          </p>

          <p className="mt-8 text-sm text-white/55">
            ¿Prefiere escribirnos?{" "}
            <WhatsappLink
              location="cta-final"
              className="font-semibold text-white underline underline-offset-4"
            >
              <MessageCircle className="mr-1 inline size-4 align-[-3px]" aria-hidden="true" />
              {cta.whatsapp.label}
            </WhatsappLink>
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 sm:p-8">
          <LeadForm ctaLocation="cta-final-form" />
        </div>
      </div>
    </Section>
  )
}
