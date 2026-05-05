import Link from "next/link";
import { SmartImage } from "@/components/SmartImage";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh items-end overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-12">
      <SmartImage
        name="everest"
        alt="Mount Everest"
        className="animate-scale-in absolute inset-0 h-full w-full object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/85" />
      <section className="animate-rise-in relative mx-auto w-full max-w-6xl space-y-6">
        <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-normal backdrop-blur">
          404
        </p>
        <h1 className="max-w-3xl text-5xl font-bold tracking-normal sm:text-7xl">
          This trail disappears into cloud.
        </h1>
        <p className="max-w-xl text-base leading-8 text-zinc-100 sm:text-lg">
          The page is not part of this mountain atlas, but the main route is
          still open.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-emerald-100"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}
