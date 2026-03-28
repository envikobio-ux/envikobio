import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Leaf,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Droplets,
  Shield,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cosmetic Ingredients',
  description: 'Natural and sustainable cosmetic ingredients that meet the highest quality and safety standards.',
};

const products = [
  {
    icon: Shield,
    name: 'Natural Preservatives',
    description: 'Bio-based preservatives derived from natural sources, providing effective protection without harsh chemicals.',
    applications: ['Skincare products', 'Hair care', 'Personal care'],
  },
  {
    icon: Droplets,
    name: 'Bio-based Moisturizers',
    description: 'Sustainable moisturizing agents that hydrate and nourish skin naturally.',
    applications: ['Creams & lotions', 'Serums', 'Face masks'],
  },
  {
    icon: Sparkles,
    name: 'Antioxidant Extracts',
    description: 'Powerful natural antioxidants that protect skin from environmental damage and premature aging.',
    applications: ['Anti-aging products', 'Sun care', 'Treatments'],
  },
  {
    icon: Heart,
    name: 'Skin Care Actives',
    description: 'Active ingredients targeting specific skin concerns, developed through sustainable biosynthesis.',
    applications: ['Targeted treatments', 'Clinical skincare', 'Premium cosmetics'],
  },
];

const advantages = [
  'Natural and sustainable sourcing',
  'Clean beauty compatible',
  'Hypoallergenic formulations',
  'Eco-friendly production',
  'Cruelty-free certified',
  'Transparent ingredient sourcing',
];

const certifications = [
  { label: 'Natural Origin', value: '≥95%' },
  { label: 'Safety Standard', value: 'EU Cosmetics Regulation' },
  { label: 'Certification', value: 'COSMOS/Ecocert' },
  { label: 'Shelf Life', value: '24 months' },
];

export default function CosmeticsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/cosmetic-ingredients.jpeg"
            alt="Cosmetic Ingredients"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                Cosmetic Ingredients
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Natural Cosmetic Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Natural and sustainable cosmetic ingredients through biosynthesis, replacing environmentally 
                harmful alternatives with safe and effective bio-based solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact">
                    Request Sample <ArrowRight className="ml-2 h-4 w-4" />
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
                src="/cosmetic-ingredients.jpeg"
                alt="Cosmetic Ingredients"
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
              Our Cosmetic Ingredients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sustainable and natural cosmetic ingredients meeting the highest quality and safety standards
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
            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Quality & Certifications
              </h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-100">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex justify-between items-center p-6">
                        <span className="text-gray-600">{cert.label}</span>
                        <span className="font-semibold text-gray-900">{cert.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Advantages */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Why Choose Our Ingredients?
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
            src="/cosmetic-ingredients.jpeg"
            alt="Cosmetics"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-emerald-800/90"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Looking for Custom Cosmetic Ingredients?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            We develop tailored biosynthesis solutions for unique cosmetic formulations.
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
