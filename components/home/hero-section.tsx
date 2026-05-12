import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-primary">
      {/* Background Video/Image - Circuit Board */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/banners/hero-circuit.jpg"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Main Heading - Estilo similar al original */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Electrónica
          </h1>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-primary-foreground/90 sm:text-4xl lg:text-5xl">
            Aire Acondicionado y Refrigeración
          </h2>

          {/* Subtitle */}
          <p className="mb-10 max-w-xl text-lg text-primary-foreground/80 sm:text-xl">
            Más de 40 años representando marcas líderes mundiales de maquinaria, insumos y servicios para la industria.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
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
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
