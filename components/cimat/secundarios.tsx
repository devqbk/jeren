"use client"

import type * as React from "react"
import { CATALOGO_PDF_URL, EMAIL, TELEFONO_HREF, WHATSAPP_URL } from "@/lib/cimat-content"
import { track } from "./track"

/**
 * Canales secundarios. Nunca compiten visualmente con el CTA principal, pero
 * sí se miden: son conversiones secundarias del embudo.
 */

export function WhatsappLink({
  location,
  className,
  children,
}: {
  location: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { cta_location: location })}
      className={className}
    >
      {children}
    </a>
  )
}

export function TelefonoLink({
  location,
  className,
  children,
}: {
  location: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={TELEFONO_HREF}
      onClick={() => track("phone_click", { cta_location: location })}
      className={className}
    >
      {children}
    </a>
  )
}

export function EmailLink({
  location,
  className,
  children,
}: {
  location: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={`mailto:${EMAIL}`}
      onClick={() => track("email_click", { cta_location: location })}
      className={className}
    >
      {children}
    </a>
  )
}

export function CatalogoLink({
  location,
  className,
  children,
}: {
  location: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={CATALOGO_PDF_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("catalog_download", { cta_location: location })}
      className={className}
    >
      {children}
    </a>
  )
}
