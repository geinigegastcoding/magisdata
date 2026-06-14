import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  MapPin,
  Search,
  Sparkles
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, articleSchema, breadcrumbSchema, faqSchema, graphSchema, serviceSchema, webPageSchema } from "@/schemas/seo";
import { getDraftKeywordPage, type KeywordDraftPageContent } from "./keyword-page-data";

type KeywordDraftPageProps = {
  slug: string;
};

export function keywordPageMetadata(slug: string): Metadata {
  const page = getDraftKeywordPage(slug);

  if (!page) {
    return {
      robots: {
        index: false,
        follow: false
      }
    };
  }

  return {
    title: {
      absolute: page.metaTitle
    },
    description: page.metaDescription,
    alternates: {
      canonical: page.productionPath
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      url: absoluteUrl(page.productionPath),
      siteName: "MagisData",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [
        {
          url: absoluteUrl("/assets/og-image.webp"),
          width: 1200,
          height: 630,
          alt: page.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [absoluteUrl("/assets/og-image.webp")]
    }
  };
}

function pageSchema(page: KeywordDraftPageContent) {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    {
      name: page.pageKind === "guide" ? "Inzichten" : page.eyebrow,
      path: page.pageKind === "guide" ? "/inzichten" : page.productionPath
    },
    ...(page.pageKind === "guide" ? [{ name: page.title, path: page.productionPath }] : [])
  ];

  const nodes: object[] = [
    webPageSchema({
      path: page.productionPath,
      name: page.title,
      description: page.metaDescription
    }),
    breadcrumbSchema(breadcrumbItems),
    faqSchema(page.faqs, page.productionPath)
  ];

  if (page.schemaType === "Service") {
    nodes.push(
      serviceSchema(
        {
          eyebrow: page.eyebrow,
          title: page.title,
          description: page.description,
          heroPoints: page.highlights.map((item) => item.title),
          sections: page.sections,
          steps: page.steps,
          faqs: page.faqs,
          primaryCta: page.primaryCta,
          secondaryCta: page.secondaryCta
        },
        page.productionPath
      )
    );
  }

  if (page.schemaType === "Article") {
    nodes.push(
      articleSchema({
        title: page.title,
        summary: page.metaDescription,
        slug: page.slug,
        datePublished: page.dateModified,
        dateModified: page.dateModified
      })
    );
  }

  return graphSchema(nodes);
}

function intentText(page: KeywordDraftPageContent) {
  switch (page.template) {
    case "branch-location":
      return "Koopintentie: bezoeker zoekt een partij die een website kan maken voor een specifieke branche en plaats.";
    case "branch-problem":
      return "Probleemintentie: bezoeker wil begrijpen waarom websitebezoekers niet converteren.";
    case "branch-checklist":
      return "Checklistintentie: bezoeker wil weten wat op de website moet staan voordat er gebouwd of verbeterd wordt.";
    case "local-seo":
      return "Service-intentie: bezoeker vergelijkt lokale SEO-hulp voor eigen werkgebied.";
    case "google-business-profile":
      return "Praktische gids: bezoeker wil Google Business Profile verbeteren zonder vage rankingclaims.";
    case "pricing":
      return "Prijsintentie: bezoeker wil scope, kostenfactoren en pakketkeuze begrijpen.";
    case "package-choice":
      return "Vergelijkingsintentie: bezoeker wil een pakket kiezen zonder verkooppush.";
    case "ai-visibility":
      return "Nieuwe service-intentie: bezoeker wil beter begrijpbaar worden voor AI-antwoorden.";
    case "technical-guide":
      return "Troubleshooting-intentie: bezoeker wil zelf controleren wat stuk, traag of onduidelijk is.";
  }
}

function fullValueSections(page: KeywordDraftPageContent) {
  const mainItems = page.sections.flatMap((section) => section.items);
  const first = mainItems[0];
  const second = mainItems[1] ?? first;
  const third = mainItems[2] ?? second;
  const links = page.internalLinks.slice(0, 5).map((link) => link.label).join(", ");

  if (page.template === "branch-location") {
    return [
      {
        title: "Voor wie deze pagina bedoeld is",
        paragraphs: [
          `${page.title} is bedoeld voor een lokale dienstverlener die niet alleen een mooi ontwerp wil, maar een pagina die bezoekers helpt kiezen. De bezoeker moet snel zien wat het bedrijf doet, in welke regio het werkt, waarom het betrouwbaar is en welke vervolgstap logisch is.`,
          `Deze pagina werkt alleen als de inhoud feitelijk blijft. Geen verzonnen vestiging, geen nepresultaten en geen algemene plaatsnaampagina. De lokale context moet aantoonbaar passen bij werkgebied, doelgroep en dienstverlening. Daardoor blijft de pagina nuttig voor mensen en veiliger voor SEO.`
        ]
      },
      {
        title: "Concrete pagina-inhoud die ranking en aanvragen ondersteunt",
        paragraphs: [
          `De eerste schermhoogte moet zoekintentie beantwoorden: ${page.directAnswer} Daarna volgt bewijs dichtbij twijfelpunten, niet pas onderaan. Denk aan echte projectfoto's, procesuitleg, duidelijke diensten, scopefactoren, werkgebied en veelgestelde vragen.`,
          `Ondersteunende secties horen elkaar niet te herhalen. Een dienstblok legt uit wanneer de dienst relevant is. Een lokaal blok legt uit voor wie het werkgebied klopt. Een FAQ neemt praktische twijfel weg over kosten, planning, voorbereiding en contact. Interne links sturen door naar ${links}.`
        ]
      },
      {
        title: "Voorbeeld van betere informatievolgorde",
        paragraphs: [
          `Zwak: openen met een algemene slogan, daarna een lange tekst over kwaliteit, en pas onderaan contactgegevens. Sterk: openen met dienst, doelgroep, plaats en actie. Daarna drie herkenbare diensten, proces, bewijs, prijs- of scope-uitleg, FAQ en een korte contactroute.`,
          `Deze volgorde helpt ook zoekmachines. Koppen, antwoorden en interne links maken duidelijk welke zoekvraag de pagina beantwoordt. De pagina hoeft het keyword niet te herhalen; de inhoud moet bewijzen dat het onderwerp volledig en lokaal relevant behandeld wordt.`
        ]
      }
    ];
  }

  if (page.template === "local-seo" || page.template === "google-business-profile") {
    return [
      {
        title: "Wat bezoeker direct kan toepassen",
        paragraphs: [
          `Begin met controleerbare basis: bedrijfsnaam, diensten, werkgebied, contactgegevens, openingstijden en belangrijkste servicepagina's. Als deze signalen niet hetzelfde verhaal vertellen, wordt lokale vindbaarheid onnodig zwak.`,
          `De grootste winst zit vaak niet in meer plaatsnamen, maar in betere samenhang. Een Google-profiel dat diensten noemt moet linken naar pagina's die die diensten uitleggen. Een lokale SEO-pagina moet duidelijk maken waarom die plaats relevant is.`
        ]
      },
      {
        title: "Wat deze pagina anders maakt dan een dunne lokale pagina",
        paragraphs: [
          `De pagina geeft praktische controles, noemt beperkingen en vermijdt rankinggaranties. Daardoor helpt de inhoud ook wanneer de bezoeker geen klant wordt. Dat is belangrijk voor kwaliteit: een pagina moet zelfstandig waarde geven, niet alleen contact proberen af te dwingen.`,
          `Gebruik deze pagina als hub of ondersteunende gids. Link naar relevante diensten, prijzen, contact en de juiste lokale of branchepagina. Publiceer pas wanneer de pagina ook vanaf ten minste een logische hub bereikbaar is.`
        ]
      },
      {
        title: "Veelvoorkomende fouten die deze pagina voorkomt",
        paragraphs: [
          `Fout een: dezelfde tekst gebruiken voor meerdere plaatsen. Fout twee: een vestiging claimen die niet bestaat. Fout drie: diensten in Google Business Profile zetten die niet op de website terugkomen. Fout vier: reviews, openingstijden of foto's laten verouderen.`,
          `Beter is een rustige structuur: dienstpagina's eerst, lokale context alleen waar die klopt, profielgegevens consistent houden en maandelijks controleren wat Search Console en contactaanvragen laten zien.`
        ]
      }
    ];
  }

  if (page.template === "pricing" || page.template === "package-choice") {
    return [
      {
        title: "Hoe bezoeker een betere keuze maakt",
        paragraphs: [
          `Deze pagina helpt kosten of pakketkeuze beoordelen zonder nepprijzen per stad. De juiste vraag is niet alleen wat een website kost, maar wat de website moet oplossen: vertrouwen, contact, lokale vindbaarheid, meerdere diensten of autoriteit.`,
          `Een compacte website past wanneer aanbod simpel is en bezoekers vooral bevestiging nodig hebben. Een groeisite past wanneer meerdere diensten, SEO-pagina's, FAQ's en bewijs belangrijk worden. Autoriteit past pas wanneer er genoeg inhoud en ritme is om structureel te publiceren.`
        ]
      },
      {
        title: "Scopefactoren die echt verschil maken",
        paragraphs: [
          `Prijsverschil ontstaat door pagina-aantal, copywriting, maatwerk ontwerp, lokale SEO, beelden, formulieren, onderhoud en technische migratie. Deze factoren moeten zichtbaar zijn voordat iemand contact opneemt, anders blijft prijsvergelijking vaag.`,
          `Goede prijscontent verkoopt niet automatisch het grootste pakket. Het benoemt ook wanneer minder genoeg is. Dat verlaagt weerstand en trekt betere aanvragen aan, omdat de bezoeker begrijpt welke keuze bij de fase past.`
        ]
      },
      {
        title: "SEO-waarde van prijs- en keuzecontent",
        paragraphs: [
          `Prijszoekwoorden hebben hoge intentie. De pagina moet daarom snel antwoord geven en daarna nuance bieden. Een tabel, checklist en FAQ maken de pagina scanbaar en helpen AI-systemen de keuzecriteria samenvatten.`,
          `Interne links naar prijzen, webontwikkeling, lokale SEO en contact maken de route compleet. Voeg de pagina pas aan de sitemap toe wanneer de bijbehorende hub ook teruglinkt, anders ontstaat snel een orphan page.`
        ]
      }
    ];
  }

  if (page.template === "ai-visibility") {
    return [
      {
        title: "Wat AI-systemen uit deze pagina moeten kunnen halen",
        paragraphs: [
          `AI-vindbaarheid draait om duidelijke entiteiten. De pagina moet zelfstandig uitleggen wie de dienstverlener is, welke diensten worden aangeboden, waar het bedrijf werkt, welke vragen klanten stellen en welk bewijs zichtbaar is.`,
          `Belangrijk: deze pagina belooft geen vermelding in ChatGPT, Perplexity, Gemini of Google AI Overviews. De waarde zit in betere structuur, consistentere informatie en antwoorden die makkelijk te begrijpen zijn voor bezoekers, zoekmachines en AI-systemen.`
        ]
      },
      {
        title: "Antwoordblokken en entiteiten",
        paragraphs: [
          `Sterke antwoordblokken beginnen met een directe definitie, gevolgd door branchecontext. Bijvoorbeeld: ${page.directAnswer} Zo'n blok is bruikbaarer dan brede claims over maximale zichtbaarheid.`,
          `Entiteiten moeten zichtbaar terugkomen in koppen, diensten, FAQ's, interne links en schema. Als schema iets zegt dat de pagina niet toont, wordt het minder betrouwbaar. Zichtbare inhoud blijft leidend.`
        ]
      },
      {
        title: "Hoe dit aansluit op SEO, GEO en AEO",
        paragraphs: [
          `SEO zorgt dat de pagina vindbaar en crawlbaar is. AEO maakt vragen direct beantwoordbaar. GEO maakt bedrijfsinformatie, diensten en bewijs beter te begrijpen als samenhangend geheel. AI-vindbaarheid gebruikt alle drie.`,
          `De technische basis bestaat uit unieke title en description, canonical, FAQPage, BreadcrumbList, Service of Article schema, interne links en duidelijke datum. Voor productie hoort robots op index te staan; in deze draft blijft noindex bewust actief tot publicatie.`
        ]
      }
    ];
  }

  return [
    {
      title: "Waarom dit probleem aanvragen kost",
      paragraphs: [
        `${page.directAnswer} Dit lijkt klein, maar lokale ondernemers verliezen vaak aanvragen door frictie die pas zichtbaar wordt wanneer je de pagina zelf op mobiel doorloopt.`,
        `Een goede gids geeft geen algemene marketingtips, maar controlepunten die iemand meteen kan toepassen. Daarom staan checklist, stappen en FAQ boven verkooppraat. De bezoeker moet na twee minuten weten wat de eerste verbetering is.`
      ]
    },
    {
      title: "Wat je zelf kunt controleren",
      paragraphs: [
        `Controleer eerst de onderdelen die direct aan vertrouwen of contact raken: ${page.checklist.slice(0, 4).join(" ")} Daarna pas techniek die minder zichtbaar is, zoals schema, redirects of sitemap.`,
        `Documenteer wat je aanpast. Noteer datum, pagina, probleem en verwacht effect. Zo voorkom je dat latere SEO- of conversieveranderingen losse meningen blijven.`
      ]
    },
    {
      title: "Wanneer hulp logisch is",
      paragraphs: [
        `Vraag hulp wanneer ${first.title.toLowerCase()}, ${second.title.toLowerCase()} en ${third.title.toLowerCase()} elkaar raken. Dan gaat het niet meer om een losse tekstwijziging, maar om structuur, techniek en conversie samen.`,
        `De beste vervolgstap is dan een korte scan van pagina, metadata, mobiele route en belangrijkste interne links. Daarna kun je gericht verbeteren zonder meteen een groot redesign te starten.`
      ]
    }
  ];
}

function PrimaryLink({ children }: { children: React.ReactNode }) {
  return (
    <Link
      className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-dark"
      href="/contact"
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
}

function SecondaryLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      className="focus-ring inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition hover:border-orange-soft hover:bg-peach hover:text-orange"
      href={href}
    >
      {children}
    </Link>
  );
}

function VisualPanel({ page }: { page: KeywordDraftPageContent }) {
  return (
    <aside className="rounded-[1.5rem] border border-line bg-white p-6 shadow-card md:p-8">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
            {page.visual.label}
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-normal text-navy">
            {page.visual.title}
          </h2>
        </div>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-soft text-blue">
          {page.pageKind === "guide" ? <FileText className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{page.visual.text}</p>
      <div className="mt-7 grid gap-3">
        {page.visual.items.map((item, index) => (
          <div className="grid grid-cols-[2.75rem_1fr] items-center gap-3 rounded-2xl border border-line bg-cream/50 p-3" key={item}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange text-xs font-black text-white">
              {index + 1}
            </span>
            <p className="text-sm font-bold leading-6 text-ink">{item}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

function HighlightRail({ page }: { page: KeywordDraftPageContent }) {
  return (
    <section className="border-y border-line bg-white/78 py-8">
      <div className="container grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {page.highlights.map((item) => (
          <article className="min-h-36 rounded-2xl border border-line bg-white p-5 shadow-sm" key={item.title}>
            <BarChart3 className="h-5 w-5 text-blue" />
            <h3 className="mt-4 font-extrabold text-navy">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Checklist({ page }: { page: KeywordDraftPageContent }) {
  return (
    <section className="py-8 md:py-12">
      <div className="container grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
            Checklist
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
            {page.checklistTitle}
          </h2>
          <p className="mt-4 leading-7 text-muted">
            Gebruik dit als kwaliteitscheck voordat de pagina live gaat of aan de sitemap wordt toegevoegd.
          </p>
        </div>
        <div className="grid gap-3">
          {page.checklist.map((item) => (
            <div className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm" key={item}>
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison({ page }: { page: KeywordDraftPageContent }) {
  if (!page.comparison) {
    return null;
  }

  return (
    <section className="bg-white/72 py-8 md:py-12">
      <div className="container">
        <div className="rounded-[1.5rem] border border-line bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
            Vergelijking
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
            {page.comparison.title}
          </h2>
          <div className="mt-7 overflow-hidden rounded-2xl border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-cream">
                <tr>
                  <th className="border-b border-line p-4 font-extrabold text-navy">Onderdeel</th>
                  <th className="border-b border-line p-4 font-extrabold text-navy">{page.comparison.leftLabel}</th>
                  <th className="border-b border-line p-4 font-extrabold text-navy">{page.comparison.rightLabel}</th>
                </tr>
              </thead>
              <tbody>
                {page.comparison.rows.map((row) => (
                  <tr key={row.label}>
                    <th className="border-b border-line p-4 font-bold text-ink">{row.label}</th>
                    <td className="border-b border-line p-4 leading-6 text-muted">{row.left}</td>
                    <td className="border-b border-line p-4 leading-6 text-muted">{row.right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalSeo({ page }: { page: KeywordDraftPageContent }) {
  const technicalItems = [
    {
      title: "Unieke metadata",
      text: `Title: ${page.metaTitle}. Description: ${page.metaDescription}`
    },
    {
      title: "Heldere canonical",
      text: `Bedoelde productie-URL: ${page.productionPath}. Gebruik self-canonical zodra de pagina live staat.`
    },
    {
      title: "Schema",
      text: `${page.schemaType}, BreadcrumbList en FAQPage sluiten aan op zichtbare inhoud. Geen review- of rating-schema zonder echte bron.`
    },
    {
      title: "Interne links",
      text: `Link vanuit en naar relevante hubs: ${page.internalLinks.slice(0, 5).map((link) => link.label).join(", ")}.`
    },
    {
      title: "Indexatie",
      text: "Pas opnemen in sitemap nadat de pagina intern gelinkt is en de inhoud handmatig is gecontroleerd."
    },
    {
      title: "AI en AEO",
      text: "Direct antwoord, FAQ's, checklist en korte secties maken de inhoud beter scanbaar voor zoekmachines en AI-systemen."
    }
  ];

  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <div className="rounded-[1.5rem] border border-line bg-white p-7 shadow-sm md:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
                Technische SEO
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
                Klaar voor gecontroleerde publicatie
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Deze onderdelen zorgen dat de pagina bij livegang begrijpelijk, meetbaar en netjes gekoppeld is.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {technicalItems.map((item) => (
                <article className="rounded-2xl border border-line bg-cream/50 p-5" key={item.title}>
                  <h3 className="font-extrabold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function KeywordDraftPage({ slug }: KeywordDraftPageProps) {
  const page = getDraftKeywordPage(slug);

  if (!page) {
    notFound();
  }

  const valueSections = fullValueSections(page);

  return (
    <main className="bg-cream/40">
      <JsonLd data={pageSchema(page)} />

      <section className="py-14 md:py-22">
        <div className="container grid gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-blue-soft bg-white px-3 py-1 text-xs font-extrabold text-blue">
                {page.eyebrow}
              </span>
              <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-soft">
                {page.pageKind === "guide" ? "Insight/blog guide" : "Actual page"}
              </span>
              <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-soft">
                Bijgewerkt {page.dateModified}
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-normal text-navy md:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {page.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink>{page.primaryCta}</PrimaryLink>
              <SecondaryLink href={page.secondaryCta.includes("prijs") || page.secondaryCta.includes("prijzen") ? "/prijzen" : "/diensten"}>
                {page.secondaryCta}
              </SecondaryLink>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-muted">
              <span className="inline-flex items-center gap-2">
                <Search className="h-4 w-4 text-blue" />
                {page.sourceKeyword}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue" />
                {intentText(page)}
              </span>
            </div>
          </div>
          <VisualPanel page={page} />
        </div>
      </section>

      <HighlightRail page={page} />

      <section className="py-8 md:py-12">
        <div className="container">
          <article className="rounded-[1.5rem] border border-orange-soft bg-white p-7 shadow-sm md:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Direct antwoord
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-normal text-navy">
              Wat moet de bezoeker meteen weten?
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-muted">
              {page.directAnswer}
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white/72 py-8 md:py-12">
        <div className="container grid gap-8">
          {valueSections.map((section, index) => (
            <article className="grid gap-8 rounded-[1.5rem] border border-line bg-white p-7 shadow-sm md:p-9 lg:grid-cols-[0.34fr_0.66fr]" key={section.title}>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
                  Verdieping {index + 1}
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
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
          {page.sections.map((section, index) => (
            <article className="rounded-[1.5rem] border border-line bg-white p-7 shadow-sm md:p-9" key={section.title}>
              <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
                    Sectie {index + 1}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-7 text-muted">{section.text}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {section.items.map((item) => (
                    <div className="rounded-2xl border border-line bg-cream/50 p-5" key={item.title}>
                      <h3 className="font-extrabold text-navy">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Checklist page={page} />
      <Comparison page={page} />
      <TechnicalSeo page={page} />

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="rounded-[1.5rem] border border-line bg-white p-7 shadow-sm md:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Aanpak
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Van draft naar bruikbare pagina
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-4">
              {page.steps.map((step, index) => (
                <div className="rounded-2xl border border-line bg-cream/50 p-5" key={step.title}>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-orange text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-extrabold text-navy">{step.title}</h3>
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
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Vragen voor deze pagina
            </h2>
          </div>
          <div className="grid gap-4">
            {page.faqs.map((faq) => (
              <details className="group rounded-2xl border border-line bg-white p-5 shadow-sm" key={faq.question}>
                <summary className="cursor-pointer list-none text-base font-extrabold text-navy">
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
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Interne links
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Linkroute bij publicatie
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {page.internalLinks.map((link) => (
              <Link className="focus-ring rounded-2xl border border-line bg-white p-4 text-sm font-extrabold text-navy shadow-sm transition hover:border-orange-soft hover:bg-peach hover:text-orange" href={link.href} key={`${link.href}-${link.label}`}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-5 rounded-[1.5rem] bg-peach p-7 shadow-sm md:flex-row md:items-center md:p-9">
            <div>
              <h2 className="text-3xl font-extrabold tracking-normal text-navy">
                Wil je weten welke stap voor jouw website logisch is?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted">
                Stuur je huidige website of belangrijkste pagina mee. Je krijgt praktische richting zonder verplichting.
              </p>
            </div>
            <PrimaryLink>{page.primaryCta}</PrimaryLink>
          </div>
        </div>
      </section>
    </main>
  );
}
