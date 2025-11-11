import {PaginationMeta} from "@/interfaces/pagination/PaginationMeta";

export interface PaginatedResponse<T> {
    data: T[];
    meta: PaginationMeta;
}