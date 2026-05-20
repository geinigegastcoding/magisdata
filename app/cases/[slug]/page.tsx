import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { RelatedLinks } from "@/components/related-links";
import { relatedLinksByPath } from "@/content/internal-links";
import { caseStudies } from "@/content/pages";
import { metadataForPath } from "@/content/seo";
import { breadcrumbSchema, caseStudySchema, graphSchema, webPageSchema } from "@/schemas/seo";

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
      description: item.summary
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Cases", path: "/cases" },
      { name: item.title, path: `/cases/${item.slug}` }
    ]),
    caseStudySchema(item)
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <article className="container py-16 md:py-24">
        <Link className="focus-ring inline-flex items-center text-sm font-extrabold text-orange" href="/cases">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Terug naar cases
        </Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.42fr]">
          <div className="rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-sm md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Case study
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-[-0.035em] text-navy md:text-6xl">
              {item.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">{item.summary}</p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Probleem",
                  text: "Bezoekers begrepen niet snel genoeg wat het bedrijf bood en waarom het betrouwbaar was."
                },
                {
                  title: "Aanpak",
                  text: "We maakten de boodschap scherper, verbeterden pagina's en maakten contact opnemen makkelijker."
                },
                {
                  title: "Resultaat",
                  text: item.result
                }
              ].map((block) => (
                <section className="rounded-2xl bg-peach p-5" key={block.title}>
                  <h2 className="text-base font-extrabold text-navy">{block.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{block.text}</p>
                </section>
              ))}
            </div>

            <section className="mt-10">
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-navy">
                Wat ondernemers hiervan kunnen leren
              </h2>
              <ul className="mt-6 grid gap-4">
                {[
                  "Een website moet eerst duidelijk zijn, daarna pas mooi.",
                  "Mensen nemen sneller contact op als de volgende stap rustig en zichtbaar is.",
                  "Bewijs, voorbeelden en simpele uitleg maken een bedrijf betrouwbaarder."
                ].map((lesson) => (
                  <li className="flex gap-3 text-sm font-semibold leading-6 text-ink" key={lesson}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    {lesson}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10 rounded-2xl border border-black/[0.05] bg-cream/60 p-6">
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-navy">
                Waarom deze aanpak werkt voor vindbaarheid en vertrouwen
              </h2>
              <div className="mt-5 grid gap-5 text-sm leading-7 text-muted md:grid-cols-2">
                <p>
                  Zoekmachines hebben context nodig om te begrijpen waar een bedrijf relevant voor is. Duidelijke servicepagina's, concrete probleemomschrijvingen en interne links helpen daarbij meer dan algemene marketingclaims.
                </p>
                <p>
                  Bezoekers hebben dezelfde behoefte. Ze willen snel zien of het bedrijf hun situatie begrijpt, hoe de samenwerking werkt en welke volgende stap logisch is. Daarom combineren we SEO-structuur altijd met duidelijke uitleg en conversie.
                </p>
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-sm">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-green-soft text-green">
              <Icon className="h-7 w-7" strokeWidth={2.1} />
            </span>
            <h2 className="mt-6 text-xl font-extrabold text-navy">Wil je dit ook verbeteren?</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              We kijken graag naar je huidige website en geven aan welke verbeteringen het meest logisch zijn.
            </p>
            <Link className="focus-ring mt-6 inline-flex items-center rounded-xl bg-orange px-5 py-3 text-sm font-bold text-white" href="/contact">
              Vraag groeiscan aan
            </Link>
          </aside>
        </div>
      </article>
      <RelatedLinks links={relatedLinksByPath[`/cases/${item.slug}`] ?? []} />
    </main>
  );
}
