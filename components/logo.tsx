import Link from "next/link";
import { cn } from "@/lib/utils";
export function Logo({ className }: { className?: string }) {
  return <Link aria-label="MagisData home" className={cn("v2-logo", className)} href="/"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M2 27V5H8L16 18L24 5H30V27H23V17L16 28L9 17V27H2Z" fill="currentColor" /></svg><span>MagisData<span className="v2-logo-dot">.</span></span></Link>;
}
