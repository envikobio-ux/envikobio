'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowLeft,
  Beaker,
  Download,
  MessageCircle,
  CheckCircle,
  ShieldCheck,
  Truck,
  Globe,
  Package,
  FileText,
  Clock,
  CreditCard,
  HelpCircle,
  Leaf,
  Factory,
  Award,
  ArrowRight
} from 'lucide-react';

// Demo product data for template
const productData = {
  name: 'L-Ergothioneine (EGT)',
  cas: '497-33-6',
  inciName: 'Ergothioneine',
  purity: '≥99.9%',
  grade: 'Cosmetic Grade',
  source: 'Fermentation (Plant-derived)',
  appearance: 'White to off-white powder',
  molecularWeight: '229.28',
  solubility: 'Water soluble',
  packaging: '1kg/bottle, 5kg/drum, 25kg/drum',
  shelfLife: '24 months',
  storage: 'Store in cool, dry place, away from light',
  certifications: ['REACH', 'SGS', 'ISO 9001', 'GMP'],
  applications: ['Anti-aging skincare', 'UV protection', 'Cellular repair', 'Oxidative stress reduction'],
  benefits: [
    'Potent antioxidant with high bioavailability',
    'Protects skin from UV-induced oxidative damage',
    'Supports cellular energy metabolism',
    'Synergistic effect with other antioxidants'
  ],
  specifications: [
    { name: 'Purity', value: '≥99.9%', method: 'HPLC' },
    { name: 'Melting Point', value: '275-280°C', method: 'USP' },
    { name: 'Heavy Metals', value: '<10ppm', method: 'ICP-MS' },
    { name: 'Residual Solvents', value: '<500ppm', method: 'GC' },
    { name: 'Microbiology', value: 'Complies', method: 'USP <61>' },
  ],
};

// Competitor comparison data
const comparisonData = [
  { feature: 'Source', we: 'Fermentation (Plant-derived)', competitor: 'Animal-derived or Synthetic' },
  { feature: 'Purity', we: '≥99.9%', competitor: '95-98%' },
  { feature: 'Batch Consistency', we: 'Stable batch-to-batch', competitor: 'Variable quality' },
  { feature: 'Customs Documents', we: 'Full COA/TDS/MSDS for India/SEA', competitor: 'Basic documents only' },
  { feature: 'Sample Policy', we: '10-50g free sample available', competitor: 'Paid samples only' },
  { feature: 'Production Capacity', we: '100kg+ monthly', competitor: 'Limited capacity' },
];

// Client cases
const clientCases = [
  { region: 'India', client: 'Mumbai Cosmetic Factory', product: 'L-Ergothioneine 99.9%', use: 'Anti-aging serum formulation', feedback: 'Stable quality, full customs support, delivery within 7 days', orderQty: '50kg/month' },
  { region: 'Vietnam', client: 'Ho Chi Minh Skincare Brand', product: 'L-Ergothioneine 99.9%', use: 'UV protection cream', feedback: 'Excellent antioxidant effect, competitive pricing', orderQty: '20kg/batch' },
  { region: 'Thailand', client: 'Bangkok Personal Care', product: 'L-Ergothioneine 99.9%', use: 'Cellular repair essence', feedback: 'High purity, great synergistic effect with Vitamin C', orderQty: '30kg/order' },
];

// FAQ data
const faqData = [
  { question: 'What is your standard lead time?', answer: 'For stock products: 3-5 business days. For custom orders: 7-15 days depending on quantity. Rush orders available upon request.' },
  { question: 'What payment methods do you accept?', answer: 'We accept T/T (bank transfer), PayPal, and Western Union. For established customers, we offer flexible payment terms.' },
  { question: 'Can you provide India customs clearance documents?', answer: 'Yes, we provide complete documentation: COA, TDS, MSDS, Certificate of Origin, Plant Source Declaration, and SGS test report. All documents comply with Indian import regulations.' },
  { question: 'How long does sample delivery take?', answer: 'Samples are typically shipped within 2 business days. International delivery: 5-7 days via express courier (DHL/FedEx).' },
  { question: 'What is your minimum order quantity?', answer: 'MOQ starts from 1kg for trial orders. Bulk orders: flexible quantities from 5kg to 100kg+ with tiered pricing.' },
];

// Sample policy
const samplePolicy = {
  freeQty: '10-50g',
  shipping: 'Customer bears shipping cost',
  deduction: 'Full deduction on first bulk order ≥10kg',
  leadTime: '2-3 business days preparation',
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    quantity: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real implementation, this would submit to API
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Block 1: Hero Banner with CTA */}
      <section className="relative bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Back Navigation */}
          <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-green-600 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {productData.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </div>
            ))}
          </div>

          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Product Title */}
              <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-2">
                {productData.name} {productData.purity}
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                CAS: {productData.cas} | {productData.grade} | {productData.source}
              </p>
              
              {/* Key Benefits */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                  <CheckCircle className="w-4 h-4" /> India Customs Ready
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                  <Truck className="w-4 h-4" /> 100kg+ Stock
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium">
                  <Beaker className="w-4 h-4" /> Free 10g Sample
                </span>
              </div>

              <p className="text-gray-600 mb-8 max-w-xl">
                Premium fermented L-Ergothioneine for cosmetic anti-aging formulations. 
                Full documentation support for India, Southeast Asia, and European markets.
              </p>

              {/* Dual CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 transition-all hover:scale-105">
                  <Beaker className="mr-2 h-5 w-5" />
                  Request Free Sample
                </Button>
                <Button variant="outline" size="lg" className="border-2 transition-all hover:scale-105">
                  <Download className="mr-2 h-5 w-5" />
                  Download COA Package
                </Button>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white">
                <Image
                  src="/hero-lab.jpeg"
                  alt={productData.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/8612345678900" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Core Parameters */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-8">Product Specifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Basic Info Cards */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">CAS Number</span>
                    <span className="font-medium text-gray-900">{productData.cas}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">INCI Name</span>
                    <span className="font-medium text-gray-900">{productData.inciName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Molecular Weight</span>
                    <span className="font-medium text-gray-900">{productData.molecularWeight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Appearance</span>
                    <span className="font-medium text-gray-900">{productData.appearance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Solubility</span>
                    <span className="font-medium text-gray-900">{productData.solubility}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grade & Packaging */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Grade & Packaging</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Grade</span>
                    <span className="font-medium text-green-700">{productData.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purity</span>
                    <span className="font-medium text-gray-900">{productData.purity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Source</span>
                    <span className="font-medium text-gray-900">{productData.source}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Packaging</span>
                    <span className="font-medium text-gray-900">{productData.packaging}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shelf Life</span>
                    <span className="font-medium text-gray-900">{productData.shelfLife}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {productData.certifications.map((cert, index) => (
                    <span key={index} className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> {cert}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Full documentation available: COA, TDS, MSDS, Certificate of Origin
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Specifications Table */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Quality Specifications</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-gray-600">Parameter</th>
                    <th className="text-left py-3 text-gray-600">Specification</th>
                    <th className="text-left py-3 text-gray-600">Test Method</th>
                  </tr>
                </thead>
                <tbody>
                  {productData.specifications.map((spec, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 text-gray-900">{spec.name}</td>
                      <td className="py-3 font-medium text-green-700">{spec.value}</td>
                      <td className="py-3 text-gray-600">{spec.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Applications */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Applications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {productData.applications.map((app, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Competitor Comparison */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Why Choose Enviko Over Competitors?</h2>
          <p className="text-gray-600 mb-8">Compare our advantages with typical market alternatives</p>

          <Card className="border-0 shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="text-left py-4 px-6">Feature</th>
                  <th className="text-left py-4 px-6">Enviko (We)</th>
                  <th className="text-left py-4 px-6">Typical Competitor</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-900 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-green-700">
                      <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> {row.we}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      {/* Block 4: Client Cases */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-gray-600 mb-8">Trusted by cosmetic manufacturers across India and Southeast Asia</p>

          <div className="grid md:grid-cols-3 gap-6">
            {clientCases.map((case_, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">{case_.region}</p>
                      <p className="text-sm text-gray-500">{case_.client}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="text-gray-600">Product: </span>
                      <span className="font-medium text-green-700">{case_.product}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Application: </span>
                      <span className="text-gray-700">{case_.use}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Order Qty: </span>
                      <span className="font-medium text-gray-900">{case_.orderQty}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic border-t pt-3">
                    "{case_.feedback}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Block 5: Certificates Preview */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Quality Documentation</h2>
          <p className="text-gray-600 mb-8">Download complete documentation package for your customs clearance</p>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {['COA', 'TDS', 'MSDS', 'Certificate of Origin'].map((doc, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="w-10 h-10 mx-auto mb-4 text-green-600" />
                  <p className="font-medium text-gray-900 mb-2">{doc}</p>
                  <p className="text-sm text-gray-500 mb-4">Available for download</p>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" /> Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Download className="mr-2 h-5 w-5" />
              Download All Documents (ZIP)
            </Button>
          </div>
        </div>
      </section>

      {/* Block 6: Sample Policy */}
      <section className="py-12 bg-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Free Sample Policy</h2>
              <p className="text-gray-600 mb-6">
                We offer free samples for qualified buyers to evaluate our product quality before bulk purchase.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Beaker className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Free Sample Quantity</p>
                    <p className="text-gray-600">{samplePolicy.freeQty} available for testing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Shipping Cost</p>
                    <p className="text-gray-600">{samplePolicy.shipping}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Bulk Order Deduction</p>
                    <p className="text-gray-600">{samplePolicy.deduction}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Lead Time</p>
                    <p className="text-gray-600">{samplePolicy.leadTime}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Request Your Free Sample</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Company Name" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input 
                  type="text" 
                  placeholder="WhatsApp Number" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Beaker className="mr-2 h-5 w-5" />
                  Request Free Sample
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 7: Conversion Entry Points (Form + WhatsApp) */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">Request a quote or connect with us directly via WhatsApp</p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inquiry Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Inquiry Form</h3>
                
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">Thank You!</p>
                    <p className="text-gray-600">We will respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Company Name *"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input 
                      type="text" 
                      placeholder="Estimated Quantity (kg)"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <textarea 
                      placeholder="Additional requirements..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    />
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Submit Inquiry
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* WhatsApp Direct */}
            <Card className="border-0 shadow-lg bg-green-50">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">WhatsApp Instant Contact</h3>
                <p className="text-gray-600 mb-6">
                  Get immediate response from our sales team. Typical reply time: 30 minutes during business hours.
                </p>
                <a 
                  href="https://wa.me/8612345678900?text=Hi, I'm interested in L-Ergothioneine 99.9%. Please send me product details and pricing."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Start WhatsApp Chat</span>
                </a>
                
                <div className="mt-6 text-sm text-gray-600">
                  <p>Business Hours: Mon-Fri 9:00-18:00 (GMT+8)</p>
                  <p>For urgent orders, available 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Block 8: FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-8">Quick answers to common inquiries</p>

          <div className="grid md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle className="w-5 h-5 text-green-600 mt-1" />
                    <p className="font-medium text-gray-900">{faq.question}</p>
                  </div>
                  <p className="text-gray-600 pl-8">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-8 bg-green-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-lg font-medium">Ready to order {productData.name}?</p>
              <p className="text-sm opacity-80">Get free sample or download full documentation today.</p>
            </div>
            <div className="flex gap-3">
              <Button asChild className="bg-white text-green-700 hover:bg-gray-100">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <a 
                href="https://wa.me/8612345678900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}