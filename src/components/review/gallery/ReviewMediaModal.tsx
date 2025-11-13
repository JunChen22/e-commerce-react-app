"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { reviewService } from "@/services/reviewService";
import { ReviewGalleryModal } from "./ReviewGalleryModal";
import { X } from "lucide-react";
import {ReviewMedia} from "@/interfaces/review/ReviewMedia";
import {UserReview} from "@/interfaces/review/UserReview";
import {PaginatedResponse} from "@/interfaces/pagination/PaginatedResponse";

export function ReviewMediaModal({
                                            slug,
                                            initialPictures,
                                            onClose,
                                        }: {
    slug: string;
    initialPictures: ReviewMedia[];
    onClose: () => void;
}) {
    const [pictures, setPictures] = useState<ReviewMedia[]>(initialPictures || []);
    const [page, setPage] = useState(1); // page 0 already loaded
    const [hasNext, setHasNext] = useState(true);
    const [loading, setLoading] = useState(false);
    const [selectedReview, setSelectedReview] = useState<UserReview | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Infinite scroll loading
    const handleScroll = useCallback(async () => {
        if (!hasNext || loading) return;
        const scrollPos = window.innerHeight + window.scrollY;
        const threshold = document.body.offsetHeight - 300;
        if (scrollPos >= threshold) {
            await loadNextPage();
        }
    }, [hasNext, loading]);

    const loadNextPage = async () => {
        try {
            setLoading(true);
            const nextPage = page + 1;
            const res: PaginatedResponse<ReviewMedia> =
                await reviewService.getPaginatedReviewMedia(slug, nextPage, 5);

            setPictures((prev) => [...prev, ...res.data]);
            setPage(nextPage);
            setHasNext(res.meta.hasNextPage);
        } catch (err) {
            console.error("Failed to load more media:", err);
        } finally {
            setLoading(false);
        }
    };

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

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    // Infinite scroll listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center overflow-y-auto">
            <div
                ref={modalRef}
                className="relative bg-white rounded-lg shadow-xl p-4 max-w-5xl w-full mx-4 mt-10 mb-10"
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    <X size={20} />
                </button>

                <h3 className="text-xl font-semibold mb-4">All Customer Photos</h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {pictures.map((pic) => (
                        <div
                            key={`${pic.reviewId}-${pic.url}`}
                            className="cursor-pointer hover:opacity-80"
                            onClick={() => handleImageClick(pic.reviewId)}
                        >
                            <img
                                src={pic.url}
                                alt="Customer review photo"
                                className="w-full h-28 object-cover rounded-md"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {loading && (
                    <div className="text-center text-gray-500 my-4">Loading...</div>
                )}
            </div>

            {selectedReview && (
                <ReviewGalleryModal
                    review={selectedReview}
                    onClose={() => setSelectedReview(null)}
                />
            )}
        </div>
    );
}
