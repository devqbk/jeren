import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { aireRefrigeracionBrands } from "@/lib/data"

export const metadata: Metadata = {
  title: "Aire y Refrigeración",
  description:
    "Maquinaria y equipamiento para fabricantes OEM de aires acondicionados, heladeras y sistemas de refrigeración industrial.",
}

export default function AireRefrigeracionPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/images/banners/aire-acondicionado.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              Aire y Refrigeración
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              Maquinaria y equipamiento para fabricantes OEM de aires acondicionados, heladeras y sistemas de refrigeración industrial.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
              Representamos marcas líderes en maquinaria y equipamiento para plantas industriales que fabrican aires acondicionados, heladeras y sistemas de refrigeración a escala. Soluciones para cada etapa del proceso: conformado de tubos, brazing, carga de refrigerante, sellado y control de calidad en línea.
            </p>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aireRefrigeracionBrands.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/aire-acondicionado/${brand.slug}`}
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
