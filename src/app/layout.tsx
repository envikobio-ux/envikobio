import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import ExitIntentPopup from '@/components/layout/ExitIntentPopup';
import { OrganizationJsonLd, LocalBusinessJsonLd, WebsiteJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: {
    default: 'Alvokor Biotechnology | Sustainable Biosynthesis Solutions',
    template: '%s | Alvokor Biotechnology',
  },
  description:
    'Shanghai Alvokor Biotechnology Co., Ltd. - Leading provider of sustainable biosynthesis solutions for pharmaceuticals, cosmetics, food nutrition, and agriculture. Located in Shanghai Free Trade Zone, China.',
  keywords: [
    'Alvokor Biotechnology',
    'Biosynthesis',
    'Biotechnology',
    'Shanghai Biotechnology',
    'Pharmaceutical Biosynthesis',
    'Cosmetic Biosynthesis',
    'Sustainable Agriculture',
    'Bio-based Products',
    'Green Chemistry',
    'Biopharmaceuticals',
    'Bio-cosmetics',
    'Bio-fertilizers',
    'Sustainable Solutions',
    'China Biotechnology',
  ],
  authors: [{ name: 'Alvokor Biotechnology' }],
  creator: 'Shanghai Alvokor Biotechnology Co., Ltd.',
  publisher: 'Alvokor Biotechnology',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Alvokor Biotechnology | Sustainable Biosynthesis Solutions',
    description:
      'Leading provider of sustainable biosynthesis solutions for pharmaceuticals, cosmetics, food, and agriculture. Based in Shanghai, China.',
    locale: 'en_US',
    type: 'website',
    siteName: 'Alvokor Biotechnology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alvokor Biotechnology | Sustainable Biosynthesis Solutions',
    description: 'Leading provider of sustainable biosynthesis solutions for pharmaceuticals, cosmetics, food, and agriculture.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.alvokorbiosolution.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CN-SH" />
        <meta name="geo.placename" content="Shanghai" />
        <meta name="geo.position" content="31.2304;121.4737" />
        <meta name="ICBM" content="31.2304, 121.4737" />
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className="antialiased">
        {isDev && <Inspector />}
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
        <WhatsAppFloat phoneNumber="8612345678900" />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
