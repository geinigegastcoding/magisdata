import { systems } from "@/content/ai-homepage";
import Image from "next/image";
import { StudioCta } from "@/components/studio-cta";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, ScanLine, Workflow } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = {
  title: "AI-systemen bouwen voor e-mail, leads en kenniswerk",
  description: "Van AI-audit tot werkend systeem: MagisData bouwt praktische AI-systemen rond de processen van je bedrijf.",
  openGraph: { title: "AI-systemen bouwen voor e-mail, leads en kenniswerk" , description: "Van AI-audit tot werkend systeem: MagisData bouwt praktische AI-systemen rond de processen van je bedrijf.", url: "https://magisdata.nl/diensten", images: [{ url: "/assets/studio-og.webp", width: 1200, height: 630 }] },
  alternates: { canonical: "https://magisdata.nl/diensten" }
};

const routes = [
  { icon: ScanLine, label: "01 / Audit", title: "Ontdek waar tijd weglekt", text: "We brengen terugkerend werk, tools en beslismomenten in kaart. Je krijgt een korte routekaart met wat eerst logisch is." },
  { icon: Workflow, label: "02 / Build", title: "Laat het systeem bouwen", text: "We koppelen je bestaande tools en bouwen een eerste workflow die met echte input getest wordt." },
  { icon: BrainCircuit, label: "03 / Enable", title: "Leer ermee werken", text: "Je team begrijpt wat er gebeurt en kan de werkwijze later zelf verder uitbreiden." }
];

export default function ServicesPage() {
  const schema = graphSchema([
    webPageSchema({ path: "/diensten", name: "AI-systemen van MagisData", description: metadata.description ?? "" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Systemen", path: "/diensten" }])
  ]);

  return <main className="studio-page"><JsonLd data={schema} />
    <section className="inner-hero container inner-split"><div><h1>AI die in je<br /><em>werk past.</em></h1><p>Van losse experimenten naar een systeem dat iets voor je doet. We verbinden je tools, kennis en processen. Jij bepaalt waar je begint.</p><Link className="button-primary mt-7" href="/contact">Vind jouw eerste stap <ArrowUpRight aria-hidden="true" size={18} /></Link></div><Image className="inner-art" src="/assets/studio-flow.webp" alt="Groene papierstructuur die van een losse boog overgaat in geordende vouwen" width={1120} height={1400} priority sizes="(max-width: 767px) 100vw, 45vw" /></section>
    <section className="container pb-24"><div className="service-menu">{routes.map(route=><article key={route.label}><span>{route.label}</span><h2>{route.title}</h2><div><p>{route.text}</p><Link className="text-link" href="/contact">Bespreek deze route <ArrowUpRight aria-hidden="true" size={17} /></Link></div></article>)}</div></section>
    <section className="services-possibilities"><div className="container"><h2>Een inbox. Een rapportage.<br /><em>Een nieuwe manier van werken.</em></h2><div className="use-cases">{systems.map(({icon:Icon,...system})=><article key={system.number}><div className="use-case-title"><Icon aria-hidden="true" size={23} /><h3>{system.label}</h3></div><div><h4>{system.title}</h4><p>{system.text}</p></div><span className="use-case-outcome">{system.outcome}</span></article>)}</div><div className="section-tail"><span>We kiezen wat past bij je data, team en risico. Scope en investering bepalen we samen.</span><Link className="text-link" href="/#rekenen">Bereken je tijdwaarde <ArrowUpRight aria-hidden="true" size={17} /></Link></div></div></section>
    <section className="studio-section container knowledge-section"><Image className="inner-art" src="/assets/studio-knowledge.webp" alt="Kennisarchief in papier en amberkleurig glas" width={1536} height={1024} sizes="(max-width: 767px) 100vw, 50vw" /><div><h2>Je kennis wordt<br /><em>je voorsprong.</em></h2><p>Een eigen second brain verbindt je bronnen, projecten en afspraken. Skills leggen je werkwijze vast. We bouwen het samen, of leren je hoe je zelf begint.</p><Link className="text-link" href="/contact">Vertel over je werkwijze <ArrowUpRight aria-hidden="true" size={17} /></Link></div></section>
    <StudioCta />
  </main>;
}