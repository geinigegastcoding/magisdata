import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return <Link aria-label="MagisData home" className={cn("studio-logo", className)} href="/"><span>magisdata</span><svg aria-hidden="true" viewBox="0 0 22 22" fill="none"><path d="M2 20V2h18v18M2 11h18M11 2v18" stroke="currentColor" strokeWidth="2.2" /></svg></Link>;
}