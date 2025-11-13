"use client";

import React, {useState} from "react";
import {ReviewMedia} from "@/interfaces/review/ReviewMedia";
import {ReviewGalleryModal} from "@/components/review/gallery/ReviewGalleryModal";
import {UserReview} from "@/interfaces/review/UserReview";
import {reviewService} from "@/services/reviewService";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {ReviewMediaModal} from "@/components/review/gallery/ReviewMediaModal";

export function ReviewMediaGallery({
                                       pictures,
                                       slug,
                                   }: {
    pictures: ReviewMedia[];
    slug: string;
}) {
    const [selectedReview, setSelectedReview] = useState<UserReview | null>(null);
    const [loading, setLoading] = useState(false);
    const [openGallery, setOpenGallery] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const maxVisible = 6;

    if (!pictures || pictures.length === 0) return null;

    const handleImageClick = async (reviewId: string) => {
        try {
            setLoading(true);
            const detail = await reviewService.getDetailReview(reviewId);
            setSelectedReview(detail);
        } catch (err) {
            console.error("Failed to load review detail:", err);
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => setSelectedReview(null);

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - maxVisible, 0));
    };

    const handleNext = () => {
        setStartIndex((prev) =>
            Math.min(prev + maxVisible, Math.max(0, pictures.length - maxVisible))
        );
    };

    const visiblePictures = pictures.slice(startIndex, startIndex + maxVisible);

    return (
        <section className="review-media-gallery mt-6">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Reviews with images</h3>
                <button
                    className="text-sm text-blue-600 hover:underline"
                    onClick={() => setOpenGallery(true)}
                >
                    See all photos
                </button>
            </div>

            <div className="relative">
                {pictures.length > maxVisible && (
                    <>
                        {startIndex > 0 && (
                            <button
                                onClick={handlePrev}
                                className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white"
                            >
                                <ChevronLeft size={18} />
                            </button>
                        )}
                        {startIndex + maxVisible < pictures.length && (
                            <button
                                onClick={handleNext}
                                className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white"
                            >
                                <ChevronRight size={18} />
                            </button>
                        )}
                    </>
                )}

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 overflow-hidden">
                    {visiblePictures.map((pic) => (
                        <div
                            key={`${pic.reviewId}-${pic.url}`}
                            className="cursor-pointer hover:opacity-80"
                            onClick={() => handleImageClick(pic.reviewId)}
                        >
                            <img
                                src={pic.url}
                                alt="Customer review photo"
                                className="w-full h-24 object-cover rounded-md"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 text-white z-50">
                    Loading review...
                </div>
            )}

            {selectedReview && (
                <ReviewGalleryModal review={selectedReview} onClose={closeModal} />
            )}

            {openGallery && (
                <ReviewMediaModal
                    slug={slug}
                    initialPictures={pictures}
                    onClose={() => setOpenGallery(false)}
                />
            )}

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
