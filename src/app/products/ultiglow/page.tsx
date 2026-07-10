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
  Leaf,
  ArrowRight,
  CheckCircle,
  Download,
  Zap,
  RefreshCw,
  Eye,
  Smile,
  Wind,
  Palette
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'UltiGlow™ Skincare',
  description: 'UltiGlow™ - Ultimate Glow. Premium biosynthesis-based skincare products for radiant, healthy skin.',
};

// UltiGlow Product Categories - By Function
const ultiGlowCategories = [
  {
    category: 'Deep Hydration',
    icon: Droplets,
    description: 'Multi-layer hydration with biosynthesis hyaluronic acid and glucosamine',
    products: [
      { id: 'bio-ha-serum', name: 'Bio-HA Serum', description: 'Multi-weight hyaluronic acid, 72-hour deep hydration' },
      { id: 'bio-ha-cream', name: 'Bio-HA Cream', description: 'Intensive moisturizing cream, plumping skin' },
      { id: 'bio-ha-mask', name: 'Bio-HA Mask', description: 'Dry skin intensive hydrating mask' },
      { id: 'bio-ha-toner', name: 'Bio-HA Toner', description: 'Hydrating pre-treatment toner, enhances absorption' },
      { id: 'bio-glucosamine-serum', name: 'Bio-Glucosamine Serum', description: 'Promotes natural hyaluronic acid synthesis' },
      { id: 'bio-glucosamine-cream', name: 'Bio-Glucosamine Cream', description: 'Barrier repair, locks in moisture' },
    ],
  },
  {
    category: 'Anti-Aging',
    icon: Heart,
    description: 'Collagen and peptide formulations for youthful skin',
    products: [
      { id: 'bio-collagen-serum', name: 'Bio-Collagen Serum', description: 'Recombinant human collagen, firming and plumping' },
      { id: 'bio-collagen-cream', name: 'Bio-Collagen Cream', description: 'Day cream, firming and anti-wrinkle' },
      { id: 'bio-collagen-mask', name: 'Bio-Collagen Mask', description: 'Intensive repair mask' },
      { id: 'bio-collagen-eye-cream', name: 'Bio-Collagen Eye Cream', description: 'Reduces fine lines around eyes' },
      { id: 'bio-peptide-serum', name: 'Bio-Peptide Serum', description: 'Peptide complex, reduces wrinkles' },
      { id: 'bio-peptide-cream', name: 'Bio-Peptide Cream', description: 'Anti-aging firming cream' },
      { id: 'bio-copper-peptide-serum', name: 'Bio-Copper Peptide Serum', description: 'Copper peptides promote skin renewal' },
    ],
  },
  {
    category: 'Brightening',
    icon: Sparkles,
    description: 'Vitamin C and brightening complexes for radiant skin',
    products: [
      { id: 'bio-vitamin-c-serum', name: 'Bio-Vitamin C Serum', description: 'Stable Vitamin C (≥20%), brightening and antioxidant' },
      { id: 'bio-niacinamide-serum', name: 'Bio-Niacinamide Serum', description: 'Niacinamide (≥10%), evens skin tone' },
      { id: 'bio-arbutin-serum', name: 'Bio-Arbutin Serum', description: 'Alpha-arbutin, fades dark spots' },
      { id: 'bio-brightening-cream', name: 'Bio-Brightening Cream', description: 'Daily brightening moisturizing cream' },
      { id: 'bio-brightening-mask', name: 'Bio-Brightening Mask', description: 'Intensive brightening treatment' },
    ],
  },
  {
    category: 'Sensitive Repair',
    icon: Shield,
    description: 'Gentle formulations for sensitive and compromised skin',
    products: [
      { id: 'bio-ectoine-serum', name: 'Bio-Ectoine Serum', description: 'Protects and repairs skin barrier' },
      { id: 'bio-ectoine-cream', name: 'Bio-Ectoine Cream', description: 'Sensitive skin soothing moisturizing cream' },
      { id: 'bio-bisabolol-serum', name: 'Bio-Bisabolol Serum', description: 'Quickly relieves redness and irritation' },
      { id: 'bio-centella-cream', name: 'Bio-Centella Cream', description: 'Centella asiatica repair cream' },
      { id: 'bio-sensitive-mask', name: 'Bio-Sensitive Mask', description: 'Intensive soothing treatment' },
      { id: 'bio-ceramide-cream', name: 'Bio-Ceramide Cream', description: 'Rebuilds skin barrier' },
    ],
  },
  {
    category: 'Acne Control',
    icon: Zap,
    description: 'Acne-fighting formulations with biosynthesis actives',
    products: [
      { id: 'bio-salicylic-serum', name: 'Bio-Salicylic Serum', description: 'Oil-soluble BHA, deep pore cleansing' },
      { id: 'bio-acne-serum', name: 'Bio-Acne Serum', description: 'Salicylic acid + niacinamide formula' },
      { id: 'bio-acne-patch', name: 'Bio-Acne Patch', description: 'Hydrocolloid patches, overnight treatment' },
      { id: 'bio-oil-control-toner', name: 'Bio-Oil Control Toner', description: 'Balances oil, tightens pores' },
      { id: 'bio-tea-tree-serum', name: 'Bio-Tea Tree Serum', description: 'Natural antibacterial, spot treatment' },
    ],
  },
  {
    category: 'Skin Renewal',
    icon: RefreshCw,
    description: 'Exfoliation and renewal formulations',
    products: [
      { id: 'bio-aha-serum', name: 'Bio-AHA Serum', description: 'Gentle exfoliation, smooths skin texture' },
      { id: 'bio-bha-toner', name: 'Bio-BHA Toner', description: 'Cleans pores, reduces blackheads' },
      { id: 'bio-renew-mask', name: 'Bio-Renew Mask', description: 'Enzyme renewal, brightens complexion' },
      { id: 'bio-retinol-serum', name: 'Bio-Retinol Serum', description: 'Encapsulated retinol, anti-aging renewal' },
      { id: 'bio-lactic-serum', name: 'Bio-Lactic Serum', description: 'Gentle exfoliation for sensitive skin' },
    ],
  },
  {
    category: 'Sun Protection',
    icon: Sun,
    description: 'UV protection with skin-loving ingredients',
    products: [
      { id: 'bio-sunscreen-spf50', name: 'Bio-Sunscreen SPF50', description: 'Lightweight broad-spectrum protection' },
      { id: 'bio-sun-serum', name: 'Bio-Sun Serum', description: 'Sun protection serum, glowing finish' },
      { id: 'bio-after-sun-gel', name: 'Bio-After Sun Gel', description: 'Soothing after-sun care' },
      { id: 'bio-uv-shield-cream', name: 'Bio-UV Shield Cream', description: 'Daily UV protection moisturizing cream' },
    ],
  },
  {
    category: 'Antioxidant',
    icon: Leaf,
    description: 'Natural antioxidant complexes for skin defense',
    products: [
      { id: 'bio-ergothioneine-serum', name: 'Bio-Ergothioneine Serum', description: 'Deep antioxidant protection (≥98%)' },
      { id: 'bio-resveratrol-cream', name: 'Bio-Resveratrol Cream', description: 'Anti-aging night cream' },
      { id: 'bio-green-tea-essence', name: 'Bio-Green Tea Essence', description: 'EGCG essence, soothing antioxidant' },
      { id: 'bio-ferulic-serum', name: 'Bio-Ferulic Serum', description: 'Enhances other antioxidants' },
    ],
  },
  {
    category: 'Eye Care',
    icon: Eye,
    description: 'Targeted solutions for delicate eye area',
    products: [
      { id: 'bio-eye-cream', name: 'Bio-Eye Cream', description: 'Reduces dark circles and fine lines' },
      { id: 'bio-peptide-eye-serum', name: 'Bio-Peptide Eye Serum', description: 'Peptide complex eye treatment' },
      { id: 'bio-eye-mask', name: 'Bio-Eye Mask', description: 'Intensive tired eye treatment' },
    ],
  },
  {
    category: 'Lip Care',
    icon: Smile,
    description: 'Nourishing and protecting lip products',
    products: [
      { id: 'bio-lip-balm', name: 'Bio-Lip Balm', description: 'Natural ingredient moisturizing lip balm' },
      { id: 'bio-lip-mask', name: 'Bio-Lip Mask', description: 'Overnight intensive lip care' },
      { id: 'bio-lip-serum', name: 'Bio-Lip Serum', description: 'Plumping moisturizing lip serum' },
    ],
  },
  {
    category: 'Pore Care',
    icon: Wind,
    description: 'Pore refining and oil control solutions',
    products: [
      { id: 'bio-pore-serum', name: 'Bio-Pore Serum', description: 'Refines pores, controls oil' },
      { id: 'bio-pore-mask', name: 'Bio-Pore Mask', description: 'Deep cleansing clay mask' },
      { id: 'bio-pore-toner', name: 'Bio-Pore Toner', description: 'Tightens pores, smooths skin' },
    ],
  },
  {
    category: 'Natural Color',
    icon: Palette,
    description: 'Natural color cosmetics with bio-derived pigments',
    products: [
      { id: 'bio-lip-tint', name: 'Bio-Lip Tint', description: 'Plant-based natural colors' },
      { id: 'bio-bb-cream', name: 'Bio-BB Cream', description: 'Natural coverage, lightweight finish' },
      { id: 'bio-blush', name: 'Bio-Blush', description: 'Mineral blush, healthy glow' },
      { id: 'bio-highlighter', name: 'Bio-Highlighter', description: 'Natural glow, subtle shimmer' },
      { id: 'bio-bronzer', name: 'Bio-Bronzer', description: 'Sun-kissed healthy look' },
      { id: 'bio-eyebrow-gel', name: 'Bio-Eyebrow Gel', description: 'Natural hold, long-lasting' },
    ],
  },
];

const keyIngredients = [
  { name: 'Biosynthesis Hyaluronic Acid', purity: '≥95%', benefit: 'Deep Hydration', source: 'Fermentation' },
  { name: 'Biosynthesis Collagen', purity: '≥95%', benefit: 'Skin Regeneration', source: 'Biosynthesis' },
  { name: 'Biosynthesis Ectoine', purity: '≥99%', benefit: 'Cellular Repair', source: 'Halophilic Bacteria' },
  { name: 'Biosynthesis Ergothioneine', purity: '≥98%', benefit: 'Antioxidant', source: 'Biosynthesis' },
  { name: 'Biosynthesis Alpha-Bisabolol', purity: '≥95%', benefit: 'Soothing', source: 'Natural Extract' },
  { name: 'Biosynthesis Copper Peptide', purity: '≥98%', benefit: 'Skin Repair', source: 'Biosynthesis' },
  { name: 'Biosynthesis Glucosamine', purity: '≥98%', benefit: 'Barrier Repair', source: 'Biosynthesis' },
  { name: 'Biosynthesis Vitamin C', purity: '≥20%', benefit: 'Brightening', source: 'Biosynthesis' },
];

const certifications = [
  'COSMOS/Ecocert Certified',
  'Cruelty-Free',
  'Clean Beauty Standard',
  'Hypoallergenic Tested',
  'Dermatologist Recommended',
  'Sustainable Ingredients',
];

export default function UltiGlowPage() {
  const totalProducts = ultiGlowCategories.reduce((sum, cat) => sum + cat.products.length, 0);

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
                UltiGlow™ Skincare
              </div>
              <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
                Ultimate Glow
              </h1>
              <p className="text-xl mb-2" style={{ color: '#A1BA80' }}>
                Biosynthesis Skincare
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {ultiGlowCategories.length} functional series, {totalProducts} products, bringing scientific power to your skin
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>{ultiGlowCategories.length}</p>
                  <p className="text-sm text-gray-600">Functional Series</p>
                </div>
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>{totalProducts}</p>
                  <p className="text-sm text-gray-600">Skincare Products</p>
                </div>
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>8+</p>
                  <p className="text-sm text-gray-600">Key Ingredients</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" style={{ backgroundColor: '#A1BA80' }}>
                  <Link href="/contact">
                    Request Sample <ArrowRight className="ml-2 h-4 w-4" />
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
                <p className="text-white font-medium">Biosynthesis Technology</p>
                <p className="text-white/70 text-sm mt-1">Collagen • Ectoine • Hyaluronic Acid • Ergothioneine • Peptides</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              UltiGlow™ Product Series
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Classified by skin function, click products to view details
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ultiGlowCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Category Header */}
                  <div className="p-6" style={{ backgroundColor: '#f8faf5' }}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#d7e1c7' }}>
                        <category.icon className="w-7 h-7" style={{ color: '#A1BA80' }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-normal text-gray-900">{category.category}</h3>
                        <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-normal" style={{ color: '#A1BA80' }}>{category.products.length}</span>
                        <p className="text-xs text-gray-500">Products</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Products List */}
                  <div className="p-6">
                    <div className="space-y-3">
                      {category.products.map((product, productIndex) => (
                        <Link 
                          key={productIndex} 
                          href={`/products/ultiglow/${product.id}`}
                          className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-green-200 hover:bg-gray-50 transition-all group"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-normal text-gray-900 group-hover:text-green-700 transition-colors">
                                {product.name}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{product.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-green-600 transition-colors flex-shrink-0 ml-4" />
                        </Link>
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
              Key Biosynthesis Ingredients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              High purity, high efficacy biosynthesis active ingredients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyIngredients.map((ingredient, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-normal text-gray-900">{ingredient.name}</h3>
                    <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
                      {ingredient.purity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{ingredient.benefit}</p>
                  <p className="text-xs text-gray-500">Source: {ingredient.source}</p>
                </CardContent>
              </Card>
            ))}
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
                Every UltiGlow™ product meets the highest standards of safety, efficacy, and sustainability
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100">
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
                <h3 className="text-xl font-normal text-gray-900 mb-4">OEM/ODM Services</h3>
                <p className="text-gray-600 text-sm">
                  Custom formulation development<br />
                  Private label solutions<br />
                  Flexible MOQ from 500 pieces
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-normal text-gray-900 mb-4">Distribution & Agency</h3>
                <p className="text-gray-600 text-sm">
                  Regional distribution partnership<br />
                  Exclusive territory authorization<br />
                  Marketing support provided
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-normal text-gray-900 mb-4">R&D Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Joint product development<br />
                  Ingredient innovation research<br />
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
            Ready to create your skincare brand?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Partner with Alvokor for biosynthesis skincare solutions
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
