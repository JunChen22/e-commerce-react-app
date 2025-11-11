import React from "react";
import {RatingBreakdown} from "@/interfaces/review/RatingBreakdown";

export function RatingBreakdownPanel({ data }: { data: RatingBreakdown }) {
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

    return (
        <div className="rating-breakdown">
            <div className="rating-summary">
                <h3 className="average">{averageRating.toFixed(1)}</h3>
                <div className="stars">{"★".repeat(Math.round(averageRating))}</div>
                <p className="total">{totalReviews} total reviews</p>
            </div>

            <div className="bars">
                {stars.map(({ label, count }) => (
                    <div key={label} className="bar-row">
                        <span className="label">{label}★</span>
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
            .rating-summary {
              text-align: center;
              margin-bottom: 1rem;
            }
            .average {
              font-size: 2.5rem;
              margin: 0;
            }
            .stars {
              color: #f5a623;
              font-size: 1.2rem;
              letter-spacing: 2px;
            }
            .total {
              color: #666;
              font-size: 0.9rem;
            }
            .bars {
              display: flex;
              flex-direction: column;
              gap: 0.4rem;
            }
            .bar-row {
              display: flex;
              align-items: center;
              gap: 0.5rem;
            }
            .label {
              width: 2rem;
              text-align: right;
              font-weight: 500;
            }
            .bar-container {
              flex: 1;
              height: 10px;
              background: #eee;
              border-radius: 4px;
              overflow: hidden;
            }
            .bar-fill {
              height: 100%;
              background: #f5a623;
              transition: width 0.4s ease;
            }
            .percent {
              width: 3rem;
              text-align: right;
              font-size: 0.85rem;
              color: #444;
            }
          `}</style>
        </div>
    );
}
