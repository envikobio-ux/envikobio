'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ArrowLeft,
  Search,
  Beaker,
  Download,
  ShieldCheck,
} from 'lucide-react';
import envikoProducts from '@/data/enviko-products-91.json';

interface EnvikoProduct {
  id: number;
  slug: string;
  cas: string;
  name: string;
  inci_name: string;
  group: string;
  grade: string;
  purity: string;
  packages: string;
  certificates: string[];
  appearance_type: string;
  supplier: string;
  app_scenario: string;
  shelf_life: string;
}

// Group labels for display
const groupLabels: Record<string, string> = {
  'Cosmetic Raw Material': 'Cosmetic Raw Materials',
  'Food Additive(c2111)': 'Food Additives',
  'Food Enzymes(c2613)': 'Food Enzymes',
  'Nutritional Enhancer(c2111)': 'Nutritional Enhancers',
  'Natural Pigment(c2411)': 'Natural Pigments',
  'Vitamin(c2111)': 'Vitamins',
  'Pharmaceutical API': 'Pharmaceutical APIs',
  'Amino Acid(c2111)': 'Amino Acids',
  'Sweetener(c2111)': 'Sweeteners',
};

// Category to scenario mapping
const scenarioLabels: Record<string, string> = {
  'cosmetic': 'Cosmetic Grade',
  'food': 'Food Grade',
  'pharmaceutical': 'Pharmaceutical Grade',
};

export default function EnvikoProductsCatalog() {
  const products = (envikoProducts as { products: EnvikoProduct[] }).products;
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedScenario, setSelectedScenario] = useState<string>('all');

  // Get unique groups
  const groups = useMemo(() => {
    const uniqueGroups = [...new Set(products.map(p => p.group))];
    return ['all', ...uniqueGroups];
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.cas.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.inci_name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesGroup = selectedGroup === 'all' || product.group === selectedGroup;
      
      const matchesScenario = selectedScenario === 'all' || product.app_scenario === selectedScenario;
      
      return matchesSearch && matchesGroup && matchesScenario;
    });
  }, [products, searchTerm, selectedGroup, selectedScenario]);

  // Group products by category
  const groupedProducts = useMemo(() => {
    const grouped: Record<string, EnvikoProduct[]> = {};
    filteredProducts.forEach(product => {
      if (!grouped[product.group]) {
        grouped[product.group] = [];
      }
      grouped[product.group].push(product);
    });
    return grouped;
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-green-200 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl font-medium text-white mb-2">
            Enviko Product Catalog
          </h1>
          <p className="text-green-100 mb-4">
            {products.length} premium raw materials for cosmetic, food, and pharmaceutical applications
          </p>

          {/* Trust Bar */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-white text-green-700">REACH Certified</Badge>
            <Badge className="bg-white text-green-700">HALAL Certified</Badge>
            <Badge className="bg-white text-green-700">India Customs Ready</Badge>
            <Badge className="bg-white text-green-700">Free Samples</Badge>
          </div>

          {/* Search and Filters */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search by name or CAS..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
            <Select value={selectedGroup} onValueChange={setSelectedGroup}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {groups.map(group => (
                  <SelectItem key={group} value={group}>
                    {group === 'all' ? 'All Categories' : (groupLabels[group] || group)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedScenario} onValueChange={setSelectedScenario}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="cosmetic">Cosmetic Grade</SelectItem>
                <SelectItem value="food">Food Grade</SelectItem>
                <SelectItem value="pharmaceutical">Pharmaceutical Grade</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      {/* Product Groups */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        {Object.entries(groupedProducts).map(([group, groupProducts]) => (
          <div key={group} className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4 border-b pb-2">
              {groupLabels[group] || group} ({groupProducts.length})
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {groupProducts.map(product => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer h-full">
                    <CardContent className="p-4">
                      {/* Product Name */}
                      <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      {/* CAS and Purity */}
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          CAS: {product.cas}
                        </Badge>
                        {product.purity && (
                          <Badge className="bg-green-100 text-green-700 text-xs">
                            {product.purity}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Grade */}
                      <p className="text-sm text-gray-600 mb-2">
                        {scenarioLabels[product.app_scenario] || product.grade}
                      </p>
                      
                      {/* Certificates */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.certificates.slice(0, 3).map((cert, i) => (
                          <span key={i} className="text-xs text-gray-500 flex items-center gap-0.5">
                            <ShieldCheck className="w-3 h-3 text-green-600" />
                            {cert}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download className="w-3 h-3 mr-1" />
                          COA
                        </Button>
                        <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                          <Beaker className="w-3 h-3 mr-1" />
                          Sample
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-green-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-medium text-gray-900 mb-4">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team can help you select the best raw materials for your formulation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Beaker className="mr-2 h-5 w-5" />
              Request Free Sample
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Full Catalog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}