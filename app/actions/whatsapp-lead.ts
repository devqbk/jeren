"use server"

import { type Campana, registrarEnCrm } from "@/lib/crm"

/**
 * Contacto que pasa por el paso previo a WhatsApp (nombre y empresa).
 *
 * El navegador ya abrió WhatsApp cuando esto corre: no se espera la respuesta
 * y nada de lo que pase acá bloquea la conversación.
 */
export async function registrarContactoWhatsapp(datos: {
  campana: Campana
  nombre: string
  empresa: string
  ref: string
  atribucion: [string, string][]
  /** Honeypot: los bots completan lo que no ven. */
  website?: string
}): Promise<void> {
  const nombre = (datos.nombre ?? "").trim().slice(0, 120)
  const empresa = (datos.empresa ?? "").trim().slice(0, 160)
  const ref = (datos.ref ?? "").trim()
  if (datos.website) return
  if (datos.campana !== "cimat" && datos.campana !== "cribmaster") return
  if (!nombre || !empresa || !/^(CI|CM)-[A-Z0-9]{4}$/.test(ref)) return

  const atribucion = (Array.isArray(datos.atribucion) ? datos.atribucion : [])
    .slice(0, 20)
    .map(([k, v]) => [String(k).slice(0, 40), String(v).slice(0, 300)] as [string, string])
    .filter(([, v]) => v)

  const r = await registrarEnCrm({
    campana: datos.campana,
    canal: "whatsapp",
    ref,
    nombre,
    empresa,
    detalle: [["Canal", "WhatsApp (paso previo con nombre y empresa)"]],
    atribucion,
  })
  if (!r.ok) console.error(`[whatsapp-lead] CRM: ${r.codigo} (ref ${ref})`)
}
