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
}

export default nextConfig
