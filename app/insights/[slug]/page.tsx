import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { insights } from "@/content/site-content";
import { site } from "@/lib/site";
import { articleGraph } from "@/schemas/structured-data";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${site.url}/insights/${post.slug}`,
      publishedTime: post.date
    }
  };
}

export default async function InsightPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleGraph(post.slug)} />
      <main>
        <article className="container max-w-4xl pb-20 pt-36 md:pt-44">
          <Badge>{post.category}</Badge>
          <h1 className="mt-6 text-balance font-satoshi text-5xl font-semibold leading-tight text-bone md:text-7xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-bone/66">{post.description}</p>
          <div className="mt-6 flex gap-3 text-sm text-bone/45">
            <time dateTime={post.date}>{post.date}</time>
            <span>{post.readingTime}</span>
          </div>
          <div className="mt-10 overflow-hidden rounded-md border border-bone/10 bg-steel shadow-premium">
            <Image
              alt={post.image.alt}
              className="aspect-[16/9] w-full object-cover"
              height={788}
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              src={post.image.src}
              width={1400}
            />
          </div>
          <div className="mt-12 grid gap-7 border-t border-bone/10 pt-10 text-lg leading-9 text-bone/72">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
        <CtaSection />
      </main>
    </>
  );
}
