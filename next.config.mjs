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

      // ── Sitio viejo (WordPress + WooCommerce) ─────────────────────────────
      // Search Console (10/09/2026) todavía mostraba 83 URLs del sitio anterior
      // con 404/403 y tráfico real: el PDF de Senju solo tuvo 19.256 impresiones
      // y 234 clics en 16 meses. Sin redirección, ese tráfico cae en una pared
      // y Google sigue gastando rastreo en URLs muertas. Cada regla manda al
      // equivalente más cercano del sitio nuevo. Las explícitas van antes que
      // los comodines: Next aplica la primera que matchea.
      { source: "/contact", destination: "/contacto", permanent: true },
      { source: "/contact/", destination: "/contacto", permanent: true },

      // Categorías y marcas de la tienda vieja → páginas de marca actuales
      { source: "/product-category/aire-acondicionado/galileo-tp/:path*", destination: "/aire-acondicionado/galileo-tp", permanent: true },
      { source: "/product-category/aire-acondicionado/inficon/:path*", destination: "/aire-acondicionado/inficon", permanent: true },
      { source: "/product-category/aire-acondicionado/:path*", destination: "/aire-acondicionado", permanent: true },
      { source: "/product-category/electronica/yj-link/:path*", destination: "/electronica/yj-link", permanent: true },
      { source: "/product-category/electronica/koh-young-technology/:path*", destination: "/electronica/koh-young", permanent: true },
      { source: "/product-category/electronica/sono-tek/:path*", destination: "/electronica/sono-tek", permanent: true },
      { source: "/product-category/electronica/:path*", destination: "/electronica", permanent: true },
      { source: "/product-category/:path*", destination: "/", permanent: true },
      { source: "/shop/:path*", destination: "/", permanent: true },
      { source: "/shop", destination: "/", permanent: true },

      // Marcas viejas bajo /electronica/ que ya no tienen página propia
      { source: "/electronica/cogiscan", destination: "/electronica", permanent: true },
      { source: "/electronica/fuji", destination: "/electronica", permanent: true },
      { source: "/electronica/smic", destination: "/electronica", permanent: true },

      // Productos sueltos: los de refrigeración (Galileo TP, GAS SAVER) van a
      // aire acondicionado; el resto era electrónica.
      { source: "/product/gas-saver/:path*", destination: "/aire-acondicionado/gasflux", permanent: true },
      { source: "/product/leak-detection-systems/:path*", destination: "/aire-acondicionado/galileo-tp", permanent: true },
      { source: "/product/refrigerating-fluids-and-gas-charging-machines/:path*", destination: "/aire-acondicionado/galileo-tp", permanent: true },
      { source: "/product/rotary-vacuum-pumps-and-vacuometers/:path*", destination: "/aire-acondicionado/galileo-tp", permanent: true },
      { source: "/product/refrigerant-transfer-pumps/:path*", destination: "/aire-acondicionado/galileo-tp", permanent: true },
      { source: "/product/systems-for-gases-and-fluid-storage/:path*", destination: "/aire-acondicionado/galileo-tp", permanent: true },
      { source: "/product/electrical-safety-test/:path*", destination: "/aire-acondicionado/galileo-tp", permanent: true },
      { source: "/product/performance-test-systems/:path*", destination: "/aire-acondicionado/galileo-tp", permanent: true },
      { source: "/product/el-equipo/:path*", destination: "/aire-acondicionado/galileo-tp", permanent: true },
      { source: "/product/multi-gas-sniffer-leak-detectors/:path*", destination: "/aire-acondicionado/inficon", permanent: true },
      { source: "/product/hand-held-leak-detectors-co-combustible-gas-refrigerant/:path*", destination: "/aire-acondicionado/inficon", permanent: true },
      { source: "/product/helium-leak-detectors/:path*", destination: "/aire-acondicionado/inficon", permanent: true },
      { source: "/product/spi-3d-modelo-ky-8030-3/:path*", destination: "/electronica/koh-young", permanent: true },
      { source: "/product/aoi-3d-modelo-zenith/:path*", destination: "/electronica/koh-young", permanent: true },
      { source: "/product/sonoflux-2000f/:path*", destination: "/electronica/sono-tek", permanent: true },
      { source: "/product/shuttle-conveyor/:path*", destination: "/electronica/yj-link", permanent: true },
      { source: "/product/buffer/:path*", destination: "/electronica/yj-link", permanent: true },
      { source: "/product/loading-unloading/:path*", destination: "/electronica/yj-link", permanent: true },
      { source: "/product/dual-lane-equipment/:path*", destination: "/electronica/yj-link", permanent: true },
      { source: "/product/:path*", destination: "/electronica", permanent: true },

      // Archivos del WordPress viejo. Los PDF no están en el sitio nuevo: hasta
      // que JEREN los entregue, el visitante cae en la marca que corresponde.
      { source: "/wp-content/uploads/:y/:m/Senju-ECO-Solder.pdf", destination: "/electronica", permanent: true },
      { source: "/wp-content/uploads/:y/:m/GAS-SAVER-Catalog.pdf", destination: "/aire-acondicionado/gasflux", permanent: true },
      { source: "/wp-content/uploads/:y/:m/AIR-CATA-STSC18-all-s.pdf", destination: "/aire-acondicionado", permanent: true },
      { source: "/wp-content/uploads/:y/:m/Spanish-D-TEK-Select-OM.pdf", destination: "/aire-acondicionado/inficon", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/immobilier/:path*", destination: "/", permanent: true },
    ]
  },
}

export default nextConfig
