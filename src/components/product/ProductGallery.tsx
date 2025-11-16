'use client';
import  React, { useState } from 'react';
import type { Media } from "@/interfaces/image/Media";

export default function ProductGallery({ medias }: { medias: Media[] }) {
    const safeMedias = Array.isArray(medias) ? medias : [];
    const [selected, setSelected] = useState(0);
    const [hovered, setHovered] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
    const [isHovering, setIsHovering] = useState(false);

    const sortedMedias = [...safeMedias].sort(
        (a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
    );

    if (sortedMedias.length === 0) return <div>No media available</div>;

    const active = hovered !== null ? sortedMedias[hovered] : sortedMedias[selected];
    const zoomScale = 1.5; // Zoom factor

    // Thumbnails logic
    const visibleThumbs = sortedMedias.slice(0, 5);
    const remainingCount = sortedMedias.length - 5;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width; // 0 → 1
        const y = (e.clientY - rect.top) / rect.height; // 0 → 1
        setMousePos({ x, y });
    };

    return (
        <div style={{ display: "flex", gap: "16px" }}>
            {/* Vertical Thumbnails */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {visibleThumbs.map((media, index) => (
                    <button
                        key={index}
                        onMouseEnter={() => setSelected(index)} // hover switches main image
                        onMouseLeave={() => setHovered(null)}   // optional, can be removed
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "4px",
                            overflow: "hidden",
                            border: selected === index ? "2px solid #2563eb" : "1px solid #ccc",
                            position: "relative",
                        }}
                    >
                        <img
                            src={media.previewUrl || media.url}
                            alt={`Thumbnail ${index + 1}`}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />

                        {/* Play icon for videos */}
                        {media.mediaType === "video" && (
                            <span
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "rgba(0,0,0,0.3)",
                                    color: "white",
                                    fontSize: "18px",
                                    pointerEvents: "none",
                                }}
                            >
        ▶
      </span>
                        )}
                    </button>
                ))}


                {/* +N button for remaining thumbnails */}
                {remainingCount > 0 && (
                    <button
                        onClick={() => console.log("Show remaining images or open lightbox")}
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            backgroundColor: "#f0f0f0",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        +{remainingCount}
                    </button>
                )}
            </div>

            {/* Main Image */}
            <div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{
                    flex: 1,
                    minHeight: "500px",
                    maxHeight: "700px",
                    overflow: "hidden",
                    borderRadius: "8px",
                    backgroundColor: "#f9f9f9",
                    position: "relative",
                }}
            >
                {active.mediaType === "video" ? (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <video
                            controls
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                display: "block",
                            }}
                            src={active.url}
                            poster={active.previewUrl} // should now show
                        />
                    </div>
                ) : (
                    <img
                        src={active.url}
                        alt={`Media ${selected + 1}`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            transformOrigin: "center",
                            transition: isHovering ? "none" : "transform 0.2s ease-out",
                            transform: isHovering
                                ? `scale(${zoomScale}) translate(${-(mousePos.x - 0.5) * 50}%, ${-(mousePos.y - 0.5) * 50}%)`
                                : "scale(1) translate(0%, 0%)",
                        }}
                    />
                )}
            </div>
        </div>
    );
}