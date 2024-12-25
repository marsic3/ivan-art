import React, { useState } from 'react';
import { artworks } from '../../data/artworks';
import ArtworkCard from './ArtworkCard';
import CategoryFilter from './CategoryFilter';

export default function Gallery() {
  const [category, setCategory] = useState<'all' | 'sculpture' | 'painting'>('all');

  const filteredArtworks = category === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <CategoryFilter currentCategory={category} onCategoryChange={setCategory} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
}