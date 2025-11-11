import {Review} from "@/interfaces/review/Review";
import {RatingBreakdown} from "@/interfaces/review/RatingBreakdown";
import {ReviewMedia} from "@/interfaces/review/ReviewMedia";

export interface ProductReview {
    ratingBreakdown: RatingBreakdown
    topReviews: Review[];
    pictures: ReviewMedia[];
}
