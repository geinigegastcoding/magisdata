import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, markOnly = false }: { className?: string; markOnly?: boolean }) {
  return (
    <Link
      aria-label="MagisData home"
      className={cn("flex items-center", className)}
      href="/"
    >
      <Image
        alt="MagisData logo"
        className={cn(markOnly ? "h-12 w-auto" : "h-12 w-auto")}
        height={markOnly ? 128 : 187}
        priority
        src={markOnly ? "/assets/magisdata-mark.webp" : "/assets/magisdata-logo.webp"}
        width={markOnly ? 102 : 540}
      />
    </Link>
  );
}
