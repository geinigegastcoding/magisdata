import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { TrustProofRow } from "@/components/trust-proof-row";
import { metadataForPath } from "@/content/seo";
import { breadcrumbSchema, collectionPageSchema, faqSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/prijzen");

const websitePlans = [
  {
    name: "Start",
    label: "Voor een nette basis",
    price: "EUR 300 / jaar",
    monthly: "of EUR 30 p/m",
    text: "Voor ondernemers die snel professioneel zichtbaar willen zijn met een heldere, compacte website.",
    features: [
      "Compacte websitebasis",
      "Mobiel en desktop netjes uitgewerkt",
      "Contactroute en duidelijke call-to-action",
      "Basis SEO inbegrepen"
    ]
  },
  {
    name: "Groei",
    label: "Meest gekozen",
    price: "EUR 500 / jaar",
    monthly: "of EUR 50 p/m",
    text: "Voor bedrijven die meer diensten, vertrouwen en uitleg nodig hebben dan alleen een online visitekaart.",
    features: [
      "Meer ruimte voor diensten en bewijs",
      "Sterkere pagina-opbouw voor aanvragen",
      "Basis SEO, metadata en interne structuur",
      "Geschikt om later verder uit te breiden"
    ],
    recommended: true
  },
  {
    name: "Autoriteit",
    label: "Voor meer inhoud",
    price: "EUR 999 / jaar",
    monthly: "of EUR 99 p/m",
    text: "Voor een uitgebreidere website met meer pagina's, duidelijke positionering en betere contentstructuur.",
    features: [
      "Uitgebreidere service- en bewijsstructuur",
      "Meer aandacht voor copy en conversie",
      "Basis SEO plus technische controle",
      "Stevige basis voor content en vindbaarheid"
    ]
  }
];

const visibilityPlans = [
  {
    name: "Vindbaar Basis",
    price: "EUR 500 / jaar",
    text: "Voor kleine verbeteringen aan structuur, pagina's en antwoorden op belangrijkste klantvragen.",
    features: [
      "Gratis scan vooraf",
      "SEO, AEO en GEO prioriteitenlijst",
      "Basisoptimalisatie van kernpagina's",
      "Duidelijke vervolgstappen"
    ]
  },
  {
    name: "Vindbaar Groei",
    price: "EUR 1000 / jaar",
    text: "Voor bedrijven die meerdere diensten of regio's beter vindbaar en begrijpbaar willen maken.",
    features: [
      "Gratis scan vooraf",
      "Zoekintentie en vraagstructuur",
      "Verbetering van servicepagina's",
      "AEO en GEO blokken voor betere antwoorden"
    ],
    recommended: true
  },
  {
    name: "Vindbaar Autoriteit",
    price: "EUR 2500 / jaar",
    text: "Voor een bredere contentbasis rond diensten, expertise, vragen en AI-leesbare kennisstructuur.",
    features: [
      "Gratis scan vooraf",
      "Content- en entiteitenstructuur",
      "Uitwerking van meerdere prioriteitspagina's",
      "Periodieke controle op kansen en gaten"
    ]
  }
];

const automationPlans = [
  {
    name: "AI Start",
    price: "EUR 1000 eenmalig",
    text: "Voor een concrete automatisering die een terugkerende taak lichter maakt.",
    features: [
      "Een duidelijke workflow",
      "Praktische AI-stap of koppeling",
      "Uitleg voor dagelijks gebruik",
      "Overdracht na oplevering"
    ]
  },
  {
    name: "AI Proces",
    price: "EUR 2000 eenmalig",
    text: "Voor meerdere stappen rond intake, opvolging, content of interne verwerking.",
    features: [
      "Procesanalyse voor start",
      "Meerdere automatiseringsstappen",
      "Controlepunten en foutafhandeling",
      "Testen met echte scenario's"
    ],
    recommended: true
  },
  {
    name: "AI Systeem",
    price: "EUR 5000 eenmalig",
    text: "Voor een volwaardige automatiseringslaag rond meerdere processen of teams.",
    features: [
      "Volledige procesarchitectuur",
      "Maatwerk flows en AI-logica",
      "Documentatie en overdracht",
      "Ruimte voor complexere koppelingen"
    ]
  }
];

const advicePlans = [
  {
    name: "Eerste groeigesprek",
    price: "Gratis",
    text: "Een rustig eerste gesprek om te bepalen waar je website, vindbaarheid of automatisering nu vastloopt."
  },
  {
    name: "Maandelijks groeigesprek",
    price: "EUR 20 p/m",
    text: "Een keer per maand meekijken, prioriteiten scherp houden en voorkomen dat losse ideeen blijven liggen."
  }
];

const faqs = [
  {
    question: "Zit SEO bij een websitepakket inbegrepen?",
    answer:
      "Ja, elke website krijgt basis SEO zoals nette metadata, structuur, mobiele bruikbaarheid en technische controle. Uitgebreide SEO, AEO en GEO zijn aparte pakketten als vindbaarheid echt actief moet groeien."
  },
  {
    question: "Moet ik maandelijkse AI-checks nemen?",
    answer:
      "Nee. AI automatisering is eenmalig. Alleen als je maandelijks controle, kleine aanpassingen en voortgang wilt, kan dat voor EUR 50 p/m."
  },
  {
    question: "Kan ik eerst laten meekijken voordat ik kies?",
    answer:
      "Ja. Voor vindbaarheid is er een gratis scan vooraf. Voor algemene richting kun je starten met het eerste groeigesprek."
  },
  {
    question: "Zijn de prijzen vaste eindprijzen?",
    answer:
      "De pakketten geven een duidelijke basis. Als scope, koppelingen of aantal pagina's groter wordt dan normaal, bespreken we dat vooraf."
  }
];

function PlanGrid({
  plans,
  cta = "Bespreek pakket"
}: {
  plans: {
    name: string;
    label?: string;
    price: string;
    monthly?: string;
    text: string;
    features: string[];
    recommended?: boolean;
  }[];
  cta?: string;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {plans.map((plan) => (
        <article
          className={`relative flex min-h-[430px] flex-col rounded-[2rem] border p-6 shadow-sm ${
            plan.recommended
              ? "border-orange bg-white ring-2 ring-orange-soft"
              : "border-black/[0.06] bg-white"
          }`}
          key={plan.name}
        >
          {plan.recommended ? (
            <p className="absolute right-5 top-5 rounded-full bg-orange px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
              Aanbevolen
            </p>
          ) : null}
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue">
            {plan.label ?? "Pakket"}
          </p>
          <h3 className="mt-4 text-3xl font-extrabold tracking-normal text-navy">
            {plan.name}
          </h3>
          <p className="mt-4 text-2xl font-black text-ink">{plan.price}</p>
          {plan.monthly ? <p className="mt-1 text-sm font-bold text-muted">{plan.monthly}</p> : null}
          <p className="mt-5 text-sm leading-7 text-muted">{plan.text}</p>
          <ul className="mt-6 grid gap-3">
            {plan.features.map((feature) => (
              <li className="flex gap-3 text-sm font-semibold leading-6 text-ink" key={feature}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            className="focus-ring mt-auto inline-flex items-center justify-center rounded-xl border border-line bg-cream px-5 py-3 text-sm font-bold text-navy transition hover:border-orange-soft hover:bg-peach hover:text-orange"
            href="/contact"
          >
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </article>
      ))}
    </div>
  );
}

export default function PricingPage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/prijzen",
      name: "Prijzen",
      description: metadata.description ?? ""
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Prijzen", path: "/prijzen" }
    ]),
    collectionPageSchema({
      path: "/prijzen",
      name: "Prijzen en pakketten van MagisData",
      description: metadata.description ?? "",
      items: [
        ...websitePlans,
        ...visibilityPlans,
        ...automationPlans,
        ...advicePlans
      ].map((plan) => ({ name: plan.name, path: "/prijzen" }))
    }),
    faqSchema(faqs, "/prijzen")
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Prijzen", path: "/prijzen" }
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Prijzen
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-normal text-navy md:text-6xl">
              Heldere pakketten voor websites, vindbaarheid, AI en advies
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Kies een startpunt dat past bij je fase. We houden scope, verwachtingen en vervolgstappen helder voordat er gebouwd wordt.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-dark" href="/contact">
                Vraag advies over pakket
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition hover:border-orange-soft hover:bg-peach hover:text-orange" href="#websites">
                Bekijk prijzen
              </Link>
            </div>
            <TrustProofRow className="mt-5" compact />
          </div>

          <aside className="rounded-[2rem] border border-black/[0.06] bg-white p-7 shadow-card md:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-soft text-orange">
                <ClipboardCheck className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-navy">Zo kies je rustig</p>
                <p className="mt-1 text-sm leading-6 text-muted">Geen ingewikkelde bundels.</p>
              </div>
            </div>
            <ul className="mt-7 grid gap-4">
              {[
                "Websitepakketten bevatten basis SEO.",
                "SEO, AEO en GEO zijn apart als vindbaarheid hoofddoel is.",
                "AI automatisering is eenmalig, met optionele maandcheck.",
                "Eerste groeigesprek gratis; daarna optioneel maandelijks."
              ].map((point) => (
                <li className="flex gap-3 text-sm font-semibold leading-6 text-ink" key={point}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20" id="websites">
        <div className="container">
          <div className="mb-9 grid gap-5 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
                Websites
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy md:text-4xl">
                Websitepakketten met basis SEO inbegrepen
              </h2>
            </div>
            <p className="leading-7 text-muted">
              Deze pakketten zijn voor ondernemers die een duidelijke, snelle en nette website willen. Voor actieve groei in Google en AI-antwoorden staat er los een vindbaarheidspakket onder.
            </p>
          </div>
          <PlanGrid plans={websitePlans} />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container">
          <div className="mb-9 grid gap-5 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
                SEO, AEO en GEO
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy md:text-4xl">
                Vindbaarheidspakketten voor wie structureel gevonden wil worden
              </h2>
            </div>
            <div className="rounded-2xl border border-orange-soft bg-peach p-5">
              <div className="flex gap-3">
                <SearchCheck className="mt-1 h-5 w-5 shrink-0 text-orange" />
                <p className="text-sm font-semibold leading-6 text-ink">
                  Gratis scan vooraf. Eerst kijken waar kansen en gaten zitten, daarna pas kiezen of een pakket logisch is.
                </p>
              </div>
            </div>
          </div>
          <PlanGrid plans={visibilityPlans} cta="Vraag gratis scan aan" />
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="mb-9 grid gap-5 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
                AI automatisering
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy md:text-4xl">
                Automatiseringen die terugkerend werk verminderen
              </h2>
            </div>
            <div className="rounded-2xl border border-line bg-cream p-5">
              <div className="flex gap-3">
                <Bot className="mt-1 h-5 w-5 shrink-0 text-blue" />
                <p className="text-sm font-semibold leading-6 text-ink">
                  Maandelijkse checks zijn optioneel voor EUR 50 p/m. Handig voor controle en kleine verbeteringen, niet verplicht.
                </p>
              </div>
            </div>
          </div>
          <PlanGrid plans={automationPlans} cta="Bespreek automatisering" />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Groeigesprek
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Advies voor betere keuzes zonder groot traject
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Soms is een helder gesprek genoeg om de volgende stap te bepalen. Het eerste groeigesprek is gratis.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {advicePlans.map((plan) => (
              <article className="rounded-[2rem] border border-black/[0.06] bg-white p-7 shadow-sm" key={plan.name}>
                <MessageCircle className="h-6 w-6 text-orange" />
                <h3 className="mt-5 text-2xl font-extrabold tracking-normal text-navy">{plan.name}</h3>
                <p className="mt-3 text-2xl font-black text-ink">{plan.price}</p>
                <p className="mt-4 text-sm leading-7 text-muted">{plan.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Keuzehulp
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Begin bij het probleem dat nu het meeste remt
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Te weinig vertrouwen",
                text: "Start met een websitepakket. Je basis moet eerst helder en professioneel zijn."
              },
              {
                icon: Sparkles,
                title: "Te weinig zichtbaarheid",
                text: "Kies pas daarna een SEO, AEO en GEO pakket als groei in vindbaarheid hoofddoel is."
              },
              {
                icon: CalendarCheck,
                title: "Te veel handwerk",
                text: "Start met AI automatisering wanneer intake, opvolging of interne taken blijven terugkomen."
              }
            ].map(({ icon: Icon, ...item }) => (
              <article className="rounded-2xl border border-black/[0.06] bg-cream/50 p-5 shadow-sm" key={item.title}>
                <Icon className="h-5 w-5 text-orange" />
                <h3 className="mt-4 font-extrabold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Veelgestelde vragen
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Prijzen moeten duidelijk blijven
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details className="group rounded-2xl border border-black/[0.05] bg-white p-5 shadow-sm" key={faq.question}>
                <summary className="cursor-pointer list-none text-base font-extrabold text-navy">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-5 rounded-[2rem] bg-peach p-7 shadow-sm md:flex-row md:items-center md:p-9">
            <div>
              <h2 className="text-3xl font-extrabold tracking-normal text-navy">
                Twijfel je tussen twee pakketten?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted">
                Stuur kort je situatie. Dan krijg je een nuchtere richting zonder verplichting.
              </p>
            </div>
            <Link className="focus-ring inline-flex shrink-0 items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-dark" href="/contact">
              Vraag pakketadvies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
