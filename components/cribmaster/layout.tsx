import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { container } from "@/components/cimat/ui"
import { EMAIL, TELEFONO, TELEFONO_HREF, footer } from "@/lib/cribmaster-content"
import { Cta, HeaderNav, TelefonoLink } from "./cliente"

/**
 * Header propio de la landing: JEREN + CribMaster como firma de distribución,
 * navegación por secciones y el CTA único. Los logos vuelven al inicio de la
 * landing (como en /cimat: no se manda el tráfico al sitio general).
 */
export function CribmasterHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--c-line)] bg-[var(--c-paper)]/95 backdrop-blur-sm">
      <div className={container}>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[72px]">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Link href="/cribmaster" className="flex shrink-0 items-center gap-2 rounded-sm" aria-label="JEREN SRL — volver al inicio">
              <Image src="/images/logo.png" alt="Logo de JEREN SRL" width={88} height={88} className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
              <span className="hidden text-[11px] font-semibold uppercase leading-tight tracking-[0.14em] text-[var(--c-jeren)] sm:block">
                JEREN SRL
              </span>
            </Link>

            <span className="h-7 w-px shrink-0 bg-[var(--c-line)] sm:h-8" aria-hidden="true" />

            <div className="flex min-w-0 items-center gap-2">
              <Link href="/cribmaster" className="shrink-0 rounded-sm" aria-label="CribMaster — volver al inicio">
                <Image src="/images/brands/cribmaster.png" alt="Logo de CribMaster" width={1276} height={287} className="h-6 w-auto object-contain sm:h-7" />
              </Link>
              <span className="hidden text-[11px] leading-tight text-[var(--c-muted)] lg:block">
                Distribuidor autorizado
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
            <Cta location="header" variant="outline" className="hidden shrink-0 px-4 py-2.5 text-[13px] sm:inline-flex sm:px-5 sm:text-sm" />
          </div>
        </div>
      </div>
    </header>
  )
}

export function CribmasterFooter() {
  return (
    <footer className="border-t border-[var(--c-line)] bg-[var(--c-surface-2)] pb-28 pt-12 sm:pt-16 lg:pb-16 lg:pt-20">
      <div className={container}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-16">
          <div>
            <div className="flex items-center gap-4">
              <Link href="/" className="rounded-sm" aria-label="JEREN SRL — ir al sitio de la empresa">
                <Image src="/images/logo.png" alt="Logo de JEREN SRL" width={88} height={88} className="h-10 w-10 object-contain" />
              </Link>
              <span className="h-8 w-px bg-[var(--c-line)]" aria-hidden="true" />
              <Link href="/cribmaster" className="rounded-sm" aria-label="CribMaster — volver al inicio">
                <Image src="/images/brands/cribmaster.png" alt="Logo de CribMaster" width={1276} height={287} className="h-7 w-auto object-contain" />
              </Link>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--c-ink-2)]">{footer.descripcion}</p>
            <div className="mt-6 text-sm">
              <a href={TELEFONO_HREF} className="block font-semibold text-[var(--c-ink)] hover:underline">
                {TELEFONO}
              </a>
              <a href={`mailto:${EMAIL}`} className="mt-1 block text-[var(--c-ink-2)] hover:underline">
                {EMAIL}
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--c-muted)]">Sedes</p>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3">
              {footer.sedes.map((sede) => (
                <li key={sede.ciudad}>
                  <p className="text-sm font-semibold text-[var(--c-ink)]">{sede.ciudad}</p>
                  <p className="mt-0.5 text-xs text-[var(--c-muted)]">{sede.razon}</p>
                  <address className="mt-2 text-[13px] not-italic leading-relaxed text-[var(--c-ink-2)]">
                    {sede.lineas.map((linea) => (
                      <span key={linea} className="block">
                        {linea}
                      </span>
                    ))}
                  </address>
                  <Link href={sede.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[13px] font-medium text-[var(--c-ink)] underline underline-offset-4">
                    Ver en el mapa
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--c-line)] pt-10 text-xs text-[var(--c-muted)]">
          <p>
            © {new Date().getFullYear()} JEREN SRL — Distribuidor autorizado de CribMaster en Argentina.{" "}
            <Link href="/privacidad" className="underline underline-offset-4 hover:text-[var(--c-ink)]">
              Política de privacidad
            </Link>
          </p>
          <p>{footer.legal}</p>
        </div>
      </div>
    </footer>
  )
}
