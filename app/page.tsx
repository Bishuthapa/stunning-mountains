import Link from "next/link";
import { SmartImage } from "@/components/SmartImage";
import { MountainExplorer } from "@/components/mountains/MountainExplorer";
import { mountains } from "@/data/mountains";

const featuredMountain = mountains[0];

export default function Home() {
  return (
    <main className="min-h-full overflow-hidden bg-[#f7f8f3] text-zinc-950 transition-colors dark:bg-[#050505] dark:text-zinc-50">
      <section className="relative flex min-h-[82svh] items-end px-5 py-20 sm:px-8 lg:px-12">
        <SmartImage
          name={featuredMountain.imageKey}
          alt={featuredMountain.name}
          className="animate-scale-in absolute inset-0 h-full w-full object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/80" />
        <div className="relative mx-auto w-full max-w-6xl pb-4 pt-32 text-white">
          <div className="animate-rise-in max-w-4xl space-y-6">
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-normal text-white backdrop-blur">
              Himalayan field guide
            </p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-normal sm:text-7xl">
              Mountains of Nepal
            </h1>
            <p className="max-w-2xl text-base leading-8 text-zinc-100 sm:text-lg">
              Explore Nepal&apos;s highest landscapes through a curated collection
              of summits, stories, quick facts, and dramatic mountain imagery.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#mountains"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                Explore peaks
              </Link>
              <Link
                href={`/mountains/${featuredMountain.slug}`}
                className="rounded-full border border-white/35 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Featured: {featuredMountain.name}
              </Link>
            </div>
          </div>

          <dl className="animate-fade-in mt-12 grid gap-4 border-y border-white/20 py-5 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-zinc-300">Collection</dt>
              <dd className="mt-1 text-xl font-semibold leading-tight sm:text-2xl">
                {mountains.length} peaks
              </dd>
            </div>
            <div>
              <dt className="text-zinc-300">Highest summit</dt>
              <dd className="mt-1 text-xl font-semibold leading-tight sm:text-2xl">
                {featuredMountain.elevation}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-300">Region focus</dt>
              <dd className="mt-1 text-xl font-semibold leading-tight sm:text-2xl">
                Nepal Himalaya
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        id="mountains"
        className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-20 sm:px-8 lg:px-0"
      >
        <div className="animate-rise-in flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700 dark:text-emerald-300">
              Select a summit
            </p>
            <h2 className="text-3xl font-bold tracking-normal sm:text-5xl">
              Built like a visual atlas
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            Move across the Khumbu, Annapurna, Manaslu, Dhaulagiri, and
            Kanchenjunga regions through peaks with distinct scale and history.
          </p>
        </div>
        <MountainExplorer />
      </section>
    </main>
  );
}
