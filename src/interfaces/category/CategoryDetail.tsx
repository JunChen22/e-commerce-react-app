import { Category } from '@/interfaces/category/Category'

export interface CategoryDetail {
    categoryName: string;
    subCategories: Category[];
}
