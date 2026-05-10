import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading, SectionShell } from "@/components/section";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { insights } from "@/content/site-content";
import { site } from "@/lib/site";
import { baseGraph } from "@/schemas/structured-data";

export const metadata: Metadata = {
  title: "Inzichten",
  description:
    "Strategische inzichten over digitale infrastructuur, SEO, GEO, AEO, AI-vindbaarheid, premium positionering en conversiesystemen.",
  alternates: { canonical: "/insights" },
  openGraph: { title: "MagisData inzichten", url: `${site.url}/insights` }
};

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={baseGraph("/insights")} />
      <main>
        <section className="border-b border-bone/10 pb-20 pt-36 md:pt-44">
          <div className="container">
            <SectionHeading
              eyebrow="Inzichten"
              title="Zoekzichtbaarheid, AI-vindbaarheid en infrastructuurdenken."
              description="Gestructureerde artikelen voor ondernemers en leiders die helderdere positionering, sterkere zichtbaarheid en digitale systemen willen die blijven doorwerken."
            />
          </div>
        </section>
        <SectionShell>
          <div className="grid gap-4 md:grid-cols-3">
            {insights.map((post) => (
              <Link href={`/insights/${post.slug}`} key={post.slug}>
                <Card className="group h-full">
                  <div className="-mx-6 -mt-6 mb-6 overflow-hidden rounded-t-md">
                    <Image
                      alt={post.image.alt}
                      className="aspect-[16/10] w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.03]"
                      height={875}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      src={post.image.src}
                      width={1400}
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
                    {post.category}
                  </p>
                  <CardTitle className="mt-6">{post.title}</CardTitle>
                  <CardDescription className="mt-4">{post.description}</CardDescription>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber">
                    Lees artikel <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </SectionShell>
      </main>
    </>
  );
}
