"use client";
import { useEffect, useState } from "react";
import { reviewService } from "@/services/reviewService";
import { RatingBreakdownPanel } from "@/components/review/rating/RatingBreakdownPanel";
import {ProductReview} from "@/interfaces/review/ProductReview";
import {ReviewMediaGallery} from "@/components/review/gallery/ReviewMediaGallery";
import {TopReviewsList} from "@/components/review/TopReviewsList";
import {ReviewSummary} from "@/components/review/summary/ReviewSummary";
import {WriteReview} from "@/components/review/create/WriteReview";

export default function ProductReviewSection({ slug }: { slug: string }) {
    const [data, setData] = useState<ProductReview | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        reviewService.getProductReviews(slug)
            .then(setData)
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) {
        return <p>Loading reviews...</p>;
    }

    const hasReviews = data && data.ratingBreakdown && data.ratingBreakdown.totalReviews > 0;

    return (
        <section className="review-section">
            <div className="review-layout">
                <div className="left-column">
                    <RatingBreakdownPanel slug={slug} data={data?.ratingBreakdown || null} />
                    <WriteReview slug={slug} />
                </div>

                <div className="right-column">
                    {hasReviews ? (
                        <>
                            <ReviewSummary slug={slug} />
                            <ReviewMediaGallery slug={slug} pictures={data.pictures} />
                            <TopReviewsList reviews={data.topReviews} />
                        </>
                    ) : (
                        <div className="no-reviews">
                            <h3>No customer reviews</h3>
                            <p>Be the first to review this product!</p>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .review-section {
                    margin: 0 auto;
                    padding: 2rem 1rem;
                }

                .review-layout {
                    display: flex;
                    gap: 2rem;
                    align-items: flex-start;
                }

                .left-column {
                    flex: 0 0 30%; /* fixed 30% width */
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    top: 2rem; /* sticks when scrolling */
                }

                .right-column {
                    flex: 1; /* takes remaining space */
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .no-reviews {
                    padding: 3rem 2rem;
                    text-align: center;
                    background: #f9f9f9;
                    border-radius: 8px;
                    border: 1px solid #ddd;
                }

                .no-reviews h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin: 0 0 0.5rem 0;
                    color: #333;
                }

                .no-reviews p {
                    font-size: 1rem;
                    color: #666;
                    margin: 0;
                }
                
                @media (max-width: 768px) {
                    .review-layout {
                        flex-direction: column;
                    }

                    .left-column {
                        flex: 1;
                        width: 100%;
                        position: static;
                    }
                }
            `}</style>
        </section>
    );
}