'use client';

export function OrganizationJsonLd() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Enviko Biotechnology',
    alternateName: 'Shanghai Enviko Biotechnology Co., Ltd.',
    url: 'https://www.envikobio.com',
    logo: 'https://www.envikobio.com/logo.jpg',
    description: 'Leading provider of sustainable biosynthesis solutions for pharmaceuticals, cosmetics, food nutrition, and agriculture.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Room 207-2, No. 20 Jiafeng Road, Shanghai Free Trade Zone',
      addressLocality: 'Pudong District',
      addressRegion: 'Shanghai',
      addressCountry: 'CN',
      postalCode: '200131',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-13918629532',
      contactType: 'sales',
      availableLanguage: ['English', 'Chinese'],
      areaServed: 'Worldwide',
    },
    email: 'info@envikobio.com',
    sameAs: [],
    foundingDate: '2019',
    industry: 'Biotechnology',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50,
    },
    areaServed: 'Worldwide',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.envikobio.com/#local-business',
    name: 'Enviko Biotechnology',
    image: 'https://www.envikobio.com/logo.jpg',
    description: 'Sustainable biosynthesis solutions for pharmaceuticals, cosmetics, food, and agriculture.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Room 207-2, No. 20 Jiafeng Road, Shanghai Free Trade Zone',
      addressLocality: 'Pudong District',
      addressRegion: 'Shanghai',
      addressCountry: 'CN',
      postalCode: '200131',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.2304,
      longitude: 121.4737,
    },
    url: 'https://www.envikobio.com',
    telephone: '+86-13918629532',
    email: 'info@envikobio.com',
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 31.2304,
        longitude: 121.4737,
      },
      geoRadius: '50000',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
}

export function WebsiteJsonLd() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Enviko Biotechnology',
    url: 'https://www.envikobio.com',
    description: 'Sustainable biosynthesis solutions for a healthier planet',
    publisher: {
      '@type': 'Organization',
      name: 'Enviko Biotechnology',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.envikobio.com/logo.jpg',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.envikobio.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}
