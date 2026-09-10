"use client"

import { usePathname } from "next/navigation"
import { Analytics } from "@vercel/analytics/next"

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
