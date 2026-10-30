import type * as React from "react"
import Image from "next/image"
import { Check, LayoutDashboard, MapPin, MessageCircle, PackageCheck, Phone, UserCheck } from "lucide-react"
import { SoloDesktop } from "@/components/cimat/solo-desktop"
import { Eyebrow, Lead, Section, SectionTitle, container, displayNumber } from "@/components/cimat/ui"
import { aplica, caso, ctaFinal, hero, jeren, resuelve, soluciones, trustBar, type ResuelveIcon } from "@/lib/cribmaster-content"
import { Cta, TelefonoLink, WhatsappLink } from "./cliente"
import { LeadForm } from "./lead-form"

// ── 1. Hero ──────────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section id="top" className="relative scroll-mt-24 overflow-hidden bg-[var(--c-surface)]">
      <div className={container}>
        <div className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,450px)] lg:items-start lg:gap-16 lg:py-20">
          <div>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-pretty text-[1.75rem] font-bold leading-[1.1] tracking-tight sm:text-[2.4rem] lg:text-[2.9rem]">
              {hero.h1}
            </h1>

            <div className="mt-6 grid gap-8 sm:grid-cols-[minmax(0,1fr)_200px] sm:items-start lg:grid-cols-[minmax(0,1fr)_220px]">
              <div>
                <p className="max-w-[58ch] text-base leading-[1.6] text-[var(--c-ink-2)] sm:text-[1.0625rem]">
                  {hero.subtitle}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {hero.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-[15px] leading-snug text-[var(--c-ink)] sm:text-base">
                      <Check className="mt-0.5 size-4 shrink-0 cm-yellow" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Solo en mobile: en desktop el formulario ya está al lado. */}
                <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] gap-3 lg:hidden">
                  <Cta location="hero-mobile" className="w-full" />
                  <TelefonoLink
                    location="hero-mobile"
                    className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-[var(--c-line)] bg-white px-4 text-sm font-semibold text-[var(--c-ink)]"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    Llamar
                  </TelefonoLink>
                </div>
              </div>

              <figure className="mx-auto w-full max-w-[220px] sm:mx-0">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  width={hero.image.width}
                  height={hero.image.height}
                  priority
                  sizes="220px"
                  className="h-auto w-full"
                />
                <figcaption className="mt-3 text-[12px] leading-snug text-[var(--c-muted)]">{hero.image.caption}</figcaption>
              </figure>
            </div>
          </div>

          <div id="solicitar" className="flex scroll-mt-24 flex-col">
            <div className="flex flex-1 flex-col rounded-xl border border-[var(--c-line)] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--c-muted)]">
                Demostración o propuesta
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--c-ink-2)]">{hero.microcopy}</p>
              <div className="mt-6">
                <LeadForm ctaLocation="hero-form" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--c-line)] bg-white">
        <div className={container}>
          <dl className="grid divide-y divide-[var(--c-line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {trustBar.map((item) => (
              <div key={item.fuente} className="py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--c-muted)]">{item.fuente}</dt>
                <dd className="mt-2">
                  <span className="block text-xl font-bold leading-none tracking-tight text-[var(--c-ink)]">{item.value}</span>
                  <span className="mt-1.5 block text-[13px] leading-snug text-[var(--c-muted)]">{item.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

// ── 2. Caso ──────────────────────────────────────────────────────────────────

export function CasoSection() {
  return (
    <Section id="caso" tone="dark" pad="feature">
      <Eyebrow dark>{caso.eyebrow}</Eyebrow>
      <SectionTitle className="max-w-3xl text-white">{caso.title}</SectionTitle>

      <dl className="mt-10 grid gap-x-8 gap-y-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:pt-12">
        {caso.stats.map((item) => (
          <div key={item.label} className="border-l-4 border-[var(--c-accent-2)] pl-5">
            <dt className={`${displayNumber} text-white`}>{item.value}</dt>
            <dd className="mt-3 max-w-[30ch] text-[13px] leading-relaxed text-white/60">{item.label}</dd>
          </div>
        ))}
      </dl>

      <figure className="mt-10 max-w-3xl border-t border-white/15 pt-10 lg:mt-12 lg:pt-12">
        <blockquote className="text-pretty text-xl font-semibold leading-snug text-white sm:text-2xl">
          “{caso.cita}”
        </blockquote>
        <figcaption className="mt-3 text-sm text-white/55">{caso.citaAutor}</figcaption>
      </figure>
      <p className="mt-8 text-[12px] text-white/45">{caso.aclaracion}</p>
    </Section>
  )
}

// ── 3. Qué resuelve ──────────────────────────────────────────────────────────

const iconos: Record<ResuelveIcon, React.ComponentType<{ className?: string }>> = {
  persona: UserCheck,
  stock: PackageCheck,
  sitio: MapPin,
  tablero: LayoutDashboard,
}

export function ResuelveSection() {
  return (
    <Section id="resuelve" tone="paper">
      <Eyebrow>{resuelve.eyebrow}</Eyebrow>
      <SectionTitle className="max-w-3xl">{resuelve.title}</SectionTitle>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
        {resuelve.cards.map((card) => {
          const Icon = iconos[card.icon]
          return (
            <article key={card.title} className="flex h-full flex-col rounded-xl border border-[var(--c-line)] bg-[var(--c-surface-2)] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <Icon className="size-6 text-[var(--c-ink)]" aria-hidden="true" />
                <span className="text-sm font-bold cm-yellow">{card.numero}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug text-[var(--c-ink)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--c-ink-2)]">{card.body}</p>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

// ── 4. Soluciones ────────────────────────────────────────────────────────────

export function SolucionesSection() {
  return (
    <Section id="soluciones" tone="surface" pad="feature">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        <div>
          <Eyebrow>{soluciones.eyebrow}</Eyebrow>
          <SectionTitle>{soluciones.title}</SectionTitle>
          <Lead>{soluciones.lead}</Lead>
          <figure className="mt-10 hidden max-w-[260px] lg:block">
            <Image src={hero.image.src} alt={hero.image.alt} width={hero.image.width} height={hero.image.height} loading="lazy" sizes="260px" className="h-auto w-full" />
            <figcaption className="mt-3 text-[12px] leading-snug text-[var(--c-muted)]">{hero.image.caption}</figcaption>
          </figure>
        </div>

        <dl className="divide-y divide-[var(--c-line)] overflow-hidden rounded-xl border border-[var(--c-line)] bg-white">
          {soluciones.items.map((item) => (
            <div key={item.categoria} className="grid gap-2 p-6 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-6 sm:p-7">
              <dt className="text-sm font-bold leading-snug text-[var(--c-ink)]">{item.categoria}</dt>
              <dd>
                <p className="text-sm font-semibold cm-yellow">{item.modelos}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--c-ink-2)]">{item.body}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4 lg:mt-12">
        <Cta location="soluciones" />
        <p className="text-sm text-[var(--c-muted)]">Te decimos qué formato conviene para cada ítem de tu pañol.</p>
      </div>
    </Section>
  )
}

// ── 5. Dónde aplica + JEREN ──────────────────────────────────────────────────

export function AplicaSection() {
  return (
    <Section id="aplica" tone="paper">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{aplica.eyebrow}</Eyebrow>
          <SectionTitle>{aplica.title}</SectionTitle>
          <ul className="mt-8 flex flex-wrap gap-3">
            {aplica.items.map((item) => (
              <li key={item} className="inline-flex items-center gap-2 rounded-full border border-[var(--c-line)] bg-[var(--c-surface-2)] px-4 py-2 text-sm font-medium text-[var(--c-ink)]">
                <span className="size-2 rounded-full bg-[var(--c-accent-2)]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-[var(--c-jeren)] p-8 text-white sm:p-10">
          <Eyebrow dark>{jeren.eyebrow}</Eyebrow>
          <h3 className="mt-4 text-pretty text-2xl font-bold leading-[1.15] tracking-tight">{jeren.title}</h3>
          <div className="mt-6 space-y-4 text-[15px] leading-[1.7] text-white/80">
            {jeren.paragraphs.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

// ── 6. CTA final ─────────────────────────────────────────────────────────────

export function CtaFinalSection() {
  return (
    <Section id="contacto" tone="dark" pad="feature">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
        <div>
          <Eyebrow dark>{ctaFinal.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-pretty text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.5rem]">
            {ctaFinal.title}
          </h2>
          <p className="mt-6 max-w-[58ch] text-base leading-[1.6] text-white/75 sm:text-[1.0625rem]">{ctaFinal.body}</p>

          <div className="mt-8 lg:hidden">
            <Cta location="cta-final" variant="onDark" className="w-full" />
          </div>

          <p className="mt-8 text-sm text-white/55">
            ¿Preferís escribirnos?{" "}
            <WhatsappLink location="cta-final" className="font-semibold text-white underline underline-offset-4">
              <MessageCircle className="mr-1 inline size-4 align-[-3px]" aria-hidden="true" />
              WhatsApp
            </WhatsappLink>
          </p>
        </div>

        <SoloDesktop className="hidden rounded-xl bg-white p-6 sm:p-8 lg:block">
          <LeadForm ctaLocation="cta-final-form" />
        </SoloDesktop>
      </div>
    </Section>
  )
}
