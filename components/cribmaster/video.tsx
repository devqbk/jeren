"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Eyebrow, Section, SectionTitle } from "@/components/cimat/ui"
import { videos } from "@/lib/cribmaster-content"
import { cmTrack } from "./track"

/**
 * Videos de YouTube con fachada: hasta que la persona toca Play solo se carga
 * la miniatura. Un iframe de YouTube por video pesa más que toda la página.
 */
export function VideoSection() {
  const [activo, setActivo] = useState<string | null>(null)

  return (
    <Section id="video" tone="paper">
      <Eyebrow>{videos.eyebrow}</Eyebrow>
      <SectionTitle className="max-w-3xl">{videos.title}</SectionTitle>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12">
        {videos.items.map((video) => {
          const abierto = activo === video.id
          return (
            <figure key={video.id} className="overflow-hidden rounded-xl border border-[var(--c-line)] bg-[var(--c-dark)]">
              <div className="relative aspect-video w-full">
                {abierto ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setActivo(video.id)
                      cmTrack("video_play", { video_id: video.id })
                    }}
                    aria-label={`Reproducir: ${video.title}`}
                    className="group absolute inset-0 h-full w-full"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex size-16 items-center justify-center rounded-full bg-[var(--c-accent-2)] text-[var(--c-ink)] shadow-lg transition-transform group-hover:scale-105">
                        <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
                      </span>
                    </span>
                  </button>
                )}
              </div>
              <figcaption className="px-5 py-4 text-sm font-semibold text-white">{video.title}</figcaption>
            </figure>
          )
        })}
      </div>
      <p className="mt-6 text-[12px] text-[var(--c-muted)]">{videos.aclaracion}</p>
    </Section>
  )
}
