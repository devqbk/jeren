import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { electronicaBrands, aireRefrigeracionBrands } from "@/lib/data"

interface Brand {
  slug: string
  name: string
  logo?: string
  description: string
  website: string
}

interface BrandsSectionProps {
  title: string
  description: string
  brands: Brand[]
  categoryHref: string
  variant?: "default" | "muted"
}

function BrandsGrid({ title, description, brands, categoryHref, variant = "default" }: BrandsSectionProps) {
  return (
    <section className={variant === "muted" ? "bg-muted/50 py-20 lg:py-24" : "py-20 lg:py-24"}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">{title}</h2>
            <p className="mt-2 max-w-2xl text-pretty text-lg text-muted-foreground">{description}</p>
          </div>
          <Link href={categoryHref}>
            <Button variant="ghost" className="text-primary">
              Ver todas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Brands Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`${categoryHref}/${brand.slug}`}
              className="group flex flex-col items-center rounded-lg border border-border bg-white p-4 transition-all hover:border-primary/30 hover:shadow-md"
            >
              {/* Brand logo */}
              <div className="flex h-14 w-full items-center justify-center p-2">
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    width={120}
                    height={48}
                    className="h-auto max-h-10 w-auto object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold text-foreground">{brand.name}</span>
                )}
              </div>
              <span className="mt-2 text-center text-xs font-medium text-muted-foreground group-hover:text-primary">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ElectronicaBrandsSection() {
  return (
    <BrandsGrid
      title="Electrónica"
      description="Representamos las marcas líderes mundiales en equipamiento para la industria electrónica y manufactura SMT."
      brands={electronicaBrands}
      categoryHref="/electronica"
    />
  )
}

export function AireRefrigeracionBrandsSection() {
  return (
    <BrandsGrid
      title="Aire y Refrigeración"
      description="Equipamiento especializado para la industria del aire acondicionado y refrigeración."
      brands={aireRefrigeracionBrands}
      categoryHref="/aire-acondicionado"
      variant="muted"
    />
  )
}
