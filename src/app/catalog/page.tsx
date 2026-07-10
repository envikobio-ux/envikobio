'use client';

import { useState, useMemo } from 'react';
import productsData from '@/data/products.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import Link from 'next/link';

interface Product {
  id: number;
  casNo: string;
  name: string;
  group: string;
  packages: string;
  grade: string;
  content: string;
  appearance: string;
  type: string;
  brand: string;
  certificate: string;
}

const GROUP_KEYS = ['Food Additive', 'Nutritional Enhancer', 'Sweetener', 'Amino Acid', 'Vitamin', 'Food Enzymes', 'Natural Pigment'] as const;
type GroupKey = typeof GROUP_KEYS[number];

const groupLabels: Record<GroupKey, string> = {
  'Food Additive': 'Food Additives',
  'Nutritional Enhancer': 'Nutritional Enhancers',
  'Sweetener': 'Sweeteners',
  'Amino Acid': 'Amino Acids',
  'Vitamin': 'Vitamins',
  'Food Enzymes': 'Food Enzymes',
  'Natural Pigment': 'Natural Pigments',
};

const groupDescriptions: Record<GroupKey, string> = {
  'Food Additive': 'Milk powders, coffee powders, and other food ingredients',
  'Nutritional Enhancer': 'Whey proteins, amino acid derivatives, and nutritional supplements',
  'Sweetener': 'Natural and artificial sweeteners for food applications',
  'Amino Acid': 'Essential and non-essential amino acids',
  'Vitamin': 'Vitamin A, B complex, C, D, E and derivatives',
  'Food Enzymes': 'Enzymes for food processing applications',
  'Natural Pigment': 'Natural colorants from plant sources',
};

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const products: Product[] = productsData.products;

  // filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.casNo.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGroup = selectedGroup === 'all' || product.group === selectedGroup;
      return matchesSearch && matchesGroup;
    });
  }, [searchQuery, selectedGroup]);

  // pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // reset page when filters change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleGroupChange = (value: string) => {
    setSelectedGroup(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Product Catalog
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            {productsData.total} premium ingredients across {productsData.groups.length} categories
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {productsData.groups.map((group) => (
              <Badge
                key={group}
                variant="outline"
                className="bg-white/10 text-white border-white/20 px-4 py-2 cursor-pointer hover:bg-white/20"
                onClick={() => handleGroupChange(group)}
              >
                {groupLabels[group as GroupKey] || group} ({(productsData.groupedProducts as Record<string, Product[]>)[group]?.length || 0})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <Input
                type="search"
                placeholder="Search products by name or CAS number..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={selectedGroup} onValueChange={handleGroupChange}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories ({products.length})</SelectItem>
                  {productsData.groups.map((group) => (
                    <SelectItem key={group} value={group}>
                      {groupLabels[group as GroupKey] || group} ({(productsData.groupedProducts as Record<string, Product[]>)[group]?.length || 0})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 text-gray-600">
            Showing {filteredProducts.length} products
            {selectedGroup !== 'all' && ` in ${groupLabels[selectedGroup as GroupKey] || selectedGroup}`}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginatedProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold line-clamp-2">
                      {product.name}
                    </CardTitle>
                    <Badge variant="secondary" className="ml-2 shrink-0">
                      {product.grade}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    {product.casNo && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">CAS No:</span>
                        <span className="font-medium">{product.casNo}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-500">Category:</span>
                      <span className="font-medium">{groupLabels[product.group as GroupKey] || product.group}</span>
                    </div>
                    {product.appearance && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Appearance:</span>
                        <span>{product.appearance}</span>
                      </div>
                    )}
                    {product.packages && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Package:</span>
                        <span>{product.packages}</span>
                      </div>
                    )}
                    {product.certificate && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Cert:</span>
                        <span>{product.certificate}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 pt-2 border-t">
                    <Badge variant="outline" className="text-emerald-600">
                      {product.brand}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <div className="flex gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? 'default' : 'outline'}
                      onClick={() => setCurrentPage(pageNum)}
                      className="w-10"
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>
              <Button
                variant="outline"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsData.groups.map((group) => (
              <Card
                key={group}
                className="cursor-pointer hover:border-emerald-500 transition-colors"
                onClick={() => handleGroupChange(group)}
              >
                <CardHeader>
                  <CardTitle className="text-emerald-700">
                    {groupLabels[group as GroupKey] || group}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {groupDescriptions[group as GroupKey] || 'Quality ingredients for various applications'}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">
                      {(productsData.groupedProducts as Record<string, Product[]>)[group]?.length || 0} products
                    </Badge>
                    <span className="text-emerald-600 font-medium">View all →</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Contact us for pricing, samples, and technical specifications
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}