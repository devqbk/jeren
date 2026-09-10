import type { Metadata } from "next"

/**
 * Layout de la landing CIMAT y sus subpáginas.
 *
 * Sin `Providers` (next-themes): el resto del sitio los recibe desde
 * `app/(site)/layout.tsx`. Acá no hay tema que alternar —todo `/cimat` va en
 * claro forzado— y cada KB de JS cuenta contra la experiencia de página que
 * Google Ads evalúa en mobile.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.jeren.com"),
}

export default function CimatLayout({ children }: { children: React.ReactNode }) {
  return children
}
