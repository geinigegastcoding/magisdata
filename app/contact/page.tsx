import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = {
  title: "Plan een AI-scan voor je bedrijf",
  description: "Vertel waar je bedrijf tijd laat liggen. MagisData geeft je een eerste richting voor audit, bouw of enablement.",
  alternates: { canonical: "https://magisdata.nl/contact" }
};

export default function ContactPage() {
  const schema = graphSchema([
    webPageSchema({ path: "/contact", name: "Plan een AI-scan met MagisData", description: metadata.description ?? "" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])
  ]);

  return (
    <main>
      <JsonLd data={schema} />
      <section className="bg-blue-soft py-20 md:py-32"><div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Eerste gesprek</p><h1 className="mt-5 max-w-3xl text-balance text-[3.4rem] font-medium leading-[0.94] tracking-[-0.08em] text-navy sm:text-[5.5rem]">Waar laat je bedrijf tijd liggen?</h1><p className="mt-7 max-w-xl text-lg leading-8 text-muted">Vertel kort wat er nu steeds terugkomt. We kijken samen of een audit, build of leertraject de logische volgende stap is.</p><div className="mt-8 grid gap-3 text-sm font-semibold text-navy">{["30 minuten, zonder verkooppraat.", "Een concrete eerste richting.", "Geen verplicht voorstel."].map((item) => <div className="flex items-start gap-3" key={item}><Check aria-hidden="true" className="mt-0.5 shrink-0 text-blue" size={17} />{item}</div>)}</div><div className="mt-8 flex items-center gap-3 text-sm text-muted"><Mail aria-hidden="true" className="text-blue" size={17} /> contact<span>@</span>magisdata.nl</div></div><div className="border border-line-strong bg-white p-6 shadow-card md:p-8"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Plan je AI-scan</p><h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-navy">Kort is goed.</h2><p className="mt-3 text-sm leading-7 text-muted">Omschrijf het proces of de taak waar je vanaf wilt. De rest vullen we samen aan.</p></div><ContactForm /></div></div></section>
      <section className="py-16"><div className="container flex flex-col justify-between gap-5 border-t border-line pt-6 text-sm text-muted sm:flex-row"><span>Lievereerst lezen?</span><Link className="inline-flex items-center gap-2 font-semibold text-blue" href="/">Terug naar de homepage <ArrowUpRight aria-hidden="true" size={15} /></Link></div></section>
    </main>
  );
}
