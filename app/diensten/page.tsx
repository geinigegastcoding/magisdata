import { systems } from "@/content/ai-homepage";
import { StudioCta } from "@/components/studio-cta";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, ScanLine, Workflow } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = {
  title: "AI-systemen bouwen voor e-mail, leads en kenniswerk",
  description: "Van AI-audit tot werkend systeem: MagisData bouwt praktische AI-systemen rond de processen van je bedrijf.",
  openGraph: { title: "AI-systemen bouwen voor e-mail, leads en kenniswerk" , description: "Van AI-audit tot werkend systeem: MagisData bouwt praktische AI-systemen rond de processen van je bedrijf.", url: "https://magisdata.nl/diensten", images: [{ url: "/assets/process-og.webp", width: 1200, height: 630 }] },
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
    <section className="inner-hero container"><span className="section-number">Diensten / Van inzicht naar uitvoering</span><h1>Goed werk.<br />Beter georganiseerd.</h1><div className="page-lead"><span className="section-number">Drie manieren om te beginnen</span><p>Je wilt weten waar AI helpt, een systeem laten bouwen of er zelf beter mee leren werken. We sluiten aan op waar je nu staat.</p></div></section>
    <section className="container"><div className="service-menu">{routes.map(route=><article key={route.label}><span>{route.label}</span><div className="service-description"><h2>{route.title}</h2><div><p>{route.text}</p><Link className="text-link" href="/contact">Bespreek deze route <ArrowUpRight aria-hidden="true" size={17} /></Link></div></div></article>)}</div></section>
    <section className="services-possibilities"><div className="container"><span className="section-number">Concrete toepassingen</span><h2>Van binnenkomend bericht<br />tot volgende actie.</h2><div className="use-cases">{systems.map(({icon:Icon,...system})=><article key={system.number}><div className="use-case-title"><Icon aria-hidden="true" size={23} /><h3>{system.label}</h3></div><div><h4>{system.title}</h4><p>{system.text}</p></div><span className="use-case-outcome">{system.outcome}</span></article>)}</div><div className="section-tail"><span>We kiezen wat past bij je data, team en risico. Scope en investering bepalen we samen.</span><Link className="text-link" href="/#voorbeeld">Bekijk het praktijkvoorbeeld <ArrowUpRight aria-hidden="true" size={17} /></Link></div></div></section>
    <section className="studio-section container knowledge-section" id="kennis"><div className="knowledge-specimen"><div className="document-label">Een voorbeeld van je kennisstructuur</div><dl><div><dt>Bedrijf</dt><dd>Doelgroep, aanbod en uitgangspunten</dd></div><div><dt>Projecten</dt><dd>Afspraken, notities en besluiten</dd></div><div><dt>Bronnen</dt><dd>Documenten met een duidelijke herkomst</dd></div><div><dt>Skills</dt><dd>Vaste instructies voor terugkerend werk</dd></div></dl><p>De structuur volgt je bedrijf. Wat er niet in staat, hoeft AI ook niet in te vullen.</p></div><div><span className="section-number">Second brain & skills</span><h2>Leg vast wat<br />je bedrijf weet.</h2><p>Een eigen kennisomgeving verbindt je bronnen, projecten en afspraken. Skills leggen je werkwijze vast. Zo kan AI op jouw kennis voortbouwen en blijven antwoorden controleerbaar.</p><p>We bouwen het samen, of leren je hoe je zelf begint. Je krijgt inzicht in de structuur, de bronnen en de instructies.</p><Link className="text-link" href="/contact">Vertel over je werkwijze <ArrowUpRight aria-hidden="true" size={17} /></Link></div></section>
    <StudioCta />
  </main>;
}