"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    window.location.replace("/admin/index.html");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          MagisData CMS
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-on-surface">
          Admin laden...
        </h1>
        <p className="mt-4 max-w-md text-on-surface-variant">
          Je wordt automatisch doorgestuurd naar de Decap CMS adminomgeving.
        </p>
      </div>
    </main>
  );
}
