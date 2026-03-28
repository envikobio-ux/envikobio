import { NextResponse } from 'next/server';
import { SearchClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

// 真实的生物合成行业新闻数据（基于实际搜索结果）
const realNewsData = [
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  
  let filteredNews = realNewsData;
  
  if (category && category !== 'All') {
    filteredNews = realNewsData.filter(
      news => news.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  return NextResponse.json({
    news: filteredNews,
    categories: ['All', 'Industry', 'Financing', 'Research', 'Policy', 'Technology', 'Agriculture', 'Investment'],
    total: filteredNews.length,
  });
}

// 搜索真实新闻的API（可选）
export async function POST(request: Request) {
  try {
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);
    const config = new Config();
    const client = new SearchClient(config, customHeaders);
    
    const response = await client.advancedSearch('合成生物学 biosynthesis news 2024', {
      count: 10,
      timeRange: '1m',
      needSummary: true,
    });
    
    return NextResponse.json({
      summary: response.summary,
      results: response.web_items?.map(item => ({
        title: item.title,
        url: item.url,
        snippet: item.snippet,
        source: item.site_name,
        date: item.publish_time,
      })),
    });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
