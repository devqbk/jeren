"use client"

import { useState } from "react"
import Image from "next/image"
import { heroGaleria } from "@/lib/cimat-content"

/**
 * Galería del hero, de rotación manual.
 *
 * Solo la imagen activa está en el DOM: antes las cinco se descargaban al
 * entrar el carrusel al viewport. La primera es el LCP en desktop y va con
 * `priority` (eager + fetchpriority high + preload); las demás cargan recién
 * cuando el visitante las pide. Sin autoplay: nadie lee cinco epígrafes que
 * cambian solos, y en mobile era pintado permanente en el hilo principal.
 */
export function HeroCarousel() {
  const [activo, setActivo] = useState(0)
  const img = heroGaleria[activo]

  return (
    <figure className="mt-6">
      <div className="relative overflow-hidden rounded-xl border border-[var(--c-line)] bg-white">
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          priority={activo === 0}
          loading={activo === 0 ? "eager" : "lazy"}
          fetchPriority={activo === 0 ? "high" : "auto"}
          sizes="(max-width: 1023px) 100vw, 620px"
          data-cf-img={activo}
          className="h-56 w-full object-cover object-center sm:h-72 lg:h-80"
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <figcaption className="min-h-[2.5em] text-[13px] leading-snug text-[var(--c-muted)]">
          {img.caption}
        </figcaption>

        <div
          role="tablist"
          aria-label="Modelos de balanceadora"
          className="flex shrink-0 items-center gap-1"
        >
          {heroGaleria.map((item, i) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={i === activo}
              aria-label={`Ver ${item.caption ?? item.alt}`}
              data-cf-slide={i}
              onClick={() => setActivo(i)}
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
