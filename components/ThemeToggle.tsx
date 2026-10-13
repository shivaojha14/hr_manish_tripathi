"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // ignore storage errors
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:bg-navy-50 dark:border-navy-700 dark:text-navy-100 dark:hover:bg-navy-800"
    >
      {mounted && isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66l1.41-1.41M4.93 19.07l1.41-1.41m0-11.32L4.93 4.93m14.14 14.14l-1.41-1.41M12 7a5 5 0 100 10 5 5 0 000-10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}
