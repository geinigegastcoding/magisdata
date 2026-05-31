import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers3, Radar, SearchCheck, Sparkles, Telescope } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { metadataForPath } from "@/content/seo";
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/over-ons");

const principles = [
  {
    title: "Eerst begrijpen, dan bouwen",
    text: "We starten bij markt, klantvragen en aanbod. Daarna pas bepalen we pagina's, techniek en systemen.",
    icon: Telescope
  },
  {
    title: "Rustig premium",
    text: "Sterk hoeft niet luid te zijn. We kiezen voor helderheid, snelheid, bewijs en een uitstraling die vertrouwen geeft.",
    icon: Sparkles
  },
  {
    title: "AI zonder rook",
    text: "AI is nuttig wanneer het je bedrijf begrijpelijker, sneller of consistenter maakt. Niet omdat het nieuw klinkt.",
    icon: Radar
  }
];

const workingStyle = [
  "We maken ingewikkelde keuzes overzichtelijk.",
  "We schrijven voor klanten, zoekmachines en AI-systemen tegelijk.",
  "We bouwen met oog voor snelheid, structuur en later onderhoud.",
  "We blijven eerlijk over wat nu waarde heeft en wat kan wachten."
];

export default function AboutPage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/over-ons",
      name: "Over MagisData",
      description: metadata.description ?? ""
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Over MagisData", path: "/over-ons" }
    ])
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Over MagisData", path: "/over-ons" }
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.88fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Over MagisData
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-normal text-navy md:text-6xl">
              Gebouwd voor merken die digitaal serieuzer willen winnen
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              MagisData helpt bedrijven hun website behandelen als digitale infrastructuur: een plek waar positionering, vindbaarheid, bewijs en conversie samenkomen.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-dark" href="/diensten">
                Bekijk hoe we helpen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition hover:border-orange-soft hover:bg-peach hover:text-orange" href="/inzichten">
                Lees onze inzichten
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white shadow-card">
            <div className="absolute inset-x-0 top-0 h-1 bg-orange" />
            <div className="grid min-h-[390px] gap-8 p-7 sm:p-9 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue">
                  Waar we in geloven
                </p>
                <p className="mt-4 text-3xl font-extrabold leading-tight tracking-normal text-navy">
                  Goede websites maken keuzes makkelijker.
                </p>
                <p className="mt-5 text-sm leading-6 text-muted">
                  Niet meer lawaai, maar betere volgorde: eerst kiezen, dan bouwen, daarna verbeteren.
                </p>
              </div>
              <div className="self-end border-y border-line">
                {[
                  ["01", "Strategie", "Eerst scherpte in aanbod, doelgroep en bewijs."],
                  ["02", "Structuur", "Daarna pagina's die logisch vindbaar en scanbaar zijn."],
                  ["03", "Groei", "Tot slot meten, verbeteren en gericht uitbreiden."]
                ].map(([step, title, text]) => (
                  <div className="grid grid-cols-[2.7rem_1fr] gap-4 border-b border-line py-5 last:border-b-0" key={title}>
                    <span className="text-xs font-extrabold tracking-[0.14em] text-orange">
                      {step}
                    </span>
                    <div>
                      <p className="text-sm font-extrabold text-navy">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-muted">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <figure className="relative overflow-hidden rounded-[2rem] border border-line bg-cream shadow-card">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-peach to-transparent" />
            <picture>
              <source srcSet="/assets/founder-336.avif 336w, /assets/founder-672.avif 672w" type="image/avif" />
              <source srcSet="/assets/founder-336.webp 336w, /assets/founder-672.webp 672w" type="image/webp" />
              <img
                alt="Oprichter van MagisData"
                className="relative mx-auto h-auto w-full max-w-[22rem] object-cover object-center pt-8"
                height={420}
                loading="lazy"
                src="/assets/founder-336.webp"
                width={336}
              />
            </picture>
            <figcaption className="relative border-t border-line bg-white/80 px-6 py-5 text-center">
              <p className="text-lg font-extrabold tracking-normal text-navy">Daniël Magis</p>
              <p className="mt-1 text-sm font-bold text-muted">Oprichter van MagisData</p>
            </figcaption>
          </figure>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Oprichter
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy md:text-4xl">
              Gebouwd door Daniël Magis, oprichter van MagisData.
            </h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>
                MagisData is opgericht vanuit een eenvoudige overtuiging: een website moet niet alleen mooi zijn, maar ook helder uitleggen waarom iemand voor je bedrijf zou kiezen.
              </p>
              <p>
                Als oprichter kijkt Daniël Magis naar het hele systeem achter online groei: positionering, zoekintentie, AI-vindbaarheid, techniek, content en de route naar een aanvraag.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Rust", "Geen losse marketingdrukte, maar een duidelijke volgorde."],
                ["Precisie", "Pagina's die klanten, Google en AI-systemen begrijpen."],
                ["Eigenaarschap", "Strategie en uitvoering blijven dicht bij elkaar."]
              ].map(([title, text]) => (
                <div className="rounded-2xl border border-line bg-cream/50 p-5 shadow-sm" key={title}>
                  <SearchCheck className="h-5 w-5 text-orange" />
                  <h3 className="mt-4 font-extrabold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Filosofie
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Meer vrolijkheid in groei komt meestal door minder ruis.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Als je website helder uitlegt, snel laadt en logisch doorverwijst, voelt online groei niet zwaarder maar lichter.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, ...principle }) => (
              <article className="rounded-[2rem] border border-line bg-cream/50 p-6 shadow-sm" key={principle.title}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-soft text-orange">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-navy">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2rem] border border-orange-soft bg-gradient-to-br from-peach via-yellow-soft to-green-soft/60 p-7 shadow-sm md:p-9">
            <Layers3 className="h-8 w-8 text-orange" />
            <h2 className="mt-5 text-3xl font-extrabold tracking-normal text-navy">
              We verbinden strategie, SEO, GEO, AEO en webontwikkeling in een logisch systeem.
            </h2>
            <p className="mt-4 leading-7 text-ink/75">
              Een bezoeker ziet maar een pagina. Daarachter moet de structuur kloppen: zoekintentie, bewijs, interne links, contactroutes en technische performance.
            </p>
          </div>
          <div className="grid gap-4">
            {workingStyle.map((item) => (
              <div className="flex gap-3 rounded-2xl border border-line bg-white p-5 shadow-sm" key={item}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Onze manier van werken
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              We bouwen liever een helder fundament dan losse marketingdrukte.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              MagisData kijkt naar de volledige route: hoe iemand je vindt, wat die persoon leest, welk bewijs vertrouwen geeft en hoe een aanvraag daarna wordt opgevolgd.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Voor klanten", "De website moet rustig uitleggen wat je doet, welke keuze logisch is en waarom contact opnemen veilig voelt."],
              ["Voor zoekmachines", "Pagina's moeten thematisch samenhangen, duidelijke koppen gebruiken en echte vragen beantwoorden."],
              ["Voor AI-systemen", "Diensten, doelgroep, bewijs en contactgegevens moeten consistent genoeg zijn om goed samengevat te worden."],
              ["Voor je team", "De structuur moet begrijpelijk blijven, zodat nieuwe content en verbeteringen later makkelijk toegevoegd kunnen worden."]
            ].map(([title, text]) => (
              <article className="rounded-2xl border border-line bg-cream/50 p-5 shadow-sm" key={title}>
                <h3 className="font-extrabold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-peach py-14 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Wat dit voor jou betekent
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy md:text-4xl">
              Geen los webproject, maar een basis waar je sales, content en vertrouwen op kunnen leunen.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { href: "/diensten", title: "Vertaal visie naar diensten", text: "Zie hoe we website, SEO en AI-vindbaarheid praktisch maken." },
              { href: "/cases", title: "Bekijk portfolio", text: "Ontdek hoe duidelijke structuur en positionering in eerder werk samenkomen." },
              { href: "/contact", title: "Maak kennis zonder druk", text: "Leg je situatie kort voor en krijg een eerlijke eerste richting." }
            ].map((link) => (
              <Link className="focus-ring group rounded-[2rem] border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-soft" href={link.href} key={link.href}>
                <h3 className="text-xl font-extrabold text-navy group-hover:text-orange">{link.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{link.text}</p>
                <span className="mt-6 inline-flex items-center text-sm font-extrabold text-orange">
                  Ga verder <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
