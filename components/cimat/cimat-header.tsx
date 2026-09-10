import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Cta } from "./cta"
import { HeaderNav } from "./header-nav"
import { TelefonoLink } from "./secundarios"
import { container } from "./ui"

/**
 * Header propio de la landing: firma de representación + navegación breve + el
 * CTA único, que acá va outline porque el formulario del hero ya está en
 * pantalla.
 *
 * Los dos logos vuelven al inicio de esta landing. El de JEREN NO va al sitio
 * de la empresa: es tráfico pago y el logo es el elemento más visible; mandarlo
 * a jeren.com es una fuga. Ya se corrigió una vez y un commit posterior lo
 * deshizo — no volver a apuntarlo a "/".
 *
 * En mobile el CTA no entra, así que va el teléfono: con dos tercios del
 * tráfico en celular es la conversión más barata de la página.
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
              aria-label="JEREN SRL — volver al inicio de la landing"
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
              <Link
                href="/cimat"
                className="shrink-0 rounded-sm"
                aria-label="CIMAT — volver al inicio de la landing"
              >
                <Image
                  src="/images/brands/cimat-clean.png"
                  alt="Logo de CIMAT"
                  width={576}
                  height={177}
                  className="h-6 w-auto object-contain sm:h-7"
                />
              </Link>
              <span className="hidden text-[11px] leading-tight text-[var(--c-muted)] lg:block">
                Representante oficial
                <br />
                en Argentina
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <HeaderNav />
            <TelefonoLink
              location="header"
              className="flex min-h-11 shrink-0 items-center gap-1.5 rounded-md border border-[var(--c-line)] px-3 text-[13px] font-semibold text-[var(--c-ink)] sm:hidden"
            >
              <Phone className="size-4" aria-hidden="true" />
              Llamar
            </TelefonoLink>
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
