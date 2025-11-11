export interface Review {
    id: string;
    skuCode: string;
    userId: string;
    userName: string;
    userAvatar: string;
    star: number;
    title: string;
    helpfulCount: number;
    content: string;
    hasMedia: boolean;
    verifyStatus: "verified" | "pending" | "not_verified";
    createdAt: string;
    updatedAt: string;
}
