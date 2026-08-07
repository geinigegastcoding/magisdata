import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    images: [{ url: "/assets/magisdata-hero.png", width: 2400, height: 1350, alt: "Blauw-wit beeld van MagisData" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MagisData | AI-systemen voor ondernemers",
    description: "Onderzoek, bouw en gebruik AI-systemen die handwerk uit je bedrijf halen.",
    images: ["/assets/magisdata-hero.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F3F5FF"
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: false
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" data-scroll-behavior="smooth" className={inter.variable}>
      <body>
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
        <GoogleAnalytics gaId="G-H6G8TMGDWY" />
        <JsonLd data={graphSchema([organizationSchema(), personSchema(), localBusinessSchema(), websiteSchema()])} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ConsentManager />
      </body>
    </html>
  );
}
