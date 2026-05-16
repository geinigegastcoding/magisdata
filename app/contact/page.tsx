import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { contactPage, pageIcons } from "@/content/pages";
import { metadataForPath } from "@/content/seo";

export const metadata: Metadata = metadataForPath("/contact");

export default function ContactPage() {
  return <ContentPage content={contactPage} contactMode icon={pageIcons.contact} pathname="/contact" />;
}
