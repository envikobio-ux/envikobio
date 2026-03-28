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
  Download
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Enviko\'s comprehensive range of bio-based products including pharmaceuticals, cosmetics, food nutrition, and agricultural solutions.',
};

const productCategories = [
  {
    icon: Beaker,
    title: 'Pharmaceutical Products',
    description: 'Pharmaceutical intermediates, amino acids, and bio-active ingredients with ≥95% purity.',
    products: [
      'Long-Chain Dicarboxylic Acids',
      '7-ACA Antibiotic Intermediate',
      'L-Alanine, L-Valine, Glutamine',
      'Alpha-Bisabolol, Ergothioneine, Ectoine',
      'Hyaluronic Acid, Collagen',
      '5-HTP, Inositol',
    ],
    href: '/products/pharmaceuticals',
    image: '/pharma-research.jpeg',
  },
  {
    icon: Leaf,
    title: 'Cosmetic Ingredients',
    description: 'Natural and sustainable cosmetic ingredients for clean beauty formulations.',
    products: [
      'Alpha-Bisabolol (≥95%)',
      'Ergothioneine (≥98%)',
      'Ectoine (≥99%)',
      'Squalene/Squalane (≥99%)',
      'Hyaluronic Acid',
      'Recombinant Collagen',
    ],
    href: '/products/cosmetics',
    image: '/cosmetic-ingredients.jpeg',
  },
  {
    icon: Utensils,
    title: 'Food Nutrition & Additives',
    description: 'Sugar alternatives, nutritional fortifiers, and alternative proteins for food industry.',
    products: [
      'Erythritol, Allulose',
      'Steviol Glycosides, Mogroside',
      'ARA Oil, DHA Oil',
      'Beta-Carotene, Astaxanthin',
      'Human Milk Oligosaccharides',
      'Mycoprotein, Yeast Protein',
    ],
    href: '/products/food-nutrition',
    image: '/cosmetic-ingredients.jpeg',
  },
  {
    icon: Factory,
    title: 'Agricultural & Environmental',
    description: 'Bio-based agricultural products and clean energy solutions for sustainability.',
    products: [
      'Seaweed Biostimulants',
      'Amino Acid Fertilizers',
      '1,3-Propanediol (PDO)',
      'Succinic Acid',
      'Bio-Based Sebacic Acid',
      'Biodiesel, Biogas',
    ],
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
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 overflow-hidden">
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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive range of bio-based products developed through advanced biosynthesis techniques, 
              serving pharmaceutical, cosmetic, food, and agricultural industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a href="/Envikobio-Product-Catalogue-2026.pdf" download>
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

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
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
                    <category.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.products.slice(0, 6).map((product, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span className="text-xs">{product}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Enviko Products?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to quality, sustainability, and innovation sets us apart in the industry.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ordering Information
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sample Requests</h3>
                <p className="text-gray-600 text-sm mb-4">
                  R&D institutions eligible for ≤100g free samples<br />
                  Corporate clients: large-size samples available
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Bulk Orders</h3>
                <p className="text-gray-600 text-sm mb-4">
                  MOQ: 500kg for standard products<br />
                  Lead Time: 7-15 working days<br />
                  Custom Products: 30-90 working days
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Supply</h3>
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
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-emerald-800/90"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Contact us to discuss how our products can meet your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="/Envikobio-Product-Catalogue-2026.pdf" download>
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
