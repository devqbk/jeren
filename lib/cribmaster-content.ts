// ─────────────────────────────────────────────────────────────────────────────
// Contenido de la landing /cribmaster — gestión de insumos, EPP y herramientas
// con CribMaster (Stanley Black & Decker) en Argentina, distribuido por JEREN.
//
// FUENTE ÚNICA DE VERDAD del copy. Todo sale del flyer
// `CribMaster_Flyer_A4_JEREN` (30/10/2026) y del mail de Fabián Naveira del
// mismo día. Reglas:
//   · Las cifras del caso Rio Tinto son del fabricante: siempre con su aclaración.
//   · CribMaster® es marca de Stanley Black & Decker; JEREN es distribuidor
//     autorizado en Argentina (no "representante oficial": así lo dice el flyer).
//   · Voseo, como el flyer ("Consultanos", "tu operación").
// ─────────────────────────────────────────────────────────────────────────────

export const CANONICAL = "https://www.jeren.com/cribmaster"
export const FORM_ANCHOR = "#solicitar"
export const CTA_LABEL = "Pedir una demostración"

/** Mismo WhatsApp comercial que la línea CIMAT (Fabián Naveira). */
export const WHATSAPP_NUMERO = "5491141571427"
export const WHATSAPP_MENSAJE = "Hola, consulto por CribMaster"
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAJE)}`

export const EMAIL = "info@jeren.com"
export const TELEFONO = "(+5411) 4788-0566"
export const TELEFONO_HREF = "tel:+541147880566"
export const SITIO_FABRICANTE = "https://www.cribmaster.com"

export const seo = {
  title: "CribMaster en Argentina: expendedoras industriales y lockers inteligentes | JEREN",
  description:
    "Expendedoras industriales, lockers y gabinetes inteligentes CribMaster (Stanley Black & Decker) para insumos, EPP y herramientas en minería y petróleo y gas. Distribución, instalación y soporte de JEREN en Argentina.",
  keywords: [
    "CribMaster",
    "expendedora industrial",
    "vending industrial",
    "máquina expendedora de EPP",
    "lockers inteligentes para herramientas",
    "gestión de insumos minería",
    "control de EPP yacimiento",
    "pañol automatizado",
    "Stanley Black & Decker CribMaster Argentina",
  ],
}

export const headerNav = [
  { label: "Inicio", href: "#top" },
  { label: "Caso", href: "#caso" },
  { label: "Qué resuelve", href: "#resuelve" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Dónde aplica", href: "#aplica" },
]

// ── 1. Hero ──────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "CribMaster® · Stanley Black & Decker · Petróleo & Gas · Minería",
  h1: "Insumos, EPP y herramientas bajo control, en la mina y en el yacimiento.",
  subtitle:
    "CribMaster entrega cada ítem a un operario identificado con tarjeta o PIN, registra la transacción en el momento y repone solo lo que se consume. Expendedoras industriales, lockers y gabinetes inteligentes, con un software que se integra al ERP y concentra los datos de todos los sitios.",
  bullets: [
    "Cada retiro autorizado con tarjeta o PIN y registrado por persona, área y turno.",
    "Reposición solo de lo que se consume, con el stock en tiempo real.",
    "Distribución, instalación y soporte de JEREN en Argentina.",
  ],
  microcopy:
    "Contanos qué querés controlar y en qué sitio. Te proponemos la configuración y coordinamos una demostración, sin cargo.",
  image: {
    src: "/images/brands/cribmaster/toolbox.png",
    alt: "Expendedora industrial CribMaster ToolBox con bandejas de EPP y consumibles y pantalla táctil",
    width: 675,
    height: 1033,
    caption: "CribMaster ToolBox · expendedora de EPP y consumibles con dispensado unitario",
  },
}

export const trustBar = [
  { fuente: "JEREN", value: "40+ años", label: "equipando a la industria minera y a los yacimientos en Argentina" },
  { fuente: "Stanley Black & Decker", value: "CribMaster®", label: "marca del grupo, con instalaciones en operación en todo el mundo" },
  { fuente: "Desde Argentina", value: "3 sedes", label: "Buenos Aires, Río Grande y Ushuaia: instalación y soporte" },
]

// ── 2. Caso ──────────────────────────────────────────────────────────────────

export const caso = {
  eyebrow: "Caso Rio Tinto · Mina Cordero Rojo (EE. UU.)",
  title: "Lo que cambió en una mina cuando cada entrega quedó registrada por persona",
  stats: [
    { value: "−78 %", label: "de desperdicio de insumos de seguridad" },
    { value: "USD 5.000", label: "por mes de ahorro en anteojos de seguridad" },
    { value: "USD 30.000", label: "de retorno en 6 meses, contando solo anteojos de seguridad" },
    { value: "59 → 13", label: "entregas por día, con dispensado unitario y registro por persona" },
  ],
  cita: "Dimos un paso positivo hacia una cultura de responsabilidad.",
  citaAutor: "Empleado de la mina Cordero Rojo (traducción)",
  aclaracion: "Resultados del caso según publicación del fabricante; varían según la operación.",
}

// ── 3. Qué resuelve ──────────────────────────────────────────────────────────

export type ResuelveIcon = "persona" | "stock" | "sitio" | "tablero"

export const resuelve = {
  eyebrow: "Qué resuelve en la operación",
  title: "Menos derroche, menos faltantes y menos viajes al pañol",
  cards: [
    {
      icon: "persona" as ResuelveIcon,
      numero: "01",
      title: "Consumo con responsable",
      body: "Cada retiro se autoriza con tarjeta o PIN y queda registrado por persona: menos derroche, menos acopio y contratistas con su propio stock.",
    },
    {
      icon: "stock" as ResuelveIcon,
      numero: "02",
      title: "Sin faltantes que paren el trabajo",
      body: "El software sigue el stock en tiempo real y repone solo lo que se consume, con reportes de uso por persona, área y turno.",
    },
    {
      icon: "sitio" as ResuelveIcon,
      numero: "03",
      title: "En el punto de uso, no en el pañol central",
      body: "Las expendedoras y lockers se instalan donde se trabaja: menos viajes al pañol y menos tiempo muerto.",
    },
    {
      icon: "tablero" as ResuelveIcon,
      numero: "04",
      title: "Un solo tablero para todos los sitios",
      body: "Los datos de cada instalación, incluidos los sitios remotos, se consolidan en una base integrable con el ERP.",
    },
  ],
}

// ── 4. Soluciones ────────────────────────────────────────────────────────────

export const soluciones = {
  eyebrow: "Soluciones CribMaster",
  title: "Del gabinete al tablero: cada formato según lo que hay que controlar",
  lead:
    "La plataforma combina hardware de distinto nivel de seguridad con un mismo software. Se elige por el ítem: consumibles de alto giro, herramientas de alto valor o equipos que entran y salen con RFID.",
  items: [
    {
      categoria: "Expendedoras industriales",
      modelos: "ToolBox · ProStock",
      body: "EPP, insertos y consumibles, con dispensado unitario autorizado por tarjeta o PIN.",
    },
    {
      categoria: "Lockers y gabinetes inteligentes",
      modelos: "ProLock · MultiStore · Flip Top",
      body: "Herramientas y equipos de alto valor, con registro de retiro y devolución.",
    },
    {
      categoria: "Trazabilidad RFID",
      modelos: "AccuCab · AccuPort",
      body: "Gabinetes y portales que registran qué entra y qué sale, sin intervención del operario.",
    },
    {
      categoria: "Software y app",
      modelos: "Suite CribMaster · CM Mobile",
      body: "Stock en tiempo real, reportes, reposición, integración con el ERP y retiro desde el celular.",
    },
    {
      categoria: "Acceso controlado",
      modelos: "Access+",
      body: "Cerradura con credencial para gabinetes LISTA® y Vidmar® ya instalados.",
    },
  ],
}

// ── 5. Dónde aplica ──────────────────────────────────────────────────────────

export const aplica = {
  eyebrow: "Dónde aplica",
  title: "Pensado para operaciones lejos del pañol central",
  items: [
    "Yacimientos onshore y offshore",
    "Minas a cielo abierto y subterráneas",
    "Talleres de mantenimiento pesado",
    "Pañoles satélite y sitios remotos",
    "Contratistas en obra",
  ],
}

// ── 6. JEREN ─────────────────────────────────────────────────────────────────

export const jeren = {
  eyebrow: "Quién lo instala y lo mantiene",
  title: "CribMaster en Argentina, con distribución y soporte de JEREN",
  paragraphs: [
    "JEREN SRL comercializa, instala y da soporte y mantenimiento a equipos para la industria minera y los yacimientos desde hace más de 40 años, con oficinas en la Ciudad de Buenos Aires y sucursales en Río Grande y Ushuaia.",
    "Relevamos la operación, proponemos la configuración de expendedoras, lockers y software, y acompañamos la puesta en marcha y la integración con el ERP.",
  ],
}

// ── 7. Formulario y cierre ───────────────────────────────────────────────────

export const ctaFinal = {
  eyebrow: "Demostración o propuesta",
  title: "Consultanos por una demostración o una propuesta para tu operación",
  body: "Contanos qué querés controlar (EPP, consumibles, herramientas), en cuántos sitios y para cuánta gente. Un especialista de JEREN te responde con la configuración sugerida y los próximos pasos.",
}

export const formulario = {
  ayudaOperacion:
    "Por ejemplo: qué ítems querés controlar, cuántos sitios o pañoles, cuántos operarios y contratistas, y si ya usan un ERP.",
  privacidad: "Usamos tus datos únicamente para responder esta consulta. No los compartimos con terceros.",
  respuesta: "Te respondemos el día hábil siguiente por email o WhatsApp.",
  confirmacion:
    "Gracias. Recibimos tu consulta. Un especialista de JEREN se va a contactar para relevar tu operación y coordinar la demostración.",
}

export const stickyBar = {
  titulo: "CribMaster",
  texto: "distribución, instalación y soporte de JEREN en Argentina.",
  whatsappAria: "Escribirnos por WhatsApp sobre CribMaster",
}

export const footer = {
  descripcion:
    "JEREN SRL es distribuidor autorizado de CribMaster®, marca de Stanley Black & Decker, en Argentina: expendedoras industriales, lockers y gabinetes inteligentes para insumos, EPP y herramientas.",
  legal:
    "CribMaster® es una marca de Stanley Black & Decker. Resultados del caso según publicación del fabricante; varían según la operación. Imágenes: Stanley Black & Decker.",
  sedes: [
    {
      ciudad: "Buenos Aires",
      razon: "JEREN SRL",
      lineas: ["Av. Juramento 2089, Piso 4° oficina 405", "(C1428DNG) C.A.B.A."],
      mapsUrl: "https://maps.google.com/?q=Av.+Juramento+2089,+Buenos+Aires,+Argentina",
    },
    {
      ciudad: "Río Grande",
      razon: "Tecnomaq SRL",
      lineas: ["Padre Forgacs 1411", "(CP 9420) Tierra del Fuego"],
      mapsUrl:
        "https://maps.google.com/?q=Padre+Forgacs+1411,+R%C3%ADo+Grande,+Tierra+del+Fuego,+Argentina",
    },
    {
      ciudad: "Ushuaia",
      razon: "Tecnomaq SRL",
      lineas: ["Paseo de la Plaza 2065", "(CP 9410) Tierra del Fuego"],
      mapsUrl:
        "https://maps.google.com/?q=Paseo+de+la+Plaza+2065,+Ushuaia,+Tierra+del+Fuego,+Argentina",
    },
  ],
}
