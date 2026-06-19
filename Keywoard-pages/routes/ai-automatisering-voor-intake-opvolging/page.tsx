import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  id: 248,
  priority: "P2",
  pageKind: "guide",
  template: "technical-guide",
  cluster: "Techniek/conversie",
  sourceTitle: "AI automatisering voor intake en opvolging bij kleine bedrijven",
  sourceKeyword: "AI automatisering voor intake opvolging",
  slug: "ai-automatisering-voor-intake-opvolging",
  productionPath: "/inzichten/ai-automatisering-voor-intake-opvolging",
  draftPath: "/Keywoard-pages/routes/ai-automatisering-voor-intake-opvolging/page.tsx",
  metaTitle: "AI automatisering voor intake en opvolging | MagisData",
  metaDescription:
    "Praktische gids voor kleine bedrijven: intakevragen, AI-samenvattingen, opvolgmail, prioritering, privacy en menselijke controle.",
  eyebrow: "Praktische AI-gids",
  title: "AI automatisering voor intake en opvolging bij kleine bedrijven",
  description:
    "Gebruik AI niet om klantcontact klakkeloos over te nemen, maar om aanvragen sneller te begrijpen, beter te prioriteren en consequenter op te volgen.",
  primaryCta: "Vraag korte feedback aan",
  secondaryCta: "Bekijk diensten",
  directAnswer:
    "AI automatisering voor intake en opvolging werkt goed wanneer het formulier eerst de juiste informatie verzamelt, AI daarna een samenvatting en conceptreactie maakt, en een mens de inhoud controleert voordat er iets wordt verzonden. Voor kleine bedrijven is de beste eerste stap meestal geen volledige chatbot, maar een eenvoudige workflow: aanvraag binnen, samenvatting maken, urgentie labelen, ontbrekende informatie tonen, conceptmail klaarzetten en opvolging plannen.",
  visual: {
    label: "Workflow",
    title: "Van aanvraag naar betere opvolging",
    text: "De automatisering moet minder denkwerk geven, niet minder controle. Elk AI-stapje krijgt daarom een duidelijke grens.",
    items: ["formulier", "samenvatting", "prioriteit", "conceptmail", "review"],
  },
  highlights: [
    {
      title: "Mens houdt controle",
      text: "AI mag voorbereiden, samenvatten en voorstellen doen, maar geen definitieve offerte of toezegging versturen.",
    },
    {
      title: "Betere intake",
      text: "Diensttype, urgentie, budgetrichting, planning en context zorgen voor bruikbare opvolging.",
    },
    {
      title: "Sneller reageren",
      text: "Een goede workflow maakt direct duidelijk welke aanvraag eerst aandacht nodig heeft.",
    },
    {
      title: "Privacy bewust",
      text: "Vraag alleen informatie die nodig is en leg vast welke data door AI wordt verwerkt.",
    },
  ],
  valueSections: [
    {
      title: "Begin niet met een chatbot",
      paragraphs: [
        "Veel kleine bedrijven denken bij AI meteen aan een chatbot op de website. Dat is meestal niet de beste eerste stap. De meeste winst zit in de achterkant: aanvragen samenvatten, opvolging voorbereiden en gemiste informatie zichtbaar maken.",
        "Een bezoeker wil vooral dat zijn vraag goed aankomt. Een ondernemer wil snel zien wat er nodig is. Daar past een rustige intakeflow beter bij dan een gesprek dat doet alsof AI alles zelfstandig kan oplossen.",
      ],
    },
    {
      title: "Wat AI wel goed kan doen",
      paragraphs: [
        "AI kan een lange aanvraag omzetten naar een korte samenvatting, de vermoedelijke dienst herkennen, urgentie voorstellen, ontbrekende gegevens signaleren en een conceptmail schrijven. Dat bespaart tijd zonder dat het klantcontact onpersoonlijk hoeft te worden.",
        "De kracht zit in consistentie. Elke aanvraag wordt op dezelfde manier gelezen: wie is de klant, wat is de vraag, hoe dringend is het, welke informatie mist en wat is de logische vervolgstap?",
      ],
    },
    {
      title: "Waar je duidelijke grenzen nodig hebt",
      paragraphs: [
        "AI moet geen bindende prijs, juridisch advies, medisch advies, technische veiligheidsinstructie of harde planning geven zonder menselijke review. Juist in lokale dienstverlening is vertrouwen belangrijker dan volledige automatisering.",
        "Maak daarom zichtbaar in het proces waar AI helpt en waar een medewerker beslist. Dat houdt de workflow betrouwbaar en voorkomt dat snelle opvolging verandert in risicovolle communicatie.",
      ],
    },
  ],
  sections: [
    {
      title: "Welke intakegegevens zijn echt nodig?",
      text: "Een goede AI-workflow begint met een formulier dat de vraag goed structureert. Niet meer velden dan nodig, wel de velden die opvolging sneller maken.",
      items: [
        {
          title: "Vraagtype",
          text: "Laat de bezoeker kiezen tussen offerte, vraag, spoed, afspraak, advies of bestaande klant. Dat helpt bij routing.",
        },
        {
          title: "Context",
          text: "Vraag korte omschrijving, locatie of werkgebied, gewenste planning en eventuele foto's of bestanden waar relevant.",
        },
        {
          title: "Urgentie",
          text: "Laat iemand aangeven of het vandaag, deze week of later speelt. AI kan prioriteit voorstellen, maar jij beslist.",
        },
      ],
    },
    {
      title: "De workflow die meestal genoeg is",
      text: "Voor kleine bedrijven is een compacte workflow vaak sterker dan een complex systeem.",
      items: [
        {
          title: "Samenvatten",
          text: "AI vat de aanvraag samen in gewone taal: probleem, dienst, planning, locatie en ontbrekende informatie.",
        },
        {
          title: "Conceptreactie",
          text: "AI schrijft een eerste mailconcept dat je kunt aanpassen voordat je reageert.",
        },
        {
          title: "Opvolgtaak",
          text: "De workflow maakt een taak aan of labelt de aanvraag zodat je niets vergeet.",
        },
      ],
    },
    {
      title: "Wat je moet meten na livegang",
      text: "Automatisering is pas waardevol als opvolging merkbaar beter wordt.",
      items: [
        {
          title: "Reactietijd",
          text: "Worden nieuwe aanvragen sneller beoordeeld en beantwoord?",
        },
        {
          title: "Aanvraagkwaliteit",
          text: "Komen er minder onduidelijke mails binnen omdat het formulier betere vragen stelt?",
        },
        {
          title: "Fouten en uitzonderingen",
          text: "Welke aanvragen begrijpt AI verkeerd en moeten extra regels of velden krijgen?",
        },
      ],
    },
  ],
  checklistTitle: "Checklist voor AI intake en opvolging",
  checklist: [
    "Het formulier vraagt om diensttype, urgentie, context en contactgegevens.",
    "AI maakt alleen een samenvatting, prioriteitsvoorstel en conceptreactie.",
    "Er is menselijke review voordat een mail of toezegging wordt verzonden.",
    "Privacygevoelige informatie wordt beperkt en bewust verwerkt.",
    "Uitzonderingen zoals spoed, klachten of juridisch gevoelige vragen krijgen aparte routing.",
    "Reactietijd, aanvraagkwaliteit en fouten worden na livegang gecontroleerd.",
  ],
  comparison: {
    title: "Automatiseren zonder controle te verliezen",
    leftLabel: "Simpel en veilig",
    rightLabel: "Te veel automatisering",
    rows: [
      {
        label: "AI-rol",
        left: "Samenvatten, labelen, concepten voorbereiden",
        right: "Zelfstandig beslissen, toezeggen of adviseren",
      },
      {
        label: "Klantcontact",
        left: "Menselijke review voor verzending",
        right: "Automatische antwoorden zonder contextcheck",
      },
      {
        label: "Risico",
        left: "Beheersbaar en makkelijk te verbeteren",
        right: "Fouten kunnen direct bij klanten terechtkomen",
      },
    ],
  },
  steps: [
    {
      title: "Intake uittekenen",
      text: "Bepaal welke vragen nodig zijn per dienst, urgentie en klanttype.",
    },
    {
      title: "AI-output beperken",
      text: "Maak vaste formats voor samenvatting, prioriteit, ontbrekende info en conceptmail.",
    },
    {
      title: "Reviewmoment toevoegen",
      text: "Leg vast wie controleert voordat een reactie naar de klant gaat.",
    },
    {
      title: "Verbeteren met echte aanvragen",
      text: "Gebruik de eerste weken om velden, prompts en uitzonderingen aan te scherpen.",
    },
  ],
  faqs: [
    {
      question: "Is AI intake geschikt voor elk klein bedrijf?",
      answer:
        "Niet altijd. Het werkt vooral goed wanneer je regelmatig aanvragen krijgt die moeten worden samengevat, geprioriteerd of opgevolgd.",
    },
    {
      question: "Moet ik een chatbot op mijn website zetten?",
      answer:
        "Meestal niet als eerste stap. Een beter formulier plus AI-samenvatting aan de achterkant levert vaak meer controle en minder risico op.",
    },
    {
      question: "Kan AI automatisch offertes sturen?",
      answer:
        "Dat is meestal onverstandig. AI kan een concept of prijsfactoren voorbereiden, maar definitieve offertes horen door een mens gecontroleerd te worden.",
    },
    {
      question: "Welke data moet ik niet zomaar door AI laten verwerken?",
      answer:
        "Denk aan gevoelige persoonsgegevens, medische informatie, juridische dossiers, financiele details of alles wat niet nodig is voor de eerste opvolging.",
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
      label: "Website vertrouwen verbeteren",
      href: "/website-vertrouwen-verbeteren",
    },
    {
      label: "Contactformulier werkt niet",
      href: "/contactformulier-werkt-niet-website",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  qualityNotes: [
    "Gids lost concrete intake- en opvolgingsproblemen op.",
    "AI-claims blijven nuchter en menselijk gecontroleerd.",
    "Bevat workflow, risico's, privacy en meetpunten.",
  ],
  schemaType: "Article",
  dateModified: "2026-06-15",
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
