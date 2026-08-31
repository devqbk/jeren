import Image from "next/image"
import Link from "next/link"
import { EMAIL, TELEFONO, TELEFONO_HREF, footer } from "@/lib/cimat-content"
import { container } from "./ui"

export function CimatFooter() {
  return (
    <footer className="border-t border-[var(--c-line)] bg-[var(--c-surface-2)] pb-28 pt-12 sm:pt-16 lg:pb-16 lg:pt-20">
      <div className={container}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-16">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Logo de JEREN SRL"
                width={88}
                height={88}
                className="h-10 w-10 object-contain"
              />
              <span className="h-8 w-px bg-[var(--c-line)]" aria-hidden="true" />
              <Image
                src="/images/brands/cimat-clean.png"
                alt="Logo de CIMAT"
                width={576}
                height={177}
                className="h-7 w-auto object-contain"
              />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--c-ink-2)]">
              {footer.descripcion}
            </p>
            <div className="mt-6 text-sm">
              <a
                href={TELEFONO_HREF}
                className="block font-semibold text-[var(--c-ink)] hover:text-[var(--c-accent)]"
              >
                {TELEFONO}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-1 block text-[var(--c-ink-2)] hover:text-[var(--c-accent)]"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--c-muted)]">
              Sedes
            </p>
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
                  <Link
                    href={sede.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[13px] font-medium text-[var(--c-accent)] hover:underline"
                  >
                    Ver en el mapa
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--c-line)] pt-6 text-xs text-[var(--c-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} JEREN SRL — Representante de CIMAT en Argentina.
          </p>
          <p>{footer.normas}</p>
        </div>
      </div>
    </footer>
  )
}
