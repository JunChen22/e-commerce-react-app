"use client";
import React, { useEffect, useState, useRef } from "react";
import { productDescriptionService } from "@/services/productDescriptionService";

interface ProductDescriptionProps {
    slug: string;
}

export default function ProductDescription({ slug }: ProductDescriptionProps) {
    const [html, setHtml] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25, rootMargin: "200px" }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible || html) return;

        productDescriptionService.getProductDescription(slug)
            .then((data) => setHtml(data.contentHtml))
            .catch((err) => console.error("Failed to load description:", err));
    }, [isVisible, slug, html]);

    return (
        <div ref={ref} className="container mx-auto px-4 py-8">
            <h2 className="text-xl font-semibold mb-4">Product Description</h2>
            {!html ? (
                <p className="text-gray-400 animate-pulse">Loading description...</p>
            ) : (
                <div
                    className="prose prose-neutral max-w-none"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            )}
        </div>
    );
}
