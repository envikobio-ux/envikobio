import { Metadata } from 'next';
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
  Sunrise,
  Pilcrow,
  Download
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Catalogue | UltiWell®',
  description: 'Explore UltiWell® product series - premium health supplements for every wellness need.',
};

const productCategories = [
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

export default function CataloguePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
              UltiWell® Product Catalogue
            </h1>
            <p className="text-lg text-gray-600">
              Premium biosynthesis-based health supplements for every wellness need.
              Discover our comprehensive product lines designed for optimal health and vitality.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="inline-block px-6 py-3 rounded-full" style={{ backgroundColor: '#A1BA80' }}>
                <span className="text-white font-normal">「Ultimate Wellness」</span>
              </div>
              <a 
                href="/api/catalogue-download" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: '#A1BA80', color: '#A1BA80' }}
              >
                <Download className="w-5 h-5" />
                Download Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                  <category.icon className="w-7 h-7" style={{ color: '#A1BA80' }} />
                </div>
                <div>
                  <h2 className="text-2xl font-normal text-gray-900">{category.category}</h2>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <h3 className="font-normal text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                        {product.name}
                      </h3>
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
