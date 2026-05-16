"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const nombre = data.get("nombre") as string
    const email = data.get("email") as string
    const empresa = data.get("empresa") as string
    const asunto = data.get("asunto") as string
    const mensaje = data.get("mensaje") as string

    const subject = encodeURIComponent(asunto || `Consulta de ${nombre}`)
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmail: ${email}${empresa ? `\nEmpresa: ${empresa}` : ""}\n\n${mensaje}`
    )

    window.location.href = `mailto:info@jeren.com?subject=${subject}&body=${body}`
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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

      <Button type="submit" className="w-full">
        Enviar mensaje
      </Button>
    </form>
  )
}
