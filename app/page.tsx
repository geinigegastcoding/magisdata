import type { Metadata } from "next";
import { AiHomepage, homepageFaqs } from "@/components/ai-homepage";
import { JsonLd } from "@/components/json-ld";
import { faqSchema, graphSchema, siteUrl, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = {
  title: { absolute: "MagisData | Praktische AI en automatisering voor bedrijven" },
  description:
    "MagisData onderzoekt waar AI je tijd teruggeeft en bouwt AI-systemen voor e-mail, leads, rapportages, kennis en terugkerend werk.",
  alternates: { canonical: "https://magisdata.nl/" },
  openGraph: {
    title: "AI-systemen die handwerk uit je bedrijf halen | MagisData",
    description:
      "Van AI-audit tot werkend systeem. MagisData helpt ondernemers tijd terugwinnen met duidelijke, praktische AI-systemen.",
    url: "https://magisdata.nl/",
    images: [{ url: "/assets/redesign/flow-hero.webp", width: 1536, height: 1024, alt: "Van losse handelingen naar één doorlopende workflow met MagisData" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-systemen die handwerk uit je bedrijf halen | MagisData",
    description: "Onderzoek, bouw en gebruik AI-systemen die je werk lichter maken.",
    images: ["/assets/redesign/flow-hero.webp"]
  }
};

export default function HomePage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/",
      name: "MagisData: AI-systemen voor ondernemers",
      description: metadata.description ?? "",
      primaryImage: `${siteUrl}/assets/redesign/flow-hero.webp`
    }),
    faqSchema(homepageFaqs, "/"),
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#ai-services`,
      name: "AI-diensten van MagisData",
      itemListElement: [
        "AI-audit",
        "AI-systemen bouwen",
        "Second brain en skills",
        "AI-training en enablement"
      ].map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name
      }))
    }
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <AiHomepage />
    </>
  );
}
