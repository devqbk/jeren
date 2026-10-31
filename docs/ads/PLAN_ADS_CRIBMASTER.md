# Plan de Google Ads — CribMaster / JEREN (Argentina)

**Versión 1.1 — 31/10/2026.** Fundido de cuatro dictámenes independientes sobre una misma base de hechos generada por API
el 31/10 (Keyword Planner Argentina, cuenta de Google Ads 452-457-1142, Search Console y código de la landing), más una
lectura de comprensión por un revisor sin contexto (`expertos/cribmaster_lectura_comprension.md`) que motivó esta versión.

| Documento | Archivo |
|---|---|
| Base de hechos (datos crudos, sin opinión) | `expertos/cribmaster_datos.md` |
| Demanda y Search (keywords, negativas, anuncios, presupuesto, contrato) | `expertos/cribmaster_experto_search.md` |
| Mercado industrial argentino (cómo se compra, segmentos, 36 cuentas nombradas, competencia) | `expertos/cribmaster_experto_mercado.md` |
| Producto (dónde CribMaster entrega más valor, ROI, dónde no empujarlo, calificación) | `expertos/cribmaster_experto_producto.md` |
| Landing, medición y video | `expertos/cribmaster_experto_landing_medicion.md` |

El documento tiene tres partes. **Parte A** es para JEREN: qué se decide y qué hace cada uno, sin jerga. **Parte B** es el
plan de Google Ads propiamente dicho. **Anexo C** es el detalle técnico para QUBIK (keywords, negativas, anuncios, medición).
Cuenta en pesos; referencia 1.500 ARS por dólar. Lo que no tiene fuente va marcado **[estimado]**.

### Glosario (lo que aparece sin explicar más abajo)

- **CribMaster**: marca de Stanley Black & Decker de expendedoras industriales, lockers y gabinetes inteligentes con software,
  que entregan insumos, elementos de protección personal y herramientas a un operario identificado con tarjeta o PIN y
  registran cada retiro. **JEREN SRL** es su distribuidor autorizado en Argentina. **Fabián Naveira** es el vendedor de JEREN
  que atiende los leads. **QUBIK** es quien opera la cuenta de Google Ads, el sitio jeren.com y este plan.
- **CIMAT**: la otra marca que JEREN promociona con Google Ads (balanceadoras industriales) desde agosto de 2026; es el
  precedente del que salen las lecciones de este plan.
- **EPP**: elementos de protección personal (guantes, anteojos, protección auditiva). **MRO**: consumibles de mantenimiento,
  reparación y operación. **HSE / SyH**: seguridad, higiene y medio ambiente. **EPCM**: la ingeniería/constructora que levanta
  una mina. **RIGI**: régimen de incentivos a grandes inversiones. **Res. SRT 299/11**: la resolución que obliga a registrar
  la entrega de EPP a cada trabajador.
- **Landing**: la página https://www.jeren.com/cribmaster, con formulario de contacto. **Lead**: una persona que completó el
  formulario, escribió por WhatsApp o llamó. **Lead calificado**: lead de una minera, operadora o contratista de petróleo y
  gas, taller pesado o planta industrial, con cargo de compras, HSE, mantenimiento o pañol; lo define Fabián en dos días hábiles.
- **Keyword**: término de búsqueda por el que se paga. **Negativa**: término por el que NO se quiere aparecer. **CPC**: lo que
  cuesta un clic. **CTR**: clics sobre impresiones. **Cuota de impresiones**: qué porcentaje de las búsquedas elegibles mostró
  el anuncio. **Conversión**: un lead registrado en Google Ads. **GTM / gclid / UTM**: la plomería de medición que une un clic
  pago con el lead que llega por mail (detalle en el Anexo C).

---

# Parte A — Para JEREN

## A1. El veredicto en cinco líneas

1. **CribMaster no se busca en Google en Argentina.** Todo lo pujable con intención de compra suma **~440 búsquedas por mes**
   (`maquina expendedora de epp` 20, `dispensador de epp` 10, `vending industrial` 10, `cribmaster` 10, `autocrib` 10,
   `control de pañol` 10…). De esas, ~180 son "limpias": no se confunden con otra cosa. Las otras ~260 mezclan al que quiere una
   máquina con el que quiere una planilla. Es la misma estructura que balanceadoras: CIMAT hizo 2 conversiones en 90 días
   con ARS 198.183 en seis países.
2. **El único volumen real es el dolor, no la máquina:** entre 700 y 900 búsquedas por mes de "planilla / registro /
   constancia de entrega de EPP Res. 299/11" (una docena de variantes, listadas en la base de hechos). Es gente de Seguridad e
   Higiene y RRHH buscando el formulario gratis. Es el comprador correcto con la billetera equivocada: se atiende con una
   página de contenido, no con clics pagos.
3. **Google Ads acompaña, no lidera.** Una sola campaña de búsqueda, chica y exacta: **ARS 2.000 por día de techo (USD 40 por
   mes)**, gasto real esperado ARS 11.000–26.000 por mes. Expectativa honesta a 90 días: 40–78 clics, 1–3 leads de formulario,
   0–2 calificados.
4. **El pipeline sale de prospección directa** sobre 36 cuentas con nombre (tope 40 vivas) en dos segmentos donde JEREN ya
   tiene credencial, petróleo y gas no convencional y minería en operación, más una siembra en los proyectos de cobre que
   arrancan obra en 2027. Es lo que Fabián empezó el 30/10 con el mail a PSJ Cobre Mendocino, que salió a un dominio mal
   escrito (`.cpm`) y hay que reenviar.
5. **Antes de encender hay un bloqueante técnico:** hoy ningún lead de CribMaster llega a Google Ads como conversión (la
   medición no está conectada). Lo resuelve QUBIK en la semana 1 y no cuesta pauta. Sin eso la campaña no se enciende.

## A2. Qué hace cada uno y cuándo se decide

| Semana | JEREN (Fabián) | QUBIK |
|---|---|---|
| 1 | Reenviar corregido el mail a PSJ (QUBIK ya dejó el borrador en Gmail). Responder los cuatro supuestos que bloquean el encendido (A6). Pedir a Stanley: caso reciente, equipo demostrador, autorización escrita para usar videos e imágenes, publicación de JEREN como distribuidor en cribmaster.com. | Conectar la medición, cargar las negativas, retocar la landing, crear la campaña **en pausa** y las listas de remarketing (Anexo C). |
| 2 | Dar el OK para encender. Arrancar los mails 1 a 1 a las 15 primeras cuentas (A4). Iniciar el alta en registros de proveedores. | Encender la campaña. Mirar los términos de búsqueda dos veces por semana. Página de contenido "planilla de entrega de EPP". |
| 6 | Estado de los 15 mails: respuestas y reuniones. Segundo lote de 15 cuentas. | Corte de 30 días del contrato (B3). |
| 13 | Reuniones de relevamiento logradas (meta: 3). | Corte de 90 días. Decisión conjunta: seguir, escalar o dejar solo marca. |

**Gasto máximo de pauta en los 90 días: ARS 90.000 (USD 60).** Si se llega a esa cifra sin un lead calificado, la campaña
pasa a "solo marca" sin esperar al día 90 (B3).

**Éxito del plan a 90 días:** al menos **3 reuniones de relevamiento de pañol** con cuentas de la lista, vengan de Ads o del
mail 1 a 1. Es la métrica que importa; Ads se juzga aparte por su contrato (B3).

## A3. Segmento de industrias a atacar

Cruce del experto en producto (dónde el producto entrega más valor) y del de mercado (dónde JEREN puede entrar). El puntaje
mide valor del producto × probabilidad de que la cuenta lo compre y lo use bien, no tamaño de mercado.

| Industria | Valor del producto (1–5) | Acceso de JEREN | Decisión |
|---|---|---|---|
| **Petróleo y gas no convencional**: operadoras y bases de servicios de Vaca Muerta; Cuenca Austral (Tierra del Fuego) | 5 — bases 24×7 llenas de contratistas; EPP, consumibles de taller y herramientas de alto valor en un mismo pañol | Alto — 40 años en yacimientos, sedes en Río Grande y Ushuaia | **Atacar ahora** |
| **Minería en operación** (oro, plata, litio) | 5 — miles de personas, mayoría contratistas, turnos 14×14, pañoles satélite a horas de la base; el caso del fabricante es de Rio Tinto | Alto — identidad minera de JEREN | **Atacar ahora** |
| **Cobre en construcción y sus EPCM** (Vicuña/Josemaría, PSJ Cobre Mendocino, Los Azules, Gualcamayo Carbonatos Profundos) | 5 — el arranque de obra es el pico de consumo de EPP de toda la vida del proyecto; se instala en obra y se hereda a la operación | Medio — Fabián ya escribió a PSJ | **Sembrar ahora, cerrar en 2027** |
| **Proceso continuo con paradas de planta**: refinerías, petroquímica, aluminio (YPF La Plata y Luján de Cuyo, Bahía Blanca, Aluar); siderurgia (Ternium, Acindar, Tenaris Campana) | 4 — paradas con cientos de contratistas, abrasivos y consumibles de soldadura (−20 a −40 % documentado), SAP, ISO 45001 | Bajo | **Segunda ola**: refinerías y petroquímica primero; siderurgia está en paradas y suspensiones en 2026 |
| **Mantenimiento aeronáutico y aeroespacial** (FAdeA, Aerolíneas Hangar 5, INVAP, helicópteros) | 4 — herramienta calibrada y control de objetos extraños por norma; Boeing es la referencia | Bajo | **Venta directa, 4–6 puertas, sin pauta** |
| **Distribuidores de EPP y MRO** (Würth Argentina, regionales de Neuquén, San Juan, Salta) | 4 como canal — ponen la máquina en el cliente y resuelven la objeción "¿quién me repone?" | Medio | **Aliado, no cliente: explorar uno por región** |
| Servicios mineros (Finning, Epiroc, Sandvik, Komatsu) | 3 | Medio | Cuentas dentro de los dos segmentos de arriba, no segmento aparte |
| Automotriz y autopartes | 2 hoy — producción −16,9 % en 2026 y recorte de turnos; compras globales; sindicato | Nulo | **No en 2026**, revisar en 2027 |
| Alimentos, energía, pymes metalmecánicas, construcción civil, astilleros, salud | 1–3 | Bajo o nulo | **No** |

**Por qué estos tres primero.** Son los únicos donde se dan a la vez las condiciones que hacen que la máquina se pague rápido
(80–100 personas o más por pañol, alta proporción de contratistas, tres turnos o 24×7, sitios remotos, trazabilidad exigida
por la operadora o por la Res. 299/11, SAP) y donde JEREN puede sentarse en la mesa. Y son el foco del flyer: no hay que
cambiar material.

**Regla de corte [estimado]:** un punto de uso tiene que controlar **al menos USD 100.000 por año** de EPP y consumibles para
pagar una máquina (supuesto USD 20.000–40.000 instalada, a validar con Stanley) en unos 12 meses. Debajo de USD 40.000 por año
no hay caso. Y si el único interesado es Compras (sin Mantenimiento ni Seguridad e Higiene en la mesa) tampoco: la máquina
compite con el precio unitario del guante y pierde.

## A4. Cuentas objetivo

La lista completa con sitio, motivo y rol a contactar está en `expertos/cribmaster_experto_mercado.md` §3. Con un vendedor,
no más de 40 cuentas vivas, tres toques por cuenta por trimestre, pidiendo una sola cosa: 45 minutos para relevar el pañol.

- **Petróleo y gas (15):** YPF (Loma Campana, base Añelo), Vista, Tecpetrol (Fortín de Piedra; compras por Exiros),
  Pluspetrol, Pan American Energy (Vaca Muerta y Cerro Dragón), Shell, Pampa Energía, **TotalEnergies en Tierra del Fuego
  (primer piloto natural: JEREN tiene oficina en Río Grande)**, CGC, SLB, Halliburton (recortando costos a la fuerza),
  Tenaris (Campana y servicios), Weatherford / Baker Hughes / NOV (lockers y RFID para herramientas calibradas), San Antonio /
  Calfrac / Pecom / AESA, Nabors / H&P. Roles: Jefe de Almacenes o Materiales de base, Abastecimiento, Gerente HSE.
- **Minería en operación (15):** Rio Tinto Lithium (Fénix y Sal de Vida en Catamarca, Olaroz en Jujuy), Barrick/Shandong
  (Veladero), Newmont (Cerro Negro, subterránea), AngloGold (Cerro Vanguardia), Fortuna (Lindero), Eris (Gualcamayo), Exar
  (Cauchari-Olaroz), Eramet (Centenario-Ratones), Ganfeng (Mariana), POSCO (Sal de Oro), Zijin (Tres Quebradas), Pan American
  Silver, Patagonia Gold (Calcatreu), Finning / Epiroc / Sandvik (talleres). Roles: Superintendente de Almacenes y Logística,
  Supply Chain, Superintendente HSE, Gerente de Mantenimiento Mina.
- **Cobre en construcción (6):** Vicuña Corp (Josemaría, obra en el primer trimestre de 2027, campamento ya adjudicado), PSJ
  Cobre Mendocino (RIGI aprobado el 28/05/2026), McEwen (Los Azules, un toque anual), el contratista del campamento de
  Vicuña, EPCM y constructoras mineras (Techint I&C, Milicic, Sacde, Panedile; Ausenco, Fluor, Hatch). Roles: Gerente de
  Abastecimiento del Proyecto, Gerente de Construcción, Jefe HSE de obra, Desarrollo de Proveedores Locales.

**Las 15 primeras (semana 2):** TotalEnergies TDF, Rio Tinto Lithium, Vicuña, PSJ, Vista, Tecpetrol, Halliburton, SLB,
Veladero, Cerro Negro, Exar, Eramet, Finning, PAE Cerro Dragón, CGC.

**Cuidado con el caso Rio Tinto del flyer.** Dos expertos no pudieron verificar "Cordero Rojo" en la web; es una mina de carbón
de Wyoming que Rio Tinto dejó hace más de una década. Lo que sí está publicado es Rio Tinto Iron Ore (Australia, 2015): uso de
anteojos y guantes −15/−20 % hasta −50 % con expendedoras con tarjeta. Usar el caso del flyer con la aclaración "según
publicación del fabricante" (la landing ya lo hace), pedirle a Stanley un caso de los últimos cinco años, y **no decirle a Rio
Tinto Lithium "ustedes ya lo hicieron"** sin confirmarlo.

## A5. Cómo califica Fabián un lead en la primera llamada

Las diez preguntas están en `expertos/cribmaster_experto_producto.md` §6. Las tres que deciden si hay visita:

1. ¿Cuántas personas retiran EPP o consumibles por día en ese pañol y cuántas son contratistas? (Menos de 50, o todos
   propios, es caso chico.)
2. ¿Cuánto gastan por mes en guantes, anteojos y protección auditiva, y en insertos y abrasivos? (Si no lo saben, ese es el
   argumento.)
3. ¿Quién es el dueño del presupuesto: Mantenimiento, Seguridad e Higiene o Compras? (Compras solo, no hay caso.)

Fabián califica cada lead en dos días hábiles con una palabra: calificado / no calificado / spam. Sin ese dato el contrato de
medición de Ads no se puede cerrar.

## A6. Supuestos a validar con JEREN

**Bloquean el encendido** (si alguno da mal, la campaña queda en pausa y se decide de nuevo):

1. **Capacidad real de un vendedor.** Si Fabián no puede dedicar 2 días por semana a 40 cuentas durante 12 meses, se baja la
   lista a 15 (petróleo y gas + Rio Tinto Lithium + Vicuña) y Ads queda solo en marca.
2. **Modelo de reposición y soporte en sitio.** "¿Quién me repone?" es la objeción que gana todas las reuniones. ¿Hay técnico
   en Neuquén o San Juan? ¿Hay un compromiso de servicio por escrito? ¿Un distribuidor de EPP aliado recarga? Sin respuesta,
   no tiene sentido traer gente a la landing.
3. **Precio, plazo de importación y software.** Lista de precios para Argentina, plazo puerta a puerta, licencia perpetua o
   suscripción. Sin esto no hay valor de conversión ni rango en la landing, y la primera reunión no puede avanzar.
4. **Sectores.** Confirmar que JEREN no quiere abrir automotriz ni siderurgia ahora. Con un vendedor, abrirlo todo es no cerrar nada.

**No bloquean, pero mejoran el resultado:**

5. Un caso de Rio Tinto de los últimos cinco años (A4).
6. Que Stanley publique a JEREN en cribmaster.com y confirme la exclusividad para Argentina. Es la acción de mayor retorno y
   costo cero del plan.
7. Equipo demostrador en el país. Sin eso la segunda reunión no existe.
8. Autorización escrita de Stanley para usar videos, imágenes y caso en pauta; canal de YouTube de JEREN; un video propio de
   Fabián con celular (60–90 segundos) y fotos de ProStock, ProLock, AccuCab y el software (hoy hay una sola foto).
9. WhatsApp: hoy es el personal de Fabián con promesa de "día hábil siguiente". Confirmar que lo sostiene o poner un número
   de WhatsApp Business de JEREN.

## A7. Lo que Google Ads no resuelve y qué canal lo resuelve

El comprador de CribMaster (Superintendente de Almacenes de Veladero, Jefe de Base de SLB en Añelo, Gerente HSE de una
operadora) no escribe "expendedora de EPP" en Google: compra por demostración en sitio, por recomendación entre pares, por su
distribuidor de EPP y por licitación, en ciclos de 6 a 18 meses con piloto. Google no permite segmentar por empresa. Ads no va
a traer la primera instalación; puede atender a los pocos que ya saben qué buscan y evitar que quien googlea "cribmaster"
caiga en el sitio del fabricante, donde JEREN todavía no figura.

| Canal | Para qué | Cómo, con un solo vendedor |
|---|---|---|
| **Mail 1 a 1** | Abrir las cuentas de A4 | 150 palabras, una pregunta ("¿cuántas entregas de EPP por día hace tu pañol?"), un solo video (el de español), flyer adjunto, link a la landing con un código por cuenta para saber de qué mail vino cada consulta. Tres toques en seis semanas. Nada de 700 palabras ni cinco links (uno de los que se mandaron el 30/10 era de AutoCrib, un competidor) |
| **LinkedIn** | Encontrar el rol en cada cuenta | Sales Navigator: 40 cuentas × 3 roles = 120 perfiles. Un post por semana con un dato. Si hay presupuesto, anuncios por empresa y cargo: es el único pagado que segmenta por cuenta de verdad |
| **Ferias** | Ver 20 cuentas en 3 días | AOG Patagonia 2026 ya pasó (19–22/10). **Arminera 2027: 18–20 de mayo, La Rural.** Expo San Juan Minera (mayo). Un ToolBox funcionando en un stand vale más que la campaña entera |
| **Cámaras** | Credencial y acceso a compras | CAEM (BHP acaba de entrar), IAPG, CEISA (pymes de Añelo), cámaras de proveedores mineros de San Juan, Salta, Catamarca y Jujuy |
| **Registros de proveedores** | Poder cotizar cuando llegue el momento | Empezar en la semana 2 con YPF, PAE, Tecpetrol (Exiros), Vista, Barrick, Newmont, Rio Tinto, Vicuña. Tardan 2–4 meses y nadie lo pide hasta que es tarde |
| **El fabricante** | Caso, demo, precio, listado de JEREN | Los pedidos 5 a 8 de A6 |
| **Contenido en jeren.com** | Las 700–900 búsquedas mensuales de "planilla de entrega de EPP Res. 299/11" | Una página con el modelo descargable y un párrafo sobre cómo la expendedora lo registra sola, con etiqueta de remarketing. Es contenido, no pauta (B4) |

---

# Parte B — El plan de Google Ads

## B1. La campaña

**Estado al 31/10/2026, 09:40: creada EN PAUSA por API**, id `24412077264`, con todo lo de abajo: 6 grupos con sus
pujas, 55 keywords (48 exactas, 7 en frase), 6 anuncios adaptables (en revisión de políticas), lista `NEG — CribMaster AR`
con 133 negativas aplicada, Argentina con Presencia, español e inglés, solo Búsqueda, sufijo de URL con UTM, 4 sitelinks,
4 textos destacados, fragmento de modelos y extensión de llamada. Los dos retoques de landing del Paso 0 (frases literales y
privacidad) están en producción (commit `b3b5ffb`). **Para encender falta**: el OK de JEREN sobre los cuatro supuestos
bloqueantes (A6) y la revisión de políticas de los anuncios (si Google frena "CribMaster" por marca, se pide la autorización a
Stanley).

**Una sola campaña de búsqueda.** Con 440 búsquedas no hay volumen para separar marca de producto: la campaña "CIMAT — Marca"
hizo 1 impresión en 90 días y está pausada. Se segmenta por grupo de anuncio y se juzga por grupo.

| Parámetro | Valor |
|---|---|
| Nombre | `AR \| Search \| CribMaster — Expendedoras y pañol` |
| Redes | Búsqueda solamente. Sin Display ni socios de búsqueda |
| Ubicación | Argentina, opción "Presencia". Todo el país: el de compras de Barrick está en CABA aunque la mina esté en San Juan |
| Idiomas | Español e inglés (el grupo técnico necesita inglés) |
| Puja | CPC manual. Sin pujas automáticas: no va a haber las 15 conversiones en 90 días que necesitan para aprender |
| CPC máximo | Por grupo; ninguno arriba de ARS 1.000 |
| Presupuesto | **ARS 2.000 por día (USD 1,3) = ARS 60.000 por mes (USD 40)**. El gasto real esperado es la mitad. Subir el presupuesto no compra más búsquedas: compra peores búsquedas (CIMAT, textual) |
| Página de destino | https://www.jeren.com/cribmaster en todos los grupos |
| Negativas | Lista `NEG — CribMaster AR` aplicada antes de encender (Anexo C3) |

| Grupo | Qué junta | Búsquedas/mes | CPC máximo |
|---|---|---|---|
| 1. Expendedoras de EPP | máquina expendedora / dispensador de EPP y guantes, vending industrial | 70 | ARS 900 |
| 2. Técnico en inglés | industrial / tool / PPE / MRO vending, tool crib, tool tracking, tool management | 90 | ARS 900 |
| 3. Pañol y control de herramientas | control / gestión / inventario de pañol y herramientas | ~150 (+110 de prueba) | ARS 1.000 |
| 4. Lockers y gabinetes | lockers para herramientas, lockers industriales, gabinetes inteligentes | 30 | ARS 900 |
| 5. Marca y competencia | cribmaster y sus modelos, autocrib, supplypro | 50 | ARS 500 |
| 6. Control de EPP | control / gestión de EPP y de su entrega (sin "planilla") | 40 | ARS 700 |

Suma ~430 de las ~440 búsquedas comprables; el resto son términos sueltos de 10 que entran o salen según lo que muestren los
términos de búsqueda reales. Los topes salen de las pujas de página alta del Planner y del CPC real de CIMAT (ARS 1.054
promedio con tope 1.200). Keywords, negativas, anuncios y recursos: Anexo C.

## B2. Presupuesto y expectativa realista

Todo **[estimado]**, con CIMAT como única referencia real en la misma cuenta (CTR 11,4 %, conversión 1,06 %, CPC ARS 1.054):

- Cuota de impresiones al arranque 40–60 % sobre ~440 búsquedas → 175–265 impresiones por mes.
- CTR 7–10 % → 12–26 clics por mes. CPC ARS 850–1.000 → ARS 11.000–26.000 por mes.
- Conversión del formulario 2–4 %, el doble de CIMAT. Por qué se asume más: CIMAT corría en seis países con una landing que
  Google calificó "por debajo del promedio" en todas las keywords; CribMaster sale a un solo país, con el formulario en el primer
  pliegue y los retoques del Anexo C4. Si se cumple solo el 1 % de CIMAT, la tabla queda en su piso: 0–1 lead a 90 días.

| Plazo | Impresiones | Clics | Gasto ARS (USD) | Leads de formulario | Calificados |
|---|---|---|---|---|---|
| 30 días | 175–265 | 12–26 | 11.000–26.000 (7–17) | 0–1 | 0 |
| 60 días | 350–530 | 25–52 | 22.000–52.000 (15–35) | 0–2 | 0–1 |
| 90 días | 525–800 | 40–78 | 33.000–78.000 (22–52) | 1–3 | 0–2 |

Costo por lead de formulario a 90 días si se cumple el rango: **ARS 11.000–78.000 (USD 7–52)**, de 33.000 ÷ 3 leads en el
mejor caso a 78.000 ÷ 1 en el peor. CIMAT cerró en ≈ ARS 100.000 por conversión.

**Un mes sin leads con micro-métricas sanas no dispara cambios**: con 12–26 clics mensuales, cero leads en 30 días es el
resultado más probable aunque todo esté bien.

## B3. Contrato de medición

Dos estados de repliegue, definidos una sola vez:

- **Presencia**: quedan los grupos 1, 2 y 5 (lo limpio) con ARS 1.000 por día; se pausan 3, 4 y 6 (lo ambiguo).
- **Solo marca**: queda el grupo 5 con ARS 500 por día; el resto pausado. Cuesta ARS 15.000 por mes como máximo y evita que
  quien googlea "cribmaster" caiga en otro lado.

| Cuándo | Qué se mira | Qué dispara qué |
|---|---|---|
| Día 0 | Los cinco puntos del Anexo C1 | Sin ellos no se enciende |
| 48 h y 72 h | Conversión de prueba vista en Ads; código de clic y de campaña presentes en el mail de prueba | Si falta algo, se corrige antes de gastar un peso más |
| Días 1–30, dos veces por semana | Informe de términos de búsqueda reales | Cada término ajeno pasa a negativa el mismo día |
| Día 14 | Términos reales de `[gestion de herramientas]` (grupo 3) | Más de la mitad son software de gestión / tareas / RRHH → se pausa esa keyword |
| Día 14 | Términos reales del grupo 3 completo | Más del 40 % ajenos después de las negativas → se reescriben los avisos del grupo, no se pausa |
| Día 14 | Experiencia de página por keyword (lo que Google informa) | "Por debajo del promedio" en la mitad o más → más frases literales en la landing (Anexo C4) |
| Día 30 | Impresiones totales | Menos de 100 → problema de elegibilidad (bajo volumen, aviso rechazado, idioma), no de demanda; se corrige antes de juzgar |
| Día 30 | Cuota de impresiones de los grupos 1, 2 y 5 | Menos de 50 % → tope de CPC a ARS 1.200 en esos tres grupos. Nunca más presupuesto diario por esto |
| Día 30 | CTR por grupo con 50 impresiones o más | Menos de 3 % → se reescriben los avisos del grupo |
| Día 60 o 100 clics | Embudo del formulario: inicios sobre clics ≥ 8 %, envíos sobre inicios ≥ 40 % | Inicios < 4 % → el primer pliegue o el título no enganchan; envíos/inicios < 25 % → fricción del formulario (se leen los errores por código) |
| Día 60 | Clics ≥ 40 y nadie empezó el formulario | Problema de landing, no de Ads: se arregla el formulario antes de tocar la campaña |
| Día 60 | 2 o más leads calificados | **Escalar** a ARS 3.000 por día **solo si** se pierde más del 10 % de cuota por presupuesto. Si no, no se toca: gastar poco es el resultado esperado |
| Día 90 | 60 clics o más y 0 leads de formulario | → **Presencia** |
| Día 90 | 1–3 leads de formulario y 0 calificados (el escenario más probable según B2) | → **Presencia** 30 días más con las keywords de esos leads en negativas si eran de otro rubro; a los 120 días sin calificados → **Solo marca** |
| Día 90 | Menos de 30 clics con la campaña sana | No es Ads el problema: no hay demanda → **Solo marca** y el presupuesto va a prospección |
| Día 90 | 1 o más leads calificados | Seguir igual 90 días más. Recién con 15 conversiones acumuladas se evalúan pujas automáticas; no va a pasar en 2026 |
| Siempre | Gasto acumulado mayor a ARS 90.000 (USD 60) con 0 leads calificados | → **Solo marca**, sin esperar al día 90 |
| Siempre | Conversiones en Ads contra leads con código de clic en el mail | Ads registra menos de la mitad → revisar la plomería (Anexo C1) y cargar a mano las que faltan |

**Nunca:** concordancia amplia, Performance Max, Display sin listas, socios de búsqueda, subir presupuesto "porque gastó poco",
agregar Chile o Perú (no hay dato de que JEREN tenga CribMaster para la región).

## B4. Dónde los expertos no coincidieron y qué se decidió

| Tema | Posiciones | Decisión |
|---|---|---|
| Pagar clics por la audiencia "planilla 299/11" | Mercado: sí, pujas bajas (ARS 300) para construir una lista de remarketing. Search y Producto: no, es plantilla gratis; va al contenido orgánico | **No se paga.** Se hace la página de contenido con etiqueta de remarketing y se revisa a los 90 días: si trae 150 visitantes por mes o más de SyH y RRHH industriales, se evalúa una campaña chica sobre ella |
| Remarketing en YouTube y Display | Mercado: sí, ARS 1.500–2.500 por día con el video en español. Landing/medición: no viable en 2026: los videos no son de JEREN (sin derechos ni canal vinculado no hay campaña de video) y las listas no llegan a los mínimos de Google (1.000 personas para YouTube, 100 para Display) antes del mes 3 | **Se crean las listas ya (costo cero) y no se gasta.** Display a visitantes de la landing recién cuando la lista pase de 100 y haya imágenes autorizadas. Video solo con video propio o autorización escrita de Stanley, canal de JEREN vinculado y 10 o más leads de búsqueda calificados |
| Presupuesto de búsqueda | Search: ARS 2.000 por día en una campaña. Mercado: ARS 3.000–4.000 en intención más 300–500 en marca | **ARS 2.000 por día, una campaña.** Con 440 búsquedas el gasto real va a ser ARS 11.000–26.000 por mes; un techo más alto no compra más búsquedas |
| Siderurgia | Producto: puntaje 4. Mercado: 3, por paradas y suspensiones en 2026 | **Segunda ola**, refinerías y petroquímica antes que siderurgia |
| Automotriz | Es la vertical global más fuerte de CribMaster | **No en 2026** (producción −16,9 %, compras globales, JEREN sin acceso). Revisar en 2027 |

---

# Anexo C — Detalle técnico (para QUBIK)

## C1. Paso 0: lo que se hace antes de encender (bloqueante)

**Estado al 31/10/2026, 09:10.** Puntos 1, 2 y 3 hechos y verificados con un envío real desde producción
(lead "PRUEBA QUBIK (ignorar)", gclid `TESTQUBIK20261031`): la etiqueta principal disparó en `cm_form_submit` con el
email para conversiones mejoradas, y la de formulario iniciado en `cm_form_start`. Acciones creadas en Ads:
`CribMaster — Solicitud de información` (id 7884071255, etiqueta `0hSgCNfCta8dELynwM9E`, principal),
`WhatsApp clic` (7884165816, `VKPpCLilu68dELynwM9E`), `Llamada clic` (7884165819, `ejrMCLulu68dELynwM9E`),
`Formulario iniciado` (7884165822, `9wbMCL6lu68dELynwM9E`). GTM: activadores 19–22 y etiquetas 23–26, publicadas en
las versiones 6 y 7 del contenedor. Código: commit `8d1ee40` (gclid/gbraid/wbraid persistidos 90 días y en el mail
del lead; `user_data` en el push de `cm_form_submit`). Faltan los puntos 4 y 5, que van con la creación de la campaña.
Pendiente aparte: sumar `cm_form_submit` al conteo de leads de `jer-monitor-ads`.

| # | Qué | Dónde | Detalle |
|---|---|---|---|
| 1 | **Acciones de conversión en Ads** | Cuenta 452-457-1142 | `CribMaster — Solicitud de información` (SUBMIT_LEAD_FORM, recuento Una, ventana 90 días, **principal**, **sin valor** hasta que JEREN dé ticket y margen: no copiar los USD 300 de CIMAT). Secundarias: `CribMaster — WhatsApp clic`, `CribMaster — Llamada clic`, `CribMaster — Formulario iniciado`. Activar conversiones mejoradas vía GTM |
| 2 | **GTM** (`GTM-T5J4LJMK`, por `tec-harness/src/gtm_api.py`) | Contenedor | Activadores de evento personalizado `cm_form_submit`, `cm_whatsapp_click`, `cm_phone_click`, `cm_form_start`; etiquetas de conversión con el ID `AW-18420339644`; variable "Datos proporcionados por el usuario" leyendo `user_data` **en claro normalizado** (GTM hashea; si recibe un hash no matchea). Verificar Conversion Linker en All Pages. La etiqueta dispara con `cm_form_submit`, no con la página de gracias (es `router.push`, sin page load). Publicar y probar con UN envío real desde producción (en localhost GTM no carga) |
| 3 | **Formulario** | `components/cribmaster/lead-form.tsx`, `app/actions/cribmaster-lead.ts` | Agregar `gclid/gbraid/wbraid` a los campos ocultos (copiar de `cimat/lead-form.tsx`) y persistirlos 90 días en localStorage; `user_data` con `datosUsuario(email, telefono, "AR")` en el mismo push de `cm_form_submit`; sumar `gclid`, `gbraid`, `wbraid` y `service_interest` a `ATRIBUCION` para que viajen en el mail del lead |
| 4 | **Lista de negativas `NEG — CribMaster AR`** | Listas compartidas | C3. **No** aplicar `NEG — Universal CIMAT` sin revisarla: son 232 términos de balanceadoras; se toma lo genérico (empleo, cursos, "que es", mercadolibre, usadas) |
| 5 | **Landing: frases literales y privacidad** | `lib/cribmaster-content.ts` | C4, cambios 1 y 2 |

Además, sin bloquear: plantilla de seguimiento de la campaña
`utm_source=google&utm_medium=cpc&utm_campaign=cribmaster_ar&utm_content={adgroupid}&utm_term={keyword}` (el formulario ya
lleva los UTM al mail del lead); verificar etiquetado automático activo (llena `gclid`); recursos de la campaña: sitelinks
`Caso en minería` → `#caso`, `Soluciones` → `#soluciones`, `Videos` → `#video`, `Dónde aplica` → `#aplica`; textos destacados
`Instalación y soporte en Argentina`, `Buenos Aires, Río Grande y Ushuaia`, `Se integra a tu ERP`, `Retiro con tarjeta o PIN`;
fragmento Modelos: ToolBox, ProStock, ProLock, MultiStore, AccuCab; extensión de llamada (+5411) 4788-0566. **No** poner las
cifras de Rio Tinto en el aviso: exigen la aclaración del fabricante y no entra en 90 caracteres. El monitor `jer-monitor-ads`
tiene que sumar `cm_form_submit` a su conteo de leads, como hizo con `contact_submit` el 11/09. Listas de remarketing (GA4 o
etiqueta de Ads en GTM): visitó `/cribmaster` (90 y 540 días), reprodujo un video (`cm_video_play`, 180 días), empezó y no
envió (30 días), envió (exclusión, 180 días).

## C2. Keywords por grupo

Convención: `[término]` exacta, `"término"` frase. Volumen del Planner; "0" es "sin datos" (Google oculta lo que está bajo el
umbral; los anuncios igual se sirven ahí: `balanceadora de cardan` daba 30 y en 90 días hizo 101 impresiones). Lección CIMAT:
frase se comporta como amplia; acá todo va en exacta salvo las ocho frases marcadas, que son las semillas con más volumen de
cada grupo y se vigilan en términos reales.

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
"inventario de herramientas" 30 · [gestion de herramientas] 110 — PRUEBA con corte a 14 días (se mezcla con "herramientas de gestión")
```
Fuera: `pañol de mantenimiento` 20 y `pañol industrial` 10 (muebles y empleo), `gestion de activos industriales` 10 (ERP).

**Grupo 4 — Lockers y gabinetes**
```
[lockers para herramientas] 10 · [lockers industriales] 10 · [gabinetes inteligentes] 10
[lockers inteligentes para herramientas] 0 · [armario inteligente de herramientas] 0 · [gabinete de herramientas con control de acceso] 0
```
Fuera: `lockers inteligentes` 50 y `lockers inteligentes argentina` 20: paquetería y edificios, competencia alta. Si aparece en
términos reales con cola industrial, se agrega la cola, no la raíz.

**Grupo 5 — Marca y competencia**
```
"cribmaster" 10 · [cribmaster toolbox] 10 · [cribmaster prostock] 10 · [autocrib] 10 · [supplypro] 10
```
Se puede pujar por `autocrib` y `supplypro`; **no se puede escribir AutoCrib ni SupplyPro en el aviso**. CribMaster sí se nombra
(JEREN es distribuidor autorizado); si Google frena el aviso por marca registrada, se pide la autorización a Stanley Black &
Decker por el formulario de terceros.

**Grupo 6 — Control de EPP**
```
[control de epp] 10 · [gestion de epp] 10 · [control de entrega de epp] 10 · [gestion de elementos de proteccion personal] 10 · [control de stock de epp] 0
```
Fuera: `entrega de epp` 90, `registro de entrega de epp` 40, `planilla entrega de epp` 110. Son la SRT, no una máquina.

Las keywords de CIMAT **no** se tocan: son otra campaña, otro producto. Lo único en común es la cuenta y las lecciones.

## C3. Negativas por familia — `NEG — CribMaster AR` (concordancia de frase, lista para pegar)

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

## C4. Cambios en la landing

| # | Cambio | Por qué | Archivo |
|---|---|---|---|
| 1 (bloquea) | **Frases literales de las keywords en el copy visible**: "máquina expendedora de EPP", "dispensador de EPP", "control de pañol", "control de herramientas", "control de EPP", "lockers para herramientas" | Google mide la experiencia de página sobre el texto visible; CIMAT pagó CPC al tope con "por debajo del promedio" en 12 de 12 por esto | `lib/cribmaster-content.ts` (soluciones, qué resuelve) |
| 2 (bloquea) | **Privacidad**: "No los compartimos con terceros" es falso (SendGrid, Turnstile, Google) → "Usamos tus datos solo para responder esta consulta" + link a /privacidad | Promesa que no se cumple en una landing paga | `lib/cribmaster-content.ts`, `lead-form.tsx` |
| 3 | Campo opcional "Qué querés controlar" (EPP y consumibles / herramientas y equipos / software y RFID), preseleccionable con `?linea=` desde la URL final de cada grupo y enviado como `service_interest` | Califica el lead y permite saber qué grupo convierte | `cribmaster-content.ts`, `lead-form.tsx`, `cribmaster-lead.ts` |
| 4 | Título que no excluya al taller ni a la planta: "en el yacimiento, la mina y el taller de mantenimiento" (sale del flyer) | El que busca "control de herramientas" desde un taller lee un H1 que no le habla | `hero.h1` |
| 5 | Subtítulo del hero a una oración; el resto a `soluciones.lead` | Acorta el primer pliegue en celular | `cribmaster-content.ts` |
| 6 | Subtítulos en español en los tres videos en inglés (`hl=es&cc_lang_pref=es&cc_load_policy=1`) | Son el 75 % del bloque de video | `video.tsx` |
| 7 | El video en español en la página de gracias | La persona que acaba de enviar es la más caliente | `app/cribmaster/gracias/page.tsx` |

No se propone: subpáginas por producto (el volumen no las justifica), precios (no hay; no se inventan), foto de instalación
local (no existe; es pedido a JEREN).

## C5. Anuncios (adaptables; títulos ≤ 30, descripciones ≤ 90, contados)

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
D2 No es una planilla: es hardware con software, instalado en tu planta por JEREN.   (filtra al que busca planilla)

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
