"use client"

import { useEffect, useRef, useState } from "react"
import { registrarContactoWhatsapp } from "@/app/actions/whatsapp-lead"
import { track } from "@/components/cimat/track"

/**
 * Paso previo a WhatsApp en las landings: pide nombre y empresa, crea el
 * contacto en el CRM con un código (CI-XXXX / CM-XXXX) y abre WhatsApp con ese
 * código en el mensaje. Así el chat que le llega a Fabián se cruza con el lead
 * (y con el anuncio que lo trajo) sin tener la API de WhatsApp.
 *
 * Intercepta cualquier link a wa.me de la página. Los botones disparan `whatsapp_cta` al
 * tocarse; la conversión `whatsapp_click` (la que cuenta Google Ads) sale recién cuando la
 * persona completa este paso y se abre WhatsApp (decisión de Ariel, 13/11/2026: antes contaba
 * la apertura del diálogo).
 * Usa <dialog> nativo para no sumar JS de Radix a la landing.
 */

type Campana = "cimat" | "cribmaster"

const CLAVE_ATRIB = "jeren_atribucion"
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gbraid", "wbraid", "gad_campaignid", "gad_source"]

function guardarAtribucion() {
  try {
    const qs = new URLSearchParams(window.location.search)
    const nueva: Record<string, string> = {}
    for (const k of PARAMS) {
      const v = qs.get(k)
      if (v) nueva[k] = v
    }
    if (Object.keys(nueva).length === 0 && window.sessionStorage.getItem(CLAVE_ATRIB)) return
    if (document.referrer && !document.referrer.includes(window.location.host)) nueva.referrer = document.referrer
    nueva.landing = window.location.pathname
    window.sessionStorage.setItem(CLAVE_ATRIB, JSON.stringify(nueva))
  } catch {
    // Sin storage: la atribución se arma con la URL actual al enviar.
  }
}

function leerAtribucion(): [string, string][] {
  let guardada: Record<string, string> = {}
  try {
    guardada = JSON.parse(window.sessionStorage.getItem(CLAVE_ATRIB) ?? "{}")
  } catch {}
  const pares = Object.entries(guardada)
  pares.push(["page_url", window.location.href.split("?")[0]])
  pares.push(["device_type", window.innerWidth < 768 ? "mobile" : "desktop"])
  return pares
}

function nuevoRef(campana: Campana): string {
  const letras = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  const azar = crypto.getRandomValues(new Uint8Array(4))
  const cuerpo = Array.from(azar, (b) => letras[b % letras.length]).join("")
  return `${campana === "cimat" ? "CI" : "CM"}-${cuerpo}`
}

/** Reescribe el mensaje del link con nombre, empresa y código. */
function armarUrl(href: string, nombre: string, empresa: string, ref: string): { url: string; origen: string } {
  const u = new URL(href)
  const texto = u.searchParams.get("text") ?? ""
  const origen = texto.match(/\(ref\. ([^)]+)\)/)?.[1] ?? ""
  const base = texto.replace(/\s*\(ref\. [^)]+\)/, "").trim()
  u.searchParams.set("text", `${base}. Soy ${nombre}, de ${empresa} (ref. ${ref})`)
  return { url: u.toString(), origen }
}

export function WhatsappPaso({ campana }: { campana: Campana }) {
  const dialogo = useRef<HTMLDialogElement>(null)
  const destino = useRef("")
  const ubicacion = useRef("")
  const [errores, setErrores] = useState<{ nombre?: string; empresa?: string }>({})
  const voz = campana === "cimat" ? "usted" : "vos"
  const evento = campana === "cimat" ? "whatsapp_paso" : "cm_whatsapp_paso"

  useEffect(() => {
    guardarAtribucion()
    function alClic(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return
      const a = (e.target as Element | null)?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement | null
      if (!a || !dialogo.current) return
      e.preventDefault()
      destino.current = a.href
      ubicacion.current = a.dataset.cta ?? ""
      setErrores({})
      dialogo.current.showModal()
      track(`${evento}_abierto`, { page: window.location.pathname })
    }
    document.addEventListener("click", alClic, true)
    return () => document.removeEventListener("click", alClic, true)
  }, [evento])

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const nombre = String(fd.get("nombre") ?? "").trim()
    const empresa = String(fd.get("empresa") ?? "").trim()
    const faltan = {
      nombre: nombre ? undefined : voz === "usted" ? "Escriba su nombre." : "Escribí tu nombre.",
      empresa: empresa ? undefined : voz === "usted" ? "Escriba su empresa." : "Escribí tu empresa.",
    }
    if (faltan.nombre || faltan.empresa) {
      setErrores(faltan)
      return
    }

    const ref = nuevoRef(campana)
    const { url, origen } = armarUrl(destino.current, nombre, empresa, ref)
    const atribucion = leerAtribucion()
    if (origen) atribucion.push(["origen", origen])

    // Primero se abre WhatsApp (dentro del gesto del usuario, para que no lo
    // bloquee el navegador); el alta en el CRM sigue en segundo plano.
    void registrarContactoWhatsapp({
      campana,
      nombre,
      empresa,
      ref,
      atribucion,
      website: String(fd.get("website") ?? ""),
    }).catch(() => {})
    track(`${evento}_enviado`, { page: window.location.pathname })
    // La conversión: llegó a WhatsApp con nombre y empresa.
    track(campana === "cimat" ? "whatsapp_click" : "cm_whatsapp_click",
      { cta_location: ubicacion.current, page: window.location.pathname })
    dialogo.current?.close()
    // Sin "noopener" en las features: con eso window.open devuelve null siempre
    // y no se puede distinguir un bloqueo de pop-up. El opener se corta a mano.
    const ventana = window.open(url, "_blank")
    if (ventana) ventana.opener = null
    else window.location.href = url
  }

  const campo =
    "mt-1 block min-h-11 w-full rounded-md border border-[var(--c-line)] bg-white px-3 text-base text-[var(--c-ink)] focus:border-[var(--c-ink)] focus:outline-none"

  // El wrapper hereda los tokens de color de la landing (--c-ink, --c-line).
  const tokens = campana === "cimat" ? { "data-cimat": "" } : { "data-cribmaster": "" }

  return (
    <div {...tokens} className="contents">
    <dialog
      ref={dialogo}
      aria-labelledby="whatsapp-paso-titulo"
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close()
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-sm rounded-lg bg-white p-0 text-[var(--c-ink)] shadow-xl backdrop:bg-black/50"
    >
      <form onSubmit={enviar} noValidate className="p-6">
        <h2 id="whatsapp-paso-titulo" className="text-lg font-semibold">
          ¿Con quién hablamos?
        </h2>
        <p className="mt-1 text-sm text-[var(--c-ink)]/70">
          {voz === "usted"
            ? "Así le respondemos por WhatsApp sabiendo quién es."
            : "Así te respondemos por WhatsApp sabiendo quién sos."}
        </p>

        <label className="mt-5 block text-sm font-medium">
          Nombre
          <input name="nombre" autoComplete="name" maxLength={120} className={campo} aria-invalid={!!errores.nombre} />
          {errores.nombre && <span className="mt-1 block text-sm text-[#b00020]">{errores.nombre}</span>}
        </label>
        <label className="mt-4 block text-sm font-medium">
          Empresa
          <input name="empresa" autoComplete="organization" maxLength={160} className={campo} aria-invalid={!!errores.empresa} />
          {errores.empresa && <span className="mt-1 block text-sm text-[#b00020]">{errores.empresa}</span>}
        </label>
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-px w-px opacity-0" />

        <button
          type="submit"
          className="mt-6 flex min-h-11 w-full items-center justify-center rounded-md bg-[#25D366] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
        >
          Abrir WhatsApp
        </button>
        <button
          type="button"
          onClick={() => dialogo.current?.close()}
          className="mt-2 flex min-h-11 w-full items-center justify-center text-sm text-[var(--c-ink)]/70 underline-offset-4 hover:underline"
        >
          Cancelar
        </button>
      </form>
    </dialog>
    </div>
  )
}
