import {
  ArrowRight,
  BarChart3,
  Brush,
  CheckCircle2,
  Clock3,
  EyeOff,
  Frown,
  Mail,
  Phone,
  Rocket,
  Search,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import ComparisonSlider from "../components/comparison-slider";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Tarieven", href: "#tarieven" },
  { label: "Blog", href: "#blog" },
];

const caseStudies = [
  {
    title: "Luxe Kapper Amsterdam",
    description:
      "Een exclusieve online ervaring die het premium gevoel van de salon vertaalt naar digitale conversies.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVutnSnI3gmnGLnLERqlW2M_kWjI3xfzTo72ysDgMI0fWeUcTiA2lJ65djrN0xCrjzDNqcZW_zvqjxwdhyWyZKQ1RqJ4K2Qr09lLqqUNBCCZWa-hfBCvlm50XJ_Mh3ZOjASBL24agXp7xZik4gW6_Hxba8iGYgSlFL7VDA5bk3Olh-CZD-xJWhDxnRVwbSFAowYc1xl31kmLz9avzs_gxkjIUCCvtZyPbgrj2kKv-SeWc1wa7WHSVR87OcrW94assyBjsJX-PpEWtt",
    tags: ["UI/UX Design", "SEO", "Lead Gen"],
  },
  {
    title: "Meester Schilder Utrecht",
    description:
      "Van lokale vakman naar marktleider in de regio door een krachtige online autoriteit en leadflow.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6_hql4lq6U8t8uhRkIJaOgAzWA9rMmJzhLj3wU48_RElp03VBnMFHAmNFoE_FlGUm_AKw4xgkUXLXmTlcY1LQ6CcW8V4oRdP4CSKCTz51T4Pg1s0CanwkFcY5K0ahsOxpMxzbSf-pOD6tmD_3XETkgktQ1mfCv0KodVMvE4gwOEcVZqa3QLGZPncGwAtgPR7VR3UxVFA3gwhhtdegJaGOGSAgbQaOQWx11KC7kh8iYRFdmlDFZJBZM8YEJISRVxFG-7lMvHPbt0aS",
    tags: ["UI/UX Design", "SEO", "Lead Gen"],
  },
];

const painPoints = [
  {
    title: "Onzichtbaar voor Google",
    description:
      "Zonder SEO-strategie besta je simpelweg niet voor je doelgroep. Je mist dagelijks klanten die actief naar jouw diensten zoeken.",
    icon: EyeOff,
  },
  {
    title: "Verlies van vertrouwen",
    description:
      "Een verouderde of ontbrekende site voelt onbetrouwbaar. Bezoekers haken razendsnel af en kiezen direct voor je concurrent.",
    icon: Frown,
  },
  {
    title: "24/7 verkoopkans gemist",
    description:
      "Terwijl jij slaapt, gaat de zoektocht door. Zonder conversiegerichte site loop je constant omzet en aanvragen mis.",
    icon: Clock3,
  },
  {
    title: "Achterblijven op concurrentie",
    description:
      "Concurrenten investeren wel in hun digitale aanwezigheid. Terwijl zij groeien en marktaandeel pakken, blijf jij onnodig stilstaan.",
    icon: TrendingDown,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Strategie & Analyse",
    description:
      "We duiken diep in jouw markt, doelgroep en doelstellingen om de ideale koers te bepalen.",
    icon: BarChart3,
    accent: "bg-primary",
  },
  {
    number: "02",
    title: "Premium Design",
    description:
      "Unieke visuele identiteiten die jouw merk versterken en een blijvende indruk achterlaten.",
    icon: Sparkles,
    accent: "bg-tertiary-container",
  },
  {
    number: "03",
    title: "Lanceer & Groei",
    description:
      "Een vlekkeloze lancering gevolgd door continue optimalisatie voor maximale groei.",
    icon: Rocket,
    accent: "bg-secondary",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "30p/m",
    description: "Voor ZZP'ers en kleine bedrijven.",
    features: ["Basis SEO optimalisatie", "1 landingspagina", "Contactformulier"],
    cta: "Kies Starter",
  },
  {
    name: "Professional",
    price: "50p/m",
    description: "Volledige professionele oplossing.",
    features: [
      "Tot 5 pagina's",
      "Geavanceerde SEO",
      "Premium maatwerk design",
      "Blog module integratie",
    ],
    cta: "Kies Professional",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "99p/m",
    description: "Voor complexe behoeften.",
    features: [
      "Maatwerk oplossingen",
      "Volledige ontzorging",
      "API koppelingen & Data",
    ],
    cta: "Neem contact op",
  },
];

const blogPosts = [
  {
    category: "Web Design",
    title: "De impact van minimalistisch design op conversie",
    description:
      "Ontdek hoe minder soms meer is wanneer het gaat om het converteren van websitebezoekers naar klanten.",
    icon: Brush,
    accent: "text-primary",
    surface: "bg-primary/10",
  },
  {
    category: "SEO",
    title: "Bovenaan in Google: SEO trends voor 2024",
    description:
      "Een diepe duik in de nieuwste algoritme updates en hoe je jouw ranking kunt verbeteren.",
    icon: Search,
    accent: "text-secondary",
    surface: "bg-secondary/10",
  },
  {
    category: "Conversie",
    title: "Psychologie achter een effectieve CTA",
    description:
      "Waarom klikken mensen? We analyseren de visuele en tekstuele triggers van succesvolle knoppen.",
    icon: TrendingUp,
    accent: "text-tertiary",
    surface: "bg-tertiary/10",
  },
];

const footerSections = [
  {
    title: "Services",
    links: ["Custom Web Apps", "Digital Strategy", "UI/UX Design"],
  },
  {
    title: "Company",
    links: ["Our Team", "Privacy Policy", "Terms of Service"],
  },
];

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
            Get Started
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
                eyebrow="Premium Web Development"
                title={
                  <>
                    Websites die <span className="text-primary">werken</span> en gevonden worden.
                  </>
                }
                description="Wij bouwen high-end, conversiegerichte websites voor ambitieuze ondernemers die willen groeien met een onverslaanbare online aanwezigheid."
              />

              <div className="mt-10 flex flex-wrap gap-4">
                <PrimaryButton href="#contact">Begin nu</PrimaryButton>
                <SecondaryButton href="#solutions">Bekijk portfolio</SecondaryButton>
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
                  Wat kost een <span className="text-primary">onprofessionele</span> website je echt?
                </>
              }
              description="Het niet hebben van een geoptimaliseerde website is geen besparing, het is een dagelijkse verliespost voor je onderneming."
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
                Laat je business niet langer stagneren door een zwakke online basis.
              </p>
              <PrimaryButton href="#contact">Begin nu</PrimaryButton>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest py-24" id="solutions">
          <div className="container">
            <SectionHeading
              centered
              title="Onze Oplossing"
              description="Een bewezen aanpak waarin strategie, premium design en groei samenkomen in een website die verkoopt."
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

        <section className="bg-surface-container-low py-24" id="process">
          <div className="container">
            <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl font-extrabold text-on-surface">Casestudy&apos;s</h2>
                <p className="mt-4 text-on-surface-variant">
                  Ontdek hoe wij onze klanten helpen hun digitale doelen te overtreffen.
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
                href="#contact"
              >
                Alle projecten <ArrowRight className="h-4 w-4" />
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
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24" id="tarieven">
          <div className="container">
            <SectionHeading
              centered
              title="Transparante Tarieven"
              description="Kies het pakket dat bij jouw groeiambities past."
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
                      Meest gekozen
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

        <section className="bg-surface py-24" id="blog">
          <div className="container">
            <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl font-extrabold text-on-surface">MagisData Insights</h2>
                <p className="mt-4 text-on-surface-variant">
                  Leer hoe je jouw online aanwezigheid kunt optimaliseren.
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
                href="#contact"
              >
                Alle artikelen <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {blogPosts.map((post) => {
                const Icon = post.icon;

                return (
                  <article
                    key={post.title}
                    className="group overflow-hidden rounded-5xl border border-outline-variant bg-surface-container-lowest transition hover:-translate-y-1 hover:shadow-card"
                  >
                    <div className={`flex aspect-[16/9] items-center justify-center p-8 ${post.surface}`}>
                      <Icon className={`h-16 w-16 transition group-hover:scale-110 ${post.accent}`} />
                    </div>
                    <div className="p-8">
                      <div className={`text-xs font-bold uppercase tracking-[0.22em] ${post.accent}`}>
                        {post.category}
                      </div>
                      <h3 className="mt-3 text-xl font-bold leading-tight text-on-surface transition group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                        {post.description}
                      </p>
                      <a
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-on-surface"
                        href="#contact"
                      >
                        Lees meer <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest py-24" id="contact">
          <div className="container grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-balance text-5xl font-extrabold text-on-surface">
                Klaar voor de start?
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-on-surface-variant">
                Heb je een vraag over onze diensten of wil je direct een project bespreken? We staan klaar om je te helpen groeien.
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
                  <span className="ml-1 block">Bericht</span>
                  <textarea
                    className="min-h-[140px] w-full rounded-2xl bg-surface px-5 py-4 text-base text-on-surface ring-1 ring-transparent transition focus:ring-primary/20"
                    name="message"
                    placeholder="Vertel ons over je project..."
                  />
                </label>

                <input name="_subject" type="hidden" value="Nieuwe aanvraag via MagisData website" />

                <button
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-8 py-5 font-semibold text-white shadow-glow transition hover:opacity-95"
                  type="submit"
                >
                  Verstuur bericht
                </button>
                <p className="text-center text-sm text-on-surface-variant">
                  Formulieren worden nu rechtstreeks verzonden via Formspree.
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
                Klaar om de volgende stap te zetten?
              </h2>
              <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-5">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 font-semibold text-primary transition hover:-translate-y-0.5"
                  href="#contact"
                >
                  Start je project
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-10 py-5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  href="#contact"
                >
                  Plan adviesgesprek
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
              Wij creeren digitale meesterwerken die converteren. Jouw succes is onze hoogste prioriteit.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-on-surface">{section.title}</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-500">
                {section.links.map((link) => (
                  <li key={link}>
                    <a className="hover:text-primary" href="#contact">
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
    </>
  );
}
