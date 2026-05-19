import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "@/components/providers"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Jeren SRL | Líderes en Automatización Industrial",
    template: "%s | Jeren SRL",
  },
  description:
    "Con más de 40 años de experiencia, Jeren SRL representa marcas líderes mundiales de maquinaria industrial para electrónica, aire acondicionado y refrigeración.",
  keywords: [
    "maquinaria industrial",
    "electrónica",
    "aire acondicionado",
    "refrigeración",
    "SMT",
    "automatización",
    "Argentina",
  ],
  authors: [{ name: "Jeren SRL" }],
  creator: "Jeren SRL",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.jeren.com",
    siteName: "Jeren SRL",
    title: "Jeren SRL | Líderes en Automatización Industrial",
    description:
      "Con más de 40 años de experiencia, Jeren SRL representa marcas líderes mundiales de maquinaria industrial.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0A2540",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
          {process.env.NODE_ENV === "production" && <Analytics />}
        </Providers>
      </body>
    </html>
  )
}
