import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { pageIcons, servicePages } from "@/content/pages";
import { metadataForPath } from "@/content/seo";

export const metadata: Metadata = metadataForPath("/services");

export default function ServicesPage() {
  return (
    <ContentPage
      content={servicePages.services}
      icon={pageIcons.services}
      pathname="/services"
      schemaKind="service"
    />
  );
}
