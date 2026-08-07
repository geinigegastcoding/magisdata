import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[62vh] place-items-center bg-blue-soft px-6 py-24 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue">404 / geen route</p>
        <h1 className="mt-5 text-balance text-[3.5rem] font-medium leading-none tracking-[-0.07em] text-navy sm:text-[5.5rem]">Deze pagina bestaat niet.</h1>
        <p className="mx-auto mt-5 max-w-md leading-7 text-muted">De link klopt niet meer of de pagina is verplaatst. De route naar AI-systemen begint hier.</p>
        <Link className="mt-8 inline-flex items-center bg-blue px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-dark" href="/">Terug naar MagisData</Link>
      </div>
    </main>
  );
}
