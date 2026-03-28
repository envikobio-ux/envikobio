import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Lightbulb, Beaker, Microscope, TrendingUp, FlaskConical, Shield, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Enviko Biotechnology - a technology company integrating bioscience and nutrition expertise, dedicated to providing high-quality health products.',
};

const timeline = [
  {
    year: '2023.07',
    title: 'Company Founded',
    description: 'Shanghai Enviko Biotechnology Co., Ltd. was officially established, embarking on an innovative journey integrating biotechnology and nutrition science.',
  },
  {
    year: '2023.10',
    title: 'UltiWell Brand Registered',
    description: 'UltiWell® brand was successfully registered and began production, positioned as a health brand pursuing ultimate wellness.',
  },
  {
    year: '2024.12',
    title: 'Free Trade Zone Office',
    description: 'The company moved to Shengda Tiandi in Shanghai Waigaoqiao Free Trade Zone, expanding international business operations.',
  },
  {
    year: '2025',
    title: 'Global Platform Expansion',
    description: 'Expanded presence on LinkedIn, Instagram, Facebook, echemi and chemicalbook platforms for global marketing.',
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Centered on technological innovation, combining biosynthesis technology with advanced R&D to create science-leading health products.',
  },
  {
    icon: Users,
    title: 'Personalization',
    description: 'Providing personalized health and beauty solutions to meet each customer\'s unique needs and aspirations.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Strict quality control processes ensure all raw materials and finished products meet food safety standards and regulatory requirements.',
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Committed to environmental protection and sustainable development, developing and promoting eco-friendly production methods and packaging materials.',
  },
];

const businessAreas = [
  {
    icon: Beaker,
    title: 'Biotechnology R&D',
    description: 'Utilizing advanced biotechnology for food ingredient research and development, developing novel fermentation technologies, enzyme engineering, and gene editing technologies.',
  },
  {
    icon: Microscope,
    title: 'Food Ingredient Formulation',
    description: 'Providing customized formulation services, researching and developing novel functional food ingredients rich in specific vitamins, minerals, or bioactive components.',
  },
  {
    icon: FlaskConical,
    title: 'Dosage Form Innovation',
    description: 'Developing diverse dosage forms such as softgels, tablets, powders, and liquids, innovating packaging technologies to enhance product stability.',
  },
  {
    icon: TrendingUp,
    title: 'Market Trend Research',
    description: 'Monitoring global food technology and nutritional supplement market trends to predict and meet future demands.',
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
              About Enviko
            </h1>
            <p className="text-lg text-gray-600">
              Shanghai Enviko Biotechnology Co., Ltd. was founded in July 2023, integrating cutting-edge knowledge in bioscience and nutrition.
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
                alt="Laboratory"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-normal text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                To provide the highest quality health products to users worldwide, improving quality of life through scientific methods, enhancing immunity and resistance, and preventing and addressing various health concerns.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 mt-6">
                <h3 className="text-xl font-normal text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To become an enterprise that produces high-quality, pure, and natural health products through innovative biosynthesis technology. We firmly believe that premium health supplements can help people achieve healthier and better lives.
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                The company has a team of professional scientists, biotechnology engineers, and nutrition experts dedicated to developing and producing exceptional health products.
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
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Enviko's path of growth and innovation
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
              Business Scope
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing comprehensive biotechnology solutions for our clients
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
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technology Leadership, Beauty & Confidence
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
              UltiWell® Brand
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              UltiWell® is positioned as a trend-setting health seeker, dedicated to creating a brand new high-quality health supplement experience, providing innovative health solutions for customers seeking comprehensive health and wellness.
            </p>
            <div className="bg-brand-50 rounded-2xl p-8">
              <p className="text-brand-700 font-normal text-xl mb-2">Brand Philosophy</p>
              <p className="text-brand-600 text-2xl font-light">「Ultimate Wellness」</p>
              <p className="text-brand-600 mt-2">Pursuing ultimate wellness and health</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
