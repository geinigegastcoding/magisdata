import type { LucideIcon } from "lucide-react";

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  datePublished: string;
  dateModified?: string;
  author: string;
  category: string;
  tldr: string; // De eerste zin geeft het antwoord, daarna uitleg.
  content: string; // Markdown content
  image?: string; // Optionele cover afbeelding (WebP)
  faqs: { question: string; answer: string }[];
  cta: {
    title: string;
    text: string;
    primaryHref: string;
    primaryText: string;
  };
  relatedSlugs: string[];
};

export const articles: Article[] = [
  {
    slug: "website-laten-maken-leiden-kosten",
    title: "Wat kost een website laten maken in Leiden in 2026?",
    metaTitle: "Wat kost een website in Leiden? Prijzen & Uitleg | MagisData",
    metaDescription: "Een website laten maken in Leiden kost gemiddeld tussen de €1.500 en €4.500. Ontdek hier waar de prijs van afhangt en wat een logische investering is.",
    keywords: ["website laten maken leiden", "website kosten", "webdesign leiden prijzen"],
    datePublished: "2026-07-03",
    author: "Daniël Magis",
    category: "Webontwikkeling",
    tldr: "Een professionele website laten maken in Leiden kost gemiddeld tussen de €1.500 en €4.500, afhankelijk van de benodigde pagina's, functies en SEO-eisen. Binnen dit budget krijg je een snelle, veilige site die direct klaar is om lokaal gevonden te worden.",
    content: `
Als je overweegt om een website te laten maken, wil je uiteraard eerst weten wat de investering is. De prijs hangt grotendeels af van je doelen.

## Waaruit bestaan de kosten?

Wanneer je een website laat bouwen, betaal je voor drie hoofdonderdelen:
1. **Design & Architectuur:** Hoe de website eruitziet en navigeert.
2. **Techniek & SEO:** Snelheid, mobielvriendelijkheid en de technische SEO-fundering.
3. **Content & Copywriting:** De teksten die bezoekers overtuigen om contact op te nemen.

### Vergelijking: Zelf doen vs. Bureau

| Optie | Gemiddelde Kosten | Voordelen | Nadelen |
|---|---|---|---|
| Zelf doen (WordPress/Wix) | €0 - €300 | Goedkoop, snel live | Kost veel eigen tijd, vaak tragere website, minder SEO-focus |
| Freelancer | €500 - €1.500 | Persoonlijk, flexibel | Kwaliteit varieert, vaak alleen design of alleen techniek |
| **MagisData (Webbureau)** | **€1.500 - €4.500** | **Complete ontzorging, SEO & conversie focus** | Hogere eenmalige investering |

## Waarom investeren in een lokaal bureau?
Een bureau uit de regio Leiden snapt de lokale markt. We optimaliseren de website direct voor termen als "lokale dienstverlener Leiden" zodat je niet alleen een site hebt, maar ook een site die *gevonden* wordt.

> "Een goede website kost geld, maar een onduidelijke website kost je dagelijks aanvragen."

## Conclusie
Een investering in een nieuwe website betaalt zich terug als de site ook bezoekers omzet in klanten. Zorg dat je niet alleen betaalt voor een mooi design, maar voor techniek, SEO en heldere antwoorden op klantvragen.
    `,
    faqs: [
      {
        question: "Hoe lang duurt het om een website te maken?",
        answer: "Gemiddeld duurt dit 3 tot 6 weken, afhankelijk van hoe snel feedback wordt gegeven en content beschikbaar is."
      },
      {
        question: "Komen er nog maandelijkse kosten bij?",
        answer: "Vaak betaal je voor hosting, domeinnaam en onderhoud. Bij MagisData is dit vooraf transparant."
      }
    ],
    cta: {
      title: "Wil je weten wat jouw ideale website kost?",
      text: "Vraag vrijblijvend een offerte aan of plan een korte kennismaking. We geven je altijd direct duidelijkheid over de verwachte investering.",
      primaryHref: "/contact",
      primaryText: "Vraag websiteplan aan"
    },
    relatedSlugs: []
  }
];
