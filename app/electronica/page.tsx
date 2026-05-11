import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { electronicaBrands } from "@/lib/data"

export const metadata: Metadata = {
  title: "Electrónica",
  description:
    "Representamos las marcas líderes mundiales en equipamiento para la industria electrónica y manufactura SMT.",
}

export default function ElectronicaPage() {
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
              Electrónica
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              Representamos las marcas líderes mundiales en equipamiento para la industria electrónica y manufactura SMT.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
              Ofrecemos soluciones completas para líneas de producción SMT, sistemas de inspección, soldadura, dispensado y más. Cada marca que representamos es líder mundial en su especialidad.
            </p>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {electronicaBrands.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/electronica/${brand.slug}`}
                  className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  {/* Logo Placeholder */}
                  <div className="flex h-20 items-center justify-center rounded-md bg-muted">
                    <span className="text-sm text-muted-foreground">Logo {brand.name}</span>
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
