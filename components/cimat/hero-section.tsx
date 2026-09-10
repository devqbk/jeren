import { Check, Phone } from "lucide-react"
import { hero, trustBar } from "@/lib/cimat-content"
import { Cta } from "./cta"
import { HeroCarousel } from "./hero-carousel"
import { LeadForm } from "./lead-form"
import { TelefonoLink } from "./secundarios"
import { Eyebrow, container } from "./ui"

/**
 * Hero de conversión.
 *
 * Desktop: titular y argumento a la izquierda, formulario a la derecha en el
 * primer viewport. Mobile: el orden del DOM es el orden de lectura — H1 →
 * subtítulo → tres argumentos → botón al formulario y teléfono → imagen →
 * formulario. Antes el formulario iba segundo y pedía datos antes de
 * argumentar. En desktop la grilla ubica cada bloque a mano, así que el orden
 * del DOM no cambia el layout.
 */
export function HeroSection() {
  return (
    <section id="top" className="relative scroll-mt-24 overflow-hidden bg-[var(--c-surface)]">
      <div className={container}>
        <div className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,470px)] lg:items-stretch lg:gap-16 lg:py-20">
          <div className="lg:col-start-1 lg:row-start-1">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-pretty text-[1.75rem] font-bold leading-[1.1] tracking-tight sm:text-[2.4rem] lg:text-[2.9rem]">
              {hero.h1}
            </h1>
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <p className="max-w-[58ch] text-base leading-[1.6] text-[var(--c-ink-2)] sm:text-[1.0625rem]">
              {hero.subtitle}
            </p>

            <ul className="mt-6 space-y-2.5">
              {hero.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2.5 text-[15px] leading-snug text-[var(--c-ink)] sm:text-base"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-[var(--c-accent)]" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Solo en mobile: en desktop el formulario ya está al lado. */}
            <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] gap-3 lg:hidden">
              <Cta location="hero-mobile" label={hero.ctaMobile} className="w-full" />
              <TelefonoLink
                location="hero-mobile"
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-[var(--c-line)] bg-white px-4 text-sm font-semibold text-[var(--c-ink)]"
              >
                <Phone className="size-4" aria-hidden="true" />
                Llamar
              </TelefonoLink>
            </div>

            <HeroCarousel />
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
            </div>
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
