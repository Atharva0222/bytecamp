import React from 'react';
import { Cloud, Zap, Clock, ShieldCheck, Database, Layout, RotateCcw } from 'lucide-react';
import RadialChart from './d3/RadialChart';

export default function Excellence() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Cybersecurity Excellence</h2>
        <p className="text-gray-400 text-lg">Explore our range of services designed to protect your <span className="text-white font-bold">digital assets.</span></p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-semibold border border-blue-800">Enterprise-Grade Security</span>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Seamless Cloud Integration for Your Business
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Leverage the power of cloud technology to scale your operations, enhance security, and drive innovation. Experience efficiency like never before.
            </p>
            <div className="flex gap-6 text-sm text-gray-400 font-medium">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> 99.9% Uptime</span>
              <span className="flex items-center gap-2"><Database className="w-4 h-4" /> Secured Storage</span>
              <span className="flex items-center gap-2"><Layout className="w-4 h-4" /> Scalable Solutions</span>
            </div>
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                <Database className="w-4 h-4" /> Over 1TB Processed Data Daily
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
             {/* Cloud Visual */}
             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl rounded-full"></div>
             <img 
               src="https://picsum.photos/id/10/800/600" 
               alt="Cloud" 
               className="relative z-10 rounded-2xl opacity-60 mix-blend-screen grayscale contrast-125"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>
          </div>
        </div>

        {/* Feature 2 - React */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-semibold border border-cyan-800">Powered by React</span>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Empowering Interfaces with React
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Leverage the power of React to build dynamic, responsive, and user-centric interfaces. Experience seamless performance and unparalleled flexibility for your applications.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <span className="block text-2xl font-bold text-white mb-1">&lt;/&gt;</span>
                  <span className="text-sm text-gray-400">10,000+ Components Rendered</span>
               </div>
               <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                  <span className="text-sm text-gray-400">Optimized Performance</span>
               </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-400 font-medium pt-2">
              <span className="flex items-center gap-2"><RotateCcw className="w-4 h-4" /> Seamless Interactivity</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Powered by React Ecosystem</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[400px]">
             {/* React Logo Simulation */}
             <div className="relative w-64 h-64 animate-[spin_10s_linear_infinite]">
                <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-[100%] rotate-0 transform scale-x-50"></div>
                <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-[100%] rotate-60 transform scale-x-50"></div>
                <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-[100%] -rotate-60 transform scale-x-50"></div>
                <div className="absolute inset-0 m-auto w-6 h-6 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
             </div>
          </div>
        </div>

        {/* Feature 3 - Data */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-900/30 text-orange-400 text-xs font-semibold border border-orange-800">24/7 Data Tracking</span>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Real-Time Data Insights
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Track and visualize your data in real-time with our dynamic radar system. Stay informed and make faster decisions with accurate and actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex-1">
                 <div className="text-2xl font-bold text-white mb-1">0.01s</div>
                 <div className="text-xs text-gray-500 uppercase tracking-wide">Response Time</div>
              </div>
              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex-1">
                 <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-white font-bold">Live</span>
                 </div>
                 <div className="text-xs text-gray-500 uppercase tracking-wide">Updates</div>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-400 font-medium">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Always Synchronized</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> 100+ Integrated APIs</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center h-[400px]">
            <RadialChart />
          </div>
        </div>
      </div>
    </section>
  );
}