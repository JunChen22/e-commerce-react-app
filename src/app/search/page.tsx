import { ProductListingDTO } from '@/interfaces/product/ProductListing';
import Link from 'next/link';

async function getSearchResults(query: string): Promise<ProductListingDTO[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search?keyword=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error('Search failed');
  return response.json();
}

export default async function SearchPage({
  searchParams
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q;
  const products = await getSearchResults(query);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-xl font-medium mb-6">
          Search results for &quot;{query}&quot;
          <span className="text-gray-500 ml-2">({products.length} results)</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.skuCode}
              href={`/${product.slug}/${product.skuCode}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4"
            >
              <div className="aspect-square mb-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h2 className="text-sm font-medium line-clamp-2 mb-2">
                {product.name}
              </h2>
              
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(product.stars)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="ml-1 text-xs text-gray-500">
                  ({product.ratings})
                </span>
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-amber-600">
                  ${product.originalPrice}
                </span>
                {product.listPrice > product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.listPrice}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}