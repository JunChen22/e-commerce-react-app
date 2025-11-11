export interface PaginationMeta {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    sortBy?: "TOP" | "RECENT";
}
