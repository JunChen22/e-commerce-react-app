"use client";

import React, {useState} from "react";
import {ReviewMedia} from "@/interfaces/review/ReviewMedia";
import {ReviewGalleryModal} from "@/components/review/gallery/ReviewGalleryModal";
import {UserReview} from "@/interfaces/review/UserReview";
import {reviewService} from "@/services/reviewService";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {ReviewMediaModal} from "@/components/review/gallery/ReviewMediaModal";

export function ReviewMediaGallery({pictures, slug}: {
    pictures: ReviewMedia[];
    slug: string;
}) {
    const [selectedReview, setSelectedReview] = useState<UserReview | null>(null);
    const [loading, setLoading] = useState(false);
    const [openGallery, setOpenGallery] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const maxVisible = 4;

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
        if (startIndex === 0) {
            // Wrap to last page - calculate how many full pages we have
            const totalPages = Math.ceil(pictures.length / maxVisible);
            const lastPageStart = (totalPages - 1) * maxVisible;
            setStartIndex(lastPageStart);
        } else {
            setStartIndex((prev) => Math.max(prev - maxVisible, 0));
        }
    };

    const handleNext = () => {
        const nextStart = startIndex + maxVisible;
        if (nextStart >= pictures.length) {
            // Wrap to beginning
            setStartIndex(0);
        } else {
            setStartIndex(nextStart);
        }
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

            <div className="carousel-container">
                <button
                    onClick={handlePrev}
                    className="arrow-button arrow-left"
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
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
                <button
                    onClick={handleNext}
                    className="arrow-button arrow-right"
                >
                    <ChevronRight size={20} />
                </button>
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

                .carousel-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0 50px; /* space for arrows */
                }

                .arrow-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: white;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 10;
                    transition: all 0.2s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .arrow-button:hover {
                    background: #f5f5f5;
                    border-color: #999;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
                }

                .arrow-button.disabled {
                    opacity: 0.3;
                    cursor: not-allowed;
                }

                .arrow-left {
                    left: 0;
                }

                .arrow-right {
                    right: 0;
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

                @media (max-width: 768px) {
                    .carousel-container {
                        padding: 0 40px;
                    }
                    .arrow-button {
                        width: 32px;
                        height: 32px;
                    }
                }
            `}</style>
        </section>
    );
}
