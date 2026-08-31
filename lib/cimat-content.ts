// ─────────────────────────────────────────────────────────────────────────────
// Contenido de la landing /cimat — balanceadoras industriales CIMAT en Argentina
//
// FUENTE ÚNICA DE VERDAD del copy y de los datos de la página.
// Reglas duras (ver BRIEF_LANDING.md):
//   · Ninguna cifra, caso, testimonio, precio ni certificación puede inventarse.
//   · Países: 59 (dato del brochure oficial impreso), NO "90+".
//   · Antigüedad de CIMAT: "desde 1987", nunca una cantidad de años calculada.
//   · Ascential Technologies: 70+ años.
//   · Unidad de medición: ROTORTEST (nomenclatura del catálogo curado en español).
//     TODO (JEREN): confirmar con fábrica si es ROTORTEST o ROTOTEST.
//   · Resguardos: ISO 21940-23:2012 (nunca ISO 7475).
//   · ISO 1940-1 solo se nombra al explicar la renumeración a ISO 21940.
//   · Terminología rioplatense: "balanceadora" / "balanceo".
// ─────────────────────────────────────────────────────────────────────────────

// ── Tipos ────────────────────────────────────────────────────────────────────

export interface CtaLink {
  label: string
  href: string
  external?: boolean
}

export interface MicroProof {
  value: string
  label: string
}

export type ProblemIcon =
  | "vibration"
  | "downtime"
  | "grade"
  | "calibration"
  | "turbo"
  | "tooling"

export interface ProblemCard {
  icon: ProblemIcon
  title: string
  body: string
}

export interface LandingImage {
  src: string
  alt: string
  width: number
  height: number
  /** Epigrafe tecnico. En industrial una foto sin epigrafe pierde valor de prueba. */
  caption?: string
}

export interface ProductLine {
  id: string
  eyebrow: string
  title: string
  claim: string
  body: string
  /** Rango principal, en una línea. El detalle vive en /cimat/especificaciones. */
  rango: string
  /** Dos beneficios operativos. No más: la tarjeta tiene que poder escanearse. */
  beneficios: string[]
  image: LandingImage
  specs: { label: string; value: string }[]
  cta: CtaLink
}

export interface SpecColumn {
  key: string
  label: string
}

export interface SpecRow {
  line: string
  family: string
  cells: Record<string, string>
}

export interface GradeRow {
  grade: string
  application: string
  sector: string
}

export interface IndustryCard {
  id: string
  name: string
  rotors: string
  lines: string
}

export type SupportIcon =
  | "engineering"
  | "customs"
  | "parts"
  | "training"
  | "warranty"
  | "calibration"

export interface SupportBlock {
  icon: SupportIcon
  title: string
  body: string
  /** Si está, el bloque lleva su propio CTA al formulario con este interés. */
  interes?: InteresValue
}

export interface FaqItem {
  question: string
  answer: string
}

// ── Constantes de contacto y destinos ────────────────────────────────────────

/** WhatsApp comercial de la línea CIMAT: +54 9 11 4157-1427. */
export const WHATSAPP_NUMERO = "5491141571427"
export const WHATSAPP_MENSAJE = "Hola, consulto por balanceadoras CIMAT"
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  WHATSAPP_MENSAJE,
)}`

export const CATALOGO_PDF_URL = "/catalogos/cimat-balanceadoras.pdf"

export const EMAIL = "info@jeren.com"
export const TELEFONO = "(+5411) 4788-0566"
export const TELEFONO_HREF = "tel:+541147880566"

/**
 * CTA unico de todo el ecosistema: "Solicitar más información".
 *
 * Antes habia siete copys distintos apuntando al catalogo externo. El objetivo
 * de conversion ahora es uno solo — el formulario de esta misma pagina — y cada
 * CTA contextual solo cambia el `interes` que deja preseleccionado.
 *
 * WhatsApp y la descarga del catalogo quedan como canales secundarios: nunca
 * con el mismo peso visual que el CTA principal.
 */
export const CTA_LABEL = "Solicitar más información"
export const FORM_ANCHOR = "#solicitar"

/** Opciones del campo "¿Qué información necesita?" del formulario. */
export const INTERESES = [
  { value: "nueva-balanceadora", label: "Necesito una nueva balanceadora" },
  { value: "inspeccion-calibracion", label: "Necesito calibrar o inspeccionar una máquina existente" },
  { value: "modernizacion", label: "Necesito modernizar una balanceadora" },
  { value: "balanceo-de-campo", label: "Necesito balancear un rotor sin desmontarlo" },
  { value: "automatizacion", label: "Necesito automatizar el balanceo dentro de una línea" },
  { value: "consulta-tecnica", label: "Necesito información técnica o ayuda para especificar" },
] as const

export type InteresValue = (typeof INTERESES)[number]["value"]

export const cta: Record<string, CtaLink> = {
  whatsapp: { label: "WhatsApp", href: WHATSAPP_URL, external: true },
  catalogoPdf: { label: "Descargar el catálogo técnico (PDF)", href: CATALOGO_PDF_URL },
}

/** Copy de la barra persistente de conversión. */
export const stickyBar = {
  titulo: "Balanceadoras CIMAT",
  texto: "representación, importación y soporte desde Argentina.",
  whatsappAria: "Escribirnos por WhatsApp sobre balanceadoras CIMAT",
}

/** Navegación breve del header. Sin menú al resto de jeren.com. */
export const headerNav = [
  { label: "Soluciones", href: "#lineas" },
  { label: "Soporte", href: "#soporte" },
  { label: "Aplicaciones", href: "/cimat/aplicaciones" },
  { label: "Recursos", href: "/cimat/especificaciones" },
  { label: "Preguntas", href: "#faq" },
]

// ── 1. Hero ──────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Representante oficial de CIMAT en Argentina",
  h1: "Balanceadoras industriales CIMAT con soporte local desde Argentina",
  subtitle:
    "Balanceo estático y dinámico de rotores, con una máquina configurada para la aplicación. JEREN se ocupa de la ingeniería de aplicación, la importación, la puesta en marcha, la capacitación y el soporte, desde Argentina y para operaciones de toda la región.",
  resumenTecnico:
    "Balanceo estático y dinámico · 5 kg a 20 toneladas · ISO 21940 · Verificación ISO 2953",
  microcopy:
    "Indíquenos qué necesita balancear. Un especialista lo ayuda a identificar la línea y la configuración adecuadas.",
  image: {
    src: "/images/cimat/hero-balanceadora-horizontal-rodillo.webp",
    alt: "Balanceadora horizontal CIMAT de gran porte con un rodillo cilíndrico montado entre los soportes de la bancada",
    width: 2000,
    height: 1150,
    caption: "Horizontal de gran porte — rodillo cilíndrico montado entre soportes",
  } as LandingImage,
}

/**
 * Galería del hero. La primera es la que se precarga (es el LCP); el resto rota
 * para que se vea que la línea no es una sola máquina.
 */
export const heroGaleria: LandingImage[] = [
  hero.image,
  {
    src: "/images/cimat/linea-horizontal-universal-bancada.webp",
    alt: "Balanceadora horizontal universal CIMAT sobre bancada larga, con un tambor de gran diámetro montado entre soportes",
    width: 1167,
    height: 785,
    caption: "Horizontal universal — rotores con muñones, de 5 kg a 20 toneladas",
  },
  {
    src: "/images/cimat/linea-vertical-impulsores-discos.webp",
    alt: "Balanceadora CIMAT de eje vertical con un rotor tipo disco montado sobre la mesa",
    width: 1400,
    height: 1652,
    caption: "Vertical — discos, impulsores y rodetes sin muñones",
  },
  {
    src: "/images/cimat/linea-automatica-en-linea-produccion.webp",
    alt: "Celda automática de balanceo CIMAT integrada a una cinta transportadora",
    width: 901,
    height: 918,
    caption: "Celda automática — balanceo integrado a la línea de producción",
  },
  {
    src: "/images/cimat/reserva-celda-robotizada.webp",
    alt: "Celda de balanceo CIMAT con robot de carga y descarga junto a un rack de piezas",
    width: 1400,
    height: 1064,
    caption: "Celda robotizada — carga y descarga automática",
  },
]

/**
 * Barra de confianza. Cada dato lleva su atribucion explicita para que nadie
 * confunda los 40 años de JEREN con la antiguedad de CIMAT.
 */
export const trustBar = [
  { fuente: "JEREN", value: "40+ años", label: "representando maquinaria industrial en Argentina" },
  { fuente: "CIMAT", value: "59 países", label: "con máquinas de la fábrica en operación" },
  { fuente: "Desde Argentina", value: "3 sedes", label: "ingeniería, puesta en marcha y soporte para la región" },
]

// ── 2. Reconocimiento de problema ────────────────────────────────────────────

export const problemas = {
  eyebrow: "Reconocimiento de problema",
  title: "¿Alguna de estas situaciones está afectando tu operación?",
  cards: [
    {
      icon: "vibration",
      title: "El rotor vuelve a vibrar a los tres meses",
      body: "Se cambiaron bujes, rodamientos y sellos, se alineó el conjunto, pero la vibración volvió. Si el desbalance dinámico del rotor —y no solo el estático— no fue corregido, las fuerzas centrífugas y los momentos que genera siguen actuando sobre el eje, los bujes, los rodamientos y la máquina en cada revolución.",
    },
    {
      icon: "downtime",
      title: "Paradas y demoras por tercerizar",
      body: "El rotor sale de planta, espera turno en un taller externo y vuelve sin un certificado presentable. Lo que se paga no es solamente el servicio: son los días de línea detenida.",
    },
    {
      icon: "grade",
      title: "El grado exigido no se puede certificar",
      body: "El OEM o el pliego exige G2,5 en un rotor de turbocompresor o G6,3 en un impulsor, y el equipo actual no puede demostrar que lo alcanza. Sin ese número, el trabajo no se certifica.",
    },
    {
      icon: "calibration",
      title: "La balanceadora instalada no tiene soporte",
      body: "Una máquina descalibrada emite certificados que no valen. CIMAT inspecciona, calibra y moderniza balanceadoras existentes según ISO 21940-21:2012, con certificado.",
    },
    {
      icon: "turbo",
      title: "El turbo vuelve del cliente silbando",
      body: "El conjunto central se armó con piezas dentro de tolerancia, pero el eje gira a más de cien mil revoluciones por minuto: a esa velocidad, un desbalance residual que en otro rotor sería despreciable se traduce en ruido, consumo de aceite y devolución en garantía.",
    },
    {
      icon: "tooling",
      title: "Cada rotor distinto obliga a un armado nuevo",
      body: "Sin los adaptadores y mandriles correctos, montar cada pieza lleva más tiempo que medirla, y el propio montaje introduce error. El utillaje define tanto el tiempo de ciclo como la repetibilidad del resultado.",
    },
  ] as ProblemCard[],
}

/**
 * Selector de necesidad. Cada opcion lleva al mismo formulario y deja
 * preseleccionado el interes, para que el lead llegue con contexto.
 */
export const selector = {
  eyebrow: "Por dónde empezar",
  title: "¿Qué necesita resolver?",
  intro:
    "Seleccione la situación más parecida a la suya. Todas llevan al mismo formulario, con la necesidad ya cargada.",
  opciones: [
    {
      interes: "nueva-balanceadora",
      title: "Comprar una balanceadora",
      body: "Rotores con muñones, discos e impulsores, cigüeñales, cardanes o wheelsets ferroviarios.",
      href: "#lineas",
    },
    {
      interes: "inspeccion-calibracion",
      title: "Calibrar o inspeccionar la que tengo",
      body: "Cualquier marca, según ISO 21940-21:2012, con certificado y rotores patrón.",
      href: "#soporte",
    },
    {
      interes: "modernizacion",
      title: "Modernizar una máquina existente",
      body: "Electrónica de medición ROTORTEST, rodamientos, carros, accionamientos y acelerómetros.",
      href: "#soporte",
    },
    {
      interes: "balanceo-de-campo",
      title: "Balancear sin desmontar el rotor",
      body: "Medición y corrección en sitio con la portátil SmaRT, con evaluación según DIN ISO 10816-3.",
      href: "#lineas",
    },
    {
      interes: "automatizacion",
      title: "Automatizar el balanceo en línea",
      body: "Celdas con corrección NC, trazabilidad por código de barras e integración con el ERP.",
      href: "#lineas",
    },
    {
      interes: "consulta-tecnica",
      title: "Ayuda para especificar",
      body: "Qué grado G corresponde a cada aplicación y qué configuración lo alcanza.",
      href: "/cimat/normas-y-grados",
    },
  ],
}

// ── 3. Qué es CIMAT ──────────────────────────────────────────────────────────

export const quienEs = {
  eyebrow: "Quién fabrica la máquina",
  title: "Una fábrica dedicada exclusivamente al balanceo",
  paragraphs: [
    "CIMAT Sp. z o.o. fabrica balanceadoras industriales en Bydgoszcz, Polonia, desde 1987. Diseña y produce la máquina completa —mecánica, neumática, electrónica de medición y software— y presta los servicios que la rodean: certificación de balanceadoras, mantenimiento, modernización, balanceo por contrato y formación técnica.",
    "La marca integra Ascential Technologies, grupo dedicado a automatizar procesos de diagnóstico, inspección y ensayo. Hoy hay máquinas CIMAT operando en 59 países.",
  ],
  logos: [
    "Siemens",
    "ABB",
    "Pratt & Whitney",
    "Atlas Copco",
    "Ford",
    "General Motors",
    "BorgWarner",
    "Valeo",
  ],
  logosNota:
    "Clientes y referencias publicados por el fabricante en su brochure oficial. No representan necesariamente clientes directos de JEREN SRL.",
  /** Verificaciones de norma: es la prueba disponible mientras no haya caso local. */
  verificaciones: [
    { code: "ISO 21940-11", desc: "Tolerancias de rotores rígidos: la norma con la que se emite el certificado de grado G." },
    { code: "ISO 2953", desc: "Verificación de la balanceadora: rotores de prueba y desbalance residual mínimo." },
    { code: "ISO 21940-23:2012", desc: "Requisitos de seguridad de los resguardos de las máquinas de balanceo." },
  ],
}

// ── 4. Líneas de producto ────────────────────────────────────────────────────

export const lineas: ProductLine[] = [
  {
    id: "horizontales",
    eyebrow: "Línea horizontal",
    title: "Rotores con muñones",
    claim: "Armaduras, bombas, ventiladores, husillos, turbinas y rodillos de papelera.",
    body: "",
    rango: "5 kg – 20.000 kg · ø190 – 2.200 mm",
    beneficios: [
      "Ciclo de balanceo corto por principio de rodamientos rígidos.",
      "Serie compacta H2BS que se instala sin fundación ni obra civil.",
    ],
    image: {
      src: "/images/cimat/linea-horizontal-universal-bancada.webp",
      alt: "Balanceadora horizontal universal CIMAT sobre bancada larga, con un tambor de gran diámetro montado entre soportes",
      width: 1167,
      height: 785,
    },
    specs: [],
    cta: { label: "", href: "" },
  },
  {
    id: "verticales",
    eyebrow: "Línea vertical",
    title: "Discos, impulsores y rodetes",
    claim: "Lo que no tiene muñones se balancea de pie: rodetes, impulsores y portaherramientas.",
    body: "",
    rango: "0,5 kg – 1.000 kg · ø650 / ø850 / ø1.100 mm",
    beneficios: [
      "Corrección en estación por taladrado o fresado, con aspiración de virutas.",
      "Habilita el certificado de grado G6,3 típico de ventiladores.",
    ],
    image: {
      src: "/images/cimat/linea-vertical-impulsores-discos.webp",
      alt: "Balanceadora CIMAT de eje vertical con un rotor tipo disco montado sobre la mesa y la pantalla de medición encendida",
      width: 1400,
      height: 1652,
    },
    specs: [],
    cta: { label: "", href: "" },
  },
  {
    id: "turbo",
    eyebrow: "Línea turbo",
    title: "Núcleos de turbocompresor",
    claim: "Para el taller de remanufactura que necesita entregar el turbo con garantía.",
    body: "",
    rango: "Hasta 300.000 rpm · residual mínimo 0,05 g·mm",
    beneficios: [
      "Balanceo del conjunto central a la velocidad real de trabajo, que es lo que evita la devolución.",
      "Bancos de flujo Turbo Test para el control funcional y la calibración de geometría variable.",
    ],
    image: {
      src: "/images/cimat/linea-turbo-core-balancer.webp",
      alt: "Máquina CIMAT de doble estación para turbocompresores, con los diagramas polares de desequilibrio en pantalla",
      width: 938,
      height: 902,
    },
    specs: [],
    cta: { label: "", href: "" },
  },
  {
    id: "automatizacion",
    eyebrow: "Automatización",
    title: "Celdas integradas a la línea",
    claim: "Discos y tambores de freno, volantes bimasa, embragues, alternadores y ruedas.",
    body: "",
    rango: "Secuencia automática · corrección NC · integración con ERP",
    beneficios: [
      "Trazabilidad por código de barras, marcado láser e informe automático.",
      "Resguardos conformes a ISO 21940-23:2012.",
    ],
    image: {
      src: "/images/cimat/linea-automatica-en-linea-produccion.webp",
      alt: "Celda automática de balanceo CIMAT integrada a una cinta transportadora, con unidad de corrección por fresado",
      width: 901,
      height: 918,
    },
    specs: [],
    cta: { label: "", href: "" },
  },
]

export const balanceoCampo = {
  eyebrow: "Balanceo de campo",
  title: "Balanceo del rotor en su lugar, sin desmontarlo de la máquina",
  body: "La balanceadora portátil SmaRT mide y corrige el desbalance con el rotor montado en su propia máquina: horas de parada en lugar de días. Evalúa la severidad de vibración según DIN ISO 10816-3 y documenta los resultados. Es el equipo que llega al ventilador de mina, a la boca de pozo y al secadero.",
  interes: "balanceo-de-campo" as InteresValue,
}

// ── 5. Especificaciones técnicas ─────────────────────────────────────────────

export const specColumns: SpecColumn[] = [
  { key: "peso", label: "Peso de rotor" },
  { key: "diametro", label: "Ø máx. de rotor" },
  { key: "apoyos", label: "Apoyos / muñones" },
  { key: "rpm", label: "Velocidad de balanceo" },
  { key: "precision", label: "Precisión alcanzable" },
  { key: "planos", label: "Planos de corrección" },
  { key: "accionamiento", label: "Accionamiento" },
  { key: "software", label: "Software y reporte" },
]

export const specRows: SpecRow[] = [
  {
    line: "Horizontales universales sobre bancada",
    family: "CMT-5 … CMT-20000 · 13 modelos",
    cells: {
      peso: "5 – 20.000 kg",
      diametro: "190 – 2.200 mm",
      apoyos: "Muñones 4 – 420 mm",
      rpm: "600 – 1.400 rpm, infinitamente variable",
      precision: "ISO 2953: 0,05 – 35 µm · URR 98%",
      planos: "1 o 2",
      accionamiento: "Por extremo, velocidad variable",
      software: "ROTORTEST 8.5 / 9.5 · Windows 10 IoT · impresora A4 integrada",
    },
  },
  {
    line: "Compactas sin fundación",
    family: "CMT-15H2BS … CMT-100H2BS · 5 modelos",
    cells: {
      peso: "15 – 130 kg",
      diametro: "200 – 700 mm",
      apoyos: "Muñones 5 – 140 mm según modelo",
      rpm: "Motor 1.500 / 3.000 rpm · 0,4 – 1,1 kW",
      precision: "ISO 2953: 0,1 – 0,2 µm · URR 98%",
      planos: "1 o 2",
      accionamiento: "Monofásico 110/240 V o trifásico 220/400 V",
      software: "ROTORTEST · no requiere fundación ni obra civil",
    },
  },
  {
    line: "Verticales para discos e impulsores",
    family: "CMT-15 V2 … CMT-500 V2",
    cells: {
      peso: "15 / 30 / 50 / 100 / 200 / 500 kg",
      diametro: "ø650 · ø850 · ø1100 mm según modelo",
      apoyos: "Adaptador de sujeción neumático (6 bar) o manual",
      rpm: "Motor AC con inversor",
      precision: "—",
      planos: "1 o 2",
      accionamiento: "AC con inversor · servo Siemens o Mitsubishi en las automáticas",
      software: "ROTORTEST · corrección en estación por taladrado o fresado",
    },
  },
  {
    line: "Wheelsets ferroviarios",
    family: "CMT-1000 / CMT-3000 / CMT-5000",
    cells: {
      peso: "1.000 – 5.000 kg",
      diametro: "hasta ø1.980 mm",
      apoyos: "Placa de rodillos, plataforma hidráulica opcional",
      rpm: "—",
      precision: "—",
      planos: "—",
      accionamiento: "Husillo con engranaje y acoplamiento flotante de desacople automático",
      software: "ROTORTEST · corrección con torneado excéntrico",
    },
  },
  {
    line: "Cardanes y árboles de transmisión",
    family: "Serie CMT-DS · 6 modelos",
    cells: {
      peso: "hasta 250 kg",
      diametro: "ø tubo 170 mm · largo hasta 4.600 mm",
      apoyos: "Pedestales reforzados para la carga axial del estriado",
      rpm: "hasta 5.000 rpm",
      precision: "—",
      planos: "4 simultáneos",
      accionamiento: "Árboles de 1 a 4 tramos",
      software: "Convierte la masa de corrección en longitud de fleje a soldar",
    },
  },
  {
    line: "Cigüeñales",
    family: "CMT-700 H2K",
    cells: {
      peso: "7 – 700 kg",
      diametro: "—",
      apoyos: "Muñones de bancada",
      rpm: "—",
      precision: "—",
      planos: "Distribución automática entre contrapesos",
      accionamiento: "Estación de taladrado móvil en máquina",
      software: "Reportes PDF / CSV / XLS",
    },
  },
  {
    line: "Turbo — core balancer de alta velocidad",
    family: "Serie CMT-VSR · 7 configuraciones",
    cells: {
      peso: "Núcleo (CHRA) de turbocompresor",
      diametro: "Núcleo hasta ø240 mm · rueda de compresor hasta ø179 mm en la versión Big",
      apoyos: "Placa adaptadora con dos abrazaderas",
      rpm: "hasta 300.000 rpm",
      precision: "Residual mínimo 0,05 g·mm · URR ≥ 95% en Big Basic",
      planos: "Punto de corrección calculado automáticamente",
      accionamiento: "Aire comprimido 8 bar · válvula servoaccionada en la versión Pro",
      software: "Curva de vibración vs. velocidad con la posición angular del desbalance",
    },
  },
  {
    line: "Turbo — núcleo de baja velocidad",
    family: "CMT-TR",
    cells: {
      peso: "hasta 16 kg de núcleo",
      diametro: "—",
      apoyos: "Adaptador de núcleo",
      rpm: "4.000 – 40.000 rpm",
      precision: "0,02 – 0,3 g·mm en camión ligero · 0,15 – 0,9 g·mm en camión pesado",
      planos: "2",
      accionamiento: "Aire comprimido 8 bar",
      software: "Unidades en mg y g·mm · calibración específica o de fabricante",
    },
  },
]

export const specNotas = [
  "Un guion (—) significa que el fabricante no publica ese parámetro para esa línea. No lo estimamos acá: se define en la ingeniería de aplicación.",
  "El grado G alcanzable no es una propiedad de la máquina sola: depende de la masa del rotor, de su velocidad de servicio y del radio de corrección disponible. Por eso no figura como columna: indíquenos qué grado exige el OEM y le confirmamos qué configuración lo alcanza.",
  "Todas las máquinas se prueban según ISO 2953 y se suministran con resguardos conformes a ISO 21940-23:2012.",
]

// ── 6. Normativas y grados de calidad ────────────────────────────────────────

export const grados = {
  eyebrow: "Grados de calidad",
  title: "Cuando el OEM exige G2,5 y no está claro si el equipo llega",
  intro:
    "Ese número define qué máquina hace falta, y es la primera pregunta de la ingeniería de aplicación. La tabla está aplicada a equipos habituales de planta, no es la lista genérica de la norma.",
  rows: [
    {
      grade: "G0,4",
      application: "Husillos de rectificadora, armaduras de precisión",
      sector: "Metalúrgica",
    },
    {
      grade: "G1",
      application: "Husillos de máquina herramienta, accionamientos especiales",
      sector: "Metalúrgica",
    },
    {
      grade: "G2,5",
      application:
        "Turbinas de gas y vapor, turbocompresores, turbogeneradores, motores eléctricos de más de 950 rpm, ventiladores industriales",
      sector: "Oil & Gas, energía",
    },
    {
      grade: "G6,3",
      application:
        "Impulsores de bomba, volantes, rodillos de papelera, ventiladores comunes, motores estándar",
      sector: "Papelera, agro, industria general",
    },
    {
      grade: "G16",
      application: "Ejes cardánicos, partes de maquinaria agrícola y vial",
      sector: "Agro, minería",
    },
    { grade: "G40", application: "Ruedas y llantas de automotor", sector: "Automotriz" },
  ] as GradeRow[],
  normaParagraph:
    "En 2016 la serie ISO 1940 fue renumerada como ISO 21940; ISO 21940-11 reemplaza a ISO 1940-1 manteniendo los mismos principios y valores de grado, por lo que las especificaciones antiguas siguen siendo válidas. La verificación de la balanceadora en sí se rige por ISO 2953, que define rotores de prueba y ensayos de desempeño.",
  normas: [
    {
      code: "ISO 21940-11",
      desc: "Tolerancias de rotores rígidos: la norma con la que se emite el certificado de grado G.",
    },
    {
      code: "ISO 2953",
      desc: "Verificación de la balanceadora: rotores de prueba, desbalance residual mínimo y relación de reducción.",
    },
    {
      code: "ISO 21940-21:2012",
      desc: "Descripción y evaluación de balanceadoras: bajo esta norma CIMAT calibra máquinas de cualquier marca.",
    },
    {
      code: "ISO 21940-23:2012",
      desc: "Requisitos de seguridad de los resguardos y guardas de las máquinas de balanceo.",
    },
    {
      code: "DIN ISO 10816-3",
      desc: "Severidad de vibración medida en partes no rotativas: la referencia del balanceo de campo.",
    },
    {
      code: "Directiva 2006/42/CE",
      desc: "Directiva Europea de Máquinas: seguridad y ergonomía declaradas por las verticales CIMAT.",
    },
  ],
}

// ── 7. Aplicaciones por industria ────────────────────────────────────────────

export const industrias: IndustryCard[] = [
  {
    id: "oil-gas",
    name: "Oil & Gas",
    rotors:
      "Rotores de turbocompresor, bombas centrífugas de proceso e inyección, turboexpansores, armaduras de motores de accionamiento",
    lines: "Horizontales universales · Rotores de turbinas · Armaduras eléctricas · Balanceo de campo",
  },
  {
    id: "mineria",
    name: "Minería",
    rotors:
      "Rotores de molinos y chancadoras, bombas de pulpa, ventiladores de ventilación de mina, rodillos de cintas, cardanes de equipo pesado",
    lines:
      "Horizontales universales · Verticales para ventiladores · Cardanes CMT-DS · Balanceo de campo",
  },
  {
    id: "automotriz",
    name: "Automotriz",
    rotors:
      "Cigüeñales, volantes mono y bimasa, embragues, cardanes, turbos, discos y tambores de freno, alternadores, llantas",
    lines: "Línea automotriz completa · Línea turbo · Automatización en línea",
  },
  {
    id: "transporte-pesado",
    name: "Transporte pesado",
    rotors:
      "Árboles cardánicos de camión y semirremolque, cigüeñales y volantes de motor diésel, turbos, ventiladores de radiador, tambores y discos de freno",
    lines: "Cardanes CMT-DS · CMT-700 H2K · Línea turbo · Horizontales universales",
  },
  {
    id: "agro",
    name: "Agro",
    rotors:
      "Rotores y sinfines de cosechadora, molinos de martillo, ventiladores de secadora y de silo, cigüeñales de motores agrícolas, turbos de tractor",
    lines: "Horizontales universales · Verticales para ventiladores · CMT-700 H2K · Línea turbo",
  },
  {
    id: "energia",
    name: "Energía",
    rotors:
      "Turbogeneradores, rotores de turbinas de vapor y gas, turbinas hidráulicas chicas, ventiladores de tiro forzado e inducido",
    lines: "Horizontales universales · Rotores de turbinas · Armaduras eléctricas",
  },
  {
    id: "metalurgica",
    name: "Metalúrgica",
    rotors:
      "Husillos, rodillos de laminación, herramientas rotativas y portaherramientas, ventiladores de horno",
    lines: "Horizontales universales · Verticales V2T y V2MD · Compactas H2BS",
  },
  {
    id: "ferroviario",
    name: "Ferroviario",
    rotors:
      "Ejes montados de coches y locomotoras, ruedas ferroviarias, discos de freno, motores de tracción",
    lines: "Wheelsets CMT-1000/3000/5000 · Célula CMT-750 FW · Armaduras eléctricas",
  },
  {
    id: "papelera",
    name: "Papelera",
    rotors:
      "Rodillos y cilindros de máquina de papel, rodillos de transportadores, sierras circulares",
    lines: "Horizontales para rodillos CMT-50 … CMT-20000 · Verticales para herramientas",
  },
]

export const numeros = {
  eyebrow: "La fábrica en números",
  items: [
    { value: "5 kg – 20 t", label: "Rango de peso de rotor que cubre la línea completa" },
    { value: "300.000 rpm", label: "Velocidad máxima de trabajo, línea turbo" },
    { value: "0,05 µm", label: "Precisión mínima alcanzable, verificada según ISO 2953" },
    { value: "98 %", label: "Reducción de desbalance en una sola corrida (URR)" },
    { value: "59", label: "Países con máquinas CIMAT en operación" },
    { value: "1987", label: "Fundada en Bydgoszcz, Polonia — dedicada solo a balanceo" },
  ] as MicroProof[],
}

export const industriasImagenes: LandingImage[] = [
  {
    src: "/images/cimat/aplicacion-rotor-motor-electrico.webp",
    alt: "Rotor de motor eléctrico montado dentro de una balanceadora CIMAT encapsulada, con el HMI en columna al costado",
    width: 1400,
    height: 823,
    caption:
      "Rotor de motor eléctrico en balanceadora encapsulada, con medición y corrección en dos planos.",
  },
  {
    src: "/images/cimat/aplicacion-rotor-bomba-impulsor.webp",
    alt: "Impulsor de bomba de bronce apoyado sobre la mesa de una balanceadora vertical CIMAT, con el cabezal de corrección arriba",
    width: 1068,
    height: 431,
    caption:
      "Impulsor de bomba sobre balanceadora vertical, con el cabezal de corrección en el eje.",
  },
  {
    src: "/images/cimat/aplicacion-ventilador-industrial.webp",
    alt: "Rodete de ventilador industrial montado sobre el plato de una balanceadora vertical CIMAT",
    width: 1400,
    height: 403,
    caption:
      "Rodete de ventilador industrial sobre plato vertical: corrección por agregado o remoción de masa.",
  },
  {
    src: "/images/cimat/aplicacion-arbol-cardan.webp",
    alt: "Árbol de cardán completo con sus crucetas montado en una balanceadora horizontal CIMAT de bancada",
    width: 1400,
    height: 788,
    caption:
      "Árbol de cardán completo con sus crucetas, balanceado como conjunto en bancada horizontal.",
  },
]

export const industriaBanner: LandingImage = {
  src: "/images/cimat/aplicacion-rueda-ferroviaria.webp",
  alt: "Eje montado ferroviario con sus dos ruedas dentro de la celda de balanceo CIMAT, en planta",
  width: 1400,
  height: 476,
}

// ── 8. Evidencia ─────────────────────────────────────────────────────────────
//
// La seccion de caso documentado se retiro: un caso "en preparacion" comunica
// ausencia de evidencia. Vuelve cuando exista empresa o industria identificable,
// situacion inicial, equipo, resultado medido, certificado y testimonio
// autorizado. Mientras tanto la prueba disponible son las referencias globales
// del fabricante (con su aclaracion) y las verificaciones de norma, ambas en
// `quienEs`.

// ── 9. Soporte, repuestos y servicio en Argentina ────────────────────────────

export const soporte = {
  eyebrow: "El diferencial",
  title: "Fabricada en Polonia. Respaldada desde Argentina.",
  intro:
    "En cualquier industria, la calidad de una empresa no se mide solo por sus productos, sino también por la experiencia de quienes la representan cuando el cliente los necesita. Ese respaldo es la parte que completa la calidad de la máquina, y se presta desde Argentina para operaciones de toda la región.",
  blocks: [
    {
      icon: "engineering",
      title: "Ingeniería de aplicación propia",
      body: "Definimos junto al cliente el rotor —masa, geometría, velocidad de servicio, grado exigido, planos de corrección y volumen— y de ahí sale la configuración de máquina y utillaje. No de un número de modelo elegido de una lista.",
    },
    {
      icon: "customs",
      title: "Importación y nacionalización",
      body: "El cliente no importa nada: la compra es a JEREN SRL en Argentina, con factura local. Gestionamos importación, nacionalización, aranceles y logística hasta la planta.",
    },
    {
      icon: "training",
      title: "Puesta en marcha y capacitación",
      body: "Instalamos, calibramos y capacitamos al personal sobre la máquina y los rotores propios de la planta. CIMAT dicta además formación teórica y práctica en fábrica, con certificado de asistencia.",
    },
    {
      icon: "warranty",
      title: "Garantía, diagnóstico y soporte",
      body: "Cada máquina lleva un router Wi-Fi integrado en la unidad de medición: la mayoría de las incidencias de software y medición se resuelven por conexión remota desde fábrica. La garantía in situ queda a cargo de JEREN, con sedes en CABA, Ushuaia y Río Grande.",
    },
    {
      icon: "calibration",
      title: "Repuestos, calibración y modernización",
      body: "El kit de repuestos críticos se define antes de la entrega, según el perfil de uso. Y sobre una máquina existente de otra marca: inspección y calibración según ISO 21940-21:2012 con certificado, o modernización de la electrónica de medición con 12 meses de garantía.",
      interes: "inspeccion-calibracion",
    },
  ] as SupportBlock[],
  detalleImagen: {
    src: "/images/cimat/detalle-medicion-portaherramientas.webp",
    alt: "Detalle de un portaherramientas sujeto en el husillo de una balanceadora vertical CIMAT, con los sensores de medición",
    width: 1400,
    height: 1044,
  } as LandingImage,
  sedes: [
    { ciudad: "CABA", detalle: "Av. Juramento 2089, Piso 4° of. 405 (C1428DNG)" },
    { ciudad: "Ushuaia", detalle: "Paseo de la Plaza 2065 (CP 9410), Tierra del Fuego" },
    { ciudad: "Río Grande", detalle: "Padre Forgacs 1411 (CP 9420), Tierra del Fuego" },
  ],
}

// ── 10. Qué evaluar antes de comprar ─────────────────────────────────────────
//
// Reemplaza la comparativa competitiva. La version anterior generalizaba sobre
// marcas premium y equipos de bajo costo con frases difíciles de respaldar.
// Cumplir la misma norma tampoco demuestra igual precision ni robustez, asi que
// eso tampoco se afirma.

export const evaluar = {
  eyebrow: "Guía de selección",
  title: "Qué evaluar antes de comprar una balanceadora",
  intro:
    "Sirve para auditar cualquier propuesta recibida, la nuestra incluida. Son los criterios que definen el costo real del equipo a lo largo de su vida útil.",
  criterios: [
    {
      title: "Adecuación al rotor",
      body: "Masa, geometría, tipo de apoyo, velocidad de servicio y radio disponible para la corrección.",
    },
    {
      title: "Precisión y repetibilidad",
      body: "Desbalance residual alcanzable y relación de reducción, medidos y no estimados.",
    },
    {
      title: "Verificación y normas",
      body: "Verificación de la máquina según ISO 2953 y grados según ISO 21940-11, con reporte emitido.",
    },
    {
      title: "Seguridad",
      body: "Resguardos conformes a ISO 21940-23:2012 y declaración de conformidad de máquina.",
    },
    {
      title: "Tooling",
      body: "Adaptadores, mandriles y utillaje para los rotores concretos, presupuestados desde el inicio.",
    },
    {
      title: "Reportes y trazabilidad",
      body: "Formato del certificado, exportación de datos e integración con el sistema de calidad.",
    },
    {
      title: "Capacitación",
      body: "Quién forma al operador, sobre qué máquina y con qué documentación queda el equipo.",
    },
    {
      title: "Repuestos y soporte",
      body: "Quién responde en el país, con qué canal a fábrica y con qué kit crítico definido.",
    },
    {
      title: "Costo total de propiedad",
      body: "Inversión inicial más logística de servicio, repuestos, capacitación y paradas no programadas.",
    },
  ],
}

// ── 11. FAQ ──────────────────────────────────────────────────────────────────

export const faqs: FaqItem[] = [
  {
    question: "¿Cómo se identifica la balanceadora adecuada?",
    answer:
      "A partir del rotor, no del catálogo. Necesitamos masa, geometría, tipo de apoyo, velocidad de servicio, el grado exigido y el volumen de trabajo. Con eso definimos línea, modelo, utillaje y tipo de corrección. No es necesario contar con todos esos datos para escribirnos: los completamos juntos.",
  },
  {
    question: "¿JEREN gestiona la importación y la puesta en marcha?",
    answer:
      "Sí. La compra es a JEREN SRL en Argentina, con factura local, y nosotros gestionamos importación, nacionalización, aranceles y logística hasta la planta. La instalación, la calibración inicial y la capacitación del personal también quedan a cargo nuestro.",
  },
  {
    question: "¿Quién repara la máquina en el país y con qué certificación?",
    answer:
      "JEREN atiende desde sus tres sedes —CABA, Ushuaia y Río Grande— todo el territorio argentino, y acompaña operaciones en el resto de la región. El kit de repuestos críticos se define antes de la entrega según el perfil de uso, y el resto del listado se pide por canal directo con la planta de Bydgoszcz. Cada máquina lleva un router Wi-Fi integrado en la unidad de medición, así que buena parte de las incidencias de software y medición se resuelven por conexión remota desde fábrica.",
  },
  {
    question: "¿Se puede calibrar o modernizar una máquina existente?",
    answer:
      "Sí, y suele ser un buen punto de partida. CIMAT inspecciona y calibra balanceadoras según ISO 21940-21:2012, con certificado, y vende y certifica rotores patrón. Sobre máquinas antiguas se moderniza la electrónica de medición con ROTORTEST, más rodamientos, carros, accionamientos y acelerómetros, en sitio o en fábrica, con 12 meses de garantía y certificado.",
  },
  {
    question: "¿Se puede balancear sin desmontar el rotor?",
    answer:
      "Sí. La balanceadora portátil SmaRT mide y corrige el desbalance con el rotor montado en su propia máquina y evalúa la severidad de vibración según DIN ISO 10816-3, con documentación de resultados. Es la opción para ventiladores de mina, rotores en boca de pozo o secaderos, donde el equipo no se puede mover.",
  },
  {
    question: "¿Cómo solicito información técnica o una propuesta?",
    answer:
      "Con el formulario de esta página. Indíquenos qué necesita resolver y, si los tiene a mano, el tipo de rotor, el peso, la velocidad de servicio y el grado requerido. Un especialista revisa la aplicación y responde con la línea recomendada y los próximos pasos.",
  },
]

/** Qué pasa después del CTA. Responde la pregunta que hoy nadie contesta. */
export const proceso = {
  eyebrow: "Cómo trabajamos",
  title: "Qué ocurre después de la consulta",
  intro:
    "No es necesario tener definida la máquina ni todos los parámetros técnicos. El primer paso es entender la aplicación.",
  pasos: [
    {
      n: "1",
      title: "Nos plantea la necesidad",
      body: "Alcanza con la situación: qué rotor está dando problemas o qué se necesita poder certificar.",
    },
    {
      n: "2",
      title: "Revisamos la aplicación",
      body: "Rotor, proceso, volumen, precisión requerida y nivel de automatización. Si falta un dato, lo buscamos en conjunto.",
    },
    {
      n: "3",
      title: "Recibe información concreta",
      body: "Línea recomendada, configuración, próximos pasos y, cuando corresponde, una propuesta.",
    },
  ],
}

// ── 12. CTA final ────────────────────────────────────────────────────────────

export const ctaFinal = {
  eyebrow: "Solicitud de información",
  title: "Indíquenos qué necesita balancear",
  body: "Un especialista de JEREN revisa la aplicación y responde con la línea recomendada y los próximos pasos. Si aún no cuenta con los datos técnicos del rotor, escríbanos igual.",
}

/** Copy del formulario. Es el mismo componente en la landing y en las páginas técnicas. */
export const formulario = {
  ayudaRotor:
    "Si dispone de ellos, puede incluir tipo de rotor, peso, diámetro, velocidad de servicio o grado requerido.",
  privacidad:
    "Utilizamos sus datos únicamente para responder esta consulta. No los compartimos con terceros.",
  confirmacion:
    "Gracias. Recibimos tu consulta. Un especialista de JEREN se pondrá en contacto para revisar tu necesidad.",
}

// ── 13. Footer ───────────────────────────────────────────────────────────────

export const footer = {
  descripcion:
    "JEREN SRL representa en Argentina a CIMAT, fabricante de balanceadoras industriales de Bydgoszcz, Polonia, marca de Ascential Technologies.",
  sedes: [
    {
      ciudad: "Buenos Aires",
      razon: "JEREN SRL",
      lineas: ["Av. Juramento 2089, Piso 4° oficina 405", "(C1428DNG) C.A.B.A."],
      mapsUrl: "https://maps.google.com/?q=Av.+Juramento+2089,+Buenos+Aires,+Argentina",
    },
    {
      ciudad: "Ushuaia",
      razon: "Tecnomaq SRL",
      lineas: ["Paseo de la Plaza 2065", "(CP 9410) Tierra del Fuego"],
      mapsUrl:
        "https://maps.google.com/?q=Paseo+de+la+Plaza+2065,+Ushuaia,+Tierra+del+Fuego,+Argentina",
    },
    {
      ciudad: "Río Grande",
      razon: "Tecnomaq SRL",
      lineas: ["Padre Forgacs 1411", "(CP 9420) Tierra del Fuego"],
      mapsUrl:
        "https://maps.google.com/?q=Padre+Forgacs+1411,+R%C3%ADo+Grande,+Tierra+del+Fuego,+Argentina",
    },
  ],
  normas: "ISO 21940 · ISO 2953 · Directiva de Máquinas 2006/42/CE",
}

// ── SEO ──────────────────────────────────────────────────────────────────────

export const seo = {
  title: "Balanceadoras industriales CIMAT en Argentina | JEREN",
  description:
    "Balanceadoras CIMAT con soporte local desde Argentina para toda la región: ingeniería de aplicación, importación, puesta en marcha, capacitación, repuestos y calibración de balanceadoras de cualquier marca. Representante oficial JEREN SRL.",
  keywords: [
    "balanceadora industrial",
    "balanceo dinámico de rotores",
    "máquina de balanceo dinámico",
    "balanceadora CIMAT",
    "balanceo in situ",
    "ISO 21940",
    "ISO 1940-1",
    "grado de calidad de balanceo G2.5",
    "balanceo de turbinas",
    "balanceo de rotores de bomba",
    "balanceo de impulsores",
    "balanceo de ventiladores industriales",
    "balanceo de cigüeñales",
    "balanceo de rodillos",
    "balanceo de turbocompresores",
    "equilibrado dinámico",
  ],
  canonical: "https://www.jeren.com/cimat",
}
