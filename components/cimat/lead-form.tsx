"use client"

import { useActionState, useEffect, useId, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Turnstile } from "@marsidev/react-turnstile"
import { AlertCircle, Loader2 } from "lucide-react"
import { sendCimatLead, type CimatLeadState } from "@/app/actions/cimat-lead"
import { CTA_LABEL, INTERESES, formulario } from "@/lib/cimat-content"
import { cn } from "@/lib/utils"
import { INTERES_EVENT, track } from "./track"

const initialState: CimatLeadState = { status: "idle", message: "" }

const field =
  "min-h-11 w-full rounded-md border border-[var(--c-line)] bg-white px-3.5 py-2.5 text-[15px] text-[var(--c-ink)] placeholder:text-[var(--c-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c-accent)] disabled:opacity-60"
const labelCls = "block text-sm font-semibold text-[var(--c-ink)]"
const errCls = "mt-1.5 flex items-center gap-1.5 text-[13px] text-[var(--c-accent)]"

/** Lee un parámetro de la query actual sin romper en SSR. */
function qs(key: string): string {
  if (typeof window === "undefined") return ""
  return new URLSearchParams(window.location.search).get(key) ?? ""
}

export function LeadForm({
  ctaLocation = "form-landing",
  className,
}: {
  /** Dónde vive este formulario. Viaja con el lead. */
  ctaLocation?: string
  className?: string
}) {
  const [state, formAction, isPending] = useActionState(sendCimatLead, initialState)
  const router = useRouter()
  const uid = useId()
  const interesRef = useRef<HTMLSelectElement>(null)
  const [interes, setInteres] = useState("")
  const [origen, setOrigen] = useState(ctaLocation)
  const [empezado, setEmpezado] = useState(false)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""
  const [erroresLocales, setErroresLocales] = useState<Record<string, string>>({})
  // El server manda: si respondió con errores, esos pisan a los del cliente.
  const err = { ...erroresLocales, ...(state.errors ?? {}) }

  // Un CTA de cualquier parte de la página preselecciona la necesidad acá.
  useEffect(() => {
    function onInteres(e: Event) {
      const detail = (e as CustomEvent<{ interes: string; ctaLocation: string }>).detail
      setOrigen(detail.ctaLocation || ctaLocation)
      if (!detail.interes) return
      setInteres(detail.interes)
      window.setTimeout(() => interesRef.current?.focus(), 400)
    }
    window.addEventListener(INTERES_EVENT, onInteres)
    return () => window.removeEventListener(INTERES_EVENT, onInteres)
  }, [ctaLocation])

  useEffect(() => {
    if (state.status === "success") {
      track("form_submit", { cta_location: origen, service_interest: interes })
      router.push("/cimat/gracias")
    }
    if (state.status === "silent") {
      // Honeypot: misma pantalla, sin evento de conversión.
      router.push("/cimat/gracias")
    }
    if (state.status === "error") {
      track("form_error", { cta_location: origen })
    }
  }, [state, router, origen, interes])

  function onFirstInput() {
    if (empezado) return
    setEmpezado(true)
    track("form_start", { cta_location: origen })
  }

  /**
   * Validación al salir del campo. El server valida igual —es el que manda—,
   * pero en mobile enterarse de un campo vacío después del round-trip es la
   * forma más barata de perder un lead.
   */
  function validarCampo(e: React.FocusEvent<HTMLFormElement>) {
    const campo = e.target
    if (!(campo instanceof HTMLInputElement || campo instanceof HTMLSelectElement)) return
    const nombre = campo.name
    if (!["interes", "nombre", "empresa", "email"].includes(nombre)) return

    const valor = campo.value.trim()
    let error = ""
    if (!valor) {
      error = {
        interes: "Elija qué información necesita.",
        nombre: "Escriba su nombre y apellido.",
        empresa: "Escriba el nombre de su empresa.",
        email: "Escriba su email corporativo.",
      }[nombre] as string
    } else if (nombre === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor)) {
      error = "Ese email no parece válido."
    }

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
      action={formAction}
      onInput={onFirstInput}
      onBlur={validarCampo}
      noValidate
      className={cn("space-y-4 sm:space-y-5", className)}
    >
      <AttributionFields interes={interes} origen={origen} />

      <div>
        <label htmlFor={`${uid}-interes`} className={labelCls}>
          ¿Qué información necesita? <span className="text-[var(--c-accent)]">*</span>
        </label>
        <select
          ref={interesRef}
          id={`${uid}-interes`}
          name="interes"
          value={interes}
          onChange={(e) => setInteres(e.target.value)}
          disabled={isPending}
          aria-invalid={Boolean(err.interes)}
          aria-describedby={err.interes ? `${uid}-interes-err` : undefined}
          className={cn(field, "mt-2 bg-white")}
        >
          <option value="">Seleccione una opción</option>
          {INTERESES.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
        {err.interes ? (
          <p id={`${uid}-interes-err`} className={errCls}>
            <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
            {err.interes}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Campo
          uid={`${uid}-nombre`}
          name="nombre"
          label="Nombre y apellido"
          required
          error={err.nombre}
          disabled={isPending}
          autoComplete="name"
        />
        <Campo
          uid={`${uid}-empresa`}
          name="empresa"
          label="Empresa"
          required
          error={err.empresa}
          disabled={isPending}
          autoComplete="organization"
        />
      </div>

      <Campo
        uid={`${uid}-email`}
        name="email"
        type="email"
        label="Email corporativo"
        required
        error={err.email}
        disabled={isPending}
        autoComplete="email"
      />

      {/* Lo opcional se pliega: el formulario tiene que entrar en pantalla sin
          scroll, y estos dos campos son los que menos gente completa. */}
      <details className="group rounded-md border border-[var(--c-line)] bg-[var(--c-surface-2)]">
        <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-3 px-3.5 py-2.5 text-sm font-semibold text-[var(--c-ink)] [&::-webkit-details-marker]:hidden [&::marker]:content-['']">
          Agregar teléfono y datos del rotor
          <span className="text-[13px] font-normal text-[var(--c-muted)]">opcional</span>
        </summary>
        <div className="space-y-4 border-t border-[var(--c-line)] p-4">
          <Campo
            uid={`${uid}-telefono`}
            name="telefono"
            type="tel"
            label="Teléfono o WhatsApp"
            disabled={isPending}
            autoComplete="tel"
          />
          <div>
            <label htmlFor={`${uid}-aplicacion`} className={labelCls}>
              Aplicación o rotor
            </label>
            <textarea
              id={`${uid}-aplicacion`}
              name="aplicacion"
              rows={3}
              disabled={isPending}
              aria-describedby={`${uid}-aplicacion-hint`}
              className={cn(field, "mt-2 min-h-[76px] resize-y")}
            />
            <p
              id={`${uid}-aplicacion-hint`}
              className="mt-2 text-[13px] leading-relaxed text-[var(--c-muted)]"
            >
              {formulario.ayudaRotor}
            </p>
          </div>
        </div>
      </details>

      {/* Honeypot: invisible para personas, irresistible para bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${uid}-website`}>No completar</label>
        <input id={`${uid}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Alto reservado desde el SSR: el widget monta después de hidratar y
          sin esto empuja el botón de envío unos 70 px. */}
      {siteKey ? (
        <div className="min-h-[70px]">
          <Turnstile siteKey={siteKey} options={{ theme: "light", language: "es" }} />
        </div>
      ) : null}

      {state.status === "error" && state.message ? (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-md border border-[var(--c-accent)]/30 bg-[#fff5f5] p-4 text-[13px] leading-relaxed text-[var(--c-ink)]"
        >
          <AlertCircle
            className="mt-0.5 size-4 shrink-0 text-[var(--c-accent)]"
            aria-hidden="true"
          />
          <span>{state.message}</span>
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

      <p className="mt-2 text-[13px] leading-relaxed text-[var(--c-muted)]">{formulario.privacidad}</p>
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
        {required ? (
          <span className="text-[var(--c-accent)]">*</span>
        ) : hint ? (
          <span className="font-normal text-[var(--c-muted)]">— {hint}</span>
        ) : null}
      </label>
      <input
        id={uid}
        name={name}
        type={type}
        disabled={disabled}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${uid}-err` : undefined}
        className={cn(field, "mt-2", error && "border-[var(--c-accent)]")}
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
function AttributionFields({ interes, origen }: { interes: string; origen: string }) {
  const [datos, setDatos] = useState<Record<string, string>>({})

  useEffect(() => {
    setDatos({
      page_url: window.location.href,
      product_line: qs("linea"),
      industry: qs("industria"),
      utm_source: qs("utm_source"),
      utm_medium: qs("utm_medium"),
      utm_campaign: qs("utm_campaign"),
      utm_content: qs("utm_content"),
      utm_term: qs("utm_term"),
      gclid: qs("gclid"),
      // En tráfico iOS Google manda gbraid/wbraid en lugar de gclid.
      gbraid: qs("gbraid"),
      wbraid: qs("wbraid"),
      device_type: window.innerWidth < 768 ? "mobile" : "desktop",
      referrer: document.referrer,
    })
  }, [])

  return (
    <>
      <input type="hidden" name="cta_location" value={origen} />
      <input type="hidden" name="service_interest" value={interes} />
      {Object.entries(datos).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
    </>
  )
}
