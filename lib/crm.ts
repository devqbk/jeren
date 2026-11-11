/**
 * Alta de contactos en QUBIK CRM desde los formularios de las landings y el
 * paso previo a WhatsApp.
 *
 * Le pega al endpoint del CRM (`/api/ingest/jeren-lead`), que tiene la clave de
 * Supabase y fija la organización JEREN y las campañas: este sitio no guarda
 * ninguna clave de base. CRM_INGEST_URL lo pisa si algún día cambia el dominio.
 *
 * Nunca bloquea el formulario: si el CRM no responde devuelve `{ ok: false }`
 * y el mail sale igual.
 */

export type Campana = "cimat" | "cribmaster"

export type ContactoCrm = {
  campana: Campana
  nombre: string
  empresa: string
  /** Vacío en los contactos de WhatsApp: el dato que queda es el teléfono del chat. */
  email?: string
  telefono?: string
  cargo?: string
  pais?: string
  canal?: "formulario" | "whatsapp"
  /** Código que viaja en el mensaje de WhatsApp para encontrar el lead desde el chat. */
  ref?: string
  /** Lo que la persona pidió o contó, en líneas "Etiqueta: valor". */
  detalle: [string, string][]
  atribucion: [string, string][]
}

export type ResultadoCrm = { ok: true; leadId: string } | { ok: false; codigo: string }

const URL_INGEST =
  process.env.CRM_INGEST_URL?.trim() || "https://qubik-crm.vercel.app/api/ingest/jeren-lead"
const TIMEOUT_MS = 8000

export async function registrarEnCrm(c: ContactoCrm): Promise<ResultadoCrm> {
  try {
    const r = await fetch(URL_INGEST, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...c, detalle: c.detalle.filter(([, v]) => v) }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    })
    if (!r.ok) {
      console.error(`[crm] alta ${r.status}: ${(await r.text()).slice(0, 300)}`)
      return { ok: false, codigo: `CRM-${r.status}` }
    }
    const d = (await r.json()) as { leadId?: string }
    return { ok: true, leadId: d.leadId ?? "" }
  } catch (e) {
    console.error("[crm] alta falló:", e)
    return { ok: false, codigo: "CRM-RED" }
  }
}
