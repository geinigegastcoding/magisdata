import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading, SectionShell } from "@/components/section";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { servicePages } from "@/content/site-content";
import { site } from "@/lib/site";
import { baseGraph } from "@/schemas/structured-data";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Bekijk de diensten van MagisData voor premium webontwikkeling, SEO, GEO, AEO, AI-infrastructuur en strategisch advies.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "MagisData diensten",
    description:
      "Strategische digitale infrastructuur voor autoriteit, zichtbaarheid, AI-vindbaarheid, automatisering en conversie.",
    url: `${site.url}/services`
  }
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={baseGraph("/services")} />
      <main>
        <section className="border-b border-bone/10 pb-20 pt-36 md:pt-44">
          <div className="container">
            <SectionHeading
              eyebrow="Diensten"
              title="Een volledig infrastructuursysteem voor moderne marktzichtbaarheid."
              description="MagisData combineert premium webontwikkeling, zoekarchitectuur, AI-readiness, automatisering en strategisch advies tot een schaalbaar digitaal ecosysteem."
            />
          </div>
        </section>
        <SectionShell>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((service) => {
              const Icon = service.icon;
              return (
                <Link href={`/${service.slug}`} key={service.slug}>
                  <Card className="group h-full">
                    <div className="-mx-6 -mt-6 mb-6 overflow-hidden rounded-t-md">
                      <Image
                        alt={service.image.alt}
                        className="aspect-[16/10] w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.03]"
                        height={875}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        src={service.image.src}
                        width={1400}
                      />
                    </div>
                    <Icon className="h-6 w-6 text-amber" />
                    <CardTitle className="mt-8">{service.title}</CardTitle>
                    <CardDescription className="mt-4">{service.description}</CardDescription>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber">
                      Bekijk dienst <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </SectionShell>
        <CtaSection />
      </main>
    </>
  );
}
