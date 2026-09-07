import { MailCheck, Network, Gauge } from "lucide-react";

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

export const systems = [
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

export const skills = [
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
