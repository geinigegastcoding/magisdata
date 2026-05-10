export const site = {
  name: "MagisData",
  url: "https://magisdata.nl",
  domain: "magisdata.nl",
  tagline: "Strategische digitale infrastructuur",
  description:
    "MagisData bouwt strategische digitale infrastructuur voor autoriteit, zoekzichtbaarheid, AI-vindbaarheid, automatisering en conversie.",
  email: "info@magisdata.nl",
  phone: "+31 6 12345678",
  phoneHref: "tel:+31612345678",
  addressLocality: "Eindhoven",
  addressRegion: "Noord-Brabant",
  addressCountry: "NL",
  founder: "Jordy de Vos",
  social: {
    linkedIn: "https://www.linkedin.com/company/magisdata"
  }
} as const;

export const navigation = [
  { label: "Diensten", href: "/services" },
  { label: "Cases", href: "/case-studies" },
  { label: "Inzichten", href: "/insights" },
  { label: "Over ons", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;

export const serviceNavigation = [
  { label: "SEO-diensten", href: "/seo-services" },
  { label: "GEO-optimalisatie", href: "/geo-optimization" },
  { label: "AEO-optimalisatie", href: "/aeo-optimization" },
  { label: "AI-infrastructuur", href: "/ai-infrastructure" },
  { label: "Webontwikkeling", href: "/web-development" },
  { label: "Strategisch advies", href: "/strategic-consulting" }
] as const;
