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
        src="/assets/logo.webp"
      />
    </Link>
  );
}
