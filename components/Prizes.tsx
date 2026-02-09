import React from 'react';
import { motion } from 'framer-motion';
import LightRays from './LightRays';

export default function Prizes() {
  return (
    <section id="prizes" className="py-32 bg-black relative overflow-hidden">
      {/* LightRays WebGL Background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#5778ff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      {/* Ambient Background Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            {/* <span className="px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-mono tracking-wider">
              TOTAL PRIZE POOL: ₹1,00,000+
            </span> */}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Glorious <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300">Rewards</span>
          </motion.h2>
        </div>

        {/* Centered Lottie Trophy Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-72 h-72 md:w-80 md:h-80">
            <iframe
              src="https://lottie.host/embed/8b23c1b5-f597-4147-8087-7eab05110b41/hvX3i9TDiE.lottie"
              className="w-full h-full border-0"
              style={{ background: 'transparent' }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300"
          >
            ₹1,00,000+
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-400 text-lg max-w-md text-center"
          >
            Exciting Prize Pool Awaits!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}