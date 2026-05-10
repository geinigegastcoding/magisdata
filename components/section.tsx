import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-5 text-balance font-satoshi text-3xl font-semibold leading-[1.08] text-bone md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-bone/62 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function SectionShell({
  children,
  className,
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section className={cn("py-20 md:py-28", className)} id={id}>
      <div className="container">{children}</div>
    </section>
  );
}
