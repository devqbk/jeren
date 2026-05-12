# Jeren - Sitio institucional

## Contexto del negocio
Jeren SRL (junto a Tecnomaq SRL) es una empresa argentina con más de 40 años
representando marcas industriales líderes a nivel mundial. Comercializa,
instala y brinda soporte de maquinaria, insumos y servicios.

Foco actual: industria electrónica + aire acondicionado y refrigeración.
Sucursales: CABA (Av. Juramento 2089 Piso 4°, oficina 405, C1428DNG),
Ushuaia (Tecnomaq SRL, Paseo de la Plaza 2065, CP 9410, Tierra del Fuego),
Río Grande (Tecnomaq SRL, Padre Forgacs 1407, CP 9420, Tierra del Fuego).

Contacto: info@jeren.com | (+5411) 4788-0566 | [www.jeren.com](https://www.jeren.com)

## Transición planeada (Fase B, futura)
La empresa está reconvirtiéndose hacia Oil & Gas, Minería y Agro.
Cuando llegue ese momento:
- Las nuevas industrias pasan a ser el foco principal del sitio.
- Electrónica y aire/refrigeración bajan a "Otras industrias".
- Primeras marcas del nuevo portafolio: CIMAT (cimat-balancing.com)
  y Xplorobot.
- El portafolio crecerá iterativamente.

No tocar esta estructura todavía. Está documentada acá para contexto.

## Stack técnico
- Framework: Next.js (App Router)
- Estilos: Tailwind CSS
- Componentes: shadcn/ui
- Idioma: español (es-AR)
- Deploy: Vercel
- Origen del código: generado inicialmente en v0, ahora editado
  híbridamente entre v0 y Claude Code vía GitHub.

## Estructura de rutas
- /                          (home)
- /empresa                   (página institucional)
- /electronica               (listado de marcas)
- /electronica/[marca]       (página de marca, ej: /electronica/fuji)
- /aire-acondicionado        (listado de marcas)
- /aire-acondicionado/[marca]
- /servicios
- /contacto

## Marcas representadas (estado actual)
Electrónica (12):
Fuji, Koh Young, Data IO, Nordson Asymtek, YJ Link, Creative Electron,
Kurtz Ersa, ECD, EVS, Sono Tek, HG Laser, UMG Technologies.

Aire y refrigeración (7):
Galileo TP, Inficon, Jae Hyun Autonics, Sumake, Gasflux, BLM, Tech Sonic.

## Lenguaje visual
- Paleta: azul corporativo profundo como primario, blancos/grises neutros,
  acento sutil. Sobrio, industrial, B2B serio.
- Tipografía: sans moderna (Inter / Geist).
- Estilo: limpio, mucho espacio en blanco, fotografía industrial,
  microinteracciones sutiles.
- Referencia de tono: sitios B2B industriales modernos tipo ABB, Siemens.

## Lo que NO va
- Estética WordPress genérica del sitio anterior.
- Gradientes flashy, look "startup tech".
- Animaciones excesivas.
- Texturas o sombras pesadas.

## Convenciones de código
- Componentes reutilizables en /components.
- Páginas en /app siguiendo App Router.
- Preferir shadcn/ui antes que componentes custom.
- Colores y tipografía centralizados en tailwind.config.ts y globals.css.
  No hardcodear hex en componentes.
- No agregar librerías externas sin justificación.
- Mantener el código que v0 genera lo más limpio posible (Claude Code
  puede refactorizar cuando v0 deje duplicación).

## Sitio interno (separado)
Existe un sistema interno con login propio que vive en otro stack/dominio.
NO se integra en este repo. El sitio público solo tiene un link discreto
"Acceso clientes" en el header que apunta al subdominio del sistema
(por definir, placeholder por ahora).

## Cuando arranque una sesión nueva
Asumir que el sitio sigue en Fase A (estructura original con diseño nuevo).
Si voy a tocar la transición a Oil&Gas/Minería/Agro, lo voy a indicar
explícitamente como "Fase B".
