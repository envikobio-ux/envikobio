'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogArticles } from '@/data/blog-articles';

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  // Sort by publish date descending (newest first)
  const sortedArticles = [...blogArticles].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const visibleArticles = sortedArticles.slice(0, visibleCount);
  const hasMore = visibleCount < sortedArticles.length;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#A1BA80]/10 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Alvokor BioSolution Blog
          </h1>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Insights on biosynthetic ingredients, supply chain optimization, regulatory updates, 
            and formulation innovation for the cosmetic, pharmaceutical, and food industries.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {visibleArticles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#999999] text-lg">No articles published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-[#F5F7FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Category & Date */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-[#A1BA80] bg-[#A1BA80]/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-[#999999]">{article.publishDate}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-[#333333] mb-3 group-hover:text-[#A1BA80] transition-colors line-clamp-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-[#666666] leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {article.description}
                  </p>

                  {/* Keywords and Read Time */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {article.keywords.slice(0, 3).map((kw) => (
                        <span key={kw} className="text-xs text-[#999999] bg-white px-2 py-0.5 rounded">
                          {kw}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                      <span className="text-xs text-[#999999]">{article.readTime} read</span>
                      <span className="text-sm font-medium text-[#A1BA80] opacity-0 group-hover:opacity-100 transition-opacity">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-block bg-[#A1BA80] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#8FA76F] transition-colors"
            >
              Load More Articles
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#A1BA80] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Stay Updated with the Latest in Biosynthetic Ingredients
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter for regulatory updates, product innovations, and industry insights delivered to your inbox.
          </p>
          <a
            href="mailto:info@alvokorbio.com?subject=Blog%20Subscription"
            className="inline-block bg-white text-[#A1BA80] font-semibold px-10 py-3 rounded-lg hover:bg-[#F5F7FA] transition-colors"
          >
            Subscribe via Email
          </a>
        </div>
      </section>
    </main>
  );
}