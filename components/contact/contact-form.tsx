"use client"

import { useActionState } from "react"
import { useEffect, useRef, useState } from "react"
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
    }
    if (state.status === "error") {
      track("contact_error", {
        form_id: FORM_ID,
        cta_location: "contacto",
        error_code: state.codigo ?? "SIN-CODIGO",
      })
    }
  }, [state])

  function onFirstInput() {
    if (empezado) return
    setEmpezado(true)
    track("contact_start", { form_id: FORM_ID, cta_location: "contacto" })
  }

  return (
    <form ref={formRef} action={formAction} onInput={onFirstInput} className="space-y-6">
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
          siteKey={siteKey}
          options={{ theme: "light", language: "es" }}
        />
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

      <Button type="submit" className="w-full" disabled={isPending}>
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
