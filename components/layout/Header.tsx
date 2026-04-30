'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';
import { siteConfig } from '@/lib/data';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted]     = useState(false);
  const { theme, setTheme }       = useTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-lg gradient-text tracking-tight"
          >
            {siteConfig.name.split(' ')[0]}
            <span className="text-slate-400 dark:text-slate-600">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.href.startsWith('/') ? (
                <Link key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              ),
            )}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-slate-500 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
              </button>
            )}

            {/* CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
            >
              Hire Me
            </button>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg text-slate-500 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 overflow-hidden',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800/50 px-4 py-4 flex flex-col gap-3">
          {navItems.map((item) =>
            item.href.startsWith('/') ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="nav-link text-base py-2 border-b border-slate-100 dark:border-slate-800 last:border-0"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="nav-link text-base py-2 border-b border-slate-100 dark:border-slate-800 last:border-0 text-left"
              >
                {item.label}
              </button>
            ),
          )}
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-primary mt-2 justify-center"
          >
            Hire Me
          </button>
        </nav>
      </div>
    </header>
  );
}
