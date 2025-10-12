export default function Dashboard() {
  const stats = [
    { label: "Weekly Workouts", value: 5 },
    { label: "Total Minutes", value: 342 },
    { label: "Avg Sleep (h)", value: 7.4 },
    { label: "Steps (week)", value: "52,310" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
      <h1 className="text-3xl font-bold">Your Dashboard</h1>
      <p className="mt-1 text-neutral-300">
        This is a prototype. Data is static and for illustration only.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5">
            <div className="text-sm text-neutral-400">{s.label}</div>
            <div className="mt-2 text-2xl font-semibold">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold">This Week Activity</h2>
          <span className="text-sm text-neutral-400">mock chart</span>
        </div>
        <div className="grid h-48 grid-cols-7 gap-2">
          {[
            {day: "Mon", value: 30},
            {day: "Tue", value: 52},
            {day: "Wed", value: 80},
            {day: "Thu", value: 60},
            {day: "Fri", value: 40},
            {day: "Sat", value: 95},
            {day: "Sun", value: 20},
          ].map((d, i) => (
            <div key={i} className="flex flex-col items-center justify-end">
                {/*bar*/}
                <div className="w-full rounded-md bg-fuchsia-500/70" style={{height: `${d.value}%`}} />
                {/*label*/}
                <span className="mt-2 text-xs text-neutral-400">{d.day}</span>
            </div>
            ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
        <h2 className="text-xl font-semibold">AI Summary</h2>
        <p className="mt-2 text-neutral-300">
          You’ve increased weekly volume by <span className="text-emerald-400 font-semibold">12%</span>.
          Recovery looks good; consider one additional low-intensity session and aim for
          <span className="font-semibold"> 7.5–8h</span> sleep to support progression.
        </p>
      </div>
    </div>
  );
}