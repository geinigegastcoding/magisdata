import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { RelatedLinks } from "@/components/related-links";
import { relatedLinksByPath } from "@/content/internal-links";
import { caseStudies } from "@/content/pages";
import { metadataForPath } from "@/content/seo";
import { absoluteUrl, breadcrumbSchema, caseStudySchema, graphSchema, webPageSchema } from "@/schemas/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((caseStudy) => caseStudy.slug === slug);

  if (!item) {
    return {};
  }

  return metadataForPath(`/cases/${item.slug}`);
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = caseStudies.find((caseStudy) => caseStudy.slug === slug);

  if (!item) {
    notFound();
  }

  const Icon = item.icon;
  const schema = graphSchema([
    webPageSchema({
      path: `/cases/${item.slug}`,
      name: item.title,
      description: item.summary,
      primaryImage: absoluteUrl(item.image)
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Website design", path: "/cases" },
      { name: item.sector, path: `/cases/${item.slug}` }
    ]),
    caseStudySchema(item)
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <article className="container py-12 md:py-20">
        <Link className="focus-ring inline-flex items-center text-sm font-extrabold text-orange" href="/cases">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Terug naar website designs
        </Link>

        <header className="mt-8 grid gap-8 lg:grid-cols-[0.96fr_0.48fr] lg:items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              {item.category} / {item.sector}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-[-0.035em] text-navy md:text-6xl">
              {item.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{item.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-green-soft px-4 py-2 text-sm font-extrabold text-navy">
                Focus: {item.focus}
              </span>
              <span className="rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-muted">
                Concept: {item.projectName}
              </span>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-orange-soft bg-peach p-6 shadow-sm">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-orange shadow-sm">
              <Icon className="h-6 w-6" strokeWidth={2.1} />
            </span>
            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.14em] text-orange">
              Transparantie
            </p>
            <p className="mt-3 text-sm font-semibold leading-7 text-ink">{item.disclosure}</p>
          </aside>
        </header>

        <figure className="mt-12 overflow-hidden rounded-[2rem] border border-black/[0.05] bg-white p-3 shadow-card md:p-5">
          <img
            alt={item.imageAlt}
            className="h-auto w-full rounded-[1.35rem]"
            height={item.imageHeight}
            loading="eager"
            src={item.image}
            width={item.imageWidth}
          />
          <figcaption className="px-2 pb-2 pt-5 text-sm leading-6 text-muted md:px-3">
            Concept homepage voor {item.projectName}. Visual toont ontwerpkeuzes en illustratieve inhoud, geen live website of gemeten klantresultaten.
          </figcaption>
        </figure>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.4fr]">
          <div className="grid gap-10">
            <section className="grid gap-5 rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-sm md:grid-cols-3 md:p-9">
              {[
                { title: "Voor wie", text: item.audience },
                { title: "Ontwerpvraag", text: item.challenge },
                { title: "Doel", text: item.objective }
              ].map((block) => (
                <div key={block.title}>
                  <h2 className="text-sm font-extrabold uppercase tracking-[0.12em] text-blue">{block.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{block.text}</p>
                </div>
              ))}
            </section>

            <section>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
                Designstrategie
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy">
                Hoe dit websiteconcept is opgebouwd
              </h2>
              <div className="mt-7 grid gap-4">
                {item.approach.map((decision, index) => (
                  <article className="grid gap-4 rounded-2xl border border-black/[0.05] bg-white p-6 shadow-sm sm:grid-cols-[auto_1fr]" key={decision.title}>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-soft text-sm font-black text-orange">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold text-navy">{decision.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{decision.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-sm md:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
                SEO, AEO en GEO
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy">
                Vindbaarheid begint in de paginastructuur
              </h2>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {item.seoDecisions.map((decision) => (
                  <article className="rounded-2xl bg-cream/70 p-5" key={decision.title}>
                    <h3 className="font-extrabold text-navy">{decision.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{decision.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
                Conversie
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy">
                Keuzes die contact logischer maken
              </h2>
              <ul className="mt-6 grid gap-4">
                {item.conversionChoices.map((choice) => (
                  <li className="flex gap-3 rounded-2xl border border-black/[0.05] bg-white p-5 text-sm font-semibold leading-7 text-ink shadow-sm" key={choice}>
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange" />
                    {choice}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="h-fit rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-sm lg:sticky lg:top-28">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue">
              Jouw website
            </p>
            <h2 className="mt-4 text-2xl font-extrabold text-navy">
              Ook een website laten ontwerpen die helder verkoopt?
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              We vertalen je diensten, doelgroep en groeidoel naar een websitebasis voor vertrouwen, vindbaarheid en aanvragen.
            </p>
            <Link className="focus-ring mt-7 inline-flex items-center rounded-xl bg-orange px-5 py-3 text-sm font-bold text-white shadow-orange transition hover:bg-orange-dark" href="/contact">
              Bespreek je website
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </aside>
        </div>
      </article>
      <RelatedLinks links={relatedLinksByPath[`/cases/${item.slug}`] ?? []} title="Diensten voor dit ontwerpdoel" />
    </main>
  );
}
