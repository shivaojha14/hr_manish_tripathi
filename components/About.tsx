import { about } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section bg-navy-50/60 dark:bg-navy-900/40">
      <div className="container-page">
        <Reveal>
          <h2 className="section-heading">About</h2>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Reveal className="h-full">
            <div className="card h-full">
              <p className="text-base leading-relaxed text-navy-700 dark:text-navy-200">
                {about.bio}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="h-full">
            <div className="card h-full">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500 dark:text-navy-300">
                Quick Facts
              </h3>
              <dl className="mt-4 space-y-4">
                {about.quickFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-medium uppercase tracking-wide text-navy-400 dark:text-navy-400">
                      {fact.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-navy-800 dark:text-navy-100">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
