"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-border bg-muted/50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          ¡Mensaje enviado!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Gracias por contactarnos. Nos pondremos en contacto a la brevedad.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="asunto">Asunto</Label>
        <Input
          id="asunto"
          name="asunto"
          type="text"
          placeholder="Asunto del mensaje"
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
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  )
}
