import React from 'react';
import { Check, Trophy } from 'lucide-react';
import { PRIZES } from '../constants';
import { motion } from 'framer-motion';

export default function Prizes() {
  return (
    <section id="prizes" className="py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Prizes</h2>
          <p className="text-gray-500 text-lg">Build the best, take home the <span className="font-bold text-black">gold.</span></p>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-center gap-8">
          {PRIZES.map((prize, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`w-full md:w-1/3 rounded-3xl p-8 border ${
                prize.highlight 
                  ? 'bg-black text-white border-black order-first md:order-2 scale-105 shadow-2xl z-10' 
                  : 'bg-white text-black border-gray-200 order-last md:order-1'
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-lg font-bold opacity-70 mb-2">{prize.place}</h3>
                  <div className="text-5xl font-bold tracking-tight">{prize.amount}</div>
                </div>
                {prize.highlight && <Trophy className="w-10 h-10 text-yellow-400" />}
              </div>

              <ul className="space-y-4 mb-8">
                {prize.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${prize.highlight ? 'text-green-400' : 'text-black'}`} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                prize.highlight 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}>
                View Criteria
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}