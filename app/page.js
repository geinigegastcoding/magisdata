import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock3,
  EyeOff,
  Frown,
  Mail,
  Phone,
  Rocket,
  Sparkles,
  TrendingDown,
} from "lucide-react";
import ComparisonSlider from "../components/comparison-slider";
import StickyConsultationBar from "../components/sticky-consultation-bar";

const siteUrl = "https://magisdata.nl";

const navLinks = [
  { label: "Oplossing", href: "#solutions" },
  { label: "Resultaten", href: "#results" },
  { label: "Tarieven", href: "#tarieven" },
  { label: "FAQ", href: "#faq" },
];

const heroBenefits = [
  "Meer vertrouwen bij bezoekers die je nog niet kennen",
  "Meer aanvragen zonder dat jij harder hoeft te verkopen",
  "Een website die duidelijk maakt waarom klanten voor jou kiezen",
];

const caseStudies = [
  {
    title: "Luxe Kapper Amsterdam",
    description:
      "Van een sfeerloze site naar een premium presentatie die direct rust, kwaliteit en exclusiviteit uitstraalt voor nieuwe klanten.",
    outcome:
      "De website maakt de salon geloofwaardiger, verhoogt de waargenomen waarde en stuurt bezoekers sneller naar contact of afspraak.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVutnSnI3gmnGLnLERqlW2M_kWjI3xfzTo72ysDgMI0fWeUcTiA2lJ65djrN0xCrjzDNqcZW_zvqjxwdhyWyZKQ1RqJ4K2Qr09lLqqUNBCCZWa-hfBCvlm50XJ_Mh3ZOjASBL24agXp7xZik4gW6_Hxba8iGYgSlFL7VDA5bk3Olh-CZD-xJWhDxnRVwbSFAowYc1xl31kmLz9avzs_gxkjIUCCvtZyPbgrj2kKv-SeWc1wa7WHSVR87OcrW94assyBjsJX-PpEWtt",
    tags: ["Premium uitstraling", "Meer vertrouwen", "Meer boekingen"],
  },
  {
    title: "Meester Schilder Utrecht",
    description:
      "Van lokale vakman met losse online zichtbaarheid naar een sterke, betrouwbare uitstraling die direct professioneler voelt.",
    outcome:
      "De site helpt bezoekers sneller begrijpen wat het bedrijf levert, waarom het vakmanschap telt en hoe ze eenvoudig contact opnemen.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6_hql4lq6U8t8uhRkIJaOgAzWA9rMmJzhLj3wU48_RElp03VBnMFHAmNFoE_FlGUm_AKw4xgkUXLXmTlcY1LQ6CcW8V4oRdP4CSKCTz51T4Pg1s0CanwkFcY5K0ahsOxpMxzbSf-pOD6tmD_3XETkgktQ1mfCv0KodVMvE4gwOEcVZqa3QLGZPncGwAtgPR7VR3UxVFA3gwhhtdegJaGOGSAgbQaOQWx11KC7kh8iYRFdmlDFZJBZM8YEJISRVxFG-7lMvHPbt0aS",
    tags: ["Sterkere positionering", "Betere leadflow", "Duidelijker verhaal"],
  },
];

const painPoints = [
  {
    title: "Je site wekt niet genoeg vertrouwen",
    description:
      "Bezoekers beslissen in seconden of jij professioneel genoeg voelt. Een verouderde website maakt je aanbod direct minder geloofwaardig.",
    icon: Frown,
  },
  {
    title: "Goede bezoekers haken af",
    description:
      "Als je verhaal niet duidelijk is of de volgende stap ontbreekt, verdwijnt ook een serieuze potentiële klant zonder contact op te nemen.",
    icon: EyeOff,
  },
  {
    title: "Je mist aanvragen buiten kantooruren",
    description:
      "Je website hoort 24/7 vragen op te vangen, vertrouwen op te bouwen en nieuwe klanten richting contact te begeleiden.",
    icon: Clock3,
  },
  {
    title: "Concurrenten ogen sterker dan jij",
    description:
      "Zelfs als jouw dienst beter is, wint online vaak degene die het duidelijkst, rustigst en meest professioneel overkomt.",
    icon: TrendingDown,
  },
];

const processSteps = [
  {
    number: "01",
    title: "We brengen jouw klantreis scherp in kaart",
    description:
      "We kijken waar bezoekers twijfelen, wat ze eerst willen begrijpen en welke informatie nodig is om vertrouwen op te bouwen.",
    icon: BarChart3,
    accent: "bg-primary",
  },
  {
    number: "02",
    title: "We vertalen dat naar een overtuigende website",
    description:
      "Geen losse pagina's, maar een duidelijke opbouw met sterke copy, slimme structuur en een uitstraling die past bij jouw prijs en kwaliteit.",
    icon: Sparkles,
    accent: "bg-tertiary-container",
  },
  {
    number: "03",
    title: "We sturen bezoekers naar een logische volgende stap",
    description:
      "De site helpt niet alleen mooi presenteren, maar ook aanvragen uitlokken met duidelijke CTA's, minder frictie en meer rust in de keuze.",
    icon: Rocket,
    accent: "bg-secondary",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "30p/m",
    description: "Voor ondernemers die een professionele basis willen zonder gedoe.",
    features: [
      "Sterke homepage met duidelijke propositie",
      "Contactmogelijkheid die wél uitnodigt tot actie",
      "Basisstructuur voor vertrouwen en conversie",
    ],
    cta: "Bespreek Starter",
  },
  {
    name: "Professional",
    price: "50p/m",
    description: "Voor bedrijven die hun website actief willen laten bijdragen aan groei.",
    features: [
      "Tot 5 strategische pagina's",
      "Copy en structuur gericht op aanvragen",
      "Premium maatwerk design",
      "Ruimte om later content en blog uit te bouwen",
    ],
    cta: "Bespreek Professional",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "99p/m",
    description: "Voor teams die maatwerk, schaalbaarheid en volledige begeleiding willen.",
    features: [
      "Complexere structuren en maatwerkoplossingen",
      "Strategische begeleiding en doorontwikkeling",
      "Integraties, data en extra groeikansen",
    ],
    cta: "Plan een gesprek",
  },
];

const faqItems = [
  {
    question: "Voor wie is MagisData het meest geschikt?",
    answer:
      "Voor ondernemers en bedrijven die weten dat hun huidige website niet meer past bij de kwaliteit van hun dienst. Als je serieuzer wilt overkomen en meer aanvragen uit je site wilt halen, zit je goed.",
  },
  {
    question: "Moet ik zelf al teksten of een plan hebben?",
    answer:
      "Nee. We helpen juist om jouw aanbod scherper te verwoorden, de juiste volgorde op de pagina te kiezen en bezoekers logisch richting contact te sturen.",
  },
  {
    question: "Hoe snel kan zo'n traject live staan?",
    answer:
      "Dat hangt af van de omvang, maar het doel is altijd snelheid zonder dat het haastwerk voelt. We bouwen doelgericht, zodat je niet maanden hoeft te wachten op resultaat.",
  },
  {
    question: "Kan mijn huidige website of content worden meegenomen?",
    answer:
      "Ja. We kunnen bestaande content verbeteren, herstructureren of alleen gebruiken wat nog sterk genoeg is. Je hoeft dus niet automatisch helemaal opnieuw te beginnen.",
  },
  {
    question: "Wat is de volgende stap als ik interesse heb?",
    answer:
      "Dan plannen we een korte kennismaking of websitescan. Daarin kijken we waar je nu kansen laat liggen en wat de slimste aanpak is voor jouw situatie.",
  },
];

const footerSections = [
  {
    title: "Aanpak",
    links: ["Strategie", "Design", "Conversie"],
  },
  {
    title: "Navigatie",
    links: ["Oplossing", "Resultaten", "Tarieven"],
  },
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "MagisData",
      url: siteUrl,
      email: "info@magisdata.nl",
      telephone: "+31 20 123 4567",
      areaServed: "Nederland",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressCountry: "NL",
      },
      description:
        "MagisData bouwt websites die vertrouwen winnen, je aanbod helder presenteren en bezoekers richting aanvraag sturen.",
    },
    {
      "@type": "WebSite",
      name: "MagisData",
      url: siteUrl,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <span className="mb-5 inline-flex rounded-full bg-secondary-container/35 px-4 py-1.5 text-sm font-semibold tracking-wide text-on-secondary-container">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-4xl font-extrabold leading-tight text-on-surface md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-on-surface-variant">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-on-primary shadow-glow transition duration-300 hover:-translate-y-0.5 hover:opacity-95"
      href={href}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      className="inline-flex items-center justify-center rounded-full bg-surface-container-high px-8 py-4 font-semibold text-on-surface transition duration-300 hover:-translate-y-0.5 hover:bg-surface-container-highest"
      href={href}
    >
      {children}
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
        type="application/ld+json"
      />

      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="glass-panel mx-auto mt-4 flex h-20 w-[min(1120px,calc(100%-1.5rem))] items-center justify-between rounded-full border border-white/40 px-6 shadow-card">
          <a className="font-headline text-xl font-extrabold tracking-tight text-slate-900" href="#">
            MagisData
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="font-headline text-sm font-semibold tracking-wide text-slate-500 transition hover:text-primary"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            className="inline-flex items-center justify-center rounded-full bg-primary-container px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            href="#contact"
          >
            Plan een gratis scan
          </a>
        </nav>
      </header>

      <main className="pt-28">
        <section className="relative overflow-hidden pb-28 pt-16">
          <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:38px_38px] opacity-40" />
          <div className="absolute left-[8%] top-16 -z-10 h-72 w-72 animate-float rounded-full bg-secondary-container/20 blur-3xl" />
          <div className="absolute right-[10%] top-24 -z-10 h-96 w-96 animate-float rounded-full bg-tertiary-container/15 blur-3xl [animation-delay:-2s]" />

          <div className="container grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
              <SectionHeading
                eyebrow="Websites voor ondernemers die serieuzer willen overkomen"
                title={
                  <>
                    Laat je website <span className="text-primary">vertrouwen winnen</span> en meer aanvragen opleveren.
                  </>
                }
                description="MagisData bouwt websites die jouw verhaal helder maken, je kwaliteit zichtbaar maken en bezoekers makkelijker richting contact of aanvraag bewegen."
              />

              <ul className="mt-8 space-y-4">
                {heroBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-on-surface">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                    <span className="leading-relaxed text-on-surface-variant">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <PrimaryButton href="#contact">Vraag een gratis websitescan aan</PrimaryButton>
                <SecondaryButton href="#results">Bekijk voorbeelden</SecondaryButton>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 bottom-6 h-64 w-64 rounded-full bg-primary-container/10 blur-3xl" />
              <div className="absolute -right-10 top-0 h-72 w-72 rounded-full bg-tertiary-container/10 blur-3xl" />
              <div className="relative rounded-5xl border border-white/60 bg-surface-container-lowest/80 p-2 shadow-soft">
                <ComparisonSlider
                  afterImage="/after-image.png"
                  beforeImage="/before-image.png"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-surface-container-low py-24">
          <div className="container relative z-10">
            <SectionHeading
              title={
                <>
                  Wat een <span className="text-primary">zwakke website</span> je vandaag kost
                </>
              }
              description="Een website die onduidelijk voelt of weinig vertrouwen uitstraalt, kost niet alleen zichtbaarheid. Hij kost gesprekken, aanvragen en omzet."
            />

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {painPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-5xl border border-outline-variant bg-surface-container-lowest p-8 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/10 text-primary transition group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-on-surface">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-outline-variant pt-16 md:flex-row">
              <p className="text-center text-xl font-medium text-on-surface-variant md:text-left">
                Je website hoort twijfel weg te nemen, niet toe te voegen.
              </p>
              <PrimaryButton href="#contact">Laat ons meekijken</PrimaryButton>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest py-24" id="solutions">
          <div className="container">
            <SectionHeading
              centered
              title="De oplossing: een website die jouw klant direct verder helpt"
              description="We bouwen geen losse pagina's, maar een heldere route van eerste indruk naar vertrouwen, interesse en contact."
            />

            <div className="mt-20 grid gap-10 md:grid-cols-3">
              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="rounded-[2.5rem] bg-surface-container-low p-10 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-card"
                  >
                    <div className="mb-6 text-6xl font-black text-primary/10">{step.number}</div>
                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white ${step.accent}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-on-surface">{step.title}</h3>
                    <p className="mt-4 leading-relaxed text-on-surface-variant">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24" id="results">
          <div className="container">
            <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl font-extrabold text-on-surface">Resultaten in de praktijk</h2>
                <p className="mt-4 max-w-2xl text-on-surface-variant">
                  Voorbeelden van hoe een sterkere positionering en betere presentatie direct meer vertrouwen en meer actie uitlokken.
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
                href="#contact"
              >
                Bespreek jouw situatie <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {caseStudies.map((study) => (
                <article key={study.title} className="group">
                  <div className="overflow-hidden rounded-5xl bg-surface-container-highest">
                    <img
                      alt={study.title}
                      className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105"
                      src={study.image}
                    />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary-container px-3 py-1 text-xs font-bold text-on-secondary-container"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-on-surface">{study.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-on-surface-variant">
                    {study.description}
                  </p>
                  <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-on-surface">
                    <ChevronRight className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <span>{study.outcome}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24" id="tarieven">
          <div className="container">
            <SectionHeading
              centered
              title="Heldere pakketten, zonder vaag gedoe"
              description="Kies een niveau dat past bij je fase vandaag, met ruimte om later verder te groeien."
            />

            <div className="mt-16 grid items-stretch gap-8 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={[
                    "relative flex h-full flex-col rounded-5xl p-8 transition",
                    plan.featured
                      ? "scale-[1.02] border-2 border-primary bg-white shadow-soft"
                      : "border border-outline-variant bg-surface-container-lowest shadow-sm hover:shadow-card",
                  ].join(" ")}
                >
                  {plan.featured ? (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                      Beste balans
                    </div>
                  ) : null}
                  <h3 className="text-xl font-bold text-on-surface">{plan.name}</h3>
                  <div className="mt-3 text-4xl font-extrabold text-on-surface">{plan.price}</div>
                  <p className="mb-8 mt-4 text-sm text-on-surface-variant">{plan.description}</p>

                  <ul className="flex flex-1 flex-col gap-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-on-surface">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className={[
                      "mt-10 inline-flex w-full items-center justify-center rounded-2xl py-4 font-semibold transition",
                      plan.featured
                        ? "bg-primary text-white shadow-glow hover:opacity-95"
                        : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest",
                    ].join(" ")}
                    href="#contact"
                  >
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-24" id="faq">
          <div className="container">
            <SectionHeading
              centered
              title="Veelgestelde vragen"
              description="Vragen die we vaak horen voordat iemand besluit zijn website echt serieus aan te pakken."
            />

            <div className="mx-auto mt-16 grid max-w-4xl gap-5">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-4xl border border-outline-variant bg-surface-container-lowest p-7 shadow-sm transition open:shadow-card"
                >
                  <summary className="cursor-pointer list-none pr-6 text-lg font-bold text-on-surface marker:hidden">
                    {item.question}
                  </summary>
                  <p className="mt-4 leading-relaxed text-on-surface-variant">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest py-24" id="contact">
          <div className="container grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-balance text-5xl font-extrabold text-on-surface">
                Vraag je gratis websitescan aan
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-on-surface-variant">
                We kijken waar je website nu kansen laat liggen en hoe je sneller meer vertrouwen en meer aanvragen uit je online aanwezigheid haalt.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/20 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">E-mail ons</h3>
                    <a className="mt-1 block text-on-surface-variant hover:text-primary" href="mailto:info@magisdata.nl">
                      info@magisdata.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-container/20 text-secondary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">Bel ons direct</h3>
                    <a className="mt-1 block text-on-surface-variant hover:text-primary" href="tel:+31201234567">
                      +31 20 123 4567
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-5xl border border-outline-variant bg-white p-10 shadow-soft">
              <form
                action="https://formspree.io/f/mgolbyvp"
                className="space-y-6"
                method="POST"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="space-y-2 text-sm font-semibold text-on-surface">
                    <span className="ml-1 block">Naam</span>
                    <input
                      className="w-full rounded-2xl bg-surface px-5 py-4 text-base text-on-surface ring-1 ring-transparent transition focus:ring-primary/20"
                      name="name"
                      placeholder="Jouw naam"
                      type="text"
                    />
                  </label>

                  <label className="space-y-2 text-sm font-semibold text-on-surface">
                    <span className="ml-1 block">E-mail</span>
                    <input
                      className="w-full rounded-2xl bg-surface px-5 py-4 text-base text-on-surface ring-1 ring-transparent transition focus:ring-primary/20"
                      name="email"
                      placeholder="naam@bedrijf.nl"
                      type="email"
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm font-semibold text-on-surface">
                  <span className="ml-1 block">Huidige Website (optioneel)</span>
                  <input
                    className="w-full rounded-2xl bg-surface px-5 py-4 text-base text-on-surface ring-1 ring-transparent transition focus:ring-primary/20"
                    name="website"
                    placeholder="https://www.jouwsite.nl"
                    type="url"
                  />
                </label>

                <label className="space-y-2 text-sm font-semibold text-on-surface">
                  <span className="ml-1 block">Wat wil je verbeteren?</span>
                  <textarea
                    className="min-h-[140px] w-full rounded-2xl bg-surface px-5 py-4 text-base text-on-surface ring-1 ring-transparent transition focus:ring-primary/20"
                    name="message"
                    placeholder="Bijvoorbeeld: meer aanvragen, sterkere uitstraling, betere structuur of een complete nieuwe website."
                  />
                </label>

                <input name="_subject" type="hidden" value="Nieuwe aanvraag via MagisData website" />

                <button
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-8 py-5 font-semibold text-white shadow-glow transition hover:opacity-95"
                  type="submit"
                >
                  Vraag mijn gratis websitescan aan
                </button>
                <p className="text-center text-sm text-on-surface-variant">
                  Je bericht komt direct bij ons binnen via Formspree.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="container">
            <div className="relative overflow-hidden rounded-[3rem] bg-primary-container px-8 py-14 text-center shadow-soft md:px-16 md:py-20">
              <div className="absolute -left-10 bottom-0 h-64 w-64 translate-y-1/3 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -right-8 top-0 h-64 w-64 -translate-y-1/3 rounded-full bg-white/10 blur-3xl" />
              <h2 className="relative z-10 text-balance text-4xl font-extrabold text-white md:text-5xl">
                Klaar om serieuzer over te komen en meer aanvragen uit je website te halen?
              </h2>
              <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-5">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 font-semibold text-primary transition hover:-translate-y-0.5"
                  href="#contact"
                >
                  Plan mijn gratis scan
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-10 py-5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  href="tel:+31201234567"
                >
                  Bel direct
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 rounded-t-[2.5rem] bg-slate-50">
        <div className="container grid gap-12 px-8 py-16 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="block text-lg font-black text-slate-900">MagisData</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Websites die je kwaliteit beter laten voelen en bezoekers sneller richting contact bewegen.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-on-surface">{section.title}</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-500">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      className="hover:text-primary"
                      href={
                        link === "Oplossing"
                          ? "#solutions"
                          : link === "Resultaten"
                            ? "#results"
                            : link === "Tarieven"
                              ? "#tarieven"
                              : "#contact"
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-bold text-on-surface">Contact</h3>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-500">
              <li>Amsterdam, Nederland</li>
              <li>info@magisdata.nl</li>
              <li className="font-bold text-blue-700">+31 20 123 4567</li>
            </ul>
          </div>
        </div>

        <div className="container border-t border-slate-200 px-8 pb-12 pt-8">
          <p className="text-sm text-slate-500">© 2026 MagisData. All rights reserved.</p>
        </div>
      </footer>

      <StickyConsultationBar />
    </>
  );
}
