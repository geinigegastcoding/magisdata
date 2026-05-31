import type { PageContent } from "@/content/pages";

export type LandingPage = PageContent & {
  slug: string;
  kind: "service" | "industry" | "location" | "legal" | "thanks";
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

function makeWebsitePage({
  slug,
  eyebrow,
  title,
  description,
  kind,
  audience,
  location,
  answer,
  deliverables,
  audienceFit,
  serviceItems,
  extraFaqs = []
}: {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  kind: LandingPage["kind"];
  audience: string;
  location?: string;
  answer?: string;
  deliverables?: { title: string; text: string }[];
  audienceFit?: PageContent["audienceFit"];
  serviceItems?: { title: string; text: string }[];
  extraFaqs?: { question: string; answer: string }[];
}): LandingPage {
  const place = location ? ` in ${location}` : "";

  return {
    slug,
    kind,
    eyebrow,
    title,
    description,
    metaTitle: title,
    metaDescription: description,
    keywords: [title, `website laten maken${place}`, audience, "MagisData"],
    directAnswer: answer
      ? {
          title: `Wat betekent dit voor ${audience}${place}?`,
          text: answer
        }
      : undefined,
    deliverables,
    audienceFit,
    primaryCta: "Vraag gratis websiteplan aan",
    secondaryCta: "Bekijk SEO aanpak",
    heroPoints: [
      "Snelle website met duidelijke boodschap",
      "SEO-basis vanaf de eerste pagina",
      "Gebouwd voor vertrouwen en aanvragen"
    ],
    sections: [
      {
        title: `Waarom ${audience} een duidelijke website nodig hebben`,
        text:
          `Klanten vergelijken snel. Een goede website${place} maakt direct duidelijk wat je doet, waar je helpt en waarom iemand jou kan vertrouwen.`,
        items: serviceItems ?? [
          {
            title: "Duidelijke servicepagina's",
            text:
              "We maken per dienst helder wat je levert, voor wie het is en welke volgende stap logisch is."
          },
          {
            title: "Lokale vindbaarheid",
            text:
              "We verwerken zoekintentie, plaatsnamen en klantvragen zonder teksten onnatuurlijk te maken."
          },
          {
            title: "Meer aanvragen",
            text:
              "Knoppen, contactroutes en vertrouwenstekens staan op plekken waar bezoekers ze verwachten."
          }
        ]
      },
      {
        title: "Wat MagisData oplevert",
        text:
          "Je krijgt geen losse template, maar een rustige websitebasis die later makkelijk kan groeien met extra diensten, cases en inzichten.",
        items: [
          {
            title: "Structuur",
            text:
              "We bepalen welke pagina's nodig zijn en hoe bezoekers logisch door de site bewegen."
          },
          {
            title: "Copy",
            text:
              "We schrijven korte, concrete teksten die klanten en zoekmachines goed begrijpen."
          },
          {
            title: "Techniek",
            text:
              "We letten op snelheid, mobiel gebruik, metadata, schema en indexeerbaarheid."
          }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "Keuzehulp",
        title: `Wat klanten willen zien voordat ze ${audience}${place} benaderen`,
        text:
          `Een bezoeker zoekt niet alleen een mooie website. Die wil snel weten of je beschikbaar bent, welke diensten je levert, of je in de juiste regio werkt en waarom je betrouwbaar genoeg bent om contact mee op te nemen.`,
        items: [
          {
            title: "Dienst en regio duidelijk",
            text:
              `Pagina's moeten concreet uitleggen wat je doet${place}, welke problemen je oplost en wanneer iemand jou moet bellen of mailen.`
          },
          {
            title: "Bewijs dicht bij de keuze",
            text:
              "Reviews, cases, foto's, garanties of voorbeelden werken het best op de plekken waar bezoekers twijfelen."
          },
          {
            title: "Contact zonder zoeken",
            text:
              "Telefoon, formulier, e-mail en vervolgstappen moeten logisch zichtbaar zijn, vooral op mobiel."
          }
        ]
      }
    ],
    steps: [
      { title: "Kans bepalen", text: "We bekijken doelgroep, regio, diensten en concurrentie." },
      { title: "Pagina's maken", text: "We bouwen de belangrijkste pagina's eerst." },
      { title: "SEO klaarzetten", text: "We zetten metadata, interne links en schema goed neer." },
      { title: "Verbeteren", text: "We vullen aan op basis van zoekgedrag en aanvragen." }
    ],
    faqs: [
      {
        question: `Is deze website geschikt voor ${audience}?`,
        answer:
          `Ja. De opbouw is afgestemd op hoe klanten ${audience}${place} zoeken, beoordelen en benaderen.`
      },
      {
        question: "Kan de website later uitgebreid worden?",
        answer:
          "Ja. De structuur houdt ruimte voor extra diensten, cases, blogs en lokale pagina's."
      },
      {
        question: "Helpt dit ook met Google?",
        answer:
          "Ja. We bouwen met duidelijke koppen, sterke interne links, metadata, sitemap en schema."
      },
      ...extraFaqs
    ]
  };
}

function makeGrowthPage({
  slug,
  eyebrow,
  title,
  description,
  primaryKeyword,
  secondaryKeywords,
  audience,
  promise,
  directAnswer,
  deliverables,
  comparison,
  audienceFit,
  presentation,
  heroPoints,
  sections,
  detailSections,
  steps,
  faqs,
  primaryCta,
  secondaryCta
}: {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  audience: string;
  promise: string;
  directAnswer?: string;
  deliverables?: { title: string; text: string }[];
  comparison?: { title: string; text: string }[];
  audienceFit?: PageContent["audienceFit"];
  presentation?: PageContent["presentation"];
  heroPoints?: string[];
  sections?: PageContent["sections"];
  detailSections?: PageContent["detailSections"];
  steps?: PageContent["steps"];
  faqs?: PageContent["faqs"];
  primaryCta?: string;
  secondaryCta?: string;
}): LandingPage {
  return {
    slug,
    kind: "service",
    eyebrow,
    title,
    description,
    metaTitle: title,
    metaDescription: description,
    keywords: [primaryKeyword, ...secondaryKeywords, "MagisData"],
    directAnswer: directAnswer
      ? {
          title: `Wat is ${primaryKeyword}?`,
          text: directAnswer
        }
      : undefined,
    deliverables,
    comparison,
    audienceFit,
    presentation,
    primaryCta: primaryCta ?? "Vraag gratis groeiplan aan",
    secondaryCta: secondaryCta ?? "Bekijk diensten",
    heroPoints: heroPoints ?? [
      `Gericht op ${primaryKeyword}`,
      "Sterke pagina's, metadata en interne links",
      "Rustige strategie voor betere vindbaarheid en aanvragen"
    ],
    sections: sections ?? [
      {
        title: `Waarom ${primaryKeyword} belangrijk is`,
        text:
          `${audience} worden online steeds sneller vergeleken. Met ${primaryKeyword} maak je duidelijk waar je voor staat, welke klanten je helpt en waarom je de juiste keuze bent.`,
        items: [
          {
            title: "Zoekintentie scherp",
            text:
              "We richten pagina's op termen die passen bij koopintentie, adviesvragen en lokale vindbaarheid."
          },
          {
            title: "AI en Google begrijpen je beter",
            text:
              "We structureren diensten, antwoorden, cases en interne links zodat zoekmachines en AI-systemen je expertise makkelijker herkennen."
          },
          {
            title: "Meer vertrouwen voor contact",
            text:
              "We combineren vindbaarheid met duidelijke uitleg, bewijs en contactroutes zodat verkeer ook aanvragen kan worden."
          }
        ]
      },
      {
        title: `Wat MagisData doet voor ${primaryKeyword}`,
        text: promise,
        items: [
          {
            title: "Contentstructuur",
            text:
              "We bepalen welke hoofdpagina's, ondersteunende pagina's en FAQ's nodig zijn om het onderwerp goed af te dekken."
          },
          {
            title: "On-page optimalisatie",
            text:
              "We verbeteren titels, H1's, tussenkoppen, meta descriptions, schema en interne links zonder keyword stuffing."
          },
          {
            title: "Groei opbouwen",
            text:
              "We starten met de hoogste-impact pagina's en breiden daarna uit met cases, inzichten en lokale of branchegerichte content."
          }
        ]
      }
    ],
    detailSections: detailSections ?? [
      {
        eyebrow: "Verdieping",
        title: `Hoe je ${primaryKeyword} sterker maakt dan een standaard landingspagina`,
        text:
          `Een pagina over ${primaryKeyword} moet meer doen dan alleen het zoekwoord noemen. De inhoud moet uitleg geven, twijfels wegnemen, bewijs tonen en bezoekers helpen begrijpen welke volgende stap past bij hun situatie.`,
        items: [
          {
            title: "Beantwoord echte vragen",
            text:
              "Gebruik koppen en alinea's die aansluiten op wat klanten willen weten: kosten, aanpak, timing, resultaat en geschiktheid."
          },
          {
            title: "Laat expertise zien",
            text:
              "Concrete voorbeelden, processen, cases en duidelijke definities maken de pagina betrouwbaarder voor klanten, Google en AI-systemen."
          },
          {
            title: "Verbind met andere pagina's",
            text:
              "Interne links naar diensten, cases en inzichten helpen bezoekers verder en versterken de thematische samenhang van de site."
          }
        ]
      }
    ],
    steps: steps ?? [
      { title: "Kansen kiezen", text: "We bepalen welke zoektermen en pagina's het meeste kunnen opleveren." },
      { title: "Pagina bouwen", text: "We maken duidelijke content rond zoekintentie, bewijs en conversie." },
      { title: "Techniek goedzetten", text: "We zetten metadata, schema, sitemap en interne links strak neer." },
      { title: "Doorbouwen", text: "We vullen aan met content die autoriteit en vindbaarheid versterkt." }
    ],
    faqs: faqs ?? [
      {
        question: `Voor wie is ${primaryKeyword} geschikt?`,
        answer:
          `Voor ${audience} die online beter gevonden willen worden en meer relevante aanvragen willen krijgen.`
      },
      {
        question: "Is dit alleen SEO of ook AI-vindbaarheid?",
        answer:
          "Het begint bij sterke SEO. Daarbovenop maken we content ook beter scanbaar, citeerbaar en begrijpelijk voor AI-antwoorden."
      },
      {
        question: "Kunnen jullie dit op mijn bestaande website toepassen?",
        answer:
          "Ja. Vaak verbeteren we eerst bestaande pagina's en voegen daarna ontbrekende landingspagina's of kenniscontent toe."
      }
    ]
  };
}

export const landingPages: LandingPage[] = [
  {
    slug: "website-onderhoud",
    kind: "service",
    eyebrow: "Website onderhoud",
    title: "Website onderhoud voor veiligheid, continuiteit en snelle ondersteuning",
    description:
      "Houd je website bijgewerkt en controleerbaar met updates, backups, monitoring, beveiligingschecks, rollback en ondersteuning bij problemen.",
    metaTitle: "Website onderhoud, updates en beveiliging | MagisData",
    metaDescription:
      "Website onderhoud met updates, backups, monitoring, uptimecontrole, beveiligingschecks, rollback en praktische ondersteuning van MagisData.",
    keywords: ["website onderhoud", "website updates", "website beveiliging", "website backup", "MagisData"],
    directAnswer: {
      title: "Wat omvat website onderhoud?",
      text:
        "Website onderhoud houdt je website operationeel: updates worden gepland, backups worden gecontroleerd, storingen worden gesignaleerd en beveiligingsproblemen worden opgevolgd. Bij een mislukte wijziging moet herstel of rollback duidelijk geregeld zijn."
    },
    deliverables: [
      { title: "Updates en backups", text: "Regelmatige software- en inhoudsupdates met controleerbare backupmomenten voor herstel." },
      { title: "Monitoring en uptime", text: "Controle op beschikbaarheid, fouten en veranderingen die bezoekers of formulieren raken." },
      { title: "Security en support", text: "Kwetsbaarheden beoordelen, herstelacties afspreken en ondersteuning bij incidenten." }
    ],
    audienceFit: {
      for: ["Bedrijven waarvan de website bereikbaar, veilig en actueel moet blijven.", "Teams zonder tijd voor terugkerende technische controles."],
      notFor: ["Een volledige herbouw of nieuw merkverhaal; daarvoor past webontwikkeling.", "Gegarandeerde foutloosheid of onbeperkte support zonder onderhoudsafspraak."]
    },
    primaryCta: "Bespreek website onderhoud",
    secondaryCta: "Bekijk webontwikkeling",
    heroPoints: ["Updates en backups planbaar geregeld", "Monitoring, security en uptimecontrole", "Rollback en ondersteuning wanneer iets misgaat"],
    sections: [
      {
        title: "Onderhoud voorkomt vermijdbare risico's",
        text: "Een website kan prima ogen terwijl formulieren, updates of beveiliging achterlopen. Onderhoud maakt die risico's zichtbaar voordat ze werk of vertrouwen kosten.",
        items: [
          { title: "Updates", text: "Updates worden gecontroleerd uitgevoerd zodat afhankelijkheden en pagina's blijven werken." },
          { title: "Backups", text: "Voor belangrijke wijzigingen hoort een herstelpunt beschikbaar en getest te zijn." },
          { title: "Kwetsbaarheden", text: "Bekende beveiligingsrisico's vragen om beoordeling, prioriteit en duidelijke opvolging." }
        ]
      },
      {
        title: "Wat gebeurt er bij een probleem?",
        text: "Onderhoud is ook een afspraak over handelen: signaleren, beoordelen, herstellen en terugkoppelen.",
        items: [
          { title: "Signalering", text: "Storingen of opvallende fouten worden zichtbaar via controles en monitoring." },
          { title: "Rollback", text: "Als een update fout gaat, herstellen we vanuit een passend herstelpunt of draaien de wijziging terug." },
          { title: "Support", text: "Je weet waar je terechtkunt en welke volgende stap logisch is bij een incident." }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "Onderhoudsafspraak",
        title: "Duidelijkheid over frequentie en verantwoordelijkheid",
        text: "De passende onderhoudsaanpak hangt af van technologie, wijzigingen en belang van je website voor aanvragen. We leggen vast welke controles nodig zijn en hoe incidenten worden opgevolgd.",
        items: [
          { title: "Periodiek", text: "Updates, backupcontrole en technische checks volgens afgesproken ritme." },
          { title: "Na wijziging", text: "Pagina's, formulieren en belangrijke contactroutes opnieuw controleren." },
          { title: "Bij incident", text: "Probleem beoordelen, herstel uitvoeren en helder communiceren wat is veranderd." }
        ]
      }
    ],
    steps: [
      { title: "Inventarisatie", text: "We bekijken techniek, kritieke pagina's en huidige risico's." },
      { title: "Afspraken", text: "We bepalen updates, backupcontrole, monitoring en supportroute." },
      { title: "Onderhoud", text: "We voeren controles en geplande verbeteringen zorgvuldig uit." },
      { title: "Herstel", text: "Bij fouten is duidelijk hoe rollback en opvolging verlopen." }
    ],
    faqs: [
      { question: "Wat valt onder website onderhoud?", answer: "Updates, backups, technische controles, monitoring, beveiligingsopvolging en afgesproken ondersteuning bij problemen." },
      { question: "Is onderhoud hetzelfde als een nieuwe website bouwen?", answer: "Nee. Onderhoud houdt bestaande functionaliteit gezond; nieuwe pagina's of een herbouw zijn aparte werkzaamheden." },
      { question: "Kan een update worden teruggedraaid?", answer: "Waar technisch mogelijk werken we met backups of herstelpunten zodat een problematische wijziging kan worden hersteld." }
    ]
  },
  makeGrowthPage({
    slug: "lokale-seo",
    eyebrow: "Lokale SEO",
    title: "Lokale SEO voor bedrijven die in hun regio gevonden willen worden",
    description:
      "Verbeter je lokale vindbaarheid met sterke servicepagina's, regio-content, Google-profiel signalen en duidelijke contactinformatie.",
    primaryKeyword: "lokale SEO",
    secondaryKeywords: ["lokale SEO specialist", "Google vindbaarheid verbeteren", "SEO voor lokale bedrijven", "regionale SEO"],
    audience: "lokale dienstverleners en MKB-bedrijven",
    promise:
      "We richten je website op de diensten, plaatsen en klantvragen die lokaal tellen, zonder dunne of spammy plaatsnaampagina's.",
    directAnswer:
      "Lokale SEO maakt je diensten zichtbaar voor mensen die in jouw werkgebied zoeken. We verbinden diensten, servicegebieden, consistente contactgegevens en nuttige lokale antwoorden.",
    presentation: {
      variant: "local",
      heroTitle: "Regio, dienst, bewijs",
      heroCaption: "Lokale vindbaarheid werkt pas wanneer werkgebied en aanbod feitelijk kloppen.",
      sectionEyebrow: "Lokale laag",
      processEyebrow: "Regioroute",
      processTitle: "Zo bouwen we lokale dekking zonder plaatsnaamvulling",
      faqTitle: "Lokale SEO scherp",
      ctaTitle: "Wil je weten welke regio-pagina zin heeft?",
      ctaText: "We kiezen alleen pagina's waar dienst, gebied en zoekintentie genoeg eigen inhoud hebben."
    },
    heroPoints: [
      "Werkgebied en diensten helder gekoppeld",
      "Geen gekopieerde plaatsnaampagina's",
      "Contactgegevens consistent en vindbaar"
    ],
    deliverables: [
      { title: "Servicegebied", text: "Werkgebied en diensten helder benoemen zonder gekopieerde plaatsnaampagina's." },
      { title: "Lokale pagina's", text: "Unieke inhoud per gekozen doelmarkt met passende vragen en links." },
      { title: "NAP-controle", text: "Bedrijfsnaam, adres en telefoon consistent op website en profielbasis." }
    ],
    sections: [
      {
        title: "Lokale intentie is concreet",
        text:
          "Iemand zoekt niet alleen een vakgebied. Die zoekt hulp in een bereikbaar gebied, met een dienst die nu past.",
        items: [
          { title: "Dienst plus plaats", text: "Elke pagina koppelt een echte dienst aan een echt werkgebied." },
          { title: "Praktische signalen", text: "Adres, telefoon, opening, route en servicegebied blijven consistent." },
          { title: "Lokale vragen", text: "We beantwoorden vragen die bij regio, planning en bereikbaarheid horen." }
        ]
      },
      {
        title: "Wat we juist niet bouwen",
        text:
          "Lokale SEO wordt zwak wanneer elke plaats dezelfde tekst krijgt met een andere stadsnaam.",
        items: [
          { title: "Geen kopiepagina's", text: "Alleen lokale pagina's met eigen aanleiding, diensten of werkgebiedcontext." },
          { title: "Geen lege claims", text: "We vermijden beloftes over dekking of resultaten die niet onderbouwd zijn." },
          { title: "Geen zoekwoordstapeling", text: "Plaatsnamen ondersteunen de inhoud; ze vervangen de inhoud niet." }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "Lokale betrouwbaarheid",
        title: "Wat een lokale bezoeker eerst wil controleren",
        text:
          "Lokale bezoekers scannen op nabijheid, beschikbaarheid, herkenbare diensten en een simpele route naar contact. De pagina moet die check snel mogelijk maken.",
        items: [
          { title: "Werkgebied", text: "Waar help je wel, waar niet en welke diensten horen daarbij?" },
          { title: "Bereikbaarheid", text: "Telefoon, formulier en vervolgstap moeten vooral mobiel meteen duidelijk zijn." },
          { title: "Herkenning", text: "Voorbeelden, vragen en servicecontext moeten bij de regio passen." }
        ]
      }
    ],
    steps: [
      { title: "Gebied kiezen", text: "We bepalen welke plaatsen en diensten echt prioriteit hebben." },
      { title: "Pagina scheiden", text: "We voorkomen dat lokale pagina's elkaar of hoofdservices kannibaliseren." },
      { title: "Signalen zetten", text: "NAP, interne links, schema en contactroutes worden consistent." },
      { title: "Uitbreiden", text: "Nieuwe regio's komen pas erbij wanneer er genoeg eigen context is." }
    ],
    faqs: [
      { question: "Moet ik voor elke plaats een pagina maken?", answer: "Nee. Alleen waar je genoeg eigen context, zoekvraag en servicewaarde hebt." },
      { question: "Is lokale SEO alleen Google Business Profile?", answer: "Nee. Je profiel helpt, maar je website moet diensten, gebied en contact net zo duidelijk dragen." },
      { question: "Kan dit zonder kantoor in elke stad?", answer: "Ja, zolang je feitelijk beschrijft waar je werkt en geen locaties claimt die niet bestaan." }
    ]
  }),
  makeGrowthPage({
    slug: "seo-bureau-leiden",
    eyebrow: "SEO bureau Leiden",
    title: "SEO bureau Leiden voor lokale vindbaarheid en groei",
    description:
      "MagisData helpt bedrijven in Leiden beter gevonden worden met lokale SEO, duidelijke pagina's en technische optimalisatie.",
    primaryKeyword: "SEO bureau Leiden",
    secondaryKeywords: ["SEO Leiden", "lokale SEO Leiden", "zoekmachine optimalisatie Leiden", "SEO specialist Leiden"],
    audience: "bedrijven in Leiden en omgeving",
    promise:
      "We combineren lokale zoekintentie, servicepagina's, interne links en technische SEO zodat klanten in Leiden je bedrijf makkelijker vinden en vertrouwen.",
    directAnswer:
      "SEO in Leiden richt je website op diensten die je werkelijk in Leiden en omgeving levert. MagisData koppelt lokale zoekvragen aan heldere pagina's, NAP-signalen en contactroutes."
  }),
  makeGrowthPage({
    slug: "ai-vindbaarheid",
    eyebrow: "AI vindbaarheid",
    title: "AI vindbaarheid verbeteren voor ChatGPT, Perplexity en Google",
    description:
      "Maak je bedrijf beter begrijpbaar, citeerbaar en vindbaar in AI-antwoorden met duidelijke content en sterke structuur.",
    primaryKeyword: "AI vindbaarheid",
    secondaryKeywords: ["vindbaar in ChatGPT", "vindbaar in Perplexity", "AI Overviews optimalisatie", "GEO optimalisatie"],
    audience: "ondernemers, adviseurs en B2B-dienstverleners",
    promise:
      "We ordenen je diensten, expertise, bewijs en antwoorden zodat AI-systemen minder hoeven te gokken en je bedrijf consistenter kunnen beschrijven.",
    directAnswer:
      "AI-vindbaarheid is de overkoepelende aanpak om je merk, diensten en expertise begrijpelijk te maken voor AI-gestuurde zoekervaringen. SEO blijft de basis; GEO en AEO voegen entiteit- en antwoordstructuur toe.",
    presentation: {
      variant: "ai",
      heroTitle: "Model context",
      heroCaption: "AI-systemen hebben vaste termen, duidelijke feiten en controleerbare bronnen nodig.",
      sectionEyebrow: "AI-leesbaarheid",
      processEyebrow: "Contextbouw",
      processTitle: "Van rommelige website naar bruikbare context",
      faqTitle: "AI-vindbaarheid eerlijk",
      ctaTitle: "Wil je weten waar AI nu moet gokken?",
      ctaText: "We zoeken inconsistenties in diensten, definities, bewijs en contactinformatie."
    },
    heroPoints: [
      "Consistente termen voor diensten en expertise",
      "Antwoorden die zelfstandig te begrijpen zijn",
      "Bewijs en contactgegevens niet verstopt"
    ],
    deliverables: [
      { title: "Terminologie", text: "Vaste namen en definities voor diensten, doelgroep en expertise." },
      { title: "Antwoorden", text: "Korte, zichtbare passages die zelfstandig begrijpelijk en citeerbaar zijn." },
      { title: "Signalen", text: "Schema, interne links, auteurschap en contactinformatie consistent houden." }
    ],
    comparison: [
      { title: "GEO", text: "Structuur voor entitybegrip en generatieve ontdekking." },
      { title: "AEO", text: "Vraag-antwoordopbouw voor extracteerbare antwoorden." }
    ],
    sections: [
      {
        title: "AI-vindbaarheid begint bij minder dubbelzinnigheid",
        text:
          "AI-systemen vatten samen wat je website duidelijk genoeg maakt. Vage diensten, wisselende termen en losse claims maken die samenvatting zwakker.",
        items: [
          { title: "Vaste woorden", text: "Dezelfde dienst heet niet op vijf pagina's net anders." },
          { title: "Afgebakende expertise", text: "Je website maakt duidelijk wat je wel doet, niet doet en voor wie." },
          { title: "Controleerbare context", text: "Bewijs, cases, voorwaarden en contactinformatie staan dicht bij claims." }
        ]
      },
      {
        title: "Wat AI nodig heeft om je bedrijf correct te noemen",
        text:
          "Niet meer tekst, maar betere informatie-eenheden: definities, antwoorden, verbanden en bronachtige passages.",
        items: [
          { title: "Definities", text: "Korte uitleg van diensten en begrippen die zonder omliggende alinea werken." },
          { title: "Relaties", text: "Interne links laten zien welke diensten, branches, cases en inzichten bij elkaar horen." },
          { title: "Herhaling met reden", text: "Belangrijke feiten komen terug op logische plekken, niet als keywordvulling." }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "AI-context",
        title: "Het verschil tussen vindbaar zijn en begrijpbaar zijn",
        text:
          "Een pagina kan geindexeerd zijn en toch weinig bruikbare context geven. AI-vindbaarheid vraagt om passages die een systeem veilig kan samenvatten zonder aannames.",
        items: [
          { title: "Wie", text: "Bedrijf, locatie, doelgroep en rol zijn consistent." },
          { title: "Wat", text: "Diensten worden concreet beschreven met grenzen en voorbeelden." },
          { title: "Waarom vertrouwen", text: "Bewijs en procesinformatie ondersteunen claims zonder harde resultaatbeloftes." }
        ]
      }
    ],
    steps: [
      { title: "Context audit", text: "We zoeken dubbelzinnige termen, gaten en losse claims." },
      { title: "Entiteiten ordenen", text: "Bedrijf, diensten, doelgroep en bewijs krijgen vaste plekken." },
      { title: "Antwoorden schrijven", text: "Belangrijke vragen krijgen korte, zichtbare antwoorden." },
      { title: "Verbanden leggen", text: "Interne links en schema maken relaties leesbaar." }
    ],
    faqs: [
      { question: "Kun je garanderen dat ChatGPT ons noemt?", answer: "Nee. Dat kan niemand eerlijk garanderen. We kunnen wel zorgen dat je website minder vaag en beter bruikbaar wordt." },
      { question: "Is AI-vindbaarheid hetzelfde als GEO?", answer: "Nee. AI-vindbaarheid is breder. GEO en AEO zijn onderdelen van die bredere structuur." },
      { question: "Moet ik nieuwe pagina's maken?", answer: "Soms. Vaak begint het met bestaande pagina's scherper maken voordat er nieuwe content nodig is." }
    ]
  }),
  makeGrowthPage({
    slug: "online-marketing-bureau",
    eyebrow: "Online marketing bureau",
    title: "Online marketing bureau voor websites, SEO en meetbare groei",
    description:
      "MagisData helpt ondernemers met website, SEO, AEO, GEO, conversie en praktische automatisering vanuit een heldere groeistrategie.",
    primaryKeyword: "online marketing bureau",
    secondaryKeywords: ["digitaal bureau Nederland", "website en SEO bureau", "online groei bureau", "digital growth agency"],
    audience: "MKB-bedrijven en professionele dienstverleners",
    promise:
      "We kiezen pas kanalen nadat website, boodschap, meetbaarheid en contactroute logisch staan. Daardoor blijft online marketing een systeem in plaats van losse acties.",
    directAnswer:
      "Een online marketing bureau helpt bij zichtbaarheid, vertrouwen en aanvragen over meerdere kanalen. MagisData begint bij website, SEO, AI-vindbaarheid, conversie en meting, en voegt campagnes pas toe wanneer de basis klopt.",
    presentation: {
      variant: "growth",
      heroTitle: "Groei-architectuur",
      heroCaption: "Kanaalkeuzes volgen uit positionering, pagina's, meting en opvolging.",
      sectionEyebrow: "Groeisysteem",
      processEyebrow: "Volgorde",
      processTitle: "Eerst fundament, dan verkeer opschalen",
      faqTitle: "Marketing zonder losse trucs",
      ctaTitle: "Wil je weten welke marketinglaag ontbreekt?",
      ctaText: "We kijken naar website, vindbaarheid, conversie, meting en opvolging als een geheel."
    },
    heroPoints: [
      "Website, SEO, AI en CRO in samenhang",
      "Kanaalkeuze op basis van je aanbod",
      "Geen campagnes zonder meetbare contactroute"
    ],
    deliverables: [
      { title: "Groeidiagnose", text: "Bepalen of het grootste lek in zichtbaarheid, boodschap, conversie of meting zit." },
      { title: "Kanaalplan", text: "SEO, AI-vindbaarheid, content of campagnes kiezen op basis van koopintentie." },
      { title: "Meetbasis", text: "Contactacties meten na toestemming, zodat optimalisatie op echte signalen rust." }
    ],
    audienceFit: {
      for: ["Bedrijven met concreet aanbod en ambitie om structureel meer aanvragen te krijgen.", "Dienstverleners die website, vindbaarheid en conversie samen willen verbeteren."],
      notFor: ["Losse social posts of campagnes zonder websitebasis.", "Groeibeloftes zonder meetbare contactroute of realistische scope."]
    },
    sections: [
      {
        title: "Online marketing faalt vaak door verkeerde volgorde",
        text:
          "Meer verkeer helpt weinig wanneer bezoekers op een vage pagina landen of contact niet wordt gemeten.",
        items: [
          { title: "Positionering", text: "Eerst moet duidelijk zijn waarom iemand voor jou kiest." },
          { title: "Pagina's", text: "Diensten, bewijs en contactroute moeten de zoekvraag dragen." },
          { title: "Kanalen", text: "SEO, AI-vindbaarheid, content of ads krijgen pas prioriteit na diagnose." }
        ]
      },
      {
        title: "Wat we koppelen",
        text:
          "MagisData behandelt marketing als infrastructuur: elk onderdeel moet het volgende onderdeel sterker maken.",
        items: [
          { title: "Vindbaarheid", text: "SEO, AEO en GEO maken expertise beter vindbaar en begrijpbaar." },
          { title: "Conversie", text: "CTA's, bewijs en formulieren maken verkeer waardevoller." },
          { title: "Meting", text: "Zonder meetbasis weet je niet welke verbetering echt telt." }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "Strategie",
        title: "Wanneer campagnes wel zinvol worden",
        text:
          "Campagnes kunnen werken zodra de landingspagina klopt, de zoekvraag commercieel genoeg is en de contactactie meetbaar is. Anders koop je vooral onzekerheid.",
        items: [
          { title: "Vraag", text: "Is er actieve behoefte naar deze dienst of moet de markt eerst worden opgevoed?" },
          { title: "Pagina", text: "Sluit de pagina precies aan op de belofte van het kanaal?" },
          { title: "Opvolging", text: "Worden aanvragen snel en consistent opgevolgd?" }
        ]
      }
    ],
    steps: [
      { title: "Diagnose", text: "We bepalen welk deel van het groeisysteem het meeste remt." },
      { title: "Basis herstellen", text: "Website, boodschap, contactroute en meting krijgen prioriteit." },
      { title: "Kanaal kiezen", text: "We kiezen SEO, AI, content of campagnes op basis van intentie." },
      { title: "Verbeteren", text: "We scherpen aan op signalen uit bezoekers en aanvragen." }
    ],
    faqs: [
      { question: "Doen jullie ook advertenties?", answer: "Alleen wanneer de pagina, zoekvraag en meetbasis er klaar voor zijn. Anders is SEO, CRO of content vaak logischer." },
      { question: "Is online marketing hetzelfde als SEO?", answer: "Nee. SEO is een onderdeel. Online marketing omvat ook conversie, meting, content, AI-vindbaarheid en soms campagnes." },
      { question: "Waar begin je mee?", answer: "Met diagnose. Vaak is de eerste winst niet meer verkeer, maar duidelijkere pagina's en betere contactroutes." }
    ]
  }),
  makeGrowthPage({
    slug: "conversie-optimalisatie",
    eyebrow: "Conversie optimalisatie",
    title: "Conversie optimalisatie voor meer aanvragen uit je website",
    description:
      "Haal meer resultaat uit bestaande bezoekers met duidelijkere pagina's, betere CTA's, vertrouwenstekens en kortere contactroutes.",
    primaryKeyword: "conversie optimalisatie",
    secondaryKeywords: ["website conversie verbeteren", "meer leads uit website", "CRO bureau", "website optimalisatie"],
    audience: "bedrijven met websiteverkeer dat te weinig aanvragen oplevert",
    promise:
      "We verbeteren boodschap, pagina-opbouw, CTA's, formulieren, bewijs en mobiele ervaring zodat bezoekers sneller begrijpen en handelen.",
    directAnswer:
      "Conversie optimalisatie verbetert wat bezoekers doen nadat ze op je website landen. MagisData kijkt naar duidelijkheid, bewijs, CTA's, formulieren, mobiel gebruik en meetbare contactacties.",
    presentation: {
      variant: "conversion",
      heroTitle: "Frictie audit",
      heroCaption: "Meer aanvragen begint vaak met minder twijfel, minder zoeken en minder formulierfrictie.",
      sectionEyebrow: "Beslispad",
      processEyebrow: "CRO-werkbank",
      processTitle: "Van twijfelpunt naar betere contactroute",
      faqTitle: "CRO praktisch",
      ctaTitle: "Wil je weten waar bezoekers afhaken?",
      ctaText: "We bekijken boodschap, bewijs, CTA's, formulieren en mobiel gedrag."
    },
    heroPoints: [
      "Pagina's scherper op beslismomenten",
      "CTA's en formulieren korter en duidelijker",
      "Bewijs dichter bij twijfelpunten"
    ],
    deliverables: [
      { title: "Frictiepunten", text: "Waar bezoekers moeten zoeken, twijfelen of opnieuw lezen." },
      { title: "CTA-route", text: "Primaire en secundaire acties per pagina helder maken." },
      { title: "Formuliercheck", text: "Velden, foutmeldingen en mobiele bruikbaarheid aanscherpen." }
    ],
    audienceFit: {
      for: ["Websites met bezoekers maar te weinig aanvragen.", "Bedrijven die eerst meer uit bestaand verkeer willen halen."],
      notFor: ["A/B-testclaims zonder genoeg verkeer.", "Meer conversie beloven zonder meetbare basis of aanbodfit."]
    },
    sections: [
      {
        title: "CRO kijkt naar beslissingen, niet alleen knoppen",
        text:
          "Een bezoeker neemt kleine beslissingen: snap ik dit, vertrouw ik dit, past dit bij mij, kan ik makkelijk contact opnemen?",
        items: [
          { title: "Duidelijkheid", text: "De eerste alinea moet de dienst, doelgroep en uitkomst concreet maken." },
          { title: "Bewijs", text: "Voorbeelden, proces en voorwaarden horen vlak bij twijfelmomenten." },
          { title: "Actie", text: "De volgende stap moet herkenbaar blijven zonder agressief te worden." }
        ]
      },
      {
        title: "Wat we meestal vinden",
        text:
          "Veel websites verliezen aanvragen door kleine obstakels die samen groot worden.",
        items: [
          { title: "Te veel keuzes", text: "Meerdere CTA's met dezelfde status maken de route onduidelijk." },
          { title: "Te laat bewijs", text: "Vertrouwen komt pas onderaan, terwijl twijfel al bovenaan ontstaat." },
          { title: "Te zwaar formulier", text: "Een eerste gesprek vraagt vaak minder velden dan een offerte-intake." }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "Beslismomenten",
        title: "Waar conversie meestal breekt",
        text:
          "CRO is geen truc om bezoekers te duwen. Het haalt ruis weg uit het pad tussen behoefte en contact.",
        items: [
          { title: "Boven de vouw", text: "Is direct duidelijk wat je doet en voor wie?" },
          { title: "Middenpagina", text: "Worden bezwaren beantwoord voordat de CTA terugkomt?" },
          { title: "Contact", text: "Vraagt de contactroute alleen wat nodig is voor een eerste reactie?" }
        ]
      }
    ],
    steps: [
      { title: "Pagina lezen", text: "We volgen de route alsof we een kritische bezoeker zijn." },
      { title: "Frictie markeren", text: "We noteren twijfel, onduidelijke keuzes en contactobstakels." },
      { title: "Aanpassen", text: "We verbeteren copy, volgorde, CTA's, bewijs en formulieren." },
      { title: "Meten", text: "We kijken of contactacties beter zichtbaar en meetbaar worden." }
    ],
    faqs: [
      { question: "Heb ik veel verkeer nodig voor CRO?", answer: "Voor harde A/B-tests wel. Voor een kwalitatieve frictie-audit niet; die kan ook met minder verkeer waarde geven." },
      { question: "Gaat CRO alleen over knoppen?", answer: "Nee. Knoppen zijn laat in het proces. Meestal zitten de problemen in boodschap, bewijs, volgorde of formulierfrictie." },
      { question: "Kunnen jullie conversiestijging garanderen?", answer: "Nee. We verbeteren de voorwaarden voor meer aanvragen, maar garanderen geen percentages zonder betrouwbare testbasis." }
    ]
  }),
  makeWebsitePage({
    slug: "website-voor-loodgieters",
    eyebrow: "Website voor loodgieters",
    title: "Website voor loodgieters met een snelle route naar contact",
    description:
      "Een duidelijke website voor loodgieters met sterke servicepagina's, lokale SEO en snelle contactmogelijkheden.",
    kind: "industry",
    audience: "loodgieters",
    answer:
      "Een loodgieterswebsite moet spoed, geplande werkzaamheden en werkgebied snel scheiden. Bezoekers moeten op mobiel direct kunnen bellen of een aanvraag sturen.",
    deliverables: [
      { title: "Spoedroute", text: "Lekkage- en verstoppingsvragen direct herkenbaar met snelle contactactie." },
      { title: "Dienstpagina's", text: "Installatie, onderhoud en reparatie logisch uitgelegd." },
      { title: "Werkgebied", text: "Regio-informatie en contactgegevens consistent zichtbaar." }
    ],
    serviceItems: [
      { title: "Spoed versus planning", text: "Urgente hulp krijgt een kortere route dan geplande installatie of onderhoud." },
      { title: "Diensten per probleem", text: "Bezoekers vinden snel of je helpt bij lekkage, leidingwerk of sanitair." },
      { title: "Bellen op mobiel", text: "Een duidelijke telefoonactie verlaagt frictie bij dringende vragen." }
    ],
    extraFaqs: [
      { question: "Kan een loodgieterswebsite spoedaanvragen ondersteunen?", answer: "Ja. We maken urgentie en bereikbaarheid duidelijk, zonder beschikbaarheid te beloven die je niet levert." }
    ]
  }),
  makeWebsitePage({
    slug: "website-voor-elektriciens",
    eyebrow: "Website voor elektriciens",
    title: "Website voor elektriciens die betrouwbaar overkomt",
    description:
      "Een professionele website voor elektriciens met duidelijke diensten, lokale vindbaarheid en een korte route naar contact.",
    kind: "industry",
    audience: "elektriciens",
    answer:
      "Voor elektriciens moet een website onderscheid maken tussen storing, inspectie, groepenkast, laadpaal en installatieproject. Zo vindt iedere bezoeker de juiste vervolgstap.",
    deliverables: [
      { title: "Storingsroute", text: "Directe contactmogelijkheid voor urgente elektrische problemen." },
      { title: "Projectdiensten", text: "Pagina's voor inspectie, renovatie, laadpunten of verduurzaming." },
      { title: "Veiligheidsuitleg", text: "Heldere proces- en certificeringsruimte zodra echte gegevens beschikbaar zijn." }
    ],
    serviceItems: [
      { title: "Veiligheid voorop", text: "Leg concreet uit welke werkzaamheden je uitvoert en wanneer contact nodig is." },
      { title: "Project of storing", text: "Twee intenties vragen om andere informatie en CTA's." },
      { title: "Lokale bereikbaarheid", text: "Werkgebied en telefoonnummer blijven direct vindbaar." }
    ]
  }),
  makeWebsitePage({
    slug: "website-voor-kappers",
    eyebrow: "Website voor kappers",
    title: "Website voor kappers die klanten laat boeken",
    description:
      "Een rustige, mobiele website voor kappers met duidelijke prijzen, behandelingen, locatie-informatie en contactroutes.",
    kind: "industry",
    audience: "kappers",
    answer:
      "Een kapperswebsite helpt klanten kiezen op behandeling, sfeer, prijsindicatie, locatie en boekingsroute. Mobiele duidelijkheid telt omdat veel afspraken onderweg worden gezocht.",
    deliverables: [
      { title: "Behandelingen", text: "Knippen, kleuren en styling scanbaar geordend." },
      { title: "Praktische info", text: "Locatie, openingstijden en boekingsroute centraal." },
      { title: "Mobiele keuze", text: "Snelle route naar afspraak of contact." }
    ],
    serviceItems: [
      { title: "Behandeling kiezen", text: "Klanten moeten snel weten welke dienst past en hoe boeken werkt." },
      { title: "Saloncontext", text: "Sfeer kan ondersteunen, maar praktische informatie blijft voorop." },
      { title: "Lokale zoektocht", text: "Locatie en bereikbaarheid helpen mensen in de buurt beslissen." }
    ]
  }),
  makeWebsitePage({
    slug: "website-voor-hoveniers",
    eyebrow: "Website voor hoveniers",
    title: "Website voor hoveniers met sterke lokale vindbaarheid",
    description:
      "Een professionele website voor hoveniers met duidelijke diensten, projectbewijs en SEO voor lokale aanvragen.",
    kind: "industry",
    audience: "hoveniers",
    answer:
      "Voor hoveniers moet een website diensten, werkgebied en projectpresentatie verbinden. Het huidige portfolio toont hoe zo'n structuur als webdesign kan worden uitgewerkt, niet als klantresultaat.",
    deliverables: [
      { title: "Dienststructuur", text: "Tuinontwerp, aanleg en onderhoud als afzonderlijke routes." },
      { title: "Projectruimte", text: "Plaats voor echte projectfoto's zodra beschikbaar." },
      { title: "Lokale intake", text: "Werkgebied en aanvraagstap helder in beeld." }
    ],
    serviceItems: [
      { title: "Projecttype", text: "Maak onderscheid tussen ontwerp, aanleg en terugkerend onderhoud." },
      { title: "Visuele onderbouwing", text: "Portfolio-ontwerp laat zien waar later eigen projectbewijs past." },
      { title: "Regio en afspraak", text: "Beschrijf werkgebied en proces concreet voor lokale zoekers." }
    ]
  }),
  makeWebsitePage({
    slug: "website-laten-maken-leiden",
    eyebrow: "Lokale website",
    title: "Website laten maken Leiden",
    description:
      "Laat in Leiden een professionele website maken die jouw bedrijf duidelijk positioneert en lokale aanvragen stimuleert.",
    kind: "location",
    audience: "ondernemers",
    location: "Leiden",
    answer:
      "MagisData werkt vanuit Voorschoten dichtbij Leiden aan websites voor bedrijven die hun dienst en lokale bereikbaarheid duidelijk willen presenteren.",
    deliverables: [
      { title: "Leiden-context", text: "Dienst en servicegebied duidelijk beschrijven voor lokale zoekvragen." },
      { title: "Contactroute", text: "Bellen of aanvragen eenvoudig op mobiel." },
      { title: "SEO-fundament", text: "Metadata, schema en interne links vanaf oplevering." }
    ],
    serviceItems: [
      { title: "Nabij werkgebied", text: "Voorschoten en Leiden liggen dicht bij elkaar; servicegebied wordt feitelijk benoemd." },
      { title: "Lokale diensten", text: "Pagina's koppelen aanbod aan vragen van bedrijven in Leiden." },
      { title: "Geen plaatsnaamvulling", text: "Elke lokale pagina geeft eigen context en praktische informatie." }
    ],
    extraFaqs: [
      { question: "Waar is MagisData gevestigd ten opzichte van Leiden?", answer: "MagisData vermeldt als adres Suze Groenewegerf 25 in Voorschoten, nabij Leiden." }
    ]
  }),
  makeWebsitePage({
    slug: "website-laten-maken-den-haag",
    eyebrow: "Lokale website",
    title: "Website laten maken Den Haag",
    description:
      "Laat in Den Haag een snelle, duidelijke website maken met sterke lokale SEO en een heldere contactroute.",
    kind: "location",
    audience: "ondernemers",
    location: "Den Haag",
    answer:
      "Voor bedrijven in Den Haag maakt MagisData websites die zakelijke diensten, contactroutes en regionale vindbaarheid duidelijk presenteren.",
    deliverables: [
      { title: "Zakelijke positionering", text: "Diensten en doelgroep helder voor een brede regionale markt." },
      { title: "Regionale vindbaarheid", text: "Den Haag als werkelijk servicegebied koppelen aan aanbod." },
      { title: "Aanvraagroute", text: "Duidelijke actie voor gesprek of analyse." }
    ],
    serviceItems: [
      { title: "Dienstenmarkt", text: "In Den Haag zoeken bedrijven en consumenten verschillend; pagina's volgen dienstintentie." },
      { title: "Regio-informatie", text: "Benoem waar je helpt en hoe een afspraak verloopt." },
      { title: "Heldere CTA", text: "Eén primaire contactroute voorkomt keuzeruis." }
    ]
  }),
  makeWebsitePage({
    slug: "website-laten-maken-rotterdam",
    eyebrow: "Lokale website",
    title: "Website laten maken Rotterdam",
    description:
      "Laat in Rotterdam een professionele website maken die vertrouwen opbouwt en meer relevante aanvragen oplevert.",
    kind: "location",
    audience: "ondernemers",
    location: "Rotterdam",
    answer:
      "Voor bedrijven in Rotterdam bouwt MagisData snelle servicewebsites met concrete dienstpagina's, regionale context en duidelijke contactmomenten.",
    deliverables: [
      { title: "Servicepagina's", text: "Aanbod en doelgroep direct leesbaar." },
      { title: "Rotterdam-context", text: "Lokale zoekvragen ondersteunen zonder gekopieerde copy." },
      { title: "Technische basis", text: "Performance, metadata en schema gecontroleerd." }
    ],
    serviceItems: [
      { title: "Concurrerende markt", text: "Een concrete dienstbelofte helpt onderscheiden zonder vage claims." },
      { title: "Dienst plus regio", text: "Content maakt duidelijk welke werkzaamheden je in Rotterdam bedient." },
      { title: "Contact zonder omweg", text: "De pagina stuurt naar een haalbaar eerste gesprek." }
    ]
  }),
  {
    slug: "privacybeleid",
    kind: "legal",
    eyebrow: "Privacy",
    title: "Privacybeleid",
    description:
      "In dit privacybeleid lees je hoe MagisData zorgvuldig omgaat met contactgegevens en websitegegevens.",
    metaTitle: "Privacybeleid",
    metaDescription:
      "Lees hoe MagisData omgaat met persoonsgegevens, contactaanvragen, analytics en privacy op de website.",
    keywords: ["privacybeleid MagisData", "privacy website", "persoonsgegevens"],
    primaryCta: "Neem contact op",
    secondaryCta: "Algemene voorwaarden",
    heroPoints: ["Alleen noodzakelijke gegevens", "Geen verkoop van persoonsgegevens", "Vragen via contact [at] magisdata.nl"],
    directAnswer: {
      title: "Hoe gebruikt MagisData persoonsgegevens en cookies?",
      text:
        "Contactgegevens gebruiken we om je vraag op te volgen. Het contactformulier wordt verwerkt via Formspree. Google Analytics laden we alleen wanneer je analyticscookies accepteert; je kunt die keuze later wijzigen."
    },
    sections: [
      {
        title: "Welke gegevens we gebruiken",
        text:
          "Wanneer je contact opneemt, gebruiken we je naam, e-mailadres, telefoonnummer en bericht om je vraag te beantwoorden.",
        items: [
          { title: "Contact en Formspree", text: "Gegevens uit het contactformulier worden via Formspree verwerkt zodat we je aanvraag kunnen ontvangen en opvolgen." },
          { title: "Analytics na toestemming", text: "Google Analytics (GA4) laadt alleen nadat je toestemming geeft voor analyticscookies. We gebruiken geen advertentietags." },
          { title: "Bewaren", text: "Contactaanvragen die geen klantrelatie worden bewaren we maximaal 12 maanden. Administratieve gegevens bewaren we volgens wettelijke verplichtingen." }
        ]
      },
      {
        title: "Cookies en jouw keuze",
        text:
          "Noodzakelijke opslag onthoudt je cookievoorkeur. Analytics is optioneel en blijft uit wanneer je weigert.",
        items: [
          { title: "Accepteren", text: "Na akkoord kan GA4 bezoeken en contactinteracties meten om de website te verbeteren." },
          { title: "Weigeren", text: "Bij weigeren laden we geen Google Analytics-tag en sturen we geen analyticsgebeurtenissen." },
          { title: "Wijzigen", text: "Je kunt je keuze opnieuw openen via Cookie-instellingen in de footer." }
        ]
      }
    ],
    steps: [
      { title: "Verzamelen", text: "We ontvangen alleen gegevens die je zelf invult of technisch nodig zijn." },
      { title: "Gebruiken", text: "We gebruiken contactgegevens om te reageren; analytics alleen na toestemming." },
      { title: "Beveiligen", text: "We gaan zorgvuldig met gegevens om." },
      { title: "Verwijderen", text: "Je kunt vragen om inzage of verwijdering." }
    ],
    faqs: [
      { question: "Verkoopt MagisData persoonsgegevens?", answer: "Nee. We verkopen persoonsgegevens niet." },
      { question: "Kan ik mijn gegevens laten verwijderen?", answer: "Ja. Mail naar contact [at] magisdata.nl." },
      { question: "Gebruiken jullie analytics?", answer: "Alleen na je toestemming. Zonder akkoord wordt Google Analytics niet geladen." },
      { question: "Hoe wijzig ik mijn cookiekeuze?", answer: "Gebruik Cookie-instellingen in de footer om analytics later toe te staan of opnieuw te weigeren." }
    ]
  },
  {
    slug: "algemene-voorwaarden",
    kind: "legal",
    eyebrow: "Voorwaarden",
    title: "Algemene voorwaarden",
    description:
      "Deze algemene voorwaarden beschrijven hoe MagisData samenwerkt rond websites, SEO en online groeiprojecten.",
    metaTitle: "Algemene voorwaarden",
    metaDescription:
      "Lees de algemene voorwaarden voor samenwerking met MagisData rond websites, SEO, AEO, GEO en online groei.",
    keywords: ["algemene voorwaarden MagisData", "voorwaarden website bureau"],
    primaryCta: "Neem contact op",
    secondaryCta: "Privacybeleid",
    heroPoints: ["Heldere afspraken", "Scope per voorstel", "Praktische samenwerking"],
    sections: [
      {
        title: "Samenwerking",
        text:
          "Concrete afspraken over scope, planning, prijs en oplevering leggen we vast in een voorstel of opdrachtbevestiging.",
        items: [
          { title: "Scope", text: "Werk buiten de afgesproken scope stemmen we eerst af." },
          { title: "Oplevering", text: "We controleren pagina's, techniek en basis SEO voor livegang." },
          { title: "Betaling", text: "Betaalafspraken staan in het voorstel of de factuur." }
        ]
      }
    ],
    steps: [
      { title: "Voorstel", text: "Je krijgt helder wat we doen en wat het kost." },
      { title: "Akkoord", text: "Na akkoord plannen we het werk in." },
      { title: "Uitvoering", text: "We bouwen, schrijven of optimaliseren volgens scope." },
      { title: "Afronding", text: "We leveren op en bespreken vervolgstappen." }
    ],
    faqs: [
      { question: "Zijn deze voorwaarden juridisch advies?", answer: "Nee. Dit is praktische website-informatie, geen juridisch advies." },
      { question: "Waar staan projectafspraken?", answer: "In het voorstel, de opdrachtbevestiging of factuur." },
      { question: "Kan scope wijzigen?", answer: "Ja, maar alleen na afstemming." }
    ]
  },
  {
    slug: "bedankt",
    kind: "thanks",
    eyebrow: "Bedankt",
    title: "Bedankt voor je bericht",
    description:
      "Je aanvraag is ontvangen. MagisData reageert meestal binnen een werkdag met een praktische vervolgstap.",
    metaTitle: "Bedankt voor je bericht",
    metaDescription:
      "Bedankt voor je bericht aan MagisData. We reageren meestal binnen een werkdag.",
    keywords: ["bedankt MagisData", "contact ontvangen"],
    primaryCta: "Terug naar home",
    secondaryCta: "Bekijk diensten",
    heroPoints: ["Bericht ontvangen", "Reactie meestal binnen een werkdag", "Geen verplichting"],
    sections: [
      {
        title: "Wat er nu gebeurt",
        text:
          "We bekijken je bericht en reageren met een praktische eerste richting.",
        items: [
          { title: "We lezen je vraag", text: "We kijken naar je website, doel of groeivraag." },
          { title: "Je krijgt reactie", text: "Meestal binnen een werkdag." },
          { title: "We houden het helder", text: "Geen verkooppraat, wel concrete vervolgstap." }
        ]
      }
    ],
    steps: [
      { title: "Bericht ontvangen", text: "Je aanvraag staat klaar." },
      { title: "Korte check", text: "We bekijken wat logisch is." },
      { title: "Reactie", text: "Je krijgt antwoord." },
      { title: "Volgende stap", text: "Als het past, plannen we gesprek." }
    ],
    faqs: [
      { question: "Wanneer krijg ik reactie?", answer: "Meestal binnen een werkdag." },
      { question: "Is het gesprek verplicht?", answer: "Nee. Eerst kijken we of we kunnen helpen." },
      { question: "Kan ik extra informatie sturen?", answer: "Ja. Mail gerust naar contact [at] magisdata.nl." }
    ]
  }
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
