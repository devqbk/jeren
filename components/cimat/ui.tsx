import type * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { CtaLink } from "@/lib/cimat-content"

/**
 * Tokens locales de la landing CIMAT.
 *
 * Dirección de arte: base neutra industrial (papel, superficie, antracita),
 * el rojo CIMAT como ÚNICO color de acción, y el azul JEREN reservado para la
 * firma de representación (header, bloque de soporte, footer).
 *
 * Van como CSS variables en el scope `[data-cimat]` para no tocar globals.css
 * ni filtrarse al resto del sitio.
 */
export function CimatTokens() {
  return (
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
[data-cimat]{
  --c-ink:#111111;
  --c-ink-2:#3c3c3c;
  --c-muted:#6d6d6d;
  --c-paper:#ffffff;
  --c-surface:#ececeb;
  --c-surface-2:#f5f5f4;
  --c-line:#e4e4e4;
  --c-dark:#0b0b0c;
  --c-dark-2:#161617;
  --c-accent:#dd0000;
  --c-accent-hover:#b80000;
  --c-accent-2:#ffbb00;
  --c-jeren:#0a2540;
  --c-jeren-2:#123c63;
  --c-grad:linear-gradient(90deg,#dd0000,#ffbb00);
  color:var(--c-ink);
  background:var(--c-paper);
}
[data-cimat] ::selection{background:#ffe0e0;color:#111111;}
[data-cimat] :focus-visible{outline:2px solid var(--c-accent);outline-offset:2px;}
[data-cimat] .c-rule{height:3px;width:56px;background:var(--c-grad);border-radius:2px;}
[data-cimat] .c-scroll{scrollbar-width:thin;}
`,
      }}
    />
  )
}

export const container = "mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-10"

type Tone = "paper" | "surface" | "dark" | "dark2" | "jeren"

const toneClass: Record<Tone, string> = {
  paper: "bg-[var(--c-paper)] text-[var(--c-ink)]",
  surface: "bg-[var(--c-surface)] text-[var(--c-ink)]",
  dark: "bg-[var(--c-dark)] text-white",
  dark2: "bg-[var(--c-dark-2)] text-white",
  jeren: "bg-[var(--c-jeren)] text-white",
}

/** Los dos tonos claros se separan con una linea: sin eso se leen como una masa. */
const lightTones: Tone[] = ["paper", "surface"]

/**
 * Escala de spacing de seccion. Tres pasos, no valor libre: si una seccion
 * necesita mas aire, sube de paso — no sobreescribe el padding a mano.
 */
/** Encabezado (eyebrow + título + lead) → contenido. Un solo valor en la landing. */
export const blockGap = "mt-10 lg:mt-12"

/** Separador con regla dentro de una sección. Simétrico, siempre. */
export const ruleGap = "mt-10 pt-10 lg:mt-12 lg:pt-12"

/** Padding de tarjeta de contenido. */
export const cardPad = "p-6 sm:p-8"

export const padScale = {
  tight: "py-12 sm:py-16 lg:py-20",
  base: "py-16 sm:py-20 lg:py-24",
  feature: "py-20 sm:py-24 lg:py-32",
} as const

export function Section({
  id,
  tone = "paper",
  pad = "base",
  className,
  children,
  ...rest
}: {
  id?: string
  tone?: Tone
  pad?: keyof typeof padScale
  className?: string
  children: React.ReactNode
} & Omit<React.ComponentProps<"section">, "className" | "id" | "children">) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24",
        padScale[pad],
        lightTones.includes(tone) && "border-t border-[var(--c-line)]",
        toneClass[tone],
        className,
      )}
      {...rest}
    >
      <div className={container}>{children}</div>
    </section>
  )
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="c-rule" aria-hidden="true" />
      <span
        className={cn(
          "text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-xs",
          dark ? "text-white/70" : "text-[var(--c-muted)]",
        )}
      >
        {children}
      </span>
    </div>
  )
}

export function SectionTitle({
  children,
  as: Tag = "h2",
  className,
}: {
  children: React.ReactNode
  as?: "h2" | "h3"
  className?: string
}) {
  return (
    <Tag
      className={cn(
        "mt-4 text-pretty text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.5rem]",
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export function Lead({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode
  tone?: "light" | "dark"
  className?: string
}) {
  return (
    <p
      className={cn(
        "mt-6 max-w-[62ch] text-base leading-[1.6] sm:text-[1.0625rem]",
        tone === "dark" ? "text-white/75" : "text-[var(--c-ink-2)]",
        className,
      )}
    >
      {children}
    </p>
  )
}

/** Cifra en tamano display. Es lo que hace que la pagina se lea cara. */
export const displayNumber =
  "text-[2.5rem] font-bold leading-none tracking-tight tabular-nums lg:text-[3rem]"

const ctaBase =
  "min-h-11 h-auto whitespace-normal rounded-md px-6 py-3 text-sm font-semibold sm:text-[0.95rem]"

const ctaVariants = {
  primary:
    "bg-[var(--c-accent)] text-white shadow-sm hover:bg-[var(--c-accent-hover)] hover:text-white",
  outline:
    "border border-[var(--c-line)] bg-[var(--c-paper)] text-[var(--c-ink)] hover:border-[var(--c-ink)] hover:bg-[var(--c-paper)] hover:text-[var(--c-ink)]",
  onDark:
    "border border-white/25 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white",
  ghost:
    "bg-transparent px-0 text-[var(--c-accent)] underline-offset-4 hover:bg-transparent hover:text-[var(--c-accent-hover)] hover:underline",
} as const

export function Cta({
  cta,
  variant = "primary",
  className,
  icon,
}: {
  cta: CtaLink
  variant?: keyof typeof ctaVariants
  className?: string
  icon?: React.ReactNode
}) {
  const external = cta.external
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(ctaBase, ctaVariants[variant], className)}
    >
      <Link
        href={cta.href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {icon}
        {cta.label}
      </Link>
    </Button>
  )
}
