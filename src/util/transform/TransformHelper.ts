// mappers.ts (or transformHelpers.ts)
// import { SaleProductListing } from "@/types/SaleProductListing";
// import { User } from "@/types/User";
// import { getSaleTypeEnum } from "@/helpers/saleTypeHelpers";
// import { getDiscountTypeEnum } from "@/helpers/discountHelpers";

// Function to transform SaleProductListing
// export const transformSaleProductListing = (data: any): SaleProductListing => {
//     return {
//         ...data,
//         saleType: getSaleTypeEnum(data.saleType),
//         discountType: getDiscountTypeEnum(data.discountType),
//     };
// };
//
// // Function to transform User
// export const transformUser = (data: any): User => {
//     return {
//         ...data,
//         status: data.status === "active" ? "ACTIVE" : "INACTIVE", // Example transformation logic
//     };
// };