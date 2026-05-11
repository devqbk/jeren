import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { electronicaBrands } from "@/lib/data"

// Productos de ejemplo para Fuji
const fujiProducts = [
  {
    slug: "smart-fab",
    name: "Smart FAB",
    description: "Sistema de montaje superficial de alta velocidad",
  },
  {
    slug: "nxt-iii",
    name: "NXT III",
    description: "Plataforma de montaje modular de última generación",
  },
  {
    slug: "aimex-iiic",
    name: "Aimex IIIc",
    description: "Montadora de alta flexibilidad y precisión",
  },
  {
    slug: "aimex-iii",
    name: "Aimex III",
    description: "Sistema de montaje versátil para producción mixta",
  },
]

export async function generateStaticParams() {
  return electronicaBrands.map((brand) => ({
    slug: brand.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const brand = electronicaBrands.find((b) => b.slug === slug)

  if (!brand) {
    return {
      title: "Marca no encontrada",
    }
  }

  return {
    title: brand.name,
    description: brand.description,
  }
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const brand = electronicaBrands.find((b) => b.slug === slug)

  if (!brand) {
    notFound()
  }

  // Usar productos de Fuji como ejemplo, para otras marcas mostrar placeholders
  const products =
    brand.slug === "fuji"
      ? fujiProducts
      : [
          { slug: "producto-1", name: "Producto 1", description: "Descripción del producto" },
          { slug: "producto-2", name: "Producto 2", description: "Descripción del producto" },
          { slug: "producto-3", name: "Producto 3", description: "Descripción del producto" },
        ]

  // Otras marcas de la misma categoría
  const otherBrands = electronicaBrands.filter((b) => b.slug !== slug)

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
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="border-b border-border bg-muted/30 py-4">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/electronica">Electrónica</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{brand.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Brand Info */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Logo */}
              <div className="flex items-center justify-center rounded-lg border border-border bg-card p-12">
                <div className="flex h-32 w-full items-center justify-center rounded bg-muted">
                  <span className="text-lg text-muted-foreground">Logo {brand.name}</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-foreground">{brand.name}</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {brand.slug === "fuji"
                    ? "Desde su creación, Fuji ha sido un innovador consistente en la industria electrónica. Fue el primer fabricante en introducir grandes avances tecnológicos manteniendo, hoy en día, la visión pionera en el desarrollo y producción de maquinaria para SMT."
                    : brand.description}
                </p>
                {brand.website !== "#" && (
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block"
                  >
                    <Button>
                      Ver sitio de {brand.name}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="bg-muted/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Nuestros equipos
              </h3>
              <p className="mt-1 text-2xl font-semibold text-foreground">{brand.name}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.slug}
                  className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  {/* Product Image Placeholder */}
                  <div className="aspect-square overflow-hidden rounded-md bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-xs text-muted-foreground">Imagen</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {brand.name}
                  </p>
                  <h4 className="mt-1 font-semibold text-foreground group-hover:text-primary">
                    {product.name}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  <button className="mt-3 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Leer más
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Brands */}
        <section className="border-t border-border py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Otras marcas de electrónica
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {otherBrands.map((b) => (
                <Link
                  key={b.slug}
                  href={`/electronica/${b.slug}`}
                  className="rounded-md border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:text-primary"
                >
                  {b.name}
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
