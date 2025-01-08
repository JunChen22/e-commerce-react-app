'use client';
import  React, { useState } from 'react';

export default function ProductGallery({ pictures }: { pictures: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Large Image Container */}
      <div className="relative w-full min-h-[24rem] flex items-center justify-center bg-gray-50 rounded-lg">
        <img
          src={pictures[selectedImage]}
          alt="Product"
          className="max-w-full max-h-[32rem] object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {pictures.map((pic, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-20 rounded-md overflow-hidden ${
              selectedImage === index ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img src={pic} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}