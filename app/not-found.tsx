import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-cream/40 px-6 py-20 text-center">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.14em] text-orange">404</p>
        <h1 className="mt-4 text-[4em] font-black text-navy">Pagina niet gevonden</h1>
        <p className="mt-4 text-slate-600">Deze pagina bestaat niet of is verplaatst.</p>
        <Link className="mt-8 inline-flex rounded-2xl bg-orange px-6 py-4 text-sm font-extrabold text-white" href="/">
          Terug naar home
        </Link>
      </div>
    </main>
  );
}
