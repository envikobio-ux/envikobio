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
  Wind,
  RefreshCw,
  Diamond
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'UltiGlow® Skincare',
  description: 'UltiGlow® - Ultimate Glow. Premium biosynthesis-based skincare products for radiant, healthy skin.',
};

// UltiGlow Product Lines - Biosynthesis Series
const ultiGlowSeries = [
  {
    icon: Heart,
    title: 'UltiGlow™ Bio-Synth Collagen Series',
    titleCn: '生物合成胶原蛋白系列',
    count: 5,
    ingredients: 'Recombinant Human Collagen, Collagen Peptide',
    ingredientDetail: 'Recombinant Human Collagen（与人体自身胶原同源，易吸收）、Collagen Peptide（小分子，渗透力强，直达肌底）',
    benefitEn: 'Replenish skin collagen, enhance skin firmness and elasticity, fade fine lines and wrinkles, repair damaged skin barrier',
    benefitCn: '补充肌肤胶原蛋白，增强肌肤紧致度与弹性，淡化细纹皱纹，修护受损肌肤屏障',
  },
  {
    icon: Shield,
    title: 'UltiGlow™ Bio-Ectoine Series',
    titleCn: '生物合成依克多因系列',
    count: 4,
    ingredients: 'Ectoine, Glycoprotein',
    ingredientDetail: 'Ectoine（嗜盐菌提取物，强效锁水抗刺激）、Glycoprotein（增强肌肤自身防御能力，减少敏感诱因）',
    benefitEn: 'Protect skin from external stimuli, soothe sensitive skin, lock moisture, resist oxidation and photoaging',
    benefitCn: '抵御外界刺激，舒缓敏感肌肤，长效锁水，抗氧化、抗光老化',
  },
  {
    icon: Droplets,
    title: 'UltiGlow™ Bio-Hyaluronic Acid Series',
    titleCn: '生物合成透明质酸系列',
    count: 4,
    ingredients: 'High/Low Molecular Weight Hyaluronic Acid, Sodium Hyaluronate',
    ingredientDetail: 'High/Low Molecular Weight Hyaluronic Acid（高分子锁水、低分子渗透，分层补水）、Sodium Hyaluronate（亲肤性强，维持肌肤水润度）',
    benefitEn: 'Deeply hydrate skin layers, lock moisture for a long time, plump skin, improve dry and rough skin texture',
    benefitCn: '深层渗透肌肤底层补水，长效锁水，充盈肌肤，改善干燥粗糙肤质',
  },
  {
    icon: Sparkles,
    title: 'UltiGlow™ Bio-Vitamin Complex Series',
    titleCn: '生物合成复合维生素系列',
    count: 4,
    ingredients: 'Vitamin C, Niacinamide, Vitamin E',
    ingredientDetail: 'Vitamin C（高活性，提亮肤色不刺激）、Niacinamide（调节水油，改善暗沉）、Vitamin E（长效抗氧化，减少自由基损伤）',
    benefitEn: 'Brighten dull skin, even skin tone, fade dark spots and pigmentation, resist free radicals',
    benefitCn: '提亮暗沉肌肤，均匀肤色，淡化色斑色素沉着，抵御自由基损伤',
  },
  {
    icon: Diamond,
    title: 'UltiGlow™ Bio-Peptide Series',
    titleCn: '生物合成多肽系列',
    count: 5,
    ingredients: 'Palmitoyl Tripeptide-1, Acetyl Hexapeptide-8, Copper Peptide',
    ingredientDetail: 'Palmitoyl Tripeptide-1（促进胶原再生，紧致肌肤）、Acetyl Hexapeptide-8（舒缓肌肉，淡化表情纹）、Copper Peptide（修护肌底，加速肌肤代谢）',
    benefitEn: 'Relax facial muscles, reduce expression lines, firm skin, promote skin metabolism and repair',
    benefitCn: '舒缓面部肌肉，减少表情纹，紧致肌肤，促进肌肤新陈代谢与修护',
  },
  {
    icon: Leaf,
    title: 'UltiGlow™ Bio-Antioxidant Series',
    titleCn: '生物合成抗氧化系列',
    count: 3,
    ingredients: 'Ergothioneine, Ferulic Acid, Resveratrol',
    ingredientDetail: 'Ergothioneine（穿透性强，深层抗氧化）、Ferulic Acid（增强其他抗氧化成分活性）、Resveratrol（延缓胶原流失，提亮肌肤光泽）',
    benefitEn: 'Neutralize free radicals, slow down skin aging, improve skin luster, protect skin from environmental damage',
    benefitCn: '中和自由基，延缓肌肤老化，提升肌肤光泽，保护肌肤免受环境损伤',
  },
  {
    icon: Shield,
    title: 'UltiGlow™ Bio-Sensitive Repair Series',
    titleCn: '生物合成敏感修护系列',
    count: 4,
    ingredients: 'Alpha-Bisabolol, Panthenol, Ceramide NP',
    ingredientDetail: 'Alpha-Bisabolol（快速舒缓泛红刺痛）、Panthenol（修护屏障，增强肌肤锁水能力）、Ceramide NP（补充肌肤脂质，强韧脆弱肌底）',
    benefitEn: 'Soothe redness and irritation, strengthen skin barrier, relieve sensitive symptoms, moisturize and repair fragile skin',
    benefitCn: '舒缓泛红刺痛，强韧肌肤屏障，缓解敏感症状，保湿修护脆弱肌肤',
  },
  {
    icon: Zap,
    title: 'UltiGlow™ Bio-Acne Clear Series',
    titleCn: '生物合成祛痘净肤系列',
    count: 3,
    ingredients: 'Salicylic Acid, Niacinamide, Tea Tree Oil Extract',
    ingredientDetail: 'Salicylic Acid（脂溶性，深层疏通毛孔）、Niacinamide（控油抑痘，减少油脂分泌）、Tea Tree Oil Extract（温和抑菌，淡化痘印）',
    benefitEn: 'Unclog pores, eliminate acne-causing bacteria, control oil secretion, fade acne marks and redness',
    benefitCn: '疏通毛孔，清除致痘细菌，控制油脂分泌，淡化痘印泛红',
  },
  {
    icon: RefreshCw,
    title: 'UltiGlow™ Bio-Skin Renew Series',
    titleCn: '生物合成肌肤焕新系列',
    count: 4,
    ingredients: 'Lactic Acid, Glycolic Acid, Growth Factor',
    ingredientDetail: 'Lactic Acid（温和代谢老废角质，不损伤屏障）、Glycolic Acid（加速肌肤焕新，改善粗糙）、Growth Factor（促进细胞新生，修护凹凸肤质）',
    benefitEn: 'Exfoliate old cutin, promote skin renewal, improve skin smoothness, repair uneven skin texture',
    benefitCn: '代谢老废角质，促进肌肤焕新，提升肌肤光滑度，修护凹凸不平肤质',
  },
  {
    icon: Sun,
    title: 'UltiGlow™ Bio-Sun Shield Series',
    titleCn: '生物合成防晒防护系列',
    count: 3,
    ingredients: 'UV Filters, Ectoine, Antioxidants',
    ingredientDetail: 'UV Filters（广谱阻隔UVA/UVB，防晒更全面）、Ectoine（舒缓日晒损伤，减少光老化）、Antioxidants（抵御紫外线带来的自由基伤害）',
    benefitEn: 'Block UVA/UVB rays, prevent photoaging, isolate dust and pollutants, soothe sun-damaged skin',
    benefitCn: '阻隔UVA/UVB紫外线，预防光老化，隔离粉尘污染物，舒缓日晒受损肌肤',
  },
  {
    icon: Droplets,
    title: 'UltiGlow™ Bio-Glucosamine Series',
    titleCn: '生物合成氨基葡萄糖系列',
    count: 4,
    ingredients: 'N-Acetyl Glucosamine, Acetyl Glucosamine',
    ingredientDetail: 'N-Acetyl Glucosamine（促进透明质酸合成，深层保湿）、Acetyl Glucosamine（修护肌肤屏障，增强锁水能力，改善粗糙肤质）',
    benefitEn: 'Enhance skin hydration, strengthen skin barrier, improve skin texture, promote HA synthesis',
    benefitCn: '增强肌肤水润度，强韧肌肤屏障，改善肌肤粗糙质地，促进透明质酸合成',
  },
  {
    icon: Leaf,
    title: 'UltiGlow™ Bio-Plant Extract Series',
    titleCn: '生物合成植物提取系列',
    count: 5,
    ingredients: 'Centella Asiatica Extract, Green Tea Extract, Licorice Root Extract',
    ingredientDetail: 'Centella Asiatica Extract（积雪草，舒缓修护，促进胶原合成）、Green Tea Extract（绿茶，抗氧化，清除自由基）、Licorice Root Extract（甘草，美白淡斑，抗炎舒缓）',
    benefitEn: 'Soothe and repair skin, provide antioxidant protection, brighten skin tone, reduce inflammation',
    benefitCn: '舒缓修护肌肤，提供抗氧化保护，提亮肤色，减少肌肤炎症',
  },
  {
    icon: Sparkles,
    title: 'UltiGlow™ Bio-Color Series',
    titleCn: '生物合成色彩系列',
    count: 6,
    ingredients: 'Bio-Synthetic Pigments, Natural Colorants, Plant-Derived Dyes',
    ingredientDetail: 'Bio-Synthetic Pigments（生物合成色素，安全着色，无重金属风险）、Natural Colorants（天然着色剂，温和不刺激）、Plant-Derived Dyes（植物来源染料，持久显色，亲肤性好）',
    benefitEn: 'Safe and natural coloring, long-lasting makeup effect, skin-friendly formula, no heavy metal residues',
    benefitCn: '安全天然着色，持久妆容效果，亲肤温和配方，无重金属残留风险',
  },
];

const keyIngredients = [
  { name: 'Recombinant Human Collagen', purity: '≥95%', benefit: 'Skin regeneration', source: 'Biosynthesis' },
  { name: 'Ectoine', purity: '≥99%', benefit: 'Cell repair, hydration', source: 'Halophilic bacteria' },
  { name: 'Hyaluronic Acid', purity: 'Multi-MW', benefit: 'Deep hydration', source: 'Fermentation' },
  { name: 'Ergothioneine', purity: '≥98%', benefit: 'Antioxidant', source: 'Biosynthesis' },
  { name: 'Alpha-Bisabolol', purity: '≥95%', benefit: 'Soothing', source: 'Natural extraction' },
  { name: 'Copper Peptide', purity: '≥98%', benefit: 'Skin repair', source: 'Biosynthesis' },
  { name: 'N-Acetyl Glucosamine', purity: '≥98%', benefit: 'Barrier repair', source: 'Biosynthesis' },
  { name: 'Centella Asiatica Extract', purity: '≥90%', benefit: 'Soothing, repair', source: 'Plant extraction' },
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
  const totalProducts = ultiGlowSeries.reduce((sum, s) => sum + s.count, 0);

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
                Premium biosynthesis-based skincare powered by science. 
                10 series with {totalProducts} targeted solutions for radiant, healthy skin.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>10</p>
                  <p className="text-sm text-gray-600">Bio-Synth Series</p>
                </div>
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>{totalProducts}</p>
                  <p className="text-sm text-gray-600">Skincare Products</p>
                </div>
                <div>
                  <p className="text-3xl font-normal" style={{ color: '#A1BA80' }}>6+</p>
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

      {/* Product Series Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              UltiGlow™ Bio-Synth Series
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Biosynthesis-powered skincare solutions for every skin concern
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {ultiGlowSeries.map((series, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6" style={{ backgroundColor: '#f8faf5' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#d7e1c7' }}>
                        <series.icon className="w-6 h-6" style={{ color: '#A1BA80' }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-normal text-gray-900 mb-1">{series.title}</h3>
                        <p className="text-sm" style={{ color: '#A1BA80' }}>{series.titleCn}</p>
                        <p className="text-xs text-gray-500 mt-1">{series.count} Products</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Key Ingredients</p>
                      <div className="flex flex-wrap gap-1">
                        {series.ingredients.split(', ').map((ing, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Benefits</p>
                        <p className="text-sm text-gray-700">{series.benefitEn}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">功效说明</p>
                        <p className="text-sm text-gray-600">{series.benefitCn}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Table */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
              Series Overview
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead style={{ backgroundColor: '#A1BA80' }}>
                <tr>
                  <th className="px-4 py-4 text-left font-normal text-white text-sm">Series</th>
                  <th className="px-4 py-4 text-left font-normal text-white text-sm">系列名称</th>
                  <th className="px-4 py-4 text-center font-normal text-white text-sm">Products</th>
                  <th className="px-4 py-4 text-left font-normal text-white text-sm">Key Ingredients</th>
                  <th className="px-4 py-4 text-left font-normal text-white text-sm">Benefits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {ultiGlowSeries.map((series, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4">
                      <p className="font-medium text-gray-900 text-sm">{series.title}</p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-sm" style={{ color: '#A1BA80' }}>{series.titleCn}</p>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>
                        {series.count} 款
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-xs text-gray-600">{series.ingredients}</p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-xs text-gray-600">{series.benefitCn}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Ingredients */}
      <section className="py-20 bg-gray-50">
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
