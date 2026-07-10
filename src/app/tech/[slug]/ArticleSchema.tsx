'use client';

import Script from 'next/script';

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

// Generate FAQ items based on article category
function generateFAQItems(article: Article) {
  const baseFAQs = [
    {
      question: `What are the quality standards for ${article.tags[0]}?`,
      answer: `${article.tags[0]} quality standards include: purity ≥98% (HPLC tested), heavy metals As ≤2ppm/Pb ≤5ppm per ICH Q3D, microbiological safety TPC ≤1000 CFU/g, complete COA/TDS/MSDS documentation per FDA/REACH requirements.`
    },
    {
      question: `What certification is required for ${article.tags[0]} export to India?`,
      answer: `For ${article.tags[0]} export to India, FSSAI registration is mandatory. Additional certifications may include: REACH registration for EU markets, FDA GRAS notification for US, HALAL/KOSHER for specific markets, and ISO 9001/GMP for manufacturing quality.`
    },
    {
      question: `What's the standard packing for ${article.tags[0]} bulk shipment?`,
      answer: `Standard packing for ${article.tags[0]} bulk: 20kg/25kg fiber drums or HDPE bags with PE liner, moisture-proof, suitable for sea/air freight. Custom packing available upon request.`
    },
    {
      question: `How to verify ${article.tags[0]} supplier batch consistency?`,
      answer: `Verify ${article.tags[0]} batch consistency through: minimum 3 consecutive batch COAs review, HPLC purity trend analysis, stability data review (24-month accelerated), and third-party lab verification for critical parameters.`
    },
  ];

  // Category-specific FAQs
  const categoryFAQs: Record<string, Array<{question: string; answer: string}>> = {
    whitening: [
      {
        question: `What's the recommended ${article.tags[0]} concentration for whitening formulations?`,
        answer: `${article.tags[0]} recommended concentration for whitening: 0.5-2% for cosmetic formulations, pH stability range 5.0-7.0, compatible with most preservatives, protected from oxidation with appropriate packaging.`
      },
    ],
    'anti-aging': [
      {
        question: `What stability data is available for ${article.tags[0]} in anti-aging formulations?`,
        answer: `${article.tags[0]} stability data: 24-month accelerated stability testing per ICH Q1A(R2), oxidative stability confirmed, compatible with liposomal/nano-emulsion delivery systems, shelf life 24 months when properly stored.`
      },
    ],
    'food-additive': [
      {
        question: `What's the FSSAI registration process for ${article.tags[0]} import to India?`,
        answer: `${article.tags[0]} FSSAI registration: submit product specification, COA, manufacturing license, complete labeling compliance, import license documentation, typically 30-60 days processing time.`
      },
    ],
    pharmaceutical: [
      {
        question: `What GMP documentation is required for ${article.tags[0]} pharmaceutical API?`,
        answer: `${article.tags[0]} pharmaceutical API GMP documentation: Drug Master File (DMF) content, complete impurity profile per ICH Q3A/Q3B, stability study reports per ICH Q1A, batch traceability, change control procedures.`
      },
    ],
    customs: [
      {
        question: `What documents are needed for ${article.tags[0]} India customs clearance?`,
        answer: `${article.tags[0]} India customs clearance documents: commercial invoice with full specs, packing list, certificate of origin, COA/MSDS, FSSAI import license, SGS test report optional, phytosanitary certificate for plant extracts.`
      },
    ],
  };

  const specificFAQ = categoryFAQs[article.category] || [];
  return [...baseFAQs.slice(0, 3), ...specificFAQ];
}

export default function ArticleSchema({ article, categoryInfo }: { article: Article; categoryInfo?: CategoryInfo }) {
  const faqItems = generateFAQItems(article);
  const publishDate = new Date(article.date).toISOString();
  
  // ScholarlyArticle Schema (higher weight than regular Article)
  const scholarlyArticleSchema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Organization",
      "name": "Alvokor Bio R&D Team",
      "url": "https://www.alvokorbiosolution.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Shanghai Alvokorbiosolution Biotechnology Co., Ltd.",
      "url": "https://www.alvokorbiosolution.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.alvokorbiosolution.com/logo.jpg"
      }
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.alvokorbiosolution.com/tech/${article.slug}`
    },
    "keywords": article.keywords.join(','),
    "articleSection": categoryInfo?.name || article.category,
    "wordCount": article.readTime * 300,
    "inLanguage": "en",
    "isPartOf": {
      "@type": "Blog",
      "name": "Alvokor Bio Technical Articles",
      "url": "https://www.alvokorbiosolution.com/tech"
    },
    "about": article.tags.map(tag => ({
      "@type": "Thing",
      "name": tag
    })),
    "mentions": article.relatedProducts.length > 0 ? [
      {
        "@type": "Product",
        "name": article.tags[0],
        "identifier": article.relatedProducts[0]
      }
    ] : []
  };

  // FAQ Schema (AI frequently extracts)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Organization Schema for E-E-A-T trust
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shanghai Alvokorbiosolution Biotechnology Co., Ltd.",
    "url": "https://www.alvokorbiosolution.com",
    "logo": "https://www.alvokorbiosolution.com/logo.jpg",
    "description": "Professional biotechnology company specializing in bioactive raw materials for cosmetic, food, and pharmaceutical applications. Holding FSSC22000, HALAL, KOSHER certifications.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Shanghai",
      "addressCountry": "CN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/alvokorbio",
      "https://www.echemi.com/company/alvokorbio"
    ],
    "award": [
      "ISO 9001:2015 Certified",
      "FSSC 22000 Certified",
      "HALAL Certified",
      "KOSHER Certified"
    ]
  };

  return (
    <>
      <Script
        id="scholarly-article-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(scholarlyArticleSchema)}
      </Script>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(organizationSchema)}
      </Script>
    </>
  );
}