import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Diensten",
    links: [
      { label: "SEO", href: "/seo-services" },
      { label: "Websites", href: "/web-development" },
      { label: "Website laten maken", href: "/website-laten-maken" },
      { label: "Website onderhoud", href: "/website-onderhoud" },
      { label: "SEO website laten maken", href: "/seo-website-laten-maken" },
      { label: "GEO optimalisatie", href: "/geo-optimization" },
      { label: "AEO optimalisatie", href: "/aeo-optimization" },
      { label: "AI en automatisering", href: "/ai-infrastructure" },
      { label: "Strategisch advies", href: "/strategic-consulting" }
    ]
  },
  {
    title: "Bewijs",
    links: [
      { label: "Cases", href: "/case-studies" },
      { label: "Lokale dienstverlener", href: "/case-studies/lokale-dienstverlener" },
      { label: "Adviesbureau", href: "/case-studies/adviesbureau" },
      { label: "Groeiende webshop", href: "/case-studies/groeiende-webshop" }
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
      { label: "Inzichten", href: "/insights" },
      { label: "Website krijgt weinig aanvragen", href: "/insights/website-meer-aanvragen" },
      { label: "SEO zonder jargon", href: "/insights/seo-zonder-jargon" },
      { label: "AI-vindbaarheid", href: "/insights/ai-vindbaarheid" },
      { label: "Over MagisData", href: "/about" },
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
          <div className="mt-4 grid gap-2 text-sm text-muted">
            <Link className="focus-ring rounded-full hover:text-orange" href="mailto:hallo%40magisdata.nl">
              hallo [at] magisdata.nl
            </Link>
            <Link className="focus-ring rounded-full hover:text-orange" href="tel:+31612345678">
              +31 6 12345678
            </Link>
            <span>Nederland</span>
          </div>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-soft">
        (c) 2026 MagisData. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
