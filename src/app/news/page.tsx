import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Building2, FlaskConical, DollarSign, Scale, Cpu, Leaf, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Insights',
  description: 'Stay updated with the latest news, events, and industry insights on biosynthesis, sustainable ingredients, and biotechnology sourcing.',
};

// SEO Insight articles with internal links
const insightArticles: Array<{
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
}> = [
  {
    slug: 'eco-friendly-cosmetic-supplier',
    title: 'The Ultimate Buyer\'s Guide to Eco-Friendly Cosmetic Raw Materials Suppliers',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing sustainable cosmetic ingredients. Learn about green bio-catalysis, Ecocert/COSMOS certifications, and how to partner with eco-conscious suppliers.',
    date: '2026-03-29',
    readTime: '12 min read',
  },
  {
    slug: 'cosmetic-peptides-supplier',
    title: 'The Ultimate Buyer Guide to Active Cosmetic Peptides: Sourcing, Quality, and Regulatory Compliance',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing cosmetic peptides. Learn about FDA DMF certifications, quality standards, and how to choose a reliable peptide supplier.',
    date: '2026-04-02',
    readTime: '14 min read',
  },
  {
    slug: 'nag-supplier',
    title: 'NAG Sourcing Manual: Fermentation vs. Crustacean Extraction',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing N-Acetyl Glucosamine (NAG). Compare fermentation vs. crustacean extraction, quality standards, and top suppliers.',
    date: '2026-04-05',
    readTime: '11 min read',
  },
  {
    slug: 'biosynthesis-food-additives',
    title: 'Biosynthesis Food Additives Manufacturer: The Future of Clean-Label Food Production',
    category: 'Insights',
    excerpt: 'Complete guide to biosynthetic food additives. Learn about enzymatic conversion, FDA GRAS status, and how to source clean-label ingredients.',
    date: '2026-04-08',
    readTime: '10 min read',
  },
  {
    slug: 'natural-supplement-raw-materials-china',
    title: 'Natural Health Supplement Raw Materials: A Complete Sourcing Guide',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing natural supplement ingredients. Learn about yeast fermentation, USP certifications, and top suppliers for 5-HTP, Resveratrol, and more.',
    date: '2026-04-12',
    readTime: '13 min read',
  },
  {
    slug: 'proxylane-green-synthesis',
    title: 'Pro-Xylane Supplier: The Complete Guide to Sourcing High-Purity Anti-Aging Actives',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing Pro-Xylane (Hydroxypropyl Tetrahydropyrantriol). Learn about green enzymatic synthesis, quality standards, and top suppliers.',
    date: '2026-04-15',
    readTime: '10 min read',
  },
  {
    slug: 'hyaluronic-acid-sourcing',
    title: 'Hyaluronic Acid Sourcing Guide: Fermentation vs. Animal Extraction',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing hyaluronic acid. Compare microbial fermentation vs. animal extraction, quality standards, molecular weights, and supplier selection.',
    date: '2026-04-18',
    readTime: '14 min read',
  },
  {
    slug: 'bakuchiol-natural-retinol',
    title: 'Bakuchiol: The Complete Guide to Sourcing the Natural Retinol Alternative',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing Bakuchiol. Learn about this natural retinol alternative, clinical efficacy, quality standards, and how to choose a reliable supplier.',
    date: '2026-04-22',
    readTime: '12 min read',
  },
  {
    slug: 'collagen-peptides-sourcing',
    title: 'Collagen Peptides Sourcing Guide: Marine vs. Bovine vs. Porcine',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing collagen peptides. Compare marine vs. bovine vs. porcine sources, quality standards, molecular weight, and supplier selection.',
    date: '2026-04-26',
    readTime: '13 min read',
  },
  {
    slug: 'ectoin-sourcing',
    title: 'Ectoin Sourcing Guide: The Complete Manual for Anti-Pollution Skin Protection',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing Ectoin. Learn about this extremolyte ingredient, anti-pollution protection, barrier repair, and quality standards.',
    date: '2026-05-02',
    readTime: '11 min read',
  },
  {
    slug: 'glutathione-sourcing',
    title: 'Glutathione: The Complete Guide to Sourcing the Master Antioxidant',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing Glutathione. Compare fermentation vs. chemical synthesis, quality standards, bioavailability, and supplier selection.',
    date: '2026-05-08',
    readTime: '13 min read',
  },
  {
    slug: 'nmn-sourcing',
    title: 'NMN Sourcing Guide: The Complete Anti-Aging Molecule Manual',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing NMN. Compare enzymatic vs. chemical synthesis, quality standards, bioavailability, and regulatory status.',
    date: '2026-05-15',
    readTime: '14 min read',
  },
  {
    slug: 'erythritol-monkfruit-sourcing',
    title: 'Erythritol & Monk Fruit Sweeteners: Complete Sourcing Guide',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing erythritol and monk fruit sweeteners. Compare production methods, quality standards, and applications for natural sugar alternatives.',
    date: '2026-05-20',
    readTime: '12 min read',
  },
  {
    slug: 'algae-omega3-sourcing',
    title: 'Algae Omega-3 Sourcing Guide: Sustainable DHA & EPA',
    category: 'Insights',
    excerpt: 'Complete guide to sourcing algae omega-3. Compare microalgae vs. fish oil, quality standards, sustainability, and vegan-friendly sourcing.',
    date: '2026-05-28',
    readTime: '13 min read',
  },
];

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
  { name: 'Insights', icon: BookOpen },
  { name: 'Industry', icon: Building2 },
  { name: 'Financing', icon: DollarSign },
  { name: 'Research', icon: FlaskConical },
  { name: 'Policy', icon: Scale },
  { name: 'Technology', icon: Cpu },
  { name: 'Agriculture', icon: Leaf },
  { name: 'Investment', icon: TrendingUp },
];

const categoryColors: Record<string, string> = {
  'Insights': 'bg-green-100 text-green-700',
  'Industry': 'bg-blue-100 text-blue-700',
  'Financing': 'bg-emerald-100 text-emerald-700',
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
              News & Insights
            </h1>
            <p className="text-lg text-gray-600">
              Stay updated with industry news, expert insights, and in-depth sourcing guides for biosynthesis and sustainable biotechnology.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Section - Featured Articles */}
      <section className="py-12" style={{ backgroundColor: '#f8faf5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6" style={{ color: '#A1BA80' }} />
            <h2 className="text-2xl font-normal text-gray-900">Industry Insights & Sourcing Guides</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightArticles.map((article, index) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="block">
                <Card className="h-full border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    {/* Category & Meta */}
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
                    <h3 className="text-base font-normal text-gray-900 mb-3 line-clamp-2 min-h-[3rem]">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                      <span className="text-sm font-normal inline-flex items-center transition-colors" style={{ color: '#A1BA80' }}>
                        Read More <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry News Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-6 h-6" style={{ color: '#A1BA80' }} />
            <h2 className="text-2xl font-normal text-gray-900">Industry News</h2>
          </div>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-normal text-gray-900 mb-4">Need Expert Sourcing Advice?</h2>
          <p className="text-gray-600 mb-6">Our team of experts can help you find the right suppliers and ingredients for your business.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button className="text-white font-normal px-6" style={{ backgroundColor: '#A1BA80' }}>
                Contact Our Team
              </Button>
            </Link>
            <a href="mailto:BD@envikobio.com">
              <Button variant="outline" className="font-normal px-6" style={{ borderColor: '#A1BA80', color: '#A1BA80' }}>
                BD@envikobio.com
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
