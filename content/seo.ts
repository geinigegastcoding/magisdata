import type { Metadata } from "next";
import { landingPages } from "@/content/landing-pages";
import { caseStudies, insights } from "@/content/pages";
import { absoluteUrl, defaultImage, lastModified, siteName } from "@/schemas/seo";

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  priority: number;
  changeFrequency: "weekly" | "monthly";
  lastModified: string;
  indexable?: boolean;
};

const coreSeoRoutes: SeoRoute[] = [
  {
    path: "/",
    title: "Website laten maken, SEO bureau en AI-vindbaarheid | MagisData",
    description: "MagisData bouwt snelle websites en helpt als SEO bureau met lokale SEO, AEO, GEO, AI-vindbaarheid en conversie in Nederland.",
    keywords: ["website laten maken", "SEO bureau", "AI vindbaarheid", "AEO optimalisatie", "GEO optimalisatie", "conversie optimalisatie"],
    priority: 1,
    changeFrequency: "weekly",
    lastModified
  },
  {
    path: "/diensten",
    title: "Diensten voor websites, SEO, GEO, AEO en AI | MagisData",
    description: "Bekijk hoe MagisData webontwikkeling, SEO, GEO, AEO, AI-automatisering en strategisch advies verbindt tot een helder groeisysteem.",
    keywords: ["website laten maken", "SEO diensten", "GEO optimalisatie", "AEO optimalisatie", "AI automatisering", "strategisch online advies"],
    priority: 0.9,
    changeFrequency: "monthly",
    lastModified
  },
  {
    path: "/webontwikkeling",
    title: "Website laten maken voor SEO, vertrouwen en meer aanvragen",
    description: "Laat een snelle, professionele website maken die je aanbod duidelijk uitlegt, vertrouwen opbouwt en bezoekers omzet in aanvragen.",
    keywords: ["website laten maken", "professionele website laten maken", "webbureau Nederland", "SEO website laten maken", "website voor ondernemers"],
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified
  },
  {
    path: "/seo-diensten",
    title: "SEO diensten voor betere vindbaarheid in Google en AI",
    description: "Praktische SEO diensten voor ondernemers die beter gevonden willen worden met sterke pagina's, content, techniek en lokale SEO.",
    keywords: ["SEO diensten", "SEO bureau Nederland", "zoekmachine optimalisatie", "lokale SEO", "SEO specialist"],
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified
  },
  {
    path: "/geo-optimalisatie",
    title: "GEO optimalisatie voor AI-zoekmachines en AI-vindbaarheid",
    description: "GEO optimalisatie maakt je website duidelijker, citeerbaarder en beter te begrijpen voor AI-zoekmachines en generatieve antwoorden.",
    keywords: ["GEO optimalisatie", "generative engine optimization", "AI zoekmachines", "AI vindbaarheid", "AI SEO"],
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified
  },
  {
    path: "/aeo-optimalisatie",
    title: "AEO optimalisatie voor AI Overviews en duidelijke antwoorden",
    description: "AEO optimalisatie helpt je website klantvragen direct beantwoorden voor bezoekers, Google, AI Overviews en AI-assistenten.",
    keywords: ["AEO optimalisatie", "answer engine optimization", "AI Overviews optimalisatie", "FAQ optimalisatie", "AI antwoorden"],
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified
  },
  {
    path: "/ai-infrastructuur",
    title: "AI en automatisering voor ondernemers",
    description: "Praktische AI en automatisering voor betere leadopvolging, minder handwerk, duidelijke intake en slimmere processen.",
    keywords: ["AI automatisering", "AI voor ondernemers", "leadopvolging automatiseren", "AI workflows"],
    priority: 0.75,
    changeFrequency: "monthly",
    lastModified
  },
  {
    path: "/strategisch-advies",
    title: "Strategisch online advies voor website, SEO en groei",
    description: "Krijg helder strategisch advies over je website, SEO, content, AEO, GEO en online groei zonder technische ruis.",
    keywords: ["strategisch online advies", "website advies", "SEO strategie", "online groei advies"],
    priority: 0.75,
    changeFrequency: "monthly",
    lastModified
  },
  {
    path: "/over-ons",
    title: "Over MagisData | Strategische websites en AI-vindbaarheid",
    description: "Leer hoe MagisData websites behandelt als digitale infrastructuur voor autoriteit, SEO, GEO, AEO, AI en conversie.",
    keywords: ["MagisData", "AI webbureau", "strategisch webbureau", "SEO bureau Nederland", "GEO bureau"],
    priority: 0.65,
    changeFrequency: "monthly",
    lastModified
  },
  {
    path: "/contact",
    title: "Contact met MagisData | Vraag een website-analyse aan",
    description: "Neem contact op met MagisData voor een gratis eerste richting over je website, SEO, GEO, AEO, AI-vindbaarheid of online groei.",
    keywords: ["contact MagisData", "website analyse", "gratis website advies", "SEO gesprek", "website scan"],
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified
  }
];

const caseStudySeoRoutes: SeoRoute[] = [
  {
    path: "/cases",
    title: "Cases over websites, SEO en digitale groei | MagisData",
    description: "Bekijk hoe MagisData websites duidelijker, vindbaarder en conversiegerichter maakt met strategie, content en structuur.",
    keywords: ["website cases", "SEO cases", "conversie optimalisatie voorbeelden", "digitale groei cases", "MagisData cases"],
    priority: 0.75,
    changeFrequency: "monthly",
    lastModified
  },
  ...caseStudies.map((caseStudy) => ({
    path: `/cases/${caseStudy.slug}`,
    title: caseStudy.title,
    description: caseStudy.summary,
    keywords: [caseStudy.title, caseStudy.result, "case study MagisData", "website case", "SEO case"],
    priority: 0.65,
    changeFrequency: "monthly" as const,
    lastModified
  }))
];

const insightSeoRoutes: SeoRoute[] = [
  {
    path: "/inzichten",
    title: "Inzichten over SEO, AI-vindbaarheid en websites | MagisData",
    description: "Lees praktische inzichten over websites, SEO, GEO, AEO, AI-vindbaarheid, conversie en digitale groei voor ondernemers.",
    keywords: ["SEO inzichten", "website tips ondernemers", "AI vindbaarheid", "GEO optimalisatie", "AEO optimalisatie", "online groei"],
    priority: 0.75,
    changeFrequency: "monthly",
    lastModified
  },
  ...insights.map((insight) => ({
    path: `/inzichten/${insight.slug}`,
    title: insight.title,
    description: insight.summary,
    keywords: [insight.title, "SEO inzicht", "website tips", "AI vindbaarheid", "MagisData"],
    priority: 0.65,
    changeFrequency: "monthly" as const,
    lastModified: insight.dateModified
  }))
];

export const seoRoutes: SeoRoute[] = [
  ...coreSeoRoutes,
  ...caseStudySeoRoutes,
  ...insightSeoRoutes,
  ...landingPages.map((page) => ({
    path: `/${page.slug}`,
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    priority: page.kind === "legal" || page.kind === "thanks" ? 0.35 : page.kind === "location" ? 0.72 : 0.78,
    changeFrequency: "monthly" as const,
    lastModified,
    indexable: page.kind !== "thanks"
  }))
];

export const sitemapRoutes = seoRoutes.filter((route) => route.indexable !== false);

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
    title: {
      absolute: route.title
    },
    description: route.description,
    keywords: route.keywords,
    alternates: {
      canonical: route.path
    },
    robots: {
      index: route.indexable !== false,
      follow: true,
      googleBot: {
        index: route.indexable !== false,
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
