import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { RelatedLinks } from "@/components/related-links";
import { relatedLinksByPath } from "@/content/internal-links";
import { insights } from "@/content/pages";
import { metadataForPath } from "@/content/seo";
import { articleSchema, breadcrumbSchema, faqSchema, founderName, graphSchema, webPageSchema } from "@/schemas/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type ArticleContent = {
  directAnswer: string;
  sections: {
    title: string;
    paragraphs: string[];
  }[];
  checklist: string[];
  applicationSteps: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

const articleContent: Record<string, ArticleContent> = {
  "website-meer-aanvragen": {
    directAnswer:
      "Een website krijgt vaak weinig aanvragen omdat aanbod, bewijs en vervolgstap niet snel genoeg duidelijk zijn. Begin met een vijfsecondencheck, zet vertrouwen dicht bij de dienst, verkort de mobiele contactroute en vraag alleen informatie die nodig is voor een eerste reactie.",
    sections: [
      {
        title: "Waarom een mooie website toch weinig kan opleveren",
        paragraphs: [
          "Een nette website is geen garantie voor contact. Bezoekers beslissen in korte stappen: begrijp ik wat dit bedrijf doet, past het bij mijn situatie, vertrouw ik dit genoeg en weet ik wat er gebeurt na mijn aanvraag? Als een van die stappen vaag blijft, stellen mensen contact uit.",
          "Veel websites openen met sfeer, algemene beloftes of lange introducties. Dat kan mooi ogen, maar het helpt niet altijd bij kiezen. Een bezoeker zoekt eerst herkenning. Die wil in gewone taal zien welke dienst wordt geleverd, voor wie die dienst is en welke vervolgstap logisch is."
        ]
      },
      {
        title: "Gebruik de vijfsecondencheck",
        paragraphs: [
          "Laat iemand die je bedrijf niet goed kent vijf seconden naar je homepage kijken. Vraag daarna: wat doet dit bedrijf, voor wie is het, en welke stap zou je nemen? Als het antwoord vaag is, is de eerste schermhoogte niet scherp genoeg.",
          "Een sterke eerste indruk bevat een concrete H1, een korte uitleg van doelgroep en dienst, een primaire actie en een zichtbaar vertrouwenssignaal. Voor lokale dienstverleners helpt het ook om regio of werkgebied vroeg duidelijk te maken."
        ]
      },
      {
        title: "Bewijs hoort naast twijfel, niet onderaan",
        paragraphs: [
          "Bezoekers twijfelen meestal bij prijs, kwaliteit, ervaring, planning en betrouwbaarheid. Bewijs werkt daarom het best op de plek waar die twijfel ontstaat. Een portfolio-ontwerp, procesuitleg, review, foto of voorbeeld kan een dienstblok sterker maken dan een losse bewijssectie onderaan.",
          "Publiceer alleen bewijs dat klopt. Als resultaten, reviews of klantnamen niet geverifieerd zijn, beschrijf dan ontwerpkeuzes, methode of proces. Dat is eerlijker en vaak nuttiger dan grote claims zonder bron."
        ]
      },
      {
        title: "Maak mobiel contact korter",
        paragraphs: [
          "Veel aanvragen starten mobiel. Controleer daarom of telefoon, e-mail, formulier en belangrijkste CTA zichtbaar en makkelijk te gebruiken zijn. Een formulier met te veel velden kan goede bezoekers verliezen voordat er contact is.",
          "Leg ook uit wat er na verzending gebeurt. Een simpele zin zoals 'Je krijgt meestal binnen een werkdag een praktische reactie' verlaagt onzekerheid. Conversie-optimalisatie is vaak geen truc, maar het weghalen van onnodige twijfel."
        ]
      }
    ],
    checklist: [
      "Is binnen vijf seconden duidelijk welke dienst je levert?",
      "Staat bewijs dicht bij de dienst waar twijfel ontstaat?",
      "Heeft mobiel een korte route naar bellen of aanvragen?",
      "Vraag je formulier alleen wat nodig is voor een eerste reactie?",
      "Vertel je wat er gebeurt na contact?"
    ],
    applicationSteps: [
      { title: "Controleer de eerste vijf seconden", text: "Vraag iemand buiten je bedrijf wat je doet en welke stap logisch is na het zien van de hero." },
      { title: "Zet bewijs naast je aanbod", text: "Plaats cases, reviews, procesbewijs of voorbeelden bij de dienst waar iemand over twijfelt." },
      { title: "Maak contact voorspelbaar", text: "Leg kort uit wat er gebeurt na een aanvraag, zodat de drempel lager wordt." }
    ],
    faqs: [
      { question: "Waarom krijg ik weinig aanvragen terwijl mijn website mooi is?", answer: "Meestal mist er duidelijkheid over aanbod, bewijs of vervolgstap. Design helpt pas wanneer bezoekers snel begrijpen waarom contact veilig en logisch is." },
      { question: "Moet ik direct A/B-testen?", answer: "Niet altijd. Bij weinig verkeer is een kwalitatieve frictiecheck vaak logischer: eerste indruk, bewijs, CTA, formulier en mobiel gebruik nalopen." },
      { question: "Welke contactvelden zijn echt nodig?", answer: "Voor een eerste reactie zijn naam, e-mail, vraag en eventueel website vaak genoeg. Extra velden voeg je alleen toe als ze de opvolging echt verbeteren." }
    ]
  },
  "seo-zonder-jargon": {
    directAnswer:
      "SEO betekent dat je website duidelijk antwoord geeft op zoekvragen van mensen die al interesse hebben. Voor lokale bedrijven draait dat om servicepagina's, heldere koppen, interne links, technische basis en content die echte klantvragen beantwoordt zonder zoekwoordstapeling.",
    sections: [
      {
        title: "SEO begint bij een echte zoekvraag",
        paragraphs: [
          "SEO klinkt technisch, maar de basis is eenvoudig: iemand zoekt iets, en jouw pagina moet beter helpen dan de alternatieven. Een goede SEO-pagina heeft daarom een duidelijke taak. Die gaat niet over alles tegelijk, maar over een dienst, probleem, regio of vraag.",
          "Voor een lokale dienstverlener kan dat bijvoorbeeld zijn: 'website laten maken Leiden', 'lokale SEO voor dienstverleners' of 'website krijgt weinig aanvragen'. Iedere zoekvraag vraagt om een eigen antwoord, met eigen voorbeelden en vervolgstappen."
        ]
      },
      {
        title: "Maak een simpele intentiekaart",
        paragraphs: [
          "Schrijf je belangrijkste diensten op en zet daar klantvragen onder. Denk aan kosten, aanpak, planning, werkgebied, garanties, eigendom, onderhoud en bewijs. Daarna kies je per vraag of die thuishoort op een servicepagina, FAQ, inzichtartikel of contactpagina.",
          "Zo voorkom je dat meerdere pagina's hetzelfde proberen te doen. Een pagina over SEO-diensten kan breed uitleggen wat SEO omvat. Een pagina over SEO bureau Leiden moet juist lokale context, servicegebied, NAP, Google Business Profile en regionale zoekintentie behandelen."
        ]
      },
      {
        title: "Interne links maken samenhang zichtbaar",
        paragraphs: [
          "Interne links zijn geen decoratie. Ze helpen bezoekers verder en laten zoekmachines zien welke pagina's bij elkaar horen. Een lokale SEO-pagina linkt logisch naar SEO-diensten, een lokale websitepagina, een relevant inzicht en contact.",
          "Gebruik duidelijke ankerteksten. 'Lees meer' is minder sterk dan 'Bekijk lokale SEO' of 'Vraag SEO-scan aan'. De tekst rond de link moet uitleggen waarom de volgende pagina relevant is."
        ]
      },
      {
        title: "Techniek ondersteunt, maar vervangt inhoud niet",
        paragraphs: [
          "Snelheid, metadata, canonicals, sitemap, schema en mobiel gebruik zijn belangrijk. Ze zorgen dat een goede pagina gevonden, begrepen en gebruikt kan worden. Maar techniek kan dunne inhoud niet redden.",
          "De beste SEO voelt voor klanten als betere uitleg. Je noemt zoekwoorden natuurlijk, beantwoordt bezwaren, toont bewijs waar dat eerlijk kan en maakt contact makkelijk. Daarmee verbeter je vindbaarheid en de kans dat bezoek nuttig wordt."
        ]
      }
    ],
    checklist: [
      "Heeft elke belangrijke pagina een eigen zoekintentie?",
      "Staat het directe antwoord bovenaan?",
      "Gebruik je klanttaal in H1, H2 en FAQ's?",
      "Link je naar relevante diensten, bewijs en contact?",
      "Klopt de technische basis: title, description, canonical, sitemap en schema?"
    ],
    applicationSteps: [
      { title: "Kies per pagina een zoekvraag", text: "Richt elke belangrijke pagina op een onderwerp dat klanten echt zoeken." },
      { title: "Schrijf voor herkenning", text: "Gebruik voorbeelden, situaties en woorden die klanten zelf zouden gebruiken." },
      { title: "Link logisch door", text: "Verbind diensten, cases en artikelen zodat bezoekers en zoekmachines de samenhang zien." }
    ],
    faqs: [
      { question: "Moet ik veel bloggen voor SEO?", answer: "Niet per se. Sterke servicepagina's en enkele goede artikelen rond echte klantvragen zijn meestal waardevoller dan veel korte blogs zonder duidelijke intentie." },
      { question: "Hoe snel werkt SEO?", answer: "Technische verbeteringen kunnen snel zichtbaar zijn, maar betrouwbare groei vraagt meestal maanden. Ranking hangt ook af van concurrentie, autoriteit en lokale signalen." },
      { question: "Wat is belangrijker: zoekwoorden of inhoud?", answer: "Zoekwoorden helpen richting kiezen, maar inhoud wint. De pagina moet de vraag volledig, concreet en betrouwbaar beantwoorden." }
    ]
  },
  "ai-vindbaarheid": {
    directAnswer:
      "AI-vindbaarheid betekent dat AI-systemen je bedrijf correct kunnen begrijpen, samenvatten en eventueel citeren. Dat vraagt om consistente entiteiten, duidelijke servicepagina's, korte antwoordblokken, schema, actuele informatie en bewijs dat zichtbaar op de site staat.",
    sections: [
      {
        title: "AI zoekt naar duidelijke entiteiten",
        paragraphs: [
          "AI-systemen proberen bedrijven te plaatsen: wie ben je, wat lever je, voor wie, waar, en waarom ben je betrouwbaar? Als die informatie verspreid, vaag of tegenstrijdig is, wordt je bedrijf moeilijker correct samen te vatten.",
          "Begin daarom met entiteiten. Gebruik consequent dezelfde bedrijfsnaam, founder, diensten, regio, doelgroep en contactgegevens. Voor MagisData betekent dat bijvoorbeeld: website- en SEO-bureau, lokale dienstverleners, Nederland, Voorschoten/Leiden, SEO, AEO, GEO en AI-vindbaarheid."
        ]
      },
      {
        title: "SEO, AEO, GEO en AI-vindbaarheid verschillen",
        paragraphs: [
          "SEO richt zich op vindbaarheid in zoekmachines. AEO richt zich op directe antwoorden op concrete vragen. GEO richt zich op entiteiten, context en citeerbaarheid in generatieve antwoorden. AI-vindbaarheid is de brede laag waarin die drie elkaar versterken.",
          "In praktijk heb je ze samen nodig. Een sterke SEO-pagina wordt beter wanneer die korte antwoordblokken bevat. Een AEO-antwoord wordt betrouwbaarder wanneer schema en interne links de context bevestigen. GEO wordt sterker wanneer bewijs en contactgegevens zichtbaar zijn."
        ]
      },
      {
        title: "Schrijf antwoordblokken die zelfstandig werken",
        paragraphs: [
          "AI-systemen halen vaak passages uit pagina's. Een bruikbaar antwoordblok is kort, concreet en los te begrijpen. Begin met de definitie of conclusie, voeg daarna context toe. Vermijd zinnen die alleen werken als je de hele pagina hebt gelezen.",
          "Voorbeeld: 'Lokale SEO verbindt diensten, werkgebied, contactgegevens en klantvragen zodat mensen in de regio je bedrijf makkelijker kunnen beoordelen.' Zo'n zin is duidelijker dan 'Wij zorgen voor maximale online zichtbaarheid'."
        ]
      },
      {
        title: "Wat AI-vindbaarheid niet garandeert",
        paragraphs: [
          "Niemand kan garanderen dat ChatGPT, Perplexity, Gemini of Google AI Overviews je bedrijf noemen. Die systemen gebruiken eigen indexen, rankings, bronnen en timing. Je kunt wel de voorwaarden verbeteren: heldere inhoud, actuele data, consistente schema en echte externe signalen.",
          "Daarom moet machine-readable informatie altijd dezelfde waarheid dragen als zichtbare pagina's. Een llms.txt kan helpen, maar mag geen claims bevatten die bezoekers niet op de site kunnen controleren."
        ]
      }
    ],
    checklist: [
      "Zijn bedrijfsnaam, founder, locatie en diensten consistent?",
      "Heeft elke AI-relevante pagina een duidelijke definitie bovenaan?",
      "Zijn FAQ's kort genoeg om zelfstandig geciteerd te worden?",
      "Klopt schema met zichtbare content?",
      "Noemt llms.txt alleen controleerbare feiten?"
    ],
    applicationSteps: [
      { title: "Maak je aanbod expliciet", text: "Noem duidelijk welke diensten je levert, voor wie ze zijn en welke problemen je oplost." },
      { title: "Voeg antwoordblokken toe", text: "Beantwoord veelgestelde vragen in korte, concrete alinea's die makkelijk te citeren zijn." },
      { title: "Houd informatie consistent", text: "Gebruik dezelfde termen voor diensten, regio en expertise op je hele website." }
    ],
    faqs: [
      { question: "Kan ik mijn bedrijf vindbaar maken in ChatGPT?", answer: "Je kunt de kans verbeteren met duidelijke, crawlbare en consistente content. Een vermelding of citaat in ChatGPT kan niet worden gegarandeerd." },
      { question: "Is llms.txt genoeg voor AI-vindbaarheid?", answer: "Nee. llms.txt helpt alleen als het zichtbare content samenvat. Servicepagina's, schema, interne links en externe signalen blijven belangrijk." },
      { question: "Wat is het verschil tussen AEO en GEO?", answer: "AEO maakt antwoorden makkelijk extraheerbaar. GEO maakt entiteiten, context en bronnen duidelijker voor generatieve systemen. Ze vullen elkaar aan." }
    ]
  }
};

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = insights.find((insight) => insight.slug === slug);

  if (!item) {
    return {};
  }

  return metadataForPath(`/inzichten/${item.slug}`);
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = insights.find((insight) => insight.slug === slug);

  if (!item) {
    notFound();
  }

  const Icon = item.icon;
  const content = articleContent[item.slug] ?? {
    directAnswer: item.summary,
    sections: [{ title: "Kern", paragraphs: [item.summary] }],
    checklist: [],
    applicationSteps: [],
    faqs: []
  };
  const schema = graphSchema([
    webPageSchema({
      path: `/inzichten/${item.slug}`,
      name: item.title,
      description: item.summary
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Inzichten", path: "/inzichten" },
      { name: item.title, path: `/inzichten/${item.slug}` }
    ]),
    articleSchema(item),
    ...(content.faqs.length ? [faqSchema(content.faqs, `/inzichten/${item.slug}`)] : [])
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <article className="container max-w-5xl py-16 md:py-24">
        <Link className="focus-ring inline-flex items-center text-sm font-extrabold text-orange" href="/inzichten">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Terug naar inzichten
        </Link>

        <div className="mt-8 rounded-[2rem] border border-line bg-white p-7 shadow-sm md:p-10">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-soft text-blue">
            <Icon className="h-7 w-7" strokeWidth={2.1} />
          </span>
          <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
            Inzicht
          </p>
          <p className="mt-3 text-sm font-semibold text-soft">
            Door {founderName} - Laatst bijgewerkt: {item.dateModified}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-[-0.035em] text-navy md:text-6xl">
            {item.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">{item.summary}</p>

          <section className="mt-10 rounded-2xl border border-orange-soft bg-peach p-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Direct antwoord
            </p>
            <p className="mt-3 text-base font-semibold leading-8 text-ink">{content.directAnswer}</p>
          </section>

          <div className="mt-10 grid gap-10 text-base leading-8 text-muted">
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-navy">
                  {section.title}
                </h2>
                <div className="mt-5 grid gap-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-line bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-navy">
              Wil je dit naar je eigen website vertalen?
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Vraag een gratis websiteplan aan. We kijken naar je belangrijkste pagina, zoekvraag, bewijs en contactroute.
            </p>
            <Link className="focus-ring mt-5 inline-flex items-center justify-center rounded-xl bg-orange px-5 py-3 text-sm font-bold text-white hover:bg-orange-dark" href="/contact">
              Vraag gratis websiteplan aan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </section>

          <section className="mt-10 rounded-2xl bg-peach p-6">
            <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-navy">
              Simpele checklist
            </h2>
            <ul className="mt-5 grid gap-3">
              {content.checklist.map((item) => (
                <li className="flex gap-3 text-sm font-semibold leading-6 text-ink" key={item}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-navy">
              Zo pas je dit toe op je eigen website
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {content.applicationSteps.map((step) => (
                <div className="rounded-2xl border border-line bg-cream/60 p-5 shadow-sm" key={step.title}>
                  <h3 className="font-extrabold text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-navy">
              Veelgestelde vragen
            </h2>
            <div className="mt-6 grid gap-4">
              {content.faqs.map((faq) => (
                <details className="group rounded-2xl border border-line bg-cream/60 p-5 shadow-sm" key={faq.question}>
                  <summary className="cursor-pointer list-none text-base font-extrabold text-navy">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>
      <RelatedLinks links={relatedLinksByPath[`/inzichten/${item.slug}`] ?? []} />
    </main>
  );
}
