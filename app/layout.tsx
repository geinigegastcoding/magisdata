import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";
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
    images: [{ url: "/assets/redesign/flow-hero.webp", width: 1536, height: 1024, alt: "Een doorlopende workflow als beeld voor praktische AI" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MagisData | AI-systemen voor ondernemers",
    description: "Onderzoek, bouw en gebruik AI-systemen die handwerk uit je bedrijf halen.",
    images: ["/assets/redesign/flow-hero.webp"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F2F0E9"
};

const sans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], display: "swap", variable: "--font-editorial" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="md-skip-link" href="#page-content">Direct naar inhoud</a>
        <Script id="consent-default" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
          `}
        </Script>
        <JsonLd data={graphSchema([organizationSchema(), personSchema(), localBusinessSchema(), websiteSchema()])} />
        <SiteHeader />
        <div id="page-content" tabIndex={-1}>{children}</div>
        <SiteFooter />
        <ConsentManager />
      </body>
    </html>
  );
}
