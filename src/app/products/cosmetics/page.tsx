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
  Heart,
  Download
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cosmetic Ingredients',
  description: 'Natural and sustainable cosmetic ingredients including Alpha-Bisabolol, Ergothioneine, Ectoine, and Hyaluronic Acid.',
};

const cosmeticIngredients = [
  {
    name: 'Alpha-Bisabolol',
    purity: '≥95%',
    efficacy: 'Anti-inflammatory, soothing, skin repair',
    applications: ['Skincare', 'Baby products', 'After-sun care'],
  },
  {
    name: 'Ergothioneine',
    purity: '≥98%',
    efficacy: 'Antioxidant, anti-photoaging',
    applications: ['Anti-aging products', 'Serums', 'Eye care'],
  },
  {
    name: 'Ectoine',
    purity: '≥99%',
    efficacy: 'Cell repair, moisturization',
    applications: ['Sensitive skin care', 'Sun protection', 'Anti-pollution'],
  },
  {
    name: 'Squalene/Squalane',
    purity: '≥99%',
    efficacy: 'Moisturizing, skin barrier repair',
    applications: ['Moisturizers', 'Hair care', 'Makeup'],
  },
  {
    name: 'Hyaluronic Acid',
    purity: 'Cosmetic/Food/Medical Grade',
    efficacy: 'Moisturization, joint lubrication',
    applications: ['Skincare', 'Dermal fillers', 'Ophthalmic surgery'],
  },
  {
    name: 'Recombinant Humanized Collagen',
    purity: 'Type III/Type I',
    efficacy: 'Skin repair, medical implant materials',
    applications: ['Anti-aging', 'Wound healing', 'Medical aesthetics'],
  },
];

const features = [
  '100% traceable ingredients with >95% purity',
  'Natural and sustainable sourcing',
  'Clean beauty compatible',
  'Hypoallergenic formulations',
  'Eco-friendly production',
  'COSMOS/Ecocert certification available',
];

export default function CosmeticsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
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
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                Cosmetic Ingredients
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Natural Cosmetic Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Natural and sustainable cosmetic ingredients through biosynthesis, with 100% traceable 
                ingredients and &gt;95% purity. Clean beauty solutions for modern skincare needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
                  <Link href="/contact">
                    Request Sample <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/Envikobio-Product-Catalogue-2026.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Catalogue
                  </a>
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
              Premium bio-active ingredients for skincare, hair care, and personal care products
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Product Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Purity</th>
                  <th className="px-6 py-4 text-left font-semibold">Core Efficacy</th>
                  <th className="px-6 py-4 text-left font-semibold">Applications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {cosmeticIngredients.map((ingredient, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{ingredient.name}</td>
                    <td className="px-6 py-4 text-brand-600 font-medium">{ingredient.purity}</td>
                    <td className="px-6 py-4 text-gray-600">{ingredient.efficacy}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {ingredient.applications.map((app, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/cosmetic-ingredients.jpeg"
                alt="Quality Assurance"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Ingredients?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to quality and sustainability ensures the best ingredients for your cosmetic formulations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
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
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 to-brand-800/90"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Looking for Custom Cosmetic Ingredients?
          </h2>
          <p className="text-lg text-brand-100 mb-8">
            We develop tailored biosynthesis solutions for unique cosmetic formulations.
            R&D institutions eligible for ≤100g free samples.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-brand-50">
            <Link href="/contact">
              Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
