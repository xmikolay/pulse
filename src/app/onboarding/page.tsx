"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Form = {
  age: string;
  weightKg: string;
  heightCm: string;
  goalWeightKg: string;
  workoutType: string;
};

const workoutOptions = [
  "Strength",
  "Cardio",
  "Hypertrophy",
  "HIIT",
  "Endurance",
  "General Fitness",
  "Mixed",
];

export default function OnboardingPage() {
  const router = useRouter();
  const search = useSearchParams();
  const emailFromSignup = search.get("email") || undefined;

  const [form, setForm] = useState<Form>({
    age: "",
    weightKg: "",
    heightCm: "",
    goalWeightKg: "",
    workoutType: "",
  });

  useEffect(() => {
    if (emailFromSignup) console.log("Onboarding for:", emailFromSignup);
  }, [emailFromSignup]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Onboarding:\nAge: ${form.age}\nWeight: ${form.weightKg} kg\nHeight: ${form.heightCm} cm\nGoal Weight: ${form.goalWeightKg} kg\nWorkout Type: ${form.workoutType}`
    );
    router.push("/dashboard");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-xl px-4 py-10 md:py-12"
    >
      <h1 className="text-3xl font-bold">Tell us about you</h1>
      {emailFromSignup && (
        <p className="mt-1 text-sm text-neutral-400">
          Setting up for <span className="text-neutral-200">{emailFromSignup}</span>
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <label htmlFor="age" className="mb-1 block text-sm text-neutral-300">Age</label>
            <input
              id="age" name="age" type="number" min={12} max={100} required
              value={form.age} onChange={handleChange}
              className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-white focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="weightKg" className="mb-1 block text-sm text-neutral-300">Weight (kg)</label>
            <input
              id="weightKg" name="weightKg" type="number" step="0.1" min={20} max={400} required
              value={form.weightKg} onChange={handleChange}
              className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-white focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="heightCm" className="mb-1 block text-sm text-neutral-300">Height (cm)</label>
            <input
              id="heightCm" name="heightCm" type="number" step="0.1" min={120} max={250} required
              value={form.heightCm} onChange={handleChange}
              className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-white focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 outline-none transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="goalWeightKg" className="mb-1 block text-sm text-neutral-300">Weight Goal (kg)</label>
            <input
              id="goalWeightKg" name="goalWeightKg" type="number" step="0.1" min={20} max={400} required
              value={form.goalWeightKg} onChange={handleChange}
              className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-white focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="workoutType" className="mb-1 block text-sm text-neutral-300">Workout Type</label>
            <select
              id="workoutType" name="workoutType" required value={form.workoutType} onChange={handleChange}
              className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-white focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 outline-none transition"
            >
              <option value="" disabled>Select one</option>
              {workoutOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-emerald-400 py-2 font-semibold text-neutral-900 hover:bg-emerald-300 transition"
        >
          Continue
        </button>
      </form>
    </motion.div>
  );
}
