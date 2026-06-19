import { KeywordDraftPageContentView, keywordPageMetadataFromContent } from "@/Keywoard-pages/_shared/keyword-draft-page";
import type { KeywordDraftPageContent } from "@/Keywoard-pages/_shared/keyword-page-data";

const pageContent = {
  "id": 162,
  "priority": "P2",
  "pageKind": "guide",
  "template": "google-business-profile",
  "cluster": "Google Business Profile + plaats",
  "sourceTitle": "Google Business Profile optimaliseren in Voorschoten: checklist voor lokale bedrijven",
  "sourceKeyword": "Google Business Profile optimaliseren Voorschoten",
  "slug": "google-business-profile-optimaliseren-voorschoten",
  "productionPath": "/inzichten/google-business-profile-optimaliseren-voorschoten",
  "metaTitle": "Google Business Profile optimaliseren in Voorschoten",
  "metaDescription": "Praktische checklist om je Google Business Profile in Voorschoten consistenter, vollediger en beter verbonden met je website te maken.",
  "eyebrow": "Google Business Profile",
  "title": "Google Business Profile optimaliseren in Voorschoten: checklist voor lokale bedrijven",
  "description": "Een praktisch inzicht voor ondernemers die hun bedrijfsprofiel beter willen laten aansluiten op website, diensten en lokale vindbaarheid.",
  "primaryCta": "Vraag gratis SEO-scan aan",
  "secondaryCta": "Bekijk lokale SEO",
  "directAnswer": "Je Google Business Profile optimaliseren in Voorschoten begint met complete categorieen, diensten, openingstijden, foto's, reviews en consistente contactgegevens. Je website moet dezelfde diensten en regio bevestigen.",
  "visual": {
    "label": "Profielcheck",
    "title": "Google-profiel + website",
    "text": "Je profiel werkt sterker wanneer elke claim op de website controleerbaar terugkomt.",
    "items": [
      "categorie",
      "diensten",
      "openingstijden",
      "reviews",
      "website-links",
      "NAP"
    ]
  },
  "highlights": [
    {
      "title": "Volledig profiel",
      "text": "Categorie, beschrijving, diensten, openingstijden en servicegebied."
    },
    {
      "title": "Websitekoppeling",
      "text": "Links naar relevante dienstpagina's, niet alleen naar de homepage."
    },
    {
      "title": "Geen garanties",
      "text": "Optimalisatie kan helpen, maar Google-posities worden niet beloofd."
    }
  ],
  "sections": [
    {
      "title": "Wat je profiel minimaal nodig heeft",
      "text": "Een Google Business Profile moet feitelijk, compleet en consistent zijn.",
      "items": [
        {
          "title": "Categorieen",
          "text": "Kies een primaire categorie die je belangrijkste dienst echt beschrijft."
        },
        {
          "title": "Diensten",
          "text": "Voeg diensten toe die ook op je website duidelijke uitleg hebben."
        },
        {
          "title": "Opening en gebied",
          "text": "Gebruik alleen informatie die klopt voor Voorschoten en omgeving."
        }
      ]
    },
    {
      "title": "Hoe je website het profiel ondersteunt",
      "text": "Google-profiel en website moeten elkaar bevestigen.",
      "items": [
        {
          "title": "Dienstpagina's",
          "text": "Link vanuit het profiel naar pagina's die de gekozen diensten uitleggen."
        },
        {
          "title": "Consistente gegevens",
          "text": "Naam, adres, telefoon en contactinformatie moeten overeenkomen."
        },
        {
          "title": "FAQ en bewijs",
          "text": "Beantwoord vragen die klanten ook in Google stellen."
        }
      ]
    },
    {
      "title": "Veelgemaakte fouten",
      "text": "Deze fouten maken een profiel minder betrouwbaar voor bezoekers en zoekmachines.",
      "items": [
        {
          "title": "Te brede categorie",
          "text": "Een te algemene categorie maakt je aanbod minder duidelijk."
        },
        {
          "title": "Verouderde informatie",
          "text": "Openingstijden, services en foto's moeten actueel blijven."
        },
        {
          "title": "Geen opvolging",
          "text": "Reviews en vragen verdienen een nette, feitelijke reactie."
        }
      ]
    }
  ],
  "checklistTitle": "Google Business Profile checklist voor Voorschoten",
  "checklist": [
    "Primaire categorie klopt met hoofddienst.",
    "Secundaire categorieen zijn relevant.",
    "Bedrijfsbeschrijving noemt dienst en werkgebied feitelijk.",
    "Diensten zijn ingevuld en linken logisch naar websitepagina's.",
    "Openingstijden, telefoon en URL kloppen.",
    "Foto's zijn actueel en echt.",
    "Reviews worden netjes opgevolgd.",
    "NAP is consistent op website en profiel."
  ],
  "steps": [
    {
      "title": "Inventariseer",
      "text": "Leg profielgegevens naast websitegegevens."
    },
    {
      "title": "Vul aan",
      "text": "Werk categorieen, diensten, foto's en beschrijving bij."
    },
    {
      "title": "Koppel pagina's",
      "text": "Gebruik links naar relevante servicepagina's."
    },
    {
      "title": "Controleer periodiek",
      "text": "Check maandelijks of informatie nog klopt."
    }
  ],
  "faqs": [
    {
      "question": "Kan Google Business Profile mijn ranking garanderen?",
      "answer": "Nee. Een compleet profiel kan helpen, maar ranking hangt af van veel signalen."
    },
    {
      "question": "Moet ik vaak foto's plaatsen?",
      "answer": "Regelmatig echte, actuele foto's helpen vertrouwen. Kwaliteit is belangrijker dan volume."
    },
    {
      "question": "Welke link moet ik gebruiken?",
      "answer": "Link bij voorkeur naar de meest relevante dienstpagina of contactpagina, niet altijd alleen naar home."
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
    "Guide-intentie: insight.",
    "Concrete GBP checklist aanwezig.",
    "Geen rankinggarantie."
  ],
  "schemaType": "Article",
  "draftPath": "/Keywoard-pages/routes/google-business-profile-optimaliseren-voorschoten/page.tsx",
  "dateModified": "2026-06-14"
} satisfies KeywordDraftPageContent;

export const metadata = keywordPageMetadataFromContent(pageContent);

export default function Page() {
  return <KeywordDraftPageContentView page={pageContent} />;
}
