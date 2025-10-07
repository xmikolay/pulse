"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-red-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 md:pt-28 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs text-neutral-300"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          early prototype
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          Pulse <span className="text-red-400">syncs your health data</span> and
          turns it into clear, actionable insights.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-neutral-300"
        >
          Bring all your fitness apps together and let AI highlight progress, plateaus,
          and next steps—no spreadsheets needed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            href="/dashboard"
            className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-red-400 transition"
          >
            View demo dashboard
          </Link>
          <a
            href="#features"
            className="rounded-xl border border-neutral-700 px-5 py-3 font-semibold hover:bg-neutral-900 transition"
          >
            See features
          </a>
        </motion.div>
      </div>
    </section>
  );
}