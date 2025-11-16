"use client";
import { useRouter } from "next/navigation";
import {RatingBreakdown} from "@/interfaces/review/RatingBreakdown";
import {useState} from "react";
import styles from "./RatingBreakdownPanel.module.css";
import clsx from "clsx";

export function RatingBreakdownPanel({data, slug}: {
    data: RatingBreakdown | null;
    slug: string;
}) {
    const router = useRouter();

    // if product have no reviews, fallback value
    if (!data) {
        data = {
            averageRating: 0,
            totalReviews: 0,
            oneStar: 0,
            twoStar: 0,
            threeStar: 0,
            fourStar: 0,
            fiveStar: 0
        };
    }

    const [isExpanded, setIsExpanded] = useState(false);

    const {
        totalReviews,
        averageRating,
        oneStar,
        twoStar,
        threeStar,
        fourStar,
        fiveStar,
    } = data;

    const getPercent = (count: number) =>
        totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;

    const stars = [
        { label: "5", count: fiveStar },
        { label: "4", count: fourStar },
        { label: "3", count: threeStar },
        { label: "2", count: twoStar },
        { label: "1", count: oneStar },
    ];

    const handleClick = (stars: string, count: number) => {
        if (count === 0) return;
        router.push(`/product/${slug}/reviews?stars=${stars}`);
    };

    return (
        <div className={styles.ratingBreakdown}>
            <h3> Customer reviews </h3>

            {totalReviews > 0 && (
                <div className={styles.ratingSummary}>
                    <div className={styles.summaryRow}>
                        <span className={styles.stars}>
                          {Array.from({ length: 5 }).map((_, i) => (
                              <svg
                                  key={i}
                                  width="30"
                                  height="30"
                                  viewBox="0 0 24 24"
                                  fill={i < Math.round(averageRating) ? "#f5a623" : "#e0e0e0"}
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                          ))}
                        </span>
                        <span className={styles.averageRow}>{averageRating.toFixed(1)} out of 5</span>
                    </div>
                    <p className={styles.total}>{totalReviews.toLocaleString()} ratings</p>
                </div>
            )}

            <div className={styles.bars}>
                {stars.map(({ label, count }) => (
                    <div
                        key={label}
                        // className={`bar-row ${count === 0 ? "disabled" : ""}`} // TODO: need to fix the css file
                        className={styles.barRow}
                        onClick={() => handleClick(label, count)}
                    >
                        <span className={styles.label}>{label} star</span>
                        <div className={styles.barContainer}>
                            <div
                                className={styles.barFill}
                                style={{ width: `${getPercent(count)}%` }}
                            />
                        </div>
                        <span className={styles.percent}>{getPercent(count)}%</span>
                    </div>
                ))}
            </div>

            <div className={styles.infoDropdown}>
                <h4
                    className={styles.infoHeader}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    How customer reviews and ratings work
                    <svg
                        className={`arrow ${isExpanded ? 'expanded' : ''}`}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </h4>
                {isExpanded && (
                    <div className={styles.infoContent}>
                        <p>
                            Customer Reviews, including Product Star Ratings help customers to learn more about
                            the product and decide whether it is the right product for them.
                        </p>

                        <p>
                            To calculate the overall star rating and percentage breakdown by star, we don’t use a simple average.
                            Instead, our system considers things like how recent a review is and if the reviewer bought
                            the item on shop. It also analyzed reviews to verify trustworthiness.
                        </p>
                        <a
                            href="https://localhost:8080/reviews-info"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.infoLink}
                        >
                            Learn more how customers reviews work on my-shop
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
