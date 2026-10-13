import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <Reveal>
          <h2 className="section-heading">Experience</h2>
        </Reveal>

        <ol className="relative mt-10 space-y-8 border-l border-navy-200 pl-6 dark:border-navy-700">
          {experience.map((item, index) => (
            <li key={`${item.role}-${index}`} className="relative">
              <span
                className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-navy-500 bg-white dark:border-navy-400 dark:bg-navy-950"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <Reveal>
                <div className="card">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold text-navy-900 dark:text-white">
                      {item.role}
                    </h3>
                    {item.period && (
                      <span className="text-sm font-medium text-navy-500 dark:text-navy-300">
                        {item.period}
                      </span>
                    )}
                  </div>

                  {(item.company || item.location) && (
                    <p className="mt-1 text-sm font-medium text-navy-600 dark:text-navy-300">
                      {item.company}
                      {item.company && item.location ? " · " : ""}
                      {item.location}
                    </p>
                  )}

                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2.5 text-sm leading-relaxed text-navy-700 dark:text-navy-200"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-400 dark:bg-navy-500" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
