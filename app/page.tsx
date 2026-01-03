import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-bold">Scopezy</h1>

        <p className="text-xl opacity-90">
          Scope projects. Quote confident.
        </p>

        <p className="opacity-80">
          Instantly define project scope, estimate effort, and generate
          fair quotes — without underpricing or scope creep.
        </p>

        <Link
          href="/estimate"
          className="inline-block bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Get My First Estimate
        </Link>
      </div>
    </main>
  );
}