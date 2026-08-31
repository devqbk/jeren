import type * as React from "react"
import Image from "next/image"
import { DraftingCompass, GraduationCap, LifeBuoy, MapPinned, Package, Ship } from "lucide-react"
import { EMAIL, TELEFONO, soporte, type SupportIcon } from "@/lib/cimat-content"
import { Cta } from "./cta"
import { EmailLink, TelefonoLink } from "./secundarios"
import { Eyebrow, Lead, Section, SectionTitle } from "./ui"

const icons: Record<SupportIcon, React.ComponentType<{ className?: string }>> = {
  engineering: DraftingCompass,
  customs: Ship,
  parts: Package,
  training: GraduationCap,
  warranty: LifeBuoy,
  calibration: MapPinned,
}

export function SoporteSection() {
  return (
    <Section id="soporte" tone="jeren" pad="feature">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:items-start lg:gap-16">
        <div>
          <Eyebrow dark>{soporte.eyebrow}</Eyebrow>
          <SectionTitle className="text-white">{soporte.title}</SectionTitle>
          <Lead tone="dark">{soporte.intro}</Lead>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/15">
          <Image
            src={soporte.detalleImagen.src}
            alt={soporte.detalleImagen.alt}
            width={soporte.detalleImagen.width}
            height={soporte.detalleImagen.height}
            sizes="(max-width: 1023px) 100vw, 520px"
            className="h-64 w-full object-cover object-center sm:h-80 lg:h-full lg:min-h-[380px]"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-white/12 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {soporte.blocks.map((block) => {
          const Icon = icons[block.icon]
          return (
            <article
              key={block.title}
              className="flex h-full flex-col bg-[var(--c-jeren)] p-6 sm:p-8"
            >
              <Icon className="size-6 text-[var(--c-accent-2)]" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold leading-snug text-white">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{block.body}</p>
              {block.interes ? (
                <div className="mt-6">
                  <Cta
                    location={`soporte-${block.interes}`}
                    interes={block.interes}
                    className="w-full"
                  />
                </div>
              ) : null}
            </article>
          )
        })}
      </div>

      <div className="mt-10 grid gap-8 border-t border-white/15 pt-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:pt-12">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
            Dónde estamos
          </p>
          <ul className="mt-6 grid gap-6 sm:grid-cols-3">
            {soporte.sedes.map((sede) => (
              <li key={sede.ciudad}>
                <p className="text-sm font-semibold text-white">{sede.ciudad}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/60">{sede.detalle}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-white/70">
          <TelefonoLink location="soporte" className="block font-semibold text-white hover:underline">
            {TELEFONO}
          </TelefonoLink>
          <EmailLink location="soporte" className="mt-1 block hover:underline">
            {EMAIL}
          </EmailLink>
        </div>
      </div>
    </Section>
  )
}
