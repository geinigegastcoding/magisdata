import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  id: 22,
  priority: "P1",
  pageKind: "page",
  template: "branch-location",
  cluster: "Branche + plaats money page",
  sourceTitle: "Website laten maken voor loodgieters in Leiden",
  sourceKeyword: "website laten maken voor loodgieters Leiden",
  slug: "website-laten-maken-voor-loodgieters-leiden",
  productionPath: "/website-laten-maken-voor-loodgieters-leiden",
  draftPath: "/Keywoard-pages/routes/website-laten-maken-voor-loodgieters-leiden/page.tsx",
  metaTitle: "Website laten maken voor loodgieters in Leiden | MagisData",
  metaDescription:
    "Loodgieterswebsite voor Leiden met spoedroute, lekkage- en verstoppingscontent, servicegebied, mobiele belroute en lokale SEO.",
  eyebrow: "Loodgieterswebsite Leiden",
  title: "Website laten maken voor loodgieters in Leiden",
  description:
    "Een loodgieterswebsite in Leiden moet een gestreste bezoeker snel naar de juiste route sturen: spoed, lekkage, verstopping of gepland werk.",
  primaryCta: "Vraag gratis websiteplan aan",
  secondaryCta: "Bekijk prijzen",
  directAnswer:
    "Een website voor een loodgieter in Leiden moet direct onderscheid maken tussen spoed en gepland werk. Iemand met lekkage of verstopping wil niet door een algemene dienstenpagina zoeken, maar snel zien of bellen logisch is, welke informatie nodig is en of Leiden binnen het werkgebied valt. De pagina moet duidelijke probleemroutes tonen zonder 24/7-, garantie- of vestigingsclaims te maken die niet aantoonbaar kloppen.",
  visual: {
    label: "Probleemroute",
    title: "Van waterprobleem naar contact",
    text:
      "De pagina helpt bezoekers eerst de urgentie bepalen en daarna de juiste informatie meesturen voor opvolging.",
    items: ["spoed of gepland", "lekkage", "verstopping", "sanitair", "belroute"]
  },
  highlights: [
    {
      title: "Spoed apart",
      text: "Lekkage en verstopping krijgen een directe route; renovatie, sanitair en leidingwerk krijgen een rustigere offerteflow."
    },
    {
      title: "Leiden helder",
      text: "Werkgebied en bereikbaarheid worden feitelijk uitgelegd zonder een lokale vestiging te verzinnen."
    },
    {
      title: "Mobiel eerst",
      text: "Belknop, probleemuitleg, foto's meesturen en vervolgverwachting moeten op telefoon direct bruikbaar zijn."
    },
    {
      title: "Betere intake",
      text: "Vraag om probleemtype, urgentie, locatie in huis, foto's en bereikbaarheid zodat aanvragen minder vaag binnenkomen."
    }
  ],
  valueSections: [
    {
      title: "Waarom loodgieterscontent in Leiden niet algemeen mag zijn",
      paragraphs: [
        "Een bezoeker zoekt een loodgieter vaak op een vervelend moment: water loopt door, een afvoer zit dicht of er is schade zichtbaar. Die bezoeker wil niet eerst een breed verhaal over vakmanschap lezen.",
        "Daarom moet de pagina starten met herkenbare problemen. Lekkage, verstopping, sanitair en leidingwerk krijgen elk hun eigen uitleg en contactverwachting. Dat maakt de pagina nuttig en voorkomt dat alles op een hoop terechtkomt."
      ]
    },
    {
      title: "Wat een goede aanvraag concreet maakt",
      paragraphs: [
        "Een loodgieter kan sneller reageren wanneer de aanvraag vertelt waar het probleem zit, wanneer het begon, of er foto's zijn, hoe urgent het voelt en hoe iemand bereikbaar is. De website kan die informatie vragen zonder het formulier zwaar te maken.",
        "Voor spoed blijft bellen vaak logischer. Voor gepland werk kan een formulier beter zijn, omdat sanitair, leidingwerk of onderhoud meer context vraagt."
      ]
    },
    {
      title: "Lokale SEO rond echte problemen",
      paragraphs: [
        "In Leiden concurreren loodgieters niet alleen op 'loodgieter Leiden', maar ook op problemen zoals lekkage opsporen, afvoer verstopt, wc verstopping, kraan vervangen en leidingwerk. Die zoekvragen verdienen alleen eigen pagina's als er echte uitleg bij staat.",
        "De pagina moet geen 24/7 spoed of garantie beloven als dat niet klopt. Eerlijke bereikbaarheid en duidelijke vervolgverwachting bouwen meer vertrouwen op dan harde claims."
      ]
    }
  ],
  sections: [
    {
      title: "Bovenaan: eerst urgentie, dan dienst",
      text:
        "Een goede loodgieterswebsite verlaagt stress. De eerste keuze is niet welke dienst mooi klinkt, maar of iemand direct moet bellen.",
      items: [
        {
          title: "Spoedroute",
          text:
            "Maak duidelijk wanneer bellen logisch is en welke informatie iemand direct moet doorgeven."
        },
        {
          title: "Probleemkeuze",
          text:
            "Gebruik herkenbare blokken voor lekkage, verstopping, sanitair, leidingwerk en onderhoud."
        },
        {
          title: "Vervolgverwachting",
          text:
            "Leg kort uit wat er na bellen of aanvragen gebeurt. Dat is belangrijker dan een lange introductie."
        }
      ]
    },
    {
      title: "Bewijs dat past bij loodgieterswerk",
      text:
        "Bij waterproblemen ontstaat vertrouwen door duidelijkheid: waar werk je, hoe beoordeel je de vraag en welke informatie heb je nodig?",
      items: [
        {
          title: "Werkgebied",
          text:
            "Benoem Leiden als werkgebied wanneer dat feitelijk klopt en wees helder over omliggende plaatsen."
        },
        {
          title: "Geen valse spoedclaim",
          text:
            "Claim alleen 24/7, directe spoed of garanties als dit echt geleverd en onderbouwd wordt."
        },
        {
          title: "Voorbereiding",
          text:
            "Vraag foto's, probleemlocatie, urgentie en bereikbaarheid. Dat maakt contact sneller en nuttiger."
        }
      ]
    },
    {
      title: "Welke SEO-pagina's later logisch zijn",
      text:
        "Niet elk probleem hoeft direct een losse pagina. Begin met de hoofdpagina en bouw pas uit wanneer er genoeg inhoud is.",
      items: [
        {
          title: "Lekkage",
          text:
            "Een lekkagepagina kan uitleggen wat iemand moet doen, welke foto's helpen en welke informatie nodig is."
        },
        {
          title: "Verstopping",
          text:
            "Een verstoppingspagina kan onderscheid maken tussen afvoer, wc, keuken, badkamer en terugkerende problemen."
        },
        {
          title: "Sanitair en leidingwerk",
          text:
            "Voor gepland werk zijn scope, foto's, materiaal en planning belangrijker dan spoedtaal."
        }
      ]
    }
  ],
  checklistTitle: "Checklist voor een loodgieterswebsite in Leiden",
  checklist: [
    "Kan iemand direct kiezen tussen spoed en gepland werk?",
    "Zijn lekkage, verstopping, sanitair en leidingwerk apart herkenbaar?",
    "Staat de belknop op mobiel bovenaan of dicht bij de probleemkeuze?",
    "Is het werkgebied Leiden feitelijk beschreven zonder neplocatie?",
    "Vraagt het formulier om probleemtype, urgentie, locatie, foto's en bereikbaarheid?",
    "Vermijdt de pagina 24/7-, garantie- en vestigingsclaims die niet bewezen zijn?"
  ],
  comparison: {
    title: "Compacte loodgieterswebsite of groeisite?",
    leftLabel: "Compact",
    rightLabel: "Groei",
    rows: [
      {
        label: "Doel",
        left: "Beter vindbaar en bereikbaar zijn voor hoofddiensten",
        right: "Aparte zoekvragen rond lekkage, verstopping en sanitair sterker afdekken"
      },
      {
        label: "Inhoud",
        left: "Home, diensten, werkgebied, contact en FAQ",
        right: "Probleempagina's, lokale SEO, intakeflows en interne links"
      },
      {
        label: "Belangrijkste risico",
        left: "Te algemene diensten zonder spoedroute",
        right: "Te veel dunne probleem- of plaatsnaampagina's"
      }
    ]
  },
  steps: [
    { title: "Problemen ordenen", text: "We scheiden spoed, lekkage, verstopping, sanitair en gepland werk." },
    { title: "Mobiele route bouwen", text: "Belknop, probleemkeuze en formulier worden kort en duidelijk ingericht." },
    { title: "Lokale basis schrijven", text: "Werkgebied, metadata, FAQ en interne links worden feitelijk opgebouwd." },
    { title: "Aanvragen verbeteren", text: "Na livegang kun je zien welke probleemroutes contact opleveren." }
  ],
  faqs: [
    {
      question: "Wat moet bovenaan een loodgieterswebsite in Leiden staan?",
      answer:
        "Een keuze tussen spoed en gepland werk, herkenbare probleemcategorieen, werkgebied en een directe bel- of contactroute."
    },
    {
      question: "Moet ik 24/7 spoedservice noemen?",
      answer:
        "Alleen als je dit echt levert. Als je bereikbaarheid beperkter is, is eerlijke uitleg over tijden en opvolging beter."
    },
    {
      question: "Welke informatie moet een formulier vragen?",
      answer:
        "Vraag probleemtype, urgentie, locatie in huis, foto's, wanneer het begon, zichtbare schade en bereikbaarheid."
    },
    {
      question: "Welke loodgietersdiensten verdienen eigen SEO-pagina's?",
      answer:
        "Vaak lekkage, verstopping, sanitair en leidingwerk. Elke pagina moet eigen uitleg, FAQ en contactroute hebben."
    },
    {
      question: "Wat kost een website voor een loodgieter in Leiden?",
      answer:
        "Dat hangt af van pagina-aantal, copy, SEO, formulieren, beelden en onderhoud. Een compacte site kan volstaan; een groeisite past bij meerdere probleemroutes."
    }
  ],
  internalLinks: [
    { label: "Home", href: "/" },
    { label: "Webontwikkeling", href: "/webontwikkeling" },
    { label: "Website voor loodgieters", href: "/website-voor-loodgieters" },
    { label: "Website laten maken Leiden", href: "/website-laten-maken-leiden" },
    { label: "Lokale SEO", href: "/lokale-seo" },
    { label: "Prijzen", href: "/prijzen" },
    { label: "Contact", href: "/contact" }
  ],
  qualityNotes: [
    "Hand-authored for Leiden loodgieters search intent.",
    "Includes urgency, problem routing, intake and local SEO substance.",
    "Avoids false 24/7, guarantee and local-office claims."
  ],
  schemaType: "Service",
  dateModified: "2026-06-15"
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
