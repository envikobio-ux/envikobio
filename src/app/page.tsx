import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Beaker, 
  Leaf, 
  Microscope, 
  Factory, 
  TrendingUp, 
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const stats = [
  { value: '0+', label: 'Products', suffix: '' },
  { value: '100+', label: 'Units Delivered', suffix: '' },
  { value: '5+', label: 'Years Experience', suffix: '' },
  { value: '1+', label: 'Years of Innovation', suffix: '' },
];

const researchAreas = [
  {
    icon: Beaker,
    title: 'Pharmaceutical Biosynthesis',
    description: 'Developing innovative biosynthesis pathways for producing complex pharmaceutical compounds, reducing costs and environmental impact.',
    href: '/solutions#pharmaceuticals',
  },
  {
    icon: Leaf,
    title: 'Cosmetic Biosynthesis',
    description: 'Creating sustainable and natural cosmetic ingredients through biosynthesis, replacing environmentally harmful alternatives.',
    href: '/solutions#cosmetics',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Agriculture',
    description: 'Researching bio-based pesticides and fertilizers to promote sustainable agriculture and minimize environmental damage.',
    href: '/solutions#agriculture',
  },
];

const technologies = [
  {
    icon: Factory,
    title: 'Advanced Fermentation Technology',
    description: 'Precise control over biosynthesis processes, optimizing yield and product quality for a wide range of bio-based products.',
  },
  {
    icon: Microscope,
    title: 'High-Resolution Analytics',
    description: 'State-of-the-art analytical techniques ensuring the purity and efficacy of our biosynthesized products.',
  },
  {
    icon: Award,
    title: 'Metabolic Engineering Expertise',
    description: 'Optimizing biosynthetic pathways through metabolic engineering to create customized solutions for specific needs.',
  },
];

const features = [
  'Sustainable Practices: Reducing environmental impact through bio-based solutions',
  'Improved Health: Developing safer and more effective pharmaceutical products',
  'Enhanced Agriculture: Creating sustainable and efficient agricultural solutions',
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                for a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                  Sustainable Future
                </span>{' '}
                with Enviko
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Enviko is dedicated to revolutionizing product development through advanced biosynthesis techniques. 
                We serve diverse sectors, including pharmaceuticals, cosmetics, food, pesticides, and agriculture, 
                delivering sustainable and innovative solutions tailored to meet your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/about">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/solutions">
                    Our Solutions
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 p-1">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center">
                      <Beaker className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-600 text-lg">
                      Pioneering Sustainable<br />Biosynthesis Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Research Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enviko is dedicated to pioneering research across various domains of biosynthesis, 
              developing sustainable and efficient solutions for diverse industries.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <area.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {area.description}
                  </p>
                  <Button asChild variant="link" className="text-green-600 p-0">
                    <Link href={area.href}>
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage advanced technologies to deliver innovative biosynthesis solutions, 
              remaining at the forefront of the industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-600">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Making a Tangible Difference Through Biosynthesis
              </h2>
              <p className="text-lg text-green-50 mb-8">
                At Enviko, we are committed to creating a positive impact on global health and sustainability. 
                Our biosynthesis solutions are designed to address critical challenges.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-200 flex-shrink-0 mt-0.5" />
                    <span className="text-green-50">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Beaker className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Joint Research Programs</h3>
                    <p className="text-sm text-green-100">Partnering with universities to explore novel pathways</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Technology Licensing</h3>
                    <p className="text-sm text-green-100">Accessing advanced technologies for production efficiency</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Market Expansion</h3>
                    <p className="text-sm text-green-100">Collaborating with distributors worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Partner with Enviko?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us as we continue to pioneer sustainable biotech solutions that transform industries 
            and contribute to a healthier planet.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
