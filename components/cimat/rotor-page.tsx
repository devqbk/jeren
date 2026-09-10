import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react"
import {
  TELEFONO,
  cta,
  grados,
  specColumns,
  specRows,
  type RotorPage as RotorPageContent,
} from "@/lib/cimat-content"
import { Breadcrumbs, breadcrumbSchema, type Crumb } from "./breadcrumbs"
import { CimatFooter } from "./cimat-footer"
import { CimatHeader } from "./cimat-header"
import { Cta } from "./cta"
import { FaqSection } from "./faq-section"
import { LeadForm } from "./lead-form"
import { JEREN_ID, ORIGIN, PRODUCTO_ID, brandSchema, manufacturerSchema, organizationSchema } from "./schema"
import { TelefonoLink, WhatsappLink } from "./secundarios"
import { StickyCta } from "./sticky-cta"
import { CimatTokens, Eyebrow, Lead, Section, SectionTitle, container } from "./ui"
import { WhatsappFlotante } from "./whatsapp-flotante"

/**
 * Página "por rotor": una URL por grupo de anuncios, con la keyword literal en
 * el H1 y un solo formulario, con el interés y la línea ya cargados.
 *
 * Todo lo que se muestra sale de `rotores` (copy), `specRows` (números por
 * línea) y `grados.rows` (grado G): acá no se escribe ninguna capacidad.
 */
export function ctaRotor(r: RotorPageContent) {
  return `Pedir propuesta para ${r.rotor}`
}

export function canonicalRotor(r: RotorPageContent) {
  return `${ORIGIN}/cimat/${r.slug}`
}

function crumbsRotor(r: RotorPageContent): Crumb[] {
  return [{ label: "CIMAT", href: "/cimat" }, { label: r.h1.replace(" CIMAT", "") }]
}

/** JSON-LD coherente con el de /cimat: misma organización, mismo fabricante, producto enlazado. */
export function jsonLdRotor(r: RotorPageContent) {
  const canonical = canonicalRotor(r)
  const filas = specRows.filter((row) => r.specLines.includes(row.line))

  const productSchema = {
    "@type": "Product",
    "@id": `${canonical}#producto`,
    name: r.h1,
    description: r.seo.description,
    brand: brandSchema,
    manufacturer: manufacturerSchema,
    category: "Balanceadoras industriales",
    url: canonical,
    image: `${ORIGIN}${r.imagenes[0].src}`,
    isRelatedTo: { "@id": PRODUCTO_ID },
    additionalProperty: filas.flatMap((row) =>
      [
        { name: `Peso de rotor — ${row.family}`, value: row.cells.peso },
        { name: `Velocidad de balanceo — ${row.family}`, value: row.cells.rpm },
      ]
        .filter((p) => p.value && p.value !== "—")
        .map((p) => ({ "@type": "PropertyValue", ...p }))
    ),
  }

  const serviceSchema = {
    "@type": "Service",
    "@id": `${canonical}#servicio`,
    name: `Propuesta, importación y puesta en marcha de ${r.h1.replace(" CIMAT", "").toLowerCase()}`,
    serviceType: "Venta, puesta en marcha, calibración y modernización de balanceadoras industriales",
    provider: { "@id": JEREN_ID },
    areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "Place", name: "América Latina" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${canonical}#solicitar`,
      servicePhone: TELEFONO,
    },
  }

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    mainEntity: r.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, productSchema, serviceSchema, faqSchema, breadcrumbSchema(crumbsRotor(r))],
  }
}

export function RotorPage({ r }: { r: RotorPageContent }) {
  const filas = specRows.filter((row) => r.specLines.includes(row.line))
  const filasGrado = grados.rows.filter((g) => r.gradosCodigos.includes(g.grade))
  const [imagenPrincipal, ...otrasImagenes] = r.imagenes
  const etiquetaCta = ctaRotor(r)

  return (
    <div data-cimat className="min-h-screen antialiased">
      <CimatTokens />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdRotor(r)) }}
      />

      <CimatHeader />

      <main>
        {/* Hero: H1 con la keyword, argumento, CTA y foto. Mobile en orden de
            lectura; en desktop la foto va a la derecha. */}
        <section id="top" className="scroll-mt-24 border-b border-[var(--c-line)] bg-[var(--c-surface)]">
          <div className={container}>
            <div className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-center lg:gap-16 lg:py-20">
              <div>
                <Breadcrumbs items={crumbsRotor(r)} />
                <div className="mt-8">
                  <Eyebrow>{r.eyebrow}</Eyebrow>
                </div>
                <h1 className="mt-4 text-pretty text-[1.75rem] font-bold leading-[1.1] tracking-tight sm:text-[2.4rem] lg:text-[2.75rem]">
                  {r.h1}
                </h1>
                <p className="mt-6 max-w-[58ch] text-base leading-[1.6] text-[var(--c-ink-2)] sm:text-[1.0625rem]">
                  {r.subtitle}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {r.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2.5 text-[15px] leading-snug text-[var(--c-ink)] sm:text-base"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-[var(--c-accent)]" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Cta
                    location="rotor-hero"
                    interes={r.interes}
                    label={etiquetaCta}
                    className="w-full sm:w-auto"
                  />
                  <TelefonoLink
                    location="rotor-hero"
                    className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-[var(--c-line)] bg-white px-5 text-sm font-semibold text-[var(--c-ink)]"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    {TELEFONO}
                  </TelefonoLink>
                </div>
              </div>

              <figure>
                <div className="overflow-hidden rounded-xl border border-[var(--c-line)] bg-white">
                  <Image
                    src={imagenPrincipal.src}
                    alt={imagenPrincipal.alt}
                    width={imagenPrincipal.width}
                    height={imagenPrincipal.height}
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1023px) 100vw, 520px"
                    className="aspect-[16/10] w-full object-contain p-4"
                  />
                </div>
                {imagenPrincipal.caption ? (
                  <figcaption className="mt-3 text-[13px] leading-snug text-[var(--c-muted)]">
                    {imagenPrincipal.caption}
                  </figcaption>
                ) : null}
              </figure>
            </div>
          </div>
        </section>

        {/* Intro en dos párrafos, en usted. */}
        <Section tone="paper">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
            <div className="space-y-5 text-base leading-[1.7] text-[var(--c-ink-2)] sm:text-[1.0625rem]">
              {r.intro.map((parrafo) => (
                <p key={parrafo.slice(0, 40)}>{parrafo}</p>
              ))}
            </div>
            {otrasImagenes.length > 0 ? (
              <div className="space-y-6">
                {otrasImagenes.map((img) => (
                  <figure key={img.src}>
                    <div className="overflow-hidden rounded-xl border border-[var(--c-line)] bg-white">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        loading="lazy"
                        sizes="(max-width: 1023px) 100vw, 520px"
                        className="aspect-[16/10] w-full object-contain p-4"
                      />
                    </div>
                    {img.caption ? (
                      <figcaption className="mt-3 text-[13px] leading-snug text-[var(--c-muted)]">
                        {img.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </Section>

        {/* Especificaciones de las líneas que corresponden, tal como las publica el fabricante. */}
        <Section id="especificaciones" tone="surface">
          <Eyebrow>Líneas y rangos</Eyebrow>
          <SectionTitle className="max-w-3xl">Qué máquina balancea cada rotor</SectionTitle>
          <Lead>{r.lineasTexto}</Lead>

          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2">
            {filas.map((row) => (
              <article
                key={row.line}
                className="overflow-hidden rounded-xl border border-[var(--c-line)] bg-[var(--c-paper)]"
              >
                <div className="border-b border-[var(--c-line)] bg-[var(--c-surface-2)] px-5 py-4">
                  <h3 className="text-base font-semibold leading-snug text-[var(--c-ink)]">{row.line}</h3>
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

          <div className="mt-10 flex flex-col gap-x-8 gap-y-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/cimat/especificaciones"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--c-ink)] underline-offset-4 hover:underline"
            >
              Tabla técnica completa de todas las líneas
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
            <Link
              href="/cimat#lineas"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--c-ink)] underline-offset-4 hover:underline"
            >
              Todas las líneas CIMAT
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Section>

        {/* Grado G de referencia, desde la misma tabla de /cimat/normas-y-grados. */}
        <Section id="grado" tone="paper">
          <Eyebrow>{grados.eyebrow}</Eyebrow>
          <SectionTitle className="max-w-3xl">Qué grado de balanceo exige este rotor</SectionTitle>
          <Lead>{r.gradoNota}</Lead>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12">
            {filasGrado.map((g) => (
              <div
                key={g.grade}
                className="rounded-xl border border-[var(--c-line)] bg-[var(--c-surface-2)] p-6 sm:p-8"
              >
                <dt className="text-[2rem] font-bold leading-none tracking-tight text-[var(--c-ink)]">
                  {g.grade}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-[var(--c-ink-2)]">
                  {g.application}
                  <span className="mt-2 block text-[13px] text-[var(--c-muted)]">{g.sector}</span>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-sm text-[var(--c-muted)]">
            La tabla completa de grados según ISO 21940-11 está en{" "}
            <Link
              href="/cimat/normas-y-grados"
              className="font-semibold text-[var(--c-ink)] underline underline-offset-4"
            >
              normas y grados de calidad
            </Link>
            .
          </p>
        </Section>

        <FaqSection items={r.faqs} title={`Lo que se pregunta sobre la ${r.h1.replace(" CIMAT", "").toLowerCase()}`} />

        {/* Un solo formulario por página, con el interés y la línea ya cargados. */}
        <Section id="contacto" tone="dark" pad="feature">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
            <div>
              <Eyebrow dark>Solicitud de propuesta</Eyebrow>
              <h2 className="mt-4 text-pretty text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.5rem]">
                {etiquetaCta}
              </h2>
              <p className="mt-6 max-w-[58ch] text-base leading-[1.6] text-white/75 sm:text-[1.0625rem]">
                Indíquenos qué {r.rotor} necesita balancear y, si los tiene a mano, el peso, las
                dimensiones y el grado exigido. Un especialista de JEREN revisa la aplicación y
                responde con la configuración recomendada y los próximos pasos.
              </p>

              <p className="mt-8 text-sm text-white/55">
                ¿Prefiere escribirnos?{" "}
                <WhatsappLink
                  location="rotor-cta-final"
                  className="font-semibold text-white underline underline-offset-4"
                >
                  <MessageCircle className="mr-1 inline size-4 align-[-3px]" aria-hidden="true" />
                  {cta.whatsapp.label}
                </WhatsappLink>
              </p>
            </div>

            <div id="solicitar" className="scroll-mt-24 rounded-xl bg-white p-6 sm:p-8">
              <LeadForm
                ctaLocation={`rotor-${r.linea}-form`}
                interesInicial={r.interes}
                lineaInicial={r.linea}
                ctaLabel={etiquetaCta}
              />
            </div>
          </div>
        </Section>
      </main>

      <CimatFooter />
      <StickyCta />
      <WhatsappFlotante />
    </div>
  )
}
