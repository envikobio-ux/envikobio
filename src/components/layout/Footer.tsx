'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

const socialLinks = [
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/company/101326364', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  { 
    name: 'Facebook', 
    href: 'https://www.facebook.com/alvokorbiosolution/', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const t = useTranslations('footer');

  const footerNavigation = {
    company: [
      { name: t('nav.about'), href: '/about' },
      { name: t('nav.products'), href: '/products' },
      { name: t('nav.solutions'), href: '/solutions' },
      { name: t('nav.news'), href: '/news' },
    ],
    industries: [
      { name: t('industries.pharmaceuticals'), href: '/solutions#pharmaceuticals' },
      { name: t('industries.cosmetics'), href: '/solutions#cosmetics' },
      { name: t('industries.food'), href: '/solutions#agriculture' },
    ],
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <footer className="text-white" style={{ backgroundColor: '#8C8C8C' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-normal text-white tracking-wide">
                {t('company')}
              </h3>
            </div>
            <p className="text-sm mb-4 max-w-sm" style={{ color: '#D9D9D9' }}>
              {t('description')}
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-white/60 mt-0.5 flex-shrink-0" />
                <span>{t('address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/60 flex-shrink-0" />
                <a href="mailto:info@alvokorbio.com" className="hover:text-white transition-colors">
                  info@alvokorbio.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/60 flex-shrink-0" />
                <a href="tel:+8613918629532" className="hover:text-white transition-colors">
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
                    className="w-9 h-9 bg-white/20 hover:bg-white border border-white/30 hover:border-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <div className="text-white group-hover:text-[#A1BA80] transition-colors">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-normal text-white uppercase tracking-wider mb-4">
              {t('companyLinks')}
            </h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-normal text-white uppercase tracking-wider mb-4">
              {t('industries.title')}
            </h3>
            <ul className="space-y-2">
              {footerNavigation.industries.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-normal text-white uppercase tracking-wider mb-4">
              {t('newsletter.title')}
            </h3>
            <p className="text-sm text-white/80 mb-4">
              {t('newsletter.desc')}
            </p>
            {isSubscribed ? (
              <div className="bg-white/20 border border-white/30 rounded-lg p-3 text-sm text-white">
                ✓ {t('newsletter.success')}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('newsletter.placeholder')}
                    required
                    className="w-full px-4 py-2.5 border border-white/30 rounded-lg text-sm text-[#8C8C8C] placeholder-[#8C8C8C]/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    style={{ backgroundColor: '#D9D9D9' }}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full transition-all duration-300 hover:scale-[1.02] text-white"
                  style={{ backgroundColor: '#A1BA80' }}
                >
                  {isSubmitting ? (
                    t('newsletter.subscribing')
                  ) : (
                    <>
                      {t('newsletter.subscribe')} <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Alvokor Biotechnology. {t('rights')}
            </p>
            <p className="text-xs text-white/60 mt-1">
              Formerly Enviko Bio | Shanghai Alvokor Biotechnology Co., Ltd.
            </p>
            <div className="flex gap-4 text-sm text-white">
              <Link href="/privacy" className="hover:opacity-80 transition-opacity">
                {t('privacy')}
              </Link>
              <Link href="/terms" className="hover:opacity-80 transition-opacity">
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}