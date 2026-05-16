import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { RelatedLinks } from "@/components/related-links";
import { relatedLinksByPath } from "@/content/internal-links";
import { insights } from "@/content/pages";
import { metadataForPath } from "@/content/seo";
import { articleSchema, breadcrumbSchema, graphSchema, webPageSchema } from "@/schemas/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const articleBodies: Record<string, string[]> = {
  "website-meer-aanvragen": [
    "Een website kan er netjes uitzien en toch weinig opleveren. Dat komt vaak doordat bezoekers te hard moeten nadenken. Ze zoeken snel antwoord op drie vragen: wat doe je, kan ik je vertrouwen en wat moet ik nu doen?",
    "Goede pagina's maken die vragen meteen duidelijk. De kop vertelt het belangrijkste voordeel. De tekst legt uit voor wie de dienst is. Bewijs zoals cases, reviews en concrete voorbeelden haalt twijfel weg.",
    "Daarna moet de volgende stap makkelijk zijn. Een contactknop, korte uitleg van het proces en duidelijke verwachtingen maken de drempel lager."
  ],
  "seo-zonder-jargon": [
    "SEO betekent dat je website beter vindbaar wordt voor mensen die al zoeken naar jouw dienst. De basis is minder technisch dan veel ondernemers denken.",
    "Je hebt pagina's nodig die echte klantvragen beantwoorden. Gebruik woorden die klanten zelf gebruiken. Leg je dienst uit alsof je met iemand aan tafel zit.",
    "Techniek blijft belangrijk, maar zonder duidelijke inhoud wordt SEO zwak. Een snelle website, logische koppen, goede links en nuttige antwoorden vormen samen het fundament."
  ],
  "ai-vindbaarheid": [
    "AI-systemen worden steeds vaker gebruikt om bedrijven te vergelijken of antwoorden samen te vatten. Daarom moet je website niet alleen mooi zijn, maar ook makkelijk te begrijpen.",
    "Beschrijf concreet wat je doet, voor wie je werkt, welke problemen je oplost en waarom je betrouwbaar bent. Vermijd vage claims die iedereen kan maken.",
    "Sterke FAQ's, cases, servicepagina's en consistente contactinformatie helpen AI-systemen en bezoekers om je bedrijf correct te plaatsen."
  ]
};

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = insights.find((insight) => insight.slug === slug);

  if (!item) {
    return {};
  }

  return metadataForPath(`/insights/${item.slug}`);
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = insights.find((insight) => insight.slug === slug);

  if (!item) {
    notFound();
  }

  const Icon = item.icon;
  const body = articleBodies[item.slug] ?? [];
  const schema = graphSchema([
    webPageSchema({
      path: `/insights/${item.slug}`,
      name: item.title,
      description: item.summary
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Inzichten", path: "/insights" },
      { name: item.title, path: `/insights/${item.slug}` }
    ]),
    articleSchema(item)
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <article className="container max-w-5xl py-16 md:py-24">
        <Link className="focus-ring inline-flex items-center text-sm font-extrabold text-orange" href="/insights">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Terug naar inzichten
        </Link>

        <div className="mt-8 rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-sm md:p-10">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-soft text-blue">
            <Icon className="h-7 w-7" strokeWidth={2.1} />
          </span>
          <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
            Inzicht
          </p>
          <p className="mt-3 text-sm font-semibold text-soft">
            Laatst bijgewerkt: {item.dateModified}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-[-0.035em] text-navy md:text-6xl">
            {item.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">{item.summary}</p>

          <div className="mt-10 grid gap-6 text-base leading-8 text-muted">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section className="mt-10 rounded-2xl bg-peach p-6">
            <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-navy">
              Simpele checklist
            </h2>
            <ul className="mt-5 grid gap-3">
              {[
                "Is binnen vijf seconden duidelijk wat je doet?",
                "Gebruik je woorden die klanten ook gebruiken?",
                "Is de volgende stap makkelijk te vinden?",
                "Beantwoord je de belangrijkste vragen voor contact?"
              ].map((item) => (
                <li className="flex gap-3 text-sm font-semibold leading-6 text-ink" key={item}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
      <RelatedLinks links={relatedLinksByPath[`/insights/${item.slug}`] ?? []} />
    </main>
  );
}
