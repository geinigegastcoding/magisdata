import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, NotebookPen, Ruler, Search } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { caseStudies } from "@/content/pages";
import { metadataForPath } from "@/content/seo";
import { breadcrumbSchema, collectionPageSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/cases");

const portfolioNotes = [
  {
    title: "Structuur voorop",
    text: "Ik begin bij wat een bezoeker moet begrijpen: aanbod, context en logische vervolgstap.",
    icon: Ruler
  },
  {
    title: "Vindbare inhoud",
    text: "Diensten, vragen en secties krijgen een structuur die zoekmachines en AI-systemen kunnen lezen.",
    icon: Search
  },
  {
    title: "Leren per ontwerp",
    text: "Per project beschrijf ik keuzes, afwegingen en lessen die ik meeneem naar volgend werk.",
    icon: NotebookPen
  }
];

export default function PortfolioPage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/cases",
      name: "Portfolio",
      description: metadata.description ?? ""
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Portfolio", path: "/cases" }
    ]),
    collectionPageSchema({
      path: "/cases",
      name: "Webdesign portfolio",
      description: metadata.description ?? "",
      items: caseStudies.map((item) => ({
        name: item.title,
        path: `/cases/${item.slug}`
      }))
    })
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/cases" }
        ]}
      />

      <section className="py-14 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Portfolio
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight text-navy md:text-6xl">
              Webdesign dat ik heb uitgewerkt voor verschillende werelden
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Een selectie websites voor lokale dienstverlening, software en technologie. Bij ieder project leg ik uit wat ik heb ontworpen, hoe de pagina is opgebouwd en wat ik tijdens het maken heb geleerd.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-white py-10 md:py-12">
        <div className="container grid gap-4 md:grid-cols-3">
          {portfolioNotes.map(({ icon: Icon, ...note }) => (
            <article className="rounded-2xl border border-line bg-cream/40 p-5" key={note.title}>
              <Icon className="h-5 w-5 text-orange" />
              <h2 className="mt-4 font-extrabold text-navy">{note.title}</h2>
              <p className="mt-2 text-sm leading-7 text-muted">{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Geselecteerd werk
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl">
              Projecten en ontwerpnotities
            </h2>
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            {caseStudies.map((item, index) => (
              <article className="overflow-hidden rounded-[1.75rem] border border-line bg-white" key={item.slug}>
                <div className="overflow-hidden border-b border-line bg-cream">
                  <img
                    alt={item.imageAlt}
                    className="aspect-[16/10] w-full object-cover object-top"
                    height={item.imageHeight}
                    loading={index < 2 ? "eager" : "lazy"}
                    src={item.image}
                    width={item.imageWidth}
                  />
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue">
                    {item.sector} / Project 0{index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-extrabold leading-tight text-navy">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.summary}</p>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-soft">
                      {item.focus}
                    </span>
                    <Link className="focus-ring inline-flex items-center text-sm font-extrabold text-orange" href={`/cases/${item.slug}`}>
                      Open project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
