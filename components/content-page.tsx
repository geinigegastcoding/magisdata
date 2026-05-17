import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { RelatedLinks } from "@/components/related-links";
import { relatedLinksByPath } from "@/content/internal-links";
import type { PageContent } from "@/content/pages";
import { cn } from "@/lib/utils";
import { breadcrumbSchema, faqSchema, graphSchema, howToSchema, serviceSchema, webPageSchema } from "@/schemas/seo";

type ContentPageProps = {
  content: PageContent;
  icon?: LucideIcon;
  contactMode?: boolean;
  pathname?: string;
  schemaKind?: "service" | "page";
  primaryHref?: string;
  secondaryHref?: string;
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

export function ContentPage({
  content,
  icon: Icon,
  contactMode = false,
  pathname,
  schemaKind = "page",
  primaryHref,
  secondaryHref = "/diensten"
}: ContentPageProps) {
  const breadcrumbItems = pathname
    ? [
        { name: "Home", path: "/" },
        { name: content.eyebrow, path: pathname }
      ]
    : [];
  const schema = pathname
    ? graphSchema([
        webPageSchema({
          path: pathname,
          name: content.title,
          description: content.description
        }),
        breadcrumbSchema(breadcrumbItems),
        faqSchema(content.faqs, pathname),
        howToSchema(content, pathname),
        ...(schemaKind === "service" ? [serviceSchema(content, pathname)] : [])
      ])
    : null;

  return (
    <main className="bg-cream/40">
      {schema ? <JsonLd data={schema} /> : null}
      <Breadcrumbs items={breadcrumbItems} />
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              {content.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-[-0.035em] text-navy md:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {content.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href={primaryHref ?? (contactMode ? "mailto:hallo%40magisdata.nl" : "/contact")}>
                {content.primaryCta ?? "Plan een gratis gesprek"}
              </PrimaryLink>
              <SecondaryLink href={secondaryHref}>
                {content.secondaryCta ?? "Bekijk diensten"}
              </SecondaryLink>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-black/[0.06] bg-white p-7 shadow-card md:p-8">
            <div className="flex items-center gap-4">
              {Icon ? (
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-soft text-orange">
                  <Icon className="h-7 w-7" strokeWidth={2.1} />
                </span>
              ) : null}
              <div>
                <p className="text-sm font-extrabold text-navy">Kort samengevat</p>
                <p className="mt-1 text-sm leading-6 text-muted">Wat je hiervan mag verwachten.</p>
              </div>
            </div>
            <ul className="mt-7 grid gap-4">
              {content.heroPoints.map((point) => (
                <li className="flex gap-3 text-sm font-semibold leading-6 text-ink" key={point}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={2.2} />
                  {point}
                </li>
              ))}
            </ul>
            {contactMode ? (
              <div className="mt-7 grid gap-4">
                <div className="grid gap-3 rounded-2xl bg-peach p-4 text-sm font-semibold text-ink">
                  <Link className="focus-ring flex items-center gap-3 hover:text-orange" href="mailto:hallo%40magisdata.nl">
                    <Mail className="h-4 w-4 text-orange" />
                    hallo [at] magisdata.nl
                  </Link>
                </div>
                <form action="/bedankt" className="grid gap-3 rounded-2xl border border-line bg-white p-4" method="get">
                  <label className="grid gap-1 text-sm font-bold text-navy">
                    Naam
                    <input className="focus-ring rounded-xl border border-line px-3 py-2 text-sm font-medium text-ink" name="naam" required type="text" />
                  </label>
                  <label className="grid gap-1 text-sm font-bold text-navy">
                    E-mail
                    <input className="focus-ring rounded-xl border border-line px-3 py-2 text-sm font-medium text-ink" name="email" required type="email" />
                  </label>
                  <label className="grid gap-1 text-sm font-bold text-navy">
                    Vraag
                    <textarea className="focus-ring min-h-24 rounded-xl border border-line px-3 py-2 text-sm font-medium text-ink" name="vraag" required />
                  </label>
                  <button className="focus-ring rounded-xl bg-orange px-4 py-3 text-sm font-extrabold text-white transition hover:bg-orange-dark" type="submit">
                    Verstuur aanvraag
                  </button>
                </form>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container grid gap-6">
          {content.sections.map((section, index) => (
            <article
              className={cn(
                "rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-sm md:p-9",
                index % 2 === 1 ? "bg-peach/70" : "bg-white"
              )}
              key={section.title}
            >
              <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr]">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-navy">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-7 text-muted">{section.text}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {section.items.map((item) => (
                    <div className="rounded-2xl border border-black/[0.05] bg-white p-5 shadow-sm" key={item.title}>
                      <h3 className="text-base font-extrabold text-navy">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="rounded-[2rem] bg-navy p-7 text-white shadow-sm md:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:items-start">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-soft">
                  Aanpak
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-white">
                  Zo houden we het simpel
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                {content.steps.map((step, index) => (
                  <div className="rounded-2xl bg-white/8 p-5 ring-1 ring-white/10" key={step.title}>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-orange text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 font-extrabold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/72">{step.text}</p>
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
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Veelgestelde vragen
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy">
              Eerst helderheid, dan keuzes
            </h2>
          </div>
          <div className="grid gap-4">
            {content.faqs.map((faq) => (
              <details className="group rounded-2xl border border-black/[0.05] bg-white p-5 shadow-sm" key={faq.question}>
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
          <div className="flex flex-col items-start justify-between gap-5 rounded-[2rem] bg-peach p-7 shadow-sm md:flex-row md:items-center md:p-9">
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-navy">
                Wil je weten wat voor jouw bedrijf logisch is?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted">
                We kijken mee en geven je een praktische eerste richting. Geen vaktaal, geen verplichting.
              </p>
            </div>
            <PrimaryLink href="/contact">Plan een gratis gesprek</PrimaryLink>
          </div>
        </div>
      </section>
    </main>
  );
}
