import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { AiCalculator } from "@/components/ai-calculator";
import { WorkflowExplorer } from "@/components/workflow-explorer";
import { collaborationSteps, homepageFaqs } from "@/content/main-site";

export { homepageFaqs } from "@/content/main-site";

export function AiHomepage() {
  return (
    <main className="md-site" id="main-content">
      <section className="md-hero" aria-labelledby="hero-title">
        <div className="md-hero-art" aria-hidden="true"><Image src="/assets/redesign/flow-hero.webp" alt="" fill priority sizes="100vw" /></div>
        <div className="md-wrap md-hero-inner">
          <h1 id="hero-title">Minder handwerk.<br /><em>Meer vooruit.</em></h1>
          <div className="md-hero-bottom">
            <div className="md-hero-copy">
              <p>AI die het werk in gaat.</p>
              <p>MagisData bouwt praktische AI-systemen en automatiseringen voor ondernemers en teams. Van een volle inbox tot terugkerende rapportages. Jij houdt de regie.</p>
              <Link className="md-button" href="/contact" data-track-cta="redesign-hero">Plan een AI-scan <ArrowUpRight size={20} aria-hidden="true" /></Link>
              <span className="md-cta-note">Een eerste gesprek. Een concrete richting.</span>
            </div>
            <a className="md-hero-explore" href="#systemen"><span>Van losse taken<br />naar één werkende flow.</span><ArrowDown size={22} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="md-platforms" aria-label="AI-platforms waarmee we werken">
        <div className="md-wrap md-platforms-inner"><p>De juiste technologie.<br /><strong>Voor jouw praktijk.</strong></p><div className="md-platform-logos">
          <span><img src="/assets/logos/anthropic.svg" alt="" width="28" height="28" />Claude</span>
          <span><img src="/assets/logos/openai.svg" alt="" width="28" height="28" />OpenAI</span>
          <span><img src="/assets/logos/gemini.svg" alt="" width="28" height="28" />Gemini</span>
          <span><img src="/assets/logos/googlecloud.svg" alt="" width="30" height="28" />Google Cloud</span>
        </div></div>
      </section>

      <section className="md-work-section" id="systemen"><div className="md-wrap"><div className="md-section-top"><h2>Je beste mensen hebben{" "}<br /><em>beter werk te doen.</em></h2><p>Elke week weer informatie overtypen, antwoorden schrijven en gegevens verzamelen. Het hoort bij je bedrijf. Maar het hoeft niet allemaal bij je team te liggen.</p></div><WorkflowExplorer /></div></section>

      <section className="md-process" id="werkwijze"><div className="md-wrap md-process-grid">
        <div className="md-process-intro"><h2>Van ‘kan dit{" "}<br />slimmer?’ naar{" "}<br /><em>zo werkt het.</em></h2><p>Een goed AI-systeem begint bij je bedrijf. We verbinden onderzoek, bouwen en leren in één begrijpelijke aanpak.</p><Link className="md-link" href="/diensten">Meer over onze diensten <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
        <ol className="md-process-list">{collaborationSteps.map((step, index) => <li key={step.label}><span className="md-step-number">0{index + 1}</span><div><div className="md-step-title"><h3>{step.title}</h3><span>{step.label}</span></div><p>{step.text}</p><p className="md-step-result"><ArrowRight size={16} aria-hidden="true" />{step.result}</p></div></li>)}</ol>
      </div></section>

      <section className="md-knowledge" id="second-brain"><div className="md-wrap md-knowledge-grid">
        <div className="md-knowledge-art"><Image src="/assets/redesign/connected-knowledge.webp" alt="Mappen met projecten, afspraken en kennis, verbonden door één doorlopend lint" width={1536} height={1024} sizes="(max-width: 800px) 100vw, 52vw" /><span>Van losse kennis naar gedeelde context.</span></div>
        <div className="md-knowledge-copy"><h2>Je kennis.<br /><em>Eindelijk verbonden.</em></h2><p>Je afspraken, projecten en manier van werken verdienen een vaste plek. We helpen je een eigen kennisbasis en AI-skills inrichten, zodat je niet steeds opnieuw hoeft uit te leggen hoe jouw bedrijf werkt.</p><ul><li>Je context op één bruikbare plek</li><li>Herbruikbare instructies voor terugkerende taken</li><li>Een werkwijze die je zelf begrijpt en kunt uitbreiden</li></ul><Link className="md-link" href="/contact">Bespreek je eigen AI-werkplek <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
      </div></section>

      <section className="md-calculator-section" id="rekenen"><div className="md-wrap"><AiCalculator /></div></section>

      <section className="md-principles"><div className="md-wrap md-principles-grid">
        <div className="md-founder"><Image src="/assets/founder-672.webp" alt="Daniël Magis, oprichter van MagisData" width={672} height={840} sizes="(max-width: 700px) 80px, 220px" /><div><strong>Daniël Magis</strong><span>Oprichter van MagisData</span><Link className="md-link" href="/over-ons">Maak kennis <ArrowUpRight size={16} aria-hidden="true" /></Link></div></div>
        <div className="md-principles-copy"><h2>Technisch doordacht.<br /><em>Menselijk geregeld.</em></h2><p>Je werkt direct met de persoon die meedenkt en bouwt. Met heldere afspraken over wat je systeem doet, wat het niet doet en hoe je ermee verder kunt.</p><div className="md-principle-points"><div><h3>Jij houdt controle.</h3><p>Goedkeuring op de momenten die ertoe doen.</p></div><div><h3>Je begrijpt wat je krijgt.</h3><p>Een duidelijke scope, uitleg en overdracht.</p></div></div></div>
      </div></section>

      <section className="md-faq" id="faq"><div className="md-wrap md-faq-grid">
        <div><h2>Goede vragen.<br /><em>Heldere antwoorden.</em></h2><p>Een eerste stap mag eenvoudig zijn.</p><Link className="md-link" href="/contact">Stel je vraag <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        <div className="md-faq-list">{homepageFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}<Plus size={20} aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>
      </div></section>

      <section className="md-final-cta"><div className="md-wrap md-final-inner"><div><h2>Wat als je werk<br /><em>lichter kan?</em></h2><p>Vertel ons wat er elke week terugkomt.<br />Dan kijken we samen waar de ruimte zit.</p></div><div className="md-final-action"><Link className="md-button md-button-light" href="/contact" data-track-cta="redesign-final">Laten we kennismaken <ArrowUpRight size={22} aria-hidden="true" /></Link><span>30 minuten. Zonder verplichting.</span></div></div></section>
    </main>
  );
}
