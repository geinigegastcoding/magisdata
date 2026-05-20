import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Gauge, Lightbulb, Route, TrendingUp } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { caseStudies } from "@/content/pages";
import { metadataForPath } from "@/content/seo";
import { breadcrumbSchema, collectionPageSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/cases");

const resultTypes = [
  {
    title: "Heldere propositie",
    text: "Bezoekers snappen sneller waarvoor ze bij je moeten zijn.",
    icon: Lightbulb
  },
  {
    title: "Sterkere route naar contact",
    text: "Mobiele bezoekers vinden sneller de volgende stap.",
    icon: Route
  },
  {
    title: "Betere groeibasis",
    text: "Content, techniek en structuur worden makkelijker uit te bouwen.",
    icon: Gauge
  }
];

export default function CaseStudiesPage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/cases",
      name: "Cases",
      description: metadata.description ?? ""
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Cases", path: "/cases" }
    ]),
    collectionPageSchema({
      path: "/cases",
      name: "Cases",
      description: metadata.description ?? "",
      items: caseStudies.map((item) => ({
        name: item.title,
        path: `/cases/${item.slug}`
      }))
    })
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Cases", path: "/cases" }
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Cases
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-normal text-navy md:text-6xl">
              Werk dat strategie zichtbaar maakt
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Deze voorbeelden laten zien hoe een betere website geen abstract project is. Het gaat om duidelijkere keuzes, meer vertrouwen en een route die bezoekers graag volgen.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-orange transition hover:bg-orange-dark" href="/contact">
                Bespreek een vergelijkbaar vraagstuk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition hover:border-orange-soft hover:bg-peach hover:text-orange" href="/diensten">
                Ga naar diensten
              </Link>
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-black/[0.05] bg-white p-6 shadow-card">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-green-soft text-green">
                <TrendingUp className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-navy">Wat alle cases gemeen hebben</p>
                <p className="mt-1 text-sm leading-6 text-muted">Minder ruis, meer richting, betere beslissingen.</p>
              </div>
            </div>
            <div className="grid gap-3">
              {resultTypes.map(({ icon: Icon, ...item }) => (
                <div className="grid gap-3 rounded-2xl bg-peach p-4 md:grid-cols-[auto_1fr] md:items-start" key={item.title}>
                  <Icon className="mt-1 h-5 w-5 text-orange" />
                  <div>
                    <p className="font-extrabold text-navy">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Praktijkvoorbeelden
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy md:text-4xl">
              Herkenbare vraagstukken, concreet opgelost.
            </h2>
          </div>
          <div className="mt-10 grid gap-6">
            {caseStudies.map(({ icon: Icon, ...item }, index) => (
              <article className="grid gap-6 rounded-[2rem] border border-black/[0.05] bg-cream/50 p-6 shadow-sm md:grid-cols-[0.28fr_1fr_auto] md:items-center md:p-7" key={item.slug}>
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-soft text-orange">
                    <Icon className="h-7 w-7" strokeWidth={2.1} />
                  </span>
                  <span className="text-sm font-black text-soft">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-normal text-navy">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{item.summary}</p>
                  <p className="mt-4 inline-flex rounded-full bg-green-soft px-4 py-2 text-sm font-extrabold text-navy">
                    {item.result}
                  </p>
                </div>
                <Link className="focus-ring inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-orange shadow-sm transition hover:bg-peach" href={`/cases/${item.slug}`}>
                  Bekijk aanpak <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Wat je kunt meenemen
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Een goede case is geen trofee. Het is een routekaart.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              "De beste verbeteringen beginnen vaak met duidelijkere taal.",
              "SEO werkt sterker wanneer servicepagina's echt helpen bij keuzes.",
              "Conversie stijgt wanneer bewijs, contact en verwachting dicht bij elkaar staan."
            ].map((lesson) => (
              <div className="flex gap-3 rounded-2xl border border-black/[0.05] bg-white p-5 shadow-sm" key={lesson}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <p className="text-sm font-semibold leading-6 text-ink">{lesson}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Wat cases laten zien
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Resultaat ontstaat meestal door meerdere kleine verbeteringen tegelijk.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Een case is niet alleen bewijs dat iets mooier werd. Het laat zien welke keuzes verschil maakten: scherpere taal, betere structuur, duidelijker bewijs en een kortere route naar contact.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Voor de bezoeker", "De pagina moet sneller antwoord geven op de vraag: begrijp ik dit bedrijf en vertrouw ik het genoeg om contact op te nemen?"],
              ["Voor Google", "Heldere koppen, relevante tekst en interne links maken duidelijk bij welke diensten en zoekvragen het bedrijf past."],
              ["Voor verkoop", "Betere verwachtingen zorgen voor aanvragen die vaker passen bij het aanbod, de prijs en de werkwijze."],
              ["Voor groei", "Een duidelijke websitebasis maakt latere SEO, content en advertenties goedkoper en eenvoudiger."]
            ].map(([title, text]) => (
              <article className="rounded-2xl border border-black/[0.05] bg-cream/50 p-5 shadow-sm" key={title}>
                <h3 className="font-extrabold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-orange-soft bg-gradient-to-br from-peach via-yellow-soft to-green-soft/60 py-14 md:py-20">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Volgende stap
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-normal text-navy">
              Wat kunnen we aan jouw website slimmer, duidelijker of beter vindbaar maken?
            </h2>
          </div>
          <Link className="focus-ring inline-flex shrink-0 items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-orange transition hover:bg-orange-dark" href="/contact">
            Vraag groeiscan aan
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
