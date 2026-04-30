import { FiExternalLink, FiGithub, FiTrendingUp } from 'react-icons/fi';
import type { Project } from '@/lib/data';

const CATEGORY_ICONS: Record<Project['category'], string> = {
  data:       '📊',
  automation: '⚙️',
  aviation:   '✈️',
};

type Props = { project: Project; index: number; animate: boolean };

export default function ProjectCard({ project, index, animate }: Props) {
  return (
    <div
      className={`card group flex flex-col h-full transition-all duration-700 ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${project.featured ? 'ring-1 ring-cyan-500/20' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="text-xl">{CATEGORY_ICONS[project.category]}</span>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-500 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={15} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-500 transition-colors"
              aria-label="Live link"
            >
              <FiExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Metric badge */}
      {project.metrics && (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800/50 rounded-lg px-2.5 py-1.5 mb-4 w-fit">
          <FiTrendingUp size={12} />
          {project.metrics}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
