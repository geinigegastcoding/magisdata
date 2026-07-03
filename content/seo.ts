import type { Metadata } from "next";
import { landingPages } from "@/content/landing-pages";
import { caseStudies } from "@/content/pages";
import { currentStatus } from "@/content/status";
import { absoluteUrl, defaultImage, lastModified, siteName } from "@/schemas/seo";
import { articles } from "@/content/articles";

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  priority: number;
  changeFrequency: "weekly" | "monthly";
  lastModified: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  indexable?: boolean;
};

const coreSeoRoutes: SeoRoute[] = [
  {
    path: "/",
    title: "Websites en SEO voor lokale dienstverleners | MagisData",
    description: "MagisData bouwt snelle websites en SEO-structuur voor lokale dienstverleners die beter gevonden willen worden en meer aanvragen willen krijgen.",
    keywords: ["website laten maken", "SEO bureau", "lokale SEO", "dienstverleners", "AI vindbaarheid", "AEO optimalisatie", "GEO optimalisatie"],
    priority: 1,
    changeFrequency: "weekly",
    lastModified
  },
  {
    path: "/diensten",
    title: "Diensten voor websites, SEO, GEO, AEO | MagisData",
    description: "Bekijk hoe MagisData webontwikkeling, SEO, GEO, AEO en strategisch advies verbindt tot een helder groeisysteem.",
    keywords: ["website laten maken", "SEO diensten", "GEO optimalisatie", "AEO optimalisatie", "strategisch online advies"],
    priority: 0.9,
    changeFrequency: "monthly",
    lastModified
  },
  {
    path: "/webontwikkeling",
    title: "Website laten maken voor SEO, vertrouwen en meer aanvragen",
    description: "Laat een snelle, professionele website maken die je aanbod duidelijk uitlegt, vertrouwen opbouwt en bezoekers helpt de stap naar een aanvraag te zetten.",
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
    title: "Over MagisData | Strategische websites en vindbaarheid",
    description: "Leer hoe MagisData websites behandelt als digitale infrastructuur voor autoriteit, SEO, GEO, AEO en conversie.",
    keywords: ["MagisData", "webbureau", "strategisch webbureau", "SEO bureau Nederland", "GEO bureau"],
    priority: 0.65,
    changeFrequency: "monthly",
    lastModified
  },
  {
    path: "/contact",
    title: "Contact met MagisData | Vraag gratis websiteplan aan",
    description: "Neem contact op met MagisData voor een gratis eerste richting over je website, SEO, GEO, AEO, AI-vindbaarheid of online groei.",
    keywords: ["contact MagisData", "website plan", "gratis website advies", "website laten maken", "website scan"],
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified
  },
  {
    path: "/roi-calculator",
    title: "Website ROI Calculator | Bereken rendement van je website | MagisData",
    description: "Gebruik onze gratis Website ROI calculator om snel het verwachte rendement van een nieuwe website of websitepakket te berekenen.",
    keywords: ["website ROI calculator", "rendement website berekenen", "kosten website terugverdienen", "website investering"],
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified
  },
  {
    path: "/inzichten",
    title: "Inzichten & Kennisbank over SEO en Websites | MagisData",
    description: "Praktische artikelen, inzichten en antwoorden over SEO, webontwikkeling en online groei voor lokale dienstverleners.",
    keywords: ["SEO kennisbank", "website artikelen", "lokale SEO tips", "inzichten MagisData"],
    priority: 0.8,
    changeFrequency: "weekly",
    lastModified
  },
  {
    path: "/status",
    title: "Status en bereikbaarheid | MagisData",
    description: "Bekijk de actuele bereikbaarheid van MagisData en neem contact op voor een vrijblijvend eerste gesprek.",
    keywords: ["MagisData status", "MagisData bereikbaar", "contact MagisData"],
    priority: 0.35,
    changeFrequency: "monthly",
    lastModified: currentStatus.updatedAt
  }
];

const caseStudySeoRoutes: SeoRoute[] = [
  {
    path: "/cases",
    title: "Webdesign portfolio voor bedrijven en platforms | MagisData",
    description: "Bekijk het webdesign portfolio van MagisData met projecten, ontwerpkeuzes en lessen over structuur, SEO, AEO, GEO en gebruikservaring.",
    keywords: ["webdesign portfolio", "website ontwerp voorbeelden", "portfolio webdesign", "SEO webdesign", "MagisData portfolio"],
    priority: 0.75,
    changeFrequency: "monthly",
    lastModified: "2026-06-28"
  },
  ...caseStudies.map((caseStudy) => ({
    path: `/cases/${caseStudy.slug}`,
    title: caseStudy.metaTitle,
    description: caseStudy.summary,
    keywords: [caseStudy.title, caseStudy.sector, caseStudy.focus, "webdesign portfolio", "MagisData portfolio"],
    priority: 0.65,
    changeFrequency: "monthly" as const,
    lastModified: caseStudy.dateModified,
    image: caseStudy.image,
    imageWidth: caseStudy.imageWidth,
    imageHeight: caseStudy.imageHeight
  }))
];

export const seoRoutes: SeoRoute[] = [
  ...coreSeoRoutes,
  ...caseStudySeoRoutes,
  ...landingPages.map((page) => ({
    path: `/${page.slug}`,
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    priority: page.kind === "legal" || page.kind === "thanks" ? 0.35 : page.kind === "location" ? 0.72 : 0.78,
    changeFrequency: "monthly" as const,
    lastModified: page.dateModified ?? lastModified,
    indexable: page.kind !== "thanks"
  })),
  ...articles.map((article) => ({
    path: `/inzichten/${article.slug}`,
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    priority: 0.70,
    changeFrequency: "monthly" as const,
    lastModified: article.dateModified ?? article.datePublished,
    image: article.image
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

  const routeUrl = absoluteUrl(route.path);

  return {
    title: {
      absolute: route.title
    },
    description: route.description,
    keywords: route.keywords,
    alternates: {
      canonical: route.path,
      languages: {
        "nl-NL": routeUrl,
        "x-default": routeUrl
      }
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
          url: route.image ? absoluteUrl(route.image) : defaultImage,
          width: route.imageWidth ?? 1200,
          height: route.imageHeight ?? 630,
          alt: route.image ? route.title : `${siteName} logo`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [route.image ? absoluteUrl(route.image) : defaultImage]
    }
  };
}
