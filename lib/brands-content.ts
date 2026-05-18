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
// Foco: fabricantes OEM de aires acondicionados, heladeras y compresores.
// El cliente es una planta industrial, no un técnico de servicio.

export const aireRefrigeracionContent: BrandContent[] = [
  {
    slug: "galileo-tp",
    longDescription: [
      "Galileo TP Process Equipment SRL fabrica equipos para líneas de producción de aires acondicionados, heladeras y compresores. Sus sistemas cubren las etapas críticas del proceso de manufactura: evacuación del circuito, carga de refrigerante, prueba de hermeticidad y control eléctrico de calidad, todo integrado dentro de la línea de producción.",
      "Sus clientes son plantas industriales OEM que fabrican en serie equipos de climatización y refrigeración, y que necesitan soluciones confiables y repetibles para garantizar la calidad de cada unidad antes del empaque.",
    ],
    products: [
      { name: "Bombas de Vacío Rotativas y Vacuómetros", description: "Para evacuación del circuito de refrigerante durante el ensamble en línea de producción." },
      { name: "Sistemas de Prueba de Performance", description: "Bancos de ensayo para verificación funcional de compresores y unidades terminadas." },
      { name: "Equipos de Prueba de Seguridad Eléctrica", description: "Control eléctrico integrado en líneas de manufactura de electrodomésticos y equipos de refrigeración." },
      { name: "Máquinas de Carga de Gas Refrigerante", description: "Sistemas automáticos de carga y pesaje preciso de refrigerante para producción en serie." },
      { name: "Sistemas de Evacuación para Líneas de Producción", description: "Equipos de vacío integrados en células de ensamble para manufactura masiva de unidades." },
      { name: "Sistemas de Recuperación de Refrigerante", description: "Recuperación y reutilización controlada de refrigerante en la propia línea de producción." },
    ],
  },
  {
    slug: "inficon",
    longDescription: [
      "INFICON GmbH es un fabricante global de instrumentos de detección de fugas para manufactura industrial. En la industria de la climatización y la refrigeración, sus equipos se utilizan directamente en la línea de producción para verificar la hermeticidad de cada unidad ensamblada antes de que salga de la planta.",
      "A diferencia de los instrumentos de campo, los equipos INFICON para manufactura están diseñados para ciclos repetitivos de alta cadencia, con detección automática de fugas integrada al flujo de producción, garantizando el control de calidad al 100% sin impactar la velocidad de la línea.",
    ],
    products: [
      { name: "Detectores de Fugas para Línea de Producción", description: "Equipos integrados en línea para verificación automática de hermeticidad en cada unidad fabricada." },
      { name: "Detectores de Fugas con Helio", description: "Alta sensibilidad para pruebas de estanqueidad con helio en componentes críticos del circuito." },
      { name: "Detectores Multi-Refrigerante", description: "Detección compatible con distintos tipos de refrigerante según el producto que se esté fabricando en la línea." },
      { name: "Analizadores de Refrigerante", description: "Verificación de composición del refrigerante cargado, para control de proceso y trazabilidad de producción." },
    ],
  },
  {
    slug: "jae-hyun-autonics",
    longDescription: [
      "Jae Hyun Autonics fabrica equipos para soldadura fuerte (brazing) automatizada de cañerías de cobre y aluminio en líneas de producción de intercambiadores de calor, evaporadores y condensadores. Su GAS SAVER introduce el fundente líquido directamente en el gas combustible del soplete, eliminando la aplicación manual y estandarizando cada junta soldada a lo largo de toda la corrida de producción.",
      "Sus equipos están pensados para plantas que realizan miles de operaciones de brazing diarias, donde la consistencia del proceso y la tasa de defectos son variables críticas para la rentabilidad de la manufactura.",
    ],
    products: [
      { name: "GAS SAVER", description: "Introduce automáticamente fundente líquido en el gas combustible del soplete. Cobertura uniforme en cada junta, sin intervención manual. Reduce defectos y retrabajo en línea." },
      { name: "Sopletes para Soldadura Automática", description: "Antorchas diseñadas para integración en sistemas automáticos y robotizados de brazing en líneas de alta cadencia." },
      { name: "Sistemas de Ignición Automática", description: "Encendido automático de sopletes para células de producción sin intervención del operador." },
    ],
  },
  {
    slug: "sumake",
    longDescription: [
      "Sumake Industrial Company fabrica herramientas neumáticas industriales certificadas CE para líneas de ensamble. Sus equipos son utilizados en plantas de fabricación de aires acondicionados, heladeras y compresores, donde la productividad, el torque controlado y la durabilidad en turnos continuos son requisitos no negociables.",
      "A diferencia de herramientas de uso general, los modelos Sumake están diseñados para operación intensiva en líneas de producción masiva, con ergonomía optimizada para reducir la fatiga del operador en tareas de ensamble repetitivo.",
    ],
    products: [
      { name: "Destornilladores Neumáticos de Línea", description: "Modelos CPP41, CA35 y CP45 para ensamble en línea. Rango de torque de 3 a 50 kgf-cm para distintas etapas del proceso." },
      { name: "Llaves de Impacto", description: "Para apriete de tornillería estructural en el ensamble de gabinetes, compresores y unidades condensadoras." },
      { name: "Taladros Neumáticos", description: "Perforación y roscado en líneas de producción de estructuras metálicas de equipos de climatización." },
      { name: "Remachadoras Neumáticas", description: "Ensamble de paneles y estructuras de gabinetes de unidades de aire acondicionado en línea." },
      { name: "Pulidoras y Lijadoras", description: "Operaciones de acabado superficial en componentes metálicos dentro de la línea de manufactura." },
      { name: "Pistolas de Pintura", description: "Aplicación de pintura y recubrimientos en líneas de fabricación de equipos de climatización." },
    ],
  },
  {
    slug: "gasflux",
    longDescription: [
      "Gasflux fabrica fundentes y equipos de aplicación para brazing (soldadura fuerte) de cañerías de cobre en plantas industriales. Su sistema introduce automáticamente el fundente líquido Gasflux® en el gas combustible del soplete mediante el equipo Gasfluxer®, eliminando la aplicación manual y estandarizando el proceso en cada puesto de soldadura de la línea.",
      "Compatible con instalaciones manuales y automáticas existentes sin necesidad de boquillas especiales, el sistema Gasflux facilita su adopción en plantas en operación. Cumple la norma AWS/ANSI A5.31 y es utilizado por fabricantes de unidades de climatización y refrigeración en todo el mundo.",
    ],
    products: [
      { name: "Gasflux® Líquido", description: "Fundente líquido que se auto-introduce en el gas combustible del soplete. Cobertura uniforme en cada junta de brazing, sin aplicación manual. Norma AWS/ANSI A5.31." },
      { name: "Gasfluxer®", description: "Equipo dispersor con cámara de mezcla y depósito. Instalación sobre sistemas de gas existentes sin boquillas especiales. Compatible con puestos manuales y automáticos." },
    ],
  },
  {
    slug: "blm",
    longDescription: [
      "BLM Group es un fabricante italiano de maquinaria CNC para el procesamiento de tubos metálicos. Sus dobladoras y conformadoras son equipos centrales en las líneas de producción de fabricantes de intercambiadores de calor, evaporadores, condensadores y serpentines para la industria de la climatización y la refrigeración.",
      "La precisión y repetibilidad de los equipos BLM permiten a los fabricantes OEM producir componentes tubulares de geometría compleja con alta cadencia y mínimo desperdicio de material, siendo un eslabón crítico en la manufactura en serie de unidades de aire acondicionado y heladeras.",
    ],
    products: [
      { name: "Dobladoras de Tubos CNC", description: "Doblado automático de tubos de cobre y aluminio para la fabricación de serpentines, colectores y circuitos de refrigerante." },
      { name: "Conformadoras de Extremos", description: "Abocardado, acanalado, reducción y expansión de extremos de tubo para preparación de uniones en línea de ensamble." },
      { name: "Maquinaria Láser para Tubos", description: "Corte y mecanizado láser de alta velocidad de tubos y perfiles para producción en serie." },
      { name: "Equipos de Corte y Terminado", description: "Sierras y sistemas de corte automatizados para preparación de tubería en líneas de manufactura industrial." },
    ],
  },
  {
    slug: "tech-sonic",
    longDescription: [
      "Tech Sonic fabrica equipos de sellado ultrasónico de tubos de aluminio y cobre para la industria de la refrigeración. Sus selladores son utilizados en las líneas de producción de fabricantes de heladeras y unidades de aire acondicionado para sellar herméticamente el tubo de proceso una vez cargado el refrigerante, reemplazando el prensado mecánico tradicional.",
      "El sellado ultrasónico produce una junta hermética y reproducible en cada ciclo, sin calor ni soldadura, ideal para líneas de alta cadencia donde la velocidad y la confiabilidad del proceso son determinantes para los indicadores de calidad de la planta.",
    ],
    products: [
      { name: "Sellador Ultrasónico — Estándar", description: "Sellado en línea de tubos de aluminio y cobre en la fabricación de heladeras y unidades de refrigeración. Alta cadencia, ciclo corto." },
      { name: "Sellador Ultrasónico — Economy", description: "Versión de menor inversión inicial con las mismas prestaciones técnicas para producción en serie." },
      { name: "Sellador Ultrasónico — Explosion Proof", description: "Certificado para líneas que trabajan con refrigerantes inflamables (A2L, A3). Cumple normas para atmósferas explosivas." },
    ],
  },
]
