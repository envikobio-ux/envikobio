'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, getArticlesByCategory, TECH_ARTICLES, ARTICLE_CATEGORIES } from '@/data/tech-articles';
import { useState } from 'react';

// 博文文章内容模板（按分类生成标准化内容）
function generateArticleContent(article: ReturnType<typeof getArticleBySlug>) {
  if (!article) return null;

  // 根据分类生成不同的内容结构
  const categoryContent = {
    whitening: {
      sections: [
        {
          title: 'Introduction',
          content: `Skin whitening ingredients are among the most sought-after active compounds in the cosmetic industry. Understanding the science behind effective brightening agents like ${article.tags[0]} helps formulators create products that deliver visible results while maintaining skin safety.`
        },
        {
          title: 'Mechanism of Action',
          content: `The whitening efficacy of ${article.tags[0]} operates through multiple pathways: inhibiting melanin synthesis at the enzymatic level, reducing tyrosinase activity, and preventing melanosome transfer to keratinocytes. This multi-target approach ensures comprehensive skin brightening.`
        },
        {
          title: 'Formulation Considerations',
          content: `When incorporating ${article.tags[0]} into cosmetic formulations, several critical factors must be considered: pH stability range (typically 5.0-7.0 for optimal efficacy), compatibility with preservatives and other actives, and protection from oxidation through appropriate packaging design.`
        },
        {
          title: 'Quality Standards',
          content: `For B2B buyers sourcing ${article.tags[0]}, quality parameters should include: minimum purity threshold (≥99% for cosmetic grade), heavy metal limits (As ≤2ppm, Pb ≤5ppm), and complete microbiological testing (TPC ≤1000 CFU/g, no pathogens detected).`
        },
        {
          title: 'Regulatory Compliance',
          content: `Regulatory status varies by market. In India, ${article.tags[0]} requires compliance with BIS standards for cosmetic ingredients. EU regulations mandate REACH registration for volumes exceeding 1 ton/year. Always verify current regulatory requirements before bulk purchasing.`
        },
        {
          title: 'Supplier Selection Criteria',
          content: `Key criteria for ${article.tags[0]} supplier evaluation: batch consistency documentation (minimum 3 consecutive batch COAs), stability data (24-month accelerated testing), certification portfolio (ISO 9001, GMP, and relevant market-specific certifications), and sample policy for trial formulations.`
        },
      ],
      ctaText: 'Looking for high-quality whitening ingredients? Request technical documentation and free samples.'
    },
    'anti-aging': {
      sections: [
        {
          title: 'Understanding Anti-Aging Mechanisms',
          content: `Anti-aging ingredients like ${article.tags[0]} address multiple signs of skin aging through targeted mechanisms. The key pathways include antioxidant protection against oxidative stress, stimulation of collagen synthesis, and improvement of skin barrier function.`
        },
        {
          title: 'Scientific Evidence',
          content: `Clinical studies demonstrate ${article.tags[0]}'s efficacy in reducing visible signs of aging. In vitro and in vivo research supports its role in maintaining skin elasticity, reducing fine lines, and protecting against environmental damage.`
        },
        {
          title: 'Optimal Formulation Design',
          content: `Successful anti-aging formulations with ${article.tags[0]} require careful attention to: concentration optimization (typically 0.5-2% for cosmetic applications), delivery system selection (liposomal or nano-emulsion for enhanced penetration), and stability enhancement through antioxidant synergy.`
        },
        {
          title: 'Quality Assurance Requirements',
          content: `Quality parameters for ${article.tags[0]} sourcing: purity specification (≥97% minimum), oxidative stability testing, heavy metal analysis, and complete documentation including COA, TDS, and MSDS. Batch traceability is essential for pharmaceutical-grade applications.`
        },
        {
          title: 'Market Compliance',
          content: `${article.tags[0]} regulatory status: Generally recognized as safe for cosmetic use in major markets including India, EU, and US. For export to India, ensure REACH registration and complete customs documentation for smooth clearance.`
        },
      ],
      ctaText: 'Need premium anti-aging ingredients for your formulations? Get complete technical support and samples.'
    },
    moisturizing: {
      sections: [
        {
          title: 'Moisture Retention Science',
          content: `Effective moisturizing ingredients like ${article.tags[0]} work through multiple hydration mechanisms: humectant action attracting water molecules, occlusive properties preventing moisture loss, and barrier repair supporting natural skin hydration.`
        },
        {
          title: 'Clinical Benefits',
          content: `Studies confirm ${article.tags[0]}'s ability to improve skin hydration metrics: increased transepidermal water loss (TEWL) reduction, enhanced stratum corneum moisture content, and visible improvement in skin texture and smoothness.`
        },
        {
          title: 'Formulation Integration',
          content: `Optimizing ${article.tags[0]} in moisturizing products requires: concentration selection based on product format (cream vs serum vs mask), compatibility testing with emulsion systems, and texture optimization for consumer acceptance.`
        },
        {
          title: 'Sourcing Quality Standards',
          content: `Quality checklist for ${article.tags[0]} procurement: purity specification with analytical verification, stability data for formulation shelf life prediction, certification compliance (ISO, GMP, organic if applicable), and comprehensive documentation package.`
        },
      ],
      ctaText: 'Source high-performance moisturizing ingredients. Request COA and formulation guidance.'
    },
    'plant-extract': {
      sections: [
        {
          title: 'Plant-Derived Active Compounds',
          content: `${article.tags[0]} represents the growing trend toward natural, plant-derived active ingredients in cosmetics and nutraceuticals. The shift from synthetic to botanical sources reflects consumer preference for sustainable, clean-label products.`
        },
        {
          title: 'Bioactive Components',
          content: `Key bioactive compounds in ${article.tags[0]} deliver multiple benefits: antioxidant protection, anti-inflammatory action, and skin brightening effects. Standardization ensures consistent active compound content across batches.`
        },
        {
          title: 'Standardization and Quality',
          content: `For ${article.tags[0]} sourcing, standardization parameters include: active compound quantification (HPLC or spectrophotometric methods), heavy metal limits, pesticide residue testing, and microbiological safety. Organic certification adds market value.`
        },
        {
          title: 'Sustainability Credentials',
          content: `Plant extract sustainability encompasses: responsible sourcing practices, eco-friendly extraction methods, fair trade certification where applicable, and complete supply chain traceability.`
        },
      ],
      ctaText: 'Looking for standardized plant extracts? Get complete quality documentation and sustainability credentials.'
    },
    'food-additive': {
      sections: [
        {
          title: 'Regulatory Framework',
          content: `${article.tags[0]} regulatory compliance requires understanding multiple market requirements: FSSAI registration for India, FDA approval for US market, and EU novel food regulations where applicable.`
        },
        {
          title: 'Safety Assessment',
          content: `Comprehensive safety evaluation for ${article.tags[0]} includes: toxicological review, ADI (Acceptable Daily Intake) determination, allergenicity assessment, and long-term consumption safety data.`
        },
        {
          title: 'Quality Specifications',
          content: `Standard specifications for ${article.tags[0]}: purity requirements per FCC or equivalent standards, heavy metal limits per ICH guidelines, microbiological safety parameters, and stability data for shelf life determination.`
        },
        {
          title: 'Documentation Requirements',
          content: `Complete documentation package for ${article.tags[0]} import: COA with full analytical testing, TDS with physical/chemical specifications, MSDS for safety compliance, and certificates of origin for customs clearance.`
        },
      ],
      ctaText: 'Need compliant food additives for your products? Get regulatory documentation and quality assurance.'
    },
    nutritional: {
      sections: [
        {
          title: 'Nutritional Science Foundation',
          content: `${article.tags[0]} in nutritional supplements must meet stringent quality and efficacy requirements. Understanding bioavailability, stability, and interaction factors ensures effective supplement formulation.`
        },
        {
          title: 'Formulation Optimization',
          content: `Key formulation considerations for ${article.tags[0]}: bioavailability enhancement through delivery systems, stability protection from degradation, and compatibility with other supplement ingredients.`
        },
        {
          title: 'Quality Standards',
          content: `Quality parameters for ${article.tags[0]} supplement ingredients: purity specification meeting FCC or equivalent, heavy metal testing, microbiological safety, and stability data supporting shelf life claims.`
        },
        {
          title: 'Market Compliance',
          content: `Regulatory requirements for ${article.tags[0]} supplements vary by market. India requires FSSAI registration with specific labeling requirements. Ensure documentation meets target market specifications.`
        },
      ],
      ctaText: 'Source premium nutritional supplement ingredients. Request complete quality documentation.'
    },
    pharmaceutical: {
      sections: [
        {
          title: 'API Quality Requirements',
          content: `${article.tags[0]} pharmaceutical API quality demands the highest standards: GMP manufacturing, complete impurity profiling, batch consistency documentation, and stability data per ICH guidelines.`
        },
        {
          title: 'Manufacturing Standards',
          content: `API manufacturing for ${article.tags[0]} must comply with: cGMP requirements (ICH Q7), facility qualification, process validation, and continuous quality monitoring through statistical process control.`
        },
        {
          title: 'Documentation Package',
          content: `Complete pharmaceutical documentation for ${article.tags[0]}: Drug Master File (DMF) content, complete impurity profile, stability study reports, and batch traceability records.`
        },
        {
          title: 'Supplier Qualification',
          content: `Critical supplier qualification elements for ${article.tags[0]}: facility audit checklist, quality agreement template, regulatory inspection history, and change control procedures.`
        },
      ],
      ctaText: 'Need pharmaceutical-grade APIs? Request DMF documentation and GMP audit support.'
    },
    customs: {
      sections: [
        {
          title: 'Import Overview',
          content: `Understanding ${article.tags[0]} import requirements is essential for smooth customs clearance. This guide covers documentation requirements, inspection procedures, and common compliance issues.`
        },
        {
          title: 'Required Documents',
          content: `Complete documentation checklist for ${article.tags[0]} import: commercial invoice with detailed specifications, packing list, certificate of origin, COA/MSDS, and market-specific permits or registrations.`
        },
        {
          title: 'Inspection Process',
          content: `Customs inspection for ${article.tags[0]} typically includes: document verification, physical examination sampling, and laboratory testing for compliance verification. Understanding inspection protocols prevents delays.`
        },
        {
          title: 'Compliance Tips',
          content: `Key compliance strategies for ${article.tags[0]} import: pre-shipment documentation review, working with experienced customs brokers, ensuring correct tariff classification, and maintaining complete records for audit.`
        },
      ],
      ctaText: 'Planning to import ingredients? Get customs documentation support and clearance guidance.'
    },
    quality: {
      sections: [
        {
          title: 'Testing Fundamentals',
          content: `${article.tags[0]} testing requires understanding analytical methodology, acceptance criteria, and regulatory requirements. This guide covers essential testing protocols for quality assurance.`
        },
        {
          title: 'Method Selection',
          content: `Analytical method selection for ${article.tags[0]} depends on: compound characteristics, required sensitivity, available instrumentation, and regulatory recognition of specific methods.`
        },
        {
          title: 'Acceptance Criteria',
          content: `Setting acceptance criteria for ${article.tags[0]} involves: regulatory limits review, industry standards reference, historical batch data analysis, and customer specification requirements.`
        },
        {
          title: 'Quality System Integration',
          content: `Integrating ${article.tags[0]} testing into quality systems requires: method validation documentation, equipment qualification, analyst training records, and trend analysis procedures.`
        },
      ],
      ctaText: 'Need quality testing support? Request analytical method documentation and testing guidance.'
    },
  };

  return categoryContent[article.category as keyof typeof categoryContent] || categoryContent.whitening;
}

export default function TechArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = getArticleBySlug(slug);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/tech" className="text-blue-600 hover:underline">Back to Tech Articles</Link>
        </div>
      </div>
    );
  }

  const content = generateArticleContent(article);
  const relatedArticles = getArticlesByCategory(article.category).filter(a => a.id !== article.id).slice(0, 4);
  const categoryInfo = ARTICLE_CATEGORIES.find(c => c.slug === article.category);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{categoryInfo?.icon}</span>
            <span className="text-blue-300">{categoryInfo?.name}</span>
            <span className="text-blue-400 mx-2">•</span>
            <span className="text-blue-300">{article.readTime} min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-xl text-blue-200 mb-6">{article.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="bg-blue-700 px-3 py-1 rounded-full text-sm">{tag}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-2">
            {content?.sections.map((section, idx) => (
              <section key={idx} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
                
                {/* Insert CTA after 3rd section */}
                {idx === 2 && (
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 my-6">
                    <p className="text-gray-700 font-medium mb-4">{content?.ctaText}</p>
                    <div className="flex gap-4">
                      <a href="#inquiry-form" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                        Request Information
                      </a>
                      <Link href="/products" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        Browse Products
                      </Link>
                    </div>
                  </div>
                )}
              </section>
            ))}

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

            {/* Related Products */}
            {article.relatedProducts.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Related Products</h2>
                <p className="text-gray-700">
                  This article relates to the following products. Click to view detailed specifications and request samples.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {article.relatedProducts.map(cas => (
                    <Link 
                      key={cas}
                      href={`/products/${cas}`}
                      className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition"
                    >
                      <p className="text-blue-700 font-medium">CAS: {cas}</p>
                      <p className="text-blue-600 text-sm">View Product →</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom CTA */}
            <div className="bg-green-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Get Technical Support</h3>
              <p className="mb-6">Request complete documentation including COA, TDS, MSDS and regulatory compliance certificates.</p>
              <div className="flex justify-center gap-4">
                <a href="#inquiry-form" className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition">
                  Submit Inquiry
                </a>
                <Link href="/resources" className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition">
                  Download Resources
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Inquiry Form */}
            <div id="inquiry-form" className="bg-gray-50 rounded-lg p-6 mb-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Inquiry</h3>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      placeholder={`I'm interested in ${article.tags[0]} related products...`}
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
                  href="https://wa.me/8613800138000"
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
                    className="block bg-white rounded-lg p-4 hover:bg-blue-50 transition"
                  >
                    <p className="font-medium text-gray-900 line-clamp-2">{related.title}</p>
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            Enviko Bio provides high-quality bioactive raw materials for cosmetic, food, and pharmaceutical applications.
          </p>
          <p className="text-gray-500 mt-4">
            Published: {article.date} | Last Updated: {article.date}
          </p>
        </div>
      </footer>
    </div>
  );
}