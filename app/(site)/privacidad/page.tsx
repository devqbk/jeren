import type { Metadata } from "next"
import Link from "next/link"
import { EMAIL, TELEFONO } from "@/lib/cimat-content"

/**
 * Política de privacidad.
 *
 * Redactada a partir de lo que el código efectivamente hace: los campos que
 * pide `app/actions/cimat-lead.ts`, los de `/contacto`, y los terceros que
 * intervienen (SendGrid, Cloudflare Turnstile, Vercel, Google).
 *
 * TODO (JEREN): revisión legal antes de publicar. Faltan confirmar el plazo de
 * conservación de los datos y el domicilio del responsable ante la Agencia de
 * Acceso a la Información Pública.
 */
export const metadata: Metadata = {
  title: { absolute: "Política de privacidad | JEREN SRL" },
  description:
    "Qué datos personales recolecta jeren.com a través de sus formularios, con qué finalidad, quiénes los procesan y cómo ejercer los derechos de acceso, rectificación y supresión.",
  metadataBase: new URL("https://www.jeren.com"),
  alternates: { canonical: "https://www.jeren.com/privacidad" },
  robots: { index: true, follow: true },
}

const DATOS = [
  ["Nombre y apellido", "Identificar a quién responde la consulta.", "Obligatorio"],
  ["Empresa", "Entender el contexto industrial de la consulta.", "Obligatorio"],
  ["Email corporativo", "Responder la consulta.", "Obligatorio"],
  ["Teléfono o WhatsApp", "Canal alternativo de respuesta.", "Opcional"],
  ["Aplicación o rotor", "Dimensionar técnicamente el requerimiento.", "Opcional"],
  [
    "Origen de la visita",
    "Página desde la que se envió, sitio que derivó, tipo de dispositivo y parámetros de campaña (UTM y gclid).",
    "Automático",
  ],
] as const

const TERCEROS = [
  ["SendGrid (Twilio)", "Entrega del correo con la consulta a las casillas de JEREN.", "Estados Unidos"],
  ["Cloudflare Turnstile", "Verificación antispam del formulario.", "Estados Unidos"],
  ["Vercel", "Alojamiento del sitio y analítica agregada de uso.", "Estados Unidos"],
  ["Google", "Medición de campañas publicitarias y analítica.", "Estados Unidos"],
] as const

export default function PrivacidadPage() {
  return (
    <main className="mx-auto w-full max-w-[70ch] px-5 py-16 sm:px-7 sm:py-20 lg:py-24">
      <h1 className="text-pretty text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
        Política de privacidad
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Última actualización: 31 de agosto de 2026
      </p>

      <div className="mt-10 space-y-10 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold tracking-tight">Responsable</h2>
          <p className="mt-3">
            JEREN SRL, con domicilio en Av. Juramento 2089, Piso 4° oficina 405 (C1428DNG),
            Ciudad Autónoma de Buenos Aires, Argentina. Contacto: {EMAIL} · {TELEFONO}.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold tracking-tight">Qué datos recolectamos</h2>
          <p className="mt-3">
            Únicamente los que se cargan en los formularios del sitio, más los datos técnicos de
            la visita que permiten saber desde dónde llegó la consulta.
          </p>
          <dl className="mt-5 divide-y divide-border rounded-lg border">
            {DATOS.map(([dato, finalidad, tipo]) => (
              <div key={dato} className="p-4 sm:flex sm:gap-5">
                <dt className="text-sm font-semibold sm:w-52 sm:shrink-0">
                  {dato}
                  <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                    {tipo}
                  </span>
                </dt>
                <dd className="mt-1.5 text-sm text-muted-foreground sm:mt-0">{finalidad}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className="text-lg font-semibold tracking-tight">Para qué los usamos</h2>
          <p className="mt-3">
            Para responder la consulta y para dar seguimiento comercial a ese pedido. No los
            usamos con ninguna otra finalidad, no los vendemos y no los cedemos a terceros
            ajenos a la prestación del servicio.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold tracking-tight">Quiénes los procesan</h2>
          <p className="mt-3">
            Para operar el sitio y entregar los mensajes intervienen los siguientes proveedores,
            cada uno con su propia política de privacidad:
          </p>
          <dl className="mt-5 divide-y divide-border rounded-lg border">
            {TERCEROS.map(([proveedor, rol, pais]) => (
              <div key={proveedor} className="p-4 sm:flex sm:gap-5">
                <dt className="text-sm font-semibold sm:w-52 sm:shrink-0">
                  {proveedor}
                  <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                    {pais}
                  </span>
                </dt>
                <dd className="mt-1.5 text-sm text-muted-foreground sm:mt-0">{rol}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted-foreground">
            Esto implica una transferencia internacional de datos hacia los Estados Unidos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold tracking-tight">Cookies y medición</h2>
          <p className="mt-3">
            El sitio no usa cookies publicitarias propias. Los parámetros de campaña que llegan
            en la dirección web (UTM y gclid) se envían junto con la consulta para saber qué
            aviso la originó. Los proveedores del listado anterior pueden instalar cookies
            propias; se pueden bloquear desde la configuración del navegador, sin que eso
            impida usar el sitio ni enviar el formulario.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold tracking-tight">Derechos</h2>
          <p className="mt-3">
            El titular de los datos puede pedir el acceso, la rectificación, la actualización o
            la supresión de sus datos personales escribiendo a {EMAIL}. El titular puede ejercer
            el derecho de acceso en forma gratuita a intervalos no menores de seis meses, salvo
            que acredite un interés legítimo, conforme el artículo 14 inciso 3 de la Ley 25.326.
          </p>
          <p className="mt-3">
            La Agencia de Acceso a la Información Pública, órgano de control de la Ley 25.326,
            tiene la atribución de atender las denuncias y reclamos que se interpongan con
            relación al incumplimiento de las normas sobre protección de datos personales.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold tracking-tight">Cambios</h2>
          <p className="mt-3">
            Si esta política cambia, la nueva versión se publica en esta misma dirección con su
            fecha de actualización.
          </p>
        </section>
      </div>

      <p className="mt-12 border-t pt-6 text-sm">
        <Link href="/" className="underline underline-offset-4">
          Volver al inicio
        </Link>
      </p>
    </main>
  )
}
