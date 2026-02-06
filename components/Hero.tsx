import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ShootingGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Grid config
    const gridSize = 50;
    const lines: { x: number, y: number, horizontal: boolean, speed: number, length: number, color: string }[] = [];
    
    // Add random shooting lines
    const addLine = () => {
      const isHorizontal = Math.random() > 0.5;
      lines.push({
        x: isHorizontal ? -100 : Math.floor(Math.random() * (width / gridSize)) * gridSize,
        y: isHorizontal ? Math.floor(Math.random() * (height / gridSize)) * gridSize : -100,
        horizontal: isHorizontal,
        speed: 2 + Math.random() * 3,
        length: 50 + Math.random() * 150,
        color: `rgba(255, 255, 255, ${0.1 + Math.random() * 0.4})`
      });
    };

    const interval = setInterval(addLine, 200);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw static grid (subtle)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      
      for(let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for(let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw shooting lines
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i];
        
        const gradient = ctx.createLinearGradient(
          line.horizontal ? line.x : line.x,
          line.horizontal ? line.y : line.y,
          line.horizontal ? line.x + line.length : line.x,
          line.horizontal ? line.y : line.y + line.length
        );
        gradient.addColorStop(0, 'rgba(255,255,255,0)');
        gradient.addColorStop(0.5, line.color);
        gradient.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        if (line.horizontal) {
          ctx.moveTo(line.x, line.y);
          ctx.lineTo(line.x + line.length, line.y);
          line.x += line.speed;
          if (line.x > width) lines.splice(i, 1);
        } else {
          ctx.moveTo(line.x, line.y);
          ctx.lineTo(line.x, line.y + line.length);
          line.y += line.speed;
          if (line.y > height) lines.splice(i, 1);
        }
        ctx.stroke();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

const MumbaiSilhouette = () => (
  <div className="absolute bottom-0 left-0 right-0 w-full h-32 md:h-48 z-0 pointer-events-none opacity-20 select-none overflow-hidden">
    <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
       <defs>
         <linearGradient id="skyline-fade" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stopColor="white" stopOpacity="0.8" />
           <stop offset="100%" stopColor="white" stopOpacity="0" />
         </linearGradient>
       </defs>
       {/* Sea Link Pylons */}
       <path d="M300 200 L300 50 L310 50 L310 200" fill="white" />
       <path d="M600 200 L600 80 L610 80 L610 200" fill="white" />
       
       {/* Cables */}
       <path d="M305 50 L150 200" stroke="white" strokeWidth="1" />
       <path d="M305 50 L200 200" stroke="white" strokeWidth="1" />
       <path d="M305 50 L250 200" stroke="white" strokeWidth="1" />
       <path d="M305 50 L360 200" stroke="white" strokeWidth="1" />
       <path d="M305 50 L410 200" stroke="white" strokeWidth="1" />
       <path d="M305 50 L460 200" stroke="white" strokeWidth="1" />
       
       <path d="M605 80 L500 200" stroke="white" strokeWidth="1" />
       <path d="M605 80 L550 200" stroke="white" strokeWidth="1" />
       <path d="M605 80 L660 200" stroke="white" strokeWidth="1" />
       <path d="M605 80 L710 200" stroke="white" strokeWidth="1" />
       
       {/* Gateway of India Arch (Abstract) */}
       <path d="M900 200 L900 120 L920 120 L920 140 L960 140 L960 120 L980 120 L980 200" fill="white" />
       
       {/* Other buildings */}
       <rect x="800" y="160" width="30" height="40" fill="white" />
       <rect x="840" y="140" width="20" height="60" fill="white" />
       <rect x="1000" y="100" width="40" height="100" fill="white" />
       
       {/* Ground/Sea Line */}
       <rect x="0" y="198" width="1200" height="2" fill="white" />
    </svg>
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-black">
      <ShootingGrid />
      <MumbaiSilhouette />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm font-mono text-gray-300">Technical Team of SIESGST presents</span>
          </div>
          
          <div className="flex justify-center mb-12 transform hover:scale-105 transition-transform duration-500">
            {/* Logo Recreation - Scalable SVG/CSS implementation */}
            <div className="flex items-center justify-center gap-1 select-none">
                <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white">BYTEC</span>
                <div className="relative w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 -mt-2 md:-mt-4">
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        <defs>
                            <linearGradient id="tentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6366f1" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        {/* Tent Shape - Stylized A */}
                        <path 
                            d="M50 5 L90 95 H10 L50 5Z" 
                            fill="url(#tentGradient)" 
                            className="drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                        />
                         {/* Subtle darker shade for dimension */}
                         <path d="M50 5 L90 95 L50 95 Z" fill="rgba(0,0,0,0.2)" />
                         
                        {/* Binary Code */}
                        <text x="50" y="55" fontSize="16" fill="white" textAnchor="middle" fontFamily="monospace" fontWeight="bold">1 0</text>
                        <text x="50" y="75" fontSize="16" fill="white" textAnchor="middle" fontFamily="monospace" fontWeight="bold">0 1</text>
                    </svg>
                </div>
                <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white">MP'25</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join 500+ developers, designers, and creators for 24 hours of coding, innovation, and chaos in the heart of Mumbai.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-mono text-gray-300 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800">
               <Calendar className="w-4 h-4" /> October 15-16, 2025
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800">
               <MapPin className="w-4 h-4" /> Mumbai, IN
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Apply to Hack
            </button>
            <button className="bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm">
              View Schedule
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}