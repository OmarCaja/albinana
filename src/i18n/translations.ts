export const languages = {
  es: { label: "Español", flag: "🇪🇸" },
  en: { label: "English", flag: "🇬🇧" },
};

export const defaultLang = "es";

export const ui = {
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.offers": "Ofertas",
    "nav.contact": "Contacto",
    "nav.services": "Servicios",
    "nav.brands": "Nuestras Marcas",
    "nav.blogs": "Blogs",

    // Hero
    "hero.title": "Farmacia Ortopedia Albiñana\nTu farmacia en Bétera.",
    "hero.subtitle":
      "Atención personalizada, consejo experto y los mejores productos para cuidar de ti todos los días.",
    "hero.cta.services": "Nuestros servicios →",
    "hero.cta.brands": "Nuestras marcas →",
    "hero.cta.offers": "Nuestras ofertas →",
    "hero.cta.blogs": "Nuestros blogs →",

    // Fidelidad
    "fidelity.title": "Tarjeta de Fidelización",
    "fidelity.description":
      "Por ser cliente de la farmacia y tener cuenta, acumula un 5%* del importe de tus compras en parafarmacia (excepto alimentación infantil) y descuéntalo en tus próximas compras de parafarmacia.",
    "fidelity.disclaimer": "* No aplicable a medicamentos.",

    // Horario
    "hours.title": "Horario.",
    "hours.subtitle": "Abiertos todos los días para ofrecerte el mejor servicio.",
    "hours.mondaySaturday": "Lunes a sábado",
    "hours.sundays": "Domingos",
    "hours.holidays": "Festivos",
    "hours.closed": "Cerrado",

    // About
    "about.title": "Sobre nosotros",
    "about.p1":
      "En <strong>Farmacia Ortopedia Albiñana</strong>, combinamos la tradición farmacéutica con la innovación para ofrecerte el mejor servicio. Situados en el corazón de Bétera, llevamos años cuidando de la salud de nuestros vecinos con un trato cercano y profesional.",
    "about.p2":
      "Nuestro equipo de farmacéuticos está siempre dispuesto a asesorarte, ya sea en medicamentos, dermocosmética o complementos nutricionales. Tu bienestar es nuestra razón de ser.",

    // Contact
    "contact.title": "Contacto.",
    "contact.subtitle": "Estamos aquí para cuidar de ti.",
    "contact.mapsBtn": "Ver en Google Maps ↗",
    "contact.callLabel": "Llámanos",
    "contact.waLabel": "WhatsApp",
    "contact.waVal": "Chat directo",
    "contact.igLabel": "Instagram",
    "contact.igVal": "Síguenos",

    // Footer
    "footer.tagline": "Cuidando de ti cada día.",
    "footer.rights": "Todos los derechos reservados.",

    // Services page
    "services.title": "Nuestros Servicios",
    "services.subtitle":
      "Ofrecemos una amplia gama de servicios farmacéuticos especializados para cuidar de tu salud y bienestar",
    "services.meta.title": "Servicios Farmacia Ortopedia Albiñana | Cuidamos de tu salud",
    "services.meta.description":
      "Desde seguimiento farmacoterapéutico hasta Ortopedia. Descubre todos los servicios que ofrecemos en Bétera.",
    "services.back": "← Volver a servicios",
    "services.viewDetail": "Ver servicio completo →",
    "services.viewDetails": "Ver detalles",

    // Brands page
    "brands.title": "Nuestras Marcas",
    "brands.subtitle": "Conoce las marcas de productos que ofrecemos en Farmacia Albiñana",
    "brands.meta.title": "Nuestras Marcas | Farmacia Ortopedia Albiñana",
    "brands.meta.description":
      "Trabajamos con las mejores marcas de parafarmacia, cosmética y Ortopedia para garantizarte los mejores resultados.",

    // Offers page
    "offers.title": "Ofertas y Promociones",
    "offers.subtitle":
      "Aprovecha nuestros descuentos exclusivos por tiempo limitado en una amplia selección de productos.",
    "offers.note": "Consulta nuestras condiciones especiales para cada promoción.",
    "offers.meta.title": "Ofertas y Promociones | Farmacia Ortopedia Albiñana",
    "offers.meta.description":
      "Descubre nuestras ofertas y promociones exclusivas en parafarmacia, cosmética y salud. Ahorra en tus marcas favoritas.",
    "offers.locale": "es-ES",

    // Blog page
    "blog.title": "Blog de salud",
    "blog.subtitle": "Consejos, noticias y novedades para tu bienestar.",
    "blog.meta.title": "Blog de Salud y Bienestar | Farmacia Ortopedia Albiñana",
    "blog.meta.description":
      "Consejos expertos sobre complementos nutricionales, dermocosmética, ortopedia y salud general. Tu fuente de información en Bétera.",
    "blog.back": "← Volver a los blogs",
    "blog.readMore": "Leer más →",
    "blog.locale": "es-ES",


    // Layout meta defaults
    "layout.defaultDescription":
      "Farmacia Ortopedia Albiñana - Tu farmacia de confianza en Bétera.",
    "layout.appTitle": "Farmacia Albiñana",

    // Home page meta
    "home.meta.title":
      "Farmacia Ortopedia Albiñana | Farmacia en Bétera 12h",
    "home.meta.description":
      "Farmacia Ortopedia Albiñana en Bétera. Atención personalizada, ortopedia, complementos nutricionales y cosmética. Abiertos de lunes a sábado de 9:00 a 21:00.",

    // Offer descriptions (generated text)
    "offer.take3pay2": "Llévate 3 productos y paga solo 2.",
    "offer.take3pay2in": (product: string) =>
      `Llévate 3 productos y paga solo 2 en ${product}.`,
    "offer.take3pay2wipes": "Llévate 3 productos y paga solo 2 en toallitas.",
    "offer.2ndUnit": (pct: string) => `${pct}% en la segunda unidad.`,
    "offer.2ndUnitAllYear": "Todo el año",
    "offer.directDiscount": (d: string) => `${d} de descuento directo.`,
    "offer.percentOverAmount": (pct: string, amount: string) => `${pct} de descuento en compras superiores a ${amount}.`,
    "offer.10in2units": "10€ de descuento en la compra de 2 unidades.",
    "offer.10in2unitsApril": "10€ de descuento en 2 unidades.",
    "offer.10in2unitsGeneric": "10€ de descuento al llevar 2 unidades.",
    "offer.1u3e2u8e": "3€ en 1 unidad o 8€ en 2 unidades.",
    "offer.1u3e2u8eOr3x2": "3€ en la 1ª unidad, 8€ en la 2ª unidad o 3x2. No acumulables.",
    "offer.1u15pct2u40pct": "15% en la 1ª unidad o 40% en la 2ª unidad. No acumulables.",
    "offer.allProducts": "(todo)",
    "offer.allYear": "Todo el año 2026",

    // Language selector
    "lang.switch": "Cambiar idioma",
  },

  en: {
    // Nav
    "nav.home": "Home",
    "nav.offers": "Offers",
    "nav.contact": "Contact",
    "nav.services": "Services",
    "nav.brands": "Our Brands",
    "nav.blogs": "Blogs",

    // Hero
    "hero.title": "Farmacia Ortopedia Albiñana\nYour pharmacy in Bétera.",
    "hero.subtitle":
      "Personalised care, expert advice and the best products to look after you every day.",
    "hero.cta.services": "Our services →",
    "hero.cta.brands": "Our brands →",
    "hero.cta.offers": "Our offers →",
    "hero.cta.blogs": "Our blogs →",

    // Fidelidad
    "fidelity.title": "Loyalty Card",
    "fidelity.description":
      "As a pharmacy customer with an account, earn 5%* of your parapharmacy purchases (excluding baby food) and redeem it on future parapharmacy purchases.",
    "fidelity.disclaimer": "* Not applicable to prescription medicines.",

    // Horario
    "hours.title": "Opening Hours.",
    "hours.subtitle": "Open every day to offer you the best service.",
    "hours.mondaySaturday": "Monday to Saturday",
    "hours.sundays": "Sundays",
    "hours.holidays": "Public Holidays",
    "hours.closed": "Closed",

    // About
    "about.title": "About us",
    "about.p1":
      "At <strong>Farmacia Ortopedia Albiñana</strong>, we combine pharmaceutical tradition with innovation to offer you the best service. Located in the heart of Bétera, we have been caring for our neighbours' health for years with a close, professional approach.",
    "about.p2":
      "Our team of pharmacists is always ready to advise you, whether on medicines, dermo-cosmetics or nutritional supplements. Your wellbeing is our reason for being.",

    // Contact
    "contact.title": "Contact.",
    "contact.subtitle": "We are here to take care of you.",
    "contact.mapsBtn": "View on Google Maps ↗",
    "contact.callLabel": "Call us",
    "contact.waLabel": "WhatsApp",
    "contact.waVal": "Direct chat",
    "contact.igLabel": "Instagram",
    "contact.igVal": "Follow us",

    // Footer
    "footer.tagline": "Taking care of you every day.",
    "footer.rights": "All rights reserved.",

    // Services page
    "services.title": "Our Services",
    "services.subtitle":
      "We offer a wide range of specialist pharmaceutical services to care for your health and wellbeing",
    "services.meta.title": "Services | Farmacia Ortopedia Albiñana",
    "services.meta.description":
      "From pharmacotherapeutic monitoring to orthopaedics. Discover all the services we offer in Bétera.",
    "services.back": "← Back to services",
    "services.viewDetail": "View full service →",
    "services.viewDetails": "View details",

    // Brands page
    "brands.title": "Our Brands",
    "brands.subtitle": "Discover the product brands we offer at Farmacia Albiñana",
    "brands.meta.title": "Our Brands | Farmacia Ortopedia Albiñana",
    "brands.meta.description":
      "We work with the best parapharmacy, cosmetics and orthopaedics brands to guarantee you the best results.",

    // Offers page
    "offers.title": "Offers & Promotions",
    "offers.subtitle":
      "Take advantage of our exclusive limited-time discounts on a wide selection of products.",
    "offers.note": "Check our special conditions for each promotion.",
    "offers.meta.title": "Offers & Promotions | Farmacia Ortopedia Albiñana",
    "offers.meta.description":
      "Discover our exclusive offers and promotions on parapharmacy, cosmetics and health products. Save on your favourite brands.",
    "offers.locale": "en-GB",

    // Blog page
    "blog.title": "Health Blog",
    "blog.subtitle": "Tips, news and updates for your wellbeing.",
    "blog.meta.title": "Health & Wellness Blog | Farmacia Ortopedia Albiñana",
    "blog.meta.description":
      "Expert advice on nutritional supplements, dermo-cosmetics, orthopaedics and general health. Your information source in Bétera.",
    "blog.back": "← Back to blog",
    "blog.readMore": "Read more →",
    "blog.locale": "en-GB",

    // Layout meta defaults
    "layout.defaultDescription":
      "Farmacia Ortopedia Albiñana - Your trusted pharmacy in Bétera.",
    "layout.appTitle": "Farmacia Albiñana",

    // Home page meta
    "home.meta.title":
      "Farmacia Ortopedia Albiñana | Pharmacy in Bétera 12h",
    "home.meta.description":
      "Farmacia Ortopedia Albiñana in Bétera. Personalised care, orthopaedics, nutritional supplements and cosmetics. Open Monday to Saturday from 9:00 to 21:00.",

    // Offer descriptions (generated text)
    "offer.take3pay2": "Buy 3 and pay for 2.",
    "offer.take3pay2in": (product: string) =>
      `Buy 3 and pay for 2 on ${product}.`,
    "offer.take3pay2wipes": "Buy 3 and pay for 2 on wipes.",
    "offer.2ndUnit": (pct: string) => `${pct}% off on the second unit.`,
    "offer.2ndUnitAllYear": "All year round",
    "offer.directDiscount": (d: string) => `${d} direct discount.`,
    "offer.percentOverAmount": (pct: string, amount: string) => `${pct} discount on purchases over ${amount}.`,
    "offer.10in2units": "€10 off when buying 2 units.",
    "offer.10in2unitsApril": "€10 off on 2 units.",
    "offer.10in2unitsGeneric": "€10 off when taking 2 units.",
    "offer.1u3e2u8e": "€3 on 1 unit or €8 on 2 units.",
    "offer.1u3e2u8eOr3x2": "€3 off 1st unit, €8 off 2nd unit or 3-for-2. Not combinable.",
    "offer.1u15pct2u40pct": "15% off 1st unit or 40% off 2nd unit. Not combinable.",
    "offer.allProducts": "(all)",
    "offer.allYear": "All year 2026",

    // Language selector
    "lang.switch": "Switch language",
  },
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey) {
    return (ui[lang] as any)[key] ?? (ui[defaultLang] as any)[key] ?? key;
  };
}

/** Returns the equivalent URL in the other language */
export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  const pathname = url.pathname;

  if (currentLang === defaultLang && targetLang !== defaultLang) {
    // es → en: prepend /en
    return `/${targetLang}${pathname}`;
  }
  if (currentLang !== defaultLang && targetLang === defaultLang) {
    // en → es: strip /en
    return pathname.replace(`/${currentLang}`, "") || "/";
  }
  return pathname;
}
