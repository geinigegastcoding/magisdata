import { KeywordDraftPage, keywordPageMetadata } from "@/Keywoard-pages/_shared/keyword-draft-page";

const slug = "wat-kost-een-website-laten-maken-in-den-haag";

export const metadata = keywordPageMetadata(slug);

export default function Page() {
  return <KeywordDraftPage slug={slug} />;
}
