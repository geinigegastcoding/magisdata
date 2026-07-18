"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Crown,
  LayoutTemplate,
  Search,
  Sparkles,
  TrendingUp
} from "lucide-react";

type PricingPlan = {
  name: string;
  label?: string;
  price: string;
  monthly?: string;
  text: string;
  features: string[];
  recommended?: boolean;
};

type PricingMode = "websites" | "visibility";

const tierStyles = [
  {
    icon: Sparkles,
    iconClass: "bg-orange-soft text-orange",
    accentClass: "bg-orange-soft",
    rotationClass: "lg:-rotate-[0.6deg]"
  },
  {
    icon: TrendingUp,
    iconClass: "bg-yellow-soft text-yellow",
    accentClass: "bg-yellow-soft",
    rotationClass: "lg:rotate-[0.6deg]"
  },
  {
    icon: Crown,
    iconClass: "bg-green-soft text-green",
    accentClass: "bg-green-soft",
    rotationClass: "lg:-rotate-[0.4deg]"
  }
];

export function PricingShowcase({
  websitePlans,
  visibilityPlans
}: {
  websitePlans: PricingPlan[];
  visibilityPlans: PricingPlan[];
}) {
  const [mode, setMode] = useState<PricingMode>("websites");
  const isWebsite = mode === "websites";
  const plans = isWebsite ? websitePlans : visibilityPlans;

  return (
    <section className="relative overflow-hidden border-y border-orange-soft bg-cream py-14 md:py-20" id="websites">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-45 [background-image:radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange">
            Heldere pakketten, zonder verrassingen
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-normal text-navy md:text-5xl">
            Kies eerst wat je wilt versterken
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
            Een sterkere website of beter gevonden worden? Vergelijk de pakketten zonder door twee losse prijslijsten te hoeven zoeken.
          </p>
        </div>

        <div
          aria-label="Kies een pakketgroep"
          className="relative mx-auto mt-8 grid max-w-xl grid-cols-2 rounded-2xl border border-orange-soft bg-white p-1.5 shadow-card"
          role="tablist"
        >
          <span
            aria-hidden="true"
            className={`absolute bottom-1.5 left-1.5 top-1.5 w-[calc(50%-0.375rem)] rounded-xl bg-orange transition-transform duration-300 ease-out ${
              isWebsite ? "translate-x-0" : "translate-x-full"
            }`}
          />
          <button
            aria-controls="pricing-panel"
            aria-selected={isWebsite}
            className={`focus-ring relative z-10 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-extrabold transition-colors ${
              isWebsite ? "text-white" : "text-navy hover:text-orange"
            }`}
            onClick={() => setMode("websites")}
            role="tab"
            type="button"
          >
            <LayoutTemplate className="h-4 w-4" />
            Websites
          </button>
          <button
            aria-controls="pricing-panel"
            aria-selected={!isWebsite}
            className={`focus-ring relative z-10 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-extrabold transition-colors ${
              !isWebsite ? "text-white" : "text-navy hover:text-orange"
            }`}
            onClick={() => setMode("visibility")}
            role="tab"
            type="button"
          >
            <Search className="h-4 w-4" />
            Vindbaarheid
          </button>
        </div>

        <div className="mt-7 text-center" id="pricing-panel" role="tabpanel">
          <p className="text-sm font-bold text-orange">
            {isWebsite ? "Basis SEO is bij elk websitepakket inbegrepen" : "SEO, AEO en GEO voor Google én AI-antwoorden"}
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-muted">
            {isWebsite
              ? "Voor ondernemers die een snelle, duidelijke website willen die professioneel voelt en kan meegroeien."
              : "We beginnen met een gratis scan en kiezen pas daarna welke verbeteringen echt zinvol zijn."}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const style = tierStyles[index];
            const Icon = style.icon;

            return (
              <article
                className={`group relative flex min-h-[460px] flex-col overflow-hidden rounded-[2rem] border bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft ${
                  plan.recommended ? "border-orange ring-2 ring-orange-soft" : "border-line"
                } ${style.rotationClass}`}
                key={`${mode}-${plan.name}`}
              >
                <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-2 ${style.accentClass}`} />
                <div className="flex items-start justify-between gap-4">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl ${style.iconClass}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  {plan.recommended ? (
                    <span className="-rotate-2 rounded-full border border-orange bg-orange px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.1em] text-white shadow-sm">
                      Meest gekozen
                    </span>
                  ) : null}
                </div>

                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.14em] text-orange">
                  {plan.label ?? (isWebsite ? "Websitepakket" : "Vindbaarheidspakket")}
                </p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">{plan.name}</h3>
                <div className="mt-4 border-b border-dashed border-orange-soft pb-5">
                  <p className="text-2xl font-black text-ink">{plan.price}</p>
                  {plan.monthly ? <p className="mt-1 text-sm font-bold text-muted">{plan.monthly}</p> : null}
                </div>
                <p className="mt-5 text-sm leading-7 text-muted">{plan.text}</p>

                <ul className="mt-6 grid gap-3">
                  {plan.features.map((feature) => (
                    <li className="flex gap-3 text-sm font-semibold leading-6 text-ink" key={feature}>
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-orange bg-orange-soft text-orange">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  className={`focus-ring mt-auto inline-flex items-center justify-center rounded-xl border px-5 py-3.5 text-sm font-extrabold transition ${
                    plan.recommended
                      ? "border-orange bg-orange text-white hover:bg-orange-dark"
                      : "border-orange-soft bg-peach text-orange hover:border-orange hover:bg-orange-soft"
                  }`}
                  href="/contact"
                >
                  {isWebsite ? "Bespreek dit pakket" : "Vraag gratis scan aan"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-muted">
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-orange" /> Richtprijzen exclusief btw</span>
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-orange" /> Scope vooraf helder</span>
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-orange" /> Geen verplicht pakketadvies</span>
        </div>
      </div>
    </section>
  );
}
