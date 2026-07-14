import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { RelatedLinks } from "@/components/related-links";
import { TrustProofRow } from "@/components/trust-proof-row";
import { relatedLinksByPath } from "@/content/internal-links";
import type { PageContent } from "@/content/pages";
import { cn } from "@/lib/utils";
import { breadcrumbSchema, faqSchema, graphSchema, serviceSchema, webPageSchema } from "@/schemas/seo";

type ContentPageProps = {
  content: PageContent;
  icon?: LucideIcon;
  pathname?: string;
  schemaKind?: "service" | "page";
  primaryHref?: string;
  secondaryHref?: string;
};

type PageVariant = NonNullable<NonNullable<PageContent["presentation"]>["variant"]>;

type VariantStyle = {
  page: string;
  hero: string;
  eyebrow: string;
  panel: string;
  panelTitle: string;
  point: string;
  section: string;
  sectionAlt: string;
  item: string;
  process: string;
  processStep: string;
  number: string;
};

const variantStyles: Record<PageVariant, VariantStyle> = {
  default: {
    page: "bg-cream/40",
    hero: "py-16 md:py-24",
    eyebrow: "text-blue",
    panel: "border-line bg-white shadow-card",
    panelTitle: "text-navy",
    point: "text-ink",
    section: "border-line bg-white shadow-sm",
    sectionAlt: "border-orange-soft bg-peach/70 shadow-sm",
    item: "border-line bg-white shadow-sm",
    process: "border-orange-soft bg-gradient-to-br from-peach via-yellow-soft to-green-soft/60",
    processStep: "bg-white/70 shadow-sm ring-1 ring-orange-soft/70",
    number: "bg-orange text-white"
  },
  search: {
    page: "bg-[#f7f5ef]",
    hero: "py-16 md:py-24",
    eyebrow: "text-orange",
    panel: "border-orange-soft bg-peach shadow-float",
    panelTitle: "text-navy",
    point: "text-ink",
    section: "border-orange-soft bg-white shadow-sm",
    sectionAlt: "border-orange-soft bg-[#f1eee6] shadow-sm",
    item: "border-l-4 border-l-orange bg-[#fbfaf6]",
    process: "border-orange-soft bg-peach",
    processStep: "bg-white/80 ring-1 ring-orange-soft",
    number: "bg-orange text-white"
  },
  local: {
    page: "bg-[#fbfaf4]",
    hero: "py-14 md:py-24",
    eyebrow: "text-green",
    panel: "border-green/20 bg-white shadow-card",
    panelTitle: "text-navy",
    point: "text-ink",
    section: "border-green/20 bg-white shadow-sm",
    sectionAlt: "border-green/20 bg-green-soft/50 shadow-sm",
    item: "border-green/20 bg-white",
    process: "border-green/20 bg-green-soft/70",
    processStep: "bg-white/80 ring-1 ring-green/20",
    number: "bg-green text-white"
  },
  ai: {
    page: "bg-[#f5f7fa]",
    hero: "py-16 md:py-24",
    eyebrow: "text-blue",
    panel: "border-blue/20 bg-mist shadow-float",
    panelTitle: "text-navy",
    point: "text-ink",
    section: "border-blue/20 bg-white shadow-sm",
    sectionAlt: "border-blue/20 bg-mist shadow-sm",
    item: "border-blue/10 bg-white",
    process: "border-blue/20 bg-mist",
    processStep: "bg-white/80 ring-1 ring-blue/20",
    number: "bg-blue text-white"
  },
  entity: {
    page: "bg-[#f8f7f2]",
    hero: "py-16 md:py-24",
    eyebrow: "text-yellow",
    panel: "border-yellow/20 bg-yellow-soft shadow-float",
    panelTitle: "text-navy",
    point: "text-ink",
    section: "border-yellow/20 bg-white shadow-sm",
    sectionAlt: "border-yellow/20 bg-yellow-soft/65 shadow-sm",
    item: "border-yellow/20 bg-white",
    process: "border-yellow/25 bg-yellow-soft",
    processStep: "bg-white/80 ring-1 ring-yellow/20",
    number: "bg-yellow text-white"
  },
  conversion: {
    page: "bg-[#fffaf5]",
    hero: "py-16 md:py-24",
    eyebrow: "text-pink",
    panel: "border-pink/20 bg-white shadow-card",
    panelTitle: "text-navy",
    point: "text-ink",
    section: "border-pink/20 bg-white shadow-sm",
    sectionAlt: "border-pink/20 bg-pink-soft/50 shadow-sm",
    item: "border-pink/20 bg-white",
    process: "border-pink/20 bg-pink-soft/60",
    processStep: "bg-white/80 ring-1 ring-pink/20",
    number: "bg-pink text-white"
  },
  growth: {
    page: "bg-[#f5f3ed]",
    hero: "py-16 md:py-24",
    eyebrow: "text-navy",
    panel: "border-navy/10 bg-white shadow-float",
    panelTitle: "text-navy",
    point: "text-ink",
    section: "border-navy/10 bg-white shadow-sm",
    sectionAlt: "border-navy/10 bg-[#e9e8e2] shadow-sm",
    item: "border-navy/10 bg-[#fbfaf6]",
    process: "border-orange-soft bg-[#f8efe2]",
    processStep: "bg-white/80 ring-1 ring-orange-soft",
    number: "bg-orange text-white"
  }
};

function PrimaryLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link
      className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-dark"
      href={href}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
}

function SecondaryLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link
      className="focus-ring inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition hover:border-orange-soft hover:bg-peach hover:text-orange"
      href={href}
    >
      {children}
    </Link>
  );
}

function HeroPanel({
  content,
  icon: Icon,
  style,
  variant
}: {
  content: PageContent;
  icon?: LucideIcon;
  style: VariantStyle;
  variant: PageVariant;
}) {
  const title = content.presentation?.heroTitle ?? "Kort samengevat";
  const caption = content.presentation?.heroCaption ?? "Wat je hiervan mag verwachten.";

  if (variant === "search") {
    return (
      <aside className={cn("rounded-[1.5rem] border p-6 md:p-8", style.panel)}>
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">Intentiekaart</p>
        <h2 className={cn("mt-3 text-2xl font-extrabold", style.panelTitle)}>{title}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{caption}</p>
        <div className="mt-7 grid gap-3">
          {content.heroPoints.map((point, index) => (
            <div className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-orange-soft pt-4" key={point}>
              <span className="font-mono text-xs font-black tabular-nums text-orange">0{index + 1}</span>
              <p className={cn("text-sm font-semibold leading-6", style.point)}>{point}</p>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  if (variant === "local") {
    return (
      <aside className={cn("rounded-[1.5rem] border p-6 md:p-8", style.panel)}>
        <div className="flex items-center justify-between gap-5">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-green">Werkgebied</p>
            <h2 className={cn("mt-3 text-2xl font-extrabold", style.panelTitle)}>{title}</h2>
          </div>
          {Icon ? (
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-green-soft text-green">
              <Icon className="h-6 w-6" strokeWidth={2.1} />
            </span>
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-6 text-muted">{caption}</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {content.heroPoints.map((point) => (
            <p className="min-h-24 rounded-2xl border border-green/20 bg-green-soft/50 p-4 text-sm font-bold leading-6 text-ink" key={point}>
              {point}
            </p>
          ))}
        </div>
      </aside>
    );
  }

  if (variant === "ai" || variant === "entity") {
    return (
      <aside className={cn("rounded-[1.5rem] border p-6 md:p-8", style.panel)}>
        <div className="flex items-center gap-4">
          {Icon ? (
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-orange ring-1 ring-line">
              <Icon className="h-7 w-7" strokeWidth={2.1} />
            </span>
          ) : null}
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">{variant === "entity" ? "Entiteiten" : "Context"}</p>
            <h2 className={cn("mt-2 text-2xl font-extrabold", style.panelTitle)}>{title}</h2>
          </div>
        </div>
        <p className="mt-5 text-sm leading-6 text-muted">{caption}</p>
        <div className="mt-7 grid gap-3">
          {content.heroPoints.map((point) => (
            <div className="rounded-2xl border border-line bg-white/80 p-4" key={point}>
              <p className={cn("text-sm font-semibold leading-6", style.point)}>{point}</p>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  if (variant === "conversion") {
    return (
      <aside className={cn("rounded-[1.5rem] border p-6 md:p-8", style.panel)}>
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-pink">Beslispad</p>
        <h2 className={cn("mt-3 text-2xl font-extrabold", style.panelTitle)}>{title}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{caption}</p>
        <div className="mt-7 grid gap-4">
          {content.heroPoints.map((point, index) => (
            <div key={point}>
              <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.12em] text-soft">
                <span>{point}</span>
                <span>{["boven", "midden", "contact"][index] ?? "check"}</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-pink-soft">
                <div className={cn("h-2 rounded-full bg-pink", index === 0 ? "w-[82%]" : index === 1 ? "w-[68%]" : "w-[54%]")} />
              </div>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  if (variant === "growth") {
    return (
      <aside className={cn("rounded-[1.5rem] border p-6 md:p-8", style.panel)}>
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">Systeemlagen</p>
        <h2 className={cn("mt-3 text-2xl font-extrabold", style.panelTitle)}>{title}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{caption}</p>
        <div className="mt-7 grid gap-3">
          {content.heroPoints.map((point, index) => (
            <div
              className={cn(
                "rounded-2xl border border-line bg-[#fbfaf6] p-4 text-sm font-bold leading-6 text-ink",
                index === 1 ? "ml-4" : "",
                index === 2 ? "ml-8" : ""
              )}
              key={point}
            >
              {point}
            </div>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className={cn("rounded-[2rem] border p-7 md:p-8", style.panel)}>
      <div className="flex items-center gap-4">
        {Icon ? (
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-soft text-orange">
            <Icon className="h-7 w-7" strokeWidth={2.1} />
          </span>
        ) : null}
        <div>
          <p className={cn("text-sm font-extrabold", style.panelTitle)}>{title}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{caption}</p>
        </div>
      </div>
      <ul className="mt-7 grid gap-4">
        {content.heroPoints.map((point) => (
          <li className={cn("flex gap-3 text-sm font-semibold leading-6", style.point)} key={point}>
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={2.2} />
            {point}
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ItemGrid({
  items,
  style,
  variant
}: {
  items: { title: string; text: string }[];
  style: VariantStyle;
  variant: PageVariant;
}) {
  const gridClass =
    variant === "growth"
      ? "grid gap-4 md:grid-cols-3"
      : variant === "conversion"
        ? "grid gap-4 md:grid-cols-1"
        : variant === "search"
          ? "grid gap-4 md:grid-cols-1"
          : "grid gap-4 md:grid-cols-3";

  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <div
          className={cn(
            "rounded-2xl border p-5",
            style.item,
            variant === "search" ? "rounded-none border-y-0 border-r-0 shadow-none" : "",
            variant === "growth" && index === 1 ? "md:mt-8" : "",
            variant === "growth" && index === 2 ? "md:mt-16" : ""
          )}
          key={item.title}
        >
          <p className="mb-3 font-mono text-xs font-black tabular-nums text-orange">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="text-base font-extrabold text-navy">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function ContentPage({
  content,
  icon: Icon,
  pathname,
  schemaKind = "page",
  primaryHref,
  secondaryHref = "/diensten"
}: ContentPageProps) {
  const variant = content.presentation?.variant ?? "default";
  const style = variantStyles[variant];
  const breadcrumbItems = pathname
    ? [
        { name: "Home", path: "/" },
        { name: content.eyebrow, path: pathname }
      ]
    : [];
  const visibleFaqs = [...content.faqs, ...(content.objections ?? [])];
  const schemaNodes = pathname
    ? [
        webPageSchema({
          path: pathname,
          name: content.title,
          description: content.description
        }),
        breadcrumbSchema(breadcrumbItems),
        ...(schemaKind === "service" && visibleFaqs.length >= 2 ? [faqSchema(visibleFaqs, pathname)] : []),
        ...(schemaKind === "service" ? [serviceSchema(content, pathname)] : [])
      ]
    : null;
  const schema = schemaNodes
    ? graphSchema(schemaNodes)
    : null;

  return (
    <main className={style.page}>
      {schema ? <JsonLd data={schema} /> : null}
      <Breadcrumbs items={breadcrumbItems} />
      <section className={cn("relative overflow-hidden", style.hero)}>
        <div className="container grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className={cn("text-xs font-extrabold uppercase tracking-[0.16em]", style.eyebrow)}>
              {content.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-[2.5em] sm:text-[3.5em] md:text-[4em] font-extrabold leading-tight tracking-[-0.035em] text-navy">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {content.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href={primaryHref ?? "/contact"}>
                {content.primaryCta ?? "Vraag gratis websiteplan aan"}
              </PrimaryLink>
              <SecondaryLink href={secondaryHref}>
                {content.secondaryCta ?? "Bekijk diensten"}
              </SecondaryLink>
            </div>
            <TrustProofRow className="mt-5" compact />
          </div>

          <HeroPanel content={content} icon={Icon} style={style} variant={variant} />
        </div>
      </section>

      {content.directAnswer ? (
        <section className="pb-8 md:pb-12">
          <div className="container">
            <article className={cn("rounded-[1.5rem] border bg-white p-7 shadow-sm md:p-9", variant === "default" ? "border-orange-soft" : "border-line")}>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
                Direct antwoord
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-navy">
                {content.directAnswer.title}
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-8 text-muted">
                {content.directAnswer.text}
              </p>
              {content.proofDisclosure ? (
                <p className="mt-6 rounded-2xl bg-peach p-4 text-sm font-semibold leading-6 text-ink">
                  {content.proofDisclosure}
                </p>
              ) : null}
            </article>
          </div>
        </section>
      ) : null}

      {content.deliverables?.length ? (
        <section className="bg-white/70 py-8 md:py-12">
          <div className="container grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className={cn("text-xs font-extrabold uppercase tracking-[0.16em]", style.eyebrow)}>
                Oplevering
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy">
                Wat je concreet krijgt
              </h2>
            </div>
            <div className="grid gap-0 border-y border-line">
              {content.deliverables.map((item) => (
                <article className="grid gap-3 border-b border-line py-5 last:border-b-0 md:grid-cols-[0.32fr_0.68fr]" key={item.title}>
                  <h3 className="font-extrabold text-navy">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {content.comparison?.length ? (
        <section className="py-8 md:py-12">
          <div className="container grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className={cn("text-xs font-extrabold uppercase tracking-[0.16em]", style.eyebrow)}>
                Afbakening
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy">
                Wat is het verschil?
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {content.comparison.map((item) => (
                <article className={cn("rounded-2xl border p-5 shadow-sm", style.item)} key={item.title}>
                  <h3 className="font-extrabold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {content.audienceFit ? (
        <section className="py-8 md:py-12">
          <div className="container grid gap-4 md:grid-cols-2">
            {[
              { title: "Voor wie dit past", items: content.audienceFit.for },
              { title: "Wanneer dit niet past", items: content.audienceFit.notFor }
            ].map((group) => (
              <article className={cn("rounded-[1.5rem] border bg-white p-7", style.item)} key={group.title}>
                <h2 className="text-2xl font-extrabold text-navy">{group.title}</h2>
                <ul className="mt-5 grid gap-3">
                  {group.items.map((item) => (
                    <li className="flex gap-3 text-sm leading-6 text-muted" key={item}>
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="py-8 md:py-12">
        <div className="container grid gap-6">
          {content.sections.map((section, index) => (
            index % 2 === 0 ? (
              <article
                className={cn("rounded-[1.5rem] border p-7 md:p-9", style.section)}
                key={section.title}
              >
                <div className={cn("grid gap-8", variant === "conversion" || variant === "search" ? "lg:grid-cols-[0.48fr_0.52fr]" : "lg:grid-cols-[0.42fr_1fr]")}>
                  <div>
                    <p className={cn("text-xs font-extrabold uppercase tracking-[0.16em]", style.eyebrow)}>
                      {content.presentation?.sectionEyebrow ?? "Verdieping"}
                    </p>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy">
                      {section.title}
                    </h2>
                    <p className="mt-4 leading-7 text-muted">{section.text}</p>
                  </div>
                  <ItemGrid items={section.items} style={style} variant={variant} />
                </div>
              </article>
            ) : (
              <section className={cn("grid gap-8 px-1 py-10 md:py-14 lg:grid-cols-[0.38fr_0.62fr]", variant === "growth" ? "lg:grid-cols-[0.5fr_0.5fr]" : "")} key={section.title}>
                <div>
                  <p className={cn("text-xs font-extrabold uppercase tracking-[0.16em]", style.eyebrow)}>
                    {content.presentation?.sectionEyebrow ?? "Verdieping"}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy">
                    {section.title}
                  </h2>
                  <p className="mt-4 max-w-xl leading-7 text-muted">{section.text}</p>
                </div>
                <div className="grid gap-0 border-y border-line">
                  {section.items.map((item, itemIndex) => (
                    <article className="grid gap-3 border-b border-line py-5 last:border-b-0 md:grid-cols-[4rem_1fr]" key={item.title}>
                      <p className="font-mono text-xs font-black tabular-nums text-orange">
                        {String(itemIndex + 1).padStart(2, "0")}
                      </p>
                      <div>
                        <h3 className="font-extrabold text-navy">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )
          ))}
        </div>
      </section>

      {content.detailSections?.length ? (
        <section className="bg-white/70 py-10 md:py-16">
          <div className="container grid gap-10">
            {content.detailSections.map((section) => (
              <article className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]" key={section.title}>
                <div className="border-l-4 border-orange pl-5">
                  <p className={cn("text-xs font-extrabold uppercase tracking-[0.16em]", style.eyebrow)}>
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-7 text-muted">{section.text}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {section.items.map((item) => (
                    <article className="border-t border-line pt-5" key={item.title}>
                      <h3 className="font-extrabold text-navy">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                    </article>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="py-8 md:py-12">
        <div className="container">
          <div className={cn("rounded-[1.5rem] border p-7 shadow-sm md:p-9", style.process)}>
            <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:items-start">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
                  {content.presentation?.processEyebrow ?? "Aanpak"}
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy">
                  {content.presentation?.processTitle ?? "Zo houden we het simpel"}
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                {content.steps.map((step, index) => (
                  <div className={cn("rounded-2xl p-5", style.processStep)} key={step.title}>
                    <span className={cn("grid h-8 w-8 place-items-center rounded-full text-sm font-black", style.number)}>
                      {index + 1}
                    </span>
                    <h3 className="mt-4 font-extrabold text-navy">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-14">
        <div className="container grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className={cn("text-xs font-extrabold uppercase tracking-[0.16em]", style.eyebrow)}>
              Veelgestelde vragen
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy">
              {content.presentation?.faqTitle ?? "Eerst helderheid, dan keuzes"}
            </h2>
          </div>
          <div className="grid gap-4">
            {visibleFaqs.map((faq) => (
              <details className="group rounded-2xl border border-line bg-white p-5 shadow-sm" key={faq.question}>
                <summary className="cursor-pointer list-none text-base font-extrabold text-navy">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks links={pathname ? relatedLinksByPath[pathname] ?? [] : []} />

      <section className="bg-white py-10 md:py-14">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-5 rounded-[1.5rem] bg-peach p-7 shadow-sm md:flex-row md:items-center md:p-9">
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-navy">
                {content.presentation?.ctaTitle ?? "Wil je weten wat voor jouw bedrijf logisch is?"}
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted">
                {content.presentation?.ctaText ?? "We kijken mee en geven je een praktische eerste richting. Geen vaktaal, geen verplichting."}
              </p>
            </div>
            <div className="grid gap-4">
              <PrimaryLink href="/contact">Vraag gratis websiteplan aan</PrimaryLink>
              <TrustProofRow compact />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
