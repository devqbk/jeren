export type Locale = "es" | "en" | "pt" | "jap" | "kor"

export const localeLabels: Record<Locale, { short: string; label: string }> = {
  es:  { short: "ES", label: "Español" },
  en:  { short: "EN", label: "English" },
  pt:  { short: "PT", label: "Português" },
  jap: { short: "JP", label: "日本語" },
  kor: { short: "KO", label: "한국어" },
}

const t = {
  es: {
    nav: {
      empresa: "Empresa",
      petroleoGas: "Petróleo y Gas",
      mineria: "Minería",
      agro: "Agro",
      electronica: "Electrónica",
      aireRefrigeracion: "Aire y refrigeración",
      servicios: "Servicios",
      contacto: "Contacto",
      verTodas: "Ver todas →",
      marcasDe: "Marcas de",
    },
    hero: {
      eyebrow: "Más de 40 años de experiencia industrial",
      title: "Maquinaria y soluciones industriales",
      subtitle: "Representamos marcas líderes mundiales para Petróleo y Gas, Minería, Agro, Electrónica y Aire y Refrigeración en Argentina.",
      ctaSolutions: "Conocé nuestras soluciones",
      ctaContact: "Contactanos",
    },
    industrias: {
      eyebrow: "Nuestro foco",
      title: "Industrias que atendemos",
      description: "Más de 40 años de experiencia representando tecnología de primer nivel para los sectores más exigentes de la Argentina.",
      verMas: "Ver más",
      items: {
        petroleoGas:       { name: "Petróleo y Gas",       description: "Equipamiento y soluciones para la industria petrolera y gasífera." },
        mineria:           { name: "Minería",               description: "Tecnología y maquinaria especializada para operaciones mineras." },
        agro:              { name: "Agro",                  description: "Soluciones tecnológicas para la industria agropecuaria." },
        electronica:       { name: "Electrónica",           description: "Maquinaria SMT, inspección y automatización para la industria electrónica." },
        aireRefrigeracion: { name: "Aire y Refrigeración",  description: "Compresores, detección de fugas y herramientas para HVAC/R." },
      },
    },
    marcas: {
      eyebrow: "Portafolio",
      title: "Marcas que representamos",
      description: "Tecnología de vanguardia respaldada por fabricantes líderes a nivel mundial.",
      verMas: "Ver más",
      sitioOficial: "Sitio oficial",
    },
    brands: {
      electronica: {
        title: "Electrónica",
        description: "Representamos las marcas líderes mundiales en equipamiento para la industria electrónica y manufactura SMT.",
        verTodas: "Ver todas",
      },
      aire: {
        title: "Aire y Refrigeración",
        description: "Equipamiento especializado para la industria del aire acondicionado y refrigeración.",
        verTodas: "Ver todas",
      },
    },
    sucursales: {
      eyebrow: "Sucursales",
      title: "Presencia en todo el país",
      verMaps: "Ver en Google Maps →",
    },
    footer: {
      cta: "¿Querés saber más sobre nuestros productos o servicios?",
      ctaBtn: "Asesorate",
      nav: "Navegación",
      verTodas: "Ver todas →",
      rights: "Todos los derechos reservados.",
    },
  },

  en: {
    nav: {
      empresa: "About",
      petroleoGas: "Oil & Gas",
      mineria: "Mining",
      agro: "Agriculture",
      electronica: "Electronics",
      aireRefrigeracion: "Air & Refrigeration",
      servicios: "Services",
      contacto: "Contact",
      verTodas: "See all →",
      marcasDe: "Brands for",
    },
    hero: {
      eyebrow: "Over 40 years of industrial experience",
      title: "Industrial machinery and solutions",
      subtitle: "We represent world-leading brands for Oil & Gas, Mining, Agriculture, Electronics and Air & Refrigeration in Argentina.",
      ctaSolutions: "Explore our solutions",
      ctaContact: "Contact us",
    },
    industrias: {
      eyebrow: "Our focus",
      title: "Industries we serve",
      description: "Over 40 years representing top-tier technology for Argentina's most demanding industrial sectors.",
      verMas: "Learn more",
      items: {
        petroleoGas:       { name: "Oil & Gas",              description: "Equipment and solutions for the oil and gas industry." },
        mineria:           { name: "Mining",                  description: "Specialized technology and machinery for mining operations." },
        agro:              { name: "Agriculture",             description: "Technological solutions for the agricultural industry." },
        electronica:       { name: "Electronics",             description: "SMT machinery, inspection and automation for electronics manufacturing." },
        aireRefrigeracion: { name: "Air & Refrigeration",     description: "Compressors, leak detection and HVAC/R tools." },
      },
    },
    marcas: {
      eyebrow: "Portfolio",
      title: "Brands we represent",
      description: "Cutting-edge technology backed by world-leading manufacturers.",
      verMas: "Learn more",
      sitioOficial: "Official website",
    },
    brands: {
      electronica: {
        title: "Electronics",
        description: "World-leading brands for electronics manufacturing and SMT equipment.",
        verTodas: "See all",
      },
      aire: {
        title: "Air & Refrigeration",
        description: "Specialized equipment for the air conditioning and refrigeration industry.",
        verTodas: "See all",
      },
    },
    sucursales: {
      eyebrow: "Offices",
      title: "Nationwide presence",
      verMaps: "View on Google Maps →",
    },
    footer: {
      cta: "Want to learn more about our products or services?",
      ctaBtn: "Get in touch",
      nav: "Navigation",
      verTodas: "See all →",
      rights: "All rights reserved.",
    },
  },

  pt: {
    nav: {
      empresa: "Empresa",
      petroleoGas: "Petróleo e Gás",
      mineria: "Mineração",
      agro: "Agro",
      electronica: "Eletrônica",
      aireRefrigeracion: "Ar e Refrigeração",
      servicios: "Serviços",
      contacto: "Contato",
      verTodas: "Ver todas →",
      marcasDe: "Marcas de",
    },
    hero: {
      eyebrow: "Mais de 40 anos de experiência industrial",
      title: "Maquinaria e soluções industriais",
      subtitle: "Representamos marcas líderes mundiais para Petróleo e Gás, Mineração, Agro, Eletrônica e Ar e Refrigeração na Argentina.",
      ctaSolutions: "Conheça nossas soluções",
      ctaContact: "Entre em contato",
    },
    industrias: {
      eyebrow: "Nosso foco",
      title: "Indústrias que atendemos",
      description: "Mais de 40 anos representando tecnologia de ponta para os setores mais exigentes da Argentina.",
      verMas: "Ver mais",
      items: {
        petroleoGas:       { name: "Petróleo e Gás",         description: "Equipamentos e soluções para a indústria de petróleo e gás." },
        mineria:           { name: "Mineração",               description: "Tecnologia e maquinaria especializada para operações de mineração." },
        agro:              { name: "Agro",                    description: "Soluções tecnológicas para a indústria agropecuária." },
        electronica:       { name: "Eletrônica",              description: "Maquinaria SMT, inspeção e automação para a indústria eletrônica." },
        aireRefrigeracion: { name: "Ar e Refrigeração",       description: "Compressores, detecção de vazamentos e ferramentas para HVAC/R." },
      },
    },
    marcas: {
      eyebrow: "Portfólio",
      title: "Marcas que representamos",
      description: "Tecnologia de ponta respaldada por fabricantes líderes mundiais.",
      verMas: "Ver mais",
      sitioOficial: "Site oficial",
    },
    brands: {
      electronica: {
        title: "Eletrônica",
        description: "Marcas líderes mundiais em equipamentos para a indústria eletrônica e manufatura SMT.",
        verTodas: "Ver todas",
      },
      aire: {
        title: "Ar e Refrigeração",
        description: "Equipamentos especializados para a indústria de ar condicionado e refrigeração.",
        verTodas: "Ver todas",
      },
    },
    sucursales: {
      eyebrow: "Filiais",
      title: "Presença em todo o país",
      verMaps: "Ver no Google Maps →",
    },
    footer: {
      cta: "Quer saber mais sobre nossos produtos ou serviços?",
      ctaBtn: "Fale conosco",
      nav: "Navegação",
      verTodas: "Ver todas →",
      rights: "Todos os direitos reservados.",
    },
  },

  jap: {
    nav: {
      empresa: "会社概要",
      petroleoGas: "石油・ガス",
      mineria: "鉱業",
      agro: "農業",
      electronica: "電子機器",
      aireRefrigeracion: "空調・冷凍",
      servicios: "サービス",
      contacto: "お問い合わせ",
      verTodas: "すべて見る →",
      marcasDe: "ブランド：",
    },
    hero: {
      eyebrow: "40年以上の産業経験",
      title: "産業機械とソリューション",
      subtitle: "石油・ガス、鉱業、農業、電子機器、空調・冷凍分野において、世界トップブランドをアルゼンチンで代表します。",
      ctaSolutions: "ソリューションを見る",
      ctaContact: "お問い合わせ",
    },
    industrias: {
      eyebrow: "事業領域",
      title: "対応産業",
      description: "40年以上にわたり、アルゼンチンの最も要求の高い産業分野に最高水準の技術を提供してきました。",
      verMas: "詳細を見る",
      items: {
        petroleoGas:       { name: "石油・ガス",     description: "石油・ガス産業向けの機器とソリューション。" },
        mineria:           { name: "鉱業",           description: "鉱業向け専門技術・機械。" },
        agro:              { name: "農業",           description: "農業産業向けの技術ソリューション。" },
        electronica:       { name: "電子機器",       description: "電子機器製造向けSMT機械、検査、自動化。" },
        aireRefrigeracion: { name: "空調・冷凍",     description: "HVAC/R向けコンプレッサー、漏れ検知、工具。" },
      },
    },
    marcas: {
      eyebrow: "ポートフォリオ",
      title: "取り扱いブランド",
      description: "世界トップメーカーが支える最先端技術。",
      verMas: "詳細を見る",
      sitioOficial: "公式サイト",
    },
    brands: {
      electronica: {
        title: "電子機器",
        description: "電子機器製造とSMT設備における世界トップブランド。",
        verTodas: "すべて見る",
      },
      aire: {
        title: "空調・冷凍",
        description: "空調・冷凍産業向け専門設備。",
        verTodas: "すべて見る",
      },
    },
    sucursales: {
      eyebrow: "拠点",
      title: "全国ネットワーク",
      verMaps: "Google マップで見る →",
    },
    footer: {
      cta: "製品・サービスについて詳しく知りたいですか？",
      ctaBtn: "お問い合わせ",
      nav: "ナビゲーション",
      verTodas: "すべて見る →",
      rights: "全著作権所有。",
    },
  },

  kor: {
    nav: {
      empresa: "회사 소개",
      petroleoGas: "석유 및 가스",
      mineria: "광업",
      agro: "농업",
      electronica: "전자",
      aireRefrigeracion: "공조 및 냉동",
      servicios: "서비스",
      contacto: "문의",
      verTodas: "전체 보기 →",
      marcasDe: "브랜드:",
    },
    hero: {
      eyebrow: "40년 이상의 산업 경험",
      title: "산업용 기계 및 솔루션",
      subtitle: "석유·가스, 광업, 농업, 전자, 공조·냉동 분야에서 세계 최고 브랜드를 아르헨티나에서 대표합니다.",
      ctaSolutions: "솔루션 보기",
      ctaContact: "문의하기",
    },
    industrias: {
      eyebrow: "우리의 초점",
      title: "서비스 산업",
      description: "40년 이상 아르헨티나의 가장 까다로운 산업 분야에 최고 수준의 기술을 제공해 왔습니다.",
      verMas: "자세히 보기",
      items: {
        petroleoGas:       { name: "석유 및 가스",    description: "석유 및 가스 산업을 위한 장비 및 솔루션." },
        mineria:           { name: "광업",            description: "광업 운영을 위한 전문 기술 및 기계." },
        agro:              { name: "농업",            description: "농업 산업을 위한 기술 솔루션." },
        electronica:       { name: "전자",            description: "전자 제조를 위한 SMT 기계, 검사 및 자동화." },
        aireRefrigeracion: { name: "공조 및 냉동",    description: "HVAC/R용 압축기, 누설 감지 및 도구." },
      },
    },
    marcas: {
      eyebrow: "포트폴리오",
      title: "대표 브랜드",
      description: "세계 최고 제조업체가 지원하는 최첨단 기술.",
      verMas: "자세히 보기",
      sitioOficial: "공식 웹사이트",
    },
    brands: {
      electronica: {
        title: "전자",
        description: "전자 제조 및 SMT 장비 분야의 세계 최고 브랜드.",
        verTodas: "전체 보기",
      },
      aire: {
        title: "공조 및 냉동",
        description: "공조 및 냉동 산업을 위한 전문 장비.",
        verTodas: "전체 보기",
      },
    },
    sucursales: {
      eyebrow: "사무소",
      title: "전국 네트워크",
      verMaps: "Google 지도에서 보기 →",
    },
    footer: {
      cta: "제품 또는 서비스에 대해 더 알고 싶으신가요?",
      ctaBtn: "문의하기",
      nav: "탐색",
      verTodas: "전체 보기 →",
      rights: "모든 권리 보유.",
    },
  },
} as const

export type Translations = typeof t.es
export const translations = t
