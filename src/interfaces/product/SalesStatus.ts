export interface SalesStatus {
    saleName: string;
    status: 'UPCOMING' | 'ACTIVE' | 'ENDED';
    numberSold: number;
    numberAvailable: number;
    startDateTime: string;
    endDateTime: string;
    limitPerUser: number;
}
