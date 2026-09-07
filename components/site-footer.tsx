import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return <footer className="studio-footer"><div className="container">
    <div className="footer-top"><div><Logo /><p>AI die werk verzet.<br />Gebouwd in Voorschoten.</p></div>
      <nav aria-label="Footer navigatie"><Link href="/diensten">Wat we doen</Link><Link href="/over-ons">Over MagisData</Link><Link href="/inzichten">Inzichten</Link><Link href="/contact">Contact</Link></nav>
      <div className="footer-contact"><span>Een goed systeem begint met een gesprek.</span><Link href="/contact">contact<span>@</span>magisdata.nl <ArrowUpRight aria-hidden="true" size={18} /></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} MagisData</span><div><Link href="/privacybeleid">Privacy</Link><Link href="/algemene-voorwaarden">Voorwaarden</Link><button data-consent-open type="button">Cookie-instellingen</button></div><span>Onderzoeken. Bouwen. Overdragen.</span></div>
  </div></footer>;
}
