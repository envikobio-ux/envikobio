import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
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
  Pilcrow
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
      { name: 'UltiWell® Core', nameZh: '极舒优活核心', description: 'Foundation and core nutritional supplements' },
      { name: 'UltiWell® Vitality', nameZh: '极舒优活活力', description: 'Energy enhancement and vitality boost' },
      { name: 'UltiWell® Balance', nameZh: '极舒优活平衡', description: 'Body balance and coordination support' },
      { name: 'UltiWell® Pure', nameZh: '极舒优活纯净', description: 'Pure, contaminant-free supplements' },
      { name: 'UltiWell® Elevate', nameZh: '极舒优活提升', description: 'Overall health and quality of life enhancement' },
      { name: 'UltiWell® NutriBoost', nameZh: '极舒优活营养增效', description: 'Comprehensive nutritional support' },
    ],
  },
  {
    category: 'Brain & Cognitive',
    icon: Brain,
    description: 'Mental clarity, focus and cognitive performance',
    products: [
      { name: 'UltiWell® Clarity', nameZh: '极舒优活明晰', description: 'Brain health and mental clarity' },
      { name: 'UltiWell® Focus', nameZh: '极舒优活专注', description: 'Attention and cognitive function enhancement' },
      { name: 'UltiWell® BrainBoost', nameZh: '极舒优活益智', description: 'Memory and cognitive performance support' },
    ],
  },
  {
    category: 'Energy & Sports',
    icon: Dumbbell,
    description: 'Performance, strength and recovery solutions',
    products: [
      { name: 'UltiWell® Strength', nameZh: '极舒优活力量', description: 'Muscle and physical strength enhancement' },
      { name: 'UltiWell® Active', nameZh: '极舒优活动力', description: 'Active lifestyle and sports nutrition' },
      { name: 'UltiWell® Energy', nameZh: '极舒优活能量', description: 'Energy boost and endurance support' },
      { name: 'UltiWell® SportPerformance', nameZh: '极舒优活运动表现', description: 'High-performance nutrition for athletes' },
      { name: 'UltiWell® Recovery Series', nameZh: '极舒优活运动恢复', description: 'Post-exercise recovery and muscle relief' },
    ],
  },
  {
    category: 'Anti-Aging & Beauty',
    icon: Sparkles,
    description: 'Youthful vitality and skin health',
    products: [
      { name: 'UltiWell® Renew', nameZh: '极舒优活焕新', description: 'Anti-aging and vitality restoration' },
      { name: 'UltiWell® Ageless', nameZh: '极舒优活无龄', description: 'Anti-aging and skin care' },
      { name: 'UltiWell® YouthVibe', nameZh: '极舒优活青春', description: 'Health and vitality for the young generation' },
      { name: 'UltiWell® Glow', nameZh: '极舒优活光彩', description: 'Skin health and beauty' },
      { name: 'UltiWell® SkinNutritious', nameZh: '极舒优活肌肤滋养', description: 'Skin health and beauty nutrition' },
      { name: 'UltiWell® Body Care Series', nameZh: '极舒优活身体护理', description: 'Skin health and body care products' },
    ],
  },
  {
    category: 'Heart & Circulation',
    icon: Heart,
    description: 'Cardiovascular health and blood circulation',
    products: [
      { name: 'UltiWell® Pulse', nameZh: '极舒优活脉动', description: 'Heart health and blood circulation' },
      { name: 'UltiWell® CardioFit', nameZh: '极舒优活心动力', description: 'Cardiovascular health promotion' },
    ],
  },
  {
    category: 'Immune Support',
    icon: Shield,
    description: 'Immune system defense and protection',
    products: [
      { name: 'UltiWell® Shield', nameZh: '极舒优活护盾', description: 'Immune system support and protection' },
      { name: 'UltiWell® ImmunoShield', nameZh: '极舒优活免疫护盾', description: 'Immune system enhancement' },
    ],
  },
  {
    category: 'Joint & Mobility',
    icon: Bone,
    description: 'Joint health, flexibility and mobility',
    products: [
      { name: 'UltiWell® Flex', nameZh: '极舒优活灵活', description: 'Joint health and flexibility' },
      { name: 'UltiWell® Mobility', nameZh: '极舒优活灵动', description: 'Joint flexibility and pain relief' },
    ],
  },
  {
    category: 'Sleep & Relaxation',
    icon: Moon,
    description: 'Restful sleep and stress management',
    products: [
      { name: 'UltiWell® Harmony', nameZh: '极舒优活和谐', description: 'Mind-body harmony and relaxation' },
      { name: 'UltiWell® Calm', nameZh: '极舒优活宁静', description: 'Stress management and relaxation' },
      { name: 'UltiWell® Zenith', nameZh: '极舒优活巅峰', description: 'Premium flagship product line' },
      { name: 'UltiWell® Restful', nameZh: '极舒优活安睡', description: 'Sleep quality improvement' },
      { name: 'UltiWell® Sleep Series', nameZh: '极舒优活睡眠系列', description: 'Sleep quality and pattern improvement' },
      { name: 'UltiWell® Relaxation Series', nameZh: '极舒优活放松系列', description: 'Stress management and relaxation' },
      { name: 'UltiWell® Mind Soothing Series', nameZh: '极舒优活心灵舒缓', description: 'Mental health support and relaxation' },
    ],
  },
  {
    category: 'Digestive Health',
    icon: Leaf,
    description: 'Digestion, detox and liver support',
    products: [
      { name: 'UltiWell® Digest', nameZh: '极舒优活消化', description: 'Digestive system health support' },
      { name: 'UltiWell® Cleanse', nameZh: '极舒优活净化', description: 'Body detoxification and cleansing' },
      { name: 'UltiWell® LiverSupport', nameZh: '极舒优活肝护', description: 'Liver health and detoxification' },
      { name: 'UltiWell® KetoBalance', nameZh: '极舒优活生酮平衡', description: 'Keto diet and weight management' },
    ],
  },
  {
    category: 'Specialized Care',
    icon: Users,
    description: 'Targeted solutions for specific needs',
    products: [
      { name: 'UltiWell® MenopauseEase', nameZh: '极舒优活更年舒', description: 'Menopause symptom relief' },
      { name: 'UltiWell® EyeVive', nameZh: '极舒优活明目', description: 'Eye health and vision protection' },
      { name: 'UltiWell® Elderly Care Series', nameZh: '极舒优活老年护理', description: 'Quality of life products for seniors' },
    ],
  },
  {
    category: 'Lifestyle Solutions',
    icon: Activity,
    description: 'Daily wellness and lifestyle support',
    products: [
      { name: 'UltiWell® VeganPure', nameZh: '极舒优活纯素', description: 'Vegan and pure supplements' },
      { name: 'UltiWell® Travel Series', nameZh: '极舒优活旅行系列', description: 'Portable products for travelers' },
      { name: 'UltiWell® Healthy Diet Series', nameZh: '极舒优活健康饮食', description: 'Nutritious food and beverages' },
      { name: 'UltiWell® Daily Care Series', nameZh: '极舒优活日常养护', description: 'Daily comfort and wellness tools' },
      { name: 'UltiWell® Environment Optimization Series', nameZh: '极舒优活环境优化', description: 'Living and working environment enhancement' },
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
            <div className="mt-6 inline-block px-6 py-3 rounded-full" style={{ backgroundColor: '#A1BA80' }}>
              <span className="text-white font-normal">「Ultimate Wellness」追求极致美好和健康</span>
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
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-normal text-gray-900 group-hover:text-brand-600 transition-colors">
                          {product.name}
                        </h3>
                        <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">
                          {product.nameZh}
                        </span>
                      </div>
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
