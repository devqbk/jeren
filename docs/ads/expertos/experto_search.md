# Auditoría Google Ads CIMAT / JEREN — 31/08 al 10/09/2026

Base: datos crudos por API (11 días, cuenta en ARS), plan v2 del 31/08 y análisis previo del 10/09.
Restricciones que no se discuten: seis países, ARS 3.000/día en Comercial, CPC manual.

---

## 1. Diagnóstico en cinco líneas

1. La campaña gasta ARS 38.973 en 37 clics (CPC 1.053, 88% del CPC máximo de 1.200) y pierde el 52% de la cuota por presupuesto: cada clic malo desplaza uno bueno, así que el problema número uno es **qué** se compra, no cuánto.
2. El informe de términos muestra sólo el 31% de las impresiones y el **21% del gasto** (7 de 37 clics). El 79% de la plata está en términos que Google oculta; toda conclusión sobre "qué se compró" es extrapolación de patrones, no lectura directa.
3. De lo visible, el 41% de las impresiones es intención de máquina, 26% servicio de balanceo, 21% instrumentos de medición, 5% ruedas, 6% marcas competidoras. El grupo "Balanceo en sitio" (29% del gasto) es el que trae instrumentos y depende de una pregunta que nadie respondió: **¿JEREN vende equipo portátil?**
4. La concordancia de frase se comporta como amplia: `balanceadora de impulsores` disparó `apo 7052` y `jp balancing`, `balanceadora industrial` disparó `schenck balancing machine`, `balanceadora de rotores electricos` disparó `hofmann geodyna 9000p`. Sin negativas por familia, las palabras de "nicho" son las que más ruido traen.
5. Quality Score: página de destino "por debajo del promedio" en 12 de 12; relevancia del anuncio "por debajo" en 5 de 12. El CPC pegado al tope (1.150–1.190 por clic) es la factura de ese QS: lo atacable desde Ads en una semana son los titulares; lo de la página es trabajo de sitio.

---

## 2. Hallazgos por impacto en plata

### H1 — `analizador de vibraciones y balanceo` compra instrumentos, no máquinas (ARS 8.217, 21%)

**Evidencia.** 78 impresiones, 7 clics, IS 18,6% (o sea que la demanda eligible es ~420 impresiones en 11 días: el mercado de instrumentos es 5–10 veces el de máquinas y se comería cualquier presupuesto). Términos visibles: 23 impresiones, todas de instrumentos (`skf analizador de vibraciones`, `pce vt 3900`, `rion va 12`, `vibrex 2000 plus`, `cmas100 sl`, `vibropen skf`, `eva 625`, `vibracheck 100 precio`, `medidor de vibraciones para motores`). Las otras 55 impresiones y 5 clics están ocultas; el patrón es unánime en lo visible, así que la extrapolación es razonable, pero es extrapolación. La palabra ni siquiera está en el plan v2: es un resto del plan v1 (bloque "balanceo de campo", que el Planner dio en cero).

**Incoherencia interna.** La lista de negativas tiene `analisis de vibraciones` y `medicion de vibraciones`, pero el anuncio del grupo lleva el titular "Análisis de Vibración". Se está negando y promocionando la misma cosa.

**Acción.** Pausar la palabra. Agregar la familia de negativas de instrumentos (sección 4). No reemplazarla por nada.

**Qué medir.** A 14 días: gasto en términos con `skf|pce|rion|vibrex|analizador|medidor` = 0; IS de la campaña sube de 30% a >42% sin tocar presupuesto (la plata liberada entra a las palabras de máquina, que hoy tienen IS 40–50%).

### H2 — El grupo "Balanceo en sitio" completo (ARS 11.153, 29%) depende de un producto que no está confirmado

**Evidencia.** El plan v2 sacó el bloque "balanceo de campo" por falta de demanda, pero el grupo existe con anuncio propio ("Equipos Portátiles", "Mida y corrija el desbalanceo en planta"). Lo que queda tras pausar H1 es `balanceadora portatil` (18 impr, 3 clics, ARS 2.936, QS 5 con relevancia de anuncio por encima del promedio) más dos palabras muertas. El término `equipo de balanceo dinamico portatil` apareció 4 veces disparando dos grupos distintos (este y "Máquina balanceadora"), o sea que hay demanda chica pero real de un equipo portátil.

**Acción.** Pregunta al dueño, antes que nada: ¿CIMAT/JEREN ofrece un equipo portátil de balanceo en campo? Si no, pausar el grupo entero y listo (junto con H1 son 29% del gasto). Si sí, dejar sólo `balanceadora portatil` en exacta más `[equipo de balanceo dinamico portatil]`, y sacar del anuncio "Análisis de Vibración" y "Equipos Portátiles" genérico.

**Qué medir.** Si se pausa: nada, es ahorro directo. Si queda: CTR y sesiones comprometidas en GA4 de esas dos palabras a 30 días; con <2% de sesiones comprometidas se pausa.

### H3 — Fuga de intención de servicio por variantes cercanas, sobre todo en `equipo de balanceo dinamico` (ARS 6.604, 17%)

**Evidencia.** Es la segunda palabra en gasto y sólo 9 de sus 41 impresiones son visibles. Entre las visibles ya aparece `balanceo dinamico` (el término de servicio más grande del rubro según el Planner: 70/mes en Argentina) y `balanceador dinamico`. Los 5 clics ocultos (ARS 5.446) pueden ser eso mismo. En todo el informe hay 28 impresiones visibles de forma verbal (`balanceo de cardan` 6, `balanceo dinamico` 6, `balanceador de cigueñal` 11, `balanceo de ventiladores` 3, etc.), con 0 clics, lo que a su vez baja el CTR esperado. La regla del plan ("balanceadora = máquina, balanceo de X = servicio") es correcta, pero las negativas nunca la implementaron: no hay una sola negativa que bloquee `balanceo de cardan` o `balanceo dinamico`.

**Conflicto a evitar.** `balanceo dinamico` en frase como negativa **mataría** `equipo de balanceo dinamico`, `maquina de balanceo dinamico` y `balanceo dinamico in situ equipo` (contienen la frase). Va en **exacta**, con y sin tilde.

**Acción.** Negativas exactas para las formas puras de servicio y de frase para las que no colisionan (lista en sección 4). Negativa `balanceador` / `balanceadores` en frase (en Argentina "balanceador" es el que presta el servicio; `balanceadora de cigueñales [EXACT]` está matcheando `balanceador de cigueñal` como variante cercana: 11 impresiones, 0 clics).

**Qué medir.** A 14 días: impresiones en términos que empiecen con `balanceo ` o `balanceador ` = 0; CTR de `balanceadora de cigueñales [EXACT]` sube de 4,8% (1/21).

### H4 — Quality Score: el CPC al tope es la consecuencia, y la mitad se arregla desde Ads

**Evidencia.** CPCs reales: 1.190, 1.183, 1.164, 1.158, 1.149, 1.146, 1.070 con puja máxima 1.200. Pagar el 88–99% de la puja máxima con posición mayoritariamente baja (top 26%, absoluta 10%) es la firma de un precio de reserva alto, que Google escala inversamente al QS. Componentes en las 12 palabras con dato:

| Componente | Por debajo | Promedio | Por encima |
|---|---|---|---|
| Página de destino | **12** | 0 | 0 |
| Relevancia del anuncio | 5 | 4 | 3 |
| CTR esperado | 2 | 5 | 5 |

Relevancia por debajo en: `balanceadora de cardan` (frase y exacta; el anuncio dice "Cardanes", no "Cardán"), `balanceadora dinamica` (ningún titular del grupo dice "Balanceadora Dinámica"; el más cercano es "Máquinas de Balanceo"), `balanceadora de ejes` (está en el grupo Cigüeñales, cuyo anuncio no menciona ejes), `omar vetrano` (inevitable en marca ajena). `maquina de balanceo dinamico` tiene QS 2 con CTR esperado por debajo: el titular literal no existe.

**Atacable desde Ads (esta semana):** titulares con el texto exacto de cada palabra, fijados en posición 1 (sección 6); mover `balanceadora de ejes` al grupo cuyo anuncio dice "Para Impulsores y Ejes" o darle titular propio; sacar `balanceadora para cigueñales` del grupo Ventiladores.

**Atacable sólo desde el sitio:** las 12 páginas de destino "por debajo". Los cuatro grupos van a `/cimat`; mandar Cigüeñales a `/cimat/aplicaciones` ayuda poco porque es la misma página para todos. Lo que mueve el componente es una URL por aplicación con el término en el H1 y en el primer párrafo (`/cimat/balanceadora-de-cardanes`, `/cimat/balanceadora-de-cigueñales`, `/cimat/balanceadora-de-turbos`), más velocidad en móvil (63% de las impresiones). Un ancla (`#cardanes`) no sirve: Google evalúa la URL, no el fragmento.

**Qué medir.** A 14 días de cambiar anuncios: relevancia "por debajo" pasa de 5 a ≤2; CPC promedio baja de 1.053 a <950. Si la relevancia sube y el CPC no baja, el freno es la página.

### H5 — Palabras de frase que actúan como amplia: 25 impresiones, 0 clics, y traen marcas de ruedas

**Evidencia.** `maquina balanceadora industrial [PHRASE]` (13 impr, 0 clics, disparó `balanceadoras tob`), `maquina para balancear rotores [PHRASE]` (12 impr, 0 clics, disparó `balanceadora de turbinas` y `balanceadoras tob`), `balanceadora de impulsores [PHRASE]` (26 impr, 4 clics, ARS 4.393: lo visible es `balanceadora apo 7052` con un clic de ARS 1.190 y `jp balancing`; las otras 23 impresiones y 3 clics no se ven, y "impulsores" no tiene ese volumen en ningún país: son variantes cercanas). `balanceadora de rotores electricos [PHRASE]` disparó `hofmann geodyna 9000p` (balanceadora de ruedas). `balancing machine [PHRASE]` disparó `balanceadora coats 850`, `beissbarth microtec 741` y `schenck balanceadora`: un anuncio en inglés servido a consultas en castellano.

**Acción.** Pasar a exacta: `maquina balanceadora industrial`, `maquina para balancear rotores`, `balanceadora de impulsores`, `balancing machine`. Negativas de marcas de balanceadoras de ruedas y de vocabulario automotriz regional (sección 4). Agregar `balanceadora de turbinas` como positiva, que hoy sólo entra de rebote.

**Qué medir.** A 14 días: impresiones de esas cuatro palabras bajan pero el CTR del grupo "Máquina balanceadora" sube de 7,5% (10/133) a >10%.

### H6 — La campaña Marca no sirve anuncios y la Comercial le roba los términos

**Evidencia.** 1 impresión en 11 días con 14 palabras; el Planner daba ~200 búsquedas/mes para ese set (`omar vetrano` 90, `abasteck` 50). IS <10%. Mientras tanto, en Comercial aparecen `schenck balancing machine` (vía `balanceadora industrial`) y `schenck balanceadora` (vía `balancing machine`): la Comercial puja 1.200 y la Marca 500, así que cuando las dos son elegibles gana la Comercial y la palabra `schenck balanceadora [PHRASE]` de Marca queda en cero. Además `omar vetrano` tiene QS 1 y la fuerza del anuncio es POOR (7 de 15 titulares repiten "CIMAT").

**Sentido de que exista.** Sí, pero como grupo, no como campaña: son los clics de mayor intención de toda la cuenta (alguien que escribe una marca de balanceadora industrial está comparando máquinas) y no cuestan nada cuando no sirven. Dos formas de arreglarlo:

- (a) Mover las 14 palabras a dos grupos dentro de Comercial ("Competencia" y "Marca propia"), puja 800. Dentro de una misma campaña, la exacta idéntica a la consulta gana sobre la frase, así que se termina el canibalismo sin negativas. Es lo que recomiendo.
- (b) Si se prefiere mantener la campaña aparte: negativas **a nivel de campaña Comercial** (no en la lista compartida, que aplica a las dos): `schenck`, `vetrano`, `abasteck`, `cemb`. Y subir la puja de Marca a 800, porque con QS 1–3 los 500 no superan el umbral.

**Riesgo legal y de política.** Pujar por marca ajena está permitido por Google en LATAM; lo que no se puede es escribirla en el anuncio (el titular "Compare Marcas de Balanceo" está bien; "Alternativa a Schenck" no). Con el nombre de una persona (`omar vetrano`) el criterio es el mismo. Ningún titular actual viola esto.

**Qué medir.** A 30 días: ≥10 impresiones en términos de marca ajena; CTR de esos términos (si es <3% con 30 impresiones, son búsquedas de servicio de Vetrano y se pausa ese trío, como dice el plan).

### H7 — Estructura: solapamientos entre grupos y palabras en el grupo equivocado

**Evidencia.**
- `equipo de balanceo dinamico portatil` disparó a la vez `equipo de balanceo dinamico` (grupo Máquina) y `balanceadora portatil` (grupo Balanceo en sitio): dos anuncios distintos compitiendo por la misma consulta.
- `balanceadora de turbinas` disparó `maquina para balancear rotores` (Máquina) y `balanceadora de turbos` (Turbos).
- `balanceo dinamico` disparó `balanceadora dinamica` y `equipo de balanceo dinamico`, ambas del mismo grupo (esto no daña, pero reparte datos).
- `balanceadora para cigueñales [PHRASE]` está en "Ventiladores y rotores"; si alguna vez sirve, mostrará el anuncio de ventiladores a un rectificador.
- `balanceadora de ejes [EXACT]` (QS 3, relevancia por debajo) está en Cigüeñales y el único anuncio que dice "Ejes" es el de Ventiladores.
- Redundancias sin costo: `balanceadoras industriales [EXACT]` (0 impr) es variante cercana de `balanceadora industrial [EXACT]` (7 impr); `balanceadora dinamica industrial [EXACT]` y `balanceadora de rotores industrial [PHRASE]` están cubiertas por `balanceadora industrial [PHRASE]` y `balanceadora dinamica [PHRASE]`.

**Palabras muertas (0 impresiones en 11 días):** 21 en Comercial (`comprar maquina balanceadora`, `precio maquina balanceadora industrial`, `balanceadora de turbocompresores`, `equipo para balancear turbos`, `maquina para balancear ventiladores`, `equipo de balanceo en campo`, `balanceo dinamico in situ equipo`, `balanceadora de cardanes [EXACT]`, `maquina balanceadora de cardan`, `maquina balanceadora de cigueñales`, `rotor balancing`, `dynamic/driveshaft/crankshaft balancing machine`, `core balancer`, etc.) y 13 de 14 en Marca. No cuestan nada y no hay que pausarlas por principio; lo que sí hay que entender es que el Planner tenía razón: la compra explícita ("comprar", "precio") no se busca.

**Faltantes evidentes.** `balanceadora de turbinas` (producto, hoy sólo entra por variante), `balanceadora de rotores [PHRASE]` (el plan la pedía en exacta + frase; sólo está la exacta), `balanceadora horizontal` / `balanceadora vertical` (vocabulario del que ya está especificando), `balanceadora de armaduras` (en Colombia y Perú "inducido" se dice "armadura"), `equilibradora dinamica` / `maquina equilibradora` (Chile y lectores de catálogo español), `maquina de balanceamiento` (uso en Chile y Perú). Todas de volumen mínimo y costo cero si no se buscan.

**Acción.** Ver sección 5.

### H8 — Anuncios: falta el texto de la palabra, sobra "Argentina" en cinco de seis países, y hay un dato falso

**Evidencia.**
- Ningún titular de "Máquina balanceadora" dice "Balanceadora Dinámica", "Balanceadora de Rotores" ni "Balanceadora Industrial", que son las palabras del grupo.
- "Balanceo de Ventiladores" y "Balanceo de Turbos" como titulares son la forma verbal de servicio que la propia campaña dice no querer; atraen justo los `balanceo de ventiladores` que aparecen con 0 clics.
- "Factura Argentina" (Cigüeñales), "Respaldo Técnico Local", "Respaldo técnico desde Argentina" en todas las descripciones: en Perú, Colombia y Chile (55% de las impresiones) JEREN es el proveedor extranjero y eso es una desventaja anunciada. El plan v2 ya lo advertía para la semana 8. Con una sola campaña, el único mecanismo es inserción de ubicación: `Atendemos {LOCATION(Country):Latinoamérica}`.
- "Más de 40 Años en Industria": si refiere a CIMAT (fundada 1987 según el propio anuncio en inglés), en 2026 son 39. Si refiere a JEREN, hay que poder probarlo. Un comprador de USD 80k verifica.
- Falta el filtro que el plan consideraba deliberado ("Vendemos la máquina, no el servicio") en todos los grupos salvo Cigüeñales; falta garantía y puesta en marcha fuera de Cigüeñales; el CTA "Solicite Información" es el más flojo posible para un lead B2B ("Pida Cotización" o "Cotización en 48 Horas" si el dueño lo banca).
- No hay dato de pines en el export. Si no hay ninguno, Google puede armar combinaciones sin el término de la palabra, que es exactamente lo que penaliza la relevancia.
- Fuerza AVERAGE en todos; POOR en Marca.

**Acción.** Sección 6.

**Qué medir.** CTR por grupo y relevancia del anuncio a 14 días; CTR de Perú y Colombia (hoy 9,2% y 13,3% sobre 76 y 60 impresiones: no distinguible de Argentina 11,3%).

### H9 — Extensiones: faltan las que más pesan en móvil y hay un número argentino en seis países

**Evidencia.** Hay 5 sitelinks razonables (Especificaciones, Aplicaciones, Normas, WhatsApp, Solicitar info), 6 callouts y una extensión de llamada `+54 11 4157 1427`. No hay fragmentos estructurados, ni formulario de clientes potenciales, ni logo/nombre de empresa, ni imagen con contenido (la única IMAGE está vacía). El export lista ~70 assets TEXT vacíos: son assets automáticos o restos de personalizadores; no cuestan, pero conviene mirar en la interfaz si hay "assets creados automáticamente" activados y apagarlos (Configuración de campaña → Assets automáticos).

**Acción.**
- Fragmentos estructurados, encabezado "Tipos": Horizontales, Verticales, Para cigüeñales, Para cardanes, Para turbos, Para rotores eléctricos.
- Formulario de clientes potenciales a nivel campaña (63% móvil; el usuario no tiene que cargar la landing). Campos: nombre, empresa, teléfono, país, "¿qué rotor balancea?". Conectar como conversión secundaria hasta ver calidad.
- Llamada: dejarla, pero los seis países la ven con prefijo +54; el sitelink de WhatsApp es el que trabaja fuera de Argentina. Poner WhatsApp como primer sitelink.
- Callout "Más de 40 años": misma corrección que en H8.
- Logo y nombre de empresa (JEREN).

**Qué medir.** Tasa de envío del formulario nativo vs formulario del sitio a 30 días; si el nativo trae basura (>50% sin empresa), se apaga.

### H10 — Cuota de impresiones: se pierde 52% por presupuesto y 17% por ranking; sin subir presupuesto, la palanca es la limpieza y el QS

**Evidencia.** IS 30%. Con CPC 1.053 y ARS 3.000/día entran 2,8 clics diarios; se gastaron 38.973 en 11 días (18% por encima del diario, dentro del margen de sobreentrega de Google, se compensa en el mes). Top 26%, absoluta 10%.

**Qué hacer sin subir presupuesto.**
1. H1 + H5 sacan ~25–30% del gasto de términos que no venden máquinas: pasa directo a las palabras de máquina.
2. QS +2 puntos en las palabras principales baja el precio de reserva; con CPC a 900 en vez de 1.053 son 17% más clics con la misma plata.
3. No bajar pujas por palabra todavía: con 1–7 clics por palabra no hay señal para diferenciar, y bajar la puja de una palabra con QS 3 la manda a no servir.
4. No tocar ajustes de dispositivo, horario ni país (ver sección 7).

**Qué medir.** IS de campaña a 14 días >42% y a 30 días >50%; IS perdida por ranking <12%.

### H11 — Medición: 0 conversiones no dice nada todavía, pero hay señales intermedias que sí

**Evidencia.** 37 clics, ~45 sesiones google/cpc, 0 contactos. Con una tasa de lead esperable de 2–4% para bien de capital, lo esperado en 37 clics es 0,7–1,5 leads: cero está dentro del azar. La conversión de WhatsApp se creó el 10/09, así que el período no la tiene.

**Acción.** En GA4, dimensión "palabra clave de Google Ads de la sesión" cruzada con tasa de participación y tiempo medio: es la única forma de ver qué palabras traen gente que lee, dado que el 79% del gasto está en términos ocultos. Marcar como conversión secundaria "sesión comprometida ≥60 s en /cimat" para tener señal antes del primer lead. Cargar el valor USD 300 a la conversión del formulario (el plan lo pedía y sigue sin estar).

**Qué medir.** Tasa de participación por palabra con ≥10 clics; las que estén por debajo de la mitad de la media del grupo se pausan a los 30 días.

---

## 3. Clasificación de todos los términos de búsqueda

Clases: **M** compra de máquina · **S** servicio de balanceo · **I** instrumento de medición · **R** automotriz/ruedas · **C** marca competidora · **A** académico/otro · **?** indeterminado.

| Término | Palabra que lo disparó | Impr | Clics | ARS | Clase | Qué hacer |
|---|---|---|---|---|---|---|
| balanceadora apo 7052 | balanceadora de impulsores | 2 | 1 | 1.190 | R (probable: modelo compacto, patrón de balanceadora de ruedas) | Negativa `apo` |
| balanceadora de cardan | balanceadora de cardan | 4 | 1 | 1.183 | M | Ya está como palabra |
| skf analizador de vibraciones | analizador de vibraciones y balanceo | 2 | 1 | 1.164 | I | Pausar palabra; negativas `skf`, `analizador` |
| maquina balanceo dinamico | equipo de balanceo dinamico | 1 | 1 | 1.158 | M | Bien |
| balanceadora dinamica de rotores | balanceadora dinamica de rotores | 3 | 1 | 1.149 | M | Bien |
| analizador de vibraciones skf precio | analizador de vibraciones y balanceo | 2 | 1 | 1.146 | I | Idem |
| balanceadora de rotores | balanceadora de rotores | 4 | 1 | 1.070 | M | Bien; agregar frase |
| balanceador de cigueñal | balanceadora de cigueñales | 9 | 0 | 0 | S (en AR "balanceador" es quien presta el servicio) | Negativa `balanceador` |
| balanceadora dinamica | balanceadora dinamica | 6 | 0 | 0 | M (ambiguo: también ruedas) | Titular literal |
| balanceo de cardan | balanceadora de cardan | 6 | 0 | 0 | S | Negativa frase |
| balanceo dinamico | balanceadora dinamica | 5 | 0 | 0 | S | Negativa exacta |
| equipos de balanceo dinamico | equipo de balanceo dinamico | 3 | 0 | 0 | M | Bien |
| analizador de vibraciones skf | analizador de vibraciones y balanceo | 3 | 0 | 0 | I | Idem I |
| equipo para balanceo dinamico | balanceadora dinamica de rotores | 2 | 0 | 0 | M | Bien |
| maquina de balanceo dinamico | maquina de balanceo dinamico | 2 | 0 | 0 | M | Titular literal (QS 2) |
| máquina de balanceo dinámico | maquina de balanceo dinamico | 2 | 0 | 0 | M | Idem |
| balanceadora industrial | balanceadora industrial | 2 | 0 | 0 | M | Titular literal |
| equipo de balanceo dinamico portatil | equipo de balanceo dinamico | 2 | 0 | 0 | M (si hay producto portátil) | Decidir H2 |
| equipo de balanceo dinamico portatil | balanceadora portatil | 2 | 0 | 0 | M | Solapamiento entre grupos |
| cmas100 sl | analizador de vibraciones y balanceo | 2 | 0 | 0 | I (SKF Machine Condition Advisor) | Negativa `cmas` |
| pce vt 3900 | analizador de vibraciones y balanceo | 2 | 0 | 0 | I | Negativa `pce` |
| balanceador de cigüeñal | balanceadora de cigueñales | 2 | 0 | 0 | S | Negativa `balanceador` |
| balanceadora de inducidos | balanceadora de inducidos | 2 | 0 | 0 | M | Bien |
| jp balancing machine | balancing machine | 2 | 0 | 0 | C (JP Balancing Machines, fabricante chino de balanceadoras industriales) | **No negar**; es comprador comparando |
| schenck balancing machine | balanceadora industrial | 1 | 0 | 0 | C | Va al grupo Competencia (H6) |
| balanceador dinamico | equipo de balanceo dinamico | 1 | 0 | 0 | S/? | Negativa `balanceador` |
| balanceo dinamico | equipo de balanceo dinamico | 1 | 0 | 0 | S | Negativa exacta |
| maquina para balanceo dinamico | equipo de balanceo dinamico | 1 | 0 | 0 | M | Bien |
| balanceadoras tob | maquina balanceadora industrial | 1 | 0 | 0 | ? | Observar; no negar |
| balanceadora de turbinas | maquina para balancear rotores | 1 | 0 | 0 | M | Agregar palabra en Turbos |
| balanceadoras tob | maquina para balancear rotores | 1 | 0 | 0 | ? | Observar |
| balanceadora de turbinas | balanceadora de turbos | 1 | 0 | 0 | M | Idem |
| balanceadora de turbos | balanceadora de turbos | 1 | 0 | 0 | M | Bien |
| hofmann geodyna 9000p | balanceadora de rotores electricos | 1 | 0 | 0 | R | Negativa `geodyna` (no `hofmann`: Marca tiene `hofmann balanceadora`) |
| balanceo de ventiladores | balanceadora de ventiladores | 1 | 0 | 0 | S | Negativa frase |
| balanceo de ventiladores industriales | balanceadora de ventiladores | 1 | 0 | 0 | S | Cubierta por la anterior |
| balanceo dinámico de ventiladores | balanceadora de ventiladores | 1 | 0 | 0 | S | Negativa exacta |
| jp balancing | balanceadora de impulsores | 1 | 0 | 0 | C | No negar |
| balanceadora portatil | balanceadora portatil | 1 | 0 | 0 | M | Decidir H2 |
| equipo para balanceo dinámico portátil | balanceadora portatil | 1 | 0 | 0 | M | Idem |
| analizador de vibraciones | analizador de vibraciones y balanceo | 1 | 0 | 0 | I | Negativa `analizador` |
| equipo analizador de vibraciones | analizador de vibraciones y balanceo | 1 | 0 | 0 | I | Idem |
| equipo de vibraciones mecanicas | analizador de vibraciones y balanceo | 1 | 0 | 0 | A/I (equipo de laboratorio) | Negativa `vibraciones mecanicas` |
| equipo de vibraciones skf | analizador de vibraciones y balanceo | 1 | 0 | 0 | I | Negativa `skf` |
| equipos para analisis de vibracion | analizador de vibraciones y balanceo | 1 | 0 | 0 | I | Negativa `analisis de vibracion` (singular; la actual es plural y no la cubre) |
| eva 625 | analizador de vibraciones y balanceo | 1 | 0 | 0 | I | Negativa `eva 625` |
| medidor de vibraciones para motores | analizador de vibraciones y balanceo | 1 | 0 | 0 | I | Negativa `medidor` |
| medidor de vibraciones skf | analizador de vibraciones y balanceo | 1 | 0 | 0 | I | Idem |
| rion va 12 | analizador de vibraciones y balanceo | 1 | 0 | 0 | I | Negativa `rion` |
| vibracheck 100 precio | analizador de vibraciones y balanceo | 1 | 0 | 0 | I | Negativa `vibracheck` |
| vibrex 2000 plus | analizador de vibraciones y balanceo | 1 | 0 | 0 | I | Negativa `vibrex` |
| vibropen skf | analizador de vibraciones y balanceo | 1 | 0 | 0 | I | Negativa `vibropen` |
| omar vetrano | omar vetrano (Marca) | 1 | 0 | 0 | C | Mantener; prueba de las 4 semanas |
| balanceadora de cigueñal | balanceadora de cigueñales | 1 | 0 | 0 | M | Bien |
| balanceadora de cigueñales | balanceadora de cigueñales | 1 | 0 | 0 | M | Bien |
| balanceador de inducidos | balanceadora de inducidos | 1 | 0 | 0 | S | Negativa `balanceador` |
| balanceadora de ejes | balanceadora de ejes | 1 | 0 | 0 | M (ambiguo con ejes de camión) | Titular propio |
| balanceadora coats 850 | balancing machine | 1 | 0 | 0 | R | Negativa `coats` |
| beissbarth microtec 741 | balancing machine | 1 | 0 | 0 | R | Negativa `beissbarth` |
| schenck balanceadora | balancing machine | 1 | 0 | 0 | C | Grupo Competencia (H6) |

**Totales visibles (108 impr / 7 clics / ARS 8.060):** M 44 impr, 4 clics, 4.560 · S 28 / 0 / 0 · I 23 / 2 / 2.310 · R 5 / 1 / 1.190 · C 6 / 0 / 0 · ? 2 / 0 / 0. **Ocultos: 239 impr / 30 clics / ARS 30.913.**

Por clase:
- **M**: son la campaña. Titular literal, exacta donde la frase se desborda, URL propia cuando exista.
- **S**: negativas (exactas donde colisionan con positivas). Una empresa de servicio que compra máquinas no escribe "balanceo de cardan", escribe "balanceadora de cardan"; lo primero lo escribe su cliente. No hay compradores escondidos ahí.
- **I**: pausar la palabra que los trae; negativas por familia (término genérico + marcas).
- **R**: negativas por marca y por vocabulario regional (ver 4).
- **C**: a un grupo propio con puja 800 y anuncio sin nombrar marcas. `jp balancing` y `schenck` son la prueba de que hay compradores comparando fabricantes; el análisis previo los trató como ruido.
- **?** (`tob`): observar dos semanas.

---

## 4. Negativas: lista exacta

### Agregar a la lista compartida (concordancia de frase salvo indicación)

**Instrumentos de medición (H1):**
`analizador`, `analizadores`, `analisis de vibracion`, `medidor`, `medidores`, `vibrometro`, `vibrometros`, `acelerometro`, `acelerometros`, `colector de datos`, `vibraciones mecanicas`, `monitoreo de condicion`, `skf`, `pce`, `rion`, `vibrex`, `vibracheck`, `vibropen`, `cmas`, `eva 625`, `fluke`, `adash`, `pruftechnik`, `vibxpert`, `erbessd`, `digivibe`, `emerson`, `csi 2140`

**Servicio de balanceo (H3) — en frase, ninguna colisiona con positivas:**
`balanceador`, `balanceadores`, `balanceo de cardan`, `balanceo de cardanes`, `balanceo de ventiladores`, `balanceo de cigueñal`, `balanceo de cigueñales`, `balanceo de impulsores`, `balanceo de inducidos`, `balanceo de ejes`, `balanceo de turbos`, `balanceo de helices`, `empresa de balanceo`, `empresas de balanceo`, `servicios de balanceo`, `taller de balanceo`, `donde balancear`, `donde balancean`, `balanceo a domicilio`

**Servicio de balanceo — en EXACTA (colisionarían con `equipo/maquina de balanceo dinamico` si fueran frase):**
`[balanceo dinamico]`, `[balanceo dinámico]`, `[balanceo dinamico de rotores]`, `[balanceo dinámico de rotores]`, `[balanceo dinamico de ventiladores]`, `[balanceo dinámico de ventiladores]`, `[balanceo dinamico industrial]`, `[balanceo industrial]`, `[balanceo de rotores]`, `[balanceo estatico y dinamico]`, `[balanceo estático y dinámico]`

**Automotriz / ruedas (H5), marcas y vocabulario regional:**
`apo`, `coats`, `beissbarth`, `geodyna`, `corghi`, `ravaglioli`, `hunter`, `john bean`, `sicam`, `launch`, `bosch`, `motos`, `motocicleta`, `motocicletas`, `carro`, `carros`, `coche`, `coches`, `vehiculo`, `vehiculos`, `camionetas`, `rin`, `rines`, `aro`, `aros`, `montallantas`, `serviteca`, `servitecas`, `llanteria`, `llanterias`, `vulcanizadora`, `vulcanizacion`, `wheel`, `tire`, `tyre`, `car`

**Marketplaces / baratas:** `alibaba`, `temu`, `made in china`

**Académico / software:** `ppt`, `diapositivas`, `teoria`, `software`, `app`, `calculadora`, `calculo de`, `excel`, `simulacion`, `simulador`

**Documentación (reemplazo de `manual`):** `manual de`, `manual pdf`, `manual de usuario`, `manual de instrucciones`, `manual de operacion`

### Agregar SOLO a nivel campaña Comercial (no a la lista compartida), únicamente si la campaña Marca sigue separada
`schenck`, `vetrano`, `abasteck`, `cemb`. Si se aplica la opción (a) de H6 (mover a grupos dentro de Comercial), no van.

### Quitar
- `manual`: en frase bloquea `balanceadora manual` (tipo de máquina, semiautomática, comprador real) y `balanceadora de cardan manual`. La intención era bloquear manuales de uso; lo cubren `pdf`, `descargar` y las cinco de arriba.

### Revisadas y se quedan, con la razón
- `balanceo de turbinas`: **no** bloquea `balanceadora de turbinas` (la negativa de frase exige la secuencia exacta de palabras y "balanceadora" ≠ "balanceo"; de hecho `balanceadora de turbinas` tuvo 2 impresiones). Sí bloquea `maquina de balanceo de turbinas`, comprador, pero de volumen ínfimo; el costo de abrirla es recibir los 20/mes de servicio. Se compensa con la positiva `balanceadora de turbinas`.
- `mantenimiento predictivo`: quien lo busca compra servicio o instrumento (justo lo de H1). Se queda.
- `reparacion de rotores`: es el cliente del bobinador, no el bobinador. El bobinador que quiere comprar escribe `balanceadora de inducidos`, que ya está. Se queda.
- `servicio de balanceo`, `quien balancea`, `balanceo por contrato`: idem.
- `usada`, `usadas`, `usado`, `segunda mano`: con 52% de cuota perdida por presupuesto, cada clic tiene que ser de máxima intención; el que busca usada arranca con un tercio del presupuesto de una CIMAT. Reabrir recién cuando el presupuesto deje de ser el cuello de botella.
- `analisis de vibraciones`, `medicion de vibraciones`: se quedan, y ahora son coherentes con pausar H1.
- `auto`: en frase no toca `automatica` (palabra distinta). Se queda.
- `curso`, `cursos`: quien busca curso de balanceo no compra máquina este trimestre. Se quedan.

### Conflictos actuales negativa ↔ positiva
Ninguno hoy: ninguna positiva contiene una negativa. Los que hay que evitar al agregar: `balanceo dinamico` en frase (mata 3 positivas), `hofmann` (mata `hofmann balanceadora` de Marca, la lista es compartida), `cemb` en la lista compartida (mata `cemb balanceadora`), `balanceo` o `vibraciones` sueltas.

---

## 5. Keywords: pausar / agregar / cambiar concordancia

### Pausar
| Grupo | Palabra | Por qué |
|---|---|---|
| Balanceo en sitio | `analizador de vibraciones y balanceo [PHRASE]` | H1: 21% del gasto en instrumentos |
| Balanceo en sitio | `equipo de balanceo en campo`, `balanceo dinamico in situ equipo` | 0 impr; el Planner ya las dio en cero; si se pausa el grupo (H2) van con él |
| Técnico en inglés | `balancing machine [PHRASE]` | Sirve anuncio en inglés a consultas en castellano; se reemplaza por exacta |
| Máquina balanceadora | `balanceadoras industriales [EXACT]` | Redundante con `balanceadora industrial [EXACT]` (plural = variante cercana); sólo reparte datos |
| Marca | `hofmann balanceadora [PHRASE]` | Hofmann en LATAM es geodyna (ruedas); la línea industrial no se busca así. Reemplazar por `[hofmann balanceadora industrial]` si se quiere conservar |

### Cambiar concordancia (frase → exacta)
| Grupo | Palabra | Por qué |
|---|---|---|
| Máquina balanceadora | `maquina balanceadora industrial` | 13 impr, 0 clics, trajo `balanceadoras tob` |
| Máquina balanceadora | `maquina para balancear rotores` | 12 impr, 0 clics, trajo `turbinas` y `tob` |
| Ventiladores y rotores | `balanceadora de impulsores` | 26 impr con "impulsores" (no tiene ese volumen); trajo `apo 7052` (ARS 1.190) y `jp balancing`; 23 impr y 3 clics ocultos |
| Ventiladores y rotores | `balanceadora de rotores electricos` | Trajo `hofmann geodyna 9000p` |
| Balanceo en sitio | `balanceadora portatil` | Si el grupo sigue (H2): "portátil" también es ruedas de moto |

Se quedan en frase, con las negativas nuevas como red: `equipo de balanceo dinamico`, `balanceadora dinamica`, `balanceadora industrial`, `balanceadora de cardan`, `balanceadora de cigueñales`, `balanceadora de turbos`, `balanceadora de ventiladores`, `maquina de balanceo dinamico`.

### Mover de grupo
| Palabra | De | A | Por qué |
|---|---|---|---|
| `balanceadora para cigueñales [PHRASE]` | Ventiladores y rotores | Cigüeñales y cardanes | Anuncio equivocado si sirve |
| `balanceadora de ejes [EXACT]` | Cigüeñales y cardanes | Ventiladores y rotores | Único anuncio que dice "Ejes"; QS 3 por relevancia |
| Las 14 de Marca | Campaña Marca | Comercial, grupos "Competencia" (10) y "Marca propia" (4: `cimat argentina`, `cimat balancing`, `cimat balanceadoras`, `maquinas balanceadoras cimat`) | H6, opción (a). Puja 800 |

### Agregar
| Grupo | Palabra | Concordancia | Por qué |
|---|---|---|---|
| Turbos | `balanceadora de turbinas` | Frase | Producto; hoy entra por variante en dos grupos |
| Turbos | `balanceadora de turbinas` | Exacta | Idem, para reporte limpio |
| Máquina balanceadora | `balanceadora de rotores` | Frase | El plan la pedía; sólo existe la exacta |
| Máquina balanceadora | `balanceadora horizontal`, `balanceadora vertical` | Frase | Vocabulario de quien especifica; costo cero si no hay volumen |
| Máquina balanceadora | `equilibradora dinamica`, `maquina equilibradora` | Frase | Chile / catálogo español; `equilibradora de turbos` ya tuvo 1 impr |
| Máquina balanceadora | `maquina de balanceamiento dinamico` | Frase | Chile y Perú usan "balanceamiento" |
| Ventiladores y rotores | `balanceadora de armaduras` | Frase | Colombia y Perú: "armadura" = inducido |
| Ventiladores y rotores | `balanceadora de rotores de motores electricos` | Frase | Bobinadores |
| Técnico en inglés | `[balancing machine]`, `[industrial balancing machine]`, `[horizontal balancing machine]`, `[balancing machine price]` | Exacta | Reemplazo de la frase |
| Balanceo en sitio (si sigue) | `[equipo de balanceo dinamico portatil]` | Exacta | 4 impr repartidas en dos grupos |

### No agregar, aunque tiente
- `maquina balanceadora [EXACT]`: en Colombia y Perú "máquina balanceadora" a secas es la de ruedas.
- `balanceo de campo`, `field balancing`: el Planner los dio en cero y el grupo Balanceo en sitio ya lo demostró.
- Marcas de empresas de servicio (SMISAC, TCHEM, Fasecor): quien las busca quiere que le balanceen algo. El plan tiene razón; son pipeline de venta directa, no de Ads.

---

## 6. Anuncios por grupo (texto propuesto)

Regla general: pinear en **posición 1** los titulares que llevan el texto literal de las palabras del grupo (dos o tres, para que Google rote entre ellos), el CTA en posición 3, nada más pineado. La fuerza va a bajar a AVERAGE o GOOD; la relevancia sube, que es lo que cobra. Sacar de todos los grupos "Más de 40 Años en Industria" hasta que se pruebe (CIMAT desde 1987 = 39 años en 2026). `{LOCATION(Country):Latinoamérica}` es inserción de ubicación: en Argentina muestra "Argentina", en Perú "Perú".

### Máquina balanceadora
Titulares (≤30):
1. Balanceadora Dinámica — pin 1
2. Balanceadora de Rotores — pin 1
3. Balanceadoras Industriales — pin 1
4. Máquina de Balanceo Dinámico — pin 1
5. Balanceadoras CIMAT
6. Horizontales y Verticales
7. De 160 kg a 120 Toneladas *(verificar con la ficha; está en el anuncio en inglés)*
8. Fabricante Polaco Desde 1987
9. Vendemos Máquinas, No Servicio
10. Atendemos {LOCATION(Country):Latinoamérica}
11. Puesta en Marcha y Garantía
12. Repuestos y Capacitación
13. Precisión Según ISO 21940
14. Pida Cotización — pin 3
15. Ingeniería de Aplicación

Descripciones (≤90):
1. Balanceadoras CIMAT horizontales y verticales, según su rotor y su producción.
2. Vendemos la máquina, no el servicio: para que balancee usted, en su planta.
3. Fabricante monoproducto desde 1987. Repuestos, garantía y soporte técnico en español.
4. Indíquenos peso, diámetro y rpm del rotor y le enviamos la especificación y el precio.

Sacar: "Máquinas de Balanceo" (genérico), "Respaldo Técnico Local" y "desde Argentina" en descripciones (5 de 6 países), "Más de 40 Años".

### Cigüeñales y cardanes
Titulares:
1. Balanceadora de Cigüeñales — pin 1
2. Balanceadora de Cardán — pin 1 *(la palabra es "cardan"; hoy sólo dice "Cardanes" y la relevancia está por debajo)*
3. Balanceadora de Cardanes — pin 1
4. Balanceadora de Inducidos — pin 1
5. Para Rectificadoras de Motores
6. Para Talleres de Cardanes
7. CIMAT, Fabricante Desde 1987
8. Puesta en Marcha y Garantía
9. Capacitación a su Equipo
10. Vendemos Máquinas, No Servicio
11. Atendemos {LOCATION(Country):Latinoamérica}
12. Pida Cotización — pin 3
13. Repuestos y Soporte Técnico

Descripciones: las cuatro actuales son buenas; cambiar "Respaldo desde Argentina" por "Soporte técnico en español" y sacar "Factura Argentina" de los titulares (o dejarlo sólo si se separa una campaña Argentina más adelante).

### Turbos
Titulares:
1. Balanceadora de Turbos — pin 1
2. Balanceadora de Turbinas — pin 1
3. Equilibradora de Turbos — pin 1
4. Para Turbocompresores
5. Alta Velocidad y Precisión
6. Para Talleres y Plantas
7. Equipos CIMAT de Polonia
8. Vendemos Máquinas, No Servicio
9. Puesta en Marcha y Garantía
10. Atendemos {LOCATION(Country):Latinoamérica}
11. Pida Cotización — pin 3

Sacar "Balanceo de Turbos" (forma de servicio). Descripción 3 nueva: "Balanceadoras CIMAT para turbocompresores, turbinas y piezas de alta rotación."

### Ventiladores y rotores
Titulares:
1. Balanceadora de Ventiladores — pin 1
2. Balanceadora de Impulsores — pin 1
3. Balanceadora de Rotores — pin 1
4. Balanceadora de Ejes *(si se mueve la palabra acá)*
5. Para Rotores Eléctricos
6. Para Bobinados y Ventiladores
7. Horizontales y Verticales
8. Equipos CIMAT de Polonia
9. Vendemos Máquinas, No Servicio
10. Puesta en Marcha y Garantía
11. Atendemos {LOCATION(Country):Latinoamérica}
12. Pida Cotización — pin 3

Sacar "Balanceo de Ventiladores" (trajo 3 impresiones de servicio, 0 clics).

### Balanceo en sitio (sólo si H2 confirma producto)
Sacar "Análisis de Vibración" y "Balanceo de Campo". Pin 1: "Balanceadora Portátil", "Equipo de Balanceo Portátil", "Balanceo Dinámico In Situ". Agregar "Vendemos el Equipo, No el Servicio" (30). Si no hay producto, pausar el grupo y no tocar el anuncio.

### Técnico en inglés
Está bien escrito. Agregar "Request a Quote" como CTA (hoy "Request Information") y "Balancing Machines for LATAM". Cambiar "Local Support in Argentina" por "Support in Spanish and English". Pin 1 en "CIMAT Balancing Machines" y "Rotor Balancing Machines".

### Competencia (ex Marca) — sin nombrar marcas
Titulares: Balanceadoras CIMAT — pin 1 · Compare Antes de Decidir — pin 1 · Fabricante Polaco Desde 1987 · Horizontales y Verticales · De 160 kg a 120 Toneladas · Puesta en Marcha y Garantía · Repuestos en Argentina · Vendemos Máquinas, No Servicio · Ingeniería de Aplicación · Pida Cotización — pin 3 · Distribuidor CIMAT: JEREN *(sólo cuando CIMAT publique a JEREN en su sitio; "oficial" no hasta entonces)*.
Sacar los duplicados con "CIMAT" (hoy son 7 de 15: eso es el POOR).

### Marca propia
Dejar el anuncio actual de Marca con "CIMAT en Argentina" y "CIMAT | Distribuye JEREN" pineados en 1; es el único grupo donde la repetición de la marca es correcta.

---

## 7. Lo que NO hay que tocar todavía y por qué

| Tema | Dato | Por qué no |
|---|---|---|
| Ajuste por dispositivo | Móvil 219 impr / 24 clics / CTR 11,0% / CPC 1.037; escritorio 127 / 13 / 10,2% / 1.083 | Indistinguibles. 63% móvil no es sospechoso: es la proporción base de búsqueda en LATAM en cualquier rubro, B2B incluido. Ingenieros de planta buscan desde el celular. Hace falta ≥100 clics por dispositivo con tasa de participación en GA4 para decidir |
| Ajuste por país | AR 150/17 (CTR 11,3%, CPC 975); CO 60/8 (13,3%, 1.122); PE 76/7 (9,2%, 1.173); CL 54/4 (7,4%, 1.003); UY 5/1; PY 2/0 | Con 4–17 clics por país cualquier diferencia de CTR es ruido. El único dato estructural: CO y PE pagan al tope de puja y AR 20% menos, o sea que fuera de Argentina la subasta es más dura o el QS es peor (anuncio que dice "Argentina"). Se ataca por copy (H8), no por puja |
| Horario | 0–7 h: 36 impr, 4 clics, ARS 4.450 (11%) | Seis países en tres husos: "3 h" de la cuenta es 1 h en Lima. Además 4 clics. Sin base |
| Día de semana | Sáb+dom: 52 impr, 6 clics, ARS 7.019 (18%) | 6 clics. Para B2B el fin de semana suele ser peor, pero esta cuenta no lo demostró. Reevaluar con 30 días y tasa de participación por día |
| Pujas por palabra | Todas heredan 1.200 del grupo | 1–7 clics por palabra. Bajar la puja de una palabra con QS 3 la manda a no servir; subirla no cambia nada con 52% perdido por presupuesto |
| Presupuesto | Fijo por decisión | Y correcto: hoy compraría más de lo mismo. Recién después de H1–H5 se sabe cuánto tráfico limpio hay |
| Smart Bidding, amplia, PMax, socios de búsqueda | 0 conversiones | Con menos de 15 conversiones es entregarle la cuenta a un algoritmo que sólo conoce clics de instrumentos |
| eCPC | Aparece en False | Google retiró el CPC mejorado para Búsqueda en 2025; el plan v2 lo pedía y ya no existe. Manual es lo que hay |
| Palabras con 0 impresiones | 21 en Comercial | No cuestan. Pausarlas es prolijidad, no plata |
| Negativas `usada`, `mantenimiento predictivo`, `reparacion de rotores` | Ver sección 4 | Correctas mientras el presupuesto sea el límite |
| Landing por aplicación | 12/12 páginas "por debajo" | Es trabajo de sitio y lleva semanas; no bloquea los cambios de Ads, que se hacen hoy. Hacerlo en paralelo con Cigüeñales/cardanes primero (grupo con más demanda medida en Argentina) |
| Separar campaña Argentina vs resto | 43% del gasto en AR | Con 3.000/día partir en dos deja 1.500 por campaña: peor. Es la revisión de la semana 8 del plan, y sólo si algún país muestra volumen propio y una conversión |
| Borrar la campaña Marca | 1 impr | No borrar: mover (H6). Los datos de las palabras se pierden si se borran |

Umbral de decisión para cualquier segmento: no cortar por CTR con menos de 100 clics por celda, ni por conversión con menos de 15 conversiones acumuladas. Con 3 clics diarios eso son semanas, no días; en el medio, la única señal utilizable es la tasa de participación en GA4 por palabra.

---

## 8. Dónde discrepo del análisis previo

1. **"Todos sus términos son marcas de analizadores."** Lo visible es el 29% de las impresiones de esa palabra (23 de 78) y 2 de 7 clics. La conclusión es correcta como patrón y la acción también, pero conviene escribirlo como extrapolación: el 79% del gasto de la campaña está en términos ocultos y el análisis previo no lo dice.

2. **`jp balancing` como marca de ruedas.** JP Balancing Machines (Jianping, Shanghái) fabrica balanceadoras industriales: es competencia directa de gama baja, y quien la busca en LATAM compara máquinas. No va a negativas; es la señal opuesta.

3. **Pausar todo el grupo "Técnico en inglés".** El grupo no gastó un peso (19 impr, 0 clics). El daño real es que `balancing machine [PHRASE]` sirve anuncios en inglés a `schenck balanceadora` y `coats 850`. Se pausa la frase y se dejan exactas; el costo de mantenerlas es cero y son las únicas palabras que hablan el idioma del ingeniero que lee la ficha de CIMAT.

4. **"Es el 17% de pérdida por ranking, y se arregla desde el sitio."** La pérdida grande es por presupuesto (52%), no por ranking. Y del ranking, la relevancia del anuncio (5 de 12 por debajo) se arregla desde Ads en una semana; la página es un componente, no el todo. Mandar los grupos a `/cimat/aplicaciones` no cambia el componente de página: es la misma URL para todos.

5. **"Términos tipo `balanceo de cardan`, `balanceo dinamico`: sin costo, se dejan."** 28 impresiones a 0 clics bajan el CTR esperado, que es un tercio del QS, y van a recibir clics tarde o temprano. Se negan ahora, con la salvedad de que `balanceo dinamico` sólo puede ir en exacta.

6. **"Mobile 63%: sospechoso."** No lo es; es la base del mercado. Lo que sí sería una señal es la tasa de participación por dispositivo en GA4, que no se miró.

7. **Faltó el grupo "Balanceo en sitio" como problema de producto.** El análisis previo trató la palabra de analizadores; el grupo entero (29% del gasto) existe para un producto que el plan v2 había descartado por falta de demanda y que nadie confirmó que JEREN venda. Es la pregunta más cara del informe.

8. **Faltó la campaña Marca.** 1 impresión en 11 días sobre ~200 búsquedas/mes estimadas es un fallo de entrega, y la causa (puja 500 con QS 1 más canibalización desde Comercial) está en los datos.

9. **Faltó la estructura.** Solapamientos entre grupos, palabras en el grupo equivocado, frase comportándose como amplia, y la incoherencia entre negar `analisis de vibraciones` y titular "Análisis de Vibración".

10. **Faltó el copy para cinco de seis países.** "Factura Argentina", "Respaldo desde Argentina" y "Respaldo Técnico Local" en anuncios que se muestran 55% del tiempo fuera de Argentina, y el "Más de 40 años" que la aritmética del propio anuncio en inglés desmiente.

---

## Orden de ejecución sugerido

1. Hoy: responder H2 (¿hay producto portátil?). Pausar `analizador de vibraciones y balanceo`. Cargar negativas de la sección 4. Quitar `manual`.
2. Esta semana: concordancias y movimientos de la sección 5; anuncios de la sección 6; fragmentos estructurados y formulario de leads; valor USD 300 en la conversión; conversión secundaria de sesión comprometida en GA4.
3. Semana 2: mover Marca a grupos dentro de Comercial.
4. Día 14: contrato de medición: IS >42%, gasto en términos de instrumentos y ruedas = 0, relevancia "por debajo" ≤2 de 12, CPC <950, impresiones de formas verbales de servicio = 0.
5. Día 30: tasa de participación por palabra; pausar las que estén por debajo de la mitad de la media del grupo; decidir Vetrano; primera revisión de fin de semana con datos.
6. En paralelo, sitio: una URL por aplicación empezando por cigüeñales y cardanes.
