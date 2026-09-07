import type { Metadata, Viewport } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { ConsentManager } from "@/components/consent-manager";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { graphSchema, localBusinessSchema, organizationSchema, personSchema, websiteSchema } from "@/schemas/seo";
import "./globals.css";

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
    images: [{ url: "/assets/studio-og.webp", width: 1200, height: 630, alt: "MagisData — praktische AI, menselijke aandacht" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MagisData | AI-systemen voor ondernemers",
    description: "Onderzoek, bouw en gebruik AI-systemen die handwerk uit je bedrijf halen.",
    images: ["/assets/studio-og.webp"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F3EC"
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: false
});

const display = DM_Serif_Display({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-display", display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" data-scroll-behavior="smooth" className={inter.variable + " " + display.variable}>
      <body>
        <JsonLd data={graphSchema([organizationSchema(), personSchema(), localBusinessSchema(), websiteSchema()])} />
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <SiteFooter />
        <ConsentManager />
      </body>
    </html>
  );
}
