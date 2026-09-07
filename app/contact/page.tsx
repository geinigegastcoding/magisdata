import type { Metadata } from "next";
import { metadataForPath } from "@/content/seo";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/contact");

export default function ContactPage() {
  const schema = graphSchema([
    webPageSchema({ path: "/contact", name: "Plan een AI-scan met MagisData", description: metadata.description ?? "" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])
  ]);

  return (
    <main className="v2-contact-page">
      <JsonLd data={schema} />
      <div className="v2-wrap v2-contact-grid">
        <div>
          <p className="v2-label">Eerste gesprek / 30 minuten</p>
          <h1>Welk werk mag<br /><span>van je bord?</span></h1>
          <p className="v2-contact-lead">Vertel kort wat er nu steeds terugkomt. We kijken samen of een audit, een eerste systeem of samen leren de logische volgende stap is.</p>
          <div className="v2-contact-benefits">{["Direct contact met Daniel, de bouwer.", "Een concrete eerste richting.", "Geen verplicht voorstel."].map((item) => <div key={item}><Check aria-hidden="true" size={17} />{item}</div>)}</div>
          <Link className="v2-link" href="/#systemen">Bekijk eerst de mogelijkheden <ArrowUpRight aria-hidden="true" size={17} /></Link>
          <div className="v2-contact-direct">contact<span>@</span>magisdata.nl</div>
        </div>
        <div className="v2-contact-panel">
          <p className="v2-label">Plan je AI-scan</p>
          <h2>Kort is goed.</h2>
          <p>Omschrijf het proces of de taak waar je hulp bij wilt. De rest vullen we samen aan.</p>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
