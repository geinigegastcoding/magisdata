import Image from "next/image";
import { StudioCta } from "@/components/studio-cta";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Compass, Network, SquareStack } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = {
  title: "Over MagisData | AI begrijpelijk en werkbaar maken",
  description: "MagisData helpt ondernemers AI praktisch maken: eerst begrijpen, dan bouwen, daarna zelf verder kunnen.",
  openGraph: { title: "Over MagisData | AI begrijpelijk en werkbaar maken" , description: "MagisData helpt ondernemers AI praktisch maken: eerst begrijpen, dan bouwen, daarna zelf verder kunnen.", url: "https://magisdata.nl/over-ons", images: [{ url: "/assets/process-og.webp", width: 1200, height: 630 }] },
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

  return <main className="studio-page"><JsonLd data={schema} />
    <section className="inner-hero container"><span className="section-number">Over MagisData / Daniel Magis</span><h1>Je spreekt de persoon<br />die het bouwt.</h1></section>
    <section className="container about-intro"><figure className="studio-about-portrait"><Image src="/assets/founder-672.webp" alt="Daniel Magis, oprichter van MagisData" width={672} height={672} priority sizes="(max-width: 767px) 100vw, 45vw" /><figcaption><span>Daniel Magis</span><span>Oprichter · Voorschoten</span></figcaption></figure><div className="about-copy"><p>Ik ben Daniel. Met MagisData help ik ondernemers om AI een praktische plek in hun bedrijf te geven.</p><p>Ik wil begrijpen hoe je werkt voordat ik iets bouw. Welke taak kost steeds tijd? Welke kennis zit alleen in je hoofd? Waar zou een systeem het verschil maken?</p><p>Van het eerste gesprek tot de overdracht werk je direct met mij. Korte lijnen, heldere keuzes en iets waar je zelf mee verder kunt.</p><Link className="text-link" href="/contact">Maak kennis <ArrowUpRight aria-hidden="true" size={18} /></Link></div></section>
    <section className="studio-method"><div className="container"><span className="section-number">Mijn uitgangspunten</span><h2 className="about-belief">Je hoeft niet alles van AI te weten.<br />Je moet weten wat het voor je doet.</h2><div className="studio-principles">{principles.map(principle=><article key={principle.title}><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div></div></section>
    <section className="studio-section container inner-split"><div><span className="section-number">Van jou, voor jou</span><h2 className="about-belief">Een systeem dat<br />je begrijpt.</h2></div><div><p className="text-muted leading-8">Je krijgt inzicht in de keuzes, instructies en controlemomenten. Zodat je het systeem kunt gebruiken, beoordelen en verder ontwikkelen.</p><ul className="knowledge-checks">{["Je weet waarom een systeem iets doet.","Je ziet waar menselijke controle nodig blijft.","Je kunt de werkwijze later zelf verder bouwen.","Je krijgt geen belofte die niet te testen is."].map(item=><li key={item}><Check aria-hidden="true" size={17} />{item}</li>)}</ul><Link className="text-link" href="/diensten">Zo kunnen we samenwerken <ArrowUpRight aria-hidden="true" size={17} /></Link></div></section>
    <StudioCta />
  </main>;
}