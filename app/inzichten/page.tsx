import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, FileText, Gauge, LayoutTemplate, Search, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaProof } from "@/components/cta-proof";
import { JsonLd } from "@/components/json-ld";
import { insights } from "@/content/pages";
import { metadataForPath } from "@/content/seo";
import { breadcrumbSchema, collectionPageSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/inzichten");

const clusters = [
  {
    title: "SEO zonder mist",
    text: "Hoe je pagina's bouwt rond echte zoekvragen en duidelijke intentie.",
    href: "/seo-diensten",
    icon: Search
  },
  {
    title: "AI-vindbaarheid",
    text: "Waarom GEO en AEO belangrijk worden voor bedrijven die correct genoemd willen worden.",
    href: "/geo-optimalisatie",
    icon: Bot
  },
  {
    title: "Website als systeem",
    text: "Wat conversie, snelheid, content en vertrouwen met elkaar te maken hebben.",
    href: "/webontwikkeling",
    icon: LayoutTemplate
  },
  {
    title: "Performance en keuzes",
    text: "Hoe je digitale groei praktisch maakt zonder verdwaald te raken in losse acties.",
    href: "/strategisch-advies",
    icon: Gauge
  }
];

export default function InsightsPage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/inzichten",
      name: "Inzichten",
      description: metadata.description ?? ""
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Inzichten", path: "/inzichten" }
    ]),
    collectionPageSchema({
      path: "/inzichten",
      name: "Inzichten",
      description: metadata.description ?? "",
      items: insights.map((item) => ({
        name: item.title,
        path: `/inzichten/${item.slug}`
      }))
    })
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Inzichten", path: "/inzichten" }
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Inzichten
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-normal text-navy md:text-6xl">
              Heldere inzichten over vindbaarheid, AI en digitale groei
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Voor ondernemers die betere online keuzes willen maken. Geen technische show, maar uitleg die je helpt begrijpen wat je website vandaag nodig heeft en wat later kan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-dark" href="/contact">
                Vertaal dit naar je website
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition hover:border-orange-soft hover:bg-peach hover:text-orange" href="/cases">
                Bekijk portfolio
              </Link>
            </div>
            <CtaProof className="mt-5" />
          </div>

          <div className="rounded-[2rem] border border-line bg-white p-6 shadow-card">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-soft text-blue">
                <FileText className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-navy">Leesroute voor betere keuzes</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Begin breed, kies een thema, vertaal daarna naar uitvoering.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {["Begrijp wat blokkeert", "Kies de juiste groeilaag", "Maak je website duidelijker"].map((step, index) => (
                <div className="flex items-center gap-3 rounded-2xl bg-peach px-4 py-3 text-sm font-extrabold text-ink" key={step}>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-orange text-xs font-black text-white">
                    {index + 1}
                  </span>
                  {step}
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
              Artikelen
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy md:text-4xl">
              Praktische uitleg die je direct aan je eigen website kunt spiegelen.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {insights.map(({ icon: Icon, ...item }) => (
              <article className="flex min-h-[360px] flex-col rounded-[2rem] border border-line bg-cream/50 p-7 shadow-sm" key={item.slug}>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-soft text-blue">
                  <Icon className="h-7 w-7" strokeWidth={2.1} />
                </span>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.14em] text-soft">
                  Bijgewerkt {item.dateModified}
                </p>
                <h3 className="mt-3 text-xl font-extrabold leading-7 text-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.summary}</p>
                <Link className="focus-ring mt-auto inline-flex items-center pt-7 text-sm font-extrabold text-orange" href={`/inzichten/${item.slug}`}>
                  Lees artikel <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Thema's
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Kies de verdieping die past bij je vraag.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {clusters.map(({ icon: Icon, ...cluster }) => (
              <Link className="focus-ring group rounded-[2rem] border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-soft hover:bg-peach" href={cluster.href} key={cluster.href}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-soft text-orange">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-navy group-hover:text-orange">{cluster.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{cluster.text}</p>
                <span className="mt-5 inline-flex items-center text-sm font-extrabold text-orange">
                  Bekijk dienst <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Leerroute
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Gebruik inzichten om betere keuzes op je eigen website te maken.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              De beste content helpt niet alleen met rankings, maar ook met besluitvorming. Lees daarom niet alleen voor kennis, maar vertaal elk inzicht naar een concrete pagina, vraag of verbetering.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Begin bij je belangrijkste dienst", "Controleer of die pagina uitlegt voor wie de dienst is, welk probleem wordt opgelost, hoe het proces werkt en waarom iemand jou kan vertrouwen."],
              ["Vul ontbrekende vragen aan", "Maak van terugkerende klantvragen korte antwoordblokken. Dat helpt bezoekers, Google en AI-systemen tegelijk."],
              ["Koppel kennis aan bewijs", "Link relevante inzichten naar cases, diensten en contactmomenten zodat lezers logisch verder kunnen."]
            ].map(([title, text]) => (
              <article className="rounded-2xl border border-line bg-cream/50 p-5 shadow-sm" key={title}>
                <h3 className="font-extrabold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-orange-soft bg-gradient-to-br from-peach via-yellow-soft to-green-soft/60 py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Van inzicht naar uitvoering
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy md:text-4xl">
              Kennis wordt pas waardevol wanneer je website er duidelijker van wordt.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { href: "/diensten", title: "Bekijk alle diensten", text: "Maak van losse verbeterpunten een samenhangend plan." },
              { href: "/contact", title: "Vraag gratis websiteplan aan", text: "Krijg richting voor een nieuwe website, herbouw of gerichte verbetering." }
            ].map((link) => (
              <Link className="focus-ring group rounded-2xl bg-white/72 p-6 shadow-sm ring-1 ring-orange-soft/70 transition hover:bg-white" href={link.href} key={link.href}>
                <Sparkles className="h-5 w-5 text-orange" />
                <h3 className="mt-4 font-extrabold text-navy group-hover:text-orange">{link.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{link.text}</p>
                <span className="mt-5 inline-flex items-center text-sm font-extrabold text-orange">
                  Ga verder <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
