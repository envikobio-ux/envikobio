import Link from 'next/link';
import Image from 'next/image';
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
  { value: 'UltiWell®', label: 'Brand' },
  { value: '2023', label: 'Founded' },
  { value: '全球', label: 'Global Markets' },
  { value: '100%', label: 'Quality Commitment' },
];

const researchAreas = [
  {
    icon: Beaker,
    title: 'Pharmaceutical Biosynthesis',
    description: 'Developing innovative biosynthesis pathways for producing complex pharmaceutical compounds, reducing costs and environmental impact.',
    href: '/solutions#pharmaceuticals',
    image: '/pharma-research.jpeg',
  },
  {
    icon: Leaf,
    title: 'Cosmetic Biosynthesis',
    description: 'Creating sustainable and natural cosmetic ingredients through biosynthesis, replacing environmentally harmful alternatives.',
    href: '/solutions#cosmetics',
    image: '/cosmetic-ingredients.jpeg',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Agriculture',
    description: 'Researching bio-based pesticides and fertilizers to promote sustainable agriculture and minimize environmental damage.',
    href: '/solutions#agriculture',
    image: '/agriculture-sustainable.jpeg',
  },
];

const technologies = [
  {
    icon: Factory,
    title: 'Advanced Fermentation Technology',
    description: 'Precise control over biosynthesis processes, optimizing yield and product quality for a wide range of bio-based products.',
    image: '/fermentation-tech.jpeg',
  },
  {
    icon: Microscope,
    title: 'High-Resolution Analytics',
    description: 'State-of-the-art analytical techniques ensuring the purity and efficacy of our biosynthesized products.',
    image: '/analytics-equipment.jpeg',
  },
  {
    icon: Award,
    title: 'Metabolic Engineering Expertise',
    description: 'Optimizing biosynthetic pathways through metabolic engineering to create customized solutions for specific needs.',
    image: '/hero-lab.jpeg',
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
      <section className="relative bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-4">
                <span style={{ color: '#8C8C8C' }}>
                  Sustainable Future
                </span>{' '}
                <span style={{ color: '#A1BA80' }}>
                  Enviko
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-xl animate-fade-in-up delay-200 opacity-0" style={{animationFillMode: 'forwards'}}>
                Enviko is dedicated to revolutionizing product development through advanced biosynthesis techniques. 
                We serve pharmaceuticals, cosmetics, food, and agriculture sectors with innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300 opacity-0" style={{animationFillMode: 'forwards'}}>
                <Button asChild size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ backgroundColor: '#A1BA80' }}>
                  <Link href="/about">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Link href="/solutions">
                    Our Solutions
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up delay-400 opacity-0" style={{animationFillMode: 'forwards'}}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl animate-float">
                <Image
                  src="/hero-lab.jpeg"
                  alt="Biotechnology Laboratory"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6">
                  <p className="text-white text-lg font-medium text-center px-4">
                    Pioneering Sustainable Biosynthesis Solutions
                  </p>
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
              <div key={index} className="text-center animate-fade-in-up opacity-0" style={{animationDelay: `${index * 100 + 500}ms`, animationFillMode: 'forwards'}}>
                <div className="text-4xl sm:text-5xl font-normal mb-2 transition-all duration-300 hover:scale-110 cursor-default" style={{ color: '#A1BA80' }}>
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
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
              Our Research Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enviko is dedicated to pioneering research across various domains of biosynthesis, 
              developing sustainable and efficient solutions for diverse industries.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 -mt-14 relative z-10 border-4 border-white" style={{ backgroundColor: '#d7e1c7' }}>
                    <area.icon className="w-7 h-7" style={{ color: '#A1BA80' }} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {area.description}
                  </p>
                  <Button asChild variant="link" className="p-0" style={{ color: '#A1BA80' }}>
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
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage advanced technologies to deliver innovative biosynthesis solutions, 
              remaining at the forefront of the industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="relative h-48 rounded-t-xl overflow-hidden">
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <tech.icon className="w-6 h-6" style={{ color: '#A1BA80' }} />
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-b-xl">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/agriculture-sustainable.jpeg"
            alt="Sustainable Agriculture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/90"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-medium mb-6" style={{ color: '#A1BA80' }}>
                Making a Tangible Difference Through Biosynthesis
              </h2>
              <p className="text-lg mb-8" style={{ color: '#A1BA80', opacity: 0.85 }}>
                At Enviko, we are committed to creating a positive impact on global health and sustainability. 
                Our biosynthesis solutions are designed to address critical challenges.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#A1BA80', opacity: 0.7 }} />
                    <span style={{ color: '#A1BA80', opacity: 0.9 }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8 border border-white/20" style={{ backgroundColor: '#A1BA80' }}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center">
                    <Beaker className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Joint Research Programs</h3>
                    <p className="text-sm text-white/80">Partnering with universities to explore novel pathways</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Technology Licensing</h3>
                    <p className="text-sm text-white/80">Accessing advanced technologies for production efficiency</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Market Expansion</h3>
                    <p className="text-sm text-white/80">Collaborating with distributors worldwide</p>
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
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-6">
            Ready to Partner with Enviko?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us as we continue to pioneer sustainable biotech solutions that transform industries 
            and contribute to a healthier planet.
          </p>
          <Button asChild size="lg" style={{ backgroundColor: '#A1BA80' }}>
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
