import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  id: 194,
  priority: "P2",
  pageKind: "page",
  template: "package-choice",
  cluster: "Keuzehulp + plaats",
  sourceTitle: "Welk websitepakket past bij jouw bedrijf in Leiden?",
  sourceKeyword: "website pakket kiezen voor ondernemer Leiden",
  slug: "website-pakket-kiezen-voor-ondernemer-leiden",
  productionPath: "/website-pakket-kiezen-voor-ondernemer-leiden",
  draftPath: "/Keywoard-pages/routes/website-pakket-kiezen-voor-ondernemer-leiden/page.tsx",
  metaTitle: "Welk websitepakket past bij jouw bedrijf in Leiden? | MagisData",
  metaDescription:
    "Keuzehulp voor ondernemers in Leiden: compact starten, groeien met lokale SEO of bouwen aan autoriteit met content en AI-vindbaarheid.",
  eyebrow: "Pakketkeuze Leiden",
  title: "Welk websitepakket past bij jouw bedrijf in Leiden?",
  description:
    "Een Leidse ondernemer heeft niet automatisch een grote website nodig, maar in een drukkere lokale markt moet de website wel scherp genoeg zijn om diensten, vertrouwen en aanvragen goed te dragen.",
  primaryCta: "Vraag pakketadvies aan",
  secondaryCta: "Bekijk prijzen",
  directAnswer:
    "Voor een bedrijf in Leiden past een compact websitepakket wanneer je aanbod helder is en je vooral professioneel gevonden wilt worden. Een groeipakket past beter wanneer je meerdere diensten hebt, lokale concurrentie voelt of gerichter wilt ranken op zoekvragen rond je diensten. Een autoriteitspakket is zinvol wanneer content, cases, FAQ's, schema en AI-vindbaarheid onderdeel worden van je marketingaanpak. De juiste keuze hangt dus af van diensten, concurrentie, bewijs, beheer en groeitempo.",
  visual: {
    label: "Beslisroute",
    title: "Van lokale basis naar autoriteit",
    text: "In Leiden is de vraag niet alleen hoeveel pagina's je krijgt, maar hoe goed elke pagina een echte zoekvraag en keuze beantwoordt.",
    items: ["basis", "lokale SEO", "diensten", "bewijs", "content"],
  },
  highlights: [
    {
      title: "Compact",
      text: "Voor bedrijven met een scherp aanbod en behoefte aan een betrouwbare online basis.",
    },
    {
      title: "Groei",
      text: "Voor meerdere diensten, lokale vindbaarheid en betere routes naar contact.",
    },
    {
      title: "Autoriteit",
      text: "Voor bedrijven die willen publiceren, meten en vindbaarheid structureel opbouwen.",
    },
    {
      title: "Leiden-proof",
      text: "Niet meer pagina's om meer pagina's, maar diepte waar concurrentie en zoekintentie daarom vragen.",
    },
  ],
  valueSections: [
    {
      title: "Waarom Leiden de pakketkeuze scherper maakt",
      paragraphs: [
        "In Leiden vergelijken zoekers vaak meerdere aanbieders. Ze kijken niet alleen of je bestaat, maar of je aanbod past, of je betrouwbaar overkomt en of de route naar contact weinig moeite kost.",
        "Daardoor kan een groeipakket eerder logisch zijn dan in een kleinere markt. Niet omdat Leiden magisch duurder is, maar omdat concurrentie en zoekgedrag vaker vragen om betere dienstpagina's, FAQ's en lokale context.",
      ],
    },
    {
      title: "Wanneer compact juist verstandig blijft",
      paragraphs: [
        "Een compact pakket is sterk wanneer je aanbod simpel is en de website vooral moet bevestigen dat je professioneel, bereikbaar en duidelijk bent. Denk aan ondernemers die via netwerk, verwijzing of bestaande klanten al vraag krijgen.",
        "Dan is het belangrijker dat de basis snel, rustig en overtuigend staat dan dat er meteen veel content wordt gepubliceerd die nog geen eigen zoekvraag of bewijs heeft.",
      ],
    },
    {
      title: "Wanneer autoriteit geen luxe maar strategie is",
      paragraphs: [
        "Autoriteit wordt interessant wanneer je niet alleen een website wilt, maar een contentfundament. Dat betekent: sterke servicepagina's, antwoorden op echte klantvragen, cases zonder verzonnen resultaten, schema en interne links.",
        "Voor AI-vindbaarheid telt vooral of je pagina's duidelijk, feitelijk en citeerbaar zijn. Een autoriteitspakket vraagt daarom ook om onderhoud en inhoudelijke input na livegang.",
      ],
    },
  ],
  sections: [
    {
      title: "Kies compact als je vooral helderheid nodig hebt",
      text: "Een compacte website kan prima ranken op je merk en basisaanbod, zolang de inhoud scherp en technisch netjes is.",
      items: [
        {
          title: "Basisstructuur",
          text: "Home, diensten, over, contact en FAQ geven bezoekers genoeg om jou te beoordelen.",
        },
        {
          title: "Snelle keuze",
          text: "De site legt kort uit wat je doet, voor wie en hoe iemand contact opneemt.",
        },
        {
          title: "Lage onderhoudsdruk",
          text: "Past wanneer je weinig nieuwe content, cases of campagnes wilt beheren.",
        },
      ],
    },
    {
      title: "Kies groei als je diensten moeten gaan ranken",
      text: "Een groeisite helpt wanneer een algemene homepage niet genoeg is om verschillende zoekvragen te beantwoorden.",
      items: [
        {
          title: "Dienstclusters",
          text: "Belangrijke diensten krijgen eigen pagina's met uitleg, bezwaren, FAQ's en CTA's.",
        },
        {
          title: "Lokale relevantie",
          text: "Leiden-context wordt gebruikt waar het aanbod, werkgebied of klantvraag dat ondersteunt.",
        },
        {
          title: "Conversie",
          text: "Aanvraagformulieren en contactmomenten sluiten beter aan op verschillende soorten bezoekers.",
        },
      ],
    },
    {
      title: "Kies autoriteit als je structureel wilt bouwen",
      text: "Autoriteit vraagt om meer dan lanceren. Het gaat om meten, publiceren en verbeteren.",
      items: [
        {
          title: "Kenniscontent",
          text: "Inzichten, gidsen en FAQ's beantwoorden vragen die klanten hebben voordat ze kopen.",
        },
        {
          title: "Cases en bewijs",
          text: "Voorbeelden laten zien hoe je werkt zonder resultaten te verzinnen of te overclaimen.",
        },
        {
          title: "GEO en AEO",
          text: "Antwoordstructuur, schema en duidelijke entiteiten helpen de site bruikbaar maken voor AI en answer engines.",
        },
      ],
    },
  ],
  checklistTitle: "Kies je pakket op deze vragen",
  checklist: [
    "Hoeveel diensten zijn commercieel belangrijk genoeg voor eigen pagina's?",
    "Is lokale vindbaarheid in Leiden een primaire bron van aanvragen?",
    "Heeft de website bewijs nodig zoals cases, foto's, proces of klantvragen?",
    "Moet de site verschillende doelgroepen of urgenties bedienen?",
    "Wie kan na livegang content, updates of verbeteringen aanleveren?",
    "Welke investering is logisch voor de fase waarin je bedrijf nu zit?",
  ],
  comparison: {
    title: "Pakketmatrix voor Leiden",
    leftLabel: "Compact",
    rightLabel: "Groei/Autoriteit",
    rows: [
      {
        label: "Doel",
        left: "Betrouwbare basis en duidelijke contactroute",
        right: "Meer zichtbaarheid, betere uitleg en structurele groei",
      },
      {
        label: "SEO",
        left: "Merk, basisdiensten en technische hygiene",
        right: "Dienstclusters, lokale zoekvragen, FAQ's en schema",
      },
      {
        label: "Content",
        left: "Kerncopy en enkele praktische vragen",
        right: "Diepere pagina's, cases, kenniscontent en interne links",
      },
      {
        label: "Voorwaarde",
        left: "Aanbod is overzichtelijk",
        right: "Er is genoeg inhoudelijke input om pagina's echt waardevol te maken",
      },
    ],
  },
  steps: [
    {
      title: "Markt en aanbod bepalen",
      text: "We kijken welke diensten in Leiden echt gevonden moeten worden en welke alleen basisuitleg nodig hebben.",
    },
    {
      title: "Zoekintentie koppelen",
      text: "Elke mogelijke pagina krijgt een taak: informeren, vergelijken, vertrouwen bouwen of contact uitlokken.",
    },
    {
      title: "Pakket kiezen",
      text: "We kiezen compact, groei of autoriteit op basis van waarde, niet op basis van maximale omvang.",
    },
    {
      title: "Groeipad vastleggen",
      text: "Wat niet bij livegang nodig is, krijgt een logische plek in de latere planning.",
    },
  ],
  faqs: [
    {
      question: "Is Groei altijd beter dan Compact in Leiden?",
      answer:
        "Nee. Groei is alleen beter als je meerdere diensten, lokale concurrentie of duidelijke SEO-ambitie hebt. Anders kan Compact sneller en sterker zijn.",
    },
    {
      question: "Wanneer is Autoriteit te vroeg?",
      answer:
        "Wanneer er nog geen duidelijke positionering, dienststructuur, cases of contentcapaciteit is. Dan bouw je beter eerst een scherpe basis.",
    },
    {
      question: "Kan ik compact starten en later SEO uitbreiden?",
      answer:
        "Ja. Dat is vaak de beste route wanneer je nog wilt leren welke diensten de meeste vraag en omzet opleveren.",
    },
    {
      question: "Maakt lokale concurrentie in Leiden echt verschil?",
      answer:
        "Ja, vooral als meerdere aanbieders dezelfde diensten targeten. Dan wordt diepere inhoud, betere structuur en sterkere bewijsvoering belangrijker.",
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
      label: "Websitekosten Leiden",
      href: "/wat-kost-een-website-laten-maken-in-leiden",
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
    "Keuzehulp sluit aan op Leidse concurrentie en lokale zoekintentie.",
    "Legt compact, groei en autoriteit uit zonder grootste-pakket push.",
    "Bevat concrete criteria, vergelijking en FAQ voor ondernemers.",
  ],
  schemaType: "Service",
  dateModified: "2026-06-15",
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
