import React from 'react';
import { SOLUTIONS_CARDS } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How We Secure Your Future
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Comprehensive solutions tailored to meet your unique needs, our services designed to enhance efficiency, improve performance, and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS_CARDS.map((card, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>
              <div className={`flex items-center gap-2 text-sm font-semibold ${card.color}`}>
                <div className="w-2 h-2 rounded-full bg-current"></div>
                {card.action}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-8 py-3 rounded-full transition-all">
            Request Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}