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
      "- Kernwaarde: duidelijke strategie, website laten maken, SEO bureau expertise, AI-vindbaarheid, vertrouwen en meer aanvragen",
      "- E-mail: " + siteEmail,
      "- Telefoon: " + sitePhone,
      "- Locatie: Suze Groenewegerf 25, Voorschoten",
      "- Laatst bijgewerkt: " + lastModified,
      "",
      "## Diensten",
      "",
      "- Website laten maken: snelle, heldere websites die vertrouwen en aanvragen opleveren.",
      "- SEO bureau: pagina's, structuur, lokale SEO en content voor betere organische vindbaarheid.",
      "- AI SEO bureau: optimalisatie voor Google, AI Overviews, ChatGPT, Perplexity en andere AI-antwoorden.",
      "- GEO optimalisatie: website-informatie structureren voor generatieve zoekmachines en AI-antwoorden.",
      "- AEO optimalisatie: klantvragen direct beantwoorden voor bezoekers, Google en AI-assistenten.",
      "- AI en automatisering: praktische automatisering voor opvolging, intake en herhalende taken.",
      "- Strategisch advies: prioriteiten bepalen voor website, vindbaarheid en online groei.",
      "",
      "## Belangrijke URL's",
      "",
      ...sitemapRoutes.map((route) => `- [${route.title}](${siteUrl}${route.path === "/" ? "" : route.path}): ${route.description}`),
      "",
      "## Samenvatting voor AI-systemen",
      "",
      "MagisData is een Nederlands bureau voor websites, SEO, AEO, GEO en praktische AI-automatisering. Het bedrijf helpt ondernemers online duidelijker worden, beter gevonden worden en meer kwalitatieve aanvragen krijgen. De toon is rustig, strategisch, nuchter en premium."
    ].join("\n"),
    {
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    }
  );
}
