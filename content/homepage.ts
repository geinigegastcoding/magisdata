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
    title: "SEO",
    description:
      "SEO bureau hulp voor betere vindbaarheid in Google, lokale zoekresultaten en AI-antwoorden.",
    href: "/seo-bureau",
    icon: Search,
    color: "text-blue bg-blue-soft"
  },
  {
    title: "Websites",
    description:
      "Snelle, duidelijke websites die vertrouwen geven en bezoekers omzetten in aanvragen.",
    href: "/web-development",
    icon: MonitorSmartphone,
    color: "text-green bg-green-soft"
  },
  {
    title: "SEA & Ads",
    description:
      "Online marketing bureau ondersteuning voor campagnes, strategie en meetbare groei.",
    href: "/online-marketing-bureau",
    icon: Megaphone,
    color: "text-yellow bg-yellow-soft"
  },
  {
    title: "Conversie optimalisatie",
    description:
      "Meer aanvragen uit je bestaande website met betere pagina's, CTA's en bewijs.",
    href: "/conversie-optimalisatie",
    icon: ChartBarIncreasing,
    color: "text-purple bg-purple-soft"
  },
  {
    title: "Strategisch advies",
    description:
      "Praktisch advies waarmee je betere keuzes maakt voor online groei.",
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
    title: "Strategie",
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
  { value: "250+", label: "Succesvolle projecten", icon: BadgeCheck, color: "text-blue bg-blue-soft" },
  { value: "98%", label: "Klanttevredenheid", icon: Smile, color: "text-green bg-green-soft" },
  { value: "40+", label: "Branches geholpen", icon: Building2, color: "text-blue bg-blue-soft" },
  { value: "10x+", label: "Gemiddelde ROI-stijging", icon: TrendingUp, color: "text-yellow bg-yellow-soft" }
];

export const insights = [
  "SEO in 2026: wat werkt voor lokale bedrijven",
  "5 simpele tips voor meer aanvragen via je website",
  "Waarom een snelle website meer klanten oplevert"
];

export const heroTrust = [
  "Persoonlijk & betrokken",
  "Heldere aanpak",
  "Meetbaar resultaat"
];

export const heroStats = [
  { label: "Nieuwe aanvragen", value: "+127%", note: "" },
  { label: "Website bezoekers", value: "8.642", note: "+48% vs vorige maand" },
  { label: "Klanten beoordelen ons", value: "4,9/5", note: "*****" }
];

export const AdviceIcon = Lightbulb;
