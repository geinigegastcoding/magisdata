import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { aboutPage, pageIcons } from "@/content/pages";
import { metadataForPath } from "@/content/seo";

export const metadata: Metadata = metadataForPath("/about");

export default function AboutPage() {
  return <ContentPage content={aboutPage} icon={pageIcons.about} pathname="/about" />;
}
