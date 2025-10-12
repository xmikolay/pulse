"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/onboarding?email=${encodeURIComponent(formData.email)}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex min-h-[calc(100dvh-120px)] items-center justify-center px-4"
    >
      <div className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 shadow-xl backdrop-blur">
        <h1 className="text-2xl font-bold mb-2 text-center">Create Account</h1>
        <p className="text-neutral-400 text-center mb-6">
          Start using <span className="text-fuchsia-400 font-semibold">Pulse</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-neutral-300 mb-1">Email</label>
            <input
              type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
              className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-neutral-300 mb-1">Password</label>
            <input
              type="password" id="password" name="password" required value={formData.password} onChange={handleChange}
              className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="w-full rounded-md bg-fuchsia-500 py-2 font-semibold text-neutral-900 hover:bg-fuchsia-400 transition">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-neutral-400 mt-4 text-center">
          Already have an account? <Link href="#" className="text-fuchsia-400 hover:underline">Sign in</Link>
        </p>
      </div>
    </motion.div>
  );
}
