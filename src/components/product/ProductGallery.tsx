'use client';
import  React, { useState } from 'react';
import type { MediaDTO } from "@/interfaces/image/MediaDTO";

export default function ProductGallery({ medias }: { medias: MediaDTO[] }) {
    const safeMedias = Array.isArray(medias) ? medias : [];

    const [selected, setSelected] = useState(0);

    // Sort pictures by displayOrder (optional, if not already sorted)
    const sortedMedias = [...safeMedias].sort(
        (a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
    );

    if (sortedMedias.length === 0) {
        return <div className="text-gray-500">No media available</div>;
    }

    const active = sortedMedias[selected];

    return (
    <div className="space-y-4">
      {/* Large Image Container */}
      <div className="relative w-full min-h-[24rem] flex items-center justify-center bg-gray-50 rounded-lg">
          {active.mediaType === "video" ? (
              <video
                  controls
                  className="max-w-full max-h-[32rem] rounded-lg"
                  src={active.url}
              />
          ) : (
              <img
                  src={active.url}
                  alt={`Media ${selected + 1}`}
                  className="max-w-full max-h-[32rem] object-contain"
              />
          )}
      </div>

      {/* Thumbnails */}
        <div className="grid grid-cols-5 gap-2">
            {sortedMedias.map((media, index) => (
                <button
                    key={index}
                    onClick={() => setSelected(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden ${
                        selected === index ? "ring-2 ring-blue-500" : ""
                    }`}
                >
                    {media.mediaType === "video" ? (
                        <div className="relative w-full h-full">
                            <img
                                src={media.previewUrl}
                                alt={`Video thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black/40">
                  ▶
                </span>
                        </div>
                    ) : (
                        <img
                            src={media.previewUrl || media.url}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    )}
                </button>
            ))}
        </div>
    </div>
  );
}