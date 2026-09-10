import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { RotorPage, canonicalRotor } from "@/components/cimat/rotor-page"
import { rotores } from "@/lib/cimat-content"

/**
 * Subpáginas por rotor: /cimat/balanceadora-de-cardanes-y-ciguenales,
 * /cimat/balanceadora-de-ventiladores-e-impulsores, /cimat/balanceadora-de-turbos.
 * Son las URL finales de los grupos de anuncios. Solo existen los slugs de
 * `rotores`: cualquier otro es 404.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return rotores.map((r) => ({ rotor: r.slug }))
}

type Props = { params: Promise<{ rotor: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { rotor } = await params
  const r = rotores.find((item) => item.slug === rotor)
  if (!r) return {}
  const canonical = canonicalRotor(r)
  const imagen = r.imagenes[0]
  return {
    title: { absolute: r.seo.title },
    description: r.seo.description,
    metadataBase: new URL("https://www.jeren.com"),
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: canonical,
      siteName: "Jeren SRL",
      title: r.seo.title,
      description: r.seo.description,
      images: [{ url: imagen.src, width: imagen.width, height: imagen.height, alt: imagen.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: r.seo.title,
      description: r.seo.description,
      images: [imagen.src],
    },
    robots: { index: true, follow: true },
  }
}

export default async function Page({ params }: Props) {
  const { rotor } = await params
  const r = rotores.find((item) => item.slug === rotor)
  if (!r) notFound()
  return <RotorPage r={r} />
}
