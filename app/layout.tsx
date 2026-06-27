import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    icon: [
      {
        url: "/assets/logo-icon.png",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "/assets/logo-icon.png",
        type: "image/png"
      }
    ]
  },
  title: {
    default: "MagisData | Websites, SEO en online groei voor ambitieuze bedrijven",
    template: "%s | MagisData"
  },
  description:
    "MagisData bouwt snelle, duidelijke websites en helpt bedrijven groeien met SEO, online marketing en conversie optimalisatie.",
  keywords: [
    "MagisData",
    "webbureau Nederland",
    "websites laten maken",
    "SEO bureau",
    "online groei",
    "conversie optimalisatie",
    "online marketing bureau"
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://magisdata.nl",
    siteName: "MagisData",
    title: "MagisData | Websites, SEO en online groei voor ambitieuze bedrijven",
    description:
      "Snelle websites, SEO en online marketing voor bedrijven die meer klanten online willen."
  },
  twitter: {
    card: "summary_large_image",
    title: "MagisData | Websites, SEO en online groei",
    description:
      "MagisData helpt ambitieuze bedrijven met websites, vindbaarheid en conversie."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF9ED"
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" data-scroll-behavior="smooth" className={inter.variable}>
      <body>
        <Script id="consent-default" strategy="beforeInteractive">
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
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-H6G8TMGDWY" 
          strategy="beforeInteractive" 
        />
        <Script id="ga-config" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H6G8TMGDWY');
          `}
        </Script>
        <JsonLd data={graphSchema([organizationSchema(), personSchema(), localBusinessSchema(), websiteSchema()])} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ConsentManager />
      </body>
    </html>
  );
}
