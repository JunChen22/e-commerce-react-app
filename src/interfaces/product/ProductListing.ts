export interface ProductListingDTO {
  name: string;
  slug: string;
  skuCode: string;
  stars: number;
  ratings: number;
  originalPrice: number;  // TypeScript doesn't have a BigDecimal type, so we'll use number
  listPrice: number;      // Same here, using number instead of BigDecimal
  imageUrl: string;
}