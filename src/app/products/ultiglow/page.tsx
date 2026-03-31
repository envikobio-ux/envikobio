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
    categoryCn: '深层补水',
    icon: Droplets,
    description: 'Multi-layer hydration with biosynthesis hyaluronic acid and glucosamine',
    descriptionCn: '多层次补水，生物合成透明质酸与氨基葡萄糖',
    products: [
      { id: 'bio-ha-serum', name: '生物合成透明质酸精华', nameEn: 'Bio-HA Serum', description: '多分子量透明质酸，72小时深层补水' },
      { id: 'bio-ha-cream', name: '生物合成透明质酸面霜', nameEn: 'Bio-HA Cream', description: '强效保湿面霜，充盈肌肤' },
      { id: 'bio-ha-mask', name: '生物合成透明质酸面膜', nameEn: 'Bio-HA Mask', description: '干性肌肤强效补水面膜' },
      { id: 'bio-ha-toner', name: '生物合成透明质酸爽肤水', nameEn: 'Bio-HA Toner', description: '补水预处理爽肤水，促进吸收' },
      { id: 'bio-glucosamine-serum', name: '生物合成氨基葡萄糖精华', nameEn: 'Bio-Glucosamine Serum', description: '促进肌肤自身透明质酸合成' },
      { id: 'bio-glucosamine-cream', name: '生物合成氨基葡萄糖面霜', nameEn: 'Bio-Glucosamine Cream', description: '屏障修护，锁水保湿' },
    ],
  },
  {
    category: 'Anti-Aging',
    categoryCn: '抗衰老',
    icon: Heart,
    description: 'Collagen and peptide formulations for youthful skin',
    descriptionCn: '胶原蛋白与多肽配方，焕发年轻肌肤',
    products: [
      { id: 'bio-collagen-serum', name: '生物合成胶原蛋白精华', nameEn: 'Bio-Collagen Serum', description: '重组人源胶原蛋白，紧致弹润' },
      { id: 'bio-collagen-cream', name: '生物合成胶原蛋白面霜', nameEn: 'Bio-Collagen Cream', description: '日霜，紧致抗皱' },
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
    description: 'Vitamin C and brightening complexes for radiant skin',
    descriptionCn: '维生素C与提亮复合物，焕发肌肤光彩',
    products: [
      { id: 'bio-vitamin-c-serum', name: '生物合成维生素C精华', nameEn: 'Bio-Vitamin C Serum', description: '稳定维生素C(≥20%)，提亮抗氧化' },
      { id: 'bio-niacinamide-serum', name: '生物合成烟酰胺精华', nameEn: 'Bio-Niacinamide Serum', description: '烟酰胺(≥10%)，均匀肤色' },
      { id: 'bio-arbutin-serum', name: '生物合成熊果苷精华', nameEn: 'Bio-Arbutin Serum', description: 'α-熊果苷，淡化色斑' },
      { id: 'bio-brightening-cream', name: '生物合成提亮面霜', nameEn: 'Bio-Brightening Cream', description: '日常提亮保湿面霜' },
      { id: 'bio-brightening-mask', name: '生物合成提亮面膜', nameEn: 'Bio-Brightening Mask', description: '强效提亮护理' },
    ],
  },
  {
    category: 'Sensitive Repair',
    categoryCn: '敏感修护',
    icon: Shield,
    description: 'Gentle formulations for sensitive and compromised skin',
    descriptionCn: '温和配方，专为敏感脆弱肌肤设计',
    products: [
      { id: 'bio-ectoine-serum', name: '生物合成依克多因精华', nameEn: 'Bio-Ectoine Serum', description: '保护修护肌肤屏障' },
      { id: 'bio-ectoine-cream', name: '生物合成依克多因面霜', nameEn: 'Bio-Ectoine Cream', description: '敏感肌舒缓保湿面霜' },
      { id: 'bio-bisabolol-serum', name: '生物合成红没药醇精华', nameEn: 'Bio-Bisabolol Serum', description: '快速缓解泛红刺激' },
      { id: 'bio-centella-cream', name: '生物合成积雪草面霜', nameEn: 'Bio-Centella Cream', description: '积雪草修护面霜' },
      { id: 'bio-sensitive-mask', name: '生物合成敏感修护面膜', nameEn: 'Bio-Sensitive Mask', description: '强效舒缓护理' },
      { id: 'bio-ceramide-cream', name: '生物合成神经酰胺面霜', nameEn: 'Bio-Ceramide Cream', description: '重建肌肤屏障' },
    ],
  },
  {
    category: 'Acne Control',
    categoryCn: '祛痘净肤',
    icon: Zap,
    description: 'Acne-fighting formulations with biosynthesis actives',
    descriptionCn: '生物合成活性成分，祛痘净肤',
    products: [
      { id: 'bio-salicylic-serum', name: '生物合成水杨酸精华', nameEn: 'Bio-Salicylic Serum', description: '脂溶性BHA，深层清洁毛孔' },
      { id: 'bio-acne-serum', name: '生物合成祛痘精华', nameEn: 'Bio-Acne Serum', description: '水杨酸+烟酰胺复合配方' },
      { id: 'bio-acne-patch', name: '生物合成祛痘贴', nameEn: 'Bio-Acne Patch', description: '水胶体贴片，夜间治疗' },
      { id: 'bio-oil-control-toner', name: '生物合成控油爽肤水', nameEn: 'Bio-Oil Control Toner', description: '平衡油脂，收缩毛孔' },
      { id: 'bio-tea-tree-serum', name: '生物合成茶树精华', nameEn: 'Bio-Tea Tree Serum', description: '天然抗菌，局部护理' },
    ],
  },
  {
    category: 'Skin Renewal',
    categoryCn: '肌肤焕新',
    icon: RefreshCw,
    description: 'Exfoliation and renewal formulations',
    descriptionCn: '角质代谢与肌肤焕新',
    products: [
      { id: 'bio-aha-serum', name: '生物合成果酸精华', nameEn: 'Bio-AHA Serum', description: '温和去角质，平滑肤质' },
      { id: 'bio-bha-toner', name: '生物合成水杨酸爽肤水', nameEn: 'Bio-BHA Toner', description: '清洁毛孔，减少黑头' },
      { id: 'bio-renew-mask', name: '生物合成焕新面膜', nameEn: 'Bio-Renew Mask', description: '酶解焕新，提亮肤色' },
      { id: 'bio-retinol-serum', name: '生物合成视黄醇精华', nameEn: 'Bio-Retinol Serum', description: '包裹视黄醇，抗衰焕新' },
      { id: 'bio-lactic-serum', name: '生物合成乳酸精华', nameEn: 'Bio-Lactic Serum', description: '敏感肌温和去角质' },
    ],
  },
  {
    category: 'Sun Protection',
    categoryCn: '防晒防护',
    icon: Sun,
    description: 'UV protection with skin-loving ingredients',
    descriptionCn: '紫外线防护，呵护肌肤',
    products: [
      { id: 'bio-sunscreen-spf50', name: '生物合成防晒霜SPF50', nameEn: 'Bio-Sunscreen SPF50', description: '轻薄广谱防晒' },
      { id: 'bio-sun-serum', name: '生物合成防晒精华', nameEn: 'Bio-Sun Serum', description: '防晒精华，光泽妆效' },
      { id: 'bio-after-sun-gel', name: '生物合成晒后修护凝胶', nameEn: 'Bio-After Sun Gel', description: '舒缓晒后护理' },
      { id: 'bio-uv-shield-cream', name: '生物合成紫外线防护霜', nameEn: 'Bio-UV Shield Cream', description: '日常紫外线防护保湿霜' },
    ],
  },
  {
    category: 'Antioxidant',
    categoryCn: '抗氧化',
    icon: Leaf,
    description: 'Natural antioxidant complexes for skin defense',
    descriptionCn: '天然抗氧化复合物，肌肤防护',
    products: [
      { id: 'bio-ergothioneine-serum', name: '生物合成麦角硫因精华', nameEn: 'Bio-Ergothioneine Serum', description: '深层抗氧化保护(≥98%)' },
      { id: 'bio-resveratrol-cream', name: '生物合成白藜芦醇面霜', nameEn: 'Bio-Resveratrol Cream', description: '抗衰老晚霜' },
      { id: 'bio-green-tea-essence', name: '生物合成绿茶精华', nameEn: 'Bio-Green Tea Essence', description: 'EGCG精华，舒缓抗氧化' },
      { id: 'bio-ferulic-serum', name: '生物合成阿魏酸精华', nameEn: 'Bio-Ferulic Serum', description: '增强其他抗氧化成分活性' },
    ],
  },
  {
    category: 'Eye Care',
    categoryCn: '眼部护理',
    icon: Eye,
    description: 'Targeted solutions for delicate eye area',
    descriptionCn: '娇嫩眼部区域针对性护理',
    products: [
      { id: 'bio-eye-cream', name: '生物合成眼霜', nameEn: 'Bio-Eye Cream', description: '减少黑眼圈和细纹' },
      { id: 'bio-peptide-eye-serum', name: '生物合成多肽眼部精华', nameEn: 'Bio-Peptide Eye Serum', description: '多肽复合物眼部护理' },
      { id: 'bio-eye-mask', name: '生物合成眼膜', nameEn: 'Bio-Eye Mask', description: '疲惫眼部强效护理' },
    ],
  },
  {
    category: 'Lip Care',
    categoryCn: '唇部护理',
    icon: Smile,
    description: 'Nourishing and protecting lip products',
    descriptionCn: '滋润保护唇部产品',
    products: [
      { id: 'bio-lip-balm', name: '生物合成润唇膏', nameEn: 'Bio-Lip Balm', description: '天然成分保湿润唇膏' },
      { id: 'bio-lip-mask', name: '生物合成唇膜', nameEn: 'Bio-Lip Mask', description: '夜间唇部强效护理' },
      { id: 'bio-lip-serum', name: '生物合成唇部精华', nameEn: 'Bio-Lip Serum', description: '丰盈保湿唇部精华' },
    ],
  },
  {
    category: 'Pore Care',
    categoryCn: '毛孔护理',
    icon: Wind,
    description: 'Pore refining and oil control solutions',
    descriptionCn: '毛孔细化与控油解决方案',
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
    description: 'Natural color cosmetics with bio-derived pigments',
    descriptionCn: '生物来源天然色素彩妆',
    products: [
      { id: 'bio-lip-tint', name: '生物合成唇釉', nameEn: 'Bio-Lip Tint', description: '植物基天然色彩' },
      { id: 'bio-bb-cream', name: '生物合成BB霜', nameEn: 'Bio-BB Cream', description: '自然遮盖，轻薄妆效' },
      { id: 'bio-blush', name: '生物合成腮红', nameEn: 'Bio-Blush', description: '矿物腮红，健康气色' },
      { id: 'bio-highlighter', name: '生物合成高光', nameEn: 'Bio-Highlighter', description: '自然光泽，微妙闪亮' },
      { id: 'bio-bronzer', name: '生物合成古铜粉', nameEn: 'Bio-Bronzer', description: '阳光健康妆效' },
      { id: 'bio-eyebrow-gel', name: '生物合成眉胶', nameEn: 'Bio-Eyebrow Gel', description: '自然定型，持久不脱' },
    ],
  },
];

const keyIngredients = [
  { name: '生物合成透明质酸', purity: '≥95%', benefit: '深层补水', source: '发酵' },
  { name: '生物合成胶原蛋白', purity: '≥95%', benefit: '肌肤再生', source: '生物合成' },
  { name: '生物合成依克多因', purity: '≥99%', benefit: '细胞修护', source: '嗜盐菌' },
  { name: '生物合成麦角硫因', purity: '≥98%', benefit: '抗氧化', source: '生物合成' },
  { name: '生物合成红没药醇', purity: '≥95%', benefit: '舒缓', source: '天然提取' },
  { name: '生物合成铜肽', purity: '≥98%', benefit: '肌肤修护', source: '生物合成' },
  { name: '生物合成氨基葡萄糖', purity: '≥98%', benefit: '屏障修护', source: '生物合成' },
  { name: '生物合成维生素C', purity: '≥20%', benefit: '提亮', source: '生物合成' },
];

const certifications = [
  'COSMOS/Ecocert 认证',
  '无动物实验',
  '纯净美妆标准',
  '低敏测试',
  '皮肤科医生推荐',
  '可持续原料',
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
                生物合成科技护肤，{ultiGlowCategories.length}大功能系列，{totalProducts}款产品，为肌肤注入科学力量
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>{ultiGlowCategories.length}</p>
                  <p className="text-sm text-gray-600">功能系列</p>
                </div>
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>{totalProducts}</p>
                  <p className="text-sm text-gray-600">护肤产品</p>
                </div>
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>8+</p>
                  <p className="text-sm text-gray-600">核心成分</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" style={{ backgroundColor: '#A1BA80' }}>
                  <Link href="/contact">
                    申请样品 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/api/catalogue-download">
                    <Download className="mr-2 h-4 w-4" />
                    下载目录
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
                <p className="text-white font-medium">生物合成科技</p>
                <p className="text-white/70 text-sm mt-1">胶原蛋白 • 依克多因 • 透明质酸 • 麦角硫因 • 多肽</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories - 每个分类卡片内列出产品 */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              UltiGlow™ 产品系列
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              按肌肤功能分类，点击产品查看详情
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
                        <h3 className="text-xl font-normal text-gray-900">{category.categoryCn}</h3>
                        <p className="text-sm" style={{ color: '#A1BA80' }}>{category.category}</p>
                        <p className="text-gray-600 text-sm mt-1">{category.descriptionCn}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-normal" style={{ color: '#A1BA80' }}>{category.products.length}</span>
                        <p className="text-xs text-gray-500">款产品</p>
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
                              <span className="text-xs text-gray-400">({product.nameEn})</span>
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
              核心生物合成成分
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              高纯度、高功效的生物合成活性成分
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
                  <p className="text-xs text-gray-500">来源: {ingredient.source}</p>
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
                纯净美妆标准
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                每一款UltiGlow™产品都符合安全、功效和可持续性的最高标准
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
              合作机会
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-normal text-gray-900 mb-4">OEM/ODM服务</h3>
                <p className="text-gray-600 text-sm">
                  定制配方开发<br />
                  私人标签方案<br />
                  灵活起订量500件起
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-normal text-gray-900 mb-4">分销代理</h3>
                <p className="text-gray-600 text-sm">
                  区域分销合作<br />
                  独家区域授权<br />
                  提供营销支持
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-normal text-gray-900 mb-4">研发合作</h3>
                <p className="text-gray-600 text-sm">
                  联合产品开发<br />
                  成分创新研究<br />
                  临床测试支持
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
            准备好创建您的护肤品牌了吗？
          </h2>
          <p className="text-lg text-white/80 mb-8">
            与Enviko合作，打造生物合成科技护肤解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" style={{ backgroundColor: '#A1BA80' }}>
              <Link href="/contact">
                联系我们 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="/api/catalogue-download">
                <Download className="mr-2 h-4 w-4" />
                下载目录
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
