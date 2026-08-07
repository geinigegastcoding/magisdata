import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, ScanLine, Workflow } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = {
  title: "AI-systemen bouwen voor e-mail, leads en kenniswerk",
  description: "Van AI-audit tot werkend systeem: MagisData bouwt praktische AI-systemen rond de processen van je bedrijf.",
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

  return (
    <main>
      <JsonLd data={schema} />
      <section className="bg-blue-soft py-20 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Systemen</p>
            <h1 className="mt-5 max-w-4xl text-balance text-[3.4rem] font-medium leading-[0.94] tracking-[-0.08em] text-navy sm:text-[5.5rem]">AI die in je werk past.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">MagisData helpt bedrijven van losse experimenten naar een werkende combinatie van AI, tools, instructies en menselijke controle.</p>
            <div className="mt-8 flex flex-wrap gap-4"><Link className="inline-flex items-center gap-2 bg-blue px-5 py-3.5 text-sm font-bold text-white" href="/contact">Plan een AI-scan <ArrowUpRight aria-hidden="true" size={17} /></Link><Link className="inline-flex items-center gap-2 border border-line-strong bg-white px-5 py-3.5 text-sm font-bold text-navy" href="/#rekenen">Bereken je tijdwaarde</Link></div>
          </div>
          <p className="border-l border-blue/40 pl-6 text-sm leading-7 text-muted">Geen algemene toolselectie. We starten bij een proces dat nu geld, aandacht of snelheid kost en maken dat concreet.</p>
        </div>
      </section>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Drie manieren om te starten</p><h2 className="mt-4 text-4xl font-medium leading-none tracking-[-0.07em] text-navy md:text-6xl">Kies de kleinste stap die je verder helpt.</h2></div>
          <div className="mt-14 grid gap-8 border-t border-line-strong pt-8 md:grid-cols-3">{routes.map(({ icon: Icon, ...route }) => <article className="grid gap-4" key={route.label}><Icon aria-hidden="true" className="text-blue" size={24} /><p className="text-xs font-bold uppercase tracking-[0.14em] text-blue">{route.label}</p><h3 className="text-2xl font-medium tracking-[-0.05em] text-navy">{route.title}</h3><p className="text-sm leading-7 text-muted">{route.text}</p></article>)}</div>
        </div>
      </section>
      <section className="border-y border-line bg-blue-soft py-20 md:py-28">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Wat er gebouwd kan worden</p><h2 className="mt-4 max-w-xl text-4xl font-medium leading-none tracking-[-0.07em] text-navy md:text-6xl">Van inbox tot second brain.</h2></div><div className="grid gap-0 border-t border-line-strong"><div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[0.55fr_1fr]"><strong>E-mail en leads</strong><span className="text-sm leading-7 text-muted">Sorteren, samenvatten, concepten maken en opvolging voorbereiden met menselijke controle.</span></div><div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[0.55fr_1fr]"><strong>Rapportages en data</strong><span className="text-sm leading-7 text-muted">Informatie uit bestaande tools verzamelen en omzetten naar een briefing waar je team mee kan werken.</span></div><div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[0.55fr_1fr]"><strong>Second brain en skills</strong><span className="text-sm leading-7 text-muted">Je kennis, stijl en terugkerende werkwijze vastleggen zodat AI beter op jouw context aansluit.</span></div></div></div>
      </section>
      <section className="py-20 md:py-28"><div className="container flex flex-col justify-between gap-8 border-t border-line-strong pt-8 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Klaar voor een eerste route?</p><h2 className="mt-4 max-w-2xl text-4xl font-medium leading-none tracking-[-0.07em] text-navy md:text-6xl">Begin bij werk dat je elke week opnieuw doet.</h2></div><Link className="inline-flex shrink-0 items-center gap-2 bg-blue px-5 py-3.5 text-sm font-bold text-white" href="/contact">Plan een AI-scan <ArrowUpRight aria-hidden="true" size={17} /></Link></div></section>
    </main>
  );
}
