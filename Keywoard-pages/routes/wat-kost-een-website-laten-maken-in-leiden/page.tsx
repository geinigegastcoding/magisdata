import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  id: 193,
  priority: "P1",
  pageKind: "page",
  template: "pricing",
  cluster: "Prijs + plaats",
  sourceTitle: "Wat kost een website laten maken in Leiden?",
  sourceKeyword: "wat kost een website laten maken in Leiden",
  slug: "wat-kost-een-website-laten-maken-in-leiden",
  productionPath: "/wat-kost-een-website-laten-maken-in-leiden",
  draftPath: "/Keywoard-pages/routes/wat-kost-een-website-laten-maken-in-leiden/page.tsx",
  metaTitle: "Wat kost een website laten maken in Leiden? | MagisData",
  metaDescription:
    "Praktische uitleg over websitekosten in Leiden: scope, copy, lokale SEO, design, formulieren, onderhoud en wanneer een compactere website genoeg is.",
  eyebrow: "Prijsuitleg voor Leiden",
  title: "Wat kost een website laten maken in Leiden?",
  description:
    "Een goede prijsinschatting begint niet met een stadsnaam, maar met de vraag wat je website in Leiden moet doen: gevonden worden, vertrouwen opbouwen, aanvragen filteren of een groeisysteem dragen.",
  primaryCta: "Vraag pakketadvies aan",
  secondaryCta: "Bekijk prijzen",
  directAnswer:
    "De kosten voor een website laten maken in Leiden hangen vooral af van scope: het aantal pagina's, de kwaliteit van copywriting, lokale SEO, ontwerpdiepte, formulieren, beeldmateriaal, technische optimalisatie en onderhoud. Leiden kan competitiever zijn dan kleinere plaatsen, maar de plaats zelf maakt de website niet automatisch duurder. Je betaalt voor de hoeveelheid denkwerk, inhoud en bouwkwaliteit die nodig is om bezoekers van zoekvraag naar aanvraag te brengen.",
  visual: {
    label: "Prijsopbouw",
    title: "Wat bepaalt de investering?",
    text: "Zie een website niet als losse pagina's, maar als een beslisroute. Hoe meer diensten, doelgroepen en concurrentie, hoe meer structuur en inhoud nodig zijn.",
    items: ["scope", "copy", "SEO", "design", "intake", "beheer"],
  },
  highlights: [
    {
      title: "Geen nep-gemiddelde",
      text: "Er bestaat geen betrouwbare standaardprijs puur omdat je in Leiden zit. Scope en kwaliteit bepalen de investering.",
    },
    {
      title: "Compact kan genoeg zijn",
      text: "Een kleinere website is logisch als je aanbod scherp is en je vooral professioneel gevonden wilt worden.",
    },
    {
      title: "Groei vraagt structuur",
      text: "Meerdere diensten, locaties of klanttypes vragen om betere SEO-architectuur en diepere content.",
    },
    {
      title: "Kosten blijven beheersbaar",
      text: "Door eerst de kernpagina's te bouwen en later uit te breiden voorkom je onnodige pagina's bij livegang.",
    },
  ],
  valueSections: [
    {
      title: "Waarom de prijs niet alleen uit design bestaat",
      paragraphs: [
        "Veel ondernemers vergelijken websites alsof het vooral om uiterlijk gaat. Voor lokale vindbaarheid in Leiden is het uiterlijk maar een deel van het werk. De tekst moet zoekintentie beantwoorden, de structuur moet logisch zijn en de contactroute moet bezoekers helpen om de juiste aanvraag te doen.",
        "Een goedkope website zonder duidelijke diensten, lokale signalen en goede intake kan er netjes uitzien maar weinig opleveren. Een duurdere website is alleen zinvol wanneer die extra investering merkbaar terugkomt in strategie, copy, techniek, SEO en conversie.",
      ],
    },
    {
      title: "Wanneer een compacte website verstandig is",
      paragraphs: [
        "Een compacte website past bij ondernemers met een duidelijk aanbod, beperkte dienstverlening en weinig behoefte aan losse SEO-pagina's. Denk aan een startpunt met home, diensten, over, contact, FAQ en eventueel een prijspagina of werkwijze.",
        "Dat is geen zwakke keuze. Een compacte site kan juist sterker zijn wanneer de inhoud scherp is. Het doel is dan niet om zoveel mogelijk pagina's te publiceren, maar om snel vertrouwen te bouwen en drempels uit het contactmoment te halen.",
      ],
    },
    {
      title: "Wanneer een groeisite logischer is in Leiden",
      paragraphs: [
        "In Leiden zoeken mensen vaak specifieker: per dienst, per probleem, per wijk of per type aanbieder. Als je meerdere diensten verkoopt of in een concurrerende markt zit, kan een groeisite beter passen. Dan krijgt elke belangrijke dienst eigen uitleg, eigen FAQ's en een eigen interne plek.",
        "Die aanpak vraagt meer werk aan de voorkant, maar voorkomt dat alle zoekvragen op een algemene homepage terechtkomen. Bezoekers herkennen sneller hun situatie en zoekmachines krijgen duidelijkere inhoud om te indexeren.",
      ],
    },
  ],
  sections: [
    {
      title: "De factoren die de prijs echt bepalen",
      text: "Een websiteprijs wordt vooral bepaald door hoeveel beslissingen de site voor je bezoeker moet oplossen. Dit zijn de onderdelen die de meeste invloed hebben.",
      items: [
        {
          title: "Aantal en type pagina's",
          text: "Een basiswebsite met kernpagina's is minder werk dan een site met losse dienstpagina's, lokale landingspagina's, cases en kennisartikelen.",
        },
        {
          title: "Copywriting en positionering",
          text: "Goede teksten leggen niet alleen uit wat je doet, maar waarom iemand voor jou moet kiezen en welke vervolgstap logisch is.",
        },
        {
          title: "Lokale SEO",
          text: "Voor Leiden telt of je pagina's specifieke zoekvragen beantwoorden zonder kunstmatige plaatsnaamherhaling.",
        },
        {
          title: "Formulieren en intake",
          text: "Een goed formulier vraagt de juiste informatie, filtert slechte aanvragen en blijft kort genoeg voor mobiel gebruik.",
        },
      ],
    },
    {
      title: "Wat je beter niet koopt",
      text: "Meer onderdelen zijn niet automatisch beter. Sommige websitekosten klinken professioneel, maar leveren pas iets op als de basis klopt.",
      items: [
        {
          title: "Te veel pagina's bij start",
          text: "Publiceer geen dienstpagina's als er nog geen unieke inhoud, voorbeelden of duidelijke zoekintentie voor is.",
        },
        {
          title: "Lokale pagina's zonder inhoud",
          text: "Een Leiden-pagina heeft alleen waarde als de inhoud echt helpt. Alleen de plaatsnaam vervangen is slecht voor kwaliteit en vertrouwen.",
        },
        {
          title: "Complexe animatie zonder doel",
          text: "Beweging en visueel werk zijn alleen nuttig als ze de boodschap ondersteunen en de site snel blijft.",
        },
        {
          title: "Onderhoud dat je niet nodig hebt",
          text: "Kies beheer op basis van updatefrequentie, afhankelijkheden en groeiplannen, niet omdat elk pakket standaard maximaal moet zijn.",
        },
      ],
    },
    {
      title: "Hoe je een eerlijke offerte beoordeelt",
      text: "Een goede offerte maakt duidelijk wat je krijgt, wat later kan en welke onderdelen niet inbegrepen zijn.",
      items: [
        {
          title: "Scope is concreet",
          text: "Er staat hoeveel pagina's, hoeveel revisierondes, welke teksten, welke technische SEO en welk onderhoud inbegrepen zijn.",
        },
        {
          title: "SEO is uitgelegd",
          text: "Vraag niet alleen of SEO inbegrepen is, maar wat dat betekent: metadata, structuur, interne links, content en indexeerbaarheid.",
        },
        {
          title: "Eigenaarschap is helder",
          text: "Weet wie domein, hosting, content, analytics en latere uitbreidingen beheert.",
        },
        {
          title: "Uitbreiding is logisch",
          text: "Een goede basis maakt latere dienstpagina's, cases en lokale SEO makkelijker in plaats van duurder.",
        },
      ],
    },
  ],
  checklistTitle: "Prijscheck voordat je een website laat maken",
  checklist: [
    "Welke diensten moeten direct eigen uitleg krijgen?",
    "Moet de website vooral vertrouwen bouwen, aanvragen genereren of lokaal ranken?",
    "Wie levert foto's, logo, voorbeelden en inhoudelijke input?",
    "Zijn copywriting, metadata en lokale SEO inbegrepen?",
    "Welke formulieren, agenda's of andere koppelingen zijn echt nodig?",
    "Welke pagina's kunnen later worden gebouwd zonder de basis te verzwakken?",
  ],
  comparison: {
    title: "Compacte website of groeisite?",
    leftLabel: "Compact",
    rightLabel: "Groei",
    rows: [
      {
        label: "Doel",
        left: "Professioneel online staan en betere aanvragen ontvangen",
        right: "Structureel vindbaar worden op meerdere diensten of zoekintenties",
      },
      {
        label: "Inhoud",
        left: "Home, diensten, over, contact, FAQ en basis-SEO",
        right: "Dienstpagina's, lokale SEO, cases, kenniscontent en sterkere interne links",
      },
      {
        label: "Past als",
        left: "Je aanbod overzichtelijk is en je snel een sterke basis wilt",
        right: "Je markt concurrerend is of je meerdere diensten actief wilt laten groeien",
      },
      {
        label: "Risico",
        left: "Te weinig diepte voor zware SEO-concurrentie",
        right: "Te veel pagina's zonder genoeg echte inhoud",
      },
    ],
  },
  steps: [
    {
      title: "Doel bepalen",
      text: "Eerst bepalen we welke rol de website moet spelen: visitekaart, leadmachine, lokale SEO-basis of groeiplatform.",
    },
    {
      title: "Pagina's kiezen",
      text: "Daarna kiezen we welke pagina's bij livegang nodig zijn en welke later meer waarde hebben.",
    },
    {
      title: "Content en bewijs verzamelen",
      text: "We verzamelen diensten, werkwijze, foto's, veelgestelde vragen, prijzen of prijsfactoren en contactinformatie.",
    },
    {
      title: "Pakketadvies maken",
      text: "Je krijgt een praktische route: compact starten, gericht uitbreiden of direct bouwen voor sterkere lokale vindbaarheid.",
    },
  ],
  faqs: [
    {
      question: "Is een website laten maken in Leiden duurder dan in een kleinere plaats?",
      answer:
        "Niet automatisch. De kosten hangen af van scope, inhoud, ontwerp, SEO en beheer. Leiden kan wel meer concurrentie hebben, waardoor extra content of lokale SEO eerder zinvol wordt.",
    },
    {
      question: "Kan ik eerst klein beginnen en later uitbreiden?",
      answer:
        "Ja. Dat is vaak verstandig als je aanbod nog verandert of als je eerst wilt zien welke diensten de meeste aanvragen opleveren.",
    },
    {
      question: "Wat moet minimaal in een goede website-offerte staan?",
      answer:
        "Minimaal: aantal pagina's, copywriting, ontwerp, technische bouw, SEO-onderdelen, formulieren, hosting of beheer, revisies en wat er buiten scope valt.",
    },
    {
      question: "Wanneer is lokale SEO de extra investering waard?",
      answer:
        "Wanneer je afhankelijk bent van lokale aanvragen, meerdere diensten hebt of merkt dat concurrenten in Leiden beter zichtbaar zijn op specifieke zoekvragen.",
    },
    {
      question: "Waarom geen vaste prijs op basis van alleen de plaatsnaam?",
      answer:
        "Omdat twee Leidse bedrijven totaal andere websites nodig kunnen hebben. Een kapper, consultant, elektricien of praktijk heeft een andere structuur, inhoud en conversieroute.",
    },
  ],
  internalLinks: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Webontwikkeling",
      href: "/webontwikkeling",
    },
    {
      label: "Lokale SEO",
      href: "/lokale-seo",
    },
    {
      label: "Website laten maken Leiden",
      href: "/website-laten-maken-leiden",
    },
    {
      label: "Prijzen",
      href: "/prijzen",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  qualityNotes: [
    "Prijsintentie wordt direct beantwoord zonder verzonnen lokale gemiddelden.",
    "Leiden-context gaat over concurrentie en zoekgedrag, niet over fake locatieclaims.",
    "Bevat koopadvies, when-not-to-buy uitleg, offertecheck en FAQ voor beslissers.",
  ],
  schemaType: "Service",
  dateModified: "2026-06-15",
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
