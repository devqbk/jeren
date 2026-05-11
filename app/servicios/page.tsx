import type { Metadata } from "next"
import Link from "next/link"
import {
  Clock,
  Package,
  ShieldCheck,
  MapPin,
  Wrench,
  GraduationCap,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { SucursalesSection } from "@/components/shared/sucursales-section"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Soporte técnico integral pre y post venta con atención 24x7 y respaldo de los principales fabricantes.",
}

const services = [
  {
    title: "Soporte Técnico 24x7",
    description:
      "Asistencia técnica disponible las 24 horas, los 7 días de la semana. Nuestro equipo está preparado para resolver cualquier incidencia en el menor tiempo posible.",
    icon: Clock,
  },
  {
    title: "Stock de Insumos",
    description:
      "Contamos con stock de insumos y partes de reposición en Ciudad de Buenos Aires, Río Grande y Ushuaia para respuesta inmediata a tus necesidades.",
    icon: Package,
  },
  {
    title: "Respaldo OEM",
    description:
      "Trabajamos con apoyo directo de los fabricantes originales. Esto nos permite brindar soporte técnico especializado y acceso a las últimas actualizaciones.",
    icon: ShieldCheck,
  },
  {
    title: "Cobertura Nacional",
    description:
      "Con oficinas en Ciudad de Buenos Aires y sucursales en Tierra del Fuego, garantizamos cobertura y atención en todo el territorio nacional.",
    icon: MapPin,
  },
  {
    title: "Instalación y Puesta en Marcha",
    description:
      "Nuestros técnicos certificados realizan la instalación profesional de equipos, asegurando el correcto funcionamiento desde el primer día.",
    icon: Wrench,
  },
  {
    title: "Capacitación",
    description:
      "Ofrecemos programas de capacitación para que tu equipo pueda operar y mantener los equipos de manera eficiente y segura.",
    icon: GraduationCap,
  },
]

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary py-20 lg:py-28">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              Servicios
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              Soporte técnico integral con el respaldo de las principales marcas del mercado mundial.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-muted-foreground">
                El soporte técnico de pre y post venta es la base para generar vínculos a largo plazo con nuestros clientes. Contamos con un equipo para cubrir necesidades en todo el país. En Buenos Aires, Río Grande y Ushuaia tenemos servicio las 24 horas los 7 días de la semana.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Contamos con stock de insumos y partes de reposición en Ciudad de Buenos Aires, Río Grande y Ushuaia. Trabajamos con un apoyo directo de las OEM para soporte inmediato.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-muted/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-10 text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Nuestros servicios
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sucursales */}
        <SucursalesSection />

        {/* CTA */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="text-2xl font-semibold text-primary-foreground sm:text-3xl">
              ¿Necesitás asesoramiento técnico?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
              Nuestro equipo de especialistas está listo para ayudarte a encontrar la mejor solución para tu operación.
            </p>
            <Link href="/contacto" className="mt-8 inline-block">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Asesorate
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
