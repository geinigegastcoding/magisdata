import { KeywordDraftPage, keywordPageMetadata } from "@/Keywoard-pages/_shared/keyword-draft-page";

const slug = "ai-vindbaarheid-voor-boekhouders";

export const metadata = keywordPageMetadata(slug);

export default function Page() {
  return <KeywordDraftPage slug={slug} />;
}
