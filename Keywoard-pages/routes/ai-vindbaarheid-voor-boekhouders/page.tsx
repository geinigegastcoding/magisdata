import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  id: 234,
  priority: "P3",
  pageKind: "page",
  template: "ai-visibility",
  cluster: "AI/GEO/AEO + branche",
  sourceTitle: "AI-vindbaarheid voor boekhouders: hoe word je duidelijker genoemd?",
  sourceKeyword: "AI vindbaarheid voor boekhouders",
  slug: "ai-vindbaarheid-voor-boekhouders",
  productionPath: "/ai-vindbaarheid-voor-boekhouders",
  draftPath: "/Keywoard-pages/routes/ai-vindbaarheid-voor-boekhouders/page.tsx",
  metaTitle: "AI-vindbaarheid voor boekhouders | MagisData",
  metaDescription:
    "Maak een boekhouderswebsite begrijpelijker voor AI-antwoorden met duidelijke diensten, doelgroep, regio, tarieven, intake, FAQ en schema.",
  eyebrow: "AI-vindbaarheid voor boekhouders",
  title: "AI-vindbaarheid voor boekhouders",
  description:
    "Zorg dat AI-systemen je kantoor niet vaag samenvatten als 'boekhouder in de buurt', maar begrijpen voor wie je werkt, welke diensten je levert en welke informatie een klant moet voorbereiden.",
  primaryCta: "Vraag AI-vindbaarheid check aan",
  secondaryCta: "Bekijk AI-vindbaarheid",
  directAnswer:
    "AI-vindbaarheid voor boekhouders betekent dat je website duidelijk en controleerbaar uitlegt welke boekhouddiensten je aanbiedt, of je werkt voor zzp'ers, mkb of specifieke branches, welke regio je bedient, hoe intake werkt, welke prijsfactoren meespelen en welke vragen je beantwoordt. AI-systemen kunnen geen betrouwbare samenvatting maken van informatie die niet zichtbaar, inconsistent of te algemeen is.",
  visual: {
    label: "Entity map",
    title: "Wat moet AI over je kantoor begrijpen?",
    text: "Voor boekhouders draait AI-vindbaarheid om doelgroep, diensten, proces, prijsfactoren, regio en bewijs dat feitelijk op de website staat.",
    items: ["zzp", "mkb", "btw", "jaarwerk", "intake"],
  },
  highlights: [
    {
      title: "Doelgroep",
      text: "Maak expliciet of je zzp'ers, mkb, starters, groeiende bedrijven of specifieke branches helpt.",
    },
    {
      title: "Dienststructuur",
      text: "Administratie, btw-aangifte, jaarrekening, salarisadministratie en advies horen apart herkenbaar te zijn.",
    },
    {
      title: "Prijsfactoren",
      text: "Leg uit waardoor boekhoudkosten verschillen, zoals aantal facturen, software, btw-periode en adviesbehoefte.",
    },
    {
      title: "Geen garantieclaim",
      text: "AI-vermeldingen zijn nooit te beloven; de inhoud kan wel veel duidelijker en citeerbaarder worden.",
    },
  ],
  valueSections: [
    {
      title: "Waarom boekhouders vaak te vaag zichtbaar zijn",
      paragraphs: [
        "Veel boekhouderswebsites zeggen ongeveer hetzelfde: persoonlijke aanpak, betrouwbare administratie en advies voor ondernemers. Voor een bezoeker is dat al weinig onderscheidend, maar voor AI-systemen is het nog lastiger. Er zijn te weinig duidelijke entiteiten om goed te begrijpen wat het kantoor precies doet.",
        "Een betere pagina maakt concreet welke diensten worden geleverd, voor wie, met welke software of werkwijze, welke informatie nodig is voor intake en waar grenzen liggen. Dat helpt mensen kiezen en maakt de website beter te interpreteren.",
      ],
    },
    {
      title: "Welke vragen een AI-antwoord moet kunnen beantwoorden",
      paragraphs: [
        "Een bruikbaar AI-antwoord over een boekhouder moet kunnen uitleggen of het kantoor past bij zzp of mkb, welke boekhoudtaken worden overgenomen, hoe btw-aangifte of jaarwerk werkt en hoe iemand een eerste gesprek voorbereidt.",
        "Daarvoor heb je zelfstandige antwoordblokken nodig. Niet alleen een FAQ onderaan, maar ook korte secties over administratie uitbesteden, btw, jaarrekening, tariefstructuur, boekhoudsoftware en intake.",
      ],
    },
    {
      title: "Wat je beter niet doet voor AI-vindbaarheid",
      paragraphs: [
        "Vul de site niet met fiscale beloftes, vaste prijzen zonder scope of claims over besparing die je niet kunt onderbouwen. Dat maakt de inhoud minder betrouwbaar en kan bezoekers op het verkeerde been zetten.",
        "AI-vindbaarheid is geen truc om overal genoemd te worden. Het is vooral het verminderen van ruis: consistente bedrijfsgegevens, duidelijke diensten, feitelijke bewijsvoering en content die echte klantvragen beantwoordt.",
      ],
    },
  ],
  sections: [
    {
      title: "De belangrijkste entiteiten voor boekhouders",
      text: "AI-systemen herkennen je kantoor beter wanneer deze onderwerpen expliciet en consistent terugkomen.",
      items: [
        {
          title: "Doelgroepen",
          text: "Zzp, mkb, starters, eenmanszaken, bv's of specifieke branches. Benoem alleen doelgroepen die je echt bedient.",
        },
        {
          title: "Diensten",
          text: "Administratie, btw-aangifte, jaarrekening, inkomstenbelasting, salarisadministratie, tussentijdse rapportage en advies.",
        },
        {
          title: "Proces",
          text: "Intake, overstap, aanlevering, software, maandelijkse verwerking, deadlines en contactmomenten.",
        },
      ],
    },
    {
      title: "Antwoordblokken die op de pagina horen",
      text: "Deze vragen zijn nuttig voor bezoekers en maken de inhoud ook beter bruikbaar voor AI-antwoorden.",
      items: [
        {
          title: "Wat kost boekhouding?",
          text: "Leg prijsfactoren uit: aantal facturen, btw-periode, salarisadministratie, software, adviesvragen en jaarwerk.",
        },
        {
          title: "Hoe werkt de intake?",
          text: "Noem welke gegevens nodig zijn: rechtsvorm, omzetindicatie, factuurvolume, huidige software, btw-status en gewenste hulp.",
        },
        {
          title: "Voor wie is het niet geschikt?",
          text: "Een duidelijke afbakening voorkomt verkeerde aanvragen en geeft AI meer context over je ideale klant.",
        },
      ],
    },
    {
      title: "Schema en zichtbare inhoud moeten overeenkomen",
      text: "Structured data helpt alleen wanneer het klopt met wat bezoekers ook op de pagina kunnen lezen.",
      items: [
        {
          title: "Service schema",
          text: "Gebruik service-informatie voor zichtbare diensten en regio's, niet voor diensten die je niet expliciet aanbiedt.",
        },
        {
          title: "FAQ schema",
          text: "Markeer alleen FAQ's die echt zichtbaar zijn en inhoudelijk antwoord geven.",
        },
        {
          title: "Consistentie",
          text: "Bedrijfsnaam, contactgegevens, regio, openingstijden en links moeten overeenkomen met andere profielen.",
        },
      ],
    },
  ],
  checklistTitle: "AI-vindbaarheid checklist voor boekhouders",
  checklist: [
    "Doelgroepen zoals zzp, mkb of starters zijn concreet benoemd.",
    "Administratie, btw, jaarwerk, advies en eventuele salarisadministratie zijn apart herkenbaar.",
    "Prijsfactoren worden uitgelegd zonder vaste bedragen buiten scope te beloven.",
    "De intakepagina of het formulier vraagt om rechtsvorm, factuurvolume, software en adviesbehoefte.",
    "FAQ's beantwoorden echte vragen over kosten, overstappen, deadlines en aanlevering.",
    "Schema, metadata en zichtbare pagina-inhoud spreken elkaar niet tegen.",
    "Er worden geen fiscale garanties of besparingsclaims zonder onderbouwing gedaan.",
  ],
  comparison: {
    title: "Klassieke SEO vs AI-vindbaarheid",
    leftLabel: "SEO",
    rightLabel: "AI-vindbaarheid",
    rows: [
      {
        label: "Doel",
        left: "Ranken op zoekwoorden zoals boekhouder plus plaats",
        right: "Correct begrepen worden in antwoorden en aanbevelingen",
      },
      {
        label: "Inhoud",
        left: "Landingspagina's, titles, links en lokale signalen",
        right: "Entiteiten, directe antwoorden, bewijs, schema en consistente context",
      },
      {
        label: "Risico",
        left: "Te veel focus op keywords",
        right: "Te veel claims zonder zichtbare onderbouwing",
      },
    ],
  },
  steps: [
    {
      title: "Entity audit",
      text: "We brengen doelgroepen, diensten, regio, software, prijsfactoren en bewijs in kaart.",
    },
    {
      title: "Antwoordblokken schrijven",
      text: "We maken korte secties die vragen over kosten, intake, btw, jaarwerk en overstappen direct beantwoorden.",
    },
    {
      title: "Schema controleren",
      text: "We zorgen dat FAQ, breadcrumbs en service-informatie overeenkomen met zichtbare content.",
    },
    {
      title: "AI-output testen",
      text: "We controleren periodiek hoe AI-systemen het kantoor beschrijven en waar nog ruis zit.",
    },
  ],
  faqs: [
    {
      question: "Kun je garanderen dat AI mijn boekhoudkantoor noemt?",
      answer:
        "Nee. AI-systemen kiezen zelf bronnen en antwoorden. Je kunt wel de kans op correct begrip vergroten door duidelijke, consistente en feitelijke informatie te publiceren.",
    },
    {
      question: "Welke pagina's zijn het belangrijkst voor AI-vindbaarheid?",
      answer:
        "Meestal de homepage, dienstenpagina's, FAQ, tarieven of prijsfactoren, intake-informatie en lokale servicepagina's wanneer je regionaal werkt.",
    },
    {
      question: "Moet ik tarieven noemen?",
      answer:
        "Niet altijd als vaste bedragen lastig zijn. Noem dan prijsfactoren, pakketten of situaties die invloed hebben op de kosten.",
    },
    {
      question: "Wat is specifiek anders voor boekhouders?",
      answer:
        "De website moet extra zorgvuldig zijn met fiscale nuance, scope, deadlines, software, rechtsvormen en doelgroep. Algemene betrouwbaarheidscopy is niet genoeg.",
    },
  ],
  internalLinks: [
    {
      label: "AI-vindbaarheid",
      href: "/ai-vindbaarheid",
    },
    {
      label: "GEO optimalisatie",
      href: "/geo-optimalisatie",
    },
    {
      label: "AEO optimalisatie",
      href: "/aeo-optimalisatie",
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
      label: "Contact",
      href: "/contact",
    },
  ],
  qualityNotes: [
    "Boekhouder-specifieke entity map, intakevragen en prijsfactoren aanwezig.",
    "Geen AI-vermeldingsgarantie of fiscale overclaim.",
    "Bevat duidelijke relatie tussen zichtbare inhoud, FAQ en schema.",
  ],
  schemaType: "Service",
  dateModified: "2026-06-15",
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
