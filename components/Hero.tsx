import Image from "next/image";
import { site } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="section pt-12 sm:pt-16">
      <div className="container-page">
        <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700 dark:bg-navy-900 dark:text-navy-200">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {site.yearsExperience} Years Experience
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl dark:text-white">
              {site.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-navy-700 dark:text-navy-200">
              {site.title}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-600 dark:text-navy-300">
              {site.valueStatement}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.cv} download={site.cvFileName} className="btn-primary">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
                </svg>
                Download CV
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-56 w-56 overflow-hidden rounded-3xl border border-navy-100 bg-navy-50 shadow-soft sm:h-64 sm:w-64 dark:border-navy-800 dark:bg-navy-900">
              <Image
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
