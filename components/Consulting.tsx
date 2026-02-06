import React from 'react';
import { CONSULTING_CARDS } from '../constants';

export default function Consulting() {
  return (
    <section id="expertise" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">Consulting</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Step into the Future with Confidence, Grow Your Business with Our Advanced Technology and <span className="text-white font-semibold">Expert Consulting Services!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONSULTING_CARDS.map((card, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="mb-6 p-3 bg-blue-500/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}