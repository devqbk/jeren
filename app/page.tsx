import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { IndustriasSection } from "@/components/home/industrias-section"
import { MarcasNuevasSection } from "@/components/home/marcas-nuevas-section"
import { ServicesSection } from "@/components/home/services-section"
import { SucursalesSection } from "@/components/shared/sucursales-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IndustriasSection />
        <MarcasNuevasSection />
        <ServicesSection />
        <SucursalesSection variant="muted" />
      </main>
      <Footer />
    </>
  )
}
