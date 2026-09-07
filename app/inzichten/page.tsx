import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/content/articles";
import { metadataForPath } from "@/content/seo";
import { StudioCta } from "@/components/studio-cta";

export const metadata = metadataForPath("/inzichten");

export default function InzichtenPage() {
  return <main className="studio-page"><section className="inner-hero container"><h1>Een helder inzicht.<br /><em>Een betere volgende stap.</em></h1><p>Praktische artikelen over websites, vindbaarheid en online groei. Kennis die je helpt begrijpen wat werkt en waarom.</p></section><section className="container insights-list" aria-label="Artikelen">{articles.map(article=><Link href={`/inzichten/${article.slug}`} key={article.slug} className="insight-row"><div><span>{article.category}</span><time dateTime={article.datePublished}>{new Date(article.datePublished).toLocaleDateString("nl-NL",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}</time></div><div><h2>{article.title}</h2><p>{article.tldr}</p></div><ArrowUpRight aria-hidden="true" size={23} /></Link>)}</section><StudioCta /></main>;
}
