import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { RelatedLinks } from "@/components/related-links";
import { insights } from "@/content/pages";
import { metadataForPath } from "@/content/seo";
import { breadcrumbSchema, collectionPageSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/insights");

export default function InsightsPage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/insights",
      name: "Inzichten",
      description: metadata.description ?? ""
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Inzichten", path: "/insights" }
    ]),
    collectionPageSchema({
      path: "/insights",
      name: "Inzichten",
      description: metadata.description ?? "",
      items: insights.map((item) => ({
        name: item.title,
        path: `/insights/${item.slug}`
      }))
    })
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Inzichten
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-[-0.035em] text-navy md:text-6xl">
              Praktische uitleg over websites, SEO en AI-vindbaarheid
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Korte artikelen voor ondernemers die betere online keuzes willen maken zonder technisch woordenboek naast zich.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {insights.map(({ icon: Icon, ...item }) => (
              <article className="flex min-h-[330px] flex-col rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-sm" key={item.slug}>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-soft text-blue">
                  <Icon className="h-7 w-7" strokeWidth={2.1} />
                </span>
                <h2 className="mt-7 text-xl font-extrabold leading-7 text-navy">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{item.summary}</p>
                <Link className="focus-ring mt-auto inline-flex items-center pt-7 text-sm font-extrabold text-orange" href={`/insights/${item.slug}`}>
                  Lees artikel <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <RelatedLinks
        links={[
          { href: "/seo-services", label: "SEO diensten", description: "Zet inzichten om naar betere vindbaarheid." },
          { href: "/aeo-optimization", label: "AEO optimalisatie", description: "Maak klantvragen directer beantwoordbaar." },
          { href: "/contact", label: "Vraag advies aan", description: "Bespreek wat jouw site nu nodig heeft." }
        ]}
      />
    </main>
  );
}
