import Link from "next/link";
import { articles } from "@/content/articles";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowRight, BookOpen } from "lucide-react";

import { metadataForPath } from "@/content/seo";

export const metadata = metadataForPath("/inzichten");

export default function InzichtenPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Inzichten", path: "/inzichten" }
  ];

  return (
    <main className="bg-cream/40 min-h-screen pb-16">
      <Breadcrumbs items={breadcrumbItems} />
      
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-soft text-orange">
              <BookOpen className="h-6 w-6" strokeWidth={2.1} />
            </span>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">Kennisbank</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-navy">
            Inzichten & Praktische Antwoorden
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            Korte, direct toepasbare artikelen over hoe je als lokale dienstverlener je website, vindbaarheid en aanvragen verbetert.
          </p>
        </div>
      </section>

      <section className="container max-w-4xl grid gap-6">
        {articles.map((article) => (
          <Link href={`/inzichten/${article.slug}`} key={article.slug} className="group block">
            <article className="rounded-2xl border border-line bg-white p-6 md:p-8 shadow-sm transition hover:border-orange-soft hover:shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-orange">{article.category}</span>
                <span className="text-xs text-muted">&bull;</span>
                <span className="text-xs text-muted">{new Date(article.datePublished).toLocaleDateString("nl-NL")}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-navy group-hover:text-orange transition-colors">
                {article.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                {article.tldr}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-navy group-hover:text-orange">
                Lees artikel <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
