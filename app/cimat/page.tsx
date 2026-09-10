import type { Metadata } from "next"
import { CimatFooter } from "@/components/cimat/cimat-footer"
import { CimatHeader } from "@/components/cimat/cimat-header"
import { CtaFinalSection } from "@/components/cimat/cta-final-section"
import { EvaluarSection } from "@/components/cimat/evaluar-section"
import { FaqSection } from "@/components/cimat/faq-section"
import { HeroSection } from "@/components/cimat/hero-section"
import { LineasSection } from "@/components/cimat/lineas-section"
import { ProblemasSection } from "@/components/cimat/problemas-section"
import { ProcesoSection } from "@/components/cimat/proceso-section"
import { QuienEsSection } from "@/components/cimat/quien-es-section"
import { SelectorSection } from "@/components/cimat/selector-section"
import { SoporteSection } from "@/components/cimat/soporte-section"
import { StickyCta } from "@/components/cimat/sticky-cta"
import { WhatsappFlotante } from "@/components/cimat/whatsapp-flotante"
import { CimatTokens } from "@/components/cimat/ui"
import { organizationSchema, manufacturerSchema, brandSchema } from "@/components/cimat/schema"
import { TELEFONO, faqs, hero, seo } from "@/lib/cimat-content"

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  keywords: seo.keywords,
  metadataBase: new URL("https://www.jeren.com"),
  alternates: { canonical: seo.canonical },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: seo.canonical,
    siteName: "Jeren SRL",
    title: seo.title,
    description: seo.description,
    images: [{ url: hero.image.src, width: hero.image.width, height: hero.image.height, alt: hero.image.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [hero.image.src],
  },
  robots: { index: true, follow: true },
}

const productSchema = {
  "@type": "Product",
  "@id": `${seo.canonical}#producto`,
  name: "Balanceadoras industriales CIMAT",
  description:
    "Balanceadoras industriales CIMAT para balanceo dinámico de rotores de 5 kg a 20 toneladas, con grados de calidad según ISO 21940-11 y verificación de máquina según ISO 2953.",
  brand: brandSchema,
  manufacturer: manufacturerSchema,
  category: "Balanceadoras industriales",
  url: seo.canonical,
  image: `https://www.jeren.com${hero.image.src}`,
  additionalProperty: [
    { "@type": "PropertyValue", name: "Peso de rotor", value: "5 kg – 20.000 kg" },
    { "@type": "PropertyValue", name: "Precisión según ISO 2953", value: "0,05 – 35 µm" },
    { "@type": "PropertyValue", name: "Reducción de desbalance (URR)", value: "98%" },
    { "@type": "PropertyValue", name: "Velocidad máxima, línea turbo", value: "300.000 rpm" },
  ],
}

/**
 * Los servicios que JEREN presta alrededor de la máquina. Es lo que diferencia
 * a la landing de la página del fabricante, así que conviene declararlo.
 */
const serviceSchema = {
  "@type": "Service",
  "@id": `${seo.canonical}#servicio`,
  name: "Representación, importación y soporte de balanceadoras CIMAT",
  serviceType: "Venta, puesta en marcha, calibración y modernización de balanceadoras industriales",
  provider: { "@id": `${seo.canonical}#jeren` },
  areaServed: [
    { "@type": "Country", name: "Argentina" },
    { "@type": "Place", name: "América Latina" },
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${seo.canonical}#solicitar`,
    servicePhone: TELEFONO,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios sobre balanceadoras",
    itemListElement: [
      "Ingeniería de aplicación",
      "Importación y nacionalización",
      "Puesta en marcha y capacitación",
      "Garantía, diagnóstico remoto y soporte",
      "Repuestos, inspección, calibración y modernización",
    ].map((nombre) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: nombre },
    })),
  },
}

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${seo.canonical}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, productSchema, serviceSchema, faqSchema],
}

export default function CimatPage() {
  return (
    <div data-cimat className="min-h-screen antialiased">
      <CimatTokens />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CimatHeader />

      <main>
        <HeroSection />
        <QuienEsSection />
        <ProblemasSection />
        <SelectorSection />
        <LineasSection />
        <SoporteSection />
        <EvaluarSection />
        <ProcesoSection />
        <FaqSection />
        <CtaFinalSection />
      </main>

      <CimatFooter />
      <StickyCta />
      <WhatsappFlotante />
    </div>
  )
}
