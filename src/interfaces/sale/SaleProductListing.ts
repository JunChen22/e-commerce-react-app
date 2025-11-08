export interface SaleProductListing {
    name: string;
    slug: string;
    skuCode: string;
    stars: number;
    ratings: number;
    originalPrice: number;
    listPrice: number;
    imageUrl: string;
    discountPercentage: number;
    numberSold: number;
    numberAvailable: number;
    endDateTime: string;
}
