import { MessageCircle } from "lucide-react"
import { cta, hero, trustBar } from "@/lib/cimat-content"
import { HeroCarousel } from "./hero-carousel"
import { LeadForm } from "./lead-form"
import { Eyebrow, container } from "./ui"
import { WhatsappLink } from "./secundarios"

/**
 * Hero de conversión: el formulario está en el primer viewport en desktop.
 * La lógica del copy es categoría → beneficio → respaldo técnico → soporte
 * local → siguiente paso. Las especificaciones vienen después del beneficio,
 * no antes.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--c-surface)]">
      <div className={container}>
        <div className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,470px)] lg:items-stretch lg:gap-16 lg:py-20">
          {/* Titular. En mobile va primero y el formulario queda inmediatamente
              debajo; el resto del hero baja para no empujarlo fuera de pantalla. */}
          <div className="lg:col-start-1 lg:row-start-1">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-pretty text-[1.75rem] font-bold leading-[1.1] tracking-tight sm:text-[2.4rem] lg:text-[2.9rem]">
              {hero.h1}
            </h1>
          </div>

          <div
            id="solicitar"
            className="flex scroll-mt-24 flex-col lg:col-start-2 lg:row-span-2 lg:row-start-1"
          >
            <div className="flex flex-1 flex-col rounded-xl border border-[var(--c-line)] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--c-muted)]">
                Solicitud de información
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--c-ink-2)]">
                {hero.microcopy}
              </p>
              <div className="mt-6">
                <LeadForm ctaLocation="hero-form" />
              </div>

              {/* Canal alternativo al pie de la tarjeta: cierra el bloque y deja
                  el borde inferior a la misma altura que el carrusel. */}
              <p className="mt-6 border-t border-[var(--c-line)] pt-6 text-[13px] text-[var(--c-muted)]">
                ¿Prefiere escribirnos?{" "}
                <WhatsappLink
                  location="hero"
                  className="font-semibold text-[var(--c-ink)] underline underline-offset-4"
                >
                  <MessageCircle className="mr-1 inline size-4 align-[-3px]" aria-hidden="true" />
                  {cta.whatsapp.label}
                </WhatsappLink>
              </p>
            </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <p className="max-w-[58ch] text-base leading-[1.6] text-[var(--c-ink-2)] sm:text-[1.0625rem]">
              {hero.subtitle}
            </p>

            <p className="mt-6 inline-flex flex-wrap items-center gap-x-2 rounded-md border border-[var(--c-line)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--c-ink)]">
              {hero.resumenTecnico}
            </p>

            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* Barra de confianza: cada dato con su atribución explícita. */}
      <div className="border-t border-[var(--c-line)] bg-white">
        <div className={container}>
          <dl className="grid divide-y divide-[var(--c-line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {trustBar.map((item) => (
              <div key={item.fuente} className="py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--c-accent)]">
                  {item.fuente}
                </dt>
                <dd className="mt-2">
                  <span className="block text-xl font-bold leading-none tracking-tight text-[var(--c-ink)]">
                    {item.value}
                  </span>
                  <span className="mt-1.5 block text-[13px] leading-snug text-[var(--c-muted)]">
                    {item.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
