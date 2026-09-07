import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { RelatedLinks } from "@/components/related-links";
import { relatedLinksByPath } from "@/content/internal-links";
import type { PageContent } from "@/content/pages";
import { breadcrumbSchema, faqSchema, graphSchema, serviceSchema, webPageSchema } from "@/schemas/seo";

type ContentPageProps = {
  content: PageContent;
  icon?: LucideIcon;
  pathname?: string;
  schemaKind?: "service" | "page";
  primaryHref?: string;
  secondaryHref?: string;
};

function ContentRows({ items }: { items: { title: string; text: string }[] }) {
  return <div className="reading-rows">{items.map(item=><article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>;
}

export function ContentPage({ content, pathname, schemaKind = "page", primaryHref, secondaryHref = "/diensten" }: ContentPageProps) {
  const breadcrumbItems = pathname ? [{name:"Home",path:"/"},{name:content.eyebrow,path:pathname}] : [];
  const visibleFaqs = [...content.faqs, ...(content.objections ?? [])];
  const schema = pathname ? graphSchema([
    webPageSchema({path:pathname,name:content.title,description:content.description}),
    breadcrumbSchema(breadcrumbItems),
    ...(schemaKind === "service" && visibleFaqs.length >= 2 ? [faqSchema(visibleFaqs, pathname)] : []),
    ...(schemaKind === "service" ? [serviceSchema(content, pathname)] : [])
  ]) : null;

  return <main className="studio-page reading-page">
    {schema ? <JsonLd data={schema} /> : null}
    <Breadcrumbs items={breadcrumbItems} />
    <section className="container reading-hero"><div><h1>{content.title}</h1><p>{content.description}</p><div className="hero-actions"><Link className="button-primary" href={primaryHref ?? "/contact"}>{content.primaryCta ?? "Bespreek je vraag"}<ArrowUpRight aria-hidden="true" size={17} /></Link><Link className="text-link" href={secondaryHref}>{content.secondaryCta ?? "Bekijk diensten"}<ArrowUpRight aria-hidden="true" size={17} /></Link></div></div><aside><h2>{content.presentation?.heroTitle ?? "Wat je mag verwachten"}</h2>{content.presentation?.heroCaption ? <p>{content.presentation.heroCaption}</p> : null}<ul>{content.heroPoints.map(point=><li key={point}><Check aria-hidden="true" size={17} />{point}</li>)}</ul></aside></section>
    {content.directAnswer ? <section className="reading-answer"><div className="container"><h2>{content.directAnswer.title}</h2><p>{content.directAnswer.text}</p>{content.proofDisclosure ? <p className="reading-disclosure">{content.proofDisclosure}</p> : null}</div></section> : content.proofDisclosure ? <p className="container reading-disclosure">{content.proofDisclosure}</p> : null}
    {content.deliverables?.length ? <section className="container reading-section"><h2>Wat je concreet krijgt</h2><ContentRows items={content.deliverables} /></section> : null}
    {content.comparison?.length ? <section className="container reading-section"><h2>Wat is het verschil?</h2><ContentRows items={content.comparison} /></section> : null}
    {content.audienceFit ? <section className="container reading-audience">{[{title:"Voor wie dit past",items:content.audienceFit.for},{title:"Wanneer dit niet past",items:content.audienceFit.notFor}].map(group=><div key={group.title}><h2>{group.title}</h2><ul className="knowledge-checks">{group.items.map(item=><li key={item}><Check aria-hidden="true" size={17} />{item}</li>)}</ul></div>)}</section> : null}
    {[...content.sections, ...(content.detailSections ?? [])].map(section=><section className="container reading-section" key={section.title}><div><h2>{section.title}</h2><p>{section.text}</p></div><ContentRows items={section.items} /></section>)}
    {content.steps.length > 0 ? <section className="reading-process"><div className="container"><h2>{content.presentation?.processTitle ?? "Zo houden we het simpel"}</h2><ol>{content.steps.map((step,index)=><li key={step.title}><span>0{index+1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section> : null}
    {visibleFaqs.length > 0 ? <section className="container reading-section"><h2>{content.presentation?.faqTitle ?? "Eerst helderheid, dan keuzes"}</h2><div className="studio-accordions">{visibleFaqs.map(faq=><details key={faq.question}><summary>{faq.question}<Plus aria-hidden="true" size={18} /></summary><p>{faq.answer}</p></details>)}</div></section> : null}
    <RelatedLinks links={pathname ? relatedLinksByPath[pathname] ?? [] : []} />
    <section className="studio-cta"><div className="container"><h2>{content.presentation?.ctaTitle ?? "Een heldere volgende stap."}</h2><div><p>{content.presentation?.ctaText ?? "We kijken mee en geven je een praktische eerste richting. Geen vaktaal, geen verplichting."}</p><Link className="button-primary" href="/contact">Bespreek je vraag <ArrowUpRight aria-hidden="true" size={18} /></Link></div></div></section>
  </main>;
}
