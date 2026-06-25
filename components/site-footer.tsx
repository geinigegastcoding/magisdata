import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { sitePhone, sitePhoneHref } from "@/schemas/seo";

const columns = [
  {
    title: "Diensten",
    links: [
      { label: "SEO", href: "/seo-diensten" },
      { label: "Webontwikkeling", href: "/webontwikkeling" },
      { label: "Website onderhoud", href: "/website-onderhoud" },
      { label: "Online marketing", href: "/online-marketing-bureau" },
      { label: "Lokale SEO", href: "/lokale-seo" },
      { label: "AI vindbaarheid", href: "/ai-vindbaarheid" },
      { label: "GEO optimalisatie", href: "/geo-optimalisatie" },
      { label: "AEO optimalisatie", href: "/aeo-optimalisatie" },
      { label: "AI en automatisering", href: "/ai-automatisering" },
      { label: "Strategisch advies", href: "/strategisch-advies" },
      { label: "SEO bureau Leiden", href: "/seo-bureau-leiden" }
    ]
  },
  {
    title: "Portfolio",
    links: [
      { label: "Alle projecten", href: "/cases" },
      { label: "Hoveniersbedrijf", href: "/cases/website-design-hoveniersbedrijf" },
      { label: "Dakbedrijf", href: "/cases/website-design-dakbedrijf" },
      { label: "Social platform", href: "/cases/website-design-social-growth-platform" },
      { label: "IT consultancy", href: "/cases/website-design-it-consultancy" }
    ]
  },
  {
    title: "Bedrijf",
    links: [
      { label: "Over MagisData", href: "/over-ons" },
      { label: "Contact", href: "/contact" },
      { label: "Status", href: "/status" },
      { label: "Privacybeleid", href: "/privacybeleid" },
      { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" }
    ]
  }
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
          <Link className="focus-ring mt-6 inline-flex rounded-full text-sm font-bold text-orange hover:text-orange-dark" href="/status">
            Beschikbaar voor gesprek
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
            <span className="inline-flex items-center gap-2 rounded-full">
              <Mail className="h-4 w-4" />
              contact [at] magisdata.nl
            </span>
            <Link className="focus-ring inline-flex items-center gap-2 rounded-full hover:text-orange" href={sitePhoneHref}>
              <Phone className="h-4 w-4" />
              {sitePhone}
            </Link>
            <span className="inline-flex items-start gap-2 leading-6">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Voorschoten, nabij Leiden
            </span>
            <button className="focus-ring w-fit rounded-full text-left hover:text-orange" data-consent-open type="button">
              Cookie-instellingen
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-soft">
        (c) 2026 MagisData. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
