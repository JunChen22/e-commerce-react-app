import { CategoryDTO } from '@/interfaces/category/CategoryDTO'
import { ProductListing } from '@/interfaces/product/ProductListing'

export interface CategoryProduct {
    category: CategoryDTO;
    productListings: ProductListing[];
}
