import { brandApi } from '@/services/brandService';
import Link from 'next/link';
import { Suspense } from 'react';
import { BrandDTO } from '@/interfaces/brand/BrandDTO';

// Loading component within the same file for direct usage
function BrandGridSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="animate-pulse bg-white rounded-lg p-6">
          <div className="bg-gray-200 h-32 rounded-lg mb-4" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>
      ))}
    </div>
  );
}

async function BrandGrid() {
  const brands = await brandApi.getAllBrand();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {brands.map((brand) => (
        <Link
          key={brand.slug}
          href={`/brand/${brand.slug}`}
          className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 flex flex-col items-center group"
        >
          <div className="h-32 flex items-center justify-center mb-4">
            <img
              src={brand.logo as string}
              alt={`${brand.name} logo`}
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <h2 className="text-lg font-semibold text-center text-gray-800 group-hover:text-blue-600">
            {brand.name}
          </h2>
        </Link>
      ))}
    </div>
  );
}

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Brands</h1>
          <p className="mt-2 text-gray-600">Discover our collection of premium brands</p>
        </header>

        <Suspense fallback={<BrandGridSkeleton />}>
          <BrandGrid />
        </Suspense>
      </div>
    </div>
  );
}