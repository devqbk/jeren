"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  marcasNuevas,
  electronicaBrands,
  aireRefrigeracionBrands,
} from "@/lib/data"

// Extendemos el tipo de marca para incluir su basePath
type BrandWithBasePath = {
  slug: string
  name: string
  logo?: string
  description: string
  website?: string
  industrias?: string[]
  basePath: string
}

const electronicaWithBase = electronicaBrands.map((b) => ({ ...b, basePath: "/electronica" }))
const aireWithBase = aireRefrigeracionBrands.map((b) => ({ ...b, basePath: "/aire-acondicionado" }))

// Para marcasNuevas, el basePath dependerá de la industria principal (tomamos la primera si hay varias)
const nuevasWithBase = marcasNuevas.map((b) => ({
  ...b,
  basePath: b.industrias && b.industrias.length > 0 ? `/${b.industrias[0]}` : "/marcas"
}))

const allBrands: BrandWithBasePath[] = [
  ...nuevasWithBase,
  ...electronicaWithBase,
  ...aireWithBase,
]

// Deduplicar marcas (por las dudas)
const uniqueBrands = Array.from(new Map(allBrands.map((b) => [b.slug, b])).values())

const filterTabs = [
  { id: "todos", label: "Todas" },
  { id: "electronica", label: "Electrónica" },
  { id: "aire-refrigeracion", label: "Aire y Refrigeración" },
  { id: "petroleo-gas", label: "Petróleo y Gas" },
  { id: "mineria", label: "Minería" },
  { id: "agro", label: "Agro" },
]

export function UnifiedBrandsSection() {
  const [activeTab, setActiveTab] = useState("todos")

  // Filtrar marcas según el tab activo
  const filteredBrands = useMemo(() => {
    if (activeTab === "todos") return uniqueBrands
    if (activeTab === "electronica") return electronicaWithBase
    if (activeTab === "aire-refrigeracion") return aireWithBase
    
    // Para las industrias nuevas, filtramos nuevasWithBase por el array `industrias`
    return nuevasWithBase.filter((b) => b.industrias?.includes(activeTab))
  }, [activeTab])

  return (
    <section className="overflow-hidden bg-muted/30 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Nuestras marcas representadas
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Nos asociamos con los líderes mundiales para traer la mejor tecnología a su línea de producción.
        </p>
      </div>

      {/* Filter Tabs & Carousel */}
      <div className="mx-auto mt-16 max-w-7xl px-4 lg:px-8">
        {/* Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Brand Carousel */}
        {filteredBrands.length > 0 ? (
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {filteredBrands.map((brand) => (
                <CarouselItem
                  key={brand.slug}
                  className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-32 items-center justify-center bg-white p-6 dark:bg-muted/30">
                      {brand.logo ? (
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={160}
                          height={80}
                          className="h-full w-auto object-contain"
                        />
                      ) : (
                        <span className="text-xl font-bold text-muted-foreground">{brand.name}</span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{brand.name}</h3>
                        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                          {brand.description}
                        </p>
                      </div>
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Button asChild variant="outline" className="w-full sm:w-auto">
                          <Link href={`${brand.basePath}/${brand.slug}`}>
                            Ver más <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        {brand.website && brand.website !== "#" && (
                          <Button asChild variant="ghost" className="w-full sm:w-auto">
                            <a href={brand.website} target="_blank" rel="noopener noreferrer">
                              Sitio oficial <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center rounded-xl border border-dashed border-border bg-muted/20">
            <p className="text-lg font-medium text-muted-foreground">
              Aún no hay marcas cargadas para esta categoría.
            </p>
          </div>
        )}
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative mt-16 flex overflow-hidden border-y border-border/50 bg-background py-10 group">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        
        <div className="flex w-max min-w-full animate-marquee gap-16 px-8 group-hover:pause-on-hover">
          {/* Triplicamos el array para asegurar un scroll continuo sin cortes visuales en resoluciones anchas */}
          {[...uniqueBrands, ...uniqueBrands, ...uniqueBrands].map((brand, i) => (
            <div
              key={`${brand.slug}-${i}`}
              className="flex h-16 w-40 shrink-0 items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={140}
                  height={60}
                  className="h-full w-auto object-contain"
                />
              ) : (
                <span className="text-lg font-bold text-muted-foreground">{brand.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
