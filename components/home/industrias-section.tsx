"use client"

import Link from "next/link"
import { Fuel, Mountain, Sprout, CircuitBoard, Wind, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const industriasMeta = [
  { key: "petroleoGas" as const,       icon: Fuel,         href: "/petroleo-gas" },
  { key: "mineria" as const,           icon: Mountain,     href: "/mineria" },
  { key: "agro" as const,              icon: Sprout,       href: "/agro" },
  { key: "electronica" as const,       icon: CircuitBoard, href: "/electronica" },
  { key: "aireRefrigeracion" as const, icon: Wind,         href: "/aire-acondicionado" },
]

export function IndustriasSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t.industrias.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            {t.industrias.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {t.industrias.description}
          </p>
        </div>

        {/* Industrias Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industriasMeta.map(({ key, icon: Icon, href }) => {
            const item = t.industrias.items[key]
            return (
              <Link
                key={key}
                href={href}
                className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-snug">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {t.industrias.verMas} <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
