'use client';

import { BlogArticle } from '@/data/blog-articles';

export default function BlogArticleContent({ article }: { article: BlogArticle }) {
  return (
    <article className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {article.contentHtml}
        </div>
      </div>
    </article>
  );
}