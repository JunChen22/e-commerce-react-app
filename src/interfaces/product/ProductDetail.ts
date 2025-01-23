import { ProductDTO } from './ProductDTO';
import { ProductSkuDTO } from './ProductSkuDTO';
import { ProductAttributeDTO } from './ProductAttributeDTO';
import { SkuBulletPointDTO } from './SkuBulletPointDTO';
import { SalesStatusDTO } from './SalesStatusDTO';

export interface ProductDetail {
  product: ProductDTO;
  selectedSku: ProductSkuDTO;
  categoryPath: string;
  otherSkus: ProductSkuDTO[];
  pictures: string[];
  attributes: ProductAttributeDTO[];
  bulletPoints: SkuBulletPointDTO[];
  salesStatus?: SalesStatusDTO;     // optinal sales status for flash sales
}
