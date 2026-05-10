import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { caseStudies } from "@/content/site-content";
import { site } from "@/lib/site";
import { baseGraph } from "@/schemas/structured-data";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.description,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: study.title,
      description: study.description,
      url: `${site.url}/case-studies/${study.slug}`
    }
  };
}

export default async function CaseStudyPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <>
      <JsonLd data={baseGraph(`/case-studies/${study.slug}`)} />
      <main>
        <article className="container max-w-5xl pb-20 pt-36 md:pt-44">
          <Badge>Case</Badge>
          <h1 className="mt-6 text-balance font-satoshi text-5xl font-semibold leading-tight text-bone md:text-7xl">
            {study.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-bone/66">{study.description}</p>
          <div className="mt-10 overflow-hidden rounded-md border border-bone/10 bg-steel shadow-premium">
            <Image
              alt={study.image.alt}
              className="aspect-[16/9] w-full object-cover"
              height={788}
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              src={study.image.src}
              width={1400}
            />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {study.tags.map((tag) => (
              <Card key={tag}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                  Focus
                </p>
                <h2 className="mt-5 font-satoshi text-xl font-semibold text-bone">{tag}</h2>
              </Card>
            ))}
          </div>
          <Card className="mt-10 bg-steel/50 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Resultaat
            </p>
            <p className="mt-4 text-2xl leading-tight text-bone">{study.outcome}</p>
          </Card>
        </article>
        <CtaSection />
      </main>
    </>
  );
}
