'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Beaker, 
  Leaf, 
  Microscope, 
  Factory, 
  TrendingUp, 
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
  TestTube,
  MessageCircle,
  Download
} from 'lucide-react';

// Product categories by buyer industry (按买家行业分类)
const productCategories = [
  {
    icon: Sparkles,
    title: 'Whitening Raw Materials',
    subtitle: 'Skin Brightening & Melanin Inhibition',
    products: ['Alpha Arbutin 99%', 'Tranexamic Acid 99%', 'Kojic Acid 99%', 'Niacinamide 99%', 'Phenylethyl Resorcinol', 'Glutathione'],
    color: '#F0E6D2',
    href: '/products?category=whitening',
  },
  {
    icon: Heart,
    title: 'Anti-aging & Antioxidant',
    subtitle: 'Wrinkle Reduction & Skin Renewal',
    products: ['L-Ergothioneine 99.9%', 'Resveratrol 98%', 'Bakuchiol 98%', 'Coenzyme Q10', 'Retinol', 'Equol'],
    color: '#E8D5C4',
    href: '/products?category=anti-aging',
  },
  {
    icon: Droplets,
    title: 'Moisturizing & Repairing',
    subtitle: 'Barrier Repair & Hydration',
    products: ['Plant Squalane', 'Alpha Bisabolol 98%', 'Ectoin', 'Hyaluronic Acid', 'Ceramides'],
    color: '#D7E1C7',
    href: '/products?category=moisturizing',
  },
  {
    icon: Leaf,
    title: 'Plant Extracts',
    subtitle: 'Natural Botanical Actives',
    products: ['Pomegranate Extract', 'Green Tea Extract', 'Centella Asiatica', 'Aloe Vera', 'Chamomile'],
    color: '#C5D5B4',
    href: '/products?category=plant-extracts',
  },
];

// Featured products (询盘爆款单品)
const featuredProducts = [
  {
    name: 'L-Ergothioneine 99.9%',
    cas: '497-33-6',
    grade: 'Cosmetic Grade',
    purity: '≥99.9%',
    description: 'Fermented bioactive antioxidant, high bioavailability for anti-aging formulations',
    certifications: ['REACH', 'SGS'],
    href: '/products/ergothioneine',
    image: '/hero-lab.jpeg',
  },
  {
    name: 'Plant Squalane',
    cas: '111-01-3',
    grade: 'Cosmetic Grade',
    purity: '≥99%',
    description: '100% plant-derived, excellent skin affinity for deep moisturizing',
    certifications: ['FDA', 'ECOCERT'],
    href: '/products/squalane',
    image: '/fermentation-tech.jpeg',
  },
  {
    name: 'Alpha Arbutin 99%',
    cas: '84380-01-8',
    grade: 'Cosmetic Grade',
    purity: '≥99%',
    description: 'High-purity whitening active, water-soluble with stable performance',
    certifications: ['REACH', 'SGS'],
    href: '/products/arbutin',
    image: '/cosmetic-ingredients.jpeg',
  },
];

// Factory capabilities (工厂实力)
const factoryCapabilities = [
  { value: '10,000+', label: 'Monthly Capacity (kg)', icon: Factory },
  { value: 'ISO 9001', label: 'Quality System', icon: Award },
  { value: 'India & SEA', label: 'Primary Markets', icon: Globe },
  { value: '48h', label: 'Sample Delivery', icon: Truck },
];

// Certifications (资质认证)
const certifications = [
  { name: 'REACH', desc: 'EU Compliance' },
  { name: 'SGS', desc: 'Quality Verified' },
  { name: 'ISO 9001', desc: 'Quality Management' },
  { name: 'FDA', desc: 'US Standard' },
];

// Client cases (客户案例)
const clientCases = [
  { region: 'India', type: 'Cosmetic Factory', product: 'L-Ergothioneine', feedback: 'Stable batch quality, full customs documents' },
  { region: 'Vietnam', type: 'Skincare Brand', product: 'Plant Squalane', feedback: 'Fast delivery, competitive pricing' },
  { region: 'Thailand', type: 'Personal Care', product: 'Alpha Arbutin', feedback: 'Excellent whitening effect in formulations' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - 买家利益型首屏 */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Trust Bar - 资质认证 */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up opacity-0" style={{animationFillMode: 'forwards'}}>
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                <span className="text-xs text-gray-500">{cert.desc}</span>
              </div>
            ))}
          </div>

          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              {/* Value Proposition Title - 买家利益型标题 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
                <span className="text-gray-800">Cosmetic Grade Bioactive Raw Material</span>
                <br />
                <span className="text-gray-600">Full India Customs Documents, Free Sample, SGS/REACH Certified</span>
              </h1>
              
              {/* Core Advantages - 核心优势 */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                  <CheckCircle className="w-4 h-4" /> High Purity ≥99%
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                  <Truck className="w-4 h-4" /> 100kg+ Stock Ready
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium">
                  <Globe className="w-4 h-4" /> India/SEA Customs Support
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                  <Beaker className="w-4 h-4" /> 10-50g Free Sample
                </span>
              </div>

              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Shanghai Enviko Biotechnology specializes in fermented bioactive ingredients for cosmetic and pharmaceutical applications. 
                We support India, Southeast Asia, and European markets with complete compliance documents.
              </p>

              {/* Dual CTA Buttons - 双CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg bg-green-600 hover:bg-green-700">
                  <Link href="/contact?type=sample">
                    <Beaker className="mr-2 h-5 w-5" />
                    Request Free Sample
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg border-2">
                  <Link href="/resources">
                    <Download className="mr-2 h-5 w-5" />
                    Download COA Package
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-up delay-400 opacity-0" style={{animationFillMode: 'forwards'}}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl animate-float">
                <Image
                  src="/hero-lab.jpeg"
                  alt="Biotechnology Laboratory"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-6">
                  <div className="text-center px-4">
                    <p className="text-white text-lg font-medium mb-2">
                      Fermented Bioactive Raw Materials
                    </p>
                    <p className="text-white/80 text-sm">
                      ISO 9001 Certified Production Facility
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating WhatsApp Button */}
              <a 
                href="https://wa.me/8612345678900" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories by Industry - 按买家行业分类 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
              Product Categories by Application
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our bioactive raw materials by your formulation needs. Each category links to dedicated product pages.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer" style={{ backgroundColor: category.color }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/80">
                    <category.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{category.subtitle}</p>
                  <div className="space-y-1 mb-4">
                    {category.products.slice(0, 3).map((product, idx) => (
                      <div key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        {product}
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="link" className="p-0 text-green-700 font-medium">
                    <Link href={category.href}>
                      View All Products <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - 询盘爆款单品 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
              Featured High-Demand Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Top-selling bioactive ingredients for cosmetic formulations. Free samples available.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {product.certifications.map((cert, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/90 rounded text-xs font-medium text-gray-700">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    CAS: {product.cas} | {product.grade}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium">
                      Purity: {product.purity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                      <Link href={`${product.href}?action=sample`}>
                        Free Sample
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href={product.href}>
                        Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline" className="border-2">
              <Link href="/catalog">
                View All 564 Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Factory Strength Module - 工厂实力信任模块 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
              Factory Strength & Production Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fermentation-based production with strict quality control. Full export compliance for India, Southeast Asia, and Europe.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {factoryCapabilities.map((cap, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <cap.icon className="w-8 h-8 mx-auto mb-4 text-green-600" />
                <div className="text-2xl font-medium text-gray-900 mb-2">{cap.value}</div>
                <div className="text-sm text-gray-600">{cap.label}</div>
              </div>
            ))}
          </div>

          {/* Factory Images */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image src="/fermentation-tech.jpeg" alt="Fermentation Production Line" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 px-3 py-2 bg-white/90 rounded-lg">
                <p className="text-sm font-medium text-gray-800">Fermentation Production Line</p>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image src="/analytics-equipment.jpeg" alt="Quality Control Laboratory" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 px-3 py-2 bg-white/90 rounded-lg">
                <p className="text-sm font-medium text-gray-800">QC Laboratory</p>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image src="/hero-lab.jpeg" alt="Warehouse & Logistics" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 px-3 py-2 bg-white/90 rounded-lg">
                <p className="text-sm font-medium text-gray-800">Warehouse & Shipping</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/factory">
                View Factory Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Cases - 客户案例 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by cosmetic factories and skincare brands across India and Southeast Asia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {clientCases.map((case_, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">{case_.region}</p>
                      <p className="text-sm text-gray-500">{case_.type}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-gray-600">Product: </span>
                    <span className="text-sm font-medium text-green-700">{case_.product}</span>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "{case_.feedback}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Download - 资料留资诱饵 */}
      <section className="py-16 bg-green-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              Free Download Resources
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Get comprehensive guides for cosmetic raw material import and formulation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg">
                <FileText className="w-4 h-4" />
                <span>India Cosmetic Import Guide</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg">
                <FileText className="w-4 h-4" />
                <span>Full Product COA & TDS Package</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg">
                <FileText className="w-4 h-4" />
                <span>SEA Import Compliance Manual</span>
              </div>
            </div>

            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <Link href="/resources">
                Download Now <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA - 底部咨询入口 */}
      <section className="py-12 bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Ready to Start?</h3>
              <p className="text-gray-600">Get free samples or download product documents today.</p>
            </div>
            <div className="flex gap-4">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <a 
                href="https://wa.me/8612345678900" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}