import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { SectionHeading, SectionShell } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  benefits,
  caseStudies,
  faqs,
  homepageServices,
  insights,
  process,
  proofMetrics,
  visualAssets
} from "@/content/site-content";
import { homeGraph } from "@/schemas/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph()} />
      <main>
        <Hero />
        <StrategicPositioning />
        <Services />
        <Proof />
        <Process />
        <SearchInfrastructure />
        <FeaturedInsights />
        <FaqSection />
        <CtaSection />
      </main>
    </>
  );
}

function Hero() {
  const heroSignals = [
    "SEO, GEO en AEO in één structuur",
    "Performance-first gebouwd",
    "Ontworpen voor autoriteit"
  ];
  const heroCards = [
    {
      title: "Webontwikkeling",
      text: "Performance & UX",
      image: visualAssets.workspace
    },
    {
      title: "SEO/GEO/AEO",
      text: "Vindbaarheid in moderne search",
      image: visualAssets.architecture
    },
    {
      title: "AI-workflows",
      text: "Schaalbare processen",
      image: visualAssets.workflow
    }
  ];

  return (
    <section className="relative isolate overflow-hidden bg-graphite pb-14 pt-32 text-bone md:pb-20 md:pt-36">
      <div className="absolute inset-0 -z-10 surface-lines opacity-45" />
      <div className="absolute left-[8%] top-24 -z-10 h-80 w-80 rounded-full bg-amber/10 blur-3xl" />
      <div className="absolute inset-x-0 top-20 -z-10 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent" />
      <div className="container grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex rounded-md border border-amber/20 bg-amber/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-amber">
              Digitale infrastructuur voor bedrijven die willen leiden
            </span>
            <h1 className="mt-6 max-w-4xl text-balance font-satoshi text-5xl font-semibold leading-[0.98] text-bone md:text-7xl">
              Strategische digitale infrastructuur voor duurzame groei.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-bone/66">
              MagisData bouwt high-performance websites, SEO-systemen,
              GEO-optimalisatie en schaalbare digitale infrastructuur voor
              zichtbaarheid, autoriteit en langetermijngroei.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="amber">
                <Link href="/contact">
                  Plan strategiegesprek <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
              >
                <Link href="/services">Bekijk diensten</Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {heroSignals.map((signal) => (
                <div className="flex items-start gap-3" key={signal}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-amber" />
                  <p className="text-sm font-medium leading-6 text-bone/62">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="relative" delay={0.12}>
          <div className="relative min-h-[560px] lg:min-h-[610px]">
            <div className="absolute left-[5%] top-0 w-[78%] rounded-[1.25rem] border border-bone/10 bg-steel p-3 shadow-premium">
              <div className="rounded-t-[1rem] border border-bone/10 bg-graphite px-4 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-bone/55" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate" />
                </div>
              </div>
              <div className="overflow-hidden rounded-b-[1rem] border-x border-b border-bone/10 bg-graphite">
                <Image
                  alt={visualAssets.heroDashboard.alt}
                  className="aspect-[16/9] w-full object-cover"
                  height={788}
                  priority
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  src={visualAssets.heroDashboard.src}
                  width={1400}
                />
              </div>
              <div className="mx-auto h-3 w-[42%] rounded-b-xl bg-graphite/80" />
            </div>

            <div className="absolute right-0 top-24 w-[22%] min-w-28 rounded-[1.6rem] border border-bone/14 bg-graphite p-2 shadow-premium">
              <div className="overflow-hidden rounded-[1.1rem]">
                <Image
                  alt={visualAssets.architecture.alt}
                  className="aspect-[9/16] w-full object-cover"
                  height={900}
                  sizes="160px"
                  src={visualAssets.architecture.src}
                  width={506}
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 grid w-full grid-cols-3 gap-4 pr-[3%]">
              {heroCards.map(({ title, text, image }) => (
                <div
                  className="overflow-hidden rounded-md border border-bone/10 bg-steel shadow-premium"
                  key={title}
                >
                  <Image
                    alt={image.alt}
                    className="aspect-[16/10] w-full object-cover"
                    height={875}
                    sizes="(min-width: 1024px) 15vw, 33vw"
                    src={image.src}
                    width={1400}
                  />
                  <div className="p-4">
                    <p className="text-sm font-bold text-bone">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-bone/54">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container mt-10 grid gap-4 border-t border-bone/10 pt-8 sm:grid-cols-3">
        {proofMetrics.map((metric) => (
          <div className="flex items-start gap-4" key={metric.label}>
            <div className="grid h-10 w-10 flex-none place-items-center rounded-full border border-amber/30 text-sm font-bold text-amber">
              {metric.value}
            </div>
            <p className="text-sm leading-6 text-bone/58">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StrategicPositioning() {
  return (
    <SectionShell className="border-y border-bone/10 bg-graphite">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <SectionHeading
          eyebrow="Positionering"
          title="Gebouwd voor de volgende generatie zoekgedrag."
          description="Bedrijven concurreren niet meer alleen op Google-rankings. Ze concurreren ook in AI-antwoorden, semantische indexen, conversational search en LLM-retrieval. MagisData bouwt digitale ecosystemen die daarin helder, snel en betrouwbaar blijven."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Premium perceptie via terughoudend design, gestructureerde content en duidelijke hiërarchie.",
            "Technische SEO en semantische architectuur die zoekmachines elke kerndienst laten begrijpen.",
            "Antwoordklare contentblokken voor AI-samenvattingen, snippets en koperseducatie.",
            "Automatiseringsdenken waardoor de website kan aansluiten op CRM, rapportage en leadflows."
          ].map((item) => (
            <Card className="min-h-40" key={item}>
              <CheckCircle2 className="h-5 w-5 text-amber" />
              <p className="mt-5 text-sm leading-7 text-bone/68">{item}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function Services() {
  return (
    <SectionShell id="services">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Diensten"
          title="Infrastructuurlagen die elkaar versterken."
          description="Elke dienst is afzonderlijk waardevol. De sterkste resultaten ontstaan wanneer strategie, webontwikkeling, zoekarchitectuur, AI-readiness en conversie dezelfde marktpositie versterken."
        />
        <Button asChild variant="secondary">
          <Link href="/services">Bekijk alle diensten</Link>
        </Button>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {homepageServices.map((service) => {
          const Icon = service.icon;
          return (
            <Link href={service.href} key={service.href}>
              <Card className="group h-full transition hover:border-amber/35 hover:bg-bone/[0.055]">
                <div className="-mx-6 -mt-6 mb-6 overflow-hidden rounded-t-md">
                  <Image
                    alt={service.image.alt}
                    className="aspect-[16/10] w-full object-cover opacity-[0.82] transition duration-500 group-hover:scale-[1.03]"
                    height={875}
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    src={service.image.src}
                    width={1400}
                  />
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-md border border-bone/10 bg-graphite text-amber">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-8">{service.title}</CardTitle>
                <CardDescription className="mt-4">{service.description}</CardDescription>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber">
                  Bekijk dienst <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Card>
            </Link>
          );
        })}
      </div>
    </SectionShell>
  );
}

function Proof() {
  return (
    <SectionShell className="border-y border-bone/10 bg-steel/55 text-bone">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            Voordelen
          </p>
          <h2 className="mt-5 font-satoshi text-3xl font-semibold leading-tight md:text-5xl">
            Premium infrastructuur verandert hoe kopers je beoordelen.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article className="overflow-hidden rounded-md border border-bone/10 bg-graphite shadow-line" key={benefit.title}>
                <Image
                  alt={benefit.image.alt}
                  className="aspect-[16/10] w-full object-cover"
                  height={875}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={benefit.image.src}
                  width={1400}
                />
                <div className="p-6">
                <Icon className="h-6 w-6 text-amber" />
                <h3 className="mt-8 font-satoshi text-xl font-semibold text-bone">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-7 text-bone/62">{benefit.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

function Process() {
  return (
    <SectionShell id="process">
      <SectionHeading
        centered
        eyebrow="Werkwijze"
        title="Rustige uitvoering. Strategische volgorde."
        description="Het proces vermindert onduidelijkheid vóór design begint en vertaalt die helderheid daarna naar een snel, gestructureerd en meetbaar digitaal systeem."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {process.map((item) => {
          const Icon = item.icon;
          return (
            <Card className="relative overflow-hidden" key={item.step}>
              <span className="absolute right-6 top-5 font-satoshi text-5xl font-semibold text-bone/[0.035]">
                {item.step}
              </span>
              <Icon className="h-6 w-6 text-amber" />
              <CardTitle className="mt-10">{item.title}</CardTitle>
              <CardDescription className="mt-4">{item.description}</CardDescription>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}

function SearchInfrastructure() {
  return (
    <SectionShell className="relative overflow-hidden border-y border-bone/10 bg-steel/35">
      <div className="absolute inset-0 surface-lines opacity-35" />
      <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionHeading
          eyebrow="SEO + GEO + AEO"
          title="Gebouwd voor zoekmachines, antwoordmachines en AI-retrieval."
          description="Moderne zichtbaarheid is versplinterd. MagisData structureert pagina's zodat Google, Bing, ChatGPT, Perplexity, Claude en Gemini begrijpen wat je doet, voor wie je werkt en waarom je betrouwbaar bent."
        />
        <div className="grid gap-3">
          {[
            ["SEO", "Technische basis, contenthiërarchie, interne links, metadata, sitemap, robots en performance."],
            ["GEO", "Entiteitenduidelijkheid, retrieval-vriendelijke dienstenblokken, autoritatieve inzichten en merkcontext."],
            ["AEO", "Beknopte definities, FAQ-architectuur, directe antwoorden en semantische secties voor extractie."]
          ].map(([label, text]) => (
            <div className="grid gap-4 rounded-md border border-bone/10 bg-graphite/60 p-5 md:grid-cols-[5rem_1fr]" key={label}>
              <span className="font-satoshi text-xl font-semibold text-amber">{label}</span>
              <p className="text-sm leading-7 text-bone/62">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function FeaturedInsights() {
  return (
    <SectionShell id="insights">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Inzichten"
          title="Strategisch denken voor de volgende vindbaarheidslaag."
          description="Beknopte, gestructureerde artikelen die kopers, zoekmachines en AI-systemen helpen met duidelijke uitleg."
        />
        <Button asChild variant="secondary">
          <Link href="/insights">Alle inzichten</Link>
        </Button>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-3">
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
                Lees inzicht <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}

function FaqSection() {
  return (
    <SectionShell className="bg-graphite" id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Heldere antwoorden voor serieuze kopers."
          description="Korte, gestructureerde antwoorden helpen bezoekers het aanbod snel begrijpen en ondersteunen AI-extractie zonder visuele ruis."
        />
        <FaqList items={faqs} />
      </div>
    </SectionShell>
  );
}
