import { ProductDescription } from '@/interfaces/product/ProductDescription';

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/product/description";

export const productDescriptionService = {

    // get product description
    async getProductDescription(slug: string): Promise<ProductDescription> {
        const response = await fetch(`${API_URL}/${slug}`, {cache: "no-store",});
        if (!response.ok) {
            throw new Error(`Failed to fetch product description for ${slug}`);
        }
        return response.json();
    }
};
