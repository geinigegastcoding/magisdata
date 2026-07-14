import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, ExternalLink, ShieldCheck } from "lucide-react";
import { metadataForPath } from "@/content/seo";
import { JsonLd } from "@/components/json-ld";
import { graphSchema, webPageSchema } from "@/schemas/seo";
import { RoiCalculatorClient } from "./RoiCalculatorClient";
import { FinalCta } from "@/components/homepage-sections";

export const metadata: Metadata = metadataForPath("/roi-calculator");

export default function RoiCalculatorPage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/roi-calculator",
      name: "Website ROI Calculator | Bereken je Return on Investment",
      description: metadata.description ?? ""
    })
  ]);

  return (
    <main>
      <JsonLd data={schema} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-soft/40 via-cream to-white"></div>
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-sm font-extrabold uppercase tracking-widest text-orange mb-4 flex items-center justify-center gap-2">
            <Calculator className="w-4 h-4" />
            Interactieve Tool
          </p>
          <h1 className="text-[2.5em] sm:text-[3.5em] md:text-[4em] font-extrabold text-navy tracking-tight mb-6">
            Wat levert een nieuwe website eigenlijk op?
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            Een website is geen kostenpost, maar een investering in je bedrijf. Gebruik onze ROI-calculator om direct te zien wat een professionele website jou kan opleveren in het eerste jaar.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-5xl mx-auto">
          <RoiCalculatorClient />
        </div>
      </section>

      {/* Explanation & Links Section */}
      <section className="py-16 md:py-24 bg-cream/30 border-t border-line">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-6">
                Hoe berekenen we deze ROI?
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  De verwachte waardecreatie in onze calculator is gebaseerd op een <strong>conservatieve inschatting</strong> van de impact die een sterke online aanwezigheid heeft op jouw specifieke bedrijfsfase.
                </p>
                <p>
                  Een beter gestructureerde website verhoogt niet alleen de conversie (het percentage bezoekers dat contact opneemt), maar zorgt door goede bewijsvoering en autoriteit ook voor kwalitatievere leads die sneller 'ja' zeggen tegen jouw prijzen.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <ShieldCheck className="w-5 h-5 text-green mt-0.5 mr-3 flex-shrink-0" />
                    <span>Focus op conversie-optimalisatie.</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="w-5 h-5 text-green mt-0.5 mr-3 flex-shrink-0" />
                    <span>Duidelijke, drempelvrije contactroutes.</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="w-5 h-5 text-green mt-0.5 mr-3 flex-shrink-0" />
                    <span>Sterke bewijsvoering die vertrouwen wekt.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-line p-8 shadow-sm">
              <h3 className="text-xl font-extrabold text-navy mb-4">Meer weten over onze aanpak?</h3>
              <p className="text-sm text-muted mb-6">
                Lees meer over hoe wij websites bouwen of bekijk direct de exacte opbouw en inbegrepen functionaliteiten van onze pakketten.
              </p>
              
              <div className="space-y-3">
                <Link href="/webontwikkeling" className="flex items-center justify-between p-4 rounded-xl border border-line hover:border-orange hover:bg-orange-soft/20 transition-all group">
                  <span className="font-bold text-navy text-sm">Onze visie op webontwikkeling</span>
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-orange transition-colors" />
                </Link>
                <Link href="/diensten" className="flex items-center justify-between p-4 rounded-xl border border-line hover:border-orange hover:bg-orange-soft/20 transition-all group">
                  <span className="font-bold text-navy text-sm">Bekijk alle pakketten & prijzen</span>
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-orange transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
