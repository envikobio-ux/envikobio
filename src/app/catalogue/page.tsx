import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Brain, 
  Shield, 
  Sparkles, 
  Bone, 
  Moon, 
  Leaf,
  Users,
  Activity,
  Target,
  Dumbbell,
  Download,
  ArrowRight,
  Droplets,
  Sun,
  Zap,
  RefreshCw,
  Eye,
  Smile,
  Wind,
  Palette
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Catalogue | Enviko Bio',
  description: 'Explore UltiWell® and UltiGlow™ product series - premium biosynthesis-based health supplements and skincare products.',
};

// UltiWell Product Categories
const ultiWellCategories = [
  {
    category: 'Core Nutrition',
    icon: Target,
    description: 'Essential nutritional foundation for daily wellness',
    products: [
      { id: 'core', name: 'UltiWell® Core', description: 'Foundation and core nutritional supplements' },
      { id: 'vitality', name: 'UltiWell® Vitality', description: 'Energy enhancement and vitality boost' },
      { id: 'balance', name: 'UltiWell® Balance', description: 'Body balance and coordination support' },
      { id: 'pure', name: 'UltiWell® Pure', description: 'Pure, contaminant-free supplements' },
      { id: 'elevate', name: 'UltiWell® Elevate', description: 'Overall health and quality of life enhancement' },
      { id: 'nutriboost', name: 'UltiWell® NutriBoost', description: 'Comprehensive nutritional support' },
    ],
  },
  {
    category: 'Brain & Cognitive',
    icon: Brain,
    description: 'Mental clarity, focus and cognitive performance',
    products: [
      { id: 'clarity', name: 'UltiWell® Clarity', description: 'Brain health and mental clarity' },
      { id: 'focus', name: 'UltiWell® Focus', description: 'Attention and cognitive function enhancement' },
      { id: 'brainboost', name: 'UltiWell® BrainBoost', description: 'Memory and cognitive performance support' },
    ],
  },
  {
    category: 'Energy & Sports',
    icon: Dumbbell,
    description: 'Performance, strength and recovery solutions',
    products: [
      { id: 'strength', name: 'UltiWell® Strength', description: 'Muscle and physical strength enhancement' },
      { id: 'active', name: 'UltiWell® Active', description: 'Active lifestyle and sports nutrition' },
      { id: 'energy', name: 'UltiWell® Energy', description: 'Energy boost and endurance support' },
      { id: 'sportperformance', name: 'UltiWell® SportPerformance', description: 'High-performance nutrition for athletes' },
      { id: 'recovery', name: 'UltiWell® Recovery Series', description: 'Post-exercise recovery and muscle relief' },
    ],
  },
  {
    category: 'Anti-Aging & Beauty',
    icon: Sparkles,
    description: 'Youthful vitality and skin health',
    products: [
      { id: 'renew', name: 'UltiWell® Renew', description: 'Anti-aging and vitality restoration' },
      { id: 'ageless', name: 'UltiWell® Ageless', description: 'Anti-aging and skin care' },
      { id: 'youthvibe', name: 'UltiWell® YouthVibe', description: 'Health and vitality for the young generation' },
      { id: 'glow', name: 'UltiWell® Glow', description: 'Skin health and beauty' },
      { id: 'skinnutritious', name: 'UltiWell® SkinNutritious', description: 'Skin health and beauty nutrition' },
      { id: 'bodycare', name: 'UltiWell® Body Care Series', description: 'Skin health and body care products' },
    ],
  },
  {
    category: 'Heart & Circulation',
    icon: Heart,
    description: 'Cardiovascular health and blood circulation',
    products: [
      { id: 'pulse', name: 'UltiWell® Pulse', description: 'Heart health and blood circulation' },
      { id: 'cardiofit', name: 'UltiWell® CardioFit', description: 'Cardiovascular health promotion' },
    ],
  },
  {
    category: 'Immune Support',
    icon: Shield,
    description: 'Immune system defense and protection',
    products: [
      { id: 'shield', name: 'UltiWell® Shield', description: 'Immune system support and protection' },
      { id: 'immunoshield', name: 'UltiWell® ImmunoShield', description: 'Immune system enhancement' },
    ],
  },
  {
    category: 'Joint & Mobility',
    icon: Bone,
    description: 'Joint health, flexibility and mobility',
    products: [
      { id: 'flex', name: 'UltiWell® Flex', description: 'Joint health and flexibility' },
      { id: 'mobility', name: 'UltiWell® Mobility', description: 'Joint flexibility and pain relief' },
    ],
  },
  {
    category: 'Sleep & Relaxation',
    icon: Moon,
    description: 'Restful sleep and stress management',
    products: [
      { id: 'harmony', name: 'UltiWell® Harmony', description: 'Mind-body harmony and relaxation' },
      { id: 'calm', name: 'UltiWell® Calm', description: 'Stress management and relaxation' },
      { id: 'zenith', name: 'UltiWell® Zenith', description: 'Premium flagship product line' },
      { id: 'restful', name: 'UltiWell® Restful', description: 'Sleep quality improvement' },
      { id: 'sleep', name: 'UltiWell® Sleep Series', description: 'Sleep quality and pattern improvement' },
      { id: 'relaxation', name: 'UltiWell® Relaxation Series', description: 'Stress management and relaxation' },
      { id: 'mindsoothing', name: 'UltiWell® Mind Soothing Series', description: 'Mental health support and relaxation' },
    ],
  },
  {
    category: 'Digestive Health',
    icon: Leaf,
    description: 'Digestion, detox and liver support',
    products: [
      { id: 'digest', name: 'UltiWell® Digest', description: 'Digestive system health support' },
      { id: 'cleanse', name: 'UltiWell® Cleanse', description: 'Body detoxification and cleansing' },
      { id: 'liversupport', name: 'UltiWell® LiverSupport', description: 'Liver health and detoxification' },
      { id: 'ketobalance', name: 'UltiWell® KetoBalance', description: 'Keto diet and weight management' },
    ],
  },
  {
    category: 'Specialized Care',
    icon: Users,
    description: 'Targeted solutions for specific needs',
    products: [
      { id: 'menopauseease', name: 'UltiWell® MenopauseEase', description: 'Menopause symptom relief' },
      { id: 'eyevive', name: 'UltiWell® EyeVive', description: 'Eye health and vision protection' },
      { id: 'elderlycare', name: 'UltiWell® Elderly Care Series', description: 'Quality of life products for seniors' },
    ],
  },
  {
    category: 'Lifestyle Solutions',
    icon: Activity,
    description: 'Daily wellness and lifestyle support',
    products: [
      { id: 'veganpure', name: 'UltiWell® VeganPure', description: 'Vegan and pure supplements' },
      { id: 'travel', name: 'UltiWell® Travel Series', description: 'Portable products for travelers' },
      { id: 'healthydiet', name: 'UltiWell® Healthy Diet Series', description: 'Nutritious food and beverages' },
      { id: 'dailycare', name: 'UltiWell® Daily Care Series', description: 'Daily comfort and wellness tools' },
      { id: 'environment', name: 'UltiWell® Environment Optimization Series', description: 'Living and working environment enhancement' },
    ],
  },
  {
    category: 'Plant Extracts',
    icon: Leaf,
    description: 'High-potency plant-derived active ingredients',
    products: [
      { id: 'curcumin', name: 'UltiWell® Curcumin Extract', description: 'Turmeric extract (Curcumin ≥95%)' },
      { id: 'resveratrol', name: 'UltiWell® Resveratrol Extract', description: 'Red grape extract (Resveratrol ≥98%)' },
      { id: 'quercetin', name: 'UltiWell® Quercetin Extract', description: 'Sophora japonica extract (Quercetin ≥95%)' },
      { id: 'egcg', name: 'UltiWell® EGCG Extract', description: 'Green tea extract (EGCG ≥50%)' },
      { id: 'berberine', name: 'UltiWell® Berberine Extract', description: 'Coptis chinensis extract (Berberine ≥97%)' },
      { id: 'silymarin', name: 'UltiWell® Silymarin Extract', description: 'Milk thistle extract (Silymarin ≥80%)' },
    ],
  },
  {
    category: 'Bio-Natural Colors',
    icon: Sparkles,
    description: 'Natural food-grade colors from biosynthesis',
    products: [
      { id: 'betacarotene', name: 'UltiWell® Beta-Carotene', description: 'Natural orange color (≥96%)' },
      { id: 'astaxanthin', name: 'UltiWell® Astaxanthin', description: 'Natural red color (≥2%)' },
      { id: 'lutein', name: 'UltiWell® Lutein', description: 'Natural yellow color (≥5%)' },
      { id: 'lycopene', name: 'UltiWell® Lycopene', description: 'Natural red color (≥5%)' },
      { id: 'anthocyanin', name: 'UltiWell® Anthocyanin', description: 'Natural purple color (≥25%)' },
      { id: 'chlorophyll', name: 'UltiWell® Chlorophyll', description: 'Natural green color' },
    ],
  },
];

// UltiGlow Product Categories - By Function
const ultiGlowCategories = [
  {
    category: 'Deep Hydration',
    categoryCn: '深层补水',
    icon: Droplets,
    description: 'Multi-layer hydration with biosynthesis hyaluronic acid',
    products: [
      { id: 'bio-ha-serum', name: '生物合成透明质酸精华', nameEn: 'Bio-HA Serum', description: '多分子量透明质酸，72小时深层补水' },
      { id: 'bio-ha-cream', name: '生物合成透明质酸面霜', nameEn: 'Bio-HA Cream', description: '强效保湿面霜，充盈肌肤' },
      { id: 'bio-ha-mask', name: '生物合成透明质酸面膜', nameEn: 'Bio-HA Mask', description: '干性肌肤强效补水面膜' },
      { id: 'bio-ha-toner', name: '生物合成透明质酸爽肤水', nameEn: 'Bio-HA Toner', description: '补水预处理爽肤水' },
      { id: 'bio-glucosamine-serum', name: '生物合成氨基葡萄糖精华', nameEn: 'Bio-Glucosamine Serum', description: '促进肌肤透明质酸合成' },
      { id: 'bio-glucosamine-cream', name: '生物合成氨基葡萄糖面霜', nameEn: 'Bio-Glucosamine Cream', description: '屏障修护，锁水保湿' },
    ],
  },
  {
    category: 'Anti-Aging',
    categoryCn: '抗衰老',
    icon: Heart,
    description: 'Collagen and peptide formulations for youthful skin',
    products: [
      { id: 'bio-collagen-serum', name: '生物合成胶原蛋白精华', nameEn: 'Bio-Collagen Serum', description: '重组人源胶原蛋白' },
      { id: 'bio-collagen-cream', name: '生物合成胶原蛋白面霜', nameEn: 'Bio-Collagen Cream', description: '紧致抗皱日霜' },
      { id: 'bio-collagen-mask', name: '生物合成胶原蛋白面膜', nameEn: 'Bio-Collagen Mask', description: '强效修护面膜' },
      { id: 'bio-collagen-eye-cream', name: '生物合成胶原蛋白眼霜', nameEn: 'Bio-Collagen Eye Cream', description: '减少眼部细纹' },
      { id: 'bio-peptide-serum', name: '生物合成多肽精华', nameEn: 'Bio-Peptide Serum', description: '多肽复合物，减少皱纹' },
      { id: 'bio-peptide-cream', name: '生物合成多肽面霜', nameEn: 'Bio-Peptide Cream', description: '抗衰老紧致面霜' },
      { id: 'bio-copper-peptide-serum', name: '生物合成铜肽精华', nameEn: 'Bio-Copper Peptide Serum', description: '铜肽促进肌肤焕新' },
    ],
  },
  {
    category: 'Brightening',
    categoryCn: '美白提亮',
    icon: Sparkles,
    description: 'Vitamin C and brightening complexes',
    products: [
      { id: 'bio-vitamin-c-serum', name: '生物合成维生素C精华', nameEn: 'Bio-Vitamin C Serum', description: '稳定维生素C(≥20%)' },
      { id: 'bio-niacinamide-serum', name: '生物合成烟酰胺精华', nameEn: 'Bio-Niacinamide Serum', description: '烟酰胺(≥10%)' },
      { id: 'bio-arbutin-serum', name: '生物合成熊果苷精华', nameEn: 'Bio-Arbutin Serum', description: 'α-熊果苷，淡化色斑' },
      { id: 'bio-brightening-cream', name: '生物合成提亮面霜', nameEn: 'Bio-Brightening Cream', description: '日常提亮保湿' },
      { id: 'bio-brightening-mask', name: '生物合成提亮面膜', nameEn: 'Bio-Brightening Mask', description: '强效提亮护理' },
    ],
  },
  {
    category: 'Sensitive Repair',
    categoryCn: '敏感修护',
    icon: Shield,
    description: 'Gentle formulations for sensitive skin',
    products: [
      { id: 'bio-ectoine-serum', name: '生物合成依克多因精华', nameEn: 'Bio-Ectoine Serum', description: '保护修护肌肤屏障' },
      { id: 'bio-ectoine-cream', name: '生物合成依克多因面霜', nameEn: 'Bio-Ectoine Cream', description: '敏感肌舒缓保湿' },
      { id: 'bio-bisabolol-serum', name: '生物合成红没药醇精华', nameEn: 'Bio-Bisabolol Serum', description: '快速缓解泛红' },
      { id: 'bio-centella-cream', name: '生物合成积雪草面霜', nameEn: 'Bio-Centella Cream', description: '积雪草修护' },
      { id: 'bio-sensitive-mask', name: '生物合成敏感修护面膜', nameEn: 'Bio-Sensitive Mask', description: '强效舒缓护理' },
      { id: 'bio-ceramide-cream', name: '生物合成神经酰胺面霜', nameEn: 'Bio-Ceramide Cream', description: '重建肌肤屏障' },
    ],
  },
  {
    category: 'Acne Control',
    categoryCn: '祛痘净肤',
    icon: Zap,
    description: 'Acne-fighting formulations',
    products: [
      { id: 'bio-salicylic-serum', name: '生物合成水杨酸精华', nameEn: 'Bio-Salicylic Serum', description: '深层清洁毛孔' },
      { id: 'bio-acne-serum', name: '生物合成祛痘精华', nameEn: 'Bio-Acne Serum', description: '水杨酸+烟酰胺复合' },
      { id: 'bio-acne-patch', name: '生物合成祛痘贴', nameEn: 'Bio-Acne Patch', description: '夜间治疗贴片' },
      { id: 'bio-oil-control-toner', name: '生物合成控油爽肤水', nameEn: 'Bio-Oil Control Toner', description: '平衡油脂，收缩毛孔' },
      { id: 'bio-tea-tree-serum', name: '生物合成茶树精华', nameEn: 'Bio-Tea Tree Serum', description: '天然抗菌' },
    ],
  },
  {
    category: 'Skin Renewal',
    categoryCn: '肌肤焕新',
    icon: RefreshCw,
    description: 'Exfoliation and renewal formulations',
    products: [
      { id: 'bio-aha-serum', name: '生物合成果酸精华', nameEn: 'Bio-AHA Serum', description: '温和去角质' },
      { id: 'bio-bha-toner', name: '生物合成水杨酸爽肤水', nameEn: 'Bio-BHA Toner', description: '清洁毛孔，减少黑头' },
      { id: 'bio-renew-mask', name: '生物合成焕新面膜', nameEn: 'Bio-Renew Mask', description: '酶解焕新' },
      { id: 'bio-retinol-serum', name: '生物合成视黄醇精华', nameEn: 'Bio-Retinol Serum', description: '抗衰焕新' },
      { id: 'bio-lactic-serum', name: '生物合成乳酸精华', nameEn: 'Bio-Lactic Serum', description: '敏感肌温和去角质' },
    ],
  },
  {
    category: 'Sun Protection',
    categoryCn: '防晒防护',
    icon: Sun,
    description: 'UV protection solutions',
    products: [
      { id: 'bio-sunscreen-spf50', name: '生物合成防晒霜SPF50', nameEn: 'Bio-Sunscreen SPF50', description: '轻薄广谱防晒' },
      { id: 'bio-sun-serum', name: '生物合成防晒精华', nameEn: 'Bio-Sun Serum', description: '防晒精华' },
      { id: 'bio-after-sun-gel', name: '生物合成晒后修护凝胶', nameEn: 'Bio-After Sun Gel', description: '舒缓晒后护理' },
      { id: 'bio-uv-shield-cream', name: '生物合成紫外线防护霜', nameEn: 'Bio-UV Shield Cream', description: '日常UV防护' },
    ],
  },
  {
    category: 'Antioxidant',
    categoryCn: '抗氧化',
    icon: Leaf,
    description: 'Natural antioxidant complexes',
    products: [
      { id: 'bio-ergothioneine-serum', name: '生物合成麦角硫因精华', nameEn: 'Bio-Ergothioneine Serum', description: '深层抗氧化(≥98%)' },
      { id: 'bio-resveratrol-cream', name: '生物合成白藜芦醇面霜', nameEn: 'Bio-Resveratrol Cream', description: '抗衰老晚霜' },
      { id: 'bio-green-tea-essence', name: '生物合成绿茶精华', nameEn: 'Bio-Green Tea Essence', description: 'EGCG抗氧化' },
      { id: 'bio-ferulic-serum', name: '生物合成阿魏酸精华', nameEn: 'Bio-Ferulic Serum', description: '增强抗氧化活性' },
    ],
  },
  {
    category: 'Eye Care',
    categoryCn: '眼部护理',
    icon: Eye,
    description: 'Targeted eye area solutions',
    products: [
      { id: 'bio-eye-cream', name: '生物合成眼霜', nameEn: 'Bio-Eye Cream', description: '减少黑眼圈和细纹' },
      { id: 'bio-peptide-eye-serum', name: '生物合成多肽眼部精华', nameEn: 'Bio-Peptide Eye Serum', description: '多肽眼部护理' },
      { id: 'bio-eye-mask', name: '生物合成眼膜', nameEn: 'Bio-Eye Mask', description: '疲惫眼部强效护理' },
    ],
  },
  {
    category: 'Lip Care',
    categoryCn: '唇部护理',
    icon: Smile,
    description: 'Nourishing lip products',
    products: [
      { id: 'bio-lip-balm', name: '生物合成润唇膏', nameEn: 'Bio-Lip Balm', description: '天然保湿润唇膏' },
      { id: 'bio-lip-mask', name: '生物合成唇膜', nameEn: 'Bio-Lip Mask', description: '夜间唇部护理' },
      { id: 'bio-lip-serum', name: '生物合成唇部精华', nameEn: 'Bio-Lip Serum', description: '丰盈保湿唇部精华' },
    ],
  },
  {
    category: 'Pore Care',
    categoryCn: '毛孔护理',
    icon: Wind,
    description: 'Pore refining and oil control',
    products: [
      { id: 'bio-pore-serum', name: '生物合成毛孔精华', nameEn: 'Bio-Pore Serum', description: '细化毛孔，控制油脂' },
      { id: 'bio-pore-mask', name: '生物合成毛孔面膜', nameEn: 'Bio-Pore Mask', description: '深层清洁泥膜' },
      { id: 'bio-pore-toner', name: '生物合成毛孔爽肤水', nameEn: 'Bio-Pore Toner', description: '收缩毛孔，平滑肤质' },
    ],
  },
  {
    category: 'Natural Color',
    categoryCn: '天然彩妆',
    icon: Palette,
    description: 'Natural color cosmetics',
    products: [
      { id: 'bio-lip-tint', name: '生物合成唇釉', nameEn: 'Bio-Lip Tint', description: '植物基天然色彩' },
      { id: 'bio-bb-cream', name: '生物合成BB霜', nameEn: 'Bio-BB Cream', description: '自然遮盖，轻薄妆效' },
      { id: 'bio-blush', name: '生物合成腮红', nameEn: 'Bio-Blush', description: '矿物腮红' },
      { id: 'bio-highlighter', name: '生物合成高光', nameEn: 'Bio-Highlighter', description: '自然光泽' },
      { id: 'bio-bronzer', name: '生物合成古铜粉', nameEn: 'Bio-Bronzer', description: '阳光健康妆效' },
      { id: 'bio-eyebrow-gel', name: '生物合成眉胶', nameEn: 'Bio-Eyebrow Gel', description: '自然定型' },
    ],
  },
];

export default function CataloguePage() {
  const totalUltiWell = ultiWellCategories.reduce((sum, cat) => sum + cat.products.length, 0);
  const totalUltiGlow = ultiGlowCategories.reduce((sum, cat) => sum + cat.products.length, 0);

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
              <span className="font-medium" style={{ color: '#6e8956' }}>UltiWell® ({totalUltiWell} Products)</span>
            </a>
            <a 
              href="#ultiglow" 
              className="flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#d7e1c7' }}
            >
              <Sparkles className="w-5 h-5" style={{ color: '#A1BA80' }} />
              <span className="font-medium" style={{ color: '#6e8956' }}>UltiGlow™ ({totalUltiGlow} Products)</span>
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
              {totalUltiWell} Products across {ultiWellCategories.length} Categories
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
                <div className="ml-auto">
                  <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>
                    {category.products.length} Products
                  </span>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.products.map((product, productIndex) => (
                  <Link 
                    key={productIndex} 
                    href={`/products/ultiwell/${product.id}`}
                    className="block"
                  >
                    <Card className="border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-300 group h-full">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-normal text-gray-900 group-hover:text-green-700 transition-colors">
                            {product.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0 mt-1" />
                        </div>
                        <p className="text-sm text-gray-600">{product.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
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
              UltiGlow™ Product Catalogue
            </h2>
            <p className="text-xl mb-4" style={{ color: '#A1BA80' }}>「Ultimate Glow」</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium skincare powered by biosynthesis technology
            </p>
            <div className="mt-4 inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
              {totalUltiGlow} Products across {ultiGlowCategories.length} Categories
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
                  <p className="text-sm" style={{ color: '#A1BA80' }}>{category.categoryCn}</p>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>
                    {category.products.length} Products
                  </span>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.products.map((product, productIndex) => (
                  <Link 
                    key={productIndex} 
                    href={`/products/ultiglow/${product.id}`}
                    className="block"
                  >
                    <Card className="border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-300 group h-full bg-white">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-normal text-gray-900 group-hover:text-green-700 transition-colors">
                            {product.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0 mt-1" />
                        </div>
                        <p className="text-xs mb-2" style={{ color: '#A1BA80' }}>{product.nameEn}</p>
                        <p className="text-sm text-gray-600">{product.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
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
