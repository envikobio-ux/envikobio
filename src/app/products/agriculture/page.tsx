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
  Droplets,
  Download,
  Fuel
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Agricultural & Environmental Products',
  description: 'Environmentally friendly bio-based pesticides, fertilizers, biodiesel, and biogas for sustainable agriculture and energy.',
};

const agriculturalProducts = [
  {
    icon: Sprout,
    name: 'Seaweed Biostimulants',
    description: 'Contains active compounds, promotes growth',
    targetCrops: 'Fruits, vegetables, cash crops',
  },
  {
    icon: Leaf,
    name: 'Acid Water-Amino Soluble Fertilizer',
    description: 'Small molecules, easy absorption',
    applications: 'Foliar spray, drip irrigation',
  },
];

const environmentalProducts = [
  {
    icon: Fuel,
    name: 'Biodiesel',
    feedstock: 'Waste oil, microalgae oil',
    applications: 'Transportation fuel, industrial fuel',
  },
  {
    icon: Droplets,
    name: 'Biogas',
    feedstock: 'Organic waste',
    applications: 'Power generation, heating, vehicle fuel',
  },
];

const bioBasedChemicals = [
  {
    name: '1,3-Propanediol (PDO)',
    scale: '10,000-ton scale',
    uses: 'PTT fiber, cosmetic humectant',
  },
  {
    name: 'Succinic Acid',
    scale: '10,000-ton scale',
    uses: 'PBS biodegradable plastic, food acidulant',
  },
  {
    name: 'Bio-Based Sebacic Acid',
    scale: 'Commercial scale',
    uses: 'Nylon, polyester, lubricants',
  },
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
                Agriculture & Environmental Products
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Sustainable Agriculture & Energy Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Environmentally friendly bio-based products for sustainable agriculture and clean energy production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact">
                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
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
                src="/agriculture-sustainable.jpeg"
                alt="Sustainable Agriculture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Products */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Agricultural Biologicals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bio-based agricultural inputs for sustainable farming practices
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {agriculturalProducts.map((product, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <product.icon className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{product.description}</p>
                      <p className="text-green-600 text-sm">
                        Target: {product.targetCrops || product.applications}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bio-Based Chemicals */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Bio-Based Chemicals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industrial-scale bio-based chemicals for various applications
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Product Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Production Scale</th>
                  <th className="px-6 py-4 text-left font-semibold">Main Uses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {bioBasedChemicals.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                    <td className="px-6 py-4 text-green-600 font-medium">{product.scale}</td>
                    <td className="px-6 py-4 text-gray-600">{product.uses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Environmental Products */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Environmental & Energy Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Clean energy solutions from renewable feedstocks
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {environmentalProducts.map((product, index) => (
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
                      <div className="space-y-2 text-sm">
                        <p><span className="text-gray-500">Feedstock:</span> <span className="text-gray-700">{product.feedstock}</span></p>
                        <p><span className="text-gray-500">Applications:</span> <span className="text-green-600">{product.applications}</span></p>
                      </div>
                    </div>
                  </div>
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
            src="/agriculture-sustainable.jpeg"
            alt="Sustainable Farming"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-emerald-800/90"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Transform Your Agricultural Practices
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Partner with us for sustainable agricultural and environmental solutions.
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
