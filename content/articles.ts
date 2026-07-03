import type { LucideIcon } from "lucide-react";

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  datePublished: string;
  dateModified?: string;
  author: string;
  category: string;
  tldr: string; // De eerste zin geeft het antwoord, daarna uitleg.
  content: string; // Markdown content
  image?: string; // Optionele cover afbeelding (WebP)
  faqs: { question: string; answer: string }[];
  cta: {
    title: string;
    text: string;
    primaryHref: string;
    primaryText: string;
  };
  relatedSlugs: string[];
};

export const articles: Article[] = [
  {
    slug: "website-laten-maken-leiden-kosten",
    title: "Wat kost een website laten maken in Leiden in 2026?",
    metaTitle: "Wat kost een website in Leiden? Prijzen & Uitleg | MagisData",
    metaDescription: "Een website laten maken in Leiden kost gemiddeld tussen de €1.500 en €4.500. Ontdek hier waar de prijs van afhangt en wat een logische investering is.",
    keywords: ["website laten maken leiden", "website kosten", "webdesign leiden prijzen"],
    datePublished: "2026-07-03",
    author: "Daniël Magis",
    category: "Webontwikkeling",
    tldr: "Een professionele website laten maken in Leiden kost gemiddeld tussen de €1.500 en €4.500, afhankelijk van de benodigde pagina's, functies en SEO-eisen. Binnen dit budget krijg je een snelle, veilige site die direct klaar is om lokaal gevonden te worden.",
    content: `
Als je overweegt om een website te laten maken, wil je uiteraard eerst weten wat de investering is. De prijs hangt grotendeels af van je doelen.

## Waaruit bestaan de kosten?

Wanneer je een website laat bouwen, betaal je voor drie hoofdonderdelen:
1. **Design & Architectuur:** Hoe de website eruitziet en navigeert.
2. **Techniek & SEO:** Snelheid, mobielvriendelijkheid en de technische SEO-fundering.
3. **Content & Copywriting:** De teksten die bezoekers overtuigen om contact op te nemen.

### Vergelijking: Zelf doen vs. Bureau

| Optie | Gemiddelde Kosten | Voordelen | Nadelen |
|---|---|---|---|
| Zelf doen (WordPress/Wix) | €0 - €300 | Goedkoop, snel live | Kost veel eigen tijd, vaak tragere website, minder SEO-focus |
| Freelancer | €500 - €1.500 | Persoonlijk, flexibel | Kwaliteit varieert, vaak alleen design of alleen techniek |
| **MagisData (Webbureau)** | **€1.500 - €4.500** | **Complete ontzorging, SEO & conversie focus** | Hogere eenmalige investering |

## Waarom investeren in een lokaal bureau?
Een bureau uit de regio Leiden snapt de lokale markt. We optimaliseren de website direct voor termen als "lokale dienstverlener Leiden" zodat je niet alleen een site hebt, maar ook een site die *gevonden* wordt.

> "Een goede website kost geld, maar een onduidelijke website kost je dagelijks aanvragen."

## Conclusie
Een investering in een nieuwe website betaalt zich terug als de site ook bezoekers omzet in klanten. Zorg dat je niet alleen betaalt voor een mooi design, maar voor techniek, SEO en heldere antwoorden op klantvragen.
    `,
    faqs: [
      {
        question: "Hoe lang duurt het om een website te maken?",
        answer: "Gemiddeld duurt dit 3 tot 6 weken, afhankelijk van hoe snel feedback wordt gegeven en content beschikbaar is."
      },
      {
        question: "Komen er nog maandelijkse kosten bij?",
        answer: "Vaak betaal je voor hosting, domeinnaam en onderhoud. Bij MagisData is dit vooraf transparant."
      }
    ],
    cta: {
      title: "Wil je weten wat jouw ideale website kost?",
      text: "Vraag vrijblijvend een offerte aan of plan een korte kennismaking. We geven je altijd direct duidelijkheid over de verwachte investering.",
      primaryHref: "/contact",
      primaryText: "Vraag websiteplan aan"
    },
    relatedSlugs: []
  },
  {
    slug: "heeft-een-loodgieter-een-website-nodig",
    title: "Heeft een loodgieter een website nodig in 2026?",
    metaTitle: "Website Loodgieter: Is het nodig in 2026? | MagisData",
    metaDescription: "Ontdek of een website voor jouw loodgietersbedrijf nodig is in 2026. Bekijk de data over lokaal zoekverkeer en spoedklussen.",
    keywords: ["website loodgieter", "heeft een loodgieter een website nodig", "online marketing loodgietersbedrijf", "website laten maken loodgieter"],
    datePublished: "2026-07-03",
    author: "Daniël Magis",
    category: "Lokale SEO",
    tldr: "Een website is voor een loodgieter in 2026 essentieel als direct conversiekanaal voor spoedklussen en lokaal zoekverkeer. Terwijl mond-tot-mondreclame zorgt voor basisonderhoud, genereert een website exact de goedbetaalde klussen uit jouw regio op het moment dat de nood hoog is.",
    image: "/assets/agency_office_cover.jpg",
    content: `Loodgieters en installateurs hebben van oudsher een vak waar mond-tot-mondreclame de drijvende kracht is. Vakmanschap leidt tot aanbevelingen, en voor veel succesvolle loodgietersbedrijven resulteert dit in een volle agenda. Toch horen we vaak de vraag: *"Mijn agenda zit tot de zomer vol door aanbevelingen via via, heeft een website voor mijn loodgietersbedrijf dan nog wel zin?"*

Het antwoord op die vraag is de afgelopen jaren sterk genuanceerd geraakt. Een website dient allang niet meer puur als een uithangbord of digitaal visitekaartje. In 2026 is de rol van een website verschoven naar een strategisch filtermechanisme en een autoriteitsbron voor zoekmachines en AI. In dit artikel analyseren we objectief de data en bekijken we in welke situaties een loodgieter daadwerkelijk een website nodig heeft.

## Het veranderende zoekgedrag bij spoed

Wanneer iemand een lekkage heeft, of de CV-ketel stopt ermee midden in de winter, verandert het gedrag van de consument onmiddellijk. Er is geen tijd om de buurman te bellen voor een aanbeveling; het probleem is acuut. Uit landelijke SEO-data blijkt dat meer dan 87% van de consumenten bij huishoudelijke spoed direct naar een smartphone grijpt en Google (of een AI-assistent) opent met zoekopdrachten zoals "loodgieter met spoed Leiden" of "lekkage oplossen bij mij in de buurt".

Op dat specifieke moment beslissen zoekmachines op basis van data welk bedrijf bovenaan verschijnt. Zonder een website die jouw exacte werkgebied (bijv. de Bollenstreek of regio Leiden), diensten en spoedtarieven vermeldt, vloeit deze uiterst lucratieve klus linea recta naar de concurrentie. 

### Social Proof en Verificatie door de Consument

Zelfs in de gevallen waar een loodgieter via-via wordt aangeraden, zien we een verandering in consumentenvertrouwen. Voorafgaand aan het telefoontje vindt er vrijwel altijd een digitale controle plaats. De potentiële klant zoekt het bedrijf op. Ze zoeken naar:
- **Transparantie in prijzen:** Hanteert de loodgieter voorrijkosten? 
- **Reviews en garanties:** Heeft het bedrijf een betrouwbaar Google Bedrijfsprofiel?
- **Contactmogelijkheden:** Kan ik ze ook via WhatsApp bereiken?

Zonder website ontbreekt dit stukje geruststelling, wat ertoe kan leiden dat de consument alsnog afhaakt. Gegevens uit conversie-optimalisatie onderzoeken tonen aan dat een simpele, transparante webpagina de conversie van koude aanvragen met ruim 40% kan verhogen ten opzichte van bedrijven die alleen op Facebook of Werkspot te vinden zijn.

## Een website als filter voor onrendabele klussen

Een veelgehoorde klacht onder vakmensen is niet een gebrek aan werk, maar een overvloed aan de "verkeerde" telefoontjes. Denk aan mensen die bellen voor klussen buiten het werkgebied, op zoek zijn naar de goedkoopste klusser in plaats van kwaliteit, of diensten vragen die het bedrijf niet (meer) levert.

Hier bewijst een website zijn ware waarde. Een goede loodgieterswebsite is niet ingericht om simpelweg álle telefoontjes binnen te slepen, maar om verwachtingsmanagement te doen:

1. **Uitsluiten van regio's:** "Wij werken uitsluitend in een straal van 15 km rondom Voorschoten."
2. **Specialisaties duidelijk maken:** "Wij zijn gespecialiseerd in warmtepompen en CV-ketels, maar doen géén reguliere rioolontstoppingen."
3. **Transparantie vooraf:** Duidelijke vermelding van uurtarieven en voorrijkosten elimineert urenlange prijsdiscussies aan de telefoon.

![Statistieken van website groei in de installatiebranche](/assets/analytics_dashboard.jpg)

### De gevaren van afhankelijkheid van derden

Veel loodgieters vertrouwen tegenwoordig sterk op lead-platformen (zoals Werkspot) of hun Google Bedrijfsprofiel. Hoewel een Google-profiel essentieel is (het zorgt voor je zichtbaarheid op de kaart), kleeft er een gigantisch risico aan het bouwen van een bedrijf op andermans platform.

Lead-platformen creëren een neerwaartse prijsspiraal waarbij loodgieters moeten concurreren om de goedkoopste te zijn. Bovendien kunnen de regels, abonnementskosten en algoritmes van deze platforms van de ene op de andere dag veranderen. Een website is 100% eigendom. Niemand kan jouw content verwijderen of de regels halverwege de wedstrijd aanpassen.

> "Een loodgieter zonder website concurreert altijd op prijs via andermans netwerk. Een loodgieter mét een sterke eigen website concurreert op kwaliteit, zichtbaarheid en vertrouwen."

## Conclusie: Heeft een loodgieter een website nodig?

Als het enige doel is om via bestaande connecties onderhoudsklussen uit te voeren, dan is de noodzaak voor een uitgebreide website laag. Echter, wil een loodgietersbedrijf onafhankelijk zijn van dure lead-platforms, dominant aanwezig zijn bij rendabele (spoed)klussen in de eigen regio, en voorkomen dat tijd verloren gaat aan ongerichte telefoontjes, dan is een website in 2026 de meest logische en best renderende investering. 

Het is niet langer een statisch visitekaartje, maar het digitale hoofdkwartier dat 24 uur per dag lokaal werk aantrekt en filtert.`,
    faqs: [
      {
        question: "Is een Facebook-pagina niet voldoende voor mijn installatiebedrijf?",
        answer: "Een Facebook-pagina is handig om lokaal een netwerk op te bouwen, maar mist de structuur voor lokale Google-zoekopdrachten (SEO). Voor zoekopdrachten zoals 'CV monteur Leiden' rankt een Facebook-pagina vrijwel nooit."
      },
      {
        question: "Wat kost het om een simpele loodgieterswebsite te laten maken?",
        answer: "Voor een lokale dienstverlener variëren de kosten voor een op maat gemaakte, SEO-geoptimaliseerde website gemiddeld tussen de €1.500 en €3.500, afhankelijk van het aantal dienstenpagina's."
      },
      {
        question: "Zelf een website maken (Wix/WordPress) of uitbesteden?",
        answer: "Zelf maken kost vakmensen tientallen onbetaalde uren en mist vaak technische SEO-kennis. Het uitbesteden aan een bureau zorgt voor een snelle, vindbare site zonder frustraties."
      }
    ],
    cta: {
      title: "Kunnen we je hiermee helpen?",
      text: "Ben je loodgieter en wil je direct beter gevonden worden in jouw regio, of wil je een professionele website laten maken? Wij denken graag objectief met je mee.",
      primaryHref: "/contact",
      primaryText: "Laat dit door ons doen"
    },
    relatedSlugs: ["website-laten-maken-leiden-kosten"]
  }
];
