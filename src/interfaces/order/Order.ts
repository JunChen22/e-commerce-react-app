import { OrderItem } from './OrderItem'; 

interface Order {
    orderSn: string;
    memberEmail: string;
    totalAmount: number;
    promotionAmount: number;
    couponAmount: number;
    discountAmount: number;
    shippingCost: number;
    payAmount: number;
    receiverPhone: string;
    receiverName: string;
    receiverDetailAddress: string;
    receiverCity: string;
    receiverState: string;
    receiverZipCode: string;
    deliveryCompany: string;
    deliveryTrackingNumber: string;
    deliveryTime: null | string; // Assuming deliveryTime can be a string or null
    status: number;
    comment: string;
    orderItemList: OrderItem[];
}
