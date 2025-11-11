import {MediaType} from "@/enum/MediaTypeEnum";

export interface Media {
    mediaType: MediaType;
    previewUrl: string;
    url: string;
    displayOrder: number;
}