import Link from 'next/link';
import { ProductListing } from '@/interfaces/product/ProductListing';

export default function ProductGrid({ products }: { products: ProductListing[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          href={`/product/${product.slug}/${product.skuCode}`}
          key={product.skuCode}
          className="group"
        >
          <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                {product.name}
              </h3>
              
              <div className="mt-2 flex items-center">
                <div className="flex items-center">
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
                </div>
                <span className="ml-1 text-xs text-gray-500">
                  ({product.ratings})
                </span>
              </div>
              
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-lg font-bold text-gray-900">
                  ${product.originalPrice}
                </span>
                {product.listPrice > product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.listPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}