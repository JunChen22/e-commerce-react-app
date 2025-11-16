"use client";

import { useEffect, useState } from "react";
import { reviewService } from "@/services/reviewService";
import { useParams, useRouter } from "next/navigation";
import { UserReview } from "@/interfaces/review/UserReview";

export default function ReviewDetailPage() {
    const { reviewId } = useParams();
    const router = useRouter();
    const [data, setData] = useState<UserReview | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!reviewId) return;
        const id = Array.isArray(reviewId) ? reviewId[0] : reviewId;
        reviewService.getDetailReview(id)
            .then(setData)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [reviewId]);

    if (loading) return <p>Loading review...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>No review found.</p>;

    const { review, medias } = data;

    return (
        <section className="review-detail-page">
            <button className="back-btn" onClick={() => router.back()}>← Back</button>

            <div className="header">
                <img src={review.userAvatar} alt={review.userName} className="avatar" />
                <div className="user-info">
                    <div className="name">{review.userName}</div>
                    {review.verifyStatus === "verified" && <span className="verified">✔ Verified</span>}
                    <div className="stars">{"★".repeat(review.star)}</div>
                </div>
            </div>

            <h2 className="title">{review.title}</h2>
            <p className="content">{review.content}</p>

            {medias.length > 0 && (
                <div className="media-gallery">
                    {medias.map((m) => (
                        <img
                            key={m.url}
                            src={m.url}
                            alt="Review media"
                            className="media-img"
                        />
                    ))}
                </div>
            )}

            <div className="footer">
                {review.helpfulCount} people found this helpful
            </div>

        <style jsx>{`
        .review-detail-page {
          max-width: 700px;
          margin: 2rem auto;
          padding: 1rem;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .back-btn {
          margin-bottom: 1rem;
          background: none;
          border: none;
          color: #0070f3;
          cursor: pointer;
        }
        .header {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          margin-bottom: 1rem;
        }
        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
        }
        .user-info {
          display: flex;
          flex-direction: column;
        }
        .name {
          font-weight: 600;
        }
        .verified {
          font-size: 0.75rem;
          color: green;
        }
        .stars {
          color: #f5a623;
          font-size: 1rem;
        }
        .title {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0.5rem 0;
        }
        .content {
          margin-bottom: 1rem;
        }
        .media-gallery {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          margin-bottom: 1rem;
        }
        .media-img {
          height: 120px;
          width: 120px;
          object-fit: cover;
          border-radius: 6px;
          flex-shrink: 0;
        }
        .footer {
          font-size: 0.85rem;
          color: #666;
        }
      `}</style>
        </section>
    );
}
