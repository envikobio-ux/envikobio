import { Metadata } from 'next';
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
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <category.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Enviko Products?
            </h2>
            <p className="text-lg text-gray-600">
              Our commitment to quality and sustainability sets us apart
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <p className="font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Synthesis */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Custom Biosynthesis Solutions
            </h2>
            <p className="text-lg text-green-50 mb-8">
              Looking for a custom biosynthesis product? Our expert team can develop 
              tailored solutions to meet your specific requirements.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
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
