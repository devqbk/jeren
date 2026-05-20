"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { type Locale, localeLabels } from "@/lib/translations"
import { cn } from "@/lib/utils"

const locales = Object.keys(localeLabels) as Locale[]

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
        aria-label="Cambiar idioma"
      >
        <span className="text-xs font-semibold tracking-wide">
          {localeLabels[locale].short}
        </span>
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[130px] rounded-lg border border-border bg-background py-1 shadow-lg">
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => { setLocale(l); setOpen(false) }}
              className={cn(
                "flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-muted",
                l === locale ? "font-semibold text-primary" : "text-foreground/80"
              )}
            >
              <span className="w-6 text-xs font-bold text-muted-foreground">
                {localeLabels[l].short}
              </span>
              <span>{localeLabels[l].label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
