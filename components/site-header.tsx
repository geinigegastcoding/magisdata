import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";

type NavigationItem = {
  label: string;
  href: string;
  activePaths?: string[];
};

const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Diensten",
    href: "/services",
    activePaths: [
      "/services",
      "/web-development",
      "/seo-services",
      "/geo-optimization",
      "/aeo-optimization",
      "/ai-infrastructure",
      "/strategic-consulting"
    ]
  },
  { label: "Over MagisData", href: "/about" },
  { label: "Cases", href: "/case-studies" },
  { label: "Inzichten", href: "/insights" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/88 backdrop-blur-xl">
      <nav
        aria-label="Primaire navigatie"
        className="container flex min-h-[5.25rem] items-center justify-between gap-4 py-4 sm:gap-6"
      >
        <Logo className="shrink-0" />

        <div className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => (
            <Link
              className="focus-ring rounded-full px-1 py-2 text-[0.95rem] font-semibold text-ink transition hover:text-orange"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          className="focus-ring hidden items-center rounded-xl bg-orange px-7 py-3.5 text-[0.95rem] font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-dark lg:inline-flex"
          href="/contact"
        >
          Plan een gratis gesprek
          <span aria-hidden className="ml-2">
            -&gt;
          </span>
        </Link>

        <details className="group relative lg:hidden">
          <summary className="focus-ring grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full border border-line bg-white text-navy shadow-card [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Navigatie openen</span>
            <Menu className="h-5 w-5" />
          </summary>
          <div className="absolute right-0 top-[calc(100%+1.25rem)] w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-line bg-white p-3 shadow-card">
            <div className="grid gap-1">
              {navigation.map((item) => (
                <Link
                  className="focus-ring rounded-xl px-4 py-3 text-sm font-semibold text-ink hover:bg-peach hover:text-orange"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="focus-ring mt-2 rounded-xl bg-orange px-5 py-3 text-center text-sm font-bold text-white shadow-sm"
                href="/contact"
              >
                Plan een gratis gesprek
              </Link>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
