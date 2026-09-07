import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { AiCalculator } from "@/components/ai-calculator";
import { StudioCta } from "@/components/studio-cta";
import { WorkflowExample } from "@/components/workflow-example";
import { homepageFaqs } from "@/content/ai-homepage";
export { homepageFaqs } from "@/content/ai-homepage";

export function AiHomepage() {
  return <main className="studio-home">
    <section className="system-hero container">
      <div className="hero-index"><span>AI-systemen voor ondernemers</span><span>Van terugkerend werk naar een werkend systeem</span></div>
      <h1>AI die<br />werk verzet.</h1>
      <div className="hero-baseline"><a className="hero-scroll" href="#voorbeeld"><ArrowRight size={22} aria-hidden="true" />Bekijk het in de praktijk</a><p>MagisData bouwt AI rond het werk dat elke week terugkomt. Je inbox, je documenten, je bedrijfskennis. Minder uitzoekwerk. Meer tijd om te ondernemen.</p><Link className="button-primary" href="/contact">Plan een AI-scan<ArrowUpRight size={19} aria-hidden="true" /></Link></div>
    </section>
    <WorkflowExample />
    <section className="system-intro container">
      <div className="section-number">01 / De aanpak</div>
      <div><h2>Eerst het werk begrijpen.<br />Dan pas automatiseren.</h2><div className="intro-columns"><p>AI toevoegen is makkelijk. Er iets bruikbaars van maken vraagt om inzicht in je bedrijf. Wat komt er binnen? Welke stappen herhalen zich? Waar is jouw oordeel nodig?</p><p>We brengen dat samen in kaart en beginnen bij één proces. Klein genoeg om te testen. Concreet genoeg om te zien of het je helpt.</p></div><Link className="text-link" href="/diensten">Bekijk hoe we samenwerken <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
    </section>
    <figure className="process-photo container"><Image src="/assets/process-mapping.webp" alt="Handen brengen een werkproces in kaart met notitiekaarten en verbindingen op een bureau" width={1774} height={887} sizes="(max-width: 767px) 100vw, 90vw" /><figcaption><span>Van losse handelingen naar een overzichtelijk proces.</span><span>Procesanalyse · illustratief beeld</span></figcaption></figure>
    <section className="container method-grid" aria-label="Onze werkwijze">
      {[{name:"Onderzoeken",label:"01 / Audit",text:"We vinden het terugkerende werk, bekijken je tools en kiezen waar AI praktisch iets toevoegt."},{name:"Bouwen",label:"02 / Build",text:"Een werkende oplossing in je bestaande werkomgeving. Getest met echte input en duidelijke controlemomenten."},{name:"Overdragen",label:"03 / Enable",text:"Je leert hoe het systeem werkt, waar de grenzen liggen en hoe je er zelf mee verder kunt."}].map(step=><article key={step.label}><span>{step.label}</span><h3>{step.name}</h3><p>{step.text}</p></article>)}
    </section>
    <section className="knowledge-system"><div className="container knowledge-layout"><div><span className="section-number">02 / Je eigen kennis</span><h2>AI werkt beter<br />als het je<br />bedrijf begrijpt.</h2><p>Een eigen kennisomgeving brengt je bronnen, projecten en werkwijze samen. Zo hoef je niet bij elke vraag opnieuw context te geven.</p><Link href="/diensten#kennis" className="text-link">Een second brain voor je bedrijf <ArrowUpRight size={18} aria-hidden="true" /></Link></div><div className="knowledge-register"><div className="register-heading"><span>Je bedrijfskennis</span><span>Wat je vastlegt</span></div>{[{title:"Context",text:"Wat je doet, voor wie je werkt en wat je belangrijk vindt.",example:"Bedrijf · Klanten · Uitgangspunten"},{title:"Bronnen",text:"De documenten en afspraken waarop AI mag terugvallen.",example:"Projecten · Documenten · Besluiten"},{title:"Werkwijze",text:"Instructies die vastleggen hoe een taak uitgevoerd wordt.",example:"Onderzoeken · Schrijven · Controleren"}].map((item,i)=><article key={item.title}><span>0{i+1}</span><div><h3>{item.title}</h3><p>{item.text}</p><small>{item.example}</small></div></article>)}<p className="register-note">Jouw bronnen. Jouw instructies. Jij houdt de regie.</p></div></div></section>
    <section className="studio-calculator" id="rekenen"><div className="container"><span className="section-number">03 / De rekensom</span><AiCalculator /></div></section>
    <section className="container studio-faq"><div><span className="section-number">Voor je begint</span><h2>Wat wil je weten?</h2><Link className="text-link" href="/contact">Stel je vraag <ArrowUpRight aria-hidden="true" size={17} /></Link></div><div className="studio-accordions">{homepageFaqs.map(faq=><details key={faq.question}><summary>{faq.question}<Plus aria-hidden="true" size={20} /></summary><p>{faq.answer}</p></details>)}</div></section>
    <StudioCta />
  </main>;
}