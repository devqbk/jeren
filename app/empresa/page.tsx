import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SucursalesSection } from "@/components/shared/sucursales-section"

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Jeren SRL: más de 40 años representando marcas líderes mundiales en Petróleo y Gas, Minería, Agro, Electrónica y Aire y Refrigeración en Argentina.",
}

export default function EmpresaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary py-24 lg:py-32">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Desde 1984
            </p>
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
              Somos Jeren
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              Cuatro décadas conectando la industria argentina con tecnología de primer nivel mundial.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Imagen institucional */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/empresa-institucional.png"
                  alt="Jeren SRL — imagen institucional"
                  fill
                  className="object-cover"
                  priority
                />
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
                    Con más de 40 años en el mercado argentino, Jeren SRL y Tecnomaq SRL representan marcas líderes mundiales de maquinaria, insumos y servicios para la industria. Nuestra trayectoria nos posiciona como un socio estratégico de confianza para los sectores más exigentes del país.
                  </p>
                  <p>
                    Hoy expandimos nuestro portafolio hacia los sectores de <strong className="text-foreground">Petróleo y Gas, Minería y Agro</strong>, sumando tecnología de vanguardia para la exploración, producción y operación industrial. Acompañamos a nuestros clientes con soluciones que integran equipamiento de primer nivel y soporte técnico especializado.
                  </p>
                  <p>
                    Seguimos presentes también en <strong className="text-foreground">Electrónica y Aire y Refrigeración</strong>, industrias donde contamos con una base sólida de clientes y un portafolio consolidado de marcas internacionales.
                  </p>
                  <p>
                    Operamos desde nuestras oficinas en Ciudad de Buenos Aires y sucursales en Río Grande y Ushuaia, con cobertura nacional y soporte 24x7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SucursalesSection />
      </main>
      <Footer />
    </>
  )
}
