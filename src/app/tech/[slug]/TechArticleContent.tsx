'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  keywords: string[];
  date: string;
  readTime: number;
  relatedProducts: string[];
}

interface CategoryInfo {
  slug: string;
  name: string;
  icon: string;
  count?: number;
}

interface TechArticleContentProps {
  article: Article;
  relatedArticles: Article[];
  categoryInfo?: CategoryInfo;
}

// Article content sections by category
function getArticleSections(article: Article) {
  const baseSections = [
    {
      title: 'Introduction',
      content: `${article.tags[0]} represents a critical active compound in the ${categoryToIndustry(article.category)} industry. This technical guide provides comprehensive information on quality parameters, manufacturing standards, and regulatory compliance essential for B2B procurement decisions.`,
      hasTable: false,
    },
    {
      title: 'Quality Parameters & Standards',
      content: `The following table summarizes the critical quality parameters for ${article.tags[0]} procurement:`,
      hasTable: true,
      tableData: [
        ['Parameter', 'Standard', 'Test Method', 'Acceptance Criteria'],
        ['Purity', '≥98%', 'HPLC', 'Batch COA required'],
        ['Heavy Metals (As)', '≤2ppm', 'ICP-MS', 'ICH Q3D compliant'],
        ['Heavy Metals (Pb)', '≤5ppm', 'ICP-MS', 'ICH Q3D compliant'],
        ['Water Content', '≤0.5%', 'Karl Fischer', 'FCC standard'],
        ['Microbial (TPC)', '≤1000 CFU/g', 'AOAC 966.23', 'Food safety standard'],
        ['Particle Size', '80-120 mesh', 'Laser diffraction', 'Uniformity requirement'],
      ],
    },
    {
      title: 'Manufacturing Standards',
      content: `${article.tags[0]} manufacturing must comply with GMP requirements per ICH Q7 guidelines. Critical manufacturing controls include: raw material traceability (minimum 99% batch coverage), process validation (minimum 3 consecutive batches), and in-process testing at key stages. Facility requirements: ISO 9001 certified, FSSC 22000 for food applications, cGMP for pharmaceutical API grade.`,
      hasTable: false,
    },
    {
      title: 'Regulatory Compliance',
      content: `Market-specific regulatory requirements for ${article.tags[0]}:`,
      hasTable: true,
      tableData: [
        ['Market', 'Required Certification', 'Registration Process', 'Timeline'],
        ['India', 'FSSAI Registration', 'Product specification submission', '30-60 days'],
        ['USA', 'FDA GRAS Notification', 'Safety dossier submission', '60-90 days'],
        ['EU', 'REACH Registration', 'Technical dossier', '90-180 days'],
        ['Middle East', 'HALAL Certificate', 'Factory audit + product testing', '30-45 days'],
      ],
    },
    {
      title: 'Storage & Handling',
      content: `Recommended storage conditions for ${article.tags[0]}: temperature 20-25°C, relative humidity ≤60%, protected from direct sunlight and moisture. Shelf life: minimum 24 months under proper storage. Handling precautions: avoid contamination, use appropriate PPE, follow MSDS guidelines.`,
      hasTable: false,
    },
    {
      title: 'Supplier Selection Criteria',
      content: `Critical evaluation criteria for ${article.tags[0]} supplier qualification:`,
      hasTable: true,
      tableData: [
        ['Criterion', 'Requirement', 'Verification Method', 'Priority'],
        ['Batch Consistency', '≥3 consecutive batch COAs', 'Historical data review', 'Critical'],
        ['Stability Data', '24-month accelerated study', 'ICH Q1A(R2) compliant', 'Critical'],
        ['Certification Portfolio', 'ISO/GMP + market-specific', 'Certificate verification', 'High'],
        ['Sample Policy', 'Free 10-50g test samples', 'Direct inquiry', 'High'],
        ['Documentation', 'Complete COA/TDS/MSDS', 'Package completeness check', 'Critical'],
      ],
    },
    {
      title: 'Documentation Requirements',
      content: `Complete documentation package for ${article.tags[0]} procurement must include: Certificate of Analysis (COA) with full analytical testing, Technical Data Sheet (TDS) with physical/chemical specifications, Material Safety Data Sheet (MSDS) per GHS format, Certificate of Origin for customs clearance, and relevant market certifications (FSSAI/FDA/REACH/HALAL).`,
      hasTable: false,
    },
  ];

  return baseSections;
}

function categoryToIndustry(category: string): string {
  const industries: Record<string, string> = {
    whitening: 'cosmetic',
    'anti-aging': 'cosmetic',
    moisturizing: 'cosmetic',
    'plant-extract': 'cosmetic & nutraceutical',
    'food-additive': 'food',
    nutritional: 'nutraceutical',
    pharmaceutical: 'pharmaceutical',
    customs: 'import/export',
    quality: 'quality control',
  };
  return industries[category] || 'chemical';
}

// Generate FAQ items for display
function getFAQItems(article: Article) {
  return [
    {
      question: `What is the standard purity requirement for ${article.tags[0]}?`,
      answer: `Standard purity requirement for ${article.tags[0]} is ≥98% (HPLC tested). Higher purity grades (≥99.5%) available for pharmaceutical applications. Full batch COA documentation required for every shipment.`,
    },
    {
      question: `How to verify supplier batch consistency?`,
      answer: `Verify batch consistency through minimum 3 consecutive batch COAs review, HPLC purity trend analysis (±0.5% acceptable), stability data review (24-month accelerated per ICH Q1A), and third-party lab verification for critical parameters.`,
    },
    {
      question: `What documents are needed for India customs clearance?`,
      answer: `India customs clearance requires: commercial invoice with full specifications, packing list, certificate of origin, FSSAI import license copy, COA with microbiological testing, MSDS per GHS format, and optional SGS pre-shipment inspection report.`,
    },
    {
      question: `What's the sample policy for new customers?`,
      answer: `We provide free 10-50g test samples for cosmetic/food grade materials. Customer bears international DHL freight only. All courier costs fully deducted from first bulk order (minimum 20kg). 4-6 working days delivery to India/SEA.`,
    },
  ];
}

export default function TechArticleContent({ article, relatedArticles, categoryInfo }: TechArticleContentProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const sections = getArticleSections(article);
  const faqItems = getFAQItems(article);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-4 text-blue-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/tech" className="hover:text-white">Tech Articles</Link>
            <span>/</span>
            <span className="text-blue-200">{categoryInfo?.name}</span>
          </nav>
          
          {/* Category & Meta */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl">{categoryInfo?.icon}</span>
            <span className="bg-blue-700 px-3 py-1 rounded-full text-sm">{categoryInfo?.name}</span>
            <span className="text-blue-400">|</span>
            <span className="text-blue-300">{article.readTime} min read</span>
            <span className="text-blue-400">|</span>
            <time className="text-blue-300" dateTime={article.date}>{article.date}</time>
          </div>
          
          {/* H1 Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          
          {/* Excerpt (AI extracts this) */}
          <p className="text-xl text-blue-200 mb-6">{article.excerpt}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-2">
            {/* E-E-A-T Author Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  EB
                </div>
                <div>
                  <p className="font-medium text-gray-900">Enviko Bio R&D Team</p>
                  <p className="text-sm text-gray-600">Specialized in bioactive raw materials technical R&D, 8+ years factory production experience</p>
                  <p className="text-sm text-gray-500 mt-1">Published: {article.date} | Updated: {article.date}</p>
                </div>
                <div className="ml-auto flex gap-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">ISO 9001</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">FSSC 22000</span>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            {sections.map((section, idx) => (
              <section key={idx} className="mb-8" aria-labelledby={`section-${idx}`}>
                <h2 id={`section-${idx}`} className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                
                {/* Data Table (AI high-weight) */}
                {section.hasTable && section.tableData && (
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead className="bg-blue-50">
                        <tr>
                          {section.tableData[0].map((header, hIdx) => (
                            <th key={hIdx} className="border border-gray-300 px-4 py-2 font-medium text-gray-900 text-left">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.tableData.slice(1).map((row, rowIdx) => (
                          <tr key={rowIdx} className="hover:bg-gray-50">
                            {row.map((cell, cellIdx) => (
                              <td key={cellIdx} className="border border-gray-300 px-4 py-2 text-gray-700">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Insert CTA after 3rd section */}
                {idx === 2 && (
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 my-6">
                    <h3 className="font-bold text-gray-900 mb-2">Request Technical Documentation</h3>
                    <p className="text-gray-700 mb-4">Get complete COA, TDS, MSDS package and regulatory compliance certificates for {article.tags[0]}.</p>
                    <div className="flex gap-4">
                      <a href="#inquiry-form" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium">
                        Request Documentation
                      </a>
                      <Link href="/products" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                        Browse Products
                      </Link>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* FAQ Section (AI extracts) */}
            <section className="mb-8" aria-labelledby="faq-section">
              <h2 id="faq-section" className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Q: {faq.question}</h3>
                    <p className="text-gray-700">A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Keywords Section */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Keywords</h2>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map(keyword => (
                  <span key={keyword} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </section>

            {/* Related Products (Internal Links) */}
            {article.relatedProducts.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Related Products</h2>
                <p className="text-gray-700 mb-4">
                  This article relates to the following products. Click to view detailed specifications and request samples.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {article.relatedProducts.map(cas => (
                    <Link 
                      key={cas}
                      href={`/products/${cas}`}
                      className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition group"
                    >
                      <p className="text-blue-700 font-medium">CAS: {cas}</p>
                      <p className="text-blue-600 text-sm group-hover:underline">View Product Details →</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom CTA */}
            <div className="bg-green-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Get Technical Support & Documentation</h3>
              <p className="mb-6">Request complete package: COA, TDS, MSDS, REACH registration, HALAL/KOSHER certificates for {article.tags[0]}.</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href="#inquiry-form" className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition">
                  Submit Inquiry
                </a>
                <Link href="/resources" className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition">
                  Download Resources
                </Link>
                <Link href="/factory" className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition">
                  View Factory
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Trust Signals (E-E-A-T) */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Company Certifications</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'ISO 9001', icon: '✓' },
                  { name: 'FSSC 22000', icon: '✓' },
                  { name: 'HALAL', icon: '✓' },
                  { name: 'KOSHER', icon: '✓' },
                  { name: 'REACH', icon: '✓' },
                  { name: 'FDA GRAS', icon: '✓' },
                ].map(cert => (
                  <div key={cert.name} className="bg-white border border-gray-200 rounded p-2 flex items-center gap-2">
                    <span className="text-green-600">{cert.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                  </div>
                ))}
              </div>
              <Link href="/factory" className="block text-center text-blue-600 hover:underline mt-4 text-sm">
                View Factory Certifications →
              </Link>
            </div>

            {/* Inquiry Form */}
            <div id="inquiry-form" className="bg-gray-50 rounded-lg p-6 mb-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Inquiry</h3>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      id="company"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={`I'm interested in ${article.tags[0]} related products. Please send COA/TDS/MSDS documentation.`}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
                  >
                    Send Inquiry
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-green-600 text-5xl mb-4">✓</div>
                  <p className="font-medium text-gray-900">Inquiry Submitted!</p>
                  <p className="text-gray-600 mt-2">We'll respond within 24 hours.</p>
                </div>
              )}
              
              {/* WhatsApp */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Prefer instant communication?</p>
                <a 
                  href="https://wa.me/8613800138000?text=I'm interested in ${article.tags[0]} products from Envikobio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  <span className="text-xl">💬</span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedArticles.map(related => (
                  <Link 
                    key={related.id}
                    href={`/tech/${related.slug}`}
                    className="block bg-white rounded-lg p-4 hover:bg-blue-50 transition group"
                  >
                    <p className="font-medium text-gray-900 line-clamp-2 group-hover:text-blue-700">{related.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{related.readTime} min read</p>
                  </Link>
                ))}
              </div>
              <Link 
                href="/tech"
                className="block text-center text-blue-600 hover:underline mt-4"
              >
                View All Articles →
              </Link>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer SEO Section */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Author Bio */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              EB
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Enviko Bio R&D Team</h4>
              <p className="text-gray-600 text-sm">Shanghai Envikobio Biotechnology Co., Ltd.</p>
              <p className="text-gray-500 text-sm mt-1">Specialized in rare sugar & bioactive raw materials technical R&D, 8+ years factory production experience, holding FSSC22000, HALAL, KOSHER full certification.</p>
            </div>
          </div>
          
          {/* Update Info */}
          <div className="text-center text-gray-500 text-sm">
            <p>Published: {article.date} | Last Updated: {article.date}</p>
            <p className="mt-2">Enviko Bio provides high-quality bioactive raw materials for cosmetic, food, and pharmaceutical applications.</p>
            <p className="mt-2">
              <Link href="/about" className="text-blue-600 hover:underline">About Us</Link>
              <span className="mx-2">|</span>
              <Link href="/factory" className="text-blue-600 hover:underline">Factory</Link>
              <span className="mx-2">|</span>
              <Link href="/resources" className="text-blue-600 hover:underline">Resources</Link>
              <span className="mx-2">|</span>
              <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}