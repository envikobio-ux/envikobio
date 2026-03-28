import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Beaker, 
  Leaf, 
  Factory,
  Microscope,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Explore Enviko\'s biosynthesis solutions for pharmaceuticals, cosmetics, and sustainable agriculture.',
};

const solutions = [
  {
    id: 'pharmaceuticals',
    icon: Beaker,
    title: 'Pharmaceutical Biosynthesis',
    description: 'We are developing innovative biosynthesis pathways for producing complex pharmaceutical compounds. This research aims to reduce production costs and environmental impact while enhancing drug efficacy and availability.',
    features: [
      'Active Pharmaceutical Ingredients (APIs) production',
      'Bioactive compound synthesis',
      'Cost-effective manufacturing processes',
      'Reduced environmental footprint',
      'Custom compound development',
      'Quality-controlled production',
    ],
    image: '/pharma-research.jpeg',
  },
  {
    id: 'cosmetics',
    icon: Leaf,
    title: 'Cosmetic Biosynthesis',
    description: 'Our research focuses on creating sustainable and natural cosmetic ingredients through biosynthesis. We aim to replace traditional, environmentally harmful ingredients with bio-based alternatives that are safe and effective.',
    features: [
      'Natural preservatives and antioxidants',
      'Bio-based moisturizers and emollients',
      'Sustainable sourcing methods',
      'Hypoallergenic formulations',
      'Clean beauty solutions',
      'Custom ingredient development',
    ],
    image: '/cosmetic-ingredients.jpeg',
  },
  {
    id: 'agriculture',
    icon: Factory,
    title: 'Sustainable Agriculture',
    description: 'We are researching bio-based pesticides and fertilizers to promote sustainable agriculture practices. Our goal is to reduce the reliance on synthetic chemicals, enhancing crop yields while minimizing environmental damage.',
    features: [
      'Bio-pesticides and bio-fertilizers',
      'Plant growth promoters',
      'Soil health enhancers',
      'Organic farming solutions',
      'Environmental sustainability',
      'Integrated pest management',
    ],
    image: '/agriculture-sustainable.jpeg',
  },
];

const technologies = [
  {
    icon: Factory,
    title: 'Advanced Fermentation Technology',
    description: 'Our fermentation technology allows for precise control over the biosynthesis process, optimizing yield and product quality.',
    image: '/fermentation-tech.jpeg',
  },
  {
    icon: Microscope,
    title: 'High-Resolution Analytics',
    description: 'We employ state-of-the-art analytical techniques to ensure the purity and efficacy of our biosynthesized products.',
    image: '/analytics-equipment.jpeg',
  },
  {
    icon: Beaker,
    title: 'Metabolic Engineering',
    description: 'Our team utilizes metabolic engineering to optimize biosynthetic pathways, creating customized solutions for specific needs.',
    image: '/hero-lab.jpeg',
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/fermentation-tech.jpeg"
            alt="Solutions Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Custom Biosynthesis Solutions
            </h1>
            <p className="text-lg text-gray-600">
              At Enviko, we leverage advanced technologies to deliver innovative biosynthesis solutions. 
              Our commitment to research and development ensures we remain at the forefront of the industry, 
              providing the most efficient and sustainable processes available.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={solution.id} id={solution.id} className="scroll-mt-20">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <solution.icon className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                      {solution.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      {solution.description}
                    </p>
                    <Card className="border-0 shadow-lg mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Key Features
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies driving innovation in biosynthesis
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <tech.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/agriculture-sustainable.jpeg"
            alt="Sustainable Future"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-emerald-800/90"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Partner with Enviko to develop sustainable biosynthesis solutions tailored to your specific needs.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
