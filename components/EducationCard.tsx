import type { EducationItem } from "@/data/portfolio";

export default function EducationCard({ item }: { item: EducationItem }) {
  return (
    <div className="card flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-base font-semibold text-navy-900 dark:text-white">
          {item.degree}
        </h3>
        {item.institution && (
          <p className="mt-0.5 text-sm text-navy-600 dark:text-navy-300">
            {item.institution}
          </p>
        )}
      </div>
      <span className="text-sm font-medium text-navy-500 dark:text-navy-300">
        {item.period}
      </span>
    </div>
  );
}
