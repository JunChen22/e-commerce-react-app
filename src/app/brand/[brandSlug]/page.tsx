import { brandApi } from '@/services/brandService';
import ProductGrid from '@/components/brand/ProductGrid';
import BrandHeader from '@/components/brand/BrandHeader';
import { Suspense } from 'react';

export default async function BrandPage({
    params: { brandSlug }
  }: {
    params: { brandSlug: string };
  }) {
    const { brand, products } = await brandApi.getBrandProduct(brandSlug);
  
    return (
      <div className="min-h-screen bg-gray-50">
        <BrandHeader brand={brand} />
        
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6">
                {brand.name} Products
              </h1>
              
              <Suspense fallback={<div>Loading products...</div>}>
                <ProductGrid products={products} />
              </Suspense>
            </div>
          </div>
        </main>
      </div>
    );
  }