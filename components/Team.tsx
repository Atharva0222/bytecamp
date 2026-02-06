import React from 'react';
import { motion } from 'framer-motion';

export default function Team() {
  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Organizing Team</h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden aspect-[21/9] border border-white/10 group"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
            alt="Team Photo" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
             <div>
                <h3 className="text-2xl font-bold text-white">The Nexus Crew</h3>
                <p className="text-gray-300">Dedicated students and professionals bringing this event to life.</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}