"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, serviceNavigation } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-graphite/88 backdrop-blur-xl">
      <nav
        aria-label="Primaire navigatie"
        className="container flex h-20 items-center justify-between"
      >
        <Logo className="rounded-md bg-graphite/40 px-2 py-1 shadow-sm" />

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              className="text-sm font-semibold text-bone/64 transition hover:text-bone"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" variant="secondary">
            <Link href="/services">Bekijk diensten</Link>
          </Button>
          <Button asChild size="sm" variant="amber">
            <Link href="/contact">Plan strategiegesprek</Link>
          </Button>
        </div>

        <button
          aria-expanded={open}
          aria-label="Navigatie openen"
          className="grid h-10 w-10 place-items-center rounded-md border border-bone/12 text-bone lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-bone/10 bg-graphite lg:hidden">
          <div className="container grid gap-2 py-5">
            {[...navigation, ...serviceNavigation].map((item) => (
              <Link
                className="rounded-md px-3 py-3 text-sm font-semibold text-bone/70 hover:bg-bone/[0.04] hover:text-bone"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3" variant="amber">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Plan strategiegesprek
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
