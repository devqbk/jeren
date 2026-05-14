import Link from "next/link"
import { Fuel, Mountain, Sprout, ArrowRight } from "lucide-react"
import { industriasNuevas } from "@/lib/data"

const iconMap = {
  fuel: Fuel,
  mountain: Mountain,
  sprout: Sprout,
}

export function IndustriasSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestro foco
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Industrias que atendemos
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Más de 40 años de experiencia representando tecnología de primer nivel para los sectores más exigentes de la Argentina.
          </p>
        </div>

        {/* Industrias Grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {industriasNuevas.map((industria) => {
            const Icon = iconMap[industria.icon as keyof typeof iconMap]
            return (
              <Link
                key={industria.slug}
                href={industria.href}
                className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {industria.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {industria.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Ver más <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
