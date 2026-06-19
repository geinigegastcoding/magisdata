import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  id: 246,
  priority: "P2",
  pageKind: "guide",
  template: "technical-guide",
  cluster: "Techniek/conversie",
  sourceTitle: "Dienstenpagina maken voor SEO: wat moet erop staan?",
  sourceKeyword: "dienstenpagina maken voor SEO",
  slug: "dienstenpagina-maken-voor-seo",
  productionPath: "/inzichten/dienstenpagina-maken-voor-seo",
  draftPath: "/Keywoard-pages/routes/dienstenpagina-maken-voor-seo/page.tsx",
  metaTitle: "Dienstenpagina maken voor SEO: wat moet erop staan?",
  metaDescription:
    "Praktische gids voor een SEO-dienstenpagina: zoekintentie, direct antwoord, probleem, aanpak, bewijs, FAQ, interne links en CTA.",
  eyebrow: "SEO-gids",
  title: "Dienstenpagina maken voor SEO: wat moet erop staan?",
  description:
    "Een goede dienstenpagina rankt niet omdat het woord dienst vaak genoeg terugkomt, maar omdat de pagina een echte vraag beantwoordt en de bezoeker helpt kiezen.",
  primaryCta: "Vraag korte feedback aan",
  secondaryCta: "Bekijk diensten",
  directAnswer:
    "Een dienstenpagina voor SEO moet bovenaan direct uitleggen wat de dienst is, voor wie die bedoeld is, welk probleem wordt opgelost en welke vervolgstap logisch is. Daarna heeft de pagina uitleg nodig over situaties waarin de dienst past, aanpak, scopefactoren, bewijs, veelgestelde vragen, interne links en een duidelijke CTA. De pagina moet zelfstandig waarde geven, ook als de bezoeker nog niet klaar is om contact op te nemen.",
  visual: {
    label: "Pagina-opbouw",
    title: "Van zoekvraag naar aanvraag",
    text: "Elke sectie heeft een taak: herkennen, begrijpen, vertrouwen krijgen, vergelijken en contact opnemen.",
    items: ["antwoord", "probleem", "aanpak", "bewijs", "FAQ"],
  },
  highlights: [
    {
      title: "Zoekintentie eerst",
      text: "Schrijf voor de vraag achter het keyword, niet voor het keyword alleen.",
    },
    {
      title: "Direct antwoord",
      text: "Beantwoord bovenaan wat de dienst is, wanneer die past en wat iemand nu kan doen.",
    },
    {
      title: "Bewijs zonder nepclaims",
      text: "Gebruik proces, voorbeelden, foto's of cases alleen wanneer ze feitelijk kloppen.",
    },
    {
      title: "Interne links",
      text: "Koppel de pagina aan gerelateerde diensten, prijzen, cases, FAQ's en contact.",
    },
  ],
  valueSections: [
    {
      title: "Waarom veel dienstenpagina's niet ranken",
      paragraphs: [
        "Veel dienstenpagina's zijn eigenlijk brochures: een korte introductie, wat voordelen en een contactknop. Voor SEO is dat vaak te dun. De pagina beantwoordt niet genoeg vragen en laat zoekmachines niet goed zien waar de dienst precies over gaat.",
        "Een sterke dienstenpagina heeft diepte zonder langdradig te worden. Ze legt uit wanneer de dienst relevant is, welke keuzes invloed hebben op prijs of planning, hoe het proces loopt en wat iemand moet voorbereiden.",
      ],
    },
    {
      title: "De bovenkant van de pagina bepaalt veel",
      paragraphs: [
        "De H1 en intro moeten niet vaag zijn. Een bezoeker moet binnen enkele seconden weten of hij op de juiste pagina zit. Daarom werkt een direct antwoord goed: wat is de dienst, voor wie is dit, welk probleem lost het op en wat is de volgende stap?",
        "Dat helpt ook AI- en antwoordmachines. Zij hebben duidelijke, zelfstandige blokken nodig die zonder context kunnen worden samengevat.",
      ],
    },
    {
      title: "Een dienstenpagina moet ook filteren",
      paragraphs: [
        "Niet elke bezoeker is een goede lead. Een goede pagina maakt duidelijk wanneer de dienst wel en niet past. Dat bespaart tijd en verhoogt de kwaliteit van aanvragen.",
        "Gebruik daarom scopefactoren: budget, planning, materiaal, regio, urgentie, aantal pagina's, type project of andere keuzes die voor jouw dienst relevant zijn.",
      ],
    },
  ],
  sections: [
    {
      title: "De minimale structuur van een SEO-dienstenpagina",
      text: "Deze onderdelen geven de pagina genoeg inhoud om bezoekers en zoekmachines te helpen.",
      items: [
        {
          title: "H1 en direct antwoord",
          text: "Noem de dienst concreet en beantwoord direct wat iemand krijgt, wanneer het past en welke vervolgstap logisch is.",
        },
        {
          title: "Probleem en situaties",
          text: "Beschrijf de situaties waarin iemand deze dienst zoekt. Daarmee sluit je aan op echte zoekintentie.",
        },
        {
          title: "Aanpak en proces",
          text: "Laat zien hoe de dienst wordt uitgevoerd, welke stappen er zijn en wat de klant moet aanleveren.",
        },
      ],
    },
    {
      title: "Wat de pagina sterker maakt",
      text: "De beste dienstenpagina's geven praktische context die concurrenten vaak overslaan.",
      items: [
        {
          title: "Prijsfactoren",
          text: "Noem geen losse prijs als de scope varieert. Leg uit waardoor kosten veranderen.",
        },
        {
          title: "Bewijs",
          text: "Gebruik echte voorbeelden, procesfoto's, cases of meetbare uitleg zonder resultaten te verzinnen.",
        },
        {
          title: "FAQ",
          text: "Beantwoord vragen die sales of support vaak krijgt. Kort, concreet en zelfstandig begrijpelijk.",
        },
      ],
    },
    {
      title: "SEO-details die je niet moet vergeten",
      text: "De inhoud moet ook technisch en structureel goed aansluiten op de rest van de site.",
      items: [
        {
          title: "Interne links",
          text: "Link naar bovenliggende diensten, gerelateerde pagina's, prijzen, cases en contact.",
        },
        {
          title: "Metadata",
          text: "Title en description moeten belofte, dienst en zoekintentie scherp samenvatten.",
        },
        {
          title: "Schema",
          text: "Gebruik FAQ, breadcrumbs en service-informatie alleen als die overeenkomen met zichtbare content.",
        },
      ],
    },
  ],
  checklistTitle: "Checklist voor je dienstenpagina",
  checklist: [
    "De H1 noemt de dienst concreet en zonder vage marketingtaal.",
    "De eerste alinea geeft een direct antwoord op de zoekvraag.",
    "De pagina legt uit voor wie de dienst wel en niet past.",
    "Aanpak, proces en benodigde input zijn duidelijk.",
    "Prijsfactoren of scopefactoren worden uitgelegd.",
    "FAQ's beantwoorden echte vragen, niet alleen verkoopbezwaren.",
    "Interne links verbinden de pagina met diensten, prijzen, cases en contact.",
    "Schema en metadata sluiten aan op zichtbare inhoud.",
  ],
  comparison: {
    title: "Dunne pagina vs sterke dienstenpagina",
    leftLabel: "Dun",
    rightLabel: "Sterk",
    rows: [
      {
        label: "Intro",
        left: "Algemene belofte en contactknop",
        right: "Direct antwoord op wat, voor wie, probleem en vervolgstap",
      },
      {
        label: "Inhoud",
        left: "Voordelenlijst zonder context",
        right: "Situaties, aanpak, scope, bewijs en FAQ",
      },
      {
        label: "SEO",
        left: "Keyword staat erin",
        right: "Zoekintentie, entiteiten, interne links en schema kloppen samen",
      },
    ],
  },
  steps: [
    {
      title: "Zoekintentie bepalen",
      text: "Schrijf op wat iemand wil weten voordat hij deze dienst koopt of aanvraagt.",
    },
    {
      title: "Pagina skelet maken",
      text: "Bouw de pagina rond antwoord, situaties, aanpak, bewijs, FAQ en CTA.",
    },
    {
      title: "Bewijs toevoegen",
      text: "Voeg alleen voorbeelden, foto's of cases toe die echt en controleerbaar zijn.",
    },
    {
      title: "Interne links plaatsen",
      text: "Verbind de pagina met relevante diensten, prijsuitleg, cases en contactmomenten.",
    },
  ],
  faqs: [
    {
      question: "Hoe lang moet een dienstenpagina zijn voor SEO?",
      answer:
        "Zo lang als nodig is om de zoekvraag goed te beantwoorden. Een korte pagina kan werken bij simpele diensten, maar concurrerende diensten hebben meestal meer uitleg, FAQ en bewijs nodig.",
    },
    {
      question: "Moet elke dienst een eigen pagina krijgen?",
      answer:
        "Alleen als de dienst een eigen zoekvraag, eigen uitleg en eigen commerciële waarde heeft. Anders kun je diensten beter bundelen op een sterkere overzichtspagina.",
    },
    {
      question: "Waar plaats ik de CTA?",
      answer:
        "Zet een duidelijke CTA bovenaan, herhaal die na belangrijke beslissecties en maak onderaan een rustige vervolgstap. Forceer niet elke alinea naar contact.",
    },
    {
      question: "Helpen FAQ's echt voor SEO?",
      answer:
        "Ja, als ze echte vragen beantwoorden. FAQ's helpen bezoekers, zoekmachines en AI-systemen de pagina beter begrijpen.",
    },
  ],
  internalLinks: [
    {
      label: "Webontwikkeling",
      href: "/webontwikkeling",
    },
    {
      label: "Lokale SEO",
      href: "/lokale-seo",
    },
    {
      label: "Veelgestelde vragen voor lokale SEO",
      href: "/veelgestelde-vragen-pagina-voor-lokale-seo",
    },
    {
      label: "Meer aanvragen zonder advertenties",
      href: "/meer-aanvragen-via-website-zonder-advertenties",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  qualityNotes: [
    "Gids geeft een concrete dienstenpagina-opbouw voor SEO en conversie.",
    "Bevat zoekintentie, bewijs, FAQ, interne links en schema.",
    "Vermijdt keyword stuffing en generieke verkooptekst.",
  ],
  schemaType: "Article",
  dateModified: "2026-06-15",
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
