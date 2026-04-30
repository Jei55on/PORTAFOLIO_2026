import Link from 'next/link';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-bold gradient-text text-lg">{siteConfig.name}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {siteConfig.title}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </Link>
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="p-2 rounded-lg text-slate-500 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="Email"
            >
              <FiMail size={18} />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-400 dark:text-slate-600">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
