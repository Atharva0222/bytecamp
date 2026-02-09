import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SPONSORSHIP_TIERS } from '../constants';
import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 bg-black overflow-hidden">
      {/* Tech Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      {/* Cyberpunk Scanline */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/30 blur-sm animate-[scan_5s_ease-in-out_infinite] pointer-events-none shadow-[0_0_20px_rgba(59,130,246,0.5)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-mono mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            PARTNERSHIP OPPORTUNITIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Fuel the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Revolution</span>
          </motion.h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect with the brightest minds in tech. Become a sponsor and define the future of innovation at ByteCamp 26.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {SPONSORSHIP_TIERS.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative group ${tier.highlight ? 'lg:-mt-12 lg:mb-12' : ''}`}
              >
                {/* Holographic Border */}
                <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-b ${tier.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                {/* Main Card */}
                <div className="relative h-full bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 flex flex-col overflow-hidden">

                  {/* Top Highlight Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.gradient}`} />

                  {/* Header */}
                  <div className="mb-8">
                    <div className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${tier.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide uppercase">{tier.name}</h3>
                    <div className={`text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r ${tier.gradient}`}>
                      {tier.price}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex-1 space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className={`mt-1 w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-${tier.color.split('-')[1]}-500 transition-colors`}>
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-sm text-gray-400 group-hover/item:text-gray-200 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`
                    w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300
                    border border-white/10 hover:border-white/30
                    ${tier.highlight
                      ? `bg-gradient-to-r ${tier.gradient} text-black hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]`
                      : 'bg-white/5 text-white hover:bg-white/10'}
                  `}>
                    Become a Partner
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Decorative Background Elements */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Strip */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm font-mono">
            Looking for a custom package? <a href="#contact" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">Contact our sponsorship team</a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}