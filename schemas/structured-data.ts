import { faqs, servicePages, insights } from "@/content/site-content";
import { absoluteUrl } from "@/lib/utils";
import { site } from "@/lib/site";

const logo = absoluteUrl("/assets/magisdata-logo.webp");

export function baseGraph(path = "/") {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      professionalServiceSchema(),
      localBusinessSchema(),
      breadcrumbSchema([
        { name: "Home", item: site.url },
        ...(path === "/" ? [] : [{ name: pageNameFromPath(path), item: url }])
      ])
    ]
  };
}

export function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      professionalServiceSchema(),
      localBusinessSchema(),
      faqSchema(faqs),
      breadcrumbSchema([{ name: "Home", item: site.url }])
    ]
  };
}

export function serviceGraph(slug: string) {
  const service = servicePages.find((item) => item.slug === slug);
  const path = `/${slug}`;
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      professionalServiceSchema(),
      service
        ? {
            "@type": "Service",
            "@id": `${url}#service`,
            name: service.title,
            serviceType: service.title,
            provider: { "@id": `${site.url}#organization` },
            areaServed: ["Nederland", "Europa"],
            description: service.description,
            url,
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "EUR",
              url: absoluteUrl("/contact")
            }
          }
        : null,
      service ? faqSchema(service.faqs) : null,
      breadcrumbSchema([
        { name: "Home", item: site.url },
        { name: "Diensten", item: absoluteUrl("/services") },
        { name: service?.title ?? pageNameFromPath(path), item: url }
      ])
    ].filter(Boolean)
  };
}

export function articleGraph(slug: string) {
  const article = insights.find((item) => item.slug === slug);
  const url = absoluteUrl(`/insights/${slug}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      article
        ? {
            "@type": "Article",
            "@id": `${url}#article`,
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            dateModified: article.date,
            image: logo,
            author: {
              "@type": "Organization",
              name: site.name,
              url: site.url
            },
            publisher: { "@id": `${site.url}#organization` },
            mainEntityOfPage: url
          }
        : null,
      breadcrumbSchema([
        { name: "Home", item: site.url },
        { name: "Inzichten", item: absoluteUrl("/insights") },
        { name: article?.title ?? "Inzicht", item: url }
      ])
    ].filter(Boolean)
  };
}

export function faqSchema(items: readonly { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.name,
    url: site.url,
    logo,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    founder: {
      "@type": "Person",
      name: site.founder
    },
    sameAs: [site.social.linkedIn]
  };
}

function professionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${site.url}#professional-service`,
    name: site.name,
    url: site.url,
    image: logo,
    email: site.email,
    telephone: site.phone,
    priceRange: "€€€",
    areaServed: ["Nederland", "Europa"],
    address: postalAddress(),
    description: site.description,
    serviceType: [
      "Premium webontwikkeling",
      "SEO-diensten",
      "Generative engine optimization",
      "Answer engine optimization",
      "AI-automatisering",
      "Strategisch advies"
    ]
  };
}

function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${site.url}#local-business`,
    name: site.name,
    url: site.url,
    image: logo,
    email: site.email,
    telephone: site.phone,
    priceRange: "€€€",
    address: postalAddress(),
    areaServed: {
      "@type": "Country",
      name: "Nederland"
    }
  };
}

function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { "@id": `${site.url}#organization` },
    inLanguage: "nl-NL"
  };
}

function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  };
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    addressCountry: site.addressCountry
  };
}

function pageNameFromPath(path: string) {
  return path
    .replace(/^\/|\/$/g, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
