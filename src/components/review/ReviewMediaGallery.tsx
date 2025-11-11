import React from "react";
import {ReviewMedia} from "@/interfaces/review/ReviewMedia";

export function ReviewMediaGallery({ pictures }: { pictures: ReviewMedia[] }) {
    if (!pictures || pictures.length === 0) return null;

    return (
        <section className="review-media-gallery">
            <h3>Reviews with images</h3>
            <div className="gallery-grid">
                {pictures.map((pic) => (
                    <div key={pic.reviewId} className="image-wrapper">
                        <img
                            src={`${pic.url}`}
                            alt="Customer review photo"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

        <style jsx>{`
        .review-media-gallery {
          margin-top: 2rem;
        }

        h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
          gap: 8px;
        }

        .image-wrapper {
          aspect-ratio: 1;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          background: #f9f9f9;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.2s ease;
        }

        .image-wrapper:hover img {
          transform: scale(1.05);
        }
      `}</style>
        </section>
    );
}
