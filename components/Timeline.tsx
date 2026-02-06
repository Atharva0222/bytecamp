import React, { useRef } from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClipboardCheck, Mic2, Terminal, Lightbulb, Coffee, UploadCloud, Clock } from 'lucide-react';

const ICONS = [ClipboardCheck, Mic2, Terminal, Lightbulb, Coffee, UploadCloud];

interface TimelineItemProps {
  event: any;
  Icon: any;
  isEven: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, Icon, isEven, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Spacer for desktop alignment */}
      <div className="hidden md:block w-5/12" />

      {/* Central Node */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
        <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:border-blue-500 transition-colors duration-300">
           <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]" />
        </div>
      </div>

      {/* Content Card */}
      <div className="pl-24 md:pl-0 w-full md:w-5/12">
        <div className={`p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-500 group`}>
            <div className="bg-zinc-950/90 backdrop-blur-xl p-6 md:p-8 rounded-xl border border-white/5 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                            <Icon size={20} />
                        </div>
                        <span className="font-mono text-sm text-blue-300 tracking-wider border border-blue-500/20 px-2 py-0.5 rounded-full bg-blue-500/5">
                            {event.time}
                        </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                        {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {event.description}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-32 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20 md:mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Timeline</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From kickoff to the final pitch, here is your roadmap for the 24-hour sprint.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto pb-20">
          {/* Central Line Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />
          
          {/* Filling Line - Animated Gradient */}
          <motion.div 
            style={{ height }}
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-0" 
          />

          <div className="space-y-12 md:space-y-0 relative">
            {TIMELINE_EVENTS.map((event, index) => {
              const Icon = ICONS[index % ICONS.length] || Clock;
              const isEven = index % 2 === 0;

              return (
                <TimelineItem 
                  key={index} 
                  event={event} 
                  Icon={Icon} 
                  isEven={isEven} 
                  index={index} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}