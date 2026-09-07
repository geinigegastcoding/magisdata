"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
const navigation = [{ label: "Wat we bouwen", href: "/#systemen" }, { label: "Onze aanpak", href: "/#werkwijze" }, { label: "Over MagisData", href: "/over-ons/" }, { label: "Kennis", href: "/inzichten/" }];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  return <header className="v2-header" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); document.getElementById("v2-menu-toggle")?.focus(); } }}>
    <a className="v2-skip" href="#page-content">Naar de inhoud</a>
    <nav className="v2-wrap v2-nav" aria-label="Primaire navigatie"><Logo /><div className="v2-desktop-nav">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div><Link className="v2-nav-cta" data-track-cta="header-ai-scan" href="/contact/">Plan een AI-scan <ArrowUpRight aria-hidden="true" size={18} /></Link><button className="v2-menu-toggle" id="v2-menu-toggle" type="button" aria-expanded={open} aria-controls="v2-mobile-nav" aria-label={open ? "Menu sluiten" : "Menu openen"} onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button></nav>
    <nav id="v2-mobile-nav" className="v2-mobile-nav" aria-label="Mobiele navigatie" hidden={!open}>{navigation.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight aria-hidden="true" size={19} /></Link>)}<Link href="/contact/" onClick={() => setOpen(false)}>Plan een AI-scan <ArrowUpRight aria-hidden="true" size={19} /></Link></nav>
  </header>;
}
