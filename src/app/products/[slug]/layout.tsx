import productData from '@/data/enviko-products-91.json';

interface ProductItem {
  slug: string;
  cas: string;
  name: string;
  inci_name: string;
  grade: string;
  purity: string;
  certificates: string[];
}

// Generate static params for all 90+ products
export async function generateStaticParams() {
  const products = (productData as { products: ProductItem[] }).products;
  
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const products = (productData as { products: ProductItem[] }).products;
  const product = products.find((p) => p.slug === resolvedParams.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found | Alvokor Bio',
    };
  }

  const certStr = product.certificates.filter(c => ['REACH', 'HALAL', 'SGS', 'ISO'].includes(c)).slice(0, 2).join(' & ') || 'SGS';
  
  return {
    title: `${product.name} ${product.grade} ${product.purity} | ${certStr} Certified, Free Samples`,
    description: `${product.name} CAS ${product.cas}. ${product.grade} ${product.purity}. Full customs documents for India/SEA. Free test samples available. REACH/HALAL/SGS certified.`,
    keywords: [product.name, product.cas, product.inci_name, product.grade, 'cosmetic raw material', 'India customs', 'free sample'].join(','),
  };
}

// Empty layout - just pass children through
export default function ProductLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return children;
}