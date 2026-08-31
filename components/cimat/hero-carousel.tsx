"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { heroGaleria } from "@/lib/cimat-content"

const INTERVALO = 5000

/**
 * Galería del hero. La línea no es una sola máquina, así que el hero rota entre
 * los tipos con sus bolitas de control.
 *
 * Solo la primera imagen tiene `priority`: es el LCP. El resto entra con lazy.
 * Si el visitante prefiere menos movimiento, o toca una bolita, la rotación se
 * detiene y queda manual.
 */
export function HeroCarousel() {
  const [activo, setActivo] = useState(0)
  const [auto, setAuto] = useState(true)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    if (!auto) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduce.matches) return

    timer.current = window.setInterval(() => {
      setActivo((i) => (i + 1) % heroGaleria.length)
    }, INTERVALO)

    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [auto])

  return (
    <figure className="mt-6">
      <div className="relative overflow-hidden rounded-xl border border-[var(--c-line)] bg-white">
        {heroGaleria.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading="lazy"
            sizes="(max-width: 1023px) 100vw, 620px"
            aria-hidden={i !== activo}
            data-cf-img={i}
            className={`h-56 w-full object-cover object-center transition-opacity duration-500 sm:h-72 lg:h-80 ${
              i === activo ? "opacity-100" : "absolute inset-0 opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <figcaption className="min-h-[2.5em] text-[13px] leading-snug text-[var(--c-muted)]">
          {heroGaleria.map((img, i) => (
            <span key={img.src} data-cf-cap={i} hidden={i !== activo}>
              {img.caption}
            </span>
          ))}
        </figcaption>

        <div
          role="tablist"
          aria-label="Modelos de balanceadora"
          className="flex shrink-0 items-center gap-1"
        >
          {heroGaleria.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === activo}
              aria-label={`Ver ${img.caption ?? img.alt}`}
              data-cf-slide={i}
              onClick={() => {
                setAuto(false)
                setActivo(i)
              }}
              className="flex size-8 items-center justify-center rounded-full"
            >
              <span
                className={`block size-2 rounded-full transition-colors ${
                  i === activo ? "bg-[var(--c-accent)]" : "bg-[var(--c-line)]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </figure>
  )
}
