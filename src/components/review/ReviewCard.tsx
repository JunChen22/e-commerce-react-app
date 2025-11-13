import {Review} from "@/interfaces/review/Review";
import Link from "next/link";

export function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="review-card">
            <div className="header">
                {/* Avatar clickable → user page */}
                <Link href={`/profile/${review.userId}`}>
                    <img
                        src={review.userAvatar}
                        alt={review.userName}
                        className="avatar cursor-pointer"
                    />
                </Link>

                <div>
                    {/* Name clickable → user page */}
                    <Link href={`/profile/${review.userId}`}>
                        <span className="name cursor-pointer">{review.userName}</span>
                    </Link>

                    {review.verifyStatus === "verified" && <span className="verified">✔ Verified</span>}
                    <div className="stars">{"★".repeat(review.star)}</div>
                </div>
            </div>

            {/* Title clickable → review detail page */}
            <h4 className="title">
                <Link href={`/reviews/${review.id}`} className="cursor-pointer">
                    {review.title}
                </Link>
            </h4>

            {/* Review content */}
            <p className="content">{review.content}</p>

            {/* Optional: media / footer */}

            <style jsx>{`
                .review-card {
                  border: 1px solid #ddd;
                  border-radius: 8px;
                  padding: 1rem;
                  background: #fff;
                }
                .header {
                  display: flex;
                  gap: 0.5rem;
                  align-items: center;
                  margin-bottom: 0.5rem;
                }
                .avatar {
                  width: 36px;
                  height: 36px;
                  border-radius: 50%;
                  object-fit: cover;
                }
                .name {
                  font-weight: 600;
                }
                .verified {
                  margin-left: 0.5rem;
                  font-size: 0.75rem;
                  color: green;
                }
                .stars {
                  color: #f5a623;
                  font-size: 1rem;
                }
                .title {
                  font-weight: 600;
                  margin: 0.3rem 0;
                }
                .content {
                  font-size: 0.95rem;
                  color: #333;
                }
                .media-badge {
                  display: inline-block;
                  margin-top: 0.3rem;
                  color: #555;
                }
                .footer {
                  font-size: 0.85rem;
                  color: #666;
                  margin-top: 0.5rem;
                }
          `}</style>
        </div>
    );
}
