import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/json-ld";
import { ConsentManager } from "@/components/consent-manager";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { graphSchema, localBusinessSchema, organizationSchema, websiteSchema } from "@/schemas/seo";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-H6G8TMGDWY";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

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
    "SEA campagnes"
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={inter.variable}>
        <Script id="google-tag-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script
          async
          id="google-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <JsonLd data={graphSchema([organizationSchema(), localBusinessSchema(), websiteSchema()])} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ConsentManager />
      </body>
    </html>
  );
}
