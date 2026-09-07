import Image from "next/image";
import { StudioCta } from "@/components/studio-cta";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = {
  title: "Plan een AI-scan voor je bedrijf",
  description: "Vertel waar je bedrijf tijd laat liggen. MagisData geeft je een eerste richting voor audit, bouw of enablement.",
  openGraph: { title: "Plan een AI-scan voor je bedrijf" , description: "Vertel waar je bedrijf tijd laat liggen. MagisData geeft je een eerste richting voor audit, bouw of enablement.", url: "https://magisdata.nl/contact", images: [{ url: "/assets/studio-og.webp", width: 1200, height: 630 }] },
  alternates: { canonical: "https://magisdata.nl/contact" }
};

export default function ContactPage() {
  const schema = graphSchema([
    webPageSchema({ path: "/contact", name: "Plan een AI-scan met MagisData", description: metadata.description ?? "" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])
  ]);

  return <main className="studio-page"><JsonLd data={schema} />
    <section className="container contact-layout"><div><h1>Waar wil jij<br /><em>ruimte maken?</em></h1><p>Vertel welke taak steeds terugkomt. Samen kijken we of een audit, een systeem of een leertraject de juiste volgende stap is.</p><ul className="knowledge-checks">{["30 minuten om je proces te begrijpen.","Een concrete eerste richting.","Geen verplicht voorstel."].map(item=><li key={item}><Check aria-hidden="true" size={17} />{item}</li>)}</ul><div className="text-link"><Mail aria-hidden="true" size={17} /><span>contact<span>@</span>magisdata.nl</span></div><div className="contact-person"><Image src="/assets/founder-336.webp" alt="Daniel Magis" width={60} height={70} /><p>Je spreekt met Daniel.<br /><span>Oprichter en bouwer bij MagisData.</span></p></div></div><div className="contact-form-panel"><h2 id="contact-form-title">Vertel. We luisteren.</h2><p>Een paar regels is genoeg. De rest ontdekken we samen.</p><ContactForm /></div></section>
  </main>;
}