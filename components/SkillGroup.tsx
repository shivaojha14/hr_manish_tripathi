import type { SkillGroup as SkillGroupType } from "@/data/portfolio";

export default function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div className="card h-full">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500 dark:text-navy-300">
        {group.category}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-navy-100 bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-700 dark:border-navy-700 dark:bg-navy-800 dark:text-navy-100"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
