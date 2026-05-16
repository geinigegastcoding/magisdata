import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { InternalLink } from "@/content/internal-links";

type RelatedLinksProps = {
  links: InternalLink[];
  title?: string;
};

export function RelatedLinks({ links, title = "Ook relevant" }: RelatedLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-[0.34fr_1fr] md:items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Interne links
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy">
              {title}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {links.map((link) => (
              <Link
                className="focus-ring group rounded-2xl border border-black/[0.05] bg-cream/50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-soft hover:bg-peach"
                href={link.href}
                key={link.href}
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="text-base font-extrabold text-navy group-hover:text-orange">
                    {link.label}
                  </span>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-orange" />
                </span>
                <span className="mt-3 block text-sm leading-6 text-muted">
                  {link.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
