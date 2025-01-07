'use client';
import { useState } from 'react';
import { ProductSkuDTO, ProductAttributeDTO, SkuBulletPointDTO } from '@/types/product';

export default function ProductInfo({
  selectedSku,
  attributes,
  bulletPoints
}: {
  selectedSku: ProductSkuDTO;
  attributes: ProductAttributeDTO[];
  bulletPoints: SkuBulletPointDTO[];
}) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = async () => {
    try {
      const response = await fetch('/api/cart', {
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
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>

      {/* Rest of the component remains the same */}
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