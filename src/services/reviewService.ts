import { Review } from '@/interfaces/review/Review';
import {ProductReview} from "@/interfaces/review/ProductReview";
import {PaginatedResponse} from "@/interfaces/pagination/PaginatedResponse";
import {ListProductReviewsParams} from "@/interfaces/review/ListProductReviewsParams";
import {UserReview} from "@/interfaces/review/UserReview";
import {UserReviewPreview} from "@/interfaces/review/UserReviewPreview";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/review";

export const reviewService = {

    // get product review, default scrolled down
    async getProductReviews(slug: string): Promise<ProductReview> {
        const response = await fetch(`${API_URL}/product/${slug}`, {cache: "no-store"});
        if (!response.ok) {
            throw new Error(`Failed to fetch product review for ${slug}`);
        }
        return response.json();
    },

    async listProductReviews(slug: string, {
        sku,
        verifiedOnly = false,
        hasMediaOnly = false,
        type = "ALL",
        stars,
        sortBy = "TOP",
        page = 1,
        size = 5,
    }: ListProductReviewsParams): Promise<PaginatedResponse<Review>> {
        const params = new URLSearchParams();

        if (sku) params.append("sku", sku);
        params.append("verifiedOnly", String(verifiedOnly));
        params.append("hasMediaOnly", String(hasMediaOnly));
        params.append("type", type);
        if (stars) params.append("stars", String(stars));
        params.append("sortBy", sortBy);
        params.append("page", String(page));
        params.append("size", String(size));

        const response = await fetch(`${API_URL}/listProductReview/${slug}?${params.toString()}, {cache: "no-store"}`);

        if (!response.ok) throw new Error(`Failed to fetch product reviews (${response.status})`);
        return response.json();
    },

    async getDetailReview(reviewId: string): Promise<UserReview> {
        const response = await fetch(`${API_URL}/detail/${reviewId}`, {cache: "no-store"});
        if (!response.ok) {
            throw new Error(`Failed to fetch detail review for ${reviewId}`);
        }
        return response.json();
    },

    async listUserReviews(userId: string): Promise<PaginatedResponse<UserReviewPreview>> {
        const response = await fetch(`${API_URL}/user/${userId}`, {cache: "no-store"});
        if (!response.ok) {
            throw new Error(`Failed to fetch user reviews for ${userId}`);
        }
        return response.json();
    }
};
