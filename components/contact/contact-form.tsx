"use client"

import { useActionState } from "react"
import { useEffect, useRef } from "react"
import { Turnstile } from "@marsidev/react-turnstile"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact"

const initialState: ContactFormState = {
  status: "idle",
  message: "",
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""

  // Resetear el formulario cuando el envío es exitoso
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
    }
  }, [state.status])

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
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
          <p className="text-sm font-medium">{state.message}</p>
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
