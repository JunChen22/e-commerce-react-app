import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import SkuSelector from '@/components/product/SkuSelector';
import Link from 'next/link';
import { productService } from '@/services/productService';
import CategoryBreadcrumb from '@/components/product/CategoryBreadcrumb'
import ProductDescription from "@/components/product/ProductDescription";
import ProductReviewSection from "@/components/review/ProductReviewSection";

export default async function ProductDetailPage({
  params: { slug, skuCode }
}: {
  params: { slug: string; skuCode: string };
}) {
  const productDetail = await productService.getProductDetail(slug, skuCode);
  const { product, selectedSku, categoryPath, otherSkus, medias, attributes, bulletPoints, salesStatus } = productDetail;

  // Log the optional salesStatus
  if (salesStatus) {
    console.log(productDetail.salesStatus?.startDateTime);
  } else {
    console.log("No sales status available for this product.");
  }

  return (
    <div>
      <CategoryBreadcrumb categoryPath={categoryPath} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductGallery medias={medias} />
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">{selectedSku.skuName}</h1>
              
              {/* Brand Name with a link to the brand page */}
              <p className="text-gray-600">
                <Link href={`/brand/${product.brandSlug}`} className="text-blue-600 hover:underline">
                  {product.brandName}
                </Link>
              </p>

              {/* Star rating */}
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
              salesStatus={salesStatus}
            />

            <SkuSelector 
              selectedSku={selectedSku}
              otherSkus={otherSkus}
              slug={product.slug}
            />
          </div>
        </div>
      </div>
        <ProductDescription slug={product.slug} />
        <ProductReviewSection slug={product.slug} />
    </div>
  );
}