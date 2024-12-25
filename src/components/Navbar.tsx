import React from 'react';
import { ShoppingCart, Shapes } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Shapes className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold">Figura</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Gallery</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Artists</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
            <button className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-indigo-600" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}