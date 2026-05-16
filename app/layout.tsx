import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { graphSchema, localBusinessSchema, organizationSchema, websiteSchema } from "@/schemas/seo";
import "./globals.css";

const googleTagId = "G-ERY87MPVTM";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magisdata.nl"),
  applicationName: "MagisData",
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
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleTagId}');
          `}
        </Script>
        <JsonLd data={graphSchema([organizationSchema(), localBusinessSchema(), websiteSchema()])} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
