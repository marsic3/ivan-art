import React from 'react';

interface CategoryFilterProps {
  currentCategory: 'all' | 'sculpture' | 'painting';
  onCategoryChange: (category: 'all' | 'sculpture' | 'painting') => void;
}

export default function CategoryFilter({ currentCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-md ${
          currentCategory === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onCategoryChange('sculpture')}
        className={`px-4 py-2 rounded-md ${
          currentCategory === 'sculpture' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        Sculptures
      </button>
      <button
        onClick={() => onCategoryChange('painting')}
        className={`px-4 py-2 rounded-md ${
          currentCategory === 'painting' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        Paintings
      </button>
    </div>
  );
}