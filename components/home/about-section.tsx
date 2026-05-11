import { Building2, Clock, ShieldCheck } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Quiénes somos
          </h2>
          <p className="mt-4 text-pretty text-2xl font-semibold text-foreground sm:text-3xl">
            Con más de 40 años de experiencia, Jeren S.R.L. y Tecnomaq S.R.L. son líderes en la comercialización, instalación y mantenimiento de equipos para la industria electrónica, aire acondicionado y refrigeración.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 font-semibold text-foreground">3 Sucursales</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Oficinas en Buenos Aires, Ushuaia y Río Grande para cobertura nacional.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 font-semibold text-foreground">Soporte 24x7</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Asistencia técnica disponible las 24 horas, los 7 días de la semana.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 font-semibold text-foreground">Respaldo OEM</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Trabajamos con apoyo directo de los fabricantes originales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
