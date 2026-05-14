"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { navigation, electronicaBrands } from "@/lib/data"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
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
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.main.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
                  item.hasDropdown && "pr-2"
                )}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      activeDropdown === item.name && "rotate-180"
                    )}
                  />
                )}
              </Link>

              {/* Mega Menu — marcas */}
              {item.hasDropdown && activeDropdown === item.name && item.brands && (
                <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                  <div className="w-[480px] rounded-lg border border-border bg-background p-6 shadow-lg">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-foreground">
                        Marcas de {item.name}
                      </h3>
                      <Link href={item.href} className="text-xs font-medium text-primary hover:underline">
                        Ver todas →
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {item.brands.map((brand) => (
                        <Link
                          key={brand.slug}
                          href={`${item.href}/${brand.slug}`}
                          className="group flex flex-col rounded-md border border-transparent p-3 transition-all hover:border-border hover:bg-muted"
                        >
                          <span className="text-sm font-medium text-foreground group-hover:text-primary">
                            {brand.name}
                          </span>
                          <span className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                            {brand.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3">
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
            {navigation.main.map((item) => (
              <div key={item.name} className="border-b border-border/50 last:border-0">
                {item.hasDropdown ? (
                  <MobileDropdown item={item} />
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-base font-medium text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function MobileDropdown({
  item,
}: {
  item: { name: string; href: string; brands?: typeof electronicaBrands }
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
            Ver todas las marcas →
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
