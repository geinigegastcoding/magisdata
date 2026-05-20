import type { Metadata } from "next";
import {
  CaseStudyInsights,
  CustomerQuestions,
  FinalCta,
  Hero,
  Process,
  Results,
  Services
} from "@/components/homepage-sections";
import { metadataForPath } from "@/content/seo";

export const metadata: Metadata = metadataForPath("/");

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Results />
      <CustomerQuestions />
      <CaseStudyInsights />
      <FinalCta />
    </main>
  );
}
