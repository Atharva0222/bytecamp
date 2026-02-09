import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

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

// Separated components for parallax layers

const SeaLink = ({ y }: { y: MotionValue<number> }) => (
  <motion.div 
    style={{ y }} 
    className="absolute bottom-0 left-0 right-0 w-full h-48 md:h-64 z-0 pointer-events-none opacity-20 select-none overflow-hidden"
  >
    <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="none">
       {/* Sea Link Pylons - Background Layer */}
       <path d="M100 300 L100 50 L120 50 L120 300" fill="white" opacity="0.5" />
       <path d="M500 300 L500 80 L520 80 L520 300" fill="white" opacity="0.5" />
       
       {/* Cables */}
       <path d="M110 50 L-50 300" stroke="white" strokeWidth="1" opacity="0.3" />
       <path d="M110 50 L0 300" stroke="white" strokeWidth="1" opacity="0.3" />
       <path d="M110 50 L50 300" stroke="white" strokeWidth="1" opacity="0.3" />
       <path d="M110 50 L200 300" stroke="white" strokeWidth="1" opacity="0.3" />
       <path d="M110 50 L250 300" stroke="white" strokeWidth="1" opacity="0.3" />
       <path d="M110 50 L300 300" stroke="white" strokeWidth="1" opacity="0.3" />
       
       <path d="M510 80 L350 300" stroke="white" strokeWidth="1" opacity="0.3" />
       <path d="M510 80 L400 300" stroke="white" strokeWidth="1" opacity="0.3" />
       <path d="M510 80 L450 300" stroke="white" strokeWidth="1" opacity="0.3" />
       <path d="M510 80 L600 300" stroke="white" strokeWidth="1" opacity="0.3" />
       <path d="M510 80 L650 300" stroke="white" strokeWidth="1" opacity="0.3" />
       <path d="M510 80 L700 300" stroke="white" strokeWidth="1" opacity="0.3" />
    </svg>
  </motion.div>
);

const GatewayOfIndia = ({ y }: { y: MotionValue<number> }) => (
  <motion.div 
    style={{ y }} 
    className="absolute bottom-0 left-0 right-0 w-full h-40 md:h-56 z-0 pointer-events-none opacity-30 select-none overflow-hidden"
  >
    <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="none">
       {/* Gateway of India - Right Side */}
       <g transform="translate(800, 100) scale(1.5)">
          {/* Main Body */}
          <rect x="0" y="40" width="160" height="100" fill="white" />
          
          {/* Central Arch */}
          <path d="M50 140 L50 80 A 30 30 0 0 1 110 80 L110 140 Z" fill="black" />
          
          {/* Side Arches */}
          <path d="M15 140 L15 100 A 10 10 0 0 1 35 100 L35 140 Z" fill="black" opacity="0.8" />
          <path d="M125 140 L125 100 A 10 10 0 0 1 145 100 L145 140 Z" fill="black" opacity="0.8" />
          
          {/* Turrets */}
          <rect x="0" y="30" width="20" height="10" fill="white" />
          <rect x="40" y="30" width="20" height="10" fill="white" />
          <rect x="100" y="30" width="20" height="10" fill="white" />
          <rect x="140" y="30" width="20" height="10" fill="white" />
          
          {/* Top Domes/Decor */}
          <path d="M0 30 L10 20 L20 30 Z" fill="white" />
          <path d="M40 30 L50 20 L60 30 Z" fill="white" />
          <path d="M100 30 L110 20 L120 30 Z" fill="white" />
          <path d="M140 30 L150 20 L160 30 Z" fill="white" />

          {/* Base Line */}
          <rect x="-500" y="138" width="2000" height="4" fill="white" opacity="0.8" />
       </g>
    </svg>
  </motion.div>
);

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const textY = useTransform(scrollY, [0, 500], [0, 200]); // Text moves somewhat fast
  const gatewayY = useTransform(scrollY, [0, 500], [0, 100]); // Gateway moves slower (mid-ground)
  const sealinkY = useTransform(scrollY, [0, 500], [0, 50]);  // Sealink moves slowest (background)
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-black">
      <ShootingGrid />
      
      {/* Background Layers with Parallax */}
      <SeaLink y={sealinkY} />
      <GatewayOfIndia y={gatewayY} />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8"
      >
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
      </motion.div>
      
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