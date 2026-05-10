import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO-diensten",
  description:
    "Technische SEO, semantische contentarchitectuur, schema, interne links en performance-systemen voor blijvende organische zichtbaarheid.",
  alternates: { canonical: "/seo-services" },
  openGraph: { title: "SEO-diensten | MagisData", url: `${site.url}/seo-services` }
};

export default function Page() {
  return <ServicePage slug="seo-services" />;
}
