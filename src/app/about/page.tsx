import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Enviko\'s mission, history, and commitment to sustainable biosynthesis solutions.',
};

const timeline = [
  {
    year: '2019',
    title: 'Foundation',
    description: 'Shanghai Enviko Biotechnology Co., Ltd. was established with a vision for sustainable biosynthesis.',
  },
  {
    year: '2020',
    title: 'R&D Expansion',
    description: 'Expanded research facilities and established partnerships with leading universities.',
  },
  {
    year: '2021',
    title: 'Product Launch',
    description: 'Successfully launched first bio-based pharmaceutical compounds.',
  },
  {
    year: '2022',
    title: 'Market Growth',
    description: 'Expanded into cosmetics and agricultural sectors with innovative solutions.',
  },
  {
    year: '2023',
    title: 'Global Reach',
    description: 'Established international partnerships and expanded distribution networks.',
  },
];

const values = [
  {
    icon: Award,
    title: 'Scientific Excellence',
    description: 'We maintain the highest standards in research and development, ensuring every product meets rigorous quality benchmarks.',
  },
  {
    icon: Target,
    title: 'Sustainability',
    description: 'Environmental responsibility is at the core of everything we do, from sourcing to production.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of partnerships, working closely with clients, universities, and industry leaders.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuous improvement and breakthrough discoveries drive our mission to revolutionize biosynthesis.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Journey and Mission
            </h1>
            <p className="text-lg text-gray-600">
              At Enviko, we are committed to advancing sustainable biosynthesis solutions that revolutionize industries. 
              Our history is rooted in scientific excellence and innovation, driving us to develop environmentally 
              friendly products for diverse sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With a dedicated team of experts, Enviko continuously pushes the boundaries of biotechnology 
                to create high-quality, sustainable bio-based products that meet industry needs and promote 
                environmental responsibility.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our core values of scientific excellence, sustainability, and collaboration guide every project 
                we undertake, ensuring innovative solutions that benefit both industry and the planet.
              </p>
              <p className="text-lg text-gray-600">
                Shanghai Enviko Biotechnology Co., Ltd.'s history of innovation and our unwavering commitment 
                to sustainability define our identity as a leader in biosynthesis technology.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-green-50 text-lg">
                To be the global leader in sustainable biosynthesis, transforming industries through 
                innovative bio-based solutions that contribute to a healthier planet and improved quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our History
            </h2>
            <p className="text-lg text-gray-600">
              A journey of innovation and sustainable growth
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 inline-block">
                      <div className="text-green-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Enviko, we are driven by a commitment to innovation, sustainability, and improving lives 
              through biosynthesis. Our values guide every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A dedicated team of scientists, researchers, and industry experts driving innovation in biosynthesis
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Expert Team Member</h3>
                  <p className="text-green-600 text-sm mb-3">Research Director</p>
                  <p className="text-gray-600 text-sm">
                    Leading research initiatives in sustainable biosynthesis with years of industry experience.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
