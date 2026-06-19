import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  "id": 241,
  "priority": "P2",
  "pageKind": "guide",
  "template": "technical-guide",
  "cluster": "Techniek/conversie",
  "sourceTitle": "Website onderhoud voor kleine bedrijven: wat moet maandelijks gecontroleerd worden?",
  "sourceKeyword": "website onderhoud voor kleine bedrijven",
  "slug": "website-onderhoud-voor-kleine-bedrijven",
  "productionPath": "/inzichten/website-onderhoud-voor-kleine-bedrijven",
  "metaTitle": "Website onderhoud voor kleine bedrijven: wat moet maandelijks gecontroleerd worden?",
  "metaDescription": "Praktische gids voor lokale ondernemers: voorkomen dat updates, formulieren, backups en beveiliging stil kapot gaan, met checklist en duidelijke vervolgstappen.",
  "eyebrow": "Praktische gids",
  "title": "Website onderhoud voor kleine bedrijven: wat moet maandelijks gecontroleerd worden?",
  "description": "Een nuchtere gids om voorkomen dat updates, formulieren, backups en beveiliging stil kapot gaan. Eerst zelf controleren, daarna pas hulp inschakelen als dat nodig is.",
  "primaryCta": "Vraag korte feedback aan",
  "secondaryCta": "Bekijk diensten",
  "directAnswer": "Begin met de belangrijkste controlepunten: updates, backups, formulieren, beveiliging, laadtijd, belangrijke pagina's. Plan een vaste maandelijkse controle van formulier, backups, updates en belangrijkste contactpagina's. Los eerst zichtbare frictie op voordat je nieuwe campagnes, redesigns of extra pagina's plant.",
  "visual": {
    "label": "Controlepaneel",
    "title": "Van probleem naar prioriteit",
    "text": "Werk van zichtbaar risico naar technische oorzaak en meet daarna of aanvragen verbeteren.",
    "items": [
      "updates",
      "backups",
      "formulieren",
      "beveiliging",
      "laadtijd",
      "belangrijke pagina's"
    ]
  },
  "highlights": [
    {
      "title": "Zelf te checken",
      "text": "updates, backups, formulieren"
    },
    {
      "title": "Snelle winst",
      "text": "Plan een vaste maandelijkse controle van formulier, backups, updates en belangrijkste contactpagina's."
    },
    {
      "title": "Valkuil",
      "text": "Wacht niet tot een klant meldt dat iets niet werkt; dan ben je vaak al aanvragen misgelopen."
    },
    {
      "title": "Geen ruis",
      "text": "Alleen verbeteren wat bezoeker of vindbaarheid echt raakt."
    }
  ],
  "valueSections": [
    {
      "title": "Waarom dit probleem vaak onzichtbaar begint",
      "paragraphs": [
        "Een kleine bedrijfswebsite raakt zelden in een keer kapot. Meestal stapelen kleine risico's zich op: een formulier dat niet meer mailt, een plugin-update die blijft liggen, een verlopen cookie-instelling of een oude dienstpagina.",
        "Daarom is een korte, herhaalbare controle sterker dan wachten op grote signalen. Je zoekt eerst naar frictie die aanvragen, vertrouwen of indexatie direct raakt."
      ]
    },
    {
      "title": "Een praktische eerste verbetering",
      "paragraphs": [
        "Plan een vaste maandelijkse controle van formulier, backups, updates en belangrijkste contactpagina's.",
        "Test elke maand een echte formulierverzending en noteer wie de mail ontvangt, welke bedankpagina verschijnt en of tracking nog klopt."
      ]
    },
    {
      "title": "Wat je beter niet doet",
      "paragraphs": [
        "Wacht niet tot een klant meldt dat iets niet werkt; dan ben je vaak al aanvragen misgelopen.",
        "Houd wijzigingen klein genoeg om het effect te kunnen beoordelen. Noteer wat je aanpast, op welke pagina, en welk gedrag of technisch signaal je daarna opnieuw controleert."
      ]
    }
  ],
  "sections": [
    {
      "title": "Wat je eerst controleert",
      "text": "Begin met de simpele punten die direct invloed hebben op bezoeker of aanvraag.",
      "items": [
        {
          "title": "Updates",
          "text": "Controleer updates op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is."
        },
        {
          "title": "Backups",
          "text": "Controleer backups op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is."
        },
        {
          "title": "Formulieren",
          "text": "Controleer formulieren op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is."
        }
      ]
    },
    {
      "title": "Wat je beter niet overslaat",
      "text": "Sommige punten lijken klein, maar bepalen of bezoekers vertrouwen houden.",
      "items": [
        {
          "title": "Beveiliging",
          "text": "Leg vast hoe beveiliging nu werkt en welke verbetering het meeste risico verlaagt."
        },
        {
          "title": "Laadtijd",
          "text": "Leg vast hoe laadtijd nu werkt en welke verbetering het meeste risico verlaagt."
        },
        {
          "title": "Belangrijke pagina's",
          "text": "Leg vast hoe belangrijke pagina's nu werkt en welke verbetering het meeste risico verlaagt."
        }
      ]
    },
    {
      "title": "Wanneer je hulp vraagt",
      "text": "Vraag hulp wanneer meerdere onderdelen samenhangen of wanneer je niet zeker weet wat techniek, content of SEO raakt.",
      "items": [
        {
          "title": "Technisch risico",
          "text": "Wijzigingen raken indexatie, formulieren, snelheid of beveiliging."
        },
        {
          "title": "Conversierisico",
          "text": "Bezoekers snappen de route naar contact niet."
        },
        {
          "title": "SEO-risico",
          "text": "URL's, metadata, interne links of schema veranderen."
        }
      ]
    }
  ],
  "checklistTitle": "Snelle checklist",
  "checklist": [
    "Updates gecontroleerd en genoteerd.",
    "Backups gecontroleerd en genoteerd.",
    "Formulieren gecontroleerd en genoteerd.",
    "Beveiliging gecontroleerd en genoteerd.",
    "Laadtijd gecontroleerd en genoteerd.",
    "Belangrijke pagina's gecontroleerd en genoteerd."
  ],
  "steps": [
    {
      "title": "Test zelf",
      "text": "Open de belangrijkste pagina op mobiel en desktop."
    },
    {
      "title": "Noteer frictie",
      "text": "Schrijf op waar iets traag, stuk of onduidelijk is."
    },
    {
      "title": "Prioriteer",
      "text": "Los eerst punten op die aanvragen of indexatie raken."
    },
    {
      "title": "Controleer opnieuw",
      "text": "Meet na wijziging of gedrag of fouten verbeteren."
    }
  ],
  "faqs": [
    {
      "question": "Kan ik dit zelf doen?",
      "answer": "Veel controles wel. Vraag hulp wanneer techniek, SEO of formulieren risico krijgen."
    },
    {
      "question": "Moet dit direct een groot project worden?",
      "answer": "Nee. Begin klein en los de grootste frictie eerst op."
    },
    {
      "question": "Kan MagisData meekijken?",
      "answer": "Ja. Stuur de pagina of situatie mee voor korte praktische feedback."
    },
    {
      "question": "Wat is een goede eerste controle?",
      "answer": "Test elke maand een echte formulierverzending en noteer wie de mail ontvangt, welke bedankpagina verschijnt en of tracking nog klopt."
    }
  ],
  "internalLinks": [
    {
      "label": "Home",
      "href": "/"
    },
    {
      "label": "Webontwikkeling",
      "href": "/webontwikkeling"
    },
    {
      "label": "Lokale SEO",
      "href": "/lokale-seo"
    },
    {
      "label": "Prijzen",
      "href": "/prijzen"
    },
    {
      "label": "Contact",
      "href": "/contact"
    }
  ],
  "qualityNotes": [
    "Guide-intentie: leren/fixen.",
    "Praktische checklist aanwezig.",
    "Soft CTA."
  ],
  "schemaType": "Article",
  "draftPath": "/Keywoard-pages/routes/website-onderhoud-voor-kleine-bedrijven/page.tsx",
  "dateModified": "2026-06-14"
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
