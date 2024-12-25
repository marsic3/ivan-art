import React from 'react';
import { ArtworkType } from '../../types';
import { formatCurrency } from '../../utils/formatters';

interface ArtworkCardProps {
  artwork: ArtworkType;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  const {
    title,
    artist,
    price,
    image,
    description,
    dimensions,
    material,
    available
  } = artwork;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative aspect-w-4 aspect-h-3">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover"
        />
        {!available && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Sold</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-1">by {artist}</p>
        
        <div className="mt-4 space-y-2">
          {material && (
            <p className="text-sm text-gray-500">
              Material: {material}
            </p>
          )}
          {dimensions && (
            <p className="text-sm text-gray-500">
              Dimensions: {dimensions}
            </p>
          )}
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-600">
            {formatCurrency(price)}
          </span>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              available
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!available}
          >
            {available ? 'Add to Cart' : 'Sold'}
          </button>
        </div>
      </div>
    </div>
  );
}