import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { CimatFooter } from "@/components/cimat/cimat-footer"
import { CimatHeader } from "@/components/cimat/cimat-header"
import { GraciasTracker } from "@/components/cimat/gracias-tracker"
import { CimatTokens, Section } from "@/components/cimat/ui"
import { EMAIL, TELEFONO, formulario } from "@/lib/cimat-content"

/**
 * Página de conversión. Va en noindex: existe para medir, no para posicionar.
 */
export const metadata: Metadata = {
  title: { absolute: "Consulta recibida | JEREN" },
  robots: { index: false, follow: false },
}

export default function GraciasPage() {
  return (
    <div data-cimat className="min-h-screen antialiased">
      <CimatTokens />
      <GraciasTracker />
      <CimatHeader />

      <main>
        <Section tone="surface" pad="feature">
          <div className="mx-auto max-w-[62ch] text-center">
            <CheckCircle2
              className="mx-auto size-12 text-[var(--c-accent)]"
              aria-hidden="true"
            />
            <h1 className="mt-6 text-pretty text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.25rem]">
              Consulta recibida
            </h1>
            <p className="mt-6 text-base leading-[1.6] text-[var(--c-ink-2)] sm:text-[1.0625rem]">
              {formulario.confirmacion}
            </p>

            <div className="mt-10 rounded-xl border border-[var(--c-line)] bg-white p-6 text-left sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--c-muted)]">
                Mientras tanto
              </p>
              <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-[var(--c-ink-2)]">
                <li>
                  <Link
                    href="/cimat/especificaciones"
                    className="font-semibold text-[var(--c-ink)] underline underline-offset-4"
                  >
                    Especificaciones técnicas de todas las líneas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cimat/normas-y-grados"
                    className="font-semibold text-[var(--c-ink)] underline underline-offset-4"
                  >
                    Grados de calidad y normas aplicables
                  </Link>
                </li>
              </ul>
              <p className="mt-6 border-t border-[var(--c-line)] pt-6 text-sm text-[var(--c-muted)]">
                Si es urgente: {TELEFONO} · {EMAIL}
              </p>
            </div>

            <p className="mt-8 text-sm">
              <Link
                href="/cimat"
                className="text-[var(--c-muted)] underline underline-offset-4 hover:text-[var(--c-ink)]"
              >
                Volver a la página de CIMAT
              </Link>
            </p>
          </div>
        </Section>
      </main>

      <CimatFooter />
    </div>
  )
}
