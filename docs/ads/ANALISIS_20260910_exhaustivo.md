# Google Ads CIMAT — análisis exhaustivo (10/09/2026)

Cruce de cuatro miradas sobre los mismos 11 días de datos (31/08 al 10/09, cuenta JEREN `452-457-1142`):

1. Análisis propio del 10/09 (`ANALISIS_20260910_primeros_11_dias.md`).
2. Experto en Google Ads Search B2B (`expertos/experto_search.md`).
3. Experto en el comprador industrial de bienes de capital en LATAM (`expertos/experto_comprador.md`).
4. Experto en landing y experiencia de página de Google Ads (`expertos/experto_landing.md`).

Los tres expertos trabajaron sobre el mismo paquete de datos crudos (`expertos/datos_ads_cimat.md`), el plan original y el análisis previo, con la consigna de cuestionarlo. Este documento dice dónde coinciden, dónde discrepan, qué queda resuelto y qué necesita una decisión de Ariel.

Restricciones que no se discutieron: seis países, ARS 3.000/día, CPC manual.

Corrección previa: en la consigna a los expertos dije que CIMAT es italiana. **Es polaca** (Bydgoszcz, 1987). La italiana es CEMB. Lo señaló el experto en comprador y afecta un titular repetido en los anuncios ("Fabricadas en Polonia" como argumento de venta no le dice nada al comprador latinoamericano).

---

## 1. Lo que cambia respecto del análisis previo

Cinco cosas donde mi análisis del 10/09 estaba mal o corto, y los tres expertos coincidieron:

| Punto previo | Corrección | Quién lo marcó |
|---|---|---|
| "Todos los términos de `analizador de vibraciones` son marcas de analizadores" | Cierto como patrón, pero **solo el 21% del gasto (7 de 37 clics) es visible** en términos de búsqueda. El 79% está oculto por privacidad. Las decisiones van por keyword, no por término. | Search, Comprador |
| Negar `jp balancing` como marca de ruedas | **JP Balancing = Shanghai Jianping, fabricante chino de balanceadoras industriales.** Es el competidor real de gama baja. Quien lo busca compara máquinas. No se niega. | Search, Comprador |
| Pausar el grupo "Técnico en inglés" entero | El grupo no gastó nada. El daño es `balancing machine` en frase sirviendo anuncios en inglés a `coats 850` y `schenck balanceadora`. Se pausa esa frase y se dejan las exactas. | Search, Comprador |
| "Términos de servicio (`balanceo de cardan`, `balanceo dinamico`) sin costo, se dejan" | 28 impresiones sin clic bajan el CTR esperado, que es un tercio del QS, y van a costar en cuanto alguien haga clic. Se niegan ahora. `balanceo dinamico` **solo en exacta**: en frase mata `equipo de balanceo dinamico` y `maquina de balanceo dinamico`. | Los tres |
| "Mobile 63%: sospechoso" | Es la proporción base de búsqueda en LATAM. El dueño del taller busca desde el celular. Lo que sí importa es que la experiencia mobile de la landing es la peor de la página. | Los tres |
| "URL final por grupo hacia la sección de aplicaciones" | Los anchors no cambian la evaluación de landing (AdsBot ignora el fragmento) y `/aplicaciones` está organizada por industria, no por rotor. Hacen falta **subpáginas nuevas** con la keyword en el H1. | Landing, Comprador |
| "17% de pérdida por ranking se arregla desde el sitio" | La pérdida grande es por presupuesto (52%). Del ranking, la relevancia del anuncio (5 de 12 por debajo) se arregla desde Ads en una semana, y parte es puja (tope 1.200 contra pujas altas de 1.300 a 1.500 en el Planner). | Search, Landing |

---

## 2. Lo que los tres expertos vieron y yo no

**a) El grupo "Balanceo en sitio" es el 29% del gasto y vende un producto no confirmado.** El plan v2 descartó el bloque de balanceo en campo por falta de demanda, pero el grupo existe con anuncio propio. La landing sí menciona el equipo portátil SmaRT de CIMAT, así que el producto existe en catálogo; lo que nadie confirmó es que JEREN lo ofrezca y a qué precio. Es la pregunta más cara del informe.

**b) La campaña Marca está muda porque la Comercial le gana la subasta interna.** 1 impresión en 11 días sobre unas 200 búsquedas mensuales estimadas. `schenck balanceadora` y `schenck balancing machine` los sirvió la Comercial (puja 1.200) y no la Marca (puja 500, QS 1). Los términos de marca competidora son los de mayor intención de toda la cuenta.

**c) `balanceador de cigüeñal` con 11 impresiones y 0 clics es el damper del motor**, no la rectificadora. En Colombia, Venezuela y parte de Perú, "balanceador de cigüeñal" es la polea amortiguadora, un repuesto de USD 50. Negativa en frase para esa forma exacta.

**d) `balanceadora de turbinas` es el taller de turbos en Colombia y Perú** ("turbina" = turbo). Apareció dos veces por rebote de otras keywords y falta como positiva.

**e) Dos sitelinks rotos que Google sí ve.** "Consultar por WhatsApp" apunta a `/whatsapp`, que devuelve 404 desde que se borró la ruta. "Solicitar información" tiene la misma URL que la URL final, así que Google no lo sirve.

**f) Contradicción de rango en el anuncio en inglés:** "From 160 kg to 120 Tons" contra "5 kg a 20 toneladas" en la página. Hay que verificar cuál es el rango real de la ficha CIMAT antes de tocar ninguno de los dos.

**g) Copy para cinco de seis países.** "Factura Argentina", "Respaldo técnico desde Argentina", "Local Support in Argentina" en anuncios que se ven el 55% del tiempo fuera de Argentina, donde eso es una advertencia, no una promesa. En la landing, "el cliente no importa nada, compra a JEREN SRL con factura local" es falso para un peruano.

**h) La frase se comporta como amplia y "balanceadora" sola, para Google, es gomería.** `balanceadora de impulsores` disparó `apo 7052`; `balanceadora de rotores electricos` disparó `hofmann geodyna`; `balancing machine` disparó `coats 850`. Faltan marcas de balanceadoras de ruedas en negativas y exacta en los términos núcleo.

**i) La landing habla a la planta, y el que llega es el taller.** El hero muestra un rodillo de papelera; las tarjetas de problema hablan de "el OEM exige G2,5". El grupo con mejor CTR (cigüeñales y cardanes) aterriza en una página que dice "cardanes" una vez, "inducidos" cero, "ejes" cero. El QS de página bajo es de contenido, no solo de URL.

**j) 0 leads en 37 clics es el resultado estadísticamente más probable.** Con 24 clics calificados y una tasa de contacto del 3%, la probabilidad de ver cero es del 48%. El umbral para juzgar son 100 clics calificados, que al ritmo actual llegan a fin de octubre de 2026.

**k) Incoherencia interna:** la lista de negativas niega "analisis de vibraciones" y el anuncio del grupo titula "Análisis de Vibración". Se niega y se promociona lo mismo.

---

## 3. Discrepancias entre expertos, y cómo se resuelven

| Tema | Search | Comprador | Landing | Resolución |
|---|---|---|---|---|
| Negar `balanceador` suelto | Sí, en frase (en AR es el operario) | No: en contexto de bobinado puede ser comprador; negar solo `balanceador de cigueñal` y `balanceador armonico` | — | **Negar solo las formas del damper** (`balanceador de cigueñal`, `balanceador de cigüeñal`, `balanceador armonico`, `damper`). El caso de bobinado es más valioso que la impresión perdida. |
| Rango en titulares | Propone "De 160 kg a 120 Toneladas" (con nota de verificar) | — | La página dice 5 kg a 20 t | **Verificar con la ficha CIMAT antes de usar cualquier número en un titular.** Hasta entonces, el rango de la página. |
| Separar campañas por país | No: con 3.000/día partir en dos deja 1.500 por campaña | Sí: Cono Sur vs Andina | Sí, o variante por país en la landing | **Ahora: inserción de ubicación en los anuncios y un bloque "Fuera de Argentina" en la landing.** Campañas separadas recién cuando algún país muestre volumen propio y una conversión. |
| Campaña Marca | Mover las 14 keywords a dos grupos dentro de Comercial, puja 800 | Negativas de marca en Comercial, o mover | — | **Mover.** Dentro de una misma campaña la exacta gana sobre la frase y se termina el canibalismo sin negativas. |
| Grupo "Balanceo en sitio" | Pregunta al dueño; si no hay producto, pausar el grupo | Es la puerta a la empresa de servicio, pero sin página de SmaRT compra clics para nada | Página nueva `/cimat/balanceo-en-sitio` y pausar `analizador` | **Decisión de Ariel** (sección 6). Mientras tanto se pausa `analizador de vibraciones y balanceo` sí o sí. |
| Usadas (`usada`, `segunda mano` negadas) | Se quedan mientras el presupuesto sea el límite | Es el término más barato para hablar con una empresa de servicio, si JEREN toma usadas o hace retrofit | — | **Se quedan negadas.** Reabrir solo si JEREN decide ofrecer retrofit o toma de usada. |

---

## 4. Clasificación de los términos de búsqueda visibles

108 impresiones, 7 clics, ARS 8.060 visibles. Ocultos: 239 impresiones, 30 clics, ARS 30.913.

| Clase | Impr | Clics | ARS | Qué hacer |
|---|---|---|---|---|
| Compra de máquina | 44 | 4 | 4.560 | Titular literal, exacta donde la frase se desborda, subpágina propia |
| Servicio de balanceo | 28 | 0 | 0 | Negativas (exacta donde colisionan con positivas) |
| Instrumento de medición | 23 | 2 | 2.310 | Pausar la keyword que los trae, negativas por familia |
| Automotriz / ruedas | 5 | 1 | 1.190 | Negativas por marca y vocabulario regional |
| Marca competidora (Schenck, JP, TOB) | 6 | 0 | 0 | Grupo propio con puja 800, anuncio sin nombrar marcas |
| Damper (`balanceador de cigüeñal`) | 11 | 0 | 0 | Negativa en frase |

De los 7 clics visibles, 4 son compradores plausibles. Por keyword, el experto en comprador estima que ~67% del gasto total es comprador plausible y al menos 24% es seguro perdido (analizador + gomería).

La tabla término por término está en `expertos/experto_search.md` sección 3 y en `expertos/experto_comprador.md` sección 2.

---

## 5. Plan consolidado

### Fase 1. Hoy, en Ads, sin código (reversible, con datos)

1. Pausar `analizador de vibraciones y balanceo`.
2. Negativas nuevas en la lista compartida:
   - Instrumentos: `analizador`, `analizadores`, `analisis de vibracion`, `medidor`, `medidores`, `vibrometro`, `acelerometro`, `colector de datos`, `vibraciones mecanicas`, `monitoreo de condicion`, `skf`, `pce`, `rion`, `vibrex`, `vibracheck`, `vibropen`, `cmas`, `microlog`, `eva 625`, `fluke`, `adash`, `pruftechnik`, `erbessd`, `digivibe`, `emerson`.
   - Servicio, en frase: `balanceo de cardan`, `balanceo de cardanes`, `balanceo de ventiladores`, `balanceo de cigueñal`, `balanceo de cigueñales`, `balanceo de impulsores`, `balanceo de inducidos`, `balanceo de ejes`, `balanceo de turbos`, `balanceo de helices`, `empresa de balanceo`, `empresas de balanceo`, `servicios de balanceo`, `taller de balanceo`, `donde balancear`, `donde balancean`, `balanceo a domicilio`.
   - Servicio, **solo en exacta**: `[balanceo dinamico]`, `[balanceo dinámico]`, `[balanceo dinamico de rotores]`, `[balanceo dinamico de ventiladores]`, `[balanceo dinamico industrial]`, `[balanceo industrial]`, `[balanceo de rotores]`, `[balanceo estatico y dinamico]`.
   - Damper: `balanceador de cigueñal`, `balanceador de cigüeñal`, `balanceador armonico`, `damper`.
   - Ruedas: `apo`, `coats`, `beissbarth`, `microtec`, `geodyna`, `corghi`, `ravaglioli`, `hunter`, `john bean`, `sicam`, `fasep`, `launch`, `unite`, `rin`, `rines`, `aro`, `aros`, `montallantas`, `serviteca`, `llanteria`, `vulcanizadora`, `wheel`, `tire`, `tyre`, `carro`, `carros`, `vehiculo`, `vehiculos`, `motocicleta`.
   - Aeronáutica: `helicoptero`, `track and balance`.
   - Marketplaces y académico: `alibaba`, `temu`, `made in china`, `ppt`, `teoria`, `software`, `calculadora`, `excel`, `simulador`.
   - Documentación, reemplazo de `manual`: `manual de`, `manual pdf`, `manual de usuario`, `manual de operacion`.
3. **Quitar** la negativa `manual` (bloquea `balanceadora manual`, que es un tipo de máquina).
4. **No negar**: `jp balancing`, `hofmann` (Hofmann industrial es competidor real; se niega `geodyna`), `cemb`, `tob` (observar), `balanceador` suelto.
5. Borrar el sitelink `/whatsapp` (404). Cambiar el sitelink "Solicitar información" a `/cimat/aplicaciones`.
6. Callout "Repuestos en Argentina" pasa a "Kit de repuestos críticos" hasta confirmación escrita.
7. Sacar "Más de 40 años en industria" de titulares y callouts (CIMAT desde 1987 = 39 años; si refiere a JEREN, hay que poder probarlo).
8. El valor de la conversión del formulario **ya está cargado** (ARS 450.000 fijos, verificado por API el 10/09). El experto en Search lo dio por faltante; no hay nada que hacer.

### Fase 2. Esta semana, en Ads

9. Concordancia frase → exacta: `maquina balanceadora industrial`, `maquina para balancear rotores`, `balanceadora de impulsores`, `balanceadora de rotores electricos`, `balanceadora portatil`.
10. Pausar `balancing machine` en frase; agregar `[balancing machine]`, `[industrial balancing machine]`, `[horizontal balancing machine]`, `[hard bearing balancing machine]`, `[balancing machine price]` en exacta. Corregir el rango del anuncio en inglés una vez verificado. Cambiar "Local Support in Argentina" por "Support in Spanish and English".
11. Mover `balanceadora para cigueñales` de Ventiladores a Cigüeñales, y `balanceadora de ejes` de Cigüeñales a Ventiladores (único anuncio que dice "Ejes").
12. Agregar keywords: `balanceadora de turbinas` (frase y exacta, grupo Turbos), `balanceadora de rotores` (frase), `balanceadora horizontal`, `balanceadora vertical`, `balanceadora de armaduras`, `balanceadora de rotores de motores electricos`, `balanceadora de rodetes`, `balanceadora de volantes`, `maquina para balancear cigueñales`, `equilibradora dinamica`, `maquina de balanceamiento dinamico`, `modernizar balanceadora`, `retrofit balanceadora`. Todas de volumen mínimo y costo cero si no se buscan.
13. Anuncios: titulares con el texto literal de las keywords del grupo, fijados en posición 1 (dos o tres por grupo para que rote), CTA "Pida Cotización" en posición 3. Sacar las formas de servicio como titular ("Balanceo de Turbos", "Balanceo de Ventiladores", "Análisis de Vibración"). Reemplazar "desde Argentina" / "Factura Argentina" por inserción de ubicación `Atendemos {LOCATION(Country):Latinoamérica}`. "ISO 1940-1 / 21940-11" (el comprador de 50 años y el pliego viejo dicen 1940). Textos propuestos por grupo en `expertos/experto_search.md` sección 6.
14. Mover las 14 keywords de la campaña Marca a dos grupos dentro de Comercial ("Competencia" y "Marca propia"), puja 800. No borrar la campaña: pausarla, para no perder datos.
15. Extensiones: fragmentos estructurados ("Tipos: Horizontales, Verticales, Para cigüeñales, Para cardanes, Para turbos, Para rotores eléctricos"), WhatsApp como primer sitelink, logo y nombre de empresa. Formulario nativo de clientes potenciales como conversión secundaria, a prueba 30 días.
16. En GA4: dimensión "palabra clave de Ads de la sesión" cruzada con tasa de participación; conversión secundaria "sesión comprometida ≥60 s en /cimat".

### Fase 3. Esta semana, en el sitio (medio día, sin cambiar layout)

17. Frases literales que faltan en `cimat-content.ts`: "balanceadora dinámica", "máquina de balanceo dinámico", "balanceadora de rotores" en el subtítulo del hero; "cardanes, cigüeñales, inducidos (armaduras) y ejes" en la línea horizontal; "(equilibradora)" una vez; "asesoramiento sin cargo" en el microcopy del formulario (está en todos los anuncios y en la página cero veces).
18. Formulario: "Email corporativo" → "Email" (espanta talleres con Gmail); teléfono/WhatsApp visible y opcional; campo País; leer `?interes=` y `?linea=` de la URL; `form_error` con código.
19. **Bug de conversiones mejoradas**: `user-data.ts` asume +54. Un celular colombiano de 10 dígitos entra a Google como "+54300..." con dato falso. Sin prefijo confirmado, no mandar el teléfono.
20. Página de gracias: flag en sessionStorage para que `lead_conversion` no dispare en cada carga ni para bots del honeypot; botón de WhatsApp; "respondemos el día hábil siguiente por email o WhatsApp".
21. Header mobile: `tel:` visible; el logo de JEREN saca al visitante a jeren.com (una fuga en el elemento más visible de una landing paga; ya se había corregido y un commit posterior lo deshizo).
22. Sacar `@vercel/analytics` y el gtag directo de `/cimat` (GA4 dentro de GTM). `robots.ts` sin el Disallow de gracias (contradice el noindex).
23. Bloque "Fuera de Argentina" en soporte: exportación desde fábrica o desde Argentina, puesta en marcha en su planta, soporte remoto, "usted nacionaliza con su agente de aduana". Sin esto, el 44% del gasto aterriza en promesas falsas.

### Fase 4. Dos semanas, en el sitio: lo que mueve el QS

24. Subpáginas por grupo, con un componente "por rotor" alimentado desde `cimat-content.ts` (H1 con la keyword, intro, filas de specs, imagen, grado G, 2 FAQ, interés y línea predefinidos). En orden: `/cimat/balanceadora-de-cardanes-y-ciguenales` → `/cimat/balanceadora-de-ventiladores-e-impulsores` → `/cimat/balanceadora-de-turbos` → `/cimat/balanceo-en-sitio` (si Ariel confirma el producto). Asignarlas como URL final de cada grupo.
25. Rendimiento mobile: layout de `/cimat` sin Providers (next-themes forzado a light no aporta nada), FAQ con `<details>` nativo, Turnstile diferido al primer input, un solo formulario montado en mobile, solo la slide activa del carrusel en el DOM, slide 0 con `fetchPriority="high"`, sin autoplay. Objetivo: ≤120 KB de JS propio comprimido (hoy ~235 KB) y 3 terceros (hoy 5).
26. Hero mobile reordenado: H1 específico → subtítulo → 3 bullets → CTA y `tel:` → imagen → formulario. Un solo acceso a WhatsApp visible (hoy hay dos a 60 px de distancia, y el flotante tapa el botón de envío del formulario final).
27. Catálogo PDF de 5,27 MB a menos de 2 MB.

### Fase 5. Depende de decisiones de negocio (sección 6)

---

## 6. Decisiones que necesita Ariel

| # | Pregunta | Por qué importa | Qué pasa según la respuesta |
|---|---|---|---|
| 1 | **¿JEREN ofrece el equipo portátil SmaRT de CIMAT, y a qué precio?** | El grupo "Balanceo en sitio" es el 29% del gasto | Sí: se rehace el grupo con `balanceadora portatil` y `[equipo de balanceo dinamico portatil]` en exacta y se crea la página de SmaRT. No: se pausa el grupo entero. |
| 2 | **¿CIMAT confirmó por escrito la representación de JEREN?** | "Representante oficial" aparece en 8 lugares del sitio y en los anuncios. El comprador de USD 80k lo verifica en el sitio de CIMAT y, si no está, concluye "intermediario". Además es causal de tergiversación en Ads si la marca reclama. | Sí: pedir que CIMAT publique a JEREN en su lista de distribuidores. No: pasar a "Importa, instala y da soporte a balanceadoras CIMAT en Argentina" hasta que llegue. |
| 3 | **¿Hay stock de repuestos en Argentina?** | El callout dice "Repuestos en Argentina"; la página dice "kit crítico definido antes de la entrega, el resto desde Bydgoszcz". Contradicción visible en la negociación. | Sí: decir qué hay en stock. No: "Kit de repuestos críticos con la máquina". |
| 4 | **¿Cuál es el rango real de capacidad de la línea CIMAT?** | El anuncio en inglés dice 160 kg a 120 t; la página dice 5 kg a 20 t. | Corregir el que esté mal. |
| 5 | **¿Los logos de clientes de CIMAT (Siemens, ABB, Ford) están autorizados?** | Riesgo legal y de credibilidad si CIMAT los desmiente al comprador que llama a fábrica. | No: sacarlos. |
| 6 | **Plazo de entrega, meses de garantía y condiciones de pago.** | Son las tres primeras preguntas después del precio y no están en ningún lado. En Argentina, "¿en pesos o en dólares?" define la venta. | Con los datos se escriben en la landing y en una descripción de anuncio. |
| 7 | **¿Se publica una banda de precio por línea ("desde USD X")?** | Filtra al comprador de máquina china antes del clic. El competidor real del 70% de estas búsquedas es JP Balancing a USD 15k contra CMT-DS a USD 50k. | Si no, al menos "cotización en 48 h", que estaba en el plan y desapareció de los anuncios. |
| 8 | **¿JEREN hace retrofit o toma usadas?** | Es lo que la empresa de servicio de balanceo busca de verdad ("modernizar balanceadora", "balanceadora usada"), y hoy `usada` está negada. | Sí: reabrir `usada` y titular "Modernizamos su Schenck o Vetrano". |

---

## 7. Lo que NO hay que tocar todavía

- **Pujas por palabra, ajustes por dispositivo, país, horario y día de semana.** Entre 1 y 17 clics por celda: cualquier diferencia es ruido. Umbral: 100 clics por celda para CTR, 15 conversiones para conversión.
- **Presupuesto.** Fijo por decisión, y correcto: hoy compraría más de lo mismo. Después de la fase 1 se sabe cuánto tráfico limpio hay.
- **Smart Bidding, amplia, PMax, socios de búsqueda.** Con 0 conversiones es entregarle la cuenta a un algoritmo que solo conoce clics de instrumentos.
- **Colombia y Perú.** Decisión del 01/09. Lo que sí cambia es que la landing les tiene que decir algo verdadero (fase 3, punto 23).
- **Keywords con 0 impresiones** (21 en Comercial). No cuestan. El Planner tenía razón: "comprar" y "precio" no se buscan.
- **Negativas `usada`, `mantenimiento predictivo`, `reparacion de rotores`, `curso`.** Correctas mientras el presupuesto sea el límite.
- **Borrar la campaña Marca.** Pausar y mover, no borrar: se pierden los datos.

---

## 8. Contrato de medición

**A 14 días de la fase 1 y 2:**
- Gasto en términos de instrumentos, ruedas y damper = 0.
- Impresiones de formas verbales de servicio (`balanceo de X`, `balanceador de cigüeñal`) = 0.
- Cuota de impresiones de la campaña Comercial de 30% a más de 42% sin tocar presupuesto.
- Relevancia del anuncio "por debajo del promedio" de 5 a 2 o menos de 12 keywords.
- CPC promedio de ARS 1.053 a menos de 950.
- Al menos 10 impresiones en términos de marca competidora (hoy 6 en 11 días, con la campaña Marca muda).

Si la relevancia sube y el CPC no baja, el freno es la página.

**A 14 a 21 días de las subpáginas (fase 4):**
- Experiencia de página ≥ promedio en al menos la mitad de las keywords con dato (hoy 0 de 12).
- QS medio +2 puntos.
- Pérdida por ranking de 17% a menos de 10% con la misma puja. Si no baja, el resto es puja.
- `form_start` sobre sesiones cpc > 5%.

**Micro-conversiones que tienen que aparecer antes del primer lead** (sobre sesiones cpc calificadas): descarga de catálogo 8 a 15%, vista de especificaciones 15 a 25%, `form_start` 3 a 5%, sesión > 60 s 25 a 35%. Si en 100 clics calificados no aparece ninguna, el problema es la landing, no el volumen.

**Primer juicio sobre leads: fin de octubre de 2026**, con 100 clics calificados. Antes no dice nada.

Fuera de Ads: preguntar "¿cómo nos encontró?" en cada consulta que entre por mail, teléfono o WhatsApp, y cruzar por fecha. En este mercado el lead de Google llama un mes después, desde el fijo de la empresa, sin gclid.

---

## 9. Lo que Ads no va a resolver

Los tres expertos coinciden con el hallazgo central del plan original: las empresas de servicio de balanceo son el comprador, y no buscan "balanceadora". Buscan marca, capacidad, usada y retrofit. La lista de 25 empresas con nombre del plan sigue siendo el activo más valioso. Ads es, como mucho, el aviso de que alguien nuevo entró al mercado.

---

## Estado al cierre del 10/09

**Fase 1 aplicada el 10/09 por API**, autorizada por Ariel:
- `analizador de vibraciones y balanceo` pausada.
- 98 negativas nuevas en la lista compartida (de 106 a 204): 90 en frase, 8 en exacta.
- Negativa `manual` quitada.
- Sitelink "Solicitar información" recreado con URL `/cimat?interes=nueva-balanceadora` (distinta de la final); el viejo desvinculado. El sitelink `/whatsapp` ya estaba desvinculado a nivel campaña antes de hoy.
- Callout "Repuestos en Argentina" reemplazado por "Kit de repuestos críticos"; callout "Más de 40 años" desvinculado.
- Titular "Más de 40 Años en Industria" sacado de los 3 RSA que lo tenían (Máquina balanceadora, Cigüeñales y cardanes, Marca y competencia). Sin reemplazo: los titulares nuevos van en la fase 2.
- El valor de conversión ya estaba cargado; no se tocó.

Error propio durante la aplicación: el filtro para sacar el titular buscaba "40" y también borró "Precisión Según ISO 21940" en dos RSA. Se restauró en el momento. Guarda: filtrar por texto completo, nunca por substring numérico.

**Fase 3 aplicada el 10/09** (commit `621ee6a`, en producción): frases literales en el hero y la línea horizontal, formulario con País y teléfono visible, email sin "corporativo", `?interes=`/`?linea=` desde la URL, `form_error` con código, prefijo telefónico por país en conversiones mejoradas, gracias con flag de sessionStorage y WhatsApp, `tel:` en header mobile, logo sin salir de la landing, `@vercel/analytics` fuera de `/cimat`, robots sin Disallow, bloque "Fuera de Argentina". **Pendiente:** el gtag directo de GA4 sigue porque el contenedor GTM no tiene etiqueta GA4; primero agregarla en GTM, después borrar `ga4.tsx`.

**Fase 4 aplicada el 10/09** (commits `ad7ccd1` y `b8e9ee7`, en producción): tres subpáginas por rotor (`/cimat/balanceadora-de-cardanes-y-ciguenales`, `/cimat/balanceadora-de-ventiladores-e-impulsores`, `/cimat/balanceadora-de-turbos`) con H1 literal, specs, fotos, grados G, FAQ, JSON-LD, sitemap y bloque "Por tipo de rotor" en la landing; next-themes fuera de `/cimat`, FAQ nativa, Turnstile diferido al primer foco, un solo formulario en mobile, carrusel sin autoplay con una sola imagen en el DOM, hero mobile reordenado (H1 → bullets → CTA + tel → imagen → form), WhatsApp flotante que se oculta con la barra sticky y sobre el formulario. JS: de 229,7 KB a 223,5 KB comprimidos; **el objetivo de 120 KB no es alcanzable**: 183 KB son runtime de Next 16 / React 19, lo propio de la landing quedó en ~40 KB. **No hecho:** `/cimat/balanceo-en-sitio` (espera la decisión 1) y el PDF (sin Ghostscript; PyMuPDF no baja de 2,9 MB sin perder legibilidad).

**Fase 2 (Ads) aplicada el 10/09 por API:** anuncios nuevos en los 6 grupos con titulares literales fijados en posición 1, "Pida Cotización" en posición 3 e inserción de ubicación en vez de "Argentina"; URL final por rotor en Cigüeñales (`/cimat/balanceadora-de-cardanes-y-ciguenales`), Ventiladores (`/cimat/balanceadora-de-ventiladores-e-impulsores`) y Turbos (`/cimat/balanceadora-de-turbos`); 9 keywords pausadas (5 frases desbordadas, `balancing machine`, 2 mal ubicadas, 1 redundante); 31 keywords nuevas (exactas de reemplazo, turbinas, armaduras, rodetes, volantes, horizontal/vertical, equilibradora, balanceamiento, retrofit, inglés en exacta, y `balanceadoras de cardanes` en plural por el dato de Fabián); campaña Marca pausada y sus 14 keywords movidas a los grupos "Competencia" (+ `jp balancing`, `balanceadoras tob`, `hofmann balanceadora industrial`) y "Marca propia" dentro de Comercial, puja ARS 800; fragmento estructurado "Tipos". Sin números de capacidad en ningún titular (decisión 4 pendiente). No se hizo el formulario nativo de leads ni la conversión de sesión comprometida en GA4 (requieren la interfaz).

Errores propios durante la aplicación: (1) las descripciones de RSA iban como string y la API exige objetos `{"text"}`: el primer intento falló y dejó los grupos nuevos sin anuncio durante unos minutos, con la campaña Marca ya pausada. Guarda: validar con `validateOnly` antes de mutar anuncios. (2) La política de mayúsculas de Google rechazó dos anuncios por combinación de textos (cada texto pasaba solo): se sacó "Equipos CIMAT de Polonia" del grupo Balanceo en sitio y se reescribió la descripción de Marca propia sin "JEREN" en mayúsculas.

La fase 5 y las preguntas de la sección 6 son de Ariel.

Contrato de medición de la fase 1: revisar el **24/09/2026**.

---

## Search Console, 10/09 (después de las fases)

Se verificó `https://www.jeren.com/` como propiedad de `am@qubikcommerce.com` (etiqueta META en `app/layout.tsx`, commit `ca4e66e`). Token en `tec-harness/secrets/gsc.env`, script `tec-harness/src/oauth_gsc.py`; APIs de Search Console y Site Verification habilitadas en el proyecto GCP `793098567134`.

**Hallazgo: Google no conocía `/cimat`.** Inspección de URL al 10/09:

| URL | Estado |
|---|---|
| /cimat | Google no reconoce esta URL |
| /cimat/especificaciones | Google no reconoce esta URL |
| /cimat/aplicaciones | Google no reconoce esta URL |
| /cimat/normas-y-grados | Indexada, rastreada el 02/09 |
| las 3 subpáginas nuevas | Google no reconoce esta URL (tienen horas) |

El sitemap `https://www.jeren.com/sitemap.xml` figuraba enviado y leído por última vez en **julio de 2020**: Google no lo volvía a leer. Se reenvió el 10/09 (aceptado). Las únicas consultas orgánicas de CIMAT en 28 días fueron tres búsquedas de normas ISO sobre `/cimat/normas-y-grados`.

Esto explica la mitad orgánica de lo que vieron Fabián, Arturo y Nico: la landing no aparecía para ninguna búsqueda porque nunca estuvo en el índice, no solo porque le faltara contenido.

**Indexación solicitada por Ariel el 10/09** desde la interfaz de Search Console para `/cimat` y las tres subpáginas por rotor.

**Regla de validación (17/09/2026):** correr `python tec-harness/src/gsc_jeren.py`. Esperado: `/cimat`, `/cimat/balanceadora-de-cardanes-y-ciguenales`, `/cimat/balanceadora-de-ventiladores-e-impulsores` y `/cimat/balanceadora-de-turbos` en estado "Enviada e indexada", y el sitemap con fecha de lectura posterior al 10/09. Si alguna sigue en "Google no reconoce esta URL", el pedido no alcanzó: revisar en el mismo resultado si hay error de rastreo o canonical distinta, y volver a pedir la indexación. Segunda validación el 01/10: al menos una consulta orgánica con "cardan" o "cigüeñal" sobre la subpágina de cardanes en el informe de consultas.

**Sitio viejo (10/09):** Search Console mostraba 83 URLs del WordPress anterior con 404/403 y tráfico real (PDF de Senju: 19.256 impresiones y 234 clics en 16 meses). Se agregaron redirecciones 301 en `next.config.mjs` (commit `77eaa8a`) a la marca o categoría equivalente; verificadas en producción. Los cuatro PDF con tráfico se le pidieron a Fabián por mail; cuando lleguen, se suben en su URL original y se quita la redirección de cada uno. Validación con `python tec-harness/src/gsc_jeren_cobertura.py` el 01/10: las URLs viejas con impresiones deberían bajar de 83 y ya no dar 404.

