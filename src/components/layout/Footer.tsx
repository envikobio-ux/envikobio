import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerNavigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'News', href: '/news' },
  ],
  industries: [
    { name: 'Pharmaceuticals', href: '/solutions#pharmaceuticals' },
    { name: 'Cosmetics', href: '/solutions#cosmetics' },
    { name: 'Food & Agriculture', href: '/solutions#agriculture' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative flex-shrink-0 bg-white rounded-lg p-1">
                <Image
                  src="/logo.jpg"
                  alt="Shanghai Enviko Biotechnology Co., Ltd."
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold leading-tight">Shanghai Enviko<br/>Biotechnology Co., Ltd.</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Pioneering sustainable biosynthesis solutions for a healthier planet and innovative bio-based products.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Room 207-2, No. 20 Jiafeng Road, Shanghai Free Trade Zone, Pudong District, Shanghai, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-500" />
                <a href="mailto:info@envikobio.com" className="hover:text-green-400 transition-colors">
                  info@envikobio.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-500" />
                <a href="tel:+8613918629532" className="hover:text-green-400 transition-colors">
                  +86 13918629532 (WhatsApp)
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Industries
            </h3>
            <ul className="space-y-2">
              {footerNavigation.industries.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Shanghai Enviko Biotechnology Co., Ltd. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
