import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Theme() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  
  return (
    <section ref={ref} id="theme" className="py-24 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
      
      {/* Background Parallax Text */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.03]">
        <motion.div style={{ x: xLeft }} className="whitespace-nowrap text-[20vw] font-black leading-none text-white">
          SUSTAINABILITY INNOVATION FUTURE
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-blue-400 font-mono text-sm mb-4"
        >
          THIS YEAR'S THEME
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
        >
          Technology for <br />
          <span className="italic font-serif font-light text-gray-400">Sustainability</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 leading-relaxed"
        >
          We challenge you to build solutions that not only advance technology but also contribute to a greener, more sustainable future. From energy efficiency to waste reduction, how will your code save the planet?
        </motion.p>
      </div>
    </section>
  );
}