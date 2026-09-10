# Landing CIMAT (jeren.com/cimat) — por qué "experiencia de página por debajo del promedio" en todas las keywords, y qué cambiar

Fuentes: `datos_ads_cimat.md` (31/08–10/09), código en `jeren/` (HEAD `b15c93d`), HTML servido en producción el 10/09 (curl con UA Android), `docs/ads/ANALISIS_20260910_primeros_11_dias.md` y `docs/ads/PLAN_ADS_CIMAT.md`. Solo lectura; no se tocó nada.

---

## 1. Diagnóstico del QS de landing en 5 líneas

1. Las 12 keywords con QS tienen landing BELOW_AVERAGE, **incluidas las que sí tienen su vocabulario en la página** (`balanceadora portatil` —la frase "balanceadora portátil SmaRT" está literal en `cimat-content.ts:450`— y `balanceadora de turbos`, con una línea turbo entera). Eso descarta que el problema sea solo relevancia keyword→página: hay factores **a nivel página** que arrastran a todas.
2. Esos factores: (a) una sola URL genérica para 7 grupos, con H1 "Balanceadoras industriales CIMAT con soporte local desde Argentina" que no nombra ningún rotor; (b) peso en mobile (63 % de impresiones): ~235 KB de JS comprimido en 13 chunks + GTM + gtag + Ads + Vercel Analytics + Turnstile ×2 antes de que el formulario funcione; (c) el 44 % del gasto es Chile/Perú/Colombia y la página les promete "factura local" y "el cliente no importa nada", que sólo es cierto en Argentina → rebote inmediato; (d) el primer viewport mobile es titular + formulario de 4 campos obligatorios, sin argumento de venta antes.
3. El grupo con más plata (Cigüeñales y cardanes, 9 clics) promete "Balanceadora de Cardanes / Inducidos / Para Talleres de Cardanes" y la landing dice "cardanes" **una vez** (selector, `cimat-content.ts:299`), "inducidos" **cero**, "ejes" **cero**, "cardán" **cero**. El contenido existe pero está en `/cimat/especificaciones` (filas CMT-DS y CMT-700 H2K) sin ninguna URL final que apunte ahí.
4. Los anchors (`/cimat#linea-turbo`) que propone el análisis previo no mueven el QS: AdsBot evalúa la URL sin fragmento. Hace falta **una URL distinta por grupo**.
5. Hay dos activos rotos que Google sí ve: el sitelink "Consultar por WhatsApp" apunta a `https://www.jeren.com/whatsapp`, que devuelve **404** (la ruta se borró en el commit `ca31687` y el asset quedó en la cuenta, `datos_ads_cimat.md:280`), y el sitelink "Solicitar información" tiene la **misma URL que la URL final** del anuncio (Google no lo sirve).

---

## 2. Grupo → keywords → URL final propuesta → qué falta en la página

Chequeo literal contra `lib/cimat-content.ts` y el HTML servido (conteo de ocurrencias, sin distinguir mayúsculas; los acentos sí cuentan).

| Grupo (gasto) | Keywords | Qué ve hoy al aterrizar | Vocabulario en la página | URL final propuesta | Qué falta / crear |
|---|---|---|---|---|---|
| **Máquina balanceadora** (ARS 11.110, 10 clics) | balanceadora dinamica (QS3), maquina de balanceo dinamico (QS2), balanceadora de rotores (6), balanceadora dinamica de rotores (6), balanceadora industrial (5), equipo de balanceo dinamico, maquina balanceadora industrial, maquina para balancear rotores, comprar/precio maquina balanceadora | H1 "Balanceadoras industriales CIMAT con soporte local desde Argentina" + formulario | "balanceadoras industriales" ✓ (H1); "balanceo dinámico" ✓ (`:189`); "rotor" ✓ (91); **"balanceadora dinámica" ✗** (nunca el adjetivo sobre el sustantivo); **"máquina de balanceo dinámico" ✗** (solo "máquinas de balanceo" en `:358`); **"balanceadora de rotores" ✗** como frase; "equipo de balanceo" ✗; "comprar una balanceadora" ✓ (`:298`, `:844`); "precio" ✗ | `/cimat` (queda) | Meter las tres frases literales en `hero.subtitle` (`:186`) y en el título de `lineas[horizontales]` (`:368`): "Balanceadora dinámica de rotores con muñones…". Un párrafo "Qué es una máquina de balanceo dinámico" (2 líneas) arriba de `#lineas`. Para "precio": una frase sobre cómo se cotiza (rango, plazo, "propuesta en X días hábiles"). |
| **Turbos** (ARS 2.116, 2 clics) | balanceadora de turbos (QS6), equilibradora de turbos, balanceadora de turbocompresores, maquina balanceadora de turbos, equipo para balancear turbos | Igual: hero genérico; la línea turbo está a ~5 pantallas | "turbo/turbocompresor" ✓ (40/8); tarjeta problema `:274`, línea `:406`; **"balanceadora de turbos" ✗ literal; "equilibradora" ✗** (0); "equilibrado" solo en `:189` | **Nueva** `/cimat/balanceadora-de-turbos` | Página corta: H1 con la keyword, líneas CMT-VSR y CMT-TR (`specRows` `:552-579`), imagen `linea-turbo-core-balancer.webp`, G2,5 (`:607`), "también llamada equilibradora de turbos", FAQ "¿balancea el CHRA a velocidad real?", formulario con `interes` preseleccionado. |
| **Ventiladores y rotores** (ARS 6.761, 6 clics) | balanceadora de impulsores, balanceadora de ventiladores, balanceadora de rotores electricos, maquina para balancear ventiladores, **balanceadora para cigueñales** (mal ubicada) | Hero genérico | "ventilador" ✓ (12), "impulsor" ✓ (30), línea vertical `:386-404`; **"balanceadora de ventiladores/impulsores" ✗ literal; "rotores eléctricos" ✗** (la página dice "armaduras", `:369`, `:663`); "motor eléctrico" ✗ en la landing (sólo en /aplicaciones) | **Nueva** `/cimat/balanceadora-de-ventiladores-e-impulsores` | Línea vertical + horizontal chica (H2BS), foto `aplicacion-ventilador-industrial.webp` y `aplicacion-rotor-motor-electrico.webp` (hoy sólo en /aplicaciones), G6,3, "rotores eléctricos / armaduras / inducidos" como sinónimos explícitos. Mover `balanceadora para cigueñales` al grupo Cigüeñales. |
| **Balanceo en sitio** (ARS 11.153, 10 clics) | analizador de vibraciones y balanceo (ARS 8.217, 7 clics — 74 % del grupo), balanceadora portatil (QS5), equipo de balanceo en campo, balanceo dinamico in situ equipo | Hero genérico; el bloque SmaRT está en `#lineas` abajo | "balanceadora portátil" ✓ literal (`:450`, `:913`); "in situ" ✓; "en sitio" ✓; "de campo" ✓; **"en campo" ✗; "analizador de vibraciones" ✗** (la página dice "severidad de vibración"); "análisis de vibración" ✗ (0) aunque es titular del RSA | **Nueva** `/cimat/balanceo-en-sitio` **y pausar** `analizador de vibraciones y balanceo` | Página SmaRT: qué mide, DIN ISO 10816-3, casos (ventilador de mina, boca de pozo), "equipo de balanceo en campo", foto (hoy no hay: el brief dice que el brochure no tiene; pedirla a fábrica antes de armar la página). Si se quiere retener "análisis de vibración", que la página lo diga y aclare que SmaRT mide vibración pero no es un analizador SKF. |
| **Cigüeñales y cardanes** (ARS 7.832, 9 clics, el mejor CTR) | balanceadora de cardan [PHRASE/EXACT] (QS5), balanceadora de cigueñales (5), balanceadora de inducidos (6), balanceadora de ejes (QS3), balanceadora de cardanes, maquina balanceadora de cardan/cigueñales | Hero genérico. El RSA promete "Para Rectificadoras", "Para Talleres de Cardanes", "Balanceadora de Inducidos" | "cigüeñal" ✓ pero sólo 3 veces (`:299`, tarjeta selector); **"cardanes" 1 (`:299`), "cardán" 0, "inducidos" 0, "ejes" 0, "árbol" 0, "transmisión" 0, "rectificadora" 0, "taller" 0** en la landing. El contenido real está en `/cimat/especificaciones` (`specRows` `:525-551`: CMT-DS 6 modelos, 4 planos, "fleje a soldar"; CMT-700 H2K) y la foto `aplicacion-arbol-cardan.webp` sólo en /aplicaciones | **Nueva** `/cimat/balanceadora-de-cardanes-y-ciguenales` (prioridad 1) | H1 "Balanceadora de cardanes, cigüeñales e inducidos CIMAT", dos bloques (CMT-DS / CMT-700 H2K) con la fila de specs, la foto del cardán, "para talleres de cardanes y rectificadoras de motores", grado G16 (`:620`) y G6,3 volantes, "inducidos (armaduras de motores eléctricos)", "balanceadora de ejes" en el cuerpo, FAQ "¿qué largo de cardán?", formulario con `interes=nueva-balanceadora` y `?linea=cardanes` (el form ya lee `linea`, `lead-form.tsx:373`). |
| **Técnico en inglés** (0 clics, 19 impr.) | balancing machine, dynamic/crankshaft/driveshaft balancing machine, rotor balancing, core balancer | Anuncio en inglés → página 100 % castellano. El RSA dice **"From 160 kg to 120 Tons"** y la página dice **"5 kg a 20 toneladas"** (`:189`, `:472`, `:727`) | "balancing" 0 | Pausar el grupo (lo que ya propone el análisis) o `/cimat/en` mínima (1 pantalla + form). | Si se mantiene: corregir el rango en el RSA hoy mismo; es una contradicción visible para un ingeniero que compara. |
| **Marca y competencia** (1 impr.) | omar vetrano (QS1), schenck…, abasteck, cimat argentina, hofmann/cemb balanceadora | Hero genérico | "CIMAT en Argentina" ✓; marcas ajenas 0 (correcto, legal). "Compare antes de decidir" → hay `evaluar` "Guía de selección" (`:842`) | `/cimat` para `cimat *`; `/cimat#evaluar` no cambia QS. Aceptar QS bajo en marcas ajenas: es estructural. | Nada en el sitio. Cambiar sitelink a `/cimat/especificaciones` para "Compare capacidades". |

Nota sobre fragmentos: Google Ads acepta `#` en la URL final, pero la evaluación de landing y la política de destino se hacen sobre la página sin fragmento. Sirven para la experiencia del usuario, no para el QS.

---

## 3. Hallazgos técnicos ordenados por impacto

Medido en producción (`X-Vercel-Cache: HIT`, región `gru1`, `X-Nextjs-Prerender: 1`, o sea HTML estático servido desde CDN: el TTFB no es el problema; 0,5 s en caché, 1,3 s en frío).

| # | Hallazgo | Evidencia | Corrección |
|---|---|---|---|
| 1 | **JS de cliente pesado para una landing**: 13 chunks, **~235 KB comprimidos** (~700 KB+ descomprimidos) + 24,5 KB CSS. Chunks de 72 KB, 41 KB, 38 KB. | `curl` a cada `/_next/static/chunks/*.js` del HTML de `/cimat` | Crear `app/cimat/layout.tsx` sin `Providers` (next-themes está en `forcedTheme="light"`, `components/providers.tsx:8`: no aporta nada y suma runtime). FAQ con `<details>` nativo en vez de Radix Accordion (`faq-section.tsx:1-6`). Cargar Turnstile recién en el primer `onInput` del formulario (hoy monta al hidratar). Un solo `LeadForm` montado por página en mobile (ver #3). |
| 2 | **Cinco terceros antes de que el form sirva**: `gtm.js` (GTM-T5J4LJMK), `gtag/js?id=G-PFDSYDQPN7` cargado **directo además de** GTM, la etiqueta AW- de Ads dentro de GTM, `@vercel/analytics` (`app/layout.tsx:67`), y `challenges.cloudflare.com` (Turnstile). | `app/layout.tsx:61-68`, `components/analytics/ga4.tsx:26-35`, `gtm.tsx:32-38`; `<link rel="preload" … gtag/js…>` en el HTML | Mover GA4 dentro de GTM (o al revés) y sacar el gtag directo: −1 script (~90 KB). Sacar `@vercel/analytics` de las rutas `/cimat` (no aporta nada a Ads). Resultado: 3 terceros, todos necesarios. |
| 3 | **Dos formularios = dos widgets Turnstile = dos iframes de Cloudflare** por carga. | `hero-section.tsx:38` y `cta-final-section.tsx:37` montan `<LeadForm>`; cada uno renderiza `<Turnstile>` (`lead-form.tsx:265-269`) | En mobile, el CTA final es un botón que sube al form del hero (ya existe `irAlFormulario`); en desktop dejar los dos pero Turnstile en modo diferido. |
| 4 | **LCP en desktop retrasado a propósito**: la imagen del hero tiene `loading="lazy"` y no tiene `priority`/`fetchPriority`. En desktop está en el primer viewport (col 1, fila 2). El commit `0e1786b` lo sacó "porque en mobile queda bajo el fold": la solución correcta no era sacarlo sino condicionarlo. | HTML servido: `<img alt="Balanceadora horizontal CIMAT…" loading="lazy" … data-cf-img="0">`; `hero-carousel.tsx:60` | Slide 0: `loading="eager"` + `fetchPriority="high"` con `sizes` correcto (en mobile pesa 24 KB a w=640, no es un costo real). Renderizar **solo la slide activa** (hoy las 5 `<img>` están en el DOM con `absolute inset-0`, así que las 5 se descargan al entrar el carrusel al viewport: ~150 KB inútiles). |
| 5 | **Carrusel autorrotativo cada 5 s** en el hero. Anti-patrón de CRO (nadie lee 5 epígrafes que cambian solos) y trabajo de pintado permanente en el hilo principal en mobile. | `hero-carousel.tsx:7,41-43` | Imagen fija (la horizontal) con miniaturas, o rotación manual. |
| 6 | **HTML de 232 KB en crudo** (30 KB por cable), de los cuales **117 KB son `<script>` inline** (payload RSC que duplica todo el contenido + 4 bloques JSON-LD) y solo ~14,6 KB son texto visible. Por cable no duele; el parseo en un Android de gama baja sí. | `curl -w size_download`; conteo de `<script>` sin `src` | Bajo impacto. Se achica solo al partir la landing en subpáginas (#2 del plan). No preocuparse antes. |
| 7 | **Contenido principal sí está en el SSR** (H1, textos, formularios, footer). Lo que depende de JS: que el `<select>` controlado funcione (el propio código admite la carrera de hidratación, `lead-form.tsx:47-56`), el envío (server action), el href real de WhatsApp (`whatsapp.ts:54-60`) y la barra sticky. | HTML servido | Está bien. Solo asegurarse de que el form tenga `action` de respaldo sin JS: hoy `action={formAction}` es una server action y sin hidratar no envía. Aceptable, pero por eso importa el #1. |
| 8 | **Layout shift**: bien resuelto (alturas fijas en carrusel `h-56/72/80`, `min-h-[70px]` reservado para Turnstile, barra sticky con `translate`). El único CLS potencial es el `<details>` de teléfono y rotor, que es iniciado por el usuario. | `hero-carousel.tsx:64`, `lead-form.tsx:266` | Nada. |
| 9 | **Fuente**: Inter, un solo woff2 preloaded, `latin`. | `<link rel="preload" … .woff2 as="font">` | Nada. |
| 10 | **Catálogo PDF de 5,27 MB** ofrecido en 3 lugares, abre en pestaña nueva. En 4G LATAM son 30-60 s. | `public/catalogos/cimat-balanceadoras.pdf`, `Content-Length: 5268272` | Comprimir a < 2 MB (imágenes a 150 dpi) o partirlo por línea. Mostrar el peso al lado del enlace. |
| 11 | `robots.txt` **Disallow /cimat/gracias** + `noindex` en la página: contradictorio (si está bloqueada, Google nunca lee el noindex y puede indexar la URL pelada). | `app/robots.ts:9`, `gracias/page.tsx:15` | Sacar el Disallow, dejar el noindex. |
| 12 | `typescript.ignoreBuildErrors: true` (`next.config.mjs`) — no es LPE pero es la razón por la que un desajuste `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` se deployaría sin ruido. Hoy el widget sí se renderiza (`<div id="cf-turnstile">` en el HTML). | HTML servido | Alerta en el build si falta una de las dos. |

---

## 4. Hallazgos de confianza y embudo

### Transparencia y confianza

- **"Representante oficial"** (no confirmado por escrito según `PLAN_ADS_CIMAT.md:578`) aparece en: `cimat-content.ts:184` (eyebrow del hero), `cimat-header.tsx:58-60` ("Representante oficial en Argentina", visible solo ≥ lg), `cimat-content.ts:1000` (meta description), `:969` (footer "representa en Argentina"), `cimat-footer.tsx:86` ("Representante de CIMAT en Argentina"), `app/cimat/page.tsx:55` (schema Organization), `:118` (schema Service), `cimat-content.ts:161` (barra sticky "representación, importación y soporte"). En Ads: "CIMAT | Distribuye JEREN", "JEREN acompaña a CIMAT en Argentina". Riesgo doble: el comprador de un bien de USD 50k verifica en cimat.eu/distribuidores y no encuentra a JEREN; y una reclamación de la marca es causal de "tergiversación" en Ads. Hasta la confirmación: "Importa, instala y da soporte a balanceadoras CIMAT en Argentina" (lo que sí hace, commit `9427992`).
- **Repuestos**: la página **no** dice que haya stock en Argentina: "kit de repuestos críticos se define antes de la entrega… el resto se pide por canal directo con la planta de Bydgoszcz" (`cimat-content.ts:818`, `:903`). El callout de Ads **"Repuestos en Argentina"** y el RSA en inglés "spare parts" prometen más que la página. Cambiar el callout a "Kit de repuestos críticos" hasta que haya stock confirmado.
- **Sedes con otra razón social**: Ushuaia y Río Grande figuran como "Tecnomaq SRL" (`cimat-content.ts:979`, `:986`) sin explicar la relación con JEREN SRL. Una línea: "Tecnomaq SRL, empresa del grupo / socio técnico de JEREN en Tierra del Fuego".
- **Dos teléfonos distintos**: la página muestra (+5411) 4788-0566 (`:125`); la extensión de llamada de Ads usa +54 11 4157-1427, que es el celular de WhatsApp (`:116`). Sin horario de atención en ningún lado. Unificar y poner horario (importa para Perú/Colombia con −2 h).
- **Logos de clientes de CIMAT** (Siemens, ABB, Ford…, `cimat-content.ts:344-353`) se renderizan como wordmarks (`quien-es-section.tsx:42-45`) con autorización pendiente (`PLAN:576`). Mismo riesgo de reclamo que la representación.
- **Contradicción de rango** ad EN "160 kg to 120 tons" vs página "5 kg – 20 t" (ver tabla).
- **"Asesoramiento sin cargo" / "sin compromiso"** están en todos los RSA y callouts y **no aparecen en la página** (0 ocurrencias). Agregarlo al microcopy del form (`cimat-content.ts:190`).
- **Política de privacidad**: existe (`/privacidad`, 200, 31 KB), linkeada en el footer, con TODO legal (`app/privacidad/page.tsx:12-13`). Suficiente para Ads.
- **Registro mezclado**: la página trata de usted ("Indíquenos", "Seleccione") pero `problemas.title` dice "tu operación" (`:251`), `/aplicaciones` "tu planta", y los errores del servidor son voseo ("Elegí qué información necesitás", `app/actions/cimat-lead.ts`) mientras los del cliente son usted ("Elija", `lead-form.tsx:120-123`). Para Perú/Colombia el usted es lo correcto; unificar.
- Sin caso, sin testimonio, sin foto de instalación en Argentina: reconocido en el código (`cimat-content.ts:778-785`). Es la prueba que un comprador industrial pide. Mientras no exista, una foto real de la puesta en marcha de cualquier máquina JEREN (aunque no sea CIMAT) vale más que el bloque "La fábrica en números".

### Embudo

Orden real en mobile: header → eyebrow → H1 → **formulario (select obligatorio de 6 opciones + nombre + empresa + email + details + Turnstile + botón + texto de privacidad)** → subtítulo → resumen técnico → carrusel → barra de confianza → resto. El formulario pide antes de argumentar. En desktop está al costado y funciona.

| Elemento | Qué tiene | Sobra / falta para un comprador de bien de capital |
|---|---|---|
| Hero | eyebrow + H1 + form; subtítulo y rango técnico **después** del form en mobile | Falta: 3 bullets antes del form (rango 5 kg–20 t, ISO 2953/21940, puesta en marcha + capacitación). Sobra: el carrusel autorrotativo. |
| CTA único "Solicitar más información" | 11 apariciones, siempre al mismo form (`cta.tsx`) | Correcto como principio. Pero "más información" es tibio para quien ya sabe qué quiere: en las subpáginas por rotor el CTA debería ser "Pedir propuesta para [cardanes]". |
| Formulario | `interes` (select, obligatorio, primero), nombre, empresa, **"Email corporativo"**, teléfono y rotor plegados en `<details>`, honeypot, Turnstile | (1) "Email corporativo" (`lead-form.tsx:213`) espanta a talleres de cardanes y rectificadoras que usan Gmail: dejar "Email". (2) El **teléfono/WhatsApp escondido** (`:221-234`): para LATAM B2B es el dato que JEREN más necesita; visible y opcional. (3) **No hay campo País** con 44 % de tráfico extranjero; además `user-data.ts:49-52` asume +54: un número colombiano de 10 dígitos se convierte en "+54300…" y entra como conversión mejorada **con dato falso**; uno peruano de 9 se descarta. (4) El select de 6 opciones como primer campo es carga cognitiva; ponerlo después del nombre o preseleccionarlo desde la URL (`?interes=`), cosa que ya hace desde CTAs pero no desde la URL final del anuncio. (5) Sin promesa de tiempo de respuesta al lado del botón. |
| WhatsApp | 3 puntos: barra sticky (`sticky-cta.tsx:41-53`, solo ícono en < sm), pill flotante (`whatsapp-flotante.tsx`), enlace en CTA final. Mensaje prellenado con `(ref. G-MMDD)` cuando hay gclid ✓ (`whatsapp.ts:26`) | En mobile hay **dos botones de WhatsApp visibles a la vez** (ícono en la barra + pill verde encima). Dejar uno. Falta WhatsApp en `/cimat/gracias`. |
| Teléfono | `tel:` en soporte, footer y gracias; **no en el header mobile** | Con 63 % mobile, un `tel:` en el header es la conversión más barata del sitio. Falta horario. |
| Catálogo PDF | 5,27 MB, tres enlaces, `catalog_download` medido | Pesado; ver #10 técnico. Para el comprador es útil: dejarlo pero liviano. |
| Página de gracias | "Consulta recibida" + 2 links técnicos + teléfono/mail | Falta: **cuándo y por qué canal** responde JEREN ("en el día hábil siguiente, por email o WhatsApp"), botón de WhatsApp, y el nombre de quien atiende. Es el momento de mayor intención y la página no lo usa. |

**Micro-conversiones** (`components/cimat/track.ts` y componentes):

| Ya se mide | No se mide y debería |
|---|---|
| `cta_click` (con location/interes/device), `form_start`, `form_submit` (+ `user_data`), `form_error`, `whatsapp_click`, `phone_click`, `email_click`, `catalog_download`, `need_select`, `industry_select`, `lead_conversion` (gracias) | Vista de secciones clave (`#lineas`, `#soporte`, `#faq`) por IntersectionObserver — dice si el usuario llegó al argumento antes de irse. Apertura de cada FAQ. Clic en "Ver los rangos completos" / navegación a `/especificaciones` desde tráfico cpc. Interacción con el carrusel. **Campo en el que se abandona el form** (blur sin submit por campo). `form_error` sin `codigo` (`lead-form.tsx:95`): agregar `error_code` para distinguir CF-SIN-TOKEN/CF-RECHAZADO de validación. Tiempo hasta el primer input. |

---

## 5. Mobile

- **Primer viewport** (360×640): header 64 px + eyebrow + H1 de 3 líneas a 1,75 rem → la tarjeta del formulario arranca a ~330 px y ocupa 1,5 pantallas. No hay imagen, ni rango, ni promesa antes del pedido de datos. Para el que hizo clic en "Balanceadora de Cardanes" es un hero que no lo nombra y un formulario que le pregunta "¿Qué información necesita?".
- **Cromo fijo**: header sticky 64 px (`cimat-header.tsx:17`) + barra inferior ~68 px a partir de 700 px de scroll (`sticky-cta.tsx:23`, `scroll.tsx:9`) + pill de WhatsApp de 48 px a `bottom-24` (`whatsapp-flotante.tsx:27`) → ~180 px ocupados de 640 (28 %); en un iPhone SE (568 px) es un tercio.
- **Superposición**: el pill flotante queda a 96 px del borde inferior, sobre el contenido, en la derecha. Cuando el usuario llega al **formulario del CTA final**, el pill tapa el extremo derecho del botón de envío (`w-full`, `lead-form.tsx:294`) y de los enlaces "Ver los rangos completos". Y en la barra sticky ya hay un botón de WhatsApp (`sticky-cta.tsx:41`): dos accesos idénticos a 60 px de distancia.
- **Tap targets**: campos `min-h-11` (44 px) ✓, botón 48 px ✓, bolitas del carrusel 32 px (`hero-carousel.tsx:97`) — chico pero irrelevante si se saca el carrusel; enlaces del footer a 13 px y "Ver en el mapa" a 13 px: apretados.
- **Formulario largo**: con `<details>` cerrado son 4 campos + Turnstile + botón ≈ 620 px: ya no entra en pantalla en la mayoría de los Android; el propio comentario del código dice que "tiene que entrar en pantalla sin scroll" (`lead-form.tsx:219`) y no entra.
- **Header mobile**: solo logos; el de JEREN **saca al visitante a jeren.com** (`cimat-header.tsx:21-23`). El commit `0e1786b` decía haberlo corregido; `29f0635` lo volvió a poner. En una landing paga es una fuga en el elemento más visible.
- Propuesta de orden mobile: H1 específico → 1 línea de subtítulo → 3 bullets → botón "Solicitar propuesta" (ancla) + `tel:` → imagen fija → líneas → soporte → **formulario** → FAQ. Barra sticky con un solo botón de form + un solo acceso a WhatsApp.

---

## 6. País / idioma

Gasto por país: Argentina 43 %, Colombia 23 %, Perú 21 %, Chile 10 %. Lo que ve alguien de Lima, Bogotá o Santiago:

- `lang="es-AR"` (`app/layout.tsx:59`), "Argentina" 51 veces en el HTML, "Chile/Perú/Colombia" **0**, "toda la región" 10 (vago).
- **Promesas que son falsas fuera de Argentina**: "El cliente no importa nada: la compra es a JEREN SRL en Argentina, con factura local. Gestionamos importación, nacionalización, aranceles" (`cimat-content.ts:803`, `:898`). Un peruano importa él, desde Polonia o desde Argentina, con su despachante y sus aranceles. "La garantía in situ queda a cargo de JEREN, con sedes en CABA, Ushuaia y Río Grande" (`:813`) — irrelevante en Antofagasta. "Repuestos en Argentina" (callout) — al revés: le suma una frontera.
- Teléfono `(+5411) 4788-0566` sin indicar que WhatsApp atiende internacional; sin horario (Perú/Colombia están 2 h atrás).
- Moneda: no se muestra ninguna (bien). "USD" 0, "$" 0.
- Terminología: "balanceadora/balanceo" es lo que se usa en PE/CO/AR; en Chile convive "equilibradora" (y es el término de España, de donde viene parte de la documentación). La keyword `equilibradora de turbos` existe y la página tiene "equilibradora" 0. Poner el sinónimo una vez en el H1 o el subtítulo: "balanceadora (equilibradora) de…".
- Lo que corresponde: (a) si Perú/Colombia/Chile se quedan (decisión del 01/09), un bloque "Fuera de Argentina" en `#soporte`: "Exportación desde fábrica o desde Argentina, puesta en marcha y capacitación en su planta por técnicos de JEREN, soporte remoto por Wi-Fi integrado; usted nacionaliza con su agente de aduana" — y campo País en el form; (b) mejor: campaña separada por país con URL final `/cimat?pais=pe` que cambie ese bloque (el form ya captura la query), o subcarpeta `/cimat/peru` cuando haya un caso allá. El PLAN ya lo advierte en la semana 8 (`PLAN_ADS_CIMAT.md:529-531`); con 44 % del gasto no conviene esperar.
- Anuncios en inglés apuntando a una página en castellano: para el usuario es una promesa incumplida en el primer segundo. Pausar o `/cimat/en`.

---

## 7. Edge cases

| Caso | Qué pasa | Evidencia | Arreglo |
|---|---|---|---|
| Clic en "Balanceadora de Cardanes · Para Talleres de Cardanes" | Aterriza en "Balanceadoras industriales CIMAT con soporte local desde Argentina" + formulario. "Cardanes" aparece una vez a 2,5 pantallas, en la tarjeta "Comprar una balanceadora" (`:299`). La ficha CMT-DS (4 planos, largo 4.600 mm, "fleje a soldar") está en `/cimat/especificaciones` y no hay ningún enlace con la palabra "cardán" para llegar. La foto del cardán existe (`aplicacion-arbol-cardan.webp`) pero solo en `/aplicaciones`. | `lineas-section.tsx:72` enlaza `#horizontales/#verticales/#turbo/#automatizacion`, no cardanes | Subpágina propia (tabla §2). Mientras tanto: agregar "cardanes y cigüeñales" al `claim` de la línea horizontal (`:369`) y un enlace "Cardanes y cigüeñales: ver especificaciones" bajo `#lineas`. |
| Busca "equilibradora" (Chile/España) | Ni una ocurrencia; "equilibrado" solo en el resumen técnico del hero (`:189`) | grep 0 | Sinónimo en H1/subtítulo de cada subpágina. |
| Busca "inducidos" / "balanceadora de ejes" (QS 3) | La página dice "armaduras" (`:369`, `:663`) y nunca "ejes" ni "inducidos". En Argentina el rebobinador dice "inducido". | grep 0/0 | "Inducidos (armaduras) de motores eléctricos" y "ejes" literal en la subpágina de cardanes/cigüeñales y en ventiladores/rotores. |
| Llega a `/cimat/gracias` sin haber enviado (URL tipeada, recarga, botón atrás/adelante, link compartido) | `GraciasTracker` dispara `lead_conversion` en **cada** carga (`gracias-tracker.tsx:8-11`), sin verificar nada. La conversión de Ads está atada a `form_submit` (`lead-form.tsx:72-89`), no a esta página, así que **Ads no se infla**; GA4 sí, si `lead_conversion` es evento clave. | — | Setear un flag en `sessionStorage` en el `success` del form y que el tracker dispare solo si está y lo consuma; sin flag, copy neutro ("¿Buscaba el formulario? Está acá"). |
| Bot cae en el honeypot | `status: "silent"` → `router.push("/cimat/gracias")` (`lead-form.tsx:90-93`) → `lead_conversion` se dispara igual para el bot. | `cimat-lead.ts` "silent" | Mismo flag: `silent` no lo setea. |
| `form_submit` doble | El efecto que dispara `form_submit` depende de `[state, router, origen, interes]` (`lead-form.tsx:97`). Si con `state.status === "success"` llega un `INTERES_EVENT` (clic en cualquier CTA antes de que navegue) cambia `origen`/`interes` y el efecto **vuelve a correr**: segundo `form_submit` y segundo `push`. Improbable, posible. | `lead-form.tsx:59-69`, `:71-97` | `useRef` "yaEnviado" o deps solo `[state.status]`. |
| Teléfono extranjero en conversiones mejoradas | Colombia 10 dígitos → "+54300xxxxxxx" (12 dígitos, válido para el filtro) → dato falso a Google. Perú/Chile 9 dígitos → 11 → descartado. | `user-data.ts:49-56` | Campo País o prefijo internacional explícito; sin prefijo, no mandar el teléfono. |
| Sitelink "Consultar por WhatsApp" | `https://www.jeren.com/whatsapp` → **404** (16,7 KB). Ads lo rechazó por DESTINATION_MISMATCH, la ruta se borró (`ca31687`) y el asset sigue en la cuenta. | `datos_ads_cimat.md:280`, `curl` | Borrar el asset. Si se quiere un sitelink de contacto: `/contacto` (página real, existe). |
| Sitelink "Solicitar información" | Misma URL que la URL final (`/cimat`). Google no sirve sitelinks idénticos a la URL final. | `datos_ads_cimat.md:199` | `/cimat/aplicaciones` o `/cimat?f=solicitar` (query distinta, misma página; el form podría leerla y hacer scroll). |
| Usuario con `prefers-reduced-motion` | Carrusel se detiene ✓, scroll suave se desactiva ✓. | `hero-carousel.tsx:38`, `track.ts:64` | Nada. |
| Sin JS / hidratación lenta | Página legible; el select controlado puede pisarse (mitigado en `lead-form.tsx:53-56`); el envío no funciona hasta hidratar; el href de WhatsApp es el genérico sin `ref.` hasta hidratar (`whatsapp.ts:55`). | — | Aceptable; refuerza bajar el JS. |
| Keyword `balanceadora para cigueñales` en el grupo Ventiladores | Anuncio de ventiladores para una búsqueda de cigüeñales. | `datos_ads_cimat.md:72` | Moverla. |

---

## 8. Plan de cambios ordenado por esfuerzo/impacto

**Hoy, en Ads (sin código, 1 h):**
1. Borrar el sitelink `/whatsapp` (404). Cambiar el sitelink "Solicitar información" a una URL distinta de la final.
2. Corregir "From 160 kg to 120 Tons" → "From 5 kg to 20 t" o pausar el grupo en inglés.
3. Callout "Repuestos en Argentina" → "Kit de repuestos críticos" hasta confirmación escrita.
4. Mover `balanceadora para cigueñales` al grupo Cigüeñales. Pausar `analizador de vibraciones y balanceo` (coincide con el análisis previo). Negativas exactas `[balanceo dinamico]`, `[balanceo de cardan]`, `[balanceador de cigueñal]`: 20 impresiones sin clic que bajan el CTR esperado (no usar frase: bloquearía `maquina de balanceo dinamico`).

**Esta semana, en `lib/cimat-content.ts` y el form (medio día, sin cambiar layout):**
5. Frases literales que faltan: "balanceadora dinámica", "máquina de balanceo dinámico", "balanceadora de rotores" en `hero.subtitle`; "cardanes, cigüeñales, inducidos (armaduras) y ejes" en `lineas[0].claim`; "(equilibradora)" una vez; "asesoramiento sin cargo" en `hero.microcopy`.
6. Formulario: "Email corporativo" → "Email"; teléfono/WhatsApp visible (opcional); campo País (select de 6 + "otro"); leer `?interes=` y `?linea=` de la URL para preseleccionar; `form_error` con `error_code`.
7. Gracias: flag en `sessionStorage` para el tracker, botón de WhatsApp, "respondemos el día hábil siguiente por email o WhatsApp".
8. Header mobile: `tel:` visible; logo JEREN sin salir de la landing (o a `#top`).
9. Sacar `@vercel/analytics` y el gtag directo de `/cimat` (GA4 dentro de GTM). `robots.ts` sin el Disallow de gracias.

**Próximas dos semanas (2-3 días): subpáginas por grupo = lo que mueve el QS.**
10. Un componente de página "por rotor" alimentado por un mapa en `cimat-content.ts` (H1, intro, filas de `specRows`, imagen, grado G, 2 FAQ, `interes` y `linea` predefinidos). Cuatro instancias: `/cimat/balanceadora-de-cardanes-y-ciguenales`, `/cimat/balanceadora-de-turbos`, `/cimat/balanceadora-de-ventiladores-e-impulsores`, `/cimat/balanceo-en-sitio`. Sitemap, canonical propio, breadcrumbs (ya existen). Asignarlas como URL final de cada grupo. Orden: cardanes → ventiladores → turbos → sitio.
11. Performance: `app/cimat/layout.tsx` sin `Providers`; FAQ con `<details>`; Turnstile diferido al primer input; un solo form montado en mobile; slide 0 con `fetchPriority="high"` y solo la slide activa en el DOM; carrusel sin autoplay. Objetivo verificable: ≤ 120 KB de JS propio comprimido y 3 terceros.
12. Hero mobile reordenado (H1 → bullets → CTA/tel → imagen → form más abajo) y un solo WhatsApp.

**Después (depende de decisiones de negocio):**
13. Bloque "Fuera de Argentina" + variante por país (`?pais=`) o campañas por país. Sin esto, el 44 % del gasto aterriza en promesas falsas.
14. Confirmación escrita de fábrica (representación, repuestos, logos) → mantener o suavizar los claims listados en §4.
15. `/cimat/en` solo si el grupo en inglés vuelve a encenderse.
16. Catálogo PDF < 2 MB.

**Contrato de medición** (a 14-21 días de tener las 4 URLs finales nuevas y los puntos 5-9): experiencia de landing ≥ AVERAGE en al menos la mitad de las keywords con dato; QS medio +2 puntos; `lostRank` de 17 % a < 10 % con la misma puja; `form_start` / sesiones cpc > 5 %; al menos un `form_submit` o `whatsapp_click` de google/cpc. Si LPE sube y `lostRank` no baja, el resto es puja (CPC máx 1.200 contra pujas altas de 1.300-1.500 en el Planner, `PLAN:335-336`).

---

## 9. Dónde discrepo del análisis previo (`ANALISIS_20260910_primeros_11_dias.md`)

1. **"Es el 17 % de pérdida por ranking, y se arregla desde el sitio"** (punto 5). Ad Rank = puja × QS. Con CPC máximo 1.200 y pujas altas del Planner de 1.300-1.500 en las keywords que convierten, buena parte de ese 17 % es puja, no landing. Subir LPE ayuda, pero no se puede prometer que lo "arregla".
2. **"URL final por grupo hacia la sección de aplicaciones que corresponda."** Dos problemas: los anchors no cambian la evaluación de landing (AdsBot ignora el fragmento), y `/cimat/aplicaciones` está organizada **por industria**, no por rotor: "cardán", "inducidos", "ejes", "turbos" viven en `/especificaciones` y `/normas-y-grados`, no ahí. La solución es una URL nueva por grupo, con el vocabulario de las keywords en el H1.
3. **Atribuye el LPE bajo solo a compartir URL.** Las keywords mejor cubiertas literalmente (`balanceadora portatil`, `balanceadora de turbos`) también están por debajo. Hay causas a nivel página (JS y terceros en mobile, form-first, promesas Argentina-only para 44 % del tráfico, carrusel) que el análisis no menciona y que ninguna URL nueva resuelve sola.
4. **"Mobile 63 %: sospechoso."** No lo es: los clics se concentran de 19 a 23 h y fines de semana (`datos:319-350`), y el mantenimiento en LATAM busca desde el celular. Lo que sí es cierto es que la experiencia mobile es la peor de la página, así que el 0 de conversiones en mobile explica más que la intención.
5. **No detecta los dos sitelinks rotos** (404 en `/whatsapp`; "Solicitar información" con la URL final). Son lo más rápido de arreglar y lo más visible para Google.
6. **La auditoría del 31/08 (commit `0e1786b`) dio "LPE: Promedio"** y afirmó dos correcciones que hoy no están: el logo del header vuelve a salir a jeren.com (`29f0635`) y sacar `priority` del hero empeoró el LCP en desktop en vez de condicionarlo por viewport. El veredicto real de Google diez días después es "por debajo" en todas. Conviene no repetir el método de auditar por checklist sin mirar el HTML servido.
7. **"Colombia + Perú se quedan"** se acepta sin consecuencias en el sitio. Si se quedan, la página tiene que decirles algo verdadero sobre importación, garantía y repuestos; si no, esos clics son rebotes pagos que también deprimen la señal de landing.
8. **Términos "balanceo de cardan / balanceo dinamico" "sin costo, se dejan"**: no cuestan clics pero sí impresiones sin clic (20 en el período), y el CTR esperado es un tercio del QS. Negativas exactas, sin tocar la frase.
9. **`analizador de vibraciones y balanceo`**: de acuerdo en pausar. Agrego que el RSA del grupo tiene el titular "Análisis de Vibración" (`datos:182`) y la página no dice "análisis de vibración" ni una vez: el anuncio invita a algo que la página no muestra, y eso también es LPE.
