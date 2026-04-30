import Link from 'next/link';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import type { BlogPost } from '@/lib/data';
import { formatDate } from '@/lib/utils';

type Props = { post: BlogPost; index: number };

const CATEGORY_COLORS: Record<string, string> = {
  Aviation:     'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50',
  Automation:   'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/50',
  Strategy:     'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/50',
  Tutorial:     'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800/50',
  'Data Science': 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/50',
};

export default function BlogCard({ post, index }: Props) {
  const colorClass = CATEGORY_COLORS[post.category] ?? CATEGORY_COLORS.Tutorial;

  return (
    <Link href={`/blog/${post.slug}`} className="card group flex flex-col h-full hover:no-underline block">
      {/* Category */}
      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border w-fit mb-4 ${colorClass}`}>
        {post.category}
      </span>

      {/* Title */}
      <h3 className="font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex-1">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
          <FiClock size={12} />
          <span>{post.readTime}</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
        </div>
        <FiArrowRight
          size={14}
          className="text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all"
        />
      </div>
    </Link>
  );
}
