import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { marcasNuevas } from "@/lib/data"

export const metadata: Metadata = {
  title: "Minería",
  description: "Tecnología y maquinaria especializada para operaciones mineras.",
}

export default function MineriaPage() {
  const brands = marcasNuevas.filter((brand) => brand.industrias.includes("mineria"))

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/images/banners/mineria.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              Minería
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              Tecnología y maquinaria especializada para operaciones mineras.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
              Brindamos equipos robustos y soluciones tecnológicas avanzadas para aumentar la eficiencia y seguridad en los procesos de extracción y procesamiento de minerales.
            </p>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {brands.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {brands.map((brand) => (
                  <Link
                    key={brand.slug}
                    href={`/mineria/${brand.slug}`}
                    className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                  >
                    {/* Brand Logo */}
                    <div className="flex h-20 items-center justify-center rounded-md bg-muted/50 p-3">
                      {brand.logo ? (
                        <Image
                          src={brand.logo}
                          alt={`Logo ${brand.name}`}
                          width={160}
                          height={64}
                          className="h-auto max-h-14 w-auto object-contain"
                        />
                      ) : (
                        <span className="text-sm font-medium text-muted-foreground">{brand.name}</span>
                      )}
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
                      {brand.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {brand.description}
                    </p>

                    <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Ver más
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border border-dashed rounded-lg bg-muted/20">
                <p className="text-muted-foreground">Aún no hay marcas asociadas a esta industria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
