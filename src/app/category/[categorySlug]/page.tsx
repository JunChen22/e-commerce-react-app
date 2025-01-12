'use client';
import Link from 'next/link';
import { useCategoryProducts } from '@/hooks/useCategoryProducts';

export default function CategoryPage({
  params: { categorySlug }
}: {
  params: { categorySlug: string };
}) {
  const { data, isLoading, error } = useCategoryProducts(categorySlug);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">{data.category.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.productListings.map((product) => (
            <Link 
              href={`/product/${product.slug}/${product.skuCode}`} 
              key={product.skuCode}
              className="block bg-white rounded-lg shadow-sm p-4 transition-transform hover:scale-105 hover:shadow-md"
            >
              <div key={product.skuCode} className="bg-white rounded-lg shadow-sm p-4">
                <div className="aspect-square relative mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-${i < Math.floor(product.stars) ? 'yellow' : 'gray'}-400`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.ratings})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">${product.listPrice}</span>
                  {product.originalPrice > product.listPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
