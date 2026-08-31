# HANDOFF — Landing CIMAT

Estado al **31/08/2026**, en la rama `feat/cimat-landing`.

> **Antes de mergear a `main` leer "Pendiente".** Un push a `main` deploya directo a
> producción, y hoy la página publica varios claims que JEREN todavía no validó.

---

## Cómo se trabaja esto

1. **Primero se cierra el artifact.** La réplica estática es el vehículo de revisión:
   https://claude.ai/code/artifact/2d299329-6978-47ab-b159-8a6c24f4c85d
2. **Recién con el artifact aprobado** se pasa todo al local y se encara la 2ª fase.
   No adelantar trabajo de fase 2 mientras el artifact siga abierto.

### Regenerar y republicar el artifact

```powershell
# 1. dev server
cd c:\Users\ricks\OneDrive\Documents\vscode\jeren
npx next dev -p 3000        # ojo: en esta máquina NO hay pnpm, usar npx

# 2. capturar el HTML renderizado + el CSS
$sp = "C:\Users\ricks\AppData\Local\Temp\claude\c--Users-ricks-OneDrive-Documents-vscode\67d70fa9-d8fd-4491-a738-7fd5e616c5a7\scratchpad"
$r = Invoke-WebRequest "http://localhost:3000/cimat" -UseBasicParsing -TimeoutSec 240
[IO.File]::WriteAllText("$sp\raw.html", $r.Content, [Text.Encoding]::UTF8)
# el chunk de CSS cambia de hash: sacarlo del <link> de raw.html y guardarlo en $sp\app.css

# 3. armar el archivo único
python "$sp\build.py"       # -> $sp\cimat-landing.html
```

Después se publica con la herramienta Artifact **pasando la misma URL** para que no
cree uno nuevo.

`build.py` embebe fuentes e imágenes en base64, convierte el acordeón de Radix a
`<details>` nativo, y deja inertes el formulario, el selector y la descarga del
catálogo (en la réplica no hay server actions). Si cambian las FAQ hay que
regenerar `$sp\faqs.json` — está el script en el scratchpad de la sesión nueva
(`gen_faqs.py`), o se rehace a mano desde `lib/cimat-content.ts`.

> Cuidado con los heredocs de bash en esta máquina: se comen los backslashes y
> rompen las regex de Python. Escribir los scripts a archivo y correrlos con
> `python archivo.py`.

---

## Fuentes de verdad, en orden

1. `public/Diagnóstico general - Landing CIMAT.pdf` — feedback del cliente, 27/08.
2. `public/Prompt - Ajuste - CIMAT.pdf` — el encargo completo del ecosistema.
3. `BRIEF_LANDING.md` en el scratchpad `67d70fa9` — el brief original.

**Donde chocan, mandan los PDF.** El caso concreto: el brief tenía
`Solicitar cotización` como decisión cerrada del cliente, y el PDF la revierte a
`Solicitar más información`. Se tomó el PDF por ser posterior — **falta que Ariel
lo confirme**.

`lib/cimat-content.ts` es la fuente única del copy y de los datos. Regla dura que
viene del brief y que los PDF ratifican: ninguna cifra, caso, testimonio, precio ni
certificación se inventa.

---

## Qué se hizo

### Pasada 1 — UI (auditoría de dirección de arte)

- `--c-surface` pasó de `#f4f4f4` (nunca usado) a `#ececeb` y es el fondo real de
  sección; `--c-surface-2` (`#f5f5f4`) quedó solo para relleno de tarjeta y zebra.
  Antes `paper` y `surface-2` estaban a 1,5 % de luminancia: la página se leía como
  una masa blanca de 2.500 px sin cortes.
- `Section` dibuja `border-t` automático entre tonos claros y tiene escala de
  spacing de tres pasos (`tight` / `base` / `feature`) en vez de overrides a mano.
- Imágenes: `object-fit` no hacía nada en 5 de 11 usos porque la caja tomaba el
  ratio del archivo. Ahora hay ratios fijos. El hero pasó de 545×313 a ~610×480 y
  las fotos de aplicación de 244×136 (56 % de aire) a 548×342.
- `Lead` existía sin usarse: seis secciones copiaban la clase a mano con medida de
  línea de ~88 caracteres. Ahora se usa, a ~70.
- Token `displayNumber` para las cifras. Antes no había una sola cifra en tamaño
  display en toda la página.

### Pasada 2 — los dos PDF, bloque "antes de publicar" completo

| # | Item del diagnóstico | Estado |
|---|---|---|
| 1 | Unificar el CTA | ✅ siete copys → `Solicitar más información` |
| 2 | Formulario dentro de la landing | ✅ hero + cierre |
| 3 | Sacar los destinos al catálogo externo | ✅ ya no se usa `CATALOGO_URL` |
| 4 | Reformular hero y bajada | ✅ beneficio antes que especificación |
| 5 | Subir el soporte local | ✅ de posición 9 a antes de las specs |
| 6 | Eliminar notas internas y el caso "en preparación" | ✅ |
| 7 | Neutralizar la comparativa | ✅ → "Qué evaluar antes de comprar" |
| 8 | Verificar claims | ⚠️ ver "Pendientes de validación" |
| 9 | Enlaces y descarga del catálogo | ✅ el PDF está en `public/catalogos/` |
| 10 | Medición y confirmación de envío | ⚠️ eventos cableados, falta GTM |

**Orden final de la landing:** hero+formulario → confianza → problemas → selector de
necesidad → líneas → soporte local → qué evaluar → cómo trabajamos → FAQ →
formulario final → footer.

El HTML de `/cimat` bajó de **438 KB a 221 KB**, que es la reducción del 50-60 % que
pedía el diagnóstico.

**Se eliminó:** el caso "en preparación con JEREN" (comunica ausencia de evidencia),
la comparativa competitiva entera con sus frases confrontativas, y las dos notas
editoriales internas. La FAQ bajó de 8 a 6.

**Se agregó:** selector de necesidad de 6 opciones, "Cómo trabajamos" en 3 pasos, y
barra de confianza con atribución separada por fuente (JEREN / CIMAT / Argentina),
para que nadie confunda los 40 años de JEREN con la antigüedad de CIMAT.

### Archivos

Nuevos:

```
app/actions/cimat-lead.ts              server action, SendGrid + Turnstile + honeypot
app/cimat/aplicaciones/page.tsx
app/cimat/especificaciones/page.tsx
app/cimat/normas-y-grados/page.tsx
app/cimat/gracias/page.tsx             noindex, mide la conversión
components/cimat/breadcrumbs.tsx
components/cimat/cta.tsx               el CTA único
components/cimat/evaluar-section.tsx
components/cimat/gracias-tracker.tsx
components/cimat/industria-cta.tsx
components/cimat/lead-form.tsx         formulario reutilizable
components/cimat/proceso-section.tsx
components/cimat/secundarios.tsx       WhatsApp / tel / mail / catálogo, medidos
components/cimat/selector-section.tsx
components/cimat/track.ts              capa de analítica
```

Borrados: `caso-section.tsx`, `comparativa-section.tsx`, `header-cta.tsx`,
`numeros-section.tsx`, y `specs-section.tsx` / `normas-section.tsx` /
`industrias-section.tsx` (su contenido se mudó a las páginas complementarias).

### Cómo se hablan el CTA y el formulario

`components/cimat/cta.tsx` despacha un `CustomEvent('cimat:interes')` que
`lead-form.tsx` escucha para preseleccionar el campo "¿Qué información necesitás?".
El mismo click dispara `cta_click` en el `dataLayer`. Los campos ocultos de
atribución (`page_url`, `cta_location`, `service_interest`, UTMs, `gclid`,
`referrer`, `device_type`) se resuelven en el cliente y viajan con el lead.

---

## Pendiente

### Bloqueado en Ariel

- **Confirmar el copy del CTA.** `Solicitar más información` contra el
  `Solicitar cotización` que el brief daba por cerrado con el cliente.
- **Dar el artifact por cerrado** para poder arrancar la fase 2.

### Bloqueado en JEREN — claims que están publicados y nadie validó

- Soporte de mantenimiento 24 h (Ascential Care).
- Stock local real de repuestos críticos.
- Garantía in situ.
- Autorización para nombrar a Siemens, ABB, Pratt & Whitney, Atlas Copco, Ford,
  General Motors, BorgWarner y Valeo. Hoy van como wordmarks tipográficos con la
  aclaración de que son referencias publicadas por el fabricante y no clientes de
  JEREN.
- `ROTORTEST` o `ROTOTEST` — el TODO ya está anotado en `lib/cimat-content.ts`.

Los dos primeros son los que el PDF marca explícitamente como riesgosos.

### Infraestructura

- **GTM no está instalado.** Los eventos se empujan al `dataLayer` y hoy no los
  levanta nadie: `cta_click`, `form_start`, `form_submit`, `form_error`,
  `whatsapp_click`, `phone_click`, `email_click`, `catalog_download`,
  `industry_select`, `lead_conversion`.
- **Variables de entorno del formulario**, las mismas que usa `/contacto`:
  `SENDGRID_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAILS`,
  `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`. Si falta la de
  Turnstile el formulario igual envía; si faltan las de SendGrid devuelve un error
  con el teléfono y el mail como alternativa. **Nunca se probó un envío real.**

### Fase 2 — la cola, en orden

1. Sitemap y robots: incluir `/cimat`, `/cimat/especificaciones`,
   `/cimat/normas-y-grados` y `/cimat/aplicaciones`; verificar que
   `/cimat/gracias` quede noindex.
2. Schema `Service` y `LocalBusiness` en la landing. `BreadcrumbList` y `FAQPage`
   ya están.
3. Pasada de accesibilidad WCAG 2.2 AA sobre las cinco rutas: teclado, foco
   visible, un H1 por página, contraste, tablas con encabezados asociados, sin
   scroll horizontal.
4. Pasada de performance: `loading="lazy"` y `sizes` correctos en todas las
   imágenes, dimensiones explícitas, precarga solo del hero. Objetivos LCP ≤ 2,5 s,
   INP ≤ 200 ms, CLS ≤ 0,1.
5. Mapa de enlaces internos: problema → solución, industria → línea,
   línea → especificaciones, norma → aplicación.
6. Del prompt largo, todavía sin empezar: páginas por línea (`/cimat/lineas/*`),
   páginas de servicios (`/cimat/servicios/*`) y `/cimat/casos`. Esta última **no
   se publica** hasta tener un caso respaldado: empresa identificable, situación
   inicial, equipo, resultado medido, certificado y testimonio autorizado.

---

## Notas de entorno

- **No hay `pnpm`** instalado. Usar `npx next dev`. Hay un `pnpm-workspace.yaml`
  untracked que hace que Next avise por múltiples lockfiles — ruido, no rompe nada.
- El dev server queda corriendo detached; si un puerto 3000 viejo quedó colgado,
  `taskkill /PID <pid> /F` con el PID que informa Next.
- `npx tsc --noEmit` tira un error preexistente en `contexts/language-context.tsx`
  que no tiene nada que ver con CIMAT. Filtrar por `cimat` para ver lo propio.


---

## Actualización del 31/08

### Cambio que afecta a TODO el sitio

`app/globals.css` pasó a `@import 'tailwindcss' source(none)` con las carpetas de
fuentes listadas a mano (`../app`, `../components`, `../contexts`, `../hooks`,
`../lib`).

**Por qué:** con la autodetección activada, Tailwind v4 falla al compilar con
`CssSyntaxError: Invalid code point 6805263` y el sitio entero devuelve 500. Se
bisecó: falla igual **con cero código de CIMAT en el árbol**, así que es de la base,
no de esta landing. Reinstalar dependencias con pnpm no lo soluciona. Compila bien
escaneando esas cinco carpetas, o sea que **el archivo que lo rompe está en
`public/`, `styles/` o en la raíz — sigue sin identificarse.**

Listar las fuentes a mano es práctica soportada en Tailwind v4, pero el riesgo es
real: si alguien pone una clase de Tailwind en un archivo fuera de esas carpetas,
no se genera. Se verificó que las seis rutas del sitio (`/`, `/empresa`,
`/electronica`, `/aire-acondicionado`, `/servicios`, `/contacto`) devuelven 200 y
que el CSS sale completo (~185 KB).

También se fijó `turbopack.root` en `next.config.mjs`: había un lockfile en el home
del usuario y Next infería ese directorio como raíz del workspace.

### Feedback aplicado en esta ronda

De los dos PDF (`docs/feedback/`) y de tres revisores por WhatsApp:

- **Registro formal.** La página trataba de vos; dos revisores lo marcaron. 35
  reemplazos en 9 archivos. Donde se pudo, la frase se despersonalizó ("el rotor"
  en vez de "tu rotor"), que además viaja mejor fuera de Argentina.
- **Reposicionamiento regional.** De "soporte **en** Argentina" a "**desde**
  Argentina para toda la región", en H1, bajada, barra de confianza, sticky, sección
  de soporte, FAQ de cobertura y meta description.
- **CTA único.** `Solicitar más información`, todos al formulario del hero con
  scroll suave y el interés preseleccionado (`irAlFormulario` en `track.ts`).
- **Hero.** Carrusel de 5 máquinas con bolitas; "balanceo estático y dinámico"
  nombrado explícitamente; en mobile el formulario va inmediatamente debajo del H1.
- **Formulario.** Teléfono y datos del rotor plegados en un `<details>` opcional,
  para que entre en el primer viewport.
- **Navegación.** El header marca la opción activa: por ruta en las páginas
  técnicas, por scroll dentro de la landing (`header-nav.tsx`).
- **Tabla de especificaciones** sin scroll horizontal: se sacó el `min-w-[1150px]`
  y la columna fija, que recortaba el texto de la columna de al lado.
- **Pasada de espaciados** (auditoría completa): la escala baja de 20 valores a 8,
  los separadores con regla pasan a simétricos, se unifica el padding de tarjeta
  (`p-6 sm:p-8`) y el gap de grilla (`gap-6`). Helpers nuevos en `ui.tsx`:
  `blockGap`, `ruleGap`, `cardPad`.
- **FAQ** cambió a `tone="paper"`: compartía `surface` con Proceso y eran 192 px de
  gris continuo.
- **Dirección de Río Grande**: confirmada en **1411**. `CLAUDE.md` y `CONTEXT.md`
  estaban en 1407 y se alinearon.

### Bloqueado — hay que validar antes de publicar

Además de lo ya listado arriba (soporte 24 h, stock local, garantía in situ,
autorización de logos, ROTORTEST vs ROTOTEST, WhatsApp comercial):

- **Esquema comercial fuera de Argentina.** La página dice "soporte para toda la
  región" pero el bloque de importación dice "la compra es a JEREN SRL en Argentina,
  con factura local". Para un visitante de Chile o Perú las dos cosas no cierran.
  Hay que definir cómo se opera afuera antes de redactar ese bloque.
- **¿JEREN importa?** y **¿JEREN documenta?** — las dos preguntas que dejó el
  revisor sobre claims que hoy están publicados.
- **Imagen de la línea turbo.** La actual no es un core balancer; el manifiesto ya
  anotaba que el brochure no trae uno. Hace falta que CIMAT o JEREN pasen la foto.
- **Videos.** Se pidieron links y no llegaron.

**Resuelto el 31/08:** el WhatsApp comercial de la línea CIMAT es
**+54 9 11 4157-1427** (antes se usaba el teléfono de CABA como provisorio).

### Sigue sin probarse

El envío real del formulario. Usa las mismas variables de entorno que `/contacto`
(`SENDGRID_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAILS`, `TURNSTILE_SECRET_KEY`,
`NEXT_PUBLIC_TURNSTILE_SITE_KEY`) pero **nunca se mandó un mail de prueba**.
