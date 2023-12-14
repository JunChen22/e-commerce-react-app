import { SkuVariant } from './SkuVariant';
import { Picture } from './Picture';
import { Attribute } from './Attribute'; 

interface ProductDetail {
  brandName: string;
  name: string;
  categoryName: string;
  sn: string;
  subTitle: string;
  coverPicture: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  stock: number;
  weight: number;
  keywords: string;
  detailTitle: string;
  detailDesc: string;
  createdAt: string;
  skuVariants: SkuVariant[];
  picturesList: Picture[];
  attributes: Attribute;
}