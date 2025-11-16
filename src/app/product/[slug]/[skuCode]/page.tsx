'use client';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import SkuSelector from '@/components/product/SkuSelector';
import { productService } from '@/services/productService';
import CategoryBreadcrumb from '@/components/product/CategoryBreadcrumb'
import ProductDescription from "@/components/product/ProductDescription";
import ProductReviewSection from "@/components/review/ProductReviewSection";
import BuyBox from "@/components/product/BuyBox/BuyBox";
import {ProductHeader} from "@/components/product/ProductHeader";

export default async function ProductDetailPage({
                                                    params: { slug, skuCode }
                                                }: {
    params: { slug: string; skuCode: string };
}) {
    const productDetail = await productService.getProductDetail(slug, skuCode);
    const { product, selectedSku, categoryPath, otherSkus, medias, attributes, bulletPoints, salesStatus } = productDetail;

    return (
        <div>
            <CategoryBreadcrumb categoryPath={categoryPath} />
            <div className="pdp-grid">
                {/* Left column: Gallery */}
                <div
                    className="gallery-column"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                    }}
                >
                    <div style={{ position: "sticky", top: "80px", alignSelf: "start" }}>
                        <ProductGallery medias={medias} />
                    </div>
                </div>

                {/* Middle column: Info */}
                <div className="info-column">
                    <div className="info-stack">
                        <ProductHeader
                            title={selectedSku.skuName}
                            brandName={product.brandName}
                            brandSlug={product.brandSlug}
                            stars={product.stars}
                            ratings={product.ratings}
                        />

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

                {/* Right column: BuyBox */}
                <div className="buybox-column">
                    <BuyBox />
                </div>
            </div>

            {/* Full width sections below */}
            <div className="fullwidth-sections">
                <ProductDescription slug={product.slug} />
                <ProductReviewSection slug={product.slug} />
            </div>

            <style jsx>{`
                .pdp-grid {
                    display: grid;
                    grid-template-columns: 50% 35% 15%; /* wider gallery */
                    gap: 32px; /* slightly more space between columns */
                    max-width: 1400px; /* wider container */
                    margin: 0 auto;
                    padding: 32px 24px; /* a bit more horizontal padding */
                }

                .gallery-column {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .info-column {
                    display: flex;
                    flex-direction: column;
                }

                .info-stack {
                    display: flex;
                    flex-direction: column;
                    gap: 12px; /* adds space between ProductHeader, ProductInfo, and SkuSelector */
                }

                .buybox-column {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .fullwidth-sections {
                    max-width: 1400px;
                    margin: 32px auto;
                    padding: 0 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                @media (max-width: 1024px) {
                    .pdp-grid {
                        grid-template-columns: 1fr;
                        padding: 24px 16px;
                    }

                    .info-stack > * {
                        margin-bottom: 16px;
                    }
                }
            `}</style>
        </div>
    );
}

