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
  Search,
  Download,
  FileText,
  ChevronDown,
  ChevronRight,
  FlaskConical,
  Sparkles,
  Droplets,
  Heart,
} from 'lucide-react';
import envikoProducts from '@/data/enviko-products-91.json';

interface AlvokorProduct {
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

const CATEGORIES = [
  {
    key: 'Natural Extracts',
    icon: FlaskConical,
    color: '#3A9973',
    groups: ['Natural Pigment(c2411)', 'Nutritional Enhancer(c2111)'],
  },
  {
    key: 'Cosmetic Peptides',
    icon: Sparkles,
    color: '#4A90C2',
    groups: ['Cosmetic Raw Material'],
  },
  {
    key: 'Functional Sugars & Amino Acids',
    icon: Droplets,
    color: '#0F4C81',
    groups: ['Amino Acid(c2111)', 'Sweetener(c2111)', 'Vitamin(c2111)'],
  },
  {
    key: 'Food & Feed Additives',
    icon: Heart,
    color: '#8B4513',
    groups: ['Food Additive(c2111)', 'Food Enzymes(c2613)', 'Pharmaceutical API'],
  },
];

const gradeColors: Record<string, string> = {
  'cosmetic': 'bg-pink-100 text-pink-700 border-pink-200',
  'food': 'bg-green-100 text-green-700 border-green-200',
  'pharmaceutical': 'bg-blue-100 text-blue-700 border-blue-200',
};

const gradeLabels: Record<string, string> = {
  'cosmetic': 'Cosmetic Grade',
  'food': 'Food Grade',
  'pharmaceutical': 'Pharmaceutical Grade',
};

export default function AlvokorProductsCatalog() {
  const products = (envikoProducts as { products: AlvokorProduct[] }).products;
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [sidebarCollapsed, setSidebarCollapsed] = useState<Record<string, boolean>>({});

  // Get unique groups
  const groups = useMemo(() => {
    const uniqueGroups = [...new Set(products.map(p => p.group))];
    return uniqueGroups;
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.cas.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.inci_name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesGroup = selectedGroup === 'all' || product.group === selectedGroup;
      const matchesGrade = selectedGrade === 'all' || product.app_scenario === selectedGrade;
      
      return matchesSearch && matchesGroup && matchesGrade;
    });
  }, [products, searchTerm, selectedGroup, selectedGrade]);

  const toggleCategory = (key: string) => {
    setSidebarCollapsed(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Count products by category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach(cat => {
      counts[cat.key] = products.filter(p => cat.groups.includes(p.group)).length;
    });
    return counts;
  }, [products]);

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Page Header */}
      <div className="bg-[#0F4C81] py-10">
        <div className="mx-auto max-w-7xl px-4">
          <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-3 text-sm transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-[32px] font-bold text-white mb-2 font-[family-name:var(--font-montserrat)]">
            Product Catalog
          </h1>
          <p className="text-white/70 text-sm">
            {products.length} premium raw materials for cosmetic, food, and pharmaceutical applications
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#999999]" />
              <Input
                placeholder="Search by name, CAS or INCI..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-[#E5E7EB]"
              />
            </div>
            <Select value={selectedGroup} onValueChange={setSelectedGroup}>
              <SelectTrigger className="border-[#E5E7EB]">
                <SelectValue placeholder="Product Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {groups.map(group => (
                  <SelectItem key={group} value={group}>{group}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger className="border-[#E5E7EB]">
                <SelectValue placeholder="Grade" />
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

        <div className="flex gap-6">
          {/* Left Sidebar - Categories */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              <div className="p-4 border-b border-[#E5E7EB]">
                <h3 className="font-semibold text-[#333333] text-sm">Product Categories</h3>
              </div>
              <div className="p-2">
                <button
                  onClick={() => { setSelectedGroup('all'); setSelectedGrade('all'); setSearchTerm(''); }}
                  className={`w-full text-left px-3 py-2 rounded text-sm transition-colors mb-1 ${selectedGroup === 'all' && selectedGrade === 'all' ? 'bg-[#0F4C81] text-white' : 'text-[#333333] hover:bg-[#F5F7FA]'}`}
                >
                  All Products
                  <span className="float-right text-xs opacity-70">{products.length}</span>
                </button>

                {CATEGORIES.map(cat => {
                  const Icon = cat.icon;
                  const isCollapsed = sidebarCollapsed[cat.key];
                  const isActive = !isCollapsed && cat.groups.includes(selectedGroup);
                  return (
                    <div key={cat.key} className="mb-1">
                      <button
                        onClick={() => {
                          if (cat.groups.length === 1) {
                            setSelectedGroup(selectedGroup === cat.groups[0] ? 'all' : cat.groups[0]);
                          } else {
                            toggleCategory(cat.key);
                          }
                        }}
                        className={`w-full text-left px-3 py-2 rounded text-sm transition-colors flex items-center gap-2 ${isActive ? 'bg-[#0F4C81]/10 text-[#0F4C81]' : 'text-[#333333] hover:bg-[#F5F7FA]'}`}
                      >
                        <Icon className="w-4 h-4" style={{ color: cat.color }} />
                        <span className="flex-1">{cat.key}</span>
                        <span className="text-xs text-[#999999]">{categoryCounts[cat.key]}</span>
                        {cat.groups.length > 1 && (
                          isCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                        )}
                      </button>
                      {!isCollapsed && cat.groups.length > 1 && (
                        <div className="ml-4 mt-1 space-y-1">
                          {cat.groups.map(g => (
                            <button
                              key={g}
                              onClick={() => setSelectedGroup(selectedGroup === g ? 'all' : g)}
                              className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${selectedGroup === g ? 'bg-[#0F4C81]/10 text-[#0F4C81] font-medium' : 'text-[#666666] hover:bg-[#F5F7FA]'}`}
                            >
                              {g}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="p-4 border-t border-[#E5E7EB]">
                <Link href="/contact">
                  <Button className="w-full bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-sm">
                    Request Custom Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right - Product Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-[#666666]">
                Showing <span className="font-medium text-[#333333]">{filteredProducts.length}</span> of {products.length} products
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#999999]">No products match your search criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => { setSearchTerm(''); setSelectedGroup('all'); setSelectedGrade('all'); }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                  <Link key={product.id} href={`/products/${product.slug}`} className="group">
                    <Card className="border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all duration-300 h-full">
                      <CardContent className="p-0">
                        {/* Product Image */}
                        <div className="h-44 bg-[#F5F7FA] relative overflow-hidden flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center">
                            <FlaskConical className="w-10 h-10 text-[#4A90C2]/30" />
                          </div>
                          {product.app_scenario && (
                            <Badge className={`absolute top-2 right-2 text-[10px] border ${gradeColors[product.app_scenario] || 'bg-gray-100 text-gray-600'}`}>
                              {gradeLabels[product.app_scenario] || product.grade}
                            </Badge>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="p-4">
                          <h3 className="text-sm font-semibold text-[#333333] mb-1 line-clamp-2 leading-snug">
                            {product.name}
                          </h3>
                          
                          {product.inci_name && (
                            <p className="text-[13px] text-[#999999] mb-2">{product.inci_name}</p>
                          )}
                          
                          <div className="text-[13px] text-[#4A90C2] font-mono font-medium mb-2">
                            CAS: {product.cas}
                          </div>
                          
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {product.purity && (
                              <span className="text-[11px] bg-[#3A9973]/10 text-[#3A9973] px-2 py-0.5 rounded font-medium">
                                {product.purity}
                              </span>
                            )}
                            <span className="text-[11px] bg-[#F5F7FA] text-[#666666] px-2 py-0.5 rounded">
                              {product.appearance_type || 'Powder'}
                            </span>
                          </div>

                          {/* Application Tags */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {product.certificates.slice(0, 2).map((cert, i) => (
                              <span key={i} className="text-[10px] text-[#999999] bg-[#F5F7FA] px-1.5 py-0.5 rounded">
                                {cert}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 pt-2 border-t border-[#E5E7EB]">
                            <Button size="sm" variant="outline" className="flex-1 h-8 text-[11px] border-[#E5E7EB] text-[#666666] hover:text-[#0F4C81]">
                              <FileText className="w-3 h-3 mr-1" />
                              Spec Sheet
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 h-8 text-[11px] border-[#E5E7EB] text-[#666666] hover:text-[#0F4C81]">
                              <Download className="w-3 h-3 mr-1" />
                              MSDS
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#0F4C81] py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-[22px] font-bold text-white mb-3 font-[family-name:var(--font-montserrat)]">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto text-sm">
            Our technical sales team can help you select the best raw materials for your specific formulation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0F4C81] hover:bg-gray-100 font-semibold px-8">
                Request Free Sample
              </Button>
            </Link>
            <Link href="/Alvokorbiosolution-Product-Catalogue-2026.pdf" target="_blank">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8">
                <Download className="mr-2 h-5 w-5" />
                Download Full Catalog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}