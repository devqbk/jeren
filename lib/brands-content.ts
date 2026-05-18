// Contenido extendido de marcas (descripción larga + productos)
// Fuente: jeren.com (sitio original)

export interface ProductItem {
  name: string
  description: string
}

export interface BrandContent {
  slug: string
  longDescription: string[]
  products: ProductItem[]
}

// ─── Aire y Refrigeración ────────────────────────────────────────────────────

export const aireRefrigeracionContent: BrandContent[] = [
  {
    slug: "galileo-tp",
    longDescription: [
      "Galileo TP Process Equipment SRL es un fabricante argentino de equipos especializados para la industria del aire acondicionado y la refrigeración. Sus sistemas están diseñados para líneas de producción de fabricantes de compresores, heladeras, aires acondicionados y equipos de refrigeración industrial.",
      "Su portafolio abarca bombas de vacío rotativas, sistemas de prueba de performance, equipos de seguridad eléctrica, máquinas de carga de gas refrigerante y sistemas de recuperación de helio, integrando soluciones completas para la manufactura de productos de frío.",
    ],
    products: [
      { name: "Bombas de Vacío Rotativas y Vacuómetros", description: "Equipos de vacío para evacuación de sistemas de refrigeración en líneas de producción." },
      { name: "Sistemas de Prueba de Performance", description: "Bancos de ensayo para verificación de compresores y unidades de refrigeración." },
      { name: "Equipos de Seguridad Eléctrica", description: "Instrumentos de prueba eléctrica para líneas de manufactura de electrodomésticos." },
      { name: "Sistemas de Recuperación de Refrigerante", description: "Equipos para recuperación y transferencia controlada de gases refrigerantes." },
      { name: "Máquinas de Carga de Gas Refrigerante", description: "Sistemas automáticos de carga y pesaje de refrigerantes para producción en serie." },
      { name: "Sistemas de Evacuación para Líneas de Producción", description: "Equipos de vacío integrados para líneas de ensamble de productos de refrigeración." },
    ],
  },
  {
    slug: "inficon",
    longDescription: [
      "INFICON GmbH es un fabricante global líder en instrumentos de detección de gases y fugas. Sus detectores portátiles son herramientas esenciales para técnicos de refrigeración y aire acondicionado, permitiendo localizar pérdidas en circuitos frigoríficos con alta sensibilidad y precisión.",
      "La línea de detectores de fugas de INFICON es compatible con una amplia gama de refrigerantes modernos, incluyendo los de bajo potencial de calentamiento global (HFO), y ofrece modelos para detección de múltiples gases en un único instrumento.",
    ],
    products: [
      { name: "Detectores de Fugas de Refrigerante", description: "Detectores portátiles de alta sensibilidad para localización de pérdidas en circuitos frigoríficos." },
      { name: "Detectores Multi-Gas", description: "Detectan refrigerantes, monóxido de carbono (CO) y gases combustibles en un único equipo." },
      { name: "Detectores de Fugas de Helio", description: "Instrumentos de alta precisión para pruebas de estanqueidad con helio como gas trazador." },
      { name: "Analizadores de Refrigerante", description: "Identificadores de gas refrigerante para verificación de calidad y control de mezclas." },
    ],
  },
  {
    slug: "jae-hyun-autonics",
    longDescription: [
      "Jae Hyun Autonics es un fabricante especializado en equipos para soldadura fuerte (brazing) automática de cañerías de cobre y aluminio. Su producto estrella, el GAS SAVER, introduce el fundente líquido directamente en el flujo de gas combustible del soplete, simplificando el proceso y garantizando una aplicación uniforme en cada unión.",
      "Los equipos de Jae Hyun Autonics se utilizan en la fabricación de intercambiadores de calor, unidades de aire acondicionado y sistemas de refrigeración, donde la calidad y repetibilidad de la soldadura son críticas para la hermeticidad del circuito.",
    ],
    products: [
      { name: "GAS SAVER", description: "Sistema que introduce automáticamente fundente líquido en el gas combustible del soplete. Mejora calidad, eficiencia y economía del proceso de brazing." },
      { name: "Sopletes para Soldadura Automática", description: "Antorchas de alta calidad diseñadas para sistemas de soldadura fuerte automatizada en líneas de producción." },
      { name: "Sistemas de Ignición Automática", description: "Equipos de encendido automático de sopletes para integración en líneas de manufactura." },
    ],
  },
  {
    slug: "sumake",
    longDescription: [
      "Sumake Industrial Company es un fabricante y exportador taiwanés de herramientas neumáticas industriales, todas certificadas CE. Su línea abarca destornilladores, llaves de impacto, taladros, pulidoras, martillos, lijadoras, pistolas de pintura y herramientas de remachado para aplicaciones industriales y automotrices.",
      "Los productos Sumake se destacan por su robustez, ergonomía y excelente relación calidad-precio, siendo utilizados en entornos de producción de alta exigencia en todo el mundo.",
    ],
    products: [
      { name: "Destornilladores Neumáticos", description: "Modelos CPP41, CA35 y CP45. Rango de torque de 3 a 50 kgf-cm. Diseñados para ensamble industrial de precisión." },
      { name: "Llaves de Impacto", description: "Herramientas de alta potencia para apriete y desarme de tornillería en producción automotriz e industrial." },
      { name: "Taladros Neumáticos", description: "Taladros de velocidad variable para perforación en líneas de producción." },
      { name: "Pulidoras y Lijadoras", description: "Herramientas de acabado superficial para aplicaciones industriales y automotrices." },
      { name: "Pistolas de Pintura", description: "Sistemas de aplicación de pintura neumáticos para acabados industriales de calidad." },
      { name: "Remachadoras Neumáticas", description: "Equipos de remachado para ensamble de estructuras metálicas y paneles." },
    ],
  },
  {
    slug: "gasflux",
    longDescription: [
      "Gasflux es un fabricante especializado en fundentes para soldadura fuerte (brazing) de cañerías de cobre. Su solución líquida Gasflux® se introduce automáticamente en el gas combustible del soplete mediante el equipo Gasfluxer®, eliminando la aplicación manual y garantizando cobertura uniforme en cada unión soldada.",
      "El sistema cumple con la norma AWS/ANSI A5.31, no requiere boquillas especiales y es compatible con instalaciones manuales o automáticas existentes. Es ampliamente utilizado por fabricantes de equipos de refrigeración, HVAC y sistemas de climatización industrial.",
    ],
    products: [
      { name: "Gasflux® Líquido", description: "Fundente líquido para soldadura fuerte de cobre. Se auto-introduce en el gas combustible del soplete. Cumple norma AWS/ANSI A5.31." },
      { name: "Gasfluxer®", description: "Equipo dispersor con cámara de mezcla y depósito reservorio. Compatible con instalaciones manuales y automáticas sin necesidad de boquillas especiales." },
    ],
  },
  {
    slug: "blm",
    longDescription: [
      "BLM Group es un fabricante italiano líder en maquinaria para el procesamiento de tubos y perfiles metálicos. Sus equipos abarcan dobladoras CNC de tubos de cobre y aluminio, conformadoras de extremos y sistemas de corte láser para la industria de la refrigeración, HVAC y automotriz.",
      "Las dobladoras y conformadoras de BLM permiten producir serpentines, colectores y conjuntos de cañerías con alta precisión y repetibilidad, siendo fundamentales en líneas de producción de intercambiadores de calor y unidades de climatización.",
    ],
    products: [
      { name: "Dobladoras de Tubos CNC", description: "Máquinas automáticas para doblado de tubos de cobre y aluminio con alta precisión y repetibilidad." },
      { name: "Conformadoras de Extremos", description: "Equipos para moldeado de extremos de tubos: abocardado, acanalado, reducción y expansión." },
      { name: "Maquinaria Láser para Tubos", description: "Sistemas de corte y mecanizado láser de alta velocidad para tubos y perfiles metálicos." },
      { name: "Equipos de Corte y Terminado", description: "Sierras y sistemas de corte para preparación de tubería en líneas de producción industrial." },
    ],
  },
  {
    slug: "tech-sonic",
    longDescription: [
      "Tech Sonic es un fabricante especializado en equipos de sellado ultrasónico de tubos de aluminio y cobre utilizados en sistemas de refrigeración. Sus selladores ultrasónicos reemplazan los métodos tradicionales de prensado, ofreciendo un sello hermético confiable sin necesidad de calor ni soldadura.",
      "Sus equipos están diseñados para fabricantes de heladeras y sistemas HVAC con alta cadencia productiva. Disponen de modelos estándar, económicos y a prueba de explosión para trabajar con refrigerantes inflamables de clasificación A2L y A3.",
    ],
    products: [
      { name: "Sellador Ultrasónico de Tubos — Estándar", description: "Sella herméticamente tubos de aluminio y cobre en sistemas de refrigeración. Óptimo para líneas de producción de alto volumen." },
      { name: "Sellador Ultrasónico de Tubos — Economy", description: "Versión de bajo costo con las mismas características técnicas esenciales para producción en serie." },
      { name: "Sellador Ultrasónico — Explosion Proof", description: "Versión certificada para entornos con refrigerantes inflamables (A2L, A3). Cumple normas de seguridad para atmósferas explosivas." },
    ],
  },
]
