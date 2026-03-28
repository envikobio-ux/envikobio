import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay updated with the latest news, events, and developments from Enviko Biotechnology.',
};

const newsArticles = [
  {
    id: 1,
    title: 'Enviko\'s Contribution to Cosmetics',
    category: 'Cosmetics',
    excerpt: 'Enviko is transforming the cosmetics industry with innovative biosynthesis solutions, offering natural and sustainable alternatives to traditional ingredients.',
    date: '2024-01-15',
    image: '/news-1.jpeg',
  },
  {
    id: 2,
    title: 'Biosynthesis in Pharmaceutical Applications',
    category: 'Pharmaceuticals',
    excerpt: 'Enviko\'s biosynthesis technology is revolutionizing the pharmaceutical industry, offering a sustainable alternative to traditional manufacturing methods.',
    date: '2024-01-10',
    image: '/news-2.jpeg',
  },
  {
    id: 3,
    title: 'Enviko\'s Role in Sustainable Agriculture',
    category: 'Agriculture',
    excerpt: 'Enviko is pioneering innovative biosynthesis solutions for sustainable agriculture, offering environmentally friendly alternatives to synthetic chemicals.',
    date: '2024-01-05',
    image: '/news-3.jpeg',
  },
  {
    id: 4,
    title: 'New Research Partnership Announced',
    category: 'Partnership',
    excerpt: 'Enviko establishes new collaboration with leading university to advance biosynthesis research.',
    date: '2024-01-01',
    image: '/hero-lab.jpeg',
  },
  {
    id: 5,
    title: 'Sustainability Award Recognition',
    category: 'Awards',
    excerpt: 'Enviko receives recognition for commitment to sustainable practices in biotechnology.',
    date: '2023-12-20',
    image: '/agriculture-sustainable.jpeg',
  },
  {
    id: 6,
    title: 'Expansion of Production Facilities',
    category: 'Company News',
    excerpt: 'Announcing the expansion of our production capabilities to meet growing demand.',
    date: '2023-12-15',
    image: '/fermentation-tech.jpeg',
  },
];

const categories = [
  'All',
  'Pharmaceuticals',
  'Cosmetics',
  'Agriculture',
  'Partnership',
  'Awards',
  'Company News',
];

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-brand-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-lab.jpeg"
            alt="Laboratory Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Latest News & Events
            </h1>
            <p className="text-lg text-gray-600">
              Discover recent updates, projects, and upcoming biotech events from Enviko Biotechnology.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b sticky top-16 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                className={index === 0 ? 'bg-brand-600 hover:bg-brand-700' : 'border-gray-300'}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand-600 bg-green-50 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button asChild variant="link" className="text-brand-600 p-0">
                    <Link href={`/news/${article.id}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/analytics-equipment.jpeg"
            alt="Technology Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 to-brand-800/90"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-brand-100 mb-8">
            Subscribe to our newsletter to receive the latest news and updates from Enviko.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <Button className="bg-white text-brand-600 hover:bg-brand-50 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
