import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  heroTrust,
  insights,
  metrics,
  processSteps,
  services
} from "@/content/homepage";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
      {children}
    </p>
  );
}

function PrimaryButton({ children, href = "/contact" }: { children: ReactNode; href?: string }) {
  return (
    <Link
      data-track-cta="primary"
      className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-7 py-4 text-[0.95rem] font-bold text-white shadow-sm transition-all duration-200 hover:bg-orange-dark"
      href={href}
    >
      {children}
      <ArrowRight className="ml-2.5 h-[1.125rem] w-[1.125rem]" />
    </Link>
  );
}

function SecondaryButton({ children, href = "/diensten" }: { children: ReactNode; href?: string }) {
  return (
    <Link
      className="focus-ring inline-flex items-center justify-center rounded-xl border border-line bg-white px-7 py-4 text-[0.95rem] font-bold text-navy shadow-sm transition-all duration-200 hover:border-orange-soft hover:bg-peach hover:text-orange"
      href={href}
    >
      {children}
    </Link>
  );
}

function TextCta({ children, href = "/contact" }: { children: ReactNode; href?: string }) {
  return (
    <Link
      className="focus-ring inline-flex items-center text-sm font-extrabold text-orange transition hover:text-orange-dark"
      href={href}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
}

function SmallDoodle({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={cn("pointer-events-none absolute text-blue/20", className)} fill="none" viewBox="0 0 138 54">
      <path d="M4 31C24 4 44 4 59 29s36 25 75-14" stroke="currentColor" strokeLinecap="round" strokeWidth="7" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-[4.5rem] pt-7 md:pb-24 md:pt-14 lg:pb-28 lg:pt-16">
      <div className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-10">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-blue-soft/85 px-6 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-blue shadow-sm">
            Meer aanvragen via je website <Sparkles className="h-4 w-4 text-yellow" strokeWidth={2.2} />
          </div>
          <h1 className="mt-8 max-w-[640px] text-balance text-[2.65rem] font-bold leading-[1.05] tracking-[-0.025em] text-navy sm:text-[3.5rem] md:text-[4.45rem] lg:text-[4.65rem] lg:leading-[1.01]">
            Website laten maken voor betere vindbaarheid en{" "}
            <span className="text-orange">meer aanvragen</span>
          </h1>
          <p className="mt-7 max-w-[560px] text-[1.08rem] leading-8 text-muted md:text-lg">
            MagisData maakt professionele websites voor lokale ondernemers die
            betrouwbaar willen overkomen en beter gevonden willen worden.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton>Plan een gratis gesprek</PrimaryButton>
            <SecondaryButton>Bekijk onze diensten</SecondaryButton>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
            {heroTrust.map((item) => (
              <span className="inline-flex items-center gap-2.5 text-[0.95rem] font-semibold text-muted" key={item}>
                <CheckCircle2 className="h-[1.05rem] w-[1.05rem] text-orange" strokeWidth={2.4} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative rounded-[2rem] pt-2">
          <div className="absolute -right-6 top-9 h-52 w-52 rounded-[4.5rem] bg-yellow-soft lg:-right-2 lg:h-60 lg:w-60" />
          <div className="absolute right-24 top-0 h-24 w-24 rounded-full bg-orange-soft/70" />
          <div className="doodle-loop left-0 top-64 h-28 w-28 lg:-left-4 lg:top-72 lg:h-32 lg:w-32" />
          <figure className="relative z-10 h-[370px] overflow-hidden rounded-[2.75rem] border border-line bg-white p-3 shadow-card sm:h-[420px] lg:h-[440px] lg:rounded-[3rem]">
            <picture>
              <source srcSet="/assets/case1-1122.avif" type="image/avif" />
              <img
                alt="Website-ontwerp voor een hoveniersbedrijf uit het MagisData portfolio"
                className="h-full w-full rounded-[2.1rem] object-cover object-top"
                height="1402"
                loading="eager"
                src="/assets/case1-1122.webp"
                width="1122"
              />
            </picture>
            <figcaption className="absolute bottom-6 left-6 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-navy shadow-sm">
              Ontwerpportfolio
            </figcaption>
          </figure>
          <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-3">
            <div className="soft-card rounded-[1.35rem] p-4">
              <p className="text-xs font-extrabold text-soft">Websitebouw</p>
              <p className="mt-2 text-lg font-extrabold leading-tight text-navy">Heldere structuur</p>
              <p className="mt-3 text-xs leading-5 text-muted">Aanbod, vertrouwen en contact logisch in beeld.</p>
            </div>
            <div className="soft-card rounded-[1.35rem] p-4">
              <p className="text-xs font-extrabold text-soft">SEO, AEO en GEO</p>
              <p className="mt-2 text-lg font-extrabold leading-tight text-navy">Vindbaar</p>
              <p className="mt-3 text-xs leading-5 text-muted">Inhoud die zoekvragen concreet beantwoordt.</p>
            </div>
            <div className="soft-card rounded-[1.35rem] p-4">
              <p className="text-xs font-extrabold text-soft">Kennismaking</p>
              <p className="mt-2 text-lg font-extrabold leading-tight text-navy">Gratis gesprek</p>
              <p className="mt-3 text-xs leading-5 text-muted">Reactie binnen een werkdag.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="relative bg-white/64 py-16 md:py-24" id="services">
      <SmallDoodle className="right-8 top-16 hidden h-14 w-36 lg:block" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Onze diensten</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-navy sm:text-4xl md:text-5xl">
            Alles geregeld om online beter gevonden te worden
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            We helpen met je website, Google, advertenties en duidelijke
            aanvraagformulieren. Zo kunnen klanten je makkelijker vinden en
            sneller contact opnemen.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="group flex min-h-[380px] flex-col rounded-[1.75rem] border border-black/[0.05] bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card" key={service.title}>
                <div className={cn("grid h-[4.5rem] w-[4.5rem] place-items-center rounded-[1.25rem] transition group-hover:scale-105", service.color)}>
                  <Icon className="h-9 w-9" strokeWidth={2} />
                </div>
                <h3 className="mt-8 text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-muted">{service.description}</p>
                <Link className="focus-ring mt-auto inline-flex items-center pt-7 text-sm font-bold text-orange" href={service.href}>
                  Meer informatie <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <p className="max-w-xl text-sm font-semibold leading-6 text-muted">
            Niet zeker welke dienst past? We kiezen samen de kortste route naar meer aanvragen.
          </p>
          <TextCta>Bespreek je situatie</TextCta>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="relative bg-cream py-8 md:py-12">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/[0.05] bg-white/86 p-8 shadow-sm md:p-12">
          <SmallDoodle className="bottom-8 left-10 hidden h-12 w-32 -rotate-6 lg:block" />
          <div className="relative grid gap-14 lg:grid-cols-[0.42fr_1.58fr] lg:items-center">
            <div>
              <Eyebrow>Onze aanpak</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-navy md:text-4xl">
                Zo gaan we te werk
              </h2>
              <p className="mt-5 leading-7 text-muted">Een heldere aanpak in 5 simpele stappen.</p>
            </div>
            <div className="relative grid gap-6 md:grid-cols-5">
              <div className="absolute left-[10%] right-[10%] top-10 hidden border-t-2 border-dashed border-line md:block" />
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article className="relative min-h-[210px] rounded-3xl bg-white/72 p-5 text-center md:bg-transparent md:p-0" key={step.title}>
                    <div className={cn("relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full shadow-sm", step.color)}>
                      <Icon className="h-10 w-10" strokeWidth={2} />
                    </div>
                    <span className="mx-auto mt-4 grid h-7 w-7 place-items-center rounded-full bg-orange text-xs font-black text-white">
                      {index + 1}
                    </span>
                    <h3 className="mt-5 font-bold text-navy">{step.title}</h3>
                    <p className="mt-3 text-xs leading-5 text-muted">{step.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="relative mt-10 flex flex-col items-start justify-between gap-5 rounded-[1.5rem] border border-orange-soft bg-gradient-to-br from-peach via-yellow-soft to-green-soft/60 px-6 py-5 shadow-sm md:flex-row md:items-center md:px-7">
            <div>
              <p className="text-sm font-extrabold text-navy">Binnen een werkdag reactie over je volgende stap.</p>
              <p className="mt-1 text-sm leading-6 text-muted">Geen lange pitch. Wel helder advies voor website, vindbaarheid en leads.</p>
            </div>
            <Link
              className="focus-ring inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-orange shadow-sm transition hover:bg-orange-soft hover:text-orange-dark"
              href="/contact"
            >
              Plan gratis gesprek
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Results() {
  return (
    <section className="bg-cream py-8 md:py-12">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-soft via-[#EFF6FF] to-white p-8 shadow-sm md:p-10">
          <div className="doodle-loop -right-8 bottom-2 h-32 w-32" />
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <Eyebrow>Resultaten die tellen</Eyebrow>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.03em] text-navy md:text-4xl">
                Duidelijke afspraken, zonder vage beloftes
              </h2>
              <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div className="flex items-center gap-3" key={metric.label}>
                      <div className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-full", metric.color)}>
                        <Icon className="h-5 w-5" strokeWidth={2.1} />
                      </div>
                      <div>
                        <p className="text-3xl font-extrabold tabular-nums text-navy">{metric.value}</p>
                        <p className="text-xs font-medium text-muted">{metric.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton>Ik wil ook groeien</PrimaryButton>
                <SecondaryButton href="/cases">Bekijk portfolio</SecondaryButton>
              </div>
            </div>
            <div className="rounded-[2rem] border border-line bg-white p-7 shadow-sm">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">Geloofwaardig werken</p>
              <h3 className="mt-4 text-2xl font-extrabold text-navy">Geen resultaatclaim zonder bron</h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                Portfolio-ontwerpen laten onze aanpak zien. Resultaten en klantquotes publiceren we alleen wanneer die controleerbaar en goedgekeurd zijn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CustomerQuestions() {
  const questions = [
    {
      title: "Waarom levert mijn website te weinig aanvragen op?",
      text:
        "Vaak is de route naar vertrouwen niet duidelijk genoeg. Bezoekers willen snel zien wat je doet, voor wie het is, welk bewijs er is en wat er gebeurt nadat ze contact opnemen."
    },
    {
      title: "Welke pagina's heb ik nodig om beter gevonden te worden?",
      text:
        "Begin met sterke dienstenpagina's, een duidelijke over-ons pagina, cases, veelgestelde vragen en enkele kennisartikelen rond echte zoekvragen. Daarna kun je uitbreiden met lokale of branchegerichte pagina's."
    },
    {
      title: "Hoe maak ik mijn bedrijf klaar voor AI-zoekresultaten?",
      text:
        "Leg je expertise concreet uit, gebruik consistente termen, beantwoord klantvragen in korte alinea's en zorg dat contactgegevens, cases en diensten logisch met elkaar verbonden zijn."
    }
  ];

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <Eyebrow>Veelvoorkomende vragen</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy md:text-4xl">
              Goede online groei begint met betere antwoorden.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Klanten zoeken niet naar marketingtermen. Ze zoeken zekerheid: past dit bedrijf bij mijn situatie, kan ik het vertrouwen en is contact opnemen de moeite waard?
            </p>
          </div>
          <div className="grid gap-4">
            {questions.map((question) => (
              <article className="rounded-[2rem] border border-black/[0.05] bg-cream/50 p-6 shadow-sm" key={question.title}>
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-orange-soft text-orange">
                    <HelpCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-navy">{question.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{question.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseStudyInsights() {
  return (
    <section className="relative bg-cream py-8 md:py-12">
      <SmallDoodle className="right-14 top-4 hidden h-14 w-36 rotate-3 text-orange/20 lg:block" />
      <div className="container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="overflow-hidden rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-sm md:p-9">
          <div className="grid gap-7 md:grid-cols-[0.96fr_1.04fr] md:items-center">
            <div>
              <Eyebrow>Uit het portfolio</Eyebrow>
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-navy">
                Webdesign voor IT consultancy
              </h2>
              <p className="mt-5 text-[0.95rem] leading-7 text-muted">
                Voor Nexora IT Solutions ontwierp ik een heldere website voor software,
                cloud, cybersecurity en data & AI, met oplossingen en werkwijze direct in beeld.
              </p>
              <p className="mt-4 rounded-xl bg-peach px-4 py-3 text-xs font-bold leading-5 text-muted">
                Ontwerpportfolio; geen geverifieerd klantresultaat.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-extrabold tabular-nums text-navy">SEO</p>
                  <p className="text-xs font-medium text-muted">Dienstenstructuur</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold tabular-nums text-navy">UX</p>
                  <p className="text-xs font-medium text-muted">Projectintake</p>
                </div>
              </div>
              <div className="mt-7">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <SecondaryButton href="/cases/website-design-it-consultancy">Bekijk project</SecondaryButton>
                </div>
              </div>
            </div>
            <div className="relative min-h-[270px]">
              <figure className="absolute right-0 top-0 h-64 w-full overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-card md:h-72">
                <picture>
                  <source srcSet="/assets/case4-748.avif" type="image/avif" />
                  <img
                    alt="Webdesign voor Nexora IT Solutions"
                    className="h-full w-full object-cover object-top"
                    height="2103"
                    loading="lazy"
                    src="/assets/case4-748.webp"
                    width="748"
                  />
                </picture>
              </figure>
              <div className="absolute -bottom-2 left-6 -rotate-3 rounded-2xl bg-green-soft px-5 py-4 text-sm font-bold text-navy shadow-sm">
                Portfolio.
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-sm md:p-9">
          <Eyebrow>Laatste inzichten</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-navy">Tips, trends en inspiratie</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {insights.map((insight) => (
              <Link className="focus-ring group rounded-2xl border border-line bg-cream/50 p-4" href={insight.href} key={insight.href}>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue">Inzicht</p>
                <h3 className="mt-4 text-sm font-bold leading-5 text-navy transition group-hover:text-orange">
                  {insight.title}
                </h3>
                <span className="mt-3 inline-flex items-center text-xs font-bold text-orange">
                  Lees verder <ChevronRight className="ml-1 h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <Link className="focus-ring mt-7 inline-flex items-center rounded-full text-sm font-bold text-orange" href="/inzichten">
            Bekijk alle inzichten <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </article>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-yellow-soft via-orange-soft to-[#fff9e8] px-7 pb-0 pt-8 shadow-sm md:px-12">
          <div className="grid gap-6 md:grid-cols-[0.62fr_1.1fr_0.78fr] md:items-end">
            <div className="relative min-h-[245px] self-end">
              <img
                alt="Vriendelijke medewerker van MagisData"
                className="absolute bottom-0 left-0 h-[255px] w-auto object-contain md:h-[285px]"
                height="285"
                src="/assets/girl.webp"
                width="285"
              />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold tracking-[-0.035em] text-navy">Klaar om samen te groeien?</h2>
              <p className="mt-4 leading-7 text-muted">
                Plan een gratis gesprek en ontdek wat wij voor jouw bedrijf kunnen betekenen.
              </p>
              <div className="mt-7 flex flex-col gap-3 pb-8 sm:flex-row md:pb-10">
                <PrimaryButton>Plan een gratis gesprek</PrimaryButton>
                <SecondaryButton>Bekijk onze diensten</SecondaryButton>
              </div>
            </div>
            <div className="hidden self-center pb-8 md:block">
              <svg aria-hidden className="h-[4.5rem] w-32 text-navy" fill="none" viewBox="0 0 160 88">
                <path d="M142 12C89 10 99 75 21 62" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                <path d="M30 48 18 63l17 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </svg>
              <p className="hand-note -mt-1 -rotate-6 text-xl font-semibold text-navy">
                Reactie binnen 1 werkdag
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
