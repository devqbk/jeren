import { MapPin } from "lucide-react"
import { sucursales } from "@/lib/data"

interface SucursalesSectionProps {
  variant?: "default" | "muted"
}

export function SucursalesSection({ variant = "default" }: SucursalesSectionProps) {
  return (
    <section className={variant === "muted" ? "bg-muted/50 py-20 lg:py-24" : "py-20 lg:py-24"}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Sucursales
          </h2>
          <p className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Presencia en todo el país
          </p>
        </div>

        {/* Sucursales Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {sucursales.map((sucursal) => (
            <a
              key={sucursal.name}
              href={sucursal.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {sucursal.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary/80">{sucursal.company}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {sucursal.address}
                    <br />
                    {sucursal.postalCode}
                    {sucursal.province !== "Buenos Aires" && (
                      <>
                        <br />
                        {sucursal.province}
                      </>
                    )}
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver en Google Maps →
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
