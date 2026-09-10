# Google Ads CIMAT — análisis de los primeros 11 días (31/08 al 10/09/2026)

Cuenta JEREN `452-457-1142`. Datos bajados por API el 10/09/2026. Análisis pedido por
Ariel el mismo día, disparado por un contacto de WhatsApp que Fabián atribuyó a "la
página" y que no figuraba en Ads.

## Qué pasó con ese contacto

- Ads registraba 0 conversiones. La única conversión configurada era la del formulario.
- El único formulario enviado desde el 31/08 fue la prueba de Ariel (Mar del Plata).
- GA4 (leído por API, acceso montado ese día) mostró 4 clics en botones de WhatsApp:
  dos de Mar del Plata (pruebas), y **dos el 03/09 desde San Bernardo del Tuyú, tráfico
  directo, desktop**. Ninguno de `google / cpc`. Ese es el contacto de Fabián: **no vino
  de la campaña**.
- Hubo ~45 sesiones de `google / cpc` en el período y ninguna tocó WhatsApp, teléfono,
  mail ni formulario.

Lo que se arregló ese día para que no vuelva a pasar:

1. El mensaje prellenado de WhatsApp lleva `(ref. G-MMDD)` cuando la visita trae gclid
   (`components/cimat/whatsapp.ts`, commit `cb3eec7`, en producción).
2. Conversión secundaria `CIMAT — WhatsApp clic` en Ads
   (`conversionActions/7757884979`, `AW-18420339644/h_X4CLPcn_McELynwM9E`).
3. GTM versión 4: trigger `Evento - whatsapp_click` + tag `Ads - Conversión CIMAT WhatsApp`.

## Números

| Campaña | Impr | Clics | Gasto ARS | IS | Perdida por ppto | Perdida por rank |
|---|---|---|---|---|---|---|
| Comercial (ARS 3.000/día) | 346 | 37 | 38.973 | 30% | 52% | 17% |
| Marca (ARS 1.000/día) | 1 | 0 | 0 | — | — | — |

CPC promedio ARS 1.053. Conversiones: 0. Mobile 63% de impresiones y 64% del gasto.
Por país: Argentina 43% del gasto, Colombia 23%, Perú 21%, Chile 10%, Uruguay 3%.

## Hallazgos (en orden de plata)

**1. `analizador de vibraciones y balanceo` es la keyword más cara y no vende máquinas.**
ARS 8.217 (21% del total), 7 clics, IS 18%. Todos sus términos son marcas de
analizadores portátiles: SKF, PCE VT 3900, Rion VA 12, Vibrex 2000, EVA 625, CMAS100,
Vibropen. Gente comprando un instrumento de USD 2.000. La lista de negativas tiene
`analisis de vibraciones` y `medicion de vibraciones` pero no `analizador`.
→ Pausar la keyword. Negativas: `analizador`, `medidor de vibraciones`, `skf`.

**2. Marcas de balanceadoras de ruedas que se cuelan.** `apo 7052` (ARS 1.190, 1 clic),
`beissbarth microtec 741`, `coats 850`, `hofmann geodyna 9000p`, `jp balancing`.
→ Negativas: `apo`, `beissbarth`, `coats`, `geodyna`, `jp balancing`.

**3. El grupo "Técnico en inglés" no produce.** `balancing machine`: 19 impresiones,
0 clics, términos = marcas (Schenck, JP, Coats). El resto del grupo, 0 impresiones.
→ Pausar el grupo.

**4. Presupuesto corto, pero limpiar antes de subir.** Los puntos 1–3 liberan ~25% del
gasto diario para las keywords de máquina, que hoy tienen IS de 40–50%. Recién después
de dos semanas con eso tiene sentido subir los ARS 3.000.

**5. La landing baja el Quality Score en todas las keywords.** Las 12 keywords con QS
tienen experiencia de página "por debajo del promedio", sin excepción; anuncio y CTR
esperado están en promedio o arriba. Todos los grupos (cardanes, turbos, balanceo en
sitio) mandan a la misma URL `/cimat`. Es el 17% de pérdida por ranking, y se arregla
desde el sitio: URL final por grupo hacia la sección de aplicaciones que corresponda.

QS por keyword (las que tienen dato): `balanceadora dinamica` 3, `maquina de balanceo
dinamico` 2, `balanceadora de ejes` 3, `omar vetrano` 1; el resto entre 5 y 6.

## Lo que todavía no se puede afirmar

- Mobile 63% para una máquina industrial: sospechoso, 24 clics no alcanzan para bajar puja.
- Colombia + Perú = 44% del gasto. Ariel decidió el 01/09 que se quedan.
- Horario y día de semana: muestra chica y seis países con husos distintos. Entre 0 y
  7 h hubo 36 impresiones y ARS 4.450 (11%), pero no es concluyente.
- Términos tipo `balanceo de cardan`, `balanceo dinamico` (12 impresiones, 0 clics, 0
  gasto): intención de servicio, no de compra. Sin costo, se dejan por ahora.

## Contrato de medición (si se aplican 1–3)

A los 14 días: gasto en términos de analizadores y marcas automotrices = 0, e IS del
grupo "Máquina balanceadora" > 50%. Si la cuota no sube, el problema es puja, no
desperdicio.

## Estado al cierre del 10/09

Los puntos 1–3 **no se aplicaron**: quedaron propuestos, esperando confirmación de Ariel.
