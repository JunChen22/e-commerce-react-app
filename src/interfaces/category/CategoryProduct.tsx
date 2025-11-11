import { Category } from '@/interfaces/category/Category'
import { ProductListing } from '@/interfaces/product/ProductListing'

export interface CategoryProduct {
    category: Category;
    productListings: ProductListing[];
}
