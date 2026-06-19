import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Droplets,
  MapPin,
  PhoneCall,
  Wrench
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  graphSchema,
  serviceSchema,
  webPageSchema
} from "@/schemas/seo";

const path = "/website-laten-maken-voor-loodgieters-voorschoten";
const title = "Website laten maken voor loodgieters in Voorschoten";
const description =
  "Een loodgieterswebsite voor Voorschoten moet rust brengen in een urgente situatie: probleem kiezen, servicegebied checken en snel contact opnemen.";

const problemRoutes = [
  {
    title: "Lekkage",
    text:
      "Laat bezoekers direct weten welke informatie nodig is: waar het water zichtbaar is, wanneer het begon, of de hoofdkraan dicht kan en of er foto's zijn.",
    icon: Droplets
  },
  {
    title: "Verstopping",
    text:
      "Maak onderscheid tussen afvoer, wc, douche, keuken en riool. Dat voorkomt dat elke aanvraag als hetzelfde probleem binnenkomt.",
    icon: Wrench
  },
  {
    title: "Gepland werk",
    text:
      "Sanitair, leidingwerk en renovatie vragen om een offerte- of intakeflow in plaats van een stressvolle spoedroute.",
    icon: ClipboardList
  }
];

const intakeChecklist = [
  "Is direct duidelijk wanneer iemand moet bellen en wanneer een formulier genoeg is?",
  "Zijn lekkage, verstopping, sanitair en leidingwerk apart herkenbaar?",
  "Staat het servicegebied rond Voorschoten feitelijk uitgelegd?",
  "Vraagt het formulier om probleemtype, urgentie, foto's en bereikbaarheid?",
  "Zijn 24/7-, garantie- of vestigingsclaims alleen aanwezig als ze echt kloppen?",
  "Is de mobiele belknop zichtbaar voordat iemand moet scrollen door algemene tekst?"
];

const faqs = [
  {
    question: "Wat moet bovenaan een loodgieterswebsite staan?",
    answer:
      "Een duidelijke keuze tussen spoed en gepland werk, herkenbare probleemcategorieen, servicegebied en een directe bel- of contactroute. Bij urgentie telt snelheid meer dan lange introductietekst."
  },
  {
    question: "Moet ik 24/7 spoedservice noemen?",
    answer:
      "Alleen als je dat echt levert. Als je bereikbaarheid beperkter is, is het beter om eerlijk te zijn over tijden, opvolging en wat iemand alvast kan doorgeven."
  },
  {
    question: "Welke loodgietersdiensten verdienen eigen pagina's?",
    answer:
      "Meestal lekkage, verstopping, sanitair en leidingwerk. Aparte pagina's zijn pas zinvol als je genoeg unieke uitleg, voorbeelden, FAQ's en contactinformatie hebt."
  },
  {
    question: "Hoe maak je een loodgieterspagina lokaal relevant voor Voorschoten?",
    answer:
      "Door werkgebied, bereikbaarheid, lokale vergelijking met omliggende aanbieders en praktische klantvragen te benoemen. Niet door alleen de plaatsnaam vaak te herhalen."
  },
  {
    question: "Wat kan een formulier beter vragen?",
    answer:
      "Vraag probleemtype, urgentie, adres of plaats, foto's, wanneer het probleem begon, of er schade is en hoe iemand bereikbaar is. Houd het formulier kort genoeg voor mobiel."
  }
];

const schemaContent = {
  eyebrow: "Loodgieterswebsite Voorschoten",
  title,
  description,
  heroPoints: [
    "Spoed en gepland werk gescheiden",
    "Lekkage en verstopping scanbaar",
    "Mobiele belroute"
  ],
  sections: [
    {
      title: "Probleemroute",
      text: "Een loodgieterswebsite moet bezoekers snel naar het juiste probleem leiden.",
      items: problemRoutes.map(({ title: itemTitle, text }) => ({ title: itemTitle, text }))
    }
  ],
  steps: [
    {
      title: "Problemen ordenen",
      text: "Scheid spoed, lekkage, verstopping, sanitair en gepland leidingwerk."
    },
    {
      title: "Mobiele route bouwen",
      text: "Maak belknop, probleemuitleg en formulier kort en duidelijk."
    },
    {
      title: "Lokale basis schrijven",
      text: "Bouw servicegebied, FAQ, metadata en interne links feitelijk op."
    }
  ],
  faqs,
  primaryCta: "Vraag gratis websiteplan aan",
  secondaryCta: "Bekijk prijzen"
};

export const metadata: Metadata = {
  title: {
    absolute: "Website laten maken voor loodgieters in Voorschoten | MagisData"
  },
  description:
    "Loodgieterswebsite voor Voorschoten met spoedroute, lekkage- en verstoppingspagina's, servicegebied, mobiel bellen en lokale SEO zonder valse claims.",
  alternates: {
    canonical: path
  },
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: absoluteUrl(path),
    siteName: "MagisData",
    title: "Website laten maken voor loodgieters in Voorschoten | MagisData",
    description:
      "Loodgieterswebsite voor Voorschoten met spoedroute, lekkage- en verstoppingspagina's, servicegebied, mobiel bellen en lokale SEO zonder valse claims."
  }
};

function PrimaryCta() {
  return (
    <Link
      className="focus-ring inline-flex items-center justify-center rounded-lg bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-dark"
      href="/contact"
    >
      Vraag gratis websiteplan aan
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
}

export default function Page() {
  const jsonLd = graphSchema([
    webPageSchema({
      path,
      name: title,
      description
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Webontwikkeling", path: "/webontwikkeling" },
      { name: title, path }
    ]),
    serviceSchema(schemaContent, path),
    faqSchema(faqs, path)
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={jsonLd} />

      <section className="border-b border-line bg-white py-14 md:py-22">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-orange-soft bg-peach px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
                Loodgieterswebsite Voorschoten
              </span>
              <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-soft">
                Spoed en servicegebied
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-normal text-ink md:text-6xl">
              Website laten maken voor loodgieters in Voorschoten
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Een loodgieterswebsite moet een gestreste bezoeker niet laten zoeken.
              De pagina moet helpen kiezen: spoed, lekkage, verstopping, sanitair,
              leidingwerk of gepland onderhoud.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCta />
              <Link
                className="focus-ring inline-flex items-center justify-center rounded-lg border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink shadow-sm transition hover:border-orange-soft hover:bg-peach hover:text-orange"
                href="/prijzen"
              >
                Bekijk prijzen
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-line bg-white p-6 shadow-card md:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
                  Storingsroute
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-normal text-ink">
                  Eerst probleem, dan contact
                </h2>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-orange-soft text-orange">
                <PhoneCall className="h-6 w-6" />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">
              Bij waterproblemen is de juiste route belangrijker dan een mooie slogan.
              De bezoeker moet snel weten wat hij moet doen en welke informatie nodig is.
            </p>
            <div className="mt-7 grid gap-3">
              {["spoed of gepland", "lekkage", "verstopping", "servicegebied", "belroute"].map((item, index) => (
                <div className="grid grid-cols-[2.75rem_1fr] items-center gap-3 rounded-lg border border-line bg-cream/50 p-3" key={item}>
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange text-xs font-black text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-bold leading-6 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          <article className="rounded-lg border border-orange-soft bg-white p-7 shadow-sm md:p-9">
            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <AlertTriangle className="h-7 w-7 shrink-0 text-orange" />
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
                  Direct antwoord
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-normal text-ink">
                  Wat moet een loodgieterswebsite meteen duidelijk maken?
                </h2>
                <p className="mt-4 max-w-4xl text-base leading-8 text-muted">
                  Een website voor een loodgieter in Voorschoten moet direct onderscheid
                  maken tussen spoed en gepland werk. Bezoekers willen weten of je helpt
                  bij lekkage, verstopping, sanitair of leidingwerk, of je in Voorschoten
                  werkt, wat ze moeten doorgeven en hoe snel ze contact kunnen starten.
                  De pagina moet geen 24/7 of spoedclaim maken tenzij dat echt klopt.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white/72 py-8 md:py-12">
        <div className="container grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Probleemroutes
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink">
              Niet elke loodgietersaanvraag is hetzelfde
            </h2>
            <p className="mt-4 leading-7 text-muted">
              De pagina moet de situatie eerst ordenen. Een lekkage vraagt een andere
              route dan een badkamerproject of gepland leidingwerk.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {problemRoutes.map((route) => (
              <article className="rounded-lg border border-line bg-white p-5 shadow-sm" key={route.title}>
                <route.icon className="h-5 w-5 text-orange" />
                <h3 className="mt-4 font-extrabold text-ink">{route.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{route.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container grid gap-8">
          {[
            {
              title: "Waarom een loodgieterspagina anders is dan een gewone servicepagina",
              text:
                "Een bezoeker op een loodgieterswebsite heeft vaak haast. Bij lekkage of verstopping is er weinig geduld voor merkverhalen, sliders of lange introducties. De pagina moet eerst helpen bepalen wat er aan de hand is en welke contactroute past."
            },
            {
              title: "Wat waarde toevoegt voor bezoekers in Voorschoten",
              text:
                "Een sterke pagina legt uit welke informatie de loodgieter nodig heeft: adres of wijk, type probleem, foto's, wanneer het is ontstaan, of er nog water loopt en of er schade zichtbaar is. Dat helpt de bezoeker en maakt de aanvraag bruikbaarder."
            },
            {
              title: "Hoe deze pagina vindbaarheid kan ondersteunen",
              text:
                "Loodgieters zoeken niet op een abstracte term, maar op concrete problemen: lekkage oplossen, afvoer verstopt, wc verstopping, kraan vervangen of leidingwerk laten doen. De website moet die vragen met aparte blokken of pagina's beantwoorden."
            }
          ].map((section) => (
            <article className="rounded-lg border border-line bg-white p-7 shadow-sm md:p-9" key={section.title}>
              <h2 className="text-3xl font-extrabold tracking-normal text-ink">{section.title}</h2>
              <p className="mt-4 max-w-4xl text-base leading-8 text-muted">{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/72 py-8 md:py-12">
        <div className="container grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Intake
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink">
              Een betere aanvraag begint bij betere vragen
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Een goed formulier helpt de bezoeker kort uitleggen wat er speelt zonder
              dat de aanvraag te lang of technisch wordt.
            </p>
          </div>
          <div className="grid gap-3">
            {intakeChecklist.map((item) => (
              <div className="flex gap-3 rounded-lg border border-line bg-white p-4 shadow-sm" key={item}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="rounded-lg border border-line bg-white p-7 shadow-sm md:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Keuzehulp
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink">
              Spoedpagina of groeisite voor loodgieters?
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <article className="rounded-lg border border-line bg-cream/50 p-5">
                <h3 className="font-extrabold text-ink">Compacte basis</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Past wanneer je vooral sneller duidelijk wilt zijn: diensten,
                  servicegebied, belroute, contactformulier en FAQ. Goed voor een
                  loodgieter die bestaande vraag beter wil opvangen.
                </p>
              </article>
              <article className="rounded-lg border border-line bg-cream/50 p-5">
                <h3 className="font-extrabold text-ink">Groeisite</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Past wanneer je lokaal wilt groeien met aparte pagina's voor lekkage,
                  verstopping, sanitair, leidingwerk en onderhoud. Alleen zinvol met
                  echte uitleg per probleem.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink">
              Vragen over loodgieterswebsites
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details className="group rounded-lg border border-line bg-white p-5 shadow-sm" key={faq.question}>
                <summary className="cursor-pointer list-none text-base font-extrabold text-ink">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/72 py-8 md:py-12">
        <div className="container grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Verder lezen
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink">
              Logische vervolgstappen
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              { label: "Website voor loodgieters", href: "/website-voor-loodgieters" },
              { label: "Webontwikkeling", href: "/webontwikkeling" },
              { label: "Lokale SEO", href: "/lokale-seo" },
              { label: "Prijzen", href: "/prijzen" },
              { label: "Contact", href: "/contact" }
            ].map((link) => (
              <Link
                className="focus-ring rounded-lg border border-line bg-white p-4 text-sm font-extrabold text-ink shadow-sm transition hover:border-orange-soft hover:bg-peach hover:text-orange"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-5 rounded-lg bg-peach p-7 shadow-sm md:flex-row md:items-center md:p-9">
            <div>
              <h2 className="text-3xl font-extrabold tracking-normal text-ink">
                Wil je weten welke route jouw loodgieterswebsite nodig heeft?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted">
                Stuur je huidige pagina of dienstenoverzicht mee. Je krijgt praktische
                richting zonder valse spoedbeloftes of generieke SEO-tekst.
              </p>
            </div>
            <PrimaryCta />
          </div>
        </div>
      </section>
    </main>
  );
}
