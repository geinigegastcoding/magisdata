import type { Metadata } from "next";
import { landingPages } from "@/content/landing-pages";
import { absoluteUrl, defaultImage, lastModified, siteName } from "@/schemas/seo";

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

const coreSeoRoutes: SeoRoute[] = [
  {
    path: "/",
    title: "Website laten maken, SEO bureau en AI-vindbaarheid | MagisData",
    description: "MagisData bouwt snelle websites en helpt als SEO bureau met lokale SEO, AEO, GEO, AI-vindbaarheid en conversie in Nederland.",
    keywords: ["website laten maken", "SEO bureau", "AI vindbaarheid", "AEO optimalisatie", "GEO optimalisatie", "conversie optimalisatie"],
    priority: 1,
    changeFrequency: "weekly"
  },
  {
    path: "/services",
    title: "Online marketing diensten voor websites, SEO en AI-vindbaarheid",
    description: "Bekijk diensten voor website laten maken, SEO bureau hulp, lokale SEO, AEO, GEO, conversie optimalisatie en AI-automatisering.",
    keywords: ["online marketing bureau", "website laten maken", "SEO bureau", "lokale SEO", "AI vindbaarheid"],
    priority: 0.9,
    changeFrequency: "monthly"
  },
  {
    path: "/web-development",
    title: "Website laten maken voor SEO, vertrouwen en meer aanvragen",
    description: "Laat een snelle, professionele website maken die je aanbod duidelijk uitlegt, vertrouwen opbouwt en bezoekers omzet in aanvragen.",
    keywords: ["website laten maken", "professionele website laten maken", "webbureau Nederland", "SEO website laten maken", "website voor ondernemers"],
    priority: 0.85,
    changeFrequency: "monthly"
  },
  {
    path: "/seo-services",
    title: "SEO diensten voor betere vindbaarheid in Google en AI",
    description: "Praktische SEO diensten voor ondernemers die beter gevonden willen worden met sterke pagina's, content, techniek en lokale SEO.",
    keywords: ["SEO diensten", "SEO bureau Nederland", "zoekmachine optimalisatie", "lokale SEO", "SEO specialist"],
    priority: 0.85,
    changeFrequency: "monthly"
  },
  {
    path: "/geo-optimization",
    title: "GEO optimalisatie voor AI-zoekmachines en AI-vindbaarheid",
    description: "GEO optimalisatie maakt je website duidelijker, citeerbaarder en beter te begrijpen voor AI-zoekmachines en generatieve antwoorden.",
    keywords: ["GEO optimalisatie", "generative engine optimization", "AI zoekmachines", "AI vindbaarheid", "AI SEO"],
    priority: 0.85,
    changeFrequency: "monthly"
  },
  {
    path: "/aeo-optimization",
    title: "AEO optimalisatie voor AI Overviews en duidelijke antwoorden",
    description: "AEO optimalisatie helpt je website klantvragen direct beantwoorden voor bezoekers, Google, AI Overviews en AI-assistenten.",
    keywords: ["AEO optimalisatie", "answer engine optimization", "AI Overviews optimalisatie", "FAQ optimalisatie", "AI antwoorden"],
    priority: 0.85,
    changeFrequency: "monthly"
  },
  {
    path: "/ai-infrastructure",
    title: "AI en automatisering voor ondernemers",
    description: "Praktische AI en automatisering voor betere leadopvolging, minder handwerk, duidelijke intake en slimmere processen.",
    keywords: ["AI automatisering", "AI voor ondernemers", "leadopvolging automatiseren", "AI workflows"],
    priority: 0.75,
    changeFrequency: "monthly"
  },
  {
    path: "/strategic-consulting",
    title: "Strategisch online advies voor website, SEO en groei",
    description: "Krijg helder strategisch advies over je website, SEO, content, AEO, GEO en online groei zonder technische ruis.",
    keywords: ["strategisch online advies", "website advies", "SEO strategie", "online groei advies"],
    priority: 0.75,
    changeFrequency: "monthly"
  },
  {
    path: "/about",
    title: "Over MagisData",
    description: "Leer MagisData kennen: een nuchter digitaal bureau dat websites, SEO, AEO, GEO en AI begrijpelijk maakt voor ondernemers.",
    keywords: ["MagisData", "digitaal bureau", "webbureau", "SEO bureau Nederland"],
    priority: 0.65,
    changeFrequency: "monthly"
  },
  {
    path: "/case-studies",
    title: "Case studies over websites, SEO en conversie",
    description: "Bekijk praktijkvoorbeelden van duidelijkere websites, sterkere vindbaarheid en betere conversie voor ondernemers.",
    keywords: ["website cases", "SEO cases", "conversie optimalisatie voorbeelden", "MagisData cases"],
    priority: 0.75,
    changeFrequency: "monthly"
  },
  {
    path: "/case-studies/lokale-dienstverlener",
    title: "Case: lokale dienstverlener kreeg meer aanvragen",
    description: "Duidelijkere website en meer aanvragen voor een lokale dienstverlener.",
    keywords: ["lokale dienstverlener website", "meer aanvragen website", "lokale SEO case"],
    priority: 0.65,
    changeFrequency: "monthly"
  },
  {
    path: "/case-studies/adviesbureau",
    title: "Case: adviesbureau bouwde meer vertrouwen op",
    description: "Sterkere positionering en betere leads voor een adviesbureau.",
    keywords: ["adviesbureau website", "positionering adviesbureau", "betere leads case"],
    priority: 0.65,
    changeFrequency: "monthly"
  },
  {
    path: "/case-studies/groeiende-webshop",
    title: "Case: groeiende webshop kreeg betere SEO-structuur",
    description: "Betere SEO-structuur en contentlogica voor een groeiende webshop.",
    keywords: ["webshop SEO structuur", "SEO case webshop", "contentstructuur webshop"],
    priority: 0.65,
    changeFrequency: "monthly"
  },
  {
    path: "/insights",
    title: "Inzichten over websites, SEO en AI-vindbaarheid",
    description: "Praktische uitleg over websites, SEO, AI-vindbaarheid en online groei.",
    keywords: ["SEO inzichten", "website tips ondernemers", "AI vindbaarheid", "online groei"],
    priority: 0.75,
    changeFrequency: "monthly"
  },
  {
    path: "/insights/website-meer-aanvragen",
    title: "Waarom je website weinig aanvragen krijgt",
    description: "Checklist voor websites die meer vertrouwen en aanvragen moeten opleveren.",
    keywords: ["website meer aanvragen", "website conversie", "waarom website geen leads oplevert"],
    priority: 0.65,
    changeFrequency: "monthly"
  },
  {
    path: "/insights/seo-zonder-jargon",
    title: "SEO zonder jargon",
    description: "Wat ondernemers echt moeten weten over vindbaarheid en goede content.",
    keywords: ["SEO zonder jargon", "SEO voor ondernemers", "zoekmachine optimalisatie uitleg"],
    priority: 0.65,
    changeFrequency: "monthly"
  },
  {
    path: "/insights/ai-vindbaarheid",
    title: "AI-vindbaarheid",
    description: "Waarom duidelijke uitleg belangrijker wordt voor AI-zoekmachines.",
    keywords: ["AI vindbaarheid", "GEO uitleg", "AEO uitleg", "website AI zoekmachines"],
    priority: 0.65,
    changeFrequency: "monthly"
  },
  {
    path: "/contact",
    title: "Contact met MagisData",
    description: "Plan een gratis gesprek met MagisData over je website, SEO, AEO, GEO, AI-vindbaarheid of online groei.",
    keywords: ["contact MagisData", "gratis website advies", "SEO gesprek", "website scan"],
    priority: 0.8,
    changeFrequency: "monthly"
  }
];

export const seoRoutes: SeoRoute[] = [
  ...coreSeoRoutes,
  ...landingPages.map((page) => ({
    path: `/${page.slug}`,
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    priority: page.kind === "legal" || page.kind === "thanks" ? 0.35 : page.kind === "location" ? 0.72 : 0.78,
    changeFrequency: "monthly" as const
  }))
];

export const sitemapLastModified = new Date(lastModified);

export function getSeoRoute(path: string) {
  return seoRoutes.find((route) => route.path === path);
}

export function metadataForPath(path: string): Metadata {
  const route = getSeoRoute(path);

  if (!route) {
    return {
      robots: {
        index: false,
        follow: false
      }
    };
  }

  return {
    title: route.title,
    description: route.description,
    keywords: route.keywords,
    alternates: {
      canonical: route.path
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      url: absoluteUrl(route.path),
      siteName,
      title: route.title,
      description: route.description,
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: `${siteName} logo`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [defaultImage]
    }
  };
}
