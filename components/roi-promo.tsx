import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";

export function RoiPromo() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] border border-orange-soft bg-gradient-to-br from-peach via-yellow-soft to-green-soft/60 px-7 py-10 shadow-sm md:px-12 md:py-14">
          <div className="absolute right-0 top-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-orange/5 blur-3xl" />
          
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue mb-3">
                Interactieve Tool
              </p>
              <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-navy md:text-4xl">
                Wat levert een professionele website eigenlijk op?
              </h2>
              <p className="mt-4 leading-7 text-muted max-w-2xl">
                Bereken direct hoeveel een nieuw website groeiplan je bedrijf kan opleveren met onze nieuwe Website ROI-calculator. 
                Selecteer een pakket en zie je verwachte rendement na 1 jaar.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-7 py-4 text-[0.95rem] font-bold text-white shadow-sm transition-all duration-200 hover:bg-orange-dark"
                  href="/roi-calculator"
                >
                  <Calculator className="mr-2.5 h-[1.125rem] w-[1.125rem]" />
                  Bereken mijn ROI
                  <ArrowRight className="ml-2.5 h-[1.125rem] w-[1.125rem]" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="relative h-48 w-48 rounded-[2rem] border border-line bg-white/60 p-6 shadow-sm backdrop-blur-sm transform rotate-3">
                <div className="absolute -left-4 -top-4 rounded-xl bg-blue px-3 py-2 text-xs font-bold text-white shadow-sm -rotate-6">
                  ROI: 220%
                </div>
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-orange-soft to-peach opacity-50" />
                <Calculator className="absolute inset-0 m-auto h-16 w-16 text-orange" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
