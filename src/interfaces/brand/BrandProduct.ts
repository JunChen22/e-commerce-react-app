import { Brand } from './Brand';
import { ProductListing } from '../product/ProductListing';

export interface BrandProduct {
    brand: Brand;
    products: ProductListing[];
}
