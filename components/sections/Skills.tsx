'use client';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import SkillCard from '@/components/ui/SkillCard';
import { skillCategories } from '@/lib/data';

export default function Skills() {
  const { ref, visible } = useScrollReveal();
  const [activeId, setActiveId] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((c) => c.id === activeId)!;

  return (
    <section id="skills" className="section-container bg-slate-50/50 dark:bg-slate-900/20">
      <SectionHeader
        label="Skills"
        title="Technical Expertise"
        subtitle="Tools and practices applied to real-world problems in aviation, data, and quality assurance."
      />

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {skillCategories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-cyan-500/50 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
            >
              <span className="text-base leading-none">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Skill cards grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {activeCategory.skills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={i}
            animate={visible}
          />
        ))}
      </div>

      {/* Supporting tools cloud */}
      <div
        className={`mt-14 pt-10 border-t border-slate-200 dark:border-slate-800 transition-all duration-700 delay-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
          Also familiar with
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'SAP', 'Microsoft SQL Server', 'MySQL', 'Power Pages',
            'MS Project', 'Agile / Scrum', 'ANSYS Fluent',
            'CAD (SolidWorks)', 'Linux', 'NTC ISO 9001',
          ].map((tool) => (
            <span key={tool} className="tag">{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
