import Image from "next/image"
import { Check, MessageCircle, Phone } from "lucide-react"
import { TELEFONO, type RotorPage as RotorPageContent } from "@/lib/cimat-content"
import { Breadcrumbs, type Crumb } from "./breadcrumbs"
import { Cta } from "./cta"
import { TelefonoLink, WhatsappLink } from "./secundarios"
import { Eyebrow, container } from "./ui"

/**
 * Hero de conversión para páginas de país (Perú, 28/10/2026).
 *
 * El hero de rotor —párrafo largo, seis viñetas y una foto de catálogo en una
 * caja blanca— se leía como la página de un libro. Acá se aplica lo que una
 * landing comercial pide en el primer viewport: titular corto, UNA frase de
 * valor, tres pruebas de una línea, la acción principal y la secundaria
 * (WhatsApp, que es por donde entran los contactos de Perú), una foto
 * protagonista sin marco de catálogo, y una franja de cifras con su fuente.
 *
 * El contenido largo (`bullets`, `subtitle`) no se pierde: la página lo
 * muestra en la introducción, donde se lee después de decidir seguir.
 */
export function HeroPais({
  r,
  crumbs,
  etiquetaCta,
}: {
  r: RotorPageContent
  crumbs: Crumb[]
  etiquetaCta: string
}) {
  const h = r.heroPais
  if (!h) return null

  return (
    <section id="top" className="scroll-mt-24">
      {/* Migas en una franja clara: sobre el fondo oscuro no se leen. */}
      <div className="border-b border-[var(--c-line)] bg-[var(--c-surface)]">
        <div className={`${container} py-3`}>
          <Breadcrumbs items={crumbs} />
        </div>
      </div>

      <div className="relative overflow-hidden bg-[var(--c-dark)] text-white">
        {/* La misma regla roja→amarilla de los títulos, como borde superior del hero. */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[image:var(--c-grad)]" />
        {/* Un halo tenue detrás de la foto: separa la máquina del fondo sin un marco. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/2 hidden size-[720px] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(221,0,0,0.16),transparent)] lg:block"
        />

        <div className={container}>
          <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)] lg:items-center lg:gap-14 lg:py-20">
            <div className="relative">
              <Eyebrow dark>{r.eyebrow}</Eyebrow>
              <h1 className="mt-4 text-pretty text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-[2.6rem] lg:text-[3.1rem]">
                {r.h1}
              </h1>
              <p className="mt-5 max-w-[52ch] text-base leading-[1.55] text-white/75 sm:text-[1.0625rem]">
                {h.subtitulo}
              </p>

              <ul className="mt-7 space-y-3">
                {h.claims.map((claim) => (
                  <li key={claim} className="flex gap-3 text-[15px] leading-snug text-white/90 sm:text-base">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--c-accent)]">
                      <Check className="size-3.5 text-white" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span>{claim}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Cta location="pais-hero" interes={r.interes} label={etiquetaCta} className="w-full sm:w-auto" />
                <WhatsappLink
                  location="pais-hero"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/25 px-5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:text-[0.95rem]"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Escribir por WhatsApp
                </WhatsappLink>
              </div>

              <p className="mt-5 text-[13px] leading-snug text-white/55">
                Respuesta el día hábil siguiente · Asesoramiento sin cargo ·{" "}
                <TelefonoLink location="pais-hero" className="whitespace-nowrap underline-offset-4 hover:text-white hover:underline">
                  <Phone className="mr-1 inline size-3.5 align-[-2px]" aria-hidden="true" />
                  {TELEFONO}
                </TelefonoLink>
              </p>
            </div>

            <figure className="relative">
              <div className="overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
                <Image
                  src={h.imagen.src}
                  alt={h.imagen.alt}
                  width={h.imagen.width}
                  height={h.imagen.height}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1023px) 100vw, 640px"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              {h.imagen.caption ? (
                <figcaption className="mt-3 text-[13px] leading-snug text-white/55">{h.imagen.caption}</figcaption>
              ) : null}
            </figure>
          </div>
        </div>

        {/* Franja de cifras: cada una con su fuente, como la barra de confianza de /cimat. */}
        <div className="border-t border-white/10 bg-[var(--c-dark-2)]">
          <div className={container}>
            <dl className="grid gap-x-8 divide-y divide-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {h.cifras.map((cifra) => (
                <div key={cifra.fuente} className="py-5 lg:px-6 lg:first:pl-0 lg:last:pr-0">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--c-accent-2)]">
                    {cifra.fuente}
                  </dt>
                  <dd className="mt-2">
                    <span className="block text-xl font-bold leading-none tracking-tight text-white">{cifra.valor}</span>
                    <span className="mt-1.5 block text-[13px] leading-snug text-white/60">{cifra.etiqueta}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
