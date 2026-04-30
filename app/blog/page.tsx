import { blogPosts } from '@/lib/data';
import BlogCard from '@/components/ui/BlogCard';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata = {
  title: 'Blog | Data, Aviation & Strategy',
  description:
    'Insights on data analysis, aviation safety, and strategic decision-making.',
};

export default function BlogPage() {
  return (
    <section className="section-container pt-28">
      <SectionHeader
        label="Blog"
        title="Insights & Perspectives"
        subtitle="Thoughts on data, aviation safety, and strategic decision-making at the intersection of engineering and analytics."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
