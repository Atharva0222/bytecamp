import React from 'react';

export default function Contact() {
  return (
    <section className="relative z-10 py-24 bg-gradient-to-b from-black to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Form Side */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Jane Smith" 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="jane@framer.com" 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-gray-300">Your Company</label>
              <input 
                type="text" 
                id="company" 
                placeholder="Company Name" 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Selection</label>
              <div className="relative">
                <select 
                  id="service" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white appearance-none focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option className="bg-black">Select...</option>
                  <option className="bg-black">Security Audit</option>
                  <option className="bg-black">Consulting</option>
                  <option className="bg-black">Pentesting</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Submit
            </button>
          </form>
        </div>

        {/* Map Side */}
        <div className="h-full min-h-[400px] w-full bg-gray-800 rounded-2xl overflow-hidden relative border border-white/10">
          <img 
            src="https://picsum.photos/id/1015/800/800?grayscale" 
            alt="Map Location" 
            className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute"></div>
             <div className="w-4 h-4 bg-red-500 rounded-full relative border-2 border-white shadow-xl"></div>
          </div>
          
          {/* Fake Map UI overlay */}
          <div className="absolute top-4 left-4 bg-white text-black p-2 rounded shadow text-xs font-bold">
             51°21'31.0"N 8°47'19.0"E
          </div>
          <div className="absolute bottom-4 right-4 bg-white/90 text-black px-2 py-1 rounded shadow text-[10px]">
             Leaflet | OpenStreetMap
          </div>
        </div>
      </div>
    </section>
  );
}