import { serviceNavigation, site } from "@/lib/site";
import { caseStudies, insights } from "@/content/site-content";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    "# MagisData",
    "",
    "MagisData is een premium AI-gedreven webbureau en strategische digitale infrastructuurpartner uit Nederland.",
    "",
    "## Kerndiensten",
    ...serviceNavigation.map((service) => `- ${service.label}: ${site.url}${service.href}`),
    "",
    "## Belangrijke pagina's",
    `- Home: ${site.url}`,
    `- Diensten: ${site.url}/services`,
    `- Over ons: ${site.url}/about`,
    `- Contact: ${site.url}/contact`,
    "",
    "## Inzichten",
    ...insights.map((post) => `- ${post.title}: ${site.url}/insights/${post.slug}`),
    "",
    "## Cases",
    ...caseStudies.map((study) => `- ${study.title}: ${site.url}/case-studies/${study.slug}`),
    "",
    "## Contact",
    `E-mail: ${site.email}`
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600"
    }
  });
}
