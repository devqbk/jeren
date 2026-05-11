import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-primary">
      {/* Background Image Placeholder - Industrial */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-20" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5">
            <span className="text-sm font-medium text-primary-foreground/90">
              +40 años de experiencia en la industria
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Máquinas, insumos y servicios para la industria{" "}
            <span className="text-primary-foreground/80">electrónica, aire acondicionado y refrigeración</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-primary-foreground/70 sm:text-xl">
            Representamos las marcas líderes mundiales de maquinaria industrial con soporte técnico especializado 24x7 en todo el país.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/electronica">
              <Button
                size="lg"
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:w-auto"
              >
                Conocé nuestras marcas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contactanos
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "+40", label: "Años de experiencia" },
            { value: "3", label: "Sucursales" },
            { value: "19", label: "Marcas representadas" },
            { value: "24/7", label: "Soporte técnico" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-primary-foreground/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
