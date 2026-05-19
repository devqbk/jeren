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
import { marcasNuevas } from "@/lib/data"
import { marcasNuevasContent } from "@/lib/brands-content"

export async function generateStaticParams() {
  const mineriaBrands = marcasNuevas.filter((b) => b.industrias?.includes("mineria"))
  return mineriaBrands.map((brand) => ({
    slug: brand.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const brand = marcasNuevas.find((b) => b.slug === slug && b.industrias?.includes("mineria"))
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
  const brand = marcasNuevas.find((b) => b.slug === slug && b.industrias?.includes("mineria"))
  if (!brand) notFound()

  const content = marcasNuevasContent.find((c) => c.slug === slug)
  const mineriaBrands = marcasNuevas.filter((b) => b.industrias?.includes("mineria"))
  const otherBrands = mineriaBrands.filter((b) => b.slug !== slug)

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
              Minería
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
                  <BreadcrumbLink href="/mineria">Minería</BreadcrumbLink>
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
              <div>
                <div className="mb-8 flex h-32 max-w-md items-center justify-center rounded-xl border border-border bg-card p-6 shadow-sm">
                  {brand.logo ? (
                    <Image
                      src={brand.logo}
                      alt={`Logo ${brand.name}`}
                      width={240}
                      height={96}
                      className="h-full w-auto object-contain"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-muted-foreground">{brand.name}</span>
                  )}
                </div>

                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {content?.longDescription ? (
                    content.longDescription.map((paragraph, index) => (
                      <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {brand.description}
                    </p>
                  )}
                </div>

                {brand.website && brand.website !== "#" && (
                  <div className="mt-8">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <a href={brand.website} target="_blank" rel="noopener noreferrer">
                        Visitar sitio web oficial
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>

              {/* Products/Solutions */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Soluciones Destacadas
                </h2>
                {content?.products && content.products.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2">
                    {content.products.map((product) => (
                      <div
                        key={product.name}
                        className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md"
                      >
                        {product.imageUrl && (
                          <div className="aspect-video w-full overflow-hidden bg-muted/50 p-4">
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              width={400}
                              height={225}
                              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        )}
                        <div className="p-5">
                          <h3 className="font-semibold text-foreground group-hover:text-primary">
                            {product.name}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed border-border bg-muted/20 p-8 text-center">
                    <p className="text-muted-foreground">
                      El catálogo de productos para esta marca estará disponible próximamente.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Other Brands */}
        {otherBrands.length > 0 && (
          <section className="border-t border-border bg-muted/30 py-16">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <h2 className="mb-8 text-2xl font-bold text-foreground">
                Otras marcas de Minería
              </h2>
              <div className="flex flex-wrap gap-4">
                {otherBrands.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/mineria/${b.slug}`}
                    className="flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
                  >
                    {b.logo && (
                      <Image
                        src={b.logo}
                        alt={`Logo ${b.name}`}
                        width={40}
                        height={20}
                        className="h-auto max-h-5 w-auto object-contain"
                      />
                    )}
                    <span>{b.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
