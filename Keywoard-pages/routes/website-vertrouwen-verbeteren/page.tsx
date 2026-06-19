import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  "id": 250,
  "priority": "P2",
  "pageKind": "guide",
  "template": "technical-guide",
  "cluster": "Techniek/conversie",
  "sourceTitle": "Website vertrouwen verbeteren: bewijs, beloftes en contactinformatie op de juiste plek",
  "sourceKeyword": "website vertrouwen verbeteren",
  "slug": "website-vertrouwen-verbeteren",
  "productionPath": "/inzichten/website-vertrouwen-verbeteren",
  "metaTitle": "Website vertrouwen verbeteren: bewijs, beloftes en contactinformatie op de juiste plek",
  "metaDescription": "Praktische gids voor lokale ondernemers: vertrouwen opbouwen zonder fake claims of opgeblazen beloftes, met checklist en duidelijke vervolgstappen.",
  "eyebrow": "Praktische gids",
  "title": "Website vertrouwen verbeteren: bewijs, beloftes en contactinformatie op de juiste plek",
  "description": "Een nuchtere gids om vertrouwen opbouwen zonder fake claims of opgeblazen beloftes. Eerst zelf controleren, daarna pas hulp inschakelen als dat nodig is.",
  "primaryCta": "Vraag korte feedback aan",
  "secondaryCta": "Bekijk diensten",
  "directAnswer": "Begin met de belangrijkste controlepunten: bewijs, proces, contactgegevens, verwachting, scope, disclaimers. Plaats bewijs, proces en contactverwachting naast de belangrijkste CTA in plaats van op een losse onderpagina. Los eerst zichtbare frictie op voordat je nieuwe campagnes, redesigns of extra pagina's plant.",
  "visual": {
    "label": "Controlepaneel",
    "title": "Van probleem naar prioriteit",
    "text": "Werk van zichtbaar risico naar technische oorzaak en meet daarna of aanvragen verbeteren.",
    "items": [
      "bewijs",
      "proces",
      "contactgegevens",
      "verwachting",
      "scope",
      "disclaimers"
    ]
  },
  "highlights": [
    {
      "title": "Zelf te checken",
      "text": "bewijs, proces, contactgegevens"
    },
    {
      "title": "Snelle winst",
      "text": "Plaats bewijs, proces en contactverwachting naast de belangrijkste CTA in plaats van op een losse onderpagina."
    },
    {
      "title": "Valkuil",
      "text": "Gebruik geen nep-logo's, testimonials, reviewsterren of resultaatclaims."
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
        "Vertrouwen ontstaat door controleerbare informatie: wie je helpt, hoe je werkt, wat er na contact gebeurt en welke claims je wel of niet maakt.",
        "Daarom is een korte, herhaalbare controle sterker dan wachten op grote signalen. Je zoekt eerst naar frictie die aanvragen, vertrouwen of indexatie direct raakt."
      ]
    },
    {
      "title": "Een praktische eerste verbetering",
      "paragraphs": [
        "Plaats bewijs, proces en contactverwachting naast de belangrijkste CTA in plaats van op een losse onderpagina.",
        "Een procesblok met intake, voorstel, bouw, controle en livegang kan betrouwbaarder zijn dan een grote claim over kwaliteit."
      ]
    },
    {
      "title": "Wat je beter niet doet",
      "paragraphs": [
        "Gebruik geen nep-logo's, testimonials, reviewsterren of resultaatclaims.",
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
          "title": "Bewijs",
          "text": "Controleer bewijs op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is."
        },
        {
          "title": "Proces",
          "text": "Controleer proces op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is."
        },
        {
          "title": "Contactgegevens",
          "text": "Controleer contactgegevens op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is."
        }
      ]
    },
    {
      "title": "Wat je beter niet overslaat",
      "text": "Sommige punten lijken klein, maar bepalen of bezoekers vertrouwen houden.",
      "items": [
        {
          "title": "Verwachting",
          "text": "Leg vast hoe verwachting nu werkt en welke verbetering het meeste risico verlaagt."
        },
        {
          "title": "Scope",
          "text": "Leg vast hoe scope nu werkt en welke verbetering het meeste risico verlaagt."
        },
        {
          "title": "Disclaimers",
          "text": "Leg vast hoe disclaimers nu werkt en welke verbetering het meeste risico verlaagt."
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
    "Bewijs gecontroleerd en genoteerd.",
    "Proces gecontroleerd en genoteerd.",
    "Contactgegevens gecontroleerd en genoteerd.",
    "Verwachting gecontroleerd en genoteerd.",
    "Scope gecontroleerd en genoteerd.",
    "Disclaimers gecontroleerd en genoteerd."
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
      "answer": "Een procesblok met intake, voorstel, bouw, controle en livegang kan betrouwbaarder zijn dan een grote claim over kwaliteit."
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
  "draftPath": "/Keywoard-pages/routes/website-vertrouwen-verbeteren/page.tsx",
  "dateModified": "2026-06-14"
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
