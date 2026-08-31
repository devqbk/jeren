import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // La página de conversión no se indexa: existe para medir.
      disallow: "/cimat/gracias",
    },
    sitemap: "https://www.jeren.com/sitemap.xml",
  }
}
