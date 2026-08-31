import type { Metadata } from "next"
import Link from "next/link"
import { CimatFooter } from "@/components/cimat/cimat-footer"
import { CimatHeader } from "@/components/cimat/cimat-header"
import { LeadForm } from "@/components/cimat/lead-form"
import { Breadcrumbs, breadcrumbSchema, type Crumb } from "@/components/cimat/breadcrumbs"
import { CimatTokens, Eyebrow, Lead, Section, SectionTitle } from "@/components/cimat/ui"
import { grados } from "@/lib/cimat-content"

const CANONICAL = "https://www.jeren.com/cimat/normas-y-grados"

export const metadata: Metadata = {
  title: { absolute: "Grados de calidad de balanceo G y normas ISO 21940 | JEREN" },
  description:
    "Qué significa un grado G, cómo se relaciona con masa, velocidad y radio de corrección, la diferencia entre ISO 1940-1 e ISO 21940-11, y para qué sirve ISO 2953.",
  metadataBase: new URL("https://www.jeren.com"),
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    locale: "es_AR",
    url: CANONICAL,
    siteName: "Jeren SRL",
    title: "Grados de calidad de balanceo G y normas ISO 21940",
    description:
      "La tabla de grados aplicada a equipos reales de planta, y qué norma corresponde a cada parte del proceso.",
  },
  robots: { index: true, follow: true },
}

const crumbs: Crumb[] = [{ label: "CIMAT", href: "/cimat" }, { label: "Normas y grados" }]

const jsonLd = { "@context": "https://schema.org", "@graph": [breadcrumbSchema(crumbs)] }

export default function NormasPage() {
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
            <Eyebrow>{grados.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-pretty text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.5rem]">
              Grados de calidad de balanceo y normas aplicables
            </h1>
            <Lead>
              Las máquinas se verifican según ISO 2953 y permiten trabajar con los grados definidos
              por ISO 21940, de acuerdo con las características del rotor. El grado alcanzable no es
              una propiedad aislada de la máquina: depende de la masa, la velocidad de servicio y el
              radio de corrección disponible.
            </Lead>
          </div>
        </Section>

        <Section tone="paper">
          <h2 className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
            {grados.title}
          </h2>
          <Lead>{grados.intro}</Lead>

          {/* Desktop: tabla */}
          <div className="mt-10 hidden overflow-hidden rounded-xl border border-[var(--c-line)] md:block">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">
                Grados de calidad de balanceo G según ISO 21940-11, con su aplicación típica y el
                sector
              </caption>
              <thead>
                <tr className="bg-[var(--c-surface)]">
                  <th
                    scope="col"
                    className="w-[110px] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--c-ink)]"
                  >
                    Grado
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--c-ink)]"
                  >
                    Aplicación típica
                  </th>
                  <th
                    scope="col"
                    className="w-[240px] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--c-ink)]"
                  >
                    Sector
                  </th>
                </tr>
              </thead>
              <tbody>
                {grados.rows.map((row) => (
                  <tr
                    key={row.grade}
                    className="border-t border-[var(--c-line)] even:bg-[var(--c-surface-2)]"
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 text-left align-top text-base font-bold text-[var(--c-accent)]"
                    >
                      {row.grade}
                    </th>
                    <td className="px-5 py-4 align-top leading-relaxed text-[var(--c-ink-2)]">
                      {row.application}
                    </td>
                    <td className="px-5 py-4 align-top leading-relaxed text-[var(--c-muted)]">
                      {row.sector}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: fichas */}
          <ul className="mt-10 space-y-3 md:hidden">
            {grados.rows.map((row) => (
              <li
                key={row.grade}
                className="rounded-xl border border-[var(--c-line)] bg-[var(--c-surface-2)] p-6"
              >
                <p className="text-lg font-bold leading-none text-[var(--c-accent)]">{row.grade}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--c-ink-2)]">
                  {row.application}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[var(--c-muted)]">
                  {row.sector}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-xl border border-[var(--c-line)] border-l-2 border-l-[var(--c-accent)] bg-[var(--c-surface-2)] p-6">
              <h3 className="text-base font-semibold text-[var(--c-ink)]">
                Si tu especificación dice ISO 1940-1, sigue siendo válida
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--c-ink-2)]">
                {grados.normaParagraph}
              </p>
            </div>

            <dl className="space-y-4">
              {grados.normas.map((norma) => (
                <div
                  key={norma.code}
                  className="border-b border-[var(--c-line)] pb-4 last:border-b-0 last:pb-0 sm:flex sm:gap-6"
                >
                  <dt className="text-sm font-bold tracking-tight text-[var(--c-ink)] sm:w-44 sm:shrink-0">
                    {norma.code}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[var(--c-ink-2)] sm:mt-0">
                    {norma.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-10 text-sm text-[var(--c-muted)]">
            Los rangos de cada línea están en la{" "}
            <Link
              href="/cimat/especificaciones"
              className="font-semibold text-[var(--c-ink)] underline underline-offset-4"
            >
              tabla de especificaciones técnicas
            </Link>
            .
          </p>
        </Section>

        <Section id="solicitar" tone="surface" pad="feature">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
            <div>
              <Eyebrow>Solicitud de información</Eyebrow>
              <SectionTitle as="h2">
                ¿Necesita confirmar qué grado requiere su aplicación?
              </SectionTitle>
              <Lead>
                Indíquenos el rotor y el grado exigido. Un especialista revisa la aplicación y le
                confirma qué configuración lo alcanza.
              </Lead>
            </div>
            <div className="rounded-xl border border-[var(--c-line)] bg-white p-6 sm:p-8">
              <LeadForm ctaLocation="normas-form" />
            </div>
          </div>
        </Section>
      </main>

      <CimatFooter />
    </div>
  )
}
