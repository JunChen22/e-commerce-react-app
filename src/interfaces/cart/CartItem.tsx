export interface CartItem {
    productName: string;
    productSku: string;
    productPic: string;
    quantity: number;
    price: number;
    total: number; // Total price for the given quantity
}