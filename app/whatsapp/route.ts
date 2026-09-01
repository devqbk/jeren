import { NextResponse } from "next/server"
import { WHATSAPP_URL } from "@/lib/cimat-content"

/**
 * Puente a WhatsApp desde el mismo dominio.
 *
 * Google Ads exige que el destino de un vínculo de sitio esté en el dominio del
 * anuncio: no acepta un `wa.me` directo. Esta ruta resuelve eso y además deja el
 * clic contado del lado de Ads, cosa que un enlace suelto a wa.me no permite.
 *
 * Es 307 a propósito: un 308 le diría a Google que jeren.com/whatsapp dejó de
 * existir y que indexe wa.me en su lugar.
 */
export const dynamic = "force-static"

export function GET() {
  return NextResponse.redirect(WHATSAPP_URL, 307)
}
