import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI-infrastructuur",
  description:
    "AI-automatisering en operationele workflows voor leadopvolging, CRM, supporttriage, rapportage en schaalbare interne systemen.",
  alternates: { canonical: "/ai-infrastructure" },
  openGraph: { title: "AI-infrastructuur | MagisData", url: `${site.url}/ai-infrastructure` }
};

export default function Page() {
  return <ServicePage slug="ai-infrastructure" />;
}
