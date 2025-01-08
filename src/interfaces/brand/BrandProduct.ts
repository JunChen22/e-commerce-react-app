import { BrandDTO } from './BrandDTO';
import { ProductListingDTO } from '../product/ProductListing';

export interface BrandProduct {
  brand: BrandDTO;
  products: ProductListingDTO[];
}
