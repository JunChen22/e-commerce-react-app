import { ProductDetail } from '@/interfaces/Product';
import ProductGallery from '@/components/ProductGallery';
import ProductInfo from '@/components/ProductInfo';
import SkuSelector from '@/components/SkuSelector';

async function getProductDetail(slug: string, skuCode: string): Promise<ProductDetail> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${slug}/${skuCode}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

export default async function ProductDetailPage({
  params: { slug, skuCode }
}: {
  params: { slug: string; skuCode: string };
}) {
  const productDetail = await getProductDetail(slug, skuCode);
  const { product, selectedSku, otherSkus, pictures, attributes, bulletPoints } = productDetail;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductGallery pictures={pictures} />
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-gray-600">{product.subTitle}</p>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => {
                  if (i < Math.floor(product.stars)) {
                    return <span key={i} className="text-2xl text-yellow-400">★</span>;  // Full star
                  } else if (i < Math.ceil(product.stars)) {
                    return <span key={i} className="text-2xl text-yellow-400">⯪</span>;  // Half star
                  } else {
                    return <span key={i} className="text-2xl text-gray-300">☆</span>;  // Empty star
                  }
                })}
              </div>
              <span className="ml-2 text-gray-600">{product.ratings} ratings</span>
            </div>
          </div>

          <ProductInfo 
            selectedSku={selectedSku}
            attributes={attributes}
            bulletPoints={bulletPoints}
          />

          <SkuSelector 
            selectedSku={selectedSku}
            otherSkus={otherSkus}
            slug={product.slug}
          />
        </div>
      </div>
    </div>
  );
}