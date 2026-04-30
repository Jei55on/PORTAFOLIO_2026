import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { blogPosts } from '@/lib/data';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="section-container pt-28 max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors mb-8"
      >
        <FiArrowLeft size={14} /> Back to Blog
      </Link>

      {/* Meta */}
      <div className="mb-6">
        <span className="tag text-xs">{post.category}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
        {post.title}
      </h1>

      <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
        <span>{formatDate(post.date)}</span>
        <span>·</span>
        <span className="flex items-center gap-1"><FiClock size={13} /> {post.readTime}</span>
      </div>

      {/* Placeholder content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {post.excerpt}
        </p>
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-8 text-center text-slate-400 dark:text-slate-600">
          <p className="text-sm">Full article content coming soon.</p>
          <p className="text-xs mt-2">Replace this section with MDX or CMS content.</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </article>
  );
}
