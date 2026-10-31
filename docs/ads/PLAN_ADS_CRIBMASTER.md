# Plan de Google Ads — CribMaster / JEREN (Argentina)

**Versión 1 — 31/10/2026.** Fundido de cuatro dictámenes independientes sobre una misma base de hechos
generada por API el 31/10 (Keyword Planner Argentina + cuenta 452-457-1142 + Search Console + código de la landing):

| Experto | Archivo |
|---|---|
| Base de hechos (datos crudos, sin opinión) | `expertos/cribmaster_datos.md` |
| Demanda y Search (keywords, negativas, anuncios, presupuesto, contrato) | `expertos/cribmaster_experto_search.md` |
| Mercado industrial argentino (cómo se compra, segmentos, 36 cuentas nombradas, competencia) | `expertos/cribmaster_experto_mercado.md` |
| Producto (dónde CribMaster entrega más valor, ROI, dónde no empujarlo, calificación) | `expertos/cribmaster_experto_producto.md` |
| Landing, medición y video (auditoría de /cribmaster, conversiones, GTM, remarketing) | `expertos/cribmaster_experto_landing_medicion.md` |

Cuenta en ARS, referencia 1.500 ARS/USD. Lo que no tiene fuente va marcado **[estimado]**. Donde los expertos no
coincidieron, acá se dice qué se decidió y por qué (sección 9).

---

## 1. El veredicto en cinco líneas

1. **CribMaster no se busca en Google en Argentina.** Todo lo pujable con intención de compra suma **~430 búsquedas/mes**, y
   limpias son ~180 (`maquina expendedora de epp` 20, `dispensador de epp` 10, `vending industrial` 10, `cribmaster` 10,
   `autocrib` 10, `supplypro` 10, `control de pañol` 10…). Es la misma estructura que balanceadoras: CIMAT hizo 2 conversiones
   en 90 días con ARS 198.183 en seis países.
2. **El único volumen real es el dolor, no la máquina:** ~700–900 búsquedas/mes de "planilla / registro de entrega de EPP
   Res. SRT 299/11". Es gente de Seguridad e Higiene y RRHH buscando el formulario gratis. Es el comprador correcto con la
   billetera equivocada: va a contenido orgánico, no a clics pagos.
3. **Ads acompaña, no lidera.** Una sola campaña de Search, chica y exacta (ARS 2.000/día, USD 40/mes), con seis grupos
   incluida la defensa de marca. Expectativa honesta a 90 días: 40–78 clics, 1–3 leads de formulario, 0–2 calificados.
4. **El pipeline sale de prospección directa** sobre ~40 cuentas con nombre en dos segmentos donde JEREN ya tiene credencial
   (Oil & Gas upstream y minería) más una siembra en los proyectos de cobre que arrancan obra en 2027. Es lo que Fabián empezó
   el 30/10 (con el dominio mal tipeado: el mail a PSJ hay que rehacerlo).
5. **Antes de encender nada hay un bloqueante:** hoy ninguna conversión de CribMaster llega a Google Ads. No hay acción de
   conversión, no hay etiqueta en GTM para los eventos `cm_*`, y el formulario no guarda `gclid`. Sin eso la campaña no se puede
   juzgar y no se enciende.

---

## 2. Segmento de industrias a atacar

Cruce del experto en producto (dónde el producto entrega más valor) y del de mercado (dónde JEREN puede entrar). El puntaje
mide valor del producto × probabilidad de que la cuenta lo compre y lo use bien, no tamaño de mercado.

| Industria | Valor del producto | Acceso de JEREN | Decisión |
|---|---|---|---|
| **Oil & Gas upstream**: operadoras y bases de servicios de Vaca Muerta; Cuenca Austral (Tierra del Fuego) | 5 — bases 24×7 llenas de contratistas, EPP + consumibles de taller + herramientas de alto valor; Stream-Flo es el caso histórico del rubro | Alto — 40 años en yacimientos, sedes en Río Grande y Ushuaia | **Atacar ahora** |
| **Minería en operación** (oro, plata, litio) | 5 — miles de personas, mayoría contratistas, turnos 14×14, pañoles satélite a horas de la base; el caso del fabricante es de Rio Tinto | Alto — identidad minera de JEREN | **Atacar ahora** |
| **Cobre en construcción + EPCM** (Vicuña/Josemaría, PSJ Cobre Mendocino, Los Azules, Gualcamayo Carbonatos Profundos) | 5 — el arranque de obra es el pico de consumo de EPP de toda la vida del proyecto; se instala en obra y se hereda a la operación | Medio — Fabián ya escribió a PSJ | **Sembrar ahora, cerrar 2027** |
| **Proceso continuo con paradas de planta**: refinerías, petroquímica, aluminio (YPF La Plata y Luján de Cuyo, Bahía Blanca, Aluar); siderurgia (Ternium, Acindar, Tenaris Campana) | 4 — paradas con cientos de contratistas, abrasivos y consumibles de soldadura (−20 a −40 % documentado), SAP, ISO 45001 | Bajo | **Segunda ola** (refinerías y petroquímica primero; siderurgia está en paradas y suspensiones en 2026) |
| **MRO aéreo y aeroespacial** (FAdeA, Aerolíneas Hangar 5, INVAP, helicópteros) | 4 — herramienta calibrada y FOD por norma; Boeing es la referencia | Bajo | **Venta directa, 4–6 puertas, sin pauta** |
| **Distribuidores de EPP/MRO** (Würth AR, regionales de Neuquén/San Juan/Salta) | 4 como canal — ponen la máquina en el cliente (VMI) y resuelven la objeción "¿quién me repone?" | Medio | **Aliado, no cliente: explorar uno por región** |
| Servicios mineros (Finning, Epiroc, Sandvik, Komatsu) | 3 | Medio | Cuentas dentro de los segmentos A y B, no segmento aparte |
| Automotriz y autopartes | 2 hoy — producción −16,9 % en 2026 y recorte de turnos; compras globales; SMATA | Nulo | **No en 2026**, revisar 2027 |
| Alimentos, energía/utilities, pymes metalmecánicas, construcción civil, astilleros, salud | 1–3 | Bajo o nulo | **No** |

**Por qué estos tres primero.** Son los únicos donde se cumplen a la vez las condiciones que aceleran el ROI (≥80–100 personas
por pañol, alta proporción de contratistas, 3 turnos o 24×7, sitios remotos, trazabilidad exigida por la operadora o por la
Res. 299/11, SAP) y donde JEREN puede sentarse en la mesa. Y son el foco del flyer: no hay que cambiar material.

**Regla de corte del experto en producto [estimado]:** un punto de uso tiene que controlar **≥ USD 100.000/año** de EPP +
consumibles para pagar una máquina (supuesto USD 20–40k instalada, a validar con Stanley) en ~12 meses. Debajo de USD 40k/año
no hay caso. Y sin Mantenimiento o Seguridad e Higiene en la mesa (solo Compras) tampoco: la máquina compite con el precio
unitario del guante y pierde.

### Cuentas objetivo (resumen; la lista completa con sitio, motivo y rol está en `expertos/cribmaster_experto_mercado.md` §3)

Con un vendedor, no más de 40 cuentas vivas, tres toques por cuenta por trimestre, pidiendo una sola cosa: 45 minutos para
relevar el pañol.

- **Oil & Gas (15):** YPF (Loma Campana / base Añelo), Vista, Tecpetrol (Fortín de Piedra; compras por Exiros), Pluspetrol, Pan
  American Energy (Vaca Muerta y Cerro Dragón), Shell, Pampa Energía, **TotalEnergies en Tierra del Fuego (primer piloto
  natural: JEREN tiene oficina en Río Grande)**, CGC, SLB, Halliburton (recortando costos a la fuerza), Tenaris (Campana y
  servicios), Weatherford / Baker Hughes / NOV (lockers y RFID para tools calibrados), San Antonio / Calfrac / Pecom / AESA,
  Nabors / H&P. Roles: Jefe de Almacenes o Materiales de base, Supply Chain / Abastecimiento, Gerente HSE.
- **Minería en operación (15):** Rio Tinto Lithium (Fénix y Sal de Vida en Catamarca, Olaroz en Jujuy), Barrick/Shandong
  (Veladero), Newmont (Cerro Negro, subterránea), AngloGold (Cerro Vanguardia), Fortuna (Lindero), Eris (Gualcamayo), Exar
  (Cauchari-Olaroz), Eramet (Centenario-Ratones), Ganfeng (Mariana), POSCO (Sal de Oro), Zijin (Tres Quebradas), Pan American
  Silver, Patagonia Gold (Calcatreu), Finning / Epiroc / Sandvik (talleres). Roles: Superintendente de Almacenes y Logística,
  Supply Chain, Superintendente HSE, Gerente de Mantenimiento Mina.
- **Cobre en construcción (6):** Vicuña Corp (Josemaría, obra 1T-2027, campamento ya adjudicado), PSJ Cobre Mendocino (RIGI
  aprobado 28/05/2026; **reenviar el mail del 30/10 corregido**), McEwen (Los Azules, un toque anual), el contratista del
  campamento de Vicuña, EPCM y constructoras mineras (Techint I&C, Milicic, Sacde, Panedile; Ausenco/Fluor/Hatch como EPCM).
  Roles: Gerente de Abastecimiento del Proyecto, Gerente de Construcción, Jefe HSE de obra, Desarrollo de Proveedores Locales.

**Cuidado con el caso Rio Tinto.** Dos expertos no pudieron verificar "Cordero Rojo" en la web; es una mina de carbón de
Wyoming que Rio Tinto dejó hace más de una década. Lo que sí está publicado es Rio Tinto Iron Ore (Australia, 2015): uso de
anteojos y guantes −15/−20 % hasta −50 % con expendedoras con tarjeta. Usar el caso del flyer con la aclaración "según
publicación del fabricante" (la landing ya lo hace), pedirle a Stanley un caso de los últimos cinco años, y **no decirle a Rio
Tinto Lithium "ustedes ya lo hicieron"** sin confirmarlo.

### Calificación en la primera llamada (las 10 preguntas están en `expertos/cribmaster_experto_producto.md` §6)

Las tres que deciden si hay visita: cuántas personas retiran por día en ese pañol y cuántas son contratistas (menos de 50 o
todos propios = caso chico); cuánto gastan por mes en guantes, anteojos y protección auditiva y en insertos y abrasivos (si no
lo saben, ese es el argumento); y quién es el dueño del presupuesto (Mantenimiento o SyH sí, Compras solo no). Fabián califica
cada lead en dos días hábiles con una palabra: calificado / no calificado / spam. Sin eso el contrato de medición no cierra.

---

## 3. Paso 0 — Lo que se hace antes de encender (bloqueante)

Sin estos cinco puntos la campaña no se enciende. Son uno o dos días de trabajo y ninguno cuesta pauta.

| # | Qué | Dónde | Detalle |
|---|---|---|---|
| 1 | **Acciones de conversión en Ads** | Cuenta 452-457-1142 | `CribMaster — Solicitud de información` (SUBMIT_LEAD_FORM, recuento Una, ventana 90 días, **principal**, **sin valor** hasta que JEREN dé ticket y margen: no copiar los USD 300 de CIMAT). Secundarias: `CribMaster — WhatsApp clic`, `CribMaster — Llamada clic`, `CribMaster — Formulario iniciado`. Activar conversiones mejoradas vía GTM. |
| 2 | **GTM** (`GTM-T5J4LJMK`, por `tec-harness/src/gtm_api.py`) | Contenedor | Activadores de evento personalizado `cm_form_submit`, `cm_whatsapp_click`, `cm_phone_click`, `cm_form_start`; etiquetas de conversión con el mismo ID `AW-18420339644`; variable "Datos proporcionados por el usuario" leyendo `user_data` **en claro normalizado** (GTM hashea; si se le pasa un hash no matchea). Verificar Conversion Linker en All Pages. La etiqueta dispara con `cm_form_submit`, no con la página de gracias (es `router.push`, sin page load). Publicar y probar con UN envío real desde producción (en localhost GTM no carga). |
| 3 | **Formulario** | `components/cribmaster/lead-form.tsx`, `app/actions/cribmaster-lead.ts` | Agregar `gclid/gbraid/wbraid` a los campos ocultos (copiar de `cimat/lead-form.tsx`) y persistirlos 90 días en localStorage; `user_data` con `datosUsuario(email, telefono, "AR")` en el mismo push de `cm_form_submit`; sumar `gclid`, `gbraid`, `wbraid` y `service_interest` a `ATRIBUCION` para que viajen en el mail del lead. |
| 4 | **Lista de negativas `NEG — CribMaster AR`** | Listas compartidas | Seis familias, lista para pegar, en §5. **No** aplicar `NEG — Universal CIMAT` sin revisarla: son 232 términos de balanceadoras. |
| 5 | **Landing: frases literales y privacidad** | `lib/cribmaster-content.ts` | Google mide la experiencia de página sobre el texto visible; CIMAT pagó CPC al tope con "por debajo del promedio" en 12 de 12. Meter literalmente "máquina expendedora de EPP", "dispensador de EPP", "control de pañol", "control de herramientas", "control de EPP", "lockers para herramientas" en el copy visible (soluciones, qué resuelve). Corregir "No los compartimos con terceros" (hoy falso: SendGrid, Turnstile, Google) por un link a /privacidad. |

Después del encendido, los cambios de landing que no bloquean: campo opcional "Qué querés controlar" (EPP y consumibles /
herramientas y equipos / software y RFID) preseleccionable por `?linea=` desde la URL final de cada grupo; H1 que no excluya
al taller y a la planta ("en el yacimiento, la mina y el taller de mantenimiento", todo sale del flyer); subtítulo del hero
más corto en mobile; subtítulos en español en los tres videos en inglés (`hl=es&cc_load_policy=1`); el video en español en la
página de gracias. Detalle en `expertos/cribmaster_experto_landing_medicion.md` §1.

---

## 4. La campaña de Search

**Una sola campaña.** Con 440 búsquedas no hay volumen para separar marca de producto: la campaña "CIMAT — Marca" hizo 1
impresión en 90 días y está pausada. Se segmenta por grupo de anuncio y se juzga por grupo.

| Parámetro | Valor |
|---|---|
| Nombre | `AR \| Search \| CribMaster — Expendedoras y pañol` |
| Redes | Búsqueda solamente. **Destildar** Display y socios de búsqueda |
| Ubicación | Argentina, opción **Presencia** (no "presencia o interés"). Todo el país: el de compras de Barrick está en CABA aunque la mina esté en San Juan |
| Idiomas | Español e inglés (el grupo técnico necesita inglés) |
| Puja | CPC manual. Nada de Smart Bidding: no va a haber 15 conversiones en 90 días |
| CPC máximo | Por grupo; ninguno arriba de ARS 1.000 |
| Presupuesto | **ARS 2.000/día (USD 1,3) = ARS 60.000/mes (USD 40)**. El gasto real esperado es la mitad. Subir el presupuesto no compra más búsquedas: compra peores búsquedas (CIMAT, textual) |
| URL final | `https://www.jeren.com/cribmaster` en todos los grupos, con `?linea=` por grupo cuando exista el campo |
| Plantilla de seguimiento | `utm_source=google&utm_medium=cpc&utm_campaign=cribmaster_ar&utm_content={adgroupid}&utm_term={keyword}` (el formulario ya lleva los UTM al mail del lead). Verificar etiquetado automático activo (llena `gclid`) |
| Negativas | `NEG — CribMaster AR` aplicada antes de encender |
| Recursos | Sitelinks `Caso Rio Tinto` → `#caso`, `Soluciones` → `#soluciones`, `Videos` → `#video`, `Dónde aplica` → `#aplica`; textos destacados `Instalación y soporte en Argentina`, `Buenos Aires, Río Grande y Ushuaia`, `Se integra a tu ERP`, `Retiro con tarjeta o PIN`; fragmento Modelos: ToolBox, ProStock, ProLock, MultiStore, AccuCab; extensión de llamada (+5411) 4788-0566. **No** poner las cifras de Rio Tinto en el aviso: exigen la aclaración del fabricante y no entra en 90 caracteres |

| Grupo | Qué junta | Búsq./mes | CPC máx. |
|---|---|---|---|
| 1. Expendedoras de EPP | máquina expendedora / dispensador de EPP y guantes, vending industrial | 70 | ARS 900 |
| 2. Técnico en inglés | industrial / tool / PPE / MRO vending, tool crib, tool tracking, tool management | 90 | ARS 900 |
| 3. Pañol y control de herramientas | control / gestión / inventario de pañol y herramientas | ~150 (+110 de prueba) | ARS 1.000 |
| 4. Lockers y gabinetes | lockers para herramientas, lockers industriales, gabinetes inteligentes | 30 | ARS 900 |
| 5. Marca y competencia | cribmaster*, autocrib, supplypro | 50 | ARS 500 |
| 6. Control de EPP | control / gestión de EPP y de su entrega (sin "planilla") | 40 | ARS 700 |

Los topes salen de las pujas de página alta del Planner y del CPC real de CIMAT (ARS 1.054 promedio con tope 1.200 y QS 2–5).

### Keywords por grupo

Convención: `[término]` exacta, `"término"` frase. Volumen del Planner; "0" es "sin datos" (Google oculta lo que está bajo el
umbral; los anuncios igual se sirven ahí: `balanceadora de cardan` daba 30 y en 90 días hizo 101 impresiones). Lección CIMAT:
frase se comporta como amplia; acá, exacta casi siempre.

**Grupo 1 — Expendedoras de EPP**
```
[maquina expendedora de epp] 20 · "maquina expendedora de epp" 20 · [dispensador de epp] 10 · "dispensador de epp" 10
[maquina dispensadora de epp] 10 · [maquinas dispensadoras de epp] 10 · [maquina expendedora de guantes] 10 · "vending industrial" 10
[expendedora de epp] 0 · [vending de epp] 0 · [maquina expendedora industrial] 0 · [maquina expendedora de herramientas] 0 · [expendedora de insumos] 0
```
Fuera: `maquinas expendedoras para empresas` (10, tope ARS 4.136): es café para oficinas.

**Grupo 2 — Técnico en inglés** (anuncios en inglés, landing en español; no se traduce con 90 búsquedas)
```
"industrial vending machine" 10 · "tool vending machine" 10 · [industrial vending] 10 · [vending machine industrial] 10 · [mro vending] 10
[ppe vending machine] 10 · [tool crib] 10 · [tool management system] 10 · [tool management software] 10 · [tool tracking] 10 (solo exacta: tope ARS 22.905)
```

**Grupo 3 — Pañol y control de herramientas**
```
[control de herramientas] 10 · [control de pañol] 10 · [gestion de pañol] 10 · [control de pañol de herramientas] 10 · [control de inventario de herramientas] 10
[software control de herramientas] 10 · [software para control de herramientas] 10 · [sistema de control de herramientas] 10 · [inventario de pañol] 10
[administracion de pañol] 10 · [stock de herramientas] 10 · [control de herramientas en obra] 10 · [control herramientas] 10 · [control de herramientas de trabajo] 10
"inventario de herramientas" 30 · [gestion de herramientas] 110 — PRUEBA con kill switch a 14 días (se mezcla con "herramientas de gestión")
```
Fuera: `pañol de mantenimiento` 20 y `pañol industrial` 10 (muebles y empleo), `gestion de activos industriales` 10 (ERP).

**Grupo 4 — Lockers y gabinetes**
```
[lockers para herramientas] 10 · [lockers industriales] 10 · [gabinetes inteligentes] 10
[lockers inteligentes para herramientas] 0 · [armario inteligente de herramientas] 0 · [gabinete de herramientas con control de acceso] 0
```
Fuera: `lockers inteligentes` 50 y `lockers inteligentes argentina` 20: paquetería y edificios, competencia HIGH. Si aparece en
términos reales con cola industrial, se agrega la cola, no la raíz.

**Grupo 5 — Marca y competencia**
```
"cribmaster" 10 · [cribmaster toolbox] 10 · [cribmaster prostock] 10 · [autocrib] 10 · [supplypro] 10
```
Se puede pujar por `autocrib` y `supplypro`; **no se puede escribir AutoCrib ni SupplyPro en el aviso**. CribMaster sí se nombra
(JEREN es distribuidor autorizado); si Google frena el aviso por marca registrada, se pide la autorización a Stanley Black &
Decker por el formulario de terceros. Vale porque quien googlea "cribmaster" en Argentina ya vio el flyer o el mail de Fabián y
tiene que caer en jeren.com/cribmaster, no en cribmaster.com donde JEREN todavía no figura.

**Grupo 6 — Control de EPP**
```
[control de epp] 10 · [gestion de epp] 10 · [control de entrega de epp] 10 · [gestion de elementos de proteccion personal] 10 · [control de stock de epp] 0
```
Fuera, aunque duela: `entrega de epp` 90, `registro de entrega de epp` 40, `planilla entrega de epp` 110. Son la SRT, no una máquina.

### Lo que ya existe en la cuenta y se reutiliza

- El patrón de conversiones de CIMAT (`SUBMIT_LEAD_FORM` + WhatsApp clic) y el contenedor GTM con sus etiquetas: se copia la
  mecánica, no las acciones.
- La lista `NEG — Universal CIMAT` (232 términos): se revisa y se toma lo genérico (empleo, cursos, "que es", mercadolibre,
  usadas), no lo de balanceadoras.
- Las keywords de CIMAT **no** se tocan: son otra campaña, otro producto. Lo único en común es la cuenta y las lecciones.
- El monitor `jer-monitor-ads` tiene que sumar `cm_form_submit` a su conteo de leads, como hizo con `contact_submit` el 11/09.

---

## 5. Negativas por familia — `NEG — CribMaster AR` (concordancia de frase, lista para pegar)

El daño económico está en `kardex` (tope ARS 8.804), `software de inventario` (ARS 10.638) y `tool tracking` mal cualificado
(ARS 22.905): un clic equivocado son cuatro días de presupuesto.

```
# Vending de consumo
cafe, café, snacks, snack, bebidas, gaseosas, golosinas, comida, alimentos, agua, helados, cigarrillos
preservativos, higienicos, perros, mascotas, negocio, rentable, rentables, franquicia, oficina, oficinas
gimnasio, escuela, colegio, hospital, usada, usadas, segunda mano, mercadolibre, alquiler

# Kardex, planillas y plantillas gratis (Res. 299/11)
kardex, excel, planilla, planillas, plantilla, formato, modelo, ejemplo, ejemplos, pdf, word, gratis, gratuito
gratuita, descargar, resolucion 299, 299 11, srt, ley, constancia, acta, ficha, documento, registro de entrega, peps

# Minería y O&G informativo / empleo
minera argentina, empresas mineras, empresa minera, rio tinto, empleo, trabajo, trabajar, sueldo, cv
busqueda laboral, curso, cursos, capacitacion, que es, que significa, significado, definicion, wikipedia

# Lockers de paquetería, edificios y vestuarios
paqueteria, paquetes, encomiendas, correo, edificio, edificios, consorcio, vestuario, vestuarios, ropa
escolares, melamina, pickup, amazon

# "Herramientas de gestión" (software de gestión, calidad, RRHH, tareas)
herramientas de gestion, herramienta de gestion, herramientas de control, herramienta de control
gestion de tareas, tareas, proyectos, recursos humanos, rrhh, calidad, ishikawa, 7 herramientas
siete herramientas, jira, trello, asana, wrike, sap, bpm, itil, pmo, pmi, prince2, gmao, crm, marketing
ventas, finanzas, gestion del tiempo, administracion del tiempo, administrativo, administrativas, estadistico, presupuesto
open source, software libre, informatico, hardware, control m

# Pañol escolar, náutico y mueblería
que es un pañol, muebles, estanteria, estanterias, carro, carros
```

Tres que **no** van: `precio` (en B2B industrial puede ser compra; se mira en términos reales), `app` (CM Mobile es una app) y
`tiempo` suelto (bloquearía "stock en tiempo real").

---

## 6. Anuncios (adaptables; títulos ≤ 30, descripciones ≤ 90, contados)

Voseo, como la landing. CTA alineado con el botón: **"Solicitar más información"**. Fijar T1 en posición 1 en los seis grupos
para que el nombre del producto siempre aparezca. Rutas visibles: `/cribmaster` + `/expendedoras` (1, 2, 6), `/panol` (3),
`/lockers` (4), `/argentina` (5).

```
G1 Expendedoras de EPP
T1 Expendedoras de EPP CribMaster · T2 Cada retiro con tarjeta o PIN · T3 Soporte de JEREN en Argentina
D1 Expendedoras de EPP y consumibles. Cada retiro queda registrado por persona, área y turno.
D2 Menos derroche y sin faltantes: se repone solo lo que se consume. Contanos tu operación.

G2 Técnico en inglés
T1 CribMaster Industrial Vending · T2 Tool & PPE Vending Machines · T3 Authorized Dealer in Argentina
D1 CribMaster tool and PPE vending, smart lockers and software. Local install and support.
D2 Every issue logged by badge or PIN. Restock only what is used. Ask JEREN for more info.

G3 Pañol y control de herramientas
T1 Pañol bajo control: CribMaster · T2 Registro por persona y turno · T3 Se integra a tu ERP
D1 Expendedoras y lockers que registran cada retiro y devolución. Stock en tiempo real.
D2 No es una planilla: es hardware con software, instalado en tu planta por JEREN.   ← filtra al que busca planilla

G4 Lockers y gabinetes
T1 Lockers para herramientas · T2 Retiro y devolución con PIN · T3 CribMaster, con soporte local
D1 Lockers y gabinetes inteligentes para herramientas de alto valor. Sabés quién retiró qué.
D2 Para el pañol, no para paquetes ni vestuarios. Instalación y soporte de JEREN.

G5 Marca y competencia (sin nombrar AutoCrib ni SupplyPro)
T1 CribMaster en Argentina · T2 Distribuidor autorizado JEREN · T3 ToolBox, ProStock y ProLock
D1 Expendedoras, lockers y software CribMaster. Distribución, instalación y soporte de JEREN.
D2 Marca de Stanley Black & Decker. Relevamos tu operación y te proponemos la configuración.

G6 Control de EPP
T1 Control de EPP por persona · T2 Expendedoras, no planillas · T3 Registro automático de entrega
D1 La entrega de EPP queda registrada sola: tarjeta o PIN, por persona, área y turno.
D2 Expendedoras CribMaster para EPP en mina, yacimiento y taller. Solicitá más información.
```

---

## 7. Presupuesto, expectativa y contrato de medición

### Expectativa realista [estimado, con CIMAT como referencia: CTR 11,4 %, conversión 1,06 %, CPC ARS 1.054]

Cuota de impresiones 40–60 % sobre ~440 búsquedas → 175–265 impresiones/mes; CTR 7–10 % → 12–26 clics/mes; CPC ARS 850–1.000 →
ARS 11.000–26.000/mes; conversión del formulario 2–4 % → 0,25–1 lead/mes.

| Plazo | Impresiones | Clics | Gasto ARS (USD) | Leads de formulario | Calificados |
|---|---|---|---|---|---|
| 30 días | 175–265 | 12–26 | 11.000–26.000 (7–17) | 0–1 | 0 |
| 60 días | 350–530 | 25–52 | 22.000–52.000 (15–35) | 0–2 | 0–1 |
| 90 días | 525–800 | 40–78 | 33.000–78.000 (22–52) | 1–3 | 0–2 |

Costo por lead a 90 días si se cumple el rango: ARS 25.000–75.000 (USD 17–50). CIMAT cerró en ≈ ARS 100.000 por conversión.
**Un mes sin leads con micro-métricas sanas no dispara cambios**: con 12–26 clics mensuales, cero leads en 30 días es el
resultado más probable aunque todo esté bien.

### Contrato

| Cuándo | Qué se mira | Qué dispara qué |
|---|---|---|
| Día 0 | Los cinco puntos del Paso 0 | Sin ellos no se enciende |
| 48 h / 72 h | Conversión de prueba vista en Ads; `gclid` y `utm_*` en el mail de prueba; conversiones mejoradas "Registrando" | Si falta algo, se corrige antes de gastar un peso más |
| Días 1–30, dos veces por semana | Informe de términos de búsqueda | Cada término ajeno → negativa el mismo día. Es el estudio de mercado más barato que hay |
| Día 14 | Términos reales de `[gestion de herramientas]` | > 50 % software de gestión / tareas / RRHH → se pausa la palabra |
| Día 14 | Términos reales del grupo 3 | > 40 % ajenos después de negativas → se reescriben D1/D2, no se pausa |
| Día 14 | Experiencia de página por keyword | "Por debajo del promedio" en ≥ 50 % → más frases literales y `?linea=` por grupo |
| Día 30 | Impresiones totales | < 100 → problema de elegibilidad (bajo volumen, aviso rechazado, idioma), no de demanda; se corrige antes de juzgar |
| Día 30 | Cuota de impresiones grupos 1, 2 y 5 | < 50 % → tope a ARS 1.200 en esos tres grupos. Nunca más presupuesto diario por esto |
| Día 30 | CTR por grupo con ≥ 50 impresiones | < 3 % → se reescriben los avisos del grupo |
| Día 60 (o 100 clics) | Embudo: `cm_form_start`/clics ≥ 8 %, `submit/start` ≥ 40 % | start < 4 % → el pliegue mobile o el H1 no enganchan; submit/start < 25 % → fricción del formulario (leer `cm_form_error` por código) |
| Día 60 | Clics ≥ 40 y `cm_form_start` = 0 | Problema de landing, no de Ads: se arregla el formulario antes de tocar la campaña |
| Día 60 | Leads calificados ≥ 2 | **Escalar** a ARS 3.000/día **solo si** la cuota perdida por presupuesto > 10 %. Si no, no se toca: gastar poco es el resultado esperado |
| Día 90 | Clics ≥ 60 y 0 leads de formulario | **Pausar** grupos 3, 4 y 6 (lo ambiguo). Grupos 1, 2 y 5 quedan como presencia con ARS 1.000/día |
| Día 90 | Clics < 30 con la campaña sana | No es Ads el problema: no hay demanda. **Pausar todo** y dejar el presupuesto a prospección |
| Día 90 | ≥ 1 lead calificado | Seguir igual 90 días más. Recién con 15 conversiones acumuladas se evalúa Smart Bidding; no va a pasar en 2026 |
| Siempre | Gasto acumulado > ARS 90.000 (USD 60) con 0 leads calificados | **Pausar**, sin esperar al día 90 |
| Siempre | Conversiones en Ads vs leads con `gclid` en el mail | Ads < 50 % del mail → revisar Conversion Linker, etiquetado automático; sumar importación offline desde el mail |

**Éxito del plan a 90 días (no de la campaña):** al menos **3 reuniones de relevamiento de pañol** con cuentas de la lista,
vengan de Ads o del mail 1 a 1. Es la métrica que importa; Ads se juzga por su propio contrato de arriba.

**Nunca:** concordancia amplia, Performance Max, Display sin listas, socios de búsqueda, subir presupuesto "porque gastó poco",
agregar Chile/Perú (no hay dato de que JEREN tenga CribMaster para la región).

---

## 8. Lo que Ads no resuelve y qué canal lo resuelve

El comprador de CribMaster (Superintendente de Almacenes de Veladero, Jefe de Base de SLB en Añelo, Gerente HSE de una
operadora) **no escribe "expendedora de EPP" en Google**: compra por demostración en sitio, por recomendación entre pares, por
su distribuidor de EPP y por licitación, en ciclos de 6 a 18 meses con piloto. Google no permite segmentar por empresa y
Customer Match exige listas de más de 1.000 contactos. Ads no va a traer la primera instalación; puede atender a los pocos que
ya saben qué buscan y evitar que `cribmaster` lo encuentre a otro.

| Canal | Para qué | Cómo, con un solo vendedor |
|---|---|---|
| **Mail 1 a 1** | Abrir las 40 cuentas | 150 palabras, una pregunta ("¿cuántas entregas de EPP por día hace tu pañol?"), un solo video (el de español), flyer adjunto, link a la landing con `utm_content` por cuenta. Tres toques en seis semanas. Nada de 700 palabras ni cinco links (uno de los que mandó Fabián era de AutoCrib, un competidor). Reenviar corregido el de PSJ |
| **LinkedIn** | Encontrar el rol en cada cuenta | Sales Navigator: 40 cuentas × 3 roles = 120 perfiles. Un post por semana con un dato. Si hay presupuesto, anuncios por empresa y cargo: es el único pagado que segmenta por cuenta de verdad |
| **Ferias** | Ver 20 cuentas en 3 días | AOG Patagonia 2026 ya pasó (19–22/10). **Arminera 2027: 18–20/05, La Rural.** Expo San Juan Minera (mayo). Un ToolBox funcionando en un stand vale más que la campaña entera |
| **Cámaras** | Credencial y acceso a compras | CAEM (BHP acaba de entrar), IAPG, CEISA (pymes de Añelo), cámaras de proveedores mineros de San Juan, Salta, Catamarca y Jujuy |
| **Registros de proveedores** | Poder cotizar cuando llegue el momento | Empezar hoy con YPF, PAE, Tecpetrol (Exiros), Vista, Barrick, Newmont, Rio Tinto, Vicuña. Tardan 2–4 meses y nadie lo pide hasta que es tarde |
| **El fabricante** | Caso, demo, precio, listado de JEREN | Equipo demostrador en consignación, caso reciente en español, condiciones del software, **publicación de JEREN como distribuidor en cribmaster.com** (la acción de mayor retorno y costo cero) |
| **Orgánico** | Las 700–900 búsquedas/mes de "planilla de entrega de EPP Res. 299/11" | Una página en jeren.com con el modelo descargable y un párrafo sobre cómo la expendedora lo registra sola. Con etiqueta de remarketing. Es contenido, no pauta (sección 9) |

---

## 9. Dónde los expertos no coincidieron y qué se decidió

| Tema | Posiciones | Decisión |
|---|---|---|
| Pagar clics por la audiencia "planilla 299/11" | Mercado: sí, pujas bajas (ARS 300) para construir lista de remarketing. Search y Producto: no, es plantilla gratis; va al orgánico | **No se paga.** Se hace la página orgánica con etiqueta de remarketing y se revisa a los 90 días: si trae ≥ 150 visitantes/mes de SyH y RRHH industriales, se evalúa una campaña chica sobre ella |
| Remarketing en YouTube / Display | Mercado: sí, ARS 1.500–2.500/día con el video en español. Landing/medición: no viable en 2026: los videos no son de JEREN (sin derechos ni canal vinculado no hay campaña de video), y las listas no llegan a 1.000 (YouTube) ni a 100 (Display) antes del mes 3 | **Se crean las listas ya (costo cero) y no se gasta.** Display a visitantes de /cribmaster recién cuando la lista pase de 100 y haya imágenes autorizadas. Video solo con video propio o autorización escrita de Stanley, canal de JEREN vinculado y ≥ 10 leads de Search calificados |
| Presupuesto de Search | Search: ARS 2.000/día en una campaña. Mercado: ARS 3–4k en intención + 300–500 en marca | **ARS 2.000/día, una campaña.** Con 440 búsquedas el gasto real va a ser ARS 11–26k/mes; el techo más alto no compra más búsquedas |
| Siderurgia | Producto: puntaje 4. Mercado: 3, por paradas y suspensiones en 2026 | **Segunda ola**, refinerías y petroquímica antes que siderurgia |
| Automotriz | Es la vertical global más fuerte de CribMaster | **No en 2026** (producción −16,9 %, compras globales, JEREN sin acceso). Revisar 2027 |

---

## 10. Riesgos y supuestos a validar con JEREN antes de gastar

1. **Capacidad real de un vendedor.** Si Fabián no puede dedicar 2 días por semana a 40 cuentas durante 12 meses, bajar la lista a
   15 (Oil & Gas + Rio Tinto Lithium + Vicuña) y dejar Ads solo en marca.
2. **Modelo de reposición y soporte en sitio.** "¿Quién me repone?" es la objeción que gana todas las reuniones. ¿Hay técnico en
   Neuquén o San Juan? ¿SLA por escrito? ¿Un distribuidor de EPP aliado recarga?
3. **Precio, plazo de importación y software.** Lista de precios para Argentina, plazo puerta a puerta, licencia perpetua o
   suscripción. Sin esto no hay valor de conversión ni rango en la landing.
4. **El caso Rio Tinto** (ver sección 2): pedir a Stanley un caso de los últimos cinco años.
5. **Que el fabricante publique a JEREN** en cribmaster.com y confirme exclusividad para Argentina.
6. **Equipo demostrador** en el país. Sin eso la segunda reunión no existe.
7. **Autorización escrita de Stanley** para usar videos, imágenes y caso en pauta; canal de YouTube de JEREN; un video propio de
   Fabián con celular (60–90 s) y fotos de ProStock, ProLock, AccuCab y el software (hoy hay una sola foto).
8. **Sectores:** confirmar con Fabián que no quiere abrir automotriz y siderurgia ahora. Con un vendedor, abrirlo todo es no cerrar nada.
9. **WhatsApp:** hoy es el personal de Fabián con promesa de "día hábil siguiente". Confirmar que lo sostiene o poner un número de
   WhatsApp Business de JEREN.

---

## 11. Orden de ejecución

| Semana | Qué | Quién |
|---|---|---|
| 1 | Reenviar corregido el mail a PSJ. Paso 0 completo (conversiones, GTM, gclid y user_data en el formulario, lista de negativas, frases y privacidad en la landing). Crear la campaña **en pausa** con los seis grupos, keywords, anuncios y recursos. Crear las listas de remarketing. | QUBIK |
| 1 | Validar los puntos 1, 2, 3 y 8 de la sección 10. Pedir a Stanley: caso reciente, demostrador, autorización de material, publicación en cribmaster.com. | JEREN (Fabián) |
| 2 | Encender la campaña con el OK de JEREN. Arrancar los mails 1 a 1 a las 15 primeras cuentas (TotalEnergies TDF, Rio Tinto Lithium, Vicuña, PSJ, Vista, Tecpetrol, Halliburton, SLB, Veladero, Cerro Negro, Exar, Eramet, Finning, PAE Cerro Dragón, CGC). Alta en registros de proveedores. | JEREN + QUBIK |
| 2–4 | Términos de búsqueda dos veces por semana; negativas el mismo día. Página orgánica "planilla de entrega de EPP Res. 299/11". | QUBIK |
| 6 | Primer corte: día 30 del contrato + estado de los 15 mails (respuestas, reuniones). Segundo lote de 15 cuentas. | ambos |
| 13 | Corte de 90 días: contrato de Ads + reuniones de relevamiento. Decisión: seguir, escalar o dejar solo marca. | ambos |
