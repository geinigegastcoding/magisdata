import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function StudioCta() {
  return <section className="studio-cta"><div className="container">
    <h2>Meer ruimte voor<br /><em>het echte werk.</em></h2>
    <div><p>Begin bij die ene taak die elke week terugkomt. Samen kijken we wat er slimmer kan.</p><Link className="button-primary" href="/contact">Plan een AI-scan <ArrowUpRight aria-hidden="true" size={18} /></Link></div>
  </div></section>;
}
