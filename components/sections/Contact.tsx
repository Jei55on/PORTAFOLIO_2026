'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiSend, FiLinkedin, FiGithub, FiMail, FiMapPin } from 'react-icons/fi';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { siteConfig } from '@/lib/data';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xpqbzroy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-container">
      <SectionHeader
        label="Contact"
        title="Let's Talk"
        subtitle="Whether you have a project in mind, a question, or just want to connect — my inbox is open."
      />

      <div
        ref={ref}
        className={`grid grid-cols-1 lg:grid-cols-5 gap-10 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Left — contact info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="card">
            <p className="text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-4">
              Get in touch
            </p>
            <div className="space-y-4">
              <ContactItem icon={<FiMail size={16} />} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
              <ContactItem icon={<FiMapPin size={16} />} label="Location" value={siteConfig.location} />
              <ContactItem icon={<FiLinkedin size={16} />} label="LinkedIn" value={siteConfig.linkedin.replace('https://', '')} href={siteConfig.linkedin} />
              <ContactItem icon={<FiGithub size={16} />} label="GitHub" value={siteConfig.github.replace('https://', '')} href={siteConfig.github} />
            </div>
          </div>

          <div className="card">
            <p className="text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-3">
              Response time
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              I typically respond within <strong className="text-slate-900 dark:text-white">24 hours</strong> on business days.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-3 card space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                Name *
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="John Doe"
                className="input-field"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                Email *
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/, message: 'Invalid email' },
                })}
                type="email"
                placeholder="john@example.com"
                className="input-field"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
              Subject *
            </label>
            <input
              {...register('subject', { required: 'Subject is required' })}
              placeholder="Project inquiry / Collaboration / Other"
              className="input-field"
            />
            {errors.subject && (
              <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
              Message *
            </label>
            <textarea
              {...register('message', {
                required: 'Message is required',
                minLength: { value: 20, message: 'At least 20 characters' },
              })}
              rows={5}
              placeholder="Tell me about your project or how I can help..."
              className="input-field resize-none"
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Sending…
              </>
            ) : status === 'success' ? (
              <>✓ Message sent!</>
            ) : (
              <>
                <FiSend size={16} /> Send Message
              </>
            )}
          </button>

          {status === 'error' && (
            <p className="text-xs text-red-500 text-center">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="text-cyan-500 shrink-0">{icon}</span>
      <div>
        <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wide">{label}</p>
        <p className="text-sm text-slate-700 dark:text-slate-300">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-500 transition-colors">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}
