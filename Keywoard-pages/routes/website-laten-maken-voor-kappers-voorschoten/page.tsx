import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  MapPin,
  Scissors,
  Search,
  Sparkles
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

const path = "/website-laten-maken-voor-kappers-voorschoten";
const title = "Website laten maken voor kappers in Voorschoten";
const description =
  "Een kapperswebsite voor Voorschoten moet snel laten voelen of de salon past: behandelingen, prijzen, sfeer, openingstijden en boeken zonder omweg.";

const faqs = [
  {
    question: "Wat kost een website voor een kapper in Voorschoten?",
    answer:
      "Dat hangt af van het aantal pagina's, behandelteksten, foto's, boekroute, lokale SEO en onderhoud. Een compacte salonwebsite is vaak genoeg als het aanbod simpel is; een groeisite past beter bij meerdere behandelingen en lokale vindbaarheid."
  },
  {
    question: "Moet ik prijzen op mijn kapperswebsite zetten?",
    answer:
      "Als vaste prijzen lastig zijn, gebruik dan vanaf-prijzen of prijsfactoren. Denk aan haarlengte, kleurtechniek, toner, styling of extra verzorging. Dat maakt de aanvraag beter voorbereid."
  },
  {
    question: "Kan ik mijn bestaande salonfoto's gebruiken?",
    answer:
      "Ja, zolang ze actueel, scherp en representatief zijn. Echte sfeerbeelden werken beter dan generieke stockfoto's, omdat klanten willen voelen of de salon bij hen past."
  },
  {
    question: "Heeft een kapper in Voorschoten lokale SEO nodig?",
    answer:
      "Dat is logisch wanneer je nieuwe klanten uit Voorschoten en omgeving wilt aantrekken. De pagina moet dan wel echte lokale relevantie hebben en niet alleen de plaatsnaam herhalen."
  },
  {
    question: "Kunnen jullie ook mijn Google Business Profile meenemen?",
    answer:
      "Ja. Website en Google Business Profile horen samen te kloppen: behandelingen, openingstijden, foto's, afspraaklink, adres of service-informatie en veelgestelde vragen."
  }
];

const treatmentBlocks = [
  {
    title: "Knippen en styling",
    text:
      "Laat direct zien voor wie de salon sterk is: dames, heren, kinderen, krullen, kort haar, lang haar of styling voor een gelegenheid."
  },
  {
    title: "Kleuren en highlights",
    text:
      "Kleurbehandelingen vragen om uitleg over intake, haarlengte, onderhoud, toner, uitgroei en voorbereiding. Dat voorkomt vage aanvragen."
  },
  {
    title: "Boeken en voorbereiding",
    text:
      "Een goede pagina vertelt hoe iemand boekt, wat handig is om vooraf te weten en wat er gebeurt na een aanvraag."
  }
];

const trustBlocks = [
  {
    title: "Sfeer en stijl",
    text:
      "Bezoekers willen voelen of de salon bij hen past. Echte foto's, rustige teksten en duidelijke specialisaties helpen meer dan stockbeelden."
  },
  {
    title: "Prijzen of prijsfactoren",
    text:
      "Niet elke behandeling heeft een vaste prijs. Vanaf-prijzen of factoren zoals haarlengte en kleurtechniek geven wel richting."
  },
  {
    title: "Openingstijden en route",
    text:
      "Voor lokale klanten tellen praktische details: wanneer kan ik terecht, waar zit de salon en hoe snel kan ik boeken?"
  }
];

const checklist = [
  "Staat bovenaan welke behandelingen de salon aanbiedt?",
  "Kan iemand op mobiel direct boeken of contact opnemen?",
  "Zijn prijzen, vanaf-prijzen of prijsfactoren begrijpelijk uitgelegd?",
  "Laat de pagina sfeer, stijl en vertrouwen zien zonder nepclaims?",
  "Zijn openingstijden, route, Google-profiel en contactgegevens consistent?",
  "Heeft de pagina FAQ's over boeken, kleuradvies, voorbereiding en planning?"
];

const comparisonRows = [
  {
    label: "Geschikt voor",
    compact: "Een salon met helder aanbod en vooral behoefte aan professionele basis",
    growth: "Een salon met meerdere behandelingen, lokale SEO-ambitie en meer content"
  },
  {
    label: "Inhoud",
    compact: "Home, behandelingen, sfeer, contact en boekroute",
    growth: "Losse behandelpagina's, FAQ's, lokale SEO, interne links en contentstructuur"
  },
  {
    label: "Beste keuze als",
    compact: "Klanten je al kennen en vooral snel informatie zoeken",
    growth: "Je meer nieuwe klanten uit Voorschoten en omgeving wilt aantrekken"
  }
];

const schemaContent = {
  eyebrow: "Kapperswebsite Voorschoten",
  title,
  description,
  heroPoints: [
    "Behandelingen en prijzen helder",
    "Mobiele boekroute",
    "Lokale SEO zonder plaatsnaamvulling"
  ],
  sections: [
    {
      title: "Behandelingen eerst",
      text: "Een salonwebsite moet direct laten zien welke behandelingen de salon aanbiedt.",
      items: treatmentBlocks
    },
    {
      title: "Vertrouwen opbouwen",
      text: "Sfeer, praktische informatie en voorbereiding maken de keuze makkelijker.",
      items: trustBlocks
    }
  ],
  steps: [
    {
      title: "Salonaanbod scherp maken",
      text: "Bepaal welke behandelingen, stijl en klantvragen bovenaan moeten staan."
    },
    {
      title: "Boekroute ontwerpen",
      text: "Maak de mobiele route naar afspraak, telefoon of formulier kort en helder."
    },
    {
      title: "SEO-structuur bouwen",
      text: "Geef behandelingen, FAQ's, metadata en interne links een logische plek."
    }
  ],
  faqs,
  primaryCta: "Vraag gratis websiteplan aan",
  secondaryCta: "Bekijk prijzen"
};

export const metadata: Metadata = {
  title: {
    absolute: "Website laten maken voor kappers in Voorschoten | MagisData"
  },
  description:
    "Kapperswebsite voor Voorschoten met behandelingen, prijzen, sfeer, boekroute, lokale SEO en een rustige route naar meer passende afspraken.",
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
    title: "Website laten maken voor kappers in Voorschoten | MagisData",
    description:
      "Kapperswebsite voor Voorschoten met behandelingen, prijzen, sfeer, boekroute, lokale SEO en een rustige route naar meer passende afspraken."
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

function SecondaryCta() {
  return (
    <Link
      className="focus-ring inline-flex items-center justify-center rounded-lg border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink shadow-sm transition hover:border-orange-soft hover:bg-peach hover:text-orange"
      href="/prijzen"
    >
      Bekijk prijzen
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
        <div className="container grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-orange-soft bg-peach px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
                Kapperswebsite Voorschoten
              </span>
              <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-soft">
                Servicepagina
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-normal text-ink md:text-6xl">
              Website laten maken voor kappers in Voorschoten
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Een kapperswebsite voor Voorschoten moet snel laten voelen of de salon past:
              behandelingen, prijzen, sfeer, openingstijden en boeken zonder omweg.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCta />
              <SecondaryCta />
            </div>
          </div>

          <aside className="rounded-lg border border-line bg-white p-6 shadow-card md:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
                  Salonroute
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-normal text-ink">
                  Van behandeling naar afspraak
                </h2>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-orange-soft text-orange">
                <Scissors className="h-6 w-6" />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">
              De pagina helpt een bezoeker in korte stappen: herkennen welke behandeling
              past, vertrouwen krijgen in de salon en direct een afspraak starten.
            </p>
            <div className="mt-7 grid gap-3">
              {["behandelingen", "prijsindicatie", "sfeer en bewijs", "boekroute", "openingstijden"].map((item, index) => (
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

      <section className="border-b border-line bg-white/78 py-8">
        <div className="container grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: Scissors,
              title: "Behandelingen scanbaar",
              text: "Knippen, kleuren, highlights en styling krijgen elk een duidelijke plek met korte uitleg."
            },
            {
              icon: MapPin,
              title: "Voorschoten-context",
              text: "Lokale klanten vergelijken ook salons rond Leiden. De pagina moet feitelijk uitleggen waar de salon relevant is."
            },
            {
              icon: CalendarCheck,
              title: "Boeken op mobiel",
              text: "Boekknop, route, telefoon en openingstijden staan dicht bij de keuze, niet verstopt onderaan."
            },
            {
              icon: Search,
              title: "SEO zonder spam",
              text: "Koppen, FAQ, metadata en interne links ondersteunen vindbaarheid zonder keyword stuffing."
            }
          ].map((item) => (
            <article className="min-h-36 rounded-lg border border-line bg-white p-5 shadow-sm" key={item.title}>
              <item.icon className="h-5 w-5 text-orange" />
              <h2 className="mt-4 font-extrabold text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          <article className="rounded-lg border border-orange-soft bg-white p-7 shadow-sm md:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Direct antwoord
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-normal text-ink">
              Wat moet een kapperswebsite in Voorschoten meteen duidelijk maken?
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-muted">
              Een website voor een kapper in Voorschoten moet bovenaan duidelijk maken
              welke behandelingen je aanbiedt, hoe iemand boekt, wat klanten ongeveer
              kunnen verwachten qua prijs of voorbereiding, en waarom jouw salon de moeite
              waard is. Omdat klanten ook salons in Leiden vergelijken, moet de pagina
              lokaal duidelijk zijn zonder een vestiging of resultaten te claimen die er niet zijn.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white/72 py-8 md:py-12">
        <div className="container grid gap-8">
          {[
            {
              title: "Waarom deze pagina niet op een algemene webdesignpagina lijkt",
              paragraphs: [
                "Een salonbezoek is persoonlijk. Iemand kiest niet alleen op afstand of prijs, maar ook op stijl, vertrouwen, behandelingstype en hoe makkelijk een afspraak voelt. Daarom moet de pagina meer doen dan zeggen dat MagisData websites maakt.",
                "Deze pagina behandelt de concrete keuzes die een kappersklant maakt: past de behandeling, is de sfeer goed, kan ik snel boeken, weet ik ongeveer wat het kost en is de salon praktisch bereikbaar vanuit Voorschoten of omgeving?"
              ]
            },
            {
              title: "Voorbeeld van inhoud die waarde toevoegt",
              paragraphs: [
                "Een sterke kapperswebsite kan per behandeling kort uitleggen wanneer die behandeling past. Bij kleuren kan dat gaan over uitgroei, toner, highlights, balayage of onderhoud. Bij knippen kan het gaan over advies, krullen, kinderen of heren.",
                "Dat soort informatie helpt bezoekers echt kiezen en geeft Google meer context dan een losse lijst met diensten. Het maakt de pagina inhoudelijk anders dan een generieke lokale landingspagina."
              ]
            },
            {
              title: "Wat MagisData concreet zou bouwen",
              paragraphs: [
                "De pagina krijgt een rustige hero met behandeling, plaats en boekactie. Daaronder komen behandelblokken, sfeer of bewijs, prijsfactoren, openingstijden, Google-profielconsistentie, FAQ en een korte route naar afspraak.",
                "Als de salon meerdere sterke behandelingen heeft, is het slimmer om die later uit te bouwen als aparte behandelpagina's. Zo groeit de website vanuit echte zoekvragen in plaats van vanuit herhaalde plaatsnaamteksten."
              ]
            }
          ].map((section, index) => (
            <article className="grid gap-8 rounded-lg border border-line bg-white p-7 shadow-sm md:p-9 lg:grid-cols-[0.34fr_0.66fr]" key={section.title}>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
                  Onderdeel {index + 1}
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink">
                  {section.title}
                </h2>
              </div>
              <div className="grid gap-5 text-base leading-8 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container grid gap-7">
          <article className="rounded-lg border border-line bg-white p-7 shadow-sm md:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
                  Behandelingen
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink">
                  Welke saloninformatie moet op de pagina staan?
                </h2>
                <p className="mt-4 leading-7 text-muted">
                  Een kapperswebsite wordt sterker wanneer behandelingen niet als losse
                  woorden onder elkaar staan, maar elk een duidelijke keuze helpen maken.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {treatmentBlocks.map((item) => (
                  <div className="rounded-lg border border-line bg-cream/50 p-5" key={item.title}>
                    <h3 className="font-extrabold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-lg border border-line bg-white p-7 shadow-sm md:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
                  Vertrouwen
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink">
                  Wat haalt twijfel weg voordat iemand boekt?
                </h2>
                <p className="mt-4 leading-7 text-muted">
                  Kappersklanten willen weten of de salon bij hun stijl, planning en
                  verwachting past. De pagina moet die twijfel rustig beantwoorden.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {trustBlocks.map((item) => (
                  <div className="rounded-lg border border-line bg-cream/50 p-5" key={item.title}>
                    <h3 className="font-extrabold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Checklist
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink">
              Checklist voor een kapperswebsite in Voorschoten
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Gebruik deze punten om te controleren of de pagina waarde geeft voor echte bezoekers.
            </p>
          </div>
          <div className="grid gap-3">
            {checklist.map((item) => (
              <div className="flex gap-3 rounded-lg border border-line bg-white p-4 shadow-sm" key={item}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/72 py-8 md:py-12">
        <div className="container">
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Keuzehulp
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink">
              Compacte salonwebsite of groeisite?
            </h2>
            <div className="mt-7 overflow-hidden rounded-lg border border-line">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-cream">
                  <tr>
                    <th className="border-b border-line p-4 font-extrabold text-ink">Onderdeel</th>
                    <th className="border-b border-line p-4 font-extrabold text-ink">Compact</th>
                    <th className="border-b border-line p-4 font-extrabold text-ink">Groei</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <th className="border-b border-line p-4 font-bold text-ink">{row.label}</th>
                      <td className="border-b border-line p-4 leading-6 text-muted">{row.compact}</td>
                      <td className="border-b border-line p-4 leading-6 text-muted">{row.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="rounded-lg border border-line bg-white p-7 shadow-sm md:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Werkwijze
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink">
              Van salonaanbod naar duidelijke websitepagina
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-4">
              {[
                {
                  icon: Sparkles,
                  title: "Aanbod scherp maken",
                  text: "We bepalen welke behandelingen, stijl en klantvragen bovenaan moeten staan."
                },
                {
                  icon: CalendarCheck,
                  title: "Boekroute ontwerpen",
                  text: "We maken de mobiele route naar afspraak, telefoon of formulier kort en helder."
                },
                {
                  icon: Search,
                  title: "SEO-structuur bouwen",
                  text: "Behandelingen, FAQ's, metadata en interne links krijgen een logische plek."
                },
                {
                  icon: Clock3,
                  title: "Verbeteren",
                  text: "Na livegang kijk je welke vragen, behandelingen en contactroutes aangescherpt moeten worden."
                }
              ].map((step, index) => (
                <div className="rounded-lg border border-line bg-cream/50 p-5" key={step.title}>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-orange text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <step.icon className="mt-5 h-5 w-5 text-orange" />
                  <h3 className="mt-3 font-extrabold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
                </div>
              ))}
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
              Vragen over kapperswebsites
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
              { label: "Website voor kappers", href: "/website-voor-kappers" },
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
                Wil je weten welke websiteopbouw past bij jouw salon?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted">
                Stuur je huidige website of salonaanbod mee. Je krijgt praktische richting
                zonder verplichting en zonder opgeblazen beloftes.
              </p>
            </div>
            <PrimaryCta />
          </div>
        </div>
      </section>
    </main>
  );
}
