import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogArticles } from '@/data/blog-articles';
import BlogArticleContent from './BlogArticleContent';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return { title: 'Article Not Found | Alvokor BioSolution' };
  }

  return {
    title: `${article.title} | Alvokor BioSolution Blog`,
    description: article.description,
    keywords: article.keywords.join(', '),
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishDate,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Find related articles (same category, excluding current)
  const relatedArticles = blogArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-[#999999]">
          <Link href="/" className="hover:text-[#A1BA80] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#A1BA80] transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#666666]">{article.title.slice(0, 60)}...</span>
        </nav>

        {/* Category & Date */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-semibold text-[#A1BA80] bg-[#A1BA80]/10 px-4 py-1.5 rounded-full">
            {article.category}
          </span>
          <span className="text-sm text-[#999999]">{article.publishDate}</span>
          <span className="text-sm text-[#999999]">·</span>
          <span className="text-sm text-[#999999]">{article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {article.title}
        </h1>

        {/* Meta Description */}
        <p className="text-lg text-[#666666] leading-relaxed mb-8 border-l-4 border-[#A1BA80] pl-4">
          {article.description}
        </p>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2 mb-12">
          {article.keywords.map((kw) => (
            <span key={kw} className="text-xs text-[#A1BA80] bg-[#A1BA80]/5 border border-[#A1BA80]/20 px-3 py-1 rounded-full">
              {kw}
            </span>
          ))}
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <BlogArticleContent content={article.content} />
        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-[#F5F7FA] rounded-lg p-8">
            <h3 className="text-xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              About Alvokor BioSolution
            </h3>
            <p className="text-[#666666] leading-relaxed mb-4">
              Alvokor BioSolution is a GMP-certified B2B ingredient supplier serving cosmetic, pharmaceutical, 
              nutrition, and food sectors. We specialize in fermentation-derived biosynthetic ingredients 
              including ceramides, squalane, ectoine, hyaluronic acid, resveratrol, and GHK-Cu — 
              all backed by full regulatory documentation and dosage-form innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@alvokorbio.com"
                className="inline-flex items-center text-[#A1BA80] font-semibold hover:text-[#8FA76F] transition-colors"
              >
                📩 info@alvokorbio.com
              </a>
              <a
                href="https://www.alvokorbiosolution.com"
                className="inline-flex items-center text-[#A1BA80] font-semibold hover:text-[#8FA76F] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 www.alvokorbiosolution.com
              </a>
              <a
                href="https://wa.me/8613918629532"
                className="inline-flex items-center text-[#A1BA80] font-semibold hover:text-[#8FA76F] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp: +86 13918629532
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-[#F5F7FA] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#333333] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-xs font-semibold text-[#A1BA80] mb-2 block">{related.category}</span>
                  <h3 className="font-bold text-[#333333] mb-2 line-clamp-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {related.title}
                  </h3>
                  <p className="text-sm text-[#666666] line-clamp-2">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#A1BA80] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get Free Samples & Technical Documentation
          </h2>
          <p className="text-white/90 mb-8">
            Contact our team for complimentary samples, COA, TDS, and registration dossiers for any ingredient in our portfolio.
          </p>
          <a
            href="mailto:info@alvokorbio.com"
            className="inline-block bg-white text-[#A1BA80] font-semibold px-10 py-3 rounded-lg hover:bg-[#F5F7FA] transition-colors"
          >
            Contact Us for Free Samples
          </a>
        </div>
      </section>
    </main>
  );
}