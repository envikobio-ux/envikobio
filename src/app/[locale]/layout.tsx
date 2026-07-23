import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n';
import '../globals.css';
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
    'Shanghai Alvokor Biotechnology Co., Ltd. - Leading provider of sustainable biosynthesis solutions for pharmaceuticals, cosmetics, food nutrition, and agriculture.',
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
  ],
  authors: [{ name: 'Alvokor Biotechnology' }],
  creator: 'Shanghai Alvokor Biotechnology Co., Ltd.',
  publisher: 'Alvokor Biotechnology',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Alvokor Biotechnology | Sustainable Biosynthesis Solutions',
    description:
      'Leading provider of sustainable biosynthesis solutions for pharmaceuticals, cosmetics, food, and agriculture.',
    locale: 'en_US',
    type: 'website',
    siteName: 'Alvokor Biotechnology',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.alvokorbiosolution.com',
  },
};

type Locale = (typeof locales)[number];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
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
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
          <WhatsAppFloat phoneNumber="8612345678900" />
          <ExitIntentPopup />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}