import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="text-7xl font-extrabold gradient-text mb-4">404</p>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Page not found
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
