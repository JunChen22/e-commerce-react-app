import { ProductListing } from '@/interfaces/product/ProductListing';

type ProductCardProps = {
  product: ProductListing;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="aspect-square relative mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      {/* Rest of your product card UI */}
    </div>
  );
}