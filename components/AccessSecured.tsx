import React from 'react';

export default function AccessSecured() {
  return (
    <section className="h-[80vh] bg-black flex items-center justify-center sticky top-0 z-0">
      <div className="text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Access Secured.
        </h2>
        <p className="text-2xl md:text-4xl text-gray-500 font-medium">
          Your data, safely locked in.
        </p>
      </div>
    </section>
  );
}