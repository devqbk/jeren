import { EMAIL, TELEFONO, seo } from "@/lib/cimat-content"

/**
 * Nodos JSON-LD compartidos entre la landing y las subpáginas por rotor.
 * Los `@id` apuntan siempre a `/cimat`: la organización y el fabricante son
 * los mismos en todas las URL y así Google los consolida en una sola entidad.
 */
export const ORIGIN = "https://www.jeren.com"

export const JEREN_ID = `${seo.canonical}#jeren`
export const PRODUCTO_ID = `${seo.canonical}#producto`

export const organizationSchema = {
  "@type": ["Organization", "LocalBusiness"],
  "@id": JEREN_ID,
  name: "JEREN SRL",
  url: ORIGIN,
  email: EMAIL,
  telephone: TELEFONO,
  areaServed: [
    { "@type": "Country", name: "Argentina" },
    { "@type": "Place", name: "América Latina" },
  ],
  description:
    "JEREN SRL representa en Argentina a CIMAT, fabricante de balanceadoras industriales de Bydgoszcz, Polonia.",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Av. Juramento 2089, Piso 4° oficina 405",
      postalCode: "C1428DNG",
      addressLocality: "Ciudad Autónoma de Buenos Aires",
      addressCountry: "AR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Paseo de la Plaza 2065",
      postalCode: "9410",
      addressLocality: "Ushuaia",
      addressRegion: "Tierra del Fuego",
      addressCountry: "AR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Padre Forgacs 1411",
      postalCode: "9420",
      addressLocality: "Río Grande",
      addressRegion: "Tierra del Fuego",
      addressCountry: "AR",
    },
  ],
}

export const manufacturerSchema = {
  "@type": "Organization",
  name: "CIMAT Sp. z o.o.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bogdana Raczkowskiego 4",
    addressLocality: "Bydgoszcz",
    addressCountry: "PL",
  },
}

export const brandSchema = { "@type": "Brand", name: "CIMAT" }
