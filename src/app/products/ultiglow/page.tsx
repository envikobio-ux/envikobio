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
  Diamond,
  Eye,
  Smile,
  Palette,
  Wind
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'UltiGlow™ Skincare',
  description: 'UltiGlow™ - Ultimate Glow. Premium biosynthesis-based skincare products for radiant, healthy skin.',
};

// UltiGlow Product Categories - By Function
const ultiGlowCategories = [
  {
    category: 'Deep Hydration',
    categoryCn: '深层补水',
    icon: Droplets,
    description: 'Multi-layer hydration with biosynthesis hyaluronic acid and glucosamine',
    descriptionCn: '多层次补水，生物合成透明质酸与氨基葡萄糖',
    products: [
      { id: 'bio-ha-serum', name: 'UltiGlow™ Bio-HA Serum', nameCn: '生物透明质酸精华', description: 'Multi-weight HA for 72-hour deep hydration', descriptionCn: '多分子量透明质酸，72小时深层补水' },
      { id: 'bio-ha-cream', name: 'UltiGlow™ Bio-HA Cream', nameCn: '生物透明质酸面霜', description: 'Intensive moisturizing cream with plumping effect', descriptionCn: '强效保湿面霜，充盈肌肤' },
      { id: 'bio-ha-mask', name: 'UltiGlow™ Bio-HA Mask', nameCn: '生物透明质酸面膜', description: 'Intensive hydration mask for dry skin', descriptionCn: '干性肌肤强效补水面膜' },
      { id: 'bio-ha-toner', name: 'UltiGlow™ Bio-HA Toner', nameCn: '生物透明质酸爽肤水', description: 'Hydrating prep toner for better absorption', descriptionCn: '补水预处理爽肤水，促进吸收' },
      { id: 'bio-glucosamine-serum', name: 'UltiGlow™ Bio-Glucosamine Serum', nameCn: '生物氨基葡萄糖精华', description: 'Enhances natural HA production', descriptionCn: '促进肌肤自身透明质酸合成' },
      { id: 'bio-glucosamine-cream', name: 'UltiGlow™ Bio-Glucosamine Cream', nameCn: '生物氨基葡萄糖面霜', description: 'Barrier repair and moisture lock', descriptionCn: '屏障修护，锁水保湿' },
    ],
  },
  {
    category: 'Anti-Aging',
    categoryCn: '抗衰老',
    icon: Heart,
    description: 'Collagen and peptide formulations for youthful skin',
    descriptionCn: '胶原蛋白与多肽配方，焕发年轻肌肤',
    products: [
      { id: 'bio-collagen-serum', name: 'UltiGlow™ Bio-Collagen Serum', nameCn: '生物胶原蛋白精华', description: 'Recombinant human collagen, firming and elastic', descriptionCn: '重组人源胶原蛋白，紧致弹润' },
      { id: 'bio-collagen-cream', name: 'UltiGlow™ Bio-Collagen Cream', nameCn: '生物胶原蛋白面霜', description: 'Day cream for firming and anti-wrinkle', descriptionCn: '日霜，紧致抗皱' },
      { id: 'bio-collagen-mask', name: 'UltiGlow™ Bio-Collagen Mask', nameCn: '生物胶原蛋白面膜', description: 'Intensive repair mask', descriptionCn: '强效修护面膜' },
      { id: 'bio-collagen-eye-cream', name: 'UltiGlow™ Bio-Collagen Eye Cream', nameCn: '生物胶原蛋白眼霜', description: 'Reduces fine lines around eyes', descriptionCn: '减少眼部细纹' },
      { id: 'bio-peptide-serum', name: 'UltiGlow™ Bio-Peptide Serum', nameCn: '生物多肽精华', description: 'Multi-peptide complex, wrinkle reduction', descriptionCn: '多肽复合物，减少皱纹' },
      { id: 'bio-peptide-cream', name: 'UltiGlow™ Bio-Peptide Cream', nameCn: '生物多肽面霜', description: 'Anti-aging firming cream', descriptionCn: '抗衰老紧致面霜' },
      { id: 'bio-copper-peptide-serum', name: 'UltiGlow™ Bio-Copper Peptide Serum', nameCn: '生物铜肽精华', description: 'Copper peptide for skin renewal', descriptionCn: '铜肽促进肌肤焕新' },
    ],
  },
  {
    category: 'Brightening',
    categoryCn: '美白提亮',
    icon: Sparkles,
    description: 'Vitamin C and brightening complexes for radiant skin',
    descriptionCn: '维生素C与提亮复合物，焕发肌肤光彩',
    products: [
      { id: 'bio-vitamin-c-serum', name: 'UltiGlow™ Bio-Vitamin C Serum', nameCn: '生物维生素C精华', description: 'Stable vitamin C (≥20%), brightening and antioxidant', descriptionCn: '稳定维生素C(≥20%)，提亮抗氧化' },
      { id: 'bio-niacinamide-serum', name: 'UltiGlow™ Bio-Niacinamide Serum', nameCn: '生物烟酰胺精华', description: 'Niacinamide (≥10%), evens skin tone', descriptionCn: '烟酰胺(≥10%)，均匀肤色' },
      { id: 'bio-arbutin-serum', name: 'UltiGlow™ Bio-Arbutin Serum', nameCn: '生物熊果苷精华', description: 'Alpha-arbutin, fades dark spots', descriptionCn: 'α-熊果苷，淡化色斑' },
      { id: 'bio-brightening-cream', name: 'UltiGlow™ Bio-Brightening Cream', nameCn: '生物提亮面霜', description: 'Daily brightening moisturizer', descriptionCn: '日常提亮保湿面霜' },
      { id: 'bio-brightening-mask', name: 'UltiGlow™ Bio-Brightening Mask', nameCn: '生物提亮面膜', description: 'Intensive brightening treatment', descriptionCn: '强效提亮护理' },
    ],
  },
  {
    category: 'Sensitive Repair',
    categoryCn: '敏感修护',
    icon: Shield,
    description: 'Gentle formulations for sensitive and compromised skin',
    descriptionCn: '温和配方，专为敏感脆弱肌肤设计',
    products: [
      { id: 'bio-ectoine-serum', name: 'UltiGlow™ Bio-Ectoine Serum', nameCn: '生物依克多因精华', description: 'Protects and repairs skin barrier', descriptionCn: '保护修护肌肤屏障' },
      { id: 'bio-ectoine-cream', name: 'UltiGlow™ Bio-Ectoine Cream', nameCn: '生物依克多因面霜', description: 'Calming moisturizer for sensitive skin', descriptionCn: '敏感肌舒缓保湿面霜' },
      { id: 'bio-bisabolol-serum', name: 'UltiGlow™ Bio-Bisabolol Serum', nameCn: '生物红没药醇精华', description: 'Quick relief for redness and irritation', descriptionCn: '快速缓解泛红刺激' },
      { id: 'bio-centella-cream', name: 'UltiGlow™ Bio-Centella Cream', nameCn: '生物积雪草面霜', description: 'Centella asiatica for repair', descriptionCn: '积雪草修护面霜' },
      { id: 'bio-sensitive-mask', name: 'UltiGlow™ Bio-Sensitive Mask', nameCn: '生物敏感修护面膜', description: 'Intensive calming treatment', descriptionCn: '强效舒缓护理' },
      { id: 'bio-ceramide-cream', name: 'UltiGlow™ Bio-Ceramide Cream', nameCn: '生物神经酰胺面霜', description: 'Rebuilds skin barrier', descriptionCn: '重建肌肤屏障' },
    ],
  },
  {
    category: 'Acne Control',
    categoryCn: '祛痘净肤',
    icon: Zap,
    description: 'Acne-fighting formulations with biosynthesis actives',
    descriptionCn: '生物合成活性成分，祛痘净肤',
    products: [
      { id: 'bio-salicylic-serum', name: 'UltiGlow™ Bio-Salicylic Serum', nameCn: '生物水杨酸精华', description: 'Oil-soluble BHA, deep pore cleansing', descriptionCn: '脂溶性BHA，深层清洁毛孔' },
      { id: 'bio-acne-serum', name: 'UltiGlow™ Bio-Acne Serum', nameCn: '生物祛痘精华', description: 'Salicylic acid + niacinamide complex', descriptionCn: '水杨酸+烟酰胺复合配方' },
      { id: 'bio-acne-patch', name: 'UltiGlow™ Bio-Acne Patch', nameCn: '生物祛痘贴', description: 'Hydrocolloid patch, overnight treatment', descriptionCn: '水胶体贴片，夜间治疗' },
      { id: 'bio-oil-control-toner', name: 'UltiGlow™ Bio-Oil Control Toner', nameCn: '生物控油爽肤水', description: 'Oil-balancing, pore refinement', descriptionCn: '平衡油脂，收缩毛孔' },
      { id: 'bio-tea-tree-serum', name: 'UltiGlow™ Bio-Tea Tree Serum', nameCn: '生物茶树精华', description: 'Natural antibacterial, spot treatment', descriptionCn: '天然抗菌，局部护理' },
    ],
  },
  {
    category: 'Skin Renewal',
    categoryCn: '肌肤焕新',
    icon: RefreshCw,
    description: 'Exfoliation and renewal formulations',
    descriptionCn: '角质代谢与肌肤焕新',
    products: [
      { id: 'bio-aha-serum', name: 'UltiGlow™ Bio-AHA Serum', nameCn: '生物果酸精华', description: 'Gentle exfoliation, smooth skin texture', descriptionCn: '温和去角质，平滑肤质' },
      { id: 'bio-bha-toner', name: 'UltiGlow™ Bio-BHA Toner', nameCn: '生物水杨酸爽肤水', description: 'Pore clearing, blackhead reduction', descriptionCn: '清洁毛孔，减少黑头' },
      { id: 'bio-renew-mask', name: 'UltiGlow™ Bio-Renew Mask', nameCn: '生物焕新面膜', description: 'Enzyme renewal, brightening effect', descriptionCn: '酶解焕新，提亮肤色' },
      { id: 'bio-retinol-serum', name: 'UltiGlow™ Bio-Retinol Serum', nameCn: '生物视黄醇精华', description: 'Encapsulated retinol, anti-aging renewal', descriptionCn: '包裹视黄醇，抗衰焕新' },
      { id: 'bio-lactic-serum', name: 'UltiGlow™ Bio-Lactic Serum', nameCn: '生物乳酸精华', description: 'Gentle exfoliation for sensitive skin', descriptionCn: '敏感肌温和去角质' },
    ],
  },
  {
    category: 'Sun Protection',
    categoryCn: '防晒防护',
    icon: Sun,
    description: 'UV protection with skin-loving ingredients',
    descriptionCn: '紫外线防护，呵护肌肤',
    products: [
      { id: 'bio-sunscreen-spf50', name: 'UltiGlow™ Bio-Sunscreen SPF50', nameCn: '生物防晒霜SPF50', description: 'Lightweight broad spectrum protection', descriptionCn: '轻薄广谱防晒' },
      { id: 'bio-sun-serum', name: 'UltiGlow™ Bio-Sun Serum', nameCn: '生物防晒精华', description: 'Sun protection serum, glow finish', descriptionCn: '防晒精华，光泽妆效' },
      { id: 'bio-after-sun-gel', name: 'UltiGlow™ Bio-After Sun Gel', nameCn: '生物晒后修护凝胶', description: 'Soothing after-sun care', descriptionCn: '舒缓晒后护理' },
      { id: 'bio-uv-shield-cream', name: 'UltiGlow™ Bio-UV Shield Cream', nameCn: '生物紫外线防护霜', description: 'Daily UV protection moisturizer', descriptionCn: '日常紫外线防护保湿霜' },
    ],
  },
  {
    category: 'Antioxidant',
    categoryCn: '抗氧化',
    icon: Leaf,
    description: 'Natural antioxidant complexes for skin defense',
    descriptionCn: '天然抗氧化复合物，肌肤防护',
    products: [
      { id: 'bio-ergothioneine-serum', name: 'UltiGlow™ Bio-Ergothioneine Serum', nameCn: '生物麦角硫因精华', description: 'Deep antioxidant protection (≥98%)', descriptionCn: '深层抗氧化保护(≥98%)' },
      { id: 'bio-resveratrol-cream', name: 'UltiGlow™ Bio-Resveratrol Cream', nameCn: '生物白藜芦醇面霜', description: 'Night cream for anti-aging', descriptionCn: '抗衰老晚霜' },
      { id: 'bio-green-tea-essence', name: 'UltiGlow™ Bio-Green Tea Essence', nameCn: '生物绿茶精华', description: 'EGCG essence, soothing antioxidant', descriptionCn: 'EGCG精华，舒缓抗氧化' },
      { id: 'bio-ferulic-serum', name: 'UltiGlow™ Bio-Ferulic Serum', nameCn: '生物阿魏酸精华', description: 'Enhances other antioxidant activities', descriptionCn: '增强其他抗氧化成分活性' },
    ],
  },
  {
    category: 'Eye Care',
    categoryCn: '眼部护理',
    icon: Eye,
    description: 'Targeted solutions for delicate eye area',
    descriptionCn: '娇嫩眼部区域针对性护理',
    products: [
      { id: 'bio-eye-cream', name: 'UltiGlow™ Bio-Eye Cream', nameCn: '生物眼霜', description: 'Reduces dark circles and fine lines', descriptionCn: '减少黑眼圈和细纹' },
      { id: 'bio-peptide-eye-serum', name: 'UltiGlow™ Bio-Peptide Eye Serum', nameCn: '生物多肽眼部精华', description: 'Peptide complex for eye contour', descriptionCn: '多肽复合物眼部护理' },
      { id: 'bio-eye-mask', name: 'UltiGlow™ Bio-Eye Mask', nameCn: '生物眼膜', description: 'Intensive treatment for tired eyes', descriptionCn: '疲惫眼部强效护理' },
    ],
  },
  {
    category: 'Lip Care',
    categoryCn: '唇部护理',
    icon: Smile,
    description: 'Nourishing and protecting lip products',
    descriptionCn: '滋润保护唇部产品',
    products: [
      { id: 'bio-lip-balm', name: 'UltiGlow™ Bio-Lip Balm', nameCn: '生物润唇膏', description: 'Moisturizing lip balm with natural ingredients', descriptionCn: '天然成分保湿润唇膏' },
      { id: 'bio-lip-mask', name: 'UltiGlow™ Bio-Lip Mask', nameCn: '生物唇膜', description: 'Overnight intensive lip treatment', descriptionCn: '夜间唇部强效护理' },
      { id: 'bio-lip-serum', name: 'UltiGlow™ Bio-Lip Serum', nameCn: '生物唇部精华', description: 'Plumping and hydrating lip serum', descriptionCn: '丰盈保湿唇部精华' },
    ],
  },
  {
    category: 'Pore Care',
    categoryCn: '毛孔护理',
    icon: Wind,
    description: 'Pore refining and oil control solutions',
    descriptionCn: '毛孔细化与控油解决方案',
    products: [
      { id: 'bio-pore-serum', name: 'UltiGlow™ Bio-Pore Serum', nameCn: '生物毛孔精华', description: 'Refines pores, controls oil', descriptionCn: '细化毛孔，控制油脂' },
      { id: 'bio-pore-mask', name: 'UltiGlow™ Bio-Pore Mask', nameCn: '生物毛孔面膜', description: 'Deep cleansing clay mask', descriptionCn: '深层清洁泥膜' },
      { id: 'bio-pore-toner', name: 'UltiGlow™ Bio-Pore Toner', nameCn: '生物毛孔爽肤水', description: 'Tightens pores, smooths texture', descriptionCn: '收缩毛孔，平滑肤质' },
    ],
  },
  {
    category: 'Natural Color',
    categoryCn: '天然彩妆',
    icon: Palette,
    description: 'Natural color cosmetics with bio-derived pigments',
    descriptionCn: '生物来源天然色素彩妆',
    products: [
      { id: 'bio-lip-tint', name: 'UltiGlow™ Bio-Lip Tint', nameCn: '生物唇釉', description: 'Plant-based natural color', descriptionCn: '植物基天然色彩' },
      { id: 'bio-bb-cream', name: 'UltiGlow™ Bio-BB Cream', nameCn: '生物BB霜', description: 'Natural coverage, light finish', descriptionCn: '自然遮盖，轻薄妆效' },
      { id: 'bio-blush', name: 'UltiGlow™ Bio-Blush', nameCn: '生物腮红', description: 'Mineral blush, healthy glow', descriptionCn: '矿物腮红，健康气色' },
      { id: 'bio-highlighter', name: 'UltiGlow™ Bio-Highlighter', nameCn: '生物高光', description: 'Natural radiance, subtle shimmer', descriptionCn: '自然光泽，微妙闪亮' },
      { id: 'bio-bronzer', name: 'UltiGlow™ Bio-Bronzer', nameCn: '生物古铜粉', description: 'Sun-kissed natural look', descriptionCn: '阳光健康妆效' },
      { id: 'bio-eyebrow-gel', name: 'UltiGlow™ Bio-Eyebrow Gel', nameCn: '生物眉胶', description: 'Natural definition, long-lasting', descriptionCn: '自然定型，持久不脱' },
    ],
  },
];

const keyIngredients = [
  { name: 'Bio-Hyaluronic Acid', purity: '≥95%', benefit: 'Deep hydration', source: 'Fermentation' },
  { name: 'Bio-Collagen', purity: '≥95%', benefit: 'Skin regeneration', source: 'Biosynthesis' },
  { name: 'Bio-Ectoine', purity: '≥99%', benefit: 'Cell repair', source: 'Halophilic bacteria' },
  { name: 'Bio-Ergothioneine', purity: '≥98%', benefit: 'Antioxidant', source: 'Biosynthesis' },
  { name: 'Bio-Bisabolol', purity: '≥95%', benefit: 'Soothing', source: 'Natural extraction' },
  { name: 'Bio-Copper Peptide', purity: '≥98%', benefit: 'Skin repair', source: 'Biosynthesis' },
  { name: 'Bio-Glucosamine', purity: '≥98%', benefit: 'Barrier repair', source: 'Biosynthesis' },
  { name: 'Bio-Vitamin C', purity: '≥20%', benefit: 'Brightening', source: 'Biosynthesis' },
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
                「极致光彩」
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Premium biosynthesis-based skincare powered by science. 
                {ultiGlowCategories.length} functional categories with {totalProducts} targeted solutions.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>{ultiGlowCategories.length}</p>
                  <p className="text-sm text-gray-600">Function Categories</p>
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
                <p className="text-white font-medium">Powered by Biosynthesis Technology</p>
                <p className="text-white/70 text-sm mt-1">Collagen • Ectoine • HA • Ergothioneine • Peptides</p>
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
              UltiGlow™ Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse by skin concern - click any product for detailed information
            </p>
          </div>

          {ultiGlowCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                  <category.icon className="w-7 h-7" style={{ color: '#A1BA80' }} />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-gray-900">{category.category}</h3>
                  <p className="text-sm" style={{ color: '#A1BA80' }}>{category.categoryCn}</p>
                  <p className="text-gray-600 text-sm mt-1">{category.descriptionCn}</p>
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
                    <Card className="border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-300 group h-full">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-normal text-gray-900 group-hover:text-green-700 transition-colors">
                            {product.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0 mt-1" />
                        </div>
                        <p className="text-xs mb-2" style={{ color: '#A1BA80' }}>{product.nameCn}</p>
                        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                        <p className="text-xs text-gray-500">{product.descriptionCn}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
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
              Core active ingredients with verified purity and efficacy
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
                Every UltiGlow™ product meets the highest standards for safety, efficacy, and sustainability.
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
