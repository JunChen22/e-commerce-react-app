'use client';
import { useState } from 'react';
import { ProductSku } from '@/interfaces/product/ProductSku';
import { ProductAttribute } from '@/interfaces/product/ProductAttribute';
import { SkuBulletPoint } from '@/interfaces/product/SkuBulletPoint';
import { SalesStatus } from '@/interfaces/product/SalesStatus';
import FlashSale from '@/components/product/FlashSale'
import { ShoppingCart } from 'lucide-react';

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

    const addToCart = async () => {
    try {
      const response = await fetch('/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          skuCode: selectedSku.skuCode,
          quantity
        })
      });
      
      if (!response.ok) throw new Error('Failed to add to cart');
      
      // Show success message or update cart UI
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

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

      {/* Add to Cart button */}
      {/* < className="h-5 w-5" /> */}
      <div className="flex gap-4 items-center">
        <label className="flex items-center gap-2">
          Quantity:
          <select 
            value={quantity} 
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border rounded px-2 py-1"
          >
            {[1,2,3,4,5,6,7,8,9,10].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </label>
        
        <button
          onClick={addToCart}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 text-white transition-transform hover:scale-105 active:scale-95"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Add to Cart</span>
        </button>
      </div>

      {/* Key features */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          {bulletPoints
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map((point) => (
              <li key={point.orderIndex}>{point.bulletPoint}</li>
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