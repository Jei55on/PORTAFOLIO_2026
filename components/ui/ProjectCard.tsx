import Image from 'next/image';
import { FiExternalLink, FiGithub, FiTrendingUp } from 'react-icons/fi';
import type { Project } from '@/lib/data';

/* ── Gradient cover shown when no image is provided ─────────────────────── */
const COVERS: Record<Project['category'], { gradient: string; pattern: JSX.Element }> = {
  aviation: {
    gradient: 'from-slate-900 via-cyan-950/80 to-slate-900',
    pattern: (
      <svg viewBox="0 0 120 80" className="w-full h-full opacity-20" fill="none">
        {/* Stylised flight-path arc */}
        <path d="M10 65 Q60 10 110 40" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="110" cy="40" r="3" fill="#22d3ee" />
        {/* Runway marks */}
        <rect x="8" y="68" width="12" height="2" rx="1" fill="#94a3b8" />
        <rect x="26" y="68" width="8"  height="2" rx="1" fill="#94a3b8" />
        <rect x="40" y="68" width="8"  height="2" rx="1" fill="#94a3b8" />
        {/* Plane silhouette */}
        <path d="M95 28 l6 4 -3 2-6-4zM98 32 l2 6-2 0-2-6z" fill="#22d3ee" opacity="0.8" />
      </svg>
    ),
  },
  data: {
    gradient: 'from-slate-900 via-blue-950/80 to-slate-900',
    pattern: (
      <svg viewBox="0 0 120 80" className="w-full h-full opacity-20" fill="none">
        {/* Bar chart */}
        <rect x="14" y="44" width="12" height="24" rx="2" fill="#3b82f6" />
        <rect x="32" y="28" width="12" height="40" rx="2" fill="#60a5fa" />
        <rect x="50" y="36" width="12" height="32" rx="2" fill="#3b82f6" />
        <rect x="68" y="18" width="12" height="50" rx="2" fill="#60a5fa" />
        <rect x="86" y="34" width="12" height="34" rx="2" fill="#3b82f6" />
        {/* Trend line */}
        <polyline points="20,48 38,30 56,40 74,20 92,36"
          stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
      </svg>
    ),
  },
  automation: {
    gradient: 'from-slate-900 via-violet-950/80 to-slate-900',
    pattern: (
      <svg viewBox="0 0 120 80" className="w-full h-full opacity-20" fill="none">
        {/* Gear outline */}
        <circle cx="60" cy="40" r="14" stroke="#a78bfa" strokeWidth="1.5" />
        <circle cx="60" cy="40" r="6"  stroke="#a78bfa" strokeWidth="1.5" />
        {/* Gear teeth */}
        {[0,45,90,135,180,225,270,315].map((deg) => {
          const rad  = (deg * Math.PI) / 180;
          const x1   = 60 + Math.cos(rad) * 14;
          const y1   = 40 + Math.sin(rad) * 14;
          const x2   = 60 + Math.cos(rad) * 20;
          const y2   = 40 + Math.sin(rad) * 20;
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" />;
        })}
        {/* Connecting nodes */}
        <circle cx="20" cy="25" r="4" stroke="#7c3aed" strokeWidth="1.5" />
        <circle cx="100" cy="25" r="4" stroke="#7c3aed" strokeWidth="1.5" />
        <circle cx="20" cy="55" r="4" stroke="#7c3aed" strokeWidth="1.5" />
        <line x1="24" y1="27" x2="46" y2="35" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="96" y1="27" x2="74" y2="35" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="24" y1="53" x2="46" y2="45" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    ),
  },
};

type Props = { project: Project; index: number; animate: boolean };

export default function ProjectCard({ project, index, animate }: Props) {
  const cover = COVERS[project.category];

  return (
    <div
      className={`card group flex flex-col h-full p-0 overflow-hidden transition-all duration-700 ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${project.featured ? 'ring-1 ring-cyan-500/20' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* ── Cover image / gradient ──────────────────────────────────────── */}
      <div className={`relative h-36 w-full bg-gradient-to-br ${cover.gradient} shrink-0`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            {cover.pattern}
          </div>
        )}
        {/* Category pill */}
        <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider
          px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-slate-300 border border-white/10">
          {project.category}
        </span>
        {/* Links */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm
                text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="GitHub">
              <FiGithub size={13} />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm
                text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Live link">
              <FiExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      {/* ── Card body ───────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3 className="font-bold text-slate-900 dark:text-white mb-2
          group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Metric badge */}
        {project.metrics && (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-400
            bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800/50
            rounded-lg px-2.5 py-1.5 mb-4 w-fit">
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
    </div>
  );
}
