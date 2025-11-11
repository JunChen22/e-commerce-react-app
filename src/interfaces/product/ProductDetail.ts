import { Product } from './Product';
import { ProductSku } from './ProductSku';
import { ProductAttribute } from './ProductAttribute';
import { SkuBulletPoint } from './SkuBulletPoint';
import { SalesStatus } from './SalesStatus';
import { Media } from "@/interfaces/image/Media";

export interface ProductDetail {
    product: Product;
    selectedSku: ProductSku;
    categoryPath: string;
    otherSkus: ProductSku[];
    medias: Media[];
    attributes: ProductAttribute[];
    bulletPoints: SkuBulletPoint[];
    salesStatus?: SalesStatus;     // optional sales status for flash sales
}
