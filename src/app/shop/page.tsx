import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Sparkles, 
  ShoppingBag, 
  Grid3X3,
  List,
  Search,
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shop | Enviko Bio',
  description: 'Shop UltiWell® health supplements and UltiGlow™ skincare products - Premium biosynthesis-based products.',
};

// Product categories for filtering
const categories = [
  { id: 'all', name: 'All Products', count: 114 },
  { id: 'ultiwell', name: 'UltiWell® Supplements', count: 57 },
  { id: 'ultiglow', name: 'UltiGlow™ Skincare', count: 57 },
];

// Sample products for display
const featuredProducts = [
  // UltiWell Products
  { id: 'core', brand: 'UltiWell®', name: 'UltiWell® Core', category: 'Core Nutrition', ingredients: ['Biosynthesis Vitamins B Complex', 'Chelated Minerals', 'Bio-available Vitamin D3', 'Natural Vitamin E'], type: 'supplement' },
  { id: 'vitality', brand: 'UltiWell®', name: 'UltiWell® Vitality', category: 'Core Nutrition', ingredients: ['CoQ10 (Biosynthesis)', 'B-Complex Vitamins', 'Adaptogenic Herbs', 'L-Carnitine'], type: 'supplement' },
  { id: 'clarity', brand: 'UltiWell®', name: 'UltiWell® Clarity', category: 'Brain & Cognitive', ingredients: ['Phosphatidylserine', 'DHA (Algae-derived)', 'Ginkgo Biloba', 'Lion\'s Mane Extract'], type: 'supplement' },
  { id: 'strength', brand: 'UltiWell®', name: 'UltiWell® Strength', category: 'Energy & Sports', ingredients: ['Creatine Monohydrate', 'BCAA 2:1:1', 'HMB', 'Vitamin D3'], type: 'supplement' },
  { id: 'renew', brand: 'UltiWell®', name: 'UltiWell® Renew', category: 'Anti-Aging & Beauty', ingredients: ['Resveratrol', 'NMN', 'CoQ10', 'Alpha-Lipoic Acid'], type: 'supplement' },
  { id: 'shield', brand: 'UltiWell®', name: 'UltiWell® Shield', category: 'Immune Support', ingredients: ['Vitamin C', 'Vitamin D3', 'Zinc', 'Elderberry Extract'], type: 'supplement' },
  // UltiGlow Products
  { id: 'bio-ha-serum', brand: 'UltiGlow™', name: 'UltiGlow™ Bio-HA Serum', category: 'Deep Hydration', ingredients: ['Bio-HA (Multi-weight) 2%', 'Sodium Hyaluronate', 'Hydrolyzed HA'], type: 'skincare' },
  { id: 'bio-collagen-serum', brand: 'UltiGlow™', name: 'UltiGlow™ Bio-Collagen Serum', category: 'Anti-Aging', ingredients: ['Recombinant Collagen Type III 1%', 'Peptides', 'Vitamin C'], type: 'skincare' },
  { id: 'bio-vitamin-c-serum', brand: 'UltiGlow™', name: 'UltiGlow™ Bio-Vitamin C Serum', category: 'Brightening', ingredients: ['L-Ascorbic Acid 20%', 'Vitamin E', 'Ferulic Acid'], type: 'skincare' },
  { id: 'bio-ectoine-serum', brand: 'UltiGlow™', name: 'UltiGlow™ Bio-Ectoine Serum', category: 'Sensitive Repair', ingredients: ['Ectoine 2%', 'Ceramides', 'Panthenol'], type: 'skincare' },
  { id: 'bio-salicylic-serum', brand: 'UltiGlow™', name: 'UltiGlow™ Bio-Salicylic Serum', category: 'Acne Control', ingredients: ['Salicylic Acid 2%', 'Niacinamide', 'Tea Tree Oil'], type: 'skincare' },
  { id: 'bio-sunscreen-spf50', brand: 'UltiGlow™', name: 'UltiGlow™ Bio-Sunscreen SPF50', category: 'Sun Protection', ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Vitamin E'], type: 'skincare' },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
              Shop Our Products
            </h1>
            <p className="text-lg text-gray-600">
              Premium biosynthesis-based health supplements and skincare products
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-6 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.id === 'all'
                    ? 'text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                style={category.id === 'all' ? { backgroundColor: '#A1BA80' } : {}}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Showing <span className="font-medium text-gray-900">114</span> products</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="text-sm border-none bg-transparent text-gray-700 font-medium focus:outline-none cursor-pointer">
                  <option>Featured</option>
                  <option>Name A-Z</option>
                  <option>Name Z-A</option>
                  <option>Newest</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2 border-l pl-4">
                <button className="p-2 rounded-lg bg-gray-100">
                  <Grid3X3 className="w-5 h-5" style={{ color: '#A1BA80' }} />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <List className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Link 
                key={index} 
                href={product.type === 'supplement' ? `/products/ultiwell/${product.id}` : `/products/ultiglow/${product.id}`}
                className="block group"
              >
                <Card className="border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-300 h-full overflow-hidden">
                  {/* Product Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                    <div className="absolute top-3 left-3">
                      <span 
                        className="px-2 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: product.brand === 'UltiWell®' ? '#A1BA80' : '#7c9a5c' }}
                      >
                        {product.brand}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#d7e1c7' }}>
                        {product.type === 'supplement' ? (
                          <Target className="w-8 h-8" style={{ color: '#A1BA80' }} />
                        ) : (
                          <Sparkles className="w-8 h-8" style={{ color: '#A1BA80' }} />
                        )}
                      </div>
                      <p className="text-xs text-gray-400">{product.category}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-normal text-gray-900 group-hover:text-green-700 transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">{product.category}</p>
                    
                    {/* Ingredients */}
                    <div className="bg-gray-50 rounded-lg p-2 mb-3">
                      <ul className="space-y-0.5">
                        {product.ingredients.slice(0, 3).map((ingredient, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#A1BA80' }} />
                            {ingredient}
                          </li>
                        ))}
                        {product.ingredients.length > 3 && (
                          <li className="text-xs text-gray-400">+{product.ingredients.length - 3} more</li>
                        )}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button 
                        className="flex-1 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:opacity-90"
                        style={{ backgroundColor: '#A1BA80' }}
                      >
                        Add to Cart
                      </button>
                      <button 
                        className="p-2 rounded-lg border border-gray-200 hover:border-green-300 transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Link 
              href="/catalogue"
              className="inline-block px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:border-green-300 hover:text-green-700 transition-all duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">Our Brands</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Two premium product lines designed for your complete wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* UltiWell */}
            <Link href="/catalogue#ultiwell" className="block group">
              <Card className="border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                      <Target className="w-8 h-8" style={{ color: '#A1BA80' }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-normal text-gray-900 group-hover:text-green-700 transition-colors">
                        UltiWell®
                      </h3>
                      <p className="text-sm" style={{ color: '#A1BA80' }}>Ultimate Wellness</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Premium biosynthesis-based health supplements for every wellness need. From core nutrition to specialized care, supporting your complete health journey.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">57 Products • 13 Categories</span>
                    <span className="text-sm font-medium group-hover:text-green-700" style={{ color: '#A1BA80' }}>
                      View All →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* UltiGlow */}
            <Link href="/catalogue#ultiglow" className="block group">
              <Card className="border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                      <Sparkles className="w-8 h-8" style={{ color: '#A1BA80' }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-normal text-gray-900 group-hover:text-green-700 transition-colors">
                        UltiGlow™
                      </h3>
                      <p className="text-sm" style={{ color: '#A1BA80' }}>Ultimate Glow</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Premium skincare powered by biosynthesis technology. From deep hydration to anti-aging, achieving radiant, healthy skin with science-backed ingredients.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">57 Products • 12 Categories</span>
                    <span className="text-sm font-medium group-hover:text-green-700" style={{ color: '#A1BA80' }}>
                      View All →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-normal text-gray-900 mb-4">
            Need Bulk Orders or OEM/ODM Services?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We offer competitive pricing for bulk orders and comprehensive OEM/ODM services for B2B partners worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#A1BA80' }}
            >
              Contact Sales Team
            </Link>
            <Link 
              href="/catalogue" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 transition-all duration-300 hover:border-gray-400"
            >
              View Full Catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
