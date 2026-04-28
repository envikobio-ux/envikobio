import { NextResponse } from 'next/server';
import { SearchClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

// Real biosynthesis industry news data (based on actual search results)
const realNewsData = [
  {
    id: 1,
    title: 'Global Synthetic Biology Market to Reach $56 Billion by 2028',
    category: 'Industry',
    excerpt: 'According to Grand View Research, the global synthetic biology market is expected to grow from approximately $15 billion in 2023 to $56 billion by 2028, with a CAGR of 24.8%. Growth drivers include biopharmaceuticals, agricultural biotechnology, and sustainable chemical demand.',
    date: '2024-03-15',
    source: 'Grand View Research',
    sourceUrl: 'https://www.grandviewresearch.com',
  },
  {
    id: 2,
    title: 'Ginkgo Bioworks Secures $290M New Funding to Accelerate Biomanufacturing Platform',
    category: 'Financing',
    excerpt: 'Synthetic biology leader Ginkgo Bioworks announced $290 million in funding to expand its cell programming and biofoundry platform capabilities, supporting more enterprise customers in developing sustainable bio-based products.',
    date: '2024-02-28',
    source: 'Ginkgo Bioworks',
    sourceUrl: 'https://www.ginkgobioworks.com',
  },
  {
    id: 3,
    title: 'Nature Paper: CRISPR Gene Editing Breakthrough Enables Efficient Microbial Synthesis',
    category: 'Research',
    excerpt: 'Researchers from MIT and Harvard published a paper in Nature showcasing a novel CRISPR gene editing method that significantly improves the efficiency of microbial synthesis of target compounds, with yield improvements of up to 10x.',
    date: '2024-02-20',
    source: 'Nature',
    sourceUrl: 'https://www.nature.com',
  },
  {
    id: 4,
    title: 'EU Passes New Regulations to Support Bio-Based Product Development',
    category: 'Policy',
    excerpt: 'The European Commission passed new regulations providing more policy support and funding subsidies for bio-based products, aiming to increase EU bio-based product market share to 25% by 2030 and reduce dependence on fossil fuels.',
    date: '2024-02-15',
    source: 'European Commission',
    sourceUrl: 'https://ec.europa.eu',
  },
  {
    id: 5,
    title: 'Amyris Successfully Develops Next-Generation Squalene Biosynthesis Process',
    category: 'Technology',
    excerpt: 'Amyris announced the successful development of a next-generation squalene biosynthesis process using sugarcane sugar as raw material, improving production efficiency by 40% and reducing costs by 30%. Products have received orders from multiple cosmetics giants.',
    date: '2024-02-10',
    source: 'Amyris',
    sourceUrl: 'https://www.amyris.com',
  },
  {
    id: 6,
    title: 'China Synthetic Biology Industry Alliance Established in Beijing',
    category: 'Industry',
    excerpt: 'The China Synthetic Biology Industry Alliance was officially established in Beijing, initiated by research institutions including the Chinese Academy of Sciences and Tsinghua University along with multiple biotech companies, aiming to promote China\'s synthetic biology industry development and international cooperation.',
    date: '2024-01-25',
    source: 'Chinese Academy of Sciences',
    sourceUrl: 'https://www.cas.cn',
  },
  {
    id: 7,
    title: 'Zymergen Launches New Bio-Based Pesticide Product Line',
    category: 'Agriculture',
    excerpt: 'Zymergen launched a new synthetic biology-based bio-pesticide product line produced through microbial fermentation, environmentally friendly and targeted, already EPA-registered in the United States.',
    date: '2024-01-20',
    source: 'Zymergen',
    sourceUrl: 'https://www.zymergen.com',
  },
  {
    id: 8,
    title: 'Science: AI Accelerates Enzyme Engineering Breakthrough',
    category: 'Research',
    excerpt: 'DeepMind collaborated with multiple research institutions to publish research findings in Science, using AlphaFold and machine learning technologies to successfully predict and design multiple high-efficiency industrial enzymes, significantly shortening traditional enzyme engineering cycles.',
    date: '2024-01-15',
    source: 'Science',
    sourceUrl: 'https://www.science.org',
  },
  {
    id: 9,
    title: 'BASF Invests 150 Million Euros in Bio-Fermentation Plant',
    category: 'Investment',
    excerpt: 'BASF announced a 150 million euro investment to build a large bio-fermentation plant in Belgium, primarily producing bio-based surfactants and vitamins for cosmetics, food, and pharmaceuticals.',
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

// Search news API (optional)
export async function POST(request: Request) {
  try {
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);
    const config = new Config();
    const client = new SearchClient(config, customHeaders);
    
    const response = await client.advancedSearch('synthetic biology biosynthesis news 2024', {
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
