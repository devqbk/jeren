import { Providers } from "@/components/providers"

/**
 * Grupo de rutas del sitio institucional. Acá vive el ThemeProvider de
 * next-themes: `/cimat` queda afuera a propósito (está en `forcedTheme="light"`
 * y no lo usa), así la landing paga no carga ese runtime.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>
}
