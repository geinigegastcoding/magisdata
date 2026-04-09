import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "MagisData | Websites die vertrouwen winnen en aanvragen opleveren",
  description:
    "MagisData bouwt websites die je kwaliteit helder laten voelen, vertrouwen opbouwen en bezoekers makkelijker richting contact of aanvraag bewegen.",
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
