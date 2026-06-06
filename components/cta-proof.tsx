import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CtaProofProps = {
  children?: ReactNode;
  className?: string;
};

export function CtaProof({ children = "Geen verplichting, wel richting", className }: CtaProofProps) {
  return (
    <p className={cn("inline-flex items-center gap-2 text-xs font-bold leading-5 text-muted", className)}>
      <CheckCircle2 className="h-4 w-4 shrink-0 text-orange" strokeWidth={2.3} />
      {children}
    </p>
  );
}
