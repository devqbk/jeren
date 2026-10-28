import Image from "next/image"
import { Check, MessageCircle, Phone } from "lucide-react"
import { TELEFONO, type RotorPage as RotorPageContent } from "@/lib/cimat-content"
import { Breadcrumbs, type Crumb } from "./breadcrumbs"
import { Cta } from "./cta"
import { LeadForm } from "./lead-form"
import { TelefonoLink, WhatsappLink } from "./secundarios"
import { Eyebrow, container } from "./ui"

/**
 * Hero de conversión para páginas de país (Perú, 28/10/2026).
 *
 * Misma anatomía que el hero de /cimat, que es el patrón probado de la landing:
 * fondo claro de la familia del sitio (nada de bloque negro), titular y
 * argumento a la izquierda, FORMULARIO a la derecha en el primer viewport, y
 * debajo una barra de confianza con cifras atribuidas. La foto va bajo el
 * argumento, como la galería del hero principal, para que el primer viewport
 * tenga texto, prueba visual y pedido de datos sin competir entre sí.
 *
 * Mobile: el DOM es el orden de lectura —H1, frase, tres pruebas, botón al
 * formulario y WhatsApp, foto, formulario, cifras—. En desktop la grilla ubica
 * cada bloque a mano, así que ese orden no cambia el layout.
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
    <section id="top" className="scroll-mt-24 border-b border-[var(--c-line)] bg-[var(--c-surface)]">
      <div className={container}>
        {/* Migas compactas: cada píxel acá empuja el botón del formulario bajo el pliegue
            (medido el 28/10: 889 px de 896 con las migas holgadas y cuatro líneas de microcopia). */}
        <div className="pt-4 sm:pt-5">
          <Breadcrumbs items={crumbs} />
        </div>

        <div className="grid gap-10 pb-12 pt-5 sm:pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,470px)] lg:items-start lg:gap-16 lg:pb-20 lg:pt-6">
          <div className="lg:col-start-1 lg:row-start-1">
            <Eyebrow>{r.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-pretty text-[1.85rem] font-bold leading-[1.08] tracking-tight sm:text-[2.4rem] lg:text-[2.75rem]">
              {r.h1}
            </h1>
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <p className="max-w-[56ch] text-base leading-[1.6] text-[var(--c-ink-2)] sm:text-[1.0625rem]">
              {h.subtitulo}
            </p>

            <ul className="mt-6 space-y-2.5">
              {h.claims.map((claim) => (
                <li key={claim} className="flex gap-2.5 text-[15px] leading-snug text-[var(--c-ink)] sm:text-base">
                  <Check className="mt-0.5 size-4 shrink-0 text-[var(--c-accent)]" aria-hidden="true" />
                  <span>{claim}</span>
                </li>
              ))}
            </ul>

            {/* Mobile: botón al formulario, que queda más abajo. Desktop: el formulario ya está al lado. */}
            <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] gap-3 lg:hidden">
              <Cta location="pais-hero-mobile" interes={r.interes} label={etiquetaCta} className="w-full" />
              <WhatsappLink
                location="pais-hero-mobile"
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-[var(--c-line)] bg-white px-4 text-sm font-semibold text-[var(--c-ink)]"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </WhatsappLink>
            </div>

            {/* Desktop: canales secundarios en una línea, sin competir con el formulario. */}
            <p className="mt-6 hidden text-sm text-[var(--c-muted)] lg:block">
              ¿Prefiere escribirnos?{" "}
              <WhatsappLink
                location="pais-hero"
                className="font-semibold text-[var(--c-ink)] underline-offset-4 hover:underline"
              >
                <MessageCircle className="mr-1 inline size-4 align-[-3px]" aria-hidden="true" />
                WhatsApp
              </WhatsappLink>
              {" · "}
              <TelefonoLink location="pais-hero" className="font-semibold text-[var(--c-ink)] underline-offset-4 hover:underline">
                <Phone className="mr-1 inline size-4 align-[-3px]" aria-hidden="true" />
                {TELEFONO}
              </TelefonoLink>
            </p>

            <figure className="mt-8">
              <div className="overflow-hidden rounded-xl border border-[var(--c-line)] bg-white">
                <Image
                  src={h.imagen.src}
                  alt={h.imagen.alt}
                  width={h.imagen.width}
                  height={h.imagen.height}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1023px) 100vw, 640px"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              {h.imagen.caption ? (
                <figcaption className="mt-3 text-[13px] leading-snug text-[var(--c-muted)]">{h.imagen.caption}</figcaption>
              ) : null}
            </figure>
          </div>

          <div id="solicitar" className="flex scroll-mt-24 flex-col lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="flex flex-col rounded-xl border border-[var(--c-line)] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--c-muted)]">
                Solicitud de información
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--c-ink-2)]">
                Indíquenos qué rotores balancea. Un especialista le responde el día hábil siguiente;
                la cotización, en 48 horas hábiles. Sin cargo.
              </p>
              <div className="mt-6">
                <LeadForm
                  ctaLocation={`pais-${r.linea}-hero-form`}
                  interesInicial={r.interes}
                  lineaInicial={r.linea}
                  paisInicial={h.pais}
                  ctaLabel={etiquetaCta}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de confianza: cada cifra con su fuente, como en /cimat. */}
      <div className="border-t border-[var(--c-line)] bg-white">
        <div className={container}>
          <dl className="grid divide-y divide-[var(--c-line)] sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
            {h.cifras.map((cifra) => (
              <div key={cifra.fuente} className="py-6 sm:px-6 sm:first:pl-0 lg:last:pr-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--c-accent)]">
                  {cifra.fuente}
                </dt>
                <dd className="mt-2">
                  <span className="block text-xl font-bold leading-none tracking-tight text-[var(--c-ink)]">
                    {cifra.valor}
                  </span>
                  <span className="mt-1.5 block text-[13px] leading-snug text-[var(--c-muted)]">{cifra.etiqueta}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
