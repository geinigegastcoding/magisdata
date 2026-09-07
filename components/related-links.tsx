import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { InternalLink } from "@/content/internal-links";
export function RelatedLinks({ links, title = "Verder lezen" }: { links: InternalLink[]; title?: string }) {
 if (!links.length) return null;
 return <section className="container reading-section"><h2>{title}</h2><div className="reading-rows">{links.map(link=><article key={link.href}><Link className="text-link" href={link.href}>{link.label}<ArrowUpRight aria-hidden="true" size={17} /></Link><p>{link.description}</p></article>)}</div></section>;
}
