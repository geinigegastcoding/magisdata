import { sitemapRoutes } from "@/content/seo";
import { lastModified, siteEmail, sitePhone, siteUrl } from "@/schemas/seo";

export const dynamic = "force-static";

export function GET() {
  return new Response(
    [
      "# MagisData",
      "",
      "> MagisData is een Nederlands website en SEO bureau dat snelle websites bouwt en ondernemers helpt groeien met lokale SEO, AEO, GEO, AI-vindbaarheid, conversie optimalisatie en praktische AI-automatisering.",
      "",
      "## Context",
      "",
      "- Taal: Nederlands",
      "- Markt: Nederland",
      "- Doelgroep: ondernemers, dienstverleners, adviseurs en groeiende teams",
      "- Kernwaarde: duidelijke strategie, webontwikkeling, SEO diensten, AI-vindbaarheid, vertrouwen en heldere contactroutes",
      "- E-mail: " + siteEmail,
      "- Telefoon: " + sitePhone,
      "- Locatie: Suze Groenewegerf 25, Voorschoten",
      "- Laatst bijgewerkt: " + lastModified,
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
      "MagisData is een Nederlands bureau voor webontwikkeling, onderhoud, SEO, AEO, GEO en praktische AI-automatisering. Het bedrijf helpt ondernemers online duidelijker en beter vindbaar te worden. De toon is rustig, strategisch, nuchter en premium."
    ].join("\n"),
    {
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    }
  );
}
