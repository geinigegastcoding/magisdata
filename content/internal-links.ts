export type InternalLink = {
  href: string;
  label: string;
  description: string;
};

const serviceLinks: InternalLink[] = [
  {
    href: "/web-development",
    label: "Website laten maken",
    description: "Bouw een snelle website die je aanbod duidelijk uitlegt."
  },
  {
    href: "/seo-services",
    label: "SEO diensten",
    description: "Verbeter vindbaarheid met sterke pagina's en content."
  },
  {
    href: "/aeo-optimization",
    label: "AEO optimalisatie",
    description: "Beantwoord klantvragen beter voor zoekmachines en AI."
  },
  {
    href: "/geo-optimization",
    label: "GEO optimalisatie",
    description: "Maak je bedrijf beter begrijpbaar voor AI-zoekmachines."
  },
  {
    href: "/ai-infrastructure",
    label: "AI en automatisering",
    description: "Verminder handwerk en verbeter leadopvolging."
  },
  {
    href: "/strategic-consulting",
    label: "Strategisch advies",
    description: "Kies de juiste volgorde voor online groei."
  },
  {
    href: "/seo-bureau",
    label: "SEO bureau",
    description: "Vindbaarheid verbeteren met content, techniek en structuur."
  },
  {
    href: "/ai-seo-bureau",
    label: "AI SEO bureau",
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

export const relatedLinksByPath: Record<string, InternalLink[]> = {
  "/services": serviceLinks,
  "/web-development": [
    serviceLinks[1],
    { href: "/seo-website-laten-maken", label: "SEO website laten maken", description: "Combineer websitebouw met sterke vindbaarheid vanaf de start." },
    { href: "/case-studies/lokale-dienstverlener", label: "Case lokale dienstverlener", description: "Zie hoe duidelijkere pagina's meer aanvragen opleverden." }
  ],
  "/seo-services": [
    serviceLinks[6],
    serviceLinks[8],
    { href: "/insights/seo-zonder-jargon", label: "SEO zonder jargon", description: "Lees wat ondernemers echt moeten weten over SEO." }
  ],
  "/geo-optimization": [
    serviceLinks[7],
    { href: "/insights/ai-vindbaarheid", label: "AI-vindbaarheid", description: "Waarom duidelijke uitleg belangrijker wordt voor AI." },
    serviceLinks[1]
  ],
  "/aeo-optimization": [
    serviceLinks[7],
    { href: "/insights/ai-vindbaarheid", label: "AI-vindbaarheid", description: "Maak content makkelijker te begrijpen en citeren." },
    serviceLinks[1]
  ],
  "/ai-infrastructure": [
    serviceLinks[5],
    serviceLinks[0],
    { href: "/contact", label: "Bespreek automatisering", description: "Bekijk welke workflow als eerste slim is." }
  ],
  "/strategic-consulting": [
    serviceLinks[0],
    serviceLinks[6],
    { href: "/case-studies", label: "Bekijk cases", description: "Zie welke verbeteringen ondernemers herkennen." }
  ],
  "/about": [
    { href: "/services", label: "Bekijk diensten", description: "Ontdek waar MagisData praktisch bij helpt." },
    { href: "/case-studies", label: "Bekijk cases", description: "Lees voorbeelden van duidelijkere websites en groei." },
    { href: "/contact", label: "Maak kennis", description: "Plan een rustig eerste gesprek." }
  ],
  "/contact": [
    { href: "/services", label: "Alle diensten", description: "Bekijk eerst welke hulp past bij je vraag." },
    serviceLinks[5],
    { href: "/insights", label: "Lees inzichten", description: "Praktische uitleg over websites, SEO en AI-vindbaarheid." }
  ],
  "/case-studies/lokale-dienstverlener": [
    serviceLinks[0],
    serviceLinks[1],
    { href: "/insights/website-meer-aanvragen", label: "Waarom websites weinig aanvragen krijgen", description: "Lees hoe je meer vertrouwen en actie opbouwt." }
  ],
  "/case-studies/adviesbureau": [
    serviceLinks[5],
    serviceLinks[0],
    { href: "/about", label: "Over MagisData", description: "Leer hoe wij digitale groei begrijpelijk maken." }
  ],
  "/case-studies/groeiende-webshop": [
    serviceLinks[1],
    serviceLinks[3],
    { href: "/insights/seo-zonder-jargon", label: "SEO zonder jargon", description: "Begrijp de basis van sterke organische groei." }
  ],
  "/insights/website-meer-aanvragen": [
    serviceLinks[0],
    { href: "/case-studies/lokale-dienstverlener", label: "Case lokale dienstverlener", description: "Voorbeeld van duidelijkere website en meer aanvragen." },
    { href: "/contact", label: "Vraag groeiscan aan", description: "Laat je huidige website praktisch bekijken." }
  ],
  "/insights/seo-zonder-jargon": [
    serviceLinks[6],
    serviceLinks[8],
    { href: "/case-studies/groeiende-webshop", label: "Case groeiende webshop", description: "Voorbeeld van betere SEO-structuur." }
  ],
  "/insights/ai-vindbaarheid": [
    serviceLinks[7],
    { href: "/ai-vindbaarheid", label: "AI vindbaarheid verbeteren", description: "Maak je bedrijf beter citeerbaar in AI-antwoorden." },
    { href: "/services", label: "Bekijk AI-vriendelijke diensten", description: "Zie hoe SEO, AEO en GEO elkaar versterken." }
  ],
  "/seo-bureau": [
    serviceLinks[1],
    serviceLinks[8],
    { href: "/seo-bureau-leiden", label: "SEO bureau Leiden", description: "Lokale SEO voor Leiden en omgeving." }
  ],
  "/lokale-seo": [
    { href: "/seo-bureau-leiden", label: "SEO bureau Leiden", description: "Lokale vindbaarheid rond Leiden verbeteren." },
    { href: "/website-laten-maken-leiden", label: "Website laten maken Leiden", description: "Lokale website met SEO-basis." },
    serviceLinks[6]
  ],
  "/seo-bureau-leiden": [
    serviceLinks[8],
    { href: "/website-laten-maken-leiden", label: "Website laten maken Leiden", description: "Website en SEO-basis voor lokale aanvragen." },
    serviceLinks[0]
  ],
  "/ai-seo-bureau": [
    { href: "/ai-vindbaarheid", label: "AI vindbaarheid", description: "Verbeter zichtbaarheid in ChatGPT, Perplexity en Google." },
    serviceLinks[3],
    serviceLinks[2]
  ],
  "/ai-vindbaarheid": [
    serviceLinks[7],
    serviceLinks[3],
    { href: "/insights/ai-vindbaarheid", label: "Uitleg over AI-vindbaarheid", description: "Lees waarom duidelijke content belangrijker wordt." }
  ],
  "/online-marketing-bureau": [
    serviceLinks[6],
    serviceLinks[9],
    serviceLinks[0]
  ],
  "/conversie-optimalisatie": [
    { href: "/insights/website-meer-aanvragen", label: "Waarom websites weinig aanvragen krijgen", description: "Zie waar conversie vaak stukloopt." },
    serviceLinks[0],
    { href: "/case-studies/lokale-dienstverlener", label: "Case lokale dienstverlener", description: "Voorbeeld van meer aanvragen via mobiel." }
  ],
  "/website-laten-maken-amsterdam": [
    { href: "/website-laten-maken", label: "Website laten maken", description: "Algemene uitleg over onze website-aanpak." },
    { href: "/seo-website-laten-maken", label: "SEO website laten maken", description: "Website met vindbaarheid vanaf de start." },
    serviceLinks[6]
  ]
};
