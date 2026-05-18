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
      { name: "SMART FAB", description: "Sistema de montaje superficial de alta velocidad para producción masiva.", imageUrl: "/images/brands/fuji/smart-fab.jpg" },
      { name: "NEXT III", description: "Plataforma de montaje modular de última generación con alta flexibilidad.", imageUrl: "/images/brands/fuji/nxt-iii.jpg" },
      { name: "AIMEX IIIc", description: "Montadora de alta flexibilidad y precisión para componentes de gran tamaño.", imageUrl: "/images/brands/fuji/aimex-iii-c.jpg" },
      { name: "AIMEX III", description: "Sistema de montaje versátil para producción mixta de alta y baja velocidad.", imageUrl: "/images/brands/fuji/aimex-iii.jpg" },
    ],
  },
  {
    slug: "koh-young",
    longDescription: [
      "Koh Young Technology es el líder mundial en sistemas de inspección y medición 3D para la industria electrónica. Utiliza su patentada tecnología Shadow-Free Moiré (SFM) para ofrecer datos de medición precisos en inspección de pasta de soldadura (SPI) e inspección óptica automatizada (AOI).",
      "Sus sistemas permiten a los fabricantes de PCB detectar defectos en etapas tempranas del proceso, reduciendo el re-trabajo, el scrap y los costos de calidad. Koh Young es el referente en inspección 3D para la industria electrónica a nivel global.",
    ],
    products: [
      { name: "ZENITH — AOI 3D", description: "Sistema de inspección óptica automatizada en 3D para detección de defectos en placas montadas.", imageUrl: "/images/brands/koh-young/aoi-3d-modelo-zenith.png" },
      { name: "KY 8030-3 — SPI 3D", description: "Sistema de inspección de pasta de soldadura en 3D para control de proceso de serigrafía.", imageUrl: "/images/brands/koh-young/ky-8030-3.png" },
    ],
  },
  {
    slug: "data-io",
    longDescription: [
      "Data I/O es el proveedor líder mundial de sistemas de aprovisionamiento seguro y programación de dispositivos Flash, Microcontroladores y Logic, tanto en equipos manuales como automatizados. Sus soluciones son clave para fabricantes que requieren programación en línea con trazabilidad y seguridad.",
      "Los sistemas PSV de Data I/O se integran directamente en las líneas SMT, permitiendo programar los dispositivos justo antes del montaje para eliminar el manejo manual y reducir el riesgo de errores.",
    ],
    products: [
      { name: "PSV 5000", description: "Sistema automatizado de programación de dispositivos integrado en línea SMT.", imageUrl: "/images/brands/data-io/psv-5000.jpg" },
      { name: "PSV 7000", description: "Plataforma de aprovisionamiento seguro de alta velocidad para producción en serie.", imageUrl: "/images/brands/data-io/psv-7000.jpg" },
    ],
  },
  {
    slug: "nordson-asymtek",
    longDescription: [
      "Nordson ASYMTEK es el líder mundial en sistemas de dispensado de fluidos, inyección de aire y recubrimiento conformal de precisión para la industria electrónica. Sus equipos aplican adhesivos, encapsulantes, selladores y recubrimientos con alta repetibilidad y mínimo desperdicio.",
      "Sus soluciones de conformal coating protegen placas electrónicas de humedad, polvo y agentes químicos, siendo esenciales para aplicaciones industriales, automotrices y de defensa donde la confiabilidad es crítica.",
    ],
    products: [
      { name: "Conformal Coating", description: "Sistemas automáticos de recubrimiento conformal selectivo para protección de PCB en ambientes adversos.", imageUrl: "/images/brands/nordson-asymtek/conformal-coating.jpg" },
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
      { name: "Link Conveyor", description: "Conveyor de transporte de PCB con protección ESD para interconexión de equipos SMT.", imageUrl: "/images/brands/yj-link/link-conveyor.jpg" },
      { name: "Dual Lane Equipment", description: "Módulos de doble carril para producción paralela de alta cadencia.", imageUrl: "/images/brands/yj-link/dual-lane-equipment.png" },
      { name: "Buffer", description: "Sistema de almacenamiento y secuenciado de PCB entre estaciones de proceso.", imageUrl: "/images/brands/yj-link/buffer.jpg" },
      { name: "Shuttle Conveyor", description: "Mecanismo de transferencia lateral de PCB entre líneas de producción.", imageUrl: "/images/brands/yj-link/shuttle-conveyor.jpg" },
      { name: "PCB Cleaner", description: "Equipo de limpieza de placas de circuito impreso integrable en línea.", imageUrl: "/images/brands/yj-link/pcb-cleaner.jpg" },
      { name: "Loading / Unloading", description: "Estaciones automáticas de carga y descarga de PCB al inicio y fin de línea.", imageUrl: "/images/brands/yj-link/loading-unloading.jpg" },
    ],
  },
  {
    slug: "creative-electron",
    longDescription: [
      "Creative Electron fue fundada en 2008 y se especializa en la fabricación y distribución de sistemas de inspección por rayos X de alta performance y diseño personalizado. Sus equipos se utilizan para aseguramiento de calidad y detección de componentes falsificados en la industria electrónica.",
      "La línea TruView de Creative Electron ofrece sistemas de rayos X para inspección de BGA, solder joints, componentes THT y PCB complejas, con interfaces intuitivas y capacidades de imagen de alta resolución.",
    ],
    products: [
      { name: "TruView FUSION", description: "Sistema de inspección por rayos X para análisis de BGA, solder joints y componentes de alta densidad.", imageUrl: "/images/brands/creative-electron/tru-view-fusion.jpg" },
      { name: "TruView PRIME", description: "Equipo de rayos X de alto rendimiento para inspección de PCB y detección de falsificaciones.", imageUrl: "/images/brands/creative-electron/truview-prime.jpg" },
      { name: "TruView CUBE", description: "Sistema compacto de inspección por rayos X para laboratorios de calidad y prototipos.", imageUrl: "/images/brands/creative-electron/truview-cube.jpg" },
      { name: "PCB X-Ray Inspection", description: "Solución especializada en inspección de placas de circuito impreso con rayos X.", imageUrl: "/images/brands/creative-electron/pcb-xray-inspection.jpg" },
    ],
  },
  {
    slug: "kurtz-ersa",
    longDescription: [
      "Kurtz Ersa es el líder mundial en soluciones de soldadura para la industria electrónica, con más de cuatro décadas de experiencia y una posición dominante en sistemas de rework de BGA. Sus equipos modulares cubren todas las etapas de soldadura en ensambles SMT y THT.",
      "Sus sistemas de rework permiten la reparación y modificación de componentes electrónicos en entornos de producción y laboratorio, combinando precisión térmica con facilidad de uso para garantizar resultados reproducibles.",
    ],
    products: [
      { name: "HR 600XL — Rework", description: "Sistema de rework de alta gama para BGA y componentes de gran tamaño con control térmico preciso.", imageUrl: "/images/brands/kurtz-ersa/hr600xl.jpg" },
      { name: "HR 550L — Rework", description: "Equipo de rework versátil para producción y laboratorio con visualización óptica integrada.", imageUrl: "/images/brands/kurtz-ersa/hr-550l.jpg" },
      { name: "i-CON VARIO 4", description: "Estación de soldadura y rework modular con control digital de temperatura.", imageUrl: "/images/brands/kurtz-ersa/icon-vario-4.jpg" },
      { name: "HOTFLOW / POWERFUL ULTRA", description: "Hornos de reflujo de alta performance para soldadura SMT en líneas de producción.", imageUrl: "/images/brands/kurtz-ersa/hotflow-powerful-ultra.jpg" },
      { name: "ECOSELECT / SMARTFLOW", description: "Máquinas de soldadura selectiva para ensambles mixtos SMT/THT.", imageUrl: "/images/brands/kurtz-ersa/ecoselect-smartflow.jpg" },
      { name: "VERSAFLOW 4 XL", description: "Sistema de soldadura por ola de gran formato para producción de alto volumen THT.", imageUrl: "/images/brands/kurtz-ersa/versaflow-4-xl.jpg" },
    ],
  },
  {
    slug: "ecd",
    longDescription: [
      "ECD fabrica instrumentos de perfilado térmico para el seguimiento preciso de las variables de tiempo y temperatura en los procesos de fabricación electrónica. El tiempo y la temperatura son variables críticas en la soldadura de placas de circuito impreso, y sus equipos aseguran que los procesos de reflujo y soldadura por ola sean consistentes y reproducibles.",
      "Los perfiladores térmicos de ECD se utilizan para validar y optimizar los perfiles de temperatura de los hornos de reflujo, garantizando la calidad de las juntas de soldadura y la integridad de los componentes.",
    ],
    products: [
      { name: "V-M.O.L.E.®", description: "Perfilador térmico compacto para monitoreo de temperatura en hornos de reflujo y soldadura por ola.", imageUrl: "/images/brands/ecd/v-m-o-l-e.png" },
      { name: "MEGAM.O.L.E.® 20", description: "Solución avanzada de monitoreo térmico con 20 canales para perfilado de alta precisión.", imageUrl: "/images/brands/ecd/megamole-20.png" },
      { name: "SUPERM.O.L.E.® GOLD 2", description: "Perfilador térmico premium de máxima performance para procesos de soldadura críticos.", imageUrl: "/images/brands/ecd/supermole-gold-2.png" },
    ],
  },
  {
    slug: "evs",
    longDescription: [
      "EVS fabrica máquinas de recuperación de soldadura que permiten recuperar hasta un 65% de estaño puro en peso a partir de la escoria (dross) generada en las máquinas de soldadura por ola. Sus equipos ofrecen una solución económica y ambientalmente responsable para reducir el costo de los insumos de soldadura.",
      "El proceso de recuperación de EVS es simple y seguro, eliminando la necesidad de enviar el dross a terceros para su procesamiento y devolviendo estaño listo para ser reutilizado directamente en línea.",
    ],
    products: [
      { name: "EVS 10K", description: "Máquina de recuperación de soldadura de alta capacidad para líneas de producción de alto volumen.", imageUrl: "/images/brands/evs/evs-10k.jpg" },
      { name: "EVS 8K", description: "Equipo de recuperación de estaño desde escoria para producción de volumen medio.", imageUrl: "/images/brands/evs/evs-8k.jpg" },
      { name: "EVS 1500", description: "Recuperadora de soldadura compacta para líneas de menor volumen o laboratorios.", imageUrl: "/images/brands/evs/evs-1500.jpg" },
    ],
  },
  {
    slug: "sono-tek",
    longDescription: [
      "Sono-Tek Corporation es el líder mundial en sistemas de pulverización ultrasónica para aplicaciones de recubrimiento de películas delgadas. Sus tecnologías se aplican en electrónica, paneles solares, baterías, dispositivos médicos y recubrimientos industriales, ofreciendo una aplicación de material controlada con mínimo desperdicio.",
      "Sus sistemas de flux ultrasónico para soldadura por ola y selectiva eliminan prácticamente el mantenimiento por obstrucciones y reducen el consumo de flux hasta un 80%, mejorando la calidad de las juntas y reduciendo residuos.",
    ],
    products: [
      { name: "SONOFLUX SERVO", description: "Sistema de aplicación de flux por pulverización ultrasónica para soldadura por ola. Cobertura uniforme y bajo consumo.", imageUrl: "/images/brands/sono-tek/sonoflux-servo.jpg" },
      { name: "SONOFLUX EZ", description: "Equipo de flux ultrasónico compacto para integración sencilla en máquinas de soldadura existentes.", imageUrl: "/images/brands/sono-tek/sonoflux-ez.jpg" },
      { name: "SONOFLUX 2000F", description: "Solución de alto volumen con alta velocidad de transferencia y reducción de flux de hasta 80% respecto a sistemas tradicionales.", imageUrl: "/images/brands/sono-tek/sonoflux-2000f.jpg" },
    ],
  },
  {
    slug: "hg-laser",
    longDescription: [
      "HGLASER es una empresa de alta tecnología especializada en sistemas de marcado láser para la industria electrónica. Sus equipos permiten marcar PCB con códigos QR, números de serie, trazabilidad y logos con alta velocidad y precisión permanente, sin contacto mecánico.",
      "Los sistemas de marcado láser de HG Laser son utilizados por fabricantes de electrónica que requieren trazabilidad total de sus productos en líneas de producción automatizadas.",
    ],
    products: [
      { name: "PCB Laser Markers", description: "Sistemas de marcado láser para placas de circuito impreso: códigos QR, series, trazabilidad y logos. Alta velocidad, sin contacto.", imageUrl: "/images/brands/hg-laser/pcb-laser-markers.jpg" },
    ],
  },
  {
    slug: "umg-technologies",
    longDescription: [
      "UMG Technologies es un proveedor de bienes de capital para el mercado electrónico. Fabrica máquinas de inserción y alimentadores de ajuste a presión de terminales e interconexiones, especializándose en maquinaria de ensamble de componentes odd-form: terminales, pines, ojales, cables a granel, marcado láser y sistemas de inserción de conectores mecánicos continuos.",
      "Sus soluciones sirven a la industria de electrónica de consumo, automotriz, EMS, telecomunicaciones y aeroespacial, cubriendo las etapas de inserción que los equipos pick & place convencionales no pueden realizar.",
    ],
    products: [],
  },
]

export interface ProductItem {
  name: string
  description: string
  imageUrl?: string
}

export interface BrandContent {
  slug: string
  longDescription: string[]
  products: ProductItem[]
}

// ─── Aire y Refrigeración ────────────────────────────────────────────────────
// Foco: fabricantes OEM de aires acondicionados, heladeras y compresores.
// El cliente es una planta industrial, no un técnico de servicio.

export const aireRefrigeracionContent: BrandContent[] = [
  {
    slug: "galileo-tp",
    longDescription: [
      "Galileo TP Process Equipment SRL produce equipos para la fabricación de aires acondicionados, heladeras y compresores. Sus sistemas cubren las etapas críticas del proceso de manufactura: evacuación del circuito, carga de refrigerante, prueba de hermeticidad y control eléctrico de calidad, todo integrado dentro de la línea de producción.",
      "Sus clientes son plantas industriales OEM que fabrican en serie equipos de climatización y refrigeración, y que necesitan soluciones confiables y repetibles para garantizar la calidad de cada unidad antes del empaque.",
    ],
    products: [
      {
        name: "Bombas de Vacío Rotativas",
        description: "Para evacuación del circuito de refrigerante durante el ensamble en línea de producción.",
        imageUrl: "/images/brands/galileo-tp/rotary-vacuum-pumps.png",
      },
      {
        name: "Sistemas de Prueba de Performance",
        description: "Bancos de ensayo para verificación funcional de compresores y unidades terminadas.",
        imageUrl: "/images/brands/galileo-tp/performance-test.png",
      },
      {
        name: "Prueba de Seguridad Eléctrica",
        description: "Control eléctrico integrado en líneas de manufactura de electrodomésticos y equipos de refrigeración.",
        imageUrl: "/images/brands/galileo-tp/electrical-safety-test.png",
      },
      {
        name: "Sistemas de Recuperación de Refrigerante",
        description: "Recuperación y reutilización controlada de refrigerante en la propia línea de producción.",
        imageUrl: "/images/brands/galileo-tp/refrigerant-recovery.png",
      },
      {
        name: "Bombas de Transferencia de Refrigerante",
        description: "Transferencia precisa de refrigerante entre sistemas en líneas de producción de alta cadencia.",
        imageUrl: "/images/brands/galileo-tp/refrigerant-transfer.png",
      },
      {
        name: "Fluidos Refrigerantes",
        description: "Gases y fluidos refrigerantes para carga y reposición en líneas industriales.",
        imageUrl: "/images/brands/galileo-tp/refrigerating-fluids.png",
      },
      {
        name: "Sistemas de Evacuación para Línea",
        description: "Equipos de vacío integrados en células de ensamble para manufactura masiva de unidades.",
        imageUrl: "/images/brands/galileo-tp/evacuation-system.png",
      },
      {
        name: "Almacenamiento de Gases y Fluidos",
        description: "Sistemas de almacenamiento y distribución de refrigerantes para plantas de fabricación.",
        imageUrl: "/images/brands/galileo-tp/gas-fluid-storage.png",
      },
    ],
  },
  {
    slug: "inficon",
    longDescription: [
      "INFICON GmbH es un fabricante global de instrumentos de detección de fugas para manufactura industrial. En la industria de la climatización y la refrigeración, sus equipos se utilizan directamente en la línea de producción para verificar la hermeticidad de cada unidad ensamblada antes de que salga de la planta.",
      "A diferencia de los instrumentos de campo, los equipos INFICON para manufactura están diseñados para ciclos repetitivos de alta cadencia, con detección automática de fugas integrada al flujo de producción, garantizando el control de calidad al 100% sin impactar la velocidad de la línea.",
    ],
    products: [
      {
        name: "Detectores de Fugas Portátiles",
        description: "Equipos de mano para verificación de hermeticidad en distintos puntos de la línea de producción.",
        imageUrl: "/images/brands/inficon/handheld-leak-detectors.png",
      },
      {
        name: "Detectores Multi-Gas Sniffer",
        description: "Detección de fugas compatible con distintos tipos de refrigerante según el producto que se esté fabricando.",
        imageUrl: "/images/brands/inficon/multi-gas-sniffer.png",
      },
      {
        name: "Detectores de Refrigerante",
        description: "Equipos integrados en línea para verificación automática de hermeticidad en cada unidad fabricada.",
        imageUrl: "/images/brands/inficon/refrigerant-leak-detectors.png",
      },
      {
        name: "Detectores de Fugas con Helio",
        description: "Alta sensibilidad para pruebas de estanqueidad con helio en componentes críticos del circuito.",
        imageUrl: "/images/brands/inficon/helium-leak-detectors.png",
      },
    ],
  },
  {
    slug: "jae-hyun-autonics",
    longDescription: [
      "Jae Hyun Autonics fabrica equipos para soldadura fuerte (brazing) automatizada de cañerías de cobre y aluminio en líneas de producción de intercambiadores de calor, evaporadores y condensadores. Su GAS SAVER introduce el fundente líquido directamente en el gas combustible del soplete, eliminando la aplicación manual y estandarizando cada junta soldada a lo largo de toda la corrida de producción.",
      "Sus equipos están pensados para plantas que realizan miles de operaciones de brazing diarias, donde la consistencia del proceso y la tasa de defectos son variables críticas para la rentabilidad de la manufactura.",
    ],
    products: [
      {
        name: "GAS SAVER — Sistema de Fundente Automático",
        description: "Introduce automáticamente fundente líquido en el gas combustible del soplete. Cobertura uniforme en cada junta, sin intervención manual. Reduce defectos y retrabajo en línea.",
        imageUrl: "/images/brands/jae-hyun-autonics/gas-saver.png",
      },
    ],
  },
  {
    slug: "sumake",
    longDescription: [
      "Sumake Industrial Company fabrica herramientas neumáticas industriales certificadas CE para líneas de ensamble. Sus equipos son utilizados en plantas de fabricación de aires acondicionados, heladeras y compresores, donde la productividad, el torque controlado y la durabilidad en turnos continuos son requisitos no negociables.",
      "A diferencia de herramientas de uso general, los modelos Sumake están diseñados para operación intensiva en líneas de producción masiva, con ergonomía optimizada para reducir la fatiga del operador en tareas de ensamble repetitivo.",
    ],
    products: [
      {
        name: "Destornillador Neumático CPP41",
        description: "Destornillador de línea de alta durabilidad para ensamble continuo. Torque preciso para distintas etapas del proceso.",
        imageUrl: "/images/brands/sumake/cpp41.jpg",
      },
      {
        name: "Destornillador Neumático CA35",
        description: "Modelo compacto y liviano para operaciones de apriete en posiciones de difícil acceso en líneas de montaje.",
        imageUrl: "/images/brands/sumake/ca35.png",
      },
      {
        name: "Destornillador Neumático CP45",
        description: "Alta potencia para apriete de tornillería estructural en el ensamble de gabinetes y unidades condensadoras.",
        imageUrl: "/images/brands/sumake/cp45.png",
      },
    ],
  },
  {
    slug: "gasflux",
    longDescription: [
      "Gasflux fabrica fundentes y equipos de aplicación para brazing (soldadura fuerte) de cañerías de cobre en plantas industriales. Su sistema introduce automáticamente el fundente líquido Gasflux® en el gas combustible del soplete mediante el equipo Gasfluxer®, eliminando la aplicación manual y estandarizando el proceso en cada puesto de soldadura de la línea.",
      "Compatible con instalaciones manuales y automáticas existentes sin necesidad de boquillas especiales, el sistema Gasflux facilita su adopción en plantas en operación. Cumple la norma AWS/ANSI A5.31 y es utilizado por fabricantes de unidades de climatización y refrigeración en todo el mundo.",
    ],
    products: [
      {
        name: "Gasflux® Líquido",
        description: "Fundente líquido que se auto-introduce en el gas combustible del soplete. Cobertura uniforme en cada junta de brazing, sin aplicación manual. Norma AWS/ANSI A5.31.",
        imageUrl: "/images/brands/gasflux/gasflux-liquid.png",
      },
      {
        name: "Gasfluxer®",
        description: "Equipo dispersor con cámara de mezcla y depósito. Instalación sobre sistemas de gas existentes sin boquillas especiales. Compatible con puestos manuales y automáticos.",
        imageUrl: "/images/brands/gasflux/gasfluxer-equipo.png",
      },
    ],
  },
  {
    slug: "blm",
    longDescription: [
      "BLM Group es un fabricante italiano de maquinaria CNC para el procesamiento de tubos metálicos. Sus dobladoras y conformadoras son equipos centrales en las líneas de producción de fabricantes de intercambiadores de calor, evaporadores, condensadores y serpentines para la industria de la climatización y la refrigeración.",
      "La precisión y repetibilidad de los equipos BLM permiten a los fabricantes OEM producir componentes tubulares de geometría compleja con alta cadencia y mínimo desperdicio de material, siendo un eslabón crítico en la manufactura en serie de unidades de aire acondicionado y heladeras.",
    ],
    products: [
      {
        name: "Dobladoras de Tubos CNC",
        description: "Doblado automático de tubos de cobre y aluminio para la fabricación de serpentines, colectores y circuitos de refrigerante.",
        imageUrl: "/images/brands/blm/dobladoras-cnc.png",
      },
    ],
  },
  {
    slug: "tech-sonic",
    longDescription: [
      "Tech Sonic fabrica equipos de sellado ultrasónico de tubos de aluminio y cobre para la industria de la refrigeración. Sus selladores son utilizados en las líneas de producción de fabricantes de heladeras y unidades de aire acondicionado para sellar herméticamente el tubo de proceso una vez cargado el refrigerante, reemplazando el prensado mecánico tradicional.",
      "El sellado ultrasónico produce una junta hermética y reproducible en cada ciclo, sin calor ni soldadura, ideal para líneas de alta cadencia donde la velocidad y la confiabilidad del proceso son determinantes para los indicadores de calidad de la planta.",
    ],
    products: [
      {
        name: "Sellador Ultrasónico — Estándar",
        description: "Sellado en línea de tubos de aluminio y cobre en la fabricación de heladeras y unidades de refrigeración. Alta cadencia, ciclo corto.",
        imageUrl: "/images/brands/tech-sonic/tube-sealer-standard.jpg",
      },
      {
        name: "Sellador Ultrasónico — Modelo 2",
        description: "Variante de alta productividad para líneas de fabricación con mayor volumen de sellados por turno.",
        imageUrl: "/images/brands/tech-sonic/tube-sealer-alt.jpg",
      },
      {
        name: "Sellador Ultrasónico — Economy",
        description: "Versión de menor inversión inicial con las mismas prestaciones técnicas para producción en serie.",
        imageUrl: "/images/brands/tech-sonic/tube-sealer-economy.jpg",
      },
    ],
  },
]
