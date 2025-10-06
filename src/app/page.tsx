// Simple landing with hero, features, steps, and CTA
import Link from "next/link";
import Hero from "./components/Hero";

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
      <Hero />

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