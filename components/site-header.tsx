import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";

const navigation = [
  { label: "Systemen", href: "/diensten" },
  { label: "Werkwijze", href: "/over-ons" },
  { label: "Kennis", href: "/inzichten" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl">
      <nav aria-label="Primaire navigatie" className="container flex min-h-[5.5rem] items-center justify-between gap-6">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link className="focus-ring rounded-sm px-1 py-2 text-sm font-semibold text-muted transition hover:text-blue" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="hidden text-xs text-soft xl:inline">AI begint met een goed gesprek</span>
          <Link className="focus-ring inline-flex items-center gap-2 bg-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-dark" href="/contact">
            Plan een AI-scan
          </Link>
        </div>

        <details className="relative lg:hidden">
          <summary className="focus-ring grid h-11 w-11 cursor-pointer list-none place-items-center border border-line bg-white text-navy [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Navigatie openen</span>
            <Menu aria-hidden="true" className="h-5 w-5" />
          </summary>
          <div className="absolute right-0 top-[calc(100%+1rem)] w-[min(20rem,calc(100vw-2rem))] border border-line bg-white p-3 shadow-card">
            <div className="grid gap-1">
              {navigation.map((item) => (
                <Link className="focus-ring px-4 py-3 text-sm font-semibold text-muted hover:bg-blue-soft hover:text-blue" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="focus-ring mt-2 bg-blue px-4 py-3 text-center text-sm font-bold text-white" href="/contact">
                Plan een AI-scan
              </Link>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
