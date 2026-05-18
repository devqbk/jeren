# CONTEXT.md — Jeren SRL Website

> Punto de sincronización entre **Claude Code** y **Antigravity**.
> Actualizar este archivo en cada push con cambios relevantes.

---

## Proyecto

Sitio web institucional de **Jeren SRL**, empresa argentina con +40 años en representación de maquinaria industrial.

- **Framework:** Next.js (App Router) + TypeScript
- **UI:** shadcn/ui + Tailwind CSS
- **Package manager:** pnpm
- **Deploy:** Vercel → [v0-jeren.vercel.app](https://v0-jeren.vercel.app)
- **Rama activa:** `v0/dev-2609-3bfae82b`

---

## Flujo de trabajo

| Herramienta  | Rama          | Para qué                                      |
|--------------|---------------|-----------------------------------------------|
| Claude Code  | `v0/dev-*`    | Lógica, datos, refactors, contenido           |
| Antigravity  | `v0/dev-*`    | Generación y edición visual de componentes    |
| Vercel       | `main`        | Deploy automático en cada merge a main        |

---

## Estructura del proyecto

```
app/
  page.tsx                            # Home
  layout.tsx                          # Layout global (metadata, fuentes)
  globals.css                         # Estilos globales
  empresa/page.tsx
  electronica/page.tsx                # Listado marcas electrónica
  electronica/[slug]/page.tsx         # Detalle marca electrónica
  aire-acondicionado/page.tsx         # Listado marcas aire/refrigeración
  aire-acondicionado/[slug]/page.tsx  # Detalle marca aire/refrigeración
  petroleo-gas/page.tsx               # (Fase B — placeholder)
  mineria/page.tsx                    # (Fase B — placeholder)
  agro/page.tsx                       # (Fase B — placeholder)
  servicios/page.tsx
  contacto/page.tsx

components/
  layout/header.tsx                   # Nav full-width: logo izq, nav der, dropdowns
  layout/footer.tsx
  home/hero-section.tsx               # Hero con video de fondo
  home/industrias-section.tsx         # 5 industrias (grid 5 col desktop)
  home/marcas-nuevas-section.tsx      # CIMAT y Xplorobot destacados
  home/brands-section.tsx             # Secciones de marcas electrónica y aire
  home/services-section.tsx
  shared/sucursales-section.tsx       # Links a Google Maps
  shared/clientes-section.tsx         # Existe pero NO se renderiza (solo contexto interno)
  contact/contact-form.tsx            # Abre mailto: con datos pre-cargados
  providers.tsx                       # ThemeProvider forzado a light mode
  ui/                                 # Componentes shadcn/ui (no tocar)

lib/
  data.ts                             # FUENTE DE VERDAD: marcas, nav, sucursales, contacto
  brands-content.ts                   # Contenido extendido: longDescription + productos + imágenes
  utils.ts
  translations.ts                     # i18n ES/EN/PT/JP/KR (dormant — no se usa en UI)

contexts/
  language-context.tsx                # LanguageProvider (dormant — no montado en providers)
```

---

## Datos (`lib/data.ts`)

### Marcas — Electrónica (12)
Fuji, Koh Young, Data I/O, Nordson Asymtek, YJ Link, Creative Electron, Kurtz Ersa, ECD, EVS, Sono-Tek, HG Laser, UMG Technologies

### Marcas — Aire y Refrigeración (7)
Galileo TP, Inficon, Jae Hyun Autonics, Sumake, Gasflux, BLM, Tech Sonic

### Marcas nuevas (Fase B)
- **CIMAT** — balanceadoras industriales (petroleo-gas, mineria)
- **Xplorobot** — detección de metano (petroleo-gas)

### Sucursales (con Google Maps URLs)
- **C.A.B.A.** — Jeren SRL, Av. Juramento 2089 Piso 4° (C1428DNG)
- **Ushuaia** — Tecnomaq SRL, Paseo de la Plaza 2065 (CP 9410)
- **Río Grande** — Tecnomaq SRL, Padre Forgacs 1407 (CP 9420)

### Contacto
- Tel: (+5411) 4788-0566 | Email: info@jeren.com

---

## Contenido de marcas (`lib/brands-content.ts`)

### Interfaz
```ts
interface ProductItem {
  name: string
  description: string
  imageUrl?: string   // ruta local en /public/images/brands/[slug]/
}
interface BrandContent {
  slug: string
  longDescription: string[]
  products: ProductItem[]
}
```

### Estado
| Industria            | Contenido largo | Productos | Imágenes |
|----------------------|:-:|:-:|:-:|
| Electrónica (12)     | ✅ | ✅ | ❌ pendiente |
| Aire y Refrig. (7)   | ✅ | ✅ | ✅ completo  |

### Imágenes descargadas — Aire y Refrigeración
Todas en `/public/images/brands/[slug]/` (origen: jeren.com WP):
- **galileo-tp** — 8 imágenes (rotary-vacuum-pumps, performance-test, electrical-safety-test, refrigerant-recovery, refrigerant-transfer, refrigerating-fluids, evacuation-system, gas-fluid-storage)
- **inficon** — 4 imágenes (handheld-leak-detectors, multi-gas-sniffer, refrigerant-leak-detectors, helium-leak-detectors)
- **jae-hyun-autonics** — 1 imagen (gas-saver)
- **sumake** — 3 imágenes (cpp41, ca35, cp45)
- **gasflux** — 2 imágenes (gasflux-liquid, gasfluxer-equipo)
- **blm** — 1 imagen (dobladoras-cnc)
- **tech-sonic** — 3 imágenes (tube-sealer-standard, tube-sealer-alt, tube-sealer-economy)

---

## Decisiones de diseño y producto

- **Tema:** solo light mode (`forcedTheme="light"` en ThemeProvider). Dark mode eliminado.
- **Header:** full viewport width, logo + tagline a la izquierda, nav a la derecha. Dropdowns con `right-0` para evitar overflow en ítems de la derecha.
- **Contacto:** formulario abre `mailto:info@jeren.com` con datos pre-cargados. Sin backend.
- **Sucursales:** cards con link a Google Maps.
- **Clientes:** lista de 17 clientes reales existe en `clientes-section.tsx` pero **no se renderiza** en ninguna página (decisión comercial — no mostrar en público).
- **Foco B2B OEM:** todo el copy de Aire y Refrigeración habla de plantas industriales que fabrican aires y heladeras en serie (Mirgor, Newsan, BGH, etc.), nunca de técnicos de servicio o usuarios finales.

---

## Fase B (NO tocar aún)

La empresa está en transición hacia Oil & Gas, Minería y Agro. Las páginas `/petroleo-gas`, `/mineria` y `/agro` existen como placeholders. Las marcas CIMAT y Xplorobot están en `lib/data.ts` como `marcasNuevas`. No desarrollar esta sección hasta indicación explícita del cliente con "Fase B".

---

## Navegación actual
`/empresa` · `/petroleo-gas` · `/mineria` · `/agro` · `/electronica` · `/aire-acondicionado` · `/servicios` · `/contacto`

---

## Estado del proyecto

### Completado ✅
- Estructura de páginas completa (todas las rutas)
- Datos centralizados en `lib/data.ts`
- Contenido extendido en `lib/brands-content.ts`
- Páginas de detalle de marcas — Aire y Refrigeración (con imágenes)
- Páginas de detalle de marcas — Electrónica (sin imágenes aún)
- Hero con video de fondo
- Header full-width con dropdowns por industria
- Sucursales con links a Google Maps
- Formulario de contacto (mailto)
- Light mode forzado
- SEO básico (metadata)
- Imágenes de productos — Aire y Refrigeración (21 imágenes)

### Pendiente ❌
- Imágenes de productos — Electrónica (12 marcas)
- Contenido y páginas de detalle — Petróleo y Gas, Minería, Agro (Fase B)

---

## Convenciones

- **Datos de marcas:** `lib/data.ts` (datos de listado) + `lib/brands-content.ts` (contenido extendido)
- **Imágenes de productos:** `/public/images/brands/[slug]/nombre-descriptivo.ext`
- **Componentes compartidos:** `components/shared/`
- **No tocar:** `components/ui/` (shadcn, se regeneran)
- **Commits:** descriptivos, en inglés, con scope: `feat(aire):`, `fix(header):`, etc.
- **Idioma del copy:** español (es-AR)
