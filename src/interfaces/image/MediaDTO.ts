import {MediaType} from "@/enum/MediaTypeEnum";

export interface MediaDTO {
    mediaType: MediaType;
    previewUrl: string;
    url: string;
    displayOrder: number;
}