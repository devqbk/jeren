# CONTEXT.md — Jeren SRL Website

> Este archivo es el punto de sincronización entre v0 y Claude Code.  
> Actualizarlo cada vez que se hagan cambios importantes.

---

## ¿Qué es este proyecto?

Sitio web institucional de **Jeren SRL**, empresa argentina con +40 años de experiencia en representación de maquinaria industrial (electrónica, aire acondicionado y refrigeración).

- **Framework:** Next.js (App Router) + TypeScript
- **UI:** shadcn/ui + Tailwind CSS
- **Package manager:** pnpm
- **Deploy:** Vercel → [v0-jeren.vercel.app](https://v0-jeren.vercel.app)
- **v0 project:** https://v0.app/chat/projects/prj_imKwdA7wWX6KRzA9stM11YPqdhHg

---

## Flujo de trabajo

| Herramienta | Rama | Para qué |
|---|---|---|
| v0 | `v0/dev-*` | Generación y edición visual de componentes |
| Claude Code | `v0/dev-*` | Lógica, datos, refactors, integraciones |
| Vercel | `main` | Deploy automático en cada merge a main |

**Rama activa:** `v0/dev-2609-48b88b86`

---

## Estructura del proyecto

```
app/
  page.tsx                        # Home
  layout.tsx                      # Layout global (metadata, fuentes)
  globals.css                     # Estilos globales
  empresa/page.tsx                # Página empresa
  electronica/page.tsx            # Listado marcas electrónica
  electronica/[slug]/page.tsx     # Detalle marca electrónica
  aire-acondicionado/page.tsx     # Listado marcas aire/refrigeración
  aire-acondicionado/[slug]/page.tsx
  servicios/page.tsx
  contacto/page.tsx

components/
  layout/header.tsx               # Navegación principal con dropdowns
  layout/footer.tsx
  home/hero-section.tsx
  home/brands-section.tsx         # Secciones de marcas en home
  home/services-section.tsx
  home/about-section.tsx
  shared/sucursales-section.tsx   # Bloque de sucursales (reutilizable)
  contact/contact-form.tsx
  ui/                             # Componentes shadcn/ui

lib/
  data.ts                         # FUENTE DE VERDAD de todos los datos
  utils.ts
```

---

## Datos principales (`lib/data.ts`)

### Marcas — Electrónica (12 marcas)
Fuji, Koh Young, Data I/O, Nordson Asymtek, YJ Link, Creative Electron, Kurtz Ersa, ECD, EVS, Sono-Tek, HG Laser, UMG Technologies

### Marcas — Aire y Refrigeración (7 marcas)
Galileo TP, Inficon, Jae Hyun Autonics, Sumake, Gasflux, BLM, Tech Sonic

### Sucursales
- **C.A.B.A.** — Jeren SRL, Av. Juramento 2089 Piso 4° (C1428DNG)
- **Ushuaia** — Tecnomaq SRL, Paseo de la Plaza 2065 (CP 9410)
- **Río Grande** — Tecnomaq SRL, Padre Forgacs 1407 (CP 9420)

### Contacto
- Tel: (+5411) 4788-0566
- Email: info@jeren.com

### Servicios destacados
Soporte 24x7 · Stock de insumos · Respaldo OEM · Cobertura nacional

---

## Navegación
`/empresa` · `/electronica` · `/aire-acondicionado` · `/servicios` · `/contacto`

Header con dropdowns de marcas en Electrónica y Aire y refrigeración.

---

## Estado actual

- [x] Estructura de páginas completa
- [x] Datos centralizados en `lib/data.ts`
- [x] Componentes UI (shadcn/ui)
- [x] SEO básico (metadata, OpenGraph)
- [x] Analytics de Vercel integrado
- [ ] Formulario de contacto con backend
- [ ] Páginas de detalle de marcas con contenido real

---

## Convenciones

- **Datos:** siempre en `lib/data.ts`, nunca hardcodeados en componentes
- **Componentes compartidos:** en `components/shared/`
- **Commits:** mensajes descriptivos en español o inglés, cortos y claros
- **No tocar:** archivos en `components/ui/` (son de shadcn, se regeneran)
