import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ExternalLink } from "lucide-react"
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
import { electronicaContent } from "@/lib/brands-content"

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
  if (!brand) return { title: "Marca no encontrada" }
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
  if (!brand) notFound()

  const content = electronicaContent.find((c) => c.slug === slug)
  const otherBrands = electronicaBrands.filter((b) => b.slug !== slug)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary py-16 lg:py-20">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Electrónica
            </p>
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              {brand.name}
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
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Logo */}
              <div className="flex items-center justify-center rounded-xl border border-border bg-white p-12">
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    width={280}
                    height={120}
                    className="h-auto max-h-28 w-auto max-w-full object-contain"
                  />
                ) : (
                  <span className="text-2xl font-bold text-foreground">{brand.name}</span>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-foreground">{brand.name}</h2>

                {content ? (
                  <div className="mt-4 space-y-4">
                    {content.longDescription.map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-lg text-muted-foreground">{brand.description}</p>
                )}

                {brand.website && brand.website !== "#" && (
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex"
                  >
                    <Button>
                      Sitio oficial de {brand.name}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        {content && content.products.length > 0 && (
          <section className="bg-muted/50 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="mb-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Productos y equipos
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-foreground">
                  {brand.name}
                </h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {content.products.map((product) => (
                  <div
                    key={product.name}
                    className="overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    {product.imageUrl && (
                      <div className="relative h-44 w-full overflow-hidden bg-white">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h4 className="font-semibold text-foreground">
                        {product.name}
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Brands */}
        <section className="border-t border-border py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Otras marcas de Electrónica
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {otherBrands.map((b) => (
                <Link
                  key={b.slug}
                  href={`/electronica/${b.slug}`}
                  className="flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
                >
                  {b.logo && (
                    <Image
                      src={b.logo}
                      alt={`Logo ${b.name}`}
                      width={40}
                      height={20}
                      className="h-5 w-auto object-contain"
                    />
                  )}
                  <span>{b.name}</span>
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
