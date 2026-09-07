"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

const navigation = [
  { label: "Wat we doen", href: "/diensten" },
  { label: "Over MagisData", href: "/over-ons" },
  { label: "Inzichten", href: "/inzichten" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="studio-header">
    <a className="skip-link" href="#main-content">Naar de inhoud</a>
    <nav className="container studio-nav" aria-label="Primaire navigatie" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); document.getElementById("menu-toggle")?.focus(); } }}>
      <div onClick={() => setOpen(false)}><Logo /></div>
      <div className="desktop-nav">{navigation.map((item) => <Link aria-current={pathname.startsWith(item.href) ? "page" : undefined} key={item.href} href={item.href}>{item.label}</Link>)}</div>
      <Link className="nav-cta" href="/contact">Plan een AI-scan <ArrowUpRight aria-hidden="true" size={17} /></Link>
      <button id="menu-toggle" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Navigatie sluiten" : "Navigatie openen"} onClick={() => setOpen(!open)} type="button">{open ? <X /> : <Menu />}</button>
      <div id="mobile-navigation" className="mobile-nav" hidden={!open}>{[...navigation, {label: "Plan een AI-scan", href: "/contact"}].map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href}>{item.label}<ArrowUpRight aria-hidden="true" size={18} /></Link>)}</div>
    </nav>
  </header>;
}
