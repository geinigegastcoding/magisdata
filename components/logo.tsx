import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return <Link aria-label="MagisData home" className={cn("studio-logo", className)} href="/">
    <svg aria-hidden="true" viewBox="0 0 32 32" fill="none"><path d="M4 27V5l12 13L28 5v22M10 27V17l6 7 6-7v10" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" /></svg>
    <span>MagisData<span className="logo-period">.</span></span>
  </Link>;
}
