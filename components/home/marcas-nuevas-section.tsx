import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { marcasNuevas } from "@/lib/data"

export function MarcasNuevasSection() {
  return (
    <section className="bg-muted/50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Portafolio
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Marcas que representamos
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Tecnología de vanguardia respaldada por fabricantes líderes a nivel mundial.
          </p>
        </div>

        {/* Marcas Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {marcasNuevas.map((marca) => (
            <div
              key={marca.slug}
              className="flex flex-col rounded-xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-md"
            >
              {/* Logo */}
              <div className="flex h-16 items-center">
                {marca.logo ? (
                  <Image
                    src={marca.logo}
                    alt={`Logo ${marca.name}`}
                    width={160}
                    height={56}
                    className="h-auto max-h-12 w-auto object-contain"
                  />
                ) : (
                  <span className="text-2xl font-bold text-foreground">{marca.name}</span>
                )}
              </div>

              {/* Description */}
              <p className="mt-5 flex-1 text-sm text-muted-foreground leading-relaxed">
                {marca.description}
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center gap-3">
                <Link href={`/petroleo-gas/${marca.slug}`}>
                  <Button size="sm" variant="default">
                    Ver más
                  </Button>
                </Link>
                {marca.website && marca.website !== "#" && (
                  <a
                    href={marca.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Sitio oficial
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
