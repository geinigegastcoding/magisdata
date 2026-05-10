import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection({
  title = "Bouw de infrastructuur achter je volgende groeifase.",
  description = "Start met een strategische review van je website, zoekarchitectuur, AI-zichtbaarheid en conversiesysteem."
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-y border-bone/10 bg-steel/50 py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Strategische review
            </p>
            <h2 className="mt-4 font-satoshi text-3xl font-semibold leading-tight text-bone md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-bone/62">{description}</p>
          </div>
          <Button asChild size="lg" variant="amber">
            <Link href="/contact">
              Vraag review aan <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
