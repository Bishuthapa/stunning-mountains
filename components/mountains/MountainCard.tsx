import Link from "next/link";
import { SmartImage } from "@/components/SmartImage";
import type { Mountain } from "@/data/mountains";

type MountainCardProps = {
  mountain: Mountain;
  index?: number;
  loading?: "eager" | "lazy";
};

export function MountainCard({
  mountain,
  index = 0,
  loading = "lazy",
}: MountainCardProps) {
  return (
    <Link
      href={`/mountains/${mountain.slug}`}
      className="group animate-rise-in relative block overflow-hidden rounded-lg border border-zinc-200/80 bg-white text-zinc-950 opacity-0 shadow-sm shadow-zinc-950/5 transition duration-300 mountain-card-shine hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-950/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:shadow-black/30 dark:hover:border-emerald-500/50"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <SmartImage
          name={mountain.imageKey}
          alt={mountain.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading={loading}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent opacity-80 transition group-hover:opacity-100" />
        <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-950 shadow-sm backdrop-blur dark:bg-zinc-950/85 dark:text-zinc-50">
          {mountain.range}
        </p>
      </div>
      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
            {mountain.elevation}
          </p>
          <h2 className="text-2xl font-semibold tracking-normal">
            {mountain.name}
          </h2>
        </div>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {mountain.summary}
        </p>
        <div className="flex items-center justify-between border-t border-zinc-100 pt-4 text-sm font-semibold dark:border-zinc-800">
          <span>{mountain.location}</span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-800 transition group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-400/10 dark:text-emerald-200 dark:group-hover:bg-emerald-400 dark:group-hover:text-emerald-950">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
