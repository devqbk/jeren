"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageCircle } from "lucide-react"
import { useScrolledPast } from "@/components/cimat/scroll"
import { container } from "@/components/cimat/ui"
import { cn } from "@/lib/utils"
import {
  CTA_LABEL,
  FORM_ANCHOR,
  TELEFONO_HREF,
  WHATSAPP_URL,
  headerNav,
  stickyBar,
} from "@/lib/cribmaster-content"
import { LEAD_FLAG, cmTrack, cmTrackCta, irAlFormulario } from "./track"

// ── CTA ──────────────────────────────────────────────────────────────────────

const variants = {
  primary: "bg-[var(--c-accent)] text-white shadow-sm hover:bg-[var(--c-accent-hover)]",
  outline:
    "border border-[var(--c-line)] bg-[var(--c-paper)] text-[var(--c-ink)] hover:border-[var(--c-ink)]",
  onDark: "bg-[var(--c-accent-2)] text-[var(--c-ink)] hover:bg-[#ffd24d]",
} as const

export function Cta({
  location,
  label = CTA_LABEL,
  variant = "primary",
  className,
}: {
  location: string
  label?: string
  variant?: keyof typeof variants
  className?: string
}) {
  return (
    <a
      href={FORM_ANCHOR}
      onClick={(e) => {
        if (irAlFormulario(location)) e.preventDefault()
      }}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors sm:text-[0.95rem]",
        variants[variant],
        className
      )}
    >
      {label}
    </a>
  )
}

export function WhatsappLink({
  location,
  className,
  children,
}: {
  location: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => cmTrack("whatsapp_click", { cta_location: location })}
      className={className}
    >
      {children}
    </a>
  )
}

export function TelefonoLink({
  location,
  className,
  children,
}: {
  location: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={TELEFONO_HREF}
      onClick={() => cmTrack("phone_click", { cta_location: location })}
      className={className}
    >
      {children}
    </a>
  )
}

// ── Navegación del header ────────────────────────────────────────────────────

export function HeaderNav() {
  const pathname = usePathname()
  const enLanding = pathname === "/cribmaster"
  const [seccion, setSeccion] = useState<string>(headerNav[0].href)

  useEffect(() => {
    if (!enLanding) return
    const anclas = headerNav.map((i) => i.href.slice(1))
    const nodos = anclas
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => n !== null)
    if (nodos.length === 0) return
    const visibles = new Set<string>()
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visibles.add(e.target.id)
          else visibles.delete(e.target.id)
        }
        const enPantalla = anclas.filter((id) => visibles.has(id))
        if (enPantalla.length > 0) setSeccion("#" + enPantalla[0])
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: 0 }
    )
    nodos.forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [enLanding])

  return (
    <nav aria-label="Secciones" className="hidden lg:block">
      <ul className="flex items-center gap-6">
        {headerNav.map((item) => {
          const on = enLanding && seccion === item.href
          return (
            <li key={item.href}>
              <Link
                href={enLanding ? item.href : `/cribmaster${item.href === "#top" ? "" : item.href}`}
                aria-current={on ? "page" : undefined}
                className={cn(
                  "relative block py-1 text-sm transition-colors",
                  on
                    ? "font-semibold text-[var(--c-ink)] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-[var(--c-accent-2)]"
                    : "font-medium text-[var(--c-ink-2)] hover:text-[var(--c-ink)]"
                )}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

// ── Barra persistente (mobile) y WhatsApp flotante ───────────────────────────

export function StickyCta() {
  const visible = useScrolledPast()
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-[var(--c-line)] bg-[var(--c-paper)]/97 backdrop-blur-sm transition-transform duration-200 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!visible}
    >
      <div className={`${container} flex items-center gap-3 py-3`}>
        <p className="hidden min-w-0 flex-1 text-sm text-[var(--c-ink-2)] sm:block">
          <span className="font-semibold text-[var(--c-ink)]">{stickyBar.titulo}</span> —{" "}
          {stickyBar.texto}
        </p>
        <a
          href={FORM_ANCHOR}
          tabIndex={visible ? undefined : -1}
          onClick={() => cmTrackCta("sticky")}
          className="flex min-h-11 flex-1 items-center justify-center rounded-md bg-[var(--c-accent)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--c-accent-hover)] sm:flex-none"
        >
          {CTA_LABEL}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          aria-label={stickyBar.whatsappAria}
          onClick={() => cmTrack("whatsapp_click", { cta_location: "sticky" })}
          className="flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-[var(--c-line)] px-3 text-sm font-semibold text-[var(--c-ink)] transition-colors hover:border-[var(--c-ink)] sm:px-4"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

export function WhatsappFlotante() {
  const barraVisible = useScrolledPast()
  const [formularioEnVista, setFormularioEnVista] = useState(false)

  useEffect(() => {
    const nodo = document.getElementById("contacto")
    if (!nodo) return
    const obs = new IntersectionObserver(([entrada]) => setFormularioEnVista(entrada.isIntersecting), {
      threshold: 0.05,
    })
    obs.observe(nodo)
    return () => obs.disconnect()
  }, [])

  const visibilidad = formularioEnVista ? "hidden" : barraVisible ? "hidden lg:flex" : "flex"

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={stickyBar.whatsappAria}
      onClick={() => cmTrack("whatsapp_click", { cta_location: "flotante" })}
      className={`${visibilidad} fixed bottom-24 right-4 z-50 min-h-12 items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 sm:right-6 lg:bottom-6`}
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
      WhatsApp
    </a>
  )
}

/** Registra la conversión al llegar a /cribmaster/gracias, una vez por envío. */
export function GraciasTracker() {
  useEffect(() => {
    let enviado = false
    try {
      enviado = window.sessionStorage.getItem(LEAD_FLAG) === "1"
      if (enviado) window.sessionStorage.removeItem(LEAD_FLAG)
    } catch {
      enviado = false
    }
    if (enviado) cmTrack("lead_conversion")
  }, [])
  return null
}
