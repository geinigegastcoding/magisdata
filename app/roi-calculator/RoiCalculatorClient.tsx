"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const WEBSITE_PACKAGES = [
  { id: "web-start", name: "Start (€ 300 / jr)", priceYearly: 300, estimatedValue: 780, roiExplanation: "Gebaseerd op een lichte toename in geloofwaardigheid en een makkelijkere contactroute voor bestaande relaties." },
  { id: "web-groei", name: "Groei (€ 500 / jr)", priceYearly: 500, estimatedValue: 1400, roiExplanation: "Gebaseerd op een sterkere opbouw van de diensten en betere conversie door gerichte bewijsvoering." },
  { id: "web-autoriteit", name: "Autoriteit (€ 999 / jr)", priceYearly: 999, estimatedValue: 3197, roiExplanation: "Gebaseerd op optimale conversie-inrichting en autoriteit, wat high-value leads sneller overtuigt." },
];

export function RoiCalculatorClient() {
  const [selectedWeb, setSelectedWeb] = useState<string>("web-groei");

  const webOpt = WEBSITE_PACKAGES.find(o => o.id === selectedWeb)!;

  const totalInvestmentYear1 = webOpt.priceYearly;
  const finalValue = webOpt.estimatedValue;
  
  const roi = totalInvestmentYear1 > 0 ? (((finalValue - totalInvestmentYear1) / totalInvestmentYear1) * 100) : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      
      {/* Left Column: Input */}
      <div className="pt-2 lg:pt-6">
        <label className="block text-sm font-bold text-navy mb-4">
          Welk pakket past bij jou?
        </label>
        <div className="relative">
          <select
            value={selectedWeb}
            onChange={(e) => setSelectedWeb(e.target.value)}
            className="block w-full appearance-none rounded-2xl border-2 border-line bg-white pl-5 pr-12 py-5 text-navy focus:border-orange focus:ring-0 text-lg font-bold transition cursor-pointer shadow-sm hover:border-orange-soft"
          >
            {WEBSITE_PACKAGES.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-muted">
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
        
        <div className="mt-8">
           <p className="text-sm font-bold text-navy uppercase tracking-wider mb-2">Jouw investering</p>
           <p className="text-3xl sm:text-4xl font-black text-navy tracking-tighter">
             € {totalInvestmentYear1.toLocaleString('nl-NL')} <span className="text-lg text-muted font-bold tracking-normal">/ jaar</span>
           </p>
        </div>
      </div>

      {/* Right Column: Clean Text Results */}
      <div className="bg-cream/40 rounded-3xl border border-line p-8 flex flex-col justify-center h-full">
        
        <div className="mb-6">
          <p className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Geschatte extra omzet</p>
          <p className="text-4xl font-black text-navy tracking-tighter">
            € {finalValue.toLocaleString('nl-NL')}
          </p>
        </div>
        
        <div className="flex items-center gap-6 mb-8">
          <div>
            <p className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Geschatte ROI</p>
            <div className="flex items-center gap-3">
              <span className="text-5xl font-black text-orange tracking-tighter tabular-nums">
                {roi.toFixed(0)}%
              </span>
              <TrendingUp className="w-8 h-8 text-orange" />
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Onderbouwing</p>
          <p className="text-sm text-muted leading-relaxed">
            {webOpt.roiExplanation}
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-line/60">
          <Link
            href="/contact"
            className="focus-ring flex w-full items-center justify-center rounded-xl bg-orange px-8 py-4 text-[1rem] font-bold text-white shadow-sm transition-all duration-200 hover:bg-orange-dark"
          >
            Start met dit groeiplan
            <ArrowRight className="ml-2.5 h-5 w-5" />
          </Link>
        </div>

      </div>

    </div>
  );
}
