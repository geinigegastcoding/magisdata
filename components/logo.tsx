import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      aria-label="MagisData home"
      className={cn("inline-flex items-center", className)}
      href="/"
    >
      <img
        alt="MagisData"
        className="h-12 w-auto sm:h-14"
        height="56"
        src="/assets/logo.webp"
        srcSet="/assets/logo-96.webp 96w, /assets/logo-112.webp 112w, /assets/logo.webp 500w"
        sizes="(min-width: 640px) 56px, 48px"
        width="56"
      />
    </Link>
  );
}
