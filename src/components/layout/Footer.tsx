'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/envikobio', icon: Instagram },
  { name: 'Facebook', href: 'https://facebook.com/envikobio', icon: Facebook },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/envikobio', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com/@envikobio', icon: Youtube },
  { name: 'TikTok', href: 'https://tiktok.com/@envikobio', icon: null },
];

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
    <footer className="bg-gray-100 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-normal text-gray-900 tracking-wide">
                Shanghai Enviko Biotechnology Co., Ltd.
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4 max-w-sm">
              Pioneering sustainable biosynthesis solutions for a healthier planet and innovative bio-based products.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-600 mt-0.5 flex-shrink-0" />
                <span>Room 207-2, No. 20 Jiafeng Road, Shanghai Free Trade Zone, Pudong District, Shanghai, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-600 flex-shrink-0" />
                <a href="mailto:info@envikobio.com" className="hover:text-brand-600 transition-colors">
                  info@envikobio.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-600 flex-shrink-0" />
                <a href="tel:+8613918629532" className="hover:text-brand-600 transition-colors">
                  +86 13918629532 (WhatsApp)
                </a>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="mt-6">
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white hover:bg-brand-600 border border-gray-200 hover:border-brand-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group shadow-sm"
                    aria-label={social.name}
                  >
                    {social.icon ? (
                      <social.icon className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                    ) : (
                      <svg className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Industries
            </h3>
            <ul className="space-y-2">
              {footerNavigation.industries.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to get the latest news and updates.
            </p>
            {isSubscribed ? (
              <div className="bg-brand-100 border border-brand-300 rounded-lg p-3 text-sm text-brand-700">
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
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
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

        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Enviko Biotechnology. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-brand-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-brand-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
