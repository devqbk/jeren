# CIMAT / JEREN — la demanda vista desde el que compra la máquina

Lectura de los 11 días (31/08–10/09/2026) desde el lado del comprador de una balanceadora de USD 30k–120k. Fuentes: `datos_ads_cimat.md`, `PLAN_ADS_CIMAT.md`, `ANALISIS_20260910_primeros_11_dias.md`, `lib/cimat-content.ts`.

**Aclaración previa.** El pedido dice "fabricante italiano". CIMAT es polaca (Bydgoszcz, desde 1987, según `cimat-content.ts`). La italiana es CEMB. Importa porque el comprador latinoamericano ubica a las marcas por origen: Schenck/Hofmann = Alemania, CEMB = Italia, JP/TOB = China, Vetrano = Argentina. "Polonia" no le dice nada y hoy es el argumento más repetido de los anuncios.

**Dato que condiciona todo lo que sigue:** los términos de búsqueda visibles suman 7 clics y ARS 8.060. La campaña tuvo 37 clics y ARS 38.973. **El 81 % de los clics (30) y el 79 % del gasto están en términos que Google oculta** por umbral de privacidad. Cualquier afirmación "todos los términos de X son Y" vale para el 20 % visible; las decisiones hay que tomarlas a nivel keyword, donde el dato sí es completo.

---

## 1. Quién compra y cómo busca, por país

### Las personas reales

| Persona | Qué compra de CIMAT | Ticket | Cómo decide | Busca en Google |
|---|---|---|---|---|
| **Empresa de servicio de balanceo** (Vetrano, Abasteck, Bayser, TCHEM, MIM, SMISAC, Fasecor, Colombiana de Balanceos) | Horizontal universal 500 kg–5 t, a veces vertical; retrofit de electrónica sobre Schenck/Vetrano vieja; portátil para campo | USD 40k–120k | El dueño. Compara contra usada Schenck y contra china. Ciclo 3–12 meses. Compra cuando satura turnos o pierde un cliente por capacidad | Sí, pero poco y por marca: `schenck balanceadora`, `cemb`, `jp balancing`, `balanceadora usada`, `balanceadora de rotores hasta 3000 kg`, `modernizar balanceadora` |
| **Rebobinador / reparador de motores eléctricos** | Horizontal chica o compacta H2BS (15–500 kg) | USD 15k–40k | El dueño. Muchos ya tienen una china o una Vetrano. Compra cuando un cliente grande (minera, papelera) le exige certificado | `balanceadora de inducidos`, `balanceadora de rotores`, `balanceadora de armaduras` (Perú/Colombia), `balanceadora para bobinado` |
| **Rectificadora de motores** | CMT-700 H2K cigüeñales + volantes | USD 25k–60k | El dueño. Segmento en retracción salvo diésel pesado (camión, agro, grupos electrógenos). Mira mucho usadas | `balanceadora de cigueñales`, `balanceadora de cigueñal`, `maquina para balancear cigueñales`, `balanceadora de volantes` |
| **Taller de cardanes** | CMT-DS | USD 20k–60k | Hay cientos de talleres chicos que compran a Vetrano o china por USD 8k–20k. Los que compran CIMAT son los que atienden flotas, ómnibus, minería, vial | `balanceadora de cardan`, `balanceadora de cardanes`, `maquina balanceadora de cardan` |
| **Taller de turbos (remanufactura)** | CMT-VSR / CMT-TR | USD 20k–70k | Nicho concentrado (pocos por país). Compra cuando empieza a hacer garantía o vende a flotas | `balanceadora de turbos`, `balanceadora de turbinas` (Colombia/Perú/Venezuela llaman "turbina" al turbo), `core balancer`, `vsr` |
| **Fabricante de ventiladores / bombas / extractores** | Vertical V2 para rodetes e impulsores | USD 30k–80k | Gerente de producción + dueño. Compra al certificar G6,3 para un OEM o exportar | `balanceadora vertical`, `balanceadora de rodetes`, `balanceadora de impulsores`, `balanceadora de hélices` |
| **Planta industrial (mantenimiento)** — minería, papelera, energía, O&G | Rara vez estacionaria; sí portátil SmaRT o servicio | USD 5k–20k (portátil) | Ingeniero de mantenimiento + compras. Estacionaria solo por proyecto y licitación; ahí Google no interviene | `balanceo dinamico in situ`, `analizador de vibraciones`, `equipo de balanceo portatil`, `balanceo de ventiladores` (servicio) |
| **Licitación pública / gran empresa** — ferroviario, Itaipú/Yacyretá, refinerías, arsenales | Wheelsets, rodillos, turbinas | USD 100k+ | Pliego. El proveedor tiene que estar registrado antes. Google no existe en este circuito | No busca; el que busca es el consultor que arma el pliego, y busca normas: `iso 21940-11`, `iso 2953` |

### Vocabulario por país

| País | Máquina | Acción / servicio | Piezas | Particularidades |
|---|---|---|---|---|
| **Argentina** | `balanceadora`, `máquina balanceadora`, `balanceadora dinámica` | `balanceo dinámico`, `balanceo de X` | `cardan` (sin tilde), `cigüeñal`, `inducido`, `rotor`, `turbo` | "Equilibrado/equilibradora" no se usa. `balanceador` en masculino es el operario o, en automotriz, el damper del cigüeñal |
| **Uruguay / Paraguay** | igual que Argentina | igual | igual | Volumen mínimo (5 y 2 impresiones en 11 días). Paraguay: talleres de flotas en Asunción y CDE; ferroviario/energía por licitación |
| **Chile** | `balanceadora`, `máquina balanceadora`, `equipo de balanceo` | `balanceo dinámico`, `servicio de balanceo` | `cardán` (con tilde), `rodete`, `impulsor`, `eje` | Minería: la búsqueda operativa la hace la maestranza o la empresa de servicio en español; la especificación circula en inglés (`balancing machine`, `hard bearing`). "Equilibradora" aparece en fichas traducidas de España, no en búsquedas |
| **Perú** | `máquina de balanceo dinámico`, `equipos de balanceo dinámico`, `balanceadora dinámica` | `balanceo dinámico` (muy fuerte, por eso SMISAC tiene 320 búsquedas) | `armadura`/`inducido`, `impulsor`, `cardán`, `turbina` (= turbo) | El comprador peruano describe la máquina por la acción: "equipo de balanceo dinámico". Los términos `equipo(s) de/para balanceo dinamico` de los datos (3+2+1+2 impresiones) tienen toda la pinta de Perú/Colombia |
| **Colombia** | `balanceadora`, `máquina balanceadora`, `balanceo dinámico` | `balanceo dinámico`, `balanceo de ejes` | `cardán`, `turbina` (= turbo), `impulsor`, `armadura` | Rebobinadores abundantes (Bogotá, Medellín, Barranquilla). `balanceador de cigüeñal` acá es el damper: repuesto de USD 50 |
| **Inglés (minería/O&G)** | `balancing machine`, `hard bearing balancing machine`, `horizontal balancing machine` | `field balancing`, `dynamic balancing` | `crankshaft`, `driveshaft`, `armature`, `impeller`, `core balancer` | Lo busca el ingeniero de proyecto en Antofagasta/Lima/Arequipa para comparar fichas. Compra vía procurement en español. El genérico `balancing machine` en frase trae marcas globales y ruedas (`coats 850`, `beissbarth`), como se vio |

---

## 2. Lectura término por término

Leyenda: **C** comprador potencial de máquina · **C?** comprador posible, ticket bajo o intención dudosa · **P** comprador de portátil/campo (otro producto, otro ticket) · **N** no comprador.

### Términos con clic (7 de 37 clics; ARS 8.060)

| Término | Keyword | ARS | Quién es | Veredicto |
|---|---|---|---|---|
| `balanceadora apo 7052` | balanceadora de impulsores | 1.190 | APO es balanceadora de ruedas. Gomería o taller mecánico. Google disparó una keyword de "impulsores" con un modelo de gomería: la concordancia de frase ya no es frase | **N**. Negativa `apo` |
| `balanceadora de cardan` | balanceadora de cardan | 1.183 | Taller de cardanes chico, o mecánico que quiere ofrecer el servicio. En Argentina el usuario final dice "balanceo de cardan" o "dónde balancear el cardan"; el que escribe "balanceadora" quiere la máquina | **C?** Ticket típico USD 8k–20k (Vetrano, china). Solo califica si atiende flotas |
| `skf analizador de vibraciones` | analizador de vibraciones y balanceo | 1.164 | Mantenimiento predictivo con marca decidida (SKF Microlog). Puede ser empresa de servicio de balanceo en campo, pero ya eligió instrumento | **N** para CIMAT |
| `maquina balanceo dinamico` | equipo de balanceo dinamico | 1.158 | Vocabulario de comprador genérico, probablemente Perú/Colombia | **C** |
| `balanceadora dinamica de rotores` | balanceadora dinamica de rotores | 1.149 | Rebobinador o empresa de servicio. Es exactamente cómo describe la máquina quien la usa | **C** |
| `analizador de vibraciones skf precio` | analizador de vibraciones y balanceo | 1.146 | Cotizando un instrumento de USD 3k–15k | **N** |
| `balanceadora de rotores` | balanceadora de rotores | 1.070 | El término más limpio del plan. Rebobinador, servicio o planta con taller propio | **C** |

Cuatro de siete clics visibles son compradores plausibles; tres son ruido (USD ~2,3 de cada 5,4 gastados en lo visible).

### Términos sin clic (impresiones)

| Término | Impr | Quién es | Veredicto |
|---|---|---|---|
| `balanceador de cigueñal` / `balanceador de cigüeñal` | 9 + 2 | **Damper (harmonic balancer)**: en Colombia, Venezuela, México y parte de Perú "balanceador de cigüeñal" es la polea amortiguadora. Repuesto de USD 30–100. 11 impresiones y 0 clics lo confirman: el anuncio no era lo que buscaban | **N**. Negativas en frase: `balanceador de cigueñal`, `balanceador de cigüeñal`, `balanceador armonico`, `damper` |
| `balanceadora dinamica` | 6 | Genérico: comprador, estudiante o servicio | **C?** Neutral, se deja |
| `balanceo de cardan` | 6 | Usuario final con camioneta/camión, o flota buscando dónde balancear. Es servicio | **N**. Negativa en frase `balanceo de cardan` (hoy no está: la lista tiene `servicio de balanceo`, no alcanza) |
| `balanceo dinamico` | 5 + 1 | Servicio o informativo. El término más grande del rubro (70/mes en el Planner) y por eso mismo el más contaminado | **N** en su mayoría. Negativa exacta `[balanceo dinamico]`, sin frase, para no matar `maquina de balanceo dinamico` |
| `equipos de balanceo dinamico` / `equipo para balanceo dinamico` | 3 + 2 | Perú/Colombia, comprador que nombra la máquina por la acción. También puede ser una empresa de servicio describiendo lo que ofrece, pero en ese caso agrega "servicio" | **C** |
| `maquina de balanceo dinamico` / `máquina de balanceo dinámico` | 2 + 2 | Comprador. Tiene QS 2 con CTR esperado bajo: el anuncio "Balanceadoras CIMAT / Fabricadas en Polonia" no le habla | **C** |
| `balanceadora industrial` | 2 | Comprador genérico | **C** |
| `equipo de balanceo dinamico portatil` (x2) / `equipo para balanceo dinámico portátil` / `balanceadora portatil` | 2+2+1+1 | **Empresa de servicio de balanceo en campo o mantenimiento de planta**. Compra portátil (SmaRT en CIMAT) y compite contra Fixturlaser/Acoem, Adash, SKF, DigivibeMX (Erbessd, mexicano, muy fuerte en LATAM) y Balanset (china, USD 2k) | **P**. Es demanda real y es la puerta a la empresa de servicio, pero la landing no tiene página de SmaRT con especificaciones ni banda de precio |
| `analizador de vibraciones`, `equipo analizador de vibraciones`, `equipos para analisis de vibracion`, `equipo de vibraciones mecanicas`, `medidor de vibraciones para motores` | 5 | Predictivo de planta o estudiante | **N** para máquina; **P** marginal |
| `cmas100 sl` (SKF Microlog), `pce vt 3900`, `rion va 12`, `vibrex 2000 plus` (Chadwick-Helmuth, **aeronáutica**: track & balance de rotores de helicóptero), `eva 625`, `vibracheck 100 precio`, `vibropen skf`, `medidor de vibraciones skf`, `equipo de vibraciones skf` | 11 | Comprando un instrumento por modelo. Ninguno es cliente de balanceadora | **N**. Negativas: `analizador`, `medidor de vibraciones`, `skf`, `pce`, `rion`, `vibrex`, `vibropen`, `microlog` |
| `balanceadora de inducidos` / `balanceador de inducidos` | 2 + 1 | **Rebobinador**. El masculino puede ser un banco chico chino o el operario, pero en contexto de bobinado es comprador | **C**. Segmento subatendido (ver §3) |
| `jp balancing machine` / `jp balancing` | 2 + 1 | **JP Balancing Machines = Shanghai Jianping**, fabricante chino de balanceadoras industriales. Es un comprador informado que está mirando precio chino. El análisis previo lo clasificó como marca de ruedas: no lo es | **C** (sensible al precio). No negativar. Entra en la lógica de marca de competencia, sin nombrarla en el aviso |
| `balanceadoras tob` (x2, disparado por dos keywords distintas) | 2 | Marca de máquina industrial. Dos impresiones por dos keywords = una persona buscando insistentemente | **C** informado. Verificar qué es TOB antes de tocar nada |
| `schenck balancing machine` / `schenck balanceadora` | 1 + 1 | **El comprador ideal**: quien busca Schenck sabe qué es una balanceadora y cuánto cuesta. Los disparó la campaña Comercial (keywords `balancing machine` y `balanceadora industrial`), no la de Marca | **C**. Ver el problema de canibalización en §4 |
| `hofmann geodyna 9000p` | 1 | Geodyna = línea de ruedas de Hofmann. Gomería. Lo disparó `balanceadora de rotores electricos`: Google entiende "balanceadora" como máquina de gomería | **N**. Negativa `geodyna`, no `hofmann` (Hofmann industrial es competidor real) |
| `balanceadora coats 850` / `beissbarth microtec 741` | 1 + 1 | Balanceadoras de ruedas | **N**. Negativas `coats`, `beissbarth`, `microtec` |
| `balanceadora de turbinas` (x2) | 2 | Taller de turbos en Colombia/Perú ("turbina" = turbo), o rara vez turbina real | **C**. Falta como keyword; la negativa `balanceo de turbinas` está bien pero `balanceadora de turbinas` tiene que ser positiva |
| `balanceadora de turbos` | 1 | Taller de turbos | **C** |
| `balanceo de ventiladores` / `balanceo de ventiladores industriales` / `balanceo dinámico de ventiladores` | 3 | Planta o instalador buscando servicio. El fabricante de ventiladores que compra máquina escribe "balanceadora vertical" o "balanceadora de rodetes" | **N**. Negativa en frase `balanceo de ventiladores` |
| `omar vetrano` | 1 | Cliente de servicio de Vetrano o comprador de máquina Vetrano. La prueba del plan sigue vigente | **C?** |
| `balanceadora de cigueñal` / `balanceadora de cigueñales` | 1 + 1 | Rectificadora | **C** |
| `balanceadora de ejes` | 1 | Cardán/eje de transmisión, o alineación de ejes de camión | **C?** |
| `equilibradora de turbos` | 1 (keyword) | Confirma que "equilibradora" es marginal en la región | — |

### Lectura por keyword (donde el dato sí está completo)

| Keyword | Clics | ARS | % gasto | Lectura |
|---|---|---|---|---|
| analizador de vibraciones y balanceo | 7 | 8.217 | 21 % | Instrumentos. Ninguno compra máquina. Pausar |
| balanceadora de cardan (frase + exacta) | 7 | 5.867 | 15 % | Compradores plausibles, ticket bajo. Solo 1 término visible |
| equipo de balanceo dinamico | 6 | 6.604 | 17 % | Compradores plausibles (Perú/Colombia). 1 visible |
| balanceadora de impulsores | 4 | 4.393 | 11 % | El único visible es APO (ruedas). Dudoso: Google está usando "balanceadora" + cualquier cosa |
| balanceadora portatil | 3 | 2.936 | 8 % | Portátil/campo |
| balanceadora dinamica | 2 | 2.288 | 6 % | Genérico |
| balanceadora de ventiladores | 2 | 2.368 | 6 % | Sin término visible con clic |
| balanceadora de turbos | 2 | 2.116 | 5 % | Turbos |
| cigüeñales (x2) + rotores (x2) | 4 | 4.184 | 11 % | Los más limpios |

Gasto probablemente comprador: ~ARS 26k (67 %). Gasto seguro perdido: ≥ ARS 9,4k (analizador + APO), 24 %. Zona gris: impulsores y lo oculto.

---

## 3. Segmentos ausentes y keywords propuestas

### Que faltan y conviene perseguir

**a) Rebobinado y reparación de motores eléctricos.** El parque instalado de balanceadoras más grande de LATAM está en talleres de bobinado, no en empresas de balanceo. Hoy solo hay `balanceadora de inducidos` (en el grupo equivocado, "Cigüeñales") y `balanceadora de rotores electricos`. Grupo propio, landing propia con la compacta H2BS y la foto del rotor de motor eléctrico que ya existe en `industriasImagenes`.

```
balanceadora de inducidos        (exacta + frase)
balanceadora de armaduras        (Perú, Colombia)
balanceadora de rotores de motores electricos
balanceadora para bobinado
balanceadora para taller de bobinados
balanceadora de rotores chica
balanceadora de rotores hasta 500 kg
```

**b) Empresas de servicio de balanceo (el comprador del plan).** Casi no buscan "balanceadora": buscan marca, capacidad, usada y retrofit. Nada de esto está en la campaña salvo Schenck/Abasteck/Vetrano en la campaña Marca, que tuvo 1 impresión.

```
balanceadora horizontal
balanceadora universal
balanceadora hard bearing
balanceadora de rotores 1000 kg / 3000 kg / 5 toneladas
balanceadora de rotores grandes
modernizar balanceadora
modernizacion de balanceadora
electronica para balanceadora
instrumento para balanceadora
medidor para balanceadora
retrofit balanceadora
calibracion de balanceadora
rotor patron balanceadora
jp balancing / jp balancing machine   (exacta, puja baja, sin nombrarla)
cemb balanceadora                     (ya está; verificar que no la coma la Comercial)
```

El Planner dio "sin datos" para retrofit y calibración. Sin datos es < 10/mes, no cero, y estos términos no cuestan nada hasta que alguien los escribe. Para una máquina de USD 100k, una búsqueda de `modernizar balanceadora schenck` por trimestre vale más que 100 de `balanceo dinamico`.

**c) Fabricantes de ventiladores, extractores y bombas.** Hay `balanceadora de ventiladores` e `impulsores` pero falta la palabra con la que el fabricante nombra la máquina que necesita:

```
balanceadora vertical
balanceadora vertical de impulsores
balanceadora de rodetes
balanceadora de helices          (marina en Tigre; salmoneras en Chile)
balanceadora de aspas
balanceadora de impulsores de bomba
```

**d) Turbos con vocabulario regional.**

```
balanceadora de turbinas         (Colombia, Perú)
maquina para balancear turbinas
balanceadora vsr
balanceadora de chra
balanceadora de turbos alta velocidad
```

**e) Rectificadoras: completar.**

```
balanceadora de volantes
balanceadora de cigueñal y volante
balanceadora para rectificadora
maquina para balancear cigueñales
```

**f) Campo/portátil, reformulado.** Sacar `analizador de vibraciones y balanceo`. Dejar solo lo que dice "balanceo" antes que "vibración":

```
balanceadora portatil
balanceador portatil de rotores
equipo de balanceo dinamico portatil
equipo de balanceo in situ
balanceo en campo equipo
```
Con destino a una página de SmaRT con canales, sensores, norma 10816-3 y banda de precio. Sin esa página, este grupo compra clics para una landing que no muestra el producto.

**g) Inglés, acotado.** Reemplazar `balancing machine` en frase por:

```
hard bearing balancing machine
horizontal balancing machine
balancing machine for sale        (trae dealers de usadas, pero también compradores)
balancing machine price
core balancer                     (ya está, es el término correcto de turbos)
```

### Que están y no conviene perseguir

- **Gomería y ruedas**: ya negativadas por genérico, pero Google entra por marcas y modelos. Falta la lista de marcas: `apo, coats, beissbarth, microtec, geodyna, hunter, corghi, ravaglioli, sicam, fasep, launch, unite`. No negativar `cemb` (hace las dos cosas).
- **Instrumentación predictiva** (SKF, PCE, Rion, Vibrex, DigivibeMX si aparece): otro comprador, otro presupuesto, otro proveedor.
- **Damper**: `balanceador de cigueñal`, `balanceador armonico`.
- **Servicio**: `balanceo de cardan`, `balanceo de ventiladores`, `[balanceo dinamico]` exacta, `balanceo de turbinas` (ya está).
- **Aeronáutica**: `vibrex`, `helicoptero`, `track and balance`. Otro planeta regulatorio.
- **Papelera, ferroviario, turbogeneradores**: van por pliego. Aparecer en `iso 21940-11` e `iso 2953` (grupo D del plan, nunca se cargó) es lo único que Google puede hacer ahí.
- **Universidades e institutos** (UTN, SENATI, SENA, INACAP) compran bancos didácticos por licitación. `balanceadora didactica` aparecerá; dejar pasar, no perseguir.
- **Usadas**: `balanceadora usada` es un comprador real con menos plata; hoy negativado. Se justifica mientras JEREN no tenga oferta de retrofit o de toma de usada. Si la tiene, es el término más barato del rubro para hablar con una empresa de servicio.

---

## 4. Edge cases y trampas

1. **"Balanceadora" solo, para Google, es gomería.** `balanceadora de rotores electricos` disparó `hofmann geodyna 9000p`; `balanceadora de impulsores` disparó `apo 7052`; `balancing machine` disparó `coats 850`. La concordancia de frase actual acepta "misma intención", y la intención mayoritaria de la palabra es ruedas. Defensa: marcas de gomería en negativas y los términos núcleo también en exacta.

2. **Cardán: comprador y usuario comparten la palabra.** `balanceadora de cardan` (máquina) y `balanceo de cardan` (servicio) se disparan entre sí como variantes cercanas. Del lado comprador, el 80 % de los talleres de cardanes tienen presupuesto de máquina china o Vetrano. La calificación tiene que ocurrir en el WhatsApp con dos preguntas: cuántos cardanes por mes y si trabaja para flotas o minería. Sin eso, este grupo va a generar consultas que mueren en el precio.

3. **"Analizador de vibraciones" tiene un subconjunto valioso** — la empresa que balancea en campo y que después compra máquina estacionaria — pero busca por marca (SKF, Fixturlaser, DigivibeMX) y CIMAT no tiene marca en portátiles. No se gana en Ads; se gana ofreciendo SmaRT en la prospección directa a las 25 empresas listadas en el plan.

4. **Marcas competidoras = comprador informado, pero hay tres tipos de marca.** Marca de máquina industrial (Schenck, CEMB, Hofmann, JP, TOB, Vetrano como fabricante) = comprador. Marca de empresa de servicio (SMISAC, TCHEM, Abasteck en su rol de servicio) = usuario final. Marca de instrumento (SKF, PCE) o de gomería (APO, Coats) = otro mercado. El plan trata a Abasteck como "el término más limpio": Abasteck es representante de Schenck **y** presta servicio; la mitad de esas 50 búsquedas quiere que le balanceen algo.

5. **Canibalización Marca/Comercial.** `schenck balanceadora` y `schenck balancing machine` los sirvió la campaña Comercial (puja 1.200) y no la de Marca (puja 500), que en 11 días tuvo 1 impresión. El plan diseñó la campaña de marca como "la de mejor relación de todo el plan" y está muda porque la otra le gana la subasta interna. O se ponen las marcas como negativas en Comercial, o se mueven las keywords de marca a Comercial y se apaga Marca.

6. **"Balanceador" en masculino.** En Argentina es el operario; en Colombia/Venezuela/México es el damper; en bobinado puede ser un banco chico. No negativar la palabra suelta; negativar `balanceador de cigueñal` y `balanceador armonico`.

7. **"Turbina" no es turbina.** En Colombia, Perú y Venezuela el turbo es "la turbina". `balanceadora de turbinas` es taller de turbos. La negativa `balanceo de turbinas` está bien (servicio), pero la campaña necesita la forma con "balanceadora".

8. **"Soporte local desde Argentina" es una promesa en Argentina y una advertencia en Lima.** El 44 % del gasto es Colombia + Perú, y ven titulares "Factura Argentina", "Respaldo Técnico Local", "Local Support in Argentina". El comprador peruano lee: proveedor extranjero, sin técnico en mi país, garantía a 5.000 km. Es preferible "soporte en la región" y, si existe, un partner local nombrado.

9. **Mobile 64 % no es sospechoso.** El dueño de la rectificadora, del taller de cardanes y del bobinado busca desde el celular en el taller y contacta por WhatsApp. Lo sospechoso es que la landing declare a WhatsApp como canal secundario ("nunca con el mismo peso visual que el CTA principal", en `cimat-content.ts`) y que las 45 sesiones cpc no hayan tocado ni WhatsApp ni teléfono. Para esta persona el formulario de seis opciones es un trámite corporativo; el WhatsApp es la compra.

10. **La landing habla a la planta; el que llega es el taller.** Hero: rodillo de papelera de gran porte. Problem cards: "el rotor vuelve a vibrar", "paradas por tercerizar", "el OEM exige G2,5". El que hizo clic en `balanceadora de cardan` o `balanceadora de cigueñales` no se ve en ninguna de esas frases y se va. El QS de página "por debajo del promedio" en las 12 keywords no es un problema de URL final: es que la página no contiene lo que la keyword promete. `/cimat` menciona "cardanes" una vez en una card de selector y una en la tabla de specs.

11. **Términos ocultos.** 30 de 37 clics no se ven. Cuando el informe de términos diga "no hay nada raro", va a estar hablando del 20 %. Las decisiones se toman por keyword y por micro-conversiones, no por términos.

12. **ISO 1940 todavía se dice.** El comprador de 50 años, el pliego viejo y el certificado de Vetrano dicen ISO 1940-1. La landing la nombra una sola vez, al explicar la renumeración. El anuncio dice "Precisión Según ISO 21940" y el comprador que conoce "1940" no la reconoce. Poner las dos: "ISO 1940-1 / 21940-11".

13. **JP Balancing es el competidor real del 70 % de estas búsquedas.** Un taller que ve CMT-DS a USD 50k y JP a USD 15k necesita un argumento que la landing no da: URR 98 % verificado por ISO 2953, certificado válido para el cliente final, repuestos, y qué pasa cuando la china se descalibra (nadie la calibra). La sección "Qué evaluar antes de comprar" lo insinúa sin decirlo.

---

## 5. Qué deberían decir anuncios y landing

### Lo que el comprador de bien de capital verifica antes de escribir

En orden de importancia para este ticket, y con el estado actual:

| Verificación | Estado en anuncios/landing | Qué falta |
|---|---|---|
| **Representación oficial verificable** | "Representante oficial de CIMAT en Argentina" en el eyebrow; el plan dice que CIMAT aún no publica a JEREN en su sitio | Sin el listado en cimat, el comprador de USD 80k que lo chequea (lo chequea) concluye "intermediario". Es la acción de mayor retorno y sigue pendiente |
| **Servicio técnico: quién, dónde, en cuánto tiempo** | "Respaldo técnico local", "3 sedes" (dos son Tecnomaq SRL en Tierra del Fuego) | Nombre del técnico formado en fábrica, tiempo de respuesta, si la garantía in situ la hace JEREN o viaja alguien de Polonia. Ushuaia no es un argumento para Córdoba o Rosario; puede leerse como relleno |
| **Repuestos** | Callout "Repuestos en Argentina"; landing: "kit de repuestos críticos se define antes de la entrega; el resto por canal directo con la planta" | Contradicción. Decir qué hay en stock (sensores, placa de medición, rodamientos de soporte) y plazo del resto |
| **Instalación y puesta en marcha** | Está bien dicho ("puesta en marcha incluida") | Días en planta, quién trae los rotores patrón, si la fundación la hace el cliente |
| **Capacitación** | Está | Horas, cuántos operarios, certificado |
| **Garantía** | "Garantía in situ a cargo de JEREN" | Meses. Un comprador no lee "garantía" sin número |
| **Plazo de entrega** | Ausente en todo | Es la primera pregunta después del precio. 12–20 semanas desde Polonia más nacionalización: decirlo evita la consulta perdida |
| **Financiación / condiciones** | Ausente | Leasing, anticipo y saldo contra embarque, moneda, si JEREN gestiona el crédito. En Argentina la pregunta "¿en pesos o en dólares?" define la venta |
| **Casos en la región** | Retirados (sección de evidencia vacía) | Aunque no haya cliente nombrable: "X máquinas CIMAT operando en Brasil/Chile/México" con año. El comprador acepta anonimato, no acepta vacío |
| **Normas** | Muy bien cubierto (21940-11, 2953, 21940-23, 10816-3) | Agregar la equivalencia 1940-1 en anuncio y hero |
| **Precio o banda** | Ausente | "Desde USD X" por línea filtra al comprador de china y ahorra clics. Si JEREN no quiere publicarlo, al menos "cotización en 48 h" (estaba en el plan y desapareció de los RSA) |
| **Trade-in / retrofit** | Modernización está en el selector | "Modernizamos tu Schenck/Vetrano" es un titular que habla directo a la empresa de servicio |

### Anuncios: qué cambiar

- Sacar "Fabricadas en Polonia" como titular; dejarlo en descripción. Reemplazar por capacidad concreta: "Rotores de 5 kg a 20 t", "Cardanes hasta 4,6 m", "Cigüeñales hasta 700 kg", "Turbos hasta 300.000 rpm". El taller lee números.
- "Solicite Información" es CTA de folleto. "Cotización en 48 h", "Especificación y plazo de entrega", "Catálogo técnico PDF".
- Por país: en Perú, Colombia y Chile no mostrar "Factura Argentina" ni "Local Support in Argentina". Con la campaña unificada eso implica anuncios por grupo sin esos titulares, o pinnear los titulares de Argentina solo... no se puede por geo dentro de una campaña; entonces, dos campañas: Argentina/Uruguay/Paraguay con "factura local", y Chile/Perú/Colombia con "soporte en la región, importación resuelta".
- Grupo cardanes/cigüeñales: ya dice "Para Rectificadoras / Para Talleres de Cardanes": correcto. Agregar "Convierte la corrección en fleje a soldar" (está en specs; es lo que el cardanista quiere oír).
- Grupo turbos: "Balancea el CHRA a velocidad real", "Evita la devolución en garantía".
- Grupo campo: no vender "análisis de vibración"; vender "balanceo sin desmontar, con certificado 10816-3".
- ISO: "ISO 1940-1 / 21940-11".

### Landing: qué cambiar

- Una sección o página por persona, con la máquina, la foto y tres números: `/cimat/cardanes` (CMT-DS), `/cimat/ciguenales` (CMT-700 H2K), `/cimat/turbos` (VSR/TR), `/cimat/bobinados` (H2BS y horizontales chicas), `/cimat/balanceo-en-campo` (SmaRT), `/cimat/servicio-de-balanceo` (horizontal universal + retrofit, dirigida a la empresa de servicio). Las URL finales por grupo van a esas páginas.
- WhatsApp primario en mobile, con el `ref` que ya se implementó.
- Plazo de entrega, meses de garantía, condiciones de pago y banda de precio por línea.
- Un párrafo honesto contra la china: qué certifica una y qué certifica la otra.
- "Modernizamos balanceadoras de otras marcas" como bloque visible, no como opción de formulario.

### Riesgo de las afirmaciones no confirmadas

- **"Representante oficial"** sin listado en cimat: el comprador lo interpreta como "revendedor que importa por su cuenta". Pierde el lead y, peor, lo pierde en silencio: nadie avisa que no confió.
- **"Repuestos en Argentina"** (callout) contra "kit definido antes de la entrega": si se descubre en la negociación, se lee como publicidad engañosa; en Argentina, Ley 24.240 y lealtad comercial. Hasta confirmar stock, "repuestos críticos con la máquina" es lo defendible.
- **"3 sedes"**: dos son de otra razón social. Un comprador que googlea Tecnomaq lo nota.
- **Logos Siemens/ABB/Ford/Pratt & Whitney**: el plan los tiene como pendientes de autorización. Un logo sin autorización es un riesgo legal y, si CIMAT los desmiente al comprador que llama a fábrica, un riesgo de credibilidad.
- **"Más de 40 años en industria"** en el anuncio sin atribución: el lector asume que es CIMAT (1987 = 39 años). La landing lo atribuye bien; el anuncio no.
- **Ascential / Burke Porter**: el plan dice no usar hasta confirmación; la landing ya dice Ascential Technologies. Coherencia pendiente.

---

## 6. Cuánto esperar antes de juzgar y qué mirar mientras tanto

### Lo que significa 0 leads en 37 clics

Para un bien de capital con landing razonable, la tasa de contacto (formulario + WhatsApp + teléfono + mail) sobre clics calificados está entre 2 % y 5 %. Con 37 clics de los cuales ~24 son compradores plausibles:

- Esperado a 3 %: 0,7 contactos.
- Probabilidad de ver 0 con la campaña funcionando bien: 0,97^24 ≈ 48 %. Con los 37: 32 %.

Cero es el resultado más probable. No dice nada de la campaña todavía.

**Umbral para juzgar:** 100 clics calificados (ya sin instrumentos, gomería ni damper). Con p = 3 %, la probabilidad de 0 en 100 es 5 %; ahí sí, cero contactos es un veredicto. Al ritmo actual (3,4 clics/día, ~65 % calificados) son unos 45 días. Con la limpieza y las keywords nuevas, 30–35 días. Fecha razonable de primer juicio: **fin de octubre 2026**, y no antes.

### Micro-conversiones que sí tienen que aparecer antes

Si en 100 clics calificados no aparece **ninguna** de estas, el problema es la landing o la persona, no el volumen:

| Señal | Qué mide | Esperable sobre sesiones cpc calificadas |
|---|---|---|
| Descarga del catálogo PDF (`/catalogos/cimat-balanceadoras.pdf`) | Comprador que se lleva la ficha para comparar. **Confirmar que está trackeado en GA4; no figura en los eventos leídos** | 8–15 % |
| Vista de `/cimat/especificaciones` o de la tabla de specs | Está mirando capacidad y rpm | 15–25 % |
| Click en `tel:` y `mailto:` | Contacto no atribuido hoy | 1–3 % |
| `form_start` / selección en el desplegable de interés | Intención sin envío | 3–5 % |
| Sesión > 60 s o ≥ 2 páginas | Definición operativa de "clic calificado" | 25–35 %. Si es < 10 %, la landing no corresponde a la búsqueda |
| Vuelta directa a jeren.com/cimat en los 30 días siguientes | El comprador de capital vuelve 3–6 veces antes de escribir | Empieza a verse en la semana 3 |
| WhatsApp con `ref. G-MMDD` | Ya implementado | — |

Además, fuera de Ads: preguntar "¿cómo nos encontró?" en cada consulta que entre por mail o teléfono y cruzar por fecha. En este mercado el lead de Google llama un mes después, desde el fijo de la empresa, sin gclid.

### Qué mirar cada semana mientras tanto

- Términos de búsqueda, sabiendo que es el 20 %: cada término nuevo entra a una de las cuatro listas (comprador, portátil, servicio, otro mercado).
- IS del grupo Máquina balanceadora y de Cigüeñales/cardanes > 50 % una vez que se pausen analizador e impulsores.
- Cuota de clics calificados por país: si Perú/Colombia dan sesiones largas y Argentina no, la campaña separada por país deja de ser opcional.
- CPC por keyword: `balanceadora de rotores` a ARS 1.070 y `cigueñales` a 788 son baratos para un lead de USD 300 de valor; `analizador` a 1.174 es caro para cero.

---

## 7. Dónde discrepo del análisis previo

1. **JP Balancing no es marca de ruedas.** Es Shanghai Jianping, fabricante chino de balanceadoras industriales. Negativar `jp balancing` es negativar al comprador informado que está comparando precio, o sea el que más necesita el argumento anti-china. Se deja, y si se puede, se puja bajo en exacta.

2. **"Se dejan por ahora" los términos de servicio con 0 gasto.** No. `balanceo de cardan` y `balanceo de ventiladores` entran por variante cercana y van a costar en cuanto alguien haga clic. Y el argumento "0 gasto" se apoya en el 20 % visible; en el 80 % oculto hay 30 clics de los que no sabemos nada. Negativas hoy.

3. **"Pausar el grupo Técnico en inglés."** Tiene 0 clics y 0 gasto: pausarlo no ahorra nada. Sus dos términos con marca (`schenck balancing machine`, `jp balancing machine`) son de los mejores compradores del período. Lo correcto es sacar `balancing machine` genérica en frase, que atrae Coats y Beissbarth, y quedarse con `hard bearing`, `horizontal`, `core balancer` y los compuestos de cigüeñal/cardán.

4. **"La landing baja el QS: se arregla con URL final por grupo."** La URL final por grupo es necesaria, pero apuntar a `/cimat/aplicaciones` con un anchor no cambia que el contenido no habla al taller. El arreglo es de contenido: una página por persona con su máquina. Sin eso, el QS de página sigue por debajo del promedio en la nueva URL.

5. **"Mobile 63 % sospechoso."** No lo es para talleres. Lo que hay que mirar es si las sesiones mobile son las cortas; y lo que hay que cambiar es el peso de WhatsApp en mobile, que la landing degrada por diseño.

6. **Lo que el análisis previo no vio:** que el 81 % de los clics está en términos ocultos, que la campaña Marca está muda porque la Comercial le gana las marcas (`schenck balanceadora` sirvió Comercial), que `balanceador de cigüeñal` con 11 impresiones es el damper y no la rectificadora, que `balanceadora de turbinas` es taller de turbos en Colombia/Perú y falta como positiva, y que 0 leads en 37 clics es el resultado estadísticamente más probable de una campaña que funciona.

7. **Sobre "subir presupuesto después de dos semanas".** Coincido en no subir. Agrego: el 52 % perdido por presupuesto se calcula sobre subastas que incluyen las de instrumentos y gomería. Limpio, ARS 3.000/día probablemente sobre, y lo que sobre debería ir a las keywords de segmentos ausentes (bobinado, vertical, retrofit), no a más de lo mismo.

8. **Sobre el plan original.** El hallazgo de que las empresas de servicio son el comprador es correcto y sigue siendo el más importante del documento. Lo que el plan no resolvió es que esas empresas no buscan "balanceadora": buscan marca, usada, retrofit y capacidad. La campaña no tiene ninguna de esas cuatro formas fuera de la campaña Marca, que no se muestra. Y la lista de 25 empresas con nombre sigue siendo el activo más valioso de todo esto; Ads es, como mucho, el aviso de que alguien nuevo entró al mercado.
