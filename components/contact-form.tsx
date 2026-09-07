"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
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
      <div aria-live="polite" className="v2-contact-success" role="status">
        <CheckCircle2 aria-hidden="true" size={28} />
        <h3>Je bericht is onderweg.</h3>
        <p>
          Je bericht is verstuurd. We reageren op werkdagen binnen een werkdag.
        </p>
      </div>
    );
  }

  return (
    <form aria-label="Contact opnemen met MagisData" className="v2-contact-form" onSubmit={handleSubmit}>
      <div className="v2-contact-row">
        <label htmlFor="contact-name">
          Naam
          <input autoComplete="name" id="contact-name" name="naam" required type="text" />
        </label>
        <label htmlFor="contact-email">
          E-mail
          <input autoComplete="email" id="contact-email" name="email" required type="email" />
        </label>
      </div>
      <label htmlFor="contact-website">
        Website of bedrijfsnaam
        <input id="contact-website" name="website" type="text" />
      </label>
      <label htmlFor="contact-subject">
        Waar kunnen we je mee helpen?
        <select id="contact-subject" name="onderwerp">
          <option>AI en automatisering</option>
          <option>AI-audit: ontdekken waar de kansen liggen</option>
          <option>Een AI-systeem laten bouwen</option>
          <option>Second brain, skills of training</option>
          <option>Nieuwe website of herbouw</option>
          <option>Website onderhoud</option>
          <option>SEO, GEO of AEO vindbaarheid</option>
          <option>Online marketing en meetbasis</option>
          <option>Strategische richting</option>
        </select>
      </label>
      <label htmlFor="contact-question">
        Welk werk komt steeds terug?
        <textarea id="contact-question" name="vraag" placeholder="Vertel kort over je bedrijf en waar je nu tijd aan kwijt bent." required rows={4} />
      </label>
      {state === "error" ? (
        <p aria-live="assertive" className="v2-contact-error" role="alert">
          Versturen lukte niet. Probeer opnieuw of mail naar <span className="font-bold">contact<span>@</span>magisdata.nl</span>.
        </p>
      ) : null}
      <button className="v2-contact-submit" data-track-cta="contact-form" disabled={state === "submitting"} type="submit">
        {state === "submitting" ? "Bezig met versturen…" : "Verstuur je vraag"}
        {state !== "submitting" ? <ArrowRight aria-hidden="true" size={18} /> : null}
      </button>
      <p className="v2-contact-privacy">We gebruiken je gegevens om op je vraag te reageren. <Link href="/privacybeleid">Lees het privacybeleid.</Link></p>
    </form>
  );
}
