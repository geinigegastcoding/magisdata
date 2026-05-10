import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container min-h-[70vh] pt-36">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">404</p>
      <h1 className="mt-5 max-w-2xl font-satoshi text-5xl font-semibold text-bone">
        Deze pagina valt buiten de huidige infrastructuurkaart.
      </h1>
      <p className="mt-5 max-w-xl leading-8 text-bone/62">
        Ga terug naar de homepage of bekijk de dienstenstructuur.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild variant="amber">
          <Link href="/">Naar homepage</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/services">Bekijk diensten</Link>
        </Button>
      </div>
    </main>
  );
}
