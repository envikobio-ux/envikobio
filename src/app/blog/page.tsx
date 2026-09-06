import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_ARTICLES } from '@/data/blog-articles';

export const metadata: Metadata = {
  title: 'Blog | Biosynthetic Ingredient Insights & Industry Guides',
  description: 'Expert guides on choosing biosynthetic ingredient suppliers, fermentation technology, cosmetic raw materials sourcing, and regulatory compliance for R&D directors, procurement managers, and production heads.',
  keywords: 'biosynthetic ingredient supplier, fermentation raw materials, cosmetic ingredient sourcing, biotechnology blog, sustainable ingredient guide',
  openGraph: {
    title: 'Alvokor BioSolution Blog | Biosynthetic Ingredient Expertise',
    description: 'In-depth guides on biosynthetic ingredient sourcing, fermentation technology, regulatory compliance, and sustainable supply chain for beauty, nutrition, and pharma industries.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#A1BA80] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Alvokor BioSolution Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Expert insights on biosynthetic ingredient sourcing, fermentation technology, regulatory compliance, and sustainable supply chain solutions.
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_ARTICLES.map((article) => (
              <Link href={`/blog/${article.slug}`} key={article.slug} className="group">
                <Card className="h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-[#A1BA80]/10 to-[#4A90C2]/10 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-[#A1BA80]/30" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#999999] mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-[#333333] mb-3 group-hover:text-[#A1BA80] transition-colors line-clamp-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {article.title}
                    </h2>
                    <p className="text-sm text-[#666666] mb-4 line-clamp-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-[#A1BA80] text-sm font-semibold group-hover:text-[#4A90C2] transition-colors">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#A1BA80]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Stay Updated
          </h2>
          <p className="text-lg text-blue-100 mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get the latest biosynthetic ingredient insights delivered to your inbox. Subscribe to our newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <a
              href="mailto:info@alvokorbio.com?subject=Blog%20Subscription%20Request"
              className="flex-1 bg-white text-[#A1BA80] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Subscribe via Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}