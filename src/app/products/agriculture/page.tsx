import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Factory,
  ArrowRight,
  CheckCircle,
  Bug,
  Sprout,
  Leaf,
  Droplets
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Agricultural Solutions',
  description: 'Environmentally friendly bio-based pesticides and fertilizers for sustainable agriculture.',
};

const products = [
  {
    icon: Bug,
    name: 'Bio-pesticides',
    description: 'Natural pest control solutions that protect crops without harming beneficial organisms or the environment.',
    applications: ['Crop protection', 'Organic farming', 'Integrated pest management'],
  },
  {
    icon: Sprout,
    name: 'Organic Fertilizers',
    description: 'Bio-based fertilizers that enhance soil health and provide essential nutrients for optimal plant growth.',
    applications: ['Soil enrichment', 'Sustainable farming', 'Crop nutrition'],
  },
  {
    icon: Leaf,
    name: 'Plant Growth Promoters',
    description: 'Natural growth enhancers that boost plant development, yield, and resistance to stress conditions.',
    applications: ['Yield enhancement', 'Stress tolerance', 'Quality improvement'],
  },
  {
    icon: Droplets,
    name: 'Soil Conditioners',
    description: 'Bio-based soil amendments that improve soil structure, water retention, and microbial activity.',
    applications: ['Soil restoration', 'Water management', 'Microbial enhancement'],
  },
];

const advantages = [
  'Environmentally sustainable',
  'Safe for beneficial insects',
  'Reduced chemical residues',
  'Improved soil health',
  'Enhanced crop yield',
  'Cost-effective solutions',
];

const specifications = [
  { label: 'Active Ingredients', value: '100% Bio-based' },
  { label: 'Safety Rating', value: 'Non-toxic to humans' },
  { label: 'Environmental Impact', value: 'Biodegradable' },
  { label: 'Application', value: 'Foliar/Soil treatment' },
];

export default function AgriculturePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/agriculture-sustainable.jpeg"
            alt="Sustainable Agriculture"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Factory className="w-4 h-4" />
                Agricultural Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Sustainable Agriculture Products
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Environmentally friendly bio-based pesticides and fertilizers that promote sustainable 
                agriculture, reduce reliance on synthetic chemicals, and minimize environmental damage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact">
                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/products">
                    View All Products
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/agriculture-sustainable.jpeg"
                alt="Sustainable Agriculture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Agricultural Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of bio-based agricultural solutions for sustainable farming
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <product.icon className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Applications:</p>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Product Specifications
              </h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-100">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center p-6">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-semibold text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Advantages */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Why Choose Our Products?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/agriculture-sustainable.jpeg"
            alt="Sustainable Farming"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-emerald-800/90"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Transform Your Farming Practices
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Partner with us to implement sustainable agricultural solutions for your farm.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
            <Link href="/contact">
              Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
