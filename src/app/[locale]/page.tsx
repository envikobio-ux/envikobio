'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Beaker, 
  Leaf, 
  Microscope, 
  Factory, 
  Award,
  ArrowRight,
  CheckCircle,
  FileText,
  Globe,
  ShieldCheck,
  Truck,
  Sparkles,
  Heart,
  Droplets,
  MessageCircle,
  Download
} from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('home');

  const productCategories = [
    {
      icon: Sparkles,
      title: t('categories.whitening.title'),
      subtitle: t('categories.whitening.subtitle'),
      products: [t('products.arbutin'), t('products.tranexamic'), t('products.kojic'), t('products.niacinamide')],
      color: '#F0E6D2',
      href: '/products?category=whitening',
    },
    {
      icon: Heart,
      title: t('categories.antiAging.title'),
      subtitle: t('categories.antiAging.subtitle'),
      products: [t('products.ergothioneine'), t('products.resveratrol'), t('products.bakuchiol'), t('products.coenzyme')],
      color: '#E8D5C4',
      href: '/products?category=anti-aging',
    },
    {
      icon: Droplets,
      title: t('categories.moisturizing.title'),
      subtitle: t('categories.moisturizing.subtitle'),
      products: [t('products.squalane'), t('products.bisabolol'), t('products.ectoin'), t('products.hyaluronic')],
      color: '#D7E1C7',
      href: '/products?category=moisturizing',
    },
    {
      icon: Leaf,
      title: t('categories.plantExtracts.title'),
      subtitle: t('categories.plantExtracts.subtitle'),
      products: [t('products.pomegranate'), t('products.greenTea'), t('products.centella'), t('products.aloe')],
      color: '#C5D5B4',
      href: '/products?category=plant-extracts',
    },
  ];

  const certifications = ['REACH', 'SGS', 'ISO 9001', 'FDA', 'HALAL', 'KOSHER'];
  
  const advantages = [
    { icon: ShieldCheck, title: t('advantages.purity.title'), desc: t('advantages.purity.desc') },
    { icon: Truck, title: t('advantages.stock.title'), desc: t('advantages.stock.desc') },
    { icon: Globe, title: t('advantages.customs.title'), desc: t('advantages.customs.desc') },
    { icon: FileText, title: t('advantages.sample.title'), desc: t('advantages.sample.desc') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {certifications.map((cert) => (
                  <span key={cert} className="px-2 py-1 bg-white/10 rounded text-xs font-medium">
                    {cert}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">{t('hero.features.purity')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">{t('hero.features.stock')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">{t('hero.features.customs')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">{t('hero.features.sample')}</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('hero.cta.sample')}
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Download className="w-4 h-4 mr-2" />
                  {t('hero.cta.download')}
                </Button>
              </div>
            </div>
            
            <div className="relative h-64 md:h-80">
              <Image
                src="/hero-lab.jpeg"
                alt="Alvokor Biotechnology Laboratory"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">{t('advantages.title')}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <Card key={index} className="text-center p-6">
                <item.icon className="w-10 h-10 mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">{t('categories.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer" style={{ backgroundColor: category.color }}>
                  <CardContent className="p-6">
                    <category.icon className="w-8 h-8 mb-4 text-gray-700" />
                    <h3 className="font-semibold mb-1">{category.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{category.subtitle}</p>
                    <div className="space-y-1">
                      {category.products.map((product, pIndex) => (
                        <div key={pIndex} className="text-xs text-gray-500">• {product}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="mb-6">{t('cta.subtitle')}</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              {t('cta.browse')}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              {t('cta.contact')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}