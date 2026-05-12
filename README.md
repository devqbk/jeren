# Jeren SRL — Sitio institucional

Sitio web institucional de **Jeren SRL**, empresa argentina con más de 40 años representando marcas industriales líderes a nivel mundial en electrónica, aire acondicionado y refrigeración.

## Stack

- **Framework:** Next.js (App Router)
- **Estilos:** Tailwind CSS
- **Componentes:** shadcn/ui
- **Lenguaje:** TypeScript
- **Package manager:** pnpm
- **Deploy:** Vercel

## Correr el proyecto localmente

```bash
pnpm install
pnpm dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura principal

```
app/                        # Páginas (Next.js App Router)
components/
  layout/                   # Header y Footer
  home/                     # Secciones de la home
  shared/                   # Componentes reutilizables entre páginas
  ui/                       # Componentes shadcn/ui (no editar)
lib/
  data.ts                   # Fuente de verdad: marcas, sucursales, contacto, navegación
public/
  images/                   # Imágenes, logos y banners
```

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Home |
| `/empresa` | Página institucional |
| `/electronica` | Listado de marcas de electrónica |
| `/electronica/[marca]` | Detalle de marca |
| `/aire-acondicionado` | Listado de marcas de aire y refrigeración |
| `/aire-acondicionado/[marca]` | Detalle de marca |
| `/servicios` | Servicios ofrecidos |
| `/contacto` | Formulario y datos de contacto |

## Flujo de desarrollo

El proyecto se desarrolla híbridamente entre **v0** (generación visual) y **Claude Code** (lógica, refactors, integraciones), ambos trabajando sobre la misma rama vía GitHub.

Cada merge a `main` genera un deploy automático en Vercel.

Para el contexto completo del proyecto ver [`CLAUDE.md`](./CLAUDE.md).
