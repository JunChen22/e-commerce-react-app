"use client";
import { useEffect, useState } from "react";
import { reviewService } from "@/services/reviewService";
import { RatingBreakdownPanel } from "@/components/review/rating/RatingBreakdownPanel";
import {ProductReview} from "@/interfaces/review/ProductReview";
import {ReviewMediaGallery} from "@/components/review/gallery/ReviewMediaGallery";
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
            <RatingBreakdownPanel slug={slug} data={data.ratingBreakdown} />
            <ReviewMediaGallery slug={slug} pictures={data.pictures} />

            <TopReviewsList reviews={data.topReviews} />
            {/* later: filters, review list, etc. */}
        </section>
    );
}