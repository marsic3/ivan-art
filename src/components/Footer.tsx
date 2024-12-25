import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Figura Gallery</h3>
            <p className="text-gray-400">
              Curating exceptional art and sculptures for discerning collectors.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              123 Art Street<br />
              New York, NY 10001<br />
              contact@figura.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p className="text-gray-400">
              Monday - Friday: 10am - 6pm<br />
              Saturday: 11am - 5pm<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          © 2024 Figura Gallery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}