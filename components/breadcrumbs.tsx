import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="container pt-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-muted">
        {items.map((item, index) => {
          const current = index === items.length - 1;

          return (
            <li className="flex items-center gap-2" key={item.path}>
              {index > 0 ? <ChevronRight aria-hidden className="h-4 w-4 text-soft" /> : null}
              {current ? (
                <span aria-current="page" className="font-semibold text-navy">
                  {item.name}
                </span>
              ) : (
                <Link className="focus-ring rounded-full hover:text-orange" href={item.path}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
