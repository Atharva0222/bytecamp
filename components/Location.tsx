import React from 'react';
import { MapPin, Mail, Globe } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <div className="space-y-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white">Where It Happens</h2>
          <p className="text-gray-400 text-lg">
            Join us at the SIES Graduate School of Technology in Nerul, Navi Mumbai. A vibrant campus ready to host 24 hours of non-stop innovation.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-black/50 border border-white/5 rounded-2xl">
              <MapPin className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold mb-1">SIES GST</h3>
                <p className="text-gray-400">Sri Chandrasekarendra Saraswati Vidyapuram,<br/>Sector-V, Nerul, Navi Mumbai,<br/>Maharashtra 400706</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-black/50 border border-white/5 rounded-2xl">
              <Mail className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold mb-1">Contact Us</h3>
                <p className="text-gray-400">hello@bytecamp.in<br/>+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[400px] lg:h-auto w-full bg-gray-800 rounded-2xl overflow-hidden relative border border-white/10">
          {/* Simulated Map centered on Navi Mumbai */}
          <img 
            src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/73.0180,19.0434,14,0/800x600?access_token=pk.eyJ1IjoiZGVtbyIsImEiOiJja2VuaGZ5ZzQyN20wMnJ0ZzZ4YjJ5bXF6In0.0" 
            alt="Map Location - SIES GST" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if mapbox static image fails
              e.currentTarget.src = "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2535&auto=format&fit=crop";
              e.currentTarget.className = "w-full h-full object-cover grayscale opacity-50";
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute"></div>
             <div className="w-4 h-4 bg-blue-500 rounded-full relative border-2 border-white shadow-xl"></div>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-xs text-white">
            Navi Mumbai
          </div>
        </div>
      </div>
    </section>
  );
}