import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  id: 23,
  priority: "P1",
  pageKind: "page",
  template: "branch-location",
  cluster: "Branche + plaats money page",
  sourceTitle: "Website laten maken voor elektriciens in Leiden",
  sourceKeyword: "website laten maken voor elektriciens Leiden",
  slug: "website-laten-maken-voor-elektriciens-leiden",
  productionPath: "/website-laten-maken-voor-elektriciens-leiden",
  draftPath: "/Keywoard-pages/routes/website-laten-maken-voor-elektriciens-leiden/page.tsx",
  metaTitle: "Website laten maken voor elektriciens in Leiden | MagisData",
  metaDescription:
    "Elektricienswebsite voor Leiden met storing-vs-project route, veilige contactcopy, dienstpagina's, intakevragen en lokale SEO.",
  eyebrow: "Elektricienswebsite Leiden",
  title: "Website laten maken voor elektriciens in Leiden",
  description:
    "Een elektricienswebsite in Leiden moet bezoekers veilig en snel laten kiezen tussen storing, inspectie en gepland installatiewerk.",
  primaryCta: "Vraag gratis websiteplan aan",
  secondaryCta: "Bekijk prijzen",
  directAnswer:
    "Een website voor een elektricien in Leiden moet direct duidelijk maken of de bezoeker een storing, inspectie of project heeft. Bij elektra is veiligheid belangrijker dan verkooppraat: de pagina moet uitleggen wanneer iemand direct contact moet opnemen, welke informatie nuttig is en welke diensten worden uitgevoerd, zoals groepenkast vervangen, laadpunt installeren, verlichting, storing oplossen of elektra inspectie. Certificaten en garanties mogen alleen worden genoemd als ze echt aantoonbaar zijn.",
  visual: {
    label: "Diagnoseroute",
    title: "Storing, inspectie of project",
    text:
      "De pagina stuurt bezoekers naar de juiste route: direct contact bij risico, intake bij projectwerk en duidelijke voorbereiding bij offertes.",
    items: ["storing", "groepenkast", "laadpunt", "inspectie", "offerte"]
  },
  highlights: [
    {
      title: "Veiligheid eerst",
      text: "Risicosignalen zoals brandlucht, vonken of uitvallende groepen krijgen een duidelijke contactroute zonder gevaarlijk doe-het-zelfadvies."
    },
    {
      title: "Projecten apart",
      text: "Groepenkasten, laadpunten, verlichting en uitbreidingen vragen andere informatie dan acute storingen."
    },
    {
      title: "Leiden feitelijk",
      text: "De pagina benoemt Leiden als werkgebied alleen wanneer dat klopt en vermijdt verzonnen lokale adressen."
    },
    {
      title: "Bewijs zonder opscheppen",
      text: "Certificering, keurmerken en garanties worden alleen gebruikt wanneer ze werkelijk bestaan en zichtbaar onderbouwd zijn."
    }
  ],
  valueSections: [
    {
      title: "Waarom elektricienscopy zorgvuldiger moet zijn",
      paragraphs: [
        "Bij elektra kan slechte informatie gevaarlijk zijn. Een website mag bezoekers niet aanmoedigen om risicovolle situaties zelf te beoordelen of op te lossen. De inhoud moet juist helpen herkennen wanneer direct contact nodig is.",
        "Daarom werkt een elektricienswebsite beter met routes: storing, inspectie en project. Elke route heeft een andere CTA, andere voorbereiding en andere verwachting."
      ]
    },
    {
      title: "Welke informatie de bezoeker moet voorbereiden",
      paragraphs: [
        "Voor storingen zijn signalen belangrijk: welke groep valt uit, is er brandlucht, zijn er vonken, wanneer begon het probleem en raakt het meerdere ruimtes? Voor projecten gaat het juist om woningtype, gewenste uitbreiding, foto's van de groepenkast en planning.",
        "Een goed formulier vraagt om die informatie zonder lang te worden. Zo krijgt de elektricien betere context en voelt de bezoeker zich serieus geholpen."
      ]
    },
    {
      title: "Lokale SEO rond echte elektrische vragen",
      paragraphs: [
        "In Leiden kunnen zoekvragen rond groepenkast vervangen, laadpunt installeren, kortsluiting oplossen, elektra inspectie en verlichting plaatsen ieder een eigen pagina verdienen. Dat is pas verstandig als er echte uitleg, FAQ en contactinformatie per onderwerp is.",
        "De pagina mag niet leunen op herhaling van 'elektricien Leiden'. De inhoud moet aantonen welke problemen worden opgelost, welke voorbereiding nodig is en waar de grenzen liggen."
      ]
    }
  ],
  sections: [
    {
      title: "De eerste keuze: risico of project",
      text:
        "Een bezoeker moet niet zoeken tussen algemene diensten. Bovenaan hoort direct de keuze te staan: acuut probleem, inspectie of gepland werk.",
      items: [
        {
          title: "Storing",
          text:
            "Kortsluiting, uitvallende groepen, brandlucht of vonken vragen om een heldere contactroute en voorzichtige taal."
        },
        {
          title: "Inspectie",
          text:
            "Bij twijfel over veiligheid, capaciteit of oude installaties is inspectie vaak logischer dan direct projectverkoop."
        },
        {
          title: "Project",
          text:
            "Groepenkast, laadpunt, verlichting of uitbreiding vraagt om foto's, scope en planning."
        }
      ]
    },
    {
      title: "Wat vertrouwen geeft bij elektra",
      text:
        "Vertrouwen ontstaat door duidelijk proces en grenzen, niet door grote claims.",
      items: [
        {
          title: "Veilige formulering",
          text:
            "Leg uit wanneer contact nodig is, maar geef geen instructies die gevaarlijk kunnen zijn."
        },
        {
          title: "Aantoonbare erkenning",
          text:
            "Noem certificaten, keurmerken of garanties alleen als de elektricien die echt heeft."
        },
        {
          title: "Heldere voorbereiding",
          text:
            "Vraag foto's van de groepenkast, probleemomschrijving, urgentie en gewenste planning."
        }
      ]
    },
    {
      title: "SEO-structuur voor elektriciens in Leiden",
      text:
        "Sterke vindbaarheid ontstaat door dienstclusters, niet door losse plaatsnaamtekst.",
      items: [
        {
          title: "Groepenkast",
          text:
            "Een aparte pagina kan uitleggen wanneer vervanging nodig is en welke informatie vooraf handig is."
        },
        {
          title: "Laadpunt",
          text:
            "Een laadpuntpagina kan woningtype, meterkast, plaatsing en voorbereiding behandelen."
        },
        {
          title: "Storing",
          text:
            "Een storingspagina moet duidelijk zijn, voorzichtig formuleren en direct contact faciliteren."
        }
      ]
    }
  ],
  checklistTitle: "Checklist voor een elektricienswebsite in Leiden",
  checklist: [
    "Kan iemand direct kiezen tussen storing, inspectie en project?",
    "Worden risicosignalen voorzichtig benoemd zonder doe-het-zelfadvies?",
    "Zijn groepenkast, laadpunt, verlichting en uitbreiding apart scanbaar?",
    "Is Leiden feitelijk als werkgebied beschreven zonder nepvestiging?",
    "Vraagt het formulier om probleemtype, groepenkastfoto, urgentie, locatie en planning?",
    "Worden certificaten, keurmerken of garanties alleen genoemd wanneer ze aantoonbaar zijn?"
  ],
  comparison: {
    title: "Compacte elektricienswebsite of groeisite?",
    leftLabel: "Compact",
    rightLabel: "Groei",
    rows: [
      {
        label: "Doel",
        left: "Heldere basis voor storingen en offerteaanvragen",
        right: "Meer vindbaarheid rond groepenkast, laadpunt, storing en inspectie"
      },
      {
        label: "Inhoud",
        left: "Home, diensten, werkgebied, contact en FAQ",
        right: "Aparte dienstpagina's, veiligheidscopy, intakeflows en lokale SEO"
      },
      {
        label: "Belangrijkste risico",
        left: "Te weinig onderscheid tussen storing en project",
        right: "Claims over veiligheid of certificering zonder bewijs"
      }
    ]
  },
  steps: [
    { title: "Dienstkaart maken", text: "We scheiden storingen, inspecties en projecten." },
    { title: "Veiligheidscopy schrijven", text: "We formuleren risico's voorzichtig en zonder gevaarlijke instructies." },
    { title: "Intake verbeteren", text: "Formulier en CTA vragen om informatie die een elektricien echt nodig heeft." },
    { title: "Zoekstructuur plannen", text: "Sterke diensten kunnen later eigen pagina's krijgen wanneer daar genoeg inhoud voor is." }
  ],
  faqs: [
    {
      question: "Wat moet bovenaan een elektricienswebsite in Leiden staan?",
      answer:
        "Een duidelijke keuze tussen storing, inspectie en project, plus een veilige contactroute voor urgente situaties."
    },
    {
      question: "Mag een elektricienwebsite certificaten noemen?",
      answer:
        "Ja, maar alleen wanneer ze echt kloppen en zichtbaar onderbouwd kunnen worden. Onbewezen certificering schaadt vertrouwen."
    },
    {
      question: "Welke informatie moet een formulier vragen?",
      answer:
        "Vraag of het om storing of project gaat, foto's van de groepenkast, risicosignalen, woningtype, locatie en gewenste planning."
    },
    {
      question: "Welke elektriciensdiensten verdienen eigen SEO-pagina's?",
      answer:
        "Vaak groepenkast vervangen, laadpunt installeren, storing oplossen, elektra inspectie en verlichting plaatsen."
    },
    {
      question: "Wat kost een website voor een elektricien in Leiden?",
      answer:
        "Dat hangt af van pagina-aantal, technische copy, lokale SEO, formulieren en onderhoud. Een groeisite is logisch bij meerdere diensten."
    }
  ],
  internalLinks: [
    { label: "Home", href: "/" },
    { label: "Webontwikkeling", href: "/webontwikkeling" },
    { label: "Website voor elektriciens", href: "/website-voor-elektriciens" },
    { label: "Website laten maken Leiden", href: "/website-laten-maken-leiden" },
    { label: "Lokale SEO", href: "/lokale-seo" },
    { label: "Prijzen", href: "/prijzen" },
    { label: "Contact", href: "/contact" }
  ],
  qualityNotes: [
    "Hand-authored for Leiden elektriciens search intent.",
    "Includes safety, project routing, intake and SEO expansion advice.",
    "Avoids invented certification and local-office claims."
  ],
  schemaType: "Service",
  dateModified: "2026-06-15"
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
