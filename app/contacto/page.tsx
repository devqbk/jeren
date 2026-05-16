import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SucursalesSection } from "@/components/shared/sucursales-section"
import { ContactForm } from "@/components/contact/contact-form"
import { contactInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactanos para asesoramiento sobre nuestros productos y servicios. Estamos en Buenos Aires, Ushuaia y Río Grande.",
}

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary py-16 lg:py-20">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              Contacto
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              Estamos para asesorarte. Completá el formulario o contactanos directamente.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Envianos un mensaje
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Completá el formulario y nos pondremos en contacto a la brevedad.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Estamos en
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Podés visitarnos en nuestras oficinas o contactarnos por teléfono o email.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Dirección</h3>
                      <p className="mt-1 text-muted-foreground">
                        {contactInfo.address.street}
                        <br />
                        {contactInfo.address.city}, {contactInfo.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Teléfono</h3>
                      <a
                        href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                        className="mt-1 block text-muted-foreground hover:text-primary"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="mt-1 block text-muted-foreground hover:text-primary"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Horarios</h3>
                      <p className="mt-1 text-muted-foreground">
                        Lunes a Viernes: 9:00 - 18:00
                        <br />
                        Soporte técnico: 24/7
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Sucursales */}
        <SucursalesSection variant="muted" />
      </main>
      <Footer />
    </>
  )
}
