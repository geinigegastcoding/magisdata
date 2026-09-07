import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      aria-label="MagisData home"
      className={cn("md-logo", className)}
      href="/"
    >
      <svg aria-hidden="true" viewBox="0 0 36 36" fill="none"><path d="M3 28V8h6l9 13L27 8h6v20h-6V18l-9 13L9 18v10H3Z" fill="currentColor" /></svg>
      <span>MagisData</span>
    </Link>
  );
}
