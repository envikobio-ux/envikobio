import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Building2, FlaskConical, DollarSign, Scale, Cpu, Leaf, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay updated with the latest news, events, and developments in biosynthesis and synthetic biology industry.',
};

// Industry news for B2B biotechnology sector
const newsArticles: Array<{
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  source: string;
  sourceUrl: string;
}> = [
  {
    id: 1,
    title: 'Global Biosynthesis Market to Reach $89.3 Billion by 2030',
    category: 'Industry',
    excerpt: 'The global biosynthesis market is projected to grow at a CAGR of 8.7% from 2024 to 2030, driven by increasing demand for sustainable manufacturing processes and bio-based products.',
    date: '2025-03-15',
    source: 'Market Research Future',
    sourceUrl: 'https://www.marketresearchfuture.com',
  },
  {
    id: 2,
    title: 'China Strengthens Biotechnology Export Regulations',
    category: 'Policy',
    excerpt: 'New export control measures for biotechnology products aim to ensure quality standards while promoting international trade compliance for Chinese biotech companies.',
    date: '2025-03-10',
    source: 'China Daily',
    sourceUrl: 'https://www.chinadaily.com.cn',
  },
  {
    id: 3,
    title: 'Synthetic Biology Breakthrough in Pharmaceutical Intermediates',
    category: 'Research',
    excerpt: 'Researchers develop novel biosynthesis pathway for high-value pharmaceutical intermediates, reducing production costs by 40% compared to traditional chemical synthesis.',
    date: '2025-03-08',
    source: 'Nature Biotechnology',
    sourceUrl: 'https://www.nature.com/nbt',
  },
  {
    id: 4,
    title: 'EU Approves New Food Additives from Biosynthesis',
    category: 'Policy',
    excerpt: 'European Food Safety Authority (EFSA) approves three new bio-based food additives, opening opportunities for Asian biotech exporters in the European market.',
    date: '2025-03-05',
    source: 'EFSA',
    sourceUrl: 'https://www.efsa.europa.eu',
  },
  {
    id: 5,
    title: 'Sustainable Agriculture: Bio-fertilizers Market Expansion',
    category: 'Agriculture',
    excerpt: 'Bio-fertilizers market expected to witness significant growth as global agriculture shifts towards sustainable practices, with Asia-Pacific leading production capacity.',
    date: '2025-03-01',
    source: 'AgriBusiness Global',
    sourceUrl: 'https://www.agribusinessglobal.com',
  },
  {
    id: 6,
    title: 'Biotech Startup Raises $50M for Fermentation Technology',
    category: 'Financing',
    excerpt: 'Series B funding will accelerate commercial-scale production of biosynthesized ingredients for cosmetics and nutraceuticals industries.',
    date: '2025-02-28',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
  },
  {
    id: 7,
    title: 'US-China Trade Relations: Impact on Biotech Imports',
    category: 'Industry',
    excerpt: 'Analysis of tariff changes and regulatory developments affecting biotechnology trade between China and the United States in 2025.',
    date: '2025-02-25',
    source: 'Reuters',
    sourceUrl: 'https://www.reuters.com',
  },
  {
    id: 8,
    title: 'AI-Powered Enzyme Engineering Revolutionizes Biosynthesis',
    category: 'Technology',
    excerpt: 'Machine learning algorithms enable rapid optimization of enzyme catalysts, reducing development time for new biosynthesis processes from years to months.',
    date: '2025-02-20',
    source: 'Science Magazine',
    sourceUrl: 'https://www.science.org',
  },
  {
    id: 9,
    title: 'Cosmetics Industry Shifts to Bio-based Ingredients',
    category: 'Industry',
    excerpt: 'Major cosmetic brands announce commitments to source 50% of ingredients from biosynthesis by 2030, driving demand for sustainable raw materials.',
    date: '2025-02-15',
    source: 'Cosmetics Design',
    sourceUrl: 'https://www.cosmeticsdesign.com',
  },
];

const categories = [
  { name: 'All', icon: null },
  { name: 'Industry', icon: Building2 },
  { name: 'Financing', icon: DollarSign },
  { name: 'Research', icon: FlaskConical },
  { name: 'Policy', icon: Scale },
  { name: 'Technology', icon: Cpu },
  { name: 'Agriculture', icon: Leaf },
  { name: 'Investment', icon: TrendingUp },
];

const categoryColors: Record<string, string> = {
  'Industry': 'bg-blue-100 text-blue-700',
  'Financing': 'bg-green-100 text-green-700',
  'Research': 'bg-purple-100 text-purple-700',
  'Policy': 'bg-orange-100 text-orange-700',
  'Technology': 'bg-cyan-100 text-cyan-700',
  'Agriculture': 'bg-lime-100 text-lime-700',
  'Investment': 'bg-amber-100 text-amber-700',
};

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
              Industry News & Events
            </h1>
            <p className="text-lg text-gray-600">
              Stay updated with the latest developments in biosynthesis, synthetic biology, and sustainable biotechnology.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 bg-gray-50 border-y sticky top-16 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.name}
                  variant={index === 0 ? 'default' : 'outline'}
                  size="sm"
                  className={index === 0 ? 'bg-gray-900 hover:bg-gray-800' : 'border-gray-300 text-gray-600'}
                >
                  {Icon && <Icon className="w-4 h-4 mr-1" />}
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {newsArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className="border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-normal px-2 py-1 rounded ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                        {article.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-normal text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    {/* Source */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500">
                        Source: {article.source}
                      </span>
                      <a 
                        href={article.sourceUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-600 hover:text-brand-700 text-sm font-normal inline-flex items-center transition-colors"
                        style={{ color: '#A1BA80' }}
                      >
                        Read <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Coming Soon</p>
              <p className="text-gray-400 text-sm mt-2">Industry news will be updated soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
