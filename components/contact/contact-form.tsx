"use client"

import { useActionState } from "react"
import { startTransition, useEffect, useRef, useState } from "react"
import { Turnstile } from "@marsidev/react-turnstile"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact"
import { track } from "@/components/cimat/track"

/**
 * Eventos propios (`contact_start`, `contact_submit`, `contact_error`), NO los
 * de CIMAT: el activador de GTM que dispara la conversión de Ads escucha
 * `form_submit`, y un lead del formulario general no es una conversión de la
 * campaña CIMAT. Con nombres distintos GA4 los mide y Ads no los cuenta, sin
 * tocar el contenedor. Sin esto, un lead que entra por /contacto llega al mail
 * y no aparece en ninguna métrica.
 */
const FORM_ID = "contacto_general"

/**
 * Códigos del server con los que el token de Turnstile ya quedó consumido (o
 * nunca sirvió): hay que pedir uno nuevo antes de reintentar. Mismo criterio
 * que el formulario de /cimat.
 */
const TOKEN_GASTADO = (codigo?: string) => Boolean(codigo) && codigo !== "VALIDACION"

const initialState: ContactFormState = {
  status: "idle",
  message: "",
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""
  const [empezado, setEmpezado] = useState(false)
  const enviadoRef = useRef(false)
  /** Cambiarla vuelve a montar el widget: es la forma de pedir un token nuevo. */
  const [turnstileVersion, setTurnstileVersion] = useState(0)
  const [turnstileFallo, setTurnstileFallo] = useState(false)
  /**
   * Envío en espera del token. Quien completa rápido (o con autocompletar)
   * llegaba al server sin token y rebotaba con CF-SIN-TOKEN: 12/10, 07/11 y
   * 09/11 en producción. Ahora el envío espera al token y sale solo cuando
   * llega, como en /cimat desde el 28/09.
   */
  const [esperandoToken, setEsperandoToken] = useState(false)
  const esperandoRef = useRef(false)

  // Resetear el formulario cuando el envío es exitoso
  useEffect(() => {
    if (state.status === "success") {
      if (enviadoRef.current) return
      enviadoRef.current = true
      // El asunto es lo único que dice de qué producto viene el lead.
      const campos = formRef.current?.elements as
        | (HTMLFormControlsCollection & Record<string, HTMLInputElement | undefined>)
        | undefined
      track("contact_submit", {
        form_id: FORM_ID,
        cta_location: "contacto",
        subject: campos?.asunto?.value?.slice(0, 100) ?? "",
        page: window.location.pathname,
      })
      formRef.current?.reset()
      setEmpezado(false)
      enviadoRef.current = false
      // El token quedó consumido: un segundo mensaje necesita uno nuevo.
      if (siteKey) setTurnstileVersion((v) => v + 1)
    }
    if (state.status === "error") {
      track("contact_error", {
        form_id: FORM_ID,
        cta_location: "contacto",
        error_code: state.codigo ?? "SIN-CODIGO",
      })
      if (siteKey && TOKEN_GASTADO(state.codigo)) setTurnstileVersion((v) => v + 1)
    }
  }, [state, siteKey])

  /**
   * Envío a mano dentro de `startTransition` en lugar de dejar que el
   * `<form action>` lo haga solo: así se puede esperar el token, y React no
   * resetea los campos cuando el server devuelve un error. El `action` queda
   * en el `<form>` para el envío sin JavaScript.
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
    if (siteKey && !String(datos.get("cf-turnstile-response") ?? "")) {
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
      track("contact_error", { form_id: FORM_ID, cta_location: "contacto", error_code: "CF-WIDGET" })
    }
  }

  function onFirstInput() {
    if (empezado) return
    setEmpezado(true)
    track("contact_start", { form_id: FORM_ID, cta_location: "contacto" })
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={onSubmit}
      onInput={onFirstInput}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">
            Nombre <span className="text-destructive">*</span>
          </Label>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="Tu nombre"
            disabled={isPending}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            disabled={isPending}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="empresa">Empresa</Label>
        <Input
          id="empresa"
          name="empresa"
          type="text"
          placeholder="Nombre de tu empresa"
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="asunto">Asunto</Label>
        <Input
          id="asunto"
          name="asunto"
          type="text"
          placeholder="Asunto del mensaje"
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">
          Mensaje <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          placeholder="¿En qué podemos ayudarte?"
          disabled={isPending}
        />
      </div>

      {/* Cloudflare Turnstile widget */}
      {siteKey && (
        <Turnstile
          key={turnstileVersion}
          siteKey={siteKey}
          options={{ theme: "light", language: "es" }}
          onSuccess={onTurnstileOk}
          onError={onTurnstileFallo}
          onUnsupported={onTurnstileFallo}
        />
      )}

      {esperandoToken && (
        <p role="status" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Verificando que no es un envío automático. El mensaje sale solo en unos segundos.
        </p>
      )}

      {turnstileFallo && (
        <p role="alert" className="text-sm text-muted-foreground">
          No pudimos completar la verificación de seguridad en este navegador. Probá recargar la
          página o escribinos directamente por mail.
        </p>
      )}

      {/* Feedback de estado */}
      {state.status === "success" && (
        <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">{state.message}</p>
        </div>
      )}

      {state.status === "error" && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <p className="text-sm font-medium">{state.message}</p>
            {state.codigo ? (
              <p className="mt-1 font-mono text-[11px] opacity-70">código: {state.codigo}</p>
            ) : null}
          </div>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isPending || esperandoToken}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </Button>
    </form>
  )
}
