import React from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { motion } from 'framer-motion';

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 bg-black relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Event Schedule</h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {TIMELINE_EVENTS.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12 md:pl-0"
            >
              {/* Dot */}
              <div className="absolute left-[-5px] top-2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              
              <div className="md:flex items-start justify-between group">
                <div className="md:w-1/3 mb-2 md:mb-0 md:text-right md:pr-12">
                  <span className="text-blue-400 font-mono text-sm">{event.time}</span>
                </div>
                <div className="md:w-2/3 md:pl-12 relative">
                  {/* Desktop connecting line */}
                  <div className="hidden md:block absolute left-[-6px] top-2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10"></div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{event.title}</h3>
                  <p className="text-gray-500">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}