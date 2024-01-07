import { OrderAddress } from './OrderAddress'; 

interface OrderDetails {
    orderProductSku: Record<string, number>;
    payType: number;
    coupon: string;
    discountAmount: number;
    amount: number;
    address: OrderAddress;
}