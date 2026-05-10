import {
  ArrowUpRight,
  Bot,
  Braces,
  ChartNoAxesCombined,
  DatabaseZap,
  Gauge,
  Layers3,
  LineChart,
  Network,
  Orbit,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export const visualAssets = {
  heroDashboard: {
    src: "/assets/hero-dashboard.webp",
    alt: "Donkere laptop met premium digitaal dashboard"
  },
  architecture: {
    src: "/assets/architecture-dark.webp",
    alt: "Moderne donkere architectuur met strakke verticale lijnen"
  },
  meeting: {
    src: "/assets/strategy-meeting.webp",
    alt: "Strategisch overleg in een moderne kantooromgeving"
  },
  workflow: {
    src: "/assets/workflow-desk.webp",
    alt: "Digitale workflow op tablet met schermen en planning"
  },
  workspace: {
    src: "/assets/focused-workspace.webp",
    alt: "Rustige werkplek met warm licht en digitaal scherm"
  }
} as const;

export const proofMetrics = [
  { value: "95+", label: "Lighthouse-doel voor kernpagina's" },
  { value: "3", label: "Vindbaarheidslagen: zoekmachines, antwoorden en AI" },
  { value: "8px", label: "Systematische spacing en visuele rust" }
];

export const homepageServices = [
  {
    title: "Premium webontwikkeling",
    href: "/web-development",
    description:
      "Snelle, gestructureerde websites die premium positionering vertalen naar een conversiegerichte digitale infrastructuur.",
    icon: Braces,
    image: visualAssets.heroDashboard
  },
  {
    title: "SEO, GEO & AEO architectuur",
    href: "/seo-services",
    description:
      "Content, schema, interne links en semantische pagina's voor zoekmachines en AI-antwoordsystemen.",
    icon: Search,
    image: visualAssets.architecture
  },
  {
    title: "AI-infrastructuur",
    href: "/ai-infrastructure",
    description:
      "Automatiseringen, AI-ondersteunde workflows en datasystemen die handmatig werk verminderen en meer hefboom creëren.",
    icon: DatabaseZap,
    image: visualAssets.workflow
  },
  {
    title: "Strategisch advies",
    href: "/strategic-consulting",
    description:
      "Positionering, aanbodstructuur, autoriteitssystemen en groeiplanning voor bedrijven die sterker willen overkomen.",
    icon: LineChart,
    image: visualAssets.meeting
  }
];

export const servicePages = [
  {
    slug: "seo-services",
    title: "SEO-diensten",
    eyebrow: "Zoekinfrastructuur",
    description:
      "Technische SEO, contentarchitectuur, schema, interne links en performance-systemen die je bedrijf makkelijker vindbaar, begrijpelijk en betrouwbaar maken.",
    primaryOutcome: "Bouw een organisch acquisitiesysteem dat blijft doorwerken.",
    icon: Search,
    image: visualAssets.architecture,
    pillars: [
      "Technische crawlbaarheid en indexeerbaarheid",
      "Semantische zoekwoord- en entiteitenarchitectuur",
      "Interne links voor topical authority",
      "Structured data die diensten en expertise verduidelijkt"
    ],
    faqs: [
      {
        question: "Wat maakt MagisData SEO anders dan standaard SEO-pakketten?",
        answer:
          "MagisData behandelt SEO als infrastructuur. We verbinden techniek, contentarchitectuur, schema, paginasnelheid en conversiepaden zodat organisch verkeer ook een duidelijk zakelijk doel heeft."
      },
      {
        question: "Ondersteunen jullie lokale en dienstverlenende bedrijven?",
        answer:
          "Ja. We bouwen lokale relevantie, duidelijke dienstenpagina's, LocalBusiness-schema en conversiegerichte pagina's voor bedrijven die betere aanvragen willen."
      }
    ]
  },
  {
    slug: "geo-optimization",
    title: "GEO-optimalisatie",
    eyebrow: "Generative engine optimization",
    description:
      "Optimalisatie voor AI-gegenereerde zoekervaringen, retrievalsystemen en platforms die marktopties samenvatten.",
    primaryOutcome: "Maak je merk makkelijker te vinden, citeren en uitleggen door AI-systemen.",
    icon: Orbit,
    image: visualAssets.heroDashboard,
    pillars: [
      "Entiteitenrijke pagina's die je bedrijf helder definiëren",
      "Gestructureerde dienstomschrijvingen voor AI-extractie",
      "Antwoordklare kennisblokken en FAQ's",
      "Citeerbare inzichten en autoriteitssignalen"
    ],
    faqs: [
      {
        question: "Wat is GEO-optimalisatie?",
        answer:
          "GEO staat voor generative engine optimization. Het structureert content zodat AI-zoeksystemen een merk kunnen begrijpen, relevante feiten kunnen ophalen en accurate antwoorden kunnen samenstellen."
      },
      {
        question: "Vervangt GEO traditionele SEO?",
        answer:
          "Nee. GEO bouwt voort op SEO. Technische SEO, semantische content en structured data blijven de basis voor zichtbaarheid in AI-gedreven ontdekking."
      }
    ]
  },
  {
    slug: "aeo-optimization",
    title: "AEO-optimalisatie",
    eyebrow: "Answer engine optimization",
    description:
      "Pagina's en contentblokken die kopersvragen direct beantwoorden, featured snippets ondersteunen en extractie door antwoordmachines verbeteren.",
    primaryOutcome: "Zet complexe expertise om in duidelijke antwoorden waar kopers iets mee kunnen.",
    icon: Sparkles,
    image: visualAssets.workflow,
    pillars: [
      "Vraaggestuurde contentarchitectuur",
      "Beknopte definities en vergelijkingsblokken",
      "FAQ-systemen die aansluiten op zichtbare content",
      "Dienstuitleg ontworpen voor antwoordextractie"
    ],
    faqs: [
      {
        question: "Wat is AEO?",
        answer:
          "AEO betekent answer engine optimization. Het richt content zo in dat zoekmachines en AI-assistenten duidelijke antwoorden op specifieke vragen kunnen halen uit je pagina's."
      },
      {
        question: "Welke pagina's profiteren het meest van AEO?",
        answer:
          "Dienstenpagina's, vergelijkingspagina's, artikelen, prijsuitleg en FAQ-secties profiteren het meest omdat ze directe vragen van kopers beantwoorden."
      }
    ]
  },
  {
    slug: "ai-infrastructure",
    title: "AI-infrastructuur",
    eyebrow: "Operationele hefboom",
    description:
      "AI-workflows en automatiseringen voor leadopvolging, contentprocessen, CRM, interne rapportage en klantcommunicatie.",
    primaryOutcome: "Verminder repetitief werk en verbeter reactiesnelheid, overzicht en schaalbaarheid.",
    icon: Bot,
    image: visualAssets.workspace,
    pillars: [
      "Lead intake en kwalificatie",
      "AI-ondersteunde support en triage",
      "CRM- en rapportage-automatisering",
      "Kennissystemen voor herhaalbare processen"
    ],
    faqs: [
      {
        question: "Welke AI-automatiseringen kan MagisData bouwen?",
        answer:
          "MagisData bouwt praktische automatiseringen voor leadopvolging, CRM-workflows, supporttriage, contentprocessen, rapportage en interne herhaalbare taken."
      },
      {
        question: "Is AI-infrastructuur alleen voor grote teams?",
        answer:
          "Nee. Juist kleine en groeiende bedrijven profiteren vaak snel, omdat automatisering knelpunten wegneemt voordat extra personeel nodig is."
      }
    ]
  },
  {
    slug: "web-development",
    title: "Webontwikkeling",
    eyebrow: "Premium websystemen",
    description:
      "Moderne websites gebouwd met performance, toegankelijkheid, conversie, gestructureerde content en schaalbaarheid als uitgangspunt.",
    primaryOutcome: "Lanceer een premium digitale basis die kan doorgroeien naar een volledig acquisitieplatform.",
    icon: Gauge,
    image: visualAssets.heroDashboard,
    pillars: [
      "Next.js-architectuur voor snelheid en schaalbaarheid",
      "Responsive UI met premium graphite-oppervlakken",
      "Conversiegerichte secties en contactflows",
      "SEO-ready metadata, schema, sitemap en robots"
    ],
    faqs: [
      {
        question: "Welke technologie gebruikt MagisData voor websites?",
        answer:
          "MagisData bouwt met moderne React- en Next.js-infrastructuur, geoptimaliseerde afbeeldingen, semantische HTML, structured data en performancegerichte implementatie."
      },
      {
        question: "Kan de website na livegang doorgroeien?",
        answer:
          "Ja. De architectuur is bedoeld voor nieuwe dienstenpagina's, cases, inzichten, landingspagina's en toekomstige product- of SaaS-lagen."
      }
    ]
  },
  {
    slug: "strategic-consulting",
    title: "Strategisch advies",
    eyebrow: "Marktduidelijkheid",
    description:
      "Positionering, aanbodarchitectuur, conversiestrategie en autoriteitsplanning voor bedrijven die een sterker digitaal systeem nodig hebben.",
    primaryOutcome: "Maak helder wat de markt moet begrijpen, vertrouwen en doen.",
    icon: ChartNoAxesCombined,
    image: visualAssets.meeting,
    pillars: [
      "Positionering en premium perceptie",
      "Aanbodduidelijkheid en paginahiërarchie",
      "Contentstructuren voor autoriteit",
      "Meetplannen voor conversie en groei"
    ],
    faqs: [
      {
        question: "Wanneer kies je voor strategisch advies?",
        answer:
          "Kies voor strategisch advies wanneer het probleem niet alleen design of verkeer is, maar onduidelijke positionering, zwakke aanbodstructuur of een digitale aanwezigheid die onvoldoende autoriteit uitstraalt."
      },
      {
        question: "Kan advies vóór een websitebouw plaatsvinden?",
        answer:
          "Ja. Strategie vóór implementatie maakt de website vaak sneller te bouwen, makkelijker te schalen en effectiever na livegang."
      }
    ]
  }
] as const;

export const process = [
  {
    step: "01",
    title: "Strategische architectuur in kaart brengen",
    description:
      "We verduidelijken doelgroep, dienstenprioriteiten, zoekintentie, autoriteitsgaten, conversiepaden en de digitale infrastructuur die je markt moet zien.",
    icon: Network
  },
  {
    step: "02",
    title: "Het zichtbare systeem bouwen",
    description:
      "We ontwerpen en bouwen website, contentstructuur, schema, navigatie en kernervaring met performance en premium perceptie ingebouwd.",
    icon: Layers3
  },
  {
    step: "03",
    title: "Optimaliseren voor blijvende zichtbaarheid",
    description:
      "We bereiden de site voor op zoekmachines, AI-retrieval, analytics, iteratie en toekomstige uitbreiding met inzichten, cases, tools en automatisering.",
    icon: Workflow
  }
];

export const benefits = [
  {
    title: "Autoriteit vóór uitleg",
    description:
      "De eerste indruk laat zien dat het bedrijf serieus, gestructureerd en bekwaam is voordat een bezoeker elk detail leest.",
    icon: ShieldCheck,
    image: visualAssets.architecture
  },
  {
    title: "Informatie die vindbaar is",
    description:
      "Pagina's zijn opgebouwd rond duidelijke entiteiten, beknopte antwoorden en dienstdefinities voor mensen én machines.",
    icon: Search,
    image: visualAssets.workflow
  },
  {
    title: "Conversie zonder druk",
    description:
      "CTA's, bewijs en contactpaden staan rustig geplaatst zodat serieuze bezoekers verder kunnen zonder pushy verkoopgevoel.",
    icon: ArrowUpRight,
    image: visualAssets.meeting
  }
];

export const faqs = [
  {
    question: "Wat bouwt MagisData?",
    answer:
      "MagisData bouwt strategische digitale infrastructuur: premium websites, SEO/GEO/AEO-systemen, AI-automatisering, conversiearchitectuur en positionering voor ambitieuze bedrijven."
  },
  {
    question: "Voor wie is MagisData het meest geschikt?",
    answer:
      "MagisData is geschikt voor dienstverleners, consultants, SaaS-bedrijven, agencies, lokale marktleiders en high-ticket merken die meer autoriteit, zichtbaarheid en schaalbare digitale systemen nodig hebben."
  },
  {
    question: "Wat is het verschil tussen SEO, GEO en AEO?",
    answer:
      "SEO vergroot zichtbaarheid in zoekmachines. GEO helpt AI-zoeksystemen je merk begrijpen en ophalen. AEO structureert content zodat antwoordmachines duidelijke antwoorden kunnen extraheren."
  },
  {
    question: "Kan MagisData een bestaande website verbeteren?",
    answer:
      "Ja. Bestaande websites kunnen worden geaudit, herpositioneerd, herbouwd of uitgebreid met betere structuur, content, technische SEO, schema en conversieflows."
  },
  {
    question: "Hoe start een traject meestal?",
    answer:
      "Een traject start met een strategische review van bedrijfsdoelen, huidige digitale infrastructuur, autoriteitsgaten, zoekzichtbaarheid, conversiepaden en de slimste implementatievolgorde."
  }
];

export const insights = [
  {
    slug: "websites-zijn-bedrijfsinfrastructuur",
    title: "Websites zijn bedrijfsinfrastructuur, geen digitale brochure",
    description:
      "Waarom premium websites moeten functioneren als systeem voor autoriteit, acquisitie, conversie en AI-vindbaarheid.",
    category: "Digitale infrastructuur",
    date: "2026-05-10",
    readingTime: "5 min leestijd",
    image: visualAssets.heroDashboard,
    body: [
      "Een moderne website is niet alleen een plek waar mensen controleren of een bedrijf bestaat. Het is het systeem dat eerste indrukken stuurt, autoriteit uitlegt, vraag opvangt en zoek- en AI-systemen een gestructureerd beeld van het bedrijf geeft.",
      "Wanneer een website als infrastructuur wordt behandeld, worden designkeuzes zakelijke keuzes. Navigatie weerspiegelt marktprioriteiten. Content beantwoordt kopersvragen. Schema verduidelijkt entiteiten. Performance beschermt vertrouwen.",
      "Daarom voelen sterke websites rustig. Ze hoeven niet te schreeuwen. De structuur maakt het bedrijf makkelijker te begrijpen, makkelijker te vertrouwen en makkelijker te kiezen."
    ]
  },
  {
    slug: "seo-geo-aeo-zoekzichtbaarheid-versplintert",
    title: "SEO, GEO en AEO: zoekzichtbaarheid wordt meerlagig",
    description:
      "Zoeken is niet langer één kanaal. Bedrijven hebben zichtbaarheid nodig in zoekmachines, AI-samenvattingen en antwoordinterfaces.",
    category: "Zoekstrategie",
    date: "2026-05-10",
    readingTime: "6 min leestijd",
    image: visualAssets.architecture,
    body: [
      "Traditionele SEO blijft belangrijk, maar ontdekking breidt uit. Kopers vragen Google, Bing, ChatGPT, Perplexity, Claude, Gemini en voice-assistenten om aanbevelingen, definities, vergelijkingen en vervolgstappen.",
      "Die verschuiving beloont bedrijven met duidelijke entiteiten, gestructureerde dienstenpagina's, sterke interne links, beknopte antwoorden en content die zonder dubbelzinnigheid kan worden geëxtraheerd.",
      "De praktische reactie is niet elk platform los najagen. De reactie is een kennisarchitectuur bouwen die mensen en machines helpt begrijpen wat het bedrijf doet en waarom het vertrouwd kan worden."
    ]
  },
  {
    slug: "premium-positionering-is-een-systeem",
    title: "Premium positionering is een systeem, geen visuele stijl",
    description:
      "De sterkste digitale merken combineren aanbodduidelijkheid, terughoudendheid, performance, autoriteitssignalen en conversiearchitectuur.",
    category: "Positionering",
    date: "2026-05-10",
    readingTime: "4 min leestijd",
    image: visualAssets.meeting,
    body: [
      "Premium positionering wordt vaak verward met dure visuals. In de praktijk ontstaat premium perceptie door consistentie: heldere taal, sterke hiërarchie, snelle pagina's, rustige zekerheid en bewijs dat het bedrijf structureel denkt.",
      "Design ondersteunt die perceptie, maar kan onduidelijke strategie niet dragen. Een premium website moet weten wat prioriteit heeft, tot wie hij spreekt en welke actie een gekwalificeerde koper daarna moet nemen.",
      "Wanneer strategie en interface samenwerken, voelt de site minder als marketing en meer als een besturingssysteem voor vertrouwen."
    ]
  }
];

export const caseStudies = [
  {
    slug: "autoriteitsplatform-voor-dienstverlener",
    title: "Autoriteitsplatform voor een professionele dienstverlener",
    description:
      "Een premium websitearchitectuur die expertpositionering vertaalt naar duidelijkere vraag naar diensten.",
    outcome: "Scherpere dienstenhiërarchie, sterkere trust-signalen en een rustiger pad naar consultatie.",
    tags: ["Webontwikkeling", "SEO-architectuur", "Positionering"],
    image: visualAssets.meeting
  },
  {
    slug: "ai-ready-zoekarchitectuur",
    title: "AI-ready zoekarchitectuur voor een groeiend bedrijf",
    description:
      "Een semantisch contentsysteem rond diensten, vragen, interne links en structured data.",
    outcome: "Betere machineleesbaarheid en een schaalbare basis voor toekomstige contentuitbreiding.",
    tags: ["GEO", "AEO", "Structured data"],
    image: visualAssets.workflow
  }
];
