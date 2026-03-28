import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Beaker,
  ArrowRight,
  CheckCircle,
  FlaskConical,
  Pill,
  TestTube,
  Microscope,
  Download
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pharmaceutical Products',
  description: 'High-quality bio-based pharmaceutical compounds and bio-active ingredients produced through advanced biosynthesis techniques.',
};

const pharmaceuticalProducts = [
  {
    icon: FlaskConical,
    name: 'Long-Chain Dicarboxylic Acids (DC10-DC18)',
    specification: 'Industrial/Pharmaceutical Grade',
    applications: ['High-performance nylon', 'Hot melt adhesives', 'Fragrances'],
  },
  {
    icon: Pill,
    name: '7-ACA',
    specification: 'Pharmaceutical Grade',
    applications: ['Cephalosporin antibiotic intermediate'],
  },
  {
    icon: TestTube,
    name: 'L-Alanine / L-Valine',
    specification: 'Food/Pharmaceutical Grade',
    applications: ['Amino acid infusions', 'Food additives', 'Nutritional supplements'],
  },
  {
    icon: TestTube,
    name: 'Glutamine',
    specification: 'Pharmaceutical Grade',
    applications: ['Intestinal nutritional support'],
  },
];

const bioActiveIngredients = [
  {
    name: 'Alpha-Bisabolol',
    purity: '≥95%',
    efficacy: 'Anti-inflammatory, soothing, skin repair',
  },
  {
    name: 'Ergothioneine',
    purity: '≥98%',
    efficacy: 'Antioxidant, anti-photoaging',
  },
  {
    name: 'Ectoine',
    purity: '≥99%',
    efficacy: 'Cell repair, moisturization',
  },
  {
    name: 'Squalene/Squalane',
    purity: '≥99%',
    efficacy: 'Moisturizing, skin barrier repair',
  },
  {
    name: 'Hyaluronic Acid',
    purity: 'Cosmetic/Food/Medical Grade',
    efficacy: 'Moisturization, joint lubrication',
  },
  {
    name: 'Recombinant Humanized Collagen',
    purity: 'Type III/Type I',
    efficacy: 'Skin repair, medical implant materials',
  },
  {
    name: '5-HTP (5-Hydroxytryptophan)',
    purity: '≥98%',
    efficacy: 'Mood regulation, sleep aid',
  },
  {
    name: 'Inositol',
    purity: '≥98%',
    efficacy: 'Vitamin B complex, liver protection',
  },
];

export default function PharmaceuticalsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/pharma-research.jpeg"
            alt="Pharmaceutical Research"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Beaker className="w-4 h-4" />
                Pharmaceuticals & Bio-Active Ingredients
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Pharmaceutical Products
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                High-quality pharmaceutical compounds and bio-active ingredients produced through advanced biosynthesis techniques, 
                with &gt;95% purity and 100% traceable ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact">
                    Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/Envikobio-Product-Catalogue-2026.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Catalogue
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/pharma-research.jpeg"
                alt="Pharmaceutical Laboratory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pharmaceutical Intermediates */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pharmaceutical Intermediates & Raw Materials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              High-purity pharmaceutical intermediates and raw materials for drug manufacturing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pharmaceuticalProducts.map((product, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <product.icon className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-green-600 text-sm font-medium mb-3">
                        {product.specification}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bio-Active Ingredients */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Bio-Active Ingredients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Premium bio-active compounds for pharmaceuticals, nutraceuticals, and cosmetics
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Product Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Purity</th>
                  <th className="px-6 py-4 text-left font-semibold">Core Efficacy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {bioActiveIngredients.map((ingredient, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{ingredient.name}</td>
                    <td className="px-6 py-4 text-green-600 font-medium">{ingredient.purity}</td>
                    <td className="px-6 py-4 text-gray-600">{ingredient.efficacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Quality Commitment
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                All products come with complete COA (Certificate of Analysis) and comply with ISO9001, ISO22000, GMP quality standards.
              </p>
              <div className="space-y-4">
                {[
                  'Content/Purity: ≥95.0% - 99.9% (HPLC/GC)',
                  'Total Plate Count: ≤1000 CFU/g',
                  'Heavy Metals: Complies with industry standards',
                  'Solvent Residue: ≤5000 ppm',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Technical Services</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Custom Strain Development</span>
                  <span className="text-green-100 text-sm">3-6 months</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Process Package Transfer</span>
                  <span className="text-green-100 text-sm">6-12 months</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>CDMO Production</span>
                  <span className="text-green-100 text-sm">Customized</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pilot Scale-up Services</span>
                  <span className="text-green-100 text-sm">2-4 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-lab.jpeg"
            alt="Laboratory"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-emerald-800/90"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need a Custom Pharmaceutical Solution?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Our expert team can develop tailored biosynthesis solutions for your specific requirements.
            R&D institutions eligible for ≤100g free samples.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
            <Link href="/contact">
              Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
