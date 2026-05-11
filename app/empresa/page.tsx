import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SucursalesSection } from "@/components/shared/sucursales-section"
import { Building2, Clock, ShieldCheck, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Conocé a Jeren SRL y Tecnomaq SRL, empresas con más de 40 años de experiencia en la industria electrónica y de refrigeración.",
}

export default function EmpresaPage() {
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
              Empresa
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              Más de 40 años liderando la automatización industrial en Argentina.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted lg:aspect-square">
                <div className="flex h-full items-center justify-center">
                  <span className="text-sm text-muted-foreground">
                    Imagen institucional
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Nuestra historia
                </h2>
                <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                  Jeren SRL y Tecnomaq SRL
                </h3>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    Con más de 40 años de experiencia en el mercado electrónico, Jeren S.R.L. y Tecnomaq S.R.L. comercializan, instalan y brindan soporte y mantenimiento de equipos para la industria electrónica, aire acondicionado y automatización en general, además de proveer insumos.
                  </p>
                  <p>
                    Contamos con un equipo altamente capacitado con un excelente soporte pre y post venta. Contamos con oficinas en la Ciudad de Buenos Aires y sucursales en Río Grande y Ushuaia. Ofrecemos respuesta inmediata a los pedidos de nuestros clientes.
                  </p>
                  <p>
                    Representamos las marcas líderes del mercado mundial. El soporte técnico de pre y post venta es la base para generar vínculos a largo plazo con nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted/50 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Nuestros valores
              </h2>
              <p className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                Lo que nos diferencia
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Soporte 24x7</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Servicio técnico disponible las 24 horas, los 7 días de la semana.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Respaldo OEM</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Apoyo directo de los fabricantes originales para soporte inmediato.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Stock local</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Insumos y partes de reposición disponibles en Buenos Aires y Tierra del Fuego.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Equipo experto</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Personal altamente capacitado y certificado por los fabricantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sucursales */}
        <SucursalesSection />
      </main>
      <Footer />
    </>
  )
}
