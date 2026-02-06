import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            24 Hours of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pure Innovation</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              ByteCamp '25 is more than just a hackathon. It's a gathering of the brightest minds from Mumbai's thriving tech ecosystem, coming together to solve real-world problems.
            </p>
            <p>
              Whether you're a seasoned developer or a first-time hacker, we provide the platform, resources, and mentorship you need. From cutting-edge APIs to unlimited chai, we've got you covered.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <span className="block text-4xl font-bold text-white mb-2">500+</span>
                <span className="text-sm font-mono uppercase tracking-wider">Hackers</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-2">₹1 Lakh+</span>
                <span className="text-sm font-mono uppercase tracking-wider">In Prizes</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-30 blur-xl"></div>
          <div className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=2574&auto=format&fit=crop" 
              alt="Mumbai Tech Event" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}