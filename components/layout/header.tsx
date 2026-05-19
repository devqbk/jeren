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
      <nav className="flex h-16 w-full items-center justify-between px-6 lg:px-10">
        {/* Logo — left */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/favicon-jeren.png"
            alt="Jeren SRL"
            width={48}
            height={48}
            className="h-10 w-10 lg:h-11 lg:w-11"
          />
          <p className="hidden sm:block text-xs font-medium uppercase tracking-wider text-muted-foreground whitespace-nowrap">
            Líderes en Automatización Industrial
          </p>
        </Link>

        {/* Desktop Navigation — right */}
        <div className="hidden lg:flex lg:items-center lg:gap-0.5">
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
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary whitespace-nowrap",
                  item.hasDropdown && "pr-2"
                )}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform flex-shrink-0",
                      activeDropdown === item.name && "rotate-180"
                    )}
                  />
                )}
              </Link>

              {/* Mega Menu */}
              {item.hasDropdown && activeDropdown === item.name && item.brands && (
                <div className="absolute right-0 top-full z-50 pt-2">
                  <div className={cn(
                    "rounded-lg border border-border bg-background p-6 shadow-xl",
                    item.brands.length > 6 ? "w-[600px]" : "w-[480px]"
                  )}>
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-foreground">
                        Marcas de {item.name}
                      </h3>
                      <Link href={item.href} className="text-xs font-medium text-primary hover:underline">
                        Ver todas →
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
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4">
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
