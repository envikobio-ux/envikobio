'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TECH_ARTICLES, ARTICLE_CATEGORIES, getCategoryStats, searchArticles } from '@/data/tech-articles';

export default function TechArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'readTime'>('date');

  const categoryStats = getCategoryStats();

  // Filter and sort articles
  let filteredArticles = selectedCategory === 'all' 
    ? TECH_ARTICLES 
    : TECH_ARTICLES.filter(a => a.category === selectedCategory);

  if (searchQuery.trim()) {
    filteredArticles = searchArticles(searchQuery);
  }

  // Sort
  filteredArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return a.readTime - b.readTime;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Knowledge Hub</h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            90+ technical articles covering formulation science, regulatory compliance, quality control, and sourcing best practices for bioactive ingredients.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by keyword, topic, or product..."
                className="w-full bg-white/10 backdrop-blur border border-white/20 rounded-full px-6 py-4 text-white placeholder-blue-300 focus:outline-none focus:border-white/40"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-blue-900 px-4 py-2 rounded-full font-medium">
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8 text-blue-200">
            <div><span className="text-white font-bold text-2xl">{TECH_ARTICLES.length}</span> Articles</div>
            <div><span className="text-white font-bold text-2xl">{ARTICLE_CATEGORIES.length}</span> Categories</div>
            <div><span className="text-white font-bold text-2xl">500+</span> Keywords</div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <section className="bg-gray-50 py-8 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-medium text-gray-700">Categories:</span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300'
              }`}
            >
              All ({TECH_ARTICLES.length})
            </button>
            {categoryStats.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === cat.slug 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300'
                }`}
              >
                <span className="mr-1">{cat.icon}</span>
                {cat.name} ({cat.count})
              </button>
            ))}
            
            {/* Sort */}
            <div className="ml-auto flex items-center gap-2">
              <span className="text-gray-600">Sort:</span>
              <select
                className="bg-white border border-gray-300 rounded-lg px-3 py-2"
                value={sortBy}
                onChange={e => setSortBy(e.target.value as 'date' | 'readTime')}
              >
                <option value="date">Latest First</option>
                <option value="readTime">Shortest Read</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-xl">No articles found for "{searchQuery}"</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="text-blue-600 hover:underline mt-4"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => {
              const categoryInfo = ARTICLE_CATEGORIES.find(c => c.slug === article.category);
              return (
                <Link 
                  key={article.id}
                  href={`/tech/${article.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all overflow-hidden"
                >
                  {/* Category Badge */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-sm text-blue-700">
                        <span>{categoryInfo?.icon}</span>
                        <span>{categoryInfo?.name}</span>
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 line-clamp-2 mb-3">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="text-gray-400 text-xs">+{article.tags.length - 3}</span>
                      )}
                    </div>
                    
                    {/* Read Time & CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime} min read</span>
                      <span className="text-blue-600 font-medium group-hover:underline">Read →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Load More */}
        {filteredArticles.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-500">
              Showing {filteredArticles.length} of {TECH_ARTICLES.length} articles
            </p>
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Technical Support?</h2>
          <p className="text-xl mb-8">
            Our technical team provides formulation guidance, regulatory documentation, and quality assurance support.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition"
            >
              Contact Us
            </Link>
            <Link 
              href="/resources"
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition"
            >
              Download Resources
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categoryStats.map(cat => (
              <div key={cat.slug}>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>{cat.icon}</span>
                  {cat.name}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {TECH_ARTICLES.filter(a => a.category === cat.slug).slice(0, 5).map(article => (
                    <li>
                      <Link href={`/tech/${article.slug}`} className="hover:text-blue-600 line-clamp-1">
                        {article.title.split(':')[0]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}