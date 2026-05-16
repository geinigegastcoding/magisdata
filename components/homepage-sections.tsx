import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Star,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  heroStats,
  heroTrust,
  insights,
  metrics,
  processSteps,
  services,
  trustLogos
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
      className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-7 py-4 text-[0.95rem] font-bold text-white shadow-sm transition-all duration-200 hover:bg-orange-dark"
      href={href}
    >
      {children}
      <ArrowRight className="ml-2.5 h-[1.125rem] w-[1.125rem]" />
    </Link>
  );
}

function SecondaryButton({ children, href = "/services" }: { children: ReactNode; href?: string }) {
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

const stockPhotos = {
  person: {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=85",
    alt: "Vriendelijke ondernemer die met een laptop werkt"
  },
  team: {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    alt: "Team dat samen aan online groei werkt"
  },
  laptop: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    alt: "Laptop met website en groeicijfers"
  },
  woman: {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85",
    alt: "Vriendelijke ondernemer klaar voor een gesprek"
  },
  meeting: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=85",
    alt: "Zakelijke afspraak met laptop"
  },
  local: {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
    alt: "Lokale ondernemer achter laptop"
  }
} as const;

type StockPhotoVariant = keyof typeof stockPhotos;

function FriendlyPhoto({ variant = "person", className }: { variant?: StockPhotoVariant; className?: string }) {
  const photo = stockPhotos[variant];

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-[2.25rem] bg-peach shadow-card ring-1 ring-black/[0.04]",
        className
      )}
    >
      <img
        alt={photo.alt}
        className="h-full w-full object-cover"
        loading={variant === "person" ? "eager" : "lazy"}
        src={photo.src}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-orange-soft/20" />
    </figure>
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
    <section className="relative overflow-hidden pb-[4.5rem] pt-14 md:pb-24 md:pt-24 lg:pb-28 lg:pt-28">
      <div className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-10">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-blue-soft/85 px-6 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-blue shadow-sm">
            Digitale groei die werkt <Sparkles className="h-4 w-4 text-yellow" strokeWidth={2.2} />
          </div>
          <h1 className="mt-8 max-w-[640px] text-balance text-[2.65rem] font-bold leading-[1.05] tracking-[-0.025em] text-navy sm:text-[3.5rem] md:text-[4.45rem] lg:text-[4.65rem] lg:leading-[1.01]">
            Website laten maken voor SEO, AI-vindbaarheid en{" "}
            <span className="text-orange">meer aanvragen.</span>
          </h1>
          <p className="mt-7 max-w-[560px] text-[1.08rem] leading-8 text-muted md:text-lg">
            MagisData bouwt snelle websites en helpt als SEO bureau met AEO,
            GEO, lokale vindbaarheid en conversie optimalisatie voor bedrijven
            in Nederland.
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

        <div className="relative min-h-[490px] overflow-hidden rounded-[2rem] sm:min-h-[540px] sm:overflow-visible lg:min-h-[590px]">
          <div className="absolute -right-6 top-9 h-52 w-52 rounded-[4.5rem] bg-yellow-soft lg:-right-2 lg:h-60 lg:w-60" />
          <div className="absolute -bottom-2 left-7 h-36 w-36 rounded-full bg-blue-soft/70 blur-sm" />
          <div className="absolute right-24 top-0 h-24 w-24 rounded-full bg-orange-soft/70" />
          <div className="doodle-loop left-0 top-64 h-28 w-28 lg:-left-4 lg:top-72 lg:h-32 lg:w-32" />
          <FriendlyPhoto className="absolute inset-x-4 top-2 h-[455px] rounded-[2.75rem] sm:h-[500px] lg:inset-x-8 lg:h-[540px] lg:rounded-[3rem]" />
          <div className="soft-card absolute left-0 top-16 hidden w-52 rounded-[1.6rem] p-5 sm:-left-1 sm:block sm:w-60 sm:p-6 lg:-left-3">
            <p className="text-xs font-extrabold text-soft">{heroStats[0].label}</p>
            <p className="mt-2 text-[2rem] font-extrabold leading-none text-navy">{heroStats[0].value}</p>
            <div className="mt-5 rounded-2xl bg-green-soft/70 px-3 py-3">
              <svg aria-label="Stijgende aanvraagtrend" className="h-20 w-full" role="img" viewBox="0 0 188 80">
                <defs>
                  <linearGradient id="requestChartFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.24" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M8 62C26 61 31 50 45 50C60 50 63 58 78 54C94 50 94 36 111 36C128 36 130 45 144 40C158 35 163 20 180 18V72H8Z" fill="url(#requestChartFill)" />
                <path d="M8 62C26 61 31 50 45 50C60 50 63 58 78 54C94 50 94 36 111 36C128 36 130 45 144 40C158 35 163 20 180 18" fill="none" stroke="#16a34a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                <path d="M166 18h14v14" fill="none" stroke="#16a34a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                {[32, 68, 104, 140].map((x, index) => (
                  <rect
                    fill="#16a34a"
                    height={[18, 26, 34, 44][index]}
                    key={x}
                    opacity={0.18 + index * 0.12}
                    rx="5"
                    width="12"
                    x={x}
                    y={68 - [18, 26, 34, 44][index]}
                  />
                ))}
              </svg>
            </div>
          </div>
          <div className="soft-card absolute right-0 top-14 hidden w-48 rounded-[1.6rem] p-5 sm:block sm:w-56 sm:p-6 lg:-right-2">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold text-soft">{heroStats[1].label}</p>
                <p className="mt-2 text-[2rem] font-extrabold leading-none text-navy">{heroStats[1].value}</p>
              </div>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-soft text-blue">
                <Users className="h-5 w-5" strokeWidth={2.2} />
              </span>
            </div>
            <p className="mt-3 text-xs font-extrabold text-green">{heroStats[1].note}</p>
          </div>
          <div className="soft-card absolute bottom-3 left-1/2 w-[calc(100%-1.5rem)] max-w-[21rem] -translate-x-1/2 rounded-[1.6rem] p-4 sm:left-auto sm:right-2 sm:w-[20rem] sm:translate-x-0 sm:p-5 lg:right-0">
            <div className="grid grid-cols-[1fr_auto] items-center gap-4">
              <div>
                <p className="text-xs font-extrabold text-soft">{heroStats[2].label}</p>
                <p className="mt-2 text-[2rem] font-extrabold leading-none text-navy">{heroStats[2].value}</p>
                <p aria-label="Vijf sterren" className="mt-3 text-xl tracking-wider text-yellow">{heroStats[2].note}</p>
              </div>
              <img
                alt="Tevreden klant van MagisData"
                className="h-24 w-24 rounded-2xl object-cover object-top shadow-sm ring-4 ring-white sm:h-28 sm:w-28"
                src="/assets/man-review.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustLogos() {
  return (
    <section className="pb-16">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted">
          Vertrouwd door ambitieuze bedrijven
        </p>
        <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-6 text-center text-base font-extrabold tracking-wide text-soft grayscale sm:grid-cols-3 sm:text-xl lg:grid-cols-6">
          {trustLogos.map((logo) => (
            <div className="flex items-center justify-center gap-2" key={logo}>
              <span className="h-5 w-5 rounded-full bg-slate-300" />
              {logo}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-9 flex max-w-4xl flex-col items-start justify-between gap-5 rounded-[1.75rem] border border-orange-soft bg-peach px-6 py-5 shadow-sm sm:flex-row sm:items-center md:px-8">
          <div>
            <p className="text-sm font-extrabold text-navy">Wil je weten wat jouw site laat liggen?</p>
            <p className="mt-1 text-sm leading-6 text-muted">We kijken gratis mee en geven direct de grootste groeikansen aan.</p>
          </div>
          <PrimaryButton>Gratis groeiscan aanvragen</PrimaryButton>
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
            Website, SEO bureau hulp en AI-vindbaarheid in een aanpak
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            Van website laten maken tot lokale SEO, GEO, AEO en conversie:
            wij regelen wat nodig is om online beter te scoren.
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
                Zo werken we samen
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
          <div className="relative mt-10 flex flex-col items-start justify-between gap-5 rounded-[1.5rem] bg-navy px-6 py-5 text-white md:flex-row md:items-center md:px-7">
            <div>
              <p className="text-sm font-extrabold">Binnen 24 uur duidelijkheid over je volgende stap.</p>
              <p className="mt-1 text-sm leading-6 text-white/70">Geen lange pitch. Wel helder advies voor website, vindbaarheid en leads.</p>
            </div>
            <Link
              className="focus-ring inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-navy shadow-sm transition hover:bg-orange-soft hover:text-orange"
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
                Samen groeien we met duidelijke cijfers
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
                <SecondaryButton href="/case-studies">Bekijk resultaten</SecondaryButton>
              </div>
            </div>
            <FriendlyPhoto className="h-64" variant="team" />
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
              <Eyebrow>Case study</Eyebrow>
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-navy">
                Van onzichtbaar naar meer aanvragen
              </h2>
              <p className="mt-5 text-[0.95rem] leading-7 text-muted">
                Voor Nexora bouwden we een nieuwe website en verbeterden we de vindbaarheid.
                Het resultaat: meer bezoekers, meer aanvragen en een website die vertrouwen uitstraalt.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-extrabold tabular-nums text-navy">842%</p>
                  <p className="text-xs font-medium text-muted">Meer organisch verkeer</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold tabular-nums text-navy">167%</p>
                  <p className="text-xs font-medium text-muted">Meer aanvragen</p>
                </div>
              </div>
              <div className="mt-7">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <SecondaryButton href="/case-studies">Bekijk de case</SecondaryButton>
                  <TextCta>Vraag groeiplan aan</TextCta>
                </div>
              </div>
            </div>
            <div className="relative min-h-[270px]">
              <FriendlyPhoto className="absolute right-0 top-0 h-64 w-full rounded-[1.75rem] md:h-72" variant="laptop" />
              <div className="absolute -bottom-2 left-6 -rotate-6 rounded-2xl bg-green-soft px-5 py-4 text-sm font-bold text-navy shadow-sm">
                Groei die blijft.
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-sm md:p-9">
          <Eyebrow>Laatste inzichten</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-navy">Tips, trends en inspiratie</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {insights.map((title, index) => (
              <Link className="focus-ring group rounded-2xl" href="/insights" key={title}>
                <FriendlyPhoto
                  className="h-28 rounded-2xl"
                  variant={index === 0 ? "meeting" : index === 1 ? "local" : "team"}
                />
                <h3 className="mt-4 text-sm font-bold leading-5 text-navy transition group-hover:text-orange">
                  {title}
                </h3>
                <span className="mt-3 inline-flex items-center text-xs font-bold text-orange">
                  Lees verder <ChevronRight className="ml-1 h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <Link className="focus-ring mt-7 inline-flex items-center rounded-full text-sm font-bold text-orange" href="/insights">
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
                src="/assets/girl.webp"
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
                Binnen 24 uur reactie
              </p>
              <Star className="ml-auto mt-3 h-8 w-8 text-orange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
