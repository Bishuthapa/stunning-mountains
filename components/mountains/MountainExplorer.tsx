"use client";

import { useMemo, useState } from "react";
import { mountains } from "@/data/mountains";
import { MountainCard } from "@/components/mountains/MountainCard";

const allRangesLabel = "All ranges";
const ranges = [
  allRangesLabel,
  ...Array.from(new Set(mountains.map((mountain) => mountain.range))),
];

export function MountainExplorer() {
  const [query, setQuery] = useState("");
  const [activeRange, setActiveRange] = useState(allRangesLabel);

  const filteredMountains = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return mountains.filter((mountain) => {
      const matchesRange =
        activeRange === allRangesLabel || mountain.range === activeRange;
      const searchableText = [
        mountain.name,
        mountain.range,
        mountain.location,
        mountain.elevation,
        mountain.summary,
      ]
        .join(" ")
        .toLowerCase();

      return matchesRange && searchableText.includes(normalizedQuery);
    });
  }, [activeRange, query]);

  return (
    <div className="space-y-8">
      <div
        className="animate-rise-in rounded-lg border border-zinc-200 bg-white/80 p-4 shadow-xl shadow-zinc-950/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70 dark:shadow-black/30"
        role="search"
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search mountains</span>
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
            <input
              className="h-12 w-full rounded-full border border-zinc-200 bg-white pl-12 pr-4 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15 dark:border-zinc-800 dark:bg-black dark:text-zinc-50 dark:focus:border-emerald-300"
              placeholder="Search by peak, range, or region"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <p className="rounded-full bg-zinc-100 px-4 py-2 text-center text-sm font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
            {filteredMountains.length} of {mountains.length}
          </p>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {ranges.map((range) => {
            const isActive = activeRange === range;

            return (
              <button
                key={range}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/15"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                }`}
                type="button"
                onClick={() => setActiveRange(range)}
              >
                {range}
              </button>
            );
          })}
        </div>
      </div>

      {filteredMountains.length > 0 ? (
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMountains.map((mountain, index) => (
            <MountainCard
              key={mountain.slug}
              mountain={mountain}
              index={index}
              loading={index < 3 ? "eager" : "lazy"}
            />
          ))}
        </div>
      ) : (
        <div className="animate-rise-in rounded-lg border border-dashed border-zinc-300 bg-white/70 p-10 text-center dark:border-zinc-700 dark:bg-zinc-950/70">
          <p className="text-xl font-semibold">No matching peaks</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Try a different range or mountain name.
          </p>
        </div>
      )}
    </div>
  );
}
