import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Lightbulb, Beaker, Microscope, TrendingUp, FlaskConical, Shield, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Enviko Biotechnology - a technology company integrating bioscience and nutrition expertise, dedicated to providing high-quality health products.',
};

// 真实的公司里程碑（根据PDF文档）
const timeline = [
  {
    year: '2023.07',
    title: '公司成立',
    description: '上海埃卫克生物科技有限公司正式成立，开启生物科技与营养学融合的创新之旅。',
  },
  {
    year: '2023.10',
    title: 'UltiWell品牌注册',
    description: 'UltiWell®品牌成功注册并开始生产，定位为追求极致美好的健康品牌。',
  },
  {
    year: '2024.01',
    title: '线上营销启动',
    description: '小红书、抖音、微信小程序等线上渠道正式开始营销运营。',
  },
  {
    year: '2024.12',
    title: '入驻保税区',
    description: '公司入驻上海外高桥保税区盛大天地，拓展国际化业务版图。',
  },
];

const values = [
  {
    icon: Lightbulb,
    title: '科技创新',
    description: '以科技创新为核心，将生物合成技术与先进研发相结合，打造科技领先的保健产品。',
  },
  {
    icon: Users,
    title: '个性化定制',
    description: '提供个性化的健康美丽方案，满足每位客户独特的需求与追求。',
  },
  {
    icon: Shield,
    title: '品质保障',
    description: '严格的质量控制流程，确保所有原料和成品符合食品安全标准和法规要求。',
  },
  {
    icon: Globe,
    title: '可持续发展',
    description: '重视环境保护和可持续发展，开发和推广环保的生产方法和包装材料。',
  },
];

const businessAreas = [
  {
    icon: Beaker,
    title: '生物技术研发',
    description: '利用先进的生物技术进行食品原料的研究与开发，开发新型发酵技术、酶工程和基因编辑技术。',
  },
  {
    icon: Microscope,
    title: '食品原料配方',
    description: '提供定制化的配方服务，研究和开发新型功能性食品原料，如富含特定维生素、矿物质或生物活性成分。',
  },
  {
    icon: FlaskConical,
    title: '剂型创新',
    description: '开发多样化的剂型，如软胶囊、片剂、粉剂、液体等，创新包装技术以提高产品稳定性。',
  },
  {
    icon: TrendingUp,
    title: '市场趋势研究',
    description: '关注全球食品科技和营养补充品的市场趋势，预测和满足未来的需求。',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
              关于埃卫克
            </h1>
            <p className="text-lg text-gray-600">
              上海埃卫克生物科技有限公司创立于2023年7月，是一家融合生物科学和营养学前沿知识的科技公司。
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/hero-lab.jpeg"
                alt="实验室"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-normal text-gray-900 mb-6">
                我们的使命
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                为全球用户提供最优质的保健产品，通过科学的方法改善生活质量，提高身体免疫力和抵抗力，预防和改善各种健康问题。
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 mt-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">我们的愿景</h3>
                <p className="text-gray-600">
                  通过创新的生物合成技术生产高品质、纯净、天然保健产品的企业。坚信通过优质的保健食品可以帮助人们实现更健康、更美好的生活。
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                公司拥有一支由专业科学家、生物技术工程师和营养学专家组成的团队，致力于开发和生产出卓越的保健产品。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">
              发展历程
            </h2>
            <p className="text-lg text-gray-600">
              埃卫克的成长与创新之路
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 inline-block">
                      <div className="text-brand-600 font-medium text-lg mb-2">{item.year}</div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-brand-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">
              业务范围
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              我们致力于为客户提供全方位的生物技术解决方案
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessAreas.map((area, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                    <area.icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">
              核心价值观
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              科技领先、美丽自信
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-normal text-gray-900 mb-6">
              UltiWell® 品牌
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              UltiWell®定位为突破传统、引领潮流的健康追求者，致力于打造全新的高品质保健食品体验，为寻求全方位健康与美好生活的客户提供创新的保健解决方案。
            </p>
            <div className="bg-brand-50 rounded-2xl p-8">
              <p className="text-brand-700 font-medium text-xl mb-2">品牌理念</p>
              <p className="text-brand-600 text-2xl font-light">「Ultimate Wellness」</p>
              <p className="text-brand-600 mt-2">追求极致美好和健康</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
