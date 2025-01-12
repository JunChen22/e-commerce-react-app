import { ProductDTO } from './ProductDTO';
import { ProductSkuDTO } from './ProductSkuDTO';
import { ProductAttributeDTO } from './ProductAttributeDTO';
import { SkuBulletPointDTO } from './SkuBulletPointDTO';

export interface ProductDetail {
  product: ProductDTO;
  selectedSku: ProductSkuDTO;
  categoryPath: string;
  otherSkus: ProductSkuDTO[];
  pictures: string[];
  attributes: ProductAttributeDTO[];
  bulletPoints: SkuBulletPointDTO[];
}
