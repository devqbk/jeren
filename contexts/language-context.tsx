"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { type Locale, translations, type Translations } from "@/lib/translations"

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "es",
  setLocale: () => {},
  t: translations.es,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es")

  useEffect(() => {
    const saved = localStorage.getItem("jeren-locale") as Locale | null
    if (saved && saved in translations) {
      setLocaleState(saved)
    }
  }, [])

  function setLocale(l: Locale) {
    setLocaleState(l)
    localStorage.setItem("jeren-locale", l)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
