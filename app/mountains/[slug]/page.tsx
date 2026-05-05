import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SmartImage } from "@/components/SmartImage";
import { MountainCard } from "@/components/mountains/MountainCard";
import { getMountainBySlug, mountains } from "@/data/mountains";

type MountainPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return mountains.map((mountain) => ({
    slug: mountain.slug,
  }));
}

export async function generateMetadata({
  params,
}: MountainPageProps): Promise<Metadata> {
  const { slug } = await params;
  const mountain = getMountainBySlug(slug);

  if (!mountain) {
    return {
      title: "Mountain Not Found",
    };
  }

  return {
    title: `${mountain.name} | Mountains of Nepal`,
    description: mountain.summary,
  };
}

export default async function MountainPage({ params }: MountainPageProps) {
  const { slug } = await params;
  const mountain = getMountainBySlug(slug);

  if (!mountain) {
    notFound();
  }

  const sameRangeMountains = mountains.filter(
    (item) => item.slug !== mountain.slug && item.range === mountain.range,
  );
  const otherMountains = mountains.filter(
    (item) =>
      item.slug !== mountain.slug &&
      !sameRangeMountains.some((sameRange) => sameRange.slug === item.slug),
  );
  const relatedMountains = [...sameRangeMountains, ...otherMountains].slice(
    0,
    3,
  );

  return (
    <main className="min-h-full overflow-hidden bg-[#f7f8f3] text-zinc-950 transition-colors dark:bg-[#050505] dark:text-zinc-50">
      <section className="relative flex min-h-[74svh] items-end px-5 py-20 sm:px-8 lg:px-12">
        <SmartImage
          name={mountain.imageKey}
          alt={mountain.name}
          className="animate-scale-in absolute inset-0 h-full w-full object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/85" />
        <div className="relative mx-auto w-full max-w-6xl pt-32 text-white">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Back to mountains
          </Link>

          <div className="animate-rise-in mt-8 max-w-4xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-normal text-emerald-200">
              {mountain.range}
            </p>
            <h1 className="text-5xl font-bold tracking-normal sm:text-7xl">
              {mountain.name}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-100">
              {mountain.summary}
            </p>
          </div>

          <dl className="animate-fade-in mt-12 grid gap-4 border-y border-white/20 py-5 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-zinc-300">Elevation</dt>
              <dd className="mt-1 text-xl font-semibold leading-tight sm:text-2xl">
                {mountain.elevation}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-300">Location</dt>
              <dd className="mt-1 text-xl font-semibold leading-tight sm:text-2xl">
                {mountain.location}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-300">Range</dt>
              <dd className="mt-1 text-xl font-semibold leading-tight sm:text-2xl">
                {mountain.range}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <article className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_360px] lg:px-0">
        <div className="space-y-10">
          <section className="grid gap-4 sm:grid-cols-3">
            {[
              ["Season", mountain.season],
              ["Nearest town", mountain.nearestTown],
              ["Difficulty", mountain.difficulty],
            ].map(([label, value], index) => (
              <div
                key={label}
                className="animate-rise-in rounded-lg border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-950"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {label}
                </p>
                <p className="mt-2 text-lg font-semibold">{value}</p>
              </div>
            ))}
          </section>

          <section className="animate-rise-in space-y-5">
            <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700 dark:text-emerald-300">
              Mountain story
            </p>
            <h2 className="text-3xl font-bold tracking-normal sm:text-5xl">
              A closer look at {mountain.name}
            </h2>
            <div className="space-y-5 text-base leading-8 text-zinc-700 dark:text-zinc-300">
              {mountain.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            {mountain.facts.map((fact, index) => (
              <div
                key={fact.label}
                className="animate-rise-in rounded-lg border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-950"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {fact.label}
                </p>
                <p className="mt-2 text-xl font-semibold">{fact.value}</p>
              </div>
            ))}
          </section>
        </div>

        <aside className="animate-rise-in space-y-6 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/30">
            <h2 className="text-xl font-semibold">At a glance</h2>
            <dl className="mt-5 grid gap-5">
              <div>
                <dt className="text-sm text-zinc-500 dark:text-zinc-400">
                  Elevation
                </dt>
                <dd className="mt-1 text-lg font-semibold">
                  {mountain.elevation}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-500 dark:text-zinc-400">
                  Location
                </dt>
                <dd className="mt-1 text-lg font-semibold">
                  {mountain.location}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-500 dark:text-zinc-400">
                  Range
                </dt>
                <dd className="mt-1 text-lg font-semibold">
                  {mountain.range}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-500 dark:text-zinc-400">
                  Best season
                </dt>
                <dd className="mt-1 text-lg font-semibold">
                  {mountain.season}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-500 dark:text-zinc-400">
                  Nearest town
                </dt>
                <dd className="mt-1 text-lg font-semibold">
                  {mountain.nearestTown}
                </dd>
              </div>
            </dl>
          </section>

          <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-emerald-950 shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-50">
            <p className="text-sm font-semibold uppercase tracking-normal">
              Summit note
            </p>
            <p className="mt-3 text-sm leading-7">
              {mountain.name} belongs to {mountain.range}, where high glaciers,
              steep ridges, and mountain communities shape the character of the
              landscape.
            </p>
          </section>
        </aside>
      </article>

      <section className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8 lg:px-0">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700 dark:text-emerald-300">
              Keep exploring
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-normal">
              Related mountains
            </h2>
          </div>
          <Link
            href="/"
            className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-100"
          >
            View all peaks
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedMountains.map((relatedMountain, index) => (
            <MountainCard
              key={relatedMountain.slug}
              mountain={relatedMountain}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
