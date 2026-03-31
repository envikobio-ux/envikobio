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
      { id: 'bio-ha-serum', name: 'UltiGlow™ Bio-HA Serum', nameCn: '生物透明质酸精华', description: 'Multi-weight HA for 72-hour deep hydration' },
      { id: 'bio-ha-cream', name: 'UltiGlow™ Bio-HA Cream', nameCn: '生物透明质酸面霜', description: 'Intensive moisturizing cream' },
      { id: 'bio-ha-mask', name: 'UltiGlow™ Bio-HA Mask', nameCn: '生物透明质酸面膜', description: 'Intensive hydration mask' },
      { id: 'bio-ha-toner', name: 'UltiGlow™ Bio-HA Toner', nameCn: '生物透明质酸爽肤水', description: 'Hydrating prep toner' },
      { id: 'bio-glucosamine-serum', name: 'UltiGlow™ Bio-Glucosamine Serum', nameCn: '生物氨基葡萄糖精华', description: 'Enhances natural HA production' },
      { id: 'bio-glucosamine-cream', name: 'UltiGlow™ Bio-Glucosamine Cream', nameCn: '生物氨基葡萄糖面霜', description: 'Barrier repair and moisture lock' },
    ],
  },
  {
    category: 'Anti-Aging',
    categoryCn: '抗衰老',
    icon: Heart,
    description: 'Collagen and peptide formulations for youthful skin',
    products: [
      { id: 'bio-collagen-serum', name: 'UltiGlow™ Bio-Collagen Serum', nameCn: '生物胶原蛋白精华', description: 'Recombinant human collagen' },
      { id: 'bio-collagen-cream', name: 'UltiGlow™ Bio-Collagen Cream', nameCn: '生物胶原蛋白面霜', description: 'Firming and anti-wrinkle' },
      { id: 'bio-collagen-mask', name: 'UltiGlow™ Bio-Collagen Mask', nameCn: '生物胶原蛋白面膜', description: 'Intensive repair mask' },
      { id: 'bio-collagen-eye-cream', name: 'UltiGlow™ Bio-Collagen Eye Cream', nameCn: '生物胶原蛋白眼霜', description: 'Reduces fine lines' },
      { id: 'bio-peptide-serum', name: 'UltiGlow™ Bio-Peptide Serum', nameCn: '生物多肽精华', description: 'Multi-peptide complex' },
      { id: 'bio-peptide-cream', name: 'UltiGlow™ Bio-Peptide Cream', nameCn: '生物多肽面霜', description: 'Anti-aging firming cream' },
      { id: 'bio-copper-peptide-serum', name: 'UltiGlow™ Bio-Copper Peptide Serum', nameCn: '生物铜肽精华', description: 'Skin renewal' },
    ],
  },
  {
    category: 'Brightening',
    categoryCn: '美白提亮',
    icon: Sparkles,
    description: 'Vitamin C and brightening complexes for radiant skin',
    products: [
      { id: 'bio-vitamin-c-serum', name: 'UltiGlow™ Bio-Vitamin C Serum', nameCn: '生物维生素C精华', description: 'Stable vitamin C (≥20%)' },
      { id: 'bio-niacinamide-serum', name: 'UltiGlow™ Bio-Niacinamide Serum', nameCn: '生物烟酰胺精华', description: 'Niacinamide (≥10%)' },
      { id: 'bio-arbutin-serum', name: 'UltiGlow™ Bio-Arbutin Serum', nameCn: '生物熊果苷精华', description: 'Alpha-arbutin, fades dark spots' },
      { id: 'bio-brightening-cream', name: 'UltiGlow™ Bio-Brightening Cream', nameCn: '生物提亮面霜', description: 'Daily brightening moisturizer' },
      { id: 'bio-brightening-mask', name: 'UltiGlow™ Bio-Brightening Mask', nameCn: '生物提亮面膜', description: 'Intensive brightening' },
    ],
  },
  {
    category: 'Sensitive Repair',
    categoryCn: '敏感修护',
    icon: Shield,
    description: 'Gentle formulations for sensitive skin',
    products: [
      { id: 'bio-ectoine-serum', name: 'UltiGlow™ Bio-Ectoine Serum', nameCn: '生物依克多因精华', description: 'Protects and repairs barrier' },
      { id: 'bio-ectoine-cream', name: 'UltiGlow™ Bio-Ectoine Cream', nameCn: '生物依克多因面霜', description: 'Calming moisturizer' },
      { id: 'bio-bisabolol-serum', name: 'UltiGlow™ Bio-Bisabolol Serum', nameCn: '生物红没药醇精华', description: 'Quick relief for redness' },
      { id: 'bio-centella-cream', name: 'UltiGlow™ Bio-Centella Cream', nameCn: '生物积雪草面霜', description: 'Centella asiatica repair' },
      { id: 'bio-sensitive-mask', name: 'UltiGlow™ Bio-Sensitive Mask', nameCn: '生物敏感修护面膜', description: 'Intensive calming' },
      { id: 'bio-ceramide-cream', name: 'UltiGlow™ Bio-Ceramide Cream', nameCn: '生物神经酰胺面霜', description: 'Rebuilds skin barrier' },
    ],
  },
  {
    category: 'Acne Control',
    categoryCn: '祛痘净肤',
    icon: Zap,
    description: 'Acne-fighting formulations',
    products: [
      { id: 'bio-salicylic-serum', name: 'UltiGlow™ Bio-Salicylic Serum', nameCn: '生物水杨酸精华', description: 'Deep pore cleansing' },
      { id: 'bio-acne-serum', name: 'UltiGlow™ Bio-Acne Serum', nameCn: '生物祛痘精华', description: 'Salicylic acid + niacinamide' },
      { id: 'bio-acne-patch', name: 'UltiGlow™ Bio-Acne Patch', nameCn: '生物祛痘贴', description: 'Overnight treatment' },
      { id: 'bio-oil-control-toner', name: 'UltiGlow™ Bio-Oil Control Toner', nameCn: '生物控油爽肤水', description: 'Oil-balancing' },
      { id: 'bio-tea-tree-serum', name: 'UltiGlow™ Bio-Tea Tree Serum', nameCn: '生物茶树精华', description: 'Natural antibacterial' },
    ],
  },
  {
    category: 'Skin Renewal',
    categoryCn: '肌肤焕新',
    icon: RefreshCw,
    description: 'Exfoliation and renewal formulations',
    products: [
      { id: 'bio-aha-serum', name: 'UltiGlow™ Bio-AHA Serum', nameCn: '生物果酸精华', description: 'Gentle exfoliation' },
      { id: 'bio-bha-toner', name: 'UltiGlow™ Bio-BHA Toner', nameCn: '生物水杨酸爽肤水', description: 'Pore clearing' },
      { id: 'bio-renew-mask', name: 'UltiGlow™ Bio-Renew Mask', nameCn: '生物焕新面膜', description: 'Enzyme renewal' },
      { id: 'bio-retinol-serum', name: 'UltiGlow™ Bio-Retinol Serum', nameCn: '生物视黄醇精华', description: 'Anti-aging renewal' },
      { id: 'bio-lactic-serum', name: 'UltiGlow™ Bio-Lactic Serum', nameCn: '生物乳酸精华', description: 'Gentle for sensitive skin' },
    ],
  },
  {
    category: 'Sun Protection',
    categoryCn: '防晒防护',
    icon: Sun,
    description: 'UV protection solutions',
    products: [
      { id: 'bio-sunscreen-spf50', name: 'UltiGlow™ Bio-Sunscreen SPF50', nameCn: '生物防晒霜SPF50', description: 'Lightweight broad spectrum' },
      { id: 'bio-sun-serum', name: 'UltiGlow™ Bio-Sun Serum', nameCn: '生物防晒精华', description: 'Sun protection serum' },
      { id: 'bio-after-sun-gel', name: 'UltiGlow™ Bio-After Sun Gel', nameCn: '生物晒后修护凝胶', description: 'Soothing after-sun care' },
      { id: 'bio-uv-shield-cream', name: 'UltiGlow™ Bio-UV Shield Cream', nameCn: '生物紫外线防护霜', description: 'Daily UV protection' },
    ],
  },
  {
    category: 'Antioxidant',
    categoryCn: '抗氧化',
    icon: Leaf,
    description: 'Natural antioxidant complexes',
    products: [
      { id: 'bio-ergothioneine-serum', name: 'UltiGlow™ Bio-Ergothioneine Serum', nameCn: '生物麦角硫因精华', description: 'Deep antioxidant (≥98%)' },
      { id: 'bio-resveratrol-cream', name: 'UltiGlow™ Bio-Resveratrol Cream', nameCn: '生物白藜芦醇面霜', description: 'Anti-aging night cream' },
      { id: 'bio-green-tea-essence', name: 'UltiGlow™ Bio-Green Tea Essence', nameCn: '生物绿茶精华', description: 'EGCG soothing antioxidant' },
      { id: 'bio-ferulic-serum', name: 'UltiGlow™ Bio-Ferulic Serum', nameCn: '生物阿魏酸精华', description: 'Enhances antioxidant activity' },
    ],
  },
  {
    category: 'Eye Care',
    categoryCn: '眼部护理',
    icon: Eye,
    description: 'Targeted eye area solutions',
    products: [
      { id: 'bio-eye-cream', name: 'UltiGlow™ Bio-Eye Cream', nameCn: '生物眼霜', description: 'Reduces dark circles' },
      { id: 'bio-peptide-eye-serum', name: 'UltiGlow™ Bio-Peptide Eye Serum', nameCn: '生物多肽眼部精华', description: 'Peptide eye contour care' },
      { id: 'bio-eye-mask', name: 'UltiGlow™ Bio-Eye Mask', nameCn: '生物眼膜', description: 'Intensive tired eye treatment' },
    ],
  },
  {
    category: 'Lip Care',
    categoryCn: '唇部护理',
    icon: Smile,
    description: 'Nourishing lip products',
    products: [
      { id: 'bio-lip-balm', name: 'UltiGlow™ Bio-Lip Balm', nameCn: '生物润唇膏', description: 'Moisturizing lip balm' },
      { id: 'bio-lip-mask', name: 'UltiGlow™ Bio-Lip Mask', nameCn: '生物唇膜', description: 'Overnight intensive care' },
      { id: 'bio-lip-serum', name: 'UltiGlow™ Bio-Lip Serum', nameCn: '生物唇部精华', description: 'Plumping and hydrating' },
    ],
  },
  {
    category: 'Pore Care',
    categoryCn: '毛孔护理',
    icon: Wind,
    description: 'Pore refining and oil control',
    products: [
      { id: 'bio-pore-serum', name: 'UltiGlow™ Bio-Pore Serum', nameCn: '生物毛孔精华', description: 'Refines pores, controls oil' },
      { id: 'bio-pore-mask', name: 'UltiGlow™ Bio-Pore Mask', nameCn: '生物毛孔面膜', description: 'Deep cleansing clay mask' },
      { id: 'bio-pore-toner', name: 'UltiGlow™ Bio-Pore Toner', nameCn: '生物毛孔爽肤水', description: 'Tightens pores' },
    ],
  },
  {
    category: 'Natural Color',
    categoryCn: '天然彩妆',
    icon: Palette,
    description: 'Natural color cosmetics',
    products: [
      { id: 'bio-lip-tint', name: 'UltiGlow™ Bio-Lip Tint', nameCn: '生物唇釉', description: 'Plant-based natural color' },
      { id: 'bio-bb-cream', name: 'UltiGlow™ Bio-BB Cream', nameCn: '生物BB霜', description: 'Natural coverage' },
      { id: 'bio-blush', name: 'UltiGlow™ Bio-Blush', nameCn: '生物腮红', description: 'Mineral blush' },
      { id: 'bio-highlighter', name: 'UltiGlow™ Bio-Highlighter', nameCn: '生物高光', description: 'Natural radiance' },
      { id: 'bio-bronzer', name: 'UltiGlow™ Bio-Bronzer', nameCn: '生物古铜粉', description: 'Sun-kissed look' },
      { id: 'bio-eyebrow-gel', name: 'UltiGlow™ Bio-Eyebrow Gel', nameCn: '生物眉胶', description: 'Natural definition' },
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
                        <p className="text-xs mb-2" style={{ color: '#A1BA80' }}>{product.nameCn}</p>
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
