import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Factory,
  Award,
  Globe,
  Users,
  Beaker,
  ShieldCheck,
  Truck,
  Package,
  Microscope,
  ArrowRight,
  CheckCircle,
  Clock,
  Leaf,
  FileText,
  Download
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Factory Strength & Production Capabilities | Alvokor Bio',
  description: 'Alvokor Biotechnology production facility overview. Fermentation-based bioactive raw material manufacturing with ISO 9001 certification. Monthly capacity 10,000+ kg. Full export compliance for India and Southeast Asia.',
};

// Factory stats
const factoryStats = [
  { value: '10,000+', unit: 'kg', label: 'Monthly Production Capacity', icon: Factory },
  { value: '2023', unit: '', label: 'Established', icon: Award },
  { value: 'ISO 9001', unit: '', label: 'Quality Management System', icon: ShieldCheck },
  { value: '24/7', unit: '', label: 'Quality Monitoring', icon: Clock },
];

// Production capabilities
const productionCapabilities = [
  {
    title: 'Fermentation Production Line',
    description: 'State-of-the-art fermentation tanks with precise temperature and pH control for optimal bioactive compound production.',
    features: ['Automated process control', 'Real-time monitoring', 'Scalable from pilot to commercial', 'Batch consistency guaranteed'],
    image: '/fermentation-tech.jpeg',
  },
  {
    title: 'Quality Control Laboratory',
    description: 'Advanced analytical equipment ensuring product purity and compliance with international standards.',
    features: ['HPLC purity analysis', 'Heavy metal testing', 'Microbiology testing', 'Residual solvent detection'],
    image: '/analytics-equipment.jpeg',
  },
  {
    title: 'Packaging & Storage',
    description: 'Clean room packaging environment with proper storage conditions for bioactive stability.',
    features: ['Climate-controlled storage', 'Multiple packaging options', 'Batch traceability', 'Secure inventory management'],
    image: '/hero-lab.jpeg',
  },
];

// Supply options
const supplyOptions = [
  {
    type: 'Trial Order',
    qty: '1-5 kg',
    leadTime: '3-5 days',
    useCase: 'R&D testing, formulation development',
    price: 'Standard pricing',
    features: ['Free sample available', 'Technical support', 'COA included'],
  },
  {
    type: 'Regular Order',
    qty: '5-50 kg',
    leadTime: '5-10 days',
    useCase: 'Production batches, regular supply',
    price: 'Competitive pricing',
    features: ['Volume discount', 'Priority production', 'Full documentation'],
  },
  {
    type: 'Bulk Order',
    qty: '50-100+ kg',
    leadTime: '7-15 days',
    useCase: 'Large-scale production, OEM partnership',
    price: 'Custom pricing',
    features: ['Contract manufacturing', 'Scheduled delivery', 'Dedicated account manager'],
  },
];

// Export markets
const exportMarkets = [
  { region: 'India', share: '40%', products: 'Cosmetic actives, Whitening ingredients', documents: 'Full customs support' },
  { region: 'Vietnam', share: '25%', products: 'Antioxidants, Moisturizing agents', documents: 'ASEAN compliance' },
  { region: 'Thailand', share: '15%', products: 'Anti-aging actives, Plant extracts', documents: 'Thai FDA approved' },
  { region: 'Europe', share: '10%', products: 'REACH certified ingredients', documents: 'REACH registration' },
  { region: 'Others', share: '10%', products: 'Various bioactives', documents: 'Custom documentation' },
];

// Certifications
const certifications = [
  { name: 'ISO 9001:2015', desc: 'Quality Management System', scope: 'Production & Quality Control' },
  { name: 'GMP', desc: 'Good Manufacturing Practice', scope: 'Pharmaceutical-grade production' },
  { name: 'REACH', desc: 'EU Chemical Regulation', scope: 'European market compliance' },
  { name: 'SGS Verified', desc: 'Third-party Quality Verification', scope: 'Product purity & safety' },
  { name: 'FDA Registered', desc: 'US Food & Drug Administration', scope: 'Food & cosmetic applications' },
];

// Quality process steps
const qualitySteps = [
  { step: '1', title: 'Raw Material Inspection', desc: 'All inputs tested before production' },
  { step: '2', title: 'In-process Monitoring', desc: 'Continuous QC during fermentation' },
  { step: '3', title: 'Final Product Testing', desc: 'Purity, heavy metals, microbiology' },
  { step: '4', title: 'Batch Documentation', desc: 'Complete COA, TDS, MSDS generation' },
  { step: '5', title: 'Release & Shipment', desc: 'Only after full compliance verification' },
];

export default function FactoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
              Factory Strength & Production Capabilities
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fermentation-based production facility for premium bioactive raw materials. 
              ISO 9001 certified, full export compliance for India and Southeast Asia markets.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {factoryStats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-green-600" />
                  <div className="text-2xl font-medium text-gray-900 mb-1">
                    {stat.value}{stat.unit}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Facilities */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-gray-900 mb-4 text-center">Production Facilities</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our production facility combines advanced fermentation technology with strict quality control,
            ensuring consistent high-purity bioactive ingredients.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {productionCapabilities.map((cap, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={cap.image} alt={cap.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{cap.title}</h3>
                  <p className="text-gray-600 mb-4">{cap.description}</p>
                  <div className="space-y-2">
                    {cap.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-gray-900 mb-4 text-center">Quality Control Process</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Every batch undergoes comprehensive quality verification before release.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            {qualitySteps.map((step, index) => (
              <div key={index} className="flex-1 text-center relative">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-600 text-white flex items-center justify-center font-medium text-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
                {index < qualitySteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-green-200 transform translate-x-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Options */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-gray-900 mb-4 text-center">Supply Options</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Flexible supply solutions from trial quantities to bulk production partnerships.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {supplyOptions.map((option, index) => (
              <Card key={index} className={`border-0 shadow-lg ${index === 1 ? 'ring-2 ring-green-600' : ''}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{option.type}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Package className="w-5 h-5 text-green-600" />
                    <span className="text-lg font-medium text-green-700">{option.qty}</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Lead Time</span>
                      <span className="font-medium text-gray-900">{option.leadTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Use Case</span>
                      <span className="text-gray-700">{option.useCase}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Pricing</span>
                      <span className="font-medium text-gray-900">{option.price}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-gray-900 mb-4 text-center">Export Markets</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Primary markets for our bioactive raw materials, with full customs documentation support.
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            {exportMarkets.map((market, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 mx-auto mb-4 text-green-600" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{market.region}</h3>
                  <p className="text-2xl font-medium text-green-600 mb-3">{market.share}</p>
                  <p className="text-sm text-gray-600 mb-2">{market.products}</p>
                  <p className="text-xs text-gray-500">{market.documents}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-gray-900 mb-4 text-center">Certifications & Compliance</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Full compliance documentation for international market access.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-green-600" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{cert.desc}</p>
                  <p className="text-xs text-gray-500">{cert.scope}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-16 bg-green-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-medium mb-4">Download Factory Documentation</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Get complete factory information package including production capabilities, certifications, and export documentation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-green-700 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Factory Overview PDF
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Download className="mr-2 h-5 w-5" />
                Certificate Package
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Ready to Partner with Alvokor?</h3>
              <p className="text-gray-600">Contact us for factory audit, sample testing, or bulk partnership.</p>
            </div>
            <div className="flex gap-4">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/products">
                  View Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}