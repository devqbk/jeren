"use client"

import { MessageCircle } from "lucide-react"
import { CTA_LABEL, FORM_ANCHOR, cta, stickyBar } from "@/lib/cimat-content"
import { container } from "./ui"
import { trackCta, track } from "./track"
import { useScrolledPast } from "./scroll"

/**
 * Barra persistente de conversión — solo en mobile.
 *
 * En desktop molestaba: tapa contenido durante todo el scroll cuando el CTA ya
 * está en el header y el formulario está en el hero. En mobile, donde el header
 * no puede llevar el CTA, sigue siendo la única forma de tenerlo siempre a mano.
 */
export function StickyCta() {
  const visible = useScrolledPast()

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-[var(--c-line)] bg-[var(--c-paper)]/97 backdrop-blur-sm transition-transform duration-200 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
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
          onClick={() => trackCta("sticky")}
          className="flex min-h-11 flex-1 items-center justify-center rounded-md bg-[var(--c-accent)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--c-accent-hover)] sm:flex-none"
        >
          {CTA_LABEL}
        </a>
        <a
          href={cta.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          aria-label={stickyBar.whatsappAria}
          onClick={() => track("whatsapp_click", { cta_location: "sticky" })}
          className="flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-[var(--c-line)] px-3 text-sm font-semibold text-[var(--c-ink)] transition-colors hover:border-[var(--c-ink)] sm:px-4"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          {/* El comprador industrial no necesariamente decodifica el ícono solo. */}
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
