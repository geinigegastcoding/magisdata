import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus, Check } from "lucide-react";
import { AiCalculator } from "@/components/ai-calculator";
import { StudioCta } from "@/components/studio-cta";
import { homepageFaqs, systems, skills } from "@/content/ai-homepage";
export { homepageFaqs } from "@/content/ai-homepage";

export function AiHomepage() {
  return <main className="studio-home">
    <section className="studio-hero container" id="top">
      <div className="hero-copy">
        <h1>Minder handwerk.<br />Meer <em>vooruit.</em></h1>
        <p>AI die ruimte maakt voor ondernemen. We bouwen slimme systemen rond je dagelijkse werk. Van een volle inbox tot kennis die je direct kunt gebruiken.</p>
        <div className="hero-actions"><Link className="button-primary" href="/contact">Ontdek wat AI kan doen <ArrowUpRight aria-hidden="true" size={18} /></Link><a className="text-link" href="#systemen">Bekijk de mogelijkheden <ArrowRight aria-hidden="true" size={17} /></a></div>
        <div className="hero-note"><span aria-hidden="true" /> Praktische AI. Jij houdt de regie.</div>
      </div>
      <figure className="hero-art">
        <Image src="/assets/studio-flow.webp" alt="Een groene papieren boog loopt over in geordende vouwen op natuursteen" width={1120} height={1400} priority sizes="(max-width: 767px) 100vw, 46vw" />
        <figcaption><span>Van losse taken naar een logisch geheel.</span><ArrowUpRight aria-hidden="true" size={18} /></figcaption>
      </figure>
    </section>
    <div className="platform-strip container"><p>De juiste tools.<br /><strong>Voor jouw manier van werken.</strong></p><div aria-label="AI-platforms waarmee we werken">{[{name:"Claude",logo:"anthropic"},{name:"OpenAI",logo:"openai"},{name:"Gemini",logo:"gemini"},{name:"Google Cloud",logo:"googlecloud"}].map(tool => <span key={tool.name}><img src={`/assets/logos/${tool.logo}.svg`} width="24" height="24" alt="" />{tool.name}</span>)}</div></div>
    <section className="studio-section container" id="systemen">
      <div className="section-intro"><h2>Het werk herhaalt zich.<br /><em>Jij hoeft dat niet.</em></h2><p>Lezen, zoeken, overtypen, opvolgen. Het hoort bij je bedrijf, maar het hoeft niet je dag te bepalen. Hier kan AI het verschil maken.</p></div>
      <div className="use-cases">{systems.map(({icon:Icon,...system}) => <article key={system.number}><div className="use-case-title"><Icon aria-hidden="true" size={24} /><h3>{system.label}</h3></div><div><h4>{system.title}</h4><p>{system.text}</p></div><span className="use-case-outcome">{system.outcome}<ArrowUpRight aria-hidden="true" size={20} /></span></article>)}</div>
      <div className="section-tail"><span>Voorbeelden van wat mogelijk is. De juiste oplossing begint bij jouw proces.</span><Link className="text-link" href="/diensten">Alle mogelijkheden <ArrowRight aria-hidden="true" size={17} /></Link></div>
    </section>
    <section className="studio-method" id="werkwijze"><div className="container"><div className="section-intro"><h2>Van ‘kan dit slimmer?’<br />naar <em>‘het werkt’.</em></h2><Link className="text-link" href="/over-ons">Leer de studio kennen <ArrowUpRight aria-hidden="true" size={17} /></Link></div>
      <ol className="method-steps">{[{title:"Eerst begrijpen.",text:"We brengen je terugkerende werk in kaart. Waar lekt tijd weg? Wat kan beter? En wat moet vooral menselijk blijven?",label:"Audit"},{title:"Dan bouwen.",text:"Een kleine, werkende oplossing in je bestaande tools. Getest met echte input, met controle op de momenten die ertoe doen.",label:"Build"},{title:"Zelf verder kunnen.",text:"Je leert hoe het systeem werkt. Je krijgt de kennis en instructies om ermee te werken en het verder uit te bouwen.",label:"Enable"}].map((step,i)=><li key={step.label}><div><span>0{i+1}</span><span>{step.label}</span></div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
    </div></section>
    <section className="studio-section container knowledge-section" id="second-brain"><figure><Image src="/assets/studio-knowledge.webp" alt="Een tastbaar kennisarchief van papier, amberkleurig glas en groene tabbladen" width={1536} height={1024} sizes="(max-width: 767px) 100vw, 50vw" /><figcaption>Je kennis, verbonden.</figcaption></figure><div><h2>Een tweede brein.<br /><em>Helemaal van jou.</em></h2><p>Je projecten, bronnen en manier van werken op één plek. Zodat AI niet telkens opnieuw hoeft te beginnen, maar voortbouwt op wat jij al weet.</p><ul className="knowledge-checks">{["Je eigen kennis, doorzoekbaar en bruikbaar.","Skills die jouw manier van werken vastleggen.","Een systeem dat je begrijpt en zelf kunt uitbreiden."].map(item=><li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul><Link href="/contact" className="text-link">Bespreek je eigen systeem <ArrowUpRight size={17} aria-hidden="true" /></Link></div></section>
    <section className="skills-section-new container" id="skills"><div><h2>Goed werk begint<br />met goede instructies.</h2><p>Een skill legt vast hoe je AI een taak aanpakt. Open een voorbeeld.</p></div><div className="studio-accordions">{skills.map(skill=><details key={skill.title}><summary>{skill.title}<Plus aria-hidden="true" size={20} /></summary><p>{skill.text}</p><p className="skill-route">{skill.sample}</p></details>)}</div></section>
    <section className="studio-calculator" id="rekenen"><div className="container"><AiCalculator /></div></section>
    <section className="studio-section container studio-faq" id="faq"><div><h2>Goede vragen.<br /><em>Eerlijke antwoorden.</em></h2><p>Je hoeft nog niet precies te weten wat je nodig hebt. Daar begint ons werk.</p><Link className="text-link" href="/contact">Stel je vraag <ArrowUpRight aria-hidden="true" size={17} /></Link></div><div className="studio-accordions">{homepageFaqs.map(faq=><details key={faq.question}><summary>{faq.question}<Plus aria-hidden="true" size={20} /></summary><p>{faq.answer}</p></details>)}</div></section>
    <StudioCta />
  </main>;
}
