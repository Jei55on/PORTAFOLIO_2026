'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { aboutValues, certifications, education, siteConfig } from '@/lib/data';

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} id="about" className="section-container">
      <SectionHeader
        label="About"
        title="Who I Am"
        subtitle="Aeronautical Engineer and Data Analyst committed to operational safety and continuous improvement."
      />

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Left — avatar + stats */}
        <div className="flex flex-col items-center lg:items-start gap-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl shadow-cyan-500/20">
              <div className="w-full h-full rounded-[1.375rem] bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                <span className="text-6xl">✈️</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-lg text-center">
              <p className="text-lg font-bold text-cyan-500">4+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">Years Exp.</p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
            {[
              { value: '6',    label: 'Roles' },
              { value: 'IOSA', label: 'Certification' },
              { value: 'FDM',  label: 'Specialization' },
            ].map((s) => (
              <div key={s.label} className="card text-center py-4">
                <p className="text-xl font-bold gradient-text">{s.value}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="card w-full max-w-sm">
            <p className="text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-3">
              Certifications
            </p>
            <ul className="space-y-1.5">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <span className="text-cyan-500 shrink-0">▸</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — bio + education + location */}
        <div className="flex flex-col gap-6">
          <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
            {siteConfig.bio.trim().split('\n').map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
          </div>

          {/* Education */}
          <div className="card">
            <p className="text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-4">
              Education
            </p>
            <div className="space-y-4">
              {education.map((ed) => (
                <div key={ed.institution + ed.degree} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-slate-900 dark:text-white text-sm">
                        {ed.degree}
                      </p>
                      {ed.current && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50">
                          In progress
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {ed.institution} · {ed.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span>📍</span> {siteConfig.location}
          </p>
        </div>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
        {aboutValues.map((v, i) => (
          <div
            key={v.title}
            className={`card transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${i * 100 + 200}ms` }}
          >
            <span className="text-2xl mb-3 block">{v.icon}</span>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">{v.title}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
