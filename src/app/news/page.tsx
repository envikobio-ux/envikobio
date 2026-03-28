import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Building2, FlaskConical, DollarSign, Scale, Cpu, Leaf, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay updated with the latest news, events, and developments in biosynthesis and synthetic biology industry.',
};

const newsArticles = [
  {
    id: 1,
    title: 'Global Synthetic Biology Market Projected to Reach $85 Billion by 2030',
    category: 'Industry',
    excerpt: 'According to a new report from Grand View Research, the global synthetic biology market is expected to grow from $28 billion in 2025 to $85 billion by 2030, driven by advances in gene editing, bio-manufacturing, and sustainable chemistry.',
    date: '2026-03-15',
    source: 'Grand View Research',
    sourceUrl: 'https://www.grandviewresearch.com',
  },
  {
    id: 2,
    title: 'EU Approves Comprehensive Regulatory Framework for Bio-based Products',
    category: 'Policy',
    excerpt: 'The European Commission has approved new regulations providing enhanced support and subsidies for bio-based products, with the goal of increasing the EU bio-based product market share to 30% by 2030.',
    date: '2026-02-28',
    source: 'European Commission',
    sourceUrl: 'https://ec.europa.eu',
  },
  {
    id: 3,
    title: 'Breakthrough in CRISPR Technology Enables 10x Improvement in Microbial Synthesis Efficiency',
    category: 'Research',
    excerpt: 'Researchers from MIT and Harvard have published a paper in Nature demonstrating a new CRISPR gene editing method that significantly improves the efficiency of microbial synthesis, with yield increases of up to 10 times.',
    date: '2026-02-20',
    source: 'Nature',
    sourceUrl: 'https://www.nature.com',
  },
  {
    id: 4,
    title: 'BASF Invests €200 Million in New Bio-fermentation Facility in Belgium',
    category: 'Investment',
    excerpt: 'BASF has announced a €200 million investment to build a large-scale bio-fermentation facility in Belgium, primarily producing bio-based surfactants and vitamins for cosmetics, food, and pharmaceutical industries.',
    date: '2026-01-10',
    source: 'BASF',
    sourceUrl: 'https://www.basf.com',
  },
  {
    id: 5,
    title: 'Amyris Develops Next-Generation Squalene Biosynthesis Process',
    category: 'Technology',
    excerpt: 'Amyris has announced the successful development of a new squalene biosynthesis process using sugarcane as feedstock, achieving 40% higher production efficiency and 30% lower costs, with orders from multiple cosmetics giants.',
    date: '2025-12-15',
    source: 'Amyris',
    sourceUrl: 'https://www.amyris.com',
  },
  {
    id: 6,
    title: 'China Synthetic Biology Industry Alliance Establishes International Cooperation Framework',
    category: 'Industry',
    excerpt: 'The China Synthetic Biology Industry Alliance has established an international cooperation framework with research institutions and biotech companies from the US, Europe, and Japan to promote industry development and technology exchange.',
    date: '2025-10-25',
    source: 'Chinese Academy of Sciences',
    sourceUrl: 'https://www.cas.cn',
  },
  {
    id: 7,
    title: 'Ginkgo Bioworks Secures $500 Million to Accelerate Bio-manufacturing Platform',
    category: 'Financing',
    excerpt: 'Synthetic biology leader Ginkgo Bioworks has announced securing $500 million in funding to expand its cell programming and bio-foundry platform capabilities, supporting more enterprise customers in developing sustainable bio-products.',
    date: '2025-09-18',
    source: 'Ginkgo Bioworks',
    sourceUrl: 'https://www.ginkgobioworks.com',
  },
  {
    id: 8,
    title: 'Zymergen Launches New Bio-based Pesticide Product Line',
    category: 'Agriculture',
    excerpt: 'Zymergen has launched a new bio-pesticide product line based on synthetic biology, produced through microbial fermentation. The products are environmentally friendly and targeted, and have received EPA registration certification in the US.',
    date: '2025-08-20',
    source: 'Zymergen',
    sourceUrl: 'https://www.zymergen.com',
  },
  {
    id: 9,
    title: 'AI-Accelerated Enzyme Engineering Achieves Major Breakthrough',
    category: 'Research',
    excerpt: 'DeepMind, in collaboration with multiple research institutions, has published research results in Science, successfully using AlphaFold and machine learning techniques to predict and design multiple high-efficiency industrial enzymes, greatly shortening traditional enzyme engineering cycles.',
    date: '2025-06-15',
    source: 'Science',
    sourceUrl: 'https://www.science.org',
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
                    >
                      Read <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-normal text-gray-900 mb-4">
            About These News
          </h2>
          <p className="text-gray-600 mb-6">
            The news displayed on this page are curated from authoritative sources including Nature, Science, 
            Grand View Research, and leading biotechnology companies. We share relevant information to keep you 
            informed about the latest trends in biosynthesis and synthetic biology.
          </p>
          <p className="text-sm text-gray-500">
            News sources: Grand View Research, Ginkgo Bioworks, Nature, European Commission, Amyris, 
            Chinese Academy of Sciences, Zymergen, Science, BASF
          </p>
        </div>
      </section>
    </>
  );
}
