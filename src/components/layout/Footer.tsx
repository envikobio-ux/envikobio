'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

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
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // 模拟订阅请求
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 group">
              <div className="w-20 h-20 relative bg-white rounded-xl p-1 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl">
                <Image
                  src="/logo.jpg"
                  alt="Enviko Biotechnology"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-sm">
              Pioneering sustainable biosynthesis solutions for a healthier planet and innovative bio-based products.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span>Room 207-2, No. 20 Jiafeng Road, Shanghai Free Trade Zone, Pudong District, Shanghai, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <a href="mailto:info@envikobio.com" className="hover:text-white transition-colors">
                  info@envikobio.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <a href="tel:+8613918629532" className="hover:text-white transition-colors">
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
                    className="text-sm text-gray-400 hover:text-white transition-colors"
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
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get the latest news and updates.
            </p>
            {isSubscribed ? (
              <div className="bg-brand-600/20 border border-brand-600 rounded-lg p-3 text-sm text-brand-400">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    'Subscribing...'
                  ) : (
                    <>
                      Subscribe <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Enviko Biotechnology. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
