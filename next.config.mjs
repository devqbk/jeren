import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hay un lockfile en el home del usuario, así que Next infería ese directorio
  // como raíz del workspace y Tailwind terminaba escaneando archivos de afuera
  // del proyecto. Se ancla la raíz acá.
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  /**
   * CIMAT tenía una ficha genérica dentro de cada industria antes de que
   * existiera la landing. Quedaron dos páginas compitiendo por la misma
   * búsqueda, y la vieja no tiene formulario: el visitante llegaba a una
   * página sin forma de dejar la consulta.
   *
   * Redirección permanente para que Google consolide la autoridad en /cimat
   * y para que cualquier link viejo —mails, presentaciones, resultados de
   * búsqueda ya indexados— caiga en la landing.
   */
  async redirects() {
    return [
      { source: "/mineria/cimat", destination: "/cimat", permanent: true },
      { source: "/petroleo-gas/cimat", destination: "/cimat", permanent: true },
    ]
  },
}

export default nextConfig
