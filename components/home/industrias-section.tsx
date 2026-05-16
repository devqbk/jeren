import Link from "next/link"
import { Fuel, Mountain, Sprout, CircuitBoard, Wind, ArrowRight } from "lucide-react"

const industrias = [
  {
    slug: "petroleo-gas",
    name: "Petróleo y Gas",
    description: "Equipamiento y soluciones para la industria petrolera y gasífera.",
    icon: Fuel,
    href: "/petroleo-gas",
  },
  {
    slug: "mineria",
    name: "Minería",
    description: "Tecnología y maquinaria especializada para operaciones mineras.",
    icon: Mountain,
    href: "/mineria",
  },
  {
    slug: "agro",
    name: "Agro",
    description: "Soluciones tecnológicas para la industria agropecuaria.",
    icon: Sprout,
    href: "/agro",
  },
  {
    slug: "electronica",
    name: "Electrónica",
    description: "Maquinaria SMT, inspección y automatización para la industria electrónica.",
    icon: CircuitBoard,
    href: "/electronica",
  },
  {
    slug: "aire-acondicionado",
    name: "Aire y Refrigeración",
    description: "Compresores, detección de fugas y herramientas para HVAC/R.",
    icon: Wind,
    href: "/aire-acondicionado",
  },
]

export function IndustriasSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10">
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industrias.map((industria) => {
            const Icon = industria.icon
            return (
              <Link
                key={industria.slug}
                href={industria.href}
                className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {industria.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-snug">
                  {industria.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Ver más <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
