import {Review} from "@/interfaces/review/Review";

export function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="review-card">
            <div className="header">
                <img src={review.userAvatar} alt={review.userName} className="avatar" />
                <div>
                    <span className="name">{review.userName}</span>
                    {review.verifyStatus === "verified" && <span className="verified">✔ Verified</span>}
                    <div className="stars">{"★".repeat(review.star)}</div>
                </div>
            </div>

            <h4 className="title">{review.title}</h4>
            <p className="content">{review.content}</p>

            {review.hasMedia && <span className="media-badge">📷</span>}

            <div className="footer">
                {review.helpfulCount} people found this helpful
            </div>

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
