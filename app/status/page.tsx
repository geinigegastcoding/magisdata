import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleCheck, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { metadataForPath } from "@/content/seo";
import { currentStatus } from "@/content/status";
import { breadcrumbSchema, graphSchema, sitePhone, sitePhoneHref, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/status");

export default function StatusPage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/status",
      name: "Status en bereikbaarheid",
      description: metadata.description ?? ""
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Status", path: "/status" }
    ])
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Status", path: "/status" }]} />
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">Status</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-normal text-navy md:text-6xl">
            Actuele bereikbaarheid
          </h1>
          <div className="mt-10 rounded-[2rem] border border-line bg-white p-7 shadow-sm md:p-10">
            <div className="flex items-start gap-4">
              <CircleCheck className="mt-1 h-8 w-8 shrink-0 text-green" />
              <div>
                <h2 className="text-2xl font-extrabold text-navy">{currentStatus.label}</h2>
                <p className="mt-4 max-w-2xl leading-8 text-muted">{currentStatus.description}</p>
                <p className="mt-5 text-sm font-semibold text-soft">
                  Laatst bijgewerkt: {currentStatus.updatedAt}
                </p>
              </div>
            </div>
            <p className="mt-8 border-t border-line pt-6 text-sm leading-7 text-muted">{currentStatus.note}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white hover:bg-orange-dark" data-track-cta="status" href="/contact">
                Stuur een aanvraag
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link className="focus-ring inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-navy hover:border-orange-soft hover:text-orange" href={sitePhoneHref}>
                <Phone className="mr-2 h-4 w-4" />
                {sitePhone}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
