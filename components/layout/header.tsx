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

              {/* Simple Dropdown */}
              {item.hasDropdown && activeDropdown === item.name && item.subItems && (
                <div className="absolute left-0 top-full z-50 pt-2">
                  <div className="rounded-lg border border-border bg-background py-2 shadow-xl w-56">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
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
  item: { name: string; href: string; subItems?: { name: string; href: string }[] }
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
      {isOpen && item.subItems && (
        <div className="pb-3 pl-4">
          <div className="flex flex-col space-y-3 pt-2">
            {item.subItems.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary"
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
