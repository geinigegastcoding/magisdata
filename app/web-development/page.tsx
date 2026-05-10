import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Webontwikkeling",
  description:
    "Premium Next.js-webontwikkeling met performance, toegankelijkheid, gestructureerde content, conversie en schaalbaarheid ingebouwd.",
  alternates: { canonical: "/web-development" },
  openGraph: { title: "Webontwikkeling | MagisData", url: `${site.url}/web-development` }
};

export default function Page() {
  return <ServicePage slug="web-development" />;
}
