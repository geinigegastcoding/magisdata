import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  Gauge,
  MailCheck,
  Network,
  ScanLine,
  Users,
  Workflow
} from "lucide-react";
import { AiCalculator } from "@/components/ai-calculator";
import { ScrollObserver } from "@/components/scroll-observer";

export const homepageFaqs = [
  {
    question: "Begin je met een audit, training of een bouwtraject?",
    answer:
      "Dat hangt af van waar je nu staat. We kunnen starten met een korte audit van je processen, samen met jou leren werken in een traject, of direct een eerste AI-systeem bouwen. Meestal kiezen we de kleinste stap waarmee je echte informatie krijgt."
  },
  {
    question: "Moet ik technisch zijn om met MagisData te werken?",
    answer:
      "Nee. Jij kent je bedrijf en je processen. MagisData vertaalt die kennis naar een werkbare combinatie van instructies, tools en automatisering. Je hoeft geen programmeur te zijn om mee te kunnen kijken of later zelf verder te bouwen."
  },
  {
    question: "Welke taken kunnen jullie helpen automatiseren?",
    answer:
      "Denk aan e-mails sorteren en voorbereiden, leads opvolgen, gesprekken samenvatten, rapportages maken, informatie uit documenten halen en content voorbereiden. We automatiseren alleen wat controleerbaar en zinvol is."
  },
  {
    question: "Bouwen jullie een chatbot of een systeem?",
    answer:
      "Een chatbot kan onderdeel zijn van een systeem, maar is zelden het hele antwoord. We kijken naar de volledige workflow: brondata, beslismomenten, menselijke controle, output en de tools die je al gebruikt."
  },
  {
    question: "Hoe weet ik wat AI mij kan besparen?",
    answer:
      "We beginnen met het werk dat vaak terugkomt en weinig onderscheidend is. Daarna rekenen we uren, waarde en risico door. De calculator op deze pagina geeft een eerste indicatie; een audit maakt het concreet voor jouw bedrijf."
  },
  {
    question: "Kan ik ook leren om dit zelf te bouwen?",
    answer:
      "Ja. Naast bouwen voor bedrijven kan MagisData je helpen met een eigen second brain, skills en werkwijze. Zo houd je niet alleen een tool over, maar begrijp je hoe je hem verder laat groeien."
  }
];

const systems = [
  {
    number: "01",
    label: "Inbox → actie",
    title: "E-mails die zichzelf voorbereiden",
    text:
      "Laat nieuwe berichten sorteren, samenvatten en voorzien van een conceptantwoord. Jij houdt het laatste woord voordat iets de deur uitgaat.",
    outcome: "Minder schakelen tussen lezen, zoeken en schrijven",
    icon: MailCheck
  },
  {
    number: "02",
    label: "Lead → opvolging",
    title: "Leads die niet tussen de mazen verdwijnen",
    text:
      "Nieuwe aanvragen krijgen context, een volgende stap en een plek in je bestaande workflow. Geen extra dashboard om dagelijks te onderhouden.",
    outcome: "Meer rust in verkoop en opvolging",
    icon: Network
  },
  {
    number: "03",
    label: "Data → overzicht",
    title: "Rapportages zonder knip-en-plakwerk",
    text:
      "Verzamel informatie uit je tools, laat afwijkingen markeren en maak een briefing waar je team direct mee kan werken.",
    outcome: "Sneller van losse data naar een besluit",
    icon: Gauge
  }
];

const skills = [
  {
    title: "Research skill",
    text: "Vraagt eerst door, zoekt bronnen en levert een compact overzicht met herkomst.",
    sample: "Onderzoek → bronnen → synthese → volgende vraag"
  },
  {
    title: "Proposal skill",
    text: "Zet een gesprek om in een voorstel dat past bij je manier van werken en schrijven.",
    sample: "Notities → scope → voorstel → conceptmail"
  },
  {
    title: "Review skill",
    text: "Controleert output op toon, logica en afspraken voordat jij hem gebruikt.",
    sample: "Output → controle → opmerkingen → klaar voor gebruik"
  }
];

export function AiHomepage() {
  return (
    <main>
      <ScrollObserver />
      <section className="center-hero-preview ai-live-hero" id="top">
        <Image
          alt="Blauw-wit beeld van een klassiek standbeeld als symbool voor helder denken en nieuwe systemen"
          className="center-hero-preview-image"
          fill
          priority
          sizes="100vw"
          src="/assets/magisdata-hero.png"
        />
        <div aria-hidden="true" className="center-hero-preview-overlay" />
        <div className="center-hero-content reveal-up">
          <p className="eyebrow">AI-systemen voor ondernemers</p>
          <h1>Haal handwerk uit je bedrijf met AI.</h1>
          <p>
            MagisData onderzoekt waar AI je tijd teruggeeft en bouwt systemen die e-mail,
            leads, rapportages en kenniswerk voor je voorbereiden. Jij houdt de regie.
          </p>
          <div className="center-hero-actions">
            <Link className="button-primary" href="/contact">
              Plan een AI-scan <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
            <a className="text-link" href="#rekenen">
              Bereken je tijdwaarde <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
          <div className="hero-tools center-hero-tools" aria-label="Voorbeelden van AI-platforms waarmee we werken">
            <span className="hero-tools-label">Onder meer met</span>
            <span className="tool-chip tool-chip-claude"><span className="tool-chip-logo"><img alt="" aria-hidden="true" src="/assets/logos/anthropic.svg" /></span>Claude</span>
            <span className="tool-chip tool-chip-openai"><span className="tool-chip-logo"><img alt="" aria-hidden="true" src="/assets/logos/openai.svg" /></span>OpenAI</span>
            <span className="tool-chip tool-chip-gemini"><span className="tool-chip-logo"><img alt="" aria-hidden="true" src="/assets/logos/gemini.svg" /></span>Gemini</span>
            <span className="tool-chip tool-chip-cloud"><span className="tool-chip-logo"><img alt="" aria-hidden="true" src="/assets/logos/googlecloud.svg" /></span>Google Cloud</span>
          </div>
        </div>
      </section>

      <section className="ai-section ai-statement" id="werkwijze">
        <div className="container statement-grid" data-scroll-reveal>
          <p className="section-kicker">Het uitgangspunt</p>
          <div>
            <h2>AI moet niet naast je werk staan. Het moet erin zitten.</h2>
            <p>
              Een losse tool verandert weinig als je team daarna nog steeds alles moet kopiëren,
              zoeken en controleren. Daarom kijken we naar de hele beweging: wat komt binnen,
              welke beslissing moet worden genomen en wat moet er daarna gebeuren?
            </p>
            <Link className="text-link" href="/diensten">
              Bekijk wat we bouwen <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="statement-system-card" data-scroll-reveal aria-label="Voorbeeld van een AI-workflow">
            <div className="statement-card-header">
              <span>AI in de workflow</span>
              <small>01 — 03</small>
            </div>
            <div className="statement-flow">
              <div className="statement-flow-step">
                <span>01</span>
                <div><strong>Komt binnen</strong><small>E-mail, lead of document</small></div>
              </div>
              <div className="statement-flow-line" />
              <div className="statement-flow-step">
                <span>02</span>
                <div><strong>AI bereidt voor</strong><small>Context, keuze en concept</small></div>
              </div>
              <div className="statement-flow-line" />
              <div className="statement-flow-step">
                <span>03</span>
                <div><strong>Jij beslist</strong><small>Controle waar het telt</small></div>
              </div>
            </div>
            <div className="statement-card-footer"><span className="status-dot" /> Geen zwarte doos</div>
          </div>
        </div>
      </section>

      <section className="ai-section calculator-section" id="rekenen">
        <div className="container" data-scroll-reveal>
          <AiCalculator />
        </div>
      </section>

      <section className="ai-section systems-section" id="systemen">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">Wat we bouwen</p>
              <h2>Handwerk eruit. Aandacht terug.</h2>
            </div>
            <p>
              Geen generieke chatbot met je logo erop. We bouwen een kleine, begrijpelijke
              route rond een probleem dat je nu al voelt.
            </p>
          </div>
          <div className="systems-list">
            {systems.map((system) => {
              const Icon = system.icon;
              return (
                <article className="system-row" data-scroll-reveal key={system.number}>
                  <div className="system-number">{system.number}</div>
                  <div className="system-icon"><Icon aria-hidden="true" size={21} /></div>
                  <div className="system-copy">
                    <p className="system-label">{system.label}</p>
                    <h3>{system.title}</h3>
                    <p>{system.text}</p>
                  </div>
                  <div className="system-outcome">
                    <span>Resultaat</span>
                    <strong>{system.outcome}</strong>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="disclaimer-line">Voorbeelden, geen automatische belofte. We kiezen wat past bij je data, team en risico.</p>
        </div>
      </section>

      <section className="ai-section brain-section" id="second-brain">
        <div className="container brain-grid" data-scroll-reveal>
          <div className="brain-preview" aria-label="Voorbeeld van een second brain-interface">
            <div className="brain-window-bar"><span /><span /><span /><small>magisdata / second brain</small></div>
            <div className="brain-window-body">
              <div className="brain-sidebar">
                <span className="sidebar-active">Overzicht</span>
                <span>Projecten</span>
                <span>Skills</span>
                <span>Bronnen</span>
              </div>
              <div className="brain-content">
                <div className="brain-content-top">
                  <p className="system-label">Vandaag</p>
                  <span className="brain-date">07 / 08 / 2026</span>
                </div>
                <h3>Wat moet ik weten voor mijn volgende gesprek?</h3>
                <div className="brain-summary">
                  <div className="summary-line wide" /><div className="summary-line" /><div className="summary-line short" />
                </div>
                <div className="brain-tags"><span>3 bronnen</span><span>2 open punten</span><span>1 voorstel</span></div>
              </div>
            </div>
          </div>
          <div className="brain-copy">
            <p className="section-kicker">Je eigen second brain</p>
            <h2>Laat kennis niet verdwijnen in losse tabs.</h2>
            <p>
              Bouw een werkplek die je eigen context kent: je manier van schrijven, projecten,
              bronnen, afspraken en terugkerende beslissingen. Niet om meer informatie te bewaren,
              maar om sneller goed werk te leveren.
            </p>
            <div className="check-list">
              {[
                "Een eigen kennisstructuur die je kunt doorzoeken",
                "Skills met duidelijke instructies en kwaliteitschecks",
                "Een werkwijze die je zelf begrijpt en kunt uitbreiden"
              ].map((item) => <div key={item}><Check aria-hidden="true" size={17} /> {item}</div>)}
            </div>
            <Link className="text-link" href="/contact">
              Bespreek je eigen systeem <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="ai-section skills-section" id="skills">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">Skills en demo’s</p>
              <h2>Laat zien hoe het werkt.</h2>
            </div>
            <p>
              Een skill is een vaste manier van werken voor je AI. Open een voorbeeld en zie hoe
              we van een rommelige opdracht naar controleerbare output gaan.
            </p>
          </div>
          <div className="skills-grid" data-scroll-reveal>
            {skills.map((skill, index) => (
              <details className="skill-card" key={skill.title}>
                <summary>
                  <span className="skill-index">0{index + 1}</span>
                  <span><strong>{skill.title}</strong><small>{skill.text}</small></span>
                  <ChevronDown aria-hidden="true" size={18} />
                </summary>
                <div className="skill-demo">
                  <span className="demo-tag">workflow</span>
                  <code>{skill.sample}</code>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section process-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Zo werken we samen</p>
            <h2>Van eerste vraag naar iets dat draait.</h2>
          </div>
          <div className="process-grid" data-scroll-reveal>
            <article><span>01</span><ScanLine aria-hidden="true" size={22} /><h3>Audit</h3><p>We brengen terugkerend werk, tools en beslismomenten in kaart.</p></article>
            <article><span>02</span><Workflow aria-hidden="true" size={22} /><h3>Build</h3><p>We bouwen een kleine eerste route en testen die met echte input.</p></article>
            <article><span>03</span><BrainCircuit aria-hidden="true" size={22} /><h3>Enable</h3><p>Je team weet wat het systeem doet, waar controle zit en hoe het verder kan.</p></article>
          </div>
        </div>
      </section>

      <section className="ai-section comparison-section" id="community">
        <div className="container comparison-grid" data-scroll-reveal>
          <div>
            <p className="section-kicker">Een andere route</p>
            <h2>Niet nog een cursus. Niet nog een losse zzp-oplossing.</h2>
            <p>
              Je kunt leren, laten bouwen of beide combineren. Het verschil zit in wat er na de
              eerste sessie overblijft: losse kennis of een systeem dat je dagelijks gebruikt.
            </p>
            <Link className="button-secondary" href="/contact">Vraag naar de passende route <ArrowUpRight aria-hidden="true" size={17} /></Link>
          </div>
          <div className="comparison-table" role="table" aria-label="Vergelijking van manieren om met AI te starten">
            <div className="comparison-head" role="row"><span role="columnheader">Route</span><span role="columnheader">Wat je overhoudt</span></div>
            <div className="comparison-row" role="row"><strong>Losse tools</strong><span>Een verzameling accounts en prompts.</span></div>
            <div className="comparison-row" role="row"><strong>Generieke cursus</strong><span>Kennis die je nog naar je eigen werk moet vertalen.</span></div>
            <div className="comparison-row is-highlight" role="row"><strong>MagisData</strong><span>Een audit, build of eigen systeem rond jouw processen.</span></div>
            <div className="comparison-row" role="row"><strong>Community + build</strong><span>Samen leren, delen en bouwen met een werkende basis.</span></div>
          </div>
        </div>
      </section>

      <section className="ai-section faq-section" id="faq">
        <div className="container faq-grid" data-scroll-reveal>
          <div className="faq-aside">
            <p className="section-kicker">Veelgestelde vragen</p>
            <h2>Geen magie. Wel een heldere volgende stap.</h2>
            <p>Twijfel je of AI past bij je bedrijf? Dat is precies waar een eerste audit voor is.</p>
          </div>
          <div className="faq-list">
            {homepageFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<ChevronDown aria-hidden="true" size={19} /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-final-cta">
        <div className="container final-cta-inner" data-scroll-reveal>
          <div>
            <p className="section-kicker">Eerste stap</p>
            <h2>Laat zien waar je bedrijf tijd laat liggen.</h2>
            <p>In een korte brainstorm krijg je een nuchtere eerste richting. Geen verplicht plan, wel een concreet gesprek.</p>
          </div>
          <Link className="button-primary" href="/contact">Plan een AI-scan <ArrowUpRight aria-hidden="true" size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
