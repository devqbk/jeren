// Marcas de Electrónica
export const electronicaBrands = [
  {
    slug: "fuji",
    name: "Fuji",
    logo: "/images/brands/fuji.png",
    description: "Innovador líder en maquinaria SMT y producción electrónica",
    website: "https://www.fuji.co.jp",
  },
  {
    slug: "koh-young",
    name: "Koh Young",
    description: "Sistemas de inspección 3D y medición de alta precisión",
    website: "https://www.kohyoung.com",
  },
  {
    slug: "data-io",
    name: "Data I/O",
    description: "Soluciones de programación de dispositivos electrónicos",
    website: "https://www.dataio.com",
  },
  {
    slug: "nordson-asymtek",
    name: "Nordson Asymtek",
    description: "Sistemas de dispensado y conformal coating",
    website: "https://www.nordson.com",
  },
  {
    slug: "yj-link",
    name: "YJ Link",
    logo: "/images/brands/yj-link.png",
    description: "Sistemas de transporte y automatización SMT",
    website: "https://www.yjlink.com",
  },
  {
    slug: "creative-electron",
    name: "Creative Electron",
    description: "Sistemas de inspección por rayos X",
    website: "https://www.creativeelectron.com",
  },
  {
    slug: "kurtz-ersa",
    name: "Kurtz Ersa",
    logo: "/images/brands/kurtz-ersa.png",
    description: "Equipos de soldadura selectiva y por ola",
    website: "https://www.ersa.de",
  },
  {
    slug: "ecd",
    name: "ECD",
    logo: "/images/brands/ecd.png",
    description: "Sistemas de perfilado térmico para hornos de reflujo",
    website: "https://www.ecd.com",
  },
  {
    slug: "evs",
    name: "EVS",
    logo: "/images/brands/evs.png",
    description: "Equipos de soldadura y estaciones de trabajo",
    website: "https://www.evs-international.com",
  },
  {
    slug: "sono-tek",
    name: "Sono-Tek",
    description: "Sistemas de recubrimiento ultrasónico",
    website: "https://www.sono-tek.com",
  },
  {
    slug: "hg-laser",
    name: "HG Laser",
    description: "Equipos de marcado y corte láser",
    website: "#",
  },
  {
    slug: "umg-technologies",
    name: "UMG Technologies",
    description: "Soluciones de automatización y manejo de materiales",
    website: "#",
  },
]

// Marcas de Aire y Refrigeración
export const aireRefrigeracionBrands = [
  {
    slug: "galileo-tp",
    name: "Galileo TP",
    logo: "/images/brands/galileo-tp.png",
    description: "Compresores y sistemas de refrigeración industrial",
    website: "https://www.galileoar.com",
  },
  {
    slug: "inficon",
    name: "Inficon",
    logo: "/images/brands/inficon.png",
    description: "Detectores de fugas y equipos de medición",
    website: "https://www.inficon.com",
  },
  {
    slug: "jae-hyun-autonics",
    name: "Jae Hyun Autonics",
    logo: "/images/brands/jae-hyun-autonics.png",
    description: "Componentes de automatización y control",
    website: "#",
  },
  {
    slug: "sumake",
    name: "Sumake",
    logo: "/images/brands/sumake.png",
    description: "Herramientas neumáticas profesionales",
    website: "https://www.sumake.com.tw",
  },
  {
    slug: "gasflux",
    name: "Gasflux",
    logo: "/images/brands/gasflux.png",
    description: "Soldadura con gas y equipos de brazing",
    website: "#",
  },
  {
    slug: "blm",
    name: "BLM",
    logo: "/images/brands/blm.png",
    description: "Herramientas y equipamiento para HVAC",
    website: "#",
  },
  {
    slug: "tech-sonic",
    name: "Tech Sonic",
    description: "Limpieza ultrasónica industrial",
    website: "#",
  },
]

// Datos de contacto
export const contactInfo = {
  phone: "(+5411) 4788-0566",
  email: "info@jeren.com",
  address: {
    street: "Av. Juramento 2089, 4º Piso Oficina 405",
    city: "C.A.B.A.",
    country: "Argentina",
    postalCode: "C1428DNG",
  },
}

// Sucursales
export const sucursales = [
  {
    name: "C.A.B.A.",
    company: "Jeren SRL",
    address: "Av. Juramento 2089 Piso 4°",
    postalCode: "C1428DNG",
    province: "Buenos Aires",
  },
  {
    name: "Ushuaia",
    company: "Tecnomaq SRL",
    address: "Paseo de la Plaza 2065",
    postalCode: "CP 9410",
    province: "Tierra del Fuego",
  },
  {
    name: "Río Grande",
    company: "Tecnomaq SRL",
    address: "Padre Forgacs 1407",
    postalCode: "CP 9420",
    province: "Tierra del Fuego",
  },
]

// Servicios
export const servicios = [
  {
    title: "Soporte 24x7",
    description:
      "Asistencia técnica las 24 horas, los 7 días de la semana en Buenos Aires, Río Grande y Ushuaia.",
    icon: "clock",
  },
  {
    title: "Stock de Insumos",
    description:
      "Contamos con stock de insumos y partes de reposición para respuesta inmediata.",
    icon: "package",
  },
  {
    title: "Respaldo OEM",
    description:
      "Trabajamos con apoyo directo de las OEM para soporte técnico especializado.",
    icon: "shield",
  },
  {
    title: "Cobertura Nacional",
    description:
      "Oficinas en Ciudad de Buenos Aires y sucursales en Tierra del Fuego.",
    icon: "map",
  },
]

// Navegación principal
export const navigation = {
  main: [
    { name: "Empresa", href: "/empresa" },
    {
      name: "Electrónica",
      href: "/electronica",
      hasDropdown: true,
      brands: electronicaBrands,
    },
    {
      name: "Aire y refrigeración",
      href: "/aire-acondicionado",
      hasDropdown: true,
      brands: aireRefrigeracionBrands,
    },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
  ],
}
