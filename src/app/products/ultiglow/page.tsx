import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Sparkles,
  Droplets,
  Shield,
  Heart,
  Sun,
  Flower2,
  Leaf,
  Star,
  ArrowRight,
  CheckCircle,
  Download,
  Clock,
  Zap,
  Wind
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'UltiGlow® Skincare',
  description: 'UltiGlow® - Ultimate Glow. Premium biosynthesis-based skincare products for radiant, healthy skin.',
};

// UltiGlow Product Lines - Consistent with UltiWell naming style
const ultiGlowSeries = [
  {
    icon: Clock,
    title: 'AgeDefy Series',
    tagline: 'Timeless Beauty',
    description: 'Advanced anti-aging solutions',
    products: [
      { name: 'AgeDefy Serum', ingredient: 'Ergothioneine', benefit: 'Reduces fine lines' },
      { name: 'AgeDefy Cream', ingredient: 'Ectoine + Peptides', benefit: 'Firms & lifts' },
      { name: 'AgeDefy Night Repair', ingredient: 'Bisabolol + HA', benefit: 'Deep repair' },
      { name: 'AgeDefy Eye Contour', ingredient: 'Ergothioneine', benefit: 'Dark circles' },
    ],
  },
  {
    icon: Droplets,
    title: 'HydraPlus Series',
    tagline: 'Deep Hydration',
    description: 'Intense moisture solutions',
    products: [
      { name: 'HydraPlus Toner', ingredient: 'HA 1%', benefit: 'Instant hydration' },
      { name: 'HydraPlus Serum', ingredient: 'Squalane 5%', benefit: '72h moisture lock' },
      { name: 'HydraPlus Gel Cream', ingredient: 'HA + Squalane', benefit: 'Oil-free hydration' },
      { name: 'HydraPlus Mask', ingredient: 'HA 2%', benefit: 'Weekly intensive' },
    ],
  },
  {
    icon: Shield,
    title: 'SensiCare Series',
    tagline: 'Gentle Relief',
    description: 'Calming solutions for sensitive skin',
    products: [
      { name: 'SensiCare Cleanser', ingredient: 'Bisabolol', benefit: 'Non-irritating' },
      { name: 'SensiCare Toner', ingredient: 'Ectoine 1%', benefit: 'Reduces redness' },
      { name: 'SensiCare Barrier Cream', ingredient: 'Ceramides', benefit: 'Strengthens barrier' },
      { name: 'SensiCare SOS Serum', ingredient: 'Ectoine 2%', benefit: 'Instant relief' },
    ],
  },
  {
    icon: Sun,
    title: 'SunShield Series',
    tagline: 'UV Protection',
    description: 'Advanced sun defense',
    products: [
      { name: 'SunShield SPF50+', ingredient: 'Ectoine + Filters', benefit: 'Broad spectrum' },
      { name: 'SunShield After-Sun', ingredient: 'Bisabolol + Aloe', benefit: 'Soothes damage' },
      { name: 'SunShield Serum', ingredient: 'Ergothioneine', benefit: 'Antioxidant boost' },
      { name: 'SunShield Recovery Mask', ingredient: 'HA + Ectoine', benefit: 'Post-sun care' },
    ],
  },
  {
    icon: Sparkles,
    title: 'BrightGlow Series',
    tagline: 'Radiant Complexion',
    description: 'Brightening & even tone',
    products: [
      { name: 'BrightGlow Serum', ingredient: 'Vitamin C + Ectoine', benefit: 'Fades dark spots' },
      { name: 'BrightGlow Cream', ingredient: 'Niacinamide', benefit: 'Even skin tone' },
      { name: 'BrightGlow Mask', ingredient: 'Bisabolol', benefit: 'Brightens & soothes' },
      { name: 'BrightGlow Spot Corrector', ingredient: 'Ergothioneine', benefit: 'Targeted treatment' },
    ],
  },
  {
    icon: Heart,
    title: 'CollagenPro Series',
    tagline: 'Firm & Plump',
    description: 'Collagen enhancement solutions',
    products: [
      { name: 'CollagenPro Serum', ingredient: 'Collagen Type III', benefit: 'Stimulates production' },
      { name: 'CollagenPro Night Cream', ingredient: 'Collagen + Peptides', benefit: 'Firms while sleep' },
      { name: 'CollagenPro Essence', ingredient: 'HA + Collagen', benefit: 'Instant plumping' },
      { name: 'CollagenPro Mask', ingredient: 'Collagen 3%', benefit: 'Weekly intensive' },
    ],
  },
  {
    icon: Wind,
    title: 'PoreRefine Series',
    tagline: 'Smooth Texture',
    description: 'Pore minimizing solutions',
    products: [
      { name: 'PoreRefine Toner', ingredient: 'Niacinamide 2%', benefit: 'Tightens pores' },
      { name: 'PoreRefine Serum', ingredient: 'BHA + Niacinamide', benefit: 'Refines texture' },
      { name: 'PoreRefine Mask', ingredient: 'Clay + HA', benefit: 'Deep cleansing' },
    ],
  },
  {
    icon: Zap,
    title: 'AcneClear Series',
    tagline: 'Clear Skin',
    description: 'Acne & blemish control',
    products: [
      { name: 'AcneClear Cleanser', ingredient: 'Salicylic Acid', benefit: 'Deep cleaning' },
      { name: 'AcneClear Serum', ingredient: 'Niacinamide 5%', benefit: 'Reduces breakouts' },
      { name: 'AcneClear Spot Treatment', ingredient: 'Bisabolol', benefit: 'Targeted healing' },
    ],
  },
];

const keyIngredients = [
  { name: 'Alpha-Bisabolol', purity: '≥95%', benefit: 'Soothing, anti-inflammatory', products: 8 },
  { name: 'Ergothioneine', purity: '≥98%', benefit: 'Antioxidant, anti-aging', products: 6 },
  { name: 'Ectoine', purity: '≥99%', benefit: 'Cell repair, hydration', products: 7 },
  { name: 'Squalane', purity: '≥99%', benefit: 'Moisturizing, barrier', products: 4 },
  { name: 'Hyaluronic Acid', purity: 'Multi-MW', benefit: 'Deep hydration', products: 10 },
  { name: 'Recombinant Collagen', purity: 'Type III/I', benefit: 'Skin regeneration', products: 4 },
];

const certifications = [
  'COSMOS/Ecocert certified',
  'Cruelty-free',
  'Clean beauty standard',
  'Hypoallergenic tested',
  'Dermatologist approved',
  'Sustainable sourcing',
];

export default function UltiGlowPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/cosmetic-ingredients.jpeg"
            alt="UltiGlow Skincare"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
                <Sparkles className="w-4 h-4" />
                UltiGlow® Skincare
              </div>
              <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
                Ultimate Glow
              </h1>
              <p className="text-xl mb-2" style={{ color: '#A1BA80' }}>
                「极致光彩」
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Premium skincare powered by biosynthesis technology. 
                Science-backed ingredients for radiant, healthy skin.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>8</p>
                  <p className="text-sm text-gray-600">Product Series</p>
                </div>
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>30</p>
                  <p className="text-sm text-gray-600">Skincare Products</p>
                </div>
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>6</p>
                  <p className="text-sm text-gray-600">Key Ingredients</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" style={{ backgroundColor: '#A1BA80' }}>
                  <Link href="/contact">
                    Request Samples <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/api/catalogue-download">
                    <Download className="mr-2 h-4 w-4" />
                    Download Catalogue
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/cosmetic-ingredients.jpeg"
                alt="UltiGlow Products"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium">Powered by Biosynthesis</p>
                <p className="text-white/70 text-sm mt-1">Ergothioneine • Ectoine • Bisabolol • HA • Collagen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Series Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              UltiGlow® Product Series
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Targeted skincare solutions for every skin concern
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ultiGlowSeries.map((series, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#d7e1c7' }}>
                    <series.icon className="w-6 h-6" style={{ color: '#A1BA80' }} />
                  </div>
                  <h3 className="font-normal text-gray-900 mb-1">{series.title}</h3>
                  <p className="text-sm mb-2" style={{ color: '#A1BA80' }}>{series.tagline}</p>
                  <p className="text-gray-600 text-sm mb-4">{series.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {series.products.slice(0, 3).map((product, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>
                        {product.name}
                      </span>
                    ))}
                    {series.products.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        +{series.products.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              Product Details
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {ultiGlowSeries.map((series, index) => (
              <Card key={index} className="border border-gray-200 overflow-hidden">
                <div className="p-6" style={{ backgroundColor: '#f8faf5' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                      <series.icon className="w-6 h-6" style={{ color: '#A1BA80' }} />
                    </div>
                    <div>
                      <h3 className="font-normal text-gray-900">{series.title}</h3>
                      <p className="text-sm" style={{ color: '#A1BA80' }}>{series.tagline}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {series.products.map((product, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4" style={{ color: '#A1BA80' }} />
                          <div>
                            <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                            <p className="text-xs text-gray-500">{product.benefit}</p>
                          </div>
                        </div>
                        <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>
                          {product.ingredient}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Ingredients Table */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              Key Ingredients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Biosynthesis-derived actives with verified purity
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead style={{ backgroundColor: '#A1BA80' }}>
                <tr>
                  <th className="px-6 py-4 text-left font-normal text-white">Ingredient</th>
                  <th className="px-6 py-4 text-left font-normal text-white">Purity</th>
                  <th className="px-6 py-4 text-left font-normal text-white">Core Benefit</th>
                  <th className="px-6 py-4 text-left font-normal text-white">Products</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {keyIngredients.map((ingredient, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{ingredient.name}</td>
                    <td className="px-6 py-4" style={{ color: '#A1BA80' }}>{ingredient.purity}</td>
                    <td className="px-6 py-4 text-gray-600">{ingredient.benefit}</td>
                    <td className="px-6 py-4">
                      <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>
                        {ingredient.products} products
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/cosmetic-ingredients.jpeg"
                alt="Quality Standards"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-6">
                Clean Beauty Standards
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every UltiGlow® product meets the highest standards for safety, efficacy, and sustainability.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#A1BA80' }} />
                    <span className="text-gray-700 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Partnership */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-normal text-gray-900 mb-4">OEM/ODM Services</h3>
                <p className="text-gray-600 text-sm">
                  Custom formulation development<br />
                  Private label solutions<br />
                  Flexible MOQ from 500 units
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-normal text-gray-900 mb-4">Distribution</h3>
                <p className="text-gray-600 text-sm">
                  Regional distributor partnerships<br />
                  Exclusive territory rights<br />
                  Marketing support provided
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-normal text-gray-900 mb-4">R&D Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Joint product development<br />
                  Ingredient innovation<br />
                  Clinical testing support
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
            src="/cosmetic-ingredients.jpeg"
            alt="UltiGlow"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/90"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-normal text-white mb-6">
            Ready to Create Your Skincare Line?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Partner with Enviko for premium biosynthesis-based skincare solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" style={{ backgroundColor: '#A1BA80' }}>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="/api/catalogue-download">
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
