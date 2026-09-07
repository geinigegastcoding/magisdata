import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { AiCalculator } from "@/components/ai-calculator";
import { WorkflowExplorer } from "@/components/workflow-explorer";
import { homepageFaqs, services } from "@/content/main-site";

export { homepageFaqs } from "@/content/main-site";

export function AiHomepage() {
  return (
    <main className="v2-home" id="main-content">
      <section className="v2-hero" aria-labelledby="hero-title">
        <div className="v2-wrap">
          <div className="v2-hero-topline"><p className="v2-label"><span className="v2-square" /> Praktische AI voor ondernemers & teams</p><span className="v2-label v2-hero-note">Minder handwerk. Meer ruimte.</span></div>
          <div className="v2-hero-heading">
            <h1 id="hero-title">AI aan het werk.<br /><span>Jij aan het roer.</span></h1>
            <div className="v2-hero-copy">
              <p>Van een volle inbox tot terugkerende rapportages. MagisData bouwt AI en automatisering die werk uit handen nemen. In jouw tools, met jou in controle.</p>
              <Link className="v2-button" data-track-cta="hero-ai-scan" href="/contact/">Ontdek jouw AI-kansen <ArrowUpRight aria-hidden="true" size={19} /></Link>
              <a className="v2-quiet-link" href="#systemen">Zo werkt het in de praktijk <ArrowDown aria-hidden="true" size={15} /></a>
            </div>
          </div>
        </div>
        <figure className="v2-hero-art">
          <Image src="/assets/redesign/flow-sculpture.webp" alt="Verstrengelde oranje kabels lopen door drie aluminium geleiders en komen er als geordende lijnen uit: van losse taken naar een werkend systeem." width={1870} height={841} priority sizes="100vw" />
          <figcaption className="v2-wrap v2-art-caption"><span><b>01</b> Losse taken</span><span><b>02</b> Een slim systeem</span><span><b>03</b> Ruimte om te ondernemen <ArrowUpRight aria-hidden="true" size={15} /></span></figcaption>
        </figure>
        <div className="v2-tools v2-wrap"><p>De juiste techniek.<br /><strong>Voor jouw manier van werken.</strong></p><div aria-label="Voorbeelden van technologie waarmee we werken"><span><img src="/assets/logos/anthropic.svg" alt="" width="25" height="25" />Claude</span><span><img src="/assets/logos/openai.svg" alt="" width="25" height="25" />OpenAI</span><span><img src="/assets/logos/gemini.svg" alt="" width="25" height="25" />Gemini</span><span><img src="/assets/logos/googlecloud.svg" alt="" width="30" height="25" />Google Cloud</span></div></div>
      </section>
      <section className="v2-section v2-work" id="systemen" aria-labelledby="systems-title"><div className="v2-wrap">
        <div className="v2-section-heading"><p className="v2-label">01 / Van taak naar systeem</p><h2 id="systems-title">Minder bezig met werk.<br /><span>Meer werk gedaan.</span></h2><p>Het begint bij iets dat elke week terugkomt. Bekijk hoe AI zo’n taak kan voorbereiden, terwijl jij de belangrijke beslissingen houdt.</p></div>
        <WorkflowExplorer />
        <div className="v2-section-end"><span>Voorbeelden van workflows. De inrichting stemmen we af op jouw bedrijf.</span><Link className="v2-link" href="/diensten/">Alle mogelijkheden <ArrowUpRight aria-hidden="true" size={17} /></Link></div>
      </div></section>
      <section className="v2-section v2-approach" id="werkwijze" aria-labelledby="approach-title"><div className="v2-wrap">
        <div className="v2-approach-intro"><div><p className="v2-label">02 / Van eerste vraag naar dagelijks gebruik</p><h2 id="approach-title">Klein beginnen.<br /><span>Goed neerzetten.</span></h2></div><p>Een systeem moet passen bij de praktijk. Daarom beginnen we met je proces, bouwen we een gerichte oplossing en zorgen we dat je team ermee verder kan.</p></div>
        <div className="v2-services">{services.map((service) => <article className="v2-service" key={service.number}><span className="v2-service-number">{service.number}</span><div><p className="v2-label">{service.label}</p><h3>{service.title}</h3></div><p>{service.description}</p><div className="v2-service-deliverable"><span className="v2-label">Wat je overhoudt</span><strong>{service.deliverable}</strong><ArrowUpRight aria-hidden="true" size={24} /></div></article>)}</div>
        <div className="v2-approach-bottom"><p>Audit, bouwen of samen leren. We kiezen de stap die past bij waar je staat.</p><Link className="v2-link" href="/contact/">Bespreek jouw eerste stap <ArrowUpRight aria-hidden="true" size={19} /></Link></div>
      </div></section>
      <section className="v2-section v2-calculator-section" id="rekenen" aria-label="Bereken de waarde van terugkerend werk"><div className="v2-wrap"><AiCalculator /></div></section>
      <section className="v2-section v2-founder" id="over-magisdata" aria-labelledby="founder-title"><div className="v2-wrap v2-founder-grid">
        <div className="v2-founder-photo"><Image src="/assets/founder-672.webp" alt="Daniel Magis, oprichter van MagisData" width={672} height={840} sizes="(max-width: 700px) 80vw, 32vw" /><span className="v2-photo-mark" aria-hidden="true">m.</span><div><strong>Daniel Magis</strong><span>Oprichter & bouwer / MagisData</span></div></div>
        <div className="v2-founder-copy"><p className="v2-label">04 / De mens achter het systeem</p><h2 id="founder-title">Je spreekt met<br /><span>de bouwer.</span></h2><p>Geen vertaalslag via een accountmanager. Je werkt direct met Daniel: van de eerste vraag over je proces tot de uitleg aan je team.</p><p>Mijn uitgangspunt is eenvoudig: bouw iets dat je begrijpt, gebruikt en kunt verbeteren. AI mag complex zijn. Samenwerken hoeft dat niet te zijn.</p><div className="v2-principles"><div><span>01</span><strong>Je weet wat het systeem doet.</strong><p>Duidelijke stappen, bronnen en controlepunten.</p></div><div><span>02</span><strong>Jouw werk bepaalt de techniek.</strong><p>Aansluiten op je bestaande tools en afspraken.</p></div><div><span>03</span><strong>Je kunt ermee verder.</strong><p>Instructies en uitleg voor dagelijks gebruik.</p></div></div><Link className="v2-link" href="/over-ons/">Meer over MagisData <ArrowUpRight aria-hidden="true" size={18} /></Link></div>
      </div></section>
      <section className="v2-section v2-faq" id="faq" aria-labelledby="faq-title"><div className="v2-wrap v2-faq-grid"><div><p className="v2-label">05 / Goed om te weten</p><h2 id="faq-title">Heldere antwoorden.<br /><span>Wel zo prettig.</span></h2><p>Je hoeft nog geen uitgewerkt plan te hebben. Een terugkerende taak is een prima begin.</p><Link className="v2-link" href="/contact/">Stel je vraag <ArrowUpRight aria-hidden="true" size={17} /></Link></div><div className="v2-faq-list">{homepageFaqs.map((faq, index) => <details key={faq.question}><summary><span className="v2-faq-number">0{index + 1}</span><span>{faq.question}</span><Plus aria-hidden="true" size={20} /></summary><p>{faq.answer}</p></details>)}</div></div></section>
      <section className="v2-final" aria-labelledby="final-title"><div className="v2-wrap"><p className="v2-label">Jouw volgende stap</p><div className="v2-final-grid"><h2 id="final-title">Wat zou jij doen<br />met die tijd<span>?</span></h2><div><p>Vertel welk werk steeds terugkomt. In een eerste gesprek kijken we waar AI voor jouw bedrijf iets kan betekenen.</p><Link className="v2-button v2-button-ink" data-track-cta="final-ai-scan" href="/contact/">Laten we kennismaken <ArrowUpRight aria-hidden="true" size={20} /></Link><span className="v2-final-note">30 minuten. Een concrete eerste richting.</span></div></div><a href="#main-content" className="v2-to-top" aria-label="Terug naar boven"><ArrowRight aria-hidden="true" size={22} /></a></div></section>
    </main>
  );
}
