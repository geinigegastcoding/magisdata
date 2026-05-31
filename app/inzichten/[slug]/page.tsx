import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { RelatedLinks } from "@/components/related-links";
import { relatedLinksByPath } from "@/content/internal-links";
import { insights } from "@/content/pages";
import { metadataForPath } from "@/content/seo";
import { articleSchema, breadcrumbSchema, graphSchema, webPageSchema } from "@/schemas/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const articleBodies: Record<string, string[]> = {
  "website-meer-aanvragen": [
    "Een website kan er netjes uitzien en toch weinig opleveren. Dat komt vaak doordat bezoekers te hard moeten nadenken. Ze zoeken snel antwoord op drie vragen: wat doe je, kan ik je vertrouwen en wat moet ik nu doen?",
    "Goede pagina's maken die vragen meteen duidelijk. De kop vertelt het belangrijkste voordeel. De tekst legt uit voor wie de dienst is. Bewijs zoals cases, reviews en concrete voorbeelden haalt twijfel weg.",
    "Daarna moet de volgende stap makkelijk zijn. Een contactknop, korte uitleg van het proces en duidelijke verwachtingen maken de drempel lager.",
    "Let ook op de volgorde van informatie. Veel websites beginnen te snel over zichzelf, terwijl de bezoeker eerst wil weten of het aanbod bij zijn probleem past. Een sterke pagina begint daarom met herkenning, daarna pas met uitleg over aanpak en bewijs.",
    "Voor Google werkt dezelfde logica. Een pagina die alleen kort verkoopt, heeft weinig context. Een pagina die de dienst, doelgroep, voordelen, vragen en vervolgstappen uitlegt, geeft zoekmachines meer redenen om de inhoud te begrijpen en te tonen."
  ],
  "seo-zonder-jargon": [
    "SEO betekent dat je website beter vindbaar wordt voor mensen die al zoeken naar jouw dienst. De basis is minder technisch dan veel ondernemers denken.",
    "Je hebt pagina's nodig die echte klantvragen beantwoorden. Gebruik woorden die klanten zelf gebruiken. Leg je dienst uit alsof je met iemand aan tafel zit.",
    "Techniek blijft belangrijk, maar zonder duidelijke inhoud wordt SEO zwak. Een snelle website, logische koppen, goede links en nuttige antwoorden vormen samen het fundament.",
    "Een goede SEO-pagina richt zich op een duidelijke zoekintentie. Iemand die zoekt naar een dienst wil meestal weten wat het oplevert, wat het kost, hoe het proces werkt, wanneer het geschikt is en waarom jouw bedrijf betrouwbaar is.",
    "Daarom is SEO ook conversiewerk. Je trekt niet alleen bezoekers aan, je helpt ze kiezen. De beste optimalisatie voelt voor klanten als betere uitleg, niet als een tekst die vol zoekwoorden staat."
  ],
  "ai-vindbaarheid": [
    "AI-systemen worden steeds vaker gebruikt om bedrijven te vergelijken of antwoorden samen te vatten. Daarom moet je website niet alleen mooi zijn, maar ook makkelijk te begrijpen.",
    "Beschrijf concreet wat je doet, voor wie je werkt, welke problemen je oplost en waarom je betrouwbaar bent. Vermijd vage claims die iedereen kan maken.",
    "Sterke FAQ's, cases, servicepagina's en consistente contactinformatie helpen AI-systemen en bezoekers om je bedrijf correct te plaatsen.",
    "AI-vindbaarheid begint met entiteiten: je bedrijfsnaam, diensten, regio, doelgroep, specialisaties en bewijs. Als die informatie verspreid of inconsistent is, wordt het moeilijker om je bedrijf goed samen te vatten.",
    "Schrijf daarom korte blokken die zelfstandig te begrijpen zijn. Een alinea over je werkwijze, een alinea over je doelgroep en een alinea over je resultaten zijn vaak waardevoller dan algemene claims over kwaliteit."
  ]
};

const applicationSteps: Record<string, { title: string; text: string }[]> = {
  "website-meer-aanvragen": [
    { title: "Controleer de eerste vijf seconden", text: "Vraag iemand die je bedrijf niet goed kent wat je doet en welke stap logisch is na het zien van je homepage." },
    { title: "Zet bewijs naast je aanbod", text: "Plaats cases, reviews of concrete voorbeelden dicht bij de dienst waar iemand over twijfelt." },
    { title: "Maak contact voorspelbaar", text: "Leg kort uit wat er gebeurt na een aanvraag, zodat de drempel lager wordt." }
  ],
  "seo-zonder-jargon": [
    { title: "Kies per pagina een zoekvraag", text: "Richt elke belangrijke pagina op een onderwerp dat klanten echt zoeken." },
    { title: "Schrijf voor herkenning", text: "Gebruik voorbeelden, situaties en woorden die klanten zelf zouden gebruiken." },
    { title: "Link logisch door", text: "Verbind diensten, cases en artikelen zodat bezoekers en zoekmachines de samenhang zien." }
  ],
  "ai-vindbaarheid": [
    { title: "Maak je aanbod expliciet", text: "Noem duidelijk welke diensten je levert, voor wie ze zijn en welke problemen je oplost." },
    { title: "Voeg antwoordblokken toe", text: "Beantwoord veelgestelde vragen in korte, concrete alinea's die makkelijk te citeren zijn." },
    { title: "Houd informatie consistent", text: "Gebruik dezelfde termen voor diensten, regio en expertise op je hele website." }
  ]
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
  const body = articleBodies[item.slug] ?? [];
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
    articleSchema(item)
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
            Laatst bijgewerkt: {item.dateModified}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-[-0.035em] text-navy md:text-6xl">
            {item.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">{item.summary}</p>

          <div className="mt-10 grid gap-6 text-base leading-8 text-muted">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section className="mt-10 rounded-2xl bg-peach p-6">
            <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-navy">
              Simpele checklist
            </h2>
            <ul className="mt-5 grid gap-3">
              {[
                "Is binnen vijf seconden duidelijk wat je doet?",
                "Gebruik je woorden die klanten ook gebruiken?",
                "Is de volgende stap makkelijk te vinden?",
                "Beantwoord je de belangrijkste vragen voor contact?"
              ].map((item) => (
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
              {(applicationSteps[item.slug] ?? []).map((step) => (
                <div className="rounded-2xl border border-line bg-cream/60 p-5 shadow-sm" key={step.title}>
                  <h3 className="font-extrabold text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
      <RelatedLinks links={relatedLinksByPath[`/inzichten/${item.slug}`] ?? []} />
    </main>
  );
}
