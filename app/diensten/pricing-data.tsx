import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const websitePlans = [
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
    label: "Aanbevolen startpunt",
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

export const visibilityPlans = [
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

export const automationPlans = [
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

export const advicePlans = [
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

export const pricingFaqs = [
  {
    question: "Zijn de prijzen inclusief of exclusief btw?",
    answer: "De bedragen zijn richtprijzen exclusief btw, tenzij in een voorstel anders staat. Voor start bespreken we scope, betaalwijze en eventuele maandelijkse kosten helder."
  },
  {
    question: "Zit SEO bij een websitepakket inbegrepen?",
    answer: "Ja, elke website krijgt basis SEO zoals nette metadata, structuur, mobiele bruikbaarheid en technische controle. Uitgebreide SEO, AEO en GEO zijn aparte pakketten als vindbaarheid echt actief moet groeien."
  },
  {
    question: "Moet ik maandelijkse AI-checks nemen?",
    answer: "Nee. AI automatisering is eenmalig. Alleen als je maandelijks controle, kleine aanpassingen en voortgang wilt, kan dat voor EUR 50 p/m."
  },
  {
    question: "Kan ik eerst laten meekijken voordat ik kies?",
    answer: "Ja. Voor vindbaarheid is er een gratis scan vooraf. Voor algemene richting kun je starten met het eerste groeigesprek."
  },
  {
    question: "Zijn de prijzen vaste eindprijzen?",
    answer: "De pakketten geven een duidelijke basis. Als scope, koppelingen of aantal pagina's groter wordt dan normaal, bespreken we dat vooraf."
  },
  {
    question: "Wat gebeurt er na het eerste jaar?",
    answer: "Dat spreken we vooraf af. Denk aan verlengen, onderhoud, uitbreiden of afronden met duidelijke overdracht. Hosting, domein, support en eigendom horen expliciet in het voorstel te staan."
  }
];

export function PlanGrid({
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
              : "border-line bg-white"
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
