import type * as React from "react"
import { Activity, ClockAlert, Fan, Gauge, Ruler, Wrench } from "lucide-react"
import { problemas, type ProblemIcon } from "@/lib/cimat-content"
import { Eyebrow, Section, SectionTitle } from "./ui"

const icons: Record<ProblemIcon, React.ComponentType<{ className?: string }>> = {
  vibration: Activity,
  downtime: ClockAlert,
  grade: Gauge,
  calibration: Ruler,
  turbo: Fan,
  tooling: Wrench,
}

export function ProblemasSection() {
  return (
    <Section id="problemas" tone="paper">
      <Eyebrow>{problemas.eyebrow}</Eyebrow>
      <SectionTitle className="max-w-3xl">{problemas.title}</SectionTitle>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {problemas.cards.map((card) => {
          const Icon = icons[card.icon]
          return (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-xl border border-[var(--c-line)] bg-[var(--c-surface-2)] p-6 sm:p-8"
            >
              <Icon className="size-6 text-[var(--c-accent)]" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold leading-snug text-[var(--c-ink)]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--c-ink-2)]">{card.body}</p>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
