import type { Metadata } from "next";
import {
  CaseStudyInsights,
  CustomerQuestions,
  FinalCta,
  Hero,
  Process,
  Results,
  Services
} from "@/components/homepage-sections";
import { JsonLd } from "@/components/json-ld";
import { services } from "@/content/homepage";
import { metadataForPath } from "@/content/seo";
import { graphSchema, siteUrl, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/");

export default function HomePage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/",
      name: "MagisData",
      description: metadata.description ?? ""
    }),
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#core-services`,
      name: "Zichtbare diensten op de homepage",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: `${siteUrl}${service.href}`
      }))
    }
  ]);

  return (
    <main>
      <JsonLd data={schema} />
      <Hero />
      <Services />
      <Process />
      <Results />
      <CustomerQuestions />
      <CaseStudyInsights />
      <FinalCta />
    </main>
  );
}
