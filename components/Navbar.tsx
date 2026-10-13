"use client";

import { useEffect, useState } from "react";
import { navItems, site } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-navy-100 bg-white/90 backdrop-blur dark:border-navy-800 dark:bg-navy-950/90"
          : "border-transparent bg-white/70 backdrop-blur dark:bg-navy-950/70"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between"
      >
        <a
          href="#home"
          className="text-base font-bold tracking-tight text-navy-900 dark:text-white"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900 dark:text-navy-200 dark:hover:bg-navy-800 dark:hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 text-navy-700 dark:border-navy-700 dark:text-navy-100"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-navy-100 bg-white md:hidden dark:border-navy-800 dark:bg-navy-950"
        >
          <ul className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 dark:text-navy-200 dark:hover:bg-navy-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
