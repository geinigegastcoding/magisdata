import {
  BadgeCheck,
  Building2,
  ChartBarIncreasing,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Search,
  Smile,
  Sparkles,
  Target,
  TrendingUp
} from "lucide-react";

export const trustLogos = ["SAASCO", "ProLine", "Elevion", "Nexora", "Verity", "BrightCare"];

export const services = [
  {
    title: "Vindbaarheid in Google",
    description:
      "We zorgen dat klanten je bedrijf sneller vinden wanneer ze zoeken naar jouw dienst.",
    href: "/seo-bureau",
    icon: Search,
    color: "text-blue bg-blue-soft"
  },
  {
    title: "Websites",
    description:
      "Professionele websites die vertrouwen geven en bezoekers helpen om contact op te nemen.",
    href: "/web-development",
    icon: MonitorSmartphone,
    color: "text-green bg-green-soft"
  },
  {
    title: "Google Ads",
    description:
      "Gerichte advertenties voor mensen die nu zoeken naar wat jij aanbiedt.",
    href: "/online-marketing-bureau",
    icon: Megaphone,
    color: "text-yellow bg-yellow-soft"
  },
  {
    title: "Meer aanvragen",
    description:
      "We verbeteren je pagina's, teksten en knoppen zodat meer bezoekers klant worden.",
    href: "/conversie-optimalisatie",
    icon: ChartBarIncreasing,
    color: "text-purple bg-purple-soft"
  },
  {
    title: "Online advies",
    description:
      "Een duidelijk plan voor je website, Google en advertenties.",
    href: "/strategic-consulting",
    icon: HeartHandshake,
    color: "text-pink bg-pink-soft"
  }
];

export const processSteps = [
  {
    title: "Ontdekken",
    text: "We leren jouw bedrijf, doelgroep en doelen kennen.",
    icon: Search,
    color: "text-blue bg-blue-soft"
  },
  {
    title: "Plan maken",
    text: "We bepalen wat het meeste resultaat kan opleveren.",
    icon: Target,
    color: "text-green bg-green-soft"
  },
  {
    title: "Bouwen",
    text: "We maken de website, content en campagnes klaar.",
    icon: PenTool,
    color: "text-yellow bg-yellow-soft"
  },
  {
    title: "Lanceren",
    text: "We zetten alles live en controleren of het goed werkt.",
    icon: Rocket,
    color: "text-purple bg-purple-soft"
  },
  {
    title: "Groeien",
    text: "We meten, verbeteren en blijven optimaliseren.",
    icon: ChartBarIncreasing,
    color: "text-pink bg-pink-soft"
  }
];

export const metrics = [
  { value: "1", label: "Vast aanspreekpunt", icon: BadgeCheck, color: "text-blue bg-blue-soft" },
  { value: "5", label: "Heldere stappen", icon: Smile, color: "text-green bg-green-soft" },
  { value: "24u", label: "Reactie op werkdagen", icon: Building2, color: "text-blue bg-blue-soft" },
  { value: "Geen", label: "Vage beloftes", icon: TrendingUp, color: "text-yellow bg-yellow-soft" }
];

export const insights = [
  "Beter gevonden worden in Google als lokaal bedrijf",
  "5 simpele tips voor meer aanvragen via je website",
  "Waarom een snelle website meer klanten oplevert"
];

export const heroTrust = [
  "Persoonlijk & betrokken",
  "Heldere aanpak",
  "Meetbaar resultaat"
];

export const heroStats = [
  { label: "Meer aanvragen", value: "Stap voor stap", note: "" },
  { label: "Beter gevonden", value: "In Google", note: "Duidelijk plan, geen omweg" },
  { label: "Klanten beoordelen ons", value: "4,9/5", note: "*****" }
];

export const AdviceIcon = Lightbulb;
