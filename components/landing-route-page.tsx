import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { getLandingPage } from "@/content/landing-pages";
import { metadataForPath } from "@/content/seo";
import { pageIcons } from "@/content/pages";

type LandingRoutePageProps = {
  slug: string;
};

export function landingRouteMetadata(slug: string): Metadata {
  const page = getLandingPage(slug);

  if (!page) {
    return {};
  }

  return metadataForPath(`/${page.slug}`);
}

export function LandingRoutePage({ slug }: LandingRoutePageProps) {
  const page = getLandingPage(slug);

  if (!page) {
    notFound();
  }

  const icon =
    page.kind === "location"
      ? pageIcons.globe
      : page.kind === "legal" || page.kind === "thanks"
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
