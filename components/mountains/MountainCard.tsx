import Link from "next/link";
import { SmartImage } from "@/components/SmartImage";
import type { Mountain } from "@/data/mountains";

type MountainCardProps = {
  mountain: Mountain;
  loading?: "eager" | "lazy";
};

export function MountainCard({ mountain, loading = "lazy" }: MountainCardProps) {
  return (
    <Link
      href={`/mountains/${mountain.slug}`}
      className="group block overflow-hidden rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:border-zinc-600"
    >
      <div className="aspect-4/3 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <SmartImage
          name={mountain.imageKey}
          alt={mountain.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading={loading}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
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
      </div>
    </Link>
  );
}
