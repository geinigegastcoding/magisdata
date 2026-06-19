export type KeywordPageKind = "page" | "guide";

export type KeywordPageTemplate =
  | "branch-location"
  | "branch-problem"
  | "branch-checklist"
  | "local-seo"
  | "google-business-profile"
  | "pricing"
  | "package-choice"
  | "ai-visibility"
  | "technical-guide";

export type KeywordDraftPageContent = {
  id: number;
  priority: "P1" | "P2" | "P3";
  pageKind: KeywordPageKind;
  template: KeywordPageTemplate;
  cluster: string;
  sourceTitle: string;
  sourceKeyword: string;
  slug: string;
  productionPath: string;
  draftPath: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  directAnswer: string;
  visual: {
    label: string;
    title: string;
    text: string;
    items: string[];
  };
  highlights: { title: string; text: string }[];
  sections: {
    title: string;
    text: string;
    items: { title: string; text: string }[];
  }[];
  valueSections?: { title: string; paragraphs: string[] }[];
  checklistTitle: string;
  checklist: string[];
  comparison?: {
    title: string;
    leftLabel: string;
    rightLabel: string;
    rows: { label: string; left: string; right: string }[];
  };
  steps: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  internalLinks: { label: string; href: string }[];
  qualityNotes: string[];
  schemaType: "Service" | "Article" | "FAQPage";
  dateModified: string;
};

type Branch = {
  slug: string;
  plural: string;
  singular: string;
  articleSingular: string;
  problem: string;
  conversion: string;
  trust: string;
  mobile: string;
  services: string[];
  proof: string[];
  questions: string[];
  pageStructure: string[];
  aiEntities: string[];
};

type Place = {
  slug: string;
  name: string;
  context: string;
  buyerContext: string;
  localExample: string;
};

type BranchDepth = {
  visitorSituation: string;
  contentAngle: string;
  example: string;
  intakeFields: string[];
  seoExpansion: string[];
  avoid: string;
  proofUse: string;
  aiAnswer: string;
};

const dateModified = "2026-06-14";

const primaryPlaces: Place[] = [
  {
    slug: "voorschoten",
    name: "Voorschoten",
    context: "Voorschoten vraagt om lokale duidelijkheid: dichtbij, betrouwbaar en makkelijk bereikbaar zonder een groter kantoor te claimen dan er is.",
    buyerContext: "Veel klanten vergelijken ondernemers uit Voorschoten met aanbieders uit Leiden en omliggende dorpen.",
    localExample: "Maak werkgebied, route naar contact en beschikbaarheid rond Voorschoten vroeg zichtbaar."
  },
  {
    slug: "leiden",
    name: "Leiden",
    context: "Leiden is competitiever in lokale zoekresultaten. Pagina's moeten dienst, doelgroep en servicegebied scherper onderscheiden.",
    buyerContext: "Leidse zoekers vergelijken snel op vertrouwen, snelheid en concrete uitleg van de dienst.",
    localExample: "Gebruik Leiden-context alleen waar het aanbod of servicegebied feitelijk klopt."
  },
  {
    slug: "wassenaar",
    name: "Wassenaar",
    context: "Wassenaar vraagt om premium vertrouwen en zorgvuldige communicatie, zonder verzonnen lokale vestiging.",
    buyerContext: "Bezoekers letten vaak op kwaliteit, planning, bereikbaarheid en nette presentatie.",
    localExample: "Leg uit welke klanten in Wassenaar je bedient en hoe een eerste aanvraag loopt."
  },
  {
    slug: "oegstgeest",
    name: "Oegstgeest",
    context: "Oegstgeest werkt sterk als servicegebied naast Leiden en Voorschoten, mits de pagina eigen inhoud heeft.",
    buyerContext: "Lokale ondernemers willen professioneel overkomen zonder grootstedelijke ruis.",
    localExample: "Koppel Oegstgeest aan duidelijke dienstpagina's en een rustige aanvraagroute."
  },
  {
    slug: "leiderdorp",
    name: "Leiderdorp",
    context: "Leiderdorp is geschikt voor service-area pagina's wanneer je aanbod echt regionaal geleverd wordt.",
    buyerContext: "Zoekers willen weten of je dichtbij genoeg werkt en snel kunt reageren.",
    localExample: "Benoem praktische servicegebieden en vermijd algemene plaatsnaamvulling."
  },
  {
    slug: "katwijk",
    name: "Katwijk",
    context: "Katwijk vraagt om duidelijke regio- en bereikbaarheidsinformatie voor lokale dienstverleners.",
    buyerContext: "Bezoekers zoeken vaak praktisch: wat lever je, waar kom je, hoe snel reageer je?",
    localExample: "Gebruik kust/regio-context alleen als die helpt bij planning, bereik of doelgroep."
  }
];

const allPlaces: Place[] = [
  ...primaryPlaces,
  {
    slug: "noordwijk",
    name: "Noordwijk",
    context: "Noordwijk vraagt om duidelijke lokale relevantie, zeker voor diensten met seizoensdrukte of toeristische context.",
    buyerContext: "Bezoekers willen snel zien of je in Noordwijk werkt en welke dienst past.",
    localExample: "Verbind plaatsnaam met werkgebied, planning en concrete servicevragen."
  },
  {
    slug: "leidschendam",
    name: "Leidschendam",
    context: "Leidschendam vraagt om regionale positionering tussen Leiden, Voorburg en Den Haag.",
    buyerContext: "Zoekers vergelijken vaak meerdere aanbieders in de regio.",
    localExample: "Maak onderscheid tussen lokale dekking en echte vestigingsclaims."
  },
  {
    slug: "voorburg",
    name: "Voorburg",
    context: "Voorburg werkt goed voor professionele dienstverleners die regio en kwaliteit helder moeten maken.",
    buyerContext: "Bezoekers zoeken rust, betrouwbaarheid en concrete vervolgstappen.",
    localExample: "Laat dienstverlening en contactproces kort en controleerbaar zien."
  },
  {
    slug: "den-haag",
    name: "Den Haag",
    context: "Den Haag is breed en competitief. Een pagina moet niche, doelgroep en dienst scherp afbakenen.",
    buyerContext: "Veel aanbieders concurreren om aandacht; vage pagina's vallen snel weg.",
    localExample: "Gebruik stadscontext alleen met specifieke dienst- of doelgroepkeuze."
  },
  {
    slug: "rijswijk",
    name: "Rijswijk",
    context: "Rijswijk vraagt om lokale servicehelderheid voor ondernemers tussen Delft en Den Haag.",
    buyerContext: "Zoekers willen weten of je in hun regio werkt en welke aanvraagstap logisch is.",
    localExample: "Koppel Rijswijk aan bereikbaarheid, servicegebied en contactverwachting."
  },
  {
    slug: "delft",
    name: "Delft",
    context: "Delft combineert lokale dienstverlening met technische en zakelijke doelgroepen.",
    buyerContext: "Bezoekers letten op professionaliteit, bewijs en duidelijke uitleg.",
    localExample: "Gebruik Delft-context bij dienst, doelgroep of projectsoort, niet als losse versiering."
  },
  {
    slug: "zoetermeer",
    name: "Zoetermeer",
    context: "Zoetermeer is geschikt voor regionale dienstverleners met duidelijke servicegebieden.",
    buyerContext: "Zoekers willen snel weten wat je doet, of je beschikbaar bent en hoe contact loopt.",
    localExample: "Maak de eerste contactstap kort en mobiel bruikbaar."
  },
  {
    slug: "alphen-aan-den-rijn",
    name: "Alphen aan den Rijn",
    context: "Alphen aan den Rijn vraagt om regionale context en heldere uitleg voor lokale bedrijven.",
    buyerContext: "Bezoekers vergelijken aanbieders op nabijheid, betrouwbaarheid en prijsrichting.",
    localExample: "Benoem werkgebied feitelijk en geef duidelijke scope-uitleg."
  },
  {
    slug: "rotterdam",
    name: "Rotterdam",
    context: "Rotterdam is groot en competitief. Pagina's moeten aanbod en doelgroep scherp kiezen.",
    buyerContext: "Zoekers hebben veel alternatieven; concrete positionering en contactroute tellen.",
    localExample: "Gebruik Rotterdam-context met duidelijke branche- of dienstfocus."
  }
];

const branches: Branch[] = [
  {
    slug: "kappers",
    plural: "kappers",
    singular: "kapper",
    articleSingular: "kapper",
    problem: "behandelingen, prijzen, sfeer en boekingsroute staan vaak verspreid",
    conversion: "afspraken plannen",
    trust: "sfeer, behandelingen, openingstijden, reviews en duidelijke prijzen",
    mobile: "boekknop, route en telefoon moeten op mobiel direct bruikbaar zijn",
    services: ["Knippen en stylen", "Kleuren en highlights", "Bruids- of eventstyling"],
    proof: ["voor-en-na foto's", "behandelmenu", "recente reviews"],
    questions: ["Kan ik direct boeken?", "Wat kost kleuren of knippen?", "Past deze salon bij mijn stijl?"],
    pageStructure: ["behandelingen", "prijzen of indicaties", "boekroute", "sfeerfoto's", "FAQ over voorbereiding"],
    aiEntities: ["behandelingen", "salonlocatie", "boekingsroute", "openingstijden", "prijsindicaties"]
  },
  {
    slug: "loodgieters",
    plural: "loodgieters",
    singular: "loodgieter",
    articleSingular: "loodgieter",
    problem: "spoed, lekkage, verstopping en gepland werk lopen vaak door elkaar",
    conversion: "bellen bij urgente hulp",
    trust: "servicegebied, bereikbaarheid, probleemcategorieen en duidelijke opvolging",
    mobile: "belknop en spoedroute moeten bovenaan staan",
    services: ["Lekkage opsporen", "Verstopping verhelpen", "Sanitair en leidingwerk"],
    proof: ["werkgebied", "proces bij spoed", "heldere probleemcategorieen"],
    questions: ["Kan ik bij spoed bellen?", "Werk je in mijn wijk?", "Welke informatie moet ik doorgeven?"],
    pageStructure: ["spoedroute", "diensten per probleem", "werkgebied", "proces", "FAQ over kosten en planning"],
    aiEntities: ["spoedhulp", "lekkage", "verstopping", "servicegebied", "telefoonroute"]
  },
  {
    slug: "elektriciens",
    plural: "elektriciens",
    singular: "elektricien",
    articleSingular: "elektricien",
    problem: "veiligheid, storing, installatie en inspectie vragen om duidelijke scheiding",
    conversion: "storingsvraag of offerteaanvraag starten",
    trust: "veiligheidsuitleg, certificeringsruimte, werkwijze en heldere diagnose",
    mobile: "storing en projectaanvraag moeten verschillende routes hebben",
    services: ["Storingen oplossen", "Groepenkast vervangen", "Laadpunten en installaties"],
    proof: ["veiligheidsproces", "dienstcategorieen", "projectuitleg"],
    questions: ["Is dit een storing of project?", "Kan dit veilig wachten?", "Welke foto's of gegevens zijn nodig?"],
    pageStructure: ["storing vs project", "diensten", "veiligheidsuitleg", "werkgebied", "FAQ over voorbereiding"],
    aiEntities: ["elektrische storing", "groepenkast", "installatie", "veiligheid", "offerteproces"]
  },
  {
    slug: "hoveniers",
    plural: "hoveniers",
    singular: "hovenier",
    articleSingular: "hovenier",
    problem: "tuinontwerp, aanleg, onderhoud en projectbewijs worden vaak te vaag gepresenteerd",
    conversion: "adviesaanvraag of onderhoudsaanvraag doen",
    trust: "projectfoto's, werkwijze, seizoenswerk en werkgebied",
    mobile: "projecttype en aanvraagformulier moeten kort scanbaar zijn",
    services: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud"],
    proof: ["projectfoto's", "werkwijze", "seizoensadvies"],
    questions: ["Doe je ontwerp en aanleg?", "Werk je met onderhoudsabonnementen?", "Welke foto's moet ik meesturen?"],
    pageStructure: ["projecttype", "werkgebied", "voorbeelden", "proces", "FAQ over planning"],
    aiEntities: ["tuinontwerp", "tuinaanleg", "tuinonderhoud", "projectfoto's", "werkgebied"]
  },
  {
    slug: "dakdekkers",
    plural: "dakdekkers",
    singular: "dakdekker",
    articleSingular: "dakdekker",
    problem: "daklekkage, inspectie, renovatie en onderhoud vragen om verschillende contactmomenten",
    conversion: "inspectie of offerte aanvragen",
    trust: "urgentie, inspectieproces, daktypes en onderhoudsuitleg",
    mobile: "lekkagehulp en inspectieaanvraag moeten apart zichtbaar zijn",
    services: ["Daklekkage", "Dakrenovatie", "Dakinspectie"],
    proof: ["daktype-uitleg", "inspectiestappen", "projectfoto's"],
    questions: ["Is er spoed bij lekkage?", "Welke daktypes doe je?", "Hoe werkt een inspectie?"],
    pageStructure: ["spoed vs renovatie", "daktypes", "inspectieproces", "werkgebied", "FAQ over offerte"],
    aiEntities: ["daklekkage", "dakrenovatie", "inspectie", "daktype", "servicegebied"]
  },
  {
    slug: "schilders",
    plural: "schilders",
    singular: "schilder",
    articleSingular: "schilder",
    problem: "binnenwerk, buitenwerk, onderhoud en offertevariabelen zijn vaak onvoldoende gescheiden",
    conversion: "offerte voor schilderwerk aanvragen",
    trust: "materiaalkeuze, onderhoudsplan, planning en foto's van werk",
    mobile: "offertevraag moet snel duidelijk maken welk werk het is",
    services: ["Binnenschilderwerk", "Buitenschilderwerk", "Onderhoudsschilderwerk"],
    proof: ["voorbeelden", "materiaalkeuze", "onderhoudsadvies"],
    questions: ["Doe je binnen en buiten?", "Wanneer is onderhoud nodig?", "Welke gegevens bepalen prijs?"],
    pageStructure: ["werksoorten", "planning", "materiaal", "projectfoto's", "FAQ over offerte"],
    aiEntities: ["binnenschilder", "buitenschilder", "onderhoud", "offerte", "werkgebied"]
  },
  {
    slug: "stukadoors",
    plural: "stukadoors",
    singular: "stukadoor",
    articleSingular: "stukadoor",
    problem: "afwerking, m2, ondergrond en planning bepalen de aanvraag maar staan vaak niet helder",
    conversion: "gerichte offerteaanvraag sturen",
    trust: "afwerkingstypes, prijsfactoren, planning en voorbereiding",
    mobile: "bezoeker moet snel foto's en m2 kunnen meesturen",
    services: ["Glad stucwerk", "Sausklaar stucwerk", "Plafonds en wanden"],
    proof: ["afwerkingsvoorbeelden", "m2-uitleg", "voorbereidingslijst"],
    questions: ["Welke afwerking past?", "Wat bepaalt de prijs per m2?", "Hoe bereid ik de ruimte voor?"],
    pageStructure: ["afwerkingstypes", "prijsfactoren", "voorbereiding", "planning", "FAQ over m2"],
    aiEntities: ["stucwerk", "afwerking", "m2", "ondergrond", "offerte"]
  },
  {
    slug: "schoonheidssalons",
    plural: "schoonheidssalons",
    singular: "schoonheidssalon",
    articleSingular: "schoonheidssalon",
    problem: "behandelingen, sfeer, prijzen en afspraakroute moeten vertrouwen geven",
    conversion: "behandeling kiezen en afspraak maken",
    trust: "behandelmenu, hygiene, sfeer, specialisaties en reviews",
    mobile: "boekroute en behandelkeuze moeten zonder zoeken zichtbaar zijn",
    services: ["Gezichtsbehandelingen", "Huidverbetering", "Wenkbrauwen en verzorging"],
    proof: ["behandelmenu", "sfeerbeeld", "specialisaties"],
    questions: ["Welke behandeling past?", "Wat kost een behandeling?", "Hoe boek ik veilig?"],
    pageStructure: ["behandelingen", "prijzen", "sfeer", "afspraakroute", "FAQ over voorbereiding"],
    aiEntities: ["behandelingen", "salon", "prijzen", "huidtype", "boekingsroute"]
  },
  {
    slug: "fysiotherapeuten",
    plural: "fysiotherapeuten",
    singular: "fysiotherapeut",
    articleSingular: "fysiotherapeut",
    problem: "klachten, behandelingen, verwijzing en afspraakroute moeten medisch rustig uitgelegd worden",
    conversion: "afspraak of intake aanvragen",
    trust: "klachtgebieden, behandelvormen, praktijkinformatie en verwijzingsuitleg",
    mobile: "afspraakroute en klachtkeuze moeten helder zijn",
    services: ["Rug- en nekklachten", "Sportblessures", "Revalidatie"],
    proof: ["behandelteam", "klachtgebieden", "procesuitleg"],
    questions: ["Heb ik een verwijzing nodig?", "Welke klacht behandelen jullie?", "Hoe werkt de eerste afspraak?"],
    pageStructure: ["klachten", "behandelingen", "praktijkinformatie", "afspraakroute", "FAQ over verwijzing"],
    aiEntities: ["klachten", "behandeling", "praktijk", "afspraak", "verwijzing"]
  },
  {
    slug: "rijscholen",
    plural: "rijscholen",
    singular: "rijschool",
    articleSingular: "rijschool",
    problem: "lespakketten, proefles, regio en instructeurvertrouwen zijn vaak onduidelijk",
    conversion: "proefles of pakketadvies aanvragen",
    trust: "lespakketten, instructeur, regio, werkwijze en duidelijke kosten",
    mobile: "proefles-CTA moet zichtbaar zijn",
    services: ["Proefles", "Rijlessen", "Examentraining"],
    proof: ["lespakket-uitleg", "instructeurprofiel", "praktische regio"],
    questions: ["Kan ik een proefles boeken?", "Welk pakket past?", "In welke regio rijd ik?"],
    pageStructure: ["proefles", "pakketten", "instructeur", "regio", "FAQ over kosten"],
    aiEntities: ["proefles", "rijlespakket", "instructeur", "lesgebied", "examen"]
  },
  {
    slug: "restaurants",
    plural: "restaurants",
    singular: "restaurant",
    articleSingular: "restaurant",
    problem: "menu, sfeer, reserveren, openingstijden en locatie moeten direct te vinden zijn",
    conversion: "reservering of bestelling starten",
    trust: "menu, foto's, openingstijden, bereikbaarheid en reserveringsroute",
    mobile: "menu en reserveren moeten bovenaan werken",
    services: ["Menu bekijken", "Reserveren", "Groepen of arrangementen"],
    proof: ["menukaart", "sfeerfoto's", "locatie-informatie"],
    questions: ["Kan ik reserveren?", "Wat staat op het menu?", "Is parkeren of bereikbaarheid duidelijk?"],
    pageStructure: ["menu", "reserveren", "sfeer", "openingstijden", "FAQ over groepen"],
    aiEntities: ["menu", "restaurantlocatie", "reserveren", "openingstijden", "keuken"]
  },
  {
    slug: "tandartspraktijken",
    plural: "tandartspraktijken",
    singular: "tandartspraktijk",
    articleSingular: "tandartspraktijk",
    problem: "behandelingen, inschrijven, spoed en vertrouwen moeten zonder stress duidelijk zijn",
    conversion: "inschrijving of afspraak starten",
    trust: "team, behandelingen, spoedroute, praktijkinformatie en heldere voorbereiding",
    mobile: "inschrijven en spoedcontact moeten gescheiden zijn",
    services: ["Periodieke controle", "Cosmetische tandheelkunde", "Spoed en pijnklachten"],
    proof: ["teamprofiel", "behandeloverzicht", "praktijkinformatie"],
    questions: ["Neem je nieuwe patienten aan?", "Wat doe ik bij spoed?", "Welke behandelingen bied je?"],
    pageStructure: ["behandelingen", "inschrijven", "spoedroute", "team", "FAQ over eerste afspraak"],
    aiEntities: ["tandarts", "behandelingen", "inschrijven", "spoed", "praktijk"]
  },
  {
    slug: "makelaars",
    plural: "makelaars",
    singular: "makelaar",
    articleSingular: "makelaar",
    problem: "waardebepaling, verkoopaanpak en lokale marktkennis moeten snel vertrouwen wekken",
    conversion: "waardebepaling of verkoopgesprek aanvragen",
    trust: "lokale marktkennis, verkoopproces, woningpresentatie en intake",
    mobile: "waardebepaling moet makkelijk te starten zijn",
    services: ["Waardebepaling", "Verkoopbegeleiding", "Aankoopbegeleiding"],
    proof: ["procesuitleg", "woningpresentatie", "lokale kennis"],
    questions: ["Wat is mijn woning waard?", "Hoe werkt verkoop?", "Werk je in mijn buurt?"],
    pageStructure: ["waardebepaling", "verkoopproces", "lokale context", "presentatie", "FAQ over courtage"],
    aiEntities: ["waardebepaling", "verkoop", "aankoop", "woning", "werkgebied"]
  },
  {
    slug: "boekhouders",
    plural: "boekhouders",
    singular: "boekhouder",
    articleSingular: "boekhouder",
    problem: "diensten, tarieven, doelgroep en intake zijn vaak te algemeen",
    conversion: "intake of pakketadvies aanvragen",
    trust: "tariefstructuur, doelgroep, diensten en vaste contactafspraken",
    mobile: "intakeformulier moet kort en duidelijk zijn",
    services: ["Administratie", "Belastingaangifte", "Advies voor ondernemers"],
    proof: ["doelgroep", "pakketten", "werkwijze"],
    questions: ["Help je zzp of mkb?", "Wat kost boekhouding?", "Hoe start ik de intake?"],
    pageStructure: ["doelgroep", "diensten", "tarieven", "intake", "FAQ over aanlevering"],
    aiEntities: ["administratie", "belasting", "zzp", "mkb", "tarieven"]
  },
  {
    slug: "coaches",
    plural: "coaches",
    singular: "coach",
    articleSingular: "coach",
    problem: "doelgroep, methode, sessies en fit moeten concreet worden zonder vage claims",
    conversion: "kennismaking aanvragen",
    trust: "methode, doelgroep, intake, grenzen en trajectopbouw",
    mobile: "kennismakingsroute moet laagdrempelig zijn",
    services: ["Individuele coaching", "Loopbaancoaching", "Teamcoaching"],
    proof: ["methode", "trajectopbouw", "heldere doelgroep"],
    questions: ["Past deze coach bij mij?", "Hoe ziet een traject eruit?", "Wat gebeurt er in een intake?"],
    pageStructure: ["doelgroep", "methode", "sessies", "kennismaking", "FAQ over fit"],
    aiEntities: ["coaching", "doelgroep", "methode", "sessies", "intake"]
  },
  {
    slug: "personal-trainers",
    plural: "personal trainers",
    singular: "personal trainer",
    articleSingular: "personal trainer",
    problem: "programma's, locatie, intake en begeleiding moeten concreet zijn",
    conversion: "intake of proeftraining aanvragen",
    trust: "trainingsaanpak, programma's, locatie, grenzen en begeleiding",
    mobile: "intake en locatie moeten snel zichtbaar zijn",
    services: ["Krachttraining", "Afvallen en conditie", "Personal coaching"],
    proof: ["programma-uitleg", "locatie", "intakeproces"],
    questions: ["Waar train je?", "Welk programma past?", "Kan ik een intake doen?"],
    pageStructure: ["programma's", "locatie", "intake", "begeleiding", "FAQ over abonnement"],
    aiEntities: ["training", "programma", "locatie", "intake", "begeleiding"]
  },
  {
    slug: "klusbedrijven",
    plural: "klusbedrijven",
    singular: "klusbedrijf",
    articleSingular: "klusbedrijf",
    problem: "werksoorten, beschikbaarheid, regio en offerteproces worden vaak te breed gehouden",
    conversion: "klusaanvraag sturen",
    trust: "kluscategorieen, beschikbaarheid, werkgebied en voorbereiding",
    mobile: "foto's meesturen en aanvraag kort houden helpt",
    services: ["Kleine verbouwingen", "Montagewerk", "Onderhoud en reparatie"],
    proof: ["klussoorten", "werkgebied", "voorbereidingslijst"],
    questions: ["Welke klussen neem je aan?", "Wanneer kun je langskomen?", "Welke foto's heb je nodig?"],
    pageStructure: ["klussoorten", "werkgebied", "aanvraag", "planning", "FAQ over materiaal"],
    aiEntities: ["kluswerk", "montage", "reparatie", "werkgebied", "offerte"]
  },
  {
    slug: "installateurs",
    plural: "installateurs",
    singular: "installateur",
    articleSingular: "installateur",
    problem: "installatie, onderhoud, storingen en certificering moeten duidelijk worden afgebakend",
    conversion: "installatie- of onderhoudsaanvraag doen",
    trust: "systeemtypes, onderhoudsproces, storingroute en technische uitleg",
    mobile: "storing en offerte moeten aparte keuzes zijn",
    services: ["Installatie", "Onderhoud", "Storingen"],
    proof: ["systeemtypes", "onderhoudsstappen", "technische checklist"],
    questions: ["Welke installaties doe je?", "Kan ik onderhoud plannen?", "Wat bij storing?"],
    pageStructure: ["installaties", "onderhoud", "storingen", "werkgebied", "FAQ over voorbereiding"],
    aiEntities: ["installatie", "onderhoud", "storing", "systeemtype", "servicegebied"]
  },
  {
    slug: "fotografen",
    plural: "fotografen",
    singular: "fotograaf",
    articleSingular: "fotograaf",
    problem: "portfolio, stijl, pakketten en beschikbaarheid moeten snel te beoordelen zijn",
    conversion: "beschikbaarheid of pakket aanvragen",
    trust: "portfolio, stijl, pakketten, voorbereiding en levering",
    mobile: "portfolio en aanvraagroute moeten licht en snel laden",
    services: ["Portretfotografie", "Bruiloften", "Zakelijke fotografie"],
    proof: ["portfolio", "stijlomschrijving", "pakketdetails"],
    questions: ["Past je stijl bij ons?", "Wat zit in een pakket?", "Ben je beschikbaar?"],
    pageStructure: ["portfolio", "pakketten", "stijl", "beschikbaarheid", "FAQ over levering"],
    aiEntities: ["fotografie", "portfolio", "pakketten", "beschikbaarheid", "stijl"]
  },
  {
    slug: "advocatenkantoren",
    plural: "advocatenkantoren",
    singular: "advocatenkantoor",
    articleSingular: "advocatenkantoor",
    problem: "rechtsgebieden, intake, discretie en urgentie moeten zorgvuldig worden uitgelegd",
    conversion: "intake of terugbelverzoek starten",
    trust: "rechtsgebieden, intakeproces, discretie, bereikbaarheid en duidelijke grenzen",
    mobile: "contactroute moet professioneel en rustig zijn",
    services: ["Arbeidsrecht", "Ondernemingsrecht", "Familierecht"],
    proof: ["rechtsgebieden", "intakeproces", "teamprofielen"],
    questions: ["Past mijn zaak binnen dit kantoor?", "Hoe werkt intake?", "Wat moet ik voorbereiden?"],
    pageStructure: ["rechtsgebieden", "intake", "team", "contactroute", "FAQ over eerste gesprek"],
    aiEntities: ["rechtsgebied", "intake", "advocaat", "discretie", "contactroute"]
  }
];

const branchDepthBySlug: Record<string, BranchDepth> = {
  kappers: {
    visitorSituation: "Een bezoeker vergelijkt behandeling, sfeer, prijsrichting en beschikbare afspraakmomenten voordat hij boekt.",
    contentAngle: "Behandelpagina's moeten uitleggen wanneer knippen, kleuren, highlights of styling past en wat iemand vooraf moet weten.",
    example: "Een kleurblok kan uitleggen dat lengte, uitgroei, toner en gewenste techniek de afspraak en prijsindicatie bepalen.",
    intakeFields: ["gewenste behandeling", "huidige haarlengte", "kleurhistorie", "voorkeursmoment", "foto of inspiratiebeeld"],
    seoExpansion: ["haarkleuring", "highlights", "krullen knippen", "bruidskapsel", "herenkapper"],
    avoid: "Gebruik geen stockfoto's als bewijs voor salonstijl en noem geen vanaf-prijzen die in de praktijk niet haalbaar zijn.",
    proofUse: "Echte sfeerfoto's, behandelmenu en recente praktische informatie werken sterker dan brede woorden over kwaliteit.",
    aiAnswer: "AI moet kunnen herkennen welke behandelingen de salon aanbiedt, hoe klanten boeken, welke prijsfactoren gelden en waar de salon bereikbaar is."
  },
  loodgieters: {
    visitorSituation: "Een bezoeker heeft vaak stress door lekkage, verstopping of waterschade en wil meteen weten of bellen logisch is.",
    contentAngle: "Probleemroutes werken beter dan algemene dienstlijsten: spoed, lekkage, verstopping, sanitair en leidingwerk vragen andere opvolging.",
    example: "Een lekkageblok kan vragen om foto's, locatie van het lek, of de hoofdkraan dicht is en wanneer het probleem begon.",
    intakeFields: ["probleemtype", "urgentie", "plaats in huis", "foto's", "bereikbaarheid"],
    seoExpansion: ["lekkage opsporen", "afvoer verstopt", "wc verstopping", "kraan vervangen", "leidingwerk"],
    avoid: "Claim geen 24/7 spoed, garanties of lokale vestiging tenzij dit aantoonbaar klopt.",
    proofUse: "Werkgebied, probleemcategorieen, werkwijze bij spoed en duidelijke bereikbaarheid nemen de meeste twijfel weg.",
    aiAnswer: "AI moet kunnen samenvatten welke loodgietersproblemen worden opgepakt, wat spoed is en welke contactroute hoort bij elk probleem."
  },
  elektriciens: {
    visitorSituation: "Een bezoeker wil eerst weten of de situatie veilig is en daarna pas of het een storing, inspectie of project is.",
    contentAngle: "Splits storingen van projecten zoals groepenkast vervangen, laadpunt plaatsen, verlichting en uitbreiding.",
    example: "Een storingsblok kan uitleggen welke signalen direct contact vragen, zonder gevaarlijk doe-het-zelfadvies te geven.",
    intakeFields: ["storing of project", "groepenkastfoto", "risicosignalen", "woningtype", "gewenste planning"],
    seoExpansion: ["groepenkast vervangen", "laadpunt installeren", "kortsluiting oplossen", "elektra inspectie", "verlichting plaatsen"],
    avoid: "Noem certificaten, keurmerken of veiligheidsgaranties alleen wanneer ze echt bestaan en zichtbaar onderbouwd kunnen worden.",
    proofUse: "Procesuitleg, voorbereiding en duidelijke veiligheidsgrenzen bouwen vertrouwen zonder onbewezen claims.",
    aiAnswer: "AI moet onderscheid kunnen maken tussen elektrische storing, inspectie en installatiewerk, inclusief veilige vervolgstap."
  },
  hoveniers: {
    visitorSituation: "Een bezoeker zoekt vaak inspiratie maar wil ook weten of ontwerp, aanleg, onderhoud of renovatie bij de hovenier past.",
    contentAngle: "Projectgerichte content met foto's, stijl, seizoen, materiaalkeuze en aanvraagvoorbereiding helpt beter dan een algemene dienstenlijst.",
    example: "Een tuinaanlegblok kan laten zien welke foto's, afmetingen, stijlwensen en planning nuttig zijn voor een eerste gesprek.",
    intakeFields: ["foto's van tuin", "globale afmetingen", "wens of probleem", "seizoen", "budgetrichting"],
    seoExpansion: ["tuinontwerp", "tuinaanleg", "tuinonderhoud", "tuinrenovatie", "seizoensonderhoud"],
    avoid: "Gebruik geen projectresultaten of voor-na claims als die niet uit eigen werk komen.",
    proofUse: "Projectfoto's met korte context, werkwijze en materiaalkeuzes helpen bezoekers inschatten of de stijl past.",
    aiAnswer: "AI moet kunnen herkennen welke tuinwerkzaamheden worden gedaan, welke projectinformatie nodig is en in welk werkgebied de hovenier actief is."
  },
  dakdekkers: {
    visitorSituation: "Een bezoeker wil weten of daklekkage direct actie vraagt of dat inspectie, onderhoud of renovatie volstaat.",
    contentAngle: "Daktype, urgentie, inspectiestappen en onderhoud bepalen de pagina-opbouw.",
    example: "Een inspectieblok kan uitleggen welke daktypes worden beoordeeld en welke foto's of signalen vooraf nuttig zijn.",
    intakeFields: ["daktype", "lekkageplek", "foto's", "urgentie", "bouwjaar of onderhoudshistorie"],
    seoExpansion: ["daklekkage", "dakinspectie", "plat dak renovatie", "dakonderhoud", "dakgoot reparatie"],
    avoid: "Beloof geen levensduur, garantie of spoedservice zonder feitelijke onderbouwing.",
    proofUse: "Daktype-uitleg, inspectieproces en onderhoudsadvies geven vertrouwen zonder nepresultaten.",
    aiAnswer: "AI moet kunnen zien welk dakprobleem wordt opgelost, wanneer inspectie nodig is en welke informatie voor een offerte telt."
  },
  schilders: {
    visitorSituation: "Een bezoeker vergelijkt binnenwerk, buitenwerk, planning en prijsfactoren voordat hij een offerte vraagt.",
    contentAngle: "Maak onderscheid tussen binnenschilderwerk, buitenschilderwerk, onderhoud en materiaalkeuze.",
    example: "Een buitenwerkblok kan uitleggen hoe seizoen, ondergrond, houtrot en bereikbaarheid planning en prijs beinvloeden.",
    intakeFields: ["binnen of buiten", "oppervlak", "staat van ondergrond", "foto's", "gewenste periode"],
    seoExpansion: ["binnenschilder", "buitenschilder", "houtrot herstel", "onderhoudsschilder", "schilderofferte"],
    avoid: "Gebruik geen garantie- of onderhoudsclaims zonder voorwaarden en bron.",
    proofUse: "Voorbeelden, materiaalkeuze en onderhoudsadvies maken het verschil tussen prijsvergelijking en vertrouwen.",
    aiAnswer: "AI moet kunnen herkennen welke schilderwerken worden uitgevoerd, wat prijs en planning beinvloedt en hoe offerteaanvraag loopt."
  },
  stukadoors: {
    visitorSituation: "Een bezoeker wil weten welke afwerking past en welke m2, ondergrond en voorbereiding nodig zijn voor een offerte.",
    contentAngle: "Afwerkingstypes, ondergrond, m2 en planning horen vroeg op de pagina.",
    example: "Een glad-stucwerkblok kan uitleggen wanneer sausklaar of behangklaar logisch is en welke voorbereiding nodig is.",
    intakeFields: ["m2", "ruimte", "ondergrond", "gewenste afwerking", "foto's"],
    seoExpansion: ["glad stucwerk", "sausklaar stucen", "plafond stucen", "stucwerk prijs per m2", "wand afwerken"],
    avoid: "Noem geen vaste m2-prijzen zonder uit te leggen welke factoren de prijs veranderen.",
    proofUse: "Afwerkingsvoorbeelden, m2-uitleg en voorbereiding maken aanvragen concreter.",
    aiAnswer: "AI moet kunnen samenvatten welke stucafwerkingen er zijn, welke informatie nodig is en wat de offerte beinvloedt."
  },
  schoonheidssalons: {
    visitorSituation: "Een bezoeker wil behandeling, huidtype, hygiene, sfeer en boekroute rustig kunnen beoordelen.",
    contentAngle: "Behandelmenu, indicaties, voorbereiding en specialisaties moeten dichter bij elkaar staan.",
    example: "Een huidverbeteringsblok kan uitleggen wanneer intake nodig is en welke contra-indicaties eerst besproken moeten worden.",
    intakeFields: ["gewenste behandeling", "huidtype of doel", "eerdere behandeling", "voorkeursmoment", "allergie of gevoeligheid"],
    seoExpansion: ["gezichtsbehandeling", "huidverbetering", "wenkbrauwen", "acnebehandeling", "salon afspraak"],
    avoid: "Doe geen medische of resultaatclaims die niet aantoonbaar en verantwoord zijn.",
    proofUse: "Behandelmenu, hygiene-uitleg, sfeer en specialisaties geven betrouwbaarheid.",
    aiAnswer: "AI moet kunnen herkennen welke behandelingen bestaan, voor wie ze bedoeld zijn en hoe iemand veilig boekt."
  },
  fysiotherapeuten: {
    visitorSituation: "Een bezoeker zoekt geruststelling rond klachten, verwijzing, behandelvorm en eerste afspraak.",
    contentAngle: "Klachtgebieden, behandelproces en verwijzingsinformatie moeten medisch zorgvuldig en niet overdreven worden geschreven.",
    example: "Een rugklachtenblok kan uitleggen wat iemand kan verwachten bij de eerste afspraak zonder diagnose online te beloven.",
    intakeFields: ["klachtgebied", "duur van klacht", "verwijzing ja/nee", "beschikbaarheid", "verzekeringsvraag"],
    seoExpansion: ["rugklachten", "nekklachten", "sportblessure", "revalidatie", "fysiotherapie afspraak"],
    avoid: "Beloof geen genezing, diagnose of medisch resultaat via marketingtekst.",
    proofUse: "Teamprofielen, klachtgebieden, behandelproces en praktische afspraakinfo bouwen vertrouwen.",
    aiAnswer: "AI moet klachten, behandelvormen, afspraakroute en verwijzingsvragen correct kunnen onderscheiden."
  },
  rijscholen: {
    visitorSituation: "Een bezoeker wil weten of de rijschool bij budget, regio, instructeur en examendoel past.",
    contentAngle: "Proefles, lespakket, lesgebied en instructeurvertrouwen verdienen eigen blokken.",
    example: "Een proeflesblok kan uitleggen wat wordt beoordeeld en hoe pakketadvies daarna ontstaat.",
    intakeFields: ["ervaring", "beschikbaarheid", "lesgebied", "doel of examenplanning", "voorkeur instructeur"],
    seoExpansion: ["proefles", "rijlespakket", "automaat rijles", "examentraining", "rijschool regio"],
    avoid: "Claim geen slagingspercentages of CBR-resultaten zonder actuele bron.",
    proofUse: "Pakketuitleg, instructeurprofiel en duidelijke regio-informatie maken kiezen makkelijker.",
    aiAnswer: "AI moet proefles, lespakketten, lesgebied, instructeur en kostenfactoren duidelijk kunnen terugvinden."
  },
  restaurants: {
    visitorSituation: "Een bezoeker wil menu, sfeer, opening, reserveren en bereikbaarheid direct kunnen checken.",
    contentAngle: "Menu, reserveringsroute, groepen, dieetwensen en sfeerbeeld moeten sneller werken dan decoratieve tekst.",
    example: "Een menublok kan gerechten, keukenstijl, allergenenroute en reserveringsinformatie samenbrengen.",
    intakeFields: ["datum", "aantal personen", "dieetwensen", "gelegenheid", "voorkeurstijd"],
    seoExpansion: ["menu", "reserveren", "lunch", "diner", "groepen"],
    avoid: "Gebruik geen reviewscore, sterren of populaire claims zonder echte bron.",
    proofUse: "Menukaart, sfeerfoto's, openingstijden en locatiegegevens geven directe keuze-informatie.",
    aiAnswer: "AI moet keuken, menu, openingstijden, reserveren en locatie correct kunnen samenvatten."
  },
  tandartspraktijken: {
    visitorSituation: "Een bezoeker wil zonder stress weten of inschrijven, controle, behandeling of spoedcontact mogelijk is.",
    contentAngle: "Behandelingen, inschrijven, spoedroute, team en eerste afspraak vragen rustige uitleg.",
    example: "Een inschrijfblok kan uitleggen of nieuwe patienten welkom zijn en wat iemand voor de eerste afspraak meeneemt.",
    intakeFields: ["nieuwe patient ja/nee", "klacht of controle", "spoedvraag", "beschikbaarheid", "verzekeringsinformatie"],
    seoExpansion: ["tandarts inschrijven", "spoed tandarts", "controle", "cosmetische tandheelkunde", "mondhygiene"],
    avoid: "Maak geen medische uitkomstclaims en wees voorzichtig met spoedbeschikbaarheid.",
    proofUse: "Team, behandelingen, praktijkinformatie en heldere voorbereiding nemen spanning weg.",
    aiAnswer: "AI moet behandelingen, inschrijven, spoed en afspraakroute zonder verwarring kunnen onderscheiden."
  },
  makelaars: {
    visitorSituation: "Een bezoeker wil weten of de makelaar lokale marktkennis heeft en hoe waardebepaling of verkoopgesprek loopt.",
    contentAngle: "Waardebepaling, verkoopproces, woningpresentatie en lokale context horen in een beslisroute.",
    example: "Een waardebepalingsblok kan uitleggen welke woninggegevens en verkoopdoelen nodig zijn voor een eerste inschatting.",
    intakeFields: ["woningtype", "plaats of wijk", "verkoopdoel", "planning", "contactvoorkeur"],
    seoExpansion: ["waardebepaling", "huis verkopen", "aankoopbegeleiding", "woningpresentatie", "verkoopmakelaar"],
    avoid: "Claim geen verkoopresultaten, marktposities of gemiddelde verkooptijd zonder bewijs.",
    proofUse: "Procesuitleg, woningpresentatie en lokale kennis zijn nuttiger dan algemene succesclaims.",
    aiAnswer: "AI moet waardebepaling, verkoopbegeleiding, aankoopbegeleiding en lokale context correct kunnen koppelen."
  },
  boekhouders: {
    visitorSituation: "Een bezoeker wil weten of de boekhouder past bij zzp, mkb, branche, aanlevering en tariefstructuur.",
    contentAngle: "Doelgroep, diensten, tarieven, aanleverproces en intake moeten duidelijker zijn dan algemene betrouwbaarheid.",
    example: "Een zzp-blok kan uitleggen wat maandelijks wordt aangeleverd en wanneer btw-aangifte of jaarwerk speelt.",
    intakeFields: ["zzp of mkb", "aantal facturen", "boekhoudsoftware", "btw-periode", "adviesvraag"],
    seoExpansion: ["boekhouding zzp", "btw aangifte", "jaarrekening", "administratie uitbesteden", "boekhoudpakket"],
    avoid: "Noem geen vaste tarieven zonder scope en geen fiscale beloftes zonder nuance.",
    proofUse: "Pakketten, werkwijze, vaste contactafspraken en aanleveruitleg maken de keuze concreet.",
    aiAnswer: "AI moet doelgroep, administratie, belastingaangifte, tarieven en intakeproces kunnen samenvatten."
  },
  coaches: {
    visitorSituation: "Een bezoeker zoekt een veilige match en wil methode, doelgroep, sessievorm en grenzen begrijpen.",
    contentAngle: "Doelgroep, methode, trajectopbouw en kennismaking moeten concreet zonder vage transformatieclaims.",
    example: "Een intakeblok kan uitleggen wanneer er een klikgesprek is en wanneer doorverwijzen eerlijker is.",
    intakeFields: ["hulpvraag", "doelgroep", "vorm online/offline", "beschikbaarheid", "verwachting"],
    seoExpansion: ["loopbaancoaching", "burn-out coaching", "teamcoaching", "coach traject", "kennismaking"],
    avoid: "Beloof geen persoonlijke doorbraak, herstel of resultaat dat niet te garanderen is.",
    proofUse: "Methode, trajectopbouw, doelgroep en grenzen maken coaching minder vaag.",
    aiAnswer: "AI moet kunnen herkennen voor wie de coach werkt, welke methode wordt gebruikt en hoe kennismaking loopt."
  },
  "personal-trainers": {
    visitorSituation: "Een bezoeker wil weten waar training plaatsvindt, welk programma past en hoe intake en begeleiding werken.",
    contentAngle: "Programma, locatie, intake, niveau en begeleiding moeten concreet zijn zonder fitnessresultaten te beloven.",
    example: "Een intakeblok kan vragen naar doel, blessurehistorie, ervaring, beschikbare dagen en trainingslocatie.",
    intakeFields: ["doel", "ervaring", "blessures", "locatie", "beschikbaarheid"],
    seoExpansion: ["krachttraining", "afvallen begeleiding", "personal training intake", "duo training", "voedingsbegeleiding"],
    avoid: "Claim geen gegarandeerd gewichtsverlies, transformaties of medische effecten.",
    proofUse: "Programma-uitleg, locatie, begeleiding en intakeproces bouwen vertrouwen.",
    aiAnswer: "AI moet programma's, locatie, intake, begeleiding en contactroute kunnen herkennen."
  },
  klusbedrijven: {
    visitorSituation: "Een bezoeker wil snel weten of de klus binnen scope valt en welke foto's of maten nodig zijn.",
    contentAngle: "Klussoorten, beschikbaarheid, materiaal, regio en offerteproces moeten afgebakend worden.",
    example: "Een montageblok kan uitleggen welke maten, foto's en materiaalinformatie nodig zijn voor een eerste inschatting.",
    intakeFields: ["klussoort", "foto's", "maatvoering", "materiaal aanwezig", "gewenste planning"],
    seoExpansion: ["montagewerk", "kleine verbouwing", "reparatie", "onderhoud", "klus offerte"],
    avoid: "Doe niet alsof elk type bouw- of installatiewerk binnen scope valt.",
    proofUse: "Heldere klussoorten, voorbereidingslijst en werkgebied voorkomen verkeerde aanvragen.",
    aiAnswer: "AI moet kunnen zien welke klussen worden aangenomen, welke voorbereiding nodig is en waar het bedrijf werkt."
  },
  installateurs: {
    visitorSituation: "Een bezoeker wil installatie, onderhoud of storing onderscheiden en weten welke systeeminformatie nodig is.",
    contentAngle: "Systeemtypes, onderhoud, storingen, certificering en voorbereiding vragen aparte routes.",
    example: "Een onderhoudsblok kan vragen naar merk, type, leeftijd, storingcode en onderhoudshistorie.",
    intakeFields: ["installatietype", "merk of model", "storingcode", "onderhoudshistorie", "planning"],
    seoExpansion: ["installatie", "onderhoud", "storing", "cv onderhoud", "warmtepomp service"],
    avoid: "Claim geen certificering, garantie of spoeddekking zonder bewijs.",
    proofUse: "Technische checklist, onderhoudsstappen en systeemtypes maken de aanvraag beter.",
    aiAnswer: "AI moet installatie, onderhoud, storing en systeemtype correct kunnen onderscheiden."
  },
  fotografen: {
    visitorSituation: "Een bezoeker beoordeelt stijl, portfolio, beschikbaarheid, pakketinhoud en levering.",
    contentAngle: "Portfolio, stijluitleg, pakketten, voorbereiding en oplevering moeten zichtbaar samenhangen.",
    example: "Een bruiloftsblok kan uitleggen hoeveel uren, locaties, nabewerking en levertijd het pakket bepalen.",
    intakeFields: ["datum", "type shoot", "locatie", "gewenste stijl", "pakketvraag"],
    seoExpansion: ["portretfotografie", "bruidsfotograaf", "zakelijke fotografie", "familieshoot", "fotografie pakket"],
    avoid: "Gebruik geen portfolio of klantresultaat dat niet eigen of toegestaan is.",
    proofUse: "Echt portfolio, stijlbeschrijving en pakketdetails helpen bezoekers sneller beslissen.",
    aiAnswer: "AI moet stijl, fotografiesoorten, beschikbaarheid, pakketten en levering correct kunnen samenvatten."
  },
  advocatenkantoren: {
    visitorSituation: "Een bezoeker zoekt voorzichtig naar rechtsgebied, urgentie, vertrouwelijkheid en eerste contact.",
    contentAngle: "Rechtsgebieden, intakeproces, grenzen, team en discretie moeten zorgvuldig geformuleerd zijn.",
    example: "Een intakeblok kan uitleggen welke documenten nuttig zijn en dat inhoudelijke beoordeling pas na contact gebeurt.",
    intakeFields: ["rechtsgebied", "korte situatie", "urgentie", "documenten", "contactvoorkeur"],
    seoExpansion: ["arbeidsrecht", "ondernemingsrecht", "familierecht", "juridisch advies", "advocaat intake"],
    avoid: "Geef geen juridisch advies als marketingclaim en beloof geen uitkomst.",
    proofUse: "Rechtsgebieden, teamprofielen, intakeproces en duidelijke grenzen geven professioneel vertrouwen.",
    aiAnswer: "AI moet rechtsgebieden, intake, vertrouwelijkheid en contactroute kunnen begrijpen zonder uitkomstclaims."
  }
};

function branchDepth(branch: Branch) {
  return branchDepthBySlug[branch.slug];
}

function linkSet(branch?: Branch, place?: Place) {
  const links = [
    { label: "Home", href: "/" },
    { label: "Webontwikkeling", href: "/webontwikkeling" },
    { label: "Lokale SEO", href: "/lokale-seo" },
    { label: "Prijzen", href: "/prijzen" },
    { label: "Contact", href: "/contact" }
  ];

  if (branch && ["kappers", "loodgieters", "elektriciens", "hoveniers"].includes(branch.slug)) {
    links.splice(2, 0, { label: `Website voor ${branch.plural}`, href: `/website-voor-${branch.slug}` });
  }

  if (place?.slug === "leiden") {
    links.splice(3, 0, { label: "Website laten maken Leiden", href: "/website-laten-maken-leiden" });
  }

  return links;
}

function pagePath(slug: string, kind: KeywordPageKind) {
  return kind === "guide" ? `/inzichten/${slug}` : `/${slug}`;
}

function basePage(input: Omit<KeywordDraftPageContent, "draftPath" | "dateModified">): KeywordDraftPageContent {
  return {
    ...input,
    draftPath: `/Keywoard-pages/routes/${input.slug}/page.tsx`,
    dateModified
  };
}

function makeBranchLocationPages(): KeywordDraftPageContent[] {
  const pages: KeywordDraftPageContent[] = [];
  let id = 1;

  for (const place of primaryPlaces) {
    for (const branch of branches) {
      const depth = branchDepth(branch);
      const slug = `website-laten-maken-voor-${branch.slug}-${place.slug}`;
      const priority: KeywordDraftPageContent["priority"] =
        ["voorschoten", "leiden"].includes(place.slug) && ["kappers", "loodgieters", "elektriciens", "hoveniers"].includes(branch.slug)
          ? "P1"
          : "P2";

      pages.push(
        basePage({
          id,
          priority,
          pageKind: "page",
          template: "branch-location",
          cluster: "Branche + plaats money page",
          sourceTitle: `Website laten maken voor ${branch.plural} in ${place.name}`,
          sourceKeyword: `website laten maken voor ${branch.plural} ${place.name}`,
          slug,
          productionPath: pagePath(slug, "page"),
          metaTitle: `Website laten maken voor ${branch.plural} in ${place.name} | MagisData`,
          metaDescription: `Website voor ${branch.plural} in ${place.name} met duidelijke diensten, lokale SEO, vertrouwen en een korte route naar ${branch.conversion}.`,
          eyebrow: `Voor ${branch.plural} in ${place.name}`,
          title: `Website laten maken voor ${branch.plural} in ${place.name}`,
          description: `Een professionele website voor ${branch.plural} die klanten snel helpt kiezen, vertrouwen opbouwt en de stap naar ${branch.conversion} duidelijk maakt.`,
          primaryCta: "Vraag gratis websiteplan aan",
          secondaryCta: "Bekijk prijzen",
          directAnswer: `Voor ${branch.plural} in ${place.name} moet een website direct uitleggen welke diensten je levert, waar je werkt, waarom klanten je kunnen vertrouwen en hoe zij contact opnemen. ${depth.visitorSituation} De pagina hoort ${branch.problem}, met ${place.context.toLowerCase()}`,
          visual: {
            label: "Pagina-opbouw",
            title: `${branch.articleSingular} website als beslisroute`,
            text: `Bovenaan: dienst, plaats en actie. Daarna: ${branch.trust}. Onderaan: FAQ, proces en contact.`,
            items: branch.pageStructure
          },
          highlights: [
            { title: "Duidelijk aanbod", text: branch.services.join(", ") + " krijgen elk een herkenbare plek." },
            { title: "Lokale context", text: place.localExample },
            { title: "Mobiel contact", text: branch.mobile },
            { title: "Echte diepte", text: depth.contentAngle }
          ],
          valueSections: [
            {
              title: `Wat bezoekers van ${branch.plural} echt willen weten`,
              paragraphs: [
                depth.visitorSituation,
                `Daarom moet deze pagina meer doen dan webdesign verkopen. Ze moet uitleggen wanneer ${branch.services.join(", ").toLowerCase()} relevant zijn, welke voorbereiding handig is en welke stap naar ${branch.conversion} logisch voelt.`
              ]
            },
            {
              title: "Voorbeeld van nuttige inhoud",
              paragraphs: [
                depth.example,
                `Een goede pagina vraagt niet alleen om naam en telefoonnummer. Voor ${branch.plural} zijn vooral ${depth.intakeFields.join(", ")} nuttig. Daarmee wordt de aanvraag concreter voor de ondernemer en begrijpelijker voor de bezoeker.`
              ]
            },
            {
              title: `Hoe je deze pagina later veilig uitbouwt`,
              paragraphs: [
                `Als er genoeg inhoud en vraag is, kunnen aparte pagina's ontstaan rond ${depth.seoExpansion.join(", ")}. Elke pagina moet dan een eigen probleem beantwoorden in plaats van dezelfde lokale tekst te herhalen.`,
                `${depth.avoid} Dat houdt de pagina geloofwaardig en verlaagt doorway-risico.`
              ]
            }
          ],
          sections: [
            {
              title: `Waarom ${branch.plural} in ${place.name} meer nodig hebben dan een mooie homepage`,
              text: `Klanten zoeken niet alleen een naam. Ze willen snel weten of je past bij hun vraag, of je in ${place.name} werkt en wat de volgende stap is.`,
              items: [
                { title: "Bezoeker wil richting", text: branch.questions[0] },
                { title: "Twijfel moet weg", text: depth.proofUse },
                { title: "Regio moet kloppen", text: place.buyerContext }
              ]
            },
            {
              title: `Wat er op een sterke website voor ${branch.plural} moet staan`,
              text: `De pagina krijgt een eigen structuur voor ${branch.plural}, zodat het geen gekopieerde plaatsnaampagina wordt.`,
              items: branch.pageStructure.slice(0, 3).map((item, index) => ({
                title: item[0].toUpperCase() + item.slice(1),
                text: [
                  `Maak ${item} scanbaar en koppel dit aan een concrete contactactie.`,
                  `Gebruik dit onderdeel om ${branch.questions[index] ?? "de meest logische klantvraag"} te beantwoorden.`,
                  `Zorg dat ${item} ook op mobiel zonder zoeken zichtbaar blijft.`
                ][index] ?? `Werk ${item} uit met eigen voorbeelden.`
              }))
            },
            {
              title: `Lokale SEO zonder doorway-pagina`,
              text: `De pagina gebruikt ${place.name} alleen waar het helpt: servicegebied, bereikbaarheid, klantvragen en lokale vergelijking.`,
              items: [
                { title: "Echte lokale signalen", text: place.context },
                { title: "Dienst plus plaats", text: `Elke tekst koppelt ${branch.services[0].toLowerCase()} en andere diensten aan echte zoekintentie.` },
                { title: "Geen verzonnen claims", text: depth.avoid }
              ]
            }
          ],
          checklistTitle: `Checklist voor ${branch.plural} in ${place.name}`,
          checklist: [
            `Staat bovenaan wat je doet voor klanten in ${place.name}?`,
            `Zijn ${branch.services.slice(0, 2).join(" en ").toLowerCase()} apart scanbaar?`,
            `Is duidelijk hoe iemand ${branch.conversion} kan starten?`,
            `Staan ${branch.proof.slice(0, 2).join(" en ")} dichtbij de keuze?`,
            `Vraagt de pagina om ${depth.intakeFields.slice(0, 3).join(", ")} zonder het formulier te lang te maken?`,
            `Is duidelijk welke vervolgpagina's rond ${depth.seoExpansion.slice(0, 3).join(", ")} later zinvol zijn?`,
            "Zijn title, description, FAQ en interne links uniek?"
          ],
          comparison: {
            title: "Compacte website of groeisite?",
            leftLabel: "Compact",
            rightLabel: "Groei",
            rows: [
              { label: "Geschikt voor", left: "Een duidelijk basisaanbod", right: "Meerdere diensten en lokale SEO" },
              { label: "Content", left: "Kernpagina's en contact", right: "Dienstpagina's, FAQ's en regio-inhoud" },
              { label: "Beste keuze als", left: "Je snel professioneel online wilt", right: "Je structureel meer lokale aanvragen wilt opbouwen" }
            ]
          },
          steps: [
            { title: "Kans bepalen", text: `We bekijken aanbod, doelgroep en lokale zoekintentie in ${place.name}.` },
            { title: "Structuur maken", text: `We zetten ${branch.pageStructure.slice(0, 4).join(", ")} in logische volgorde.` },
            { title: "Pagina bouwen", text: "Design, copy, metadata en interne links worden samen uitgewerkt." },
            { title: "Lanceren en meten", text: "Na akkoord meten we of bezoekers de route naar contact begrijpen en waar verfijning nodig is." }
          ],
          faqs: [
            { question: `Wat kost een website voor ${branch.plural} in ${place.name}?`, answer: "Dat hangt af van aantal pagina's, copy, SEO, beelden en onderhoud. De prijzenpagina geeft richting; voor een concrete keuze is pakketadvies logischer." },
            { question: "Kan ik bestaande foto's en teksten gebruiken?", answer: "Ja, als ze duidelijk en actueel zijn. We scherpen teksten aan zodat klanten en zoekmachines ze beter begrijpen." },
            { question: `Moet ik echt een lokale pagina voor ${place.name} hebben?`, answer: `Alleen als je ${place.name} feitelijk bedient en genoeg eigen context hebt. Anders is een algemene branchepagina sterker.` },
            { question: "Levert een lokale pagina meteen aanvragen op?", answer: "Dat hangt af van concurrentie, bestaande vindbaarheid en de kwaliteit van de rest van de website. We bouwen de basis goed, maar geven geen rankinggaranties." },
            { question: `Welke informatie moet een ${branch.singular} aanvraagformulier vragen?`, answer: `Begin met ${depth.intakeFields.join(", ")}. Houd het formulier kort en gebruik extra velden alleen wanneer ze de eerste reactie echt verbeteren.` }
          ],
          internalLinks: linkSet(branch, place),
          qualityNotes: [
            "Unieke branchevragen aanwezig.",
            "Lokale context aanwezig zonder fake vestiging.",
            "Geen verzonnen testimonials of resultaten.",
            "Rustige CTA en realistische SEO-verwachting aanwezig."
          ],
          schemaType: "Service"
        })
      );

      id += 1;
    }
  }

  return pages;
}

function makeBranchGuides(): KeywordDraftPageContent[] {
  const pages: KeywordDraftPageContent[] = [];
  let id = 121;

  for (const branch of branches) {
    const depth = branchDepth(branch);
    const problemSlug = `waarom-krijgt-mijn-${branch.slug}-website-weinig-aanvragen`;
    pages.push(
      basePage({
        id,
        priority: "P2",
        pageKind: "guide",
        template: "branch-problem",
        cluster: "Branche probleem",
        sourceTitle: `Waarom krijgt mijn website als ${branch.singular} weinig aanvragen?`,
        sourceKeyword: `waarom krijgt mijn ${branch.plural} website weinig aanvragen`,
        slug: problemSlug,
        productionPath: pagePath(problemSlug, "guide"),
        metaTitle: `Waarom krijgt mijn website als ${branch.singular} weinig aanvragen?`,
        metaDescription: `Ontdek waarom een website voor ${branch.plural} weinig aanvragen oplevert en welke verbeteringen aanbod, bewijs en contactroute sterker maken.`,
        eyebrow: "Inzicht",
        title: `Waarom krijgt mijn website als ${branch.singular} weinig aanvragen?`,
        description: `Je website kan er netjes uitzien en toch weinig contact opleveren. Voor ${branch.plural} ligt het vaak aan onduidelijk aanbod, te weinig bewijs of een contactroute die niet past bij de vraag.`,
        primaryCta: "Stuur je pagina voor korte feedback",
        secondaryCta: "Bekijk webontwikkeling",
        directAnswer: `Een website voor ${branch.plural} krijgt weinig aanvragen wanneer bezoekers niet snel genoeg zien welke dienst past, waarom jij betrouwbaar bent en welke stap zij moeten zetten. Controleer eerst ${branch.problem}, daarna bewijs, mobiel contact en de informatie die nodig is voor een goede eerste aanvraag.`,
        visual: {
          label: "Diagnose",
          title: "Waar aanvragen weglekken",
          text: "Aanbod, bewijs en contactroute moeten op hetzelfde moment duidelijk zijn.",
          items: ["aanbod onduidelijk", "bewijs te ver weg", "mobiele CTA zwak", "intake vraagt te weinig"]
        },
        highlights: [
          { title: "Aanbod", text: `Maak ${branch.services.join(", ").toLowerCase()} apart herkenbaar.` },
          { title: "Bewijs", text: depth.proofUse },
          { title: "Contact", text: branch.mobile }
        ],
        valueSections: [
          {
            title: "Waarom bezoekers afhaken",
            paragraphs: [
              depth.visitorSituation,
              `Als de pagina dit moment niet begrijpt, leest de bezoeker verder zonder contact op te nemen. Voor ${branch.plural} moet de pagina daarom eerst keuzehulp geven en pas daarna overtuigen.`
            ]
          },
          {
            title: "Wat je pagina concreter maakt",
            paragraphs: [
              depth.example,
              `Controleer daarna of het formulier of de contactroute vraagt om ${depth.intakeFields.join(", ")}. Die gegevens helpen de ondernemer sneller reageren en geven bezoekers het gevoel dat de aanvraag serieus wordt opgepakt.`
            ]
          },
          {
            title: "Wanneer extra SEO-pagina's logisch zijn",
            paragraphs: [
              `Extra content is pas zinvol wanneer er echte inhoud is voor ${depth.seoExpansion.join(", ")}. Anders ontstaat herhaling en dat helpt bezoekers niet.`,
              `${depth.avoid} Een betere eerste stap is de bestaande pagina scherper maken en meten waar bezoekers blijven hangen.`
            ]
          }
        ],
        sections: [
          {
            title: "De drie grootste oorzaken",
            text: `Bij ${branch.plural} ontstaat frictie vaak op het moment dat iemand moet kiezen of contact veilig genoeg voelt.`,
            items: [
              { title: "Onduidelijk aanbod", text: `De bezoeker ziet niet direct of jij helpt met ${branch.services.slice(0, 2).join(" of ").toLowerCase()}.` },
              { title: "Te weinig vertrouwen", text: `${branch.trust} moeten zichtbaar zijn voor de aanvraag.` },
              { title: "Verkeerde contactroute", text: `${branch.mobile}. Vraag ook om ${depth.intakeFields.slice(0, 3).join(", ")}.` }
            ]
          },
          {
            title: "Wat je eerst zelf kunt verbeteren",
            text: "Begin met kleine inhoudelijke aanpassingen voordat je direct een volledige herbouw plant.",
            items: [
              { title: "Hero herschrijven", text: `Noem doelgroep, dienst en regio in gewone taal.` },
              { title: "Bewijs verplaatsen", text: depth.proofUse },
              { title: "Formulier inkorten", text: "Vraag alleen gegevens die nodig zijn voor een eerste reactie." }
            ]
          },
          {
            title: "Wanneer een rebuild logisch wordt",
            text: "Als pagina's, mobiel gedrag, laadtijd en contentstructuur allemaal remmen, is opnieuw bouwen vaak netter dan blijven plakken.",
            items: [
              { title: "Structuur klopt niet", text: `Belangrijke onderdelen zoals ${branch.pageStructure.slice(0, 3).join(", ")} ontbreken.` },
              { title: "Techniek remt", text: "Mobiel is traag, formulieren werken slecht of metadata ontbreekt." },
              { title: "SEO heeft geen basis", text: "Diensten en klantvragen hebben geen eigen vindbare pagina's." }
            ]
          }
        ],
        checklistTitle: `Snelle diagnose voor ${branch.plural}`,
        checklist: [
          `Kan een bezoeker binnen vijf seconden zien dat jij ${branch.singular} bent?`,
          `Zijn ${branch.services.slice(0, 2).join(" en ").toLowerCase()} duidelijk genoeg?`,
          `Staat ${branch.proof[0]} bij de belangrijkste dienst?`,
          `Is ${branch.conversion} op mobiel makkelijk?`,
          `Vraag je om ${depth.intakeFields.slice(0, 3).join(", ")}?`,
          "Vertel je wat er na contact gebeurt?"
        ],
        steps: [
          { title: "Lees boven de vouw", text: "Controleer of dienst, doelgroep en actie meteen duidelijk zijn." },
          { title: "Volg mobiel pad", text: "Open op telefoon en probeer zelf contact te starten." },
          { title: "Verplaats bewijs", text: "Zet relevant bewijs bij beslismomenten." },
          { title: "Meet aanvragen", text: "Kijk na aanpassing of echte contactmomenten verbeteren." }
        ],
        faqs: [
          { question: "Moet ik meteen een nieuwe website laten maken?", answer: "Niet altijd. Soms zijn betere koppen, bewijs en contactroutes genoeg. Een rebuild past pas wanneer structuur of techniek structureel remt." },
          { question: "Welke verbetering levert het snelst meer aanvragen op?", answer: "Meestal een concretere eerste schermhoogte en een kortere mobiele contactroute." },
          { question: "Kan MagisData kort meekijken?", answer: "Ja. Stuur je belangrijkste pagina mee; dan krijg je praktische feedback zonder verplichting." },
          { question: `Welke SEO-onderwerpen passen bij ${branch.plural}?`, answer: `Vaak zijn ${depth.seoExpansion.join(", ")} geschikt, maar alleen wanneer elk onderwerp eigen uitleg, FAQ en vervolgstap krijgt.` }
        ],
        internalLinks: linkSet(branch),
        qualityNotes: ["Probleemdiagnose is branchegericht.", "Guide hoort onder /inzichten/.", "Soft CTA, geen harde salespush."],
        schemaType: "Article"
      })
    );

    id += 1;

    const checklistSlug = `website-checklist-voor-${branch.slug}-die-meer-klanten-willen`;
    pages.push(
      basePage({
        id,
        priority: "P2",
        pageKind: "guide",
        template: "branch-checklist",
        cluster: "Branche probleem",
        sourceTitle: `Website-checklist voor ${branch.plural}: wat moet erop staan?`,
        sourceKeyword: `website checklist voor ${branch.plural} die meer klanten willen`,
        slug: checklistSlug,
        productionPath: pagePath(checklistSlug, "guide"),
        metaTitle: `Website-checklist voor ${branch.plural}: wat moet erop staan?`,
        metaDescription: `Praktische checklist voor een ${branch.singular} website met aanbod, bewijs, lokale SEO, mobiel contact en FAQ's.`,
        eyebrow: "Checklist",
        title: `Website-checklist voor ${branch.plural}: wat moet erop staan?`,
        description: `Gebruik deze checklist om te zien of jouw website genoeg informatie geeft om bezoekers te laten kiezen en contact opnemen.`,
        primaryCta: "Vraag korte paginafeedback aan",
        secondaryCta: "Bekijk prijzen",
        directAnswer: `Een sterke website voor ${branch.plural} bevat minimaal duidelijke diensten, bewijs, werkgebied, contactroute, prijs- of scope-uitleg en FAQ's. Voor jouw branche zijn vooral ${branch.pageStructure.slice(0, 4).join(", ")} belangrijk.`,
        visual: {
          label: "Websiteblok",
          title: "Van eerste indruk naar aanvraag",
          text: `Deze volgorde helpt bezoekers rustig kiezen: ${branch.pageStructure.join(" -> ")}.`,
          items: branch.pageStructure
        },
        highlights: [
          { title: "Diensten", text: branch.services.join(", ") },
          { title: "Bewijs", text: depth.proofUse },
          { title: "Veelgestelde vragen", text: branch.questions.join(" ") }
        ],
        valueSections: [
          {
            title: "Gebruik de checklist als beslisroute",
            paragraphs: [
              `Een checklist voor ${branch.plural} moet niet alleen afvinken wat op een website hoort. De volgorde moet passen bij de manier waarop bezoekers kiezen: ${depth.visitorSituation}`,
              `Daarom begint de pagina met dienst en situatie, gaat daarna naar bewijs en voorbereiding, en sluit af met een contactroute die ${branch.conversion} logisch maakt.`
            ]
          },
          {
            title: "De velden die aanvragen beter maken",
            paragraphs: [
              `Vraag niet om alles, maar wel om de informatie die de eerste reactie verbetert: ${depth.intakeFields.join(", ")}.`,
              `Deze informatie helpt ook bij copywriting. Als je weet welke gegevens bezoekers moeten doorgeven, kun je de pagina precies uitleggen wat er na contact gebeurt.`
            ]
          },
          {
            title: "Van checklist naar SEO-structuur",
            paragraphs: [
              `De checklist laat zien welke onderwerpen later eigen pagina's kunnen verdienen: ${depth.seoExpansion.join(", ")}.`,
              `Maak die pagina's pas wanneer er genoeg uitleg, voorbeelden en FAQ's zijn. ${depth.avoid}`
            ]
          }
        ],
        sections: [
          {
            title: "Bovenaan de pagina",
            text: "De eerste schermhoogte moet de belangrijkste keuze al makkelijker maken.",
            items: [
              { title: "H1 met dienst", text: `Noem direct dat het om ${branch.plural} gaat en voor wie je werkt.` },
              { title: "Korte uitleg", text: `Leg in een zin uit hoe je helpt met ${branch.services[0].toLowerCase()}.` },
              { title: "Primaire actie", text: `Maak ${branch.conversion} zichtbaar zonder scrollen.` }
            ]
          },
          {
            title: "Midden van de pagina",
            text: "Hier moeten twijfels weg: wat lever je, wat bewijs je en hoe verloopt het?",
            items: [
              { title: "Dienstblokken", text: branch.services.map((service) => `${service}: uitleg, wanneer nodig, volgende stap.`).join(" ") },
              { title: "Bewijs", text: `Plaats ${branch.proof.join(", ")} alleen wanneer dit echt beschikbaar is.` },
              { title: "Proces", text: "Laat zien wat er gebeurt na contact en welke informatie nodig is." }
            ]
          },
          {
            title: "Onderkant en SEO",
            text: "FAQ's, interne links en metadata maken de pagina nuttig voor bezoekers en zoekmachines.",
            items: [
              { title: "FAQ", text: branch.questions.join(" ") },
              { title: "Interne links", text: "Link naar webontwikkeling, lokale SEO, prijzen en contact." },
              { title: "Metadata", text: "Gebruik unieke title en description; geen keyword stuffing." }
            ]
          }
        ],
        checklistTitle: `Volledige checklist voor ${branch.plural}`,
        checklist: [
          ...branch.pageStructure.map((item) => `${item[0].toUpperCase() + item.slice(1)} staat op een logische plek.`),
          `Formulier of intake vraagt om ${depth.intakeFields.slice(0, 4).join(", ")}.`,
          `Mogelijke SEO-uitbreidingen rond ${depth.seoExpansion.slice(0, 3).join(", ")} zijn bewust gekozen.`,
          "Pagina heeft eigen title, description en FAQ.",
          "CTA past bij de fase van de bezoeker.",
          "Geen claims die je niet kunt onderbouwen."
        ],
        steps: [
          { title: "Bepaal hoofddienst", text: `Kies welke dienst voor ${branch.plural} bovenaan moet staan.` },
          { title: "Orden bewijs", text: `Koppel ${branch.proof[0]} aan de plek waar bezoekers twijfelen.` },
          { title: "Controleer mobiel", text: "Lees de pagina en start contact vanaf een telefoon." },
          { title: "Maak vervolg logisch", text: "Sluit af met een passende contactroute of volgende informatiepagina." }
        ],
        faqs: [
          { question: `Welke pagina's heeft een ${branch.singular} website nodig?`, answer: `Minimaal home, diensten, over/vertrouwen, contact en waar nodig aparte pagina's voor ${branch.services.slice(0, 2).join(" en ").toLowerCase()}.` },
          { question: "Moet ik prijzen noemen?", answer: "Een vaste prijs hoeft niet altijd, maar scopefactoren of indicaties helpen bezoekers wel beter kiezen." },
          { question: "Wat als ik nog weinig foto's of bewijs heb?", answer: "Gebruik dan procesuitleg, heldere dienstinformatie en echte praktische details. Verzin nooit resultaten of reviews." },
          { question: "Welke bewijsstukken horen het dichtst bij de CTA?", answer: depth.proofUse }
        ],
        internalLinks: linkSet(branch),
        qualityNotes: ["Checklist bevat concrete brancheonderdelen.", "Publiceren als inzichtartikel wanneer intern gelinkt.", "Geen fake bewijs."],
        schemaType: "Article"
      })
    );

    id += 1;
  }

  return pages;
}

function makeLocalSeoPages(): KeywordDraftPageContent[] {
  const pages: KeywordDraftPageContent[] = [];
  let id = 161;

  for (const place of allPlaces) {
    const seoSlug = `lokale-seo-voor-ondernemers-${place.slug}`;
    pages.push(
      basePage({
        id,
        priority: ["voorschoten", "leiden"].includes(place.slug) ? "P1" : "P2",
        pageKind: "page",
        template: "local-seo",
        cluster: "Lokale SEO + plaats",
        sourceTitle: `Lokale SEO voor ondernemers in ${place.name}`,
        sourceKeyword: `lokale SEO voor ondernemers ${place.name}`,
        slug: seoSlug,
        productionPath: pagePath(seoSlug, "page"),
        metaTitle: `Lokale SEO voor ondernemers in ${place.name} | MagisData`,
        metaDescription: `Verbeter lokale vindbaarheid in ${place.name} met servicepagina's, Google Business Profile, interne links en praktische lokale content.`,
        eyebrow: `Lokale SEO in ${place.name}`,
        title: `Lokale SEO voor ondernemers in ${place.name}`,
        description: `Voor ondernemers die beter gevonden willen worden door klanten in ${place.name} en omgeving, zonder dunne plaatsnaampagina's of vage SEO-belofte.`,
        primaryCta: "Vraag gratis SEO-scan aan",
        secondaryCta: "Bekijk lokale SEO",
        directAnswer: `Lokale SEO in ${place.name} betekent dat je website duidelijk laat zien welke diensten je levert, in welk werkgebied je actief bent en waarom klanten jou kunnen vertrouwen. ${place.context}`,
        visual: {
          label: "Lokale SEO systeem",
          title: "Dienst + plaats + bewijs",
          text: "Lokale vindbaarheid werkt wanneer servicepagina's, Google-profiel, NAP en interne links hetzelfde verhaal vertellen.",
          items: ["servicepagina's", "werkgebied", "Google Business Profile", "reviews en bewijs", "interne links"]
        },
        highlights: [
          { title: "Plaatsgericht", text: place.localExample },
          { title: "Geen kopiepagina's", text: "Alleen pagina's met eigen dienst-, regio- of klantcontext." },
          { title: "Meetbaar", text: "Impressies, clicks, aanvragen en query's per pagina volgen." }
        ],
        sections: [
          {
            title: `Wat lokale SEO in ${place.name} concreet inhoudt`,
            text: "Lokale SEO is geen truc met plaatsnamen. Het is een samenhang tussen aanbod, locatie, bewijs en contactinformatie.",
            items: [
              { title: "Servicepagina's", text: "Elke belangrijke dienst krijgt eigen uitleg, FAQ en interne links." },
              { title: "Werkgebied", text: place.buyerContext },
              { title: "Consistentie", text: "Naam, adresgegevens, telefoon, opening en categorieen moeten logisch kloppen." }
            ]
          },
          {
            title: "Wat je beter niet doet",
            text: "Dunne lokale pagina's kunnen vertrouwen en SEO verzwakken.",
            items: [
              { title: "Geen fake adres", text: "Claim geen kantoor of locatie die niet bestaat." },
              { title: "Geen plaatsnaamvulling", text: "Schrijf niet dezelfde tekst met alleen een andere plaatsnaam." },
              { title: "Geen rankinggaranties", text: "We verbeteren voorwaarden voor zichtbaarheid, maar beloven geen posities." }
            ]
          },
          {
            title: "Hoe MagisData dit opbouwt",
            text: "We starten met de pagina's die commercieel en inhoudelijk het meest logisch zijn.",
            items: [
              { title: "Scan", text: "We bekijken huidige pagina's, technische basis en lokale signalen." },
              { title: "Prioriteit", text: "We kiezen zoekvragen waar dienst, plaats en intentie bij elkaar passen." },
              { title: "Content", text: "We schrijven heldere pagina's met praktische voorbeelden en FAQ's." }
            ]
          }
        ],
        checklistTitle: `Lokale SEO checklist voor ${place.name}`,
        checklist: [
          "Google Business Profile volledig en consistent.",
          "Belangrijkste diensten hebben eigen pagina's.",
          `Werkgebied rond ${place.name} is feitelijk beschreven.`,
          "NAP-gegevens zijn consistent.",
          "FAQ's beantwoorden lokale koopvragen.",
          "Interne links verbinden diensten, prijzen, contact en relevante inzichten."
        ],
        comparison: {
          title: "Lokale SEO vs Google Ads",
          leftLabel: "Lokale SEO",
          rightLabel: "Google Ads",
          rows: [
            { label: "Kosten", left: "Duurzame investering", right: "Per klik of campagne" },
            { label: "Effect", left: "Groeit door goede content en autoriteit", right: "Stopt wanneer budget stopt" },
            { label: "Gebruik", left: "Sterk voor structurele vindbaarheid", right: "Sterk voor tijdelijke promotie" }
          ]
        },
        steps: [
          { title: "Analyse", text: `We bekijken lokale zichtbaarheid in ${place.name}.` },
          { title: "Structuur", text: "We bepalen welke diensten en plaatsen eigen pagina's verdienen." },
          { title: "Optimalisatie", text: "We verbeteren content, metadata, schema en interne links." },
          { title: "Monitoring", text: "We volgen groei en verbeteren pagina's op basis van signalen." }
        ],
        faqs: [
          { question: "Wat is het verschil tussen lokale SEO en gewone SEO?", answer: "Lokale SEO koppelt diensten aan werkgebied, Google-profiel, reviews, NAP en lokale zoekintentie." },
          { question: `Is lokale SEO zinvol in ${place.name}?`, answer: `Ja, als je klanten in ${place.name} of omgeving echt bedient en genoeg eigen informatie hebt om de pagina nuttig te maken.` },
          { question: "Hoe snel zie ik resultaat?", answer: "Dat hangt af van concurrentie, huidige basis en publicatiefrequentie. Meet vooral indexatie, impressies, clicks en aanvragen." }
        ],
        internalLinks: linkSet(undefined, place),
        qualityNotes: ["Service-intentie: actual page.", "Geen fake lokale vestiging.", "Sitemap pas bij livegang."],
        schemaType: "Service"
      })
    );

    id += 1;

    const gbpSlug = `google-business-profile-optimaliseren-${place.slug}`;
    pages.push(
      basePage({
        id,
        priority: ["voorschoten", "leiden"].includes(place.slug) ? "P2" : "P2",
        pageKind: "guide",
        template: "google-business-profile",
        cluster: "Google Business Profile + plaats",
        sourceTitle: `Google Business Profile optimaliseren in ${place.name}: checklist voor lokale bedrijven`,
        sourceKeyword: `Google Business Profile optimaliseren ${place.name}`,
        slug: gbpSlug,
        productionPath: pagePath(gbpSlug, "guide"),
        metaTitle: `Google Business Profile optimaliseren in ${place.name}`,
        metaDescription: `Praktische checklist om je Google Business Profile in ${place.name} consistenter, vollediger en beter verbonden met je website te maken.`,
        eyebrow: "Google Business Profile",
        title: `Google Business Profile optimaliseren in ${place.name}: checklist voor lokale bedrijven`,
        description: `Een praktisch inzicht voor ondernemers die hun bedrijfsprofiel beter willen laten aansluiten op website, diensten en lokale vindbaarheid.`,
        primaryCta: "Vraag gratis SEO-scan aan",
        secondaryCta: "Bekijk lokale SEO",
        directAnswer: `Je Google Business Profile optimaliseren in ${place.name} begint met complete categorieen, diensten, openingstijden, foto's, reviews en consistente contactgegevens. Je website moet dezelfde diensten en regio bevestigen.`,
        visual: {
          label: "Profielcheck",
          title: "Google-profiel + website",
          text: "Je profiel werkt sterker wanneer elke claim op de website controleerbaar terugkomt.",
          items: ["categorie", "diensten", "openingstijden", "reviews", "website-links", "NAP"]
        },
        highlights: [
          { title: "Volledig profiel", text: "Categorie, beschrijving, diensten, openingstijden en servicegebied." },
          { title: "Websitekoppeling", text: "Links naar relevante dienstpagina's, niet alleen naar de homepage." },
          { title: "Geen garanties", text: "Optimalisatie kan helpen, maar Google-posities worden niet beloofd." }
        ],
        sections: [
          {
            title: "Wat je profiel minimaal nodig heeft",
            text: "Een Google Business Profile moet feitelijk, compleet en consistent zijn.",
            items: [
              { title: "Categorieen", text: "Kies een primaire categorie die je belangrijkste dienst echt beschrijft." },
              { title: "Diensten", text: "Voeg diensten toe die ook op je website duidelijke uitleg hebben." },
              { title: "Opening en gebied", text: `Gebruik alleen informatie die klopt voor ${place.name} en omgeving.` }
            ]
          },
          {
            title: "Hoe je website het profiel ondersteunt",
            text: "Google-profiel en website moeten elkaar bevestigen.",
            items: [
              { title: "Dienstpagina's", text: "Link vanuit het profiel naar pagina's die de gekozen diensten uitleggen." },
              { title: "Consistente gegevens", text: "Naam, adres, telefoon en contactinformatie moeten overeenkomen." },
              { title: "FAQ en bewijs", text: "Beantwoord vragen die klanten ook in Google stellen." }
            ]
          },
          {
            title: "Veelgemaakte fouten",
            text: "Deze fouten maken een profiel minder betrouwbaar voor bezoekers en zoekmachines.",
            items: [
              { title: "Te brede categorie", text: "Een te algemene categorie maakt je aanbod minder duidelijk." },
              { title: "Verouderde informatie", text: "Openingstijden, services en foto's moeten actueel blijven." },
              { title: "Geen opvolging", text: "Reviews en vragen verdienen een nette, feitelijke reactie." }
            ]
          }
        ],
        checklistTitle: `Google Business Profile checklist voor ${place.name}`,
        checklist: [
          "Primaire categorie klopt met hoofddienst.",
          "Secundaire categorieen zijn relevant.",
          "Bedrijfsbeschrijving noemt dienst en werkgebied feitelijk.",
          "Diensten zijn ingevuld en linken logisch naar websitepagina's.",
          "Openingstijden, telefoon en URL kloppen.",
          "Foto's zijn actueel en echt.",
          "Reviews worden netjes opgevolgd.",
          "NAP is consistent op website en profiel."
        ],
        steps: [
          { title: "Inventariseer", text: "Leg profielgegevens naast websitegegevens." },
          { title: "Vul aan", text: "Werk categorieen, diensten, foto's en beschrijving bij." },
          { title: "Koppel pagina's", text: "Gebruik links naar relevante servicepagina's." },
          { title: "Controleer periodiek", text: "Check maandelijks of informatie nog klopt." }
        ],
        faqs: [
          { question: "Kan Google Business Profile mijn ranking garanderen?", answer: "Nee. Een compleet profiel kan helpen, maar ranking hangt af van veel signalen." },
          { question: "Moet ik vaak foto's plaatsen?", answer: "Regelmatig echte, actuele foto's helpen vertrouwen. Kwaliteit is belangrijker dan volume." },
          { question: "Welke link moet ik gebruiken?", answer: "Link bij voorkeur naar de meest relevante dienstpagina of contactpagina, niet altijd alleen naar home." }
        ],
        internalLinks: linkSet(undefined, place),
        qualityNotes: ["Guide-intentie: insight.", "Concrete GBP checklist aanwezig.", "Geen rankinggarantie."],
        schemaType: "Article"
      })
    );

    id += 1;
  }

  return pages;
}

function makePricingPages(): KeywordDraftPageContent[] {
  const pages: KeywordDraftPageContent[] = [];
  let id = 191;

  for (const place of allPlaces) {
    const pricingSlug = `wat-kost-een-website-laten-maken-in-${place.slug}`;
    pages.push(
      basePage({
        id,
        priority: ["voorschoten", "leiden"].includes(place.slug) ? "P1" : "P2",
        pageKind: "page",
        template: "pricing",
        cluster: "Prijs + plaats",
        sourceTitle: `Wat kost een website laten maken in ${place.name}?`,
        sourceKeyword: `wat kost een website laten maken in ${place.name}`,
        slug: pricingSlug,
        productionPath: pagePath(pricingSlug, "page"),
        metaTitle: `Wat kost een website laten maken in ${place.name}?`,
        metaDescription: `Uitleg over websitekosten in ${place.name}: scope, pagina's, copy, lokale SEO, onderhoud en wanneer een kleiner pakket genoeg is.`,
        eyebrow: "Prijsuitleg",
        title: `Wat kost een website laten maken in ${place.name}?`,
        description: "Geen nep-gemiddelden per stad, wel heldere scopefactoren waarmee je kunt bepalen welk pakket logisch is.",
        primaryCta: "Vraag pakketadvies aan",
        secondaryCta: "Bekijk prijzen",
        directAnswer: `De kosten voor een website in ${place.name} hangen vooral af van scope: aantal pagina's, copywriting, lokale SEO, ontwerpdiepte, formulieren, assets en onderhoud. Een lokale ondernemer heeft niet altijd het grootste pakket nodig; de juiste keuze hangt af van fase en groeidoel.`,
        visual: {
          label: "Prijsopbouw",
          title: "Scope bepaalt prijs",
          text: "Compacte basis, groeisite of autoriteitssysteem: kies op basis van wat bezoekers moeten kunnen doen.",
          items: ["pagina's", "copy", "SEO", "design", "formulieren", "onderhoud"]
        },
        highlights: [
          { title: "Transparant", text: "Geen verzonnen lokale marktprijs." },
          { title: "Passend pakket", text: "Klein beginnen kan logisch zijn." },
          { title: "Groei", text: "Uitbreiden met servicepagina's en inzichten kan later." }
        ],
        sections: [
          {
            title: "Waar websitekosten door veranderen",
            text: "Een website is goedkoper wanneer doel, pagina's en inhoud scherp zijn.",
            items: [
              { title: "Aantal pagina's", text: "Home, diensten, over, contact en FAQ vormen vaak de basis." },
              { title: "Copywriting", text: "Goede teksten besparen twijfels en maken SEO makkelijker." },
              { title: "Lokale SEO", text: `Voor ${place.name} telt vooral of lokale context feitelijk en uniek genoeg is.` }
            ]
          },
          {
            title: "Wanneer niet meer kopen",
            text: "Een groter pakket is niet automatisch beter.",
            items: [
              { title: "Nog geen scherp aanbod", text: "Begin eerst met positionering en basispagina's." },
              { title: "Weinig diensten", text: "Een compacte website kan genoeg zijn als aanbod simpel is." },
              { title: "Geen contentcapaciteit", text: "Publiceer geen groot contentplan dat je niet kunt onderhouden." }
            ]
          },
          {
            title: `Lokale overweging voor ${place.name}`,
            text: place.context,
            items: [
              { title: "Werkgebied", text: "Alleen noemen waar je echt werkt." },
              { title: "Concurrentie", text: place.buyerContext },
              { title: "Meetmoment", text: "Na livegang volgen indexatie, impressies en aanvragen." }
            ]
          }
        ],
        checklistTitle: "Prijscheck voor start",
        checklist: [
          "Hoeveel pagina's zijn echt nodig bij livegang?",
          "Wie schrijft of controleert de teksten?",
          "Is lokale SEO onderdeel van scope?",
          "Welke formulieren of koppelingen zijn nodig?",
          "Wie doet onderhoud na livegang?",
          "Welke pagina's kunnen later wachten?"
        ],
        comparison: {
          title: "Pakketkeuze",
          leftLabel: "Compact",
          rightLabel: "Groei",
          rows: [
            { label: "Doel", left: "Professioneel online staan", right: "Meer lokale vindbaarheid opbouwen" },
            { label: "Pagina's", left: "Kernpagina's", right: "Diensten, FAQ, regio en bewijs" },
            { label: "Past als", left: "Aanbod simpel is", right: "Meerdere diensten of sterke concurrentie spelen" }
          ]
        },
        steps: [
          { title: "Scope kiezen", text: "Bepaal welke pagina's direct nodig zijn." },
          { title: "Content verzamelen", text: "Logo, foto's, diensten, prijzen of scopefactoren." },
          { title: "Pakket bepalen", text: "Kies compact, groei of autoriteit op basis van doel." },
          { title: "Keuze afronden", text: "Leg vast welk pakket past, welke onderdelen later kunnen en welke vervolgstap logisch is." }
        ],
        faqs: [
          { question: `Is een website in ${place.name} duurder dan elders?`, answer: "Niet door de plaatsnaam zelf. Kosten komen vooral door scope, inhoud, ontwerp, SEO en onderhoud." },
          { question: "Kan ik klein beginnen?", answer: "Ja. Een compacte basis is vaak verstandig als aanbod en bewijs nog groeien." },
          { question: "Wat bepaalt de grootste prijsverschillen?", answer: "Aantal pagina's, copywriting, maatwerk design, lokale SEO, formulieren, assets en onderhoud." }
        ],
        internalLinks: linkSet(undefined, place),
        qualityNotes: ["Geen fake lokale prijsclaims.", "Actual page: koop/prijsintentie.", "Duidelijke when-not-to-buy sectie."],
        schemaType: "Service"
      })
    );

    id += 1;

    const packageSlug = `website-pakket-kiezen-voor-ondernemer-${place.slug}`;
    pages.push(
      basePage({
        id,
        priority: "P2",
        pageKind: "page",
        template: "package-choice",
        cluster: "Keuzehulp + plaats",
        sourceTitle: `Welk websitepakket past bij jouw bedrijf in ${place.name}?`,
        sourceKeyword: `website pakket kiezen voor ondernemer ${place.name}`,
        slug: packageSlug,
        productionPath: pagePath(packageSlug, "page"),
        metaTitle: `Welk websitepakket past bij jouw bedrijf in ${place.name}?`,
        metaDescription: `Keuzehulp voor ondernemers in ${place.name}: compact, groei of autoriteit op basis van diensten, SEO-ambitie en bewijs.`,
        eyebrow: "Pakketkeuze",
        title: `Welk websitepakket past bij jouw bedrijf in ${place.name}?`,
        description: "Een rustige keuzehulp voor ondernemers die willen vergelijken zonder meteen naar het grootste pakket geduwd te worden.",
        primaryCta: "Vraag pakketadvies aan",
        secondaryCta: "Bekijk prijzen",
        directAnswer: `Kies je websitepakket op basis van bedrijfsfase, aantal diensten, lokale SEO-ambitie, bewijs en onderhoud. Voor ${place.name} is een groeipakket logisch wanneer lokale vindbaarheid en meerdere dienstpagina's belangrijk zijn; een compact pakket is genoeg voor een helder basisaanbod.`,
        visual: {
          label: "Keuzematrix",
          title: "Start, Groei of Autoriteit",
          text: "Kies op basis van wat bezoekers moeten begrijpen en hoeveel zoekvragen je wilt afdekken.",
          items: ["fase", "diensten", "SEO", "bewijs", "contentritme"]
        },
        highlights: [
          { title: "Start", text: "Voor online basis, vertrouwen en contact." },
          { title: "Groei", text: "Voor meerdere diensten en lokale SEO." },
          { title: "Autoriteit", text: "Voor content, AI-vindbaarheid en sterkere themadekking." }
        ],
        sections: [
          {
            title: "Wanneer Start genoeg is",
            text: "Klein beginnen is goed wanneer je aanbod duidelijk is en je vooral professioneel online wilt staan.",
            items: [
              { title: "Basisaanbod", text: "Een paar kernpagina's zijn genoeg." },
              { title: "Weinig SEO-druk", text: "Je hoeft nog niet veel lokale zoekvragen te winnen." },
              { title: "Snel duidelijk", text: "Contact en vertrouwen zijn belangrijker dan veel content." }
            ]
          },
          {
            title: "Wanneer Groei beter past",
            text: `Voor ${place.name} past Groei wanneer je meerdere diensten hebt en beter lokaal gevonden wilt worden.`,
            items: [
              { title: "Dienstpagina's", text: "Elke belangrijke dienst krijgt eigen uitleg en FAQ." },
              { title: "Lokale SEO", text: place.localExample },
              { title: "Bewijsstructuur", text: "Cases, proces en FAQ's ondersteunen de keuze." }
            ]
          },
          {
            title: "Wanneer Autoriteit logisch wordt",
            text: "Autoriteit past wanneer je structureel wilt bouwen aan content, AI-vindbaarheid en thematische dekking.",
            items: [
              { title: "Contentecosysteem", text: "Servicepagina's, inzichten en FAQ's versterken elkaar." },
              { title: "AI/GEO/AEO", text: "Entiteiten, antwoordblokken en schema worden belangrijker." },
              { title: "Langere termijn", text: "Publiceren, meten en verbeteren wordt onderdeel van de aanpak." }
            ]
          }
        ],
        checklistTitle: "Kies je pakket",
        checklist: [
          "Heb je een of meerdere diensten?",
          "Wil je vooral vertrouwen of ook lokale vindbaarheid?",
          "Heb je bewijs, foto's, cases of procesinformatie?",
          "Moet de website later uitbreidbaar zijn?",
          "Kun je maandelijks content of verbeteringen bijhouden?"
        ],
        comparison: {
          title: "Pakketmatrix",
          leftLabel: "Start",
          rightLabel: "Groei/Autoriteit",
          rows: [
            { label: "Aantal diensten", left: "Een paar", right: "Meerdere of complex" },
            { label: "SEO", left: "Basis", right: "Lokale en thematische opbouw" },
            { label: "Bewijs", left: "Eenvoudig", right: "Cases, FAQ's, content en schema" }
          ]
        },
        steps: [
          { title: "Fase bepalen", text: "Wat moet de website eerst oplossen?" },
          { title: "Diensten tellen", text: "Welke diensten verdienen eigen pagina's?" },
          { title: "SEO-ambitie kiezen", text: "Alleen basis of ook lokale groei?" },
          { title: "Pakketadvies", text: "Kies klein genoeg om beheersbaar te blijven." }
        ],
        faqs: [
          { question: "Duwen jullie altijd naar het grootste pakket?", answer: "Nee. Een groter pakket is alleen logisch wanneer dienststructuur, SEO-ambitie en contentcapaciteit dat dragen." },
          { question: "Kan ik later upgraden?", answer: "Ja. De structuur kan groeien met extra diensten, lokale pagina's en inzichten." },
          { question: `Maakt ${place.name} uit voor mijn keuze?`, answer: "Alleen als lokale concurrentie, werkgebied of zoekintentie extra pagina's nodig maakt." }
        ],
        internalLinks: linkSet(undefined, place),
        qualityNotes: ["Actual page: pakket vergelijken.", "Reduceert koopangst.", "Geen grootste-pakket push."],
        schemaType: "Service"
      })
    );

    id += 1;
  }

  return pages;
}

function makeAiVisibilityPages(): KeywordDraftPageContent[] {
  return branches.map((branch, index) => {
    const depth = branchDepth(branch);
    const id = 221 + index;
    const slug = `ai-vindbaarheid-voor-${branch.slug}`;

    return basePage({
      id,
      priority: ["kappers", "loodgieters", "elektriciens", "hoveniers"].includes(branch.slug) ? "P2" : "P3",
      pageKind: "page",
      template: "ai-visibility",
      cluster: "AI/GEO/AEO + branche",
      sourceTitle: `AI-vindbaarheid voor ${branch.plural}: hoe word je duidelijker genoemd?`,
      sourceKeyword: `AI vindbaarheid voor ${branch.plural}`,
      slug,
      productionPath: pagePath(slug, "page"),
      metaTitle: `AI-vindbaarheid voor ${branch.plural} | MagisData`,
      metaDescription: `Maak je ${branch.singular} website duidelijker voor AI-antwoorden met entiteiten, diensten, regio, FAQ's, bewijs en schema.`,
      eyebrow: `AI-vindbaarheid voor ${branch.plural}`,
      title: `AI-vindbaarheid voor ${branch.plural}`,
      description: `Zorg dat AI-systemen je bedrijf beter kunnen begrijpen: wat je doet, waar je werkt, welke vragen je beantwoordt en waarom je betrouwbaar bent.`,
      primaryCta: "Vraag AI-vindbaarheid check aan",
      secondaryCta: "Bekijk AI-vindbaarheid",
      directAnswer: `AI-vindbaarheid voor ${branch.plural} betekent dat je website duidelijk uitlegt welke diensten je aanbiedt, voor wie je werkt, welke regio je bedient en hoe klanten contact opnemen. ${depth.aiAnswer} Voor deze branche zijn vooral ${branch.aiEntities.join(", ")} belangrijk.`,
      visual: {
        label: "AI antwoordkaart",
        title: `Wanneer noemt AI een ${branch.singular}?`,
        text: "AI-systemen combineren zichtbare informatie, entiteiten, FAQ's, schema en externe signalen. Niets wordt gegarandeerd, maar ruis kan omlaag.",
        items: branch.aiEntities
      },
      highlights: [
        { title: "Entiteiten", text: branch.aiEntities.join(", ") },
        { title: "Antwoordblokken", text: branch.questions.join(" ") },
        { title: "Betrouwbaarheid", text: depth.proofUse },
        { title: "Geen garantieclaim", text: "AI-vermeldingen worden nooit beloofd; de inhoud wordt wel beter begrijpbaar." }
      ],
      valueSections: [
        {
          title: `Wat AI over ${branch.plural} moet begrijpen`,
          paragraphs: [
            depth.aiAnswer,
            `Een AI-systeem kan alleen betrouwbaar samenvatten wat zichtbaar, consistent en concreet op de website staat. Daarom moeten diensten, regio, contactroute en bewijs niet alleen in schema staan, maar ook leesbaar op de pagina zelf.`
          ]
        },
        {
          title: "Maak antwoorden zelfstandig bruikbaar",
          paragraphs: [
            `Goede antwoordblokken geven direct context. Bijvoorbeeld: ${depth.example}`,
            `Voor ${branch.plural} horen ook aanvraagvelden zichtbaar te zijn, zoals ${depth.intakeFields.join(", ")}. Daardoor kan een AI-antwoord beter uitleggen welke informatie iemand moet voorbereiden.`
          ]
        },
        {
          title: "Entity map voor verdere groei",
          paragraphs: [
            `Sterke vervolgonderwerpen zijn ${depth.seoExpansion.join(", ")}. Die onderwerpen verdienen alleen eigen pagina's wanneer ze eigen vragen, voorbeelden en vervolgstappen hebben.`,
            `${depth.avoid} AI-vindbaarheid werkt niet met losse claims, maar met consistente informatie die bezoekers ook echt kunnen controleren.`
          ]
        }
      ],
      sections: [
        {
          title: "Hoe AI jouw bedrijf probeert te begrijpen",
          text: "AI-systemen zoeken naar samenhang tussen bedrijfsnaam, diensten, locatie, bewijs en antwoorden.",
          items: [
            { title: "Diensten", text: branch.services.join(", ") },
            { title: "Klantvragen", text: branch.questions.join(" ") },
            { title: "Contactroute", text: `${branch.mobile}. Voor de intake zijn ${depth.intakeFields.slice(0, 4).join(", ")} belangrijk.` }
          ]
        },
        {
          title: "Verschil met klassieke SEO",
          text: "SEO richt zich op posities in zoekresultaten. AI-vindbaarheid richt zich op correct begrip en bruikbare samenvattingen.",
          items: [
            { title: "SEO", text: "Zoekwoorden, pagina's, links en technische indexatie." },
            { title: "AEO", text: "Korte, directe antwoorden op concrete vragen." },
            { title: "GEO", text: "Entiteiten, context, bewijs en citeerbare informatie." }
          ]
        },
        {
          title: `AI-antwoordvoorbeelden voor ${branch.plural}`,
          text: "Deze blokken zijn het soort informatie dat zelfstandig duidelijk moet zijn.",
          items: branch.questions.map((question, itemIndex) => ({
            title: question,
            text:
              itemIndex === 0
                ? `Een goede pagina beantwoordt dit met concrete uitleg over ${branch.services[0].toLowerCase()} en de vervolgstap. ${depth.example}`
                : itemIndex === 1
                  ? `Gebruik feitelijke informatie over ${branch.trust}, zonder claims die niet zichtbaar zijn. ${depth.avoid}`
                  : `Sluit af met een praktische contactroute: ${branch.conversion}.`
          }))
        }
      ],
      checklistTitle: `Entity map voor ${branch.plural}`,
      checklist: [
        "Bedrijfsnaam en contactgegevens zijn consistent.",
        `Diensten zijn expliciet: ${branch.services.join(", ")}.`,
        `Klantvragen zijn zichtbaar: ${branch.questions.join(" ")}`,
        `Bewijs is feitelijk: ${branch.proof.join(", ")}.`,
        `Intake-informatie is zichtbaar: ${depth.intakeFields.join(", ")}.`,
        `Vervolgonderwerpen zijn afgebakend: ${depth.seoExpansion.join(", ")}.`,
        "FAQ's zijn kort, concreet en zelfstandig begrijpelijk.",
        "Schema klopt met zichtbare inhoud."
      ],
      comparison: {
        title: "SEO vs AI-vindbaarheid",
        leftLabel: "SEO",
        rightLabel: "AI-vindbaarheid",
        rows: [
          { label: "Doel", left: "Hoger ranken in zoekresultaten", right: "Correct begrepen en samengevat worden" },
          { label: "Focus", left: "Keywords, links, techniek", right: "Entiteiten, antwoorden, bewijs" },
          { label: "Resultaat", left: "Meer organisch verkeer", right: "Meer kans op relevante AI-vermelding" }
        ]
      },
      steps: [
        { title: "Inventarisatie", text: `We brengen diensten, regio, bewijs en vragen voor ${branch.plural} in kaart.` },
        { title: "Antwoorden", text: "We schrijven korte blokken die zelfstandig te begrijpen zijn." },
        { title: "Schema", text: "We controleren metadata, FAQ, breadcrumbs en service-informatie." },
        { title: "Monitoring", text: "We testen periodiek hoe AI-systemen je bedrijf beschrijven." }
      ],
      faqs: [
        { question: "Kunnen jullie garanderen dat AI mijn bedrijf noemt?", answer: "Nee. AI-systemen bepalen zelf bronnen en antwoorden. We kunnen wel de informatie duidelijker, consistenter en beter gestructureerd maken." },
        { question: "Moet mijn hele website opnieuw?", answer: "Niet altijd. Vaak verbeteren we eerst dienstpagina's, FAQ's, schema en interne links." },
        { question: `Wat is specifiek voor ${branch.plural}?`, answer: `Voor ${branch.plural} moet AI vooral ${branch.aiEntities.join(", ")} goed kunnen herkennen. Daarnaast moet duidelijk zijn welke informatie een bezoeker moet voorbereiden: ${depth.intakeFields.join(", ")}.` },
        { question: "Welke content helpt AI-antwoorden het meest?", answer: `Directe antwoorden, concrete dienstblokken, echte bewijsvoering en vervolgonderwerpen zoals ${depth.seoExpansion.join(", ")} helpen meer dan algemene marketingclaims.` }
      ],
      internalLinks: [
        { label: "AI-vindbaarheid", href: "/ai-vindbaarheid" },
        { label: "GEO optimalisatie", href: "/geo-optimalisatie" },
        { label: "AEO optimalisatie", href: "/aeo-optimalisatie" },
        ...linkSet(branch)
      ],
      qualityNotes: ["Actual page: service-intentie met educatie.", "Geen AI-vermeldingsgarantie.", "Branch entity map aanwezig."],
      schemaType: "Service"
    });
  });
}

const technicalGuides = [
  {
    id: 241,
    slug: "website-onderhoud-voor-kleine-bedrijven",
    title: "Website onderhoud voor kleine bedrijven: wat moet maandelijks gecontroleerd worden?",
    keyword: "website onderhoud voor kleine bedrijven",
    problem: "voorkomen dat updates, formulieren, backups en beveiliging stil kapot gaan",
    checks: ["updates", "backups", "formulieren", "beveiliging", "laadtijd", "belangrijke pagina's"]
  },
  {
    id: 242,
    slug: "website-snelheid-verbeteren-voor-lokale-ondernemer",
    title: "Website snelheid verbeteren: simpele controlepunten voor lokale ondernemers",
    keyword: "website snelheid verbeteren voor lokale ondernemer",
    problem: "sneller laden op mobiel zonder meteen een volledige rebuild",
    checks: ["afbeeldingen", "hosting", "scripts", "fonts", "mobiele LCP", "cache"]
  },
  {
    id: 243,
    slug: "contactformulier-werkt-niet-website",
    title: "Contactformulier werkt niet: checklist voordat je aanvragen misloopt",
    keyword: "contactformulier werkt niet website",
    problem: "voorkomen dat goede bezoekers geen aanvraag kunnen sturen",
    checks: ["testverzending", "spamfilter", "bedankpagina", "validatie", "mobiel", "mailrouting"]
  },
  {
    id: 244,
    slug: "meer-aanvragen-via-website-zonder-advertenties",
    title: "Meer aanvragen via je website zonder direct advertenties te kopen",
    keyword: "meer aanvragen via website zonder advertenties",
    problem: "meer waarde halen uit bestaande bezoekers voordat advertentiebudget stijgt",
    checks: ["hero", "bewijs", "CTA", "dienstpagina's", "formulier", "FAQ"]
  },
  {
    id: 245,
    slug: "homepage-opbouw-voor-lokale-dienstverlener",
    title: "Homepage-opbouw voor lokale dienstverleners: boven de vouw tot contact",
    keyword: "homepage opbouw voor lokale dienstverlener",
    problem: "de homepage in logische beslisvolgorde zetten",
    checks: ["belofte", "doelgroep", "diensten", "bewijs", "werkgebied", "contact"]
  },
  {
    id: 246,
    slug: "dienstenpagina-maken-voor-seo",
    title: "Dienstenpagina maken voor SEO: wat moet erop staan?",
    keyword: "dienstenpagina maken voor SEO",
    problem: "een dienstpagina maken die zoekintentie en contactintentie tegelijk helpt",
    checks: ["H1", "direct antwoord", "probleem", "aanpak", "bewijs", "FAQ"]
  },
  {
    id: 247,
    slug: "website-redesign-zonder-ranking-verlies",
    title: "Website redesign zonder je vindbaarheid te slopen",
    keyword: "website redesign zonder ranking verlies",
    problem: "een redesign plannen zonder indexatie, URL's en contentwaarde te verliezen",
    checks: ["URL-inventaris", "redirects", "metadata", "content", "schema", "sitemap"]
  },
  {
    id: 248,
    slug: "ai-automatisering-voor-intake-opvolging",
    title: "AI automatisering voor intake en opvolging bij kleine bedrijven",
    keyword: "AI automatisering voor intake opvolging",
    problem: "aanvragen sneller opvolgen zonder menselijk oordeel te vervangen",
    checks: ["intakevragen", "routing", "samenvatting", "mailconcept", "privacy", "controle"]
  },
  {
    id: 249,
    slug: "veelgestelde-vragen-pagina-voor-lokale-seo",
    title: "FAQ-pagina voor lokale SEO: welke vragen leveren echt waarde?",
    keyword: "veelgestelde vragen pagina voor lokale SEO",
    problem: "FAQ's schrijven die bezoekers helpen en geen dunne SEO-vulling zijn",
    checks: ["echte klantvragen", "kosten", "planning", "werkgebied", "aanpak", "schema"]
  },
  {
    id: 250,
    slug: "website-vertrouwen-verbeteren",
    title: "Website vertrouwen verbeteren: bewijs, beloftes en contactinformatie op de juiste plek",
    keyword: "website vertrouwen verbeteren",
    problem: "vertrouwen opbouwen zonder fake claims of opgeblazen beloftes",
    checks: ["bewijs", "proces", "contactgegevens", "verwachting", "scope", "disclaimers"]
  }
];

const technicalGuideDepthBySlug: Record<string, { scenario: string; quickWin: string; avoid: string; usefulExample: string }> = {
  "website-onderhoud-voor-kleine-bedrijven": {
    scenario: "Een kleine bedrijfswebsite raakt zelden in een keer kapot. Meestal stapelen kleine risico's zich op: een formulier dat niet meer mailt, een plugin-update die blijft liggen, een verlopen cookie-instelling of een oude dienstpagina.",
    quickWin: "Plan een vaste maandelijkse controle van formulier, backups, updates en belangrijkste contactpagina's.",
    avoid: "Wacht niet tot een klant meldt dat iets niet werkt; dan ben je vaak al aanvragen misgelopen.",
    usefulExample: "Test elke maand een echte formulierverzending en noteer wie de mail ontvangt, welke bedankpagina verschijnt en of tracking nog klopt."
  },
  "website-snelheid-verbeteren-voor-lokale-ondernemer": {
    scenario: "Lokale bezoekers zitten vaak op mobiel en vergelijken snel. Een trage hero, zware foto's of onnodige scripts maken de eerste indruk zwakker voordat de inhoud gelezen wordt.",
    quickWin: "Comprimeer grote hero-afbeeldingen, beperk scripts bovenaan en controleer de mobiele eerste schermhoogte.",
    avoid: "Begin niet met willekeurige speed plugins voordat duidelijk is wat de pagina echt vertraagt.",
    usefulExample: "Een dienstenpagina met een grote ongeoptimaliseerde foto kan sneller worden door webp/avif, vaste afmetingen en lazy loading onder de vouw."
  },
  "contactformulier-werkt-niet-website": {
    scenario: "Een formulier kan visueel prima lijken terwijl mails in spam verdwijnen, validatie blokkeert of de bedankpagina nooit laadt.",
    quickWin: "Stuur een testaanvraag vanaf mobiel, desktop en een ander e-mailadres en controleer inbox, spam en bedankpagina.",
    avoid: "Ga niet alleen af op 'formulier verzonden' in de browser; controleer of de aanvraag ook echt aankomt.",
    usefulExample: "Vraag maximaal de velden die nodig zijn voor opvolging en toon direct wat er na verzending gebeurt."
  },
  "meer-aanvragen-via-website-zonder-advertenties": {
    scenario: "Meer aanvragen begint vaak niet met meer verkeer, maar met minder frictie voor bezoekers die al op de website komen.",
    quickWin: "Herschrijf de hero naar dienst, doelgroep, regio en actie en zet bewijs dichter bij de CTA.",
    avoid: "Koop geen extra advertentieverkeer naar een pagina waar aanbod, bewijs of formulier nog onduidelijk is.",
    usefulExample: "Een lokale dienstverlener kan vaak meer halen uit betere dienstblokken, FAQ en formulierroute dan uit een brede advertentiecampagne."
  },
  "homepage-opbouw-voor-lokale-dienstverlener": {
    scenario: "Een homepage probeert vaak alles tegelijk te vertellen. Bezoekers hebben juist een duidelijke volgorde nodig: wat doe je, voor wie, waar, waarom vertrouwen en hoe contact?",
    quickWin: "Maak boven de vouw dienst, werkgebied en eerste actie zichtbaar zonder slider of lange introductie.",
    avoid: "Open niet met een algemene slogan die ook op twintig andere websites kan staan.",
    usefulExample: "Een sterke homepage toont eerst hoofdservice, regio en CTA, daarna diensten, bewijs, proces, FAQ en contact."
  },
  "dienstenpagina-maken-voor-seo": {
    scenario: "Een dienstenpagina rankt en converteert pas wanneer ze een concrete zoekvraag beantwoordt en tegelijk uitlegt wanneer de dienst past.",
    quickWin: "Begin met een direct antwoord, voeg daarna problemen, aanpak, bewijs, scopefactoren, FAQ en interne links toe.",
    avoid: "Maak geen dienstenpagina die alleen een verkooptekst is zonder voorbeelden, vragen of vervolgstap.",
    usefulExample: "Een pagina voor 'lokale SEO' hoort te laten zien wat wordt gecontroleerd: servicepagina's, Google-profiel, NAP, reviews, interne links en meting."
  },
  "website-redesign-zonder-ranking-verlies": {
    scenario: "Bij een redesign verdwijnen rankings vaak door gewijzigde URL's, ontbrekende redirects, verloren content of metadata die niet is meegenomen.",
    quickWin: "Maak voor ontwerpstart een URL-inventaris met huidige titels, trafficpagina's, interne links en redirectplan.",
    avoid: "Zet geen nieuwe site live voordat redirects, sitemap, robots, metadata en belangrijke content zijn gecontroleerd.",
    usefulExample: "Behoud de URL van een sterke dienstpagina of redirect hem gericht naar de nieuwe equivalente pagina, niet naar de homepage."
  },
  "ai-automatisering-voor-intake-opvolging": {
    scenario: "AI kan helpen bij intake en opvolging, maar mag menselijk oordeel, privacykeuzes en klantrelatie niet vervangen.",
    quickWin: "Laat AI aanvragen samenvatten, prioriteit voorstellen en een mailconcept maken, met menselijke controle voor verzending.",
    avoid: "Laat AI geen definitieve offertes, medische/juridische adviezen of bindende toezeggingen versturen zonder review.",
    usefulExample: "Een formulier kan diensttype, urgentie en context verzamelen; AI vat dit samen en zet een conceptreactie klaar voor de ondernemer."
  },
  "veelgestelde-vragen-pagina-voor-lokale-seo": {
    scenario: "FAQ's helpen alleen wanneer ze echte klantvragen beantwoorden. Een lange lijst met zoekwoorden zonder nut maakt de pagina dunner.",
    quickWin: "Verzamel vragen uit gesprekken, mail, formulieren en Google-profiel en groepeer ze rond kosten, planning, werkgebied en aanpak.",
    avoid: "Gebruik FAQPage-schema niet als truc; de antwoorden moeten zichtbaar, nuttig en actueel zijn.",
    usefulExample: "Een vraag als 'Werk je ook in Voorschoten?' is sterker wanneer het antwoord servicegebied, voorwaarden en contactverwachting uitlegt."
  },
  "website-vertrouwen-verbeteren": {
    scenario: "Vertrouwen ontstaat door controleerbare informatie: wie je helpt, hoe je werkt, wat er na contact gebeurt en welke claims je wel of niet maakt.",
    quickWin: "Plaats bewijs, proces en contactverwachting naast de belangrijkste CTA in plaats van op een losse onderpagina.",
    avoid: "Gebruik geen nep-logo's, testimonials, reviewsterren of resultaatclaims.",
    usefulExample: "Een procesblok met intake, voorstel, bouw, controle en livegang kan betrouwbaarder zijn dan een grote claim over kwaliteit."
  }
};

function makeTechnicalGuides(): KeywordDraftPageContent[] {
  return technicalGuides.map((guide) => {
    const depth = technicalGuideDepthBySlug[guide.slug];

    return basePage({
      id: guide.id,
      priority: "P2",
      pageKind: "guide",
      template: "technical-guide",
      cluster: "Techniek/conversie",
      sourceTitle: guide.title,
      sourceKeyword: guide.keyword,
      slug: guide.slug,
      productionPath: pagePath(guide.slug, "guide"),
      metaTitle: guide.title,
      metaDescription: `Praktische gids voor lokale ondernemers: ${guide.problem}, met checklist en duidelijke vervolgstappen.`,
      eyebrow: "Praktische gids",
      title: guide.title,
      description: `Een nuchtere gids om ${guide.problem}. Eerst zelf controleren, daarna pas hulp inschakelen als dat nodig is.`,
      primaryCta: "Vraag korte feedback aan",
      secondaryCta: "Bekijk diensten",
      directAnswer: `Begin met de belangrijkste controlepunten: ${guide.checks.join(", ")}. ${depth.quickWin} Los eerst zichtbare frictie op voordat je nieuwe campagnes, redesigns of extra pagina's plant.`,
      visual: {
        label: "Controlepaneel",
        title: "Van probleem naar prioriteit",
        text: "Werk van zichtbaar risico naar technische oorzaak en meet daarna of aanvragen verbeteren.",
        items: guide.checks
      },
      highlights: [
        { title: "Zelf te checken", text: guide.checks.slice(0, 3).join(", ") },
        { title: "Snelle winst", text: depth.quickWin },
        { title: "Valkuil", text: depth.avoid },
        { title: "Geen ruis", text: "Alleen verbeteren wat bezoeker of vindbaarheid echt raakt." }
      ],
      valueSections: [
        {
          title: "Waarom dit probleem vaak onzichtbaar begint",
          paragraphs: [
            depth.scenario,
            "Daarom is een korte, herhaalbare controle sterker dan wachten op grote signalen. Je zoekt eerst naar frictie die aanvragen, vertrouwen of indexatie direct raakt."
          ]
        },
        {
          title: "Een praktische eerste verbetering",
          paragraphs: [
            depth.quickWin,
            depth.usefulExample
          ]
        },
        {
          title: "Wat je beter niet doet",
          paragraphs: [
            depth.avoid,
            "Houd wijzigingen klein genoeg om het effect te kunnen beoordelen. Noteer wat je aanpast, op welke pagina, en welk gedrag of technisch signaal je daarna opnieuw controleert."
          ]
        }
      ],
      sections: [
        {
          title: "Wat je eerst controleert",
          text: "Begin met de simpele punten die direct invloed hebben op bezoeker of aanvraag.",
          items: guide.checks.slice(0, 3).map((item) => ({
            title: item[0].toUpperCase() + item.slice(1),
            text: `Controleer ${item} op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is.`
          }))
        },
        {
          title: "Wat je beter niet overslaat",
          text: "Sommige punten lijken klein, maar bepalen of bezoekers vertrouwen houden.",
          items: guide.checks.slice(3, 6).map((item) => ({
            title: item[0].toUpperCase() + item.slice(1),
            text: `Leg vast hoe ${item} nu werkt en welke verbetering het meeste risico verlaagt.`
          }))
        },
        {
          title: "Wanneer je hulp vraagt",
          text: "Vraag hulp wanneer meerdere onderdelen samenhangen of wanneer je niet zeker weet wat techniek, content of SEO raakt.",
          items: [
            { title: "Technisch risico", text: "Wijzigingen raken indexatie, formulieren, snelheid of beveiliging." },
            { title: "Conversierisico", text: "Bezoekers snappen de route naar contact niet." },
            { title: "SEO-risico", text: "URL's, metadata, interne links of schema veranderen." }
          ]
        }
      ],
      checklistTitle: "Snelle checklist",
      checklist: guide.checks.map((item) => `${item[0].toUpperCase() + item.slice(1)} gecontroleerd en genoteerd.`),
      steps: [
        { title: "Test zelf", text: "Open de belangrijkste pagina op mobiel en desktop." },
        { title: "Noteer frictie", text: "Schrijf op waar iets traag, stuk of onduidelijk is." },
        { title: "Prioriteer", text: "Los eerst punten op die aanvragen of indexatie raken." },
        { title: "Controleer opnieuw", text: "Meet na wijziging of gedrag of fouten verbeteren." }
      ],
      faqs: [
        { question: "Kan ik dit zelf doen?", answer: "Veel controles wel. Vraag hulp wanneer techniek, SEO of formulieren risico krijgen." },
        { question: "Moet dit direct een groot project worden?", answer: "Nee. Begin klein en los de grootste frictie eerst op." },
        { question: "Kan MagisData meekijken?", answer: "Ja. Stuur de pagina of situatie mee voor korte praktische feedback." },
        { question: "Wat is een goede eerste controle?", answer: depth.usefulExample }
      ],
      internalLinks: linkSet(),
      qualityNotes: ["Guide-intentie: leren/fixen.", "Praktische checklist aanwezig.", "Soft CTA."],
      schemaType: "Article"
    });
  });
}

function applyAuthoredKeywordPageContent(page: KeywordDraftPageContent): KeywordDraftPageContent {
  if (page.slug === "website-laten-maken-voor-kappers-voorschoten") {
    return {
      ...page,
      metaTitle: "Website laten maken voor kappers in Voorschoten | MagisData",
      metaDescription:
        "Kapperswebsite voor Voorschoten met behandelingen, prijzen, sfeer, boekroute, lokale SEO en een rustige route naar meer passende afspraken.",
      description:
        "Een kapperswebsite voor Voorschoten moet snel laten voelen of de salon past: behandelingen, prijzen, sfeer, openingstijden en boeken zonder omweg.",
      directAnswer:
        "Een website voor een kapper in Voorschoten moet bovenaan duidelijk maken welke behandelingen je aanbiedt, hoe iemand boekt, wat klanten ongeveer kunnen verwachten qua prijs of voorbereiding, en waarom jouw salon de moeite waard is. Omdat klanten ook salons in Leiden vergelijken, moet de pagina lokaal duidelijk zijn zonder een vestiging of resultaten te claimen die er niet zijn.",
      visual: {
        label: "Salonroute",
        title: "Van behandeling naar afspraak",
        text:
          "De pagina helpt een bezoeker in korte stappen: herkennen welke behandeling past, vertrouwen krijgen in de salon en direct een afspraak starten.",
        items: ["behandelingen", "prijsindicatie", "sfeer en bewijs", "boekroute", "openingstijden"]
      },
      highlights: [
        {
          title: "Behandelingen scanbaar",
          text: "Knippen, kleuren, highlights en styling krijgen elk een duidelijke plek met korte uitleg."
        },
        {
          title: "Voorschoten-context",
          text: "De pagina maakt duidelijk dat je lokale klanten bedient, zonder nepvestiging of overdreven lokale claims."
        },
        {
          title: "Boeken op mobiel",
          text: "Boekknop, route, telefoon en openingstijden staan dicht bij de keuze, niet verstopt onderaan."
        },
        {
          title: "SEO zonder spam",
          text: "Koppen, FAQ, metadata en interne links ondersteunen vindbaarheid zonder keyword stuffing."
        }
      ],
      valueSections: [
        {
          title: "Waarom deze pagina niet op een algemene webdesignpagina lijkt",
          paragraphs: [
            "Een salonbezoek is persoonlijk. Iemand kiest niet alleen op afstand of prijs, maar ook op stijl, vertrouwen, behandelingstype en hoe makkelijk een afspraak voelt. Daarom moet de pagina meer doen dan zeggen dat MagisData websites maakt.",
            "Deze pagina behandelt de concrete keuzes die een kappersklant maakt: past de behandeling, is de sfeer goed, kan ik snel boeken, weet ik ongeveer wat het kost en is de salon praktisch bereikbaar vanuit Voorschoten of omgeving?"
          ]
        },
        {
          title: "Voorbeeld van inhoud die waarde toevoegt",
          paragraphs: [
            "Een sterke kapperswebsite kan per behandeling kort uitleggen wanneer die behandeling past. Bij kleuren kan dat gaan over uitgroei, toner, highlights, balayage of onderhoud. Bij knippen kan het gaan over advies, krullen, kinderen of heren.",
            "Dat soort informatie helpt bezoekers echt kiezen en geeft Google meer context dan een losse lijst met diensten. Het maakt de pagina inhoudelijk anders dan een generieke lokale landingspagina."
          ]
        },
        {
          title: "Wat MagisData concreet zou bouwen",
          paragraphs: [
            "De pagina krijgt een rustige hero met behandeling, plaats en boekactie. Daaronder komen behandelblokken, sfeer of bewijs, prijsfactoren, openingstijden, Google-profielconsistentie, FAQ en een korte route naar afspraak.",
            "Als de salon meerdere sterke behandelingen heeft, is het slimmer om die later uit te bouwen als aparte behandelpagina's. Zo groeit de website vanuit echte zoekvragen in plaats van vanuit herhaalde plaatsnaamteksten."
          ]
        }
      ],
      sections: [
        {
          title: "Waarom een kapperswebsite in Voorschoten anders moet werken",
          text:
            "Iemand die een kapper zoekt, wil meestal niet eerst een lang verhaal lezen. De bezoeker wil snel weten of de salon past bij de gewenste behandeling, planning, stijl en afstand.",
          items: [
            {
              title: "Behandeling eerst",
              text:
                "Knippen, kleuren, highlights en styling moeten herkenbaar zijn, zodat bezoekers niet hoeven te raden of de salon hun vraag aankan."
            },
            {
              title: "Sfeer maakt keuze makkelijker",
              text:
                "Foto's, een korte werkwijze en duidelijke voorbereiding helpen meer dan brede woorden over kwaliteit."
            },
            {
              title: "Voorschoten vergelijkt regionaal",
              text:
                "Veel klanten kijken ook naar salons rond Leiden. Daarom moet bereikbaarheid, beschikbaarheid en boekgemak direct duidelijk zijn."
            }
          ]
        },
        {
          title: "Wat er bovenaan de pagina moet staan",
          text:
            "De eerste schermhoogte moet niet alleen mooi zijn, maar de belangrijkste keuze in een paar seconden ondersteunen.",
          items: [
            {
              title: "Heldere belofte",
              text:
                "Noem direct voor wie de salon is en welke behandelingen centraal staan, bijvoorbeeld kleur, knippen, krullen of styling."
            },
            {
              title: "Boekroute",
              text:
                "Maak de afspraakknop zichtbaar op mobiel en leg kort uit wat er na boeken of aanvragen gebeurt."
            },
            {
              title: "Prijs of scope",
              text:
                "Vaste prijzen hoeven niet altijd, maar indicaties of factoren zoals haarlengte en kleurbehandeling halen twijfel weg."
            }
          ]
        },
        {
          title: "Lokale SEO voor kappers zonder plaatsnaamvulling",
          text:
            "Een sterke lokale pagina gebruikt Voorschoten waar het logisch is: werkgebied, bereikbaarheid, klantvragen en lokale vergelijking. De rest moet gewoon goede saloninformatie zijn.",
          items: [
            {
              title: "Dienstpagina's",
              text:
                "Behandelingen met eigen uitleg kunnen beter ranken dan een homepage die alles tegelijk probeert te doen."
            },
            {
              title: "FAQ voor echte twijfels",
              text:
                "Beantwoord vragen over boeken, voorbereiding, kleuradvies, prijzen en openingstijden in gewone taal."
            },
            {
              title: "Consistente signalen",
              text:
                "Website, Google Business Profile, openingstijden en contactgegevens moeten hetzelfde verhaal vertellen."
            }
          ]
        }
      ],
      checklistTitle: "Checklist voor een kapperswebsite in Voorschoten",
      checklist: [
        "Staat bovenaan welke behandelingen de salon aanbiedt?",
        "Kan iemand op mobiel direct boeken of contact opnemen?",
        "Zijn prijzen, vanaf-prijzen of prijsfactoren begrijpelijk uitgelegd?",
        "Laat de pagina sfeer, stijl en vertrouwen zien zonder nepclaims?",
        "Zijn openingstijden, route, Google-profiel en contactgegevens consistent?",
        "Heeft de pagina FAQ's over boeken, kleuradvies, voorbereiding en planning?"
      ],
      comparison: {
        title: "Compacte salonwebsite of groeisite?",
        leftLabel: "Compact",
        rightLabel: "Groei",
        rows: [
          {
            label: "Geschikt voor",
            left: "Een salon met helder aanbod en vooral behoefte aan professionele basis",
            right: "Een salon met meerdere behandelingen, lokale SEO-ambitie en meer content"
          },
          {
            label: "Inhoud",
            left: "Home, behandelingen, sfeer, contact en boekroute",
            right: "Losse behandelpagina's, FAQ's, lokale SEO, interne links en contentstructuur"
          },
          {
            label: "Beste keuze als",
            left: "Klanten je al kennen en vooral snel informatie zoeken",
            right: "Je meer nieuwe klanten uit Voorschoten en omgeving wilt aantrekken"
          }
        ]
      },
      steps: [
        {
          title: "Salonaanbod scherp maken",
          text: "We bepalen welke behandelingen, stijl en klantvragen bovenaan moeten staan."
        },
        {
          title: "Boekroute ontwerpen",
          text: "We maken de mobiele route naar afspraak, telefoon of formulier kort en helder."
        },
        {
          title: "SEO-structuur bouwen",
          text: "Behandelingen, FAQ's, metadata en interne links krijgen een logische plek."
        },
        {
          title: "Meten en verfijnen",
          text: "Na livegang kijk je welke vragen, behandelingen en contactroutes verder aangescherpt moeten worden."
        }
      ],
      faqs: [
        {
          question: "Wat kost een website voor een kapper in Voorschoten?",
          answer:
            "Dat hangt af van het aantal pagina's, behandelteksten, foto's, boekroute, lokale SEO en onderhoud. Een compacte salonwebsite is vaak genoeg als het aanbod simpel is; een groeisite past beter bij meerdere behandelingen en lokale vindbaarheid."
        },
        {
          question: "Moet ik prijzen op mijn kapperswebsite zetten?",
          answer:
            "Als vaste prijzen lastig zijn, gebruik dan vanaf-prijzen of prijsfactoren. Denk aan haarlengte, kleurtechniek, toner, styling of extra verzorging. Dat maakt de aanvraag beter voorbereid."
        },
        {
          question: "Kan ik mijn bestaande salonfoto's gebruiken?",
          answer:
            "Ja, zolang ze actueel, scherp en representatief zijn. Echte sfeerbeelden werken beter dan generieke stockfoto's, omdat klanten willen voelen of de salon bij hen past."
        },
        {
          question: "Heeft een kapper in Voorschoten lokale SEO nodig?",
          answer:
            "Dat is logisch wanneer je nieuwe klanten uit Voorschoten en omgeving wilt aantrekken. De pagina moet dan wel echte lokale relevantie hebben en niet alleen de plaatsnaam herhalen."
        },
        {
          question: "Kunnen jullie ook mijn Google Business Profile meenemen?",
          answer:
            "Ja. Website en Google Business Profile horen samen te kloppen: behandelingen, openingstijden, foto's, afspraaklink, adres of service-informatie en veelgestelde vragen."
        }
      ],
      qualityNotes: [
        "Authored page 1.",
        "Kapperscontext and Voorschoten context present.",
        "No fake reviews, results, or office claims.",
        "Uses unique valueSections, sections, FAQ, and checklist."
      ]
    };
  }

  if (page.slug === "website-laten-maken-voor-loodgieters-voorschoten") {
    return {
      ...page,
      metaTitle: "Website laten maken voor loodgieters in Voorschoten | MagisData",
      metaDescription:
        "Loodgieterswebsite voor Voorschoten met spoedroute, lekkage- en verstoppingspagina's, servicegebied, mobiel bellen en lokale SEO zonder valse claims.",
      description:
        "Een loodgieterswebsite voor Voorschoten moet rust brengen in een urgente situatie: probleem kiezen, servicegebied checken en snel contact opnemen.",
      directAnswer:
        "Een website voor een loodgieter in Voorschoten moet direct onderscheid maken tussen spoed en gepland werk. Bezoekers willen weten of je helpt bij lekkage, verstopping, sanitair of leidingwerk, of je in Voorschoten werkt, wat ze moeten doorgeven en hoe snel ze contact kunnen starten. De pagina moet geen 24/7 of spoedclaim maken tenzij dat echt klopt.",
      visual: {
        label: "Storingsroute",
        title: "Van probleem naar contact",
        text:
          "De pagina moet een gestreste bezoeker helpen kiezen: is dit spoed, welk probleem speelt er, welke informatie is nodig en hoe loopt de opvolging?",
        items: ["spoed of gepland", "lekkage", "verstopping", "servicegebied", "belroute"]
      },
      highlights: [
        {
          title: "Spoed gescheiden",
          text: "Lekkage en verstopping krijgen een andere route dan renovatie, sanitair of gepland leidingwerk."
        },
        {
          title: "Voorschoten praktisch",
          text: "De pagina maakt servicegebied en bereikbaarheid duidelijk zonder een lokale vestiging te verzinnen."
        },
        {
          title: "Mobiel eerst",
          text: "Telefoon, foto's meesturen en korte probleemuitleg moeten op een telefoon snel werken."
        },
        {
          title: "Betere aanvragen",
          text: "Een goede intake vraagt om locatie, probleemtype, urgentie, foto's en bereikbaarheid."
        }
      ],
      valueSections: [
        {
          title: "Waarom een loodgieterspagina anders is dan een gewone servicepagina",
          paragraphs: [
            "Een bezoeker op een loodgieterswebsite heeft vaak haast. Bij lekkage of verstopping is er weinig geduld voor merkverhalen, sliders of lange introducties. De pagina moet eerst helpen bepalen wat er aan de hand is en welke contactroute past.",
            "Daarom werkt deze pagina met probleemcategorieen in plaats van algemene diensten. Lekkage, verstopping, sanitair, leidingwerk en onderhoud vragen elk om andere informatie en een andere verwachting."
          ]
        },
        {
          title: "Wat waarde toevoegt voor bezoekers in Voorschoten",
          paragraphs: [
            "Een sterke pagina legt uit welke informatie de loodgieter nodig heeft: adres of wijk, type probleem, foto's, wanneer het is ontstaan, of er nog water loopt en of er schade zichtbaar is. Dat helpt de bezoeker en maakt de aanvraag bruikbaarder.",
            "Voor Voorschoten is lokale duidelijkheid belangrijk omdat klanten ook aanbieders uit Leiden en omliggende plaatsen vergelijken. Een feitelijke uitleg van werkgebied is sterker dan doen alsof er overal een eigen kantoor zit."
          ]
        },
        {
          title: "Hoe deze pagina vindbaarheid kan ondersteunen",
          paragraphs: [
            "Loodgieters zoeken niet op een abstracte term, maar op concrete problemen: lekkage oplossen, afvoer verstopt, wc verstopping, kraan vervangen of leidingwerk laten doen. De website moet die vragen met aparte blokken of pagina's beantwoorden.",
            "FAQ's kunnen echte twijfels wegnemen: wanneer is iets spoed, welke foto's moet ik sturen, kan een verstopping wachten, wat bepaalt de prijs en wat gebeurt er na het eerste telefoontje? Zulke inhoud maakt de pagina nuttiger dan een herhaalde plaatsnaamtekst."
          ]
        }
      ],
      sections: [
        {
          title: "Bovenaan moet de bezoeker meteen kunnen kiezen",
          text:
            "Een loodgieterswebsite moet de eerste stress verlagen. Niet eerst uitleggen wie je bent, maar eerst duidelijk maken welke problemen je oppakt en hoe contact loopt.",
          items: [
            {
              title: "Spoed of geen spoed",
              text:
                "Maak duidelijk welke situaties direct bellen vragen en welke beter via een offerte- of contactformulier lopen."
            },
            {
              title: "Probleemcategorie",
              text:
                "Gebruik herkenbare keuzes zoals lekkage, verstopping, sanitair, leidingwerk en onderhoud."
            },
            {
              title: "Vervolgverwachting",
              text:
                "Vertel kort wat iemand moet doorgeven en wanneer hij of zij reactie kan verwachten."
            }
          ]
        },
        {
          title: "Wat vertrouwen geeft bij loodgieterswerk",
          text:
            "Bij waterproblemen gaat vertrouwen niet om mooie woorden. Het gaat om duidelijk proces, realistische bereikbaarheid en feitelijke uitleg.",
          items: [
            {
              title: "Geen valse spoedclaim",
              text:
                "Claim alleen 24/7, spoedservice of garanties als die echt bestaan en zichtbaar onderbouwd kunnen worden."
            },
            {
              title: "Werkgebied helder",
              text:
                "Leg uit dat Voorschoten binnen het servicegebied valt en welke omliggende plaatsen eventueel ook bediend worden."
            },
            {
              title: "Voorbereiding",
              text:
                "Vraag foto's, probleemlocatie, urgentie en contactgegevens zodat de loodgieter sneller kan inschatten wat nodig is."
            }
          ]
        },
        {
          title: "Lokale SEO voor loodgieters zonder doorway-risico",
          text:
            "De pagina moet over loodgietersproblemen gaan, niet alleen over Voorschoten. Lokale relevantie ontstaat door servicegebied, praktische voorbeelden en echte klantvragen.",
          items: [
            {
              title: "Probleempagina's",
              text:
                "Maak later aparte pagina's voor lekkage, verstopping en sanitair als daar genoeg vraag en inhoud voor is."
            },
            {
              title: "Interne links",
              text:
                "Verbind de pagina met lokale SEO, prijzen, contact en eventuele loodgieter-dienstpagina's."
            },
            {
              title: "FAQ en schema",
              text:
                "Gebruik FAQ alleen voor vragen die zichtbaar worden beantwoord. Geen review- of rating-schema zonder echte bron."
            }
          ]
        }
      ],
      checklistTitle: "Checklist voor een loodgieterswebsite in Voorschoten",
      checklist: [
        "Kan iemand direct kiezen tussen spoed en gepland werk?",
        "Zijn lekkage, verstopping, sanitair en leidingwerk apart herkenbaar?",
        "Staat de belroute op mobiel bovenaan of dicht bij de probleemkeuze?",
        "Is het servicegebied rond Voorschoten feitelijk uitgelegd?",
        "Vraagt het formulier om probleemtype, urgentie, foto's en bereikbaarheid?",
        "Vermijdt de pagina garanties, 24/7-claims of vestigingsclaims die niet bewezen zijn?"
      ],
      comparison: {
        title: "Spoedpagina of groeisite voor loodgieters?",
        leftLabel: "Compact",
        rightLabel: "Groei",
        rows: [
          {
            label: "Doel",
            left: "Snel professioneel vindbaar zijn met heldere contactroute",
            right: "Meer lokale zoekvragen afdekken rond specifieke problemen"
          },
          {
            label: "Inhoud",
            left: "Home, diensten, servicegebied, contact en FAQ",
            right: "Aparte pagina's voor lekkage, verstopping, sanitair en onderhoud"
          },
          {
            label: "Past als",
            left: "Je vooral bestaande vraag beter wilt opvangen",
            right: "Je structureel lokale aanvragen uit Voorschoten en omgeving wilt opbouwen"
          }
        ]
      },
      steps: [
        {
          title: "Problemen ordenen",
          text: "We scheiden spoed, lekkage, verstopping, sanitair en gepland leidingwerk."
        },
        {
          title: "Mobiele route bouwen",
          text: "Belknop, probleemuitleg en formulier worden kort en duidelijk ingericht."
        },
        {
          title: "Lokale basis schrijven",
          text: "Servicegebied, FAQ, metadata en interne links worden feitelijk opgebouwd."
        },
        {
          title: "Aanvragen verbeteren",
          text: "Na livegang kun je meten welke probleemcategorieen contact opleveren en waar extra pagina's zinvol zijn."
        }
      ],
      faqs: [
        {
          question: "Wat moet bovenaan een loodgieterswebsite staan?",
          answer:
            "Een duidelijke keuze tussen spoed en gepland werk, herkenbare probleemcategorieen, servicegebied en een directe bel- of contactroute. Bij urgentie telt snelheid meer dan lange introductietekst."
        },
        {
          question: "Moet ik 24/7 spoedservice noemen?",
          answer:
            "Alleen als je dat echt levert. Als je bereikbaarheid beperkter is, is het beter om eerlijk te zijn over tijden, opvolging en wat iemand alvast kan doorgeven."
        },
        {
          question: "Welke loodgietersdiensten verdienen eigen pagina's?",
          answer:
            "Meestal lekkage, verstopping, sanitair en leidingwerk. Aparte pagina's zijn pas zinvol als je genoeg unieke uitleg, voorbeelden, FAQ's en contactinformatie hebt."
        },
        {
          question: "Hoe maak je een loodgieterspagina lokaal relevant voor Voorschoten?",
          answer:
            "Door werkgebied, bereikbaarheid, lokale vergelijking met omliggende aanbieders en praktische klantvragen te benoemen. Niet door alleen de plaatsnaam vaak te herhalen."
        },
        {
          question: "Wat kan een formulier beter vragen?",
          answer:
            "Vraag probleemtype, urgentie, adres of plaats, foto's, wanneer het probleem begon, of er schade is en hoe iemand bereikbaar is. Houd het formulier kort genoeg voor mobiel."
        }
      ],
      qualityNotes: [
        "Authored page 2.",
        "Loodgieter-specific urgency, intake, and service-area content present.",
        "No false 24/7, guarantee, or local-office claims.",
        "Uses unique valueSections, sections, FAQ, and checklist."
      ]
    };
  }

  if (page.slug === "website-laten-maken-voor-elektriciens-voorschoten") {
    return {
      ...page,
      metaTitle: "Website laten maken voor elektriciens in Voorschoten | MagisData",
      metaDescription:
        "Elektricienswebsite voor Voorschoten met storing-vs-project routing, veiligheidsuitleg, dienstpagina's, intakevragen en lokale SEO zonder verzonnen certificaten.",
      description:
        "Een elektricienswebsite voor Voorschoten moet bezoekers helpen inschatten of ze een storing, inspectie of installatieproject hebben en welke vervolgstap veilig is.",
      directAnswer:
        "Een website voor een elektricien in Voorschoten moet direct onderscheid maken tussen storingen en gepland installatiewerk. Bezoekers willen weten of het gaat om een groepenkast, kortsluiting, laadpunt, verlichting, inspectie of uitbreiding, welke informatie ze moeten doorgeven en wanneer ze beter direct bellen. Veiligheid en certificering mogen alleen worden genoemd als ze feitelijk kloppen.",
      visual: {
        label: "Diagnoseroute",
        title: "Storing, inspectie of project?",
        text:
          "De pagina moet bezoekers naar de juiste route sturen: direct bellen bij risico, intake bij projectwerk en duidelijke voorbereiding bij offertevragen.",
        items: ["storing", "groepenkast", "laadpunt", "inspectie", "offerte"]
      },
      highlights: [
        {
          title: "Veiligheid eerst",
          text: "Risicosignalen zoals brandlucht, vonken of uitvallende groepen verdienen een duidelijke contactroute."
        },
        {
          title: "Projecten apart",
          text: "Laadpunten, groepenkasten en uitbreidingen vragen om andere informatie dan acute storingen."
        },
        {
          title: "Voorschoten feitelijk",
          text: "Servicegebied en bereikbaarheid worden helder uitgelegd zonder neplocatie of overdreven claims."
        },
        {
          title: "Bewijs zonder verzinnen",
          text: "Certificaten, keurmerken en garanties worden alleen gebruikt wanneer ze echt aantoonbaar zijn."
        }
      ],
      valueSections: [
        {
          title: "Waarom elektricienscontent voorzichtig moet zijn",
          paragraphs: [
            "Bij elektra speelt veiligheid een grotere rol dan bij veel andere lokale diensten. Een pagina mag bezoekers niet het gevoel geven dat ze zelf risicovolle situaties moeten oplossen. De inhoud moet helpen herkennen wanneer direct contact nodig is.",
            "Daarom werkt een goede elektricienswebsite met duidelijke scheiding tussen storing, inspectie en project. De pagina verkoopt niet alleen een dienst, maar geeft richting op een moment waarop de bezoeker zekerheid zoekt."
          ]
        },
        {
          title: "Welke informatie bezoekers echt nodig hebben",
          paragraphs: [
            "Voor een storing wil iemand weten wat hij moet doorgeven: welke groep valt uit, of er brandlucht is, wanneer het probleem begon, of meerdere ruimtes geraakt worden en of er foto's mogelijk zijn. Voor projectwerk gaat het juist om woningtype, gewenste uitbreiding, planning en bestaande installatie.",
            "Die intake-informatie maakt de pagina nuttig. Het helpt de bezoeker om de vraag beter te formuleren en voorkomt dat de website alleen uit algemene termen als betrouwbaar, snel en professioneel bestaat."
          ]
        },
        {
          title: "Hoe deze pagina kan groeien zonder herhaling",
          paragraphs: [
            "Als er genoeg vraag is, kunnen groepenkast vervangen, laadpaal installeren, storing oplossen en elektra inspectie later eigen pagina's krijgen. Elke pagina moet dan een ander probleem beantwoorden in plaats van dezelfde tekst met een ander keyword te herhalen.",
            "Voor Voorschoten is de eerste stap vooral duidelijkheid: servicegebied, probleemroutes, veilige contactinstructies, realistische verwachtingen en interne links naar prijzen, lokale SEO en contact."
          ]
        }
      ],
      sections: [
        {
          title: "De eerste keuze: storing of project",
          text:
            "Een elektricienpagina moet bezoekers niet in een algemeen dienstenoverzicht laten zoeken. De belangrijkste keuze is of er een acuut probleem speelt of een gepland project.",
          items: [
            {
              title: "Storing",
              text:
                "Kortsluiting, uitvallende groepen, brandlucht of vonken vragen om een snelle en duidelijke contactroute."
            },
            {
              title: "Project",
              text:
                "Groepenkast vervangen, laadpunt plaatsen of uitbreiding van elektra vraagt om voorbereiding en offerte-informatie."
            },
            {
              title: "Inspectie",
              text:
                "Bij twijfel over veiligheid of capaciteit is een inspectie- of adviesroute logischer dan direct projectverkoop."
            }
          ]
        },
        {
          title: "Wat vertrouwen geeft bij elektra",
          text:
            "Bezoekers willen weten dat de elektricien zorgvuldig werkt. Dat vraagt om procesuitleg, niet om onbewezen claims.",
          items: [
            {
              title: "Veiligheidsproces",
              text:
                "Leg uit hoe een aanvraag wordt beoordeeld en welke informatie nodig is voordat werk wordt ingepland."
            },
            {
              title: "Certificaten als ze kloppen",
              text:
                "Noem alleen erkenningen, certificaten of keurmerken die de elektricien werkelijk heeft en kan tonen."
            },
            {
              title: "Heldere voorbereiding",
              text:
                "Vraag foto's van groepenkast, locatie, gewenste aansluiting en korte omschrijving van het probleem."
            }
          ]
        },
        {
          title: "Lokale vindbaarheid voor elektriciens",
          text:
            "Lokale SEO werkt beter wanneer de pagina echte elektrische vragen beantwoordt. Alleen Voorschoten herhalen voegt weinig toe.",
          items: [
            {
              title: "Dienstclusters",
              text:
                "Maak onderscheid tussen storing, groepenkast, laadpunt, verlichting, inspectie en uitbreiding."
            },
            {
              title: "Servicegebied",
              text:
                "Benoem waar de elektricien werkt en voorkom claims over adressen of vestigingen die niet bestaan."
            },
            {
              title: "FAQ-blokken",
              text:
                "Beantwoord concrete vragen over veiligheid, voorbereiding, planning en prijsfactoren."
            }
          ]
        }
      ],
      checklistTitle: "Checklist voor een elektricienswebsite in Voorschoten",
      checklist: [
        "Kan iemand direct kiezen tussen storing, inspectie en project?",
        "Staan risicosituaties duidelijk genoeg uitgelegd zonder doe-het-zelf advies?",
        "Zijn groepenkast, laadpunt, verlichting en uitbreiding apart scanbaar?",
        "Is het servicegebied rond Voorschoten feitelijk beschreven?",
        "Vraagt het formulier om foto's, probleemtype, locatie en bereikbaarheid?",
        "Worden certificaten of garanties alleen genoemd als ze echt aantoonbaar zijn?"
      ],
      comparison: {
        title: "Compacte elektricienswebsite of groeisite?",
        leftLabel: "Compact",
        rightLabel: "Groei",
        rows: [
          {
            label: "Doel",
            left: "Heldere basis voor storingen en projectaanvragen",
            right: "Meer vindbaarheid rond specifieke elektrische diensten"
          },
          {
            label: "Inhoud",
            left: "Home, diensten, servicegebied, contact en FAQ",
            right: "Aparte pagina's voor groepenkast, laadpunt, storing en inspectie"
          },
          {
            label: "Past als",
            left: "Je vooral aanvragen beter wilt laten binnenkomen",
            right: "Je lokaal sterker wilt concurreren op meerdere zoekvragen"
          }
        ]
      },
      steps: [
        {
          title: "Dienstkaart maken",
          text: "We scheiden storingen, inspecties en projecten zodat bezoekers sneller de juiste route vinden."
        },
        {
          title: "Veiligheidscopy schrijven",
          text: "We formuleren risico's voorzichtig en zonder gevaarlijk doe-het-zelf advies."
        },
        {
          title: "Intake verbeteren",
          text: "Formulier en CTA vragen om informatie die een elektricien echt nodig heeft."
        },
        {
          title: "Zoekstructuur uitbreiden",
          text: "Later kunnen specifieke diensten eigen pagina's krijgen wanneer daar genoeg inhoud voor is."
        }
      ],
      faqs: [
        {
          question: "Wat moet een elektricienswebsite bovenaan duidelijk maken?",
          answer:
            "Of de bezoeker een storing, inspectie of project heeft. Daarna moeten servicegebied, contactroute en benodigde informatie zichtbaar zijn."
        },
        {
          question: "Mag ik certificaten en keurmerken noemen?",
          answer:
            "Alleen als ze echt kloppen en zichtbaar onderbouwd kunnen worden. Bij elektra is vertrouwen belangrijk, maar verzonnen bewijs schaadt juist."
        },
        {
          question: "Welke diensten verdienen eigen SEO-pagina's?",
          answer:
            "Vaak groepenkast vervangen, laadpaal of laadpunt installeren, elektrische storing oplossen, verlichting en elektra inspectie. Elke pagina moet eigen uitleg en FAQ hebben."
        },
        {
          question: "Hoe maak je de pagina lokaal relevant voor Voorschoten?",
          answer:
            "Door servicegebied, bereikbaarheid en lokale klantvragen feitelijk te benoemen. De pagina moet vooral elektrische problemen goed uitleggen."
        },
        {
          question: "Wat moet een aanvraagformulier vragen?",
          answer:
            "Vraag om probleemtype, locatie, foto's van de groepenkast of situatie, urgentie, gewenste planning en contactgegevens. Houd het kort genoeg voor mobiel."
        }
      ],
      qualityNotes: [
        "Authored page 3.",
        "Electrician-specific safety and project routing present.",
        "No invented certification, guarantee, or office claims.",
        "Uses unique valueSections, sections, FAQ, and checklist."
      ]
    };
  }

  if (page.slug === "website-laten-maken-voor-hoveniers-voorschoten") {
    return {
      ...page,
      metaTitle: "Website laten maken voor hoveniers in Voorschoten | MagisData",
      metaDescription:
        "Hovenierswebsite voor Voorschoten met tuinontwerp, aanleg, onderhoud, projectfoto's, seizoensvragen, offerte-intake en lokale SEO.",
      description:
        "Een hovenierswebsite voor Voorschoten moet laten zien welk tuinwerk je doet, hoe je projecten aanpakt en welke informatie nodig is voor een goede aanvraag.",
      directAnswer:
        "Een website voor een hovenier in Voorschoten moet direct onderscheid maken tussen tuinontwerp, tuinaanleg, tuinonderhoud en renovatie. Bezoekers willen projectvoorbeelden zien, begrijpen hoe een aanvraag loopt, weten welke foto's of afmetingen nuttig zijn en kunnen inschatten of de hovenier past bij hun tuin en planning. Lokale context helpt alleen wanneer werkgebied en projectsoort feitelijk kloppen.",
      visual: {
        label: "Tuinprojectroute",
        title: "Van tuinwens naar aanvraag",
        text:
          "De pagina vertaalt een vage tuinwens naar een concreet gesprek: type tuin, gewenste aanpak, foto's, seizoen en vervolgstap.",
        items: ["tuinontwerp", "aanleg", "onderhoud", "projectfoto's", "intake"]
      },
      highlights: [
        {
          title: "Projecten zichtbaar",
          text: "Voor en na, werkwijze en materiaalkeuzes geven meer vertrouwen dan algemene beloftes."
        },
        {
          title: "Seizoen en planning",
          text: "Onderhoud, aanleg en renovatie hebben elk hun eigen timing en voorbereiding."
        },
        {
          title: "Voorschoten-context",
          text: "De pagina koppelt werkgebied aan echte aanvragen, niet aan een verzonnen lokale vestiging."
        },
        {
          title: "Betere offertevragen",
          text: "Een goede intake vraagt om foto's, afmetingen, wensen, budgetrichting en planning."
        }
      ],
      valueSections: [
        {
          title: "Waarom hovenierscontent visueel en praktisch moet zijn",
          paragraphs: [
            "Bij hovenierswerk wil een bezoeker niet alleen lezen dat het resultaat mooi wordt. Hij wil voorbeelden zien, begrijpen welke soorten werk je doet en weten of zijn tuinwens past bij jouw aanpak.",
            "Daarom moet de pagina projectgericht zijn. Tuinontwerp, aanleg, onderhoud en renovatie hebben andere vragen, andere bewijsstukken en andere CTA's. Die verschillen maken de pagina waardevol en voorkomen herhaling."
          ]
        },
        {
          title: "Welke informatie een tuinaanvraag beter maakt",
          paragraphs: [
            "Een sterke aanvraag vraagt om meer dan naam en telefoonnummer. Foto's van de tuin, globale afmetingen, gewenste stijl, huidige probleem, timing en budgetrichting helpen om een eerste gesprek nuttiger te maken.",
            "De website kan bezoekers daarop voorbereiden zonder drempel te hoog te maken. Korte uitleg bij het formulier zorgt dat iemand weet wat handig is om mee te sturen."
          ]
        },
        {
          title: "Hoe lokale SEO voor hoveniers inhoud krijgt",
          paragraphs: [
            "Een hovenierspagina voor Voorschoten wordt pas sterk wanneer de inhoud tuinvragen behandelt die lokaal relevant kunnen zijn: onderhoud, renovatie, kleine stadstuinen, grotere tuinen, seizoenswerk en bereikbaarheid.",
            "Als er genoeg projectmateriaal is, kunnen losse pagina's voor tuinontwerp, tuinaanleg en tuinonderhoud later ieder een eigen rol krijgen. Dat is sterker dan dezelfde plaatsnaampagina voor meerdere dorpen kopiëren."
          ]
        }
      ],
      sections: [
        {
          title: "Bezoekers zoeken een passende aanpak, niet alleen een hovenier",
          text:
            "Een tuinproject voelt voor klanten vaak groot. De pagina moet duidelijk maken welk type werk je doet en hoe iemand van eerste idee naar aanvraag gaat.",
          items: [
            {
              title: "Tuinontwerp",
              text:
                "Leg uit wanneer ontwerp nodig is, welke keuzes worden gemaakt en welke input de klant kan voorbereiden."
            },
            {
              title: "Tuinaanleg",
              text:
                "Laat zien hoe aanlegprojecten verlopen: intake, plan, materiaalkeuze, planning en uitvoering."
            },
            {
              title: "Tuinonderhoud",
              text:
                "Maak onderscheid tussen eenmalige onderhoudsbeurt, seizoenswerk en terugkerend onderhoud."
            }
          ]
        },
        {
          title: "Bewijs dat past bij hovenierswerk",
          text:
            "Voor hoveniers zijn beelden en proces belangrijk. Niet als decoratie, maar als bewijs dat de bezoeker helpt inschatten of de stijl past.",
          items: [
            {
              title: "Projectfoto's",
              text:
                "Gebruik echte foto's met korte context: type tuin, wens, gekozen oplossing en eventueel seizoen."
            },
            {
              title: "Werkwijze",
              text:
                "Vertel hoe het proces loopt, van intake en tuinplan tot uitvoering en oplevering."
            },
            {
              title: "Materiaal en onderhoud",
              text:
                "Leg uit welke keuzes invloed hebben op onderhoud, uitstraling, duurzaamheid en planning."
            }
          ]
        },
        {
          title: "Lokale vindbaarheid zonder generieke regio-copy",
          text:
            "De pagina moet niet doen alsof elke tuin in Voorschoten hetzelfde is. Lokale context is ondersteunend; de echte waarde zit in projectuitleg.",
          items: [
            {
              title: "Werkgebied",
              text:
                "Benoem Voorschoten feitelijk als werkgebied wanneer dat klopt, zonder adres of vestiging te claimen."
            },
            {
              title: "Seizoensvragen",
              text:
                "Gebruik FAQ's over voorjaarsonderhoud, renovatieplanning en wanneer aanleg logisch is."
            },
            {
              title: "Interne structuur",
              text:
                "Koppel de pagina aan webontwikkeling, lokale SEO, prijzen en later aan losse hoveniersdiensten."
            }
          ]
        }
      ],
      checklistTitle: "Checklist voor een hovenierswebsite in Voorschoten",
      checklist: [
        "Zijn tuinontwerp, aanleg, onderhoud en renovatie apart herkenbaar?",
        "Laat de pagina echte projectfoto's of procesuitleg zien zonder nepresultaten?",
        "Vraagt het formulier om foto's, afmetingen, wensen, planning en budgetrichting?",
        "Is duidelijk of de hovenier in Voorschoten werkt zonder nepvestiging te claimen?",
        "Zijn seizoensvragen en onderhoudsvragen beantwoord in gewone taal?",
        "Is de mobiele aanvraagroute kort genoeg voor iemand die foto's wil meesturen?"
      ],
      comparison: {
        title: "Compacte hovenierswebsite of groeisite?",
        leftLabel: "Compact",
        rightLabel: "Groei",
        rows: [
          {
            label: "Doel",
            left: "Professioneel uitleggen wat je doet en aanvragen ontvangen",
            right: "Meer vindbaarheid rond ontwerp, aanleg, onderhoud en renovatie"
          },
          {
            label: "Inhoud",
            left: "Home, diensten, projectbeelden, werkwijze en contact",
            right: "Aparte dienstpagina's, projectcases, FAQ's en lokale content"
          },
          {
            label: "Past als",
            left: "Je vooral vertrouwen en betere aanvragen nodig hebt",
            right: "Je genoeg projecten en diensten hebt om inhoudelijk uit te bouwen"
          }
        ]
      },
      steps: [
        {
          title: "Diensten scheiden",
          text: "We bepalen welke rol ontwerp, aanleg, onderhoud en renovatie op de pagina krijgen."
        },
        {
          title: "Bewijs verzamelen",
          text: "We ordenen projectfoto's, procesinformatie en praktische klantvragen."
        },
        {
          title: "Aanvraagroute maken",
          text: "Het formulier vraagt om informatie die een hoveniersgesprek direct concreter maakt."
        },
        {
          title: "Uitbouwen waar zinvol",
          text: "Later kunnen sterke diensten of projecttypen eigen pagina's krijgen."
        }
      ],
      faqs: [
        {
          question: "Wat moet bovenaan een hovenierswebsite staan?",
          answer:
            "Maak direct duidelijk of je tuinontwerp, aanleg, onderhoud of renovatie doet. Toon daarna bewijs, werkwijze en een duidelijke aanvraagroute."
        },
        {
          question: "Zijn projectfoto's belangrijk voor SEO?",
          answer:
            "Ze helpen vooral bezoekers vertrouwen krijgen. Voor SEO worden ze sterker wanneer ze goede alt-tekst, context en bijbehorende projectuitleg krijgen."
        },
        {
          question: "Welke informatie moet een offerteformulier vragen?",
          answer:
            "Vraag foto's, globale afmetingen, gewenste werkzaamheden, stijlvoorkeur, planning en eventueel budgetrichting. Houd het formulier overzichtelijk."
        },
        {
          question: "Hoe maak je de pagina lokaal relevant voor Voorschoten?",
          answer:
            "Door werkgebied, bereikbaarheid en lokale servicecontext feitelijk te noemen, maar de pagina vooral te vullen met nuttige hoveniersinformatie."
        },
        {
          question: "Wanneer zijn losse dienstpagina's zinvol?",
          answer:
            "Wanneer ontwerp, aanleg of onderhoud genoeg eigen vragen, foto's en voorbeelden heeft. Dan voegt elke pagina echt iets toe."
        }
      ],
      qualityNotes: [
        "Authored page 4.",
        "Hoveniers-specific visual proof, seasonal planning, and intake content present.",
        "No fake project results or local-office claims.",
        "Uses unique valueSections, sections, FAQ, and checklist."
      ]
    };
  }

  return page;
}

export const draftKeywordPages: KeywordDraftPageContent[] = [
  ...makeBranchLocationPages(),
  ...makeBranchGuides(),
  ...makeLocalSeoPages(),
  ...makePricingPages(),
  ...makeAiVisibilityPages(),
  ...makeTechnicalGuides()
].map(applyAuthoredKeywordPageContent).sort((a, b) => a.id - b.id);

export function getDraftKeywordPage(slug: string) {
  return draftKeywordPages.find((page) => page.slug === slug);
}

export const draftKeywordPageStats = {
  total: draftKeywordPages.length,
  pages: draftKeywordPages.filter((page) => page.pageKind === "page").length,
  guides: draftKeywordPages.filter((page) => page.pageKind === "guide").length,
  p1: draftKeywordPages.filter((page) => page.priority === "P1").length,
  p2: draftKeywordPages.filter((page) => page.priority === "P2").length,
  p3: draftKeywordPages.filter((page) => page.priority === "P3").length
};
