"use client"

import { startTransition, useActionState, useEffect, useId, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { AlertCircle, Loader2 } from "lucide-react"
import { sendCribmasterLead, type CribmasterLeadState } from "@/app/actions/cribmaster-lead"
import { datosUsuario } from "@/components/cimat/user-data"
import { CTA_LABEL, TELEFONO, TELEFONO_HREF, WHATSAPP_URL, formulario } from "@/lib/cribmaster-content"
import { cn } from "@/lib/utils"
import { cmTrack, marcarLeadEnviado } from "./track"

/**
 * Identificadores de clic de Google Ads (gclid; gbraid/wbraid en iOS). Se
 * guardan 90 días en localStorage: la persona vuelve directo una semana
 * después y el gclid de la URL ya no está. La cookie de Google sirve para la
 * etiqueta de conversión; esto sirve para que el id viaje en el mail del lead
 * y se pueda importar la conversión offline cuando Fabián la califique.
 */
const CLICK_IDS = ["gclid", "gbraid", "wbraid"] as const
const CLICK_ID_KEY = "cm_click_id"
const CLICK_ID_DIAS = 90

function clickIds(): Record<string, string> {
  const desdeUrl: Record<string, string> = {}
  for (const k of CLICK_IDS) {
    const v = qs(k)
    if (v) desdeUrl[k] = v
  }
  try {
    if (Object.keys(desdeUrl).length > 0) {
      window.localStorage.setItem(CLICK_ID_KEY, JSON.stringify({ ...desdeUrl, t: Date.now() }))
      return desdeUrl
    }
    const guardado = window.localStorage.getItem(CLICK_ID_KEY)
    if (!guardado) return {}
    const { t, ...ids } = JSON.parse(guardado) as Record<string, string> & { t: number }
    if (Date.now() - Number(t) > CLICK_ID_DIAS * 86400000) return {}
    return ids
  } catch {
    return desdeUrl
  }
}

/**
 * Formulario de la landing CribMaster. Misma mecánica que el de /cimat
 * (Turnstile diferido al primer foco, envío que espera el token, honeypot,
 * validación en cliente y en server), con menos campos: acá no hay rotor que
 * especificar, hay una operación que relevar.
 */
const Turnstile = dynamic(() => import("@marsidev/react-turnstile").then((m) => m.Turnstile), {
  ssr: false,
})

const initialState: CribmasterLeadState = { status: "idle", message: "" }

const field =
  "min-h-11 w-full rounded-md border border-[var(--c-line)] bg-white px-3.5 py-2.5 text-[15px] text-[var(--c-ink)] placeholder:text-[var(--c-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c-accent-2)] disabled:opacity-60"
const labelCls = "block text-sm font-semibold text-[var(--c-ink)]"
const errCls = "mt-1.5 flex items-center gap-1.5 text-[13px] text-[#b80000]"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const OBLIGATORIOS = ["nombre", "empresa", "email"] as const
const MENSAJE_VACIO: Record<(typeof OBLIGATORIOS)[number], string> = {
  nombre: "Escribí tu nombre y apellido.",
  empresa: "Escribí el nombre de tu empresa.",
  email: "Escribí tu email.",
}

function errorDeCampo(nombre: string, valor: string): string {
  const v = valor.trim()
  if (!v) return MENSAJE_VACIO[nombre as keyof typeof MENSAJE_VACIO] ?? ""
  if (nombre === "email" && !EMAIL_RE.test(v)) return "Ese email no parece válido."
  return ""
}

const TOKEN_GASTADO = (codigo?: string) => Boolean(codigo) && codigo !== "VALIDACION"

function qs(key: string): string {
  if (typeof window === "undefined") return ""
  return new URLSearchParams(window.location.search).get(key) ?? ""
}

export function LeadForm({ ctaLocation = "hero-form", className }: { ctaLocation?: string; className?: string }) {
  const [state, formAction, isPending] = useActionState(sendCribmasterLead, initialState)
  const router = useRouter()
  const uid = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const [empezado, setEmpezado] = useState(false)
  const [turnstileListo, setTurnstileListo] = useState(false)
  const [turnstileVersion, setTurnstileVersion] = useState(0)
  const [turnstileFallo, setTurnstileFallo] = useState(false)
  const [esperandoToken, setEsperandoToken] = useState(false)
  const esperandoRef = useRef(false)
  const enviadoRef = useRef(false)
  const procesadoRef = useRef<CribmasterLeadState | null>(initialState)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""
  const [erroresLocales, setErroresLocales] = useState<Record<string, string>>({})
  const err = { ...erroresLocales, ...(state.errors ?? {}) }

  useEffect(() => {
    if (procesadoRef.current === state) return
    procesadoRef.current = state
    if (state.status === "success") {
      if (enviadoRef.current) return
      enviadoRef.current = true
      // Los datos normalizados viajan en el MISMO push que cm_form_submit: la
      // etiqueta de conversión de Ads dispara con ese evento y GTM los hashea
      // ahí (ver components/cimat/user-data.ts). País fijo AR: la landing y la
      // campaña son Argentina y el formulario no pregunta país.
      const campos = formRef.current?.elements as
        | (HTMLFormControlsCollection & Record<string, HTMLInputElement | undefined>)
        | undefined
      const user_data = datosUsuario(campos?.email?.value ?? "", campos?.telefono?.value ?? "", "AR")
      cmTrack("form_submit", {
        cta_location: ctaLocation,
        ...(Object.keys(user_data).length > 0 ? { user_data } : {}),
      })
      marcarLeadEnviado()
      router.push("/cribmaster/gracias")
    }
    if (state.status === "silent") {
      if (enviadoRef.current) return
      enviadoRef.current = true
      router.push("/cribmaster/gracias")
    }
    if (state.status === "error") {
      cmTrack("form_error", { cta_location: ctaLocation, error_code: state.codigo ?? "SIN-CODIGO" })
      if (siteKey && TOKEN_GASTADO(state.codigo)) setTurnstileVersion((v) => v + 1)
    }
  }, [state, router, ctaLocation, siteKey])

  function enviar(form: HTMLFormElement) {
    esperandoRef.current = false
    setEsperandoToken(false)
    const datos = new FormData(form)
    startTransition(() => formAction(datos))
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const datos = new FormData(form)

    const errores: Record<string, string> = {}
    for (const nombre of OBLIGATORIOS) {
      const error = errorDeCampo(nombre, String(datos.get(nombre) ?? ""))
      if (error) errores[nombre] = error
    }
    if (Object.keys(errores).length > 0) {
      setErroresLocales(errores)
      const primero = OBLIGATORIOS.find((n) => errores[n])
      ;(form.elements.namedItem(primero ?? "") as HTMLElement | null)?.focus()
      cmTrack("form_error", {
        cta_location: ctaLocation,
        error_code: "VALIDACION-CLIENTE",
        campos: Object.keys(errores).join(","),
      })
      return
    }
    setErroresLocales({})

    if (siteKey && !String(datos.get("cf-turnstile-response") ?? "")) {
      setTurnstileListo(true)
      esperandoRef.current = true
      setEsperandoToken(true)
      return
    }
    enviar(form)
  }

  function onTurnstileOk() {
    setTurnstileFallo(false)
    if (esperandoRef.current && formRef.current) {
      const form = formRef.current
      window.setTimeout(() => enviar(form), 0)
    }
  }

  function onTurnstileFallo() {
    setTurnstileFallo(true)
    if (esperandoRef.current) {
      esperandoRef.current = false
      setEsperandoToken(false)
      cmTrack("form_error", { cta_location: ctaLocation, error_code: "CF-WIDGET" })
    }
  }

  function onFirstInput() {
    setTurnstileListo(true)
    if (empezado) return
    setEmpezado(true)
    cmTrack("form_start", { cta_location: ctaLocation })
  }

  function onFocus() {
    if (!turnstileListo) setTurnstileListo(true)
  }

  function validarCampo(e: React.FocusEvent<HTMLFormElement>) {
    const campo = e.target
    if (!(campo instanceof HTMLInputElement)) return
    const nombre = campo.name
    if (!(OBLIGATORIOS as readonly string[]).includes(nombre)) return
    const error = errorDeCampo(nombre, campo.value)
    setErroresLocales((prev) => {
      if (prev[nombre] === error) return prev
      const siguiente = { ...prev }
      if (error) siguiente[nombre] = error
      else delete siguiente[nombre]
      return siguiente
    })
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={onSubmit}
      onInput={onFirstInput}
      onFocus={onFocus}
      onBlur={validarCampo}
      noValidate
      className={cn("space-y-4 sm:space-y-5", className)}
    >
      <AttributionFields origen={ctaLocation} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Campo uid={`${uid}-nombre`} name="nombre" label="Nombre y apellido" required error={err.nombre} disabled={isPending} autoComplete="name" />
        <Campo uid={`${uid}-empresa`} name="empresa" label="Empresa" required error={err.empresa} disabled={isPending} autoComplete="organization" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Campo uid={`${uid}-email`} name="email" type="email" label="Email" required error={err.email} disabled={isPending} autoComplete="email" />
        <Campo uid={`${uid}-telefono`} name="telefono" type="tel" label="Teléfono o WhatsApp" hint="opcional" disabled={isPending} autoComplete="tel" />
      </div>

      <Campo uid={`${uid}-cargo`} name="cargo" label="Cargo o área" hint="opcional" disabled={isPending} autoComplete="organization-title" />

      <div>
        <label htmlFor={`${uid}-operacion`} className={labelCls}>
          Tu operación <span className="font-normal text-[var(--c-muted)]">— opcional</span>
        </label>
        <textarea
          id={`${uid}-operacion`}
          name="operacion"
          rows={3}
          disabled={isPending}
          aria-describedby={`${uid}-operacion-hint`}
          className={cn(field, "mt-2 min-h-[76px] resize-y")}
        />
        <p id={`${uid}-operacion-hint`} className="mt-2 text-[13px] leading-relaxed text-[var(--c-muted)]">
          {formulario.ayudaOperacion}
        </p>
      </div>

      {/* Honeypot: invisible para personas, irresistible para bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${uid}-website`}>No completar</label>
        <input id={`${uid}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {esperandoToken ? (
        <p role="status" className="flex items-center gap-2 text-[13px] text-[var(--c-ink-2)]">
          <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
          Verificando que no es un envío automático. La consulta sale sola en unos segundos.
        </p>
      ) : null}

      {turnstileFallo ? (
        <p role="alert" className="text-[13px] leading-relaxed text-[var(--c-ink-2)]">
          No pudimos completar la verificación de seguridad en este navegador. Podés{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--c-ink)] underline underline-offset-4">
            escribirnos por WhatsApp
          </a>{" "}
          o llamar al{" "}
          <a href={TELEFONO_HREF} className="font-semibold text-[var(--c-ink)] underline underline-offset-4">
            {TELEFONO}
          </a>
          .
        </p>
      ) : null}

      {state.status === "error" && state.message ? (
        <div role="alert" className="flex items-start gap-2 rounded-md border border-[#b80000]/30 bg-[#fff5f5] p-4 text-[13px] leading-relaxed text-[var(--c-ink)]">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-[#b80000]" aria-hidden="true" />
          <span>
            {state.message}
            {state.codigo ? <span className="mt-1 block font-mono text-[11px] text-[var(--c-muted)]">código: {state.codigo}</span> : null}
          </span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[var(--c-accent)] px-6 text-[0.95rem] font-semibold text-white transition-colors hover:bg-[var(--c-accent-hover)] disabled:opacity-70"
      >
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Enviando
          </>
        ) : (
          CTA_LABEL
        )}
      </button>

      <p aria-live="polite" className="sr-only">
        {isPending ? "Enviando la consulta." : ""}
      </p>

      {siteKey ? (
        <div className="mt-3 min-h-[70px]">
          {turnstileListo ? (
            <Turnstile
              key={turnstileVersion}
              siteKey={siteKey}
              options={{ theme: "light", language: "es" }}
              onSuccess={onTurnstileOk}
              onError={onTurnstileFallo}
              onUnsupported={onTurnstileFallo}
            />
          ) : null}
        </div>
      ) : null}

      <p className="mt-2 text-[13px] leading-relaxed text-[var(--c-muted)]">
        <span className="font-semibold text-[var(--c-ink-2)]">{formulario.respuesta}</span> {formulario.privacidad}
      </p>
    </form>
  )
}

function Campo({
  uid,
  name,
  label,
  type = "text",
  required,
  hint,
  error,
  disabled,
  autoComplete,
}: {
  uid: string
  name: string
  label: string
  type?: string
  required?: boolean
  hint?: string
  error?: string
  disabled?: boolean
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={uid} className={labelCls}>
        {label}{" "}
        {required ? <span className="text-[#b80000]">*</span> : hint ? <span className="font-normal text-[var(--c-muted)]">— {hint}</span> : null}
      </label>
      <input
        id={uid}
        name={name}
        type={type}
        disabled={disabled}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${uid}-err` : undefined}
        className={cn(field, "mt-2", error && "border-[#b80000]")}
      />
      {error ? (
        <p id={`${uid}-err`} className={errCls}>
          <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  )
}

/** Campos ocultos de contexto y campaña. Se resuelven recién en el cliente. */
function AttributionFields({ origen }: { origen: string }) {
  const [datos, setDatos] = useState<Record<string, string>>({})

  useEffect(() => {
    setDatos({
      page_url: window.location.href,
      ...clickIds(),
      utm_source: qs("utm_source"),
      utm_medium: qs("utm_medium"),
      utm_campaign: qs("utm_campaign"),
      utm_content: qs("utm_content"),
      utm_term: qs("utm_term"),
      device_type: window.innerWidth < 768 ? "mobile" : "desktop",
      referrer: document.referrer,
    })
  }, [])

  return (
    <>
      <input type="hidden" name="cta_location" value={origen} />
      {Object.entries(datos).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
    </>
  )
}
