import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function StudioCta() {
  return <section className="studio-cta"><div className="container"><div><span className="section-number">Begin bij één proces</span><h2>Welk werk mag<br />van je bord?</h2></div><div><p>Vertel wat er steeds terugkomt. We kijken samen waar AI kan helpen en wat een logische eerste stap is.</p><Link className="button-primary" href="/contact">Plan een AI-scan <ArrowUpRight size={20} aria-hidden="true" /></Link></div></div></section>;
}