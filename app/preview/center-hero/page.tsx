import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Center-text hero preview",
  description: "Losse ontwerpvariant van de MagisData hero met gecentreerde tekst.",
  robots: { index: false, follow: false }
};

export default function CenterHeroPreviewPage() {
  return (
    <main className="center-hero-preview">
      <Image
        alt="Blauw-wit beeld van een klassiek standbeeld als achtergrond voor de hero-preview"
        className="center-hero-preview-image"
        fill
        priority
        sizes="100vw"
        src="/assets/magisdata-hero.png"
      />
      <div aria-hidden="true" className="center-hero-preview-overlay" />
      <Link className="center-hero-preview-back" href="/">
        <ArrowRight aria-hidden="true" size={16} /> Terug naar de homepage
      </Link>
      <div className="center-hero-content reveal-up">
        <p className="eyebrow">Losse ontwerpvariant / center text</p>
        <h1>Haal terugkerend werk uit je bedrijf met AI.</h1>
        <p>
          MagisData onderzoekt waar AI je tijd teruggeeft en bouwt systemen die e-mail,
          leads, rapportages en kenniswerk voor je voorbereiden.
        </p>
        <div className="center-hero-actions">
          <Link className="button-primary" href="/contact">
            Plan een AI-scan <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
          <Link className="text-link" href="/diensten">
            Bekijk de systemen <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}
