export type InternalLink = {
  href: string;
  label: string;
  description: string;
};

const serviceLinks: InternalLink[] = [
  {
    href: "/webontwikkeling",
    label: "Website laten maken",
    description: "Bouw een snelle website die je aanbod duidelijk uitlegt."
  },
  {
    href: "/seo-diensten",
    label: "SEO diensten",
    description: "Verbeter vindbaarheid met sterke pagina's en content."
  },
  {
    href: "/aeo-optimalisatie",
    label: "AEO optimalisatie",
    description: "Beantwoord klantvragen beter voor zoekmachines en AI."
  },
  {
    href: "/geo-optimalisatie",
    label: "GEO optimalisatie",
    description: "Maak je bedrijf beter begrijpbaar voor AI-zoekmachines."
  },
  {
    href: "/ai-automatisering",
    label: "AI en automatisering",
    description: "Verminder handwerk en verbeter leadopvolging."
  },
  {
    href: "/strategisch-advies",
    label: "Strategisch advies",
    description: "Kies de juiste volgorde voor online groei."
  },
  {
    href: "/seo-diensten",
    label: "SEO aanpak",
    description: "Vindbaarheid verbeteren met content, techniek en structuur."
  },
  {
    href: "/ai-vindbaarheid",
    label: "AI vindbaarheid",
    description: "Optimaliseer voor Google, AI Overviews en AI-antwoorden."
  },
  {
    href: "/lokale-seo",
    label: "Lokale SEO",
    description: "Word beter gevonden door klanten in je regio."
  },
  {
    href: "/conversie-optimalisatie",
    label: "Conversie optimalisatie",
    description: "Help bezoekers makkelijker de stap naar een aanvraag zetten."
  }
];

const pricingLink: InternalLink = {
  href: "/diensten",
  label: "Prijzen & Diensten",
  description: "Bekijk startpunten voor websites, SEO, AI en advies."
};

export const relatedLinksByPath: Record<string, InternalLink[]> = {
  "/diensten": serviceLinks,
  "/webontwikkeling": [
    serviceLinks[1],
    pricingLink,
    { href: "/website-onderhoud", label: "Website onderhoud", description: "Houd een bestaande website veilig, actueel en controleerbaar." },
    { href: "/cases/website-design-hoveniersbedrijf", label: "Portfolio: hoveniersbedrijf", description: "Bekijk hoe diensten, projecten en lokale vindbaarheid in dit webdesign zijn uitgewerkt." }
  ],
  "/website-onderhoud": [
    serviceLinks[0],
    serviceLinks[1],
    { href: "/contact", label: "Onderhoud bespreken", description: "Bekijk welke technische en contentchecks logisch zijn." }
  ],
  "/seo-diensten": [
    serviceLinks[6],
    serviceLinks[8],
    pricingLink,
    { href: "/seo-bureau-leiden", label: "SEO bureau Leiden", description: "Lokale vindbaarheid voor servicebedrijven rond Leiden." }
  ],
  "/geo-optimalisatie": [
    serviceLinks[7],
    serviceLinks[1]
  ],
  "/aeo-optimalisatie": [
    serviceLinks[7],
    serviceLinks[1]
  ],
  "/ai-automatisering": [
    serviceLinks[5],
    serviceLinks[0],
    { href: "/contact", label: "Bespreek automatisering", description: "Bekijk welke workflow als eerste slim is." }
  ],
  "/strategisch-advies": [
    serviceLinks[0],
    serviceLinks[6],
    { href: "/cases", label: "Bekijk portfolio", description: "Zie hoe strategie, structuur en gebruikservaring in eerder ontwerpwerk samenkomen." }
  ],
  "/over-ons": [
    { href: "/diensten", label: "Bekijk diensten", description: "Ontdek waar MagisData praktisch bij helpt." },
    { href: "/cases", label: "Bekijk portfolio", description: "Bekijk eerder webdesignwerk per branche en de keuzes erachter." },
    { href: "/contact", label: "Maak kennis", description: "Plan een rustig eerste gesprek." }
  ],
  "/contact": [
    { href: "/diensten", label: "Alle diensten", description: "Bekijk eerst welke hulp past bij je vraag." },
    pricingLink,
    serviceLinks[5]
  ],

  "/cases/website-design-hoveniersbedrijf": [
    serviceLinks[0],
    serviceLinks[8],
    { href: "/website-voor-hoveniers", label: "Website voor hoveniers", description: "Lees welke structuur past bij diensten, projecten en lokale vindbaarheid." }
  ],
  "/cases/website-design-dakbedrijf": [
    serviceLinks[0],
    serviceLinks[8],
    { href: "/conversie-optimalisatie", label: "Conversie optimalisatie", description: "Maak offerte- en spoedroutes duidelijker op je website." }
  ],
  "/cases/website-design-social-growth-platform": [
    serviceLinks[0],
    serviceLinks[3],
    { href: "/ai-vindbaarheid", label: "AI vindbaarheid", description: "Structureer productinformatie voor zoekmachines en AI-antwoorden." }
  ],
  "/cases/website-design-it-consultancy": [
    serviceLinks[0],
    serviceLinks[1],
    serviceLinks[7]
  ],

  "/lokale-seo": [
    { href: "/seo-bureau-leiden", label: "SEO bureau Leiden", description: "Lokale vindbaarheid rond Leiden verbeteren." },
    serviceLinks[6]
  ],
  "/seo-bureau-leiden": [
    serviceLinks[8],
    pricingLink,
    serviceLinks[0]
  ],
  "/ai-vindbaarheid": [
    serviceLinks[7],
    serviceLinks[3],
    pricingLink
  ],
  "/online-marketing-bureau": [
    serviceLinks[1],
    serviceLinks[7],
    serviceLinks[9],
    serviceLinks[5]
  ],
  "/conversie-optimalisatie": [
    { href: "/inzichten/website-meer-aanvragen", label: "Waarom websites weinig aanvragen krijgen", description: "Zie waar conversie vaak stukloopt." },
    serviceLinks[0],
    pricingLink,
    { href: "/cases/website-design-dakbedrijf", label: "Portfolio: dakbedrijf", description: "Zie hoe duidelijke offertestappen zichtbaar in het ontwerp landen." }
  ],

  "/privacybeleid": [
    { href: "/algemene-voorwaarden", label: "Algemene voorwaarden", description: "Lees de praktische samenwerkingsvoorwaarden." },
    { href: "/contact", label: "Privacyvraag stellen", description: "Neem contact op bij vragen over gegevens." },
    { href: "/over-ons", label: "Over MagisData", description: "Leer hoe MagisData werkt." }
  ],
  "/algemene-voorwaarden": [
    { href: "/privacybeleid", label: "Privacybeleid", description: "Lees hoe MagisData met gegevens omgaat." },
    { href: "/contact", label: "Vraag stellen", description: "Neem contact op over samenwerking of voorwaarden." },
    { href: "/diensten", label: "Bekijk diensten", description: "Zie waar MagisData praktisch bij helpt." }
  ],
  "/bedankt": [
    { href: "/diensten", label: "Bekijk diensten", description: "Lees alvast waar MagisData bij helpt." },
    { href: "/", label: "Terug naar home", description: "Ga terug naar de startpagina." }
  ]
};
