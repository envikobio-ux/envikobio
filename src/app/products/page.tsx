import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Beaker, 
  Leaf, 
  Factory,
  Utensils,
  ArrowRight,
  CheckCircle,
  Download,
  Heart, 
  Brain, 
  Shield, 
  Sparkles, 
  Bone, 
  Moon,
  Users,
  Activity,
  Target,
  Dumbbell,
  Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Enviko\'s comprehensive range of UltiWell® health supplements and bio-based products.',
};

// UltiWell Product Lines
const ultiWellCategories = [
  {
    icon: Target,
    title: 'Core Nutrition',
    description: 'Essential nutritional foundation for daily wellness',
    products: ['Core', 'Vitality', 'Balance', 'Pure', 'Elevate', 'NutriBoost'],
  },
  {
    icon: Brain,
    title: 'Brain & Cognitive',
    description: 'Mental clarity, focus and cognitive performance',
    products: ['Clarity', 'Focus', 'BrainBoost'],
  },
  {
    icon: Dumbbell,
    title: 'Energy & Sports',
    description: 'Performance, strength and recovery solutions',
    products: ['Strength', 'Active', 'Energy', 'SportPerformance', 'Recovery Series'],
  },
  {
    icon: Sparkles,
    title: 'Anti-Aging & Beauty',
    description: 'Youthful vitality and skin health',
    products: ['Renew', 'Ageless', 'YouthVibe', 'Glow', 'SkinNutritious', 'Body Care Series'],
  },
  {
    icon: Heart,
    title: 'Heart & Circulation',
    description: 'Cardiovascular health and blood circulation',
    products: ['Pulse', 'CardioFit'],
  },
  {
    icon: Shield,
    title: 'Immune Support',
    description: 'Immune system defense and protection',
    products: ['Shield', 'ImmunoShield'],
  },
  {
    icon: Bone,
    title: 'Joint & Mobility',
    description: 'Joint health, flexibility and mobility',
    products: ['Flex', 'Mobility'],
  },
  {
    icon: Moon,
    title: 'Sleep & Relaxation',
    description: 'Restful sleep and stress management',
    products: ['Harmony', 'Calm', 'Zenith', 'Restful', 'Sleep Series', 'Relaxation Series', 'Mind Soothing Series'],
  },
  {
    icon: Leaf,
    title: 'Digestive Health',
    description: 'Digestion, detox and liver support',
    products: ['Digest', 'Cleanse', 'LiverSupport', 'KetoBalance'],
  },
  {
    icon: Users,
    title: 'Specialized Care',
    description: 'Targeted solutions for specific needs',
    products: ['MenopauseEase', 'EyeVive', 'Elderly Care Series'],
  },
  {
    icon: Activity,
    title: 'Lifestyle Solutions',
    description: 'Daily wellness and lifestyle support',
    products: ['VeganPure', 'Travel Series', 'Healthy Diet Series', 'Daily Care Series', 'Environment Optimization Series'],
  },
];

// Bio-based Ingredients
const ingredientCategories = [
  {
    icon: Beaker,
    title: 'Pharmaceutical Ingredients',
    description: 'Pharmaceutical intermediates, amino acids, and bio-active ingredients with ≥95% purity.',
    products: ['Long-Chain Dicarboxylic Acids', '7-ACA Antibiotic Intermediate', 'L-Alanine, L-Valine, Glutamine', 'Alpha-Bisabolol, Ergothioneine, Ectoine', 'Hyaluronic Acid, Collagen', '5-HTP, Inositol'],
    href: '/products/pharmaceuticals',
    image: '/pharma-research.jpeg',
  },
  {
    icon: Leaf,
    title: 'Cosmetic Ingredients',
    description: 'Natural and sustainable cosmetic ingredients for clean beauty formulations.',
    products: ['Alpha-Bisabolol (≥95%)', 'Ergothioneine (≥98%)', 'Ectoine (≥99%)', 'Squalene/Squalane (≥99%)', 'Hyaluronic Acid', 'Recombinant Collagen'],
    href: '/products/cosmetics',
    image: '/cosmetic-ingredients.jpeg',
  },
  {
    icon: Utensils,
    title: 'Food Nutrition & Additives',
    description: 'Sugar alternatives, nutritional fortifiers, and alternative proteins for food industry.',
    products: ['Erythritol, Allulose', 'Steviol Glycosides, Mogroside', 'ARA Oil, DHA Oil', 'Beta-Carotene, Astaxanthin', 'Human Milk Oligosaccharides', 'Mycoprotein, Yeast Protein'],
    href: '/products/food-nutrition',
    image: '/cosmetic-ingredients.jpeg',
  },
  {
    icon: Factory,
    title: 'Agricultural Products',
    description: 'Bio-based agricultural products and clean energy solutions for sustainability.',
    products: ['Seaweed Biostimulants', 'Amino Acid Fertilizers', '1,3-Propanediol (PDO)', 'Succinic Acid', 'Bio-Based Sebacic Acid', 'Biodiesel, Biogas'],
    href: '/products/agriculture',
    image: '/agriculture-sustainable.jpeg',
  },
];

const features = [
  'High purity (≥95% - 99.9%)',
  '100% traceable ingredients',
  'ISO9001, ISO22000, GMP certified',
  'Complete COA provided',
  'Customized specifications available',
  'Global supply capability',
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/fermentation-tech.jpeg"
            alt="Products Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Premium biosynthesis-based health supplements and bio-based ingredients 
              serving pharmaceutical, cosmetic, food, and agricultural industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" style={{ backgroundColor: '#A1BA80' }}>
                <a href="/api/catalogue-download">
                  <Download className="mr-2 h-4 w-4" />
                  Download Product Catalogue
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Request Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* UltiWell Brand Products */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              UltiWell® Product Series
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              「Ultimate Wellness」- Premium health supplements for every wellness need
            </p>
            <div className="mt-4 inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
              48 Products across 11 Categories
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ultiWellCategories.map((category, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#d7e1c7' }}>
                    <category.icon className="w-6 h-6" style={{ color: '#A1BA80' }} />
                  </div>
                  <h3 className="font-normal text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {category.products.slice(0, 4).map((product, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        {product}
                      </span>
                    ))}
                    {category.products.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        +{category.products.length - 4} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" style={{ borderColor: '#A1BA80', color: '#A1BA80' }}>
              <Link href="/catalogue">
                View Full Catalogue <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* UltiGlow Skincare Brand */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
                <Sparkles className="w-4 h-4" />
                UltiGlow® Skincare
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-2">
                Ultimate Glow
              </h2>
              <p className="text-xl mb-6" style={{ color: '#A1BA80' }}>
                「极致光彩」
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Premium skincare powered by biosynthesis technology. 
                8 product series with 30 targeted solutions for radiant, healthy skin.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#f8faf5' }}>
                  <p className="text-2xl font-normal" style={{ color: '#A1BA80' }}>8</p>
                  <p className="text-sm text-gray-600">Series</p>
                </div>
                <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#f8faf5' }}>
                  <p className="text-2xl font-normal" style={{ color: '#A1BA80' }}>30</p>
                  <p className="text-sm text-gray-600">Products</p>
                </div>
                <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#f8faf5' }}>
                  <p className="text-2xl font-normal" style={{ color: '#A1BA80' }}>6</p>
                  <p className="text-sm text-gray-600">Ingredients</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>UltiGlow AgeDefy</span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>UltiGlow HydraPlus</span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>UltiGlow SensiCare</span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>UltiGlow SunShield</span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>UltiGlow BrightGlow</span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>UltiGlow CollagenPro</span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>UltiGlow PoreRefine</span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>UltiGlow AcneClear</span>
              </div>
              <Button asChild size="lg" style={{ backgroundColor: '#A1BA80' }}>
                <Link href="/products/ultiglow">
                  Explore UltiGlow® <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/cosmetic-ingredients.jpeg"
                alt="UltiGlow Skincare"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-medium">Key Ingredients</p>
                <p className="text-white/80 text-xs mt-1">Ergothioneine • Ectoine • Bisabolol • HA • Collagen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio-based Ingredients */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              Bio-Based Ingredients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Raw materials and ingredients for B2B partners - pharmaceutical, cosmetic, food, and agricultural applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ingredientCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6" style={{ color: '#A1BA80' }} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-normal text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.products.slice(0, 6).map((product, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: '#A1BA80' }} />
                        <span className="text-xs">{product}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full" style={{ borderColor: '#A1BA80', color: '#A1BA80' }}>
                    <Link href={category.href}>
                      View Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/analytics-equipment.jpeg"
                alt="Quality Assurance"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-6">
                Why Choose Enviko Products?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to quality, sustainability, and innovation sets us apart in the industry.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#A1BA80' }} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ordering Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              Ordering Information
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-normal text-gray-900 mb-4">Sample Requests</h3>
                <p className="text-gray-600 text-sm mb-4">
                  R&D institutions eligible for ≤100g free samples<br />
                  Corporate clients: large-size samples available
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-normal text-gray-900 mb-4">Bulk Orders</h3>
                <p className="text-gray-600 text-sm mb-4">
                  MOQ: 500kg for standard products<br />
                  Lead Time: 7-15 working days<br />
                  Custom Products: 30-90 working days
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-normal text-gray-900 mb-4">Global Supply</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Export documentation support<br />
                  Compliance with destination country regulations<br />
                  Delivery to major global ports
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-lab.jpeg"
            alt="Laboratory"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/90"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-normal text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contact us to discuss how our products can meet your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" style={{ backgroundColor: '#A1BA80' }}>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="/api/catalogue-download">
                <Download className="mr-2 h-4 w-4" />
                Download Catalogue
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
