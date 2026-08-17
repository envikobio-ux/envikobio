import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_ARTICLES, getBlogArticleBySlug } from '@/data/blog-articles';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, ArrowRight, Mail, MessageCircle } from 'lucide-react';
import BlogArticleContent from './BlogArticleContent';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  
  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.metaDescription,
    keywords: article.keywords.join(', '),
    authors: [{ name: 'Alvokor BioSolution R&D Team' }],
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.metaDescription,
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: ['Alvokor BioSolution R&D Team'],
      tags: article.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription,
    },
  };
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map(article => ({
    slug: article.slug,
  }));
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-[#F5F7FA] py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-[#0F4C81] hover:text-[#4A90C2] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm text-[#999999] mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {article.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#333333] leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <BlogArticleContent article={article} />

      {/* CTA Section */}
      <section className="py-16 bg-[#0F4C81]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get Free COA & Trial Samples
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ready to evaluate our biosynthetic ingredients? Contact us for free Certificate of Analysis (COA) and trial samples tailored to your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@alvokorbio.com?subject=COA%20%26%20Trial%20Samples%20Request"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0F4C81] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Mail className="w-5 h-5" /> info@alvokorbio.com
            </a>
            <a
              href="https://wa.me/8613918629532"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp: +86 13918629532
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333333] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_ARTICLES.filter(a => a.slug !== article.slug).slice(0, 3).map((related) => (
              <Link href={`/blog/${related.slug}`} key={related.slug} className="group">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-base font-bold text-[#333333] mb-3 group-hover:text-[#0F4C81] transition-colors line-clamp-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {related.title}
                  </h3>
                  <p className="text-sm text-[#999999] mb-3 line-clamp-2">{(related as any).excerpt}</p>
                  <span className="text-[#0F4C81] text-sm font-semibold flex items-center gap-1">
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}