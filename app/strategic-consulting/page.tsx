import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Strategisch advies",
  description:
    "Digitale positionering, aanbodarchitectuur, autoriteitsplanning, conversiestrategie en groei-infrastructuuradvies.",
  alternates: { canonical: "/strategic-consulting" },
  openGraph: { title: "Strategisch advies | MagisData", url: `${site.url}/strategic-consulting` }
};

export default function Page() {
  return <ServicePage slug="strategic-consulting" />;
}
