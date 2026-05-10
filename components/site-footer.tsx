import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { navigation, serviceNavigation, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-bone/10 bg-graphite">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-7 text-bone/54">
            Strategische digitale infrastructuur voor autoriteit,
            zichtbaarheid, AI-vindbaarheid, automatisering en conversie.
          </p>
        </div>

        <FooterGroup title="Navigatie">
          {navigation.map((item) => (
            <FooterLink href={item.href} key={item.href}>
              {item.label}
            </FooterLink>
          ))}
        </FooterGroup>

        <FooterGroup title="Infrastructuur">
          {serviceNavigation.map((item) => (
            <FooterLink href={item.href} key={item.href}>
              {item.label}
            </FooterLink>
          ))}
        </FooterGroup>

        <div>
          <h2 className="font-satoshi text-sm font-semibold uppercase tracking-[0.18em] text-bone">
            Contact
          </h2>
          <div className="mt-5 space-y-3 text-sm text-bone/56">
            <p>{site.addressLocality}, Nederland</p>
            <a className="block hover:text-amber" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="block hover:text-amber" href={site.phoneHref}>
              {site.phone}
            </a>
          </div>
          <Link
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber"
            href="/contact"
          >
            Start een gesprek <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="container flex flex-col gap-3 border-t border-bone/8 py-6 text-xs text-bone/40 md:flex-row md:items-center md:justify-between">
        <p>© 2026 MagisData. Alle rechten voorbehouden.</p>
        <p>Gebouwd voor zoekmachines, antwoordmachines en moderne kopers.</p>
      </div>
    </footer>
  );
}

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-satoshi text-sm font-semibold uppercase tracking-[0.18em] text-bone">
        {title}
      </h2>
      <div className="mt-5 grid gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="text-sm text-bone/54 transition hover:text-amber" href={href}>
      {children}
    </Link>
  );
}
