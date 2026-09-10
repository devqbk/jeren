import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // La página de conversión (/cimat/gracias) va en noindex desde su propia
      // metadata. No se bloquea acá: con Disallow, Google no puede leer el
      // noindex y puede terminar indexando la URL igual.
    },
    sitemap: "https://www.jeren.com/sitemap.xml",
  }
}
