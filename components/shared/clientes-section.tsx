"use client"

import { useLanguage } from "@/contexts/language-context"

// Clientes reales — fabricantes OEM en Argentina (mayoría TDF)
const clientes = [
  { name: "Mirgor", detail: "UNPE" },
  { name: "Mirgor", detail: "UNA" },
  { name: "Mirgor", detail: "UNEC" },
  { name: "Newsan", detail: "AA" },
  { name: "Newsan", detail: "SMT" },
  { name: "BGH", detail: null },
  { name: "BGH", detail: "SMT" },
  { name: "Midea Carrier", detail: null },
  { name: "Audivic", detail: null },
  { name: "Electro Fueguina", detail: "AA" },
  { name: "Electro Fueguina", detail: "SMT" },
  { name: "Radio Victoria", detail: null },
  { name: "Industrias Sur", detail: null },
  { name: "Solnik", detail: null },
  { name: "Athuel", detail: null },
  { name: "KMG", detail: null },
  { name: "Aires del Sur", detail: null },
]

interface ClientesSectionProps {
  variant?: "default" | "muted"
}

export function ClientesSection({ variant = "muted" }: ClientesSectionProps) {
  return (
    <section className={variant === "muted" ? "bg-muted/50 py-16 lg:py-20" : "py-16 lg:py-20"}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Clientes
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Empresas que confían en nosotros
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Trabajamos con los principales fabricantes de electrónica y equipos de climatización de la Argentina.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {clientes.map((cliente, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
            >
              <span>{cliente.name}</span>
              {cliente.detail && (
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                  {cliente.detail}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
