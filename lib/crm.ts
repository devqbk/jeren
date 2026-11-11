/**
 * Alta de contactos en QUBIK CRM (Supabase) desde los formularios de las landings.
 *
 * Cada envío crea un lead en la organización JEREN, etiquetado con la campaña
 * (`campaign:<id>`, que es como el CRM vincula leads a campañas), y una nota con
 * lo que escribió la persona y la atribución.
 *
 * Nunca bloquea el formulario: si faltan las variables o el CRM no responde,
 * devuelve `{ ok: false }` y el mail sale igual.
 *
 * Variables (solo servidor):
 *   CRM_SUPABASE_URL, CRM_SUPABASE_SERVICE_KEY, CRM_ORG_ID,
 *   CRM_CAMPAIGN_CIMAT_ID, CRM_CAMPAIGN_CRIBMASTER_ID, CRM_OWNER_ID (opcional)
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

const TIMEOUT_MS = 6000

function campaignId(campana: Campana): string | undefined {
  const v =
    campana === "cimat" ? process.env.CRM_CAMPAIGN_CIMAT_ID : process.env.CRM_CAMPAIGN_CRIBMASTER_ID
  return v?.trim() || undefined
}

function separarNombre(completo: string): { first: string; last: string } {
  const partes = completo.trim().split(/\s+/)
  if (partes.length === 1) return { first: partes[0], last: "-" }
  return { first: partes[0], last: partes.slice(1).join(" ") }
}

async function insertar(
  base: string,
  key: string,
  tabla: string,
  fila: Record<string, unknown>
): Promise<Response> {
  return fetch(`${base}/rest/v1/${tabla}`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(fila),
    signal: AbortSignal.timeout(TIMEOUT_MS),
    cache: "no-store",
  })
}

export async function registrarEnCrm(c: ContactoCrm): Promise<ResultadoCrm> {
  const base = process.env.CRM_SUPABASE_URL?.trim().replace(/\/$/, "")
  const key = process.env.CRM_SUPABASE_SERVICE_KEY?.trim()
  const org = process.env.CRM_ORG_ID?.trim()
  const camp = campaignId(c.campana)
  if (!base || !key || !org || !camp) return { ok: false, codigo: "CRM-SIN-CONFIG" }

  const owner = process.env.CRM_OWNER_ID?.trim() || null
  const leadId = crypto.randomUUID()
  const ahora = new Date().toISOString()
  const { first, last } = separarNombre(c.nombre)
  const etiqueta = c.campana === "cimat" ? "CIMAT" : "CribMaster"
  const canal = c.canal ?? "formulario"
  const tags = ["jeren", c.campana, canal === "whatsapp" ? "whatsapp" : "formulario-web", `campaign:${camp}`]
  if (c.ref) tags.push(`ref:${c.ref}`)
  const proximo =
    canal === "whatsapp"
      ? `Ref ${c.ref}: buscar el chat en WhatsApp y pegar el teléfono`
      : `Responder consulta ${etiqueta} del formulario web`

  try {
    const r = await insertar(base, key, "leads", {
      id: leadId,
      organization_id: org,
      owner_id: owner,
      created_by: owner,
      first_name: first,
      last_name: last,
      email: c.email || null,
      phone: c.telefono || null,
      company: c.empresa,
      job_title: c.cargo || null,
      country: c.pais || null,
      status: "new",
      source: "website",
      tags,
      next_action: proximo,
      last_activity_date: ahora,
      created_at: ahora,
      updated_at: ahora,
    })
    if (!r.ok) {
      console.error(`[crm] alta de lead ${r.status}: ${(await r.text()).slice(0, 300)}`)
      return { ok: false, codigo: `CRM-${r.status}` }
    }
  } catch (e) {
    console.error("[crm] alta de lead falló:", e)
    return { ok: false, codigo: "CRM-RED" }
  }

  // La nota es complementaria: si falla, el lead ya quedó.
  const texto = [
    canal === "whatsapp"
      ? `Consulta ${etiqueta} por WhatsApp desde jeren.com (ref ${c.ref})`
      : `Consulta ${etiqueta} desde el formulario de jeren.com`,
    "",
    ...c.detalle.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    ...(c.atribucion.length ? ["", "Atribución:", ...c.atribucion.map(([k, v]) => `${k}: ${v}`)] : []),
  ].join("\n")
  try {
    const r = await insertar(base, key, "notes", {
      organization_id: org,
      owner_id: owner,
      text: texto,
      related_entity_id: leadId,
      related_entity_type: "lead",
      created_at: ahora,
      updated_at: ahora,
    })
    if (!r.ok) console.error(`[crm] nota ${r.status}: ${(await r.text()).slice(0, 300)}`)
  } catch (e) {
    console.error("[crm] nota falló:", e)
  }

  return { ok: true, leadId }
}
