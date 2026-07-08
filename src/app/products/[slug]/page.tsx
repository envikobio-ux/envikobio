'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
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
  HelpCircle,
  FileText,
} from 'lucide-react';

// Import standardized templates
import {
  seoTitleTemplate,
  applicationScenarios,
  documentDownloadText,
  samplePolicy,
  faqItems,
  ctaButtons,
  appearanceTypes,
  categoryToScenario,
  EnvikoProduct,
} from '@/data/standard-templates';

// Import product data
import productDataJson from '@/data/enviko-products-91.json';

// Client cases (standardized)
const clientCases = [
  { region: 'India', client: 'Mumbai Cosmetic Factory', feedback: 'Stable quality, full customs support, delivery within 7 days', orderQty: '50kg/month' },
  { region: 'Vietnam', client: 'Ho Chi Minh Skincare Brand', feedback: 'Excellent quality, competitive pricing, seamless import', orderQty: '20kg/batch' },
  { region: 'Thailand', client: 'Bangkok Personal Care', feedback: 'High purity, great customer service', orderQty: '30kg/order' },
];

// Comparison table (standardized)
const comparisonFeatures = [
  { feature: 'Purity', weBenefit: 'Verified by in-house lab batch inspection' },
  { feature: 'Batch Consistency', weBenefit: 'Stable batch-to-batch quality' },
  { feature: 'Customs Documents', weBenefit: 'Full COA/TDS/MSDS for India/SEA' },
  { feature: 'Sample Policy', weBenefit: '10-50g free sample available' },
  { feature: 'Certifications', weBenefit: 'REACH/HALAL/ISO certified' },
];

export default function StandardProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [product, setProduct] = useState<EnvikoProduct | null>(null);
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    quantity: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Find product by slug
    const found = (productDataJson as { products: EnvikoProduct[] }).products.find(
      (p: EnvikoProduct) => p.slug === slug || p.cas.replace('-', '') === slug.split('-')[0]
    );
    if (found) {
      setProduct(found);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Generate SEO title
  const seoTitle = seoTitleTemplate(
    product.name,
    product.grade,
    product.purity,
    product.certificates
  );

  // Get application scenario
  const scenario = categoryToScenario[product.group] || product.app_scenario || 'cosmetic';
  const appContent = applicationScenarios[scenario];

  // Get appearance description
  const appearanceDesc = appearanceTypes[product.appearance_type] || 'White to off-white powder';

  // Generate advantages based on product
  const advantages = [
    `${product.purity || 'High purity'} verified by in-house lab full batch inspection`,
    `Complete certification (${product.certificates.slice(0, 3).join('/')}) for target markets (India/SEA/EU)`,
    `In stock, fast delivery within 3-7 working days`,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Block 1: SEO Hero Banner */}
      <section className="bg-gradient-to-b from-green-50 to-white py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-green-600 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {product.certificates.slice(0, 4).map((cert, index) => (
              <div key={index} className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full shadow-sm border">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </div>
            ))}
          </div>

          {/* SEO Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 text-center mb-4">
            {seoTitle}
          </h1>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm">
              <CheckCircle className="w-4 h-4" /> India Customs Ready
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm">
              <Truck className="w-4 h-4" /> Fast Delivery 3-7 Days
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm">
              <Beaker className="w-4 h-4" /> Free 10-50g Sample
            </span>
          </div>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Beaker className="mr-2 h-5 w-5" />
              {ctaButtons.requestSample.text}
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-5 w-5" />
              {ctaButtons.downloadCOA.text}
            </Button>
          </div>
        </div>
      </section>

      {/* Block 2: Core Advantages */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Core Advantages</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {advantages.map((adv, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-4 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <p className="text-gray-700">{adv}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Block 3: Standard Parameter Table */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Standard Parameters</h2>
          <Card className="border-0 shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">INCI Name</th>
                  <th className="py-3 px-4 text-left">CAS No.</th>
                  <th className="py-3 px-4 text-left">Purity</th>
                  <th className="py-3 px-4 text-left">Appearance</th>
                  <th className="py-3 px-4 text-left">Packing</th>
                  <th className="py-3 px-4 text-left">Shelf Life</th>
                  <th className="py-3 px-4 text-left">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 font-medium">{product.inci_name}</td>
                  <td className="py-3 px-4">{product.cas}</td>
                  <td className="py-3 px-4 text-green-700 font-medium">{product.purity}</td>
                  <td className="py-3 px-4">{appearanceDesc}</td>
                  <td className="py-3 px-4">{product.packages}</td>
                  <td className="py-3 px-4">{product.shelf_life}</td>
                  <td className="py-3 px-4 text-green-700">{product.grade}</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      {/* Block 4: Application Scenario */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium text-gray-900 mb-6">{appContent.title}</h2>
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="prose prose-sm max-w-none text-gray-700">
                {appContent.content.split('\n').map((line, i) => (
                  <p key={i} className="mb-2">{line}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Block 5: Document Download */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium text-gray-900 mb-4">{documentDownloadText.title}</h2>
          <p className="text-gray-600 mb-6">{documentDownloadText.content}</p>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {['COA', 'TDS', 'MSDS', 'Certificate'].map((doc, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <FileText className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="font-medium text-gray-900">{doc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <Download className="mr-2 h-5 w-5" />
            {documentDownloadText.buttonText}
          </Button>
        </div>
      </section>

      {/* Block 6: Unified Sample Policy */}
      <section className="py-8 bg-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">{samplePolicy.title}</h2>
              <div className="space-y-3 text-gray-700">
                {samplePolicy.content.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Request Your Free Sample</h3>
              <div className="space-y-3">
                <input type="text" placeholder="Company Name" className="w-full px-4 py-3 border rounded-lg" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border rounded-lg" />
                <input type="text" placeholder="WhatsApp Number" className="w-full px-4 py-3 border rounded-lg" />
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Beaker className="mr-2 h-5 w-5" />
                  {samplePolicy.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 7: FAQ + Dual CTA */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {faqItems.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <HelpCircle className="w-5 h-5 text-green-600 mt-1" />
                    <p className="font-medium text-gray-900">{faq.question}</p>
                  </div>
                  <p className="text-gray-600 ml-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Final Dual CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Beaker className="mr-2 h-5 w-5" />
              {ctaButtons.requestSample.text}
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-5 w-5" />
              {ctaButtons.downloadCOA.text}
            </Button>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center">
            <a 
              href={`https://wa.me/${ctaButtons.whatsapp.phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              {ctaButtons.whatsapp.text}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}