export interface ProductDTO {
  brandName: string;
  name: string;
  slug: string;
  categoryName: string;
  sn: string;
  subTitle: string;
  stars: number;
  ratings: number;
  description: string;
  originalPrice: number;
  promotionPrice: number;
  weight: number;
  keywords: string;
  detailTitle: string;
  detailDesc: string;
  createdAt: string;
}
  
export interface ProductSkuDTO {
  skuCode: string;
  coverPicture: string;
  originalPrice: number;
  promotionPrice: number;
}

export interface ProductAttributeDTO {
  attributeName: string;
  attributeValue: string;
  attributeUnit: string;
}

export interface SkuBulletPointDTO {
  bulletPoint: string;
  orderIndex: number;
}

export interface ProductDetail {
  product: ProductDTO;
  selectedSku: ProductSkuDTO;
  otherSkus: ProductSkuDTO[];
  pictures: string[];
  attributes: ProductAttributeDTO[];
  bulletPoints: SkuBulletPointDTO[];
}
  