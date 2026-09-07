import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
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
    <main id="main-content" className="md-site md-contact">
      <JsonLd data={schema} />
      <section className="md-wrap md-contact-grid">
        <div className="md-contact-intro">
          <h1>Waar kan jouw<br />werk <em>slimmer?</em></h1>
          <p>Vertel kort wat er nu steeds terugkomt. We kijken samen of een audit, een eerste workflow of training je verder helpt.</p>
          <ul>{["30 minuten om je vraag te verkennen", "Een concrete eerste richting", "Geen verplicht voorstel"].map(item => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul>
          <div className="md-contact-person"><strong>Direct contact met Daniël.</strong><span>contact<span>@</span>magisdata.nl</span></div>
          <Link className="md-link" href="/#systemen">Bekijk eerst de mogelijkheden <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="md-contact-form"><h2 id="contact-form-title">Vertel eens.</h2><p>Welk werk zou je graag uit handen geven?</p><ContactForm /></div>
      </section>
    </main>
  );
}
