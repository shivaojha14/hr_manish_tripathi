import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-white py-8 dark:border-navy-800 dark:bg-navy-950">
      <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-navy-500 sm:flex-row dark:text-navy-400">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>{site.title}</p>
      </div>
    </footer>
  );
}
