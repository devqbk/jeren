import type { Metadata } from "next"
import { CimatTokens } from "@/components/cimat/ui"
import { StickyCta, WhatsappFlotante } from "@/components/cribmaster/cliente"
import { CribmasterFooter, CribmasterHeader } from "@/components/cribmaster/layout"
import {
  AplicaSection,
  CasoSection,
  CtaFinalSection,
  HeroSection,
  ResuelveSection,
  SolucionesSection,
} from "@/components/cribmaster/secciones"
import { CribmasterTokens } from "@/components/cribmaster/tokens"
import { CANONICAL, EMAIL, SITIO_FABRICANTE, TELEFONO, hero, seo } from "@/lib/cribmaster-content"

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: CANONICAL,
    siteName: "Jeren SRL",
    title: seo.title,
    description: seo.description,
    images: [{ url: hero.image.src, width: hero.image.width, height: hero.image.height, alt: hero.image.alt }],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${CANONICAL}#jeren`,
      name: "JEREN SRL",
      url: "https://www.jeren.com",
      email: EMAIL,
      telephone: TELEFONO,
      areaServed: { "@type": "Country", name: "Argentina" },
      description:
        "JEREN SRL es distribuidor autorizado de CribMaster (Stanley Black & Decker) en Argentina: expendedoras industriales, lockers y gabinetes inteligentes para insumos, EPP y herramientas.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Juramento 2089, Piso 4° oficina 405",
        postalCode: "C1428DNG",
        addressLocality: "Ciudad Autónoma de Buenos Aires",
        addressCountry: "AR",
      },
    },
    {
      "@type": "Product",
      "@id": `${CANONICAL}#producto`,
      name: "Expendedoras industriales y lockers inteligentes CribMaster",
      description: seo.description,
      brand: { "@type": "Brand", name: "CribMaster", url: SITIO_FABRICANTE },
      manufacturer: { "@type": "Organization", name: "Stanley Black & Decker" },
      category: "Gestión de inventario industrial",
      url: CANONICAL,
      image: `https://www.jeren.com${hero.image.src}`,
    },
  ],
}

export default function CribmasterPage() {
  return (
    <div data-cimat data-cribmaster className="min-h-screen antialiased">
      <CimatTokens />
      <CribmasterTokens />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CribmasterHeader />

      <main>
        <HeroSection />
        <CasoSection />
        <ResuelveSection />
        <SolucionesSection />
        <AplicaSection />
        <CtaFinalSection />
      </main>

      <CribmasterFooter />
      <StickyCta />
      <WhatsappFlotante />
    </div>
  )
}
