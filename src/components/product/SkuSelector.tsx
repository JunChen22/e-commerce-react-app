import Link from 'next/link';
import { ProductSku } from '@/interfaces/product/ProductSku';

export default function SkuSelector({
  selectedSku,
  otherSkus,
  slug
}: {
  selectedSku: ProductSku;
  otherSkus: ProductSku[];
  slug: string;
}) {
  // Check if there's more than one option (selectedSku + otherSkus)
  const skus = [selectedSku, ...otherSkus];
  if (skus.length <= 1) {
    return null; // Don't render if there's only one option
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Available Options</h3>
      <div className="grid grid-cols-2 gap-4">
        {skus.map((sku) => (
          <Link
            key={sku.skuCode}
            href={`/product/${slug}/${sku.skuCode}`}
            className={`p-4 border rounded-lg ${
              sku.skuCode === selectedSku.skuCode
                ? 'border-blue-500 bg-blue-50'
                : 'hover:border-gray-300'
            }`}
          >
            <div className="h-32 mb-2">
              <img
                src={sku.coverPicture}
                alt=""
                className="h-full w-full object-contain rounded"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium">
                ${sku.promotionPrice.toFixed(2)}
              </div>
              {sku.promotionPrice < sku.originalPrice && (
                <div className="text-sm text-gray-500 line-through">
                  ${sku.originalPrice.toFixed(2)}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}