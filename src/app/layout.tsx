import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Enviko Bio | Sustainable Biosynthesis Solutions',
    template: '%s | Enviko Bio',
  },
  description:
    'Enviko is dedicated to revolutionizing product development through advanced biosynthesis techniques. We serve diverse sectors, including pharmaceuticals, cosmetics, food, pesticides, and agriculture.',
  keywords: [
    'Enviko Bio',
    'Biosynthesis',
    'Biotechnology',
    'Pharmaceutical Biosynthesis',
    'Cosmetic Biosynthesis',
    'Sustainable Agriculture',
    'Bio-based Products',
    'Green Chemistry',
  ],
  authors: [{ name: 'Shanghai Enviko Biotechnology Co., Ltd.' }],
  generator: 'Next.js',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Enviko Bio | Sustainable Biosynthesis Solutions',
    description:
      'Pioneering sustainable biosynthesis solutions for pharmaceuticals, cosmetics, food, and agriculture.',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="antialiased">
        {isDev && <Inspector />}
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
