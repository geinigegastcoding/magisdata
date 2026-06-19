import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  id: 192,
  priority: "P2",
  pageKind: "page",
  template: "package-choice",
  cluster: "Keuzehulp + plaats",
  sourceTitle: "Welk websitepakket past bij jouw bedrijf in Voorschoten?",
  sourceKeyword: "website pakket kiezen voor ondernemer Voorschoten",
  slug: "website-pakket-kiezen-voor-ondernemer-voorschoten",
  productionPath: "/website-pakket-kiezen-voor-ondernemer-voorschoten",
  draftPath: "/Keywoard-pages/routes/website-pakket-kiezen-voor-ondernemer-voorschoten/page.tsx",
  metaTitle: "Welk websitepakket past bij jouw bedrijf in Voorschoten? | MagisData",
  metaDescription:
    "Keuzehulp voor ondernemers in Voorschoten: wanneer compact genoeg is, wanneer groei logisch wordt en wanneer autoriteit pas zin heeft.",
  eyebrow: "Pakketkeuze Voorschoten",
  title: "Welk websitepakket past bij jouw bedrijf in Voorschoten?",
  description:
    "Een praktische keuzehulp voor ondernemers die een website willen die past bij hun fase, lokale markt en hoeveelheid diensten, zonder automatisch naar het grootste pakket te grijpen.",
  primaryCta: "Vraag pakketadvies aan",
  secondaryCta: "Bekijk prijzen",
  directAnswer:
    "Voor een ondernemer in Voorschoten past een compact websitepakket wanneer het aanbod overzichtelijk is, de website vooral vertrouwen moet geven en lokale SEO nog beperkt hoeft te blijven. Een groeipakket is logischer wanneer je meerdere diensten hebt, beter zichtbaar wilt worden in Voorschoten en omgeving, of bezoekers meer uitleg nodig hebben voordat ze contact opnemen. Een autoriteitspakket heeft pas zin wanneer je structureel content, cases, FAQ's en AI-vindbaarheid wilt opbouwen.",
  visual: {
    label: "Keuzeroute",
    title: "Kies op functie, niet op formaat",
    text: "Het juiste pakket hangt af van wat de website moet oplossen: vertrouwen, lokale vindbaarheid, betere aanvragen of structurele autoriteit.",
    items: ["fase", "diensten", "bewijs", "SEO", "beheer"],
  },
  highlights: [
    {
      title: "Compact",
      text: "Voor een helder aanbod, professionele uitstraling en een korte route naar contact.",
    },
    {
      title: "Groei",
      text: "Voor ondernemers met meerdere diensten, lokale SEO-ambitie en behoefte aan betere aanvraagkwaliteit.",
    },
    {
      title: "Autoriteit",
      text: "Voor bedrijven die willen bouwen aan kenniscontent, cases, themadekking en AI-vindbaarheid.",
    },
    {
      title: "Uitbreidbaar",
      text: "Een goede keuze laat ruimte om later uit te bouwen zonder de basis opnieuw te maken.",
    },
  ],
  valueSections: [
    {
      title: "Begin bij de vraag wat je website moet doen",
      paragraphs: [
        "Een pakket kies je niet op basis van het aantal blokken of pagina's, maar op basis van de rol die de website krijgt. Moet iemand alleen controleren of je betrouwbaar bent, of moet de site actief nieuwe aanvragen uit Voorschoten aantrekken?",
        "Als je aanbod simpel is, kan een compacte website sterker zijn dan een grote site met dunne pagina's. Als je meerdere diensten verkoopt, is meer structuur juist nodig om bezoekers per dienst goed te helpen.",
      ],
    },
    {
      title: "Wanneer lokale SEO de keuze verandert",
      paragraphs: [
        "Voor Voorschoten is lokale duidelijkheid belangrijk: waar werk je, welke diensten lever je, hoe kunnen mensen je bereiken en waarom past jouw aanbod bij lokale zoekers? Dat hoeft niet te betekenen dat je voor elke plaats een losse pagina nodig hebt.",
        "Lokale SEO wordt pas pakketbepalend wanneer je meerdere zoekvragen wilt winnen. Denk aan aparte pagina's voor kernservices, FAQ's rond lokale klantvragen en een betere koppeling met je Google Business Profile.",
      ],
    },
    {
      title: "Wanneer een groter pakket te vroeg komt",
      paragraphs: [
        "Een autoriteitspakket is niet verstandig als er nog geen scherpe positionering, duidelijke diensten of bewijs is. Dan koop je vooral lege ruimte die later gevuld moet worden.",
        "Beter is om compact te starten met een sterke basis en daarna gericht uit te breiden op basis van echte vragen, zoekdata en diensten die commercieel belangrijk zijn.",
      ],
    },
  ],
  sections: [
    {
      title: "Kies compact als de basis het belangrijkste is",
      text: "Een compact pakket past bij ondernemers die vooral professioneel online willen staan en minder afhankelijk zijn van brede SEO.",
      items: [
        {
          title: "Heldere kernpagina's",
          text: "Home, diensten, over, contact, FAQ en eventueel prijzen of werkwijze zijn genoeg om vertrouwen te bouwen.",
        },
        {
          title: "Een duidelijke contactroute",
          text: "De website moet op mobiel snel laten zien wat je doet en hoe iemand contact opneemt.",
        },
        {
          title: "Beperkt onderhoud",
          text: "Als je aanbod weinig verandert, hoeft de website niet meteen een groot contentritme te hebben.",
        },
      ],
    },
    {
      title: "Kies groei als je lokaal meer wilt winnen",
      text: "Een groeipakket past wanneer vindbaarheid en aanvraagkwaliteit belangrijker worden.",
      items: [
        {
          title: "Dienstpagina's",
          text: "Elke belangrijke dienst krijgt eigen uitleg, FAQ's, interne links en een passende CTA.",
        },
        {
          title: "Voorschoten-context",
          text: "Lokale inhoud wordt feitelijk en nuttig verwerkt, zonder nepvestiging of gekopieerde plaatsnaamteksten.",
        },
        {
          title: "Betere aanvragen",
          text: "Formulieren en pagina's vragen om de informatie die je nodig hebt om snel te beoordelen of een lead past.",
        },
      ],
    },
    {
      title: "Kies autoriteit als content onderdeel van groei wordt",
      text: "Autoriteit is geen luxe laagje, maar een langere termijn aanpak voor bedrijven die structureel kennis en bewijs willen publiceren.",
      items: [
        {
          title: "Cases en bewijs",
          text: "Projecten, voorbeelden en werkwijze krijgen inhoudelijke context zonder verzonnen resultaten.",
        },
        {
          title: "AI-vindbaarheid",
          text: "Antwoordblokken, schema, entiteiten en heldere bronpagina's maken de site bruikbaarder voor zoekmachines en AI-systemen.",
        },
        {
          title: "Contentplanning",
          text: "Er is pas waarde als iemand de site blijft verbeteren, meten en uitbreiden.",
        },
      ],
    },
  ],
  checklistTitle: "Pakketkeuze-check",
  checklist: [
    "Heb je een of meerdere diensten die eigen uitleg verdienen?",
    "Moet de website vooral vertrouwen bouwen of ook lokale zoekvraag winnen?",
    "Heb je bewijs, foto's, cases of procesinformatie beschikbaar?",
    "Moeten aanvragen vooraf beter worden gefilterd?",
    "Kun je na livegang content of verbeteringen blijven toevoegen?",
    "Welke pagina's kunnen later wachten zonder commerciële schade?",
  ],
  comparison: {
    title: "Start, Groei of Autoriteit",
    leftLabel: "Compact",
    rightLabel: "Groei/Autoriteit",
    rows: [
      {
        label: "Beste doel",
        left: "Professioneel online staan en vertrouwen wekken",
        right: "Meer lokale vindbaarheid, betere leads en thematische dekking",
      },
      {
        label: "Pagina's",
        left: "Kernpagina's met sterke basiscopy",
        right: "Dienstpagina's, FAQ, cases, content en interne linkstructuur",
      },
      {
        label: "Past bij",
        left: "Een overzichtelijk aanbod en beperkte SEO-druk",
        right: "Meerdere diensten, concurrentie of groeiplannen",
      },
      {
        label: "Niet kiezen als",
        left: "Je meerdere diensten actief wilt laten ranken",
        right: "Je nog geen input, bewijs of onderhoudscapaciteit hebt",
      },
    ],
  },
  steps: [
    {
      title: "Doel scherp maken",
      text: "We bepalen of de website vooral moet informeren, overtuigen, lokaal ranken of aanvragen filteren.",
    },
    {
      title: "Diensten ordenen",
      text: "We kiezen welke diensten direct eigen ruimte krijgen en welke later kunnen worden uitgebouwd.",
    },
    {
      title: "Bewijs en content inschatten",
      text: "We kijken hoeveel foto's, cases, vragen, procesinformatie en lokale context beschikbaar zijn.",
    },
    {
      title: "Pakketadvies geven",
      text: "Je krijgt een keuze die klein genoeg is om beheersbaar te blijven en groot genoeg om je doel te dragen.",
    },
  ],
  faqs: [
    {
      question: "Is een compact pakket slecht voor SEO?",
      answer:
        "Niet per se. Een compacte website kan technisch en inhoudelijk sterk zijn. Het wordt pas beperkt wanneer je veel verschillende diensten of zoekvragen wilt afdekken.",
    },
    {
      question: "Wanneer moet ik voor een groeipakket kiezen?",
      answer:
        "Als je meerdere diensten hebt, lokaal beter zichtbaar wilt worden of merkt dat bezoekers meer uitleg nodig hebben voordat ze contact opnemen.",
    },
    {
      question: "Heeft een ondernemer in Voorschoten altijd lokale SEO nodig?",
      answer:
        "Alleen wanneer lokale aanvragen belangrijk zijn. Dan moet de inhoud wel echt helpen en niet alleen Voorschoten vaak noemen.",
    },
    {
      question: "Kan ik later upgraden?",
      answer:
        "Ja. Een goede basis is zo opgebouwd dat extra dienstpagina's, cases, FAQ's en lokale content later logisch kunnen worden toegevoegd.",
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
      label: "Websitekosten Voorschoten",
      href: "/wat-kost-een-website-laten-maken-in-voorschoten",
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
    "Keuzehulp beantwoordt pakketintentie zonder naar het grootste pakket te duwen.",
    "Voorschoten-context is gekoppeld aan lokale vindbaarheid en servicegebied.",
    "Bevat praktische criteria voor compact, groei en autoriteit.",
  ],
  schemaType: "Service",
  dateModified: "2026-06-15",
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
