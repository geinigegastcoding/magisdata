import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  id: 24,
  priority: "P1",
  pageKind: "page",
  template: "branch-location",
  cluster: "Branche + plaats money page",
  sourceTitle: "Website laten maken voor hoveniers in Leiden",
  sourceKeyword: "website laten maken voor hoveniers Leiden",
  slug: "website-laten-maken-voor-hoveniers-leiden",
  productionPath: "/website-laten-maken-voor-hoveniers-leiden",
  draftPath: "/Keywoard-pages/routes/website-laten-maken-voor-hoveniers-leiden/page.tsx",
  metaTitle: "Website laten maken voor hoveniers in Leiden | MagisData",
  metaDescription:
    "Hovenierswebsite voor Leiden met tuinontwerp, aanleg, onderhoud, projectfoto's, aanvraagintake, seizoensvragen en lokale SEO.",
  eyebrow: "Hovenierswebsite Leiden",
  title: "Website laten maken voor hoveniers in Leiden",
  description:
    "Een hovenierswebsite in Leiden moet tuinwensen concreet maken: ontwerp, aanleg, onderhoud, renovatie, projectvoorbeelden en een betere offerteaanvraag.",
  primaryCta: "Vraag gratis websiteplan aan",
  secondaryCta: "Bekijk prijzen",
  directAnswer:
    "Een website voor een hovenier in Leiden moet direct duidelijk maken welk tuinwerk je doet: tuinontwerp, tuinaanleg, tuinonderhoud, renovatie of seizoenswerk. Bezoekers willen projectvoorbeelden zien, begrijpen hoe een eerste gesprek loopt en weten welke informatie nodig is voor een goede aanvraag. Lokale context helpt alleen wanneer het werkgebied feitelijk klopt; de echte waarde zit in concrete uitleg over tuinprojecten.",
  visual: {
    label: "Tuinprojectroute",
    title: "Van tuinwens naar aanvraag",
    text:
      "De pagina vertaalt een vage tuinwens naar praktische informatie: type tuin, foto's, afmetingen, planning en vervolgstap.",
    items: ["tuinontwerp", "tuinaanleg", "onderhoud", "projectfoto's", "offerte-intake"]
  },
  highlights: [
    {
      title: "Projecttype zichtbaar",
      text: "Ontwerp, aanleg, onderhoud en renovatie krijgen aparte uitleg zodat bezoekers sneller de juiste aanvraag doen."
    },
    {
      title: "Leiden-context",
      text: "De pagina benoemt werkgebied en bereikbaarheid zonder te doen alsof elk project of elke tuin hetzelfde is."
    },
    {
      title: "Bewijs in beeld",
      text: "Echte projectfoto's met korte context werken sterker dan algemene claims over mooie tuinen."
    },
    {
      title: "Betere offertes",
      text: "De aanvraag vraagt om foto's, globale afmetingen, wensen, seizoen, planning en eventueel budgetrichting."
    }
  ],
  valueSections: [
    {
      title: "Waarom hovenierscontent visueel en praktisch moet zijn",
      paragraphs: [
        "Een tuinproject begint vaak met een gevoel: de tuin moet rustiger, groener, onderhoudsvriendelijker of beter bruikbaar worden. Maar voor een offerte heeft de hovenier concretere informatie nodig.",
        "Een goede pagina helpt die vertaalslag maken. Ze laat zien of de hovenier ontwerp, aanleg, onderhoud of renovatie doet en welke informatie nodig is voor de eerste inschatting."
      ]
    },
    {
      title: "Welke informatie de aanvraag beter maakt",
      paragraphs: [
        "Foto's van de tuin, globale afmetingen, gewenste stijl, huidige problemen, seizoen en planning maken een hoveniersaanvraag veel bruikbaarder. De website kan bezoekers daarop voorbereiden zonder de drempel te verhogen.",
        "Voor onderhoud is een andere route nodig dan voor aanleg. Onderhoud vraagt om frequentie, tuinoppervlak en type werk. Aanleg vraagt om ontwerpwens, materiaalkeuze, bereikbaarheid en planning."
      ]
    },
    {
      title: "Lokale SEO zonder gekopieerde tuinpagina's",
      paragraphs: [
        "Een hovenierspagina voor Leiden wordt niet sterk door alleen de plaatsnaam te herhalen. Sterke inhoud gaat over tuinontwerp, aanleg, onderhoud, renovatie, seizoenswerk en projectvoorbeelden.",
        "Als er genoeg materiaal is, kunnen later aparte pagina's ontstaan voor tuinontwerp, tuinaanleg, tuinonderhoud, tuinrenovatie of onderhoudsabonnementen. Elke pagina moet eigen foto's, voorbeelden en FAQ's hebben."
      ]
    }
  ],
  sections: [
    {
      title: "Bovenaan moet het type tuinproject duidelijk zijn",
      text:
        "Een bezoeker zoekt vaak niet zomaar een hovenier, maar hulp bij een specifiek project of terugkerend onderhoud.",
      items: [
        {
          title: "Tuinontwerp",
          text:
            "Leg uit wanneer ontwerp nodig is, welke keuzes worden gemaakt en welke input de klant kan voorbereiden."
        },
        {
          title: "Tuinaanleg",
          text:
            "Maak zichtbaar hoe aanleg verloopt: intake, plan, materiaalkeuze, planning, uitvoering en oplevering."
        },
        {
          title: "Tuinonderhoud",
          text:
            "Maak onderscheid tussen eenmalige onderhoudsbeurt, seizoenswerk en terugkerend onderhoud."
        }
      ]
    },
    {
      title: "Bewijs dat bezoekers echt helpt kiezen",
      text:
        "Voor hoveniers is bewijs vaak visueel, maar beelden hebben context nodig om waardevol te zijn.",
      items: [
        {
          title: "Projectfoto's",
          text:
            "Toon echte projecten met korte uitleg: beginsituatie, wens, gekozen oplossing en eventueel seizoen."
        },
        {
          title: "Werkwijze",
          text:
            "Vertel hoe je van aanvraag naar tuinplan of onderhoudsafspraak gaat."
        },
        {
          title: "Materiaal en onderhoud",
          text:
            "Leg uit welke keuzes invloed hebben op uitstraling, onderhoud, duurzaamheid en planning."
        }
      ]
    },
    {
      title: "SEO-structuur voor hoveniers in Leiden",
      text:
        "Vindbaarheid groeit wanneer projecttypen logisch worden uitgewerkt en intern verbonden zijn.",
      items: [
        {
          title: "Ontwerp en aanleg",
          text:
            "Deze onderwerpen kunnen later eigen pagina's krijgen als er genoeg projectmateriaal en uitleg is."
        },
        {
          title: "Onderhoud",
          text:
            "Onderhoudsvragen verdienen aparte uitleg over frequentie, seizoenen en type werk."
        },
        {
          title: "Lokale context",
          text:
            "Benoem Leiden feitelijk als werkgebied, maar laat projectuitleg de inhoud dragen."
        }
      ]
    }
  ],
  checklistTitle: "Checklist voor een hovenierswebsite in Leiden",
  checklist: [
    "Zijn tuinontwerp, aanleg, onderhoud en renovatie apart herkenbaar?",
    "Laat de pagina echte projectfoto's of echte procesuitleg zien?",
    "Vraagt het formulier om foto's, afmetingen, wensen, seizoen, planning en budgetrichting?",
    "Is Leiden feitelijk als werkgebied beschreven zonder nepvestiging?",
    "Beantwoordt de pagina seizoensvragen en onderhoudsvragen in gewone taal?",
    "Zijn toekomstige SEO-pagina's zoals tuinontwerp, aanleg en onderhoud inhoudelijk af te bakenen?"
  ],
  comparison: {
    title: "Compacte hovenierswebsite of groeisite?",
    leftLabel: "Compact",
    rightLabel: "Groei",
    rows: [
      {
        label: "Doel",
        left: "Professioneel uitleggen wat je doet en betere aanvragen ontvangen",
        right: "Meer lokale vindbaarheid rond ontwerp, aanleg, onderhoud en renovatie"
      },
      {
        label: "Inhoud",
        left: "Home, diensten, projectbeelden, werkwijze en contact",
        right: "Aparte dienstpagina's, projectcases, FAQ's en lokale content"
      },
      {
        label: "Belangrijkste risico",
        left: "Te weinig projectcontext",
        right: "Veel pagina's maken zonder eigen foto's of voorbeelden"
      }
    ]
  },
  steps: [
    { title: "Diensten scheiden", text: "We bepalen welke rol ontwerp, aanleg, onderhoud en renovatie krijgen." },
    { title: "Bewijs verzamelen", text: "We ordenen projectfoto's, procesinformatie en praktische klantvragen." },
    { title: "Aanvraagroute maken", text: "Het formulier vraagt om informatie die een hoveniersgesprek concreter maakt." },
    { title: "Uitbouwen waar zinvol", text: "Sterke projecttypen kunnen later eigen pagina's krijgen." }
  ],
  faqs: [
    {
      question: "Wat moet bovenaan een hovenierswebsite in Leiden staan?",
      answer:
        "Maak direct duidelijk of je tuinontwerp, aanleg, onderhoud of renovatie doet. Toon daarna werkwijze, bewijs en aanvraagroute."
    },
    {
      question: "Zijn projectfoto's belangrijk voor SEO?",
      answer:
        "Ze helpen vooral bezoekers. Voor SEO worden ze sterker met goede alt-tekst, projectcontext en bijbehorende uitleg."
    },
    {
      question: "Welke informatie moet een offerteformulier vragen?",
      answer:
        "Vraag foto's, globale afmetingen, gewenste werkzaamheden, stijlvoorkeur, seizoen, planning en eventueel budgetrichting."
    },
    {
      question: "Welke hoveniersdiensten verdienen eigen pagina's?",
      answer:
        "Vaak tuinontwerp, tuinaanleg, tuinonderhoud, tuinrenovatie en seizoensonderhoud, mits elke pagina eigen inhoud heeft."
    },
    {
      question: "Wat kost een website voor een hovenier in Leiden?",
      answer:
        "Dat hangt af van pagina-aantal, projectbeelden, copy, lokale SEO, formulieren en onderhoud. Een groeisite past bij meerdere projecttypen."
    }
  ],
  internalLinks: [
    { label: "Home", href: "/" },
    { label: "Webontwikkeling", href: "/webontwikkeling" },
    { label: "Website voor hoveniers", href: "/website-voor-hoveniers" },
    { label: "Website laten maken Leiden", href: "/website-laten-maken-leiden" },
    { label: "Lokale SEO", href: "/lokale-seo" },
    { label: "Prijzen", href: "/prijzen" },
    { label: "Contact", href: "/contact" }
  ],
  qualityNotes: [
    "Hand-authored for Leiden hoveniers search intent.",
    "Includes project routing, proof, intake and local SEO guidance.",
    "No fake project results or local-office claims."
  ],
  schemaType: "Service",
  dateModified: "2026-06-15"
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
