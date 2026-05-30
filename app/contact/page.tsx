import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageSquareText, Phone, Search, Sparkles, Target } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { metadataForPath } from "@/content/seo";
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/schemas/seo";

export const metadata: Metadata = metadataForPath("/contact");

const reasons = [
  { title: "Nieuwe website", text: "Je huidige site past niet meer bij je aanbod of ambitie.", icon: Sparkles },
  { title: "Meer vindbaarheid", text: "Je wilt sterker verschijnen in Google, AI-antwoorden en lokale zoekresultaten.", icon: Search },
  { title: "Meer richting", text: "Je wilt weten welke online stap nu het meeste effect heeft.", icon: Target }
];

export default function ContactPage() {
  const schema = graphSchema([
    webPageSchema({
      path: "/contact",
      name: "Contact met MagisData",
      description: metadata.description ?? ""
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" }
    ])
  ]);

  return (
    <main className="bg-cream/40">
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Contact
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-normal text-navy md:text-6xl">
              Vertel ons waar je website naartoe moet
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Het gratis websiteplan is bedoeld om snel te bepalen wat je nodig hebt: een eerste website, een herbouw of gerichte verbetering van je huidige site.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                "Gratis websiteplan, zonder verplichting.",
                "Reactie binnen een werkdag.",
                "Heldere vervolgstap als we kunnen helpen."
              ].map((item) => (
                <div className="flex gap-3 text-sm font-semibold leading-6 text-ink" key={item}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-black/[0.05] bg-white shadow-card">
              <div className="photo-scene relative min-h-[260px] p-6">
                <div className="max-w-xs rounded-2xl bg-white/86 p-5 shadow-sm backdrop-blur">
                  <p className="text-sm font-extrabold text-navy">Liever direct contact?</p>
                  <Link className="focus-ring mt-3 inline-flex items-center gap-3 rounded-xl bg-peach px-4 py-3 text-sm font-bold text-orange hover:text-orange-dark" href="mailto:contact%40magisdata.nl">
                    <Mail className="h-4 w-4" />
                    contact [at] magisdata.nl
                  </Link>
                  <Link className="focus-ring mt-3 inline-flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 text-sm font-bold text-navy hover:text-orange" href="tel:+31642280029">
                    <Phone className="h-4 w-4" />
                    +31 6 42280029
                  </Link>
                  <p className="mt-3 flex items-start gap-3 rounded-xl bg-white/90 px-4 py-3 text-sm font-semibold leading-6 text-ink">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Suze Groenewegerf 25, Voorschoten
                  </p>
                </div>
                <picture>
                  <source srcSet="/assets/founder-336.avif 336w, /assets/founder-672.avif 672w" type="image/avif" />
                  <source srcSet="/assets/founder-336.webp 336w, /assets/founder-672.webp 672w" type="image/webp" />
                  <img
                    alt="Oprichter en CEO van MagisData"
                    className="absolute bottom-0 right-4 h-auto w-[min(46%,13rem)]"
                    height={400}
                    loading="lazy"
                    src="/assets/founder-336.webp"
                    width={336}
                  />
                </picture>
              </div>
            </div>
          </div>

          <section className="rounded-[2rem] border border-black/[0.05] bg-white p-6 shadow-card md:p-8" aria-labelledby="contact-form-title">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-soft text-orange">
                <MessageSquareText className="h-7 w-7" />
              </span>
              <div>
                <h2 id="contact-form-title" className="text-2xl font-extrabold tracking-normal text-navy">
                  Vraag gratis websiteplan aan
                </h2>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Kort is goed. We vullen de rest samen aan.
                </p>
              </div>
            </div>
            <ContactForm />
          </section>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Past dit?
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Goede aanvragen beginnen vaak met een herkenbaar probleem.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map(({ icon: Icon, ...reason }) => (
              <article className="rounded-[2rem] border border-black/[0.05] bg-cream/50 p-6 shadow-sm" key={reason.title}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-soft text-blue">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-navy">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue">
              Handige voorbereiding
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Een goede aanvraag hoeft niet lang te zijn.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Je hoeft geen briefing, sitemap of technisch plan klaar te hebben. Met een paar concrete signalen kunnen we vaak al zien waar de grootste kans ligt.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Je huidige situatie", "Deel je website, belangrijkste dienst en wat nu niet goed genoeg werkt."],
              ["Je groeidoel", "Vertel of je vooral meer vertrouwen, meer bezoekers, betere leads of minder handwerk wilt."],
              ["Je twijfels", "Noem gerust wat je lastig vindt: kosten, planning, techniek, content of de juiste volgorde."]
            ].map(([title, text]) => (
              <article className="rounded-2xl border border-black/[0.05] bg-white p-5 shadow-sm" key={title}>
                <h3 className="font-extrabold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-orange-soft bg-gradient-to-br from-peach via-yellow-soft to-green-soft/60 p-7 shadow-sm md:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange">
              Na je bericht
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
              Dit kun je verwachten.
            </h2>
            <div className="mt-8 grid gap-5">
              {[
                ["1", "We lezen je vraag en bekijken de context."],
                ["2", "Je krijgt een praktische reactie met mogelijke richting."],
                ["3", "Als het zinvol is plannen we een korte vervolgstap."]
              ].map(([number, text]) => (
                <div className="flex gap-4" key={number}>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange text-sm font-black text-white">
                    {number}
                  </span>
                  <p className="pt-1 text-sm font-semibold leading-6 text-ink/80">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { href: "/diensten", title: "Nog orienteren?", text: "Bekijk eerst de diensten en kies een logische ingang." },
              { href: "/cases", title: "Eerst portfolio bekijken?", text: "Bekijk webdesignprojecten met uitleg over structuur, SEO en ontwerpkeuzes." },
              { href: "/over-ons", title: "Eerst kennismaken?", text: "Lees hoe MagisData denkt over strategie, AI en groei." }
            ].map((link) => (
              <Link className="focus-ring group rounded-[2rem] border border-black/[0.05] bg-white p-6 shadow-sm transition hover:border-orange-soft hover:bg-peach" href={link.href} key={link.href}>
                <h3 className="text-xl font-extrabold text-navy group-hover:text-orange">{link.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{link.text}</p>
                <span className="mt-5 inline-flex items-center text-sm font-extrabold text-orange">
                  Bekijk pagina <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
