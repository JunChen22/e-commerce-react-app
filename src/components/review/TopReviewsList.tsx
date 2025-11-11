import { ReviewCard } from "./ReviewCard";
import { Review } from "@/interfaces/review/Review";

export function TopReviewsList({ reviews }: { reviews: Review[] }) {
    if (!reviews || reviews.length === 0) return null;

    return (
        <div className="top-reviews-list" style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
            {reviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
            ))}
        </div>
    );
}
