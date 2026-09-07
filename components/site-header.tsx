"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

const navigation = [
  { label: "Wat we doen", href: "/#systemen" },
  { label: "Onze aanpak", href: "/#werkwijze" },
  { label: "Over MagisData", href: "/over-ons" },
  { label: "Kennis", href: "/inzichten" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  return (
    <header className="md-header" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); document.getElementById("md-menu-toggle")?.focus(); } }}>
      <nav className="md-wrap md-nav" aria-label="Primaire navigatie">
        <Logo />
        <div className="md-nav-links">{navigation.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}</div>
        <Link className="md-nav-cta" href="/contact" data-track-cta="redesign-header">Plan een AI-scan <ArrowUpRight size={18} aria-hidden="true" /></Link>
        <button className="md-menu-toggle" id="md-menu-toggle" type="button" aria-expanded={open} aria-controls="md-mobile-menu" aria-label={open ? "Navigatie sluiten" : "Navigatie openen"} onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </nav>
      {open && <nav id="md-mobile-menu" className="md-mobile-menu" aria-label="Mobiele navigatie">{navigation.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={20} aria-hidden="true" /></Link>)}<Link href="/contact" onClick={() => setOpen(false)}>Plan een AI-scan<ArrowUpRight size={20} aria-hidden="true" /></Link></nav>}
    </header>
  );
}
