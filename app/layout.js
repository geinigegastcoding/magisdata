import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = "https://magisdata.nl";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "MagisData | Websites die vertrouwen winnen en aanvragen opleveren",
  description:
    "MagisData bouwt websites die je kwaliteit helder laten voelen, vertrouwen opbouwen en bezoekers makkelijker richting contact of aanvraag bewegen.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "MagisData",
    title: "MagisData | Websites die vertrouwen winnen en aanvragen opleveren",
    description:
      "MagisData bouwt websites die je kwaliteit helder laten voelen, vertrouwen opbouwen en bezoekers makkelijker richting contact of aanvraag bewegen.",
    images: [
      {
        url: "/after-image.webp",
        width: 1600,
        height: 699,
        alt: "Voorbeeld van een website redesign door MagisData",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MagisData | Websites die vertrouwen winnen en aanvragen opleveren",
    description:
      "MagisData bouwt websites die je kwaliteit helder laten voelen, vertrouwen opbouwen en bezoekers makkelijker richting contact of aanvraag bewegen.",
    images: ["/after-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
