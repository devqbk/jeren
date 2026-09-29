"use client"

import { startTransition, useActionState, useEffect, useId, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { AlertCircle, Loader2 } from "lucide-react"
import { sendCimatLead, type CimatLeadState } from "@/app/actions/cimat-lead"
import {
  CTA_LABEL,
  INTERESES,
  PAISES,
  TELEFONO,
  TELEFONO_HREF,
  WHATSAPP_URL,
  formulario,
  type InteresValue,
} from "@/lib/cimat-content"
import { cn } from "@/lib/utils"
import { marcarLeadEnviado } from "./gracias-tracker"
import { INTERES_EVENT, track } from "./track"
import { datosUsuario } from "./user-data"

/**
 * Turnstile diferido: ni el componente ni el script de Cloudflare se cargan
 * hasta que la persona toca el formulario. Antes montaba al hidratar —dos
 * veces, uno por formulario— y era el tercero más pesado de la página.
 */
const Turnstile = dynamic(
  () => import("@marsidev/react-turnstile").then((m) => m.Turnstile),
  { ssr: false }
)

const initialState: CimatLeadState = { status: "idle", message: "" }

const field =
  "min-h-11 w-full rounded-md border border-[var(--c-line)] bg-white px-3.5 py-2.5 text-[15px] text-[var(--c-ink)] placeholder:text-[var(--c-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c-accent)] disabled:opacity-60"
const labelCls = "block text-sm font-semibold text-[var(--c-ink)]"
const errCls = "mt-1.5 flex items-center gap-1.5 text-[13px] text-[var(--c-accent)]"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Obligatorios, en el orden en que aparecen: el primero con error recibe el foco. */
const OBLIGATORIOS = ["interes", "nombre", "empresa", "email", "pais"] as const

const MENSAJE_VACIO: Record<(typeof OBLIGATORIOS)[number], string> = {
  interes: "Elija qué información necesita.",
  nombre: "Escriba su nombre y apellido.",
  empresa: "Escriba el nombre de su empresa.",
  email: "Escriba su email.",
  pais: "Seleccione su país.",
}

/** Mismo criterio que el server: vacío o email mal formado. */
function errorDeCampo(nombre: string, valor: string): string {
  const v = valor.trim()
  if (!v) return MENSAJE_VACIO[nombre as keyof typeof MENSAJE_VACIO] ?? ""
  if (nombre === "email" && !EMAIL_RE.test(v)) return "Ese email no parece válido."
  return ""
}

/**
 * Códigos del server con los que el token de Turnstile ya quedó consumido (o
 * nunca sirvió): hay que pedir uno nuevo antes de reintentar, o el segundo
 * envío falla igual con `timeout-or-duplicate`.
 */
const TOKEN_GASTADO = (codigo?: string) => Boolean(codigo) && codigo !== "VALIDACION"

/** Lee un parámetro de la query actual sin romper en SSR. */
function qs(key: string): string {
  if (typeof window === "undefined") return ""
  return new URLSearchParams(window.location.search).get(key) ?? ""
}

/**
 * Interés que trae la URL. `?interes=` manda si es una opción válida; si no,
 * `?linea=` (el id de la línea de producto que usa la URL final del anuncio)
 * se traduce a la necesidad más cercana.
 */
function interesDesdeUrl(): string {
  const directo = qs("interes")
  if (INTERESES.some((i) => i.value === directo)) return directo
  const linea = qs("linea").toLowerCase()
  if (!linea) return ""
  if (linea === "automatizacion") return "automatizacion"
  if (linea === "campo" || linea === "sitio" || linea === "portatil") return "balanceo-de-campo"
  return "nueva-balanceadora"
}

export function LeadForm({
  ctaLocation = "form-landing",
  interesInicial,
  lineaInicial,
  ctaLabel = CTA_LABEL,
  className,
}: {
  /** Dónde vive este formulario. Viaja con el lead. */
  ctaLocation?: string
  /** Interés preseleccionado (subpáginas por rotor). `?interes=` en la URL lo pisa. */
  interesInicial?: InteresValue
  /** `product_line` del lead si la URL no trae `?linea=`. */
  lineaInicial?: string
  /** Texto del botón de envío. En las subpáginas: "Pedir propuesta para [rotor]". */
  ctaLabel?: string
  className?: string
}) {
  const [state, formAction, isPending] = useActionState(sendCimatLead, initialState)
  const router = useRouter()
  const uid = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const interesRef = useRef<HTMLSelectElement>(null)
  const [interes, setInteres] = useState<string>(interesInicial ?? "")
  const [pais, setPais] = useState("")
  const [origen, setOrigen] = useState(ctaLocation)
  const [empezado, setEmpezado] = useState(false)
  const [turnstileListo, setTurnstileListo] = useState(false)
  /** Cambiarla vuelve a montar el widget: es la forma de pedir un token nuevo. */
  const [turnstileVersion, setTurnstileVersion] = useState(0)
  const [turnstileFallo, setTurnstileFallo] = useState(false)
  /**
   * Envío en espera del token. Turnstile se trae recién al primer foco y
   * resolver el desafío tarda unos segundos en un celular: quien completa
   * rápido llegaba al server sin token y rebotaba con CF-SIN-TOKEN. Ahora el
   * envío espera al token y sale solo cuando llega.
   */
  const [esperandoToken, setEsperandoToken] = useState(false)
  const esperandoRef = useRef(false)
  // Guarda contra el doble disparo: el efecto de envío depende de `origen` e
  // `interes`, y un clic en un CTA entre el éxito y la navegación lo re-corría.
  const enviadoRef = useRef(false)
  const procesadoRef = useRef<CimatLeadState | null>(initialState)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""
  const [erroresLocales, setErroresLocales] = useState<Record<string, string>>({})
  // El server manda: si respondió con errores, esos pisan a los del cliente.
  const err = { ...erroresLocales, ...(state.errors ?? {}) }

  /**
   * El <select> es controlado y arranca vacío. Si alguien lo abre y elige antes
   * de que React termine de hidratar —cosa habitual, porque el hero es pesado—
   * el primer render controlado le pisaba la selección con el string vacío y
   * parecía que el desplegable no andaba. Acá se adopta lo que ya esté puesto.
   */
  useEffect(() => {
    const yaElegido = interesRef.current?.value
    if (yaElegido) {
      setInteres(yaElegido)
      return
    }
    // La URL final del anuncio puede traer el interés (`?interes=` o `?linea=`).
    const desdeUrl = interesDesdeUrl()
    if (desdeUrl) setInteres(desdeUrl)
  }, [])

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
    // Cada respuesta del server se procesa una sola vez. El efecto depende de
    // `interes` y `pais`, y antes volvía a disparar `form_error` cada vez que
    // la persona corregía un desplegable después de un error: un solo error
    // real quedaba contado dos o tres veces (medido en el build local, 28/09).
    if (procesadoRef.current === state) return
    procesadoRef.current = state
    if (state.status === "success") {
      if (enviadoRef.current) return
      enviadoRef.current = true
      // Los datos hasheados viajan en el MISMO push que form_submit: la
      // etiqueta de conversión de Ads se dispara con ese evento y necesita
      // tenerlos disponibles en ese instante, no después.
      const campos = formRef.current?.elements as
        | (HTMLFormControlsCollection & Record<string, HTMLInputElement | undefined>)
        | undefined
      const email = campos?.email?.value ?? ""
      const telefono = campos?.telefono?.value ?? ""
      const paisElegido = campos?.pais?.value ?? pais

      const user_data = datosUsuario(email, telefono, paisElegido)
      track("form_submit", {
        cta_location: origen,
        service_interest: interes,
        country: paisElegido,
        ...(Object.keys(user_data).length > 0 ? { user_data } : {}),
      })
      // La página de gracias dispara `lead_conversion` solo si encuentra esto.
      marcarLeadEnviado()
      router.push("/cimat/gracias")
    }
    if (state.status === "silent") {
      // Honeypot: misma pantalla, sin evento de conversión ni flag.
      if (enviadoRef.current) return
      enviadoRef.current = true
      router.push("/cimat/gracias")
    }
    if (state.status === "error") {
      track("form_error", { cta_location: origen, error_code: state.codigo ?? "SIN-CODIGO" })
      if (siteKey && TOKEN_GASTADO(state.codigo)) setTurnstileVersion((v) => v + 1)
    }
  }, [state, router, origen, interes, pais, siteKey])

  /**
   * Envío a mano en lugar de dejar que el `<form action>` lo haga solo.
   *
   * Con `action`, React 19 resetea los campos no controlados apenas termina la
   * acción, aunque el server haya devuelto un error: quien se equivocaba en un
   * campo perdía nombre, empresa, email y teléfono y tenía que escribir todo
   * de nuevo. Llamando a la acción dentro de `startTransition` no hay reset.
   * El `action` queda en el `<form>` solo para el envío sin JavaScript.
   */
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
      track("form_error", {
        cta_location: origen,
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
    // El token recién llega al input oculto en el mismo tick: se envía en el siguiente.
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
      track("form_error", { cta_location: origen, error_code: "CF-WIDGET" })
    }
  }

  function onFirstInput() {
    setTurnstileListo(true)
    if (empezado) return
    setEmpezado(true)
    track("form_start", { cta_location: origen })
  }

  /** Primer foco en cualquier campo: hora de traer el widget de Turnstile. */
  function onFocus() {
    if (!turnstileListo) setTurnstileListo(true)
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
    if (!["nombre", "empresa", "email", "pais"].includes(nombre)) return

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
      <AttributionFields interes={interes} origen={origen} linea={lineaInicial ?? ""} />

      <div>
        <label htmlFor={`${uid}-interes`} className={labelCls}>
          ¿Qué información necesita? <span className="text-[var(--c-accent)]">*</span>
        </label>
        <select
          ref={interesRef}
          id={`${uid}-interes`}
          name="interes"
          value={interes}
          onChange={(e) => {
            setInteres(e.target.value)
            setErroresLocales((prev) => {
              if (!prev.interes) return prev
              const siguiente = { ...prev }
              delete siguiente.interes
              return siguiente
            })
          }}
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
        label="Email"
        required
        error={err.email}
        disabled={isPending}
        autoComplete="email"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-pais`} className={labelCls}>
            País <span className="text-[var(--c-accent)]">*</span>
          </label>
          <select
            id={`${uid}-pais`}
            name="pais"
            value={pais}
            onChange={(e) => {
              setPais(e.target.value)
              setErroresLocales((prev) => {
                if (!prev.pais) return prev
                const siguiente = { ...prev }
                delete siguiente.pais
                return siguiente
              })
            }}
            disabled={isPending}
            autoComplete="country"
            aria-invalid={Boolean(err.pais)}
            aria-describedby={err.pais ? `${uid}-pais-err` : undefined}
            className={cn(field, "mt-2 bg-white", err.pais && "border-[var(--c-accent)]")}
          >
            <option value="">Seleccione un país</option>
            {PAISES.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
          {err.pais ? (
            <p id={`${uid}-pais-err`} className={errCls}>
              <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
              {err.pais}
            </p>
          ) : null}
        </div>
        {/* Visible y opcional: para el comprador industrial de la región es el
            dato que JEREN más necesita para responder. */}
        <Campo
          uid={`${uid}-telefono`}
          name="telefono"
          type="tel"
          label="Teléfono o WhatsApp"
          hint="opcional"
          disabled={isPending}
          autoComplete="tel"
        />
      </div>

      {/* Lo opcional se pliega: el formulario tiene que entrar en pantalla sin
          scroll, y este es el campo que menos gente completa. */}
      <details className="group rounded-md border border-[var(--c-line)] bg-[var(--c-surface-2)]">
        <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-3 px-3.5 py-2.5 text-sm font-semibold text-[var(--c-ink)] [&::-webkit-details-marker]:hidden [&::marker]:content-['']">
          Agregar datos del rotor
          <span className="text-[13px] font-normal text-[var(--c-muted)]">opcional</span>
        </summary>
        <div className="space-y-4 border-t border-[var(--c-line)] p-4">
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

      {/* Alto reservado desde el SSR: el widget monta recién al primer foco o
          input y sin esto empujaría el botón de envío unos 70 px. */}
      {siteKey ? (
        <div className="min-h-[70px]">
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

      {esperandoToken ? (
        <p role="status" className="flex items-center gap-2 text-[13px] text-[var(--c-ink-2)]">
          <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
          Verificando que no es un envío automático. La consulta sale sola en unos segundos.
        </p>
      ) : null}

      {turnstileFallo ? (
        <p role="alert" className="text-[13px] leading-relaxed text-[var(--c-ink-2)]">
          No pudimos completar la verificación de seguridad en este navegador. Puede{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--c-ink)] underline underline-offset-4"
          >
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
        <div
          role="alert"
          className="flex items-start gap-2 rounded-md border border-[var(--c-accent)]/30 bg-[#fff5f5] p-4 text-[13px] leading-relaxed text-[var(--c-ink)]"
        >
          <AlertCircle
            className="mt-0.5 size-4 shrink-0 text-[var(--c-accent)]"
            aria-hidden="true"
          />
          <span>
            {state.message}
            {state.codigo ? (
              <span className="mt-1 block font-mono text-[11px] text-[var(--c-muted)]">
                código: {state.codigo}
              </span>
            ) : null}
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
          ctaLabel
        )}
      </button>

      <p aria-live="polite" className="sr-only">
        {isPending ? "Enviando la consulta." : ""}
      </p>

      <p className="mt-2 text-[13px] leading-relaxed text-[var(--c-muted)]">
        <span className="font-semibold text-[var(--c-ink-2)]">{formulario.asesoramiento}</span>{" "}
        {formulario.respuesta}
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
function AttributionFields({
  interes,
  origen,
  linea,
}: {
  interes: string
  origen: string
  linea: string
}) {
  const [datos, setDatos] = useState<Record<string, string>>({})

  useEffect(() => {
    setDatos({
      page_url: window.location.href,
      product_line: qs("linea") || linea,
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
  }, [linea])

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
