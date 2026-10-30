import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, MessageCircle } from "lucide-react"
import { CimatTokens, Section } from "@/components/cimat/ui"
import { GraciasTracker, WhatsappLink } from "@/components/cribmaster/cliente"
import { CribmasterFooter, CribmasterHeader } from "@/components/cribmaster/layout"
import { CribmasterTokens } from "@/components/cribmaster/tokens"
import { EMAIL, TELEFONO, formulario } from "@/lib/cribmaster-content"

/** Página de conversión. Noindex: existe para medir, no para posicionar. */
export const metadata: Metadata = {
  title: { absolute: "Consulta recibida | JEREN" },
  robots: { index: false, follow: false },
}

export default function GraciasPage() {
  return (
    <div data-cimat data-cribmaster className="min-h-screen antialiased">
      <CimatTokens />
      <CribmasterTokens />
      <GraciasTracker />
      <CribmasterHeader />

      <main>
        <Section tone="surface" pad="feature">
          <div className="mx-auto max-w-[62ch] text-center">
            <CheckCircle2 className="mx-auto size-12 cm-yellow" aria-hidden="true" />
            <h1 className="mt-6 text-pretty text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.25rem]">
              Consulta recibida
            </h1>
            <p className="mt-6 text-base leading-[1.6] text-[var(--c-ink-2)] sm:text-[1.0625rem]">{formulario.confirmacion}</p>
            <p className="mt-3 text-base font-semibold leading-[1.6] text-[var(--c-ink)] sm:text-[1.0625rem]">{formulario.respuesta}</p>

            <p className="mt-8">
              <WhatsappLink
                location="gracias"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[var(--c-line)] bg-white px-6 text-[0.95rem] font-semibold text-[var(--c-ink)] transition-colors hover:border-[var(--c-ink)]"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Escribirnos por WhatsApp
              </WhatsappLink>
            </p>

            <p className="mt-10 text-sm text-[var(--c-muted)]">
              Si es urgente: {TELEFONO} · {EMAIL}
            </p>
            <p className="mt-8 text-sm">
              <Link href="/cribmaster" className="text-[var(--c-muted)] underline underline-offset-4 hover:text-[var(--c-ink)]">
                Volver a la página de CribMaster
              </Link>
            </p>
          </div>
        </Section>
      </main>

      <CribmasterFooter />
    </div>
  )
}
