"use client"

import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"

// Carga diferida: si el módulo se importa estático, su código viaja igual a
// `/cimat` aunque el componente devuelva null.
const Analytics = dynamic(() => import("@vercel/analytics/next").then((m) => m.Analytics), {
  ssr: false,
})

/**
 * Vercel Analytics, salvo en la landing paga. En `/cimat` cada tercero cuenta
 * contra la experiencia de página que Google Ads evalúa, y la medición de la
 * campaña ya sale por GTM y GA4: acá no aporta nada.
 */
export function VercelAnalytics() {
  const pathname = usePathname()
  if (process.env.NODE_ENV !== "production") return null
  if (pathname === "/cimat" || pathname.startsWith("/cimat/")) return null
  return <Analytics />
}
