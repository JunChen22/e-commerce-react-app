import { ProductDTO } from './ProductDTO';
import { ProductSkuDTO } from './ProductSkuDTO';
import { ProductAttributeDTO } from './ProductAttributeDTO';
import { SkuBulletPointDTO } from './SkuBulletPointDTO';
import { SalesStatusDTO } from './SalesStatusDTO';
import { MediaDTO } from "@/interfaces/image/MediaDTO";

export interface ProductDetail {
  product: ProductDTO;
  selectedSku: ProductSkuDTO;
  categoryPath: string;
  otherSkus: ProductSkuDTO[];
  medias: MediaDTO[];
  attributes: ProductAttributeDTO[];
  bulletPoints: SkuBulletPointDTO[];
  salesStatus?: SalesStatusDTO;     // optional sales status for flash sales
}
