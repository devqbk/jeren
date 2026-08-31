import type { Metadata } from "next"
import { Download, Info } from "lucide-react"
import { CimatFooter } from "@/components/cimat/cimat-footer"
import { CimatHeader } from "@/components/cimat/cimat-header"
import { LeadForm } from "@/components/cimat/lead-form"
import { CatalogoLink } from "@/components/cimat/secundarios"
import { Breadcrumbs, breadcrumbSchema, type Crumb } from "@/components/cimat/breadcrumbs"
import { CimatTokens, Eyebrow, Lead, Section, SectionTitle } from "@/components/cimat/ui"
import { cta, specColumns, specNotas, specRows } from "@/lib/cimat-content"

const CANONICAL = "https://www.jeren.com/cimat/especificaciones"

export const metadata: Metadata = {
  title: { absolute: "Especificaciones técnicas de balanceadoras CIMAT | JEREN" },
  description:
    "Tabla comparativa completa de las líneas de balanceadoras CIMAT: peso y diámetro de rotor, apoyos, velocidad de balanceo, precisión según ISO 2953, planos de corrección, accionamiento y software.",
  metadataBase: new URL("https://www.jeren.com"),
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    locale: "es_AR",
    url: CANONICAL,
    siteName: "Jeren SRL",
    title: "Especificaciones técnicas de balanceadoras CIMAT",
    description:
      "Rangos publicados por el fabricante para cada línea CIMAT, sin estimaciones. Los parámetros no publicados se marcan con un guion.",
  },
  robots: { index: true, follow: true },
}

const crumbs: Crumb[] = [
  { label: "CIMAT", href: "/cimat" },
  { label: "Especificaciones técnicas" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema(crumbs)],
}

export default function EspecificacionesPage() {
  return (
    <div data-cimat className="min-h-screen antialiased">
      <CimatTokens />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CimatHeader />

      <main>
        <Section tone="surface" pad="tight">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8">
            <Eyebrow>Recursos técnicos</Eyebrow>
            <SectionTitle as="h2" className="max-w-3xl">
              <span className="sr-only">Especificaciones técnicas. </span>
              Los rangos de cada línea CIMAT, abiertos y sin formulario
            </SectionTitle>
            <Lead>
              Para especificar un equipo hacen falta los números antes de cualquier conversación.
              Están todos acá, tal como los publica el fabricante.
            </Lead>
          </div>
        </Section>

        <Section tone="paper">
          <h1 className="sr-only">Especificaciones técnicas de las balanceadoras CIMAT</h1>

          {/* Desktop: la tabla entra completa, sin scroll horizontal. */}
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-xl border border-[var(--c-line)] bg-[var(--c-paper)]">
              <table className="w-full table-fixed border-collapse text-left text-[13px]">
                <caption className="sr-only">
                  Especificaciones técnicas de las líneas de balanceadoras CIMAT
                </caption>
                <thead className="bg-[var(--c-surface)]">
                  <tr>
                    <th
                      scope="col"
                      className="w-[15%] px-3 py-3 align-bottom text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--c-ink)]"
                    >
                      Línea
                    </th>
                    {specColumns.map((column) => (
                      <th
                        key={column.key}
                        scope="col"
                        className="px-3 py-3 align-bottom text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--c-ink)]"
                      >
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specRows.map((row) => (
                    <tr
                      key={row.line}
                      className="border-t border-[var(--c-line)] align-top even:bg-[var(--c-surface-2)]"
                    >
                      <th scope="row" className="px-3 py-3.5 text-left align-top font-semibold">
                        <span className="block leading-snug text-[var(--c-ink)]">{row.line}</span>
                        <span className="mt-1 block text-[11px] font-normal leading-snug text-[var(--c-muted)]">
                          {row.family}
                        </span>
                      </th>
                      {specColumns.map((column) => (
                        <td
                          key={column.key}
                          className="px-3 py-3.5 align-top leading-snug text-[var(--c-ink-2)]"
                        >
                          {row.cells[column.key] ?? "—"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile y tablet: una ficha por línea */}
          <div className="space-y-4 lg:hidden">
            {specRows.map((row) => (
              <article
                key={row.line}
                className="overflow-hidden rounded-xl border border-[var(--c-line)] bg-[var(--c-paper)]"
              >
                <div className="border-b border-[var(--c-line)] bg-[var(--c-surface-2)] px-5 py-4">
                  <h2 className="text-base font-semibold leading-snug text-[var(--c-ink)]">
                    {row.line}
                  </h2>
                  <p className="mt-1 text-xs text-[var(--c-muted)]">{row.family}</p>
                </div>
                <dl className="divide-y divide-[var(--c-line)]">
                  {specColumns.map((column) => (
                    <div key={column.key} className="px-5 py-3 sm:flex sm:gap-4">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--c-muted)] sm:w-44 sm:shrink-0 sm:pt-0.5">
                        {column.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-snug text-[var(--c-ink-2)] sm:mt-0">
                        {row.cells[column.key] ?? "—"}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <ul className="mt-10 space-y-3">
            {specNotas.map((nota) => (
              <li
                key={nota.slice(0, 30)}
                className="flex gap-2 text-[13px] leading-relaxed text-[var(--c-muted)]"
              >
                <Info
                  className="mt-0.5 size-4 shrink-0 text-[var(--c-accent)]"
                  aria-hidden="true"
                />
                <span>{nota}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-[var(--c-line)] pt-8">
            <CatalogoLink
              location="especificaciones"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--c-ink)] underline-offset-4 hover:underline"
            >
              <Download className="size-4" aria-hidden="true" />
              {cta.catalogoPdf.label}
            </CatalogoLink>
          </div>
        </Section>

        <Section id="solicitar" tone="surface" pad="feature">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
            <div>
              <Eyebrow>Solicitud de información</Eyebrow>
              <SectionTitle as="h2">¿Qué configuración necesita el rotor?</SectionTitle>
              <Lead>
                El grado alcanzable no es una propiedad de la máquina sola: depende de la masa del
                rotor, de su velocidad de servicio y del radio de corrección disponible. Indíquenos la
                aplicación y le confirmamos qué línea la resuelve.
              </Lead>
            </div>
            <div className="rounded-xl border border-[var(--c-line)] bg-white p-6 sm:p-8">
              <LeadForm ctaLocation="especificaciones-form" />
            </div>
          </div>
        </Section>
      </main>

      <CimatFooter />
    </div>
  )
}
