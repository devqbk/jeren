# Lectura de comprensión — PLAN_ADS_CRIBMASTER.md (v1, 31/10/2026)

Revisor sin contexto. Único insumo: el plan. No leí los archivos de `expertos/` ni busqué nada afuera.

## 1. Qué entendí

JEREN (entiendo que una empresa argentina con oficinas en Buenos Aires, Río Grande y Ushuaia, con historia en yacimientos y
minería) distribuye CribMaster, que adiviné que son máquinas expendedoras y lockers industriales que registran quién retira
EPP (elementos de protección personal, lo deduje de una keyword) y herramientas. El plan dice que casi nadie busca eso en
Google en Argentina (~430 búsquedas/mes), así que Google Ads no va a vender: solo acompaña. Se arma UNA campaña chica de
Search con seis grupos de anuncios, ARS 2.000/día de techo (USD 40/mes), con la expectativa de gastar la mitad y conseguir
en 90 días 40–78 clics, 1–3 formularios y 0–2 leads calificados. Antes de encenderla hay cinco tareas técnicas obligatorias
(medición de conversiones, formulario, negativas, textos de la landing) que las hace QUBIK (adiviné que QUBIK es la agencia o
el equipo que escribe el plan; nunca se presenta). Las ventas reales salen de prospección directa de Fabián (adiviné que es
el vendedor de JEREN; tampoco se presenta) sobre ~36–40 cuentas de petróleo y gas, minería en operación y proyectos de
cobre, con mails cortos, LinkedIn, ferias y registros de proveedores. El éxito del plan a 90 días es conseguir 3 reuniones
de relevamiento de pañol, vengan de donde vengan. Cortes: día 30 (elegibilidad y CTR), día 60 (embudo; escalar solo si
hay ≥2 calificados y falta presupuesto), día 90 (seguir, dejar solo marca, o apagar todo), y en cualquier momento si se
gastan más de ARS 90.000 con cero calificados. Semana 1: QUBIK hace el Paso 0 y arma la campaña en pausa; Fabián valida
cuatro supuestos y le pide cuatro cosas a Stanley (adiviné que Stanley Black & Decker es el fabricante; se dice recién en §4).

## 2. Lo que no se entiende o se contradice

**Términos y nombres sin definir (un lector externo tiene que adivinarlos):**
- "CribMaster", "JEREN", "QUBIK", "Fabián", "CIMAT", "Stanley" aparecen desde §1 sin una línea de presentación.
  → Agregar un párrafo inicial: qué vende JEREN, qué es CribMaster y de quién es, quién es Fabián, quién es QUBIK, qué fue CIMAT.
- "CIMAT hizo 2 conversiones en 90 días con ARS 198.183 en seis países" (§1). → Decir en una frase que CIMAT es la campaña anterior de JEREN para balanceadoras y que sirve de referencia.
- Siglas sin expandir: EPP, MRO, EPCM, VMI, HSE, SyH, FOD, RIGI, QS, CTR, CPC, GTM, UTM, gclid, SRT, Res. 299/11, Smart Bidding, Performance Max, Customer Match, Conversion Linker, "cuota de impresiones", "experiencia de página". → Glosario de 15 líneas al final, o expandir la primera vez.
- "segmentos A y B" (§2, fila Servicios mineros). La tabla no tiene letras. → Decir "Oil & Gas y Minería en operación".
- "PSJ" se usa en §1 ("el mail a PSJ hay que rehacerlo") y se explica recién en §2 (PSJ Cobre Mendocino). → Nombrarlo completo la primera vez.
- "`tec-harness/src/gtm_api.py`" (§3): referencia a otro proyecto que el documento no explica. → Sacarlo del plan o decir "con la herramienta interna de QUBIK".
- "CIMAT pagó CPC al tope con 'por debajo del promedio' en 12 de 12" (§3 punto 5). 12 de 12 qué. → "en las 12 keywords de la campaña".
- "Fijar T1 en posición 1", "rutas visibles", "conversiones mejoradas 'Registrando'", "`router.push`", "`ATRIBUCION`", "`datosUsuario(...)`" (§3, §6, §7). → Mover todo lo de código a un anexo técnico para QUBIK; el plan dice solo "QUBIK configura la medición".

**Números que no cierran entre secciones:**
- §1 dice "~430 búsquedas/mes"; §4 y §7 dicen "440". La tabla de grupos suma 430 (70+90+150+30+50+40). → Usar un solo número.
- §1 dice "limpias son ~180" y no se explica qué distingue las 180 de las 430. → Definir "limpias" o sacar el número.
- §1 habla de "~700–900 búsquedas/mes" de planilla 299/11; lo único que el documento muestra son 90+40+110 = 240 (§4, G6 "Fuera"). → Listar las keywords que suman 700–900 o remitir al archivo con el cálculo.
- §4: "El gasto real esperado es la mitad" de ARS 60.000; §7 estima 11.000–26.000/mes (18–43 %). → Decir "entre un quinto y la mitad".
- §7: costo por lead "ARS 25.000–75.000" no sale de 33.000–78.000 / 1–3 leads (sería 11.000–78.000). → Recalcular o explicar el redondeo.
- §7 usa CIMAT como referencia con "conversión 1,06 %" y después asume 2–4 % para CribMaster sin justificarlo. → Una línea con el motivo (formulario más corto, tráfico más exacto) o bajar la estimación.
- §2 tabla de grupo 2 dice 90 búsquedas; la lista tiene 10 keywords de 10 = 100. → Ajustar.

**Decisiones que dicen una cosa en un lado y otra en otro:**
- §4 "Lección CIMAT: frase se comporta como amplia; acá, exacta casi siempre", pero los grupos 1, 2, 3 y 5 llevan ocho keywords en frase. → Decir por qué esas ocho van en frase o pasarlas a exacta.
- §2 advierte que el caso Rio Tinto no se pudo verificar y §10.4 pide un caso nuevo, pero §4 propone un sitelink "Caso Rio Tinto". → O se saca el sitelink hasta tener el caso, o se aclara que apunta al texto de la landing que ya tiene el disclaimer.
- Tres configuraciones distintas de "campaña mínima": §7 día 90 → "grupos 1, 2 y 5 con ARS 1.000/día"; §7 "Siempre" → "pausar" (todo); §10.1 → "dejar Ads solo en marca" (grupo 5). → Unificar en un solo estado de repliegue.
- §7 día 90 cubre "0 leads de formulario" y "≥1 lead calificado", pero no el caso más probable según la propia tabla: 1–3 formularios y 0 calificados. → Agregar la fila.
- §11 semana 1 asigna "Reenviar corregido el mail a PSJ" a QUBIK, pero el mail lo mandó Fabián (§1, §8). → Asignarlo a JEREN o explicar.
- §10 son "supuestos a validar antes de gastar", pero §11 solo agenda los puntos 1, 2, 3 y 8 y no dice qué pasa si alguno da mal; §11 semana 2 enciende igual "con el OK de JEREN". → Marcar cuáles de los 9 bloquean el encendido.
- §2 regla de corte: "≥ USD 100.000/año paga la máquina", "debajo de USD 40k no hay caso". Entre 40k y 100k no se dice nada. → Una frase para la zona gris.
- Lista de cuentas: §1 y §8 dicen "40", la cabecera dice "36 cuentas nombradas", la lista suma 36. Y los "15 primeros" de §11 no coinciden con los "15" de repliegue de §10.1. → Decir 36 y usar la misma quincena.

## 3. Lo que sobra o está dos veces

- El mail a PSJ mal tipeado aparece cuatro veces (§1, §2, §8, §11). Con una en §11 alcanza.
- "Subir presupuesto no compra más búsquedas, compra peores" está en §4, §7 ("Nunca") y §9.
- "Planilla 299/11 va al orgánico, no a pauta" está en §1, §4 (G6), §8 y §9.
- "No nombrar AutoCrib ni SupplyPro en el aviso" está dos veces en §4 y otra en §6.
- Los "232 términos" de la lista NEG Universal CIMAT se explican en §3 y de nuevo en §4.
- §9 (desacuerdos) repite decisiones que ya están tomadas en §4, §7 y §8; podría ser una tabla de tres filas o un anexo.
- Las listas completas de keywords (§4) y negativas (§5) son material de trabajo para quien opera Ads, no para quien aprueba el plan. Anexo.

## 4. Las tres preguntas al autor

1. De los nueve supuestos de §10, ¿cuáles frenan el encendido de la semana 2 si dan mal? Si no hay precio, plazo ni demostrador, ¿se gasta igual?
2. ¿De dónde salen las 700–900 búsquedas de planilla 299/11 y por qué CribMaster convertiría al 2–4 % si CIMAT, el único dato propio, convirtió al 1,06 %?
3. ¿Qué hace JEREN si a los 90 días hay 2 formularios y cero calificados, y quién califica los leads en 2 días hábiles si Fabián está de viaje? El contrato de medición depende de eso y no tiene suplente.

## 5. Veredicto

**No del todo.** La semana que viene sí está escrita (§11, semana 1: validar cuatro puntos de §10 y pedirle cuatro cosas a
Stanley), y un gerente puede ejecutarla si llega hasta ahí. El problema es llegar: para entender qué está aprobando tiene que
atravesar §3 a §7, que están escritas para quien opera Google Ads y toca el código de la landing, con siglas sin expandir,
rutas de archivos y nombres (CIMAT, QUBIK, Fabián, Stanley) que nunca se presentan. Además, el documento no dice en ningún
lado, en una frase, qué es CribMaster. Arreglo concreto: una página inicial "Para JEREN" con qué es el producto, quién hace
qué en las semanas 1 y 2, cuánto se gasta como máximo (ARS 60.000/mes, probable 11–26k) y las tres fechas de decisión; y
mover keywords, negativas, GTM y formulario a un anexo técnico. Con eso, sí.
