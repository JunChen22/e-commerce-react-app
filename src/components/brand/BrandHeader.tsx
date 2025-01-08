// app/brand/[brandSlug]/components/BrandHeader.tsx
import { BrandDTO } from '@/interfaces/brand/BrandDTO';

export default function BrandHeader({ brand }: { brand: BrandDTO }) {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-6">
          <img 
            src={brand.logo as string} 
            alt={`${brand.name} logo`}
            className="w-32 h-32 object-contain"
          />
          <div>
            <h1 className="text-3xl font-bold">{brand.name}</h1>
            <p className="text-gray-600 mt-2">Official Brand Store</p>
          </div>
        </div>
      </div>
    </div>
  );
}