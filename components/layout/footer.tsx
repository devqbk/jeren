import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { electronicaBrands, aireRefrigeracionBrands, contactInfo } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row lg:px-8">
          <h3 className="text-lg font-medium sm:text-xl">
            ¿Querés saber más sobre nuestros productos o servicios?
          </h3>
          <Link href="/contacto">
            <Button
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Asesorate
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Navegación */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/empresa"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Empresa
                </Link>
              </li>
              <li>
                <Link
                  href="/electronica"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Electrónica
                </Link>
              </li>
              <li>
                <Link
                  href="/aire-acondicionado"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Aire y refrigeración
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Marcas Electrónica */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Electrónica
            </h4>
            <ul className="space-y-1">
              {electronicaBrands.slice(0, 6).map((brand) => (
                <li key={brand.slug}>
                  <Link
                    href={`/electronica/${brand.slug}`}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/electronica"
                  className="text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                >
                  Ver todas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Marcas Aire y Refrigeración */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Aire y refrigeración
            </h4>
            <ul className="space-y-1">
              {aireRefrigeracionBrands.map((brand) => (
                <li key={brand.slug}>
                  <Link
                    href={`/aire-acondicionado/${brand.slug}`}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}, {contactInfo.address.country}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4 text-primary-foreground/60" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4 text-primary-foreground/60" />
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Jeren SRL"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full bg-primary-foreground p-0.5"
            />
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Jeren SRL. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
