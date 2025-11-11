import {Review} from "@/interfaces/review/Review";
import {Media} from "@/interfaces/image/Media";

export interface UserReview {
    review: Review;
    medias: Media[];
}
