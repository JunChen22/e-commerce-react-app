import { ProductListingDTO } from '@/interfaces/ProductListing';
import Link from 'next/link';

type ProductListProps = {
  products: ProductListingDTO[];
};

export default function ProductList({ products = [] }: ProductListProps) {
  if (!products || products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Search Results</h2>
        <p className="text-gray-500">No products found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Search Results</h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div 
            key={product.skuCode} 
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <Link href={`product/${product.slug}/${product.skuCode}`}>
              <div className="aspect-square relative mb-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              <h3 className="font-medium text-lg mb-2 line-clamp-2 hover:text-blue-600">
                {product.name}
              </h3>
            </Link>

            <div className="flex items-center mb-2">
                {'★'.repeat(Math.floor(product.stars))}
                {product.stars % 1 >= 0.5 ? '⯪' : ''}
                {'☆'.repeat(5 - Math.ceil(product.stars))}
              <span className="text-sm text-gray-600 ml-2">
                ({product.ratings})
              </span>
            </div>

            <div className="flex flex-col">
              {product.listPrice < product.originalPrice ? (
                <>
                  <span className="text-xl font-bold text-red-600">
                    ${product.listPrice.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-xl font-bold">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}