import React from 'react';
import { TRACKS_CARDS } from '../constants';
import { motion } from 'framer-motion';

export default function Tracks() {
  return (
    <section id="tracks" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Problem Tracks</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Choose your arena. We have four dedicated tracks designed to test your skills in different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRACKS_CARDS.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-3xl bg-zinc-900 border border-white/5 transition-all duration-300 group ${card.border} ${card.bg}`}
            >
              <div className={`mb-6 p-4 bg-black rounded-2xl w-fit border border-white/10 ${card.color}`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}