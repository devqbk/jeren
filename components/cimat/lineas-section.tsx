import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Download } from "lucide-react"
import { cta, lineas, rotorNav } from "@/lib/cimat-content"
import { Cta } from "./cta"
import { CatalogoLink } from "./secundarios"
import { Eyebrow, Lead, Section, SectionTitle } from "./ui"

/**
 * Líneas de producto en tarjetas resumidas: aplicación, rango, dos beneficios,
 * imagen y CTA contextual. El detalle de tooling, accionamientos, software y
 * métodos de corrección vive en /cimat/especificaciones.
 */
export function LineasSection() {
  return (
    <Section id="lineas" tone="paper" pad="feature">
      <Eyebrow>Líneas de producto</Eyebrow>
      <SectionTitle className="max-w-3xl">
        Cada línea se elige por el rotor a balancear, no por el número de modelo
      </SectionTitle>
      <Lead>
        Estas cuatro líneas cubren la mayoría de las aplicaciones de Oil &amp; Gas, minería, agro,
        energía y automotriz. El catálogo completo tiene siete categorías: el resto lo vemos en la
        ingeniería de aplicación.
      </Lead>

      <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2">
        {lineas.map((linea) => (
          <article
            key={linea.id}
            id={`linea-${linea.id}`}
            className="flex h-full scroll-mt-24 flex-col overflow-hidden rounded-xl border border-[var(--c-line)] bg-[var(--c-paper)]"
          >
            <Image
              src={linea.image.src}
              alt={linea.image.alt}
              width={linea.image.width}
              height={linea.image.height}
              loading="lazy"
              sizes="(max-width: 1023px) 100vw, 552px"
              className="aspect-[16/10] w-full border-b border-[var(--c-line)] bg-white object-contain p-6 sm:p-8"
            />

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <Eyebrow>{linea.eyebrow}</Eyebrow>
              <h3 className="mt-4 text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                {linea.title}
              </h3>
              <p className="mt-3 text-[15px] leading-snug text-[var(--c-ink-2)]">{linea.claim}</p>

              <p className="mt-6 rounded-md bg-[var(--c-surface-2)] px-4 py-2.5 text-sm font-semibold text-[var(--c-ink)]">
                {linea.rango}
              </p>

              <ul className="mt-6 space-y-2.5">
                {linea.beneficios.map((beneficio) => (
                  <li
                    key={beneficio}
                    className="flex gap-2 text-sm leading-relaxed text-[var(--c-ink-2)]"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-[var(--c-accent)]"
                      aria-hidden="true"
                    />
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
                <Cta location={`linea-${linea.id}`} interes="nueva-balanceadora" variant="ghost" />
                <Link
                  href={`/cimat/especificaciones#${linea.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--c-ink)] underline-offset-4 hover:underline"
                >
                  Ver los rangos completos
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Un enlace por rotor, con la palabra literal que la persona buscó. Son
          las URL finales de los grupos de anuncios. */}
      <nav
        aria-label="Balanceadoras por tipo de rotor"
        className="mt-10 rounded-xl border border-[var(--c-line)] bg-[var(--c-paper)] p-6 sm:p-8 lg:mt-12"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--c-muted)]">
          Por tipo de rotor
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {rotorNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--c-ink)] underline-offset-4 hover:underline"
              >
                {item.label}
                <ArrowRight className="size-3.5 shrink-0" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Recursos técnicos: acción secundaria y medible, sin peso de CTA principal. */}
      <div className="mt-10 flex flex-col gap-x-8 gap-y-4 border-t border-[var(--c-line)] pt-10 sm:flex-row sm:flex-wrap sm:items-center lg:mt-12 lg:pt-12">
        <Link
          href="/cimat/especificaciones"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--c-ink)] underline-offset-4 hover:underline"
        >
          Tabla técnica completa de todas las líneas
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
        <Link
          href="/cimat/aplicaciones"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--c-ink)] underline-offset-4 hover:underline"
        >
          Aplicaciones por industria
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
        <Link
          href="/cimat/normas-y-grados"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--c-ink)] underline-offset-4 hover:underline"
        >
          Grados de calidad y normas aplicables
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
        <CatalogoLink
          location="lineas"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--c-muted)] underline-offset-4 hover:text-[var(--c-ink)] hover:underline"
        >
          <Download className="size-3.5" aria-hidden="true" />
          {cta.catalogoPdf.label}
        </CatalogoLink>
      </div>
    </Section>
  )
}
