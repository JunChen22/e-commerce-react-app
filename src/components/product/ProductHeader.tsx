'use client';
import Link from "next/link";
import React from "react";

interface ProductHeaderProps {
    title: string;
    brandName: string;
    brandSlug: string;
    stars: number;       // e.g., 4.3
    ratings: number;     // total number of ratings
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({
                                                                title,
                                                                brandName,
                                                                brandSlug,
                                                                stars,
                                                                ratings,
                                                            }) => {
    const roundedStars = Math.round(stars);

    return (
        <div className="product-header">
            <h1 className="product-title">{title}</h1>
            <div className="brand-line">
                Brand:{" "}
                <Link href={`/brand/${brandSlug}`} className="brand-link">
                    {brandName}
                </Link>
            </div>

            <div className="rating-row">
                <span className="average-row">{stars.toFixed(1)}</span>
                <span className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                          key={i}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill={i < roundedStars ? "#f5a623" : "#e0e0e0"}
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                  ))}
                </span>
                <span className="total">{ratings.toLocaleString()} ratings</span>
            </div>

        <style jsx>{`
        .product-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }
        .product-title {
          font-size: 26px;
          font-weight: 700;
        }
        .brand-line {
          font-size: 15px;
          color: #444;
        }
        .brand-link {
          color: #2563eb;
          text-decoration: none;
        }
        .brand-link:hover {
          text-decoration: underline;
        }
        .rating-row {
            display: flex;
            align-items: center;
            gap: 8px; /* space between average, stars, total */
        }
        .stars {
          display: flex;
          gap: 2px;
        }
        .average-row {
          font-size: 14px;
          color: #555;
        }
        .total {
          font-size: 14px;
          color: #777;
        }
      `}</style>
        </div>
    );
};
