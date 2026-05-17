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
  "/diensten": serviceLinks,
  "/webontwikkeling": [
    serviceLinks[1],
    { href: "/seo-website-laten-maken", label: "SEO website laten maken", description: "Combineer websitebouw met sterke vindbaarheid vanaf de start." },
    { href: "/cases/lokale-dienstverlener", label: "Case lokale dienstverlener", description: "Zie hoe duidelijkere pagina's meer aanvragen opleverden." }
  ],
  "/website-laten-maken": [
    serviceLinks[0],
    { href: "/seo-website-laten-maken", label: "SEO website laten maken", description: "Start met een website die ook vindbaar is." },
    { href: "/inzichten/website-meer-aanvragen", label: "Meer aanvragen uit je website", description: "Lees waarom mooie websites soms weinig opleveren." }
  ],
  "/website-onderhoud": [
    serviceLinks[0],
    serviceLinks[1],
    { href: "/contact", label: "Onderhoud bespreken", description: "Bekijk welke technische en contentchecks logisch zijn." }
  ],
  "/seo-website-laten-maken": [
    serviceLinks[0],
    serviceLinks[1],
    { href: "/seo-bureau", label: "SEO bureau", description: "Bouw verder aan vindbaarheid na livegang." }
  ],
  "/seo-diensten": [
    serviceLinks[6],
    serviceLinks[8],
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
    { href: "/cases", label: "Bekijk cases", description: "Zie welke verbeteringen ondernemers herkennen." }
  ],
  "/over-ons": [
    { href: "/diensten", label: "Bekijk diensten", description: "Ontdek waar MagisData praktisch bij helpt." },
    { href: "/cases", label: "Bekijk cases", description: "Lees voorbeelden van duidelijkere websites en groei." },
    { href: "/contact", label: "Maak kennis", description: "Plan een rustig eerste gesprek." }
  ],
  "/contact": [
    { href: "/diensten", label: "Alle diensten", description: "Bekijk eerst welke hulp past bij je vraag." },
    serviceLinks[5],
    { href: "/inzichten", label: "Lees inzichten", description: "Praktische uitleg over websites, SEO en AI-vindbaarheid." }
  ],
  "/cases/lokale-dienstverlener": [
    serviceLinks[0],
    serviceLinks[1],
    { href: "/inzichten/website-meer-aanvragen", label: "Waarom websites weinig aanvragen krijgen", description: "Lees hoe je meer vertrouwen en actie opbouwt." }
  ],
  "/cases/adviesbureau": [
    serviceLinks[5],
    serviceLinks[0],
    { href: "/over-ons", label: "Over MagisData", description: "Leer hoe wij digitale groei begrijpelijk maken." }
  ],
  "/cases/groeiende-webshop": [
    serviceLinks[1],
    serviceLinks[3],
    { href: "/inzichten/seo-zonder-jargon", label: "SEO zonder jargon", description: "Begrijp de basis van sterke organische groei." }
  ],
  "/inzichten/website-meer-aanvragen": [
    serviceLinks[0],
    { href: "/cases/lokale-dienstverlener", label: "Case lokale dienstverlener", description: "Voorbeeld van duidelijkere website en meer aanvragen." },
    { href: "/contact", label: "Vraag groeiscan aan", description: "Laat je huidige website praktisch bekijken." }
  ],
  "/inzichten/seo-zonder-jargon": [
    serviceLinks[6],
    serviceLinks[8],
    { href: "/cases/groeiende-webshop", label: "Case groeiende webshop", description: "Voorbeeld van betere SEO-structuur." }
  ],
  "/inzichten/ai-vindbaarheid": [
    serviceLinks[7],
    { href: "/ai-vindbaarheid", label: "AI vindbaarheid verbeteren", description: "Maak je bedrijf beter citeerbaar in AI-antwoorden." },
    { href: "/diensten", label: "Bekijk AI-vriendelijke diensten", description: "Zie hoe SEO, AEO en GEO elkaar versterken." }
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
  "/website-laten-maken-leiden": [
    { href: "/seo-bureau-leiden", label: "SEO bureau Leiden", description: "Versterk lokale vindbaarheid rond Leiden." },
    serviceLinks[8],
    { href: "/seo-website-laten-maken", label: "SEO website laten maken", description: "Combineer websitebouw met zoekmachinebasis." }
  ],
  "/website-laten-maken-den-haag": [
    serviceLinks[8],
    { href: "/website-laten-maken", label: "Website laten maken", description: "Bekijk de algemene website-aanpak." },
    { href: "/seo-website-laten-maken", label: "SEO website laten maken", description: "Maak lokale vindbaarheid onderdeel van de bouw." }
  ],
  "/website-laten-maken-rotterdam": [
    serviceLinks[8],
    { href: "/website-laten-maken", label: "Website laten maken", description: "Bekijk de algemene website-aanpak." },
    { href: "/seo-website-laten-maken", label: "SEO website laten maken", description: "Maak lokale vindbaarheid onderdeel van de bouw." }
  ],
  "/ai-seo-bureau": [
    { href: "/ai-vindbaarheid", label: "AI vindbaarheid", description: "Verbeter zichtbaarheid in ChatGPT, Perplexity en Google." },
    serviceLinks[3],
    serviceLinks[2]
  ],
  "/ai-vindbaarheid": [
    serviceLinks[7],
    serviceLinks[3],
    { href: "/inzichten/ai-vindbaarheid", label: "Uitleg over AI-vindbaarheid", description: "Lees waarom duidelijke content belangrijker wordt." }
  ],
  "/online-marketing-bureau": [
    serviceLinks[6],
    serviceLinks[9],
    serviceLinks[0]
  ],
  "/conversie-optimalisatie": [
    { href: "/inzichten/website-meer-aanvragen", label: "Waarom websites weinig aanvragen krijgen", description: "Zie waar conversie vaak stukloopt." },
    serviceLinks[0],
    { href: "/cases/lokale-dienstverlener", label: "Case lokale dienstverlener", description: "Voorbeeld van meer aanvragen via mobiel." }
  ],
  "/website-voor-loodgieters": [
    { href: "/lokale-seo", label: "Lokale SEO", description: "Word gevonden door klanten in je regio." },
    { href: "/website-laten-maken", label: "Website laten maken", description: "Bekijk de algemene website-aanpak." },
    { href: "/conversie-optimalisatie", label: "Conversie optimalisatie", description: "Maak bellen en aanvragen makkelijker." }
  ],
  "/website-voor-elektriciens": [
    { href: "/lokale-seo", label: "Lokale SEO", description: "Versterk regionale vindbaarheid voor spoed en projecten." },
    { href: "/website-laten-maken", label: "Website laten maken", description: "Bekijk de algemene website-aanpak." },
    { href: "/seo-website-laten-maken", label: "SEO website laten maken", description: "Leg meteen een vindbare basis." }
  ],
  "/website-voor-kappers": [
    { href: "/lokale-seo", label: "Lokale SEO", description: "Help klanten in de buurt je salon vinden." },
    { href: "/website-laten-maken", label: "Website laten maken", description: "Bekijk de algemene website-aanpak." },
    { href: "/conversie-optimalisatie", label: "Conversie optimalisatie", description: "Maak boeken en contact opnemen eenvoudiger." }
  ],
  "/website-voor-hoveniers": [
    { href: "/lokale-seo", label: "Lokale SEO", description: "Word vindbaar op diensten en regio." },
    { href: "/website-laten-maken", label: "Website laten maken", description: "Bekijk de algemene website-aanpak." },
    { href: "/cases/lokale-dienstverlener", label: "Case lokale dienstverlener", description: "Zie hoe duidelijkere pagina's aanvragen helpen." }
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
