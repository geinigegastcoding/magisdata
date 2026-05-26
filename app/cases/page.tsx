import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Link2, PanelsTopLeft, Search } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { caseStudies } from "@/content/pages";
import { metadataForPath } from "@/content/seo";
import { breadcrumbSchema, collectionPageSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/cases");

const resultTypes = [
  {
    title: "Positionering",
    text: "Elke homepage vertelt direct voor wie het merk werkt en welke behoefte centraal staat.",
    icon: PanelsTopLeft
  },
  {
    title: "Vindbare structuur",
    text: "Diensten, vragen en thema's krijgen logische plekken voor SEO, AEO en GEO.",
    icon: Search
  },
  {
    title: "Conversieroute",
    text: "CTA's, bewijsblokken en contactmomenten zijn ontworpen rond bezoekersintentie.",
    icon: Link2
  }
];

export default function CaseStudiesPage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/cases",
      name: "Website design portfolio",
      description: metadata.description ?? ""
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Website design", path: "/cases" }
    ]),
    collectionPageSchema({
      path: "/cases",
      name: "Website design portfolio",
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
          { name: "Website design", path: "/cases" }
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Website design
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-normal text-navy md:text-6xl">
              Websiteconcepten ontworpen voor vertrouwen, vindbaarheid en actie
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Vier portfolio-ontwerpen voor verschillende bedrijven en platforms. Geen verzonnen klantresultaten, maar concrete voorbeelden van hoe MagisData structuur, uitstraling, SEO en conversie samen ontwerpt.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-orange transition hover:bg-orange-dark" href="/contact">
                Bespreek jouw website
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition hover:border-orange-soft hover:bg-peach hover:text-orange" href="/diensten">
                Bekijk onze diensten
              </Link>
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-black/[0.05] bg-white p-6 shadow-card">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-green-soft text-green">
                <FileText className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-navy">Portfolio met transparante context</p>
                <p className="mt-1 text-sm leading-6 text-muted">Conceptdesigns tonen aanpak en keuzes, niet geclaimde klantprestaties.</p>
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
              Portfolio ontwerpen
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy md:text-4xl">
              Vier branches, vier doordachte website-richtingen.
            </h2>
          </div>
          <div className="mt-10 grid gap-6">
            {caseStudies.map(({ icon: Icon, ...item }, index) => (
              <article className="grid gap-6 overflow-hidden rounded-[2rem] border border-black/[0.05] bg-cream/50 p-5 shadow-sm lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:p-6" key={item.slug}>
                <div className="relative overflow-hidden rounded-[1.45rem] border border-black/[0.05] bg-white">
                  <img
                    alt={item.imageAlt}
                    className="aspect-[16/10] w-full object-cover object-top"
                    height={item.imageHeight}
                    loading={index === 0 ? "eager" : "lazy"}
                    src={item.image}
                    width={item.imageWidth}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-soft text-orange">
                      <Icon className="h-5 w-5" strokeWidth={2.1} />
                    </span>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue">
                      {item.category} / {item.sector} / 0{index + 1}
                    </p>
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold tracking-normal text-navy">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{item.summary}</p>
                  <p className="mt-4 inline-flex rounded-full bg-green-soft px-4 py-2 text-sm font-extrabold text-navy">
                    Focus: {item.focus}
                  </p>
                  <div className="mt-6">
                    <Link className="focus-ring inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-orange shadow-sm transition hover:bg-peach" href={`/cases/${item.slug}`}>
                      Bekijk designcase <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
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
              Een goed ontwerp maakt keuzes uitlegbaar.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              "Visuele stijl werkt pas wanneer aanbod en doelgroep meteen helder zijn.",
              "SEO wordt sterker wanneer diensten, vragen en interne links logisch zijn ingericht.",
              "Conversie begint bij een duidelijke vervolgstap, niet bij onbewezen resultaatclaims."
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
              Wat ontwerpen laten zien
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Wat wij in een website design bewust uitwerken.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Deze concepten laten het denkwerk achter de pagina zien: welke informatie eerst komt, hoe bezoekers kiezen en hoe een site later vindbaar en uitbreidbaar wordt.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Voor bezoekers", "Een homepage moet snel duidelijk maken wat het bedrijf biedt, voor wie en welke volgende stap logisch is."],
              ["Voor zoekmachines", "Heldere koppen, dienstclusters en interne links geven context rond onderwerp en zoekintentie."],
              ["Voor AI-antwoorden", "FAQ's, processen en concrete uitleg maken informatie beter interpreteerbaar en citeerbaar."],
              ["Voor aanvragen", "CTA's worden geplaatst waar bezoekers voldoende context hebben om contact serieus te overwegen."]
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
              Welke website kunnen we voor jouw bedrijf doordacht ontwerpen?
            </h2>
          </div>
          <Link className="focus-ring inline-flex shrink-0 items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-orange transition hover:bg-orange-dark" href="/contact">
            Start websitegesprek
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
