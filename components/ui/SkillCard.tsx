import { FiArrowUpRight } from 'react-icons/fi';
import type { SkillItem } from '@/lib/data';

type Props = {
  skill: SkillItem;
  index: number;
  animate: boolean;
};

export default function SkillCard({ skill, index, animate }: Props) {
  return (
    <div
      className={`group relative flex flex-col gap-3 p-5 rounded-2xl
        bg-white dark:bg-slate-900/60
        border border-slate-200 dark:border-slate-800
        hover:border-cyan-500/50 dark:hover:border-cyan-500/40
        hover:shadow-lg hover:shadow-cyan-500/5
        transition-all duration-300
        ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Subtle top accent line on hover */}
      <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/60 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Skill name */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug">
          {skill.name}
        </h3>
        {skill.projectLink && (
          <a
            href={skill.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-slate-400 hover:text-cyan-500 transition-colors"
            aria-label="View project"
          >
            <FiArrowUpRight size={15} />
          </a>
        )}
      </div>

      {/* Impact bullets */}
      <ul className="space-y-2 flex-1">
        {skill.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100 dark:border-slate-800">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium px-2 py-0.5 rounded-full
              bg-slate-100 dark:bg-slate-800
              text-slate-500 dark:text-slate-400
              border border-slate-200 dark:border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
