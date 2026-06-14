import { KeywordDraftPage, keywordPageMetadata } from "@/Keywoard-pages/_shared/keyword-draft-page";

const slug = "contactformulier-werkt-niet-website";

export const metadata = keywordPageMetadata(slug);

export default function Page() {
  return <KeywordDraftPage slug={slug} />;
}
