import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading, SectionShell } from "@/components/section";
import { Card } from "@/components/ui/card";
import { caseStudies } from "@/content/site-content";
import { site } from "@/lib/site";
import { baseGraph } from "@/schemas/structured-data";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Geselecteerde MagisData cases rond autoriteitsplatforms, AI-ready zoekarchitectuur en digitale infrastructuursystemen.",
  alternates: { canonical: "/case-studies" },
  openGraph: { title: "MagisData cases", url: `${site.url}/case-studies` }
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={baseGraph("/case-studies")} />
      <main>
        <section className="border-b border-bone/10 pb-20 pt-36 md:pt-44">
          <div className="container">
            <SectionHeading
              eyebrow="Cases"
              title="Infrastructuurpatronen voor autoriteit en zichtbaarheid."
              description="Case-architectuur voor het type strategische systemen dat MagisData bouwt: premium webplatformen, AI-leesbare zoekstructuren en conversiepaden."
            />
          </div>
        </section>
        <SectionShell>
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Link href={`/case-studies/${study.slug}`} key={study.slug}>
                <Card className="group h-full p-8">
                  <div className="-mx-8 -mt-8 mb-8 overflow-hidden rounded-t-md">
                    <Image
                      alt={study.image.alt}
                      className="aspect-[16/9] w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.03]"
                      height={788}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      src={study.image.src}
                      width={1400}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        className="rounded-md border border-amber/20 bg-amber/8 px-2.5 py-1 text-xs font-semibold text-amber"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-8 font-satoshi text-3xl font-semibold leading-tight text-bone">
                    {study.title}
                  </h2>
                  <p className="mt-5 leading-8 text-bone/62">{study.description}</p>
                  <p className="mt-5 text-sm leading-7 text-bone/50">{study.outcome}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber">
                    Bekijk case <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </SectionShell>
        <CtaSection />
      </main>
    </>
  );
}
