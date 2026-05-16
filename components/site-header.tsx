"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (item: NavigationItem) => {
    if (item.href === "/") {
      return pathname === "/";
    }

    const paths = item.activePaths ?? [item.href];

    return paths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/88 backdrop-blur-xl">
      <nav
        aria-label="Primaire navigatie"
        className="container flex min-h-[5.25rem] items-center justify-between gap-4 py-4 sm:gap-6"
      >
        <Logo className="shrink-0" />

        <div className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => {
            const active = isActive(item);

            return (
              <Link
                aria-current={active ? "page" : undefined}
                className="focus-ring relative rounded-full px-1 py-2 text-[0.95rem] font-semibold text-ink transition hover:text-orange aria-[current=page]:text-orange"
                href={item.href}
                key={item.href}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-8 rounded-full bg-orange" />
                ) : null}
              </Link>
            );
          })}
        </div>

        <Link
          className="focus-ring hidden items-center rounded-xl bg-orange px-7 py-3.5 text-[0.95rem] font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-dark lg:inline-flex"
          href="/contact"
        >
          Boek een strategisch gesprek
          <span aria-hidden className="ml-2">
            -&gt;
          </span>
        </Link>

        <button
          aria-expanded={open}
          aria-label="Navigatie openen"
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-navy shadow-card lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container grid gap-2 py-5">
            {navigation.map((item) => (
              <Link
                aria-current={isActive(item) ? "page" : undefined}
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-semibold text-ink hover:bg-peach aria-[current=page]:bg-peach aria-[current=page]:text-orange"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="focus-ring mt-2 rounded-xl bg-orange px-5 py-3 text-center text-sm font-bold text-white shadow-sm"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Boek een strategisch gesprek
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
