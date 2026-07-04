"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TrustProofRow } from "@/components/trust-proof-row";
import { trackEvent } from "@/lib/analytics-consent";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mgolbyvp", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setState("success");
      trackEvent("generate_lead", { form_name: "contact", page_path: "/contact" });
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div aria-live="polite" className="mt-8 rounded-2xl border border-orange-soft bg-peach p-6" role="status">
        <CheckCircle2 className="h-7 w-7 text-orange" />
        <h3 className="mt-4 text-xl font-extrabold text-navy">Bedankt voor je aanvraag</h3>
        <p className="mt-3 text-sm leading-7 text-muted">
          Je bericht is verstuurd. We reageren op werkdagen binnen een werkdag.
        </p>
      </div>
    );
  }

  return (
    <form aria-labelledby="contact-form-title" className="mt-8 grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-navy" htmlFor="contact-name">
          Naam
          <input autoComplete="name" className="focus-ring rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm font-medium text-ink" id="contact-name" name="naam" required type="text" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy" htmlFor="contact-email">
          E-mail
          <input autoComplete="email" className="focus-ring rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm font-medium text-ink" id="contact-email" name="email" required type="email" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-navy" htmlFor="contact-website">
        Website of bedrijfsnaam
        <input className="focus-ring rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm font-medium text-ink" id="contact-website" name="website" type="text" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-navy" htmlFor="contact-subject">
        Waar wil je vooral beweging in?
        <select className="focus-ring rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm font-medium text-ink" id="contact-subject" name="onderwerp">
          <option>Nieuwe website of herbouw</option>
          <option>Website onderhoud</option>
          <option>SEO, GEO of AEO vindbaarheid</option>
          <option>Online marketing en meetbasis</option>
          <option>AI en automatisering</option>
          <option>Strategische richting</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-navy" htmlFor="contact-question">
        Korte vraag
        <textarea className="focus-ring min-h-36 rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm font-medium text-ink" id="contact-question" name="vraag" required />
      </label>
      {state === "error" ? (
        <p aria-live="assertive" className="rounded-xl bg-peach px-4 py-3 text-sm font-semibold text-navy" role="alert">
          Versturen lukte niet. Probeer opnieuw of mail naar <span className="font-bold">contact<span>@</span>magisdata.nl</span>.
        </p>
      ) : null}
      <button className="focus-ring inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-orange-dark disabled:cursor-wait disabled:opacity-70" data-track-cta="contact-form" disabled={state === "submitting"} type="submit">
        {state === "submitting" ? "Bezig met versturen..." : "Vraag websiteplan aan"}
        {state !== "submitting" ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
      </button>
      <TrustProofRow compact />
    </form>
  );
}
