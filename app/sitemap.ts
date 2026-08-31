import type { MetadataRoute } from "next"

const BASE = "https://www.jeren.com"

/** Rutas públicas del sitio. `/cimat/gracias` queda afuera: va en noindex. */
const RUTAS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/empresa", priority: 0.6, changeFrequency: "yearly" },
  { path: "/electronica", priority: 0.8, changeFrequency: "monthly" },
  { path: "/aire-acondicionado", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicios", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contacto", priority: 0.6, changeFrequency: "yearly" },
  { path: "/cimat", priority: 0.9, changeFrequency: "monthly" },
  { path: "/cimat/especificaciones", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cimat/normas-y-grados", priority: 0.7, changeFrequency: "yearly" },
  { path: "/cimat/aplicaciones", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return RUTAS.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
