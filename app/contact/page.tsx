import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { site } from "@/lib/site";
import { baseGraph } from "@/schemas/structured-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met MagisData voor een strategische review van je website, zoekzichtbaarheid, AI-readiness, automatisering en conversie-infrastructuur.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact met MagisData", url: `${site.url}/contact` }
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={baseGraph("/contact")} />
      <main className="container grid gap-12 pb-20 pt-36 md:pt-44 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Vraag een strategische infrastructuurreview aan."
            description="Deel waar je bedrijf nu staat, wat beter moet en welke digitale systemen te weinig opleveren. MagisData reageert met een heldere volgende stap."
          />
          <div className="mt-10 grid gap-3">
            <ContactLine href={`mailto:${site.email}`} icon={<Mail className="h-5 w-5" />} label={site.email} />
            <ContactLine href={site.phoneHref} icon={<Phone className="h-5 w-5" />} label={site.phone} />
          </div>
        </div>

        <Card className="bg-bone p-6 text-graphite md:p-8">
          <form action={`mailto:${site.email}`} className="grid gap-5" method="post">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Naam" name="name" placeholder="Je naam" />
              <Field label="E-mail" name="email" placeholder="naam@bedrijf.nl" type="email" />
            </div>
            <Field label="Bedrijf" name="company" placeholder="Bedrijfsnaam" />
            <Field label="Website" name="website" placeholder="https://voorbeeld.nl" type="url" />
            <label className="grid gap-2 text-sm font-semibold">
              Projectcontext
              <textarea
                className="min-h-40 rounded-md border border-graphite/12 bg-bone px-4 py-3 text-base font-normal outline-none transition focus:border-amber"
                name="message"
                placeholder="Vertel wat beter moet: autoriteit, websiteperformance, SEO, AI-zichtbaarheid, automatisering, conversie of positionering."
              />
            </label>
            <Button className="w-full" type="submit" variant="dark">
              Verstuur reviewaanvraag
            </Button>
          </form>
        </Card>
      </main>
    </>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text"
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input
        className="h-12 rounded-md border border-graphite/12 bg-bone px-4 text-base font-normal outline-none transition focus:border-amber"
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}

function ContactLine({
  href,
  icon,
  label
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      className="flex items-center gap-3 rounded-md border border-bone/10 bg-bone/[0.035] p-4 text-sm text-bone/70 hover:text-amber"
      href={href}
    >
      <span className="text-amber">{icon}</span>
      {label}
    </a>
  );
}
