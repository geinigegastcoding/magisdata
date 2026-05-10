import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading, SectionShell } from "@/components/section";
import { Card } from "@/components/ui/card";
import { visualAssets } from "@/content/site-content";
import { site } from "@/lib/site";
import { baseGraph } from "@/schemas/structured-data";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Lees hoe MagisData digitale infrastructuur, autoriteit, AI-vindbaarheid en premium strategische websites benadert.",
  alternates: { canonical: "/about" },
  openGraph: { title: "Over MagisData", url: `${site.url}/about` }
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={baseGraph("/about")} />
      <main>
        <section className="border-b border-bone/10 pb-20 pt-36 md:pt-44">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Over ons"
              title="MagisData bouwt systemen, geen digitale decoratie."
              description="MagisData bestaat voor ambitieuze bedrijven die een digitale aanwezigheid willen die vertrouwen, zichtbaarheid, automatisering en langetermijnschaalbaarheid ondersteunt."
            />
            <div className="rounded-md border border-bone/10 bg-steel/60 p-3 shadow-premium">
              <Image
                alt={visualAssets.meeting.alt}
                className="h-auto w-full rounded-md"
                height={875}
                sizes="(min-width: 1024px) 48vw, 100vw"
                src={visualAssets.meeting.src}
                width={1400}
              />
            </div>
          </div>
        </section>
        <SectionShell>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Strategisch", "Elke pagina, boodschap, schema-laag en conversieroute is gekoppeld aan een zakelijk doel."],
              ["Engineered", "Het werk is gestructureerd rond performance, schaalbaarheid, semantische duidelijkheid en onderhoudbare systemen."],
              ["Premium", "De merkervaring gebruikt terughoudendheid, hiërarchie en vertrouwen in plaats van hype of visuele ruis."]
            ].map(([title, text]) => (
              <Card key={title}>
                <h2 className="font-satoshi text-2xl font-semibold text-bone">{title}</h2>
                <p className="mt-5 text-sm leading-7 text-bone/62">{text}</p>
              </Card>
            ))}
          </div>
        </SectionShell>
        <SectionShell className="border-y border-bone/10 bg-steel/35">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Overtuiging
            </p>
            <h2 className="mt-5 font-satoshi text-3xl font-semibold leading-tight text-bone md:text-5xl">
              Autoriteit ontstaat niet door harder design. Autoriteit ontstaat door helderdere systemen.
            </h2>
            <p className="mt-6 text-lg leading-8 text-bone/62">
              MagisData combineert premium design, technische implementatie,
              SEO/GEO/AEO-structuur, AI-integratie en conversiestrategie zodat
              een website een duurzaam groei-asset wordt in plaats van een
              tijdelijke marketinglaag.
            </p>
          </div>
        </SectionShell>
        <CtaSection />
      </main>
    </>
  );
}
