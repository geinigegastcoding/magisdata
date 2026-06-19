import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  "id": 4,
  "priority": "P1",
  "pageKind": "page",
  "template": "branch-location",
  "cluster": "Branche + plaats money page",
  "sourceTitle": "Website laten maken voor hoveniers in Voorschoten",
  "sourceKeyword": "website laten maken voor hoveniers Voorschoten",
  "slug": "website-laten-maken-voor-hoveniers-voorschoten",
  "productionPath": "/website-laten-maken-voor-hoveniers-voorschoten",
  "metaTitle": "Website laten maken voor hoveniers in Voorschoten | MagisData",
  "metaDescription": "Hovenierswebsite voor Voorschoten met tuinontwerp, aanleg, onderhoud, projectfoto's, seizoensvragen, offerte-intake en lokale SEO.",
  "eyebrow": "Voor hoveniers in Voorschoten",
  "title": "Website laten maken voor hoveniers in Voorschoten",
  "description": "Een hovenierswebsite voor Voorschoten moet laten zien welk tuinwerk je doet, hoe je projecten aanpakt en welke informatie nodig is voor een goede aanvraag.",
  "primaryCta": "Vraag gratis websiteplan aan",
  "secondaryCta": "Bekijk prijzen",
  "directAnswer": "Een website voor een hovenier in Voorschoten moet direct onderscheid maken tussen tuinontwerp, tuinaanleg, tuinonderhoud en renovatie. Bezoekers willen projectvoorbeelden zien, begrijpen hoe een aanvraag loopt, weten welke foto's of afmetingen nuttig zijn en kunnen inschatten of de hovenier past bij hun tuin en planning. Lokale context helpt alleen wanneer werkgebied en projectsoort feitelijk kloppen.",
  "visual": {
    "label": "Tuinprojectroute",
    "title": "Van tuinwens naar aanvraag",
    "text": "De pagina vertaalt een vage tuinwens naar een concreet gesprek: type tuin, gewenste aanpak, foto's, seizoen en vervolgstap.",
    "items": [
      "tuinontwerp",
      "aanleg",
      "onderhoud",
      "projectfoto's",
      "intake"
    ]
  },
  "highlights": [
    {
      "title": "Projecten zichtbaar",
      "text": "Voor en na, werkwijze en materiaalkeuzes geven meer vertrouwen dan algemene beloftes."
    },
    {
      "title": "Seizoen en planning",
      "text": "Onderhoud, aanleg en renovatie hebben elk hun eigen timing en voorbereiding."
    },
    {
      "title": "Voorschoten-context",
      "text": "De pagina koppelt werkgebied aan echte aanvragen, niet aan een verzonnen lokale vestiging."
    },
    {
      "title": "Betere offertevragen",
      "text": "Een goede intake vraagt om foto's, afmetingen, wensen, budgetrichting en planning."
    }
  ],
  "valueSections": [
    {
      "title": "Waarom hovenierscontent visueel en praktisch moet zijn",
      "paragraphs": [
        "Bij hovenierswerk wil een bezoeker niet alleen lezen dat het resultaat mooi wordt. Hij wil voorbeelden zien, begrijpen welke soorten werk je doet en weten of zijn tuinwens past bij jouw aanpak.",
        "Daarom moet de pagina projectgericht zijn. Tuinontwerp, aanleg, onderhoud en renovatie hebben andere vragen, andere bewijsstukken en andere CTA's. Die verschillen maken de pagina waardevol en voorkomen herhaling."
      ]
    },
    {
      "title": "Welke informatie een tuinaanvraag beter maakt",
      "paragraphs": [
        "Een sterke aanvraag vraagt om meer dan naam en telefoonnummer. Foto's van de tuin, globale afmetingen, gewenste stijl, huidige probleem, timing en budgetrichting helpen om een eerste gesprek nuttiger te maken.",
        "De website kan bezoekers daarop voorbereiden zonder drempel te hoog te maken. Korte uitleg bij het formulier zorgt dat iemand weet wat handig is om mee te sturen."
      ]
    },
    {
      "title": "Hoe lokale SEO voor hoveniers inhoud krijgt",
      "paragraphs": [
        "Een hovenierspagina voor Voorschoten wordt pas sterk wanneer de inhoud tuinvragen behandelt die lokaal relevant kunnen zijn: onderhoud, renovatie, kleine stadstuinen, grotere tuinen, seizoenswerk en bereikbaarheid.",
        "Als er genoeg projectmateriaal is, kunnen losse pagina's voor tuinontwerp, tuinaanleg en tuinonderhoud later ieder een eigen rol krijgen. Dat is sterker dan dezelfde plaatsnaampagina voor meerdere dorpen kopiëren."
      ]
    }
  ],
  "sections": [
    {
      "title": "Bezoekers zoeken een passende aanpak, niet alleen een hovenier",
      "text": "Een tuinproject voelt voor klanten vaak groot. De pagina moet duidelijk maken welk type werk je doet en hoe iemand van eerste idee naar aanvraag gaat.",
      "items": [
        {
          "title": "Tuinontwerp",
          "text": "Leg uit wanneer ontwerp nodig is, welke keuzes worden gemaakt en welke input de klant kan voorbereiden."
        },
        {
          "title": "Tuinaanleg",
          "text": "Laat zien hoe aanlegprojecten verlopen: intake, plan, materiaalkeuze, planning en uitvoering."
        },
        {
          "title": "Tuinonderhoud",
          "text": "Maak onderscheid tussen eenmalige onderhoudsbeurt, seizoenswerk en terugkerend onderhoud."
        }
      ]
    },
    {
      "title": "Bewijs dat past bij hovenierswerk",
      "text": "Voor hoveniers zijn beelden en proces belangrijk. Niet als decoratie, maar als bewijs dat de bezoeker helpt inschatten of de stijl past.",
      "items": [
        {
          "title": "Projectfoto's",
          "text": "Gebruik echte foto's met korte context: type tuin, wens, gekozen oplossing en eventueel seizoen."
        },
        {
          "title": "Werkwijze",
          "text": "Vertel hoe het proces loopt, van intake en tuinplan tot uitvoering en oplevering."
        },
        {
          "title": "Materiaal en onderhoud",
          "text": "Leg uit welke keuzes invloed hebben op onderhoud, uitstraling, duurzaamheid en planning."
        }
      ]
    },
    {
      "title": "Lokale vindbaarheid zonder generieke regio-copy",
      "text": "De pagina moet niet doen alsof elke tuin in Voorschoten hetzelfde is. Lokale context is ondersteunend; de echte waarde zit in projectuitleg.",
      "items": [
        {
          "title": "Werkgebied",
          "text": "Benoem Voorschoten feitelijk als werkgebied wanneer dat klopt, zonder adres of vestiging te claimen."
        },
        {
          "title": "Seizoensvragen",
          "text": "Gebruik FAQ's over voorjaarsonderhoud, renovatieplanning en wanneer aanleg logisch is."
        },
        {
          "title": "Interne structuur",
          "text": "Koppel de pagina aan webontwikkeling, lokale SEO, prijzen en later aan losse hoveniersdiensten."
        }
      ]
    }
  ],
  "checklistTitle": "Checklist voor een hovenierswebsite in Voorschoten",
  "checklist": [
    "Zijn tuinontwerp, aanleg, onderhoud en renovatie apart herkenbaar?",
    "Laat de pagina echte projectfoto's of procesuitleg zien zonder nepresultaten?",
    "Vraagt het formulier om foto's, afmetingen, wensen, planning en budgetrichting?",
    "Is duidelijk of de hovenier in Voorschoten werkt zonder nepvestiging te claimen?",
    "Zijn seizoensvragen en onderhoudsvragen beantwoord in gewone taal?",
    "Is de mobiele aanvraagroute kort genoeg voor iemand die foto's wil meesturen?"
  ],
  "comparison": {
    "title": "Compacte hovenierswebsite of groeisite?",
    "leftLabel": "Compact",
    "rightLabel": "Groei",
    "rows": [
      {
        "label": "Doel",
        "left": "Professioneel uitleggen wat je doet en aanvragen ontvangen",
        "right": "Meer vindbaarheid rond ontwerp, aanleg, onderhoud en renovatie"
      },
      {
        "label": "Inhoud",
        "left": "Home, diensten, projectbeelden, werkwijze en contact",
        "right": "Aparte dienstpagina's, projectcases, FAQ's en lokale content"
      },
      {
        "label": "Past als",
        "left": "Je vooral vertrouwen en betere aanvragen nodig hebt",
        "right": "Je genoeg projecten en diensten hebt om inhoudelijk uit te bouwen"
      }
    ]
  },
  "steps": [
    {
      "title": "Diensten scheiden",
      "text": "We bepalen welke rol ontwerp, aanleg, onderhoud en renovatie op de pagina krijgen."
    },
    {
      "title": "Bewijs verzamelen",
      "text": "We ordenen projectfoto's, procesinformatie en praktische klantvragen."
    },
    {
      "title": "Aanvraagroute maken",
      "text": "Het formulier vraagt om informatie die een hoveniersgesprek direct concreter maakt."
    },
    {
      "title": "Uitbouwen waar zinvol",
      "text": "Later kunnen sterke diensten of projecttypen eigen pagina's krijgen."
    }
  ],
  "faqs": [
    {
      "question": "Wat moet bovenaan een hovenierswebsite staan?",
      "answer": "Maak direct duidelijk of je tuinontwerp, aanleg, onderhoud of renovatie doet. Toon daarna bewijs, werkwijze en een duidelijke aanvraagroute."
    },
    {
      "question": "Zijn projectfoto's belangrijk voor SEO?",
      "answer": "Ze helpen vooral bezoekers vertrouwen krijgen. Voor SEO worden ze sterker wanneer ze goede alt-tekst, context en bijbehorende projectuitleg krijgen."
    },
    {
      "question": "Welke informatie moet een offerteformulier vragen?",
      "answer": "Vraag foto's, globale afmetingen, gewenste werkzaamheden, stijlvoorkeur, planning en eventueel budgetrichting. Houd het formulier overzichtelijk."
    },
    {
      "question": "Hoe maak je de pagina lokaal relevant voor Voorschoten?",
      "answer": "Door werkgebied, bereikbaarheid en lokale servicecontext feitelijk te noemen, maar de pagina vooral te vullen met nuttige hoveniersinformatie."
    },
    {
      "question": "Wanneer zijn losse dienstpagina's zinvol?",
      "answer": "Wanneer ontwerp, aanleg of onderhoud genoeg eigen vragen, foto's en voorbeelden heeft. Dan voegt elke pagina echt iets toe."
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
      "label": "Website voor hoveniers",
      "href": "/website-voor-hoveniers"
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
    "Hovenier-specifieke projectuitleg, seizoensplanning en intake-inhoud aanwezig.",
    "Geen verzonnen projectresultaten of lokale vestigingsclaims.",
    "Bevat unieke secties, FAQ, checklist en aanvraagroute."
  ],
  "schemaType": "Service",
  "draftPath": "/Keywoard-pages/routes/website-laten-maken-voor-hoveniers-voorschoten/page.tsx",
  "dateModified": "2026-06-14"
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
