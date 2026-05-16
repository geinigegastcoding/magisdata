import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { pageIcons, servicePages } from "@/content/pages";
import { metadataForPath } from "@/content/seo";

export const metadata: Metadata = metadataForPath("/geo-optimization");

export default function GeoOptimizationPage() {
  return (
    <ContentPage
      content={servicePages["geo-optimization"]}
      icon={pageIcons["geo-optimization"]}
      pathname="/geo-optimization"
      schemaKind="service"
    />
  );
}
