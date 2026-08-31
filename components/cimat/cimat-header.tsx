import Image from "next/image"
import Link from "next/link"
import { Cta } from "./cta"
import { HeaderNav } from "./header-nav"
import { container } from "./ui"

/**
 * Header propio de la landing (standalone): sin navegación al resto de jeren.com.
 * Firma de representación + navegación breve + el CTA único, que acá va outline
 * porque el formulario del hero ya está en pantalla.
 */
export function CimatHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--c-line)] bg-[var(--c-paper)]/95 backdrop-blur-sm">
      <div className={container}>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[72px]">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Link
              href="/cimat"
              className="flex shrink-0 items-center gap-2 rounded-sm"
              aria-label="JEREN SRL — volver al inicio de la página"
            >
              <Image
                src="/images/logo.png"
                alt="Logo de JEREN SRL"
                width={88}
                height={88}
                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
              />
              <span className="hidden text-[11px] font-semibold uppercase leading-tight tracking-[0.14em] text-[var(--c-jeren)] sm:block">
                JEREN SRL
              </span>
            </Link>

            <span
              className="h-7 w-px shrink-0 bg-[var(--c-line)] sm:h-8"
              aria-hidden="true"
            />

            <div className="flex min-w-0 items-center gap-2">
              <Image
                src="/images/brands/cimat-clean.png"
                alt="Logo de CIMAT"
                width={576}
                height={177}
                className="h-6 w-auto object-contain sm:h-7"
              />
              <span className="hidden text-[11px] leading-tight text-[var(--c-muted)] lg:block">
                Representante oficial
                <br />
                en Argentina
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <HeaderNav />
            <Cta
              location="header"
              variant="outline"
              className="hidden shrink-0 px-4 py-2.5 text-[13px] sm:inline-flex sm:px-5 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
