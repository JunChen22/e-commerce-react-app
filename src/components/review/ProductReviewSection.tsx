"use client";

import { useEffect, useState } from "react";
import { reviewService } from "@/services/reviewService";
import { RatingBreakdownPanel } from "@/components/review/rating/RatingBreakdownPanel";
import {ProductReview} from "@/interfaces/review/ProductReview";
import {ReviewMediaGallery} from "@/components/review/ReviewMediaGallery";
import {TopReviewsList} from "@/components/review/TopReviewsList";

export default function ProductReviewSection({ slug }: { slug: string }) {
    const [data, setData] = useState<ProductReview | null>(null);

    useEffect(() => {
        reviewService.getProductReviews(slug).then(setData);
    }, [slug]);

    if (!data || !data.ratingBreakdown) {
        return <p>Loading reviews...</p>;
    }

    return (
        <section className="review-section">
            <h2>Customer Reviews</h2>
            <RatingBreakdownPanel data={data.ratingBreakdown} />
            <ReviewMediaGallery pictures={data.pictures} />

            <TopReviewsList reviews={data.topReviews} />
            {/* later: filters, review list, etc. */}
        </section>
    );
}