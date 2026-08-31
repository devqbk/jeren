"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { headerNav } from "@/lib/cimat-content"
import { cn } from "@/lib/utils"

/**
 * Navegación del header con estado activo.
 *
 * Resuelve dos casos: en las páginas técnicas marca la que se está viendo por
 * la ruta, y dentro de la landing sigue el scroll para marcar la sección que
 * está en pantalla.
 */
export function HeaderNav() {
  const pathname = usePathname()
  const enLanding = pathname === "/cimat"
  const [seccion, setSeccion] = useState<string>("")

  useEffect(() => {
    if (!enLanding) return

    const anclas = headerNav
      .filter((i) => i.href.startsWith("#"))
      .map((i) => i.href.slice(1))

    const nodos = anclas
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => n !== null)

    if (nodos.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        // La sección activa es la que está más arriba dentro del viewport.
        const visibles = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visibles.length > 0) setSeccion("#" + visibles[0].target.id)
      },
      // La franja de decisión es el tercio superior, debajo del header.
      { rootMargin: "-80px 0px -66% 0px", threshold: 0 }
    )

    nodos.forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [enLanding])

  function activo(href: string) {
    if (href.startsWith("#")) return enLanding && seccion === href
    return pathname.startsWith(href)
  }

  return (
    <nav aria-label="Secciones" className="hidden lg:block">
      <ul className="flex items-center gap-6">
        {headerNav.map((item) => {
          const on = activo(item.href)
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={on ? "page" : undefined}
                data-nav-target={item.href}
                className={cn(
                  "relative block py-1 text-sm transition-colors",
                  on
                    ? "font-semibold text-[var(--c-ink)] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-[var(--c-accent)]"
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
