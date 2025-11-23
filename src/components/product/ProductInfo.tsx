'use client';
import { useState } from 'react';
import { ProductSku } from '@/interfaces/product/ProductSku';
import { ProductAttribute } from '@/interfaces/product/ProductAttribute';
import { SkuBulletPoint } from '@/interfaces/product/SkuBulletPoint';
import { SalesStatus } from '@/interfaces/product/SalesStatus';
import FlashSale from '@/components/product/FlashSale'

export default function ProductInfo({
  selectedSku,
  attributes,
  bulletPoints,
  salesStatus
}: {
  selectedSku: ProductSku;
  attributes: ProductAttribute[];
  bulletPoints: SkuBulletPoint[];
  salesStatus?: SalesStatus;
}) {
    const [quantity, setQuantity] = useState(1);

    const sortedBulletPoints = [...bulletPoints].sort(
        (a, b) => (a.orderIndex ?? 0) - (b.orderIndex ?? 0)
    );

  return (
    <div className="space-y-6">
      
      {/* Product price */}
      <div>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">${selectedSku.promotionPrice}</span>
          {selectedSku.originalPrice > selectedSku.promotionPrice && (
            <span className="ml-2 text-gray-500 line-through">
              ${selectedSku.originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Flash Sale Component */}
      {salesStatus && (
        <div className="mb-4">
          <FlashSale salesStatus={salesStatus} />
        </div>
      )}

        {/* Key features */}
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Key Features</h3>
            <ul className="list-disc pl-5 space-y-2">
                {sortedBulletPoints.map((point) => (
                    <li key={point.id}>{point.bulletPoint}</li>
                ))}
            </ul>
        </div>

        {/* Specifications */}
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {attributes.map((attr) => (
                <div key={attr.attributeName}>
                  <span className="text-gray-600">{attr.attributeName}:</span>{' '}
                  <span>
                    {attr.attributeValue} {attr.attributeUnit}
                  </span>
                </div>
              ))}
            </div>
        </div>
    </div>
  );
}