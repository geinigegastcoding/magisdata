import type { Metadata, Viewport } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { ConsentManager } from "@/components/consent-manager";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { graphSchema, localBusinessSchema, organizationSchema, personSchema, websiteSchema } from "@/schemas/seo";
import "./globals.css";
import "./redesign.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://magisdata.nl"),
  applicationName: "MagisData",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  },
  title: {
    default: "MagisData | AI-systemen voor ondernemers",
    template: "%s | MagisData"
  },
  description:
    "MagisData onderzoekt waar AI je tijd teruggeeft en bouwt AI-systemen voor e-mail, leads, rapportages, kennis en terugkerend werk.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://magisdata.nl",
    siteName: "MagisData",
    title: "MagisData | AI-systemen voor ondernemers",
    description: "Onderzoek, bouw en gebruik AI-systemen die handwerk uit je bedrijf halen.",
    images: [{ url: "/assets/redesign/social-cover.png", width: 1200, height: 630, alt: "MagisData — AI aan het werk. Jij aan het roer." }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MagisData | AI-systemen voor ondernemers",
    description: "Onderzoek, bouw en gebruik AI-systemen die handwerk uit je bedrijf halen.",
    images: ["/assets/redesign/social-cover.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f2ec"
};

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-mono", preload: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" data-scroll-behavior="smooth" className={`${manrope.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={graphSchema([organizationSchema(), personSchema(), localBusinessSchema(), websiteSchema()])} />
        <SiteHeader />
        <div id="page-content" tabIndex={-1}>{children}</div>
        <SiteFooter />
        <ConsentManager />
      </body>
    </html>
  );
}
