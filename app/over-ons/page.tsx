import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Compass, Network, SquareStack } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = {
  title: "Over MagisData | AI begrijpelijk en werkbaar maken",
  description: "MagisData helpt ondernemers AI praktisch maken: eerst begrijpen, dan bouwen, daarna zelf verder kunnen.",
  alternates: { canonical: "https://magisdata.nl/over-ons" }
};

const principles = [
  { icon: Compass, title: "Eerst begrijpen", text: "We starten bij je bedrijf, je manier van werken en het werk dat terugkomt. Niet bij een trend of tool." },
  { icon: Network, title: "Systemen boven losse prompts", text: "Een prompt kan handig zijn. Een systeem maakt duidelijk wat er binnenkomt, wat AI doet en waar jij controleert." },
  { icon: SquareStack, title: "Zelf kunnen uitbreiden", text: "We maken de logica zichtbaar, zodat je later zelf skills, bronnen en nieuwe workflows kunt toevoegen." }
];

export default function AboutPage() {
  const schema = graphSchema([
    webPageSchema({ path: "/over-ons", name: "Over MagisData", description: metadata.description ?? "" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Over MagisData", path: "/over-ons" }])
  ]);

  return (
    <main>
      <JsonLd data={schema} />
      <section className="bg-blue-soft py-20 md:py-32"><div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Over MagisData</p><h1 className="mt-5 max-w-4xl text-balance text-[3.4rem] font-medium leading-[0.94] tracking-[-0.08em] text-navy sm:text-[5.5rem]">AI begrijpelijk maken. En bruikbaar.</h1></div><div className="max-w-xl"><p className="text-lg leading-8 text-muted">MagisData is de AI-pivot van Daniel Magis: een kleine studio voor ondernemers die niet nog een tool willen, maar een werkwijze die hun bedrijf kent.</p><p className="mt-5 text-sm leading-7 text-muted">We combineren onderzoek, bouwen en kennisoverdracht. Zo ontstaat er iets dat niet alleen vandaag indruk maakt, maar morgen nog steeds gebruikt wordt.</p></div></div></section>
      <section className="py-20 md:py-32"><div className="container"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Waar we in geloven</p><h2 className="mt-4 text-4xl font-medium leading-none tracking-[-0.07em] text-navy md:text-6xl">Rust is een voordeel als de techniek complex wordt.</h2></div><div className="mt-14 grid gap-10 border-t border-line-strong pt-8 md:grid-cols-3">{principles.map(({ icon: Icon, ...principle }) => <article className="grid gap-4" key={principle.title}><Icon aria-hidden="true" className="text-blue" size={24} /><h3 className="text-2xl font-medium tracking-[-0.05em] text-navy">{principle.title}</h3><p className="text-sm leading-7 text-muted">{principle.text}</p></article>)}</div></div></section>
      <section className="border-y border-line bg-blue-soft py-20 md:py-28"><div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">De belofte</p><h2 className="mt-4 max-w-xl text-4xl font-medium leading-none tracking-[-0.07em] text-navy md:text-6xl">Je houdt de regie.</h2></div><div className="grid gap-4">{["Je weet waarom een systeem iets doet.", "Je ziet waar menselijke controle nodig blijft.", "Je kunt de werkwijze later zelf verder bouwen.", "Je krijgt geen belofte die niet te testen is."].map((item) => <div className="flex items-start gap-3 border-b border-line py-4 text-sm font-semibold text-navy" key={item}><Check aria-hidden="true" className="mt-0.5 shrink-0 text-blue" size={17} />{item}</div>)}</div></div></section>
      <section className="py-20 md:py-28"><div className="container flex flex-col justify-between gap-8 border-t border-line-strong pt-8 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Volgende stap</p><h2 className="mt-4 max-w-2xl text-4xl font-medium leading-none tracking-[-0.07em] text-navy md:text-6xl">Vertel waar je nu nog op vastloopt.</h2></div><Link className="inline-flex shrink-0 items-center gap-2 bg-blue px-5 py-3.5 text-sm font-bold text-white" href="/contact">Plan een AI-scan <ArrowUpRight aria-hidden="true" size={17} /></Link></div></section>
    </main>
  );
}
