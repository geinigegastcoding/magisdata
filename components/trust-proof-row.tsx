import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const trustProofItems = [
  "Gratis demo vooraf",
  "Geen verplichting",
  "Direct contact met Daniël",
  "Portfolio beschikbaar"
];

type TrustProofRowProps = {
  className?: string;
  compact?: boolean;
};

export function TrustProofRow({ className, compact = false }: TrustProofRowProps) {
  return (
    <div className={cn("flex flex-wrap gap-x-6 gap-y-3", className)}>
      {trustProofItems.map((item) => (
        <span
          className={cn(
            "inline-flex items-center gap-2 font-semibold text-muted",
            compact ? "text-xs leading-5" : "text-sm leading-6"
          )}
          key={item}
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-orange" strokeWidth={2.3} />
          {item}
        </span>
      ))}
    </div>
  );
}
