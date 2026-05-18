// Contenido extendido de marcas (descripción larga + productos)
// Fuente: jeren.com (sitio original)

// ─── Electrónica ─────────────────────────────────────────────────────────────

export const electronicaContent: BrandContent[] = [
  {
    slug: "fuji",
    longDescription: [
      "Fuji ha sido un innovador consistente en la industria electrónica desde su fundación. Fue pionero en la introducción de grandes avances tecnológicos en la manufactura SMT y mantiene hoy en día esa visión en el desarrollo y producción de maquinaria de última generación.",
      "Sus plataformas de montaje superficial son reconocidas mundialmente por su velocidad, precisión y flexibilidad, adaptándose tanto a producciones de alta velocidad como a lotes de diversidad alta.",
    ],
    products: [
      { name: "SMART FAB", description: "Sistema de montaje superficial de alta velocidad para producción masiva." },
      { name: "NEXT III", description: "Plataforma de montaje modular de última generación con alta flexibilidad." },
      { name: "AIMEX IIIc", description: "Montadora de alta flexibilidad y precisión para componentes de gran tamaño." },
      { name: "AIMEX III", description: "Sistema de montaje versátil para producción mixta de alta y baja velocidad." },
    ],
  },
  {
    slug: "koh-young",
    longDescription: [
      "Koh Young Technology es el líder mundial en sistemas de inspección y medición 3D para la industria electrónica. Utiliza su patentada tecnología Shadow-Free Moiré (SFM) para ofrecer datos de medición precisos en inspección de pasta de soldadura (SPI) e inspección óptica automatizada (AOI).",
      "Sus sistemas permiten a los fabricantes de PCB detectar defectos en etapas tempranas del proceso, reduciendo el re-trabajo, el scrap y los costos de calidad. Koh Young es el referente en inspección 3D para la industria electrónica a nivel global.",
    ],
    products: [
      { name: "ZENITH — AOI 3D", description: "Sistema de inspección óptica automatizada en 3D para detección de defectos en placas montadas." },
      { name: "KY 8030-3 — SPI 3D", description: "Sistema de inspección de pasta de soldadura en 3D para control de proceso de serigrafía." },
    ],
  },
  {
    slug: "data-io",
    longDescription: [
      "Data I/O es el proveedor líder mundial de sistemas de aprovisionamiento seguro y programación de dispositivos Flash, Microcontroladores y Logic, tanto en equipos manuales como automatizados. Sus soluciones son clave para fabricantes que requieren programación en línea con trazabilidad y seguridad.",
      "Los sistemas PSV de Data I/O se integran directamente en las líneas SMT, permitiendo programar los dispositivos justo antes del montaje para eliminar el manejo manual y reducir el riesgo de errores.",
    ],
    products: [
      { name: "PSV 5000", description: "Sistema automatizado de programación de dispositivos integrado en línea SMT." },
      { name: "PSV 7000", description: "Plataforma de aprovisionamiento seguro de alta velocidad para producción en serie." },
    ],
  },
  {
    slug: "nordson-asymtek",
    longDescription: [
      "Nordson ASYMTEK es el líder mundial en sistemas de dispensado de fluidos, inyección de aire y recubrimiento conformal de precisión para la industria electrónica. Sus equipos aplican adhesivos, encapsulantes, selladores y recubrimientos con alta repetibilidad y mínimo desperdicio.",
      "Sus soluciones de conformal coating protegen placas electrónicas de humedad, polvo y agentes químicos, siendo esenciales para aplicaciones industriales, automotrices y de defensa donde la confiabilidad es crítica.",
    ],
    products: [
      { name: "Conformal Coating", description: "Sistemas automáticos de recubrimiento conformal selectivo para protección de PCB en ambientes adversos." },
      { name: "Fluid Dispensing", description: "Equipos de dispensado de fluidos de alta precisión para adhesivos, encapsulantes y selladores." },
    ],
  },
  {
    slug: "yj-link",
    longDescription: [
      "YJ Link provee módulos de manipulación automática (conveyors) de alto rendimiento para la fabricación de PCB. Su amplia variedad de opciones de circulación y manejo ofrece soluciones de transporte para cada etapa de la línea SMT, desde la carga hasta la descarga.",
      "Todos los módulos YJ Link cuentan con protección contra descarga electrostática (ESD) y certificación CE, garantizando la integridad de los componentes electrónicos durante el transporte entre equipos de la línea.",
    ],
    products: [
      { name: "Link Conveyor", description: "Conveyor de transporte de PCB con protección ESD para interconexión de equipos SMT." },
      { name: "Dual Lane Equipment", description: "Módulos de doble carril para producción paralela de alta cadencia." },
      { name: "Buffer", description: "Sistema de almacenamiento y secuenciado de PCB entre estaciones de proceso." },
      { name: "Shuttle Conveyor", description: "Mecanismo de transferencia lateral de PCB entre líneas de producción." },
      { name: "PCB Cleaner", description: "Equipo de limpieza de placas de circuito impreso integrable en línea." },
      { name: "Loading / Unloading", description: "Estaciones automáticas de carga y descarga de PCB al inicio y fin de línea." },
    ],
  },
  {
    slug: "creative-electron",
    longDescription: [
      "Creative Electron fue fundada en 2008 y se especializa en la fabricación y distribución de sistemas de inspección por rayos X de alta performance y diseño personalizado. Sus equipos se utilizan para aseguramiento de calidad y detección de componentes falsificados en la industria electrónica.",
      "La línea TruView de Creative Electron ofrece sistemas de rayos X para inspección de BGA, solder joints, componentes THT y PCB complejas, con interfaces intuitivas y capacidades de imagen de alta resolución.",
    ],
    products: [
      { name: "TruView FUSION", description: "Sistema de inspección por rayos X para análisis de BGA, solder joints y componentes de alta densidad." },
      { name: "TruView PRIME", description: "Equipo de rayos X de alto rendimiento para inspección de PCB y detección de falsificaciones." },
      { name: "TruView CUBE", description: "Sistema compacto de inspección por rayos X para laboratorios de calidad y prototipos." },
      { name: "PCB X-Ray Inspection", description: "Solución especializada en inspección de placas de circuito impreso con rayos X." },
    ],
  },
  {
    slug: "kurtz-ersa",
    longDescription: [
      "Kurtz Ersa es el líder mundial en soluciones de soldadura para la industria electrónica, con más de cuatro décadas de experiencia y una posición dominante en sistemas de rework de BGA. Sus equipos modulares cubren todas las etapas de soldadura en ensambles SMT y THT.",
      "Sus sistemas de rework permiten la reparación y modificación de componentes electrónicos en entornos de producción y laboratorio, combinando precisión térmica con facilidad de uso para garantizar resultados reproducibles.",
    ],
    products: [
      { name: "HR 600XL — Rework", description: "Sistema de rework de alta gama para BGA y componentes de gran tamaño con control térmico preciso." },
      { name: "HR 550L — Rework", description: "Equipo de rework versátil para producción y laboratorio con visualización óptica integrada." },
      { name: "i-CON VARIO 4", description: "Estación de soldadura y rework modular con control digital de temperatura." },
      { name: "HOTFLOW / POWERFUL ULTRA", description: "Hornos de reflujo de alta performance para soldadura SMT en líneas de producción." },
      { name: "ECOSELECT / SMARTFLOW", description: "Máquinas de soldadura selectiva para ensambles mixtos SMT/THT." },
      { name: "VERSAFLOW 4 XL", description: "Sistema de soldadura por ola de gran formato para producción de alto volumen THT." },
    ],
  },
  {
    slug: "ecd",
    longDescription: [
      "ECD fabrica instrumentos de perfilado térmico para el seguimiento preciso de las variables de tiempo y temperatura en los procesos de fabricación electrónica. El tiempo y la temperatura son variables críticas en la soldadura de placas de circuito impreso, y sus equipos aseguran que los procesos de reflujo y soldadura por ola sean consistentes y reproducibles.",
      "Los perfiladores térmicos de ECD se utilizan para validar y optimizar los perfiles de temperatura de los hornos de reflujo, garantizando la calidad de las juntas de soldadura y la integridad de los componentes.",
    ],
    products: [
      { name: "V-M.O.L.E.®", description: "Perfilador térmico compacto para monitoreo de temperatura en hornos de reflujo y soldadura por ola." },
      { name: "MEGAM.O.L.E.® 20", description: "Solución avanzada de monitoreo térmico con 20 canales para perfilado de alta precisión." },
      { name: "SUPERM.O.L.E.® GOLD 2", description: "Perfilador térmico premium de máxima performance para procesos de soldadura críticos." },
    ],
  },
  {
    slug: "evs",
    longDescription: [
      "EVS fabrica máquinas de recuperación de soldadura que permiten recuperar hasta un 65% de estaño puro en peso a partir de la escoria (dross) generada en las máquinas de soldadura por ola. Sus equipos ofrecen una solución económica y ambientalmente responsable para reducir el costo de los insumos de soldadura.",
      "El proceso de recuperación de EVS es simple y seguro, eliminando la necesidad de enviar el dross a terceros para su procesamiento y devolviendo estaño listo para ser reutilizado directamente en línea.",
    ],
    products: [
      { name: "EVS 10K", description: "Máquina de recuperación de soldadura de alta capacidad para líneas de producción de alto volumen." },
      { name: "EVS 8K", description: "Equipo de recuperación de estaño desde escoria para producción de volumen medio." },
      { name: "EVS 1500", description: "Recuperadora de soldadura compacta para líneas de menor volumen o laboratorios." },
    ],
  },
  {
    slug: "sono-tek",
    longDescription: [
      "Sono-Tek Corporation es el líder mundial en sistemas de pulverización ultrasónica para aplicaciones de recubrimiento de películas delgadas. Sus tecnologías se aplican en electrónica, paneles solares, baterías, dispositivos médicos y recubrimientos industriales, ofreciendo una aplicación de material controlada con mínimo desperdicio.",
      "Sus sistemas de flux ultrasónico para soldadura por ola y selectiva eliminan prácticamente el mantenimiento por obstrucciones y reducen el consumo de flux hasta un 80%, mejorando la calidad de las juntas y reduciendo residuos.",
    ],
    products: [
      { name: "SONOFLUX SERVO", description: "Sistema de aplicación de flux por pulverización ultrasónica para soldadura por ola. Cobertura uniforme y bajo consumo." },
      { name: "SONOFLUX EZ", description: "Equipo de flux ultrasónico compacto para integración sencilla en máquinas de soldadura existentes." },
      { name: "SONOFLUX 2000F", description: "Solución de alto volumen con alta velocidad de transferencia y reducción de flux de hasta 80% respecto a sistemas tradicionales." },
    ],
  },
  {
    slug: "hg-laser",
    longDescription: [
      "HGLASER es una empresa de alta tecnología especializada en sistemas de marcado láser para la industria electrónica. Sus equipos permiten marcar PCB con códigos QR, números de serie, trazabilidad y logos con alta velocidad y precisión permanente, sin contacto mecánico.",
      "Los sistemas de marcado láser de HG Laser son utilizados por fabricantes de electrónica que requieren trazabilidad total de sus productos en líneas de producción automatizadas.",
    ],
    products: [
      { name: "PCB Laser Markers", description: "Sistemas de marcado láser para placas de circuito impreso: códigos QR, series, trazabilidad y logos. Alta velocidad, sin contacto." },
    ],
  },
  {
    slug: "umg-technologies",
    longDescription: [
      "UMG Technologies es un proveedor de bienes de capital para el mercado electrónico. Fabrica máquinas de inserción y alimentadores de ajuste a presión de terminales e interconexiones, especializándose en maquinaria de ensamble de componentes odd-form: terminales, pines, ojales, cables a granel, marcado láser y sistemas de inserción de conectores mecánicos continuos.",
      "Sus soluciones sirven a la industria de electrónica de consumo, automotriz, EMS, telecomunicaciones y aeroespacial, cubriendo las etapas de inserción que los equipos pick & place convencionales no pueden realizar.",
    ],
    products: [
      { name: "Máquinas de Inserción", description: "Equipos automáticos para inserción de componentes odd-form, terminales, pines y ojales en PCB." },
      { name: "Alimentadores de Terminales", description: "Sistemas de alimentación y ajuste a presión de terminales e interconexiones para ensamble automático." },
      { name: "Sistemas de Marcado Láser", description: "Integración de marcado láser en líneas de inserción para trazabilidad de componentes." },
      { name: "Inserción de Conectores", description: "Equipos de inserción mecánica continua de conectores para alta cadencia productiva." },
    ],
  },
]

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
