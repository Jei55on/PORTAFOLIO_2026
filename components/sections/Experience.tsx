'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { experiences } from '@/lib/data';

export default function Experience() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="experience"
      className="section-container bg-slate-50/50 dark:bg-slate-900/20"
    >
      <SectionHeader
        label="Experience"
        title="Career Journey"
        subtitle="Roles where I have applied data and engineering to drive real impact."
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-blue-500/30 to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={exp.company + exp.period}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-0 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500 border-2 border-white dark:border-slate-950 shadow-md shadow-cyan-500/40 mt-1.5 md:mt-4" />

              {/* Left column (date) — desktop only */}
              <div className="hidden md:flex md:w-1/2 md:pr-12 md:justify-end">
                <div className="text-right pt-3">
                  <p className="text-sm font-mono text-cyan-500 dark:text-cyan-400">
                    {exp.period}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                    {exp.location}
                  </p>
                </div>
              </div>

              {/* Right column (card) */}
              <div className="pl-12 md:pl-12 md:w-1/2">
                <div className="card group">
                  {/* Mobile date */}
                  <p className="md:hidden text-xs font-mono text-cyan-500 dark:text-cyan-400 mb-2">
                    {exp.period} · {exp.location}
                  </p>

                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-3">
                    {exp.company}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.description.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex gap-2"
                      >
                        <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag text-[10px]">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
