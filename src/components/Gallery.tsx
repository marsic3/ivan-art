import React, { useState } from 'react';
import { artworks } from '../data/artworks';
import ArtworkCard from './ArtworkCard';

export default function Gallery() {
  const [category, setCategory] = useState<'all' | 'sculpture' | 'painting'>('all');

  const filteredArtworks = category === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setCategory('all')}
          className={`px-4 py-2 rounded-md ${
            category === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setCategory('sculpture')}
          className={`px-4 py-2 rounded-md ${
            category === 'sculpture' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Sculptures
        </button>
        <button
          onClick={() => setCategory('painting')}
          className={`px-4 py-2 rounded-md ${
            category === 'painting' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Paintings
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
}