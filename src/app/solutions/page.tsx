import { Metadata } from 'next';
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
  },
];

const technologies = [
  {
    icon: Factory,
    title: 'Advanced Fermentation Technology',
    description: 'Our fermentation technology allows for precise control over the biosynthesis process, optimizing yield and product quality.',
  },
  {
    icon: Microscope,
    title: 'High-Resolution Analytics',
    description: 'We employ state-of-the-art analytical techniques to ensure the purity and efficacy of our biosynthesized products.',
  },
  {
    icon: Beaker,
    title: 'Metabolic Engineering',
    description: 'Our team utilizes metabolic engineering to optimize biosynthetic pathways, creating customized solutions for specific needs.',
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                      <solution.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                      {solution.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      {solution.description}
                    </p>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card className="border-0 shadow-xl">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                          Key Features
                        </h3>
                        <div className="grid gap-3">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
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
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg text-green-50 mb-8">
            Partner with Enviko to develop sustainable biosynthesis solutions tailored to your specific needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
