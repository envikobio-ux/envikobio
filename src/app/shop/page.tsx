import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Sparkles, 
  ExternalLink,
  ShoppingBag,
  Package,
  Globe,
  Truck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shop | Enviko Bio',
  description: 'Purchase UltiWell® and UltiGlow™ products on ChemicalBook - Your trusted B2B chemical marketplace.',
};

const chemicalBookUrl = 'https://www.chemicalbook.com/manufacturer/shanghai-enviko-biotechnology-25483/';

export default function ShopPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
              <Globe className="w-4 h-4" />
              Official B2B Marketplace
            </div>
            <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
              Shop on ChemicalBook
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Purchase our UltiWell® health supplements and UltiGlow™ skincare products directly through ChemicalBook, your trusted B2B chemical and ingredient marketplace.
            </p>
            <a 
              href={chemicalBookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white text-lg font-medium transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#A1BA80' }}
            >
              <ShoppingBag className="w-5 h-5" />
              Visit Our ChemicalBook Store
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why ChemicalBook */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">Why Shop on ChemicalBook?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ChemicalBook is a leading B2B platform connecting suppliers and buyers in the chemical and ingredient industry.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#d7e1c7' }}>
                  <Package className="w-7 h-7" style={{ color: '#A1BA80' }} />
                </div>
                <h3 className="font-normal text-gray-900 mb-2">Product Verification</h3>
                <p className="text-sm text-gray-600">All products verified for quality and authenticity</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#d7e1c7' }}>
                  <Truck className="w-7 h-7" style={{ color: '#A1BA80' }} />
                </div>
                <h3 className="font-normal text-gray-900 mb-2">Global Shipping</h3>
                <p className="text-sm text-gray-600">Reliable worldwide delivery options available</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#d7e1c7' }}>
                  <Globe className="w-7 h-7" style={{ color: '#A1BA80' }} />
                </div>
                <h3 className="font-normal text-gray-900 mb-2">B2B Platform</h3>
                <p className="text-sm text-gray-600">Connect directly with manufacturers</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#d7e1c7' }}>
                  <Target className="w-7 h-7" style={{ color: '#A1BA80' }} />
                </div>
                <h3 className="font-normal text-gray-900 mb-2">Secure Transactions</h3>
                <p className="text-sm text-gray-600">Safe and secure payment processing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">Available on ChemicalBook</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete product range on ChemicalBook
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* UltiWell */}
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                    <Target className="w-8 h-8" style={{ color: '#A1BA80' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-normal text-gray-900">UltiWell®</h3>
                    <p className="text-sm" style={{ color: '#A1BA80' }}>Ultimate Wellness</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Premium biosynthesis-based health supplements including vitamins, minerals, plant extracts, and specialized formulations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1BA80' }} />
                    Core Nutrition & Multivitamins
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1BA80' }} />
                    Brain & Cognitive Support
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1BA80' }} />
                    Energy & Sports Nutrition
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1BA80' }} />
                    Plant Extracts & Bio-Colors
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">57 Products • 13 Categories</span>
                  <Link 
                    href={chemicalBookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium flex items-center gap-1 hover:opacity-80"
                    style={{ color: '#A1BA80' }}
                  >
                    View on ChemicalBook
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* UltiGlow */}
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                    <Sparkles className="w-8 h-8" style={{ color: '#A1BA80' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-normal text-gray-900">UltiGlow™</h3>
                    <p className="text-sm" style={{ color: '#A1BA80' }}>Ultimate Glow</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Premium skincare powered by biosynthesis technology for radiant, healthy skin with science-backed ingredients.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1BA80' }} />
                    Deep Hydration Serums
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1BA80' }} />
                    Anti-Aging Formulations
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1BA80' }} />
                    Brightening & Repair
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1BA80' }} />
                    Natural Color Cosmetics
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">57 Products • 12 Categories</span>
                  <Link 
                    href={chemicalBookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium flex items-center gap-1 hover:opacity-80"
                    style={{ color: '#A1BA80' }}
                  >
                    View on ChemicalBook
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-normal text-gray-900 mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Visit our ChemicalBook store to browse all products, request quotes, and place orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={chemicalBookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#A1BA80' }}
            >
              <ShoppingBag className="w-5 h-5" />
              Shop on ChemicalBook
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 transition-all duration-300 hover:border-gray-400"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
