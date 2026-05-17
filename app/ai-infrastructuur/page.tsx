import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { pageIcons, servicePages } from "@/content/pages";
import { metadataForPath } from "@/content/seo";

export const metadata: Metadata = metadataForPath("/ai-infrastructuur");

export default function AiInfrastructurePage() {
  return (
    <ContentPage
      content={servicePages["ai-infrastructure"]}
      icon={pageIcons["ai-infrastructure"]}
      pathname="/ai-infrastructuur"
      schemaKind="service"
    />
  );
}
