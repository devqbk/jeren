import { Clock, Package, ShieldCheck, MapPin } from "lucide-react"

const services = [
  {
    title: "Soporte 24x7",
    description:
      "Asistencia técnica las 24 horas, los 7 días de la semana en Buenos Aires, Río Grande y Ushuaia.",
    icon: Clock,
  },
  {
    title: "Stock de Insumos",
    description:
      "Contamos con stock de insumos y partes de reposición para respuesta inmediata a tus necesidades.",
    icon: Package,
  },
  {
    title: "Respaldo OEM",
    description:
      "Trabajamos con apoyo directo de los fabricantes originales para soporte técnico especializado.",
    icon: ShieldCheck,
  },
  {
    title: "Cobertura Nacional",
    description:
      "Oficinas en Ciudad de Buenos Aires y sucursales en Tierra del Fuego para atención en todo el país.",
    icon: MapPin,
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Servicios
          </h2>
          <p className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Soporte técnico integral para tu operación
          </p>
          <p className="mt-4 text-muted-foreground">
            Ofrecemos un servicio completo pre y post venta con el respaldo de las principales marcas del mercado mundial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
