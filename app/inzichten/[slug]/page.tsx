import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { articles } from "@/content/articles";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { webPageSchema, faqSchema } from "@/schemas/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { metadataForPath } from "@/content/seo";
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return metadataForPath(`/inzichten/${slug}`);
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Inzichten", path: "/inzichten" },
    { name: article.title, path: `/inzichten/${article.slug}` }
  ];

  const schemaNodes = [
    webPageSchema({
      path: `/inzichten/${article.slug}`,
      name: article.metaTitle,
      description: article.metaDescription
    }),
    ...(article.faqs.length >= 2 ? [faqSchema(article.faqs, `/inzichten/${article.slug}`)] : [])
  ];

  return (
    <main className="bg-cream/40 min-h-screen pb-16">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": schemaNodes }} />
      <Breadcrumbs items={breadcrumbItems} />
      
      <article className="container max-w-3xl pt-10 md:pt-16">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">{article.category}</span>
          </div>
          <h1 className="text-[2.5em] sm:text-[3.5em] md:text-[4em] font-extrabold tracking-[-0.03em] text-navy leading-tight">
            {article.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-orange/20 grid place-items-center text-orange font-bold text-xs">
                {article.author.charAt(0)}
              </div>
              <span className="font-semibold">{article.author}</span>
            </div>
            <span>&bull;</span>
            <time dateTime={article.datePublished}>
              {new Date(article.datePublished).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </div>
        </header>

        {article.image && (
          <div className="mb-10 rounded-2xl overflow-hidden border border-line">
            <img src={article.image} alt={article.title} className="w-full h-auto" />
          </div>
        )}

        <div className="rounded-[1.5rem] border border-orange-soft bg-peach p-6 md:p-8 mb-10 shadow-sm">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange mb-3">Direct Antwoord</p>
          <p className="text-lg leading-8 font-semibold text-navy">
            {article.tldr}
          </p>
        </div>

        <div className="mb-16">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({node, ...props}) => <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-navy mt-12 mb-6" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-navy mt-8 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="text-lg leading-8 text-muted mb-6" {...props} />,
              a: ({node, ...props}) => <a className="text-orange font-semibold hover:text-orange-dark underline underline-offset-2" {...props} />,
              strong: ({node, ...props}) => <strong className="font-extrabold text-navy" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 text-lg text-muted" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 text-lg text-muted" {...props} />,
              li: ({node, ...props}) => <li className="mb-2" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-orange bg-peach/30 py-4 px-6 not-italic font-semibold text-navy rounded-r-lg mb-6" {...props} />,
              table: ({node, ...props}) => <div className="overflow-x-auto mb-6"><table className="w-full border-collapse" {...props} /></div>,
              th: ({node, ...props}) => <th className="bg-cream p-3 text-left border border-line font-bold text-navy" {...props} />,
              td: ({node, ...props}) => <td className="p-3 border border-line text-muted" {...props} />,
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {article.faqs.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-navy mb-6">Veelgestelde Vragen</h2>
            <div className="grid gap-4">
              {article.faqs.map((faq) => (
                <details className="group rounded-2xl border border-line bg-white p-5 shadow-sm" key={faq.question}>
                  <summary className="cursor-pointer list-none text-base font-extrabold text-navy flex justify-between items-center">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-[1.5rem] bg-white border border-line p-7 md:p-9 shadow-sm mb-16 text-center">
          <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-navy mb-3">
            {article.cta.title}
          </h2>
          <p className="text-base leading-7 text-muted mb-6 max-w-xl mx-auto">
            {article.cta.text}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href={article.cta.primaryHref}
              className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-dark w-full sm:w-auto"
            >
              {article.cta.primaryText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
