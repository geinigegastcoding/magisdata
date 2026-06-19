import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  id: 21,
  priority: "P1",
  pageKind: "page",
  template: "branch-location",
  cluster: "Branche + plaats money page",
  sourceTitle: "Website laten maken voor kappers in Leiden",
  sourceKeyword: "website laten maken voor kappers Leiden",
  slug: "website-laten-maken-voor-kappers-leiden",
  productionPath: "/website-laten-maken-voor-kappers-leiden",
  draftPath: "/Keywoard-pages/routes/website-laten-maken-voor-kappers-leiden/page.tsx",
  metaTitle: "Website laten maken voor kappers in Leiden | MagisData",
  metaDescription:
    "Kapperswebsite voor Leiden met behandelpagina's, boekroute, prijsindicaties, sfeer, lokale SEO en een mobiele route naar afspraken.",
  eyebrow: "Kapperswebsite Leiden",
  title: "Website laten maken voor kappers in Leiden",
  description:
    "Een kapperswebsite in Leiden moet direct laten zien welke behandelingen je salon doet, waarom je stijl past en hoe iemand zonder zoeken een afspraak boekt.",
  primaryCta: "Vraag gratis websiteplan aan",
  secondaryCta: "Bekijk prijzen",
  directAnswer:
    "Een website voor een kapper in Leiden moet bovenaan drie vragen beantwoorden: welke behandelingen bied je aan, kan ik makkelijk boeken en waarom past deze salon bij mijn haar of stijl? In Leiden vergelijken bezoekers snel meerdere salons, vaak op mobiel. Daarom moet de pagina behandelingen, prijsfactoren, sfeer, openingstijden, route en afspraakknop samenbrengen in plaats van ze over losse onderdelen te verspreiden.",
  visual: {
    label: "Salonroute",
    title: "Van zoekopdracht naar afspraak",
    text:
      "De pagina helpt een Leidse bezoeker in volgorde kiezen: behandeling herkennen, vertrouwen voelen, prijsrichting begrijpen en direct boeken.",
    items: ["behandelingen", "prijsfactoren", "sfeer en stijl", "boekroute", "lokale vindbaarheid"]
  },
  highlights: [
    {
      title: "Behandeling eerst",
      text: "Knippen, kleuren, highlights, krullen, heren of bruidsstyling krijgen eigen uitleg in plaats van een losse opsomming."
    },
    {
      title: "Leiden is competitief",
      text: "Een salonpagina moet scherper zijn dan alleen 'kapper Leiden': doelgroep, stijl, locatie en boekgemak moeten direct duidelijk worden."
    },
    {
      title: "Mobiel boeken",
      text: "De afspraakknop, telefoon, route en openingstijden staan dicht bij de behandelkeuze, niet pas onderaan."
    },
    {
      title: "Geen nepbewijs",
      text: "Gebruik echte salonfoto's, echte behandelinformatie en alleen prijzen of reviews die aantoonbaar kloppen."
    }
  ],
  valueSections: [
    {
      title: "Waarom een kapperswebsite in Leiden scherper moet kiezen",
      paragraphs: [
        "Leiden heeft veel salons en veel vergelijkingsgedrag. Iemand zoekt niet alleen 'een kapper', maar een salon die past bij een specifieke behandeling: knippen, kleuren, krullen, highlights, balayage, herenknipbeurt of styling voor een gelegenheid.",
        "Daarom moet de pagina niet openen met een algemene tekst over professioneel webdesign. De pagina moet laten zien hoe een salon online gekozen wordt: behandeling, stijl, vertrouwen, prijsrichting, beschikbaarheid en boeken."
      ]
    },
    {
      title: "Welke inhoud bezoekers echt helpt kiezen",
      paragraphs: [
        "Een sterke behandelpagina legt uit wanneer een behandeling past. Bij kleuren kan dat gaan over uitgroei, toner, haarlengte, kleurhistorie en onderhoud. Bij krullen kan het gaan over kniptechniek, droog of nat knippen en voorbereiding. Bij bruidsstyling gaat het juist om proefmoment, planning en locatie.",
        "Die informatie helpt bezoekers voordat ze contact opnemen. Het voorkomt vage aanvragen zoals 'wat kost kleuren?' en maakt duidelijk welke informatie handig is om mee te sturen: gewenste behandeling, huidige haarlengte, kleurhistorie, voorkeursmoment en eventueel een foto."
      ]
    },
    {
      title: "Hoe lokale SEO hier waarde krijgt",
      paragraphs: [
        "Een Leidse kapperspagina rankt niet omdat het woord Leiden vaak terugkomt. De pagina wordt sterker wanneer de zoekvraag volledig wordt behandeld: salonstijl, behandelingen, route, openingstijden, boekingslink, Google Business Profile-consistentie en FAQ's over voorbereiding en prijs.",
        "Als de salon genoeg inhoud heeft, kunnen later aparte pagina's ontstaan voor haarkleuring, highlights, krullen knippen, herenkapper of bruidskapsel. Elke pagina moet dan eigen voorbeelden en vragen hebben. Anders wordt het alsnog dunne SEO-vulling."
      ]
    }
  ],
  sections: [
    {
      title: "De eerste schermhoogte moet de afspraak dichterbij brengen",
      text:
        "Een bezoeker die op mobiel zoekt, wil snel weten of deze salon past. De hero moet daarom behandeling, plaats en boekroute combineren.",
      items: [
        {
          title: "Heldere salonbelofte",
          text:
            "Noem direct de belangrijkste behandelingen en doelgroep, bijvoorbeeld kleur, krullen, heren, dames, kinderen of bruidsstyling."
        },
        {
          title: "Boeken zonder zoeken",
          text:
            "Plaats de boekknop of contactroute bovenaan en herhaal die bij behandelblokken waar de bezoeker besluit."
        },
        {
          title: "Praktische zekerheid",
          text:
            "Openingstijden, locatie, route, wachttijd of boekinstructie horen dichtbij de actie, zeker voor lokale zoekers."
        }
      ]
    },
    {
      title: "Behandelcontent die niet generiek voelt",
      text:
        "Elke behandeling krijgt een eigen taak: uitleggen voor wie het past, wat de bezoeker moet voorbereiden en hoe de afspraak loopt.",
      items: [
        {
          title: "Knippen en styling",
          text:
            "Vertel of de salon sterk is in dames, heren, kinderen, krullen, kort haar, lang haar of styling voor events."
        },
        {
          title: "Kleuren en highlights",
          text:
            "Leg uit welke factoren invloed hebben op tijd en prijs: haarlengte, uitgroei, toner, techniek, kleurcorrectie en onderhoud."
        },
        {
          title: "Sfeer en bewijs",
          text:
            "Gebruik echte salonbeelden, behandelvoorbeelden en een korte uitleg van werkwijze. Stockfoto's maken de keuze juist minder zeker."
        }
      ]
    },
    {
      title: "Lokale vindbaarheid zonder plaatsnaamvulling",
      text:
        "Leiden mag niet alleen als keyword op de pagina staan. Het moet helpen verklaren voor wie de salon bereikbaar, relevant en praktisch is.",
      items: [
        {
          title: "Google-profiel klopt mee",
          text:
            "Behandelingen, openingstijden, foto's, afspraaklink en contactgegevens moeten overeenkomen met de website."
        },
        {
          title: "Dienstpagina's verbinden",
          text:
            "Link vanuit de kapperspagina naar sterke behandelpagina's zodra die genoeg eigen inhoud hebben."
        },
        {
          title: "FAQ's uit echte vragen",
          text:
            "Beantwoord vragen over boeken, prijzen, voorbereiding, kleuradvies, route en wijzigingen van afspraken."
        }
      ]
    }
  ],
  checklistTitle: "Checklist voor een kapperswebsite in Leiden",
  checklist: [
    "Ziet een bezoeker binnen vijf seconden welke behandelingen de salon aanbiedt?",
    "Is de boekknop op mobiel direct zichtbaar en later op de pagina herhaald?",
    "Zijn prijsfactoren voor kleuren, knippen of styling eerlijk uitgelegd?",
    "Laat de pagina echte sfeer, stijl en werkwijze zien in plaats van stockbeelden?",
    "Kloppen openingstijden, route, afspraaklink en Google Business Profile met elkaar?",
    "Vraagt het formulier om behandeling, haarlengte, kleurhistorie, voorkeursmoment en eventueel een foto?",
    "Zijn toekomstige SEO-pagina's zoals haarkleuring, highlights of krullen knippen inhoudelijk af te bakenen?"
  ],
  comparison: {
    title: "Compacte salonwebsite of groeisite?",
    leftLabel: "Compact",
    rightLabel: "Groei",
    rows: [
      {
        label: "Past bij",
        left: "Een salon met een helder aanbod en vooral behoefte aan vertrouwen en boeken",
        right: "Een salon met meerdere behandelingen, sterke concurrentie en lokale SEO-ambitie"
      },
      {
        label: "Inhoud",
        left: "Home, behandelingen, sfeer, contact, openingstijden en boekroute",
        right: "Losse behandelpagina's, FAQ's, lokale SEO, Google-profielkoppeling en interne links"
      },
      {
        label: "Niet doen",
        left: "Een generieke one-page zonder behandelcontext",
        right: "Veel dunne pagina's maken zonder echte behandelvragen of voorbeelden"
      }
    ]
  },
  steps: [
    {
      title: "Salonaanbod kiezen",
      text: "We bepalen welke behandelingen, stijl en doelgroep bovenaan moeten staan."
    },
    {
      title: "Boekroute ontwerpen",
      text: "De mobiele route naar afspraak, telefoon of formulier wordt kort en duidelijk."
    },
    {
      title: "Behandelcopy schrijven",
      text: "We schrijven per behandeling wat iemand moet weten voor een betere afspraakaanvraag."
    },
    {
      title: "SEO-basis controleren",
      text: "Metadata, FAQ, interne links en Google-profielconsistentie worden meegenomen voordat de pagina live gaat."
    }
  ],
  faqs: [
    {
      question: "Wat kost een website voor een kapper in Leiden?",
      answer:
        "Dat hangt af van het aantal pagina's, behandelteksten, foto's, boekroute, lokale SEO en onderhoud. Een compacte salonwebsite kan genoeg zijn als je aanbod overzichtelijk is. Een groeisite past beter wanneer je meerdere behandelingen vindbaar wilt maken."
    },
    {
      question: "Moet een kapperswebsite prijzen tonen?",
      answer:
        "Vaste prijzen hoeven niet altijd, maar vanaf-prijzen of prijsfactoren helpen wel. Denk aan haarlengte, kleurtechniek, toner, uitgroei, styling en voorbereiding."
    },
    {
      question: "Welke foto's werken het beste voor een salonwebsite?",
      answer:
        "Echte foto's van de salon, stoelen, sfeer, team en behandelingen werken beter dan stockfoto's. Gebruik alleen voor-en-na beelden als je ze zelf mag tonen en ze representatief zijn."
    },
    {
      question: "Is een aparte pagina voor kapper Leiden nodig?",
      answer:
        "Alleen als Leiden echt je werkgebied of salonlocatie is en je genoeg lokale en behandelspecifieke inhoud hebt. Anders is een sterke algemene salonpagina beter dan een dunne plaatsnaampagina."
    },
    {
      question: "Welke behandelpagina's zijn later logisch?",
      answer:
        "Vaak zijn haarkleuring, highlights, balayage, krullen knippen, herenkapper of bruidsstyling logisch. Maak ze pas wanneer elke pagina eigen uitleg, FAQ en boekroute krijgt."
    }
  ],
  internalLinks: [
    { label: "Home", href: "/" },
    { label: "Webontwikkeling", href: "/webontwikkeling" },
    { label: "Website voor kappers", href: "/website-voor-kappers" },
    { label: "Website laten maken Leiden", href: "/website-laten-maken-leiden" },
    { label: "Lokale SEO", href: "/lokale-seo" },
    { label: "Prijzen", href: "/prijzen" },
    { label: "Contact", href: "/contact" }
  ],
  qualityNotes: [
    "Hand-authored for Leiden kappers search intent.",
    "Treatment, booking, price-factor, local SEO, and proof sections are page-specific.",
    "No invented salon results, reviews, or local claims.",
    "Uses realistic expansion advice for future treatment pages."
  ],
  schemaType: "Service",
  dateModified: "2026-06-15"
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
