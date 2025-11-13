import { useRef, useEffect } from "react";
import { X } from "lucide-react";
import {UserReview} from "@/interfaces/review/UserReview";

export function ReviewGalleryModal({review, onClose,}: {
    review: UserReview;
    onClose: () => void;
}) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    // Optional: close with Escape key
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
            <div
                ref={modalRef}
                className="relative bg-white rounded-xl max-w-2xl w-full p-4 shadow-lg overflow-y-auto max-h-[90vh]"
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                    aria-label="Close review modal"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col items-center space-y-3">
                    <div className="w-full">
                        <h4 className="font-semibold text-lg mb-1">
                            {review.review.userName}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                            Rating: {review.review.star} ★
                        </p>
                        <p className="text-gray-800">{review.review.content}</p>
                    </div>

                    {review.medias && review.medias.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
                            {review.medias.map((m, i) => (
                                <img
                                    key={i}
                                    src={m.url}
                                    alt="Review photo"
                                    className="w-full h-40 object-cover rounded-md"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
