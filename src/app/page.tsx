// Simple landing with hero, features, steps, and CTA
import Link from "next/link";

const features = [
  {
    title: "Connect Your Apps",
    text: "Hook up Strava, Garmin, Apple Health, or Google Fit in seconds.",
    icon: "🔗",
  },
  {
    title: "Unified Dashboard",
    text: "See workouts, sleep, nutrition and recovery in one place.",
    icon: "📊",
  },
  {
    title: "AI Summaries",
    text: "Daily, weekly, and monthly insights written for humans.",
    icon: "🧠",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            early prototype
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Pulse <span className="text-fuchsia-400">syncs your health data</span> and turns it into clear, actionable insights.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Bring all your fitness apps together and let AI highlight progress, plateaus, and next steps—no spreadsheets needed.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="rounded-xl bg-fuchsia-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-fuchsia-400 transition"
            >
              View demo dashboard
            </Link>
            <a
              href="#features"
              className="rounded-xl border border-neutral-700 px-5 py-3 font-semibold hover:bg-neutral-900 transition"
            >
              See features
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-neutral-300">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
          <h2 className="text-2xl font-bold">How Pulse works</h2>
          <ol className="mt-4 grid gap-4 md:grid-cols-3">
            <li className="rounded-xl bg-neutral-900 p-4">
              <span className="font-semibold">1. Connect</span>
              <p className="text-neutral-300">Authorize your existing fitness accounts.</p>
            </li>
            <li className="rounded-xl bg-neutral-900 p-4">
              <span className="font-semibold">2. Sync</span>
              <p className="text-neutral-300">We unify and clean your data in one timeline.</p>
            </li>
            <li className="rounded-xl bg-neutral-900 p-4">
              <span className="font-semibold">3. Understand</span>
              <p className="text-neutral-300">AI explains trends and suggests the next move.</p>
            </li>
          </ol>

          <div className="mt-6">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-300 transition"
            >
              Open the demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}