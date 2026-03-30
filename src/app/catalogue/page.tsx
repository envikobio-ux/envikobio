import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Brain, 
  Zap, 
  Shield, 
  Sparkles, 
  Bone, 
  Moon, 
  Leaf,
  Eye,
  Users,
  Activity,
  Target,
  Droplets,
  Dumbbell,
  Download,
  ArrowRight,
  Flower2,
  Sun,
  Palette
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Catalogue | Enviko Bio',
  description: 'Explore UltiWell® and UltiGlow® product series - premium biosynthesis-based health supplements and skincare products.',
};

// UltiWell Product Categories
const ultiWellCategories = [
  {
    category: 'Core Nutrition',
    icon: Target,
    description: 'Essential nutritional foundation for daily wellness',
    products: [
      { name: 'UltiWell® Core', description: 'Foundation and core nutritional supplements' },
      { name: 'UltiWell® Vitality', description: 'Energy enhancement and vitality boost' },
      { name: 'UltiWell® Balance', description: 'Body balance and coordination support' },
      { name: 'UltiWell® Pure', description: 'Pure, contaminant-free supplements' },
      { name: 'UltiWell® Elevate', description: 'Overall health and quality of life enhancement' },
      { name: 'UltiWell® NutriBoost', description: 'Comprehensive nutritional support' },
    ],
  },
  {
    category: 'Brain & Cognitive',
    icon: Brain,
    description: 'Mental clarity, focus and cognitive performance',
    products: [
      { name: 'UltiWell® Clarity', description: 'Brain health and mental clarity' },
      { name: 'UltiWell® Focus', description: 'Attention and cognitive function enhancement' },
      { name: 'UltiWell® BrainBoost', description: 'Memory and cognitive performance support' },
    ],
  },
  {
    category: 'Energy & Sports',
    icon: Dumbbell,
    description: 'Performance, strength and recovery solutions',
    products: [
      { name: 'UltiWell® Strength', description: 'Muscle and physical strength enhancement' },
      { name: 'UltiWell® Active', description: 'Active lifestyle and sports nutrition' },
      { name: 'UltiWell® Energy', description: 'Energy boost and endurance support' },
      { name: 'UltiWell® SportPerformance', description: 'High-performance nutrition for athletes' },
      { name: 'UltiWell® Recovery Series', description: 'Post-exercise recovery and muscle relief' },
    ],
  },
  {
    category: 'Anti-Aging & Beauty',
    icon: Sparkles,
    description: 'Youthful vitality and skin health',
    products: [
      { name: 'UltiWell® Renew', description: 'Anti-aging and vitality restoration' },
      { name: 'UltiWell® Ageless', description: 'Anti-aging and skin care' },
      { name: 'UltiWell® YouthVibe', description: 'Health and vitality for the young generation' },
      { name: 'UltiWell® Glow', description: 'Skin health and beauty' },
      { name: 'UltiWell® SkinNutritious', description: 'Skin health and beauty nutrition' },
      { name: 'UltiWell® Body Care Series', description: 'Skin health and body care products' },
    ],
  },
  {
    category: 'Heart & Circulation',
    icon: Heart,
    description: 'Cardiovascular health and blood circulation',
    products: [
      { name: 'UltiWell® Pulse', description: 'Heart health and blood circulation' },
      { name: 'UltiWell® CardioFit', description: 'Cardiovascular health promotion' },
    ],
  },
  {
    category: 'Immune Support',
    icon: Shield,
    description: 'Immune system defense and protection',
    products: [
      { name: 'UltiWell® Shield', description: 'Immune system support and protection' },
      { name: 'UltiWell® ImmunoShield', description: 'Immune system enhancement' },
    ],
  },
  {
    category: 'Joint & Mobility',
    icon: Bone,
    description: 'Joint health, flexibility and mobility',
    products: [
      { name: 'UltiWell® Flex', description: 'Joint health and flexibility' },
      { name: 'UltiWell® Mobility', description: 'Joint flexibility and pain relief' },
    ],
  },
  {
    category: 'Sleep & Relaxation',
    icon: Moon,
    description: 'Restful sleep and stress management',
    products: [
      { name: 'UltiWell® Harmony', description: 'Mind-body harmony and relaxation' },
      { name: 'UltiWell® Calm', description: 'Stress management and relaxation' },
      { name: 'UltiWell® Zenith', description: 'Premium flagship product line' },
      { name: 'UltiWell® Restful', description: 'Sleep quality improvement' },
      { name: 'UltiWell® Sleep Series', description: 'Sleep quality and pattern improvement' },
      { name: 'UltiWell® Relaxation Series', description: 'Stress management and relaxation' },
      { name: 'UltiWell® Mind Soothing Series', description: 'Mental health support and relaxation' },
    ],
  },
  {
    category: 'Digestive Health',
    icon: Leaf,
    description: 'Digestion, detox and liver support',
    products: [
      { name: 'UltiWell® Digest', description: 'Digestive system health support' },
      { name: 'UltiWell® Cleanse', description: 'Body detoxification and cleansing' },
      { name: 'UltiWell® LiverSupport', description: 'Liver health and detoxification' },
      { name: 'UltiWell® KetoBalance', description: 'Keto diet and weight management' },
    ],
  },
  {
    category: 'Specialized Care',
    icon: Users,
    description: 'Targeted solutions for specific needs',
    products: [
      { name: 'UltiWell® MenopauseEase', description: 'Menopause symptom relief' },
      { name: 'UltiWell® EyeVive', description: 'Eye health and vision protection' },
      { name: 'UltiWell® Elderly Care Series', description: 'Quality of life products for seniors' },
    ],
  },
  {
    category: 'Lifestyle Solutions',
    icon: Activity,
    description: 'Daily wellness and lifestyle support',
    products: [
      { name: 'UltiWell® VeganPure', description: 'Vegan and pure supplements' },
      { name: 'UltiWell® Travel Series', description: 'Portable products for travelers' },
      { name: 'UltiWell® Healthy Diet Series', description: 'Nutritious food and beverages' },
      { name: 'UltiWell® Daily Care Series', description: 'Daily comfort and wellness tools' },
      { name: 'UltiWell® Environment Optimization Series', description: 'Living and working environment enhancement' },
    ],
  },
  {
    category: 'Plant Extracts',
    icon: Leaf,
    description: 'High-potency plant-derived active ingredients',
    products: [
      { name: 'UltiWell® Curcumin Extract', description: 'Turmeric extract (Curcumin ≥95%), anti-inflammatory and antioxidant support' },
      { name: 'UltiWell® Resveratrol Extract', description: 'Red grape extract (Resveratrol ≥98%), anti-aging and cardiovascular protection' },
      { name: 'UltiWell® Quercetin Extract', description: 'Sophora japonica extract (Quercetin ≥95%), immune support and anti-allergy' },
      { name: 'UltiWell® EGCG Extract', description: 'Green tea extract (EGCG ≥50%), metabolism boost and antioxidant' },
      { name: 'UltiWell® Berberine Extract', description: 'Coptis chinensis extract (Berberine ≥97%), blood sugar regulation' },
      { name: 'UltiWell® Silymarin Extract', description: 'Milk thistle extract (Silymarin ≥80%), liver protection and detox' },
    ],
  },
  {
    category: 'Bio-Natural Colors',
    icon: Sparkles,
    description: 'Natural food-grade colors from biosynthesis',
    products: [
      { name: 'UltiWell® Beta-Carotene', description: 'Natural orange color (≥96%), provitamin A, antioxidant' },
      { name: 'UltiWell® Astaxanthin', description: 'Natural red color (≥2%), super antioxidant, skin health' },
      { name: 'UltiWell® Lutein', description: 'Natural yellow color (≥5%), eye health, blue light protection' },
      { name: 'UltiWell® Lycopene', description: 'Natural red color (≥5%), prostate health, cardiovascular support' },
      { name: 'UltiWell® Anthocyanin', description: 'Natural purple color (≥25%), vision protection, antioxidant' },
      { name: 'UltiWell® Chlorophyll', description: 'Natural green color, detox support, internal deodorant' },
    ],
  },
];

// UltiGlow Product Categories
const ultiGlowCategories = [
  {
    category: 'Bio-Synth Collagen',
    icon: Droplets,
    description: 'Biosynthesis collagen for skin elasticity and firmness',
    products: [
      { name: 'UltiGlow® Collagen Serum', description: 'High-purity collagen serum, deep hydration and elasticity' },
      { name: 'UltiGlow® Collagen Cream', description: 'Collagen day cream, firming and anti-wrinkle' },
      { name: 'UltiGlow® Collagen Mask', description: 'Collagen sheet mask, intensive repair' },
      { name: 'UltiGlow® Collagen Eye Cream', description: 'Collagen eye cream, reduce fine lines' },
      { name: 'UltiGlow® Collagen Toner', description: 'Collagen toner, prep skin for absorption' },
    ],
  },
  {
    category: 'Bio-Ectoine',
    icon: Shield,
    description: 'Ectoine-based protection and repair formulations',
    products: [
      { name: 'UltiGlow® Ectoine Serum', description: 'Ectoine protective serum, barrier repair' },
      { name: 'UltiGlow® Ectoine Cream', description: 'Ectoine moisturizer, sensitive skin care' },
      { name: 'UltiGlow® Ectoine Sunscreen', description: 'Ectoine sunscreen, UV protection + repair' },
      { name: 'UltiGlow® Ectoine Mask', description: 'Ectoine repair mask, soothing and calming' },
    ],
  },
  {
    category: 'Bio-Hyaluronic Acid',
    icon: Droplets,
    description: 'Multi-molecular weight HA for deep hydration',
    products: [
      { name: 'UltiGlow® HA Serum', description: 'Multi-weight HA serum, 72-hour hydration' },
      { name: 'UltiGlow® HA Cream', description: 'Hyaluronic acid cream, plumping effect' },
      { name: 'UltiGlow® HA Mask', description: 'HA intensive mask, deep moisture' },
      { name: 'UltiGlow® HA Toner', description: 'HA toner, hydrating prep' },
    ],
  },
  {
    category: 'Bio-Vitamin Complex',
    icon: Sun,
    description: 'Biosynthesis vitamin complexes for skin nutrition',
    products: [
      { name: 'UltiGlow® Vitamin C Serum', description: 'Stable vitamin C (≥20%), brightening and antioxidant' },
      { name: 'UltiGlow® Vitamin E Cream', description: 'Vitamin E moisturizer, repair and protection' },
      { name: 'UltiGlow® B-Complex Serum', description: 'Vitamin B complex, barrier repair' },
      { name: 'UltiGlow® Multi-Vitamin Mask', description: 'Multi-vitamin mask, skin nutrition boost' },
    ],
  },
  {
    category: 'Bio-Peptide',
    icon: Sparkles,
    description: 'Advanced peptide formulations for anti-aging',
    products: [
      { name: 'UltiGlow® Peptide Serum', description: 'Multi-peptide serum, wrinkle reduction' },
      { name: 'UltiGlow® Peptide Cream', description: 'Peptide anti-aging cream, firming' },
      { name: 'UltiGlow® Peptide Eye Serum', description: 'Peptide eye serum, dark circle reduction' },
      { name: 'UltiGlow® Peptide Mask', description: 'Peptide lifting mask, instant firming' },
      { name: 'UltiGlow® Copper Peptide Serum', description: 'Copper peptide serum, skin renewal' },
    ],
  },
  {
    category: 'Bio-Antioxidant',
    icon: Leaf,
    description: 'Natural antioxidant complexes for skin defense',
    products: [
      { name: 'UltiGlow® Antioxidant Serum', description: 'Multi-antioxidant serum, environmental protection' },
      { name: 'UltiGlow® Resveratrol Cream', description: 'Resveratrol night cream, anti-aging' },
      { name: 'UltiGlow® Green Tea Essence', description: 'EGCG essence, soothing and antioxidant' },
    ],
  },
  {
    category: 'Bio-Sensitive Repair',
    icon: Heart,
    description: 'Gentle formulations for sensitive and compromised skin',
    products: [
      { name: 'UltiGlow® Sensitive Serum', description: 'Gentle serum for sensitive skin' },
      { name: 'UltiGlow® Sensitive Cream', description: 'Calming cream, redness reduction' },
      { name: 'UltiGlow® Repair Mask', description: 'Intensive repair mask, barrier restoration' },
      { name: 'UltiGlow® Soothing Toner', description: 'Alcohol-free soothing toner' },
    ],
  },
  {
    category: 'Bio-Acne Clear',
    icon: Shield,
    description: 'Acne-fighting formulations with biosynthesis actives',
    products: [
      { name: 'UltiGlow® Acne Serum', description: 'Salicylic acid + niacinamide serum' },
      { name: 'UltiGlow® Acne Patch', description: 'Hydrocolloid acne patch, overnight treatment' },
      { name: 'UltiGlow® Oil Control Toner', description: 'Oil-balancing toner, pore refinement' },
    ],
  },
  {
    category: 'Bio-Skin Renew',
    icon: Sparkles,
    description: 'Exfoliation and renewal formulations',
    products: [
      { name: 'UltiGlow® AHA Serum', description: 'Alpha hydroxy acid serum, gentle exfoliation' },
      { name: 'UltiGlow® BHA Toner', description: 'Beta hydroxy acid toner, pore clearing' },
      { name: 'UltiGlow® Renew Mask', description: 'Enzyme renewal mask, brightening' },
      { name: 'UltiGlow® Retinol Serum', description: 'Encapsulated retinol, anti-aging renewal' },
    ],
  },
  {
    category: 'Bio-Sun Shield',
    icon: Sun,
    description: 'UV protection with skin-loving ingredients',
    products: [
      { name: 'UltiGlow® Sunscreen SPF50', description: 'Lightweight SPF50 sunscreen, broad spectrum' },
      { name: 'UltiGlow® Sun Serum', description: 'Sun protection serum, glow finish' },
      { name: 'UltiGlow® After Sun Gel', description: 'Soothing after-sun care gel' },
    ],
  },
  {
    category: 'Bio-Glucosamine',
    icon: Flower2,
    description: 'Glucosamine derivatives for skin barrier support',
    products: [
      { name: 'UltiGlow® Glucosamine Serum', description: 'Glucosamine serum, barrier repair' },
      { name: 'UltiGlow® Glucosamine Cream', description: 'Glucosamine moisturizer, hydration lock' },
      { name: 'UltiGlow® NAG Toner', description: 'N-acetyl glucosamine toner, brightening' },
      { name: 'UltiGlow® Glucosamine Mask', description: 'Glucosamine intensive mask' },
    ],
  },
  {
    category: 'Bio-Plant Extract',
    icon: Leaf,
    description: 'Concentrated plant extracts for targeted benefits',
    products: [
      { name: 'UltiGlow® Centella Essence', description: 'Centella asiatica essence, calming and repair' },
      { name: 'UltiGlow® Licorice Serum', description: 'Licorice root serum, brightening' },
      { name: 'UltiGlow® Chamomile Toner', description: 'Chamomile toner, soothing' },
      { name: 'UltiGlow® Rosehip Oil', description: 'Rosehip seed oil, regeneration' },
      { name: 'UltiGlow® Green Tea Mist', description: 'Green tea facial mist, refreshing' },
    ],
  },
  {
    category: 'Bio-Color',
    icon: Palette,
    description: 'Natural color cosmetics with bio-derived pigments',
    products: [
      { name: 'UltiGlow® Natural Lip Tint', description: 'Plant-based lip tint, natural color' },
      { name: 'UltiGlow® BB Cream', description: 'Natural BB cream, light coverage' },
      { name: 'UltiGlow® Blush', description: 'Mineral blush, healthy glow' },
      { name: 'UltiGlow® Bronzer', description: 'Natural bronzer, sun-kissed look' },
      { name: 'UltiGlow® Highlighter', description: 'Bio-highlighter, natural radiance' },
      { name: 'UltiGlow® Eyebrow Gel', description: 'Natural eyebrow gel, defining' },
    ],
  },
];

export default function CataloguePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
              Product Catalogue
            </h1>
            <p className="text-lg text-gray-600">
              Explore our complete range of biosynthesis-based products across two premium brands
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/api/catalogue-download" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#A1BA80' }}
              >
                <Download className="w-5 h-5" />
                Download Full Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Navigation */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#ultiwell" 
              className="flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#d7e1c7' }}
            >
              <Target className="w-5 h-5" style={{ color: '#A1BA80' }} />
              <span className="font-medium" style={{ color: '#6e8956' }}>UltiWell® (60 Products)</span>
            </a>
            <a 
              href="#ultiglow" 
              className="flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#d7e1c7' }}
            >
              <Sparkles className="w-5 h-5" style={{ color: '#A1BA80' }} />
              <span className="font-medium" style={{ color: '#6e8956' }}>UltiGlow® (54 Products)</span>
            </a>
          </div>
        </div>
      </section>

      {/* UltiWell Section */}
      <section id="ultiwell" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
              <Target className="w-4 h-4" />
              Health Supplements
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-2">
              UltiWell® Product Catalogue
            </h2>
            <p className="text-xl mb-4" style={{ color: '#A1BA80' }}>「Ultimate Wellness」</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium biosynthesis-based health supplements for every wellness need
            </p>
            <div className="mt-4 inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
              60 Products across 13 Categories
            </div>
          </div>

          {ultiWellCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                  <category.icon className="w-6 h-6" style={{ color: '#A1BA80' }} />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-gray-900">{category.category}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-5">
                      <h4 className="font-normal text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UltiGlow Section */}
      <section id="ultiglow" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
              <Sparkles className="w-4 h-4" />
              Skincare Products
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-2">
              UltiGlow® Product Catalogue
            </h2>
            <p className="text-xl mb-4" style={{ color: '#A1BA80' }}>「Ultimate Glow」</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium skincare powered by biosynthesis technology
            </p>
            <div className="mt-4 inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
              54 Products across 13 Bio-Synth Series
            </div>
          </div>

          {ultiGlowCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                  <category.icon className="w-6 h-6" style={{ color: '#A1BA80' }} />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-gray-900">{category.category}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="border border-gray-200 hover:shadow-lg transition-all duration-300 group bg-white">
                    <CardContent className="p-5">
                      <h4 className="font-normal text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-normal text-gray-900 mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We offer OEM/ODM services and bulk ingredient supply for B2B partners worldwide.
            Contact us for detailed specifications, pricing, and partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#A1BA80' }}
            >
              Request Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="mailto:info@envikobio.com" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 transition-all duration-300 hover:border-gray-400"
            >
              info@envikobio.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
