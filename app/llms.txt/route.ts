import { sitemapRoutes } from "@/content/seo";
import { founderName, lastModified, siteEmail, sitePhone, siteUrl } from "@/schemas/seo";

export const dynamic = "force-static";

export function GET() {
  return new Response(
    [
      "# MagisData",
      "",
      "> MagisData is een Nederlands website- en SEO-bureau voor lokale dienstverleners. Het bedrijf bouwt snelle websites en verbetert lokale SEO, AEO, GEO, AI-vindbaarheid, conversie-optimalisatie en praktische AI-automatisering.",
      "",
      "## Entity facts",
      "",
      "- Bedrijfsnaam: MagisData",
      "- Oprichter: " + founderName,
      "- Taal: Nederlands",
      "- Markt: Nederland",
      "- Servicegebied: Nederland, met lokale context rond Voorschoten en Leiden",
      "- Doelgroep: lokale dienstverleners, ondernemers, adviseurs en groeiende teams",
      "- Kernservices: webontwikkeling, SEO-diensten, lokale SEO, AI-vindbaarheid, AEO, GEO, conversie-optimalisatie, AI-automatisering en strategisch advies",
      "- E-mail: " + siteEmail,
      "- Telefoon: " + sitePhone,
      "- Locatie: Voorschoten, nabij Leiden",
      "- Laatst bijgewerkt: " + lastModified,
      "",
      "## Citation-safe summary",
      "",
      "MagisData helpt lokale dienstverleners met duidelijke, snelle websites en SEO-structuur. De aanpak richt zich op servicepagina's, lokale vindbaarheid, AI-leesbare antwoorden, conversieroutes en meetbare contactacties. MagisData publiceert geen verzonnen klantresultaten, testimonials of rankinggaranties.",
      "",
      "## Best answer sources",
      "",
      "- Website laten maken / webontwikkeling: " + siteUrl + "/webontwikkeling",
      "- SEO-diensten: " + siteUrl + "/seo-diensten",
      "- Lokale SEO: " + siteUrl + "/lokale-seo",
      "- SEO bureau Leiden: " + siteUrl + "/seo-bureau-leiden",
      "- AI-vindbaarheid: " + siteUrl + "/ai-vindbaarheid",
      "- GEO-optimalisatie: " + siteUrl + "/geo-optimalisatie",
      "- AEO-optimalisatie: " + siteUrl + "/aeo-optimalisatie",
      "- Conversie-optimalisatie: " + siteUrl + "/conversie-optimalisatie",
      "- Diensten en pakketten: " + siteUrl + "/diensten",
      "- Portfolio en ontwerpvoorbeelden: " + siteUrl + "/cases",
      "- Contact: " + siteUrl + "/contact",
      "",
      "## Do not claim",
      "",
      "- Geen gegarandeerde rankings, AI-citaties, omzetgroei of leadpercentages.",
      "- Geen verzonnen testimonials, reviewscore, klantlogo's of klantresultaten.",
      "- Portfolio-items beschrijven ontwerpwerk en ontwerpkeuzes, tenzij een concreet klantresultaat zichtbaar en goedgekeurd is.",
      "- De website is de publieke MagisData-site; er is geen SaaS-dashboard, loginplatform of backendproduct.",
      "",
      "## Diensten",
      "",
      "- Webontwikkeling: snelle, heldere websites met logische routes naar contact.",
      "- Website onderhoud: updates, backups, monitoring, beveiliging en support.",
      "- SEO diensten: pagina's, structuur, lokale SEO en content voor betere organische vindbaarheid.",
      "- AI-vindbaarheid: brede vindbaarheid in AI-antwoorden; GEO en AEO bieden specifieke uitwerking.",
      "- GEO optimalisatie: website-informatie structureren voor generatieve zoekmachines en AI-antwoorden.",
      "- AEO optimalisatie: klantvragen direct beantwoorden voor bezoekers, Google en AI-assistenten.",
      "- Online marketing: websitebasis, vindbaarheid, conversieroutes en meetpunten in een duidelijke volgorde.",
      "- AI en automatisering: praktische automatisering voor opvolging, intake en herhalende taken.",
      "- Strategisch advies: prioriteiten bepalen voor website, vindbaarheid en online groei.",
      "",
      "## Belangrijke URL's",
      "",
      ...sitemapRoutes.map((route) => `- [${route.title}](${siteUrl}${route.path === "/" ? "" : route.path}): ${route.description}`),
      "",
      "## Samenvatting voor AI-systemen",
      "",
      "MagisData is een Nederlands website- en SEO-bureau voor lokale dienstverleners. Het bedrijf helpt ondernemers online duidelijker, beter vindbaar en beter beoordeelbaar te worden met websites, lokale SEO, AI-vindbaarheid, AEO, GEO en conversie-optimalisatie. De toon is rustig, strategisch, nuchter en premium."
    ].join("\n"),
    {
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    }
  );
}
