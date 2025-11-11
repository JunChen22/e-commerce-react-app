export interface ListProductReviewsParams {
    sku?: string;
    verifiedOnly?: boolean;
    hasMediaOnly?: boolean;
    type?: "ALL" | "POSITIVE" | "CRITICAL";
    stars?: number;
    sortBy?: "TOP" | "RECENT";
    page?: number;
    size?: number;
}