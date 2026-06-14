import fs from "node:fs/promises";
import path from "node:path";

const root = new URL(".", import.meta.url);
const routesDir = new URL("routes/", root);

const branches = [
  "kappers",
  "loodgieters",
  "elektriciens",
  "hoveniers",
  "dakdekkers",
  "schilders",
  "stukadoors",
  "schoonheidssalons",
  "fysiotherapeuten",
  "rijscholen",
  "restaurants",
  "tandartspraktijken",
  "makelaars",
  "boekhouders",
  "coaches",
  "personal-trainers",
  "klusbedrijven",
  "installateurs",
  "fotografen",
  "advocatenkantoren"
];

const primaryPlaces = ["voorschoten", "leiden", "wassenaar", "oegstgeest", "leiderdorp", "katwijk"];

const allPlaces = [
  ...primaryPlaces,
  "noordwijk",
  "leidschendam",
  "voorburg",
  "den-haag",
  "rijswijk",
  "delft",
  "zoetermeer",
  "alphen-aan-den-rijn",
  "rotterdam"
];

const technicalGuideSlugs = [
  "website-onderhoud-voor-kleine-bedrijven",
  "website-snelheid-verbeteren-voor-lokale-ondernemer",
  "contactformulier-werkt-niet-website",
  "meer-aanvragen-via-website-zonder-advertenties",
  "homepage-opbouw-voor-lokale-dienstverlener",
  "dienstenpagina-maken-voor-seo",
  "website-redesign-zonder-ranking-verlies",
  "ai-automatisering-voor-intake-opvolging",
  "veelgestelde-vragen-pagina-voor-lokale-seo",
  "website-vertrouwen-verbeteren"
];

function buildEntries() {
  const entries = [];
  let id = 1;

  for (const place of primaryPlaces) {
    for (const branch of branches) {
      entries.push({
        id,
        slug: `website-laten-maken-voor-${branch}-${place}`,
        productionPath: `/${`website-laten-maken-voor-${branch}-${place}`}`
      });
      id += 1;
    }
  }

  id = 121;
  for (const branch of branches) {
    const problemSlug = `waarom-krijgt-mijn-${branch}-website-weinig-aanvragen`;
    entries.push({ id, slug: problemSlug, productionPath: `/inzichten/${problemSlug}` });
    id += 1;

    const checklistSlug = `website-checklist-voor-${branch}-die-meer-klanten-willen`;
    entries.push({ id, slug: checklistSlug, productionPath: `/inzichten/${checklistSlug}` });
    id += 1;
  }

  id = 161;
  for (const place of allPlaces) {
    const seoSlug = `lokale-seo-voor-ondernemers-${place}`;
    entries.push({ id, slug: seoSlug, productionPath: `/${seoSlug}` });
    id += 1;

    const gbpSlug = `google-business-profile-optimaliseren-${place}`;
    entries.push({ id, slug: gbpSlug, productionPath: `/inzichten/${gbpSlug}` });
    id += 1;
  }

  id = 191;
  for (const place of allPlaces) {
    const priceSlug = `wat-kost-een-website-laten-maken-in-${place}`;
    entries.push({ id, slug: priceSlug, productionPath: `/${priceSlug}` });
    id += 1;

    const packageSlug = `website-pakket-kiezen-voor-ondernemer-${place}`;
    entries.push({ id, slug: packageSlug, productionPath: `/${packageSlug}` });
    id += 1;
  }

  id = 221;
  for (const branch of branches) {
    const aiSlug = `ai-vindbaarheid-voor-${branch}`;
    entries.push({ id, slug: aiSlug, productionPath: `/${aiSlug}` });
    id += 1;
  }

  for (const slug of technicalGuideSlugs) {
    entries.push({ id, slug, productionPath: `/inzichten/${slug}` });
    id += 1;
  }

  return entries.sort((a, b) => a.id - b.id);
}

function pageSource(slug) {
  return `import { KeywordDraftPage, keywordPageMetadata } from "@/Keywoard-pages/_shared/keyword-draft-page";

const slug = "${slug}";

export const metadata = keywordPageMetadata(slug);

export default function Page() {
  return <KeywordDraftPage slug={slug} />;
}
`;
}

async function main() {
  const entries = buildEntries();
  await fs.mkdir(routesDir, { recursive: true });

  for (const entry of entries) {
    const dir = new URL(`${entry.slug}/`, routesDir);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(new URL("page.tsx", dir), pageSource(entry.slug), "utf8");
  }

  const manifest = [
    "# Keyword Page Draft Manifest",
    "",
    `Generated pages: ${entries.length}`,
    "",
    "| ID | Draft route file | Intended production path |",
    "|---:|---|---|",
    ...entries.map((entry) => `| ${entry.id} | \`Keywoard-pages/routes/${entry.slug}/page.tsx\` | \`${entry.productionPath}\` |`)
  ].join("\n");

  await fs.writeFile(new URL("page_manifest.md", root), `${manifest}\n`, "utf8");

  if (entries.length !== 250) {
    throw new Error(`Expected 250 routes, generated ${entries.length}`);
  }

  console.log(`Generated ${entries.length} keyword page draft routes in ${path.resolve("Keywoard-pages/routes")}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
