import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { getLandingPage, landingPages } from "@/content/landing-pages";
import { metadataForPath } from "@/content/seo";
import { pageIcons } from "@/content/pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    return {};
  }

  return metadataForPath(`/${page.slug}`);
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    notFound();
  }

  const icon =
    page.kind === "location"
      ? pageIcons.globe
      : page.kind === "legal"
        ? pageIcons.default
        : page.kind === "thanks"
          ? pageIcons.default
          : pageIcons["web-development"];

  return (
    <ContentPage
      content={page}
      icon={icon}
      pathname={`/${page.slug}`}
      primaryHref={page.kind === "thanks" ? "/" : "/contact"}
      schemaKind={page.kind === "legal" || page.kind === "thanks" ? "page" : "service"}
      secondaryHref={
        page.slug === "privacybeleid"
          ? "/algemene-voorwaarden"
          : page.slug === "algemene-voorwaarden"
            ? "/privacybeleid"
            : "/diensten"
      }
    />
  );
}
