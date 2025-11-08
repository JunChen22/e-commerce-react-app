import { ServiceName } from "@/enum/ServiceNameEnum";

// Helper function to map string to enum
export const getServiceNameEnum = (serviceName: string): ServiceName => {
    switch (serviceName.toLowerCase()) {
        case "admin":
            return ServiceName.ADMIN;
        case "cms":
            return ServiceName.CMS;
        case "oms":
            return ServiceName.OMS;
        case "pms":
            return ServiceName.PMS;
        case "sms":
            return ServiceName.SMS;
        case "ums":
            return ServiceName.UMS;
        case "auth":
            return ServiceName.AUTH;
        case "notification":
            return ServiceName.NOTIFICATION;
        default:
            throw new Error(`Unknown service name: ${serviceName}`);
    }
};