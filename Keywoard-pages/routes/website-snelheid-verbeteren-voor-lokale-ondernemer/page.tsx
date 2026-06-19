import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  "id": 242,
  "priority": "P2",
  "pageKind": "guide",
  "template": "technical-guide",
  "cluster": "Techniek/conversie",
  "sourceTitle": "Website snelheid verbeteren: simpele controlepunten voor lokale ondernemers",
  "sourceKeyword": "website snelheid verbeteren voor lokale ondernemer",
  "slug": "website-snelheid-verbeteren-voor-lokale-ondernemer",
  "productionPath": "/inzichten/website-snelheid-verbeteren-voor-lokale-ondernemer",
  "metaTitle": "Website snelheid verbeteren: simpele controlepunten voor lokale ondernemers",
  "metaDescription": "Praktische gids voor lokale ondernemers: sneller laden op mobiel zonder meteen een volledige rebuild, met checklist en duidelijke vervolgstappen.",
  "eyebrow": "Praktische gids",
  "title": "Website snelheid verbeteren: simpele controlepunten voor lokale ondernemers",
  "description": "Een nuchtere gids om sneller laden op mobiel zonder meteen een volledige rebuild. Eerst zelf controleren, daarna pas hulp inschakelen als dat nodig is.",
  "primaryCta": "Vraag korte feedback aan",
  "secondaryCta": "Bekijk diensten",
  "directAnswer": "Begin met de belangrijkste controlepunten: afbeeldingen, hosting, scripts, fonts, mobiele LCP, cache. Comprimeer grote hero-afbeeldingen, beperk scripts bovenaan en controleer de mobiele eerste schermhoogte. Los eerst zichtbare frictie op voordat je nieuwe campagnes, redesigns of extra pagina's plant.",
  "visual": {
    "label": "Controlepaneel",
    "title": "Van probleem naar prioriteit",
    "text": "Werk van zichtbaar risico naar technische oorzaak en meet daarna of aanvragen verbeteren.",
    "items": [
      "afbeeldingen",
      "hosting",
      "scripts",
      "fonts",
      "mobiele LCP",
      "cache"
    ]
  },
  "highlights": [
    {
      "title": "Zelf te checken",
      "text": "afbeeldingen, hosting, scripts"
    },
    {
      "title": "Snelle winst",
      "text": "Comprimeer grote hero-afbeeldingen, beperk scripts bovenaan en controleer de mobiele eerste schermhoogte."
    },
    {
      "title": "Valkuil",
      "text": "Begin niet met willekeurige speed plugins voordat duidelijk is wat de pagina echt vertraagt."
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
        "Lokale bezoekers zitten vaak op mobiel en vergelijken snel. Een trage hero, zware foto's of onnodige scripts maken de eerste indruk zwakker voordat de inhoud gelezen wordt.",
        "Daarom is een korte, herhaalbare controle sterker dan wachten op grote signalen. Je zoekt eerst naar frictie die aanvragen, vertrouwen of indexatie direct raakt."
      ]
    },
    {
      "title": "Een praktische eerste verbetering",
      "paragraphs": [
        "Comprimeer grote hero-afbeeldingen, beperk scripts bovenaan en controleer de mobiele eerste schermhoogte.",
        "Een dienstenpagina met een grote ongeoptimaliseerde foto kan sneller worden door webp/avif, vaste afmetingen en lazy loading onder de vouw."
      ]
    },
    {
      "title": "Wat je beter niet doet",
      "paragraphs": [
        "Begin niet met willekeurige speed plugins voordat duidelijk is wat de pagina echt vertraagt.",
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
          "title": "Afbeeldingen",
          "text": "Controleer afbeeldingen op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is."
        },
        {
          "title": "Hosting",
          "text": "Controleer hosting op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is."
        },
        {
          "title": "Scripts",
          "text": "Controleer scripts op desktop en mobiel. Noteer wat stuk, traag of onduidelijk is."
        }
      ]
    },
    {
      "title": "Wat je beter niet overslaat",
      "text": "Sommige punten lijken klein, maar bepalen of bezoekers vertrouwen houden.",
      "items": [
        {
          "title": "Fonts",
          "text": "Leg vast hoe fonts nu werkt en welke verbetering het meeste risico verlaagt."
        },
        {
          "title": "Mobiele LCP",
          "text": "Leg vast hoe mobiele LCP nu werkt en welke verbetering het meeste risico verlaagt."
        },
        {
          "title": "Cache",
          "text": "Leg vast hoe cache nu werkt en welke verbetering het meeste risico verlaagt."
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
    "Afbeeldingen gecontroleerd en genoteerd.",
    "Hosting gecontroleerd en genoteerd.",
    "Scripts gecontroleerd en genoteerd.",
    "Fonts gecontroleerd en genoteerd.",
    "Mobiele LCP gecontroleerd en genoteerd.",
    "Cache gecontroleerd en genoteerd."
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
      "answer": "Een dienstenpagina met een grote ongeoptimaliseerde foto kan sneller worden door webp/avif, vaste afmetingen en lazy loading onder de vouw."
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
  "draftPath": "/Keywoard-pages/routes/website-snelheid-verbeteren-voor-lokale-ondernemer/page.tsx",
  "dateModified": "2026-06-14"
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
