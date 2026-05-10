import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AEO-optimalisatie",
  description:
    "Answer engine optimization voor featured snippets, AI-assistenten en duidelijke extractie van kopersvragen.",
  alternates: { canonical: "/aeo-optimization" },
  openGraph: { title: "AEO-optimalisatie | MagisData", url: `${site.url}/aeo-optimization` }
};

export default function Page() {
  return <ServicePage slug="aeo-optimization" />;
}
