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
  openGraph: { title: "Over MagisData | AI begrijpelijk en werkbaar maken" , description: "MagisData helpt ondernemers AI praktisch maken: eerst begrijpen, dan bouwen, daarna zelf verder kunnen.", url: "https://magisdata.nl/over-ons", images: [{ url: "/assets/studio-og.webp", width: 1200, height: 630 }] },
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
    <section className="inner-hero container inner-split"><div><h1>Techniek met<br /><em>menselijk inzicht.</em></h1><p>Ik ben Daniel Magis. Met MagisData help ik ondernemers AI begrijpelijk en bruikbaar maken. Door goed te kijken, gericht te bouwen en kennis te delen.</p><p>Een kleine studio, korte lijnen. Je werkt direct met degene die je systeem bouwt.</p><Link className="text-link" href="/contact">Maak kennis <ArrowUpRight aria-hidden="true" size={18} /></Link></div><figure className="studio-about-portrait"><Image src="/assets/founder-672.webp" alt="Daniel Magis, oprichter van MagisData" width={672} height={672} priority sizes="(max-width: 767px) 100vw, 45vw" /><figcaption><span>Daniel Magis</span><span>Oprichter · MagisData</span></figcaption></figure></section>
    <section className="studio-method"><div className="container"><h2 className="about-belief">De beste techniek geeft je ruimte.<br /><em>Om na te denken. Om te ondernemen.<br />Om goed werk te leveren.</em></h2><div className="studio-principles">{principles.map(principle=><article key={principle.title}><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div></div></section>
    <section className="studio-section container inner-split"><h2 className="about-belief">Je houdt<br /><em>de regie.</em></h2><div><p className="text-muted leading-8">Een systeem is pas bruikbaar als je weet wat het doet. Daarom maken we keuzes, instructies en controlemomenten zichtbaar.</p><ul className="knowledge-checks">{["Je weet waarom een systeem iets doet.","Je ziet waar menselijke controle nodig blijft.","Je kunt de werkwijze later zelf verder bouwen.","Je krijgt geen belofte die niet te testen is."].map(item=><li key={item}><Check aria-hidden="true" size={17} />{item}</li>)}</ul><Link className="text-link" href="/diensten">Zo kunnen we samenwerken <ArrowUpRight aria-hidden="true" size={17} /></Link></div></section>
    <StudioCta />
  </main>;
}