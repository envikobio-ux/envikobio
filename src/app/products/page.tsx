import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Beaker, 
  Leaf, 
  Factory,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Enviko\'s range of bio-based products for pharmaceuticals, cosmetics, and agriculture.',
};

const productCategories = [
  {
    icon: Beaker,
    title: 'Pharmaceutical Products',
    description: 'High-quality bio-based pharmaceutical compounds produced through advanced biosynthesis techniques.',
    products: [
      'Active Pharmaceutical Ingredients (APIs)',
      'Bioactive Compounds',
      'Intermediate Chemicals',
      'Custom Biosynthesis Products',
    ],
    href: '/products/pharmaceuticals',
    image: '/pharma-research.jpeg',
  },
  {
    icon: Leaf,
    title: 'Cosmetic Ingredients',
    description: 'Natural and sustainable cosmetic ingredients that meet the highest quality and safety standards.',
    products: [
      'Natural Preservatives',
      'Bio-based Moisturizers',
      'Antioxidant Extracts',
      'Skin Care Actives',
    ],
    href: '/products/cosmetics',
    image: '/cosmetic-ingredients.jpeg',
  },
  {
    icon: Factory,
    title: 'Agricultural Solutions',
    description: 'Environmentally friendly bio-based pesticides and fertilizers for sustainable agriculture.',
    products: [
      'Bio-pesticides',
      'Organic Fertilizers',
      'Plant Growth Promoters',
      'Soil Conditioners',
    ],
    href: '/products/agriculture',
    image: '/agriculture-sustainable.jpeg',
  },
];

const productFeatures = [
  'High purity and efficacy',
  'Sustainable production methods',
  'Environmentally friendly',
  'Customizable solutions',
  'Quality assured',
  'Competitive pricing',
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
            <p className="text-lg text-gray-600">
              Discover our comprehensive range of bio-based products, developed through advanced 
              biosynthesis techniques to meet the diverse needs of pharmaceutical, cosmetic, and 
              agricultural industries.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full overflow-hidden group">
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
                  <div className="space-y-2 mb-6">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{product}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    <Link href={category.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
                Our commitment to quality and sustainability sets us apart in the industry.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {productFeatures.map((feature, index) => (
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

      {/* Custom Synthesis */}
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Custom Biosynthesis Solutions
            </h2>
            <p className="text-lg text-green-100 mb-8">
              Looking for a custom biosynthesis product? Our expert team can develop 
              tailored solutions to meet your specific requirements.
            </p>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Link href="/contact">
                Request Custom Solution <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to discuss how our products can meet your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/solutions">
                View Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
