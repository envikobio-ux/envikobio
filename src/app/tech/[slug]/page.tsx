import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, getArticlesByCategory, ARTICLE_CATEGORIES, TECH_ARTICLES } from '@/data/tech-articles';
import TechArticleContent from './TechArticleContent';
import ArticleSchema from './ArticleSchema';

// Generate metadata for SEO (AI-friendly)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const categoryInfo = ARTICLE_CATEGORIES.find(c => c.slug === article.category);
  const keywordsStr = article.keywords.join(', ');
  
  // AI-friendly meta title (≤60 chars)
  const metaTitle = `${article.title.split(' | ')[0]} | Technical Guide, Standards & Compliance`;
  
  // AI-friendly meta description with buyer questions
  const metaDescription = `Professional technical paper: ${article.excerpt}. Covers quality standards, regulatory compliance (FDA GRAS, REACH, HALAL), testing methods, and sourcing guidelines for ${article.tags[0]} importers and R&D engineers.`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywordsStr,
    authors: [{ name: 'Alvokor Bio R&D Team' }],
    openGraph: {
      type: 'article',
      title: metaTitle,
      description: metaDescription,
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: ['Alvokor Bio R&D Team'],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
    },
    other: {
      'article:published_time': article.date,
      'article:modified_time': article.date,
      'article:author': 'Alvokor Bio R&D Team',
      'article:section': categoryInfo?.name || '',
      'article:tag': article.tags.join(','),
    },
  };
}

// Generate static params for all articles
export async function generateStaticParams() {
  return TECH_ARTICLES.map(article => ({
    slug: article.slug,
  }));
}

export default async function TechArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

  const relatedArticles = getArticlesByCategory(article.category).filter(a => a.id !== article.id).slice(0, 4);
  const categoryInfo = ARTICLE_CATEGORIES.find(c => c.slug === article.category);

  return (
    <>
      {/* Schema.org Structured Data for AI */}
      <ArticleSchema article={article} categoryInfo={categoryInfo} />
      
      {/* Main Content Component */}
      <TechArticleContent article={article} relatedArticles={relatedArticles} categoryInfo={categoryInfo} />
    </>
  );
}