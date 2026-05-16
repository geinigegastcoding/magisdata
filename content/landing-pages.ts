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
  location
}: {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  kind: LandingPage["kind"];
  audience: string;
  location?: string;
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
    primaryCta: "Vraag gratis advies aan",
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
        items: [
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
      }
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
  promise
}: {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  audience: string;
  promise: string;
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
    primaryCta: "Vraag gratis advies aan",
    secondaryCta: "Bekijk diensten",
    heroPoints: [
      `Gericht op ${primaryKeyword}`,
      "Sterke pagina's, metadata en interne links",
      "Rustige strategie voor betere vindbaarheid en aanvragen"
    ],
    sections: [
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
    steps: [
      { title: "Kansen kiezen", text: "We bepalen welke zoektermen en pagina's het meeste kunnen opleveren." },
      { title: "Pagina bouwen", text: "We maken duidelijke content rond zoekintentie, bewijs en conversie." },
      { title: "Techniek goedzetten", text: "We zetten metadata, schema, sitemap en interne links strak neer." },
      { title: "Doorbouwen", text: "We vullen aan met content die autoriteit en vindbaarheid versterkt." }
    ],
    faqs: [
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
  makeWebsitePage({
    slug: "website-laten-maken",
    eyebrow: "Website laten maken",
    title: "Website laten maken die vertrouwen en aanvragen oplevert",
    description:
      "Laat een professionele website maken die snel laadt, duidelijk uitlegt wat je doet en bezoekers helpt contact op te nemen.",
    kind: "service",
    audience: "ondernemers"
  }),
  makeWebsitePage({
    slug: "website-onderhoud",
    eyebrow: "Website onderhoud",
    title: "Website onderhoud zonder technisch gedoe",
    description:
      "Houd je website veilig, snel en actueel met praktisch onderhoud, technische checks en kleine verbeteringen.",
    kind: "service",
    audience: "ondernemers"
  }),
  makeWebsitePage({
    slug: "seo-website-laten-maken",
    eyebrow: "SEO website",
    title: "SEO website laten maken voor betere vindbaarheid",
    description:
      "Laat een website maken met SEO-structuur, snelle techniek, sterke content en interne links vanaf de start.",
    kind: "service",
    audience: "ondernemers die gevonden willen worden"
  }),
  makeGrowthPage({
    slug: "seo-bureau",
    eyebrow: "SEO bureau",
    title: "SEO bureau voor betere vindbaarheid en meer aanvragen",
    description:
      "Werk met een SEO bureau dat pagina's, techniek, content en conversie samenbrengt voor duurzame online groei.",
    primaryKeyword: "SEO bureau",
    secondaryKeywords: ["SEO bureau Nederland", "zoekmachine optimalisatie bureau", "SEO specialist", "SEO diensten"],
    audience: "ondernemers en groeiende bedrijven",
    promise:
      "MagisData helpt met zoekwoordenonderzoek, technische SEO, servicepagina's, lokale SEO, contentstructuur en meetbare verbeteringen die passen bij jouw markt."
  }),
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
      "We richten je website op de diensten, plaatsen en klantvragen die lokaal tellen, zonder dunne of spammy plaatsnaampagina's."
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
      "We combineren lokale zoekintentie, servicepagina's, interne links en technische SEO zodat klanten in Leiden je bedrijf makkelijker vinden en vertrouwen."
  }),
  makeGrowthPage({
    slug: "ai-seo-bureau",
    eyebrow: "AI SEO bureau",
    title: "AI SEO bureau voor vindbaarheid in Google en AI-antwoorden",
    description:
      "Optimaliseer je website voor klassieke SEO, AI Overviews, ChatGPT, Perplexity en andere AI-zoekervaringen.",
    primaryKeyword: "AI SEO bureau",
    secondaryKeywords: ["AI SEO", "AI vindbaarheid", "GEO bureau", "AEO bureau", "LLM SEO"],
    audience: "bedrijven die vooruit willen lopen op AI-zoekgedrag",
    promise:
      "MagisData maakt je website begrijpelijker voor zoekmachines en AI-systemen met heldere definities, FAQ's, schema, interne links en citeerbare contentblokken."
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
      "We ordenen je diensten, expertise, bewijs en antwoorden zodat AI-systemen minder hoeven te gokken en je bedrijf consistenter kunnen beschrijven."
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
      "We kiezen geen losse marketingtrucs, maar bouwen een samenhangende basis: positionering, website, vindbaarheid, conversie en opvolging."
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
      "We verbeteren boodschap, pagina-opbouw, CTA's, formulieren, bewijs en mobiele ervaring zodat bezoekers sneller begrijpen en handelen."
  }),
  makeWebsitePage({
    slug: "website-voor-loodgieters",
    eyebrow: "Branche website",
    title: "Website voor loodgieters die meer aanvragen oplevert",
    description:
      "Een duidelijke website voor loodgieters met sterke servicepagina's, lokale SEO en snelle contactmogelijkheden.",
    kind: "industry",
    audience: "loodgieters"
  }),
  makeWebsitePage({
    slug: "website-voor-elektriciens",
    eyebrow: "Branche website",
    title: "Website voor elektriciens die betrouwbaar overkomt",
    description:
      "Een professionele website voor elektriciens met duidelijke diensten, lokale vindbaarheid en een korte route naar contact.",
    kind: "industry",
    audience: "elektriciens"
  }),
  makeWebsitePage({
    slug: "website-voor-kappers",
    eyebrow: "Branche website",
    title: "Website voor kappers die klanten laat boeken",
    description:
      "Een rustige, mobiele website voor kappers met duidelijke prijzen, behandelingen, locatie-informatie en contactroutes.",
    kind: "industry",
    audience: "kappers"
  }),
  makeWebsitePage({
    slug: "website-voor-hoveniers",
    eyebrow: "Branche website",
    title: "Website voor hoveniers met sterke lokale vindbaarheid",
    description:
      "Een professionele website voor hoveniers met duidelijke diensten, projectbewijs en SEO voor lokale aanvragen.",
    kind: "industry",
    audience: "hoveniers"
  }),
  makeWebsitePage({
    slug: "website-laten-maken-leiden",
    eyebrow: "Lokale website",
    title: "Website laten maken Leiden",
    description:
      "Laat in Leiden een professionele website maken die jouw bedrijf duidelijk positioneert en lokale aanvragen stimuleert.",
    kind: "location",
    audience: "ondernemers",
    location: "Leiden"
  }),
  makeWebsitePage({
    slug: "website-laten-maken-den-haag",
    eyebrow: "Lokale website",
    title: "Website laten maken Den Haag",
    description:
      "Laat in Den Haag een snelle, duidelijke website maken met sterke lokale SEO en een heldere contactroute.",
    kind: "location",
    audience: "ondernemers",
    location: "Den Haag"
  }),
  makeWebsitePage({
    slug: "website-laten-maken-rotterdam",
    eyebrow: "Lokale website",
    title: "Website laten maken Rotterdam",
    description:
      "Laat in Rotterdam een professionele website maken die vertrouwen opbouwt en meer relevante aanvragen oplevert.",
    kind: "location",
    audience: "ondernemers",
    location: "Rotterdam"
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
    heroPoints: ["Alleen noodzakelijke gegevens", "Geen verkoop van persoonsgegevens", "Vragen via hallo [at] magisdata.nl"],
    sections: [
      {
        title: "Welke gegevens we gebruiken",
        text:
          "Wanneer je contact opneemt, gebruiken we je naam, e-mailadres, telefoonnummer en bericht om je vraag te beantwoorden.",
        items: [
          { title: "Contact", text: "Gegevens uit e-mail of formulier gebruiken we alleen voor opvolging." },
          { title: "Analytics", text: "We gebruiken Google Analytics om de website te verbeteren." },
          { title: "Bewaren", text: "We bewaren gegevens niet langer dan nodig voor contact en administratie." }
        ]
      }
    ],
    steps: [
      { title: "Verzamelen", text: "We ontvangen alleen gegevens die je zelf invult of technisch nodig zijn." },
      { title: "Gebruiken", text: "We gebruiken gegevens om te reageren en de website te verbeteren." },
      { title: "Beveiligen", text: "We gaan zorgvuldig met gegevens om." },
      { title: "Verwijderen", text: "Je kunt vragen om inzage of verwijdering." }
    ],
    faqs: [
      { question: "Verkoopt MagisData persoonsgegevens?", answer: "Nee. We verkopen persoonsgegevens niet." },
      { question: "Kan ik mijn gegevens laten verwijderen?", answer: "Ja. Mail naar hallo [at] magisdata.nl." },
      { question: "Gebruiken jullie analytics?", answer: "Ja. Google Analytics helpt ons de website te verbeteren." }
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
      { question: "Kan ik extra informatie sturen?", answer: "Ja. Mail gerust naar hallo [at] magisdata.nl." }
    ]
  }
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
