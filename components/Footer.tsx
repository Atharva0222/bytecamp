import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-300 flex items-center justify-center">
             <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-lg font-bold tracking-wider">PHOTON</span>
        </div>

        <nav className="flex gap-8">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-6">
           <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
           <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
           <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
        </div>

        <div className="text-center text-xs text-gray-500 space-y-2">
          <p>© 2026 Photon, Inc. All rights reserved.</p>
          <p>Made by Ahmed Kilic. Built with Framer</p>
        </div>
      </div>
    </footer>
  );
}