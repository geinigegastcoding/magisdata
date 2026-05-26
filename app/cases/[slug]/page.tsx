import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
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
  const item = caseStudies.find((project) => project.slug === slug);

  if (!item) {
    return {};
  }

  return metadataForPath(`/cases/${item.slug}`);
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const index = caseStudies.findIndex((project) => project.slug === slug);
  const item = caseStudies[index];

  if (!item) {
    notFound();
  }

  const previous = caseStudies[(index + caseStudies.length - 1) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const schema = graphSchema([
    webPageSchema({
      path: `/cases/${item.slug}`,
      name: item.title,
      description: item.summary,
      primaryImage: absoluteUrl(item.image)
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Portfolio", path: "/cases" },
      { name: item.sector, path: `/cases/${item.slug}` }
    ]),
    caseStudySchema(item)
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <article className="container py-10 md:py-16">
        <Link className="focus-ring inline-flex items-center text-sm font-extrabold text-orange" href="/cases">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Terug naar portfolio
        </Link>

        <header className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div className="pt-2">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Portfolio / {item.sector}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight text-navy md:text-6xl">
              {item.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{item.summary}</p>
            <dl className="mt-9 grid max-w-2xl gap-5 border-y border-line py-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-soft">Project</dt>
                <dd className="mt-2 font-extrabold text-navy">{item.projectName}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-soft">Sector</dt>
                <dd className="mt-2 font-extrabold text-navy">{item.sector}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-soft">Focus</dt>
                <dd className="mt-2 font-extrabold text-navy">{item.focus}</dd>
              </div>
            </dl>
          </div>

          <figure className="overflow-hidden rounded-[1.5rem] border border-line bg-white p-3">
            <img
              alt={item.imageAlt}
              className="h-[30rem] w-full rounded-xl object-cover object-top md:h-[34rem]"
              height={item.imageHeight}
              loading="eager"
              src={item.image}
              width={item.imageWidth}
            />
            <figcaption className="flex items-center justify-between gap-4 px-2 pb-1 pt-4 text-sm text-muted">
              <span>Homepage ontwerp voor {item.projectName}</span>
              <Link className="focus-ring shrink-0 font-bold text-orange" href="#volledig-ontwerp">
                Hele ontwerp
              </Link>
            </figcaption>
          </figure>
        </header>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.78fr_1fr]">
          <section>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">Achtergrond</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">Wat ik wilde neerzetten</h2>
          </section>
          <div className="grid gap-5 text-base leading-8 text-muted">
            {item.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <section className="mt-14 grid gap-5 rounded-[1.75rem] border border-line bg-white p-6 md:grid-cols-3 md:p-8">
          {[
            { title: "Voor wie", text: item.audience },
            { title: "Ontwerpvraag", text: item.challenge },
            { title: "Doel van het ontwerp", text: item.objective }
          ].map((block) => (
            <div key={block.title}>
              <h2 className="text-sm font-extrabold uppercase tracking-[0.12em] text-blue">{block.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{block.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">Ontwerpkeuzes</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy">Hoe ik de pagina heb opgebouwd</h2>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {item.approach.map((decision, decisionIndex) => (
              <article className="rounded-2xl border border-line bg-white p-6" key={decision.title}>
                <span className="text-sm font-black text-orange">0{decisionIndex + 1}</span>
                <h3 className="mt-4 text-lg font-extrabold text-navy">{decision.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{decision.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-7 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-line bg-white p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">Vindbaarheid</p>
            <h2 className="mt-3 text-2xl font-extrabold text-navy">SEO, AEO en GEO in het ontwerp</h2>
            <div className="mt-6 grid gap-5">
              {item.seoDecisions.map((decision) => (
                <article key={decision.title}>
                  <h3 className="font-extrabold text-navy">{decision.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{decision.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-line bg-white p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">Gebruikservaring</p>
            <h2 className="mt-3 text-2xl font-extrabold text-navy">Interactiekeuzes</h2>
            <ul className="mt-6 grid gap-4">
              {item.conversionChoices.map((choice) => (
                <li className="border-l-2 border-orange-soft pl-4 text-sm leading-7 text-muted" key={choice}>
                  {choice}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-14 grid gap-8 border-y border-line py-10 lg:grid-cols-[0.52fr_1fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">Reflectie</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">Wat ik leerde</h2>
          </div>
          <div className="grid gap-5">
            {item.learnings.map((learning, learningIndex) => (
              <article className="flex gap-5" key={learning}>
                <span className="text-sm font-black text-orange">0{learningIndex + 1}</span>
                <p className="text-base leading-8 text-muted">{learning}</p>
              </article>
            ))}
          </div>
        </section>

        <figure className="mt-14" id="volledig-ontwerp">
          <div className="mb-6 max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">Volledig ontwerp</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">De uitgewerkte homepage</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Hieronder staat het volledige webdesign zodat ritme, sectievolgorde en visuele details samen beoordeeld kunnen worden.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white p-3 md:p-5">
            <img alt={item.imageAlt} className="h-auto w-full rounded-xl" height={item.imageHeight} loading="lazy" src={item.image} width={item.imageWidth} />
          </div>
        </figure>

        <nav aria-label="Portfolio projecten" className="mt-14 grid gap-4 border-t border-line pt-8 md:grid-cols-2">
          <Link className="focus-ring group rounded-2xl border border-line bg-white p-5" href={`/cases/${previous.slug}`}>
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.12em] text-soft">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Vorig project
            </span>
            <span className="mt-3 block text-lg font-extrabold text-navy group-hover:text-orange">{previous.projectName}</span>
            <span className="mt-1 block text-sm text-muted">{previous.sector}</span>
          </Link>
          <Link className="focus-ring group rounded-2xl border border-line bg-white p-5 text-right" href={`/cases/${next.slug}`}>
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.12em] text-soft">
              Volgend project
              <ArrowRight className="ml-1 h-4 w-4" />
            </span>
            <span className="mt-3 block text-lg font-extrabold text-navy group-hover:text-orange">{next.projectName}</span>
            <span className="mt-1 block text-sm text-muted">{next.sector}</span>
          </Link>
        </nav>
      </article>
    </main>
  );
}
