"use client";
import { useRouter } from "next/navigation";
import {RatingBreakdown} from "@/interfaces/review/RatingBreakdown";

export function RatingBreakdownPanel({data, slug}: {
    data: RatingBreakdown;
    slug: string;
}) {
    const router = useRouter();
    if (!data) return null;

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
        <div className="rating-breakdown">
            <h3> Customer reviews </h3>
            <div className="rating-summary">
                <div className="summary-row">
                    <span className="stars">
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
                  <span className="average-row">{averageRating.toFixed(1)} out of 5</span>
                </div>
                <p className="total">{totalReviews.toLocaleString()} ratings</p>
            </div>

            <div className="bars">
                {stars.map(({ label, count }) => (
                    <div
                        key={label}
                        className={`bar-row ${count === 0 ? "disabled" : ""}`}
                        onClick={() => handleClick(label, count)}
                    >
                        <span className="label">{label} star</span>
                        <div className="bar-container">
                            <div
                                className="bar-fill"
                                style={{ width: `${getPercent(count)}%` }}
                            />
                        </div>
                        <span className="percent">{getPercent(count)}%</span>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .rating-breakdown {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    background: #fff;
                    padding: 1.5rem;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    max-width: 400px;
                }

                .rating-breakdown h3 {
                    font-size: 1.65rem;
                    font-weight: 700;
                    color: #000;
                }


                // the stars
                .rating-summary {
                    margin-top: -0.75rem;
                    margin-bottom: 1rem;
                    text-align: center;
                }

                .summary-row {
                    display: flex;
                    align-items: center; /* vertically center stars and text */
                    gap: 0.75rem; /* stars closer together */
                }

                .stars svg {
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: -5px; /* tighten spacing between stars */
                }

                .average-row {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.2rem;
                    line-height: 1;
                    font-size: 1.5rem;
                    color: #000;
                    font-weight: 400;
                }

                .total {
                    margin-top: 0.3rem;
                    text-align: left;
                    font-size: 1.2rem; /* slightly bigger total ratings */
                    color: #666;
                }


                // the bars
                .bars {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-left: 0; /* align with rating summary */
                }

                .bar-row {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    cursor: pointer;
                    transition: background 0.2s ease;
                    padding: 0.3rem 0.5rem;
                    border-radius: 4px;
                }

                .label {
                    text-align: left;
                    font-weight: 500;
                    font-size: 0.95rem;
                    color: #4a43ac;
                    flex-shrink: 0; /* prevents label from shrinking */
                }

                .bar-container {
                    flex: 1;
                    height: 24px;
                    border-radius: 4px;
                    border: 1px solid #2e1818;
                    overflow: hidden;
                }

                .bar-fill {
                    height: 100%;
                    background: #f5a623;
                    transition: width 0.4s ease;
                }

                .percent {
                    width: 3rem;
                    text-align: center;
                    font-size: 0.9rem;
                    color: #4a43ac;
                    font-variant-numeric: tabular-nums;
                    flex-shrink: 0; /* prevents percent from shrinking */
                }

                .bar-row:hover:not(.disabled) .label,
                .bar-row:hover:not(.disabled) .percent {
                    text-decoration: underline;
                    color: #007185; /* Amazon-like blue color, or use any color you prefer */
                }

                .bar-row:hover:not(.disabled) {
                    background: transparent; /* remove the background change if you don't want it */
                }
            `}</style>
        </div>
    );
}
