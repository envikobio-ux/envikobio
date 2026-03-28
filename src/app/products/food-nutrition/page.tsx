import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Utensils,
  ArrowRight,
  CheckCircle,
  Download,
  Sparkles,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Food Nutrition & Additives',
  description: 'Sugar alternatives, nutritional fortifiers, and alternative proteins for food and beverage industry.',
};

const sweeteners = [
  {
    name: 'Erythritol',
    sweetness: '0.65x',
    calories: '0 kcal/g',
  },
  {
    name: 'Allulose',
    sweetness: '0.7x',
    calories: '0.4 kcal/g',
  },
  {
    name: 'Steviol Glycosides',
    sweetness: '200-300x',
    calories: '0 kcal/g',
  },
  {
    name: 'Mogroside Extract',
    sweetness: '300x',
    calories: '0 kcal/g',
  },
];

const nutritionalFortifiers = [
  {
    name: 'ARA Oil (Arachidonic Acid)',
    source: 'Microbial fermentation',
    function: 'Infant brain development',
  },
  {
    name: 'DHA Oil (Docosahexaenoic Acid)',
    source: 'Algae cultivation',
    function: 'Brain health, vision protection',
  },
  {
    name: 'Beta-Carotene',
    source: 'Fermentation',
    function: 'Vitamin A precursor, natural pigment',
  },
  {
    name: 'Astaxanthin',
    source: 'Haematococcus pluvialis',
    function: 'Antioxidant, aquaculture feed',
  },
  {
    name: 'Human Milk Oligosaccharides (HMOs)',
    source: 'Microbial fermentation',
    function: 'Gut microbiota modulation, immunity',
  },
];

const alternativeProteins = [
  {
    name: 'Mycoprotein (Fungal)',
    protein: '≥40%',
    features: 'High protein, balanced amino acids',
  },
  {
    name: 'Yeast Protein',
    protein: '40-60%',
    features: 'Complete nutrition, fermented flavor',
  },
  {
    name: 'Algal Protein',
    protein: '30-70%',
    features: 'Sustainable, contains Omega-3',
  },
];

export default function FoodNutritionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/cosmetic-ingredients.jpeg"
            alt="Food Nutrition"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Utensils className="w-4 h-4" />
                Food Nutrition & Additives
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Food & Nutrition Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Sugar alternatives, nutritional fortifiers, and alternative proteins for the food and beverage industry. 
                Clean label ingredients for healthier products.
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
                alt="Food Ingredients"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sugar Alternatives */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sugar Alternatives & Sweeteners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Natural, low-calorie sweeteners for healthier food and beverage products
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Product Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Sweetness Multiple</th>
                  <th className="px-6 py-4 text-left font-semibold">Calories</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sweeteners.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-brand-600 font-medium">{item.sweetness}</td>
                    <td className="px-6 py-4 text-gray-600">{item.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Nutritional Fortifiers */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nutritional Fortifiers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential nutrients for infant formula, functional foods, and dietary supplements
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Product Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Source/Process</th>
                  <th className="px-6 py-4 text-left font-semibold">Function</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {nutritionalFortifiers.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-gray-600">{item.source}</td>
                    <td className="px-6 py-4 text-brand-600">{item.function}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Alternative Proteins */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Alternative Proteins
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sustainable protein sources for the future of food
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {alternativeProteins.map((protein, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-brand-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {protein.name}
                  </h3>
                  <p className="text-brand-600 font-medium mb-3">
                    Protein Content: {protein.protein}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {protein.features}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/cosmetic-ingredients.jpeg"
            alt="Food Innovation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 to-brand-800/90"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Looking for Custom Food Ingredients?
          </h2>
          <p className="text-lg text-brand-100 mb-8">
            We provide tailored solutions for food and nutrition applications.
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
