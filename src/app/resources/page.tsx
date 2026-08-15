'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FileText,
  Download,
  CheckCircle,
  Beaker,
  Globe,
  ShieldCheck,
  ArrowRight,
  Mail,
  Building,
  Phone,
  MessageCircle
} from 'lucide-react';

// Download resources
const downloadResources = [
  {
    id: 'coa-package',
    title: 'Product COA & TDS Package',
    description: 'Complete quality documentation for our top 10 products',
    type: 'light',
    fields: ['Email'],
    icon: FileText,
    color: 'bg-blue-50',
    popular: true,
  },
  {
    id: 'india-guide',
    title: 'India Cosmetic Raw Material Import Guide',
    description: 'Step-by-step customs clearance process for Indian buyers',
    type: 'light',
    fields: ['Email'],
    icon: Globe,
    color: 'bg-orange-50',
    popular: true,
  },
  {
    id: 'sea-manual',
    title: 'Southeast Asia Import Compliance Manual',
    description: 'Vietnam, Thailand, Indonesia regulations overview',
    type: 'light',
    fields: ['Email'],
    icon: ShieldCheck,
    color: 'bg-green-50',
  },
  {
    id: 'whitening-guide',
    title: 'Whitening Formulation Guide',
    description: 'Professional formulation handbook for whitening products',
    type: 'light',
    fields: ['Email'],
    icon: FileText,
    color: 'bg-purple-50',
  },
  {
    id: 'price-list',
    title: 'Market-Specific Price List',
    description: 'Tiered pricing for India, SEA, and European markets',
    type: 'medium',
    fields: ['Email', 'Company'],
    icon: FileText,
    color: 'bg-yellow-50',
    popular: true,
  },
  {
    id: 'sample-pack',
    title: 'Free Sample Request',
    description: '10-50g sample for product evaluation',
    type: 'heavy',
    fields: ['Email', 'Company', 'Quantity', 'WhatsApp'],
    icon: Beaker,
    color: 'bg-green-100',
    premium: true,
  },
];

export default function ResourcesPage() {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    quantity: '',
    whatsapp: '',
    interest: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real implementation, submit to API
    setSubmitted(true);
  };

  const resetForm = () => {
    setSelectedResource(null);
    setFormData({ email: '', company: '', quantity: '', whatsapp: '', interest: '' });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-12 h-12 mx-auto mb-6 text-green-600" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
            Free Download Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get comprehensive guides, product documentation, and formulation resources.
            Simply provide your email to download instantly.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {!selectedResource ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {downloadResources.map((resource) => (
                  <Card 
                    key={resource.id}
                    className={`border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer ${resource.color} ${
                      resource.popular ? 'ring-2 ring-green-600' : ''
                    }`}
                    onClick={() => setSelectedResource(resource.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <resource.icon className="w-10 h-10 text-green-600" />
                        {resource.popular && (
                          <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                            Popular
                          </span>
                        )}
                        {resource.premium && (
                          <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded-full">
                            Premium
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {resource.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Mail className="w-4 h-4" />
                        <span>Required: {resource.fields.join(', ')}</span>
                      </div>
                      <Button 
                        className="w-full mt-4 bg-green-600 hover:bg-green-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedResource(resource.id);
                        }}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* All Products Link */}
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  Want to see our full product catalog?
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link href="/catalog">
                    View 564 Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            /* Download Form */
            <div className="max-w-md mx-auto">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center">
                      <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-600" />
                      <h2 className="text-2xl font-medium text-gray-900 mb-4">
                        Download Ready!
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Your download link has been sent to {formData.email}.
                        Please check your inbox (and spam folder if needed).
                      </p>
                      <div className="space-y-4">
                        <Button className="w-full bg-green-600 hover:bg-green-700" onClick={resetForm}>
                          Download Another Resource
                        </Button>
                        <Button asChild variant="outline" className="w-full">
                          <Link href="/products">
                            Browse Products
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-medium text-gray-900 mb-4 text-center">
                        {downloadResources.find(r => r.id === selectedResource)?.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-6 text-center">
                        Enter your details below to receive the download link.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input 
                              type="email"
                              required
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                        </div>

                        {/* Medium/Heavy form fields */}
                        {['price-list', 'sample-pack'].includes(selectedResource) && (
                          <div>
                            <label className="block text-sm text-gray-600 mb-2">
                              Company Name *
                            </label>
                            <div className="relative">
                              <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <input 
                                type="text"
                                required
                                placeholder="Your company"
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                              />
                            </div>
                          </div>
                        )}

                        {selectedResource === 'sample-pack' && (
                          <>
                            <div>
                              <label className="block text-sm text-gray-600 mb-2">
                                Estimated Quantity (kg)
                              </label>
                              <input 
                                type="text"
                                placeholder="e.g., 10-50 kg"
                                value={formData.quantity}
                                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-600 mb-2">
                                WhatsApp Number *
                              </label>
                              <div className="relative">
                                <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input 
                                  type="text"
                                  required
                                  placeholder="+86 xxx xxxx xxxx"
                                  value={formData.whatsapp}
                                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm text-gray-600 mb-2">
                                Products of Interest
                              </label>
                              <input 
                                type="text"
                                placeholder="e.g., L-Ergothioneine, Squalane"
                                value={formData.interest}
                                onChange={(e) => setFormData({...formData, interest: e.target.value})}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                              />
                            </div>
                          </>
                        )}

                        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-3">
                          <Download className="mr-2 h-5 w-5" />
                          Get Download Link
                        </Button>
                      </form>

                      <button 
                        onClick={resetForm}
                        className="w-full mt-4 text-sm text-gray-500 hover:text-gray-700"
                      >
                        ← Back to resources
                      </button>

                      {/* Trust elements */}
                      <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <ShieldCheck className="w-4 h-4" />
                          Secure
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <CheckCircle className="w-4 h-4" />
                          No spam
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <FileText className="w-4 h-4" />
                          PDF format
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Quick WhatsApp */}
      <section className="py-8 bg-white border-t">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            Need immediate assistance? Chat with our team directly.
          </p>
          <a 
            href="https://wa.me/8613918629532?text=Hi, I'm interested in downloading your resources and learning more about your products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">WhatsApp Instant Chat</span>
          </a>
        </div>
      </section>
    </div>
  );
}