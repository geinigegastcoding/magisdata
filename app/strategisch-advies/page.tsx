import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { pageIcons, servicePages } from "@/content/pages";
import { metadataForPath } from "@/content/seo";

export const metadata: Metadata = metadataForPath("/strategisch-advies");

export default function StrategicConsultingPage() {
  return (
    <ContentPage
      content={servicePages["strategic-consulting"]}
      icon={pageIcons["strategic-consulting"]}
      pathname="/strategisch-advies"
      schemaKind="service"
    />
  );
}
