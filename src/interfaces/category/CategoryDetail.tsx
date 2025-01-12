import { CategoryDTO } from '@/interfaces/category/CategoryDTO'

export interface CategoryDetail {
    categoryName: string;
    subCategories: CategoryDTO[];
}
