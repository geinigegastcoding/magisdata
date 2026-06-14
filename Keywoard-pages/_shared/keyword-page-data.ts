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
          directAnswer: `Voor ${branch.plural} in ${place.name} moet een website direct uitleggen welke diensten je levert, waar je werkt, waarom klanten je kunnen vertrouwen en hoe zij contact opnemen. De pagina hoort ${branch.problem}, met ${place.context.toLowerCase()}`,
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
            { title: "SEO-basis", text: "Metadata, H1, interne links, FAQ en schema worden vanaf start meegenomen." }
          ],
          sections: [
            {
              title: `Waarom ${branch.plural} in ${place.name} meer nodig hebben dan een mooie homepage`,
              text: `Klanten zoeken niet alleen een naam. Ze willen snel weten of je past bij hun vraag, of je in ${place.name} werkt en wat de volgende stap is.`,
              items: [
                { title: "Bezoeker wil richting", text: branch.questions[0] },
                { title: "Twijfel moet weg", text: `Bewijs hoort dichtbij ${branch.trust}, niet verstopt onderaan de pagina.` },
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
                { title: "Geen verzonnen claims", text: "Geen neplocatie, geen fake reviews, geen garanties over posities." }
              ]
            }
          ],
          checklistTitle: `Checklist voor ${branch.plural} in ${place.name}`,
          checklist: [
            `Staat bovenaan wat je doet voor klanten in ${place.name}?`,
            `Zijn ${branch.services.slice(0, 2).join(" en ").toLowerCase()} apart scanbaar?`,
            `Is duidelijk hoe iemand ${branch.conversion} kan starten?`,
            `Staan ${branch.proof.slice(0, 2).join(" en ")} dichtbij de keuze?`,
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
            { title: "Publiceren", text: "Pas live zetten wanneer inhoud uniek genoeg is en sitemap bewust wordt bijgewerkt." }
          ],
          faqs: [
            { question: `Wat kost een website voor ${branch.plural} in ${place.name}?`, answer: "Dat hangt af van aantal pagina's, copy, SEO, beelden en onderhoud. De prijzenpagina geeft richting; voor een concrete keuze is pakketadvies logischer." },
            { question: "Kan ik bestaande foto's en teksten gebruiken?", answer: "Ja, als ze duidelijk en actueel zijn. We scherpen teksten aan zodat klanten en zoekmachines ze beter begrijpen." },
            { question: `Moet ik echt een lokale pagina voor ${place.name} hebben?`, answer: `Alleen als je ${place.name} feitelijk bedient en genoeg eigen context hebt. Anders is een algemene branchepagina sterker.` },
            { question: "Komt deze pagina direct in Google?", answer: "Nee. Publiceer pas na kwaliteitscontrole, interne links en sitemap-update. Rankings worden niet gegarandeerd." }
          ],
          internalLinks: linkSet(branch, place),
          qualityNotes: [
            "Unieke branchevragen aanwezig.",
            "Lokale context aanwezig zonder fake vestiging.",
            "Geen verzonnen testimonials of resultaten.",
            "Sitemap pas handmatig toevoegen bij publicatie."
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
        directAnswer: `Een website voor ${branch.plural} krijgt weinig aanvragen wanneer bezoekers niet snel genoeg zien welke dienst past, waarom jij betrouwbaar bent en welke stap zij moeten zetten. Controleer eerst ${branch.problem}, daarna bewijs en mobiel contact.`,
        visual: {
          label: "Diagnose",
          title: "Waar aanvragen weglekken",
          text: "Aanbod, bewijs en contactroute moeten op hetzelfde moment duidelijk zijn.",
          items: ["aanbod onduidelijk", "bewijs te ver weg", "mobiele CTA zwak", "te weinig lokale context"]
        },
        highlights: [
          { title: "Aanbod", text: `Maak ${branch.services.join(", ").toLowerCase()} apart herkenbaar.` },
          { title: "Bewijs", text: `Gebruik ${branch.proof.join(", ")} waar dat feitelijk beschikbaar is.` },
          { title: "Contact", text: branch.mobile }
        ],
        sections: [
          {
            title: "De drie grootste oorzaken",
            text: `Bij ${branch.plural} ontstaat frictie vaak op het moment dat iemand moet kiezen of contact veilig genoeg voelt.`,
            items: [
              { title: "Onduidelijk aanbod", text: `De bezoeker ziet niet direct of jij helpt met ${branch.services.slice(0, 2).join(" of ").toLowerCase()}.` },
              { title: "Te weinig vertrouwen", text: `${branch.trust} moeten zichtbaar zijn voor de aanvraag.` },
              { title: "Verkeerde contactroute", text: branch.mobile }
            ]
          },
          {
            title: "Wat je eerst zelf kunt verbeteren",
            text: "Begin met kleine inhoudelijke aanpassingen voordat je direct een volledige herbouw plant.",
            items: [
              { title: "Hero herschrijven", text: `Noem doelgroep, dienst en regio in gewone taal.` },
              { title: "Bewijs verplaatsen", text: `Zet ${branch.proof[0]} dichter bij de dienst waar iemand twijfelt.` },
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
          { question: "Kan MagisData kort meekijken?", answer: "Ja. Stuur je belangrijkste pagina mee; dan krijg je praktische feedback zonder verplichting." }
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
          { title: "Bewijs", text: branch.proof.join(", ") },
          { title: "Veelgestelde vragen", text: branch.questions.join(" ") }
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
          "Pagina heeft eigen title, description en FAQ.",
          "CTA past bij de fase van de bezoeker.",
          "Geen claims die je niet kunt onderbouwen."
        ],
        steps: [
          { title: "Bepaal hoofddienst", text: `Kies welke dienst voor ${branch.plural} bovenaan moet staan.` },
          { title: "Orden bewijs", text: `Koppel ${branch.proof[0]} aan de plek waar bezoekers twijfelen.` },
          { title: "Controleer mobiel", text: "Lees de pagina en start contact vanaf een telefoon." },
          { title: "Publiceer bewust", text: "Voeg pas aan sitemap toe wanneer kwaliteit goed genoeg is." }
        ],
        faqs: [
          { question: `Welke pagina's heeft een ${branch.singular} website nodig?`, answer: `Minimaal home, diensten, over/vertrouwen, contact en waar nodig aparte pagina's voor ${branch.services.slice(0, 2).join(" en ").toLowerCase()}.` },
          { question: "Moet ik prijzen noemen?", answer: "Een vaste prijs hoeft niet altijd, maar scopefactoren of indicaties helpen bezoekers wel beter kiezen." },
          { question: "Wat als ik nog weinig foto's of bewijs heb?", answer: "Gebruik dan procesuitleg, heldere dienstinformatie en echte praktische details. Verzin nooit resultaten of reviews." }
        ],
        internalLinks: linkSet(branch),
        qualityNotes: ["Checklist bevat concrete brancheonderdelen.", "Publiceren als inzichtartikel.", "Geen fake bewijs."],
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
          { title: "Publicatie plannen", text: "Zet pas live met metadata, interne links en sitemapkeuze." }
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
      directAnswer: `AI-vindbaarheid voor ${branch.plural} betekent dat je website duidelijk uitlegt welke diensten je aanbiedt, voor wie je werkt, welke regio je bedient en hoe klanten contact opnemen. Voor deze branche zijn vooral ${branch.aiEntities.join(", ")} belangrijk.`,
      visual: {
        label: "AI antwoordkaart",
        title: `Wanneer noemt AI een ${branch.singular}?`,
        text: "AI-systemen combineren zichtbare informatie, entiteiten, FAQ's, schema en externe signalen. Niets wordt gegarandeerd, maar ruis kan omlaag.",
        items: branch.aiEntities
      },
      highlights: [
        { title: "Entiteiten", text: branch.aiEntities.join(", ") },
        { title: "Antwoordblokken", text: branch.questions.join(" ") },
        { title: "Betrouwbaarheid", text: `Maak ${branch.trust} controleerbaar.` }
      ],
      sections: [
        {
          title: "Hoe AI jouw bedrijf probeert te begrijpen",
          text: "AI-systemen zoeken naar samenhang tussen bedrijfsnaam, diensten, locatie, bewijs en antwoorden.",
          items: [
            { title: "Diensten", text: branch.services.join(", ") },
            { title: "Klantvragen", text: branch.questions.join(" ") },
            { title: "Contactroute", text: branch.mobile }
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
                ? `Een goede pagina beantwoordt dit met concrete uitleg over ${branch.services[0].toLowerCase()} en de vervolgstap.`
                : itemIndex === 1
                  ? `Gebruik feitelijke informatie over ${branch.trust}, zonder claims die niet zichtbaar zijn.`
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
        { question: `Wat is specifiek voor ${branch.plural}?`, answer: `Voor ${branch.plural} moet AI vooral ${branch.aiEntities.join(", ")} goed kunnen herkennen.` }
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

function makeTechnicalGuides(): KeywordDraftPageContent[] {
  return technicalGuides.map((guide) =>
    basePage({
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
      directAnswer: `Begin met de belangrijkste controlepunten: ${guide.checks.join(", ")}. Los eerst zichtbare frictie op voordat je nieuwe campagnes, redesigns of extra pagina's plant.`,
      visual: {
        label: "Controlepaneel",
        title: "Van probleem naar prioriteit",
        text: "Werk van zichtbaar risico naar technische oorzaak en meet daarna of aanvragen verbeteren.",
        items: guide.checks
      },
      highlights: [
        { title: "Zelf te checken", text: guide.checks.slice(0, 3).join(", ") },
        { title: "Wanneer hulp", text: "Als techniek, SEO of conversie elkaar raken." },
        { title: "Geen ruis", text: "Alleen verbeteren wat bezoeker of vindbaarheid echt raakt." }
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
          text: "Vraag hulp wanneer meerdere onderdelen samenhangen of wanneer je niet zeker weet wat publicatie of SEO raakt.",
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
        { question: "Kan MagisData meekijken?", answer: "Ja. Stuur de pagina of situatie mee voor korte praktische feedback." }
      ],
      internalLinks: linkSet(),
      qualityNotes: ["Guide-intentie: leren/fixen.", "Praktische checklist aanwezig.", "Soft CTA."],
      schemaType: "Article"
    })
  );
}

export const draftKeywordPages: KeywordDraftPageContent[] = [
  ...makeBranchLocationPages(),
  ...makeBranchGuides(),
  ...makeLocalSeoPages(),
  ...makePricingPages(),
  ...makeAiVisibilityPages(),
  ...makeTechnicalGuides()
].sort((a, b) => a.id - b.id);

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
