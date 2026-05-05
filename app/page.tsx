import { MountainGrid } from "@/components/mountains/MountainGrid";

export default function Home() {
  return (
    <main className="min-h-full bg-zinc-50 px-5 py-24 text-zinc-950 transition-colors dark:bg-black dark:text-zinc-50 sm:px-8">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700 dark:text-emerald-300">
            Himalayan peaks
          </p>
          <h1 className="text-4xl font-bold tracking-normal sm:text-5xl">
            Mountains of Nepal
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Explore some of Nepal&apos;s most remarkable mountains, from the height
            of Everest to the remote beauty of Kanchenjunga and Yalung Kang.
          </p>
        </div>
        <MountainGrid />
      </section>
    </main>
  );
}
