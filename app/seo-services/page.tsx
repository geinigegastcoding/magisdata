import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { pageIcons, servicePages } from "@/content/pages";
import { metadataForPath } from "@/content/seo";

export const metadata: Metadata = metadataForPath("/seo-services");

export default function SeoServicesPage() {
  return (
    <ContentPage
      content={servicePages["seo-services"]}
      icon={pageIcons["seo-services"]}
      pathname="/seo-services"
      schemaKind="service"
    />
  );
}
