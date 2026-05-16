"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"
import { LanguageProvider } from "@/contexts/language-context"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
}
