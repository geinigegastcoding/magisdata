import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { RelatedLinks } from "@/components/related-links";
import { caseStudies } from "@/content/pages";
import { metadataForPath } from "@/content/seo";
import { breadcrumbSchema, collectionPageSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/case-studies");

export default function CaseStudiesPage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/case-studies",
      name: "Cases",
      description: metadata.description ?? ""
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Cases", path: "/case-studies" }
    ]),
    collectionPageSchema({
      path: "/case-studies",
      name: "Cases",
      description: metadata.description ?? "",
      items: caseStudies.map((item) => ({
        name: item.title,
        path: `/case-studies/${item.slug}`
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
              Cases
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-[-0.035em] text-navy md:text-6xl">
              Voorbeelden van websites die duidelijker, sterker en winstgevender werden
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Geen technische verhalen. Wel korte praktijkvoorbeelden van problemen die veel ondernemers herkennen: een onduidelijke website, weinig vertrouwen of te weinig aanvragen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map(({ icon: Icon, ...item }) => (
              <article className="flex min-h-[360px] flex-col rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-sm" key={item.slug}>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-soft text-orange">
                  <Icon className="h-7 w-7" strokeWidth={2.1} />
                </span>
                <h2 className="mt-7 text-xl font-extrabold leading-7 text-navy">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{item.summary}</p>
                <p className="mt-5 rounded-2xl bg-green-soft px-4 py-3 text-sm font-extrabold text-navy">
                  {item.result}
                </p>
                <Link className="focus-ring mt-auto inline-flex items-center pt-7 text-sm font-extrabold text-orange" href={`/case-studies/${item.slug}`}>
                  Lees deze case <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <RelatedLinks
        links={[
          { href: "/web-development", label: "Website laten maken", description: "Bouw een duidelijker fundament voor vertrouwen." },
          { href: "/seo-services", label: "SEO diensten", description: "Versterk structuur, content en vindbaarheid." },
          { href: "/contact", label: "Vraag groeiscan aan", description: "Laat je huidige website praktisch beoordelen." }
        ]}
      />
    </main>
  );
}
