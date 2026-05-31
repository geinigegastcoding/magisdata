import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Compass,
  FileQuestion,
  LayoutTemplate,
  Search,
  Target,
  Zap
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { TrustProofRow } from "@/components/trust-proof-row";
import { metadataForPath } from "@/content/seo";
import { breadcrumbSchema, collectionPageSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/diensten");

const services = [
  {
    href: "/webontwikkeling",
    title: "Webontwikkeling",
    label: "Voor een sterker fundament",
    text: "Snelle websites met heldere pagina's, vertrouwenstekens en routes naar contact.",
    icon: LayoutTemplate,
    color: "bg-orange-soft text-orange"
  },
  {
    href: "/seo-diensten",
    title: "SEO diensten",
    label: "Voor meer zoekvraag",
    text: "Pagina's, content en techniek die zoekmachines en klanten makkelijker begrijpen.",
    icon: Search,
    color: "bg-blue-soft text-blue"
  },
  {
    href: "/geo-optimalisatie",
    title: "GEO optimalisatie",
    label: "Voor AI-vindbaarheid",
    text: "Structuur en uitleg die je bedrijf beter citeerbaar maken in generatieve antwoorden.",
    icon: BrainCircuit,
    color: "bg-purple-soft text-purple"
  },
  {
    href: "/aeo-optimalisatie",
    title: "AEO optimalisatie",
    label: "Voor betere antwoorden",
    text: "Klantvragen scherp beantwoorden zodat twijfel verdwijnt voordat iemand contact opneemt.",
    icon: FileQuestion,
    color: "bg-yellow-soft text-yellow"
  },
  {
    href: "/ai-infrastructuur",
    title: "AI en automatisering",
    label: "Voor minder handwerk",
    text: "Praktische AI-flows voor intake, opvolging, content en terugkerende processen.",
    icon: Bot,
    color: "bg-green-soft text-green"
  },
  {
    href: "/strategisch-advies",
    title: "Strategisch advies",
    label: "Voor betere keuzes",
    text: "Een nuchtere groeiroute wanneer je wel ambitie hebt, maar nog geen heldere volgorde.",
    icon: Target,
    color: "bg-pink-soft text-pink"
  }
];

const supportingServices = [
  {
    href: "/website-onderhoud",
    title: "Website onderhoud",
    text: "Updates, backups, monitoring, veiligheid en support na livegang."
  },
  {
    href: "/online-marketing-bureau",
    title: "Online marketing",
    text: "Website, vindbaarheid, conversie en meetbasis in de juiste volgorde."
  },
  {
    href: "/lokale-seo",
    title: "Lokale SEO",
    text: "Servicegebieden, lokale zoekvragen en consistente bedrijfsinformatie."
  },
  {
    href: "/ai-vindbaarheid",
    title: "AI-vindbaarheid",
    text: "Brede route voor zichtbaarheid in AI-antwoorden, met GEO en AEO als specialisaties."
  }
];

const routes = [
  {
    title: "Je website voelt te klein voor je bedrijf",
    text: "Begin met webontwikkeling en positionering, zodat je aanbod serieuzer overkomt.",
    href: "/webontwikkeling"
  },
  {
    title: "Je krijgt te weinig relevante bezoekers",
    text: "Begin met SEO, AEO en GEO, zodat je expertise vindbaar en begrijpbaar wordt.",
    href: "/seo-diensten"
  },
  {
    title: "Je weet niet welke stap nu slim is",
    text: "Begin met strategisch advies en maak van losse ideeen een uitvoerbare route.",
    href: "/strategisch-advies"
  }
];

export default function ServicesPage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/diensten",
      name: "Diensten",
      description: metadata.description ?? ""
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Diensten", path: "/diensten" }
    ]),
    collectionPageSchema({
      path: "/diensten",
      name: "Diensten van MagisData",
      description: metadata.description ?? "",
      items: [...services, ...supportingServices].map((service) => ({ name: service.title, path: service.href }))
    })
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Diensten", path: "/diensten" }
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Diensten
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-normal text-navy md:text-6xl">
              AI-gedreven websites die gevonden, begrepen en gekozen worden
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              MagisData bouwt geen losse online onderdelen. We maken een groeisysteem waarin website, SEO, AI-vindbaarheid, content en conversie elkaar versterken.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-dark" href="/contact">
                Vraag gratis websiteplan aan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition hover:border-orange-soft hover:bg-peach hover:text-orange" href="/cases">
                Bekijk portfolio
              </Link>
            </div>
            <TrustProofRow className="mt-5" compact />
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-line bg-white p-5 shadow-card md:p-7">
            <div className="flex items-start gap-4 rounded-2xl border border-orange-soft bg-gradient-to-br from-peach via-yellow-soft to-green-soft/70 p-5 shadow-sm">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-orange shadow-sm ring-1 ring-orange-soft">
                <Compass className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-navy">De juiste volgorde maakt groei lichter.</p>
                <p className="mt-2 text-sm leading-6 text-ink/75">
                  Eerst helder krijgen wat moet overtuigen. Daarna pas bouwen, optimaliseren en automatiseren.
                </p>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {["Meer vertrouwen", "Meer vindbaarheid", "Meer aanvragen", "Minder handwerk"].map((item) => (
                <div className="flex items-center gap-3 rounded-2xl bg-peach px-4 py-3 text-sm font-extrabold text-ink" key={item}>
                  <CheckCircle2 className="h-5 w-5 text-orange" />
                  {item}
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
              Wat we bouwen
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy md:text-4xl">
              Zes diensten, een helder doel: je digitale basis laten werken als acquisitiesysteem.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, ...service }) => (
              <Link className="focus-ring group flex min-h-[260px] flex-col rounded-[2rem] border border-line bg-cream/50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-soft hover:bg-peach" href={service.href} key={service.href}>
                <span className={`grid h-14 w-14 place-items-center rounded-2xl ${service.color}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.14em] text-blue">
                  {service.label}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-normal text-navy group-hover:text-orange">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{service.text}</p>
                <span className="mt-auto inline-flex items-center pt-6 text-sm font-extrabold text-orange">
                  Bekijk deze dienst <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-cream/40 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Ondersteunende diensten
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">
              Specifieke routes voor beheer, lokaal bereik, online marketing en AI-zichtbaarheid
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {supportingServices.map((service) => (
              <Link className="focus-ring rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:border-orange-soft hover:bg-peach" href={service.href} key={service.href}>
                <h3 className="font-extrabold text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.text}</p>
                <span className="mt-5 inline-flex items-center text-sm font-bold text-orange">
                  Bekijk dienst <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Waar begin je?
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Je hoeft niet eerst de perfecte briefing te hebben.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Een goed gesprek brengt vaak sneller richting dan weken vergelijken. Kies het startpunt dat het meest lijkt op je situatie.
            </p>
          </div>
          <div className="grid gap-4">
            {routes.map((route, index) => (
              <Link className="focus-ring grid gap-4 rounded-[2rem] border border-line bg-white p-6 shadow-sm transition hover:border-orange-soft hover:bg-peach md:grid-cols-[auto_1fr_auto] md:items-center" href={route.href} key={route.title}>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-orange text-sm font-black text-white">
                  {index + 1}
                </span>
                <span>
                  <span className="block text-lg font-extrabold text-navy">{route.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-muted">{route.text}</span>
                </span>
                <ArrowRight className="h-5 w-5 text-orange" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Hoe je kiest
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              De juiste dienst hangt af van waar vertrouwen nu lekt.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Soms heb je geen nieuwe campagne nodig, maar een duidelijkere pagina. Soms is vindbaarheid het probleem. En soms komen aanvragen wel binnen, maar kost opvolging te veel tijd.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Te weinig vertrouwen", "Start bij positionering, webontwikkeling, cases en duidelijke servicepagina's."],
              ["Te weinig bezoekers", "Versterk SEO, AEO en GEO met pagina's die echte zoekvragen beantwoorden."],
              ["Te veel handwerk", "Maak intake, opvolging en terugkerende communicatie slimmer met praktische automatisering."]
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
              Samenhang
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy md:text-4xl">
              De sterkste digitale basis ontstaat wanneer strategie, content en techniek dezelfde kant op wijzen.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Scherp", "Een aanbod dat bezoekers direct kunnen plaatsen."],
              ["Vindbaar", "Pagina's die antwoord geven op echte zoekvragen."],
              ["Meetbaar", "Contactroutes en verbeterpunten die je kunt volgen."]
            ].map(([title, text]) => (
              <div className="rounded-2xl bg-white/72 p-5 shadow-sm ring-1 ring-orange-soft/70" key={title}>
                <Zap className="h-5 w-5 text-orange" />
                <h3 className="mt-4 font-extrabold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-navy">
              Wil je weten welke dienst nu het meeste oplevert?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-muted">
              We bekijken je huidige website, je doelen en de snelste route naar meer vertrouwen, zichtbaarheid en aanvragen.
            </p>
          </div>
          <div className="grid gap-4">
            <Link className="focus-ring inline-flex shrink-0 items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-dark" href="/contact">
              Vraag gratis groeiplan aan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <TrustProofRow compact />
          </div>
        </div>
      </section>
    </main>
  );
}
