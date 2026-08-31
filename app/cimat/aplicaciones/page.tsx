import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CimatFooter } from "@/components/cimat/cimat-footer"
import { CimatHeader } from "@/components/cimat/cimat-header"
import { IndustriaCta } from "@/components/cimat/industria-cta"
import { LeadForm } from "@/components/cimat/lead-form"
import { Breadcrumbs, breadcrumbSchema, type Crumb } from "@/components/cimat/breadcrumbs"
import { CimatTokens, Eyebrow, Lead, Section, SectionTitle, container } from "@/components/cimat/ui"
import { industriaBanner, industrias, industriasImagenes } from "@/lib/cimat-content"

const CANONICAL = "https://www.jeren.com/cimat/aplicaciones"

export const metadata: Metadata = {
  title: { absolute: "Aplicaciones de balanceo por industria | CIMAT — JEREN" },
  description:
    "Qué rotores se balancean en cada industria y con qué línea CIMAT: Oil & Gas, minería, agro, energía, ferroviario, papelera, metalúrgica y automotriz.",
  metadataBase: new URL("https://www.jeren.com"),
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    locale: "es_AR",
    url: CANONICAL,
    siteName: "Jeren SRL",
    title: "Aplicaciones de balanceo por industria",
    description:
      "Componentes típicos, línea CIMAT aplicable y grados de referencia para cada sector industrial.",
  },
  robots: { index: true, follow: true },
}

const crumbs: Crumb[] = [{ label: "CIMAT", href: "/cimat" }, { label: "Aplicaciones" }]

const jsonLd = { "@context": "https://schema.org", "@graph": [breadcrumbSchema(crumbs)] }

export default function AplicacionesPage() {
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
            <Eyebrow>Aplicaciones por industria</Eyebrow>
            <h1 className="mt-4 text-pretty text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.5rem]">
              Qué se balancea en tu planta, con qué línea y por qué
            </h1>
            <Lead>
              Nadie busca el nombre del modelo: busca cómo balancear el impulsor de una bomba de
              tres toneladas. Este es el mapa de componentes por sector, con la línea CIMAT que los
              resuelve.
            </Lead>
          </div>
        </Section>

        <Section tone="paper">
          <div className="grid gap-6 sm:grid-cols-2">
            {industrias.map((industria) => (
              <article
                key={industria.id}
                id={industria.id}
                className="flex h-full scroll-mt-24 flex-col rounded-xl border border-[var(--c-line)] bg-[var(--c-paper)] p-6 sm:p-8"
              >
                <h2 className="text-lg font-bold tracking-tight text-[var(--c-ink)]">
                  {industria.name}
                </h2>
                <span
                  className="mt-3 block h-[3px] w-9 rounded-full"
                  style={{ backgroundImage: "var(--c-grad)" }}
                  aria-hidden="true"
                />

                <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--c-muted)]">
                      Componentes típicos
                    </dt>
                    <dd className="mt-1.5 text-[var(--c-ink-2)]">{industria.rotors}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--c-muted)]">
                      Línea CIMAT aplicable
                    </dt>
                    <dd className="mt-1.5 text-[var(--c-ink-2)]">{industria.lines}</dd>
                  </div>
                </dl>

                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-6">
                  <IndustriaCta id={industria.id} name={industria.name} />
                  <Link
                    href="/cimat#lineas"
                    className="text-sm font-semibold text-[var(--c-ink)] underline-offset-4 hover:underline"
                  >
                    Ver las líneas
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-[var(--c-muted)]">
            El grado que corresponde a cada aplicación está en la{" "}
            <Link
              href="/cimat/normas-y-grados"
              className="font-semibold text-[var(--c-ink)] underline underline-offset-4"
            >
              tabla de grados de calidad
            </Link>
            , y los rangos de cada máquina en las{" "}
            <Link
              href="/cimat/especificaciones"
              className="font-semibold text-[var(--c-ink)] underline underline-offset-4"
            >
              especificaciones técnicas
            </Link>
            .
          </p>
        </Section>

        <Section tone="surface">
          <Eyebrow>Rotores en máquina</Eyebrow>
          <SectionTitle as="h2" className="max-w-3xl">
            Cómo se monta cada tipo de rotor
          </SectionTitle>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {industriasImagenes.map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-xl border border-[var(--c-line)] bg-white"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  sizes="(max-width: 639px) 100vw, 552px"
                  className="aspect-[16/10] w-full object-cover object-center"
                />
                {image.caption ? (
                  <figcaption className="border-t border-[var(--c-line)] px-5 py-3.5 text-[13px] leading-relaxed text-[var(--c-muted)]">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </Section>

        <figure className="border-t border-[var(--c-line)] bg-white">
          <Image
            src={industriaBanner.src}
            alt={industriaBanner.alt}
            width={industriaBanner.width}
            height={industriaBanner.height}
            loading="lazy"
            sizes="100vw"
            className="mx-auto h-64 w-full max-w-[1600px] object-cover object-center sm:h-80 lg:h-[420px]"
          />
          <div className={container}>
            <figcaption className="border-t border-[var(--c-line)] py-4 text-[13px] leading-relaxed text-[var(--c-muted)]">
              Célula de balanceo CIMAT para ejes montados ferroviarios: de 1 a 5 toneladas y hasta
              ø1.980 mm, con corrección que incluye torneado excéntrico.
            </figcaption>
          </div>
        </figure>

        <Section id="solicitar" tone="paper" pad="feature">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
            <div>
              <Eyebrow>Solicitud de información</Eyebrow>
              <SectionTitle as="h2">¿Qué rotor necesita balancear?</SectionTitle>
              <Lead>
                Indíquenos el componente y el sector. Un especialista revisa la aplicación y
                responde con la línea recomendada y los próximos pasos.
              </Lead>
            </div>
            <div className="rounded-xl border border-[var(--c-line)] bg-white p-6 sm:p-8">
              <LeadForm ctaLocation="aplicaciones-form" />
            </div>
          </div>
        </Section>
      </main>

      <CimatFooter />
    </div>
  )
}
