import { KeywordDraftPage, keywordPageMetadata } from "@/Keywoard-pages/_shared/keyword-draft-page";

const slug = "meer-aanvragen-via-website-zonder-advertenties";

export const metadata = keywordPageMetadata(slug);

export default function Page() {
  return <KeywordDraftPage slug={slug} />;
}
