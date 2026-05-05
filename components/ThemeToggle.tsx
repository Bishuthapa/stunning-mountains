"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const storageKey = "theme";
const themeChangeEvent = "theme-change";

function getStoredTheme(): Theme {
  const savedTheme = window.localStorage.getItem(storageKey);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getServerTheme(): Theme {
  return "light";
}

function subscribeToThemeChanges(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(themeChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(themeChangeEvent, onStoreChange);
  };
}

function saveTheme(theme: Theme) {
  window.localStorage.setItem(storageKey, theme);
  window.dispatchEvent(new Event(themeChangeEvent));
}

function SunIcon() {
  return (
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
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
      <path d="M20.99 12.56A8.98 8.98 0 1 1 11.44 3a7 7 0 0 0 9.55 9.56Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getStoredTheme,
    getServerTheme,
  );
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      aria-label={`Switch to ${nextTheme} mode`}
      className="fixed right-4 top-4 z-50 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-white/90 text-zinc-800 shadow-lg shadow-zinc-950/10 backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-amber-50 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-100 dark:hover:bg-indigo-950"
      suppressHydrationWarning
      type="button"
      onClick={() => saveTheme(nextTheme)}
    >
      <span
        className={`absolute grid h-9 w-9 place-items-center rounded-full text-zinc-950 transition-all duration-300 ${
          theme === "light"
            ? "translate-y-0 rotate-0 opacity-100"
            : "-translate-y-8 rotate-90 opacity-0"
        }`}
      >
        <SunIcon />
      </span>
      <span
        className={`absolute grid h-9 w-9 place-items-center rounded-full text-white transition-all duration-300 ${
          theme === "dark"
            ? "translate-y-0 rotate-0 opacity-100"
            : "translate-y-8 -rotate-90 opacity-0"
        }`}
      >
        <MoonIcon />
      </span>
    </button>
  );
}
