import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { pageIcons, servicePages } from "@/content/pages";
import { metadataForPath } from "@/content/seo";

export const metadata: Metadata = metadataForPath("/web-development");

export default function WebDevelopmentPage() {
  return (
    <ContentPage
      content={servicePages["web-development"]}
      icon={pageIcons["web-development"]}
      pathname="/web-development"
      schemaKind="service"
    />
  );
}
