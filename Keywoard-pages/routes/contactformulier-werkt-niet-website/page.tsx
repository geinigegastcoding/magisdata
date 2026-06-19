import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  "id": 243,
  "priority": "P2",
  "pageKind": "guide",
  "template": "technical-guide",
  "cluster": "Techniek/conversie",
  "sourceTitle": "Contactformulier werkt niet: checklist voordat je aanvragen misloopt",
  "sourceKeyword": "contactformulier werkt niet website",
  "slug": "contactformulier-werkt-niet-website",
  "productionPath": "/inzichten/contactformulier-werkt-niet-website",
  "metaTitle": "Contactformulier werkt niet: checklist voordat je aanvragen misloopt",
  "metaDescription": "Praktische gids voor lokale ondernemers: voorkomen dat goede bezoekers geen aanvraag kunnen sturen, met checklist en duidelijke vervolgstappen.",
  "eyebrow": "Praktische gids",
  "title": "Contactformulier werkt niet: checklist voordat je aanvragen misloopt",
  "description": "Een nuchtere gids om voorkomen dat goede bezoekers geen aanvraag kunnen sturen. Eerst zelf controleren, daarna pas hulp inschakelen als dat nodig is.",
  "primaryCta": "Vraag korte feedback aan",
  "secondaryCta": "Bekijk diensten",
  "directAnswer": "Begin met de belangrijkste controlepunten: testverzending, spamfilter, bedankpagina, validatie, mobiel, mailrouting. Stuur een testaanvraag vanaf mobiel, desktop en een ander e-mailadres en controleer inbox, spam en bedankpagina. Los eerst zichtbare frictie op voordat je nieuwe campagnes, redesigns of extra pagina's plant.",
  "visual": {
    "label": "Controlepaneel",
    "title": "Van probleem naar prioriteit",
    "text": "Werk van zichtbaar risico naar technische oorzaak en meet daarna of aanvragen verbeteren.",
    "items": [
      "testverzending",
      "spamfilter",
      "bedankpagina",
      "validatie",
      "mobiel",
      "mailrouting"
    ]
  },
  "highlights": [
    {
      "title": "Zelf te checken",
      "text": "testverzending, spamfilter, bedankpagina"
    },
    {
      "title": "Snelle winst",
      "text": "Stuur een testaanvraag vanaf mobiel, desktop en een ander e-mailadres en controleer inbox, spam en bedankpagina."
    },
    {
      "title": "Valkuil",
      "text": "Ga niet alleen af op 'formulier verzonden' in de browser; controleer of de aanvraag ook echt aankomt."
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
        "Een formulier kan visueel prima lijken terwijl mails in spam verdwijnen, validatie blokkeert of de bedankpagina nooit laadt.",
        "Daarom is een korte, herhaalbare controle sterker dan wachten op grote signalen. Je zoekt eerst naar frictie die aanvragen, vertrouwen of indexatie direct raakt."
      ]
    },
    {
      "title": "Een praktische eerste verbetering",
      "paragraphs": [
        "Stuur een testaanvraag vanaf mobiel, desktop en een ander e-mailadres en controleer inbox, spam en bedankpagina.",
        "Vraag maximaal de velden die nodig zijn voor opvolging en toon direct wat er na verzending gebeurt."
      ]
    },
    {
      "title": "Wat je beter niet doet",
      "paragraphs": [
        "Ga niet alleen af op 'formulier verzonden' in de browser; controleer of de aanvraag ook echt aankomt.",
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
          "title": "Testverzending",
          "text": "Controleer testverzending op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is."
        },
        {
          "title": "Spamfilter",
          "text": "Controleer spamfilter op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is."
        },
        {
          "title": "Bedankpagina",
          "text": "Controleer bedankpagina op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is."
        }
      ]
    },
    {
      "title": "Wat je beter niet overslaat",
      "text": "Sommige punten lijken klein, maar bepalen of bezoekers vertrouwen houden.",
      "items": [
        {
          "title": "Validatie",
          "text": "Leg vast hoe validatie nu werkt en welke verbetering het meeste risico verlaagt."
        },
        {
          "title": "Mobiel",
          "text": "Leg vast hoe mobiel nu werkt en welke verbetering het meeste risico verlaagt."
        },
        {
          "title": "Mailrouting",
          "text": "Leg vast hoe mailrouting nu werkt en welke verbetering het meeste risico verlaagt."
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
    "Testverzending gecontroleerd en genoteerd.",
    "Spamfilter gecontroleerd en genoteerd.",
    "Bedankpagina gecontroleerd en genoteerd.",
    "Validatie gecontroleerd en genoteerd.",
    "Mobiel gecontroleerd en genoteerd.",
    "Mailrouting gecontroleerd en genoteerd."
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
      "answer": "Vraag maximaal de velden die nodig zijn voor opvolging en toon direct wat er na verzending gebeurt."
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
  "draftPath": "/Keywoard-pages/routes/contactformulier-werkt-niet-website/page.tsx",
  "dateModified": "2026-06-14"
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
