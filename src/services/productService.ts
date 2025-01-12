import { ProductListing } from '@/interfaces/product/ProductListing';
import { ProductDetail } from '@/interfaces/product/ProductDetail';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const productService = {

    // Fetch all product listing
    async getAllProducts(): Promise<ProductListing[]> {
        const response = await fetch(`${API_URL}/product/listAll`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return response.json();
    },

    // Fetch all products with pagination
    async getAllProductsWithPagination(page: number, size: number): Promise<ProductListing[]> {
        const response = await fetch(`${API_URL}/product/list?page=${page}&size=${size}`);
        if (!response.ok) {
            throw new Error('Failed to fetch products with pagination');
        }
        return response.json();
    },

    // Fetch product by category
    async getProductByCategory(categorySlug: string): Promise<ProductDetail> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/category/${categorySlug}`, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('Failed to fetch product by category');
        }
        return response.json();
    },

    // Fetch product details
    async getProductDetail(slug: string, skuCode: string): Promise<ProductDetail> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${slug}/${skuCode}`, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('Failed to fetch product detail');
        }
        return response.json();
    }
};
