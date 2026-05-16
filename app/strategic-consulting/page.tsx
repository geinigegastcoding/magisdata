import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { pageIcons, servicePages } from "@/content/pages";
import { metadataForPath } from "@/content/seo";

export const metadata: Metadata = metadataForPath("/strategic-consulting");

export default function StrategicConsultingPage() {
  return (
    <ContentPage
      content={servicePages["strategic-consulting"]}
      icon={pageIcons["strategic-consulting"]}
      pathname="/strategic-consulting"
      schemaKind="service"
    />
  );
}
