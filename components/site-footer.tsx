import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Diensten",
    links: [
      { label: "SEO", href: "/seo-diensten" },
      { label: "Websites", href: "/webontwikkeling" },
      { label: "Website laten maken", href: "/website-laten-maken" },
      { label: "Website onderhoud", href: "/website-onderhoud" },
      { label: "SEO website laten maken", href: "/seo-website-laten-maken" },
      { label: "GEO optimalisatie", href: "/geo-optimalisatie" },
      { label: "AEO optimalisatie", href: "/aeo-optimalisatie" },
      { label: "AI en automatisering", href: "/ai-infrastructuur" },
      { label: "Strategisch advies", href: "/strategisch-advies" }
    ]
  },
  {
    title: "Bewijs",
    links: [
      { label: "Website design", href: "/cases" },
      { label: "Hoveniersbedrijf", href: "/cases/website-design-hoveniersbedrijf" },
      { label: "Dakbedrijf", href: "/cases/website-design-dakbedrijf" },
      { label: "Social platform", href: "/cases/website-design-social-growth-platform" },
      { label: "IT consultancy", href: "/cases/website-design-it-consultancy" }
    ]
  },
  {
    title: "Branches",
    links: [
      { label: "Website voor loodgieters", href: "/website-voor-loodgieters" },
      { label: "Website voor elektriciens", href: "/website-voor-elektriciens" },
      { label: "Website voor kappers", href: "/website-voor-kappers" },
      { label: "Website voor hoveniers", href: "/website-voor-hoveniers" }
    ]
  },
  {
    title: "Regio",
    links: [
      { label: "Website laten maken Leiden", href: "/website-laten-maken-leiden" },
      { label: "Website laten maken Den Haag", href: "/website-laten-maken-den-haag" },
      { label: "Website laten maken Rotterdam", href: "/website-laten-maken-rotterdam" }
    ]
  },
  {
    title: "Kennis",
    links: [
      { label: "Inzichten", href: "/inzichten" },
      { label: "Website krijgt weinig aanvragen", href: "/inzichten/website-meer-aanvragen" },
      { label: "SEO zonder jargon", href: "/inzichten/seo-zonder-jargon" },
      { label: "AI-vindbaarheid", href: "/inzichten/ai-vindbaarheid" },
      { label: "Over MagisData", href: "/over-ons" },
      { label: "Contact", href: "/contact" },
      { label: "Privacybeleid", href: "/privacybeleid" },
      { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" }
    ]
  }
];

const socialLinks = [
  { label: "LinkedIn", icon: Linkedin },
  { label: "YouTube", icon: Youtube },
  { label: "Instagram", icon: Instagram }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container grid gap-10 py-12 xl:grid-cols-[0.85fr_2.6fr_0.7fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm font-medium text-muted">
            Digitale groei voor ambitieuze bedrijven
          </p>
          <div className="mt-6 flex gap-3 text-soft">
            {socialLinks.map(({ label, icon: Icon }) => (
              <Link
                aria-label={label}
                className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-line transition hover:border-orange hover:text-orange"
                href="/contact"
                key={label}
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-navy">
                {column.title}
              </h2>
              <ul className="mt-4 grid gap-2 text-sm text-muted">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link className="focus-ring rounded-full hover:text-orange" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-navy">
            Contact
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-muted">
            <Link className="focus-ring inline-flex items-center gap-2 rounded-full hover:text-orange" href="mailto:contact%40magisdata.nl">
              <Mail className="h-4 w-4" />
              contact [at] magisdata.nl
            </Link>
            <Link className="focus-ring inline-flex items-center gap-2 rounded-full hover:text-orange" href="tel:+31642280029">
              <Phone className="h-4 w-4" />
              +31 6 42280029
            </Link>
            <span className="inline-flex items-start gap-2 leading-6">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Suze Groenewegerf 25, Voorschoten
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-soft">
        (c) 2026 MagisData. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
