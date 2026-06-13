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
    href: "/ai-infrastructuur",
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
    description: "Haal meer aanvragen uit bestaande bezoekers."
  }
];

const pricingLink: InternalLink = {
  href: "/prijzen",
  label: "Prijzen",
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
    { href: "/seo-bureau-leiden", label: "SEO bureau Leiden", description: "Lokale vindbaarheid voor servicebedrijven rond Leiden." },
    { href: "/inzichten/seo-zonder-jargon", label: "SEO zonder jargon", description: "Lees wat ondernemers echt moeten weten over SEO." }
  ],
  "/geo-optimalisatie": [
    serviceLinks[7],
    { href: "/inzichten/ai-vindbaarheid", label: "AI-vindbaarheid", description: "Waarom duidelijke uitleg belangrijker wordt voor AI." },
    serviceLinks[1]
  ],
  "/aeo-optimalisatie": [
    serviceLinks[7],
    { href: "/inzichten/ai-vindbaarheid", label: "AI-vindbaarheid", description: "Maak content makkelijker te begrijpen en citeren." },
    serviceLinks[1]
  ],
  "/ai-infrastructuur": [
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
    serviceLinks[5],
    { href: "/inzichten", label: "Lees inzichten", description: "Praktische uitleg over websites, SEO en AI-vindbaarheid." }
  ],
  "/prijzen": [
    serviceLinks[0],
    serviceLinks[1],
    { href: "/contact", label: "Vraag pakketadvies", description: "Laat meekijken welk startpunt past bij je vraag." }
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
  "/inzichten/website-meer-aanvragen": [
    serviceLinks[0],
    { href: "/cases/website-design-hoveniersbedrijf", label: "Portfolio: hoveniersbedrijf", description: "Zie hoe diensten, projecten en contact logisch samenkomen." },
    { href: "/contact", label: "Vraag websiteplan aan", description: "Krijg richting voor een nieuwe site of verbetering." }
  ],
  "/inzichten/seo-zonder-jargon": [
    serviceLinks[6],
    serviceLinks[8],
    { href: "/cases/website-design-dakbedrijf", label: "Portfolio: dakbedrijf", description: "Voorbeeld van duidelijke dienst- en lokale SEO-structuur." }
  ],
  "/inzichten/ai-vindbaarheid": [
    serviceLinks[7],
    { href: "/ai-vindbaarheid", label: "AI vindbaarheid verbeteren", description: "Maak je bedrijf beter citeerbaar in AI-antwoorden." },
    { href: "/diensten", label: "Bekijk AI-vriendelijke diensten", description: "Zie hoe SEO, AEO en GEO elkaar versterken." }
  ],
  "/lokale-seo": [
    { href: "/seo-bureau-leiden", label: "SEO bureau Leiden", description: "Lokale vindbaarheid rond Leiden verbeteren." },
    { href: "/website-laten-maken-leiden", label: "Website laten maken Leiden", description: "Lokale website met SEO-basis." },
    serviceLinks[6]
  ],
  "/seo-bureau-leiden": [
    serviceLinks[8],
    { href: "/website-laten-maken-leiden", label: "Website laten maken Leiden", description: "Website en SEO-basis voor lokale aanvragen." },
    pricingLink,
    serviceLinks[0]
  ],
  "/website-laten-maken-leiden": [
    { href: "/seo-bureau-leiden", label: "SEO bureau Leiden", description: "Versterk lokale vindbaarheid rond Leiden." },
    serviceLinks[8],
    pricingLink,
    { href: "/webontwikkeling", label: "Webontwikkeling", description: "Combineer websitebouw met een technische SEO-basis." }
  ],
  "/website-laten-maken-den-haag": [
    serviceLinks[8],
    { href: "/webontwikkeling", label: "Webontwikkeling", description: "Bekijk de algemene website-aanpak." },
    { href: "/seo-diensten", label: "SEO diensten", description: "Maak regionale vindbaarheid onderdeel van de structuur." }
  ],
  "/website-laten-maken-rotterdam": [
    serviceLinks[8],
    { href: "/webontwikkeling", label: "Webontwikkeling", description: "Bekijk de algemene website-aanpak." },
    { href: "/seo-diensten", label: "SEO diensten", description: "Maak regionale vindbaarheid onderdeel van de structuur." }
  ],
  "/ai-vindbaarheid": [
    serviceLinks[7],
    serviceLinks[3],
    pricingLink,
    { href: "/inzichten/ai-vindbaarheid", label: "Uitleg over AI-vindbaarheid", description: "Lees waarom duidelijke content belangrijker wordt." }
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
  "/website-voor-loodgieters": [
    { href: "/lokale-seo", label: "Lokale SEO", description: "Word gevonden door klanten in je regio." },
    { href: "/webontwikkeling", label: "Webontwikkeling", description: "Bekijk de algemene website-aanpak." },
    { href: "/conversie-optimalisatie", label: "Conversie optimalisatie", description: "Maak bellen en aanvragen makkelijker." }
  ],
  "/website-voor-elektriciens": [
    { href: "/lokale-seo", label: "Lokale SEO", description: "Versterk regionale vindbaarheid voor spoed en projecten." },
    { href: "/webontwikkeling", label: "Webontwikkeling", description: "Bekijk de algemene website-aanpak." },
    { href: "/seo-diensten", label: "SEO diensten", description: "Leg een vindbare basis rond je diensten." }
  ],
  "/website-voor-kappers": [
    { href: "/lokale-seo", label: "Lokale SEO", description: "Help klanten in de buurt je salon vinden." },
    { href: "/webontwikkeling", label: "Webontwikkeling", description: "Bekijk de algemene website-aanpak." },
    { href: "/conversie-optimalisatie", label: "Conversie optimalisatie", description: "Maak boeken en contact opnemen eenvoudiger." }
  ],
  "/website-voor-hoveniers": [
    { href: "/lokale-seo", label: "Lokale SEO", description: "Word vindbaar op diensten en regio." },
    { href: "/seo-bureau-leiden", label: "SEO bureau Leiden", description: "Verbind hoveniersdiensten met lokale zoekvraag rond Leiden." },
    { href: "/webontwikkeling", label: "Webontwikkeling", description: "Bekijk de algemene website-aanpak." },
    { href: "/cases/website-design-hoveniersbedrijf", label: "Portfolio: hoveniersbedrijf", description: "Bekijk webdesign met projecten, diensten en lokale adviesroute." }
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
    { href: "/inzichten", label: "Lees inzichten", description: "Praktische uitleg over websites, SEO en AI-vindbaarheid." },
    { href: "/", label: "Terug naar home", description: "Ga terug naar de startpagina." }
  ]
};
