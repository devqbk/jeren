"use client"

import { useEffect } from "react"
import { track } from "./track"

/** Registra la conversión al llegar a /cimat/gracias. */
export function GraciasTracker() {
  useEffect(() => {
    track("lead_conversion", { page: "/cimat/gracias" })
  }, [])
  return null
}
