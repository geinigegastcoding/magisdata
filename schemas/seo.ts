import type { PageContent } from "@/content/pages";

export const siteUrl = "https://magisdata.nl";
export const siteName = "MagisData";
export const siteEmail = "contact@magisdata.nl";
export const sitePhone = "+31 6 42280029";
export const sitePhoneHref = "tel:+31642280029";
export const defaultImage = `${siteUrl}/assets/og-image.png`;
export const lastModified = "2026-06-28";
export const founderName = "Daniel Magis";
export const founderLinkedIn = "https://www.linkedin.com/in/daniel-magis-4088262bb";

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/assets/logo.png`,
    telephone: sitePhone,
    email: siteEmail,
    founder: {
      "@id": `${siteUrl}/#founder`
    },
    areaServed: "NL",
    knowsAbout: [
      "web development",
      "SEO",
      "local SEO",
      "Generative Engine Optimization",
      "Answer Engine Optimization",
      "conversion optimization",
      "AI automation"
    ]
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${siteUrl}/#founder`,
    name: founderName,
    url: `${siteUrl}/over-ons`,
    jobTitle: "Oprichter van MagisData",
    worksFor: {
      "@id": `${siteUrl}/#organization`
    },
    sameAs: [founderLinkedIn],
    knowsAbout: [
      "SEO",
      "local SEO",
      "web development",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "conversion optimization"
    ]
  };
}

export function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    url: siteUrl,
    image: defaultImage,
    logo: `${siteUrl}/assets/logo.png`,
    telephone: sitePhone,
    email: siteEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suze Groenwegerf 25",
      postalCode: "2253 RZ",
      addressLocality: "Voorschoten",
      addressRegion: "Zuid-Holland",
      addressCountry: "NL"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.1287,
      longitude: 4.4447
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    sameAs: [
      "https://share.google/fPu1P47PQzUwG210Z",
      founderLinkedIn
    ],
    areaServed: [
      "Nederland",
      "Leiden",
      "Voorschoten",
      "Den Haag",
      "Rotterdam"
    ],
    priceRange: "$$"
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    inLanguage: "nl-NL",
    publisher: {
      "@id": `${siteUrl}/#organization`
    }
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function webPageSchema(page: {
  path: string;
  name: string;
  description: string;
  primaryImage?: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.name,
    description: page.description,
    inLanguage: "nl-NL",
    isPartOf: {
      "@id": `${siteUrl}/#website`
    },
    publisher: {
      "@id": `${siteUrl}/#organization`
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: page.primaryImage ?? defaultImage
    }
  };
}

export function faqSchema(faqs: PageContent["faqs"], path: string) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function serviceSchema(content: PageContent, path: string) {
  const cityServiceAreas = new Set(["Leiden", "Voorschoten", "Den Haag", "Rotterdam"]);
  const areaServed =
    content.serviceArea && cityServiceAreas.has(content.serviceArea)
      ? {
          "@type": "City",
          name: content.serviceArea
        }
      : content.serviceArea ?? "Nederland";

  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: content.title,
    description: content.description,
    serviceType: content.eyebrow,
    areaServed,
    provider: {
      "@id": `${siteUrl}/#organization`
    },
    url: absoluteUrl(path)
  };
}


export function caseStudySchema(caseStudy: {
  title: string;
  summary: string;
  slug: string;
  image: string;
  sector: string;
  focus: string;
  datePublished: string;
  dateModified: string;
}) {
  const path = `/cases/${caseStudy.slug}`;

  return {
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#case-study`,
    headline: caseStudy.title,
    description: caseStudy.summary,
    image: absoluteUrl(caseStudy.image),
    datePublished: caseStudy.datePublished,
    dateModified: caseStudy.dateModified,
    inLanguage: "nl-NL",
    articleSection: "Ontwerpportfolio",
    genre: "Webdesign ontwerp",
    about: [
      {
        "@type": "Thing",
        name: caseStudy.sector
      },
      {
        "@type": "Thing",
        name: caseStudy.focus
      }
    ],
    author: {
      "@id": `${siteUrl}/#founder`
    },
    publisher: {
      "@id": `${siteUrl}/#organization`
    },
    mainEntityOfPage: absoluteUrl(path)
  };
}

export function collectionPageSchema(page: {
  path: string;
  name: string;
  description: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(page.path)}#collection`,
    name: page.name,
    description: page.description,
    url: absoluteUrl(page.path),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: page.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path)
      }))
    }
  };
}

export function graphSchema(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes
  };
}
