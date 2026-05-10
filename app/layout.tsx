import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: "MagisData | Strategische digitale infrastructuur",
    template: "%s | MagisData"
  },
  description: site.description,
  alternates: {
    canonical: "/"
  },
  keywords: [
    "MagisData",
    "strategische digitale infrastructuur",
    "AI webbureau",
    "SEO diensten",
    "GEO optimalisatie",
    "AEO optimalisatie",
    "AI automatisering",
    "premium webontwikkeling",
    "conversie optimalisatie"
  ],
  verification: {
    other: {
      "msvalidate.01": "B2C93D86012D3C8062C2DACAF8765712"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: site.name,
    title: "MagisData | Strategische digitale infrastructuur",
    description: site.description,
    images: [
      {
        url: "/assets/hero-dashboard.webp",
        width: 1400,
        height: 933,
        alt: "Premium digitaal dashboard op een donkere laptop"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MagisData | Strategische digitale infrastructuur",
    description: site.description,
    images: ["/assets/hero-dashboard.webp"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0D10"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ERY87MPVTM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ERY87MPVTM');
          `}
        </Script>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
