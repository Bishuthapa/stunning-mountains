import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SmartImage } from "@/components/SmartImage";
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

  return (
    <main className="min-h-full bg-zinc-50 px-5 py-24 text-zinc-950 transition-colors dark:bg-black dark:text-zinc-50 sm:px-8">
      <article className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-emerald-700 transition hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-100"
          >
            Back to mountains
          </Link>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700 dark:text-emerald-300">
              {mountain.range}
            </p>
            <h1 className="text-4xl font-bold tracking-normal sm:text-6xl">
              {mountain.name}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              {mountain.summary}
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <SmartImage
              name={mountain.imageKey}
              alt={mountain.name}
              className="h-auto w-full object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24">
          <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold">Quick facts</h2>
            <dl className="mt-5 grid gap-4">
              <div>
                <dt className="text-sm text-zinc-500 dark:text-zinc-400">
                  Elevation
                </dt>
                <dd className="mt-1 font-medium">{mountain.elevation}</dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-500 dark:text-zinc-400">
                  Location
                </dt>
                <dd className="mt-1 font-medium">{mountain.location}</dd>
              </div>
              {mountain.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-sm text-zinc-500 dark:text-zinc-400">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="space-y-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold">Description</h2>
            {mountain.description.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-7 text-zinc-600 dark:text-zinc-300"
              >
                {paragraph}
              </p>
            ))}
          </section>
        </aside>
      </article>
    </main>
  );
}
