import type { Metadata } from "next";
import { AiHomepage } from "@/components/ai-homepage";
export const metadata: Metadata = { title: "Website testontwerp", robots: { index: false, follow: false } };
export default function PreviewPage() { return <AiHomepage />; }
