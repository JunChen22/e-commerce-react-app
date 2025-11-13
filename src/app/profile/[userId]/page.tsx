"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { reviewService } from "@/services/reviewService";
import { PaginatedResponse } from "@/interfaces/pagination/PaginatedResponse";
import { UserReviewPreview } from "@/interfaces/review/UserReviewPreview";

export default function UserReviewPage() {
    const { userId } = useParams();
    const [data, setData] = useState<PaginatedResponse<UserReviewPreview> | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const pageSize = 5;

    useEffect(() => {
        if (!userId) return;

        const id = Array.isArray(userId) ? userId[0] : userId;

        setLoading(true);
        reviewService.listUserReviews(id)
            .then(setData)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [userId, page]);

    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data || data.data.length === 0) return <p>No reviews found.</p>;

    return (
        <section className="user-review-page">
            <h2>User Reviews</h2>

            <div className="reviews-list">
                {data.data.map((review) => (
                    <div key={review.reviewId} className="review-card">
                        <img src={review.productSkuCoverImage} alt="Product cover" className="product-thumbnail" />
                        <div className="review-info">
                            <div className="stars">{"★".repeat(review.star)}</div>
                            <h3 className="title">{review.title}</h3>
                            <p className="snippet">{review.snippet}</p>
                            <div className="footer">{review.helpfulCount} people found this helpful</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination buttons */}
            <div className="pagination">
                <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>Previous</button>
                <span>Page {page} of {data.meta.totalPages}</span>
                <button
                    onClick={() => setPage((p) => Math.min(p + 1, data.meta.totalPages))}
                    disabled={!data.meta.hasNextPage}
                >
                    Next
                </button>
            </div>

            <style jsx>{`
        .user-review-page {
          max-width: 900px;
          margin: 2rem auto;
          padding: 1rem;
          background: #fff;
          border-radius: 8px;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .review-card {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          background: #fafafa;
        }

        .product-thumbnail {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .review-info {
          flex: 1;
        }

        .stars {
          color: #f5a623;
        }

        .title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0.2rem 0;
        }

        .snippet {
          font-size: 0.95rem;
          color: #333;
        }

        .footer {
          font-size: 0.85rem;
          color: #666;
          margin-top: 0.3rem;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .pagination button {
          padding: 0.4rem 0.8rem;
          border: 1px solid #ddd;
          background: #fff;
          border-radius: 4px;
          cursor: pointer;
        }

        .pagination button:disabled {
          opacity: 0.5;
          cursor: default;
        }
      `}</style>
        </section>
    );
}
