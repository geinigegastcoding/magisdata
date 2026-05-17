import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { pageIcons, servicePages } from "@/content/pages";
import { metadataForPath } from "@/content/seo";

export const metadata: Metadata = metadataForPath("/aeo-optimalisatie");

export default function AeoOptimizationPage() {
  return (
    <ContentPage
      content={servicePages["aeo-optimization"]}
      icon={pageIcons["aeo-optimization"]}
      pathname="/aeo-optimalisatie"
      schemaKind="service"
    />
  );
}
