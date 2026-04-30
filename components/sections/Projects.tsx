'use client';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data';

const FILTERS = ['all', 'data', 'automation', 'aviation'] as const;
type Filter = (typeof FILTERS)[number];

export default function Projects() {
  // Fix: ref on the section so visible=true before filter buttons are clicked
  const { ref, visible } = useScrollReveal();
  const [filter, setFilter] = useState<Filter>('all');

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section ref={ref} id="projects" className="section-container">
      <SectionHeader
        label="Projects"
        title="Selected Work"
        subtitle="A curated set of projects where data analysis, automation, and aviation safety intersect."
      />

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
              filter === f
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-cyan-500/50'
            }`}
          >
            {f === 'all' ? '✦ All' : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            animate={visible}
          />
        ))}
      </div>
    </section>
  );
}
