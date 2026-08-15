'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FlaskConical, 
  Factory, 
  ShieldCheck,
  Beaker,
  ArrowRight,
  Star,
  ChevronRight,
  Building2,
  Microscope,
  Award,
  Users,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  FileText,
  CheckCircle2,
  TestTube,
  Leaf,
  Heart,
  Droplets,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('home');

  const certifications = [
    'cGMP', 'FSMA', 'FSSC 22000', 'ISO 9001', 'KOSHER', 'HALAL', 'Self-GRAS', 'COSMOS', 'FDA', 'REACH'
  ];

  const advantages = [
    { icon: Factory, title: 'Full Fermentation Chain', desc: 'From strain construction to large-scale fermentation, integrated biomanufacturing under one roof' },
    { icon: Building2, title: 'cGMP Clean Workshop', desc: '100,000-level purified洁净车间 with strict environmental controls & batch traceability' },
    { icon: ShieldCheck, title: 'Global Certifications', desc: 'FDA, REACH, KOSHER, HALAL, ISO 22000, FSSC 22000 — fully export-ready documentation' },
    { icon: Beaker, title: 'Custom CDMO/OEM', desc: 'End-to-end R&D to commercial production: strain engineering, process optimization, scale-up' },
  ];

  const productCategories = [
    {
      icon: Leaf,
      title: 'Natural Extracts',
      subtitle: '天然提取物',
      products: [
        { name: 'Pomegranate Extract', cas: '84961-57-9' },
        { name: 'Green Tea Extract', cas: '84650-60-2' },
        { name: 'Centella Asiatica', cas: '16830-15-2' },
      ],
      image: '/category-extracts.jpg',
      href: '/products?category=extracts',
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Peptides',
      subtitle: '化妆品多肽',
      products: [
        { name: 'Acetyl Hexapeptide-8', cas: '616204-22-9' },
        { name: 'Palmitoyl Pentapeptide-4', cas: '214047-00-4' },
        { name: 'Copper Tripeptide-1', cas: '89030-95-5' },
      ],
      image: '/category-peptides.jpg',
      href: '/products?category=peptides',
    },
    {
      icon: Droplets,
      title: 'Functional Sugars',
      subtitle: '功能糖/氨基糖',
      products: [
        { name: 'N-Acetylglucosamine', cas: '7512-17-6' },
        { name: 'Hyaluronic Acid', cas: '9004-61-9' },
        { name: 'Sodium Hyaluronate', cas: '9067-32-7' },
      ],
      image: '/category-sugars.jpg',
      href: '/products?category=sugars',
    },
    {
      icon: Heart,
      title: 'Food & Feed Additives',
      subtitle: '食品饲料添加剂',
      products: [
        { name: 'L-Arginine', cas: '74-79-3' },
        { name: 'L-Glutamine', cas: '56-85-9' },
        { name: 'Taurine', cas: '107-35-7' },
      ],
      image: '/category-feed.jpg',
      href: '/products?category=feed',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ========== Module 1: Hero Banner ========== */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/90 via-[#0F4C81]/70 to-transparent z-10" />
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-factory.jpg')" }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-white leading-tight mb-6 font-[family-name:var(--font-montserrat)]">
              Synthetic Biology Manufacturer for Cosmetic, Nutraceutical & Feed Raw Materials
              <span className="block text-[#4A90C2] text-xl md:text-2xl font-normal mt-3">
                OEM & ODM Custom Fermentation
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/products">
                <Button 
                  size="lg" 
                  className="bg-white text-[#0F4C81] hover:bg-gray-100 border-2 border-white font-semibold px-8 text-base"
                >
                  View All Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#0F4C81] text-white hover:bg-[#0F4C81]/90 border-2 border-white/30 font-semibold px-8 text-base"
                >
                  Request Free Quote
                  <MessageCircle className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> cGMP</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> FDA GRAS</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> ISO 22000</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> Kosher &amp; Halal</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Module 2: Core Advantages (4 Cards) ========== */}
      <section className="py-20 px-4 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-bold text-center text-[#333333] mb-4 font-[family-name:var(--font-montserrat)]">
            Why Choose Alvokor
          </h2>
          <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto">
            Integrated biomanufacturing capabilities from lab to commercial scale
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <Card 
                key={index} 
                className="group border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-lg bg-[#0F4C81]/5 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-[#0F4C81]" />
                  </div>
                  <h3 className="text-[22px] font-semibold text-[#333333] mb-3 font-[family-name:var(--font-montserrat)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span className="text-xs text-[#4A90C2] font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Module 3: Product Categories ========== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-[#333333] mb-4 font-[family-name:var(--font-montserrat)]">
              Core Product Categories
            </h2>
            <p className="text-[#666666]">4 major product lines covering cosmetic, nutraceutical & feed applications</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <Link key={index} href={category.href} className="group">
                <Card className="border-none shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="h-48 bg-[#F5F7FA] relative overflow-hidden rounded-t-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/10 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <category.icon className="w-8 h-8 text-[#0F4C81]" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-[22px] font-semibold text-[#333333] mb-1 font-[family-name:var(--font-montserrat)]">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#999999] mb-4">{category.subtitle}</p>
                      <div className="space-y-2 mb-4">
                        {category.products.map((product, pIndex) => (
                          <div key={pIndex} className="flex items-center justify-between text-sm">
                            <span className="text-[#333333]">{product.name}</span>
                            <span className="text-[13px] text-[#4A90C2] font-mono">{product.cas}</span>
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-[#0F4C81] font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Category <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Module 4: Factory Stats & R&D Data ========== */}
      <section className="py-20 px-4 bg-[#0F4C81] text-white relative overflow-hidden">
        {/* Molecular texture background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="molecules" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="white" />
                <circle cx="60" cy="30" r="1.5" fill="white" />
                <circle cx="40" cy="60" r="1" fill="white" />
                <line x1="20" y1="20" x2="60" y2="30" stroke="white" strokeWidth="0.5" />
                <line x1="60" y1="30" x2="40" y2="60" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#molecules)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] font-bold mb-4 font-[family-name:var(--font-montserrat)]">
                Manufacturing & R&D Capabilities
              </h2>
              <p className="text-white/70 mb-8">
                State-of-the-art fermentation facilities with complete quality control systems
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-5 border border-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#4A90C2] mb-1">50,000L</div>
                  <div className="text-sm text-white/60">Fermentation Capacity</div>
                </div>
                <div className="p-5 border border-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#4A90C2] mb-1">2,000m²</div>
                  <div className="text-sm text-white/60">cGMP Lab Area</div>
                </div>
                <div className="p-5 border border-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#4A90C2] mb-1">28+</div>
                  <div className="text-sm text-white/60">Active Patents</div>
                </div>
                <div className="p-5 border border-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#4A90C2] mb-1">5,000T</div>
                  <div className="text-sm text-white/60">Annual Output</div>
                </div>
              </div>
            </div>
            <div className="h-80 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('/lab-instruments.jpg')" }} />
          </div>
        </div>
      </section>

      {/* ========== Module 5: Certification Scroll Bar ========== */}
      <section className="py-16 px-4 bg-[#F5F7FA] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-bold text-center text-[#333333] mb-4 font-[family-name:var(--font-montserrat)]">
            Certifications & Compliance
          </h2>
          <p className="text-center text-[#666666] mb-10">Global regulatory certifications for export markets worldwide</p>
          <div className="relative">
            <div className="flex gap-8 animate-scroll">
              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-36 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-100"
                >
                  <span className="text-sm font-semibold text-[#0F4C81]">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Module 6: Bottom CTA / Inquiry Section ========== */}
      <section className="py-20 px-4 bg-[#0F4C81] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[32px] font-bold mb-4 font-[family-name:var(--font-montserrat)]">
            Get Your Custom Formula & Bulk Price
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact our technical sales team for customized formulations, bulk pricing, and free samples
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-white text-[#0F4C81] hover:bg-gray-100 font-semibold px-10 py-6 text-lg"
            >
              Contact Us For Quote
              <MessageCircle className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@alvokorbio.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +86 13918629532
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Shanghai, China
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}