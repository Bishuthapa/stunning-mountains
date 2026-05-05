import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/20 bg-zinc-950/25 px-4 py-3 text-white shadow-xl shadow-black/10 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-bold text-zinc-950">
            M
          </span>
          <span className="text-sm font-semibold sm:text-base">
            Mountains of Nepal
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-100 sm:flex">
          <Link href="/#mountains" className="transition hover:text-white">
            Peaks
          </Link>
          <Link
            href="/mountains/mount-everest"
            className="transition hover:text-white"
          >
            Everest
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
