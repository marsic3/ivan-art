import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 h-[500px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544967082-d9d25d867d66"
          alt="Art Gallery"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Sculptural Excellence
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Discover the finest collection of contemporary sculptures and artworks, where form meets emotion in perfect harmony.
        </p>
        <div className="mt-10">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
}