import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import {
  ElectronicaBrandsSection,
  AireRefrigeracionBrandsSection,
} from "@/components/home/brands-section"
import { ServicesSection } from "@/components/home/services-section"
import { SucursalesSection } from "@/components/shared/sucursales-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ElectronicaBrandsSection />
        <AireRefrigeracionBrandsSection />
        <ServicesSection />
        <SucursalesSection variant="muted" />
      </main>
      <Footer />
    </>
  )
}
