import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      aria-label="MagisData home"
      className={cn("inline-flex items-center gap-3", className)}
      href="/"
    >
      <span aria-hidden="true" className="grid h-9 w-9 place-items-center bg-blue text-sm font-black text-white">M</span>
      <span className="text-[1.05rem] font-semibold tracking-[-0.04em] text-navy">MagisData</span>
    </Link>
  );
}
