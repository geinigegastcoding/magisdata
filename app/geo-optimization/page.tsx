import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "GEO-optimalisatie",
  description:
    "Generative engine optimization voor AI-gegenereerde zoekresultaten, retrievalsystemen en antwoordplatformen.",
  alternates: { canonical: "/geo-optimization" },
  openGraph: { title: "GEO-optimalisatie | MagisData", url: `${site.url}/geo-optimization` }
};

export default function Page() {
  return <ServicePage slug="geo-optimization" />;
}
