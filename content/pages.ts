import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  Compass,
  FileQuestion,
  Globe2,
  LayoutTemplate,
  MessageSquareText,
  Search,
  Sparkles,
  Target,
  Wrench
} from "lucide-react";

export type PageContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: string;
  secondaryCta?: string;
  heroPoints: string[];
  sections: {
    title: string;
    text: string;
    items: { title: string; text: string }[];
  }[];
  detailSections?: {
    eyebrow: string;
    title: string;
    text: string;
    items: { title: string; text: string }[];
  }[];
  steps: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export const servicePages = {
  services: {
    eyebrow: "Diensten",
    title: "Alles wat je website nodig heeft om meer klanten op te leveren",
    description:
      "MagisData helpt ondernemers met websites, vindbaarheid, advertenties en slimme verbeteringen. We houden het duidelijk: wat werkt, wat mist, en welke stap nu het meeste oplevert.",
    primaryCta: "Vraag gratis advies aan",
    secondaryCta: "Bekijk werkwijze",
    heroPoints: [
      "Heldere uitleg zonder technisch gedoe",
      "Website, SEO en conversie onder een dak",
      "Altijd gericht op meer vertrouwen en aanvragen"
    ],
    sections: [
      {
        title: "Waar we bij helpen",
        text:
          "Je hoeft niet precies te weten welke techniek je nodig hebt. Wij vertalen jouw doel naar een praktisch plan.",
        items: [
          {
            title: "Websites die duidelijk verkopen",
            text:
              "We bouwen snelle websites die meteen laten zien wie je helpt, wat je doet en waarom mensen contact moeten opnemen."
          },
          {
            title: "Beter gevonden worden",
            text:
              "We verbeteren teksten, pagina-opbouw en techniek zodat Google en moderne zoekmachines je bedrijf beter begrijpen."
          },
          {
            title: "Meer aanvragen uit bezoekers",
            text:
              "We maken knoppen, formulieren, pagina's en vertrouwenstekens sterker zodat bezoekers sneller de volgende stap zetten."
          }
        ]
      },
      {
        title: "Voor wie dit is",
        text:
          "Onze aanpak past vooral bij ondernemers die serieus willen groeien, maar geen zin hebben in vage dashboards of ingewikkelde marketingtaal.",
        items: [
          {
            title: "Lokale en dienstverlenende bedrijven",
            text:
              "Voor bedrijven die online professioneler willen overkomen en vaker gevonden willen worden door de juiste klanten."
          },
          {
            title: "Groeiende teams",
            text:
              "Voor bedrijven waar de huidige website niet meer past bij de kwaliteit, prijs of ambitie van het bedrijf."
          },
          {
            title: "Experts en adviseurs",
            text:
              "Voor specialisten die hun kennis beter willen uitleggen en meer vertrouwen willen opbouwen voor het eerste gesprek."
          }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "Meer context",
        title: "Waarom losse online verbeteringen vaak te weinig doen",
        text:
          "Een website, SEO-pagina of automatisering werkt pas goed wanneer de onderlinge volgorde klopt. Bezoekers moeten eerst begrijpen wat je aanbiedt, daarna bewijs zien en vervolgens zonder twijfel contact kunnen opnemen.",
        items: [
          {
            title: "De boodschap bepaalt de rest",
            text:
              "Als positionering vaag is, worden advertenties duurder, SEO-pagina's dunner en contactformulieren minder effectief."
          },
          {
            title: "Zoekmachines lezen samenhang",
            text:
              "Google en AI-systemen herkennen expertise beter wanneer diensten, cases, antwoorden en interne links elkaar logisch ondersteunen."
          },
          {
            title: "Conversie vraagt vertrouwen",
            text:
              "Meer bezoekers helpt pas echt wanneer de pagina ook uitlegt waarom iemand nu veilig de volgende stap kan zetten."
          }
        ]
      }
    ],
    steps: [
      { title: "We kijken mee", text: "We bekijken je website, doelen en grootste kansen." },
      { title: "Je krijgt een helder plan", text: "Geen dikke rapporten, wel concrete stappen." },
      { title: "We bouwen en verbeteren", text: "We pakken de pagina's, content en techniek aan." },
      { title: "We meten wat werkt", text: "Je ziet wat beter gaat en waar we verder kunnen groeien." }
    ],
    faqs: [
      {
        question: "Moet ik zelf weten welke dienst ik nodig heb?",
        answer:
          "Nee. Vertel wat je wilt bereiken. Wij leggen uit welke aanpak logisch is en waarom."
      },
      {
        question: "Is dit ook geschikt voor kleinere bedrijven?",
        answer:
          "Ja. We houden de aanpak passend bij je budget, fase en doelen."
      },
      {
        question: "Kan MagisData ook een bestaande website verbeteren?",
        answer:
          "Ja. Soms is verbeteren slimmer dan opnieuw bouwen. Dat bekijken we eerst rustig samen."
      }
    ]
  },
  "web-development": {
    eyebrow: "Websites",
    title: "Een professionele website die klanten laat kiezen voor jou",
    description:
      "We bouwen snelle, overzichtelijke websites voor ondernemers die betrouwbaar willen overkomen en meer aanvragen willen krijgen zonder technische rompslomp.",
    primaryCta: "Bespreek mijn website",
    secondaryCta: "Bekijk alle diensten",
    heroPoints: [
      "Duidelijke teksten en logische pagina's",
      "Goed werkend op mobiel, tablet en desktop",
      "Gebouwd voor snelheid, vertrouwen en aanvragen"
    ],
    sections: [
      {
        title: "Wat een goede website voor je doet",
        text:
          "Een website is vaak het eerste gesprek met je klant. Binnen een paar seconden moet duidelijk zijn wat je doet en waarom je betrouwbaar bent.",
        items: [
          {
            title: "Bezoekers begrijpen je sneller",
            text:
              "We schrijven en structureren pagina's zodat ook mensen zonder voorkennis direct snappen wat je aanbiedt."
          },
          {
            title: "Je bedrijf voelt professioneler",
            text:
              "Design, snelheid en inhoud werken samen om vertrouwen op te bouwen voordat iemand contact opneemt."
          },
          {
            title: "Contact opnemen wordt makkelijk",
            text:
              "We maken de route naar bellen, mailen of een gesprek plannen duidelijk en laagdrempelig."
          }
        ]
      },
      {
        title: "Wat we opleveren",
        text:
          "Je krijgt geen losse mooie pagina, maar een website die als stevig fundament voor je online groei werkt.",
        items: [
          {
            title: "Pagina's met een doel",
            text:
              "Home, diensten, over, cases en contact krijgen elk een duidelijke rol in het overtuigen van bezoekers."
          },
          {
            title: "Basis voor vindbaarheid",
            text:
              "We zetten titels, structuur, snelheid en interne links goed neer zodat SEO later makkelijker groeit."
          },
          {
            title: "Makkelijk door te ontwikkelen",
            text:
              "De website blijft overzichtelijk zodat nieuwe pagina's, cases en inzichten later logisch kunnen worden toegevoegd."
          }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "Websitekwaliteit",
        title: "Wat maakt een website beter dan alleen een mooi ontwerp?",
        text:
          "Een goede website helpt klanten beslissen. Dat betekent dat de inhoud, techniek en visuele rust samen moeten werken: duidelijke koppen, snelle laadtijd, bewijs op de juiste plek en een contactroute die op mobiel net zo logisch voelt als op desktop.",
        items: [
          {
            title: "Informatie per beslismoment",
            text:
              "Bovenaan staat de kernbelofte. Daarna volgen diensten, bewijs, werkwijze, veelgestelde vragen en pas dan verdieping voor wie meer wil lezen."
          },
          {
            title: "SEO vanaf de basis",
            text:
              "Pagina's krijgen duidelijke titels, beschrijvende tussenkoppen, interne links en tekst die aansluit op hoe klanten zoeken."
          },
          {
            title: "Makkelijk onderhoudbaar",
            text:
              "De structuur blijft geschikt om later extra diensten, cases, regio's of kennisartikelen toe te voegen zonder rommel."
          }
        ]
      }
    ],
    steps: [
      { title: "Doel bepalen", text: "We maken helder welke klanten je wilt aantrekken." },
      { title: "Structuur maken", text: "We bepalen welke pagina's en teksten nodig zijn." },
      { title: "Ontwerpen en bouwen", text: "We maken een snelle, nette en duidelijke website." },
      { title: "Live zetten", text: "We controleren techniek, mobiel beeld en basis SEO." }
    ],
    faqs: [
      {
        question: "Moet ik zelf alle teksten aanleveren?",
        answer:
          "Nee. We kunnen bestaande informatie gebruiken en die omzetten naar duidelijke websitecopy."
      },
      {
        question: "Kan mijn huidige logo en huisstijl blijven?",
        answer:
          "Ja. We sluiten aan op wat goed is en verbeteren wat de website sterker maakt."
      },
      {
        question: "Wordt de website ook mobiel goed?",
        answer:
          "Ja. Mobiel is standaard onderdeel van ontwerp, bouw en controle."
      }
    ]
  },
  "seo-services": {
    eyebrow: "SEO",
    title: "Beter gevonden worden door klanten die al zoeken naar wat jij aanbiedt",
    description:
      "SEO helpt je website zichtbaar worden in Google. Wij maken dit praktisch: heldere pagina's, goede structuur en content die antwoord geeft op echte klantvragen.",
    primaryCta: "Laat mijn SEO checken",
    secondaryCta: "Bekijk diensten",
    heroPoints: [
      "Meer zichtbaarheid zonder elke klik te betalen",
      "Content die gewone klanten begrijpen",
      "Technische basis zonder ingewikkelde uitleg"
    ],
    sections: [
      {
        title: "SEO in gewone taal",
        text:
          "SEO betekent dat je website beter vindbaar wordt wanneer mensen zoeken naar jouw dienst, probleem of regio.",
        items: [
          {
            title: "De juiste woorden gebruiken",
            text:
              "We zoeken uit hoe klanten zoeken en verwerken die taal natuurlijk in je pagina's."
          },
          {
            title: "Pagina's beter opbouwen",
            text:
              "We maken titels, koppen, vragen en interne links logisch voor bezoekers en zoekmachines."
          },
          {
            title: "Vertrouwen vergroten",
            text:
              "We voegen bewijs, duidelijke uitleg en sterke servicepagina's toe zodat bezoekers sneller geloven dat jij past."
          }
        ]
      },
      {
        title: "Wat SEO oplevert",
        text:
          "SEO is geen trucje voor snelle pieken. Het is een fundament dat maand na maand sterker kan worden.",
        items: [
          {
            title: "Meer relevante bezoekers",
            text:
              "Je trekt mensen aan die al interesse hebben en actief zoeken naar hulp."
          },
          {
            title: "Lagere afhankelijkheid van advertenties",
            text:
              "Organische vindbaarheid blijft waarde geven, ook wanneer je advertentiebudget lager is."
          },
          {
            title: "Sterkere online autoriteit",
            text:
              "Goede uitleg, cases en kennisartikelen laten zien dat je weet waar je over praat."
          }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "SEO-fundament",
        title: "Waar Google en klanten allebei op letten",
        text:
          "Sterke SEO gaat niet over zo vaak mogelijk hetzelfde zoekwoord noemen. Het gaat over een pagina die de zoekvraag volledig beantwoordt, vertrouwen geeft en duidelijk maakt waarom jouw bedrijf een logische keuze is.",
        items: [
          {
            title: "Zoekintentie boven zoekvolume",
            text:
              "Een kleine groep bezoekers met koopintentie is waardevoller dan veel algemeen verkeer dat nooit contact opneemt."
          },
          {
            title: "Content die bewijs levert",
            text:
              "Cases, voorbeelden, procesuitleg en FAQ's maken een servicepagina sterker dan alleen een korte commerciele tekst."
          },
          {
            title: "Interne links sturen waarde",
            text:
              "Logische links tussen diensten, inzichten en cases helpen bezoekers navigeren en helpen zoekmachines verbanden zien."
          }
        ]
      }
    ],
    steps: [
      { title: "SEO-scan", text: "We bekijken huidige pagina's, techniek en kansen." },
      { title: "Zoekintentie bepalen", text: "We kiezen onderwerpen waar klanten echt op zoeken." },
      { title: "Pagina's verbeteren", text: "We herschrijven, structureren en koppelen content." },
      { title: "Groei volgen", text: "We meten zichtbaarheid, verkeer en aanvragen." }
    ],
    faqs: [
      {
        question: "Hoe snel werkt SEO?",
        answer:
          "Kleine verbeteringen kunnen snel merkbaar zijn, maar stevige SEO-groei bouw je meestal over meerdere maanden op."
      },
      {
        question: "Moet ik bloggen?",
        answer:
          "Niet zomaar. Alleen artikelen die echte vragen van klanten beantwoorden zijn nuttig."
      },
      {
        question: "Doen jullie ook lokale SEO?",
        answer:
          "Ja. Voor lokale bedrijven letten we extra op regio, diensten, Google-profiel en duidelijke contactinformatie."
      }
    ]
  },
  "geo-optimization": {
    eyebrow: "GEO",
    title: "Zorg dat AI-zoekmachines je bedrijf goed kunnen begrijpen",
    description:
      "Mensen zoeken steeds vaker via AI-antwoorden in plaats van alleen via klassieke zoekresultaten. Wij maken je website duidelijker, beter gestructureerd en makkelijker te citeren.",
    primaryCta: "Maak mijn site AI-klaar",
    secondaryCta: "Bekijk SEO aanpak",
    heroPoints: [
      "Duidelijke uitleg van diensten en expertise",
      "Sterke structuur voor AI en zoekmachines",
      "Minder jargon, meer bruikbare antwoorden"
    ],
    sections: [
      {
        title: "Wat GEO betekent",
        text:
          "GEO staat voor Generative Engine Optimization. Simpel gezegd: je website zo duidelijk maken dat AI-systemen snappen waar jij goed in bent.",
        items: [
          {
            title: "Heldere bedrijfstaal",
            text:
              "We leggen je diensten uit in woorden die klanten en AI-systemen makkelijk begrijpen."
          },
          {
            title: "Sterke kennisstructuur",
            text:
              "We ordenen pagina's, vragen, diensten en bewijs zodat je expertise logisch naar voren komt."
          },
          {
            title: "Betrouwbare signalen",
            text:
              "We maken cases, contactgegevens, uitleg en veelgestelde vragen consistent en controleerbaar."
          }
        ]
      },
      {
        title: "Waarom dit nu telt",
        text:
          "AI verandert hoe mensen bedrijven vergelijken. Wie duidelijker uitlegt, heeft meer kans om genoemd, begrepen en gekozen te worden.",
        items: [
          {
            title: "Je wordt makkelijker samengevat",
            text:
              "Duidelijke pagina's helpen AI-systemen om je aanbod correct te beschrijven."
          },
          {
            title: "Je voorkomt verkeerde aannames",
            text:
              "Als je website vaag is, vullen systemen en bezoekers zelf de gaten in. Dat wil je niet."
          },
          {
            title: "Je bouwt aan toekomstbestendige vindbaarheid",
            text:
              "SEO blijft belangrijk, maar AI-vindbaarheid wordt een extra laag bovenop je websitefundament."
          }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "AI-vindbaarheid",
        title: "Waarom duidelijke uitleg belangrijker wordt in AI-zoekresultaten",
        text:
          "AI-systemen proberen bedrijven samen te vatten. Hoe concreter je website uitlegt wat je doet, voor wie je werkt, welke problemen je oplost en waar bewijs staat, hoe kleiner de kans dat je verkeerd of te algemeen wordt begrepen.",
        items: [
          {
            title: "Consistente entiteiten",
            text:
              "Bedrijfsnaam, diensten, locatie, doelgroep en expertise moeten op meerdere plekken hetzelfde verhaal vertellen."
          },
          {
            title: "Citeerbare alinea's",
            text:
              "Korte, heldere antwoorden op belangrijke vragen zijn makkelijker te gebruiken in AI-antwoorden en samenvattingen."
          },
          {
            title: "Bewijs maakt claims sterker",
            text:
              "Cases, contactgegevens, heldere voorwaarden en concrete voorbeelden geven systemen meer houvast dan algemene beloftes."
          }
        ]
      }
    ],
    steps: [
      { title: "Informatie ordenen", text: "We brengen diensten, doelgroep en bewijs scherp in kaart." },
      { title: "Pagina's verduidelijken", text: "We schrijven uitleg die mensen en AI goed kunnen volgen." },
      { title: "Structuur versterken", text: "We verbeteren koppen, interne links en vraag-antwoorden." },
      { title: "Blijven uitbreiden", text: "We voegen nuttige kennis toe rond je belangrijkste onderwerpen." }
    ],
    faqs: [
      {
        question: "Is GEO hetzelfde als SEO?",
        answer:
          "Nee, maar ze versterken elkaar. SEO richt zich vooral op zoekmachines. GEO richt zich op begrijpelijkheid voor AI-antwoorden."
      },
      {
        question: "Heb ik dit nodig als klein bedrijf?",
        answer:
          "Als klanten online vergelijken, helpt duidelijke AI-vriendelijke content ook kleinere bedrijven."
      },
      {
        question: "Kunnen jullie garanderen dat AI ons noemt?",
        answer:
          "Nee. Niemand kan dat eerlijk garanderen. We kunnen wel je kans vergroten door je website veel duidelijker en betrouwbaarder te maken."
      }
    ]
  },
  "aeo-optimization": {
    eyebrow: "AEO",
    title: "Geef duidelijke antwoorden op de vragen die klanten echt stellen",
    description:
      "AEO helpt je website beter antwoord geven. Dat is goed voor bezoekers, Google, AI-assistenten en iedereen die snel wil weten of jij de juiste partij bent.",
    primaryCta: "Verbeter mijn antwoorden",
    secondaryCta: "Bekijk alle diensten",
    heroPoints: [
      "Veelgestelde vragen helder uitgelegd",
      "Minder twijfel bij bezoekers",
      "Betere basis voor zoekresultaten en AI-antwoorden"
    ],
    sections: [
      {
        title: "Wat AEO doet",
        text:
          "AEO staat voor Answer Engine Optimization. Je richt pagina's zo in dat belangrijke vragen direct en begrijpelijk worden beantwoord.",
        items: [
          {
            title: "Vragen boven water krijgen",
            text:
              "We verzamelen de vragen die klanten stellen voor ze contact opnemen."
          },
          {
            title: "Antwoorden kort en helder maken",
            text:
              "We schrijven antwoorden zonder vaktaal, zodat bezoekers sneller vertrouwen krijgen."
          },
          {
            title: "Pagina's beter scanbaar maken",
            text:
              "We gebruiken koppen, lijsten en FAQ's zodat informatie makkelijk te vinden is."
          }
        ]
      },
      {
        title: "Wanneer AEO veel helpt",
        text:
          "AEO is vooral sterk als je dienst uitleg nodig heeft of als klanten vaak twijfelen voordat ze contact opnemen.",
        items: [
          {
            title: "Bij ingewikkelde diensten",
            text:
              "Je maakt abstracte onderwerpen concreet, zonder dat de bezoeker technisch hoeft te zijn."
          },
          {
            title: "Bij hoge aankoopdrempels",
            text:
              "Goede antwoorden nemen onzekerheid weg over prijs, proces, timing en resultaat."
          },
          {
            title: "Bij lokale concurrentie",
            text:
              "Heldere antwoorden maken sneller duidelijk waarom iemand jou zou moeten bellen."
          }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "Antwoordstrategie",
        title: "Welke vragen moet je website beantwoorden voordat iemand contact opneemt?",
        text:
          "Klanten willen vaak eerst weten of je hun situatie begrijpt, hoe de samenwerking werkt, wat ze ongeveer kunnen verwachten en of je ervaring hebt met vergelijkbare vragen. AEO maakt die informatie sneller vindbaar.",
        items: [
          {
            title: "Vragen rond vertrouwen",
            text:
              "Denk aan ervaring, aanpak, voorbeelden, garanties, planning en hoe snel iemand reactie krijgt."
          },
          {
            title: "Vragen rond geschiktheid",
            text:
              "Leg uit voor wie je dienst wel en niet past, zodat bezoekers zichzelf beter kunnen herkennen."
          },
          {
            title: "Vragen rond proces",
            text:
              "Een korte uitleg van de stappen verlaagt onzekerheid en maakt het makkelijker om een gesprek te plannen."
          }
        ]
      }
    ],
    steps: [
      { title: "Klantvragen verzamelen", text: "We bepalen welke vragen verkoop blokkeren." },
      { title: "Antwoorden schrijven", text: "We maken korte, eerlijke en nuttige uitleg." },
      { title: "Pagina's plaatsen", text: "We voegen FAQ's en antwoordblokken logisch toe." },
      { title: "Bijwerken", text: "We vullen aan op basis van nieuwe vragen uit gesprekken." }
    ],
    faqs: [
      {
        question: "Is AEO alleen voor grote websites?",
        answer:
          "Nee. Juist kleinere websites kunnen veel winnen met duidelijke antwoorden op goede plekken."
      },
      {
        question: "Maakt AEO mijn website drukker?",
        answer:
          "Niet als het goed gebeurt. We houden de informatie rustig, scanbaar en nuttig."
      },
      {
        question: "Helpt dit ook met conversie?",
        answer:
          "Ja. Minder twijfel betekent vaak dat meer bezoekers contact opnemen."
      }
    ]
  },
  "ai-infrastructure": {
    eyebrow: "AI en automatisering",
    title: "Slimme digitale hulp die je werk makkelijker maakt",
    description:
      "We zetten AI en automatisering alleen in waar het echt waarde toevoegt: sneller reageren, minder handwerk en betere opvolging van leads.",
    primaryCta: "Bespreek automatisering",
    secondaryCta: "Bekijk diensten",
    heroPoints: [
      "Praktische AI zonder hype",
      "Minder handmatig werk in je proces",
      "Duidelijke uitleg en controle"
    ],
    sections: [
      {
        title: "Waar AI nuttig voor is",
        text:
          "AI is geen doel op zich. Het moet je bedrijf rustiger, sneller of consistenter maken.",
        items: [
          {
            title: "Leads beter opvolgen",
            text:
              "Automatische bevestigingen, betere intakevragen en snellere interne meldingen helpen om geen aanvraag te laten liggen."
          },
          {
            title: "Veelgestelde vragen afvangen",
            text:
              "Slimme content en eenvoudige chatflows kunnen bezoekers sneller antwoord geven."
          },
          {
            title: "Interne taken versnellen",
            text:
              "Denk aan samenvattingen, contentvoorstellen, rapportages of standaardmails die minder tijd kosten."
          }
        ]
      },
      {
        title: "Onze nuchtere aanpak",
        text:
          "We bouwen geen ingewikkeld systeem als een simpele verbetering genoeg is. Eerst kijken we waar tijd of omzet weglekt.",
        items: [
          {
            title: "Begrijpelijk voor je team",
            text:
              "Je krijgt geen zwarte doos. We leggen uit wat er gebeurt en hoe je controle houdt."
          },
          {
            title: "Passend bij bestaande tools",
            text:
              "Waar mogelijk sluiten we aan op je website, mail, CRM of formulieren."
          },
          {
            title: "Stapsgewijs uitbreidbaar",
            text:
              "We beginnen klein, meten waarde en breiden pas uit wanneer dat logisch is."
          }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "Praktische automatisering",
        title: "Waar AI en automatisering direct rust kunnen brengen",
        text:
          "De beste automatisering begint klein. Kijk eerst naar terugkerende taken, trage opvolging en informatie die steeds opnieuw handmatig wordt overgezet. Daar zit vaak de snelste winst.",
        items: [
          {
            title: "Leadopvolging",
            text:
              "Een goede intake, automatische bevestiging en interne melding voorkomen dat warme aanvragen blijven liggen."
          },
          {
            title: "Content en kennis",
            text:
              "AI kan helpen bij samenvattingen, concepten en hergebruik van bestaande expertise, zolang er menselijke controle blijft."
          },
          {
            title: "Rapportage en overzicht",
            text:
              "Terugkerende updates, simpele dashboards en vaste checklists maken groei makkelijker te volgen."
          }
        ]
      }
    ],
    steps: [
      { title: "Proces bekijken", text: "We zoeken waar veel herhaling of vertraging zit." },
      { title: "Kans kiezen", text: "We kiezen een verbetering met duidelijke waarde." },
      { title: "Simpel bouwen", text: "We koppelen tools en testen met echte situaties." },
      { title: "Controleren", text: "We houden kwaliteit, privacy en gebruiksgemak in beeld." }
    ],
    faqs: [
      {
        question: "Moet mijn team technisch zijn?",
        answer:
          "Nee. We maken het praktisch en leggen uit wat je moet weten om ermee te werken."
      },
      {
        question: "Kan AI fouten maken?",
        answer:
          "Ja. Daarom bouwen we controlepunten in en gebruiken we AI vooral waar fouten geen groot risico vormen."
      },
      {
        question: "Beginnen jullie groot of klein?",
        answer:
          "Meestal klein. Een eerste nuttige automatisering is beter dan een groot systeem dat niemand gebruikt."
      }
    ]
  },
  "strategic-consulting": {
    eyebrow: "Strategisch advies",
    title: "Maak betere keuzes voor je website, vindbaarheid en online groei",
    description:
      "We helpen je bepalen wat nu echt belangrijk is. Geen lange theorie, maar scherpe keuzes die passen bij je bedrijf, klanten en budget.",
    primaryCta: "Plan een vrijblijvend gesprek",
    secondaryCta: "Bekijk diensten",
    heroPoints: [
      "Duidelijke prioriteiten",
      "Eerlijke blik op wat werkt",
      "Advies dat je ook echt kunt uitvoeren"
    ],
    sections: [
      {
        title: "Wanneer advies helpt",
        text:
          "Soms is het probleem niet dat er te weinig wordt gedaan, maar dat niemand zeker weet wat de juiste volgende stap is.",
        items: [
          {
            title: "Je website voelt verouderd",
            text:
              "We bepalen of verbeteren genoeg is of dat opnieuw bouwen verstandiger is."
          },
          {
            title: "Marketing levert te weinig op",
            text:
              "We kijken naar zichtbaarheid, boodschap, conversie en opvolging van aanvragen."
          },
          {
            title: "Je wilt groeien maar mist focus",
            text:
              "We brengen kansen terug naar een overzichtelijke volgorde."
          }
        ]
      },
      {
        title: "Wat je krijgt",
        text:
          "Een duidelijk beeld van wat je website en online aanpak tegenhoudt, plus welke acties het meeste effect kunnen hebben.",
        items: [
          {
            title: "Website- en groeiscan",
            text:
              "We bekijken pagina's, aanbod, vertrouwen, vindbaarheid en contactroute."
          },
          {
            title: "Prioriteitenlijst",
            text:
              "Je ziet wat belangrijk is, wat later kan en wat je beter niet hoeft te doen."
          },
          {
            title: "Uitvoerbaar plan",
            text:
              "We maken de vervolgstappen klein genoeg om echt in beweging te komen."
          }
        ]
      }
    ],
    detailSections: [
      {
        eyebrow: "Besluitvorming",
        title: "Hoe je voorkomt dat online groei een lijst losse acties wordt",
        text:
          "Strategisch advies helpt vooral wanneer er veel mogelijke verbeteringen zijn. Niet alles hoeft tegelijk. Door eerst impact, urgentie en afhankelijkheden te bepalen, ontstaat een volgorde die rust geeft.",
        items: [
          {
            title: "Eerst blokkades vinden",
            text:
              "Soms ligt de grootste winst niet in meer verkeer, maar in duidelijkere copy, betere bewijsvoering of een kortere contactroute."
          },
          {
            title: "Daarna pas kanalen kiezen",
            text:
              "SEO, advertenties, AI-vindbaarheid en automatisering werken beter wanneer de websitebasis klopt."
          },
          {
            title: "Klein genoeg om uit te voeren",
            text:
              "Een goed plan vertaalt ambitie naar concrete pagina's, verbeteringen en meetpunten die echt opgepakt worden."
          }
        ]
      }
    ],
    steps: [
      { title: "Kennismaken", text: "We bespreken doelen, doelgroep en zorgen." },
      { title: "Analyseren", text: "We bekijken je website en online basis." },
      { title: "Kiezen", text: "We bepalen samen de slimste volgorde." },
      { title: "Uitvoeren", text: "We helpen waar nodig met bouw, SEO of content." }
    ],
    faqs: [
      {
        question: "Is een gesprek verplicht tot samenwerking?",
        answer:
          "Nee. Het eerste gesprek is bedoeld om helderheid te geven."
      },
      {
        question: "Krijg ik eerlijk advies?",
        answer:
          "Ja. Als een kleine verbetering genoeg is, zeggen we dat."
      },
      {
        question: "Kunnen jullie daarna ook uitvoeren?",
        answer:
          "Ja. Als de richting klopt, kunnen we de website, content of SEO zelf oppakken."
      }
    ]
  }
} satisfies Record<string, PageContent>;

export const aboutPage = {
  eyebrow: "Over MagisData",
  title: "Digitale groei begrijpelijk maken voor ondernemers",
  description:
    "MagisData bouwt websites en groeisystemen voor bedrijven die online sterker willen staan, zonder verdwalen in technische taal.",
  primaryCta: "Maak kennis",
  secondaryCta: "Bekijk diensten",
  heroPoints: [
    "Rustige strategie",
    "Duidelijke communicatie",
    "Gebouwd voor langdurige groei"
  ],
  sections: [
    {
      title: "Waarom we bestaan",
      text:
        "Veel ondernemers weten dat hun website belangrijk is, maar krijgen te vaak vage adviezen, losse tools en technische woorden. Wij maken online groei overzichtelijk.",
      items: [
        {
          title: "Eerst begrijpen, dan bouwen",
          text:
            "We starten bij je bedrijf, klanten en doelen. Daarna pas kiezen we techniek, pagina's en campagnes."
        },
        {
          title: "Geen hype, wel vooruitdenken",
          text:
            "AI, SEO en automatisering zijn nuttig wanneer ze je klant beter helpen of je bedrijf slimmer laten werken."
        },
        {
          title: "Premium zonder afstand",
          text:
            "Het resultaat moet professioneel voelen, maar de samenwerking moet gewoon helder en prettig blijven."
        }
      ]
    },
    {
      title: "Hoe we denken",
      text:
        "Een website is geen online folder. Het is een plek waar vertrouwen, uitleg, bewijs en contact samenkomen.",
      items: [
        {
          title: "Duidelijkheid wint",
          text:
            "Mensen kiezen sneller wanneer ze begrijpen wat je doet en wat de volgende stap is."
        },
        {
          title: "Structuur bouwt vertrouwen",
          text:
            "Goede pagina's, sterke koppen en bewijs maken je bedrijf makkelijker te beoordelen."
        },
        {
          title: "Groei vraagt onderhoud",
          text:
            "Na livegang blijf je meten, aanscherpen en uitbreiden op basis van echte vragen en cijfers."
        }
      ]
    }
  ],
  steps: [
    { title: "Luisteren", text: "We leren je bedrijf en klanten kennen." },
    { title: "Versimpelen", text: "We maken de boodschap helder." },
    { title: "Bouwen", text: "We vertalen strategie naar pagina's en systemen." },
    { title: "Verbeteren", text: "We blijven kijken waar meer resultaat mogelijk is." }
  ],
  faqs: [
    {
      question: "Werken jullie alleen voor technische bedrijven?",
      answer:
        "Nee. Juist niet-technische ondernemers helpen we met duidelijke uitleg en praktische keuzes."
    },
    {
      question: "Is MagisData een klassiek webbureau?",
      answer:
        "We bouwen websites, maar denken breder: vindbaarheid, vertrouwen, conversie en toekomstbestendige content."
    },
    {
      question: "Kunnen we klein beginnen?",
      answer:
        "Ja. Een goede eerste stap is vaak een scan, verbeterplan of compacte websitebasis."
    }
  ]
} satisfies PageContent;

export const contactPage = {
  eyebrow: "Contact",
  title: "Vertel kort waar je vastloopt, dan denken we mee",
  description:
    "Wil je meer aanvragen, een betere website of duidelijkheid over SEO en AI-vindbaarheid? Plan een gesprek. We houden het praktisch en begrijpelijk.",
  primaryCta: "Mail MagisData",
  secondaryCta: "Bekijk diensten",
  heroPoints: [
    "Gratis eerste gesprek",
    "Binnen 24 uur reactie",
    "Geen technische voorbereiding nodig"
  ],
  sections: [
    {
      title: "Waar je ons voor kunt benaderen",
      text:
        "Je hoeft geen complete briefing te hebben. Een korte uitleg van je situatie is genoeg om samen te starten.",
      items: [
        {
          title: "Nieuwe website",
          text:
            "Als je huidige website verouderd voelt of te weinig aanvragen oplevert."
        },
        {
          title: "Meer vindbaarheid",
          text:
            "Als je beter gevonden wilt worden in Google, AI-zoekmachines of lokale zoekresultaten."
        },
        {
          title: "Meer grip op online groei",
          text:
            "Als je wilt weten welke stap nu het meeste effect heeft."
        }
      ]
    }
  ],
  steps: [
    { title: "Stuur bericht", text: "Leg kort uit wat je wilt verbeteren." },
    { title: "We reageren", text: "Je krijgt snel een praktische reactie." },
    { title: "We plannen gesprek", text: "We bespreken doelen, kansen en twijfels." },
    { title: "Je krijgt richting", text: "Je weet welke volgende stap logisch is." }
  ],
  faqs: [
    {
      question: "Moet ik al precies weten wat ik nodig heb?",
      answer:
        "Nee. Dat zoeken we samen uit in gewone taal."
    },
    {
      question: "Kost het eerste gesprek iets?",
      answer:
        "Nee. Het eerste gesprek is gratis en bedoeld om te kijken of we kunnen helpen."
    },
    {
      question: "Hoe snel krijg ik reactie?",
      answer:
        "Meestal binnen een werkdag."
    }
  ]
} satisfies PageContent;

export const caseStudies = [
  {
    slug: "website-design-hoveniersbedrijf",
    projectName: "BuitenLijn",
    category: "Website design",
    sector: "Hoveniersbedrijf",
    title: "Website design voor een hoveniersbedrijf dat rust en vakmanschap uitstraalt",
    metaTitle: "Website design hoveniersbedrijf | MagisData",
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    summary:
      "Een premium homepageconcept voor een hoveniersbedrijf, opgebouwd rond lokale diensten, projecten, vertrouwen en een heldere adviesaanvraag.",
    focus: "Lokale vindbaarheid en adviesaanvraag",
    image: "/assets/Case1.png",
    imageWidth: 1122,
    imageHeight: 1402,
    imageAlt: "Website design concept voor BuitenLijn hoveniersbedrijf met tuinprojecten en adviesaanvraag",
    audience: "Particulieren en bedrijven die een tuin willen laten ontwerpen, aanleggen of onderhouden in Utrecht en omgeving.",
    challenge:
      "Een hovenier verkoopt geen losse dienst, maar vertrouwen in een buitenruimte die jarenlang klopt. De pagina moet sfeer tonen en tegelijk snel antwoord geven op diensten, regio en vervolgstap.",
    objective:
      "Een rustige merkervaring ontwerpen die bezoekers van inspiratie naar een vrijblijvende adviesaanvraag begeleidt.",
    approach: [
      {
        title: "Natuurlijke positionering",
        text: "De hero koppelt tuinontwerp direct aan woonkwaliteit. Aardse kleuren, serif typografie en projectfotografie ondersteunen de hoogwaardige, persoonlijke uitstraling."
      },
      {
        title: "Diensten direct vindbaar",
        text: "Tuinontwerp, aanleg, onderhoud, bestrating en overkappingen staan vroeg op de pagina als duidelijke routes voor bezoeker en zoekmachine."
      },
      {
        title: "Bewijs als ontwerpstructuur",
        text: "Projectkaarten, werkwijze, transformatieblok en vragensectie laten zien waar echte projectfoto's en controleerbare referenties later overtuigend kunnen landen."
      }
    ],
    seoDecisions: [
      {
        title: "Lokale zoekintentie",
        text: "Koppen en dienstclusters zijn ingericht op termen zoals tuinontwerp, tuinaanleg en tuinonderhoud gecombineerd met regio."
      },
      {
        title: "Antwoordbare content",
        text: "FAQ's en processtappen maken praktische vragen expliciet, geschikt voor organische zoekresultaten en AI-antwoorden."
      }
    ],
    conversionChoices: [
      "Primaire CTA voor vrijblijvend advies bovenaan en na de bewijsopbouw.",
      "Projecten dicht bij diensten om visuele interesse naar concrete aanvraagintentie te brengen.",
      "Contactgegevens en werkgebied zichtbaar voor lokale betrouwbaarheid."
    ],
    disclosure:
      "Dit is een website design concept van MagisData, geen gepubliceerd klantproject. Namen, beoordelingen en aantallen in de visual dienen uitsluitend als illustratieve content.",
    icon: LayoutTemplate
  },
  {
    slug: "website-design-dakbedrijf",
    projectName: "Dakbedrijf Hoogstad",
    category: "Website design",
    sector: "Dakbedrijf",
    title: "Website design voor een dakbedrijf met focus op urgentie en vertrouwen",
    metaTitle: "Website design dakbedrijf | MagisData",
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    summary:
      "Een servicegericht websiteconcept voor dakrenovatie, lekkageherstel en isolatie, met duidelijke routes naar inspectie en offerte.",
    focus: "Lokale service-intentie en offerte",
    image: "/assets/Case2.png",
    imageWidth: 1086,
    imageHeight: 1448,
    imageAlt: "Website design concept voor Dakbedrijf Hoogstad met dakrenovatie en offerteaanvraag",
    audience: "Huiseigenaren, VvE's en bedrijven die onderhoud, reparatie of verduurzaming van een dak zoeken.",
    challenge:
      "Dakwerk combineert spoedvragen met grote investeringsbeslissingen. Een bezoeker moet onmiddellijk diensten, werkgebied, aanpak en route naar hulp kunnen herkennen.",
    objective:
      "Een toegankelijke website ontwerpen die acute hulp en geplande renovatie binnen dezelfde heldere servicearchitectuur ondersteunt.",
    approach: [
      {
        title: "Dienstenstructuur voor beslissers",
        text: "Renovatie, isolatie, lekkage, dakgoten, bitumen en onderhoud krijgen scanbare serviceblokken met ruimte voor eigen detailpagina's."
      },
      {
        title: "Voor en na als visueel argument",
        text: "Het hero-ontwerp toont de transformatie die dakwerk tastbaar maakt, zonder dat bezoekers eerst technische specificaties hoeven te begrijpen."
      },
      {
        title: "Proces reduceert twijfel",
        text: "Inspectie, advies, uitvoering en oplevering zijn als vaste route zichtbaar, zodat offerteaanvragers weten wat volgt."
      }
    ],
    seoDecisions: [
      {
        title: "Dienst plus locatie",
        text: "De pagina is opgezet voor lokale zoekvragen rond dakrenovatie, dakisolatie en daklekkage in een werkgebied."
      },
      {
        title: "Informatieve dekking",
        text: "Projecttypen, procesinformatie en veelgestelde vragen bieden context voor orienterende en urgente zoekintenties."
      }
    ],
    conversionChoices: [
      "Offerteknop prominent in navigatie en hero voor bezoekers met directe behoefte.",
      "Diensten en projecten ondersteunen vergelijking voor bezoekers die nog orienteren.",
      "Proces en contactinformatie verminderen onzekerheid voor grotere werkzaamheden."
    ],
    disclosure:
      "Dit is een website design concept van MagisData, geen gepubliceerd klantproject. Namen, beoordelingen en aantallen in de visual dienen uitsluitend als illustratieve content.",
    icon: Wrench
  },
  {
    slug: "website-design-social-growth-platform",
    projectName: "OrbitFlow",
    category: "Website design",
    sector: "Social media platform",
    title: "Website design voor een social growth platform met productfocus",
    metaTitle: "Website design social platform | MagisData",
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    summary:
      "Een SaaS-homepageconcept dat agency-expertise, platformfuncties en demo-conversie samenbrengt in een helder productverhaal.",
    focus: "Productuitleg en demo-intentie",
    image: "/assets/Case3.png",
    imageWidth: 935,
    imageHeight: 1683,
    imageAlt: "Website design concept voor OrbitFlow social growth platform met dashboardmodules",
    audience: "Marketingteams en merken die social content, creator-samenwerking en performance-inzicht willen centraliseren.",
    challenge:
      "Een platform met meerdere modules voelt snel complex. Het ontwerp moet in enkele seconden tonen wat het systeem doet, voor wie het is en waarom een demo logisch is.",
    objective:
      "Een productgerichte homepage ontwerpen waarin functionaliteit, workflow en commerciele route samen leesbaar blijven.",
    approach: [
      {
        title: "Platform in de hero",
        text: "Productmodules zweven rond een centraal device zodat content, planning, creators en attributie meteen als samenhangend systeem worden begrepen."
      },
      {
        title: "Functies vertaald naar taken",
        text: "Zes modulekaarten benoemen herkenbare werkzaamheden: content maken, hooks analyseren, creators beheren, plannen, testen en rapporteren."
      },
      {
        title: "Demo-route op beslismomenten",
        text: "Een ontwerp-caseblok, workflow, dashboard-preview en pakketkeuzes bouwen naar de primaire demoactie toe."
      }
    ],
    seoDecisions: [
      {
        title: "Categorie en features",
        text: "De inhoud verbindt social growth platform, content planning, creator CRM en attributie in expliciete secties."
      },
      {
        title: "AI-leesbare productarchitectuur",
        text: "Modulekoppen en workflowstappen geven antwoordmachines afgebakende passages om productfunctie en doelgroep te interpreteren."
      }
    ],
    conversionChoices: [
      "Demoactie blijft dominant in hero, caseblok en slot-CTA.",
      "Dashboardbeeld maakt abstracte softwarecapaciteit concreet voor een zakelijke koper.",
      "Pakketvergelijking ondersteunt bezoekers die al een aankoopmodel afwegen."
    ],
    disclosure:
      "Dit is een website design concept van MagisData, geen gepubliceerd klantproject of bestaand softwareplatform. Logo's, testimonials en prestatiecijfers in de visual zijn illustratief.",
    icon: Bot
  },
  {
    slug: "website-design-it-consultancy",
    projectName: "Nexora IT Solutions",
    category: "Website design",
    sector: "IT consultancy",
    title: "Website design voor een IT consultancy met technische autoriteit",
    metaTitle: "Website design IT consultancy | MagisData",
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    summary:
      "Een zakelijke websiteconcept voor software, cloud, cybersecurity en data & AI, gericht op heldere expertise en projectintake.",
    focus: "Expertisepositionering en projectaanvraag",
    image: "/assets/Case4.png",
    imageWidth: 748,
    imageHeight: 2103,
    imageAlt: "Website design concept voor Nexora IT Solutions met software- en cloudoplossingen",
    audience: "Organisaties die een technische partner zoeken voor softwareontwikkeling, cloud, cybersecurity of data en AI.",
    challenge:
      "IT-dienstverlening vraagt om technische geloofwaardigheid zonder een onleesbare lijst capabilities. Zakelijke beslissers moeten snel zien welke expertise past bij hun project.",
    objective:
      "Een heldere authority-site ontwerpen die complexe technologie omzet in herkenbare oplossingsroutes en een concrete intakeactie.",
    approach: [
      {
        title: "Autoriteit met overzicht",
        text: "De hero zet intelligente technologie naast echte bedrijfsimpact; vier kernoplossingen maken expertise direct navigeerbaar."
      },
      {
        title: "Techniek krijgt context",
        text: "Technologielogo's, procesfasen en ontworpen projectkaarten tonen hoe capability, aanpak en toepassing bij elkaar horen."
      },
      {
        title: "Enterprise CTA-hierarchie",
        text: "Start een project blijft primair; oplossingen en cases bieden verdieping voor stakeholders die eerst willen valideren."
      }
    ],
    seoDecisions: [
      {
        title: "Service-entiteiten",
        text: "Softwareontwikkeling, cloud engineering, cybersecurity en data & AI krijgen afzonderlijke semantische ankers voor zoekmachines."
      },
      {
        title: "Citeerbare expertise",
        text: "Proces- en oplossingssecties zijn zo opgezet dat latere inhoud concrete definities, methodes en FAQ-antwoorden kan dragen."
      }
    ],
    conversionChoices: [
      "Projectintake staat direct bovenaan voor bezoekers met concrete behoefte.",
      "Oplossingskaarten laten verschillende stakeholders snel hun ingang vinden.",
      "Processectie maakt samenwerking voorspelbaar voordat contact wordt gevraagd."
    ],
    disclosure:
      "Dit is een website design concept van MagisData, geen gepubliceerd klantproject. Merken, testimonials en resultaten in de visual zijn illustratieve onderdelen van het ontwerp.",
    icon: BrainCircuit
  }
];

export const insights = [
  {
    slug: "website-meer-aanvragen",
    title: "Waarom je website weinig aanvragen krijgt, ook als hij er mooi uitziet",
    summary:
      "Een mooie website werkt pas goed als bezoekers snel begrijpen wat je doet, waarom ze jou kunnen vertrouwen en welke stap ze moeten zetten.",
    datePublished: "2026-05-16",
    dateModified: "2026-05-16",
    icon: LayoutTemplate
  },
  {
    slug: "seo-zonder-jargon",
    title: "SEO zonder jargon: wat moet een ondernemer echt weten?",
    summary:
      "SEO draait niet om trucjes. Het gaat om duidelijke pagina's, echte klantvragen en een website die zoekmachines goed kunnen lezen.",
    datePublished: "2026-05-16",
    dateModified: "2026-05-16",
    icon: Search
  },
  {
    slug: "ai-vindbaarheid",
    title: "AI-vindbaarheid: waarom duidelijke uitleg belangrijker wordt",
    summary:
      "AI-systemen begrijpen bedrijven beter wanneer websites concreet, consistent en goed gestructureerd zijn.",
    datePublished: "2026-05-16",
    dateModified: "2026-05-16",
    icon: Bot
  }
];

export const pageIcons = {
  services: Compass,
  "web-development": LayoutTemplate,
  "seo-services": Search,
  "geo-optimization": BrainCircuit,
  "aeo-optimization": FileQuestion,
  "ai-infrastructure": Bot,
  "strategic-consulting": Target,
  about: Sparkles,
  contact: MessageSquareText,
  default: CheckCircle2,
  tool: Wrench,
  globe: Globe2
};
