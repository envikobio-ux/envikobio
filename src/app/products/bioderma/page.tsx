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
  Download
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'BioDerma® Skincare',
  description: 'BioDerma® - Premium biosynthesis-based skincare products powered by nature and science.',
};

// BioDerma Product Lines
const bioDermaSeries = [
  {
    icon: Sparkles,
    title: 'Age-Defying Series',
    tagline: 'Turn back time naturally',
    description: 'Advanced anti-aging solutions with Ergothioneine and Ectoine',
    products: [
      { name: 'Youth Renewal Serum', keyIngredient: 'Ergothioneine 0.5%', benefit: 'Reduces fine lines & wrinkles' },
      { name: 'Time Reverse Cream', keyIngredient: 'Ectoine + Peptides', benefit: 'Firms & lifts skin' },
      { name: 'Night Repair Essence', keyIngredient: 'Bisabolol + HA', benefit: 'Deep repair during sleep' },
      { name: 'Age Defense Eye Cream', keyIngredient: 'Ergothioneine 0.3%', benefit: 'Reduces dark circles & puffiness' },
    ],
  },
  {
    icon: Droplets,
    title: 'Hydra Boost Series',
    tagline: 'Intense hydration, lasting moisture',
    description: 'Deep hydration powered by Hyaluronic Acid and Squalane',
    products: [
      { name: 'Hydra Boost Toner', keyIngredient: 'Hyaluronic Acid 1%', benefit: 'Instant hydration boost' },
      { name: 'Moisture Lock Serum', keyIngredient: 'Squalane 5%', benefit: 'Locks in moisture for 72h' },
      { name: 'Hydro Gel Cream', keyIngredient: 'HA + Squalane', benefit: 'Lightweight, oil-free hydration' },
      { name: 'Hydrating Mask', keyIngredient: 'Hyaluronic Acid 2%', benefit: 'Intensive weekly treatment' },
    ],
  },
  {
    icon: Shield,
    title: 'Sensitive Care Series',
    tagline: 'Gentle care for delicate skin',
    description: 'Calming solutions with Alpha-Bisabolol for sensitive skin',
    products: [
      { name: 'Gentle Cleanser', keyIngredient: 'Bisabolol 0.5%', benefit: 'Non-irritating, pH balanced' },
      { name: 'Calm & Soothe Toner', keyIngredient: 'Ectoine 1%', benefit: 'Reduces redness & irritation' },
      { name: 'Barrier Repair Cream', keyIngredient: 'Bisabolol + Ceramides', benefit: 'Strengthens skin barrier' },
      { name: 'SOS Relief Serum', keyIngredient: 'Ectoine 2%', benefit: 'Instant relief for flare-ups' },
    ],
  },
  {
    icon: Sun,
    title: 'Sun Defense Series',
    tagline: 'Protect & prevent',
    description: 'Advanced UV protection with antioxidant boosters',
    products: [
      { name: 'Daily Shield SPF 50+', keyIngredient: 'Ectoine + UV Filters', benefit: 'Broad spectrum protection' },
      { name: 'After-Sun Repair', keyIngredient: 'Bisabolol + Aloe', benefit: 'Soothes & repairs sun damage' },
      { name: 'UV Defense Serum', keyIngredient: 'Ergothioneine 0.2%', benefit: 'Antioxidant UV protection' },
      { name: 'Sun Recovery Mask', keyIngredient: 'HA + Ectoine', benefit: 'Post-sun skin recovery' },
    ],
  },
  {
    icon: Flower2,
    title: 'Brightening Series',
    tagline: 'Radiant, even-toned skin',
    description: 'Brightening solutions for luminous complexion',
    products: [
      { name: 'Bright Start Serum', keyIngredient: 'Vitamin C + Ectoine', benefit: 'Fades dark spots' },
      { name: 'Glow Enhancer Cream', keyIngredient: 'Niacinamide + HA', benefit: 'Even skin tone' },
      { name: 'Radiance Mask', keyIngredient: 'Alpha-Bisabolol', benefit: 'Brightens & soothes' },
      { name: 'Dark Spot Corrector', keyIngredient: 'Ergothioneine', benefit: 'Targeted spot treatment' },
    ],
  },
  {
    icon: Heart,
    title: 'Collagen Boost Series',
    tagline: 'Firm, plump, youthful',
    description: 'Collagen enhancement with Recombinant Humanized Collagen',
    products: [
      { name: 'Collagen Lift Serum', keyIngredient: 'Collagen Type III 2%', benefit: 'Stimulates collagen production' },
      { name: 'Firming Night Cream', keyIngredient: 'Collagen + Peptides', benefit: 'Firms while you sleep' },
      { name: 'Plumping Essence', keyIngredient: 'HA + Collagen', benefit: 'Instant plumping effect' },
      { name: 'Collagen Sheet Mask', keyIngredient: 'Collagen 3%', benefit: 'Intensive weekly treatment' },
    ],
  },
];

const keyIngredients = [
  {
    name: 'Alpha-Bisabolol',
    purity: '≥95%',
    benefit: 'Soothing, anti-inflammatory',
    products: '8 products',
  },
  {
    name: 'Ergothioneine',
    purity: '≥98%',
    benefit: 'Antioxidant, anti-aging',
    products: '6 products',
  },
  {
    name: 'Ectoine',
    purity: '≥99%',
    benefit: 'Cell repair, hydration',
    products: '7 products',
  },
  {
    name: 'Squalane',
    purity: '≥99%',
    benefit: 'Moisturizing, barrier repair',
    products: '5 products',
  },
  {
    name: 'Hyaluronic Acid',
    purity: 'Multi-molecular',
    benefit: 'Deep hydration',
    products: '10 products',
  },
  {
    name: 'Recombinant Collagen',
    purity: 'Type III/I',
    benefit: 'Skin regeneration',
    products: '4 products',
  },
];

const certifications = [
  'COSMOS/Ecocert certified ingredients',
  'Cruelty-free formulations',
  'Clean beauty standard compliant',
  'Hypoallergenic tested',
  'Dermatologist approved',
  'Sustainable sourcing certified',
];

export default function BioDermaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/cosmetic-ingredients.jpeg"
            alt="BioDerma Skincare"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
                <Sparkles className="w-4 h-4" />
                BioDerma® Skincare
              </div>
              <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-6">
                Where Biosynthesis Meets Beauty
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Premium skincare products powered by nature and advanced biosynthesis technology. 
                100% traceable ingredients, scientifically proven efficacy.
              </p>
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
                alt="BioDerma Products"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">BioDerma® Product Lines</p>
                    <p className="text-2xl font-normal" style={{ color: '#A1BA80' }}>6 Series • 28 Products</p>
                  </div>
                  <div className="flex gap-2">
                    <Leaf className="w-8 h-8" style={{ color: '#A1BA80' }} />
                    <Star className="w-8 h-8" style={{ color: '#A1BA80' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Series */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              BioDerma® Product Lines
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Targeted skincare solutions for every skin concern
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {bioDermaSeries.map((series, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="p-6" style={{ backgroundColor: '#f8faf5' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#d7e1c7' }}>
                        <series.icon className="w-7 h-7" style={{ color: '#A1BA80' }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-normal text-gray-900 mb-1">{series.title}</h3>
                        <p className="text-sm mb-2" style={{ color: '#A1BA80' }}>{series.tagline}</p>
                        <p className="text-gray-600 text-sm">{series.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="space-y-3">
                      {series.products.map((product, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#A1BA80' }} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-900 text-sm">{product.name}</span>
                              <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>
                                {product.keyIngredient}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{product.benefit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Ingredients */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              Powered by Premium Ingredients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Biosynthesis-derived active ingredients with verified purity and efficacy
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead style={{ backgroundColor: '#A1BA80' }}>
                <tr>
                  <th className="px-6 py-4 text-left font-normal text-white">Key Ingredient</th>
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
                        {ingredient.products}
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
              <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-6">
                Clean Beauty Standards
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every BioDerma® product meets the highest standards for safety, efficacy, and sustainability.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
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
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">OEM/ODM Services</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Custom formulation development<br />
                  Private label solutions<br />
                  Flexible MOQ from 500 units
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Distribution</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Regional distributor partnerships<br />
                  Exclusive territory rights<br />
                  Marketing support provided
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">R&D Collaboration</h3>
                <p className="text-gray-600 text-sm mb-4">
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
            alt="BioDerma"
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
