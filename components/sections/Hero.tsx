'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiArrowDown, FiLinkedin, FiGithub } from 'react-icons/fi';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { siteConfig } from '@/lib/data';

const TYPING_TITLES = [
  'Data Analyst',
  'Aeronautical Engineer',
  'Safety & Quality Specialist',
  'Automation Builder',
];

export default function Hero() {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let titleIdx = 0;
    let charIdx  = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = TYPING_TITLES[titleIdx];
      if (!typingRef.current) return;

      if (!deleting) {
        typingRef.current.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        typingRef.current.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          titleIdx = (titleIdx + 1) % TYPING_TITLES.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 60 : 90);
    };

    timeout = setTimeout(tick, 400);
    return () => clearTimeout(timeout);
  }, []);

  const scrollToAbout = () =>
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-[#020617]"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 dark:opacity-100" />

      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl animate-float"
        style={{ animationDelay: '3s' }}
      />

      <div className="relative section-container flex flex-col items-start gap-8 pt-24">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-green-200 dark:border-green-800/60 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-slow" />
          Available for new opportunities
        </div>

        {/* Name */}
        <div className="animate-fade-up">
          <p className="text-sm font-mono text-cyan-500 dark:text-cyan-400 mb-2 tracking-widest uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {siteConfig.name}
          </h1>
        </div>

        {/* Typing title */}
        <div
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold animate-fade-up"
          style={{ animationDelay: '150ms' }}
        >
          <span className="gradient-text">
            <span ref={typingRef} />
            <span className="animate-pulse text-cyan-400">|</span>
          </span>
        </div>

        {/* Tagline */}
        <p
          className="max-w-xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed animate-fade-up"
          style={{ animationDelay: '250ms' }}
        >
          {siteConfig.heroTagline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: '350ms' }}
        >
          <button
            onClick={() =>
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-primary"
          >
            View My Work
          </button>
          <button
            onClick={scrollToAbout}
            className="btn-secondary"
          >
            <HiOutlineDocumentDownload size={18} />
            Download CV
          </button>
        </div>

        {/* Social links */}
        <div
          className="flex items-center gap-4 animate-fade-up"
          style={{ animationDelay: '450ms' }}
        >
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <FiLinkedin size={16} /> LinkedIn
          </Link>
          <span className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <FiGithub size={16} /> GitHub
          </Link>
        </div>

        {/* Scroll cue */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-slate-400 dark:text-slate-600 hover:text-cyan-500 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <span>Scroll</span>
          <FiArrowDown size={16} />
        </button>
      </div>
    </section>
  );
}
