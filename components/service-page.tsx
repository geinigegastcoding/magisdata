import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading, SectionShell } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { servicePages } from "@/content/site-content";
import { serviceGraph } from "@/schemas/structured-data";

export function ServicePage({ slug }: { slug: (typeof servicePages)[number]["slug"] }) {
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) {
    return null;
  }

  const Icon = service.icon;

  return (
    <>
      <JsonLd data={serviceGraph(slug)} />
      <main>
        <section className="relative overflow-hidden border-b border-bone/10 pb-20 pt-36 md:pt-44">
          <div className="absolute inset-0 -z-10 surface-lines opacity-45" />
          <div className="container grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <Badge>{service.eyebrow}</Badge>
              <h1 className="mt-6 max-w-4xl text-balance font-satoshi text-5xl font-semibold leading-[1] text-bone md:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-bone/66">
                {service.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="amber">
                  <Link href="/contact">Bespreek deze dienst</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/services">Bekijk dienstenstructuur</Link>
                </Button>
              </div>
            </div>
            <Card className="overflow-hidden bg-steel/60 p-0">
              <Image
                alt={service.image.alt}
                className="aspect-[16/10] w-full object-cover"
                height={875}
                priority
                sizes="(min-width: 1024px) 32vw, 100vw"
                src={service.image.src}
                width={1400}
              />
              <div className="p-8">
              <Icon className="h-8 w-8 text-amber" />
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-bone/42">
                Primair resultaat
              </p>
              <p className="mt-3 font-satoshi text-2xl font-semibold leading-tight text-bone">
                {service.primaryOutcome}
              </p>
              </div>
            </Card>
          </div>
        </section>

        <SectionShell>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Scope"
              title="Ontworpen als strategische laag, niet als losse taak."
              description="Elke implementatie is gebouwd om duidelijkheid, zichtbaarheid, autoriteit en de volgende logische actie voor serieuze bezoekers te versterken."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {service.pillars.map((pillar) => (
                <Card key={pillar}>
                  <CheckCircle2 className="h-5 w-5 text-amber" />
                  <p className="mt-5 text-sm leading-7 text-bone/66">{pillar}</p>
                </Card>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell className="border-y border-bone/10 bg-steel/35">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <Card className="bg-graphite/70 p-8">
              <CardTitle>Hoe dit aansluit op het grotere systeem</CardTitle>
              <CardDescription className="mt-5">
                MagisData verbindt strategie, interface, content, performance,
                analytics, schema en automatisering zodat deze dienst bijdraagt
                aan sterkere bedrijfsinfrastructuur in plaats van een los
                onderdeel.
              </CardDescription>
              <Link className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber" href="/services">
                Bekijk alle infrastructuurlagen <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
            <div>
              <SectionHeading
                eyebrow="Vragen"
                title="Antwoorden per dienst."
                description="Heldere antwoorden helpen kopers en AI-systemen de dienst zonder dubbelzinnigheid begrijpen."
              />
              <div className="mt-8">
                <FaqList items={service.faqs} />
              </div>
            </div>
          </div>
        </SectionShell>

        <CtaSection title={`Bouw ${service.title.toLowerCase()} in je groei-infrastructuur.`} />
      </main>
    </>
  );
}
