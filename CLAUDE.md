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

## Perfil de cliente y foco B2B
El cliente de Jeren NO es un técnico de servicio ni un instalador de campo.
El cliente es una planta industrial OEM que fabrica en serie equipos de
refrigeración, climatización o electrónica.

Clientes reales (todos fabricantes industriales, mayoría en Tierra del Fuego):
- Aire y Refrigeración (AA): Mirgor (UNPE, UNA, UNEC), Audivic, Newsan (AA),
  Midea Carrier, Electro Fueguina (AA), Industrias Sur, BGH, Athuel, KMG,
  Aires del Sur, Solnik
- Electrónica (SMT): Newsan (SMT), Electro Fueguina (SMT), BGH (SMT),
  Radio Victoria, Solnik, Mirgor

Todo el copy del sitio debe hablar de líneas de producción, manufactura en
serie, control de calidad industrial y procesos OEM — nunca de instalación
domiciliaria, mantenimiento de campo o usuarios finales.

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

## Onboarding de nuevos colaboradores
Si el usuario pide "hacer el onboarding" (o algo equivalente, tipo "ayudame
a instalar todo", "es la primera vez que toco esto"), asumir que es alguien
sin experiencia técnica que necesita quedar operativo para pedir cambios
en esta landing y publicarlos. Guiarlo paso a paso, verificando cada cosa
antes de pasar a la siguiente:

1. **Node.js y Git**: correr `node -v` y `git -v`. Si falta alguno, indicarle
   que lo descargue (Node.js LTS desde nodejs.org, Git desde
   git-scm.com/downloads) e instale con opciones por defecto, y esperar
   confirmación antes de seguir.
2. **Credenciales**: NO pedirle usuario/contraseña por chat ni asumir
   ninguna. Decirle explícitamente que le pida a Facundo Nogueira
   (nogueirafacundo@gmail.com) el usuario y la contraseña de la cuenta
   `dev@qubikcommerce.com`, que es con la que se loguea tanto en GitHub
   como en Vercel. Esperar a que confirme que ya tiene esos datos.
3. **Login en GitHub**: guiarlo para loguearse en github.com con esa cuenta
   (ya debería tener el repo clonado si llegó a este punto pidiendo el
   onboarding después de clonar). Dejarle claro que TODOS los commits y
   pushes que haga van a quedar registrados bajo esa cuenta compartida
   `dev@qubikcommerce.com`, no con su nombre — es la cuenta que usa todo
   el que trabaja en este repo.
4. **Dependencias**: correr `npm install` en la carpeta del proyecto.
5. **Publicar cambios**: cuando esté conforme con un cambio, hacer
   `git add -A`, `git commit -m "..."` y `git push` directo a `main` —
   no hay que abrir PR ni pedir aprobación. El repo está conectado a
   Vercel, así que el push deploya solo a producción en un par de
   minutos. No hace falta que loguee nada más en Vercel salvo que quiera
   ver el estado del deploy o los logs.
6. **Cómo revisa los cambios**: NUNCA sugerirle correr `npm run dev` ni
   abrir `localhost` para ver el resultado — no lo usa. Su forma de
   verificar un cambio es directo contra el sitio en producción
   (jeren.com) después del push. Avisarle que el deploy tarda un par de
   minutos y decirle cuándo conviene refrescar para chequear.

No asumir que sabe qué es una terminal, un commit o un repo — explicar en
una línea qué hace cada comando antes de correrlo, sin sobre-explicar.

### Links de acceso
- Estado de los deploys (Vercel): https://vercel.com/dev-2609s-projects/v0-jeren/deployments
- Ramas del repo (GitHub): https://github.com/devqbk/jeren/branches
