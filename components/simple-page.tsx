import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaProof } from "@/components/cta-proof";

type SimplePageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SimplePage({ eyebrow, title, description }: SimplePageProps) {
  return (
    <main className="bg-cream/40 py-20">
      <section className="container">
        <div className="mx-auto max-w-3xl rounded-[2.25rem] border border-line bg-white p-8 text-center shadow-card md:p-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-[2.5em] sm:text-[3.5em] md:text-[4em] font-extrabold tracking-[-0.035em] text-navy">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            {description}
          </p>
          <Link
            className="focus-ring mt-8 inline-flex items-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-dark"
            href="/contact"
          >
            Vraag gratis websiteplan aan <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <div className="mt-4">
            <CtaProof />
          </div>
        </div>
      </section>
    </main>
  );
}
