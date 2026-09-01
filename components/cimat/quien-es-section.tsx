import { numeros, quienEs } from "@/lib/cimat-content"
import { Eyebrow, Section, displayNumber } from "./ui"

/**
 * Confianza: quién fabrica la máquina, las cifras del fabricante, y la prueba
 * disponible hoy — referencias globales con su aclaración y verificaciones de
 * norma. El detalle de Ascential Technologies salió de la landing.
 */
export function QuienEsSection() {
  return (
    <Section id="cimat" tone="dark" pad="feature">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <Eyebrow dark>{quienEs.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-pretty text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-[2.5rem]">
            {quienEs.title}
          </h2>
        </div>

        <div className="space-y-5 text-[15px] leading-[1.7] text-white/80 sm:text-base">
          {quienEs.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <dl className="mt-10 grid gap-x-8 gap-y-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:mt-12 lg:pt-12 lg:grid-cols-3">
        {numeros.items.map((item) => (
          <div key={item.value}>
            <dt className={`${displayNumber} text-white`}>{item.value}</dt>
            <dd className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-white/55">
              {item.label}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 border-t border-white/15 pt-10 lg:mt-12 lg:pt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
          Referencias
        </p>
        {/* Sin autorización no se pueden usar los logos: van como wordmarks
            tipográficos, que es lo que más se les parece en peso visual. */}
        <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/12 sm:grid-cols-4">
          {quienEs.logos.map((name) => (
            <li
              key={name}
              className="flex items-center justify-center bg-[var(--c-dark)] px-4 py-5 text-center text-base font-semibold leading-tight tracking-tight text-white/85 sm:text-lg"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      <dl className="mt-10 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-3 lg:mt-12 lg:pt-12">
        {quienEs.verificaciones.map((norma) => (
          <div key={norma.code}>
            <dt className="text-sm font-bold tracking-tight text-white">{norma.code}</dt>
            <dd className="mt-2 text-[13px] leading-relaxed text-white/60">{norma.desc}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
