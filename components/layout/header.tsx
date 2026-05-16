"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { navigation, electronicaBrands } from "@/lib/data"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

// Map nav item hrefs to translation keys
const navTranslationKeys: Record<string, keyof ReturnType<typeof useLanguage>["t"]["nav"]> = {
  "/empresa":           "empresa",
  "/petroleo-gas":      "petroleoGas",
  "/mineria":           "mineria",
  "/agro":              "agro",
  "/electronica":       "electronica",
  "/aire-acondicionado": "aireRefrigeracion",
  "/servicios":         "servicios",
  "/contacto":          "contacto",
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/favicon-jeren.png"
            alt="Jeren SRL"
            width={48}
            height={48}
            className="h-10 w-10 lg:h-12 lg:w-12"
          />
          <div className="hidden sm:block">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Líderes en Automatización Industrial
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-0.5">
          {navigation.main.map((item) => {
            const translatedName = t.nav[navTranslationKeys[item.href]] ?? item.name
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary whitespace-nowrap",
                    item.hasDropdown && "pr-2"
                  )}
                >
                  {translatedName}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform flex-shrink-0",
                        activeDropdown === item.name && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Mega Menu — marcas */}
                {item.hasDropdown && activeDropdown === item.name && item.brands && (
                  <div className="absolute left-0 top-full z-50 pt-2">
                    <div className={cn(
                      "rounded-lg border border-border bg-background p-6 shadow-xl",
                      item.brands.length > 6 ? "w-[600px]" : "w-[480px]"
                    )}>
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-foreground">
                          {t.nav.marcasDe} {translatedName}
                        </h3>
                        <Link href={item.href} className="text-xs font-medium text-primary hover:underline">
                          {t.nav.verTodas}
                        </Link>
                      </div>
                      <div className={cn(
                        "gap-3",
                        item.brands.length > 6 ? "grid grid-cols-4" : "grid grid-cols-3"
                      )}>
                        {item.brands.map((brand) => (
                          <Link
                            key={brand.slug}
                            href={`${item.href}/${brand.slug}`}
                            className="group flex flex-col items-center rounded-md border border-transparent p-3 transition-all hover:border-border hover:bg-muted"
                          >
                            {brand.logo ? (
                              <Image
                                src={brand.logo}
                                alt={brand.name}
                                width={100}
                                height={40}
                                className="h-10 w-auto object-contain mb-2"
                              />
                            ) : (
                              <div className="h-10 mb-2 flex items-center">
                                <span className="text-xs font-semibold text-foreground text-center">
                                  {brand.name}
                                </span>
                              </div>
                            )}
                            <span className="text-xs font-medium text-foreground text-center line-clamp-2">
                              {brand.name}
                            </span>
                            <span className="mt-1 line-clamp-2 text-xs text-muted-foreground text-center">
                              {brand.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Right side: Language switcher + mobile button */}
        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-4">
            {navigation.main.map((item) => {
              const translatedName = t.nav[navTranslationKeys[item.href]] ?? item.name
              return (
                <div key={item.name} className="border-b border-border/50 last:border-0">
                  {item.hasDropdown ? (
                    <MobileDropdown item={{ ...item, name: translatedName }} verTodas={t.nav.verTodas} />
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-base font-medium text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {translatedName}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}

function MobileDropdown({
  item,
  verTodas,
}: {
  item: { name: string; href: string; brands?: typeof electronicaBrands }
  verTodas: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-base font-medium text-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.name}
        <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="pb-3 pl-4">
          <Link href={item.href} className="mb-2 block text-sm font-medium text-primary">
            {verTodas}
          </Link>
          <div className="grid grid-cols-2 gap-2">
            {item.brands?.map((brand) => (
              <Link
                key={brand.slug}
                href={`${item.href}/${brand.slug}`}
                className="rounded-md p-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
