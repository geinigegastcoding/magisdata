import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";

const footerLinks = [
  { label: "Systemen", href: "/diensten" },
  { label: "Werkwijze", href: "/over-ons" },
  { label: "Kennis", href: "/inzichten" },
  { label: "Contact", href: "/contact" },
  { label: "Privacybeleid", href: "/privacybeleid" },
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr_0.8fr] md:py-16">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            MagisData bouwt AI-systemen die terugkerend werk uit je bedrijf halen en je team meer ruimte geven voor goed werk.
          </p>
          <Link className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-orange-dark" href="/contact">
            Plan een AI-scan <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue">Navigatie</p>
          <nav aria-label="Footer navigatie" className="mt-4 grid gap-2 text-sm text-muted">
            {footerLinks.map((link) => <Link className="focus-ring w-fit hover:text-blue" href={link.href} key={link.href}>{link.label}</Link>)}
          </nav>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue">Contact</p>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-muted">
            <Link className="focus-ring inline-flex items-center gap-2 hover:text-blue" href="/contact">
              <Mail aria-hidden="true" size={16} /> contact<span>@</span>magisdata.nl
            </Link>
            <span className="inline-flex items-start gap-2"><MapPin aria-hidden="true" className="mt-1 shrink-0" size={16} /> Voorschoten, Nederland</span>
            <button className="focus-ring w-fit text-left hover:text-blue" data-consent-open type="button">Cookie-instellingen</button>
          </div>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-soft">© 2026 MagisData. Alle rechten voorbehouden.</div>
    </footer>
  );
}
