import { BrandDTO } from './BrandDTO';
import { ProductListing } from '../product/ProductListing';

export interface BrandProduct {
  brand: BrandDTO;
  products: ProductListing[];
}
