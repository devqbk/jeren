# Dictamen — Landing, medición y video para Google Ads CribMaster (JEREN, Argentina)

Experto: conversión y medición B2B. Fecha: 31/10/2026.
Base: `cribmaster_datos.md` (31/10), código real de `/cribmaster` (`lib/cribmaster-content.ts`, `components/cribmaster/*`,
`app/cribmaster/*`, `app/actions/cribmaster-lead.ts`), precedente `/cimat` (`components/cimat/lead-form.tsx`, `user-data.ts`,
`PLAN_ADS_CIMAT.md` § Conversión, `ANALISIS_20260910_exhaustivo.md` § GTM) y el HTML en vivo de https://www.jeren.com/cribmaster
(bajado el 31/10: 124 KB, trae `GTM-T5J4LJMK` y `G-PFDSYDQPN7`, 4 miniaturas de YouTube, sin iframes hasta el clic).
Lo que no está en esas fuentes va marcado como [estimado] o [a verificar].

Resumen en una línea: la landing está bien armada para tráfico pago (formulario arriba, un solo destino, sin fugas, eventos
cableados) pero **hoy ninguna conversión llega a Google Ads** —no hay acción creada ni etiqueta en GTM para los eventos `cm_*`—
y el formulario no guarda `gclid`. Eso va antes que cualquier retoque de copy.

---

## 1. Auditoría de la landing para tráfico pago

### Qué ayuda (no tocar)

- Formulario en el hero al lado del H1 en desktop (`secciones.tsx`, `#solicitar`), un solo destino de conversión, todos los CTA
  scrollean ahí (`track.ts` → `irAlFormulario`). En mobile hay barra sticky + WhatsApp flotante (`cliente.tsx`).
- Sin fugas: el HTML en vivo solo linkea `/cribmaster`, `/privacidad` y `/` (logo del footer). No hay link a cribmaster.com en el
  cuerpo. Igual que la corrección que se hizo en CIMAT ("el logo ya no saca al visitante a jeren.com").
- Honeypot devuelve `silent` (sin evento), Turnstile diferido al primer foco, validación en cliente con `cm_form_error` por código.
  Misma maquinaria que CIMAT, que ya pasó por producción.
- `/cribmaster/gracias` en noindex y `cm_lead_conversion` solo con el flag de sessionStorage: no cuenta recargas ni bots.
- Transparencia: el caso Rio Tinto lleva "según publicación del fabricante" en la sección y en el footer; los videos dicen quién
  los publicó y en qué idioma. "Distribuidor autorizado", no "representante oficial". Nada que un comprador pueda desmentir.
- Videos con fachada (`video.tsx`): la miniatura pesa poco, el iframe carga al clic. Correcto para LCP en una landing paga.
- Esquema JSON-LD `Organization/LocalBusiness` + `Product`, canonical, OG. No mueve QS, pero no estorba.

### Qué falta o puede bajar el Quality Score

Google evalúa "experiencia de la página de destino" por palabra clave, sobre el texto visible. En CIMAT las 12 keywords dieron
"por debajo del promedio" y una de las causas detectadas fue tener términos en `seo.keywords` que no estaban en el copy. Acá
pasa lo mismo con varios términos que el Planner muestra con volumen:

| Término con volumen (AR) | ¿Está literal en el copy visible? |
|---|---|
| expendedora industrial (0 exacto, pero "vending industrial" 10, "industrial vending machine" 10) | Sí: "Expendedoras industriales" (hero, soluciones) |
| lockers inteligentes (50) / lockers para herramientas (10) / lockers industriales (10) | Sí: "Lockers y gabinetes inteligentes". Falta "para herramientas" como frase |
| máquina expendedora de EPP (20) / dispensador de EPP (10) / máquina expendedora de guantes (10) | **No.** El copy dice "expendedoras" y "dispensado unitario", nunca "máquina expendedora de EPP" ni "dispensador" |
| gestión de herramientas (110) / control de herramientas (10) / inventario de herramientas (30) | **No** literal. Hay "herramientas de alto valor" y "stock en tiempo real" |
| gestión de pañol / control de pañol / administración de pañol (10 c/u; "control de pañol" paga ARS 1.137–3.528) | **No** literal. Aparece "pañol" (viajes al pañol, pañoles satélite) pero nunca "control de pañol" |
| control de EPP (10) / gestión de EPP (10) / entrega de EPP (90) | **No** literal. "control de EPP yacimiento" está en `seo.keywords`, que Google ignora |

Segundo problema: el H1 dice "en la mina y en el yacimiento". El flyer está armado para Petróleo & Gas y Minería y eso está bien
como foco, pero el que busca "máquina expendedora de EPP" o "control de herramientas" desde una planta o un taller lee un H1 que
no le habla. El propio flyer incluye "talleres de mantenimiento pesado" y "contratistas en obra" (sección Dónde aplica), así
que ampliar el encabezado no inventa nada.

Tercero: el texto de privacidad del formulario dice "No los compartimos con terceros" (`formulario.privacidad`). Es falso ya hoy
(SendGrid, Turnstile, Vercel y Google intervienen, como lista la política de privacidad escrita para CIMAT) y va a ser más falso
cuando el mail hasheado viaje a Google por conversiones mejoradas. En una landing paga una promesa que no se cumple es un
riesgo legal y de confianza, no un detalle.

### Cambios priorizados (impacto / esfuerzo)

| # | Cambio | Por qué | Archivo y qué tocar |
|---|---|---|---|
| 1 | **Medición completa** (acción de conversión + etiqueta GTM + `gclid/gbraid/wbraid` + `user_data`) | Sin esto la campaña no aprende y nadie sabe qué lead vino de Ads. Es el bloqueante. | Detalle en § 2. `lead-form.tsx` (`AttributionFields`, push de `cm_form_submit`), `cribmaster-lead.ts` (`ATRIBUCION`). |
| 2 | **Frases literales de las keywords en el copy visible** | LPE se mide sobre el texto de la página; CIMAT pagó CPC al tope con "por debajo del promedio" en 12/12 por esto. | `lib/cribmaster-content.ts`: en `soluciones.items[0].body` → "Máquina expendedora de EPP, guantes, insertos y consumibles, con dispensado unitario…"; `items[1].body` → "Lockers para herramientas y equipos de alto valor, con control de retiro y devolución"; `items[3].body` agregar "control de herramientas e inventario en tiempo real"; `resuelve.cards[1].body` → "control de EPP y de consumibles: el software sigue el stock…"; `resuelve.title` → "Menos derroche, menos faltantes y control de pañol sin viajes al pañol central" (o similar que incluya "control de pañol"). Solo frases, sin agregar secciones. |
| 3 | **Campo "Qué querés controlar"** (select opcional: EPP y consumibles / Herramientas y equipos / Software y trazabilidad RFID) con preselección desde `?linea=` y envío como `service_interest` | Califica el lead para Fabián, permite URL final distinta por grupo de anuncios sin hacer subpáginas (misma mecánica que `?interes=`/`?linea=` de CIMAT) y da una dimensión a `cm_form_submit` para saber qué grupo convierte. | `lib/cribmaster-content.ts` (nuevo `INTERESES`), `lead-form.tsx` (select controlado + lectura de `qs("linea")`, igual que `interesDesdeUrl()` en CIMAT), `cribmaster-lead.ts` (fila "Qué quiere controlar" + `service_interest` en `ATRIBUCION`), payload de `cmTrack("form_submit")`. |
| 4 | **H1 que no excluya al que no es minero** | El H1 es lo primero que Google y el visitante leen; hoy habla solo a mina y yacimiento. | `hero.h1` → "Insumos, EPP y herramientas bajo control: en el yacimiento, la mina y el taller de mantenimiento." (todo sale del flyer). Si Ads va a tener un grupo "planta/manufactura", la variante del H1 por `?sector=` requiere el OK de JEREN (§ 4): el flyer no habla de manufactura. |
| 5 | **Arreglar la frase de privacidad y linkear la política** | Hoy promete algo falso; con conversiones mejoradas, más. | `formulario.privacidad` → "Usamos tus datos solo para responder esta consulta. Cómo los tratamos: política de privacidad." y renderizar el link a `/privacidad` en `lead-form.tsx` (hoy es texto plano). [a verificar] que `app/privacidad/page.tsx` mencione el formulario de CribMaster y el envío hasheado a Google. |
| 6 | **Acortar el pliegue mobile** | En mobile el orden es eyebrow → H1 → subtítulo de ~55 palabras → 3 bullets → CTA → foto → formulario. El subtítulo repite los bullets. | `hero.subtitle` a una oración ("CribMaster entrega cada ítem a un operario identificado con tarjeta o PIN, lo registra en el momento y repone solo lo que se consume.") y mover el resto a `soluciones.lead`. Sin tocar la estructura. |
| 7 | **Subtítulos en español en los tres videos en inglés** | Son el 75 % del bloque de video y hoy el único aviso es "Audio en inglés salvo el primero". | `video.tsx`: en el `src` del iframe agregar `&hl=es&cc_lang_pref=es&cc_load_policy=1`. [a verificar] que esos videos tengan subtítulos automáticos traducibles; si no, igual no empeora. |
| 8 | **Gracias con el video en español** | La persona que acaba de enviar es la más caliente y la página de gracias hoy solo ofrece WhatsApp. Si mira el video, sube `cm_video_play` post-lead (señal útil para listas). | `app/cribmaster/gracias/page.tsx`: embebido del `F0q1KhfuHz8` con la misma fachada de `video.tsx` (reusar el componente con un solo ítem). Bajo impacto, bajo esfuerzo. |

No propongo: subpáginas por producto (volumen total pujable no las justifica), FAQ de precios (no hay precios; no inventar),
foto de instalación local (no existe; es pedido a JEREN, § 4).

---

## 2. Medición

### Estado real

- Cuenta Ads 452-457-1142, ID de conversión `AW-18420339644` (el mismo para toda la cuenta; cada acción nueva genera su etiqueta).
- Contenedor `GTM-T5J4LJMK`, en vivo en `/cribmaster` (verificado en el HTML). Tiene: variable `DL - form_id` (id 18), activador
  "Evento - form_submit" (id 4, con `form_id ≠ contacto_general`), etiquetas "Ads - Conversión CIMAT" y "Ads - Conversión CIMAT WhatsApp".
  Se administra por API con `tec-harness/src/gtm_api.py` (token con permiso de publicación, verificado el 11/09).
- Los eventos `cm_*` ya salen al `dataLayer` (`track.ts` → `components/cimat/track.ts`), y a GA4 por `gtag("event")`.
  **Nadie los escucha en GTM.** Los nombres se prefijaron a propósito para no disparar la conversión de CIMAT: correcto.
- El formulario NO manda `gclid/gbraid/wbraid` ni `user_data`. El de CIMAT sí (`AttributionFields` y `datosUsuario`).

### Acciones de conversión a crear en Google Ads

| Nombre | Tipo / categoría | Recuento | Ventana | Valor | Rol |
|---|---|---|---|---|---|
| CribMaster — Solicitud de información | Sitio web / Enviar formulario de clientes potenciales (SUBMIT_LEAD_FORM) | Una | 90 días clic (ciclo largo, igual que CIMAT) | Sin valor hasta que JEREN dé ticket y margen (§ 4). **No copiar los USD 300 de CIMAT**: salen de un ticket de balanceadoras. | **Principal** |
| CribMaster — WhatsApp clic | Sitio web / Contacto | Una | 30 días | Sin valor | Secundaria (observación) |
| CribMaster — Llamada clic | Sitio web / Contacto | Una | 30 días | Sin valor | Secundaria |
| CribMaster — Formulario iniciado | Sitio web / Otro | Una | 30 días | Sin valor | Secundaria. Sirve para diagnosticar en las primeras semanas, cuando los leads son 0 o 1. |

`cm_video_play` no va como conversión: se usa como evento de GA4 para armar listas (§ 3). Cuando la principal tenga ≥15
conversiones (regla de la semana 12 de CIMAT) se evalúa pasar a Smart Bidding; antes, CPC manual.

Al crear la principal: Configuración → Conversiones mejoradas → activar → "Google Tag Manager", y aceptar los términos de datos
de clientes de la cuenta (una vez por cuenta; [a verificar] si CIMAT ya los aceptó).

### GTM: variables, activadores y etiquetas

Variables de capa de datos: `DL - cta_location`, `DL - service_interest`, `DL - video_id`, `DL - error_code`, y una variable de
tipo **Datos proporcionados por el usuario** ("UPD - user_data") en modo "Código" apuntando a la variable de capa de datos
`user_data` (claves `email`, `phone_number`). Esta variable normaliza y hashea sola: hay que pasarle el valor en claro
normalizado, no un SHA-256 ya calculado (está documentado en `components/cimat/user-data.ts`; si se le pasa un hash lo
re-hashea y no matchea nada).

| Activador (Evento personalizado) | Etiqueta |
|---|---|
| `cm_form_submit` | "Ads - Conversión CribMaster" (Google Ads Conversion Tracking, ID 18420339644, etiqueta de la acción principal, "Incluir datos proporcionados por el usuario" → `UPD - user_data`) |
| `cm_whatsapp_click` | "Ads - Conversión CribMaster WhatsApp" |
| `cm_phone_click` | "Ads - Conversión CribMaster Llamada" |
| `cm_form_start` | "Ads - Conversión CribMaster Form start" |

Por qué `cm_form_submit` y no la página de gracias: el envío hace `router.push("/cribmaster/gracias")`, navegación del lado del
cliente, sin page load (mismo motivo documentado en HANDOFF_CIMAT). Y `user_data` tiene que viajar en el mismo push que dispara
la etiqueta (precedente CIMAT: "los datos hasheados viajan en el MISMO push que form_submit"). `cm_lead_conversion` queda como
contraprueba en GA4: semana a semana tiene que dar ±1 contra `cm_form_submit`; si se separan, el flag de sessionStorage o la
página de gracias se rompieron.

[a verificar] que el contenedor tenga una etiqueta **Conversion Linker** en All Pages; es la que guarda el `gclid` en la cookie
`_gcl_aw` para que la conversión se atribuya aunque la persona navegue antes de enviar. Si no está, agregarla.

Publicar versión nueva del contenedor por `gtm_api.py`, verificar en `gtm.js` en vivo (como se hizo el 11/09) y hacer UN envío de
prueba desde producción con Tag Assistant: en localhost GTM no carga (`gtm.tsx`), así que la prueba local no sirve de prueba.

### Qué agregar al formulario (código)

1. `components/cribmaster/lead-form.tsx`, `AttributionFields`: agregar `gclid: qs("gclid")`, `gbraid: qs("gbraid")`,
   `wbraid: qs("wbraid")` (copiar las tres líneas de `components/cimat/lead-form.tsx`). Además, persistir: al cargar la página,
   si hay `gclid/gbraid/wbraid` en la URL guardarlos en `localStorage` con fecha (`cm_click_id`, 90 días); al armar los campos
   ocultos, si la URL no los trae, leer los guardados. Motivo: la persona vuelve directo una semana después y el `gclid` de la
   URL ya no está; la cookie de Google sirve para la etiqueta, no para el mail del lead.
2. `app/actions/cribmaster-lead.ts`, `ATRIBUCION`: agregar `"gclid", "gbraid", "wbraid", "service_interest"`. Así viajan en el
   mail del lead, que hoy es el único registro de leads de JEREN. Con `gclid` en el mail queda abierta la importación de
   conversiones offline (HANDOFF_CIMAT la da por viable con ese dato).
3. `lead-form.tsx`, en el `useEffect` de `state.status === "success"`: antes de `cmTrack("form_submit")`, leer `email` y
   `telefono` del `formRef` y pasar `user_data: datosUsuario(email, telefono, "AR")` importando `datosUsuario` de
   `@/components/cimat/user-data`. País fijo "AR" porque la landing y la campaña son Argentina y el formulario no pregunta país;
   la función respeta el `+` si alguien escribe un número internacional. Agregar `service_interest` al mismo payload.
4. Plantilla de seguimiento / sufijo de URL final en la campaña (no en código):
   `utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}` y, por grupo de
   anuncios, `linea=expendedoras|lockers|software` en la URL final. El formulario ya lee y manda los cinco `utm_*`.
   [a verificar] etiquetado automático activo en la cuenta (es lo que llena `gclid`; estaba en el checklist de CIMAT).

### Cómo se sabe después qué lead vino de Ads

- **En el mail del lead** (hoy la única base de leads): `utm_medium=cpc` + `gclid` presente → vino de un clic de Ads;
  `utm_campaign/utm_content/utm_term` dicen campaña, grupo y keyword. Sin `gclid` ni `utm` → orgánico, directo o el mail frío de
  Fabián. Este cruce lo hace cualquiera leyendo el mail, sin herramientas.
- **En Ads**: columna Conversiones de la acción principal, por campaña/grupo/keyword. Google mide por hora del clic y
  subregistra (aprendizaje CIMAT); para el conteo del día la fuente es el mail.
- **En GA4**: `cm_form_submit` y `cm_lead_conversion` con `session_source/medium = google/cpc`. Ojo con la trampa ya vista:
  una sesión `google/cpc` con `landingPage = /` es una visita directa que heredó la fuente; no cuenta.
- **El monitor** (`jer-monitor-ads`) tiene que sumar `cm_form_submit` a su conteo de leads del sitio, como se hizo con
  `contact_submit` el 11/09, o va a reportar leads totales sin los de CribMaster.
- **Cierre del circuito**: Fabián anota por lead (en el mismo hilo del mail o una planilla de 6 columnas: fecha, email,
  `gclid`, calificado sí/no, reunión, propuesta). Con eso, a los 90 días, se importan como conversiones offline las que llegaron
  a "reunión" y la cuenta aprende de leads buenos, no de formularios. Con un vendedor y este volumen, esa planilla es el CRM.

---

## 3. Remarketing y video

### Lo que implica que los videos no sean de JEREN

Los cuatro (`F0q1KhfuHz8`, `cfuyPIw4-i8`, `nVD7h76RWfs`, `e6wXKryObzE`) están en canales del fabricante o de terceros, no en un
canal de JEREN vinculado a la cuenta 452-457-1142. Consecuencias concretas:

1. **No se pueden armar listas de "vio el video"**: las audiencias de interacción con video de Google Ads solo se construyen
   sobre un canal de YouTube propio vinculado. Quien mira el video de CribMaster en español hoy no entra a ninguna lista de JEREN.
2. **Como creatividad de anuncio**: una campaña de Video admite pegar la URL de un video público ajeno, pero la política de Ads
   exige tener los derechos; usar material de Stanley Black & Decker en pauta sin autorización escrita expone a JEREN frente al
   fabricante y a la propia Google. Demand Gen, además, pide los videos desde el canal vinculado [a verificar en la interfaz al
   crear]. Sin canal propio y sin autorización no hay campaña de video posible, con ninguno de los cuatro.
3. **Métricas**: con video ajeno no se ven reproducciones orgánicas, suscriptores ni se puede poner el CTA del canal.

En la landing sí sirven y se miden (`cm_video_play` con `video_id`): esa es su función hoy, más el mail de Fabián.

### Listas que sí se pueden armar hoy (costo cero, empezar ya)

Vía GA4 (`G-PFDSYDQPN7`, [a verificar] vinculada a la cuenta de Ads con "Personalización de anuncios" activa) o con la etiqueta de
remarketing de Google Ads en GTM (una etiqueta más en All Pages de `/cribmaster*`):

| Lista | Definición | Duración |
|---|---|---|
| Visitó /cribmaster | page_path empieza con `/cribmaster` | 90 y 540 días (dos listas) |
| Reprodujo un video | evento `cm_video_play` | 180 días |
| Empezó el formulario y no envió | `cm_form_start` sin `cm_form_submit` | 30 días |
| Envió (exclusión) | `cm_lead_conversion` o `cm_form_submit` | 180 días |
| Clientes y cuentas de JEREN (Customer Match) | lista de emails corporativos subida por JEREN | sin vencimiento |

### Tamaños mínimos y si Argentina llega

Mínimos de Google para que una lista sirva anuncios: **Display 100** usuarios activos; **Búsqueda (RLSA), YouTube, Gmail y
Demand Gen 1.000**. Customer Match sigue las mismas reglas por red y además requiere que la cuenta cumpla la política de datos
de clientes y tenga historial (la cuenta tiene 90 días exactos: 02/08–30/10). [a verificar] en Gestor de audiencias si ya es
elegible.

Tráfico esperado [estimado]: los términos con intención que el Planner muestra suman unas 300–400 búsquedas/mes en Argentina
(3.a y 3.b sin el ruido de 3.d). Con el 34 % de cuota de impresiones que logra CIMAT y un CTR del 8–10 %, son **10–15 clics
de Ads por mes**; el orgánico de CribMaster está en cero (Search Console, § 5 de la base). O sea, 30–50 visitantes/mes a
`/cribmaster` contando directo y el mail de Fabián.

- Lista de visitantes a 90 días: ~100–150 → **llega a Display** recién hacia el mes 3, y a duras penas.
- YouTube / Demand Gen / RLSA (1.000): **no llega**; a este ritmo son 20+ meses.
- Customer Match: depende del tamaño real de la base de JEREN y de la tasa de coincidencia (típicamente 30–50 %). Con menos
  de ~2.500 emails corporativos, no alcanza los 1.000 coincidentes para YouTube. Para Display alcanza con 100 coincidentes.
- Combinar listas no suma: cada lista debe cumplir el mínimo por sí misma.

Conclusión: **remarketing con listas propias en YouTube/Demand Gen no es viable para CribMaster Argentina en 2026.** Lo que
sí: (a) crear las listas ahora para que acumulen; (b) Display de remarketing a visitantes de `/cribmaster` a partir del mes 3,
presupuesto mínimo (ARS 1.000–1.500/día [estimado]), con anuncios adaptables que necesitan imágenes autorizadas (hoy hay una
foto de ToolBox y el footer dice "Imágenes: Stanley Black & Decker": también requiere permiso); (c) si JEREN consigue video
propio o autorización + canal (§ 4), una campaña de Video en YouTube **no por listas sino por segmento personalizado** (personas
que buscaron "pañol", "EPP", "expendedora industrial", "lockers para herramientas") y ubicaciones elegidas (canales de prensa
minera y de O&G argentinos, a validar en el Planificador de alcance), solo Argentina, excluyendo contenido infantil y móviles
en apps. Eso no depende del tamaño de ninguna lista. Antes de gastar ahí, la condición es tener al menos 10 leads de Búsqueda
calificados: el video amplifica una propuesta que ya convierte, no la reemplaza.

Lo que no: Performance Max (regla "Nunca" de CIMAT, y con una acción de conversión sin historia aprendería de ruido), Display
con segmentación por intereses sin listas (el aprendizaje CIMAT es que lo industrial de capital no se compra por impulso).

---

## 4. Qué le pedimos a JEREN

Ordenado por lo que desbloquea más:

1. **Autorización escrita de CribMaster / Stanley Black & Decker** para usar en pauta los videos, las imágenes del flyer y el caso
   Rio Tinto, y los archivos originales de video (idealmente el de español) para subirlos a un canal de JEREN. Preguntar si el
   fabricante tiene programa de co-marketing para distribuidores: suele incluir fondos y material listo.
2. **Canal de YouTube de JEREN** (cuenta de marca) vinculado a la cuenta de Ads 452-457-1142. Sin canal no hay listas de video ni
   campañas de Video/Demand Gen.
3. **Video propio, aunque sea con celular**: 60–90 segundos de Fabián explicando qué controla la máquina y cómo se retira un ítem,
   en español, sobre un equipo real (¿hay unidad demo en Buenos Aires? si no, pedir a CribMaster una). Más un corte de 15 s. Es el
   único activo de video que JEREN puede usar sin pedir permiso y el que mejor habla al comprador argentino.
4. **Fotos**: ProStock, ProLock, AccuCab, pantalla del software, y cualquier instalación en Argentina o en la región. Hoy hay una
   sola foto (ToolBox). Sin imágenes propias no hay anuncios de Display.
5. **Caso o referencia local**: una instalación en Argentina, o en su defecto una en LATAM que CribMaster autorice a nombrar. El
   caso Rio Tinto es de EE. UU. y lo dice el flyer; una referencia local vale más que cualquier cifra importada.
6. **Ticket promedio, margen y ciclo de venta** de una instalación típica, para fijar el valor de la conversión (hoy sin valor).
7. **Catálogo PDF en español** (no existe): segunda conversión secundaria (`catalog_download`, como en CIMAT) y material para el
   seguimiento de Fabián.
8. **Lista de clientes y cuentas** (emails corporativos) para Customer Match, con confirmación de que JEREN puede usarla para
   publicidad según su política de privacidad. Y el número: si son menos de ~2.500, servirá para Display, no para YouTube.
9. **Sectores**: ¿la landing y los anuncios pueden hablar a manufactura, automotriz y construcción, o JEREN solo quiere O&G y
   minería? Define el H1 (§ 1, cambio 4) y los grupos de anuncios.
10. **Canal de atención**: el WhatsApp es el personal de Fabián y la promesa es "día hábil siguiente". Confirmar que lo sostiene, o
    poner un número de WhatsApp Business de JEREN.
11. **Que CribMaster publique a JEREN como distribuidor en cribmaster.com**: la acción de mayor retorno y costo cero del plan de
    CIMAT (ahí la fábrica todavía no lo hizo). El comprador que evalúa un equipo verifica al distribuidor en el sitio del fabricante.

---

## 5. Contrato de medición de la landing

**Tasa de conversión esperada [estimado].** Referencia real en la misma cuenta: CIMAT, 188 clics → 2 conversiones = 1,1 % en 90
días, con LPE "por debajo del promedio" en todas las keywords y seis países. CribMaster sale con una sola geografía, el
formulario en el hero y los cambios 2 a 6 aplicados: espero **2–4 % de los clics pagos en `cm_form_submit`**, más 1–2 % en
WhatsApp. Con 10–15 clics/mes eso es **0–1 lead por mes**: la landing no se juzga por leads en el primer mes, se juzga por
micro-métricas hasta acumular clics.

**Cuándo se evalúa.** A los **100 clics pagos acumulados o a los 60 días**, lo que llegue primero. Antes: dos controles.

- A las 48 h del encendido: una conversión de prueba vista en Ads (Diagnóstico de la acción = "Registrando conversiones"),
  `gclid` y `utm_*` presentes en el mail de prueba, GTM versión nueva verificada en `gtm.js`.
- A las 72 h: estado de conversiones mejoradas = "Registrando" en la acción principal.

**Qué se mide (GA4 + Ads + mail), semanal, en el parte de `jer-monitor-ads`:**

| Métrica | Esperado [estimado] | Dispara cambio si |
|---|---|---|
| `cm_form_start` / clics pagos | ≥ 8 % | < 4 % tras 50 clics → el pliegue mobile o el H1 no engancha: aplicar cambios 4 y 6 si no se hicieron, revisar `device_type` |
| `cm_form_submit` / `cm_form_start` | ≥ 40 % | < 25 % → fricción del formulario: leer `cm_form_error` por `error_code` (CF-*, VALIDACION-CLIENTE, campos) antes de tocar nada |
| `cm_form_submit` / clics pagos | 2–4 % | 0 en 100 clics con form_start normal → problema de medición, no de landing: verificar GTM antes de culpar al copy |
| `cm_lead_conversion` vs `cm_form_submit` | igual ±1 | se separan → flag de sessionStorage o gracias rota |
| Sesiones comprometidas (GA4, cpc) | ≥ 45 % | < 30 % → la keyword trae gente equivocada (negativas: planilla, resolución 299, kardex, café) o el H1 no coincide con el anuncio |
| LPE por keyword (Ads) | "Promedio" o mejor en ≥ 50 % a los 14 días | "Por debajo del promedio" en ≥ 50 % → más frases literales (cambio 2) y URL final con `?linea=` por grupo (cambio 3) |
| Calidad del lead (Fabián, a 2 días hábiles) | ≥ 50 % calificado (empresa real del sector, rol con decisión o influencia) | < 50 % → el problema está en las keywords, no en la landing; cerrar negativas por familia |
| Conversiones Ads vs leads con `gclid` en el mail | Ads ≥ 70 % de los del mail | < 50 % → revisar Conversion Linker, etiquetado automático y bloqueadores; sumar importación offline desde el mail |

**Qué NO dispara cambios**: un mes sin leads con micro-métricas sanas. Con 10–15 clics mensuales, cero leads en 30 días es el
resultado estadísticamente más probable aunque todo esté bien. Cambiar la landing con ese dato sería ruido.

**Regla de salida**: a los 100 clics, si `cm_form_start` ≥ 8 % y `submit/start` ≥ 40 % pero los leads calificados son 0, el cuello
no es la landing: es la demanda (aprendizaje CIMAT: el bien de capital industrial no se busca en Google) y el plan pasa a
prospección directa con los mismos activos (video propio, caso, catálogo), que es donde JEREN ya empezó el 30/10.
