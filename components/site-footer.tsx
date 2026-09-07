import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="md-footer">
      <div className="md-wrap">
        <div className="md-footer-top"><div><Logo /><p>Praktische AI.<br />Meer ruimte voor goed werk.</p></div><nav aria-label="Footer navigatie"><Link href="/diensten">Diensten</Link><Link href="/over-ons">Over MagisData</Link><Link href="/inzichten">Kennis & inzichten</Link><Link href="/contact">Contact</Link></nav><div className="md-footer-contact"><Link href="/contact"><span>contact<span>@</span>magisdata.nl</span> <ArrowUpRight size={17} aria-hidden="true" /></Link><span>Voorschoten, Nederland</span><button type="button" data-consent-open>Cookie-instellingen</button></div></div>
        <div className="md-footer-wordmark" aria-hidden="true">MagisData<span>↗</span></div>
        <div className="md-footer-bottom"><span>© 2026 MagisData</span><div><Link href="/privacybeleid">Privacybeleid</Link><Link href="/algemene-voorwaarden">Algemene voorwaarden</Link></div><span>Van mogelijkheden naar praktijk.</span></div>
      </div>
    </footer>
  );
}
