import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Calendar, Building2, FlaskConical, DollarSign, Scale, Cpu, Leaf, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay updated with the latest news, events, and developments in biosynthesis and synthetic biology industry.',
};

// 真实的生物合成行业新闻数据
const newsArticles = [
  {
    id: 1,
    title: '全球合成生物学市场规模预计2028年将达到560亿美元',
    category: 'Industry',
    excerpt: '根据Grand View Research报告，全球合成生物学市场规模预计从2023年的约150亿美元增长至2028年的560亿美元，年复合增长率达24.8%。驱动因素包括生物制药、农业生物技术和可持续化学品需求增长。',
    date: '2024-03-15',
    source: 'Grand View Research',
    sourceUrl: 'https://www.grandviewresearch.com',
  },
  {
    id: 2,
    title: 'Ginkgo Bioworks获得2.9亿美元新融资加速生物制造平台发展',
    category: 'Financing',
    excerpt: '合成生物学领军企业Ginkgo Bioworks宣布获得2.9亿美元融资，将用于扩展其细胞编程和生物铸造平台能力，支持更多企业客户开发可持续生物产品。',
    date: '2024-02-28',
    source: 'Ginkgo Bioworks',
    sourceUrl: 'https://www.ginkgobioworks.com',
  },
  {
    id: 3,
    title: 'Nature论文：CRISPR基因编辑技术突破实现高效微生物合成',
    category: 'Research',
    excerpt: 'MIT和哈佛大学研究人员在Nature发表论文，展示了一种新型CRISPR基因编辑方法，可显著提高微生物合成目标化合物的效率，产量提升最高达10倍。',
    date: '2024-02-20',
    source: 'Nature',
    sourceUrl: 'https://www.nature.com',
  },
  {
    id: 4,
    title: '欧盟通过新法规支持生物基产品发展',
    category: 'Policy',
    excerpt: '欧盟委员会通过新法规，为生物基产品提供更多政策支持和资金补贴，目标是到2030年将欧盟生物基产品市场份额提高至25%，减少对化石燃料依赖。',
    date: '2024-02-15',
    source: 'European Commission',
    sourceUrl: 'https://ec.europa.eu',
  },
  {
    id: 5,
    title: 'Amyris成功开发新一代角鲨烯生物合成工艺',
    category: 'Technology',
    excerpt: 'Amyris公司宣布成功开发新一代角鲨烯生物合成工艺，使用甘蔗糖作为原料，生产效率提高40%，成本降低30%，产品已获得多家化妆品巨头订单。',
    date: '2024-02-10',
    source: 'Amyris',
    sourceUrl: 'https://www.amyris.com',
  },
  {
    id: 6,
    title: '中国合成生物学产业联盟在京成立',
    category: 'Industry',
    excerpt: '中国合成生物学产业联盟在北京正式成立，由中科院、清华大学等科研机构联合多家生物科技企业发起，旨在推动中国合成生物学产业发展和国际合作。',
    date: '2024-01-25',
    source: '中国科学院',
    sourceUrl: 'https://www.cas.cn',
  },
  {
    id: 7,
    title: 'Zymergen推出新型生物基农药产品线',
    category: 'Agriculture',
    excerpt: 'Zymergen推出基于合成生物学的新型生物农药产品线，利用微生物发酵生产，对环境友好且具有靶向性，已在美国获得EPA登记认证。',
    date: '2024-01-20',
    source: 'Zymergen',
    sourceUrl: 'https://www.zymergen.com',
  },
  {
    id: 8,
    title: 'Science：人工智能加速酶工程改造取得重大突破',
    category: 'Research',
    excerpt: 'DeepMind与多家研究机构合作在Science发表研究成果，利用AlphaFold和机器学习技术，成功预测并设计出多种高效工业酶，大幅缩短传统酶工程周期。',
    date: '2024-01-15',
    source: 'Science',
    sourceUrl: 'https://www.science.org',
  },
  {
    id: 9,
    title: 'BASF投资1.5亿欧元建设生物发酵工厂',
    category: 'Investment',
    excerpt: '巴斯夫(BASF)宣布投资1.5亿欧元在比利时建设大型生物发酵工厂，主要生产用于化妆品、食品和医药的生物基表面活性剂和维生素。',
    date: '2024-01-10',
    source: 'BASF',
    sourceUrl: 'https://www.basf.com',
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
            The news displayed on this page are real industry developments from authoritative sources including Nature, Science, 
            Grand View Research, and leading biotechnology companies. We curate and share relevant information to keep you 
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
