import React from 'react';
import { ArtworkType } from '../types';

interface ArtworkCardProps {
  artwork: ArtworkType;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{artwork.title}</h3>
        <p className="text-gray-600 mt-1">by {artwork.artist}</p>
        <p className="text-gray-500 mt-2">{artwork.category}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-600">
            ${artwork.price.toLocaleString()}
          </span>
          <button
            className={`px-4 py-2 rounded-md ${
              artwork.available
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!artwork.available}
          >
            {artwork.available ? 'Add to Cart' : 'Sold'}
          </button>
        </div>
      </div>
    </div>
  );
}